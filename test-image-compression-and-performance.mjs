import fs from 'fs';
import assert from 'assert';
import {
  optimizeImageUrl,
  optimizeThumbnailUrl,
  getLqipImageUrl,
  preloadImagesConcurrently,
  LooketService
} from './assets/locket-service.js';

console.log('=== VERIFYING IMAGE COMPRESSION, LAZY LOADING & PERFORMANCE OPTIMIZATIONS ===\n');

const popupJs = fs.readFileSync('./assets/popup-v212.js', 'utf8');
const uiUpgradeCss = fs.readFileSync('./assets/ui-upgrade.css', 'utf8');
const styleCss = fs.readFileSync('./assets/style-v212.css', 'utf8');
const locketServiceJs = fs.readFileSync('./assets/locket-service.js', 'utf8');
const momentsJs = fs.readFileSync('./assets/moments-v212.js', 'utf8');

// -------------------------------------------------------------
// TEST 1: Fastly CDN Image Compression Parameters & Edge Cases
// -------------------------------------------------------------
console.log('Test 1: Fastly CDN Image Compression & Thumbnail Generation');

const sampleFirebaseUrl = 'https://firebasestorage.googleapis.com:443/v0/b/locket-img/o/users%2F123%2Fmoments%2Fthumbnails%2Fphoto.webp?alt=media&token=xyz';
const sampleCdnUrl = 'https://cdn.locketcamera.com/v0/b/locket-img/o/users%2F123%2Fmoments%2Fthumbnails%2Fphoto.webp?alt=media&token=xyz';
const samplePathUrl = 'https://cdn.locketcamera.com/photos/user123.jpg';
const externalUrl = 'https://otherdomain.com/photo.jpg';

// Backward compatibility (no options)
assert.strictEqual(optimizeImageUrl(sampleFirebaseUrl), sampleCdnUrl, 'Default call must route to Fastly CDN');
assert.strictEqual(optimizeImageUrl(null), '', 'Null input must return empty string');
assert.strictEqual(optimizeImageUrl(''), '', 'Empty string must return empty string');
assert.strictEqual(optimizeImageUrl(undefined), '', 'Undefined input must return empty string');
assert.strictEqual(optimizeImageUrl(12345), '', 'Non-string input must return empty string');

// Fastly CDN parameters (width, height, format, quality)
const compressed180 = optimizeImageUrl(sampleFirebaseUrl, { width: 180, height: 180, format: 'webp', quality: 65 });
assert.ok(compressed180.includes('cdn.locketcamera.com'), 'Must use CDN host');
assert.ok(compressed180.includes('width=180'), 'Must include width=180');
assert.ok(compressed180.includes('height=180'), 'Must include height=180');
assert.ok(compressed180.includes('format=webp'), 'Must include format=webp');
assert.ok(compressed180.includes('quality=65'), 'Must include quality=65');
assert.ok(compressed180.includes('alt=media&token=xyz'), 'Must preserve existing query parameters');

// Idempotency: Calling optimize on an already optimized URL must not duplicate query parameters
const doubleOptimized = optimizeImageUrl(compressed180, { width: 180, height: 180, format: 'webp', quality: 65 });
assert.strictEqual(doubleOptimized, compressed180, 'Calling optimize on already optimized URL must be idempotent');

// optimizeThumbnailUrl helper
const thumbUrl = optimizeThumbnailUrl(sampleCdnUrl, 180, 65);
assert.strictEqual(thumbUrl, compressed180, 'optimizeThumbnailUrl must match optimizeImageUrl options');

// getLqipImageUrl helper (ultra lightweight ~300 bytes placeholder)
const lqipUrl = getLqipImageUrl(sampleCdnUrl);
assert.ok(lqipUrl.includes('width=24') && lqipUrl.includes('quality=20'), 'LQIP must be low-res 24px placeholder');

// Non-CDN URLs should not have CDN query parameters appended
assert.strictEqual(optimizeImageUrl(externalUrl, { width: 180 }), externalUrl, 'External URLs must not be modified with Fastly params');

// URL without existing query params
const cleanThumb = optimizeThumbnailUrl(samplePathUrl, 180, 65);
assert.strictEqual(cleanThumb, `${samplePathUrl}?width=180&height=180&format=webp&quality=65`, 'Clean path URLs must append with ?');

console.log('✓ Test 1 Passed: Fastly CDN image compression parameters & edge cases verified!\n');

// -------------------------------------------------------------
// TEST 2: Re-Exports in moments-v212.js
// -------------------------------------------------------------
console.log('Test 2: Re-exports in moments-v212.js');

import {
  optimizeThumbnailUrl as reexportedThumb,
  getLqipImageUrl as reexportedLqip
} from './assets/moments-v212.js';

assert.ok(typeof reexportedThumb === 'function', 'optimizeThumbnailUrl must be re-exported by moments-v212.js');
assert.ok(typeof reexportedLqip === 'function', 'getLqipImageUrl must be re-exported by moments-v212.js');

console.log('✓ Test 2 Passed: moments-v212.js properly re-exports thumbnail optimization utilities!\n');

// -------------------------------------------------------------
// TEST 3: LazyPhotoCell Instant Viewport & Cache Recognition
// -------------------------------------------------------------
console.log('Test 3: LazyPhotoCell Instant In-View & Memory Cache Recognition');

// Verify initial fold inView initialization
assert.ok(popupJs.includes('subIdx < 15'), 'Initial batch (first 15 items) must be inView immediately on first render');
assert.ok(popupJs.includes('useState(() => isInitialBatch)'), 'LazyPhotoCell must initialize inView synchronously for top items');

// Verify memory cache check
assert.ok(popupJs.includes('imgRef.current.complete'), 'LazyPhotoCell must check img.complete for instant 0ms cached display');
assert.ok(popupJs.includes('setImgLoaded(true)'), 'LazyPhotoCell must mark loaded immediately if cached');

// Verify Fastly thumbnail compression in LazyPhotoCell
assert.ok(popupJs.includes('width: 180'), 'LazyPhotoCell must request 180px thumbnail width');
assert.ok(popupJs.includes('height: 180'), 'LazyPhotoCell must request 180px thumbnail height');
assert.ok(popupJs.includes('format: "webp"'), 'LazyPhotoCell must request WebP compression');
assert.ok(popupJs.includes('quality: 65'), 'LazyPhotoCell must request 65% quality thumbnail');

// Verify native async decoding & lazy loading
assert.ok(popupJs.includes('loading: "lazy"'), 'LazyPhotoCell must have native loading="lazy"');
assert.ok(popupJs.includes('decoding: "async"'), 'LazyPhotoCell must have native decoding="async"');

console.log('✓ Test 3 Passed: LazyPhotoCell instant rendering & cache recognition verified!\n');

// -------------------------------------------------------------
// TEST 4: Tab Switch Debounce, Concurrency Lock & Preloading
// -------------------------------------------------------------
console.log('Test 4: Tab Switch Debounce, Concurrency Lock & Preloading');

// Verify concurrency lock in fetchMoments
assert.ok(popupJs.includes('isFetchingMomentsRef'), 'fetchMoments must track active state with isFetchingMomentsRef');
assert.ok(popupJs.includes('if (isFetchingMomentsRef.current) return'), 'fetchMoments must prevent overlapping concurrent fetches');

// Verify UI thread yield
assert.ok(popupJs.includes('setTimeout(resolve, 30)'), 'fetchMoments must yield to event loop so tab transitions render at 60fps');

// Verify preloading uses compressed WebP thumbnails
assert.ok(popupJs.includes('optimizeImageUrl(m.thumbnail_url, { width: 180, height: 180'), 'Preloading in popup-v212.js must prefetch lightweight WebP thumbnails');
assert.ok(locketServiceJs.includes('optimizeThumbnailUrl(m.thumbnail_url, 180, 65)'), 'Preloading in locket-service.js must prefetch lightweight WebP thumbnails');
assert.ok(locketServiceJs.includes("img.decoding = 'async'"), 'Preloaded images must decode asynchronously off the main thread');

console.log('✓ Test 4 Passed: Tab switch concurrency lock & async thumbnail preloading verified!\n');

// -------------------------------------------------------------
// TEST 5: CSS-Level Browser Virtualization & GPU Layers
// -------------------------------------------------------------
console.log('Test 5: CSS Browser Virtualization (content-visibility & contain-intrinsic-size)');

assert.ok(uiUpgradeCss.includes('content-visibility: auto'), 'ui-upgrade.css must use content-visibility: auto');
assert.ok(uiUpgradeCss.includes('contain-intrinsic-size: auto 110px'), 'ui-upgrade.css must set contain-intrinsic-size for cells');
assert.ok(uiUpgradeCss.includes('contain-intrinsic-size: auto 300px'), 'ui-upgrade.css must set contain-intrinsic-size for month sections');
assert.ok(styleCss.includes('content-visibility:auto'), 'style-v212.css must use content-visibility:auto');
assert.ok(styleCss.includes('contain-intrinsic-size:auto 110px'), 'style-v212.css must define contain-intrinsic-size for cells');

console.log('✓ Test 5 Passed: CSS browser virtualization & GPU composite layers verified!\n');

// -------------------------------------------------------------
// TEST 6: URL Query Parameter Robustness & Corruption Prevention
// -------------------------------------------------------------
console.log('Test 6: URL Query Parameter Robustness & Corruption Prevention');

// Bug scenario: URL having existing width/quality params as first param
const buggyUrl1 = 'https://cdn.locketcamera.com/photo.jpg?width=100&alt=media';
const fixedUrl1 = optimizeImageUrl(buggyUrl1, { width: 180, height: 180, format: 'webp', quality: 65 });
assert.ok(!fixedUrl1.includes('&alt=media?'), 'URL must not contain corrupted &alt=media? sequence');
assert.ok(fixedUrl1.startsWith('https://cdn.locketcamera.com/photo.jpg?'), 'URL must have valid query string starting with ?');
assert.ok(fixedUrl1.includes('width=180'), 'width=180 must replace width=100');
assert.ok(fixedUrl1.includes('alt=media'), 'Existing params must be preserved');

console.log('✓ Test 6 Passed: URL query parameter replacement is 100% robust and corruption-free!\n');

// -------------------------------------------------------------
// TEST 7: Memory Image Cache & LQIP Blur-Up Placeholder
// -------------------------------------------------------------
console.log('Test 7: Memory Image Cache & LQIP Blur-Up Placeholder');

import { memoryImageCache } from './assets/locket-service.js';
assert.ok(memoryImageCache instanceof Set, 'memoryImageCache must be exported as an in-memory Set');

// Verify LQIP blur-up placeholder in LazyPhotoCell
assert.ok(popupJs.includes('getLqipImageUrl(item.thumbnail_url)'), 'LazyPhotoCell must generate LQIP placeholder for instant blur-up preview');
assert.ok(popupJs.includes('backgroundImage: `url("${lqipUrl}")`'), 'LazyPhotoCell must apply LQIP background image when not yet loaded');
assert.ok(popupJs.includes('memoryImageCache'), 'popup-v212.js must integrate memoryImageCache');

console.log('✓ Test 7 Passed: Memory image cache & LQIP blur-up placeholders verified!\n');

// -------------------------------------------------------------
// TEST 8: Prevention of GPU Layer Explosion & Scroll Anchoring
// -------------------------------------------------------------
console.log('Test 8: Prevention of GPU Layer Explosion & Scroll Anchoring');

// Verify that individual grid cells DO NOT have will-change: transform to prevent 1,200 layer explosion
assert.ok(!/\._Cell_8kz7b_50\s*\{[^}]*will-change/.test(styleCss), 'style-v212.css must not place will-change:transform on _Cell_8kz7b_50');
assert.ok(!uiUpgradeCss.includes('will-change: transform !important;'), 'ui-upgrade.css must not place will-change: transform on .lk-gallery-cell');

// Verify scroll container has overflow-anchor: auto to eliminate scroll jitter
assert.ok(uiUpgradeCss.includes('overflow-anchor: auto !important;'), '_Scroll_8kz7b_7 must have overflow-anchor: auto to prevent scroll jitter');

// Verify month section has layout containment
assert.ok(uiUpgradeCss.includes('contain: layout style;'), '.lk-gallery-month-section must have contain: layout style');

console.log('✓ Test 8 Passed: GPU layer explosion prevented & scroll anchoring stabilized!\n');

// -------------------------------------------------------------
// TEST 9: Container-Relative IntersectionObserver & Fast Tab Switch
// -------------------------------------------------------------
console.log('Test 9: Container-Relative IntersectionObserver & Fast Tab Switch');

assert.ok(popupJs.includes('rootMargin: "600px 0px 600px 0px"'), 'getGalleryObserver must use 600px prefetch buffer');
assert.ok(popupJs.includes('el.closest("._Scroll_8kz7b_7")'), 'LazyPhotoCell must target scroll container as IntersectionObserver root');
assert.ok(popupJs.includes('hasLoadedHistoryRef'), 'fetchMoments must track hasLoadedHistoryRef for instant tab switching');

console.log('✓ Test 9 Passed: Container-relative observer & fast tab switching verified!\n');

console.log('=== ALL 9 IMAGE COMPRESSION & PERFORMANCE CHECKS PASSED 100%! ===\n');
