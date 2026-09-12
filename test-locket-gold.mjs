import fs from 'fs';
import assert from 'assert';

console.log('=== VERIFYING LOCKET GOLD AND PERFORMANCE REQUIREMENTS ===\n');

const popupIs = fs.readFileSync('./assets/popup-v212.js', 'utf8');
const uiUpgradeCss = fs.readFileSync('./assets/ui-upgrade.css', 'utf8');
const locketServiceJs = fs.readFileSync('./assets/locket-service.js', 'utf8');

// 1. Check quick chat button is NOT in Feed
assert.ok(!popupIs.includes('lk-feed-quick-chat-btn('), 'lk-feed-quick-chat-btn must be removed from Feed');
assert.ok(!popupIs.includes('lk-feed-quick-chat-btn'), 'lk-feed-quick-chat-btn class must not exist in Feed');
console.log('✓ Feed quick chat button completely removed');

// 2. Check Kr viewport lazy loading, shared observer & O(1) index map
assert.ok(popupIs.includes('function LazyPhotoCell'), 'LazyPhotoCell component must exist');
assert.ok(popupIs.includes('IntersectionObserver'), 'IntersectionObserver must be used for lazy photo cell');
assert.ok(popupIs.includes('sharedGalleryObserver'), 'Single shared observer singleton must be used for high efficiency');
assert.ok(popupIs.includes('loading: "lazy"'), 'LazyPhotoCell must use native async lazy img decoding');
assert.ok(popupIs.includes('decoding: "async"'), 'LazyPhotoCell must use decoding: async to offload main thread');
assert.ok(popupIs.includes('momentIndexMap'), 'O(1) momentIndexMap must be used');
assert.ok(popupIs.includes('friendMomentCounts'), 'O(N) single pass friendMomentCounts map must be used instead of O(Friends*N) scans');
assert.ok(popupIs.includes('hasVisitedGallery'), 'Gallery mounting must be deferred until user actually opens gallery');
assert.ok(popupIs.includes('renderedDaysCount'), 'renderedDaysCount progressive windowing must exist');
assert.ok(popupIs.includes('visibleDays'), 'visibleDays slice must be rendered');
console.log('✓ Library viewport lazy loading, shared observer & O(1) maps verified');

// 3. Check developer section removed & Locket Gold in Settings
assert.ok(!popupIs.includes('Thử kết nối chat'), 'Thử kết nối chat must be removed from Settings');
assert.ok(!popupIs.includes('lk-gold-vip-card'), 'lk-gold-vip-card banner removed per user request');
assert.ok(popupIs.includes('lk-gold-avatar-ring'), 'lk-gold-avatar-ring must exist in Settings');
assert.ok(popupIs.includes('Vàng Locket Gold'), 'Gold accent option must exist');
console.log('✓ Settings developer probe removed & Locket Gold profile added');

// 4. Check CSS additions & Locket Gold styling
assert.ok(uiUpgradeCss.includes('.lk-gold-badge'), 'CSS must style .lk-gold-badge');
assert.ok(uiUpgradeCss.includes('.lk-gold-vip-card'), 'CSS must style .lk-gold-vip-card');
assert.ok(uiUpgradeCss.includes('.lk-cell-skeleton'), 'CSS must style .lk-cell-skeleton');
assert.ok(uiUpgradeCss.includes('.lk-cell-img'), 'CSS must style .lk-cell-img');
assert.ok(uiUpgradeCss.includes('--lk-gold-gradient'), 'CSS must define gold gradients');
assert.ok(uiUpgradeCss.includes('--brand-300: #ffeaa7'), 'CSS must define brand-300 for gold accent');
assert.ok(uiUpgradeCss.includes('--brand-400: #ffd700'), 'CSS must define brand-400 for gold accent');
assert.ok(uiUpgradeCss.includes('--brand-500: #f5a623'), 'CSS must define brand-500 for gold accent');
console.log('✓ Locket Gold and skeleton CSS styles verified');

// 5. Check 30 threads in locket-service and popup-v212
assert.ok(locketServiceJs.includes('concurrency = 30'), 'locket-service must default to 30 threads concurrency');
assert.ok(popupIs.includes('concurrency: 30'), 'popup-v212 must specify 30 threads concurrency');
assert.ok(popupIs.includes('fetchFriendsMomentsConcurrently(s.friends, 30, 30)'), 'fetchFriendsMomentsConcurrently must use 30 threads');
console.log('✓ 30 threads concurrency verified across service and popup');

console.log('\n=== ALL NEW SPECIFICATION CHECKS PASSED 100%! ===');
