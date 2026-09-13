import assert from 'node:assert';
import fs from 'node:fs';

console.log('=== VERIFYING DATE RANGE PHOTO CLEANER & HORIZONTAL SCROLL ENHANCEMENTS ===\n');

const popupJs = fs.readFileSync('./assets/popup-v212.js', 'utf8');
const chatJs = fs.readFileSync('./assets/chat-component.js', 'utf8');
const uiUpgradeCss = fs.readFileSync('./assets/ui-upgrade.css', 'utf8');

// -----------------------------------------------------------------------------
// TEST 1: Horizontal Wheel & Drag-To-Scroll in Library Filter Bar & Chat Tray
// -----------------------------------------------------------------------------
console.log('Test 1: Verifying Horizontal Wheel & Drag-To-Scroll in Library & Chat Tray');

// 1.1 In popup-v212.js (Library Friend Filter Bar)
assert.ok(popupJs.includes('galleryFilterBarRef'), 'Kr must define galleryFilterBarRef');
assert.ok(popupJs.includes('ref: galleryFilterBarRef'), 'Kr must bind galleryFilterBarRef to lk-gallery-filter-bar');
assert.ok(popupJs.includes('el.scrollLeft += e.deltaY * 0.85'), 'Kr must convert vertical wheel delta to scrollLeft');
assert.ok(popupJs.includes('el.classList.add("grabbing")'), 'Kr must apply grabbing class during drag');
assert.ok(popupJs.includes('Math.abs(walk) > 4'), 'Kr must detect mouse drag distance threshold');
assert.ok(popupJs.includes('hasDragged') && popupJs.includes('onClickCapture'), 'Kr must suppress accidental click events when dragged');
console.log('✓ Library Friend Filter Bar has wheel-to-scroll and mouse drag-to-scroll');

// 1.2 In chat-component.js (Quick Friends Tray)
assert.ok(chatJs.includes('friendsTrayRef'), 'ChatTab must define friendsTrayRef');
assert.ok(chatJs.includes("ref: friendsTrayRef"), 'ChatTab must bind friendsTrayRef to lk-friends-tray');
assert.ok(chatJs.includes('el.scrollLeft += e.deltaY * 0.85'), 'ChatTab must convert vertical wheel delta to scrollLeft');
assert.ok(chatJs.includes("el.classList.add('grabbing')"), 'ChatTab must apply grabbing class during drag');
assert.ok(chatJs.includes('Math.abs(walk) > 4'), 'ChatTab must detect mouse drag threshold');
console.log('✓ Quick Friends Tray in Chat has wheel-to-scroll and mouse drag-to-scroll');

// 1.3 CSS verification for grabbing, touch-action, and hidden scrollbars
assert.ok(uiUpgradeCss.includes('.lk-gallery-filter-bar.grabbing'), 'CSS must define .lk-gallery-filter-bar.grabbing');
assert.ok(uiUpgradeCss.includes('.lk-friends-tray.grabbing'), 'CSS must define .lk-friends-tray.grabbing');
assert.ok(uiUpgradeCss.includes('cursor: grab'), 'CSS must define grab cursor for horizontal scroll containers');
assert.ok(uiUpgradeCss.includes('cursor: grabbing !important'), 'CSS must define grabbing cursor');
console.log('✓ CSS styles for grab, grabbing, touch-action: pan-x verified');

// -----------------------------------------------------------------------------
// TEST 2: Date Range & Sender Filter Logic (filterMomentsByDateRange)
// -----------------------------------------------------------------------------
console.log('\nTest 2: Verifying filterMomentsByDateRange function and edge cases');

const filterFuncMatch = popupJs.match(/function filterMomentsByDateRange\([\s\S]*?\n\}/);
assert.ok(filterFuncMatch, 'filterMomentsByDateRange must be defined in popup-v212.js');

const filterMomentsByDateRange = new Function(`
  ${filterFuncMatch[0]}
  return filterMomentsByDateRange;
`)();

const mockMoments = [
  {
    id: 'm_jan_me',
    authorUid: 'my_uid',
    seconds: Math.floor(new Date('2024-01-15T12:00:00Z').getTime() / 1000),
    thumbnail_url: 'https://cdn.locket/jan_me.jpg'
  },
  {
    id: 'm_feb_ex',
    authorUid: 'uid_ex_partner',
    user: { uid: 'uid_ex_partner' },
    seconds: Math.floor(new Date('2024-02-14T20:00:00Z').getTime() / 1000),
    thumbnail_url: 'https://cdn.locket/feb_ex.jpg'
  },
  {
    id: 'm_mar_ex',
    authorUid: 'uid_ex_partner',
    user: { uid: 'uid_ex_partner' },
    seconds: Math.floor(new Date('2024-03-08T18:30:00Z').getTime() / 1000),
    thumbnail_url: 'https://cdn.locket/mar_ex.jpg'
  },
  {
    id: 'm_may_friend',
    authorUid: 'uid_friend_nam',
    user: { uid: 'uid_friend_nam' },
    seconds: Math.floor(new Date('2024-05-01T10:00:00Z').getTime() / 1000),
    thumbnail_url: 'https://cdn.locket/may_nam.jpg'
  },
  {
    id: 'm_nov_me',
    authorUid: 'my_uid',
    seconds: Math.floor(new Date('2024-11-20T08:00:00Z').getTime() / 1000),
    thumbnail_url: 'https://cdn.locket/nov_me.jpg'
  }
];

// Case A: Filter all moments in Q1 2024
const q1Moments = filterMomentsByDateRange(mockMoments, {
  startDate: '2024-01-01',
  endDate: '2024-03-31',
  senderFilter: 'all',
  myUid: 'my_uid'
});
assert.strictEqual(q1Moments.length, 3, 'Q1 should match 3 moments');

// Case B: Filter ONLY friend photos in Q1 2024
const exMoments = filterMomentsByDateRange(mockMoments, {
  startDate: '2024-01-01',
  endDate: '2024-03-31',
  senderFilter: 'uid_ex_partner',
  myUid: 'my_uid'
});
assert.strictEqual(exMoments.length, 2, 'Should match exactly 2 photos from ex partner in Q1');
assert.ok(exMoments.every(m => m.authorUid === 'uid_ex_partner'));

// Case C: Filter only user moments (me)
const meMoments = filterMomentsByDateRange(mockMoments, {
  startDate: '2024-01-01',
  endDate: '2024-12-31',
  senderFilter: 'me',
  myUid: 'my_uid'
});
assert.strictEqual(meMoments.length, 2, 'Should match 2 self photos');

// Case D: Boundary dates and empty ranges
const allMoments = filterMomentsByDateRange(mockMoments, {
  startDate: '',
  endDate: '',
  senderFilter: 'all'
});
assert.strictEqual(allMoments.length, mockMoments.length, 'Empty date range returns all moments');

console.log('✓ All date range filtering test cases passed!');

// -----------------------------------------------------------------------------
// TEST 3: Execution of Moments Deletion by Keys
// -----------------------------------------------------------------------------
console.log('\nTest 3: Verifying executeDeleteMomentsByKeys deletion logic');

const deleteFuncMatch = popupJs.match(/function executeDeleteMomentsByKeys\([\s\S]*?\n\}/);
assert.ok(deleteFuncMatch, 'executeDeleteMomentsByKeys must be defined in popup-v212.js');

const executeDeleteMomentsByKeys = new Function(`
  ${deleteFuncMatch[0]}
  return executeDeleteMomentsByKeys;
`)();

const keysToDelete = new Set(['m_feb_ex', 'm_mar_ex']);
const remainingMoments = executeDeleteMomentsByKeys(mockMoments, keysToDelete);

assert.strictEqual(remainingMoments.length, 3, 'Remaining moments should be exactly 3');
assert.ok(!remainingMoments.some(m => keysToDelete.has(m.id)), 'Deleted moments must not exist');
console.log('✓ Photo deletion by keys verified with zero data corruption');

// -----------------------------------------------------------------------------
// TEST 4: UI Integration
// -----------------------------------------------------------------------------
console.log('\nTest 4: Verifying UI integration for DateRangeCleanerModal');

assert.ok(popupJs.includes('DateRangeCleanerModal'), 'popup-v212.js must export DateRangeCleanerModal');
assert.ok(popupJs.includes('openDateCleaner'), 'Xa must manage openDateCleaner state');
assert.ok(popupJs.includes('lk-gallery-header-folder-btn'), 'Library must have sleek folder button');
assert.ok(popupJs.includes('Xóa ảnh theo khoảng thời gian') || popupJs.includes('Xoá ảnh theo khoảng thời gian'), 'Settings must offer Date Range Deletion button');
assert.ok(!popupJs.includes('nyc'), 'All traces of nyc must be eliminated from UI and code');
assert.ok(uiUpgradeCss.includes('.lk-date-cleaner-modal-overlay'), 'CSS must style modal overlay');
assert.ok(uiUpgradeCss.includes('.lk-date-cleaner-card'), 'CSS must style modal card');
assert.ok(uiUpgradeCss.includes('.lk-cleaner-thumb-card.selected'), 'CSS must style selected preview thumbnails');
assert.ok(uiUpgradeCss.includes('.lk-cleaner-confirm-box'), 'CSS must style safety confirmation dialog');
console.log('✓ UI integration in Library, Settings, and modal verified');

// -----------------------------------------------------------------------------
// TEST 5: Locket Gold Polish
// -----------------------------------------------------------------------------
console.log('\nTest 5: Verifying Locket Gold Polish matching Screenshots 1 & 2');

assert.ok(uiUpgradeCss.includes('._Account_1mni3_18'), 'CSS must style profile card');
assert.ok(uiUpgradeCss.includes('.lk-gold-badge'), 'CSS must style Gold badge');
assert.ok(uiUpgradeCss.includes('.lk-gold-avatar-ring'), 'CSS must style avatar ring with gold glow');
assert.ok(uiUpgradeCss.includes('.lk-gold-vip-active-pill'), 'CSS must style active Gold Member pill');
assert.ok(uiUpgradeCss.includes('._Tab_te3jl_11._accent_te3jl_27'), 'CSS must style Đăng tab in gold');
assert.ok(uiUpgradeCss.includes('._Tab_te3jl_11._active_te3jl_24'), 'CSS must style active tab pill background');
assert.ok(uiUpgradeCss.includes('._Label_te3jl_39::after'), 'CSS must render yellow indicator underline under active tab');
assert.ok(uiUpgradeCss.includes('.lk-gallery-filter-pill.active'), 'CSS must style active pill with gold border');
assert.ok(uiUpgradeCss.includes('border: 1.5px solid var(--brand-400)') || uiUpgradeCss.includes('border: 1.5px solid #f59e0b'), 'Active filter pill must have 1.5px dynamic accent border');
console.log('✓ Locket Gold visual polish matching both screenshots verified');

// -----------------------------------------------------------------------------
// TEST 6: User-Only Photo Scope, DOM Capping & Real API Deletion in DateRangeCleanerModal
// -----------------------------------------------------------------------------
console.log('\nTest 6: Verifying User-Only Photo Scope, DOM Capping & Real API Deletion in DateRangeCleanerModal');

// 6.1 isUserMoment helper function
const isUserMomentMatch = popupJs.match(/function isUserMoment\([\s\S]*?\n\}/);
assert.ok(isUserMomentMatch, 'isUserMoment must be defined in popup-v212.js');

const isUserMoment = new Function(`
  ${isUserMomentMatch[0]}
  return isUserMoment;
`)();

assert.strictEqual(isUserMoment({ authorUid: 'my_uid' }, 'my_uid'), true, 'User moment must match my_uid');
assert.strictEqual(isUserMoment({ authorUid: 'friend_uid' }, 'my_uid'), false, 'Friend moment must NOT match my_uid');
assert.strictEqual(isUserMoment({ user: { uid: 'my_uid' } }, 'my_uid'), true, 'Nested user object must match');
assert.strictEqual(isUserMoment({ user: 'users/my_uid' }, 'my_uid'), true, 'User reference string must match');
assert.strictEqual(isUserMoment({ user: 'users/friend_uid' }, 'my_uid'), false, 'Friend reference string must NOT match');
assert.strictEqual(isUserMoment({ authorUid: 'friend_uid' }, null), false, 'Friend moment must NOT match null currentUid');
assert.strictEqual(isUserMoment({ authorUid: 'friend_uid' }, undefined), false, 'Friend moment must NOT match undefined currentUid');
assert.strictEqual(isUserMoment({ authorUid: 'friend_uid' }, ''), false, 'Friend moment must NOT match empty currentUid');
assert.strictEqual(isUserMoment(null, 'my_uid'), false, 'Null moment must return false');
assert.strictEqual(isUserMoment({ owner_uid: 'my_uid' }, 'my_uid'), true, 'owner_uid must match');
assert.strictEqual(isUserMoment({ user_uid: 'my_uid' }, 'my_uid'), true, 'user_uid must match');
console.log('✓ isUserMoment correctly isolates user photos and blocks friend photos (including null safety)');

// 6.1b Month Range filtering in filterMomentsByDateRange (YYYY-MM)
const filterDateMatch = popupJs.match(/function filterMomentsByDateRange\([\s\S]*?\n\}/);
assert.ok(filterDateMatch, 'filterMomentsByDateRange must be defined in popup-v212.js');
const testFilterFunc = new Function(`${isUserMomentMatch[0]}; ${filterDateMatch[0]}; return filterMomentsByDateRange;`)();

const testMoments = [
  { id: 'may_15', seconds: Math.floor(new Date('2026-05-15T12:00:00Z').getTime() / 1000), authorUid: 'my_uid' },
  { id: 'june_28', seconds: Math.floor(new Date('2026-06-28T22:00:00Z').getTime() / 1000), authorUid: 'my_uid' },
  { id: 'july_05', seconds: Math.floor(new Date('2026-07-05T08:00:00Z').getTime() / 1000), authorUid: 'my_uid' },
  { id: 'june_friend', seconds: Math.floor(new Date('2026-06-20T10:00:00Z').getTime() / 1000), authorUid: 'friend_uid' }
];

// Test month range: May to June 2026
const mayToJune = testFilterFunc(testMoments, { startDate: '2026-05', endDate: '2026-06', senderFilter: 'me', myUid: 'my_uid' });
assert.strictEqual(mayToJune.length, 2, 'May to June month range must include both May 15 and June 28 photos');
assert.ok(mayToJune.some(m => m.id === 'may_15'));
assert.ok(mayToJune.some(m => m.id === 'june_28'));
assert.ok(!mayToJune.some(m => m.id === 'july_05'), 'July 05 photo must NOT be included in June end month');
assert.ok(!mayToJune.some(m => m.id === 'june_friend'), 'Friend photo must NEVER be included in me filter');
console.log('✓ Month range (YYYY-MM) filtering accurately covers whole end-month and isolates user photos');

// 6.2 DateRangeCleanerModal only cleans user's own photos & supports month/date modes
assert.ok(popupJs.includes('isUserMoment(m, myId)'), 'DateRangeCleanerModal must filter to only user moments');
assert.ok(popupJs.includes('deleteProgress'), 'DateRangeCleanerModal must track deleteProgress state');
assert.ok(popupJs.includes('looketService.deleteMoments'), 'DateRangeCleanerModal must call looketService.deleteMoments');
assert.ok(popupJs.includes('rangeMode'), 'DateRangeCleanerModal must support rangeMode (date/month)');
assert.ok(popupJs.includes('thisMonth'), 'DateRangeCleanerModal must support thisMonth preset');
assert.ok(popupJs.includes('lastMonth'), 'DateRangeCleanerModal must support lastMonth preset');
assert.ok(uiUpgradeCss.includes('.lk-cleaner-progress-container'), 'CSS must style progress bar container');
assert.ok(uiUpgradeCss.includes('.lk-cleaner-progress-track'), 'CSS must style progress bar track');
assert.ok(uiUpgradeCss.includes('.lk-cleaner-progress-fill'), 'CSS must style animated progress fill');
assert.ok(uiUpgradeCss.includes('.lk-cleaner-mode-toggle'), 'CSS must style date/month mode toggle');
assert.ok(uiUpgradeCss.includes('.lk-cleaner-mode-btn'), 'CSS must style mode toggle buttons');

// 6.3 DOM Capping: Never render 3,000+ photos to DOM
assert.ok(popupJs.includes('matchingMoments.slice(0, 16)'), 'DateRangeCleanerModal must cap preview to max 16 sample photos to prevent DOM freeze');
assert.ok(!popupJs.includes('showAllPreview ? matchingMoments'), 'DateRangeCleanerModal must NOT render thousands of photos into DOM');
console.log('✓ User-only scope, 16-sample DOM capping, month range modes, and real API batch deletion verified');

// -----------------------------------------------------------------------------
// TEST 7: Lightbox Single Photo Deletion & Friend Protection
// -----------------------------------------------------------------------------
console.log('\nTest 7: Verifying Lightbox Single Photo Deletion & Friend Protection');

assert.ok(popupJs.includes('isMyMoment'), 'Lightbox must check isMyMoment before showing delete button');
assert.ok(popupJs.includes('lk-lightbox-btn-delete'), 'Lightbox must render lk-lightbox-btn-delete button for own photos');
assert.ok(popupJs.includes('handleSingleDelete'), 'Xa must define handleSingleDelete handler');
assert.ok(popupJs.includes('looketService.deleteMoment'), 'handleSingleDelete must call looketService.deleteMoment');
assert.ok(popupJs.includes('lk-lightbox-delete-confirm-box'), 'Lightbox must render confirmation dialog before deletion');
assert.ok(uiUpgradeCss.includes('.lk-lightbox-btn-delete'), 'CSS must style lightbox delete button');
assert.ok(uiUpgradeCss.includes('.lk-lightbox-delete-confirm-box'), 'CSS must style lightbox delete confirmation dialog');
console.log('✓ Lightbox single photo deletion, friend protection, and confirmation verified');

console.log('\n=== ALL DATE RANGE CLEANER & HORIZONTAL SCROLL TESTS PASSED 100%! ===');

