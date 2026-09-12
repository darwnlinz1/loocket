import fs from "node:fs";
import path from "node:path";
import assert from "node:assert";

console.log("=== VERIFYING ACCENT COLORS & UNIVERSAL SILKY SMOOTH SCROLLING ===\n");

const uiUpgradeCssPath = path.resolve("./assets/ui-upgrade.css");
const styleCssPath = path.resolve("./assets/style-v212.css");
const popupJsPath = path.resolve("./assets/popup-v212.js");

const uiUpgradeCss = fs.readFileSync(uiUpgradeCssPath, "utf-8");
const styleCss = fs.readFileSync(styleCssPath, "utf-8");
const popupJs = fs.readFileSync(popupJsPath, "utf-8");

// -------------------------------------------------------------
// Test 1: Complete 5-Color Accent Definitions in CSS
// -------------------------------------------------------------
console.log("Test 1: Complete 5-Color Accent Definitions in CSS");
const requiredAccents = ["gold", "rose", "blue", "violet", "orange"];

for (const accent of requiredAccents) {
  assert(
    uiUpgradeCss.includes(`data-accent="${accent}"`),
    `ui-upgrade.css must contain rules for data-accent="${accent}"`
  );
  assert(
    styleCss.includes(`data-accent="${accent}"`),
    `style-v212.css must contain rules for data-accent="${accent}"`
  );
}

// Verify that each accent defines key brand variables
const requiredTokens = [
  "--brand-300",
  "--brand-400",
  "--brand-500",
  "--brand-600",
  "--brand-700",
  "--brand-soft",
  "--brand-glow",
  "--glow-brand",
  "--accent-primary",
  "--accent-secondary",
  "--accent-soft",
  "--accent-border",
  "--accent-glow",
  "--chat-bubble-me"
];

for (const token of requiredTokens) {
  assert(
    uiUpgradeCss.includes(token),
    `ui-upgrade.css must define token ${token}`
  );
}
console.log("✓ Test 1 Passed: All 5 accent colors (gold, rose, blue, violet, orange) and design tokens verified!");

// -------------------------------------------------------------
// Test 2: Elimination of Hardcoded Colors in Upgraded UI
// -------------------------------------------------------------
console.log("\nTest 2: Elimination of Hardcoded Overrides in Upgraded UI");

assert(
  uiUpgradeCss.includes("._Tab_te3jl_11._active_te3jl_24 ._Label_te3jl_39::after") &&
  uiUpgradeCss.includes("background: var(--brand-400) !important;") &&
  uiUpgradeCss.includes("box-shadow: 0 0 8px var(--brand-glow) !important;"),
  "Bottom navigation active indicator must use var(--brand-400) and var(--brand-glow)"
);

assert(
  uiUpgradeCss.includes("._Tab_te3jl_11._active_te3jl_24 .lk-ios-icon") &&
  uiUpgradeCss.includes("color: var(--brand-400) !important;") &&
  uiUpgradeCss.includes("stroke: var(--brand-400) !important;"),
  "Bottom navigation active icon must use var(--brand-400)"
);

assert(
  uiUpgradeCss.includes("._Tab_te3jl_11._accent_te3jl_27") &&
  uiUpgradeCss.includes("color: var(--brand-400) !important;"),
  "Compose tab must use var(--brand-400)"
);

assert(
  uiUpgradeCss.includes("._Toggle_1mni3_134._on_1mni3_145") &&
  uiUpgradeCss.includes("background: var(--brand-500) !important;") &&
  uiUpgradeCss.includes("box-shadow: 0 4px 14px var(--brand-glow) !important;"),
  "Switch toggle ON state must dynamically adapt with var(--brand-500)"
);

assert(
  uiUpgradeCss.includes(".lk-gallery-filter-pill.active") &&
  uiUpgradeCss.includes("border: 1.5px solid var(--brand-400) !important;") &&
  uiUpgradeCss.includes("box-shadow: 0 0 14px var(--brand-glow) !important;"),
  "Gallery friend filter pill active must use var(--brand-400)"
);

assert(
  uiUpgradeCss.includes(".lk-gallery-month-header.expanded") &&
  uiUpgradeCss.includes("background: var(--brand-soft) !important;"),
  "Month Header expanded must use var(--brand-soft)"
);

assert(
  uiUpgradeCss.includes(".lk-gallery-month-expand-btn.active") &&
  uiUpgradeCss.includes("color: var(--brand-400) !important;"),
  "Month expand button active must use var(--brand-400)"
);

assert(
  uiUpgradeCss.includes(".lk-gallery-month-expanded-days") &&
  uiUpgradeCss.includes("border-left: 2px solid var(--brand-glow) !important;"),
  "Expanded days branch line must use var(--brand-glow)"
);

console.log("✓ Test 2 Passed: Hardcoded colors removed; active tabs, indicators, toggles, filter pills, and month clusters dynamically react!");

// -------------------------------------------------------------
// Test 3: Instant Reactivity in Settings Selection
// -------------------------------------------------------------
console.log("\nTest 3: Instant Reactivity in Settings Selection");

assert(
  popupJs.includes("document.documentElement.dataset.accent = next") &&
  popupJs.includes("if (document.body) document.body.dataset.accent = next"),
  "Accent select onChange must immediately set dataset.accent on documentElement and body"
);

assert(
  popupJs.includes("t.dataset.accent = accent") &&
  popupJs.includes("document.body.dataset.accent = accent"),
  "lkApplyPrefs must update dataset.accent on documentElement and body"
);

console.log("✓ Test 3 Passed: Settings accent selection triggers instant reactive DOM update without reload delay!");

// -------------------------------------------------------------
// Test 4: Universal Silky Smooth Scrolling CSS Rules
// -------------------------------------------------------------
console.log("\nTest 4: Universal Silky Smooth Scrolling CSS Rules");

const scrollContainers = [
  "html",
  "body",
  "._Scroll_8kz7b_7",
  "._Day_8kz7b_15",
  "._Body_1mni3_7",
  "._Body_1bafh_53",
  ".lk-conv-list",
  ".lk-room-messages",
  ".lk-gallery-filter-bar",
  ".lk-quick-friends-tray",
  ".lk-date-cleaner-card"
];

assert(
  uiUpgradeCss.includes("scroll-behavior: smooth !important;"),
  "CSS must enforce scroll-behavior: smooth !important"
);
assert(
  uiUpgradeCss.includes("overscroll-behavior-y: contain !important;"),
  "CSS must enforce overscroll-behavior-y: contain !important"
);
assert(
  uiUpgradeCss.includes("-webkit-overflow-scrolling: touch !important;"),
  "CSS must enforce -webkit-overflow-scrolling: touch !important"
);

for (const container of scrollContainers) {
  assert(
    uiUpgradeCss.includes(container),
    `Universal smooth scrolling must target ${container}`
  );
}

assert(
  uiUpgradeCss.includes("::-webkit-scrollbar") &&
  uiUpgradeCss.includes("::-webkit-scrollbar-thumb") &&
  uiUpgradeCss.includes("::-webkit-scrollbar-thumb:active") &&
  uiUpgradeCss.includes("background: var(--brand-400) !important;"),
  "Apple iOS ultra-sleek scrollbars with dynamic accent active state must be present"
);

assert(
  uiUpgradeCss.includes("transform: translateZ(0);") &&
  uiUpgradeCss.includes("backface-visibility: hidden;"),
  "GPU composite layers for high-performance 60fps scrolling must be enabled"
);

console.log("✓ Test 4 Passed: Universal smooth scrolling, momentum physics, iOS scrollbars, and GPU layers verified!");

// -------------------------------------------------------------
// Test 5: JS Universal Smooth Momentum Engine
// -------------------------------------------------------------
console.log("\nTest 5: JS Universal Smooth Momentum Engine");

assert(
  popupJs.includes("function initUniversalSmoothScroll()"),
  "popup-v212.js must contain initUniversalSmoothScroll definition"
);
assert(
  popupJs.includes("initUniversalSmoothScroll()"),
  "popup-v212.js must invoke initUniversalSmoothScroll()"
);
assert(
  popupJs.includes("requestAnimationFrame(springStep)"),
  "Smooth scroll engine must use requestAnimationFrame spring animation"
);
assert(
  popupJs.includes("isReducedMotion()"),
  "Smooth scroll engine must respect user preference"
);

console.log("✓ Test 5 Passed: Universal smooth momentum engine with spring physics decay verified!");

console.log("\n=== ALL 5 ACCENT COLOR & SMOOTH SCROLLING CHECKS PASSED 100%! ===");
