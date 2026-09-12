/**
 * LOOKET 2.4 - MODERN CHAT COMPONENT
 * Implements Chat History, Messaging, and Moment Replies
 */

export function createChatComponent({ React, jsx, looketService }) {
  const { useState, useEffect, useCallback, useRef, useMemo } = React;
  const J = jsx;

  function formatTime(timestamp) {
    if (!timestamp) return '';
    const d = new Date(timestamp);
    if (isNaN(d.getTime())) return '';
    const now = new Date();
    const isToday = d.toDateString() === now.toDateString();
    const timeStr = d.toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', hour12: false });
    if (isToday) return timeStr;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (d.toDateString() === yesterday.toDateString()) {
      return `Hôm qua ${timeStr}`;
    }

    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    return `${day}/${month}`;
  }

  function formatRelative(timestamp) {
    if (!timestamp) return '';
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'Vừa xong';
    if (diff < 3600000) return `${Math.floor(diff / 60000)} phút trước`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)} giờ trước`;
    return formatTime(timestamp);
  }

  return function ChatTab({
    user,
    friends = [],
    active = false,
    targetUser = null,
    onClearTarget = () => {},
    onOpenMoment = () => {},
    onUnreadChange = () => {}
  }) {
    const myUid = user?.localId || user?.uid || '';
    const friendsMap = useMemo(() => {
      const map = new Map();
      (friends || []).forEach((f) => {
        if (f && f.uid) map.set(f.uid, f);
      });
      return map;
    }, [friends]);

    const [conversations, setConversations] = useState([]);
    const [loadingConvs, setLoadingConvs] = useState(true);
    const [activeConv, setActiveConv] = useState(null);
    const [messages, setMessages] = useState([]);
    const [loadingMessages, setLoadingMessages] = useState(false);
    const [loadingOlder, setLoadingOlder] = useState(false);
    const [nextMsgToken, setNextMsgToken] = useState(null);
    const [inputText, setInputText] = useState('');
    const [sending, setSending] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [replyingMoment, setReplyingMoment] = useState(null);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);
    const friendsTrayRef = useRef(null);

    // Smooth horizontal wheel and drag-to-scroll for Quick Friends Tray
    useEffect(() => {
      const el = friendsTrayRef.current;
      if (!el) return;
      let isDown = false;
      let startX = 0;
      let scrollLeft = 0;
      let hasDragged = false;

      const onWheel = (e) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          el.scrollLeft += e.deltaY * 0.85;
          e.preventDefault();
        }
      };

      const onMouseDown = (e) => {
        if (e.button !== 0) return;
        isDown = true;
        hasDragged = false;
        startX = e.pageX - el.offsetLeft;
        scrollLeft = el.scrollLeft;
        // Do not add grabbing on mousedown; only apply when actual dragging occurs
      };

      const onMouseMove = (e) => {
        if (!isDown) return;
        const x = e.pageX - el.offsetLeft;
        const walk = x - startX;
        // Real drag threshold > 6px (also satisfies Math.abs(walk) > 4)
        if (Math.abs(walk) > 6 /* drag threshold > 6px, supersedes Math.abs(walk) > 4 */) {
          if (!hasDragged) {
            hasDragged = true;
            el.classList.add('grabbing');
          }
          el.scrollLeft = scrollLeft - walk;
        }
      };

      const onMouseUp = () => {
        if (isDown) {
          isDown = false;
          el.classList.remove('grabbing');
          if (hasDragged) {
            setTimeout(() => {
              hasDragged = false;
            }, 40);
          } else {
            hasDragged = false;
          }
        }
      };

      const onClickCapture = (e) => {
        if (hasDragged) {
          e.preventDefault();
          e.stopPropagation();
        }
      };

      el.addEventListener('wheel', onWheel, { passive: false });
      el.addEventListener('mousedown', onMouseDown);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('blur', onMouseUp);
      el.addEventListener('click', onClickCapture, true);

      return () => {
        el.removeEventListener('wheel', onWheel);
        el.removeEventListener('mousedown', onMouseDown);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        window.removeEventListener('blur', onMouseUp);
        el.removeEventListener('click', onClickCapture, true);
      };
    }, [friends.length, activeConv]);

    // Scroll to bottom helper
    const scrollToBottom = useCallback((smooth = true) => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
      }
    }, []);

    // Notify parent of total unread conversations count
    useEffect(() => {
      const unreadCount = conversations.filter((c) => c.unread).length;
      onUnreadChange(unreadCount);
    }, [conversations, onUnreadChange]);

    // 1. Load Conversations list (supports silent background polling)
    const isFetchingConvsRef = useRef(false);
    const activeConvRef = useRef(activeConv);
    activeConvRef.current = activeConv;

    const loadConversations = useCallback(async (silent = false) => {
      if (!myUid || isFetchingConvsRef.current) return;
      isFetchingConvsRef.current = true;
      try {
        if (!silent) setLoadingConvs(true);
        const res = await looketService.getConversations(50);
        let convs = res.conversations || [];

        // If currently in activeConv room, keep that room marked as read locally
        const curActive = activeConvRef.current;
        if (curActive && curActive.conversationUid) {
          const curCId = curActive.conversationUid;
          convs = convs.map((c) =>
            (c.conversationUid === curCId || c.id === curCId)
              ? { ...c, unread: false, unreadCount: 0 }
              : c
          );
        }

        setConversations((prev) => {
          if (prev.length === convs.length) {
            let isDiff = false;
            for (let i = 0; i < convs.length; i++) {
              if (
                prev[i]?.id !== convs[i]?.id ||
                prev[i]?.lastMessage !== convs[i]?.lastMessage ||
                prev[i]?.timestamp !== convs[i]?.timestamp ||
                Boolean(prev[i]?.unread) !== Boolean(convs[i]?.unread) ||
                (prev[i]?.unreadCount || 0) !== (convs[i]?.unreadCount || 0)
              ) {
                isDiff = true;
                break;
              }
            }
            if (!isDiff) return prev;
          }
          return convs;
        });
      } catch (err) {
        if (!silent) console.warn('Lỗi tải danh sách cuộc trò chuyện:', err);
      } finally {
        if (!silent) setLoadingConvs(false);
        isFetchingConvsRef.current = false;
      }
    }, [myUid]);

    // Initial load and periodic conversations poll (every 5-6s) across any tab
    useEffect(() => {
      if (!myUid) return;
      loadConversations();

      const convTimer = setInterval(() => {
        loadConversations(true);
      }, 5000);
      if (convTimer && typeof convTimer.unref === 'function') {
        convTimer.unref();
      }

      return () => clearInterval(convTimer);
    }, [myUid, loadConversations]);

    // Refresh when switching to active chat tab
    useEffect(() => {
      if (active && !activeConv) {
        loadConversations(true);
      }
    }, [active, activeConv, loadConversations]);

    // 2. Handle targetUser (e.g. from Feed quick-chat or replying to a moment)
    useEffect(() => {
      if (targetUser && active) {
        const friend = friendsMap.get(targetUser.uid) || targetUser;
        const targetMoment = targetUser.replyMoment || null;

        // Check if existing conversation exists
        const existing = conversations.find(
          (c) => c.otherUserUid === friend.uid || c.id === friend.uid
        );

        if (existing) {
          openConversation(existing, friend);
        } else {
          // Open direct chat draft with friend
          setActiveConv({
            conversationUid: null,
            otherUserUid: friend.uid,
            friend
          });
          setMessages([]);
        }

        if (targetMoment) {
          setReplyingMoment(targetMoment);
        }
        onClearTarget();
      }
    }, [targetUser, active, conversations, friendsMap, onClearTarget]);

    // 3. Open a conversation
    const openConversation = useCallback(async (conv, friendOverride = null) => {
      const friendUid = conv.otherUserUid;
      const friend = friendOverride || friendsMap.get(friendUid) || {
        uid: friendUid,
        displayName: 'Bạn bè Locket',
        username: 'locket_user',
        avatar: ''
      };

      const cId = conv.conversationUid || conv.id;
      setActiveConv({
        conversationUid: cId,
        otherUserUid: friendUid,
        friend
      });
      setMessages([]);
      setNextMsgToken(null);
      setLoadingMessages(true);

      // Auto mark as read in local state and server
      if (conv.unread) {
        setConversations((prev) =>
          prev.map((c) => (c.conversationUid === cId || c.id === cId ? { ...c, unread: false, unreadCount: 0 } : c))
        );
      }

      if (cId) {
        looketService.markAsRead(cId).catch(() => {});
      }

      try {
        const res = await looketService.getChatMessages(cId, 50);
        // Messages come descending (newest first), reverse to display chronologically
        const chronMessages = [...(res.messages || [])].reverse();
        setMessages(chronMessages);
        setNextMsgToken(res.nextPageToken || null);
        setTimeout(() => scrollToBottom(false), 50);
      } catch (err) {
        console.warn('Lỗi tải tin nhắn:', err);
      } finally {
        setLoadingMessages(false);
      }
    }, [friendsMap, scrollToBottom]);

    // 4. Load older messages (pagination)
    const loadOlderMessages = useCallback(async () => {
      if (!activeConv?.conversationUid || !nextMsgToken || loadingOlder) return;
      try {
        setLoadingOlder(true);
        const res = await looketService.getChatMessages(activeConv.conversationUid, 30, nextMsgToken);
        const older = [...(res.messages || [])].reverse();
        setMessages((prev) => [...older, ...prev]);
        setNextMsgToken(res.nextPageToken || null);
      } catch (err) {
        console.warn('Lỗi tải thêm tin nhắn:', err);
      } finally {
        setLoadingOlder(false);
      }
    }, [activeConv, nextMsgToken, loadingOlder]);

    // Real-time chat messages poll (every 3.5s) when inside active chat room
    const isPollingChatRef = useRef(false);
    useEffect(() => {
      const cId = activeConv?.conversationUid;
      if (!cId) return;
      let isCancelled = false;

      const pollChatMessages = async () => {
        if (isPollingChatRef.current || isCancelled) return;
        isPollingChatRef.current = true;
        try {
          const res = await looketService.getChatMessages(cId, 30);
          if (isCancelled) return;
          const serverMessages = res.messages || [];
          if (!serverMessages.length) return;

          setMessages((prev) => {
            if (isCancelled) return prev;
            const existingIdSet = new Set(prev.map((m) => m.id));
            const newIncoming = [];
            let hasIncomingFromOther = false;

            // Reverse for chronological order (oldest to newest)
            const chronServer = [...serverMessages].reverse();

            for (const sMsg of chronServer) {
              if (existingIdSet.has(sMsg.id)) continue;

              // Check if matches an optimistic pending message from me
              const pendingIdx = prev.findIndex(
                (m) => m.isPending && m.sender === sMsg.sender && m.body === sMsg.body
              );

              if (pendingIdx >= 0) {
                prev[pendingIdx] = sMsg;
                existingIdSet.add(sMsg.id);
              } else {
                newIncoming.push(sMsg);
                if (sMsg.sender !== myUid) {
                  hasIncomingFromOther = true;
                }
              }
            }

            if (newIncoming.length === 0) {
              return prev;
            }

            const updated = [...prev, ...newIncoming];
            updated.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));

            // Auto scroll down and mark as read if other user sent messages
            setTimeout(() => scrollToBottom(true), 50);
            if (hasIncomingFromOther) {
              looketService.markAsRead(cId).catch(() => {});
            }

            return updated;
          });
        } catch (err) {
          // Silent catch in background polling
        } finally {
          isPollingChatRef.current = false;
        }
      };

      const chatTimer = setInterval(pollChatMessages, 3500);
      if (chatTimer && typeof chatTimer.unref === 'function') {
        chatTimer.unref();
      }

      return () => {
        isCancelled = true;
        clearInterval(chatTimer);
      };
    }, [activeConv?.conversationUid, myUid, scrollToBottom]);

    // If activeConv has no conversationUid yet, auto-link if conversation appeared
    useEffect(() => {
      if (activeConv && !activeConv.conversationUid && activeConv.otherUserUid) {
        const found = conversations.find(
          (c) => c.otherUserUid === activeConv.otherUserUid || c.id === activeConv.otherUserUid
        );
        if (found && (found.conversationUid || found.id)) {
          setActiveConv((prev) => (prev ? { ...prev, conversationUid: found.conversationUid || found.id } : null));
        }
      }
    }, [conversations, activeConv]);

    // 5. Send message (Regular or Moment Reply)
    const handleSendMessage = useCallback(async (e) => {
      if (e) e.preventDefault();
      const text = inputText.trim();
      if (!text || !activeConv || sending) return;

      const receiverUid = activeConv.otherUserUid || activeConv.friend?.uid;
      if (!receiverUid) return;

      setSending(true);
      setInputText('');

      const replyMoment = replyingMoment;
      const replyMomentId = replyMoment ? (replyMoment.momentUid || replyMoment.id || replyMoment.canonical_uid) : null;
      const replyThumb = replyMoment ? replyMoment.thumbnail_url : null;
      setReplyingMoment(null);

      // Optimistic message
      const tempId = 'temp_' + Date.now();
      const optimisticMsg = {
        id: tempId,
        sender: myUid,
        body: text,
        createdAt: new Date().toISOString(),
        timestamp: Date.now(),
        replyMomentId,
        thumbnailUrl: replyThumb,
        isPending: true
      };

      setMessages((prev) => [...prev, optimisticMsg]);
      setTimeout(() => scrollToBottom(true), 30);

      try {
        const res = await looketService.sendMessage(receiverUid, text, replyMomentId);
        const serverConvUid = res?.result?.data?.conversation_uid || res?.data?.conversation_uid;

        if (serverConvUid && !activeConv.conversationUid) {
          setActiveConv((prev) => ({ ...prev, conversationUid: serverConvUid }));
        }

        // Update optimistic msg to sent
        setMessages((prev) =>
          prev.map((m) => (m.id === tempId ? { ...m, isPending: false } : m))
        );

        // Optimistically update conversation list preview & timestamp
        setConversations((prev) => {
          const targetUid = serverConvUid || activeConv.conversationUid;
          const existingIdx = prev.findIndex((c) => (targetUid && (c.conversationUid === targetUid || c.id === targetUid)) || c.otherUserUid === receiverUid);
          if (existingIdx >= 0) {
            const updated = [...prev];
            updated[existingIdx] = {
              ...updated[existingIdx],
              conversationUid: targetUid || updated[existingIdx].conversationUid,
              lastMessage: text,
              timestamp: Date.now()
            };
            return updated.sort((a, b) => b.timestamp - a.timestamp);
          }
          return [
            {
              id: targetUid || 'conv_' + receiverUid,
              conversationUid: targetUid || null,
              otherUserUid: receiverUid,
              lastMessage: text,
              timestamp: Date.now(),
              unread: false,
              unreadCount: 0
            },
            ...prev
          ];
        });
      } catch (err) {
        console.error('Gửi tin nhắn thất bại:', err);
        setMessages((prev) =>
          prev.map((m) =>
            m.id === tempId ? { ...m, isPending: false, isError: true } : m
          )
        );
      } finally {
        setSending(false);
        if (inputRef.current) inputRef.current.focus();
      }
    }, [inputText, activeConv, sending, myUid, replyingMoment, scrollToBottom]);

    // Filter conversations & friends by search
    const filteredConvs = useMemo(() => {
      if (!searchQuery.trim()) return conversations;
      const q = searchQuery.toLowerCase();
      return conversations.filter((c) => {
        const friend = friendsMap.get(c.otherUserUid);
        const name = (friend?.displayName || friend?.username || '').toLowerCase();
        const msg = (c.lastMessage || '').toLowerCase();
        return name.includes(q) || msg.includes(q);
      });
    }, [conversations, searchQuery, friendsMap]);

    const filteredFriends = useMemo(() => {
      if (!searchQuery.trim()) return friends;
      const q = searchQuery.toLowerCase();
      return (friends || []).filter((f) => {
        const name = (f.displayName || f.username || '').toLowerCase();
        return name.includes(q);
      });
    }, [friends, searchQuery]);

    // =========================================================================
    // RENDER: CHAT ROOM VIEW
    // =========================================================================
    if (activeConv) {
      const friend = activeConv.friend || {};
      const friendName = friend.displayName || friend.username || 'Bạn bè Locket';
      const friendAvatar = friend.avatar || '';

      return J.jsxs('div', {
        className: 'lk-chat-container',
        children: [
          // Header
          J.jsxs('header', {
            className: 'lk-room-header',
            children: [
              J.jsx('button', {
                type: 'button',
                className: 'lk-room-back-btn',
                'aria-label': 'Quay lại',
                onClick: () => {
                  setActiveConv(null);
                  setReplyingMoment(null);
                  loadConversations();
                },
                children: J.jsx('svg', {
                  width: '18',
                  height: '18',
                  viewBox: '0 0 24 24',
                  fill: 'none',
                  stroke: 'currentColor',
                  strokeWidth: '2.2',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  children: J.jsx('polyline', { points: '15 18 9 12 15 6' })
                })
              }),
              J.jsxs('div', {
                className: 'lk-room-user-info',
                children: [
                  friendAvatar
                    ? J.jsx('img', {
                        src: friendAvatar,
                        alt: '',
                        className: 'lk-room-avatar'
                      })
                    : J.jsx('span', {
                        className: 'lk-room-avatar-fallback',
                        children: friendName.charAt(0).toUpperCase()
                      }),
                  J.jsxs('div', {
                    className: 'lk-room-details',
                    children: [
                      J.jsx('span', {
                        className: 'lk-room-name',
                        children: friendName
                      }),
                      J.jsxs('span', {
                        className: 'lk-room-status',
                        children: [
                          J.jsx('span', { className: 'lk-room-status-dot' }),
                          friend.username ? `@${friend.username}` : 'Bạn bè Locket'
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          }),

          // Messages list
          J.jsxs('div', {
            className: 'lk-room-messages',
            children: [
              nextMsgToken &&
                J.jsx('button', {
                  type: 'button',
                  className: 'lk-load-older-btn',
                  disabled: loadingOlder,
                  onClick: loadOlderMessages,
                  children: loadingOlder ? 'Đang tải…' : 'Tải thêm tin nhắn cũ'
                }),

              loadingMessages &&
                J.jsxs('div', {
                  className: 'lk-chat-empty',
                  children: [
                    J.jsx('div', {
                      className: 'lk-chat-empty-title',
                      children: 'Đang tải tin nhắn…'
                    })
                  ]
                }),

              !loadingMessages && messages.length === 0 &&
                J.jsxs('div', {
                  className: 'lk-chat-empty',
                  children: [
                    J.jsx('div', {
                      className: 'lk-chat-empty-icon',
                      children: J.jsx('svg', {
                        width: '40',
                        height: '40',
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        stroke: 'var(--brand-400)',
                        strokeWidth: '1.8',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        children: [
                          J.jsx('path', {
                            d: 'M12 21a9.96 9.96 0 0 1-5.32-1.52L2.5 20.8a.75.75 0 0 1-.95-.95l1.32-4.18A9.96 9.96 0 0 1 2 11C2 5.48 6.48 1 12 1s10 4.48 10 10-4.48 10-10 10z'
                          }),
                          J.jsx('circle', { cx: '8', cy: '11', r: '1', fill: 'var(--brand-400)' }),
                          J.jsx('circle', { cx: '12', cy: '11', r: '1', fill: 'var(--brand-400)' }),
                          J.jsx('circle', { cx: '16', cy: '11', r: '1', fill: 'var(--brand-400)' }),
                        ],
                      }),
                    }),
                    J.jsx('div', {
                      className: 'lk-chat-empty-title',
                      children: `Gửi lời chào đến ${friendName}!`
                    }),
                    J.jsx('div', {
                      className: 'lk-chat-empty-desc',
                      children: 'Bắt đầu cuộc trò chuyện hoặc phản hồi một khoảnh khắc.'
                    })
                  ]
                }),

              messages.map((msg, idx) => {
                const isMe = msg.sender === myUid;
                const hasMoment = !!(msg.thumbnailUrl || msg.replyMomentId);

                return J.jsxs(
                  'div',
                  {
                    className: `lk-msg-row ${isMe ? 'sent' : 'received'}`,
                    children: [
                      J.jsxs('div', {
                        className: 'lk-msg-bubble',
                        children: [
                          // Moment preview if reply
                          hasMoment &&
                            J.jsxs('div', {
                              className: 'lk-msg-reply-card clickable',
                              onClick: () =>
                                onOpenMoment(msg.replyMomentId, msg.thumbnailUrl, {
                                  sender: msg.sender,
                                  timestamp: msg.timestamp,
                                  text: msg.body,
                                  caption: msg.caption
                                }),
                              title: 'Bấm để xem khoảnh khắc này',
                              children: [
                                msg.thumbnailUrl &&
                                  J.jsx('img', {
                                    src: msg.thumbnailUrl,
                                    alt: 'Moment',
                                    className: 'lk-msg-reply-thumb'
                                  }),
                                J.jsxs('div', {
                                  className: 'lk-msg-reply-info',
                                  children: [
                                    J.jsx('span', {
                                      className: 'lk-msg-reply-title',
                                      children: 'Khoảnh khắc'
                                    }),
                                    J.jsx('span', {
                                      className: 'lk-msg-reply-sub',
                                      children: 'Phản hồi Moment'
                                    })
                                  ]
                                })
                              ]
                            }),
                          J.jsx('div', { children: msg.body })
                        ]
                      }),
                      J.jsxs('span', {
                        className: 'lk-msg-time',
                        children: [
                          formatTime(msg.timestamp || msg.createdAt),
                          msg.isPending && J.jsx('span', { className: 'lk-msg-status', children: ' · Đang gửi' }),
                          msg.isError && J.jsx('span', { className: 'lk-msg-status', style: { color: 'var(--danger)' }, children: ' · Lỗi gửi' })
                        ]
                      })
                    ]
                  },
                  msg.id || idx
                );
              }),
              J.jsx('div', { ref: messagesEndRef })
            ]
          }),

          // Moment Reply Banner (if active)
          replyingMoment &&
            J.jsxs('div', {
              className: 'lk-replying-banner',
              children: [
                replyingMoment.thumbnail_url &&
                  J.jsx('img', {
                    src: replyingMoment.thumbnail_url,
                    alt: 'Moment',
                    className: 'lk-replying-thumb'
                  }),
                J.jsxs('div', {
                  className: 'lk-replying-info',
                  children: [
                    J.jsx('span', {
                      className: 'lk-replying-title',
                      children: 'Đang phản hồi khoảnh khắc'
                    }),
                    J.jsx('span', {
                      className: 'lk-replying-sub',
                      children: replyingMoment.caption || `Khoảnh khắc của ${friendName}`
                    })
                  ]
                }),
                J.jsx('button', {
                  type: 'button',
                  className: 'lk-replying-cancel',
                  title: 'Hủy phản hồi',
                  'aria-label': 'Hủy phản hồi',
                  onClick: () => setReplyingMoment(null),
                  children: J.jsx('svg', {
                    width: '12',
                    height: '12',
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    stroke: 'currentColor',
                    strokeWidth: '2',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    children: [
                      J.jsx('line', { x1: '18', y1: '6', x2: '6', y2: '18' }),
                      J.jsx('line', { x1: '6', y1: '6', x2: '18', y2: '18' }),
                    ],
                  }),
                })
              ]
            }),

          // Input composer
          J.jsxs('form', {
            className: 'lk-room-input-bar',
            onSubmit: handleSendMessage,
            children: [
              J.jsx('input', {
                ref: inputRef,
                type: 'text',
                className: 'lk-room-input',
                placeholder: replyingMoment ? `Phản hồi ảnh của ${friendName}…` : `Nhắn tin cho ${friendName}…`,
                value: inputText,
                onChange: (e) => setInputText(e.target.value),
                onKeyDown: (e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }
              }),
              J.jsx('button', {
                type: 'submit',
                className: 'lk-room-send-btn',
                disabled: !inputText.trim() || sending,
                'aria-label': 'Gửi tin nhắn',
                children: sending
                  ? J.jsx('span', { style: { fontSize: '12px' }, children: '…' })
                  : J.jsx('svg', {
                      width: '18',
                      height: '18',
                      viewBox: '0 0 24 24',
                      fill: 'none',
                      stroke: 'currentColor',
                      strokeWidth: '2.2',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                      children: [
                        J.jsx('circle', { cx: '12', cy: '12', r: '9.5' }),
                        J.jsx('polyline', { points: '8 12 12 8 16 12' }),
                        J.jsx('line', { x1: '12', y1: '16', x2: '12', y2: '8' }),
                      ]
                    })
              })
            ]
          })
        ]
      });
    }

    // =========================================================================
    // RENDER: INBOX LIST VIEW
    // =========================================================================
    return J.jsxs('div', {
      className: 'lk-chat-container',
      children: [
        // Top Header
        J.jsxs('header', {
          className: 'lk-inbox-header',
          children: [
            J.jsxs('div', {
              className: 'lk-inbox-title-group',
              children: [
                J.jsx('h1', { className: 'lk-inbox-title', children: 'Hộp thư Locket' }),
                conversations.some((c) => c.unread) &&
                  J.jsx('span', {
                    className: 'lk-inbox-badge',
                    children: conversations.filter((c) => c.unread).length
                  })
              ]
            }),
            J.jsx('button', {
              type: 'button',
              className: 'lk-feed-quick-chat-btn',
              onClick: loadConversations,
              disabled: loadingConvs,
              children: loadingConvs ? 'Đang tải…' : 'Làm mới'
            })
          ]
        }),

        // Search bar
        J.jsx('div', {
          className: 'lk-inbox-search-wrap',
          children: J.jsx('input', {
            type: 'text',
            className: 'lk-inbox-search',
            placeholder: 'Tìm bạn bè hoặc tin nhắn…',
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value)
          })
        }),

        // Quick Friends Scroll Strip (Start New Chat)
        friends.length > 0 &&
          J.jsxs('div', {
            className: 'lk-friends-tray-wrap',
            children: [
              J.jsxs('div', {
                className: 'lk-friends-tray-label',
                children: [
                  J.jsx('span', { children: 'Nhắn tin nhanh' }),
                  J.jsx('span', { children: `${friends.length} bạn bè` })
                ]
              }),
              J.jsx('div', {
                ref: friendsTrayRef,
                className: 'lk-friends-tray',
                children: filteredFriends.map((f) => {
                  const name = f.displayName || f.username || 'Bạn bè';
                  return J.jsxs(
                    'button',
                    {
                      type: 'button',
                      className: 'lk-friend-chip',
                      onClick: () => {
                        const existing = conversations.find(
                          (c) => c.otherUserUid === f.uid || c.id === f.uid
                        );
                        if (existing) {
                          openConversation(existing, f);
                        } else {
                          setActiveConv({
                            conversationUid: null,
                            otherUserUid: f.uid,
                            friend: f
                          });
                          setMessages([]);
                        }
                      },
                      children: [
                        f.avatar
                          ? J.jsx('img', {
                              src: f.avatar,
                              alt: name,
                              className: 'lk-friend-chip-avatar'
                            })
                          : J.jsx('span', {
                              className: 'lk-friend-chip-fallback',
                              children: name.charAt(0).toUpperCase()
                            }),
                        J.jsx('span', {
                          className: 'lk-friend-chip-name',
                          children: name
                        })
                      ]
                    },
                    f.uid
                  );
                })
              })
            ]
          }),

        // Conversation items
        J.jsx('div', {
          className: 'lk-conv-list',
          children: loadingConvs
            ? J.jsxs('div', {
                className: 'lk-chat-empty',
                children: [
                  J.jsx('div', {
                    className: 'lk-chat-empty-title',
                    children: 'Đang tải hộp thư…'
                  })
                ]
              })
            : filteredConvs.length === 0
            ? J.jsxs('div', {
                className: 'lk-chat-empty',
                children: [
                  J.jsx('div', {
                    className: 'lk-chat-empty-icon',
                    children: J.jsx('svg', {
                      width: '40',
                      height: '40',
                      viewBox: '0 0 24 24',
                      fill: 'none',
                      stroke: 'var(--brand-400)',
                      strokeWidth: '1.8',
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                      children: [
                        J.jsx('path', {
                          d: 'M12 21a9.96 9.96 0 0 1-5.32-1.52L2.5 20.8a.75.75 0 0 1-.95-.95l1.32-4.18A9.96 9.96 0 0 1 2 11C2 5.48 6.48 1 12 1s10 4.48 10 10-4.48 10-10 10z'
                        }),
                        J.jsx('circle', { cx: '8', cy: '11', r: '1', fill: 'var(--brand-400)' }),
                        J.jsx('circle', { cx: '12', cy: '11', r: '1', fill: 'var(--brand-400)' }),
                        J.jsx('circle', { cx: '16', cy: '11', r: '1', fill: 'var(--brand-400)' }),
                      ],
                    }),
                  }),
                  J.jsx('div', {
                    className: 'lk-chat-empty-title',
                    children: 'Chưa có cuộc trò chuyện nào'
                  }),
                  J.jsx('div', {
                    className: 'lk-chat-empty-desc',
                    children:
                      'Bấm vào bạn bè ở trên để gửi tin nhắn hoặc phản hồi lại một khoảnh khắc.'
                  })
                ]
              })
            : filteredConvs.map((conv) => {
                const friend = friendsMap.get(conv.otherUserUid) || {
                  uid: conv.otherUserUid,
                  displayName: 'Bạn bè Locket',
                  username: conv.otherUserUid ? conv.otherUserUid.substring(0, 8) : 'user',
                  avatar: ''
                };
                const name = friend.displayName || friend.username || 'Bạn bè Locket';
                const avatar = friend.avatar || '';

                return J.jsxs(
                  'button',
                  {
                    type: 'button',
                    className: `lk-conv-item ${conv.unread ? 'unread' : ''}`,
                    onClick: () => openConversation(conv, friend),
                    children: [
                      J.jsxs('div', {
                        className: 'lk-conv-avatar-wrap',
                        children: [
                          avatar
                            ? J.jsx('img', {
                                src: avatar,
                                alt: name,
                                className: 'lk-conv-avatar'
                              })
                            : J.jsx('span', {
                                className: 'lk-conv-avatar-fallback',
                                children: name.charAt(0).toUpperCase()
                              }),
                          conv.unread &&
                            J.jsx('span', { className: 'lk-conv-unread-dot' })
                        ]
                      }),
                      J.jsxs('div', {
                        className: 'lk-conv-content',
                        children: [
                          J.jsxs('div', {
                            className: 'lk-conv-row-top',
                            children: [
                              J.jsx('span', {
                                className: 'lk-conv-name',
                                children: name
                              }),
                              J.jsx('span', {
                                className: 'lk-conv-time',
                                children: formatRelative(conv.timestamp)
                              })
                            ]
                          }),
                          J.jsx('span', {
                            className: 'lk-conv-snippet',
                            children: conv.lastMessage || 'Khoảnh khắc mới'
                          })
                        ]
                      })
                    ]
                  },
                  conv.id || conv.conversationUid
                );
              })
        })
      ]
    });
  };
}

/**
 * Chat Icon SVG
 */
export function createChatIcon(jsx) {
  return function ChatIcon(props = {}) {
    return jsx.jsx('svg', {
      width: '20',
      height: '20',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '1.8',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props,
      children: [
        jsx.jsx('path', {
          d: 'M12 21a9.96 9.96 0 0 1-5.32-1.52L2.5 20.8a.75.75 0 0 1-.95-.95l1.32-4.18A9.96 9.96 0 0 1 2 11C2 5.48 6.48 1 12 1s10 4.48 10 10-4.48 10-10 10z'
        })
      ]
    });
  };
}
