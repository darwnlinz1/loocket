/**
 * LOCKET CLIENT API SERVICE (SPEC v2.4)
 * Google Cloud Project ID: locket-4252a
 * Android App Restricted Firebase API Key
 */

export const LOCKET_CONSTANTS = {
  PROJECT_ID: 'locket-4252a',
  FIREBASE_API_KEY: 'AIzaSyB5dTd-xiLD5dEfWq5OpptnQtnMpE0W0u8',
  ANDROID_PACKAGE: 'com.locket.Locket',
  ANDROID_CERT: '187A27D3D7364A044307F56E66230F973DCCD5B7',
  API_BASE_URL: 'https://api.locketcamera.com',
  FIRESTORE_URL: 'https://firestore.googleapis.com/v1',
  TOKEN_URL: 'https://securetoken.googleapis.com/v1/token',
  FASTLY_CDN_HOST: 'cdn.locketcamera.com'
};

export const ANDROID_HEADERS = {
  'x-android-package': LOCKET_CONSTANTS.ANDROID_PACKAGE,
  'x-android-cert': LOCKET_CONSTANTS.ANDROID_CERT
};

/**
 * Generates RFC4122 v4 compliant UUID
 */
export function generateUUID() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Optimizes image URLs by routing through Fastly CDN Edge Proxy
 * Replaces both firebasestorage.googleapis.com:443 and firebasestorage.googleapis.com
 */
export function optimizeImageUrl(url, options = null) {
  if (!url || typeof url !== 'string') return '';
  let optimized = url
    .replace(/firebasestorage\.googleapis\.com:443/g, LOCKET_CONSTANTS.FASTLY_CDN_HOST)
    .replace(/firebasestorage\.googleapis\.com/g, LOCKET_CONSTANTS.FASTLY_CDN_HOST);

  if (!options || typeof options !== 'object' || Object.keys(options).length === 0) {
    return optimized;
  }

  const isCdn = optimized.includes(LOCKET_CONSTANTS.FASTLY_CDN_HOST) || optimized.includes('cdn.locketcamera.com');
  if (!isCdn) {
    return optimized;
  }

  const { width, height, format = 'webp', quality = 65, fit } = options;
  const parts = [];
  if (width) parts.push(`width=${encodeURIComponent(width)}`);
  if (height) parts.push(`height=${encodeURIComponent(height)}`);
  if (format) parts.push(`format=${encodeURIComponent(format)}`);
  if (quality) parts.push(`quality=${encodeURIComponent(quality)}`);
  if (fit) parts.push(`fit=${encodeURIComponent(fit)}`);

  if (parts.length === 0) return optimized;

  let cleanUrl = optimized
    .replace(/[&?](?:width|height|format|quality|fit)=[^&]*/g, '')
    .replace(/\?&/, '?')
    .replace(/\?$/, '');

  const joinChar = cleanUrl.includes('?') ? '&' : '?';
  return `${cleanUrl}${joinChar}${parts.join('&')}`;
}

/**
 * Tạo URL ảnh thumbnail kích thước nhỏ được nén bởi Fastly CDN Edge
 * Giảm dung lượng từ vài MB xuống còn ~4KB - 8KB WebP, nạp tức thì
 */
export function optimizeThumbnailUrl(url, size = 180, quality = 65) {
  return optimizeImageUrl(url, {
    width: size,
    height: size,
    format: 'webp',
    quality: quality
  });
}

/**
 * Tạo URL placeholder siêu nhẹ (LQIP - Low Quality Image Placeholder)
 * ~300 bytes để hiển thị hiệu ứng mờ mịn màng tức thì trước khi ảnh nét tải xong
 */
export function getLqipImageUrl(url) {
  return optimizeImageUrl(url, {
    width: 24,
    height: 24,
    format: 'webp',
    quality: 20
  });
}

/**
 * Chuẩn hóa mọi định dạng thời gian về đơn vị mili-giây (timestamp Ms)
 * Hỗ trợ: số mili-giây (> 1e11), số giây (< 1e11), chuỗi ISO, chuỗi số,
 * Đối tượng Firestore { seconds, nanoseconds }, { _seconds, _nanoseconds }, { timestampValue }, { integerValue }
 */
export function normalizeTimestampMs(val) {
  if (val === null || val === undefined || val === '') return 0;
  if (typeof val === 'number') {
    if (isNaN(val) || !isFinite(val)) return 0;
    return val < 1e11 ? Math.round(val * 1000) : Math.round(val);
  }
  if (typeof val === 'string') {
    const num = Number(val);
    if (!isNaN(num) && isFinite(num) && val.trim() !== '') {
      return num < 1e11 ? Math.round(num * 1000) : Math.round(num);
    }
    const parsed = Date.parse(val);
    return isNaN(parsed) ? 0 : parsed;
  }
  if (typeof val === 'object') {
    if (typeof val.toMillis === 'function') {
      return val.toMillis();
    }
    if (typeof val.toDate === 'function') {
      return val.toDate().getTime();
    }
    if (val.timestampValue) {
      const parsed = Date.parse(val.timestampValue);
      return isNaN(parsed) ? 0 : parsed;
    }
    if (val.stringValue) {
      return normalizeTimestampMs(val.stringValue);
    }
    if (val.integerValue) {
      return normalizeTimestampMs(val.integerValue);
    }
    const sec = val.seconds ?? val._seconds;
    const nsec = val.nanoseconds ?? val._nanoseconds ?? 0;
    if (typeof sec === 'number') {
      return Math.round(sec < 1e11 ? sec * 1000 + Math.round(nsec / 1e6) : sec);
    }
  }
  return 0;
}

/**
 * Trích xuất và chuẩn hóa timestamp mili-giây từ bất kỳ đối tượng moment nào
 */
export function getMomentTimestampMs(m) {
  if (!m || typeof m !== 'object') return 0;
  if (m.timestampMs && typeof m.timestampMs === 'number') {
    return normalizeTimestampMs(m.timestampMs);
  }
  if (m.seconds !== undefined && m.seconds !== null) {
    const ms = normalizeTimestampMs(m.seconds);
    if (ms > 0) return ms;
  }
  if (m.timestamp !== undefined && m.timestamp !== null) {
    const ms = normalizeTimestampMs(m.timestamp);
    if (ms > 0) return ms;
  }
  if (m.date !== undefined && m.date !== null) {
    const ms = normalizeTimestampMs(m.date);
    if (ms > 0) return ms;
  }
  if (m.createdAt !== undefined && m.createdAt !== null) {
    const ms = normalizeTimestampMs(m.createdAt);
    if (ms > 0) return ms;
  }
  if (m._rawDateField) {
    const ms = normalizeTimestampMs(m._rawDateField);
    if (ms > 0) return ms;
  }
  if (m.createTime) {
    const ms = normalizeTimestampMs(m.createTime);
    if (ms > 0) return ms;
  }
  return 0;
}


/**
 * Concurrency Pool: Chạy một mảng tác vụ với giới hạn số luồng song song (mặc định 30 luồng).
 * Ngăn chặn nghẽn mạng, không làm đơ giao diện người dùng và tối đa hóa tốc độ nạp dữ liệu.
 * @param {Array<T>} items
 * @param {function(T, number): Promise<R>} fn
 * @param {number} [concurrency=30]
 * @returns {Promise<Array<R>>}
 */
export async function runConcurrentPool(items, fn, concurrency = 30) {
  if (!Array.isArray(items) || items.length === 0) return [];
  const limit = Math.max(1, Math.min(concurrency || 30, 50));
  const results = new Array(items.length);
  let currentIndex = 0;

  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (currentIndex < items.length) {
      const idx = currentIndex++;
      try {
        results[idx] = await fn(items[idx], idx);
      } catch (err) {
        results[idx] = null;
      }
    }
  });

  await Promise.all(workers);
  return results;
}

/**
 * Nạp trước tài nguyên ảnh song song với pool đa luồng (30 luồng).
 * Giúp ảnh hiển thị tức thì, không giật lag.
 * @param {Array<string>} urls
 * @param {number} [concurrency=30]
 */
export async function preloadImagesConcurrently(urls, concurrency = 30) {
  if (!Array.isArray(urls) || urls.length === 0) return [];
  const uniqueUrls = [...new Set(urls.filter((u) => typeof u === 'string' && u.trim().length > 0))];

  return runConcurrentPool(
    uniqueUrls,
    async (url) => {
      try {
        if (typeof Image !== 'undefined') {
          return await new Promise((resolve) => {
            const img = new Image();
            img.decoding = 'async';
            const timer = setTimeout(() => {
              img.onload = null;
              img.onerror = null;
              resolve({ url, success: false, timeout: true });
            }, 8000);
            img.onload = () => {
              clearTimeout(timer);
              resolve({ url, success: true });
            };
            img.onerror = () => {
              clearTimeout(timer);
              resolve({ url, success: false });
            };
            img.src = url;
          });
        } else if (typeof fetch !== 'undefined') {
          const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
          const timer = controller ? setTimeout(() => controller.abort(), 8000) : null;
          await fetch(url, { method: 'HEAD', mode: 'no-cors', signal: controller?.signal }).catch(() => {});
          if (timer) clearTimeout(timer);
          return { url, success: true };
        }
        return { url, success: true };
      } catch {
        return { url, success: false };
      }
    },
    concurrency
  );
}

export class LooketService {
  /**
   * @param {Object} [config]
   * @param {string} [config.apiKey]
   * @param {string} [config.myUid]
   * @param {string} [config.refreshToken]
   */
  constructor(config = {}) {
    this.config = {
      apiKey: config.apiKey || LOCKET_CONSTANTS.FIREBASE_API_KEY,
      myUid: config.myUid || '',
      refreshToken: config.refreshToken || '',
      ...config
    };
    this.idToken = null;
    this.tokenExpiresAt = 0;
    this.refreshPromise = null;
  }

  /**
   * Update configuration dynamically (e.g. on auth change)
   */
  updateConfig(newConfig = {}) {
    this.config = { ...this.config, ...newConfig };
    if (newConfig.token) {
      this.idToken = newConfig.token;
      this.tokenExpiresAt = Date.now() + 3600 * 1000;
    }
  }

  /**
   * Sync credentials from chrome.storage.local if available
   */
  async syncFromStorage() {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      return new Promise((resolve) => {
        chrome.storage.local.get(['token', 'refreshToken', 'user'], (res) => {
          if (res) {
            if (res.token) this.idToken = res.token;
            if (res.refreshToken) this.config.refreshToken = res.refreshToken;
            if (res.user) {
              if (typeof res.user === 'string') {
                this.config.myUid = res.user;
              } else if (typeof res.user === 'object') {
                this.config.myUid = res.user.localId || res.user.uid || res.user.user_uid || this.config.myUid;
              }
            }
          }
          resolve(this.config);
        });
      });
    }
    return this.config;
  }

  /**
   * Tự động lấy/refresh ID Token khi sắp hết hạn (Android App Restriction)
   * Prevents duplicate concurrent requests with mutex promise
   */
  async getIdToken() {
    // Return existing token if valid for at least 1 more minute
    if (this.idToken && Date.now() < this.tokenExpiresAt - 60000) {
      return this.idToken;
    }

    if (this.refreshPromise) {
      return this.refreshPromise;
    }

    this.refreshPromise = (async () => {
      try {
        // Try reading latest from storage first if we don't have refreshToken
        if (!this.config.refreshToken) {
          await this.syncFromStorage();
        }

        if (!this.config.refreshToken) {
          if (this.idToken) return this.idToken;
          throw new Error('Chưa đăng nhập hoặc thiếu refresh token');
        }

        const payload = JSON.stringify({
          grantType: 'refresh_token',
          refreshToken: this.config.refreshToken
        });

        const url = `${LOCKET_CONSTANTS.TOKEN_URL}?key=${this.config.apiKey}`;
        const res = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...ANDROID_HEADERS
          },
          body: payload
        });

        if (!res.ok) {
          const errText = await res.text().catch(() => '');
          throw new Error(`Refresh token thất bại (${res.status}): ${errText}`);
        }

        const data = await res.json();
        this.idToken = data.id_token || data.access_token;
        const expiresIn = parseInt(data.expires_in || '3600', 10);
        this.tokenExpiresAt = Date.now() + expiresIn * 1000;

        if (data.refresh_token) {
          this.config.refreshToken = data.refresh_token;
        }

        // Persist new token back to chrome.storage.local if available
        if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
          chrome.storage.local.set({
            token: this.idToken,
            refreshToken: this.config.refreshToken
          });
        }

        return this.idToken;
      } finally {
        this.refreshPromise = null;
      }
    })();

    return this.refreshPromise;
  }

  /**
   * 1. LẤY LỊCH SỬ MOMENTS (MOMENTS TIMELINE)
   * Database: locket (projects/locket-4252a/databases/locket)
   * Inbox Fan-out collection: history/{MY_UID}/entries
   * Hỗ trợ phân trang liên tục (Continuous Pagination / Infinite Scroll)
   * @param {string|null} [authorUid=null] UID người đăng cần lọc (nếu null sẽ lấy toàn bộ Feed)
   * @param {number} [limit=30] Số lượng bài mỗi trang
   * @param {Object|string|null} [cursor=null] Cursor bài cuối cùng để load tiếp các bài cũ hơn
   * @param {number} [offset=0] Vị trí offset nếu không dùng cursor
   */
  async getMomentsHistory(authorUid = null, limit = 30, cursor = null, offset = 0) {
    const token = await this.getIdToken();
    if (!this.config.myUid) {
      await this.syncFromStorage();
    }
    const myUid = this.config.myUid;
    if (!myUid) {
      throw new Error('Không xác định được UID người dùng hiện tại');
    }

    const queryPayload = {
      structuredQuery: {
        from: [{ collectionId: 'entries' }],
        orderBy: [{ field: { fieldPath: 'date' }, direction: 'DESCENDING' }],
        limit: Math.max(1, Math.min(limit || 30, 100))
      }
    };

    if (authorUid) {
      queryPayload.structuredQuery.where = {
        fieldFilter: {
          field: { fieldPath: 'user' },
          op: 'EQUAL',
          value: { stringValue: authorUid }
        }
      };
    }

    // Phân trang liên tục bằng cursor startAt (bắt đầu sau bài cũ nhất hiện tại)
    if (cursor) {
      let cursorValue = null;
      if (typeof cursor === 'object' && cursor !== null) {
        if (cursor._rawDateField && typeof cursor._rawDateField === 'object') {
          cursorValue = cursor._rawDateField;
        } else if (cursor.timestampValue) {
          cursorValue = { timestampValue: cursor.timestampValue };
        } else if (cursor.date && typeof cursor.date === 'object' && cursor.date.timestampValue) {
          cursorValue = { timestampValue: cursor.date.timestampValue };
        } else {
          const ms = getMomentTimestampMs(cursor);
          if (ms > 0) {
            cursorValue = { timestampValue: new Date(ms).toISOString() };
          } else if (cursor.date) {
            cursorValue = String(cursor.date).includes('T') ? { timestampValue: String(cursor.date) } : { stringValue: String(cursor.date) };
          }
        }
      } else if (typeof cursor === 'string') {
        if (cursor.includes('T')) {
          cursorValue = { timestampValue: cursor };
        } else {
          const num = Number(cursor);
          if (!isNaN(num) && num > 0) {
            const ms = num < 1e11 ? num * 1000 : num;
            cursorValue = { timestampValue: new Date(ms).toISOString() };
          } else {
            cursorValue = { stringValue: cursor };
          }
        }
      } else if (typeof cursor === 'number' && cursor > 0) {
        const ms = cursor < 1e11 ? cursor * 1000 : cursor;
        cursorValue = { timestampValue: new Date(ms).toISOString() };
      }

      if (cursorValue) {
        queryPayload.structuredQuery.startAt = {
          values: [cursorValue],
          before: false
        };
      } else if (offset && offset > 0) {
        queryPayload.structuredQuery.offset = offset;
      }
    } else if (offset && offset > 0) {
      queryPayload.structuredQuery.offset = offset;
    }

    const url = `${LOCKET_CONSTANTS.FIRESTORE_URL}/projects/${LOCKET_CONSTANTS.PROJECT_ID}/databases/locket/documents/history/${myUid}:runQuery?key=${this.config.apiKey}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'x-goog-request-params': `projects/${LOCKET_CONSTANTS.PROJECT_ID}/databases/locket`,
        ...ANDROID_HEADERS
      },
      body: JSON.stringify(queryPayload)
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => '');
      throw new Error(`Query moments thất bại (${res.status}): ${errText}`);
    }

    const items = await res.json();
    if (!Array.isArray(items)) return [];

    return items
      .filter((i) => i && i.document && i.document.fields)
      .map((i) => {
        const doc = i.document;
        const f = doc.fields || {};
        const rawThumb = f.thumbnail_url?.stringValue || f.thumbnailUrl?.stringValue || '';
        const rawDate = f.date?.timestampValue || f.date?.stringValue;
        let seconds = Date.now();
        if (rawDate) {
          const parsed = Date.parse(rawDate);
          if (!isNaN(parsed)) seconds = parsed;
        } else if (f.date?._seconds) {
          seconds = f.date._seconds * 1000;
        } else if (f.date?.integerValue) {
          const iv = parseInt(f.date.integerValue, 10);
          seconds = iv < 1e11 ? iv * 1000 : iv;
        } else if (doc.createTime) {
          const parsed = Date.parse(doc.createTime);
          if (!isNaN(parsed)) seconds = parsed;
        }

        seconds = normalizeTimestampMs(seconds) || Date.now();
        const isoDate = new Date(seconds).toISOString();
        const rawDateField = f.date || { timestampValue: isoDate };

        const canonicalUid = f.canonical_uid?.stringValue || doc.name?.split('/').pop();
        const userUid = f.user?.stringValue || f.user?.referenceValue?.split('/').pop() || '';

        return {
          id: canonicalUid,
          canonical_uid: canonicalUid,
          momentUid: canonicalUid,
          authorUid: userUid,
          user: {
            uid: userUid,
            username: '',
            avatar: ''
          },
          date: rawDate || isoDate,
          seconds,
          timestampMs: seconds,
          caption: f.caption?.stringValue || '',
          thumbnail_url: optimizeImageUrl(rawThumb),
          md5: f.md5?.stringValue || canonicalUid,
          sent_to_all: f.sent_to_all?.booleanValue ?? true,
          sent_to_self_only: f.sent_to_self_only?.booleanValue ?? false,
          overlays: f.overlays ? (f.overlays.arrayValue?.values || []) : [],
          _rawDateField: rawDateField
        };
      });
  }

  /**
   * LẤY CHI TIẾT 1 MOMENT THEO ID
   * @param {string} momentUid ID của moment cần lấy
   */
  async getMomentById(momentUid) {
    if (!momentUid) return null;
    const cleanId = momentUid.includes('/') ? momentUid.split('/').pop() : momentUid;
    const token = await this.getIdToken();
    if (!this.config.myUid) await this.syncFromStorage();
    const myUid = this.config.myUid;
    if (!myUid) return null;

    const url = `${LOCKET_CONSTANTS.FIRESTORE_URL}/projects/${LOCKET_CONSTANTS.PROJECT_ID}/databases/locket/documents/history/${myUid}/entries/${cleanId}?key=${this.config.apiKey}`;
    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'x-goog-request-params': `projects/${LOCKET_CONSTANTS.PROJECT_ID}/databases/locket`,
          ...ANDROID_HEADERS
        }
      });
      if (!res.ok) return null;
      const doc = await res.json();
      const f = doc.fields || {};
      const rawThumb = f.thumbnail_url?.stringValue || f.thumbnailUrl?.stringValue || '';
      const rawDate = f.date?.timestampValue || f.date?.stringValue;
      let seconds = Date.now();
      if (rawDate) {
        const p = Date.parse(rawDate);
        if (!isNaN(p)) seconds = p;
      } else if (f.date?._seconds) {
        seconds = f.date._seconds * 1000;
      } else if (f.date?.integerValue) {
        const iv = parseInt(f.date.integerValue, 10);
        seconds = iv < 1e11 ? iv * 1000 : iv;
      }
      seconds = normalizeTimestampMs(seconds) || Date.now();
      const isoDate = new Date(seconds).toISOString();
      const rawDateField = f.date || { timestampValue: isoDate };
      const userUid = f.user?.stringValue || f.user?.referenceValue?.split('/').pop() || '';
      return {
        id: cleanId,
        canonical_uid: cleanId,
        momentUid: cleanId,
        authorUid: userUid,
        user: {
          uid: userUid,
          username: '',
          avatar: ''
        },
        date: rawDate || isoDate,
        seconds,
        timestampMs: seconds,
        caption: f.caption?.stringValue || '',
        thumbnail_url: optimizeImageUrl(rawThumb),
        md5: f.md5?.stringValue || cleanId,
        sent_to_all: f.sent_to_all?.booleanValue ?? true,
        sent_to_self_only: f.sent_to_self_only?.booleanValue ?? false,
        overlays: f.overlays ? (f.overlays.arrayValue?.values || []) : [],
        _rawDateField: rawDateField
      };
    } catch {
      return null;
    }
  }

  /**
   * 2. LẤY DANH SÁCH CUỘC TRÒ CHUYỆN (CONVERSATIONS INBOX)
   * Database: (default)
   * Collection: users/{MY_UID}/conversations
   * @param {number} [pageSize=50]
   * @param {string|null} [pageToken=null]
   */
  async getConversations(pageSize = 50, pageToken = null) {
    const token = await this.getIdToken();
    if (!this.config.myUid) {
      await this.syncFromStorage();
    }
    const myUid = this.config.myUid;
    if (!myUid) {
      throw new Error('Không xác định được UID người dùng hiện tại');
    }

    let url = `${LOCKET_CONSTANTS.FIRESTORE_URL}/projects/${LOCKET_CONSTANTS.PROJECT_ID}/databases/(default)/documents/users/${myUid}/conversations?pageSize=${pageSize}&key=${this.config.apiKey}`;
    if (pageToken) {
      url += `&pageToken=${encodeURIComponent(pageToken)}`;
    }

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        ...ANDROID_HEADERS
      }
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => '');
      throw new Error(`Lấy danh sách trò chuyện thất bại (${res.status}): ${errText}`);
    }

    const data = await res.json();
    const documents = data.documents || [];

    const conversations = documents.map((doc) => {
      const f = doc.fields || {};
      const docId = doc.name ? doc.name.split('/').pop() : '';
      const conversationUid = f.conversation_uid?.stringValue || f.conversationId?.stringValue || docId;

      // Extract other user UID from possible schemas
      let otherUserUid = f.other_user?.stringValue || f.recipient?.stringValue || f.user_uid?.stringValue || f.user?.stringValue || null;
      const memberList = f.members?.arrayValue?.values || f.participants?.arrayValue?.values;
      if (!otherUserUid && memberList) {
        const others = memberList
          .map((v) => v.stringValue)
          .filter((u) => u && u !== myUid);
        if (others.length > 0) otherUserUid = others[0];
      }

      // If docId is friend UID and different from conversationUid
      if (!otherUserUid && f.conversation_uid?.stringValue && docId !== f.conversation_uid.stringValue) {
        otherUserUid = docId;
      }
      if (!otherUserUid && docId && docId.length >= 20 && !docId.startsWith('conv_')) {
        otherUserUid = docId;
      }

      // Extract last message preview
      let lastMsg = f.last_message?.stringValue || '';
      if (!lastMsg && f.last_message?.mapValue?.fields?.body?.stringValue) {
        lastMsg = f.last_message.mapValue.fields.body.stringValue;
      } else if (!lastMsg && f.last_message?.mapValue?.fields?.text?.stringValue) {
        lastMsg = f.last_message.mapValue.fields.text.stringValue;
      } else if (!lastMsg && f.body?.stringValue) {
        lastMsg = f.body.stringValue;
      } else if (!lastMsg && f.text?.stringValue) {
        lastMsg = f.text.stringValue;
      }

      if (!lastMsg && (f.thumbnail_url?.stringValue || f.last_message?.mapValue?.fields?.thumbnail_url?.stringValue)) {
        lastMsg = '📷 Khoảnh khắc';
      }

      // Extract timestamp
      const lastActivity = f.last_activity?.timestampValue || f.updated_at?.timestampValue || f.created_at?.timestampValue || doc.updateTime || doc.createTime || null;
      let timestamp = Date.now();
      if (lastActivity) {
        const p = Date.parse(lastActivity);
        if (!isNaN(p)) timestamp = p;
      }

      const unread = f.unread?.booleanValue ?? (f.unread_count?.integerValue ? parseInt(f.unread_count.integerValue, 10) > 0 : false);
      const unreadCount = f.unread_count?.integerValue ? parseInt(f.unread_count.integerValue, 10) : (unread ? 1 : 0);

      return {
        id: conversationUid,
        conversationUid,
        otherUserUid: otherUserUid || conversationUid,
        lastMessage: lastMsg.trim(),
        lastActivity,
        timestamp,
        unread,
        unreadCount,
        rawDoc: doc
      };
    });

    // Sort conversations with most recent activity first
    conversations.sort((a, b) => b.timestamp - a.timestamp);

    return {
      conversations,
      nextPageToken: data.nextPageToken || null
    };
  }

  /**
   * 3. LẤY LỊCH SỬ TIN NHẮN (CHAT HISTORY)
   * Database: (default)
   * Collection: conversations/{CONVERSATION_UID}/messages
   * @param {string} conversationUid ID cuộc trò chuyện
   * @param {number} [pageSize=50] Số tin nhắn trên 1 trang (tối đa 100)
   * @param {string|null} [pageToken=null] Token trang tiếp theo
   */
  async getChatMessages(conversationUid, pageSize = 50, pageToken = null) {
    if (!conversationUid) {
      throw new Error('Thiếu conversationUid');
    }
    const token = await this.getIdToken();
    let url = `${LOCKET_CONSTANTS.FIRESTORE_URL}/projects/${LOCKET_CONSTANTS.PROJECT_ID}/databases/(default)/documents/conversations/${conversationUid}/messages?pageSize=${pageSize}&orderBy=created_at%20desc&key=${this.config.apiKey}`;
    if (pageToken) {
      url += `&pageToken=${encodeURIComponent(pageToken)}`;
    }

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        ...ANDROID_HEADERS
      }
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => '');
      throw new Error(`Lấy lịch sử tin nhắn thất bại (${res.status}): ${errText}`);
    }

    const data = await res.json();
    const messages = (data.documents || []).map((doc) => {
      const f = doc.fields || {};
      const rawThumb = f.thumbnail_url?.stringValue || f.thumbnailUrl?.stringValue || f.moment_thumbnail?.stringValue || null;
      const rawCreatedAt = f.created_at?.timestampValue || f.created_at?.stringValue || doc.createTime || null;
      let timestamp = Date.now();
      if (rawCreatedAt) {
        const p = Date.parse(rawCreatedAt);
        if (!isNaN(p)) timestamp = p;
      } else if (f.created_at?.integerValue) {
        timestamp = parseInt(f.created_at.integerValue, 10);
      }

      const rawReplyMoment = f.reply_moment?.stringValue || f.moment_uid?.stringValue || f.moment_id?.stringValue || f.moment?.stringValue || null;
      const cleanReplyMoment = rawReplyMoment && rawReplyMoment.includes('/') ? rawReplyMoment.split('/').pop() : rawReplyMoment;

      return {
        id: doc.name ? doc.name.split('/').pop() : generateUUID(),
        sender: f.sender?.stringValue || f.sender_uid?.stringValue || f.user?.stringValue || '',
        body: f.body?.stringValue || f.text?.stringValue || f.msg?.stringValue || '',
        createdAt: rawCreatedAt,
        timestamp,
        replyMomentId: cleanReplyMoment,
        thumbnailUrl: rawThumb ? optimizeImageUrl(rawThumb) : null,
        caption: f.caption?.stringValue || f.moment_caption?.stringValue || null,
        clientToken: f.client_token?.stringValue || null
      };
    });

    return {
      messages,
      nextPageToken: data.nextPageToken || null
    };
  }

  /**
   * 4. GỬI TIN NHẮN MỚI HOẶC REPLY MOMENT (SEND CHAT)
   * Gateway: https://api.locketcamera.com/sendChatMessageV2
   * @param {string} receiverUid UID bạn bè nhận tin
   * @param {string} text Nội dung tin nhắn
   * @param {string|null} [replyMomentId=null] ID moment nếu reply (hoặc null)
   */
  async sendMessage(receiverUid, text, replyMomentId = null) {
    if (!receiverUid) {
      throw new Error('Thiếu receiverUid người nhận tin');
    }
    if (!text || !text.trim()) {
      throw new Error('Nội dung tin nhắn không được để trống');
    }

    const token = await this.getIdToken();
    const formattedMsg = text.endsWith('\n') ? text : text + '\n';
    const clientToken = generateUUID();

    const payload = JSON.stringify({
      data: {
        msg: formattedMsg,
        receiver_uid: receiverUid,
        moment_uid: replyMomentId || null,
        client_token: clientToken
      }
    });

    const url = `${LOCKET_CONSTANTS.API_BASE_URL}/sendChatMessageV2`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': 'okhttp/4.12.0'
      },
      body: payload
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => '');
      throw new Error(`Gửi tin nhắn thất bại (${res.status}): ${errText}`);
    }

    const data = await res.json();
    return data;
  }

  /**
   * 5. ĐÁNH DẤU ĐÃ ĐỌC TIN NHẮN (MARK AS READ)
   * Gateway: https://api.locketcamera.com/markAsRead
   * @param {string} conversationUid ID cuộc trò chuyện
   */
  async markAsRead(conversationUid) {
    if (!conversationUid) return { status: 400 };
    const token = await this.getIdToken();

    const payload = JSON.stringify({
      data: {
        conversation_uid: conversationUid
      }
    });

    const url = `${LOCKET_CONSTANTS.API_BASE_URL}/markAsRead`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': 'okhttp/4.12.0'
      },
      body: payload
    });

    if (!res.ok) {
      return { status: res.status };
    }

    return await res.json().catch(() => ({ status: 200 }));
  }

  /**
   * Helper concurrency pool gắn liền với instance
   */
  async runConcurrentPool(items, fn, concurrency = 30) {
    return runConcurrentPool(items, fn, concurrency);
  }

  /**
   * Helper preload ảnh đa luồng gắn liền với instance
   */
  async preloadImages(urls, concurrency = 30) {
    return preloadImagesConcurrently(urls, concurrency);
  }

  /**
   * Quét và tải toàn bộ lịch sử ảnh của một tài khoản (ưu tiên tài khoản đang dùng trước)
   * Sử dụng 30 luồng song song để truy vấn nhiều trang lịch sử Firestore cực nhanh.
   * @param {string|null} [authorUid=null] UID tác giả (mặc định myUid)
   * @param {Object} [options]
   * @param {number} [options.concurrency=30] Số luồng song song (mặc định 30)
   * @param {number} [options.pageSize=50] Kích thước mỗi trang
   * @param {number} [options.maxPages=20] Giới hạn số trang để tối ưu bộ nhớ
   * @param {boolean} [options.preloadAssets=true] Tự động preload ảnh đa luồng
   * @param {Function} [options.onProgress] Callback tiến độ
   */
  async fetchFullUserHistory(authorUid = null, options = {}) {
    const {
      concurrency = 30,
      pageSize = 50,
      maxPages = 40,
      preloadAssets = true,
      onProgress = null
    } = options;

    let targetUid = authorUid || this.config.myUid;
    if (!targetUid) {
      await this.syncFromStorage();
      targetUid = this.config.myUid;
    }
    if (!targetUid) return [];

    const allMoments = [];
    const seenIds = new Set();
    let currentBatchStart = 0;
    let hasMore = true;

    while (hasMore && currentBatchStart < maxPages) {
      const batchSize = Math.min(concurrency, maxPages - currentBatchStart);
      const pageTasks = [];
      for (let i = 0; i < batchSize; i++) {
        const p = currentBatchStart + i;
        pageTasks.push({
          pageIndex: p,
          offset: p * pageSize,
          limit: pageSize
        });
      }

      const batchResults = await runConcurrentPool(
        pageTasks,
        async (task) => {
          try {
            const items = await this.getMomentsHistory(targetUid, task.limit, null, task.offset);
            if (typeof onProgress === 'function') {
              onProgress({ pageIndex: task.pageIndex, count: items.length });
            }
            return { pageIndex: task.pageIndex, items };
          } catch (err) {
            return { pageIndex: task.pageIndex, items: [] };
          }
        },
        concurrency
      );

      const validBatchResults = batchResults
        .filter(Boolean)
        .sort((a, b) => (a?.pageIndex ?? 0) - (b?.pageIndex ?? 0));

      let batchTotalItems = 0;
      for (const res of validBatchResults) {
        if (!res || !Array.isArray(res.items)) continue;
        batchTotalItems += res.items.length;
        for (const m of res.items) {
          const id = m.id || m.canonical_uid || m.momentUid;
          if (id && !seenIds.has(id)) {
            seenIds.add(id);
            allMoments.push(m);
          }
        }
      }

      // Chỉ dừng khi toàn bộ batch rỗng, tránh đứt đoạn khi gặp trang lỗi mạng hoặc batch rỗng tạm thời
      if (batchTotalItems === 0) {
        hasMore = false;
      }

      currentBatchStart += batchSize;
    }

    allMoments.sort((a, b) => {
      const aTime = a.timestampMs || (typeof a.seconds === 'number' ? (a.seconds < 1e11 ? a.seconds * 1000 : a.seconds) : 0);
      const bTime = b.timestampMs || (typeof b.seconds === 'number' ? (b.seconds < 1e11 ? b.seconds * 1000 : b.seconds) : 0);
      return bTime - aTime;
    });

    if (preloadAssets && allMoments.length > 0) {
      // Chỉ preload trước trang đầu tiên (~30 ảnh) bằng thumbnail WebP nhẹ (~5KB) để nạp tức thì,
      // các ảnh còn lại nạp on-demand khi người dùng lướt tới
      const thumbs = allMoments.slice(0, 30).map((m) =>
        optimizeThumbnailUrl(m.thumbnail_url, 180, 65) || m.thumbnail_url
      ).filter(Boolean);
      preloadImagesConcurrently(thumbs, concurrency).catch(() => {});
    }

    return allMoments;
  }

  /**
   * Tải ảnh của danh sách bạn bè song song bằng concurrency pool (30 luồng)
   * Sau khi hoàn thành của mình, nạp toàn bộ ảnh bạn bè mà không làm đơ giao diện.
   * @param {Array<Object|string>} friendsList
   * @param {number} [limit=30]
   * @param {number} [concurrency=30]
   */
  async fetchFriendsMomentsConcurrently(friendsList = [], limit = 30, concurrency = 30) {
    if (!Array.isArray(friendsList) || friendsList.length === 0) return [];

    const uids = friendsList
      .map((f) => (typeof f === 'string' ? f : f?.uid || f?.localId || f?.user_uid))
      .filter(Boolean);

    const results = await runConcurrentPool(
      uids,
      async (uid) => {
        try {
          return await this.getMomentsHistory(uid, limit);
        } catch {
          return [];
        }
      },
      concurrency
    );

    const allFriendMoments = [];
    const seenIds = new Set();
    for (const items of results) {
      if (Array.isArray(items)) {
        for (const m of items) {
          const id = m.id || m.canonical_uid || m.momentUid;
          if (id && !seenIds.has(id)) {
            seenIds.add(id);
            allFriendMoments.push(m);
          }
        }
      }
    }

    allFriendMoments.sort((a, b) => {
      const aTime = a.timestampMs || (typeof a.seconds === 'number' ? (a.seconds < 1e11 ? a.seconds * 1000 : a.seconds) : 0);
      const bTime = b.timestampMs || (typeof b.seconds === 'number' ? (b.seconds < 1e11 ? b.seconds * 1000 : b.seconds) : 0);
      return bTime - aTime;
    });

    if (allFriendMoments.length > 0) {
      const thumbs = allFriendMoments.slice(0, 30).map((m) =>
        optimizeThumbnailUrl(m.thumbnail_url, 180, 65) || m.thumbnail_url
      ).filter(Boolean);
      preloadImagesConcurrently(thumbs, concurrency).catch(() => {});
    }

    return allFriendMoments;
  }
}

// Global service instance
export const looketService = new LooketService();

