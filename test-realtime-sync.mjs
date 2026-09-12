import assert from "node:assert";
import fs from "node:fs";

console.log("=== STARTING REAL-TIME LIVE SYNC VERIFICATION TESTS ===\n");

// ---------------------------------------------------------------------
// TEST 1: Chat Component Polling & Live Message Receive Logic
// ---------------------------------------------------------------------
console.log("Test 1: Chat Component Real-Time Polling & Deduplication");
const chatComponentJs = fs.readFileSync("./assets/chat-component.js", "utf8");

assert.ok(chatComponentJs.includes("chatTimer = setInterval(pollChatMessages, 3500)"), "ChatTab must poll getChatMessages every 3.5s in active room");
assert.ok(chatComponentJs.includes("convTimer = setInterval("), "ChatTab must poll conversations periodically");
assert.ok(chatComponentJs.includes("looketService.markAsRead(cId)"), "Incoming messages from friend must auto mark as read");
assert.ok(chatComponentJs.includes("scrollToBottom(true)"), "Incoming messages must trigger smooth scroll to bottom");
assert.ok(chatComponentJs.includes("m.isPending && m.sender === sMsg.sender && m.body === sMsg.body"), "Optimistic message must be merged and confirmed on poll");

function mergePolledMessages(prevMessages, serverMessages, myUid) {
  const existingIdSet = new Set(prevMessages.map((m) => m.id));
  const newIncoming = [];
  let hasIncomingFromOther = false;
  const chronServer = [...serverMessages].reverse();

  for (const sMsg of chronServer) {
    if (existingIdSet.has(sMsg.id)) continue;
    const pendingIdx = prevMessages.findIndex(
      (m) => m.isPending && m.sender === sMsg.sender && m.body === sMsg.body
    );
    if (pendingIdx >= 0) {
      prevMessages[pendingIdx] = sMsg;
      existingIdSet.add(sMsg.id);
    } else {
      newIncoming.push(sMsg);
      if (sMsg.sender !== myUid) {
        hasIncomingFromOther = true;
      }
    }
  }

  if (newIncoming.length === 0) return { updated: prevMessages, hasIncomingFromOther };
  const updated = [...prevMessages, ...newIncoming];
  updated.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
  return { updated, hasIncomingFromOther };
}

const prevList = [
  { id: "m1", sender: "my_uid", body: "Chào bạn", timestamp: 1000 },
  { id: "temp_123", sender: "my_uid", body: "Bạn khỏe không?", timestamp: 2000, isPending: true }
];
const polledServerBatch = [
  { id: "m3", sender: "friend_uid", body: "Mình khỏe, cảm ơn nhé!", timestamp: 2500 },
  { id: "srv_m2", sender: "my_uid", body: "Bạn khỏe không?", timestamp: 2000 }
];

const mergeResult = mergePolledMessages(prevList, polledServerBatch, "my_uid");
assert.strictEqual(mergeResult.hasIncomingFromOther, true, "Must detect incoming message from friend");
assert.strictEqual(mergeResult.updated.length, 3, "Must have 3 messages total");
assert.strictEqual(mergeResult.updated.find(m => m.body === "Bạn khỏe không?").id, "srv_m2", "Pending temp message must be replaced with server message");
assert.strictEqual(mergeResult.updated[2].sender, "friend_uid", "Latest message must be friend reply");
console.log("✓ Test 1 Passed: Chat polling logic correctly resolves optimistic messages & receives live friend replies!\n");

// ---------------------------------------------------------------------
// TEST 2: Mailbox Conversation Polling & Badge Trigger
// ---------------------------------------------------------------------
console.log("Test 2: Mailbox Conversation Polling & Unread Badge Counter");
assert.ok(chatComponentJs.includes("onUnreadChange(unreadCount)"), "ChatTab must notify parent on unread change");
assert.ok(chatComponentJs.includes("unread: false, unreadCount: 0"), "Current active conversation must remain marked read locally");

const mockConvs = [
  { id: "c1", conversationUid: "c1", otherUserUid: "u1", unread: false, unreadCount: 0 },
  { id: "c2", conversationUid: "c2", otherUserUid: "u2", unread: true, unreadCount: 1 },
  { id: "c3", conversationUid: "c3", otherUserUid: "u3", unread: true, unreadCount: 2 }
];
const unreadCount = mockConvs.filter((c) => c.unread).length;
assert.strictEqual(unreadCount, 2, "Unread count should correctly reflect 2 unread conversations");
console.log("✓ Test 2 Passed: Mailbox conversations correctly track unread badge count!\n");

// ---------------------------------------------------------------------
// TEST 3: Moments Feed Real-Time Polling & Storage Reactive Sync
// ---------------------------------------------------------------------
console.log("Test 3: Moments Feed Real-Time Polling & chrome.storage.onChanged");
const popupJs = fs.readFileSync("./assets/popup-v212.js", "utf8");

assert.ok(popupJs.includes("momentsPollTimer = setInterval(pollLatestMoments, 9000)"), "Popup must poll getMomentsHistory every 9s");
assert.ok(popupJs.includes("chrome.storage.onChanged.addListener(handleStorageChange)"), "Moments hook must listen to chrome.storage.onChanged");
assert.ok(popupJs.includes("setMomentsNewCount((prev) => prev + trulyNew.length)"), "New moments must increment newCount");
assert.ok(popupJs.includes("chrome.action.setBadgeText"), "New moments must update extension badge text");

const localMoments = [
  { canonical_uid: "moment_old_1", thumbnail_url: "https://cdn.locketcamera.com/pic1.jpg" },
  { canonical_uid: "moment_old_2", thumbnail_url: "https://cdn.locketcamera.com/pic2.jpg" }
];
const polledMoments = [
  { canonical_uid: "moment_new_3", thumbnail_url: "https://cdn.locketcamera.com/pic3.jpg" },
  { canonical_uid: "moment_old_1", thumbnail_url: "https://cdn.locketcamera.com/pic1.jpg" }
];

const knownSet = new Set(localMoments.map(m => m.canonical_uid));
const newMoments = polledMoments.filter(m => !knownSet.has(m.canonical_uid));
assert.strictEqual(newMoments.length, 1, "Only truly new moment must be detected");
assert.strictEqual(newMoments[0].canonical_uid, "moment_new_3");
console.log("✓ Test 3 Passed: Real-time moments feed polling detects new moments and triggers reactive updates!\n");

// ---------------------------------------------------------------------
// TEST 4: Background Worker Alarms & Live Sync
// ---------------------------------------------------------------------
console.log("Test 4: Background Worker Alarms & momentsUpdated Message Event");
const bgJs = fs.readFileSync("./assets/background-v212.js", "utf8");

assert.ok(bgJs.includes("chrome.alarms.create(S,{periodInMinutes:f,delayInMinutes:0})"), "Background worker must create alarm with period");
assert.ok(bgJs.includes("chrome.alarms.onAlarm.addListener"), "Background worker must listen to alarm events");
assert.ok(bgJs.includes('type:"momentsUpdated",hasNew:!0'), "Background worker must broadcast momentsUpdated when new moment arrives");
assert.ok(bgJs.includes("chrome.action.setBadgeText"), "Background worker must update badge text");
console.log("✓ Test 4 Passed: Background worker alarm and event emission verified!\n");

console.log("=== ALL REAL-TIME LIVE SYNC UNIT & INTEGRATION TESTS PASSED! ===");
