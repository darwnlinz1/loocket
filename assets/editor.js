/* loocket quick editor — module độc lập, không đụng app React đã minify.
   Luồng: người dùng chọn ảnh đăng → editor mở → "Xong" → bơm ảnh đã chỉnh
   trở lại input gốc (DataTransfer + event change) để app tiếp tục đăng bình thường. */
"use strict";

(() => {

  /* ========================= cấu hình ========================= */

  const OUTPUT_EDGE = 1020;
  const MAX_OUTPUT_BYTES = 4 * 1024 * 1024 - 64 * 1024;
  const MIN_S = 0.5, MAX_S = 6;
  const UNDO_MAX = 30;
  const TEXT_MAX = 180;
  const EMOJI_FONT = '"Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif';
  const TEXT_COLORS = ["#FFFFFF", "#111111", "#8B5CF6", "#EC4899", "#FACC15", "#EF4444", "#22C55E", "#3B82F6"];
  const TEXT_FONT = '"Manrope", Inter, system-ui, sans-serif';
  const FILTERS = {
    original: { label: "Gốc", bri: 1, con: 1, sat: 1, hue: 0, sepia: 0 },
    vivid: { label: "Tươi", bri: 1.04, con: 1.12, sat: 1.35, hue: 0, sepia: 0 },
    warm: { label: "Ấm", bri: 1.04, con: 1.05, sat: 1.1, hue: -10, sepia: 0.14 },
    cool: { label: "Lạnh", bri: 1.03, con: 1.08, sat: 1.08, hue: 14, sepia: 0 },
    fade: { label: "Mờ", bri: 1.1, con: 0.9, sat: 0.72, hue: 0, sepia: 0.08 },
    mono: { label: "Mono", bri: 1.04, con: 1.1, sat: 0, hue: 0, sepia: 0 },
  };
  const DEFAULT_ADJUST = { bri: 0, con: 0, sat: 0, warm: 0, vig: 0 };

  /* ========================= dữ liệu sticker ========================= */

  const STICKER_GROUPS = [
    ["Cảm xúc", [
      ["😀", "vui cuoi haha happy"], ["😁", "tuoi cuoi grin"], ["😂", "cuoi nuoc mat lol"],
      ["🤣", "lol dam rolled"], ["😊", "vui nhe smile"], ["😍", "yeu thich mat tim adore"],
      ["😘", "thom kiss"], ["😜", "le luoi winking"], ["🤪", "dien crazy"], ["😎", "ngau cool den"],
      ["🥳", "tiec party celebrate"], ["🥰", "yeu hearts"], ["😭", "khoc cry buon"],
      ["😢", "nuoc mat sad"], ["😱", "kinh hoang shock scream"], ["😡", "gian angry mad"],
      ["🤯", "no dau mindblown"], ["😴", "ngu sleep buon ngu"], ["🤔", "nghi think suy nghi"],
      ["🥺", "mat long lanh pleading"], ["😤", "hu determined"], ["🤗", "om hug"],
      ["🫡", "chao salute"], ["😅", "mo hoi cuoi sweat"], ["🥹", "xuc dong tears"]
    ]],
    ["Yêu thích", [
      ["❤️", "tim do love red"], ["🧡", "tim cam orange"], ["💛", "tim vang yellow"],
      ["💚", "tim xanh la green"], ["💙", "tim xanh duong blue"], ["💜", "tim tim purple"],
      ["🖤", "tim den black"], ["🤍", "tim trang white"], ["💖", "tim lap lanh sparkling"],
      ["💗", "tim hong pink"], ["💓", "tim dap beat"], ["💞", "tim xoay revolving"],
      ["💕", "hai tim two hearts"], ["❣️", "tim cham"], ["💘", "tim mui ten cupid"],
      ["💝", "tim ruy bang ribbon"], ["💌", "thu tinh letter"]
    ]],
    ["Sự kiện", [
      ["🎉", "sinh nhat tada party celebrate"], ["🎊", "hoa giay confetti"], ["🥂", "cung ly cheers"],
      ["🍾", "champagne mo chai"], ["🎂", "banh sinh nhat birthday cake"], ["🎁", "qua gift"],
      ["🎈", "bong bay balloon"], ["🎆", "phao hoa fireworks"], ["✨", "lap lanh sparkles"],
      ["🌟", "ngoi sao sang star"], ["⭐", "sao star"], ["🏆", "cup trophy win"],
      ["🥇", "huy chuong vang medal"], ["🎯", "muc tieu target bullseye"], ["🎐", "chuong gio"]
    ]],
    ["Đồ vật", [
      ["📸", "chup anh camera moments"], ["📷", "may anh photo"], ["💻", "laptop may tinh"],
      ["📱", "dien thoai phone"], ["⌚", "dong ho watch"], ["🎧", "tai nghe headphone"],
      ["🎸", "guitar"], ["🎮", "tro choi game"], ["🚗", "xe hoi car"], ["✈️", "may bay du lich travel"],
      ["🏝️", "dao beach vacation"], ["🌈", "cau vong rainbow"], ["☀️", "nang sun"],
      ["🌙", "trang moon"], ["☁️", "may cloud"], ["❄️", "tuyet snow"],
      ["🔥", "lua fire hot"], ["💧", "giot nuoc drop"]
    ]],
    ["Ẩm thực", [
      ["☕", "ca phe coffee"], ["🍵", "tra tea"], ["🧋", "tra sua bubble milktea"],
      ["🍜", "mi noodle pho"], ["🍕", "pizza"], ["🍔", "hamburger burger"],
      ["🍟", "khoai tay chien fries"], ["🌮", "taco"], ["🍣", "sushi"],
      ["🍩", "donut doughnut"], ["🍪", "cookie biscuit"], ["🍰", "banh cake"],
      ["🍫", "so co la chocolate"], ["🍓", "dau strawberry"], ["🥑", "bo avocado"],
      ["🍉", "dua hau watermelon"], ["🍇", "nho grape"]
    ]],
    ["Biểu tượng", [
      ["👍", "like thumbsup ok"], ["👎", "dislike"], ["👏", "vo tay clap"],
      ["🙌", "hoan ho hooray"], ["🤝", "bat tay handshake"], ["✌️", "hai peace victory"],
      ["🫶", "tim tay hearthands"], ["🙏", "cam on pray thanks"], ["💪", "manh me strong muscle"],
      ["👀", "mat nhin eyes look"], ["🌸", "hoa anh dao sakura flower"], ["🌺", "hoa do hibiscus"],
      ["🌻", "hoa huong duong sunflower"], ["🍀", "co bon la may man luck"],
      ["💯", "tram diem 100 perfect"], ["✔️", "dung check"], ["✖️", "sai x"],
      ["⁉️", "hoi exclaim"], ["➕", "cong plus"], ["➖", "tru minus"]
    ]]
  ];

  /* ========================= tiện ích ========================= */

  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lum = (hex) => {
    const m = /^#?([0-9a-f]{6})$/i.exec(hex || "");
    if (!m) return 1;
    const n = parseInt(m[1], 16);
    return (0.299 * ((n >> 16) & 255) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255;
  };

  function elDiv(cls, txt) {
    const d = document.createElement("div");
    if (cls) d.className = cls;
    if (txt !== undefined) d.textContent = txt;
    return d;
  }

  function elBtn(cls, label, title) {
    const b = document.createElement("button");
    b.type = "button";
    if (cls) b.className = cls;
    if (label !== undefined) b.innerHTML = label;
    if (title) {
      b.title = title;
      b.setAttribute("aria-label", title);
    }
    return b;
  }

  function fmtBytes(n) {
    if (!n || n < 0) return "";
    if (n < 1024) return n + " B";
    if (n < 1048576) return (n / 1024).toFixed(n < 10240 ? 1 : 0).replace(/\.0$/, "") + " KB";
    return (n / 1048576).toFixed(2).replace(/\.00$/, "") + " MB";
  }

  function iosIcon(name) {
    const paths = {
      close: '<path d="M6.8 6.8l10.4 10.4M17.2 6.8 6.8 17.2"/>',
      download: '<path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5"/><path d="M5 20h14"/>',
      rotate: '<path d="M20 7v5h-5"/><path d="M18.2 16.8A8 8 0 1 1 20 12"/>',
      resize: '<path d="M8 3H3v5M16 21h5v-5M3 8l6-6M21 16l-6 6"/>',
      edit: '<path d="m4 20 4.1-1 10.7-10.7a2.1 2.1 0 0 0-3-3L5.1 16 4 20Z"/><path d="m14.5 6.5 3 3"/>',
      up: '<path d="m6 10 6-6 6 6M12 4v16"/>',
      down: '<path d="m6 14 6 6 6-6M12 20V4"/>',
      duplicate: '<rect x="8" y="8" width="12" height="12" rx="3"/><path d="M16 8V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h1"/>',
      trash: '<path d="M4 7h16M9 3h6l1 4M7 7l1 14h8l1-14M10 11v6M14 11v6"/>',
      text: '<path d="M4 6V4h11v2M9.5 4v16M6 20h7"/><path d="M15 12h5m-2.5-2.5v5"/>',
      sticker: '<circle cx="12" cy="12" r="9"/><path d="M8.5 10h.01M15.5 10h.01M8.5 14.5c1 1.2 2.1 1.8 3.5 1.8s2.5-.6 3.5-1.8"/>',
      minus: '<path d="M5 12h14"/>',
      plus: '<path d="M5 12h14M12 5v14"/>',
      fit: '<path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5"/>',
      undo: '<path d="M9 7 4 12l5 5"/><path d="M5 12h8a6 6 0 0 1 6 6v1"/>',
      reset: '<path d="M4 4v6h6"/><path d="M5.5 15.5A8 8 0 1 0 6 7"/>',
      check: '<path d="m5 12.5 4.2 4.2L19 7"/>',
      tune: '<path d="M4 8h10M18 8h2M12 16h8M4 16h4"/><circle cx="16" cy="8" r="2"/><circle cx="10" cy="16" r="2"/>',
    };
    return `<svg class="lk-ios-icon" viewBox="0 0 24 24" aria-hidden="true">${paths[name] || ""}</svg>`;
  }

  function wrapLines(ctx, text, maxW) {
    const out = [];
    for (const para of String(text).split("\n")) {
      if (!para) { out.push(""); continue; }
      let line = "";
      for (const w of para.split(" ")) {
        const t = line ? line + " " + w : w;
        if (ctx.measureText(t).width <= maxW || !line) line = t;
        else { out.push(line); line = w; }
      }
      out.push(line);
    }
    return out.length ? out : [""];
  }

  function photoCssFilter() {
    const p = FILTERS[S.filter] || FILTERS.original;
    const a = S.adjust;
    const bri = p.bri * (1 + a.bri / 140);
    const con = p.con * (1 + a.con / 140);
    const sat = Math.max(0, p.sat * (1 + a.sat / 120));
    const hue = p.hue + a.warm * 0.45;
    const sepia = Math.min(0.45, p.sepia + Math.max(0, a.warm) / 220);
    return `brightness(${bri}) contrast(${con}) saturate(${sat}) hue-rotate(${hue}deg) sepia(${sepia})`;
  }

  function looksDefault() {
    const a = S.adjust;
    return S.filter === "original" &&
      !a.bri && !a.con && !a.sat && !a.warm && !a.vig &&
      S.items.length === 0 && S.rot90 === 0 &&
      Math.abs(S.tf.x) < 0.5 && Math.abs(S.tf.y) < 0.5 && Math.abs(S.tf.s - 1) < 0.001;
  }

  function applyPhotoLook() {
    if (S.el.photoimg) S.el.photoimg.style.filter = photoCssFilter();
    if (S.el.backdrop) S.el.backdrop.style.filter = photoCssFilter() + " blur(20px) saturate(1.08)";
    if (S.el.vignette) S.el.vignette.style.opacity = String(Math.max(0, S.adjust.vig) / 100);
  }

  function updateQualityHint() {
    if (!S.el.quality) return;
    const orig = S.file && S.file.size ? " · gốc " + fmtBytes(S.file.size) : "";
    S.el.quality.textContent = looksDefault()
      ? "Khung vuông · 1020 px · giữ ảnh gốc" + orig
      : "1020×1020 · PNG nếu < 4MB · JPEG nếu lớn hơn" + orig;
  }

  function showGrid() {
    if (!S.el.thirds) return;
    S.el.thirds.classList.add("lk-ed-on");
    clearTimeout(S.gridT);
    S.gridT = setTimeout(() => S.el.thirds && S.el.thirds.classList.remove("lk-ed-on"), 720);
  }

  function syncFilterUi() {
    if (!S.el.filters) return;
    for (const b of S.el.filters.querySelectorAll(".lk-ed-fbtn")) {
      b.classList.toggle("lk-ed-on", b.dataset.filter === S.filter);
    }
    if (S.el.adj) {
      for (const inp of S.el.adj.querySelectorAll("input[type=range]")) {
        const k = inp.dataset.adj;
        if (k && k in S.adjust) inp.value = S.adjust[k];
      }
    }
  }

  /* ========================= dựng overlay ========================= */

  const S = {
    open: false, cb: null,
    file: null, url: null, img: null, natW: 0, natH: 0, rot90: 0,
    tf: { x: 0, y: 0, s: 1 },
    items: [], sel: null, uid: 0, zTop: 0,
    undo: [],
    stage: { w: 0, h: 0 },
    itemEls: new Map(),
    el: {},
    toastT: 0,
    gridT: 0,
    filter: "original",
    adjust: { ...DEFAULT_ADJUST },
    emojiCache: new Map(),
  };

  let rafId = 0, rafQ = [];
  function schedule(fn) {
    rafQ.push(fn);
    if (!rafId) rafId = requestAnimationFrame(() => {
      rafId = 0;
      const q = rafQ; rafQ = [];
      for (const f of q) f();
    });
  }

  /* ========================= undo ========================= */

  const snap = () => ({
    tf: { ...S.tf },
    rot90: S.rot90,
    items: JSON.parse(JSON.stringify(S.items)),
    zTop: S.zTop,
    filter: S.filter,
    adjust: { ...S.adjust },
  });

  function pushUndo() {
    S.undo.push(snap());
    if (S.undo.length > UNDO_MAX) S.undo.shift();
    updateUndoBtn();
  }

  function doUndo() {
    const s = S.undo.pop();
    if (!s) return;
    S.tf = { ...s.tf };
    S.rot90 = s.rot90;
    S.items = JSON.parse(JSON.stringify(s.items));
    S.zTop = s.zTop;
    S.filter = s.filter || "original";
    S.adjust = { ...DEFAULT_ADJUST, ...(s.adjust || {}) };
    S.sel = null;
    renderItems();
    layout();
    applyPhotoLook();
    syncFilterUi();
    updateQualityHint();
    updateUndoBtn();
  }

  function updateUndoBtn() {
    if (S.el.btnUndo) S.el.btnUndo.classList.toggle("lk-ed-off", S.undo.length === 0);
  }

  /* ========================= dựng overlay ========================= */

  function buildOverlay() {
    const root = elDiv("lk-ed");

    const top = elDiv("lk-ed-top");
    const btnClose = elBtn("lk-ed-icobtn", iosIcon("close"), "Đóng (bỏ đăng ảnh này)");
    const titleWrap = elDiv("lk-ed-titlewrap");
    const title = elDiv("lk-ed-title", "Chỉnh sửa ảnh");
    const quality = elDiv("lk-ed-quality", "Khung vuông · 1020 px · Chất lượng cao");
    titleWrap.append(title, quality);
    const btnDl = elBtn("lk-ed-icobtn", iosIcon("download"), "Tải ảnh đã chỉnh về máy");
    top.append(btnClose, titleWrap, btnDl);

    const mid = elDiv("lk-ed-mid");
    const stage = elDiv("lk-ed-stage");
    const backdrop = document.createElement("img");
    backdrop.className = "lk-ed-backdrop";
    backdrop.alt = "";
    backdrop.draggable = false;
    const photo = elDiv("lk-ed-photo");
    const photoimg = document.createElement("img");
    photoimg.className = "lk-ed-photoimg";
    photoimg.alt = "";
    photoimg.draggable = false;
    photo.appendChild(photoimg);
    const itemsLayer = elDiv("lk-ed-items");

    const selwrap = elDiv("lk-ed-selwrap");
    const selbox = elDiv("lk-ed-selbox");
    selbox.style.display = "none";
    const hRot = elBtn("lk-ed-h-rot", iosIcon("rotate"), "Kéo để xoay");
    const hSize = elBtn("lk-ed-h-size", iosIcon("resize"), "Kéo để đổi kích thước");
    selbox.append(hRot, hSize);
    const itemtools = elDiv("lk-ed-itemtools");
    itemtools.style.display = "none";
    const itEdit = elBtn("", iosIcon("edit"), "Sửa chữ");
    const itUp = elBtn("", iosIcon("up"), "Đưa lên trên");
    const itDown = elBtn("", iosIcon("down"), "Đưa xuống dưới");
    const itDup = elBtn("", iosIcon("duplicate"), "Nhân bản");
    const itDel = elBtn("", iosIcon("trash"), "Xoá");
    itemtools.append(itEdit, itUp, itDown, itDup, itDel);
    selwrap.append(selbox, itemtools);

    const hint = elDiv("lk-ed-hint", "Kéo để căn khung · Lăn chuột để thu phóng · Nhấn đúp để vừa");
    const thirds = elDiv("lk-ed-thirds");
    const vignette = elDiv("lk-ed-vignette");
    const spinwrap = elDiv("lk-ed-spinwrap");
    spinwrap.appendChild(elDiv("lk-ed-spin"));
    stage.append(backdrop, photo, vignette, thirds, itemsLayer, selwrap, hint, spinwrap);
    mid.appendChild(stage);

    const bottom = elDiv("lk-ed-bottom");

    const filters = elDiv("lk-ed-filters");
    for (const [id, spec] of Object.entries(FILTERS)) {
      const b = elBtn("lk-ed-fbtn" + (id === "original" ? " lk-ed-on" : ""), spec.label);
      b.dataset.filter = id;
      filters.appendChild(b);
    }

    const tools = elDiv("lk-ed-tools");
    const btnText = elBtn("lk-ed-tbtn", `<span class="lk-ed-tico">${iosIcon("text")}</span>Chữ`);
    const btnSticker = elBtn("lk-ed-tbtn", `<span class="lk-ed-tico">${iosIcon("sticker")}</span>Sticker`);
    const sep1 = elDiv("lk-ed-sep");
    const btnMinus = elBtn("lk-ed-tbtn", iosIcon("minus"), "Thu nhỏ");
    const zoomlbl = elDiv("lk-ed-zoomlbl", "100%");
    const btnPlus = elBtn("lk-ed-tbtn", iosIcon("plus"), "Phóng to");
    const btnFit = elBtn("lk-ed-tbtn", iosIcon("fit"), "Vừa khung");
    const btnRot = elBtn("lk-ed-tbtn", `<span class="lk-ed-tico">${iosIcon("rotate")}</span>Xoay`, "Xoay 90°");
    const sep2 = elDiv("lk-ed-sep");
    const btnUndo = elBtn("lk-ed-tbtn", `<span class="lk-ed-tico">${iosIcon("undo")}</span>Undo`, "Hoàn tác (Ctrl+Z)");
    const btnReset = elBtn("lk-ed-tbtn", `${iosIcon("reset")}Reset`, "Đặt lại mọi chỉnh sửa");
    const btnTune = elBtn("lk-ed-tbtn", `<span class="lk-ed-tico">${iosIcon("tune")}</span>Chỉnh`, "Sáng, tương phản, bão hoà");
    tools.append(btnText, btnSticker, sep1, btnMinus, zoomlbl, btnPlus, btnFit, btnRot, sep2, btnUndo, btnReset, btnTune);

    const actions = elDiv("lk-ed-actions");
    const btnSkip = elBtn("lk-ed-btn-ghost", "Bỏ chỉnh sửa");
    const btnFinish = elBtn("lk-ed-btn-primary", `Xong ${iosIcon("check")}`);
    actions.append(btnSkip, btnFinish);

    /* panel sticker */
    const sheet = elDiv("lk-ed-sheet");
    const sheetHead = elDiv("lk-ed-sheet-head");
    const search = document.createElement("input");
    search.className = "lk-ed-search";
    search.type = "text";
    search.placeholder = "Tìm sticker…";
    const sheetClose = elBtn("lk-ed-icobtn", iosIcon("close"), "Đóng");
    sheetHead.append(search, sheetClose);
    const tabs = elDiv("lk-ed-tabs");
    const grid = elDiv("lk-ed-grid lk-ed-scroll");
    sheet.append(sheetHead, tabs, grid);

    /* panel chữ */
    const tpanel = elDiv("lk-ed-textpanel");
    const ta = document.createElement("textarea");
    ta.className = "lk-ed-ta";
    ta.maxLength = TEXT_MAX;
    ta.placeholder = "Nhập chữ lên ảnh…";
    const row2 = elDiv("lk-ed-prow");
    const lblColor = elDiv("lk-ed-prow-lbl", "Màu");
    const swWrap = elDiv();
    swWrap.style.cssText = "display:flex;gap:6px;flex-wrap:wrap";
    for (const c of TEXT_COLORS) {
      const sw = elBtn("lk-ed-sw", "");
      sw.style.background = c;
      sw.dataset.color = c;
      sw.title = c;
      if (c === "#111111") sw.style.boxShadow = "inset 0 0 0 1px rgba(255,255,255,.35)";
      swWrap.appendChild(sw);
    }
    row2.append(lblColor, swWrap);
    const row3 = elDiv("lk-ed-prow");
    const lblBg = elDiv("lk-ed-prow-lbl", "Nền");
    const bgSeg = elDiv("lk-ed-seg");
    const bgOpts = [["none", "Không"], ["dim", "Mờ"], ["solid", "Đặc"]];
    for (const [v, l] of bgOpts) {
      const b = elBtn("", l); b.dataset.bg = v; bgSeg.appendChild(b);
    }
    const lblAlign = elDiv("lk-ed-prow-lbl", "Căn");
    const alignSeg = elDiv("lk-ed-seg");
    const alignOpts = [["left", "Trái"], ["center", "Giữa"], ["right", "Phải"]];
    for (const [v, l] of alignOpts) {
      const b = elBtn("", l); b.dataset.align = v; alignSeg.appendChild(b);
    }
    row3.append(lblBg, bgSeg, lblAlign, alignSeg);
    const row4 = elDiv("lk-ed-prow");
    const lblSize = elDiv("lk-ed-prow-lbl", "Cỡ");
    const sizeRange = document.createElement("input");
    sizeRange.className = "lk-ed-range";
    sizeRange.type = "range";
    sizeRange.min = "0.03"; sizeRange.max = "0.2"; sizeRange.step = "0.002";
    const count = elDiv("lk-ed-count", "0/" + TEXT_MAX);
    row4.append(lblSize, sizeRange, count);
    const btnTextDone = elBtn("lk-ed-textdone", "Xong");
    tpanel.append(ta, row2, row3, row4, btnTextDone);

    const adj = elDiv("lk-ed-adjust");
    adj.appendChild(elDiv("lk-ed-adjust-title", "Chỉnh màu"));
    const adjRows = [
      ["bri", "Sáng"],
      ["con", "Tương phản"],
      ["sat", "Bão hoà"],
      ["warm", "Ấm / lạnh"],
      ["vig", "Viền tối"],
    ];
    for (const [k, label] of adjRows) {
      const row = elDiv("lk-ed-adjrow");
      row.appendChild(elDiv("lk-ed-prow-lbl", label));
      const inp = document.createElement("input");
      inp.className = "lk-ed-range";
      inp.type = "range";
      inp.min = k === "vig" ? "0" : "-50";
      inp.max = "50";
      inp.step = "1";
      inp.value = "0";
      inp.dataset.adj = k;
      row.appendChild(inp);
      adj.appendChild(row);
    }
    const adjReset = elBtn("lk-ed-textdone", "Đặt lại chỉnh màu");
    adj.appendChild(adjReset);

    const toast = elDiv("lk-ed-toast");

    bottom.append(sheet, tpanel, adj, filters, tools, actions);
    root.append(top, mid, bottom, toast);
    document.body.appendChild(root);

    S.el = {
      root, btnClose, btnDl, mid, stage, backdrop, photo, photoimg,
      items: itemsLayer, selwrap, selbox, hRot, hSize, itemtools,
      itEdit, itUp, itDown, itDup, itDel,
      hint, spinwrap, thirds, vignette, filters, adj, btnTune,
      btnText, btnSticker, btnMinus, zoomlbl, btnPlus, btnFit, btnRot, btnUndo, btnReset,
      btnSkip, btnFinish,
      sheet, search, sheetClose, tabs, grid,
      tpanel, ta, swWrap, bgSeg, alignSeg, sizeRange, count, btnTextDone,
      toast, quality,
    };

    /* ---- nối sự kiện ---- */
    btnClose.addEventListener("click", doCancel);
    btnDl.addEventListener("click", doDownload);
    btnText.addEventListener("click", () => addItem("text"));
    btnSticker.addEventListener("click", toggleSheet);
    sheetClose.addEventListener("click", closeSheet);
    btnMinus.addEventListener("click", () => { pushUndo(); zoomAt(S.stage.w / 2, S.stage.h / 2, 1 / 1.25); showGrid(); });
    btnPlus.addEventListener("click", () => { pushUndo(); zoomAt(S.stage.w / 2, S.stage.h / 2, 1.25); showGrid(); });
    btnFit.addEventListener("click", doFit);
    zoomlbl.addEventListener("dblclick", doFit);
    zoomlbl.title = "Nhấn đúp để vừa khung";
    btnRot.addEventListener("click", doRotate90);
    btnUndo.addEventListener("click", doUndo);
    btnReset.addEventListener("click", doReset);
    btnTune.addEventListener("click", () => {
      closeSheet();
      closeTextPanel();
      adj.classList.toggle("lk-ed-on");
    });
    btnSkip.addEventListener("click", () => { const cb = S.cb; close(); cb && cb.onOriginal && cb.onOriginal(); });
    btnFinish.addEventListener("click", finish);

    for (const b of filters.children) {
      b.addEventListener("click", () => {
        if (S.filter === b.dataset.filter) return;
        pushUndo();
        S.filter = b.dataset.filter;
        applyPhotoLook();
        syncFilterUi();
        updateQualityHint();
      });
    }
    for (const inp of adj.querySelectorAll("input[type=range]")) {
      inp.addEventListener("pointerdown", pushUndo);
      inp.addEventListener("input", () => {
        S.adjust[inp.dataset.adj] = Number(inp.value);
        applyPhotoLook();
        updateQualityHint();
      });
    }
    adjReset.addEventListener("click", () => {
      pushUndo();
      S.adjust = { ...DEFAULT_ADJUST };
      applyPhotoLook();
      syncFilterUi();
      updateQualityHint();
    });

    itEdit.addEventListener("click", () => {
      const it = selItem();
      if (it && it.kind === "text") openTextPanel(it);
    });
    itUp.addEventListener("click", () => { const it = selItem(); if (it) { pushUndo(); it.z = ++S.zTop; renderItems(); } });
    itDown.addEventListener("click", () => { const it = selItem(); if (it) { pushUndo(); it.z = Math.max(0, it.z - 1); renderItems(); } });
    itDup.addEventListener("click", duplicateSel);
    itDel.addEventListener("click", deleteSel);

    search.addEventListener("input", renderGrid);
    sizeRange.addEventListener("pointerdown", pushUndo);
    sizeRange.addEventListener("input", () => {
      const it = selItem();
      if (it) { it.size = parseFloat(sizeRange.value); renderItems(); schedule(renderSel); }
    });
    ta.addEventListener("input", () => {
      const it = selItem();
      if (!it) return;
      it.text.value = ta.value.slice(0, TEXT_MAX);
      S.el.count.textContent = it.text.value.length + "/" + TEXT_MAX;
      renderItems(); schedule(renderSel);
    });
    for (const sw of swWrap.children) {
      sw.addEventListener("click", () => {
        const it = selItem(); if (!it) return;
        pushUndo(); it.text.color = sw.dataset.color; syncTextPanel(it);
        renderItems(); schedule(renderSel);
      });
    }
    for (const b of bgSeg.children) {
      b.addEventListener("click", () => {
        const it = selItem(); if (!it) return;
        pushUndo(); it.text.bg = b.dataset.bg; syncTextPanel(it);
        renderItems(); schedule(renderSel);
      });
    }
    for (const b of alignSeg.children) {
      b.addEventListener("click", () => {
        const it = selItem(); if (!it) return;
        pushUndo(); it.text.align = b.dataset.align; syncTextPanel(it);
        renderItems(); schedule(renderSel);
      });
    }
    btnTextDone.addEventListener("click", commitTextPanel);

    buildTabs();
    attachPhotoGestures();
    attachSelHandles();

    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
  }

  function onResize() { if (S.open) layout(); }

  const selItem = () => S.items.find((i) => i.id === S.sel);

  /* ========================= mở / đóng / nạp ảnh ========================= */

  function open(file, cb) {
    if (S.open) return false;
    S.open = true;
    S.cb = cb;
    S.file = file;
    S.url = URL.createObjectURL(file);
    buildOverlay();
    const img = new Image();
    img.decoding = "async";
    img.onload = () => {
      if (!S.open) return;
      S.img = img;
      S.natW = img.naturalWidth;
      S.natH = img.naturalHeight;
      S.el.backdrop.src = S.url;
      S.el.photoimg.src = S.url;
      S.el.spinwrap.style.display = "none";
      applyPhotoLook();
      updateQualityHint();
      layout();
    };
    img.onerror = () => {
      toast("Không đọc được ảnh này");
      setTimeout(doCancel, 700);
    };
    img.src = S.url;
    return true;
  }

  function close() {
    if (!S.open) return;
    S.open = false;
    document.removeEventListener("keydown", onKey);
    window.removeEventListener("resize", onResize);
    if (S.el.root) S.el.root.remove();
    if (S.url) URL.revokeObjectURL(S.url);
    S.el = {};
    S.itemEls.clear();
    S.items = []; S.sel = null; S.undo = [];
    S.tf = { x: 0, y: 0, s: 1 };
    S.rot90 = 0; S.img = null; S.url = null; S.file = null; S.cb = null;
    S.filter = "original";
    S.adjust = { ...DEFAULT_ADJUST };
    S.emojiCache.clear();
    S.stage = { w: 0, h: 0 };
  }

  function doCancel() {
    const cb = S.cb;
    close();
    cb && cb.onCancel && cb.onCancel();
  }

  /* ========================= bố cục ========================= */

  function layout() {
    if (!S.el.mid || !S.natW) return;
    const box = S.el.mid.getBoundingClientRect();
    const availW = Math.max(80, box.width - 4);
    const availH = Math.max(80, box.height - 4);
    const edge = Math.floor(Math.min(availW, availH));
    S.stage = { w: edge, h: edge };
    S.el.stage.style.width = S.stage.w + "px";
    S.el.stage.style.height = S.stage.h + "px";
    constrainPhotoTransform();
    renderPhoto();
    renderItems();
    renderSel();
  }

  function getCoverScale() {
    const even = S.rot90 % 2 === 0;
    const rw = even ? S.natW : S.natH;
    const rh = even ? S.natH : S.natW;
    return Math.max(S.stage.w / rw, S.stage.h / rh);
  }

  function constrainPhotoTransform() {
    if (!S.natW || !S.stage.w) return;
    S.tf.s = clamp(S.tf.s, MIN_S, MAX_S);
    const even = S.rot90 % 2 === 0;
    const rw = even ? S.natW : S.natH;
    const rh = even ? S.natH : S.natW;
    const base = getCoverScale() * S.tf.s;
    const maxX = Math.max(0, (rw * base - S.stage.w) / 2);
    const maxY = Math.max(0, (rh * base - S.stage.h) / 2);
    S.tf.x = clamp(S.tf.x, -maxX, maxX);
    S.tf.y = clamp(S.tf.y, -maxY, maxY);
  }

  function renderPhoto() {
    if (!S.img || !S.el.photoimg) return;
    constrainPhotoTransform();
    const base = getCoverScale();
    const im = S.el.photoimg;
    im.style.width = S.natW * base + "px";
    im.style.height = S.natH * base + "px";
    im.style.transform =
      "translate(-50%,-50%) translate(" + S.tf.x + "px," + S.tf.y + "px) rotate(" +
      (S.rot90 * 90) + "deg) scale(" + S.tf.s + ")";
    if (S.el.zoomlbl) {
      S.el.zoomlbl.textContent = Math.round(S.tf.s * 100) + "%";
      S.el.btnMinus.classList.toggle("lk-ed-off", S.tf.s <= MIN_S + 1e-4);
      S.el.btnPlus.classList.toggle("lk-ed-off", S.tf.s >= MAX_S - 1e-4);
    }
  }

  function zoomAt(px, py, f) {
    const ns = clamp(S.tf.s * f, MIN_S, MAX_S);
    if (Math.abs(ns - S.tf.s) < 1e-6) return;
    const kk = ns / S.tf.s;
    S.tf.x = px - (px - S.tf.x) * kk;
    S.tf.y = py - (py - S.tf.y) * kk;
    S.tf.s = ns;
    constrainPhotoTransform();
    renderPhoto();
    showGrid();
    updateQualityHint();
  }

  function doFit() {
    pushUndo();
    S.tf = { x: 0, y: 0, s: 1 };
    renderPhoto();
  }

  function doRotate90() {
    pushUndo();
    S.rot90 = (S.rot90 + 1) & 3;
    layout();
  }

  function doReset() {
    pushUndo();
    S.tf = { x: 0, y: 0, s: 1 };
    S.rot90 = 0;
    S.items = []; S.sel = null; S.zTop = 0;
    S.filter = "original";
    S.adjust = { ...DEFAULT_ADJUST };
    closeSheet(); closeTextPanel(); closeAdjust();
    applyPhotoLook();
    syncFilterUi();
    updateQualityHint();
    renderItems();
    layout();
  }

  /* ========================= cử chỉ ảnh: pan / pinch / wheel ========================= */

  function attachPhotoGestures() {
    const ph = S.el.photo;
    const pts = new Map();
    let panRef = null, pinchRef = null, moved = false;

    const midOf = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });

    ph.addEventListener("pointerdown", (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      if (S.sel) { S.sel = null; renderSel(); }
      ph.setPointerCapture(e.pointerId);
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.size === 1) {
        moved = false;
        panRef = { x0: S.tf.x, y0: S.tf.y, px: e.clientX, py: e.clientY };
        pushUndo();
        ph.classList.add("lk-ed-grabbing");
      } else if (pts.size === 2) {
        const [a, b] = [...pts.values()];
        pinchRef = {
          d0: Math.hypot(a.x - b.x, a.y - b.y) || 1,
          m0: midOf(a, b), s0: S.tf.s, x0: S.tf.x, y0: S.tf.y,
        };
        panRef = null;
      }
    });

    ph.addEventListener("pointermove", (e) => {
      if (!pts.has(e.pointerId)) return;
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.size >= 2 && pinchRef) {
        const [a, b] = [...pts.values()];
        const d = Math.hypot(a.x - b.x, a.y - b.y) || 1;
        const m = midOf(a, b);
        const ns = clamp(pinchRef.s0 * d / pinchRef.d0, MIN_S, MAX_S);
        const kk = ns / pinchRef.s0;
        S.tf.s = ns;
        S.tf.x = m.x - (pinchRef.m0.x - pinchRef.x0) * kk;
        S.tf.y = m.y - (pinchRef.m0.y - pinchRef.y0) * kk;
        constrainPhotoTransform();
        moved = true;
        showGrid();
        schedule(renderPhoto);
      } else if (panRef) {
        const dx = e.clientX - panRef.px, dy = e.clientY - panRef.py;
        if (Math.abs(dx) + Math.abs(dy) > 2) moved = true;
        S.tf.x = panRef.x0 + dx;
        S.tf.y = panRef.y0 + dy;
        constrainPhotoTransform();
        showGrid();
        schedule(renderPhoto);
      }
    });

    const up = (e) => {
      if (!pts.delete(e.pointerId)) return;
      if (pts.size === 1) {
        const [p] = [...pts.values()];
        panRef = { x0: S.tf.x, y0: S.tf.y, px: p.x, py: p.y };
        pinchRef = null;
      } else if (pts.size === 0) {
        ph.classList.remove("lk-ed-grabbing");
        if (!moved) { S.undo.pop(); updateUndoBtn(); }
        panRef = null; pinchRef = null;
      }
    };
    ph.addEventListener("pointerup", up);
    ph.addEventListener("pointercancel", up);

    S.el.stage.addEventListener("wheel", (e) => {
      e.preventDefault();
      const r = S.el.stage.getBoundingClientRect();
      zoomAt(e.clientX - r.left, e.clientY - r.top, e.deltaY < 0 ? 1.12 : 1 / 1.12);
    }, { passive: false });

    ph.addEventListener("dblclick", (e) => {
      e.preventDefault();
      doFit();
    });
  }

  /* ========================= items: render / chọn / kéo ========================= */

  function addItem(kind, emoji) {
    pushUndo();
    const it = {
      id: ++S.uid, kind,
      x: 0.5 + (Math.random() * 0.1 - 0.05),
      y: 0.5 + (Math.random() * 0.1 - 0.05),
      rot: 0,
      size: kind === "sticker" ? 0.16 : 0.058,
      z: ++S.zTop,
    };
    if (kind === "sticker") it.emoji = emoji;
    else it.text = { value: "Chữ của bạn", color: "#FFFFFF", bg: "dim", align: "center" };
    S.items.push(it);
    S.sel = it.id;
    renderItems();
    renderSel();
    if (kind === "text") openTextPanel(it);
    else closeSheet();
  }

  function ensureItemEl(it) {
    let el = S.itemEls.get(it.id);
    if (!el) {
      el = elDiv("lk-ed-item");
      if (it.kind === "sticker") el.appendChild(elDiv("lk-ed-sticker"));
      else el.appendChild(elDiv("lk-ed-text"));
      S.el.items.appendChild(el);
      S.itemEls.set(it.id, el);
      attachItemEvents(el, it.id);
    }
    return el;
  }

  function renderItems() {
    if (!S.el.items) return;
    const alive = new Set();
    for (const it of S.items) {
      alive.add(it.id);
      const el = ensureItemEl(it);
      el.style.left = (it.x * 100) + "%";
      el.style.top = (it.y * 100) + "%";
      el.style.transform = "translate(-50%,-50%) rotate(" + it.rot + "deg)";
      el.style.zIndex = it.z;
      const inner = el.firstChild;
      if (it.kind === "sticker") {
        inner.style.fontSize = (it.size * S.stage.w) + "px";
        inner.textContent = it.emoji;
      } else {
        const t = it.text;
        inner.style.fontSize = (it.size * S.stage.w) + "px";
        inner.style.color = t.color;
        inner.style.textAlign = t.align;
        inner.style.fontFamily = TEXT_FONT;
        inner.style.fontWeight = "700";
        inner.style.webkitTextStroke = lum(t.color) > 0.55 ? "0.35px rgba(0,0,0,.35)" : "0.35px rgba(255,255,255,.3)";
        inner.style.background =
          t.bg === "none" ? "transparent"
            : t.bg === "dim" ? "rgba(0,0,0,0.45)"
              : (lum(t.color) > 0.55 ? "#111111" : "#ffffff");
        inner.textContent = t.value || " ";
      }
    }
    for (const [id, el] of [...S.itemEls]) {
      if (!alive.has(id)) { el.remove(); S.itemEls.delete(id); }
    }
    if (S.el.hint) S.el.hint.style.display = S.items.length ? "none" : "block";
  }

  function renderSel() {
    if (!S.el.selbox) return;
    const box = S.el.selbox, tools = S.el.itemtools;
    const it = selItem();
    if (!it || !S.natW) { box.style.display = "none"; tools.style.display = "none"; return; }
    const el = S.itemEls.get(it.id);
    if (!el) { box.style.display = "none"; tools.style.display = "none"; return; }
    const w = el.offsetWidth, h = el.offsetHeight;
    box.style.display = "block";
    box.style.left = (it.x * 100) + "%";
    box.style.top = (it.y * 100) + "%";
    box.style.width = w + "px";
    box.style.height = h + "px";
    box.style.transform = "translate(-50%,-50%) rotate(" + it.rot + "deg)";

    S.el.itEdit.style.display = it.kind === "text" ? "flex" : "none";
    const cx = it.x * S.stage.w, cy = it.y * S.stage.h;
    const rad = it.rot * Math.PI / 180;
    const off = h / 2 + 58;
    const px = cx + off * Math.sin(rad);
    const py = cy - off * Math.cos(rad);
    tools.style.display = "flex";
    tools.style.left = clamp(px, 76, Math.max(76, S.stage.w - 76)) + "px";
    tools.style.top = clamp(py, 26, Math.max(26, S.stage.h - 26)) + "px";
    tools.style.transform = "translate(-50%,-50%)";
  }

  function attachItemEvents(el, id) {
    let start = null, moved = false;

    el.addEventListener("pointerdown", (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      const it = S.items.find((i) => i.id === id);
      if (!it) return;
      S.sel = id;
      renderSel();
      el.setPointerCapture(e.pointerId);
      start = { px: e.clientX, py: e.clientY, x0: it.x, y0: it.y };
      moved = false;
      pushUndo();
      el.classList.add("lk-ed-grabbing");
      closeSheet();
    });

    el.addEventListener("pointermove", (e) => {
      const it = S.items.find((i) => i.id === id);
      if (!it || !start) return;
      const dx = (e.clientX - start.px) / S.stage.w;
      const dy = (e.clientY - start.py) / S.stage.h;
      if (Math.abs(dx) + Math.abs(dy) > 0.004) moved = true;
      it.x = clamp(start.x0 + dx, -0.15, 1.15);
      it.y = clamp(start.y0 + dy, -0.15, 1.15);
      schedule(() => {
        el.style.left = (it.x * 100) + "%";
        el.style.top = (it.y * 100) + "%";
        renderSel();
      });
    });

    const up = () => {
      el.classList.remove("lk-ed-grabbing");
      if (start && !moved) { S.undo.pop(); updateUndoBtn(); }
      start = null;
    };
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);

    el.addEventListener("dblclick", () => {
      const it = S.items.find((i) => i.id === id);
      if (it && it.kind === "text") { S.sel = id; renderSel(); openTextPanel(it); }
    });
  }

  /* tay cầm xoay / resize trên khung chọn */
  function attachSelHandles() {
    const hR = S.el.hRot, hS = S.el.hSize;

    hR.addEventListener("pointerdown", (e) => {
      const it = selItem(); if (!it) return;
      e.preventDefault();
      hR.setPointerCapture(e.pointerId);
      const cx = it.x * S.stage.w, cy = it.y * S.stage.h;
      const stageR = S.el.stage.getBoundingClientRect();
      const ang = (ev) => Math.atan2(ev.clientY - stageR.top - cy, ev.clientX - stageR.left - cx);
      const a0 = ang(e), r0 = it.rot;
      pushUndo();
      const move = (ev) => {
        it.rot = r0 + (ang(ev) - a0) * 180 / Math.PI;
        schedule(() => {
          const el = S.itemEls.get(it.id);
          if (el) el.style.transform = "translate(-50%,-50%) rotate(" + it.rot + "deg)";
          renderSel();
        });
      };
      const fin = () => {
        hR.removeEventListener("pointermove", move);
        hR.removeEventListener("pointerup", fin);
        hR.removeEventListener("pointercancel", fin);
      };
      hR.addEventListener("pointermove", move);
      hR.addEventListener("pointerup", fin);
      hR.addEventListener("pointercancel", fin);
    });

    hS.addEventListener("pointerdown", (e) => {
      const it = selItem(); if (!it) return;
      e.preventDefault();
      hS.setPointerCapture(e.pointerId);
      const cx = it.x * S.stage.w, cy = it.y * S.stage.h;
      const stageR = S.el.stage.getBoundingClientRect();
      const d0 = Math.hypot(e.clientX - stageR.left - cx, e.clientY - stageR.top - cy) || 1;
      const s0 = it.size;
      pushUndo();
      const move = (ev) => {
        const d = Math.hypot(ev.clientX - stageR.left - cx, ev.clientY - stageR.top - cy);
        it.size = clamp(s0 * d / d0, 0.03, 0.9);
        renderItems();
        schedule(renderSel);
      };
      const fin = () => {
        hS.removeEventListener("pointermove", move);
        hS.removeEventListener("pointerup", fin);
        hS.removeEventListener("pointercancel", fin);
      };
      hS.addEventListener("pointermove", move);
      hS.addEventListener("pointerup", fin);
      hS.addEventListener("pointercancel", fin);
    });
  }

  function deleteSel() {
    const it = selItem(); if (!it) return;
    pushUndo();
    S.items = S.items.filter((i) => i.id !== it.id);
    S.sel = null;
    closeTextPanel();
    renderItems();
    renderSel();
  }

  function duplicateSel() {
    const it = selItem(); if (!it) return;
    pushUndo();
    const copy = JSON.parse(JSON.stringify(it));
    copy.id = ++S.uid;
    copy.x = clamp(it.x + 0.06, 0, 1);
    copy.y = clamp(it.y + 0.06, 0, 1);
    copy.z = ++S.zTop;
    S.items.push(copy);
    S.sel = copy.id;
    renderItems();
    renderSel();
  }

  /* ========================= panel sticker ========================= */

  let curGroup = 0;

  function buildTabs() {
    const tabs = S.el.tabs;
    tabs.textContent = "";
    STICKER_GROUPS.forEach((g, i) => {
      const b = elBtn("lk-ed-tab" + (i === curGroup ? " lk-ed-on" : ""), g[0]);
      b.addEventListener("click", () => {
        curGroup = i;
        S.el.search.value = "";
        buildTabs();
        renderGrid();
      });
      tabs.appendChild(b);
    });
  }

  function renderGrid() {
    const grid = S.el.grid;
    grid.textContent = "";
    const q = (S.el.search.value || "").trim().toLowerCase();
    let pool = [];
    if (q) {
      for (const g of STICKER_GROUPS) pool.push(...g[1]);
      pool = pool.filter(([e, kw]) => (kw + " " + e).toLowerCase().includes(q));
    } else {
      pool = STICKER_GROUPS[curGroup][1];
    }
    if (!pool.length) {
      grid.appendChild(elDiv("lk-ed-empty", "Không tìm thấy sticker"));
      return;
    }
    for (const [e] of pool) {
      const b = elBtn("lk-ed-emojibtn", e);
      b.title = e;
      b.addEventListener("click", () => addItem("sticker", e));
      grid.appendChild(b);
    }
  }

  function toggleSheet() {
    const on = S.el.sheet.classList.toggle("lk-ed-on");
    if (on) {
      closeTextPanel();
      closeAdjust();
      renderGrid();
    }
  }
  function closeSheet() { if (S.el.sheet) S.el.sheet.classList.remove("lk-ed-on"); }
  function closeAdjust() { if (S.el.adj) S.el.adj.classList.remove("lk-ed-on"); }

  /* ========================= panel chữ ========================= */

  function openTextPanel(it) {
    closeSheet();
    closeAdjust();
    S.sel = it.id;
    syncTextPanel(it);
    S.el.tpanel.classList.add("lk-ed-on");
    renderSel();
    S.el.ta.focus();
    S.el.ta.select();
  }

  function syncTextPanel(it) {
    S.el.ta.value = it.text.value;
    S.el.count.textContent = it.text.value.length + "/" + TEXT_MAX;
    S.el.sizeRange.value = it.size;
    for (const sw of S.el.swWrap.children) {
      sw.classList.toggle("lk-ed-on", sw.dataset.color === it.text.color);
    }
    for (const b of S.el.bgSeg.children) b.classList.toggle("lk-ed-on", b.dataset.bg === it.text.bg);
    for (const b of S.el.alignSeg.children) b.classList.toggle("lk-ed-on", b.dataset.align === it.text.align);
  }

  function commitTextPanel() {
    const it = selItem();
    if (it && it.kind === "text" && !it.text.value.trim()) {
      S.items = S.items.filter((i) => i.id !== it.id);
      S.sel = null;
      renderItems();
      renderSel();
    }
    closeTextPanel();
  }

  function closeTextPanel() { if (S.el.tpanel) S.el.tpanel.classList.remove("lk-ed-on"); }

  /* ========================= bàn phím ========================= */

  function onKey(e) {
    if (!S.open) return;
    const ae = document.activeElement;
    const typing = ae && (ae.tagName === "TEXTAREA" || ae.tagName === "INPUT");
    if (e.key === "Escape") {
      e.preventDefault();
      if (S.el.sheet && S.el.sheet.classList.contains("lk-ed-on")) closeSheet();
      else if (S.el.tpanel && S.el.tpanel.classList.contains("lk-ed-on")) commitTextPanel();
      else if (S.el.adj && S.el.adj.classList.contains("lk-ed-on")) closeAdjust();
      else if (S.sel) { S.sel = null; renderSel(); }
      else doCancel();
      return;
    }
    if (typing) return;
    if ((e.key === "Delete" || e.key === "Backspace") && S.sel) {
      e.preventDefault();
      deleteSel();
    } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
      e.preventDefault();
      doUndo();
    } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "d") {
      e.preventDefault();
      duplicateSel();
    }
  }

  /* ========================= xuất ảnh ========================= */

  function canvasBlob(canvas, type, quality) {
    return new Promise((resolve) => canvas.toBlob(resolve, type, quality));
  }

  async function encodeHighQuality(canvas) {
    const png = await canvasBlob(canvas, "image/png");
    if (png && png.size <= MAX_OUTPUT_BYTES) {
      return { blob: png, ext: "png" };
    }
    for (const quality of [0.98, 0.95, 0.92, 0.88]) {
      const jpeg = await canvasBlob(canvas, "image/jpeg", quality);
      if (jpeg && jpeg.size <= MAX_OUTPUT_BYTES) {
        return { blob: jpeg, ext: "jpg" };
      }
    }
    const fallback = await canvasBlob(canvas, "image/jpeg", 0.82);
    if (!fallback) throw new Error("Không mã hoá được ảnh");
    return { blob: fallback, ext: "jpg" };
  }

  async function compose() {
    if (document.fonts && document.fonts.ready) { try { await document.fonts.ready; } catch (e) { /* bỏ qua */ } }
    const ow = OUTPUT_EDGE, oh = OUTPUT_EDGE;
    const c = document.createElement("canvas");
    c.width = ow; c.height = oh;
    const ctx = c.getContext("2d", { alpha: false });
    if (!ctx) throw new Error("Trình duyệt không dựng được canvas");
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, ow, oh);
    ctx.filter = photoCssFilter();

    const k = ow / S.stage.w;
    const base = getCoverScale();
    const even = S.rot90 % 2 === 0;
    const bgW = even ? S.natW : S.natH;
    const bgH = even ? S.natH : S.natW;
    const bgScale = Math.max(ow / bgW, oh / bgH) * 1.08;
    ctx.save();
    ctx.translate(ow / 2, oh / 2);
    ctx.rotate(S.rot90 * Math.PI / 2);
    ctx.filter = photoCssFilter() + " blur(18px)";
    ctx.globalAlpha = 0.78;
    ctx.scale(bgScale, bgScale);
    ctx.drawImage(S.img, -S.natW / 2, -S.natH / 2, S.natW, S.natH);
    ctx.restore();
    ctx.filter = photoCssFilter();
    ctx.globalAlpha = 1;

    ctx.save();
    ctx.translate(ow / 2 + S.tf.x * k, oh / 2 + S.tf.y * k);
    ctx.rotate(S.rot90 * Math.PI / 2);
    const ds = k * base * S.tf.s;
    ctx.scale(ds, ds);
    ctx.drawImage(S.img, -S.natW / 2, -S.natH / 2, S.natW, S.natH);
    ctx.restore();
    ctx.filter = "none";

    if (S.adjust.vig > 0) {
      const g = ctx.createRadialGradient(ow / 2, oh / 2, ow * 0.22, ow / 2, oh / 2, ow * 0.74);
      g.addColorStop(0, "rgba(0,0,0,0)");
      g.addColorStop(1, "rgba(0,0,0," + (0.78 * S.adjust.vig / 100) + ")");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, ow, oh);
    }

    const sorted = S.items.slice().sort((a, b) => a.z - b.z);
    for (const it of sorted) {
      ctx.save();
      ctx.translate(it.x * ow, it.y * oh);
      ctx.rotate(it.rot * Math.PI / 180);
      if (it.kind === "sticker") drawSticker(ctx, it, ow);
      else drawTextItem(ctx, it, ow);
      ctx.restore();
    }
    return encodeHighQuality(c);
  }

  function drawSticker(ctx, it, ow) {
    const px = Math.max(28, Math.round(it.size * ow));
    const key = it.emoji + "@" + px;
    let spr = S.emojiCache.get(key);
    if (!spr) {
      const pad = Math.ceil(px * 0.22);
      const size = px + pad * 2;
      const c = document.createElement("canvas");
      c.width = size * 2;
      c.height = size * 2;
      const x = c.getContext("2d");
      x.scale(2, 2);
      x.font = px + "px " + EMOJI_FONT;
      x.textAlign = "center";
      x.textBaseline = "middle";
      x.fillText(it.emoji, size / 2, size / 2 + px * 0.03);
      spr = { c, size };
      S.emojiCache.set(key, spr);
    }
    ctx.drawImage(spr.c, -spr.size / 2, -spr.size / 2, spr.size, spr.size);
  }

  function drawTextItem(ctx, it, ow) {
    const fontPx = Math.max(6, it.size * ow);
    const font = "700 " + fontPx + "px " + TEXT_FONT;
    ctx.font = font;
    const maxW = 0.8 * ow;
    const lines = wrapLines(ctx, it.text.value || " ", maxW);
    const lineH = fontPx * 1.25;
    const padY = fontPx * 0.35, padX = fontPx * 0.5;
    let maxLw = 0;
    for (const L of lines) maxLw = Math.max(maxLw, ctx.measureText(L).width);
    const boxW = Math.min(maxW, maxLw) + 2 * padX;
    const boxH = lines.length * lineH + 2 * padY;

    if (it.text.bg !== "none") {
      ctx.fillStyle = it.text.bg === "dim"
        ? "rgba(0,0,0,0.45)"
        : (lum(it.text.color) > 0.55 ? "#111111" : "#ffffff");
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(-boxW / 2, -boxH / 2, boxW, boxH, fontPx * 0.45);
      else ctx.rect(-boxW / 2, -boxH / 2, boxW, boxH);
      ctx.fill();
    }

    ctx.font = font;
    ctx.textBaseline = "middle";
    ctx.lineJoin = "round";
    ctx.miterLimit = 2;
    const stroke = lum(it.text.color) > 0.55 ? "rgba(0,0,0,0.42)" : "rgba(255,255,255,0.38)";
    ctx.strokeStyle = stroke;
    ctx.lineWidth = Math.max(1.5, fontPx * 0.08);
    ctx.shadowColor = "rgba(0,0,0,0.38)";
    ctx.shadowBlur = fontPx * 0.14;
    ctx.shadowOffsetY = fontPx * 0.04;
    ctx.fillStyle = it.text.color;
    const innerW = boxW - 2 * padX;
    lines.forEach((L, i) => {
      const y = -boxH / 2 + padY + i * lineH + lineH / 2;
      let x = 0;
      if (it.text.align === "left") { ctx.textAlign = "left"; x = -innerW / 2; }
      else if (it.text.align === "right") { ctx.textAlign = "right"; x = innerW / 2; }
      else { ctx.textAlign = "center"; x = 0; }
      if (it.text.bg === "none") ctx.strokeText(L, x, y);
      ctx.fillText(L, x, y);
    });
    ctx.shadowColor = "transparent";
  }

  function isUntouched() {
    return looksDefault();
  }

  async function finish() {
    if (!S.open || !S.img) return;
    const btn = S.el.btnFinish;
    btn.disabled = true;
    btn.textContent = "Đang xuất…";
    try {
      const cb = S.cb;
      if (isUntouched()) {
        close();
        cb && cb.onOriginal && cb.onOriginal();
        return;
      }
      const { blob, ext } = await compose();
      if (!blob) throw new Error("toBlob trả null");
      const base = (S.file && S.file.name ? S.file.name.replace(/\.[^.]+$/, "") : "loocket") + "-edit." + ext;
      close();
      cb && cb.onDone && cb.onDone(blob, base);
    } catch (err) {
      console.warn("[loocket editor]", err);
      toast("Xuất ảnh thất bại, thử lại nhé");
      btn.disabled = false;
      btn.innerHTML = `Xong ${iosIcon("check")}`;
    }
  }

  async function doDownload() {
    if (!S.img) return;
    const dl = S.el.btnDl;
    dl.disabled = true;
    try {
      const { blob, ext } = await compose();
      const u = URL.createObjectURL(blob);
      const name = "loocket-" + Date.now() + "." + ext;
      if (window.chrome && chrome.downloads && chrome.downloads.download) {
        chrome.downloads.download({ url: u, filename: name, saveAs: false }, () => {
          if (chrome.runtime && chrome.runtime.lastError) {
            const a = document.createElement("a");
            a.href = u; a.download = name; a.click();
          }
        });
      } else {
        const a = document.createElement("a");
        a.href = u; a.download = name; a.click();
      }
      setTimeout(() => URL.revokeObjectURL(u), 60000);
      toast("Đã tải ảnh xuống");
    } catch (err) {
      console.warn("[loocket editor]", err);
      toast("Không tải được ảnh");
    }
    dl.disabled = false;
  }

  /* ========================= toast ========================= */

  function toast(msg) {
    if (!S.el.toast) return;
    const t = S.el.toast;
    t.textContent = msg;
    t.classList.add("lk-ed-on");
    clearTimeout(S.toastT);
    S.toastT = setTimeout(() => t.classList.remove("lk-ed-on"), 1900);
  }

  /* =========================
     interceptor: chặn mọi ảnh người dùng chọn để đăng,
     mở editor, rồi bơm kết quả trở lại input để app tiếp tục luồng cũ
     ========================= */

  const PASSTHROUGH = new WeakSet();

  function inject(input, blob, name) {
    try {
      const file = blob instanceof File
        ? blob
        : new File([blob], name || "loocket.jpg", { type: blob.type || "image/jpeg" });
      const dt = new DataTransfer();
      dt.items.add(file);
      PASSTHROUGH.add(input);
      input.files = dt.files;
      input.dispatchEvent(new Event("change", { bubbles: true }));
    } catch (err) {
      console.warn("[loocket editor] inject thất bại:", err);
    }
  }

  /* hook kiểm thử / tích hợp: window.lkEditor.open(file, {onDone,onOriginal,onCancel}) */
  if (typeof window !== "undefined") {
    window.lkEditor = { open };
  }

  document.addEventListener("change", (ev) => {
    const t = ev.target;
    if (!(t instanceof HTMLInputElement) || t.type !== "file") return;
    if (PASSTHROUGH.has(t)) { PASSTHROUGH.delete(t); return; }
    if (!/jpe?g|png/i.test(t.accept || "")) return;
    const f = t.files && t.files[0];
    if (!f || !/^image\/(jpeg|png)$/i.test(f.type)) return;
    ev.stopImmediatePropagation();
    ev.preventDefault();
    open(f, {
      onDone(blob, name) { inject(t, blob, name); },
      onOriginal() { inject(t, f, f.name); },
      onCancel() { try { t.value = ""; } catch (e) { /* bỏ qua */ } },
    });
  }, true);

})();
