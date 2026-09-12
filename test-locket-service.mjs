import assert from 'node:assert';
import {
  LooketService,
  LOCKET_CONSTANTS,
  ANDROID_HEADERS,
  optimizeImageUrl,
  generateUUID,
  runConcurrentPool,
  preloadImagesConcurrently
} from './assets/locket-service.js';

console.log('--- STARTING COMPREHENSIVE LOCKET SERVICE TESTS ---');

// 1. Test Constants
assert.strictEqual(LOCKET_CONSTANTS.PROJECT_ID, 'locket-4252a', 'Project ID must be locket-4252a');
assert.strictEqual(LOCKET_CONSTANTS.FIREBASE_API_KEY, 'AIzaSyB5dTd-xiLD5dEfWq5OpptnQtnMpE0W0u8', 'API Key must match Android App restricted key');
assert.strictEqual(ANDROID_HEADERS['x-android-package'], 'com.locket.Locket', 'x-android-package must be com.locket.Locket');
assert.strictEqual(ANDROID_HEADERS['x-android-cert'], '187A27D3D7364A044307F56E66230F973DCCD5B7', 'x-android-cert must match Android cert hash');
console.log('✓ Constants verified');

// 2. Test UUID Generator RFC4122 v4 pattern
const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
for (let i = 0; i < 20; i++) {
  const id = generateUUID();
  assert.ok(uuidRegex.test(id), `UUID ${id} does not match RFC4122 v4 pattern`);
}
console.log('✓ RFC4122 v4 UUID generator verified');

// 3. Test optimizeImageUrl with edge cases
const raw1 = 'https://firebasestorage.googleapis.com:443/v0/b/locket-img/o/users%2F123%2Fmoments%2Fthumbnails%2Fabc.webp?alt=media&token=xyz';
assert.strictEqual(optimizeImageUrl(raw1), 'https://cdn.locketcamera.com/v0/b/locket-img/o/users%2F123%2Fmoments%2Fthumbnails%2Fabc.webp?alt=media&token=xyz');

const raw2 = 'https://firebasestorage.googleapis.com/v0/b/locket-img/o/users%2F123%2Fmoments%2Fthumbnails%2Fabc.webp?alt=media';
assert.strictEqual(optimizeImageUrl(raw2), 'https://cdn.locketcamera.com/v0/b/locket-img/o/users%2F123%2Fmoments%2Fthumbnails%2Fabc.webp?alt=media');

const raw3 = '//firebasestorage.googleapis.com:443/v0/b/test';
assert.strictEqual(optimizeImageUrl(raw3), '//cdn.locketcamera.com/v0/b/test');

const raw4 = 'firebasestorage.googleapis.com/v0/b/test';
assert.strictEqual(optimizeImageUrl(raw4), 'cdn.locketcamera.com/v0/b/test');

assert.strictEqual(optimizeImageUrl(null), '');
assert.strictEqual(optimizeImageUrl(undefined), '');
assert.strictEqual(optimizeImageUrl(123), '');
assert.strictEqual(optimizeImageUrl('https://otherdomain.com/photo.jpg'), 'https://otherdomain.com/photo.jpg');
console.log('✓ Fastly CDN Edge URL optimizer edge cases verified');

// 4. Mock fetch tests for LooketService
const recordedRequests = [];
let tokenRefreshCount = 0;
const originalFetch = globalThis.fetch;

globalThis.fetch = async (url, options = {}) => {
  recordedRequests.push({ url, options });

  // Mock Token Refresh
  if (url.includes('securetoken.googleapis.com/v1/token')) {
    tokenRefreshCount++;
    assert.strictEqual(options.headers['x-android-package'], 'com.locket.Locket');
    assert.strictEqual(options.headers['x-android-cert'], '187A27D3D7364A044307F56E66230F973DCCD5B7');
    const body = JSON.parse(options.body);
    assert.strictEqual(body.grantType, 'refresh_token');
    assert.strictEqual(body.refreshToken, 'mock_refresh_token_123');

    // Small delay to simulate network latency for concurrency test
    await new Promise((r) => setTimeout(r, 20));

    return {
      ok: true,
      status: 200,
      json: async () => ({
        access_token: 'mock_access_token',
        id_token: 'mock_id_token_xyz',
        expires_in: '3600',
        refresh_token: 'new_refresh_token_456'
      })
    };
  }

  // Mock Firestore Moments runQuery
  if (url.includes('/databases/locket/documents/history/')) {
    assert.strictEqual(options.headers['Authorization'], 'Bearer mock_id_token_xyz');
    assert.strictEqual(options.headers['x-android-package'], 'com.locket.Locket');
    assert.strictEqual(options.headers['x-android-cert'], '187A27D3D7364A044307F56E66230F973DCCD5B7');
    assert.strictEqual(options.headers['x-goog-request-params'], 'projects/locket-4252a/databases/locket');
    const body = JSON.parse(options.body);
    assert.strictEqual(body.structuredQuery.from[0].collectionId, 'entries');

    return {
      ok: true,
      status: 200,
      json: async () => [
        {
          document: {
            name: 'projects/locket-4252a/databases/locket/documents/history/my_uid/entries/canonical_moment_1',
            fields: {
              canonical_uid: { stringValue: 'canonical_moment_1' },
              user: { stringValue: 'friend_uid_1' },
              date: { timestampValue: '2026-07-17T15:58:39.342Z' },
              caption: { stringValue: 'Hello Locket' },
              thumbnail_url: { stringValue: 'https://firebasestorage.googleapis.com:443/v0/b/locket-img/o/test.webp' },
              md5: { stringValue: '8af87a05782eef9cacfc1e71e5ed8bbb' },
              sent_to_all: { booleanValue: true }
            }
          }
        },
        {
          readTime: '2026-07-17T16:00:00.000Z'
        }
      ]
    };
  }

  // Mock Conversations List
  if (url.includes('/databases/(default)/documents/users/my_uid/conversations')) {
    assert.strictEqual(options.headers['Authorization'], 'Bearer mock_id_token_xyz');
    assert.strictEqual(options.headers['x-android-package'], 'com.locket.Locket');
    return {
      ok: true,
      status: 200,
      json: async () => ({
        documents: [
          {
            name: 'projects/locket-4252a/databases/(default)/documents/users/my_uid/conversations/conv_abc_123',
            fields: {
              conversation_uid: { stringValue: 'conv_abc_123' },
              other_user: { stringValue: 'friend_uid_1' },
              last_message: { stringValue: 'See you later' },
              last_activity: { timestampValue: '2026-09-12T00:00:00.000Z' },
              unread: { booleanValue: true }
            }
          },
          {
            // Case where docId is friend's UID and last message is a map with thumbnail
            name: 'projects/locket-4252a/databases/(default)/documents/users/my_uid/conversations/friend_uid_2',
            fields: {
              conversation_uid: { stringValue: 'conv_def_456' },
              last_message: { mapValue: { fields: { thumbnail_url: { stringValue: 'https://cdn.locketcamera.com/thumb.webp' } } } },
              last_activity: { timestampValue: '2026-09-11T20:00:00.000Z' },
              unread_count: { integerValue: '2' }
            }
          }
        ],
        nextPageToken: 'next_page_token_convs'
      })
    };
  }

  // Mock Messages List
  if (url.includes('/databases/(default)/documents/conversations/conv_abc_123/messages')) {
    assert.strictEqual(options.headers['Authorization'], 'Bearer mock_id_token_xyz');
    assert.strictEqual(options.headers['x-android-package'], 'com.locket.Locket');
    assert.strictEqual(options.headers['x-android-cert'], '187A27D3D7364A044307F56E66230F973DCCD5B7');
    return {
      ok: true,
      status: 200,
      json: async () => ({
        documents: [
          {
            name: 'projects/locket-4252a/databases/(default)/documents/conversations/conv_abc_123/messages/msg_999',
            fields: {
              sender: { stringValue: 'friend_uid_1' },
              body: { stringValue: 'Ảnh này đẹp quá\n' },
              created_at: { timestampValue: '2026-09-12T00:05:00.000Z' },
              reply_moment: { stringValue: 'canonical_moment_1' },
              thumbnail_url: { stringValue: 'https://firebasestorage.googleapis.com/v0/b/locket-img/o/thumb.webp' },
              client_token: { stringValue: 'mock-uuid-token' }
            }
          }
        ],
        nextPageToken: null
      })
    };
  }

  // Mock sendChatMessageV2
  if (url.includes('/sendChatMessageV2')) {
    assert.strictEqual(options.headers['Authorization'], 'Bearer mock_id_token_xyz');
    assert.strictEqual(options.headers['User-Agent'], 'okhttp/4.12.0');
    assert.strictEqual(options.headers['Content-Type'], 'application/json; charset=utf-8');
    const body = JSON.parse(options.body);
    assert.ok(body.data.msg.endsWith('\n'), 'Message must end with newline');
    assert.strictEqual(body.data.receiver_uid, 'friend_uid_1');
    assert.ok(uuidRegex.test(body.data.client_token), 'client_token must be a valid UUID v4');
    return {
      ok: true,
      status: 200,
      json: async () => ({
        result: {
          status: 200,
          data: {
            conversation_uid: 'conv_abc_123'
          },
          errors: []
        }
      })
    };
  }

  // Mock markAsRead
  if (url.includes('/markAsRead')) {
    assert.strictEqual(options.headers['Authorization'], 'Bearer mock_id_token_xyz');
    const body = JSON.parse(options.body);
    assert.strictEqual(body.data.conversation_uid, 'conv_abc_123');
    return {
      ok: true,
      status: 200,
      json: async () => ({ status: 200 })
    };
  }

  throw new Error(`Unhandled mock URL: ${url}`);
};

async function runTests() {
  const service = new LooketService({
    myUid: 'my_uid',
    refreshToken: 'mock_refresh_token_123'
  });

  // 1. Test concurrent getIdToken calls (Mutex test)
  tokenRefreshCount = 0;
  const tokens = await Promise.all([
    service.getIdToken(),
    service.getIdToken(),
    service.getIdToken(),
    service.getIdToken(),
    service.getIdToken()
  ]);
  tokens.forEach((t) => assert.strictEqual(t, 'mock_id_token_xyz'));
  assert.strictEqual(tokenRefreshCount, 1, 'Concurrent getIdToken calls must be mutex-deduped into a single network request');
  console.log('✓ Concurrent token refresh mutex verified (5 parallel calls = 1 fetch)');

  // 2. Test getMomentsHistory (All friends feed)
  const moments = await service.getMomentsHistory(null, 24);
  assert.strictEqual(moments.length, 1);
  const m0 = moments[0];
  assert.strictEqual(m0.id, 'canonical_moment_1');
  assert.strictEqual(m0.authorUid, 'friend_uid_1');
  assert.strictEqual(m0.thumbnail_url, 'https://cdn.locketcamera.com/v0/b/locket-img/o/test.webp', 'Thumbnail must be rewritten to Fastly CDN');
  const allReq = recordedRequests[recordedRequests.length - 1];
  const allBody = JSON.parse(allReq.options.body);
  assert.strictEqual(allBody.structuredQuery.where, undefined, 'Full moments feed must not have a where filter');
  console.log('✓ Moments timeline runQuery & parsing verified');

  // 3. Test getMomentsHistory (Filtered by Friend)
  const friendMoments = await service.getMomentsHistory('friend_uid_1', 10);
  assert.strictEqual(friendMoments.length, 1);
  const lastReq = recordedRequests[recordedRequests.length - 1];
  const body = JSON.parse(lastReq.options.body);
  assert.strictEqual(body.structuredQuery.where.fieldFilter.field.fieldPath, 'user');
  assert.strictEqual(body.structuredQuery.where.fieldFilter.value.stringValue, 'friend_uid_1');
  console.log('✓ Friend-specific moments query filter verified');

  // 4. Test getMomentsHistory (Self moments filter)
  const selfMoments = await service.getMomentsHistory('my_uid', 10);
  assert.strictEqual(selfMoments.length, 1);
  const selfReq = recordedRequests[recordedRequests.length - 1];
  const selfBody = JSON.parse(selfReq.options.body);
  assert.strictEqual(selfBody.structuredQuery.where.fieldFilter.value.stringValue, 'my_uid');
  console.log('✓ Self-moments query filter verified');

  // 4b. Test getMomentsHistory with cursor pagination for continuous loading
  const paginatedMoments = await service.getMomentsHistory('my_uid', 30, { _rawDateField: { timestampValue: '2026-07-17T15:58:39.342Z' } });
  assert.strictEqual(paginatedMoments.length, 1);
  const paginatedReq = recordedRequests[recordedRequests.length - 1];
  const paginatedBody = JSON.parse(paginatedReq.options.body);
  assert.deepStrictEqual(paginatedBody.structuredQuery.startAt, {
    values: [{ timestampValue: '2026-07-17T15:58:39.342Z' }],
    before: false
  });
  console.log('✓ Continuous pagination cursor (startAt after oldest moment) verified');

  // 5. Test getConversations with diverse document schemas
  const { conversations, nextPageToken } = await service.getConversations(50);
  assert.strictEqual(conversations.length, 2);
  assert.strictEqual(conversations[0].conversationUid, 'conv_abc_123');
  assert.strictEqual(conversations[0].otherUserUid, 'friend_uid_1');
  assert.strictEqual(conversations[0].lastMessage, 'See you later');
  assert.strictEqual(conversations[0].unread, true);

  // Second doc had docId friend_uid_2 and conversation_uid conv_def_456
  assert.strictEqual(conversations[1].conversationUid, 'conv_def_456');
  assert.strictEqual(conversations[1].otherUserUid, 'friend_uid_2');
  assert.strictEqual(conversations[1].lastMessage, '📷 Khoảnh khắc');
  assert.strictEqual(conversations[1].unreadCount, 2);
  assert.strictEqual(nextPageToken, 'next_page_token_convs');
  console.log('✓ Conversations inbox parsing & sorting verified');

  // 6. Test getChatMessages
  const { messages } = await service.getChatMessages('conv_abc_123', 50);
  assert.strictEqual(messages.length, 1);
  assert.strictEqual(messages[0].id, 'msg_999');
  assert.strictEqual(messages[0].sender, 'friend_uid_1');
  assert.strictEqual(messages[0].replyMomentId, 'canonical_moment_1');
  assert.strictEqual(messages[0].thumbnailUrl, 'https://cdn.locketcamera.com/v0/b/locket-img/o/thumb.webp');
  console.log('✓ Chat message history & moment reply thumbnail verified');

  // 7. Test sendMessage (regular text)
  const sendRes = await service.sendMessage('friend_uid_1', 'Hello friend');
  assert.strictEqual(sendRes.result.data.conversation_uid, 'conv_abc_123');
  console.log('✓ Send regular chat message verified');

  // 8. Test sendMessage (reply moment)
  const replyRes = await service.sendMessage('friend_uid_1', 'Nice moment!', 'canonical_moment_1');
  assert.strictEqual(replyRes.result.data.conversation_uid, 'conv_abc_123');
  console.log('✓ Send reply to moment verified');

  // 9. Test markAsRead
  const markRes = await service.markAsRead('conv_abc_123');
  assert.strictEqual(markRes.status, 200);
  console.log('✓ Mark conversation as read verified');

  // 10. Test edge cases: empty text, missing receiverUid
  await assert.rejects(async () => service.sendMessage('', 'Hi'), /Thiếu receiverUid/);
  await assert.rejects(async () => service.sendMessage('friend1', '   '), /không được để trống/);
  await assert.rejects(async () => service.getChatMessages(''), /Thiếu conversationUid/);
  console.log('✓ Edge cases and input validations verified');

  // 11. Test runConcurrentPool with 20 threads limit, ordering, and error tolerance
  let activeConcurrency = 0;
  let maxObservedConcurrency = 0;
  const testItems = Array.from({ length: 60 }, (_, i) => i);
  const poolResults = await runConcurrentPool(
    testItems,
    async (item) => {
      activeConcurrency++;
      maxObservedConcurrency = Math.max(maxObservedConcurrency, activeConcurrency);
      await new Promise((r) => setTimeout(r, 10));
      activeConcurrency--;
      if (item === 13) throw new Error('Simulated task error');
      return item * 2;
    },
    20
  );
  assert.strictEqual(poolResults.length, 60, 'Results count must match input count');
  assert.ok(maxObservedConcurrency <= 20, `Observed concurrency ${maxObservedConcurrency} must not exceed 20`);
  assert.strictEqual(poolResults[0], 0);
  assert.strictEqual(poolResults[10], 20);
  assert.strictEqual(poolResults[13], null, 'Failed task must return null without throwing');
  assert.strictEqual(poolResults[59], 118);
  console.log('✓ Concurrency pool (~20 threads) concurrency limit & ordering verified');

  // 12. Test preloadImagesConcurrently
  const testUrls = [
    'https://cdn.locketcamera.com/v0/b/locket-img/o/photo1.webp',
    'https://cdn.locketcamera.com/v0/b/locket-img/o/photo2.webp',
    'https://cdn.locketcamera.com/v0/b/locket-img/o/photo1.webp', // duplicate
    '',
    null
  ];
  const preloadResults = await preloadImagesConcurrently(testUrls, 20);
  assert.strictEqual(preloadResults.length, 2, 'Duplicates and invalid URLs must be filtered');
  console.log('✓ Fastly CDN image preloading with 20 threads verified');

  // 13. Test fetchFullUserHistory (Prioritized account scanning with 20 threads)
  const fullHistory = await service.fetchFullUserHistory('my_uid', { concurrency: 20, pageSize: 50, maxPages: 2 });
  assert.ok(Array.isArray(fullHistory), 'Full user history must return array');
  assert.ok(fullHistory.length > 0, 'Full user history must return fetched moments');
  assert.strictEqual(fullHistory[0].id, 'canonical_moment_1');
  console.log('✓ Prioritized self-account full history scanning with 20 threads verified');

  // 14. Test fetchFriendsMomentsConcurrently (Friends batch with 20 threads)
  const mockFriendsList = [
    { uid: 'friend_uid_1', displayName: 'Friend 1' },
    { uid: 'friend_uid_2', displayName: 'Friend 2' }
  ];
  const friendsMoments = await service.fetchFriendsMomentsConcurrently(mockFriendsList, 30, 20);
  assert.ok(Array.isArray(friendsMoments), 'Friends moments must return array');
  assert.ok(friendsMoments.length > 0, 'Friends moments must return moments');
  console.log('✓ Friends moments concurrent fetching with 20 threads verified');

  // 15. Test fetchFullUserHistory error tolerance when a batch task fails (sort null safety)
  const failingService = new LooketService({ myUid: 'my_uid', apiKey: 'test' });
  failingService.getIdToken = async () => 'mock_token';
  failingService.getMomentsHistory = async (uid, limit, cursor, offset) => {
    if (offset === 50) throw new Error('Simulated network failure on page 2');
    if (offset === 0) return [{ id: 'moment_p0', seconds: 5000 }];
    return [];
  };
  const errorHandledHistory = await failingService.fetchFullUserHistory('my_uid', { concurrency: 20, pageSize: 50, maxPages: 2, preloadAssets: false });
  assert.strictEqual(errorHandledHistory.length, 1);
  assert.strictEqual(errorHandledHistory[0].id, 'moment_p0');
  console.log('✓ BatchResults sort null safety and error tolerance in fetchFullUserHistory verified');

  // 16. Test preloadImagesConcurrently safety timeout for stalled Image
  const origImage = globalThis.Image;
  globalThis.Image = class {
    constructor() {
      // simulate stall by never firing onload/onerror
    }
  };
  // Preload should complete without crashing
  const stalledPreload = await preloadImagesConcurrently(['https://cdn.locketcamera.com/stalled.webp'], 1);
  assert.strictEqual(stalledPreload.length, 1);
  assert.strictEqual(stalledPreload[0].success, false);
  assert.strictEqual(stalledPreload[0].timeout, true);
  globalThis.Image = origImage;
  console.log('✓ Stalled image safety timeout in preloadImagesConcurrently verified');

  // Restore fetch
  globalThis.fetch = originalFetch;
  console.log('\nALL 16 LOCKET SERVICE UNIT & INTEGRATION TESTS PASSED PERFECTLY!\n');
}

runTests().catch((err) => {
  console.error('TEST FAILURE:', err);
  process.exit(1);
});
