import assert from 'node:assert';
import { LooketService, looketService, optimizeImageUrl } from './assets/moments-v212.js';
import { createChatComponent, createChatIcon } from './assets/chat-component.js';

console.log('--- RUNNING RE-EXPORT & INTEGRATION CHECKS ---');

assert.ok(LooketService, 'LooketService must be re-exported by moments-v212.js');
assert.ok(looketService, 'looketService singleton must be re-exported by moments-v212.js');
assert.ok(optimizeImageUrl, 'optimizeImageUrl must be re-exported by moments-v212.js');

const mockReact = {
  useState: (init) => [init, () => {}],
  useEffect: (fn) => fn(),
  useCallback: (fn) => fn,
  useRef: (init) => ({ current: init }),
  useMemo: (fn) => fn()
};

const mockJsx = {
  jsx: (type, props) => ({ type, props }),
  jsxs: (type, props) => ({ type, props })
};

const ChatIcon = createChatIcon(mockJsx);
assert.ok(typeof ChatIcon === 'function', 'ChatIcon must be a function component');

const ChatTab = createChatComponent({ React: mockReact, jsx: mockJsx, looketService });
assert.ok(typeof ChatTab === 'function', 'ChatTab must be a function component');

let unreadCountReceived = null;
// Call ChatTab with mock props
const element = ChatTab({
  user: { localId: 'test_user_uid' },
  friends: [
    { uid: 'friend_1', displayName: 'Friend One', username: 'fr1', avatar: 'https://cdn.locketcamera.com/test.webp' }
  ],
  active: true,
  targetUser: {
    uid: 'friend_1',
    replyMoment: {
      id: 'moment_123',
      momentUid: 'moment_123',
      thumbnail_url: 'https://cdn.locketcamera.com/thumb.webp',
      caption: 'Awesome moment'
    }
  },
  onUnreadChange: (cnt) => {
    unreadCountReceived = cnt;
  },
  onOpenMoment: (id, thumb) => {
    assert.ok(id || thumb);
  }
});

assert.ok(element, 'ChatTab should render without errors');
assert.strictEqual(element.props.className, 'lk-chat-container');
assert.strictEqual(unreadCountReceived, 0, 'onUnreadChange should be called on mount');

console.log('✓ All integration exports, moment reply target, and factory components verified successfully!');
