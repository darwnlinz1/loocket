import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createChatIcon } from './assets/chat-component.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('=== VERIFYING APPLE iOS SF SYMBOLS ICON OVERHAUL ===\n');

// ---------------------------------------------------------------------------
// TEST 1: Verify createChatIcon in chat-component.js
// ---------------------------------------------------------------------------
console.log('Test 1: Apple Messages SF Symbol createChatIcon');
const mockJsx = {
  jsx: (type, props) => ({ type, props }),
  jsxs: (type, props) => ({ type, props })
};
const ChatIcon = createChatIcon(mockJsx);
assert.strictEqual(typeof ChatIcon, 'function', 'ChatIcon must be a function component');

const renderedIcon = ChatIcon();
assert.strictEqual(renderedIcon.type, 'svg', 'ChatIcon must render svg');
assert.strictEqual(renderedIcon.props.strokeWidth, '1.8', 'ChatIcon must have sleek 1.8 strokeWidth');
assert.ok(
  renderedIcon.props.children[0].props.d.includes('M12 21a9.96 9.96'),
  'ChatIcon must use authentic Apple Messages curved bubble vector path'
);
console.log('✓ Test 1 Passed: createChatIcon renders authentic Apple Messages SF Symbol!\n');

// ---------------------------------------------------------------------------
// TEST 2: Verify Chat Component Icons (Send arrow, Back chevron, Empty room)
// ---------------------------------------------------------------------------
console.log('Test 2: Chat Component SF Symbols (Send, Back, Empty)');
const chatSource = fs.readFileSync(path.join(__dirname, 'assets', 'chat-component.js'), 'utf-8');

// Back button chevron
assert.ok(
  chatSource.includes("polyline', { points: '15 18 9 12 15 6' }"),
  'Chat back button must use Apple SF Symbol chevron.backward'
);

// Send button upward circular arrow
assert.ok(
  chatSource.includes("circle', { cx: '12', cy: '12', r: '9.5' }") &&
  chatSource.includes("polyline', { points: '8 12 12 8 16 12' }") &&
  chatSource.includes("line', { x1: '12', y1: '16', x2: '12', y2: '8' }"),
  'Chat send button must use Apple iMessage circular upward arrow icon'
);

// Empty chat room and mailbox bubble
assert.ok(
  chatSource.includes("d: 'M12 21a9.96 9.96 0 0 1-5.32-1.52L2.5 20.8"),
  'Chat empty state must use Apple Messages bubble'
);

console.log('✓ Test 2 Passed: Chat component has authentic Apple iOS SF Symbols!\n');

// ---------------------------------------------------------------------------
// TEST 3: Verify popup-v212.js Bottom Navigation Icons
// ---------------------------------------------------------------------------
console.log('Test 3: Bottom Navigation Bar Apple SF Symbols');
const popupSource = fs.readFileSync(path.join(__dirname, 'assets', 'popup-v212.js'), 'utf-8');

// Feed icon (Ee) -> Apple photo.stack
assert.ok(
  popupSource.includes('function Ee(e)') &&
  popupSource.includes('attr: { width: "15", height: "13", x: "2", y: "7", rx: "3" }') &&
  popupSource.includes('attr: { d: "M6 3.5A2.5 2.5 0 0 1 8.5 1h10A2.5 2.5 0 0 1 21 3.5v10a2.5 2.5 0 0 1-2.5 2.5" }'),
  'Feed icon (Ee) must be Apple SF Symbol photo.stack'
);

// Gallery icon (Te) -> Apple square.grid.2x2
assert.ok(
  popupSource.includes('function Te(e)') &&
  popupSource.includes('attr: { width: "7.5", height: "7.5", x: "3", y: "3", rx: "2.5" }') &&
  popupSource.includes('attr: { width: "7.5", height: "7.5", x: "13.5", y: "3", rx: "2.5" }') &&
  popupSource.includes('attr: { width: "7.5", height: "7.5", x: "13.5", y: "13.5", rx: "2.5" }') &&
  popupSource.includes('attr: { width: "7.5", height: "7.5", x: "3", y: "13.5", rx: "2.5" }'),
  'Gallery icon (Te) must be Apple SF Symbol square.grid.2x2 with rounded squircles'
);

// Compose icon (ze) -> Apple plus.circle
assert.ok(
  popupSource.includes('function ze(e)') &&
  popupSource.includes('attr: { cx: "12", cy: "12", r: "9.5" }') &&
  popupSource.includes('attr: { x1: "12", y1: "7.5", x2: "12", y2: "16.5" }'),
  'Compose icon (ze) must be Apple SF Symbol plus.circle'
);

// Settings icon (Fe) -> Apple gearshape
assert.ok(
  popupSource.includes('function Fe(e)') &&
  popupSource.includes('attr: { cx: "12", cy: "12", r: "3" }') &&
  popupSource.includes('M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83'),
  'Settings icon (Fe) must be Apple SF Symbol gearshape'
);

console.log('✓ Test 3 Passed: Bottom navigation bar uses authentic Apple SF Symbols!\n');

// ---------------------------------------------------------------------------
// TEST 4: Verify Settings & Functional Controls Icons in popup-v212.js
// ---------------------------------------------------------------------------
console.log('Test 4: Settings & Functional Controls SF Symbols');

// Notifications bell (be)
assert.ok(
  popupSource.includes('function be(e)') &&
  popupSource.includes('attr: { d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" }'),
  'Notification bell (be) must be Apple SF Symbol bell'
);

// History & Memories (Ne) -> clock.arrow.circlepath
assert.ok(
  popupSource.includes('function Ne(e)') &&
  popupSource.includes('attr: { d: "M3.05 11a9 9 0 1 1 .5 4" }') &&
  popupSource.includes('attr: { points: "3.05 4.5 3.05 11 9.55 11" }'),
  'Memories & History icon (Ne) must be Apple SF Symbol clock.arrow.circlepath'
);

// Friends scan (Be) -> person.2
assert.ok(
  popupSource.includes('function Be(e)') &&
  popupSource.includes('attr: { cx: "9", cy: "7", r: "3.5" }') &&
  popupSource.includes('attr: { d: "M2.5 19a6.5 6.5 0 0 1 13 0" }') &&
  popupSource.includes('attr: { d: "M16 14.5a6.5 6.5 0 0 1 5.5 4.5" }'),
  'Friends scan icon (Be) must be Apple SF Symbol person.2'
);

// Trash (De) -> Apple trash with curved handle and tapered body
assert.ok(
  popupSource.includes('function De(e)') &&
  popupSource.includes('attr: { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }') &&
  popupSource.includes('attr: { d: "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" }'),
  'Trash icon (De) must be Apple SF Symbol trash'
);

// Logout (Pe) -> rectangle.portrait.and.arrow.right
assert.ok(
  popupSource.includes('function Pe(e)') &&
  popupSource.includes('attr: { d: "M10 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" }'),
  'Logout icon (Pe) must be Apple SF Symbol rectangle.portrait.and.arrow.right'
);

// Feed send button (Ie) -> upward circular arrow
assert.ok(
  popupSource.includes('function Ie(e)') &&
  popupSource.includes('attr: { cx: "12", cy: "12", r: "9.5" }') &&
  popupSource.includes('attr: { points: "8 12 12 8 16 12" }'),
  'Feed send button (Ie) must be Apple SF Symbol arrow.up.circle.fill'
);

console.log('✓ Test 4 Passed: Settings and functional control icons verified!\n');

// ---------------------------------------------------------------------------
// TEST 5: Verify Library Header & Filter Bar Apple SF Symbols
// ---------------------------------------------------------------------------
console.log('Test 5: Library Header & Filter Bar SF Symbols');

// Library Header Folder button
assert.ok(
  popupSource.includes('d: "M3 7v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6.5l-2-2H5a2 2 0 0 0-2 2z"'),
  'Library Header folder button must use Apple SF Symbol folder'
);

// Library Filter Bar "Tất cả" squircle grid
assert.ok(
  popupSource.includes('B.jsx("rect", { x: "3", y: "3", width: "7.5", height: "7.5", rx: "2.5" })') &&
  popupSource.includes('B.jsx("rect", { x: "13.5", y: "3", width: "7.5", height: "7.5", rx: "2.5" })'),
  'Library Filter Bar "Tất cả" must use Apple squircle grid 2x2'
);

// Library Filter Bar "Của tôi" fallback avatar
assert.ok(
  popupSource.includes('B.jsx("circle", { cx: "12", cy: "12", r: "9.5" })') &&
  popupSource.includes('B.jsx("circle", { cx: "12", cy: "9", r: "3" })') &&
  popupSource.includes('B.jsx("path", { d: "M6.5 18a5.5 5.5 0 0 1 11 0" })'),
  'Library Filter Bar "Của tôi" must use Apple person.crop.circle'
);

console.log('✓ Test 5 Passed: Library Header and Filter Bar use Apple SF Symbols!\n');

// ---------------------------------------------------------------------------
// TEST 6: Verify Date Cleaner & Warning SF Symbols
// ---------------------------------------------------------------------------
console.log('Test 6: Date Cleaner & Warning SF Symbols');

// Calendar icon
assert.ok(
  popupSource.includes('B.jsx("rect", { x: "3", y: "4", width: "18", height: "17", rx: "3.5", ry: "3.5" })') &&
  popupSource.includes('B.jsx("circle", { cx: "8", cy: "13", r: "1", fill: "currentColor" })'),
  'Date cleaner calendar icon must use Apple SF Symbol calendar'
);

// Warning icon
assert.ok(
  popupSource.includes('M12 2.8c.6 0 1.2.3 1.5.9l8.6 15.2c.6 1.1-.2 2.5-1.5 2.5H3.4c-1.3 0-2.1-1.4-1.5-2.5L10.5 3.7c.3-.6.9-.9 1.5-.9z'),
  'Warning icon must use Apple SF Symbol exclamationmark.triangle'
);

console.log('✓ Test 6 Passed: Date cleaner and warning dialogs use Apple SF Symbols!\n');

console.log('=== ALL 6 APPLE iOS SF SYMBOLS VERIFICATION CHECKS PASSED 100%! ===');
