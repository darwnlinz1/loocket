const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ["assets/flags-Ds5sOQas.js", "assets/moments-v212.js"]),
) => i.map((i) => d[i]);
import {
  f as e,
  A as t,
  m as n,
  j as r,
  s as a,
  n as l,
  e as o,
  p as i,
  q as s,
  v as u,
  t as c,
  u as d,
  w as f,
  b as p,
  x as h,
  d as m,
  y as g,
  z as v,
  B as y,
  i as b,
  k,
  C as x,
  D as w,
  E as _,
  h as S,
  V as C,
  U as j,
  R as N,
} from "./moments-v212.js";
const E = {
    "User-Agent":
      "com.locket.Locket/1.43.1 iPhone/18.1 hw/iPhone15_3 (GTMSUF/1)",
    "X-Firebase-Storage-Version": "ios/10.28.1",
    "X-Firebase-Gmpid": "1:641029076083:ios:cc8eb46290d69b234fa609",
  },
  L = { image: "moments/thumbnails", video: "moments/videos" };
!(function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      t(e);
    new MutationObserver((e) => {
      for (const n of e)
        if ("childList" === n.type)
          for (const e of n.addedNodes)
            "LINK" === e.tagName && "modulepreload" === e.rel && t(e);
    }).observe(document, { childList: !0, subtree: !0 });
  }
  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = (function (e) {
      const t = {};
      return (
        e.integrity && (t.integrity = e.integrity),
        e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
        "use-credentials" === e.crossOrigin
          ? (t.credentials = "include")
          : "anonymous" === e.crossOrigin
            ? (t.credentials = "omit")
            : (t.credentials = "same-origin"),
        t
      );
    })(e);
    fetch(e.href, t);
  }
})();
var T,
  P,
  R,
  M,
  z = { exports: {} },
  O = {},
  I = { exports: {} },
  F = {};
function D() {
  if (T) return F;
  T = 1;
  var e = Symbol.for("react.element"),
    t = Symbol.for("react.portal"),
    n = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    a = Symbol.for("react.profiler"),
    l = Symbol.for("react.provider"),
    o = Symbol.for("react.context"),
    i = Symbol.for("react.forward_ref"),
    s = Symbol.for("react.suspense"),
    u = Symbol.for("react.memo"),
    c = Symbol.for("react.lazy"),
    d = Symbol.iterator;
  var f = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    p = Object.assign,
    h = {};
  function m(e, t, n) {
    ((this.props = e),
      (this.context = t),
      (this.refs = h),
      (this.updater = n || f));
  }
  function g() {}
  function v(e, t, n) {
    ((this.props = e),
      (this.context = t),
      (this.refs = h),
      (this.updater = n || f));
  }
  ((m.prototype.isReactComponent = {}),
    (m.prototype.setState = function (e, t) {
      if ("object" != typeof e && "function" != typeof e && null != e)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, e, t, "setState");
    }),
    (m.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    }),
    (g.prototype = m.prototype));
  var y = (v.prototype = new g());
  ((y.constructor = v), p(y, m.prototype), (y.isPureReactComponent = !0));
  var b = Array.isArray,
    k = Object.prototype.hasOwnProperty,
    x = { current: null },
    w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(t, n, r) {
    var a,
      l = {},
      o = null,
      i = null;
    if (null != n)
      for (a in (void 0 !== n.ref && (i = n.ref),
      void 0 !== n.key && (o = "" + n.key),
      n))
        k.call(n, a) && !w.hasOwnProperty(a) && (l[a] = n[a]);
    var s = arguments.length - 2;
    if (1 === s) l.children = r;
    else if (1 < s) {
      for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
      l.children = u;
    }
    if (t && t.defaultProps)
      for (a in (s = t.defaultProps)) void 0 === l[a] && (l[a] = s[a]);
    return {
      $$typeof: e,
      type: t,
      key: o,
      ref: i,
      props: l,
      _owner: x.current,
    };
  }
  function S(t) {
    return "object" == typeof t && null !== t && t.$$typeof === e;
  }
  var C = /\/+/g;
  function j(e, t) {
    return "object" == typeof e && null !== e && null != e.key
      ? (function (e) {
          var t = { "=": "=0", ":": "=2" };
          return (
            "$" +
            e.replace(/[=:]/g, function (e) {
              return t[e];
            })
          );
        })("" + e.key)
      : t.toString(36);
  }
  function N(n, r, a, l, o) {
    var i = typeof n;
    ("undefined" !== i && "boolean" !== i) || (n = null);
    var s = !1;
    if (null === n) s = !0;
    else
      switch (i) {
        case "string":
        case "number":
          s = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case e:
            case t:
              s = !0;
          }
      }
    if (s)
      return (
        (o = o((s = n))),
        (n = "" === l ? "." + j(s, 0) : l),
        b(o)
          ? ((a = ""),
            null != n && (a = n.replace(C, "$&/") + "/"),
            N(o, r, a, "", function (e) {
              return e;
            }))
          : null != o &&
            (S(o) &&
              (o = (function (t, n) {
                return {
                  $$typeof: e,
                  type: t.type,
                  key: n,
                  ref: t.ref,
                  props: t.props,
                  _owner: t._owner,
                };
              })(
                o,
                a +
                  (!o.key || (s && s.key === o.key)
                    ? ""
                    : ("" + o.key).replace(C, "$&/") + "/") +
                  n,
              )),
            r.push(o)),
        1
      );
    if (((s = 0), (l = "" === l ? "." : l + ":"), b(n)))
      for (var u = 0; u < n.length; u++) {
        var c = l + j((i = n[u]), u);
        s += N(i, r, a, c, o);
      }
    else if (
      ((c = (function (e) {
        return null === e || "object" != typeof e
          ? null
          : "function" == typeof (e = (d && e[d]) || e["@@iterator"])
            ? e
            : null;
      })(n)),
      "function" == typeof c)
    )
      for (n = c.call(n), u = 0; !(i = n.next()).done;)
        s += N((i = i.value), r, a, (c = l + j(i, u++)), o);
    else if ("object" === i)
      throw (
        (r = String(n)),
        Error(
          "Objects are not valid as a React child (found: " +
            ("[object Object]" === r
              ? "object with keys {" + Object.keys(n).join(", ") + "}"
              : r) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return s;
  }
  function E(e, t, n) {
    if (null == e) return e;
    var r = [],
      a = 0;
    return (
      N(e, r, "", "", function (e) {
        return t.call(n, e, a++);
      }),
      r
    );
  }
  function L(e) {
    if (-1 === e._status) {
      var t = e._result;
      ((t = t()).then(
        function (t) {
          (0 !== e._status && -1 !== e._status) ||
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (0 !== e._status && -1 !== e._status) ||
            ((e._status = 2), (e._result = t));
        },
      ),
        -1 === e._status && ((e._status = 0), (e._result = t)));
    }
    if (1 === e._status) return e._result.default;
    throw e._result;
  }
  var P = { current: null },
    R = { transition: null },
    M = {
      ReactCurrentDispatcher: P,
      ReactCurrentBatchConfig: R,
      ReactCurrentOwner: x,
    };
  function z() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (F.Children = {
      map: E,
      forEach: function (e, t, n) {
        E(
          e,
          function () {
            t.apply(this, arguments);
          },
          n,
        );
      },
      count: function (e) {
        var t = 0;
        return (
          E(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          E(e, function (e) {
            return e;
          }) || []
        );
      },
      only: function (e) {
        if (!S(e))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return e;
      },
    }),
    (F.Component = m),
    (F.Fragment = n),
    (F.Profiler = a),
    (F.PureComponent = v),
    (F.StrictMode = r),
    (F.Suspense = s),
    (F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
    (F.act = z),
    (F.cloneElement = function (t, n, r) {
      if (null == t)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            t +
            ".",
        );
      var a = p({}, t.props),
        l = t.key,
        o = t.ref,
        i = t._owner;
      if (null != n) {
        if (
          (void 0 !== n.ref && ((o = n.ref), (i = x.current)),
          void 0 !== n.key && (l = "" + n.key),
          t.type && t.type.defaultProps)
        )
          var s = t.type.defaultProps;
        for (u in n)
          k.call(n, u) &&
            !w.hasOwnProperty(u) &&
            (a[u] = void 0 === n[u] && void 0 !== s ? s[u] : n[u]);
      }
      var u = arguments.length - 2;
      if (1 === u) a.children = r;
      else if (1 < u) {
        s = Array(u);
        for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
        a.children = s;
      }
      return { $$typeof: e, type: t.type, key: l, ref: o, props: a, _owner: i };
    }),
    (F.createContext = function (e) {
      return (
        ((e = {
          $$typeof: o,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }).Provider = { $$typeof: l, _context: e }),
        (e.Consumer = e)
      );
    }),
    (F.createElement = _),
    (F.createFactory = function (e) {
      var t = _.bind(null, e);
      return ((t.type = e), t);
    }),
    (F.createRef = function () {
      return { current: null };
    }),
    (F.forwardRef = function (e) {
      return { $$typeof: i, render: e };
    }),
    (F.isValidElement = S),
    (F.lazy = function (e) {
      return { $$typeof: c, _payload: { _status: -1, _result: e }, _init: L };
    }),
    (F.memo = function (e, t) {
      return { $$typeof: u, type: e, compare: void 0 === t ? null : t };
    }),
    (F.startTransition = function (e) {
      var t = R.transition;
      R.transition = {};
      try {
        e();
      } finally {
        R.transition = t;
      }
    }),
    (F.unstable_act = z),
    (F.useCallback = function (e, t) {
      return P.current.useCallback(e, t);
    }),
    (F.useContext = function (e) {
      return P.current.useContext(e);
    }),
    (F.useDebugValue = function () {}),
    (F.useDeferredValue = function (e) {
      return P.current.useDeferredValue(e);
    }),
    (F.useEffect = function (e, t) {
      return P.current.useEffect(e, t);
    }),
    (F.useId = function () {
      return P.current.useId();
    }),
    (F.useImperativeHandle = function (e, t, n) {
      return P.current.useImperativeHandle(e, t, n);
    }),
    (F.useInsertionEffect = function (e, t) {
      return P.current.useInsertionEffect(e, t);
    }),
    (F.useLayoutEffect = function (e, t) {
      return P.current.useLayoutEffect(e, t);
    }),
    (F.useMemo = function (e, t) {
      return P.current.useMemo(e, t);
    }),
    (F.useReducer = function (e, t, n) {
      return P.current.useReducer(e, t, n);
    }),
    (F.useRef = function (e) {
      return P.current.useRef(e);
    }),
    (F.useState = function (e) {
      return P.current.useState(e);
    }),
    (F.useSyncExternalStore = function (e, t, n) {
      return P.current.useSyncExternalStore(e, t, n);
    }),
    (F.useTransition = function () {
      return P.current.useTransition();
    }),
    (F.version = "18.3.1"),
    F
  );
}
function U() {
  return (P || ((P = 1), (I.exports = D())), I.exports);
}
var B =
    (M ||
      ((M = 1),
      (z.exports = (function () {
        if (R) return O;
        R = 1;
        var e = U(),
          t = Symbol.for("react.element"),
          n = Symbol.for("react.fragment"),
          r = Object.prototype.hasOwnProperty,
          a =
            e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function o(e, n, o) {
          var i,
            s = {},
            u = null,
            c = null;
          for (i in (void 0 !== o && (u = "" + o),
          void 0 !== n.key && (u = "" + n.key),
          void 0 !== n.ref && (c = n.ref),
          n))
            r.call(n, i) && !l.hasOwnProperty(i) && (s[i] = n[i]);
          if (e && e.defaultProps)
            for (i in (n = e.defaultProps)) void 0 === s[i] && (s[i] = n[i]);
          return {
            $$typeof: t,
            type: e,
            key: u,
            ref: c,
            props: s,
            _owner: a.current,
          };
        }
        return ((O.Fragment = n), (O.jsx = o), (O.jsxs = o), O);
      })())),
    z.exports),
  A = U();
const $ = n(A);
var V,
  W,
  H,
  Q,
  q,
  K = {},
  X = { exports: {} },
  G = {},
  Y = { exports: {} },
  Z = {};
function J() {
  return (
    W ||
      ((W = 1),
      (Y.exports =
        (V ||
          ((V = 1),
          (function (e) {
            function t(e, t) {
              var n = e.length;
              e.push(t);
              e: for (; 0 < n;) {
                var r = (n - 1) >>> 1,
                  l = e[r];
                if (!(0 < a(l, t))) break e;
                ((e[r] = t), (e[n] = l), (n = r));
              }
            }
            function n(e) {
              return 0 === e.length ? null : e[0];
            }
            function r(e) {
              if (0 === e.length) return null;
              var t = e[0],
                n = e.pop();
              if (n !== t) {
                e[0] = n;
                e: for (var r = 0, l = e.length, o = l >>> 1; r < o;) {
                  var i = 2 * (r + 1) - 1,
                    s = e[i],
                    u = i + 1,
                    c = e[u];
                  if (0 > a(s, n))
                    u < l && 0 > a(c, s)
                      ? ((e[r] = c), (e[u] = n), (r = u))
                      : ((e[r] = s), (e[i] = n), (r = i));
                  else {
                    if (!(u < l && 0 > a(c, n))) break e;
                    ((e[r] = c), (e[u] = n), (r = u));
                  }
                }
              }
              return t;
            }
            function a(e, t) {
              var n = e.sortIndex - t.sortIndex;
              return 0 !== n ? n : e.id - t.id;
            }
            if (
              "object" == typeof performance &&
              "function" == typeof performance.now
            ) {
              var l = performance;
              e.unstable_now = function () {
                return l.now();
              };
            } else {
              var o = Date,
                i = o.now();
              e.unstable_now = function () {
                return o.now() - i;
              };
            }
            var s = [],
              u = [],
              c = 1,
              d = null,
              f = 3,
              p = !1,
              h = !1,
              m = !1,
              g = "function" == typeof setTimeout ? setTimeout : null,
              v = "function" == typeof clearTimeout ? clearTimeout : null,
              y = "undefined" != typeof setImmediate ? setImmediate : null;
            function b(e) {
              for (var a = n(u); null !== a;) {
                if (null === a.callback) r(u);
                else {
                  if (!(a.startTime <= e)) break;
                  (r(u), (a.sortIndex = a.expirationTime), t(s, a));
                }
                a = n(u);
              }
            }
            function k(e) {
              if (((m = !1), b(e), !h))
                if (null !== n(s)) ((h = !0), R(x));
                else {
                  var t = n(u);
                  null !== t && M(k, t.startTime - e);
                }
            }
            function x(t, a) {
              ((h = !1), m && ((m = !1), v(C), (C = -1)), (p = !0));
              var l = f;
              try {
                for (
                  b(a), d = n(s);
                  null !== d && (!(d.expirationTime > a) || (t && !E()));
                ) {
                  var o = d.callback;
                  if ("function" == typeof o) {
                    ((d.callback = null), (f = d.priorityLevel));
                    var i = o(d.expirationTime <= a);
                    ((a = e.unstable_now()),
                      "function" == typeof i
                        ? (d.callback = i)
                        : d === n(s) && r(s),
                      b(a));
                  } else r(s);
                  d = n(s);
                }
                if (null !== d) var c = !0;
                else {
                  var g = n(u);
                  (null !== g && M(k, g.startTime - a), (c = !1));
                }
                return c;
              } finally {
                ((d = null), (f = l), (p = !1));
              }
            }
            "undefined" != typeof navigator &&
              void 0 !== navigator.scheduling &&
              void 0 !== navigator.scheduling.isInputPending &&
              navigator.scheduling.isInputPending.bind(navigator.scheduling);
            var w,
              _ = !1,
              S = null,
              C = -1,
              j = 5,
              N = -1;
            function E() {
              return !(e.unstable_now() - N < j);
            }
            function L() {
              if (null !== S) {
                var t = e.unstable_now();
                N = t;
                var n = !0;
                try {
                  n = S(!0, t);
                } finally {
                  n ? w() : ((_ = !1), (S = null));
                }
              } else _ = !1;
            }
            if ("function" == typeof y)
              w = function () {
                y(L);
              };
            else if ("undefined" != typeof MessageChannel) {
              var T = new MessageChannel(),
                P = T.port2;
              ((T.port1.onmessage = L),
                (w = function () {
                  P.postMessage(null);
                }));
            } else
              w = function () {
                g(L, 0);
              };
            function R(e) {
              ((S = e), _ || ((_ = !0), w()));
            }
            function M(t, n) {
              C = g(function () {
                t(e.unstable_now());
              }, n);
            }
            ((e.unstable_IdlePriority = 5),
              (e.unstable_ImmediatePriority = 1),
              (e.unstable_LowPriority = 4),
              (e.unstable_NormalPriority = 3),
              (e.unstable_Profiling = null),
              (e.unstable_UserBlockingPriority = 2),
              (e.unstable_cancelCallback = function (e) {
                e.callback = null;
              }),
              (e.unstable_continueExecution = function () {
                h || p || ((h = !0), R(x));
              }),
              (e.unstable_forceFrameRate = function (e) {
                0 > e || 125 < e
                  ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                    )
                  : (j = 0 < e ? Math.floor(1e3 / e) : 5);
              }),
              (e.unstable_getCurrentPriorityLevel = function () {
                return f;
              }),
              (e.unstable_getFirstCallbackNode = function () {
                return n(s);
              }),
              (e.unstable_next = function (e) {
                switch (f) {
                  case 1:
                  case 2:
                  case 3:
                    var t = 3;
                    break;
                  default:
                    t = f;
                }
                var n = f;
                f = t;
                try {
                  return e();
                } finally {
                  f = n;
                }
              }),
              (e.unstable_pauseExecution = function () {}),
              (e.unstable_requestPaint = function () {}),
              (e.unstable_runWithPriority = function (e, t) {
                switch (e) {
                  case 1:
                  case 2:
                  case 3:
                  case 4:
                  case 5:
                    break;
                  default:
                    e = 3;
                }
                var n = f;
                f = e;
                try {
                  return t();
                } finally {
                  f = n;
                }
              }),
              (e.unstable_scheduleCallback = function (r, a, l) {
                var o = e.unstable_now();
                switch (
                  ((l =
                    "object" == typeof l &&
                    null !== l &&
                    "number" == typeof (l = l.delay) &&
                    0 < l
                      ? o + l
                      : o),
                  r)
                ) {
                  case 1:
                    var i = -1;
                    break;
                  case 2:
                    i = 250;
                    break;
                  case 5:
                    i = 1073741823;
                    break;
                  case 4:
                    i = 1e4;
                    break;
                  default:
                    i = 5e3;
                }
                return (
                  (r = {
                    id: c++,
                    callback: a,
                    priorityLevel: r,
                    startTime: l,
                    expirationTime: (i = l + i),
                    sortIndex: -1,
                  }),
                  l > o
                    ? ((r.sortIndex = l),
                      t(u, r),
                      null === n(s) &&
                        r === n(u) &&
                        (m ? (v(C), (C = -1)) : (m = !0), M(k, l - o)))
                    : ((r.sortIndex = i), t(s, r), h || p || ((h = !0), R(x))),
                  r
                );
              }),
              (e.unstable_shouldYield = E),
              (e.unstable_wrapCallback = function (e) {
                var t = f;
                return function () {
                  var n = f;
                  f = t;
                  try {
                    return e.apply(this, arguments);
                  } finally {
                    f = n;
                  }
                };
              }));
          })(Z)),
        Z))),
    Y.exports
  );
}
function ee() {
  if (H) return G;
  H = 1;
  var e = U(),
    t = J();
  function n(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var r = new Set(),
    a = {};
  function l(e, t) {
    (o(e, t), o(e + "Capture", t));
  }
  function o(e, t) {
    for (a[e] = t, e = 0; e < t.length; e++) r.add(t[e]);
  }
  var i = !(
      "undefined" == typeof window ||
      void 0 === window.document ||
      void 0 === window.document.createElement
    ),
    s = Object.prototype.hasOwnProperty,
    u =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    c = {},
    d = {};
  function f(e, t, n, r, a, l, o) {
    ((this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
      (this.attributeName = r),
      (this.attributeNamespace = a),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = l),
      (this.removeEmptyString = o));
  }
  var p = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      p[e] = new f(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      p[t] = new f(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        p[e] = new f(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      p[e] = new f(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        p[e] = new f(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      p[e] = new f(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      p[e] = new f(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      p[e] = new f(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      p[e] = new f(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var h = /[\-:]([a-z])/g;
  function m(e) {
    return e[1].toUpperCase();
  }
  function g(e, t, n, r) {
    var a = p.hasOwnProperty(t) ? p[t] : null;
    (null !== a
      ? 0 !== a.type
      : r ||
        !(2 < t.length) ||
        ("o" !== t[0] && "O" !== t[0]) ||
        ("n" !== t[1] && "N" !== t[1])) &&
      ((function (e, t, n, r) {
        if (
          null == t ||
          (function (e, t, n, r) {
            if (null !== n && 0 === n.type) return !1;
            switch (typeof t) {
              case "function":
              case "symbol":
                return !0;
              case "boolean":
                return (
                  !r &&
                  (null !== n
                    ? !n.acceptsBooleans
                    : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                      "aria-" !== e)
                );
              default:
                return !1;
            }
          })(e, t, n, r)
        )
          return !0;
        if (r) return !1;
        if (null !== n)
          switch (n.type) {
            case 3:
              return !t;
            case 4:
              return !1 === t;
            case 5:
              return isNaN(t);
            case 6:
              return isNaN(t) || 1 > t;
          }
        return !1;
      })(t, n, a, r) && (n = null),
      r || null === a
        ? (function (e) {
            return (
              !!s.call(d, e) ||
              (!s.call(c, e) && (u.test(e) ? (d[e] = !0) : ((c[e] = !0), !1)))
            );
          })(t) &&
          (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : a.mustUseProperty
          ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
          : ((t = a.attributeName),
            (r = a.attributeNamespace),
            null === n
              ? e.removeAttribute(t)
              : ((n =
                  3 === (a = a.type) || (4 === a && !0 === n) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(h, m);
      p[t] = new f(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(h, m);
        p[t] = new f(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(h, m);
      p[t] = new f(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      p[e] = new f(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (p.xlinkHref = new f(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      p[e] = new f(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  var v = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    y = Symbol.for("react.element"),
    b = Symbol.for("react.portal"),
    k = Symbol.for("react.fragment"),
    x = Symbol.for("react.strict_mode"),
    w = Symbol.for("react.profiler"),
    _ = Symbol.for("react.provider"),
    S = Symbol.for("react.context"),
    C = Symbol.for("react.forward_ref"),
    j = Symbol.for("react.suspense"),
    N = Symbol.for("react.suspense_list"),
    E = Symbol.for("react.memo"),
    L = Symbol.for("react.lazy"),
    T = Symbol.for("react.offscreen"),
    P = Symbol.iterator;
  function R(e) {
    return null === e || "object" != typeof e
      ? null
      : "function" == typeof (e = (P && e[P]) || e["@@iterator"])
        ? e
        : null;
  }
  var M,
    z = Object.assign;
  function O(e) {
    if (void 0 === M)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        M = (t && t[1]) || "";
      }
    return "\n" + M + e;
  }
  var I = !1;
  function F(e, t) {
    if (!e || I) return "";
    I = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          "object" == typeof Reflect && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (u) {
            var r = u;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (u) {
            r = u;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (u) {
          r = u;
        }
        e();
      }
    } catch (u) {
      if (u && r && "string" == typeof u.stack) {
        for (
          var a = u.stack.split("\n"),
            l = r.stack.split("\n"),
            o = a.length - 1,
            i = l.length - 1;
          1 <= o && 0 <= i && a[o] !== l[i];
        )
          i--;
        for (; 1 <= o && 0 <= i; o--, i--)
          if (a[o] !== l[i]) {
            if (1 !== o || 1 !== i)
              do {
                if ((o--, 0 > --i || a[o] !== l[i])) {
                  var s = "\n" + a[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      s.includes("<anonymous>") &&
                      (s = s.replace("<anonymous>", e.displayName)),
                    s
                  );
                }
              } while (1 <= o && 0 <= i);
            break;
          }
      }
    } finally {
      ((I = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? O(e) : "";
  }
  function D(e) {
    switch (e.tag) {
      case 5:
        return O(e.type);
      case 16:
        return O("Lazy");
      case 13:
        return O("Suspense");
      case 19:
        return O("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = F(e.type, !1));
      case 11:
        return (e = F(e.type.render, !1));
      case 1:
        return (e = F(e.type, !0));
      default:
        return "";
    }
  }
  function B(e) {
    if (null == e) return null;
    if ("function" == typeof e) return e.displayName || e.name || null;
    if ("string" == typeof e) return e;
    switch (e) {
      case k:
        return "Fragment";
      case b:
        return "Portal";
      case w:
        return "Profiler";
      case x:
        return "StrictMode";
      case j:
        return "Suspense";
      case N:
        return "SuspenseList";
    }
    if ("object" == typeof e)
      switch (e.$$typeof) {
        case S:
          return (e.displayName || "Context") + ".Consumer";
        case _:
          return (e._context.displayName || "Context") + ".Provider";
        case C:
          var t = e.render;
          return (
            (e = e.displayName) ||
              (e =
                "" !== (e = t.displayName || t.name || "")
                  ? "ForwardRef(" + e + ")"
                  : "ForwardRef"),
            e
          );
        case E:
          return null !== (t = e.displayName || null) ? t : B(e.type) || "Memo";
        case L:
          ((t = e._payload), (e = e._init));
          try {
            return B(e(t));
          } catch (n) {}
      }
    return null;
  }
  function A(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = (e = t.render).displayName || e.name || ""),
          t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return B(t);
      case 8:
        return t === x ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if ("function" == typeof t) return t.displayName || t.name || null;
        if ("string" == typeof t) return t;
    }
    return null;
  }
  function $(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
      case "object":
        return e;
      default:
        return "";
    }
  }
  function V(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      "input" === e.toLowerCase() &&
      ("checkbox" === t || "radio" === t)
    );
  }
  function W(e) {
    e._valueTracker ||
      (e._valueTracker = (function (e) {
        var t = V(e) ? "checked" : "value",
          n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
          r = "" + e[t];
        if (
          !e.hasOwnProperty(t) &&
          void 0 !== n &&
          "function" == typeof n.get &&
          "function" == typeof n.set
        ) {
          var a = n.get,
            l = n.set;
          return (
            Object.defineProperty(e, t, {
              configurable: !0,
              get: function () {
                return a.call(this);
              },
              set: function (e) {
                ((r = "" + e), l.call(this, e));
              },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
              getValue: function () {
                return r;
              },
              setValue: function (e) {
                r = "" + e;
              },
              stopTracking: function () {
                ((e._valueTracker = null), delete e[t]);
              },
            }
          );
        }
      })(e));
  }
  function Q(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = V(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r) !== n && (t.setValue(e), !0)
    );
  }
  function q(e) {
    if (
      void 0 === (e = e || ("undefined" != typeof document ? document : void 0))
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch (t) {
      return e.body;
    }
  }
  function K(e, t) {
    var n = t.checked;
    return z({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: null != n ? n : e._wrapperState.initialChecked,
    });
  }
  function X(e, t) {
    var n = null == t.defaultValue ? "" : t.defaultValue,
      r = null != t.checked ? t.checked : t.defaultChecked;
    ((n = $(null != t.value ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          "checkbox" === t.type || "radio" === t.type
            ? null != t.checked
            : null != t.value,
      }));
  }
  function Y(e, t) {
    null != (t = t.checked) && g(e, "checked", t, !1);
  }
  function Z(e, t) {
    Y(e, t);
    var n = $(t.value),
      r = t.type;
    if (null != n)
      "number" === r
        ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if ("submit" === r || "reset" === r)
      return void e.removeAttribute("value");
    (t.hasOwnProperty("value")
      ? te(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && te(e, t.type, $(t.defaultValue)),
      null == t.checked &&
        null != t.defaultChecked &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function ee(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(
        ("submit" !== r && "reset" !== r) ||
        (void 0 !== t.value && null !== t.value)
      ))
        return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ("" !== (n = e.name) && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      "" !== n && (e.name = n));
  }
  function te(e, t, n) {
    ("number" === t && q(e.ownerDocument) === e) ||
      (null == n
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var ne = Array.isArray;
  function re(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++)
        ((a = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== a && (e[n].selected = a),
          a && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + $(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n)
          return (
            (e[a].selected = !0),
            void (r && (e[a].defaultSelected = !0))
          );
        null !== t || e[a].disabled || (t = e[a]);
      }
      null !== t && (t.selected = !0);
    }
  }
  function ae(e, t) {
    if (null != t.dangerouslySetInnerHTML) throw Error(n(91));
    return z({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function le(e, t) {
    var r = t.value;
    if (null == r) {
      if (((r = t.children), (t = t.defaultValue), null != r)) {
        if (null != t) throw Error(n(92));
        if (ne(r)) {
          if (1 < r.length) throw Error(n(93));
          r = r[0];
        }
        t = r;
      }
      (null == t && (t = ""), (r = t));
    }
    e._wrapperState = { initialValue: $(r) };
  }
  function oe(e, t) {
    var n = $(t.value),
      r = $(t.defaultValue);
    (null != n &&
      ((n = "" + n) !== e.value && (e.value = n),
      null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
      null != r && (e.defaultValue = "" + r));
  }
  function ie(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      "" !== t &&
      null !== t &&
      (e.value = t);
  }
  function se(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ue(e, t) {
    return null == e || "http://www.w3.org/1999/xhtml" === e
      ? se(t)
      : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var ce,
    de,
    fe =
      ((de = function (e, t) {
        if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e)
          e.innerHTML = t;
        else {
          for (
            (ce = ce || document.createElement("div")).innerHTML =
              "<svg>" + t.valueOf().toString() + "</svg>",
              t = ce.firstChild;
            e.firstChild;
          )
            e.removeChild(e.firstChild);
          for (; t.firstChild;) e.appendChild(t.firstChild);
        }
      }),
      "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
        ? function (e, t, n, r) {
            MSApp.execUnsafeLocalFunction(function () {
              return de(e, t);
            });
          }
        : de);
  function pe(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && 3 === n.nodeType)
        return void (n.nodeValue = t);
    }
    e.textContent = t;
  }
  var he = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    me = ["Webkit", "ms", "Moz", "O"];
  function ge(e, t, n) {
    return null == t || "boolean" == typeof t || "" === t
      ? ""
      : n || "number" != typeof t || 0 === t || (he.hasOwnProperty(e) && he[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function ve(e, t) {
    for (var n in ((e = e.style), t))
      if (t.hasOwnProperty(n)) {
        var r = 0 === n.indexOf("--"),
          a = ge(n, t[n], r);
        ("float" === n && (n = "cssFloat"),
          r ? e.setProperty(n, a) : (e[n] = a));
      }
  }
  Object.keys(he).forEach(function (e) {
    me.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (he[t] = he[e]));
    });
  });
  var ye = z(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function be(e, t) {
    if (t) {
      if (ye[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
        throw Error(n(137, e));
      if (null != t.dangerouslySetInnerHTML) {
        if (null != t.children) throw Error(n(60));
        if (
          "object" != typeof t.dangerouslySetInnerHTML ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(n(61));
      }
      if (null != t.style && "object" != typeof t.style) throw Error(n(62));
    }
  }
  function ke(e, t) {
    if (-1 === e.indexOf("-")) return "string" == typeof t.is;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var xe = null;
  function we(e) {
    return (
      (e = e.target || e.srcElement || window).correspondingUseElement &&
        (e = e.correspondingUseElement),
      3 === e.nodeType ? e.parentNode : e
    );
  }
  var _e = null,
    Se = null,
    Ce = null;
  function je(e) {
    if ((e = ka(e))) {
      if ("function" != typeof _e) throw Error(n(280));
      var t = e.stateNode;
      t && ((t = wa(t)), _e(e.stateNode, e.type, t));
    }
  }
  function Ne(e) {
    Se ? (Ce ? Ce.push(e) : (Ce = [e])) : (Se = e);
  }
  function Ee() {
    if (Se) {
      var e = Se,
        t = Ce;
      if (((Ce = Se = null), je(e), t)) for (e = 0; e < t.length; e++) je(t[e]);
    }
  }
  function Le(e, t) {
    return e(t);
  }
  function Te() {}
  var Pe = !1;
  function Re(e, t, n) {
    if (Pe) return e(t, n);
    Pe = !0;
    try {
      return Le(e, t, n);
    } finally {
      ((Pe = !1), (null !== Se || null !== Ce) && (Te(), Ee()));
    }
  }
  function Me(e, t) {
    var r = e.stateNode;
    if (null === r) return null;
    var a = wa(r);
    if (null === a) return null;
    r = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((a = !a.disabled) ||
          (a = !(
            "button" === (e = e.type) ||
            "input" === e ||
            "select" === e ||
            "textarea" === e
          )),
          (e = !a));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && "function" != typeof r) throw Error(n(231, t, typeof r));
    return r;
  }
  var ze = !1;
  if (i)
    try {
      var Oe = {};
      (Object.defineProperty(Oe, "passive", {
        get: function () {
          ze = !0;
        },
      }),
        window.addEventListener("test", Oe, Oe),
        window.removeEventListener("test", Oe, Oe));
    } catch (de) {
      ze = !1;
    }
  function Ie(e, t, n, r, a, l, o, i, s) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, u);
    } catch (c) {
      this.onError(c);
    }
  }
  var Fe = !1,
    De = null,
    Ue = !1,
    Be = null,
    Ae = {
      onError: function (e) {
        ((Fe = !0), (De = e));
      },
    };
  function $e(e, t, n, r, a, l, o, i, s) {
    ((Fe = !1), (De = null), Ie.apply(Ae, arguments));
  }
  function Ve(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return;) t = t.return;
    else {
      e = t;
      do {
        (!!(4098 & (t = e).flags) && (n = t.return), (e = t.return));
      } while (e);
    }
    return 3 === t.tag ? n : null;
  }
  function We(e) {
    if (13 === e.tag) {
      var t = e.memoizedState;
      if (
        (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
        null !== t)
      )
        return t.dehydrated;
    }
    return null;
  }
  function He(e) {
    if (Ve(e) !== e) throw Error(n(188));
  }
  function Qe(e) {
    return null !==
      (e = (function (e) {
        var t = e.alternate;
        if (!t) {
          if (null === (t = Ve(e))) throw Error(n(188));
          return t !== e ? null : e;
        }
        for (var r = e, a = t; ;) {
          var l = r.return;
          if (null === l) break;
          var o = l.alternate;
          if (null === o) {
            if (null !== (a = l.return)) {
              r = a;
              continue;
            }
            break;
          }
          if (l.child === o.child) {
            for (o = l.child; o;) {
              if (o === r) return (He(l), e);
              if (o === a) return (He(l), t);
              o = o.sibling;
            }
            throw Error(n(188));
          }
          if (r.return !== a.return) ((r = l), (a = o));
          else {
            for (var i = !1, s = l.child; s;) {
              if (s === r) {
                ((i = !0), (r = l), (a = o));
                break;
              }
              if (s === a) {
                ((i = !0), (a = l), (r = o));
                break;
              }
              s = s.sibling;
            }
            if (!i) {
              for (s = o.child; s;) {
                if (s === r) {
                  ((i = !0), (r = o), (a = l));
                  break;
                }
                if (s === a) {
                  ((i = !0), (a = o), (r = l));
                  break;
                }
                s = s.sibling;
              }
              if (!i) throw Error(n(189));
            }
          }
          if (r.alternate !== a) throw Error(n(190));
        }
        if (3 !== r.tag) throw Error(n(188));
        return r.stateNode.current === r ? e : t;
      })(e))
      ? qe(e)
      : null;
  }
  function qe(e) {
    if (5 === e.tag || 6 === e.tag) return e;
    for (e = e.child; null !== e;) {
      var t = qe(e);
      if (null !== t) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ke = t.unstable_scheduleCallback,
    Xe = t.unstable_cancelCallback,
    Ge = t.unstable_shouldYield,
    Ye = t.unstable_requestPaint,
    Ze = t.unstable_now,
    Je = t.unstable_getCurrentPriorityLevel,
    et = t.unstable_ImmediatePriority,
    tt = t.unstable_UserBlockingPriority,
    nt = t.unstable_NormalPriority,
    rt = t.unstable_LowPriority,
    at = t.unstable_IdlePriority,
    lt = null,
    ot = null;
  var it = Math.clz32
      ? Math.clz32
      : function (e) {
          return ((e >>>= 0), 0 === e ? 32 : (31 - ((st(e) / ut) | 0)) | 0);
        },
    st = Math.log,
    ut = Math.LN2;
  var ct = 64,
    dt = 4194304;
  function ft(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return 4194240 & e;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return 130023424 & e;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function pt(e, t) {
    var n = e.pendingLanes;
    if (0 === n) return 0;
    var r = 0,
      a = e.suspendedLanes,
      l = e.pingedLanes,
      o = 268435455 & n;
    if (0 !== o) {
      var i = o & ~a;
      0 !== i ? (r = ft(i)) : 0 !== (l &= o) && (r = ft(l));
    } else 0 !== (o = n & ~a) ? (r = ft(o)) : 0 !== l && (r = ft(l));
    if (0 === r) return 0;
    if (
      0 !== t &&
      t !== r &&
      !(t & a) &&
      ((a = r & -r) >= (l = t & -t) || (16 === a && 4194240 & l))
    )
      return t;
    if ((4 & r && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
      for (e = e.entanglements, t &= r; 0 < t;)
        ((a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a));
    return r;
  }
  function ht(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      default:
        return -1;
    }
  }
  function mt(e) {
    return 0 !== (e = -1073741825 & e.pendingLanes)
      ? e
      : 1073741824 & e
        ? 1073741824
        : 0;
  }
  function gt() {
    var e = ct;
    return (!(4194240 & (ct <<= 1)) && (ct = 64), e);
  }
  function vt(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function yt(e, t, n) {
    ((e.pendingLanes |= t),
      536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      ((e = e.eventTimes)[(t = 31 - it(t))] = n));
  }
  function bt(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n;) {
      var r = 31 - it(n),
        a = 1 << r;
      ((a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a));
    }
  }
  var kt = 0;
  function xt(e) {
    return 1 < (e &= -e) ? (4 < e ? (268435455 & e ? 16 : 536870912) : 4) : 1;
  }
  var wt,
    _t,
    St,
    Ct,
    jt,
    Nt = !1,
    Et = [],
    Lt = null,
    Tt = null,
    Pt = null,
    Rt = new Map(),
    Mt = new Map(),
    zt = [],
    Ot =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function It(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Lt = null;
        break;
      case "dragenter":
      case "dragleave":
        Tt = null;
        break;
      case "mouseover":
      case "mouseout":
        Pt = null;
        break;
      case "pointerover":
      case "pointerout":
        Rt.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Mt.delete(t.pointerId);
    }
  }
  function Ft(e, t, n, r, a, l) {
    return null === e || e.nativeEvent !== l
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: l,
          targetContainers: [a],
        }),
        null !== t && null !== (t = ka(t)) && _t(t),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        null !== a && -1 === t.indexOf(a) && t.push(a),
        e);
  }
  function Dt(e) {
    var t = ba(e.target);
    if (null !== t) {
      var n = Ve(t);
      if (null !== n)
        if (13 === (t = n.tag)) {
          if (null !== (t = We(n)))
            return (
              (e.blockedOn = t),
              void jt(e.priority, function () {
                St(n);
              })
            );
        } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
          return void (e.blockedOn =
            3 === n.tag ? n.stateNode.containerInfo : null);
    }
    e.blockedOn = null;
  }
  function Ut(e) {
    if (null !== e.blockedOn) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
      var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (null !== n)
        return (null !== (t = ka(n)) && _t(t), (e.blockedOn = n), !1);
      var r = new (n = e.nativeEvent).constructor(n.type, n);
      ((xe = r), n.target.dispatchEvent(r), (xe = null), t.shift());
    }
    return !0;
  }
  function Bt(e, t, n) {
    Ut(e) && n.delete(t);
  }
  function At() {
    ((Nt = !1),
      null !== Lt && Ut(Lt) && (Lt = null),
      null !== Tt && Ut(Tt) && (Tt = null),
      null !== Pt && Ut(Pt) && (Pt = null),
      Rt.forEach(Bt),
      Mt.forEach(Bt));
  }
  function $t(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      Nt ||
        ((Nt = !0),
        t.unstable_scheduleCallback(t.unstable_NormalPriority, At)));
  }
  function Vt(e) {
    function t(t) {
      return $t(t, e);
    }
    if (0 < Et.length) {
      $t(Et[0], e);
      for (var n = 1; n < Et.length; n++) {
        var r = Et[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      null !== Lt && $t(Lt, e),
        null !== Tt && $t(Tt, e),
        null !== Pt && $t(Pt, e),
        Rt.forEach(t),
        Mt.forEach(t),
        n = 0;
      n < zt.length;
      n++
    )
      (r = zt[n]).blockedOn === e && (r.blockedOn = null);
    for (; 0 < zt.length && null === (n = zt[0]).blockedOn;)
      (Dt(n), null === n.blockedOn && zt.shift());
  }
  var Wt = v.ReactCurrentBatchConfig,
    Ht = !0;
  function Qt(e, t, n, r) {
    var a = kt,
      l = Wt.transition;
    Wt.transition = null;
    try {
      ((kt = 1), Kt(e, t, n, r));
    } finally {
      ((kt = a), (Wt.transition = l));
    }
  }
  function qt(e, t, n, r) {
    var a = kt,
      l = Wt.transition;
    Wt.transition = null;
    try {
      ((kt = 4), Kt(e, t, n, r));
    } finally {
      ((kt = a), (Wt.transition = l));
    }
  }
  function Kt(e, t, n, r) {
    if (Ht) {
      var a = Gt(e, t, n, r);
      if (null === a) (Hr(e, t, r, Xt, n), It(e, r));
      else if (
        (function (e, t, n, r, a) {
          switch (t) {
            case "focusin":
              return ((Lt = Ft(Lt, e, t, n, r, a)), !0);
            case "dragenter":
              return ((Tt = Ft(Tt, e, t, n, r, a)), !0);
            case "mouseover":
              return ((Pt = Ft(Pt, e, t, n, r, a)), !0);
            case "pointerover":
              var l = a.pointerId;
              return (Rt.set(l, Ft(Rt.get(l) || null, e, t, n, r, a)), !0);
            case "gotpointercapture":
              return (
                (l = a.pointerId),
                Mt.set(l, Ft(Mt.get(l) || null, e, t, n, r, a)),
                !0
              );
          }
          return !1;
        })(a, e, t, n, r)
      )
        r.stopPropagation();
      else if ((It(e, r), 4 & t && -1 < Ot.indexOf(e))) {
        for (; null !== a;) {
          var l = ka(a);
          if (
            (null !== l && wt(l),
            null === (l = Gt(e, t, n, r)) && Hr(e, t, r, Xt, n),
            l === a)
          )
            break;
          a = l;
        }
        null !== a && r.stopPropagation();
      } else Hr(e, t, r, null, n);
    }
  }
  var Xt = null;
  function Gt(e, t, n, r) {
    if (((Xt = null), null !== (e = ba((e = we(r))))))
      if (null === (t = Ve(e))) e = null;
      else if (13 === (n = t.tag)) {
        if (null !== (e = We(t))) return e;
        e = null;
      } else if (3 === n) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return 3 === t.tag ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Xt = e), null);
  }
  function Yt(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Je()) {
          case et:
            return 1;
          case tt:
            return 4;
          case nt:
          case rt:
            return 16;
          case at:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Zt = null,
    Jt = null,
    en = null;
  function tn() {
    if (en) return en;
    var e,
      t,
      n = Jt,
      r = n.length,
      a = "value" in Zt ? Zt.value : Zt.textContent,
      l = a.length;
    for (e = 0; e < r && n[e] === a[e]; e++);
    var o = r - e;
    for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
    return (en = a.slice(e, 1 < t ? 1 - t : void 0));
  }
  function nn(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? 0 === (e = e.charCode) && 13 === t && (e = 13)
        : (e = t),
      10 === e && (e = 13),
      32 <= e || 13 === e ? e : 0
    );
  }
  function rn() {
    return !0;
  }
  function an() {
    return !1;
  }
  function ln(e) {
    function t(t, n, r, a, l) {
      for (var o in ((this._reactName = t),
      (this._targetInst = r),
      (this.type = n),
      (this.nativeEvent = a),
      (this.target = l),
      (this.currentTarget = null),
      e))
        e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
      return (
        (this.isDefaultPrevented = (
          null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue
        )
          ? rn
          : an),
        (this.isPropagationStopped = an),
        this
      );
    }
    return (
      z(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var e = this.nativeEvent;
          e &&
            (e.preventDefault
              ? e.preventDefault()
              : "unknown" != typeof e.returnValue && (e.returnValue = !1),
            (this.isDefaultPrevented = rn));
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e &&
            (e.stopPropagation
              ? e.stopPropagation()
              : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
            (this.isPropagationStopped = rn));
        },
        persist: function () {},
        isPersistent: rn,
      }),
      t
    );
  }
  var on,
    sn,
    un,
    cn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    dn = ln(cn),
    fn = z({}, cn, { view: 0, detail: 0 }),
    pn = ln(fn),
    hn = z({}, fn, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: jn,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return void 0 === e.relatedTarget
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== un &&
              (un && "mousemove" === e.type
                ? ((on = e.screenX - un.screenX), (sn = e.screenY - un.screenY))
                : (sn = on = 0),
              (un = e)),
            on);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : sn;
      },
    }),
    mn = ln(hn),
    gn = ln(z({}, hn, { dataTransfer: 0 })),
    vn = ln(z({}, fn, { relatedTarget: 0 })),
    yn = ln(z({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
    bn = z({}, cn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    kn = ln(bn),
    xn = ln(z({}, cn, { data: 0 })),
    wn = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    _n = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Sn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Cn(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : !!(e = Sn[e]) && !!t[e];
  }
  function jn() {
    return Cn;
  }
  var Nn = z({}, fn, {
      key: function (e) {
        if (e.key) {
          var t = wn[e.key] || e.key;
          if ("Unidentified" !== t) return t;
        }
        return "keypress" === e.type
          ? 13 === (e = nn(e))
            ? "Enter"
            : String.fromCharCode(e)
          : "keydown" === e.type || "keyup" === e.type
            ? _n[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: jn,
      charCode: function (e) {
        return "keypress" === e.type ? nn(e) : 0;
      },
      keyCode: function (e) {
        return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
      },
      which: function (e) {
        return "keypress" === e.type
          ? nn(e)
          : "keydown" === e.type || "keyup" === e.type
            ? e.keyCode
            : 0;
      },
    }),
    En = ln(Nn),
    Ln = ln(
      z({}, hn, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      }),
    ),
    Tn = ln(
      z({}, fn, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: jn,
      }),
    ),
    Pn = ln(z({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
    Rn = z({}, hn, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Mn = ln(Rn),
    zn = [9, 13, 27, 32],
    On = i && "CompositionEvent" in window,
    In = null;
  i && "documentMode" in document && (In = document.documentMode);
  var Fn = i && "TextEvent" in window && !In,
    Dn = i && (!On || (In && 8 < In && 11 >= In)),
    Un = String.fromCharCode(32),
    Bn = !1;
  function An(e, t) {
    switch (e) {
      case "keyup":
        return -1 !== zn.indexOf(t.keyCode);
      case "keydown":
        return 229 !== t.keyCode;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function $n(e) {
    return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
  }
  var Vn = !1;
  var Wn = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Hn(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return "input" === t ? !!Wn[e.type] : "textarea" === t;
  }
  function Qn(e, t, n, r) {
    (Ne(r),
      0 < (t = qr(t, "onChange")).length &&
        ((n = new dn("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t })));
  }
  var qn = null,
    Kn = null;
  function Xn(e) {
    Ur(e, 0);
  }
  function Gn(e) {
    if (Q(xa(e))) return e;
  }
  function Yn(e, t) {
    if ("change" === e) return t;
  }
  var Zn = !1;
  if (i) {
    var Jn;
    if (i) {
      var er = "oninput" in document;
      if (!er) {
        var tr = document.createElement("div");
        (tr.setAttribute("oninput", "return;"),
          (er = "function" == typeof tr.oninput));
      }
      Jn = er;
    } else Jn = !1;
    Zn = Jn && (!document.documentMode || 9 < document.documentMode);
  }
  function nr() {
    qn && (qn.detachEvent("onpropertychange", rr), (Kn = qn = null));
  }
  function rr(e) {
    if ("value" === e.propertyName && Gn(Kn)) {
      var t = [];
      (Qn(t, Kn, e, we(e)), Re(Xn, t));
    }
  }
  function ar(e, t, n) {
    "focusin" === e
      ? (nr(), (Kn = n), (qn = t).attachEvent("onpropertychange", rr))
      : "focusout" === e && nr();
  }
  function lr(e) {
    if ("selectionchange" === e || "keyup" === e || "keydown" === e)
      return Gn(Kn);
  }
  function or(e, t) {
    if ("click" === e) return Gn(t);
  }
  function ir(e, t) {
    if ("input" === e || "change" === e) return Gn(t);
  }
  var sr =
    "function" == typeof Object.is
      ? Object.is
      : function (e, t) {
          return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
        };
  function ur(e, t) {
    if (sr(e, t)) return !0;
    if (
      "object" != typeof e ||
      null === e ||
      "object" != typeof t ||
      null === t
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var a = n[r];
      if (!s.call(t, a) || !sr(e[a], t[a])) return !1;
    }
    return !0;
  }
  function cr(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function dr(e, t) {
    var n,
      r = cr(e);
    for (e = 0; r;) {
      if (3 === r.nodeType) {
        if (((n = e + r.textContent.length), e <= t && n >= t))
          return { node: r, offset: t - e };
        e = n;
      }
      e: {
        for (; r;) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = cr(r);
    }
  }
  function fr(e, t) {
    return (
      !(!e || !t) &&
      (e === t ||
        ((!e || 3 !== e.nodeType) &&
          (t && 3 === t.nodeType
            ? fr(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : !!e.compareDocumentPosition &&
                !!(16 & e.compareDocumentPosition(t)))))
    );
  }
  function pr() {
    for (var e = window, t = q(); t instanceof e.HTMLIFrameElement;) {
      try {
        var n = "string" == typeof t.contentWindow.location.href;
      } catch (r) {
        n = !1;
      }
      if (!n) break;
      t = q((e = t.contentWindow).document);
    }
    return t;
  }
  function hr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      (("input" === t &&
        ("text" === e.type ||
          "search" === e.type ||
          "tel" === e.type ||
          "url" === e.type ||
          "password" === e.type)) ||
        "textarea" === t ||
        "true" === e.contentEditable)
    );
  }
  function mr(e) {
    var t = pr(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      fr(n.ownerDocument.documentElement, n)
    ) {
      if (null !== r && hr(n))
        if (
          ((t = r.start),
          void 0 === (e = r.end) && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          (e = ((t = n.ownerDocument || document) && t.defaultView) || window)
            .getSelection
        ) {
          e = e.getSelection();
          var a = n.textContent.length,
            l = Math.min(r.start, a);
          ((r = void 0 === r.end ? l : Math.min(r.end, a)),
            !e.extend && l > r && ((a = r), (r = l), (l = a)),
            (a = dr(n, l)));
          var o = dr(n, r);
          a &&
            o &&
            (1 !== e.rangeCount ||
              e.anchorNode !== a.node ||
              e.anchorOffset !== a.offset ||
              e.focusNode !== o.node ||
              e.focusOffset !== o.offset) &&
            ((t = t.createRange()).setStart(a.node, a.offset),
            e.removeAllRanges(),
            l > r
              ? (e.addRange(t), e.extend(o.node, o.offset))
              : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      for (t = [], e = n; (e = e.parentNode);)
        1 === e.nodeType &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)
        (((e = t[n]).element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var gr = i && "documentMode" in document && 11 >= document.documentMode,
    vr = null,
    yr = null,
    br = null,
    kr = !1;
  function xr(e, t, n) {
    var r =
      n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
    kr ||
      null == vr ||
      vr !== q(r) ||
      ("selectionStart" in (r = vr) && hr(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : (r = {
            anchorNode: (r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()).anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          }),
      (br && ur(br, r)) ||
        ((br = r),
        0 < (r = qr(yr, "onSelect")).length &&
          ((t = new dn("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = vr))));
  }
  function wr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var _r = {
      animationend: wr("Animation", "AnimationEnd"),
      animationiteration: wr("Animation", "AnimationIteration"),
      animationstart: wr("Animation", "AnimationStart"),
      transitionend: wr("Transition", "TransitionEnd"),
    },
    Sr = {},
    Cr = {};
  function jr(e) {
    if (Sr[e]) return Sr[e];
    if (!_r[e]) return e;
    var t,
      n = _r[e];
    for (t in n) if (n.hasOwnProperty(t) && t in Cr) return (Sr[e] = n[t]);
    return e;
  }
  i &&
    ((Cr = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete _r.animationend.animation,
      delete _r.animationiteration.animation,
      delete _r.animationstart.animation),
    "TransitionEvent" in window || delete _r.transitionend.transition);
  var Nr = jr("animationend"),
    Er = jr("animationiteration"),
    Lr = jr("animationstart"),
    Tr = jr("transitionend"),
    Pr = new Map(),
    Rr =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Mr(e, t) {
    (Pr.set(e, t), l(t, [e]));
  }
  for (var zr = 0; zr < Rr.length; zr++) {
    var Or = Rr[zr];
    Mr(Or.toLowerCase(), "on" + (Or[0].toUpperCase() + Or.slice(1)));
  }
  (Mr(Nr, "onAnimationEnd"),
    Mr(Er, "onAnimationIteration"),
    Mr(Lr, "onAnimationStart"),
    Mr("dblclick", "onDoubleClick"),
    Mr("focusin", "onFocus"),
    Mr("focusout", "onBlur"),
    Mr(Tr, "onTransitionEnd"),
    o("onMouseEnter", ["mouseout", "mouseover"]),
    o("onMouseLeave", ["mouseout", "mouseover"]),
    o("onPointerEnter", ["pointerout", "pointerover"]),
    o("onPointerLeave", ["pointerout", "pointerover"]),
    l(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    l(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    l(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    l(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    l(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Ir =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Fr = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Ir),
    );
  function Dr(e, t, r) {
    var a = e.type || "unknown-event";
    ((e.currentTarget = r),
      (function (e, t, r, a, l, o, i, s, u) {
        if (($e.apply(this, arguments), Fe)) {
          if (!Fe) throw Error(n(198));
          var c = De;
          ((Fe = !1), (De = null), Ue || ((Ue = !0), (Be = c)));
        }
      })(a, t, void 0, e),
      (e.currentTarget = null));
  }
  function Ur(e, t) {
    t = !!(4 & t);
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        a = r.event;
      r = r.listeners;
      e: {
        var l = void 0;
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var i = r[o],
              s = i.instance,
              u = i.currentTarget;
            if (((i = i.listener), s !== l && a.isPropagationStopped()))
              break e;
            (Dr(a, i, u), (l = s));
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((s = (i = r[o]).instance),
              (u = i.currentTarget),
              (i = i.listener),
              s !== l && a.isPropagationStopped())
            )
              break e;
            (Dr(a, i, u), (l = s));
          }
      }
    }
    if (Ue) throw ((e = Be), (Ue = !1), (Be = null), e);
  }
  function Br(e, t) {
    var n = t[ga];
    void 0 === n && (n = t[ga] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Wr(t, e, 2, !1), n.add(r));
  }
  function Ar(e, t, n) {
    var r = 0;
    (t && (r |= 4), Wr(n, e, r, t));
  }
  var $r = "_reactListening" + Math.random().toString(36).slice(2);
  function Vr(e) {
    if (!e[$r]) {
      ((e[$r] = !0),
        r.forEach(function (t) {
          "selectionchange" !== t && (Fr.has(t) || Ar(t, !1, e), Ar(t, !0, e));
        }));
      var t = 9 === e.nodeType ? e : e.ownerDocument;
      null === t || t[$r] || ((t[$r] = !0), Ar("selectionchange", !1, t));
    }
  }
  function Wr(e, t, n, r) {
    switch (Yt(t)) {
      case 1:
        var a = Qt;
        break;
      case 4:
        a = qt;
        break;
      default:
        a = Kt;
    }
    ((n = a.bind(null, t, n, e)),
      (a = void 0),
      !ze ||
        ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
        (a = !0),
      r
        ? void 0 !== a
          ? e.addEventListener(t, n, { capture: !0, passive: a })
          : e.addEventListener(t, n, !0)
        : void 0 !== a
          ? e.addEventListener(t, n, { passive: a })
          : e.addEventListener(t, n, !1));
  }
  function Hr(e, t, n, r, a) {
    var l = r;
    if (!(1 & t || 2 & t || null === r))
      e: for (;;) {
        if (null === r) return;
        var o = r.tag;
        if (3 === o || 4 === o) {
          var i = r.stateNode.containerInfo;
          if (i === a || (8 === i.nodeType && i.parentNode === a)) break;
          if (4 === o)
            for (o = r.return; null !== o;) {
              var s = o.tag;
              if (
                (3 === s || 4 === s) &&
                ((s = o.stateNode.containerInfo) === a ||
                  (8 === s.nodeType && s.parentNode === a))
              )
                return;
              o = o.return;
            }
          for (; null !== i;) {
            if (null === (o = ba(i))) return;
            if (5 === (s = o.tag) || 6 === s) {
              r = l = o;
              continue e;
            }
            i = i.parentNode;
          }
        }
        r = r.return;
      }
    Re(function () {
      var r = l,
        a = we(n),
        o = [];
      e: {
        var i = Pr.get(e);
        if (void 0 !== i) {
          var s = dn,
            u = e;
          switch (e) {
            case "keypress":
              if (0 === nn(n)) break e;
            case "keydown":
            case "keyup":
              s = En;
              break;
            case "focusin":
              ((u = "focus"), (s = vn));
              break;
            case "focusout":
              ((u = "blur"), (s = vn));
              break;
            case "beforeblur":
            case "afterblur":
              s = vn;
              break;
            case "click":
              if (2 === n.button) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              s = mn;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              s = gn;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              s = Tn;
              break;
            case Nr:
            case Er:
            case Lr:
              s = yn;
              break;
            case Tr:
              s = Pn;
              break;
            case "scroll":
              s = pn;
              break;
            case "wheel":
              s = Mn;
              break;
            case "copy":
            case "cut":
            case "paste":
              s = kn;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              s = Ln;
          }
          var c = !!(4 & t),
            d = !c && "scroll" === e,
            f = c ? (null !== i ? i + "Capture" : null) : i;
          c = [];
          for (var p, h = r; null !== h;) {
            var m = (p = h).stateNode;
            if (
              (5 === p.tag &&
                null !== m &&
                ((p = m),
                null !== f && null != (m = Me(h, f)) && c.push(Qr(h, m, p))),
              d)
            )
              break;
            h = h.return;
          }
          0 < c.length &&
            ((i = new s(i, u, null, n, a)), o.push({ event: i, listeners: c }));
        }
      }
      if (!(7 & t)) {
        if (
          ((s = "mouseout" === e || "pointerout" === e),
          (!(i = "mouseover" === e || "pointerover" === e) ||
            n === xe ||
            !(u = n.relatedTarget || n.fromElement) ||
            (!ba(u) && !u[ma])) &&
            (s || i) &&
            ((i =
              a.window === a
                ? a
                : (i = a.ownerDocument)
                  ? i.defaultView || i.parentWindow
                  : window),
            s
              ? ((s = r),
                null !==
                  (u = (u = n.relatedTarget || n.toElement) ? ba(u) : null) &&
                  (u !== (d = Ve(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                  (u = null))
              : ((s = null), (u = r)),
            s !== u))
        ) {
          if (
            ((c = mn),
            (m = "onMouseLeave"),
            (f = "onMouseEnter"),
            (h = "mouse"),
            ("pointerout" !== e && "pointerover" !== e) ||
              ((c = Ln),
              (m = "onPointerLeave"),
              (f = "onPointerEnter"),
              (h = "pointer")),
            (d = null == s ? i : xa(s)),
            (p = null == u ? i : xa(u)),
            ((i = new c(m, h + "leave", s, n, a)).target = d),
            (i.relatedTarget = p),
            (m = null),
            ba(a) === r &&
              (((c = new c(f, h + "enter", u, n, a)).target = p),
              (c.relatedTarget = d),
              (m = c)),
            (d = m),
            s && u)
          )
            e: {
              for (f = u, h = 0, p = c = s; p; p = Kr(p)) h++;
              for (p = 0, m = f; m; m = Kr(m)) p++;
              for (; 0 < h - p;) ((c = Kr(c)), h--);
              for (; 0 < p - h;) ((f = Kr(f)), p--);
              for (; h--;) {
                if (c === f || (null !== f && c === f.alternate)) break e;
                ((c = Kr(c)), (f = Kr(f)));
              }
              c = null;
            }
          else c = null;
          (null !== s && Xr(o, i, s, c, !1),
            null !== u && null !== d && Xr(o, d, u, c, !0));
        }
        if (
          "select" ===
            (s =
              (i = r ? xa(r) : window).nodeName && i.nodeName.toLowerCase()) ||
          ("input" === s && "file" === i.type)
        )
          var g = Yn;
        else if (Hn(i))
          if (Zn) g = ir;
          else {
            g = lr;
            var v = ar;
          }
        else
          (s = i.nodeName) &&
            "input" === s.toLowerCase() &&
            ("checkbox" === i.type || "radio" === i.type) &&
            (g = or);
        switch (
          (g && (g = g(e, r))
            ? Qn(o, g, n, a)
            : (v && v(e, i, r),
              "focusout" === e &&
                (v = i._wrapperState) &&
                v.controlled &&
                "number" === i.type &&
                te(i, "number", i.value)),
          (v = r ? xa(r) : window),
          e)
        ) {
          case "focusin":
            (Hn(v) || "true" === v.contentEditable) &&
              ((vr = v), (yr = r), (br = null));
            break;
          case "focusout":
            br = yr = vr = null;
            break;
          case "mousedown":
            kr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((kr = !1), xr(o, n, a));
            break;
          case "selectionchange":
            if (gr) break;
          case "keydown":
          case "keyup":
            xr(o, n, a);
        }
        var y;
        if (On)
          e: {
            switch (e) {
              case "compositionstart":
                var b = "onCompositionStart";
                break e;
              case "compositionend":
                b = "onCompositionEnd";
                break e;
              case "compositionupdate":
                b = "onCompositionUpdate";
                break e;
            }
            b = void 0;
          }
        else
          Vn
            ? An(e, n) && (b = "onCompositionEnd")
            : "keydown" === e &&
              229 === n.keyCode &&
              (b = "onCompositionStart");
        (b &&
          (Dn &&
            "ko" !== n.locale &&
            (Vn || "onCompositionStart" !== b
              ? "onCompositionEnd" === b && Vn && (y = tn())
              : ((Jt = "value" in (Zt = a) ? Zt.value : Zt.textContent),
                (Vn = !0))),
          0 < (v = qr(r, b)).length &&
            ((b = new xn(b, e, null, n, a)),
            o.push({ event: b, listeners: v }),
            y ? (b.data = y) : null !== (y = $n(n)) && (b.data = y))),
          (y = Fn
            ? (function (e, t) {
                switch (e) {
                  case "compositionend":
                    return $n(t);
                  case "keypress":
                    return 32 !== t.which ? null : ((Bn = !0), Un);
                  case "textInput":
                    return (e = t.data) === Un && Bn ? null : e;
                  default:
                    return null;
                }
              })(e, n)
            : (function (e, t) {
                if (Vn)
                  return "compositionend" === e || (!On && An(e, t))
                    ? ((e = tn()), (en = Jt = Zt = null), (Vn = !1), e)
                    : null;
                switch (e) {
                  case "paste":
                  default:
                    return null;
                  case "keypress":
                    if (
                      !(t.ctrlKey || t.altKey || t.metaKey) ||
                      (t.ctrlKey && t.altKey)
                    ) {
                      if (t.char && 1 < t.char.length) return t.char;
                      if (t.which) return String.fromCharCode(t.which);
                    }
                    return null;
                  case "compositionend":
                    return Dn && "ko" !== t.locale ? null : t.data;
                }
              })(e, n)) &&
            0 < (r = qr(r, "onBeforeInput")).length &&
            ((a = new xn("onBeforeInput", "beforeinput", null, n, a)),
            o.push({ event: a, listeners: r }),
            (a.data = y)));
      }
      Ur(o, t);
    });
  }
  function Qr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function qr(e, t) {
    for (var n = t + "Capture", r = []; null !== e;) {
      var a = e,
        l = a.stateNode;
      (5 === a.tag &&
        null !== l &&
        ((a = l),
        null != (l = Me(e, n)) && r.unshift(Qr(e, l, a)),
        null != (l = Me(e, t)) && r.push(Qr(e, l, a))),
        (e = e.return));
    }
    return r;
  }
  function Kr(e) {
    if (null === e) return null;
    do {
      e = e.return;
    } while (e && 5 !== e.tag);
    return e || null;
  }
  function Xr(e, t, n, r, a) {
    for (var l = t._reactName, o = []; null !== n && n !== r;) {
      var i = n,
        s = i.alternate,
        u = i.stateNode;
      if (null !== s && s === r) break;
      (5 === i.tag &&
        null !== u &&
        ((i = u),
        a
          ? null != (s = Me(n, l)) && o.unshift(Qr(n, s, i))
          : a || (null != (s = Me(n, l)) && o.push(Qr(n, s, i)))),
        (n = n.return));
    }
    0 !== o.length && e.push({ event: t, listeners: o });
  }
  var Gr = /\r\n?/g,
    Yr = /\u0000|\uFFFD/g;
  function Zr(e) {
    return ("string" == typeof e ? e : "" + e)
      .replace(Gr, "\n")
      .replace(Yr, "");
  }
  function Jr(e, t, r) {
    if (((t = Zr(t)), Zr(e) !== t && r)) throw Error(n(425));
  }
  function ea() {}
  var ta = null,
    na = null;
  function ra(e, t) {
    return (
      "textarea" === e ||
      "noscript" === e ||
      "string" == typeof t.children ||
      "number" == typeof t.children ||
      ("object" == typeof t.dangerouslySetInnerHTML &&
        null !== t.dangerouslySetInnerHTML &&
        null != t.dangerouslySetInnerHTML.__html)
    );
  }
  var aa = "function" == typeof setTimeout ? setTimeout : void 0,
    la = "function" == typeof clearTimeout ? clearTimeout : void 0,
    oa = "function" == typeof Promise ? Promise : void 0,
    ia =
      "function" == typeof queueMicrotask
        ? queueMicrotask
        : void 0 !== oa
          ? function (e) {
              return oa.resolve(null).then(e).catch(sa);
            }
          : aa;
  function sa(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ua(e, t) {
    var n = t,
      r = 0;
    do {
      var a = n.nextSibling;
      if ((e.removeChild(n), a && 8 === a.nodeType))
        if ("/$" === (n = a.data)) {
          if (0 === r) return (e.removeChild(a), void Vt(t));
          r--;
        } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
      n = a;
    } while (n);
    Vt(t);
  }
  function ca(e) {
    for (; null != e; e = e.nextSibling) {
      var t = e.nodeType;
      if (1 === t || 3 === t) break;
      if (8 === t) {
        if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
        if ("/$" === t) return null;
      }
    }
    return e;
  }
  function da(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
      if (8 === e.nodeType) {
        var n = e.data;
        if ("$" === n || "$!" === n || "$?" === n) {
          if (0 === t) return e;
          t--;
        } else "/$" === n && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var fa = Math.random().toString(36).slice(2),
    pa = "__reactFiber$" + fa,
    ha = "__reactProps$" + fa,
    ma = "__reactContainer$" + fa,
    ga = "__reactEvents$" + fa,
    va = "__reactListeners$" + fa,
    ya = "__reactHandles$" + fa;
  function ba(e) {
    var t = e[pa];
    if (t) return t;
    for (var n = e.parentNode; n;) {
      if ((t = n[ma] || n[pa])) {
        if (
          ((n = t.alternate),
          null !== t.child || (null !== n && null !== n.child))
        )
          for (e = da(e); null !== e;) {
            if ((n = e[pa])) return n;
            e = da(e);
          }
        return t;
      }
      n = (e = n).parentNode;
    }
    return null;
  }
  function ka(e) {
    return !(e = e[pa] || e[ma]) ||
      (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
      ? null
      : e;
  }
  function xa(e) {
    if (5 === e.tag || 6 === e.tag) return e.stateNode;
    throw Error(n(33));
  }
  function wa(e) {
    return e[ha] || null;
  }
  var _a = [],
    Sa = -1;
  function Ca(e) {
    return { current: e };
  }
  function ja(e) {
    0 > Sa || ((e.current = _a[Sa]), (_a[Sa] = null), Sa--);
  }
  function Na(e, t) {
    (Sa++, (_a[Sa] = e.current), (e.current = t));
  }
  var Ea = {},
    La = Ca(Ea),
    Ta = Ca(!1),
    Pa = Ea;
  function Ra(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ea;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var a,
      l = {};
    for (a in n) l[a] = t[a];
    return (
      r &&
        (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Ma(e) {
    return null != (e = e.childContextTypes);
  }
  function za() {
    (ja(Ta), ja(La));
  }
  function Oa(e, t, r) {
    if (La.current !== Ea) throw Error(n(168));
    (Na(La, t), Na(Ta, r));
  }
  function Ia(e, t, r) {
    var a = e.stateNode;
    if (((t = t.childContextTypes), "function" != typeof a.getChildContext))
      return r;
    for (var l in (a = a.getChildContext()))
      if (!(l in t)) throw Error(n(108, A(e) || "Unknown", l));
    return z({}, r, a);
  }
  function Fa(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Ea),
      (Pa = La.current),
      Na(La, e),
      Na(Ta, Ta.current),
      !0
    );
  }
  function Da(e, t, r) {
    var a = e.stateNode;
    if (!a) throw Error(n(169));
    (r
      ? ((e = Ia(e, t, Pa)),
        (a.__reactInternalMemoizedMergedChildContext = e),
        ja(Ta),
        ja(La),
        Na(La, e))
      : ja(Ta),
      Na(Ta, r));
  }
  var Ua = null,
    Ba = !1,
    Aa = !1;
  function $a(e) {
    null === Ua ? (Ua = [e]) : Ua.push(e);
  }
  function Va() {
    if (!Aa && null !== Ua) {
      Aa = !0;
      var e = 0,
        t = kt;
      try {
        var n = Ua;
        for (kt = 1; e < n.length; e++) {
          var r = n[e];
          do {
            r = r(!0);
          } while (null !== r);
        }
        ((Ua = null), (Ba = !1));
      } catch (a) {
        throw (null !== Ua && (Ua = Ua.slice(e + 1)), Ke(et, Va), a);
      } finally {
        ((kt = t), (Aa = !1));
      }
    }
    return null;
  }
  var Wa = [],
    Ha = 0,
    Qa = null,
    qa = 0,
    Ka = [],
    Xa = 0,
    Ga = null,
    Ya = 1,
    Za = "";
  function Ja(e, t) {
    ((Wa[Ha++] = qa), (Wa[Ha++] = Qa), (Qa = e), (qa = t));
  }
  function el(e, t, n) {
    ((Ka[Xa++] = Ya), (Ka[Xa++] = Za), (Ka[Xa++] = Ga), (Ga = e));
    var r = Ya;
    e = Za;
    var a = 32 - it(r) - 1;
    ((r &= ~(1 << a)), (n += 1));
    var l = 32 - it(t) + a;
    if (30 < l) {
      var o = a - (a % 5);
      ((l = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (a -= o),
        (Ya = (1 << (32 - it(t) + a)) | (n << a) | r),
        (Za = l + e));
    } else ((Ya = (1 << l) | (n << a) | r), (Za = e));
  }
  function tl(e) {
    null !== e.return && (Ja(e, 1), el(e, 1, 0));
  }
  function nl(e) {
    for (; e === Qa;)
      ((Qa = Wa[--Ha]), (Wa[Ha] = null), (qa = Wa[--Ha]), (Wa[Ha] = null));
    for (; e === Ga;)
      ((Ga = Ka[--Xa]),
        (Ka[Xa] = null),
        (Za = Ka[--Xa]),
        (Ka[Xa] = null),
        (Ya = Ka[--Xa]),
        (Ka[Xa] = null));
  }
  var rl = null,
    al = null,
    ll = !1,
    ol = null;
  function il(e, t) {
    var n = Ru(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      null === (t = e.deletions)
        ? ((e.deletions = [n]), (e.flags |= 16))
        : t.push(n));
  }
  function sl(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          null !==
            (t =
              1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
                ? null
                : t) &&
          ((e.stateNode = t), (rl = e), (al = ca(t.firstChild)), !0)
        );
      case 6:
        return (
          null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
          ((e.stateNode = t), (rl = e), (al = null), !0)
        );
      case 13:
        return (
          null !== (t = 8 !== t.nodeType ? null : t) &&
          ((n = null !== Ga ? { id: Ya, overflow: Za } : null),
          (e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824,
          }),
          ((n = Ru(18, null, null, 0)).stateNode = t),
          (n.return = e),
          (e.child = n),
          (rl = e),
          (al = null),
          !0)
        );
      default:
        return !1;
    }
  }
  function ul(e) {
    return !(!(1 & e.mode) || 128 & e.flags);
  }
  function cl(e) {
    if (ll) {
      var t = al;
      if (t) {
        var r = t;
        if (!sl(e, t)) {
          if (ul(e)) throw Error(n(418));
          t = ca(r.nextSibling);
          var a = rl;
          t && sl(e, t)
            ? il(a, r)
            : ((e.flags = (-4097 & e.flags) | 2), (ll = !1), (rl = e));
        }
      } else {
        if (ul(e)) throw Error(n(418));
        ((e.flags = (-4097 & e.flags) | 2), (ll = !1), (rl = e));
      }
    }
  }
  function dl(e) {
    for (
      e = e.return;
      null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;
    )
      e = e.return;
    rl = e;
  }
  function fl(e) {
    if (e !== rl) return !1;
    if (!ll) return (dl(e), (ll = !0), !1);
    var t;
    if (
      ((t = 3 !== e.tag) &&
        !(t = 5 !== e.tag) &&
        (t =
          "head" !== (t = e.type) &&
          "body" !== t &&
          !ra(e.type, e.memoizedProps)),
      t && (t = al))
    ) {
      if (ul(e)) throw (pl(), Error(n(418)));
      for (; t;) (il(e, t), (t = ca(t.nextSibling)));
    }
    if ((dl(e), 13 === e.tag)) {
      if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
        throw Error(n(317));
      e: {
        for (e = e.nextSibling, t = 0; e;) {
          if (8 === e.nodeType) {
            var r = e.data;
            if ("/$" === r) {
              if (0 === t) {
                al = ca(e.nextSibling);
                break e;
              }
              t--;
            } else ("$" !== r && "$!" !== r && "$?" !== r) || t++;
          }
          e = e.nextSibling;
        }
        al = null;
      }
    } else al = rl ? ca(e.stateNode.nextSibling) : null;
    return !0;
  }
  function pl() {
    for (var e = al; e;) e = ca(e.nextSibling);
  }
  function hl() {
    ((al = rl = null), (ll = !1));
  }
  function ml(e) {
    null === ol ? (ol = [e]) : ol.push(e);
  }
  var gl = v.ReactCurrentBatchConfig;
  function vl(e, t, r) {
    if (
      null !== (e = r.ref) &&
      "function" != typeof e &&
      "object" != typeof e
    ) {
      if (r._owner) {
        if ((r = r._owner)) {
          if (1 !== r.tag) throw Error(n(309));
          var a = r.stateNode;
        }
        if (!a) throw Error(n(147, e));
        var l = a,
          o = "" + e;
        return null !== t &&
          null !== t.ref &&
          "function" == typeof t.ref &&
          t.ref._stringRef === o
          ? t.ref
          : (((t = function (e) {
              var t = l.refs;
              null === e ? delete t[o] : (t[o] = e);
            })._stringRef = o),
            t);
      }
      if ("string" != typeof e) throw Error(n(284));
      if (!r._owner) throw Error(n(290, e));
    }
    return e;
  }
  function yl(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        n(
          31,
          "[object Object]" === e
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function bl(e) {
    return (0, e._init)(e._payload);
  }
  function kl(e) {
    function t(t, n) {
      if (e) {
        var r = t.deletions;
        null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
      }
    }
    function r(n, r) {
      if (!e) return null;
      for (; null !== r;) (t(n, r), (r = r.sibling));
      return null;
    }
    function a(e, t) {
      for (e = new Map(); null !== t;)
        (null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling));
      return e;
    }
    function l(e, t) {
      return (((e = zu(e, t)).index = 0), (e.sibling = null), e);
    }
    function o(t, n, r) {
      return (
        (t.index = r),
        e
          ? null !== (r = t.alternate)
            ? (r = r.index) < n
              ? ((t.flags |= 2), n)
              : r
            : ((t.flags |= 2), n)
          : ((t.flags |= 1048576), n)
      );
    }
    function i(t) {
      return (e && null === t.alternate && (t.flags |= 2), t);
    }
    function s(e, t, n, r) {
      return null === t || 6 !== t.tag
        ? (((t = Du(n, e.mode, r)).return = e), t)
        : (((t = l(t, n)).return = e), t);
    }
    function u(e, t, n, r) {
      var a = n.type;
      return a === k
        ? d(e, t, n.props.children, r, n.key)
        : null !== t &&
            (t.elementType === a ||
              ("object" == typeof a &&
                null !== a &&
                a.$$typeof === L &&
                bl(a) === t.type))
          ? (((r = l(t, n.props)).ref = vl(e, t, n)), (r.return = e), r)
          : (((r = Ou(n.type, n.key, n.props, null, e.mode, r)).ref = vl(
              e,
              t,
              n,
            )),
            (r.return = e),
            r);
    }
    function c(e, t, n, r) {
      return null === t ||
        4 !== t.tag ||
        t.stateNode.containerInfo !== n.containerInfo ||
        t.stateNode.implementation !== n.implementation
        ? (((t = Uu(n, e.mode, r)).return = e), t)
        : (((t = l(t, n.children || [])).return = e), t);
    }
    function d(e, t, n, r, a) {
      return null === t || 7 !== t.tag
        ? (((t = Iu(n, e.mode, r, a)).return = e), t)
        : (((t = l(t, n)).return = e), t);
    }
    function f(e, t, n) {
      if (("string" == typeof t && "" !== t) || "number" == typeof t)
        return (((t = Du("" + t, e.mode, n)).return = e), t);
      if ("object" == typeof t && null !== t) {
        switch (t.$$typeof) {
          case y:
            return (
              ((n = Ou(t.type, t.key, t.props, null, e.mode, n)).ref = vl(
                e,
                null,
                t,
              )),
              (n.return = e),
              n
            );
          case b:
            return (((t = Uu(t, e.mode, n)).return = e), t);
          case L:
            return f(e, (0, t._init)(t._payload), n);
        }
        if (ne(t) || R(t))
          return (((t = Iu(t, e.mode, n, null)).return = e), t);
        yl(e, t);
      }
      return null;
    }
    function p(e, t, n, r) {
      var a = null !== t ? t.key : null;
      if (("string" == typeof n && "" !== n) || "number" == typeof n)
        return null !== a ? null : s(e, t, "" + n, r);
      if ("object" == typeof n && null !== n) {
        switch (n.$$typeof) {
          case y:
            return n.key === a ? u(e, t, n, r) : null;
          case b:
            return n.key === a ? c(e, t, n, r) : null;
          case L:
            return p(e, t, (a = n._init)(n._payload), r);
        }
        if (ne(n) || R(n)) return null !== a ? null : d(e, t, n, r, null);
        yl(e, n);
      }
      return null;
    }
    function h(e, t, n, r, a) {
      if (("string" == typeof r && "" !== r) || "number" == typeof r)
        return s(t, (e = e.get(n) || null), "" + r, a);
      if ("object" == typeof r && null !== r) {
        switch (r.$$typeof) {
          case y:
            return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
          case b:
            return c(t, (e = e.get(null === r.key ? n : r.key) || null), r, a);
          case L:
            return h(e, t, n, (0, r._init)(r._payload), a);
        }
        if (ne(r) || R(r)) return d(t, (e = e.get(n) || null), r, a, null);
        yl(t, r);
      }
      return null;
    }
    return function s(u, c, d, m) {
      if (
        ("object" == typeof d &&
          null !== d &&
          d.type === k &&
          null === d.key &&
          (d = d.props.children),
        "object" == typeof d && null !== d)
      ) {
        switch (d.$$typeof) {
          case y:
            e: {
              for (var g = d.key, v = c; null !== v;) {
                if (v.key === g) {
                  if ((g = d.type) === k) {
                    if (7 === v.tag) {
                      (r(u, v.sibling),
                        ((c = l(v, d.props.children)).return = u),
                        (u = c));
                      break e;
                    }
                  } else if (
                    v.elementType === g ||
                    ("object" == typeof g &&
                      null !== g &&
                      g.$$typeof === L &&
                      bl(g) === v.type)
                  ) {
                    (r(u, v.sibling),
                      ((c = l(v, d.props)).ref = vl(u, v, d)),
                      (c.return = u),
                      (u = c));
                    break e;
                  }
                  r(u, v);
                  break;
                }
                (t(u, v), (v = v.sibling));
              }
              d.type === k
                ? (((c = Iu(d.props.children, u.mode, m, d.key)).return = u),
                  (u = c))
                : (((m = Ou(d.type, d.key, d.props, null, u.mode, m)).ref = vl(
                    u,
                    c,
                    d,
                  )),
                  (m.return = u),
                  (u = m));
            }
            return i(u);
          case b:
            e: {
              for (v = d.key; null !== c;) {
                if (c.key === v) {
                  if (
                    4 === c.tag &&
                    c.stateNode.containerInfo === d.containerInfo &&
                    c.stateNode.implementation === d.implementation
                  ) {
                    (r(u, c.sibling),
                      ((c = l(c, d.children || [])).return = u),
                      (u = c));
                    break e;
                  }
                  r(u, c);
                  break;
                }
                (t(u, c), (c = c.sibling));
              }
              (((c = Uu(d, u.mode, m)).return = u), (u = c));
            }
            return i(u);
          case L:
            return s(u, c, (v = d._init)(d._payload), m);
        }
        if (ne(d))
          return (function (n, l, i, s) {
            for (
              var u = null, c = null, d = l, m = (l = 0), g = null;
              null !== d && m < i.length;
              m++
            ) {
              d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
              var v = p(n, d, i[m], s);
              if (null === v) {
                null === d && (d = g);
                break;
              }
              (e && d && null === v.alternate && t(n, d),
                (l = o(v, l, m)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v),
                (d = g));
            }
            if (m === i.length) return (r(n, d), ll && Ja(n, m), u);
            if (null === d) {
              for (; m < i.length; m++)
                null !== (d = f(n, i[m], s)) &&
                  ((l = o(d, l, m)),
                  null === c ? (u = d) : (c.sibling = d),
                  (c = d));
              return (ll && Ja(n, m), u);
            }
            for (d = a(n, d); m < i.length; m++)
              null !== (g = h(d, n, m, i[m], s)) &&
                (e &&
                  null !== g.alternate &&
                  d.delete(null === g.key ? m : g.key),
                (l = o(g, l, m)),
                null === c ? (u = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                d.forEach(function (e) {
                  return t(n, e);
                }),
              ll && Ja(n, m),
              u
            );
          })(u, c, d, m);
        if (R(d))
          return (function (l, i, s, u) {
            var c = R(s);
            if ("function" != typeof c) throw Error(n(150));
            if (null == (s = c.call(s))) throw Error(n(151));
            for (
              var d = (c = null), m = i, g = (i = 0), v = null, y = s.next();
              null !== m && !y.done;
              g++, y = s.next()
            ) {
              m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
              var b = p(l, m, y.value, u);
              if (null === b) {
                null === m && (m = v);
                break;
              }
              (e && m && null === b.alternate && t(l, m),
                (i = o(b, i, g)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b),
                (m = v));
            }
            if (y.done) return (r(l, m), ll && Ja(l, g), c);
            if (null === m) {
              for (; !y.done; g++, y = s.next())
                null !== (y = f(l, y.value, u)) &&
                  ((i = o(y, i, g)),
                  null === d ? (c = y) : (d.sibling = y),
                  (d = y));
              return (ll && Ja(l, g), c);
            }
            for (m = a(l, m); !y.done; g++, y = s.next())
              null !== (y = h(m, l, g, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  m.delete(null === y.key ? g : y.key),
                (i = o(y, i, g)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                m.forEach(function (e) {
                  return t(l, e);
                }),
              ll && Ja(l, g),
              c
            );
          })(u, c, d, m);
        yl(u, d);
      }
      return ("string" == typeof d && "" !== d) || "number" == typeof d
        ? ((d = "" + d),
          null !== c && 6 === c.tag
            ? (r(u, c.sibling), ((c = l(c, d)).return = u), (u = c))
            : (r(u, c), ((c = Du(d, u.mode, m)).return = u), (u = c)),
          i(u))
        : r(u, c);
    };
  }
  var xl = kl(!0),
    wl = kl(!1),
    _l = Ca(null),
    Sl = null,
    Cl = null,
    jl = null;
  function Nl() {
    jl = Cl = Sl = null;
  }
  function El(e) {
    var t = _l.current;
    (ja(_l), (e._currentValue = t));
  }
  function Ll(e, t, n) {
    for (; null !== e;) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
          : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Tl(e, t) {
    ((Sl = e),
      (jl = Cl = null),
      null !== (e = e.dependencies) &&
        null !== e.firstContext &&
        (!!(e.lanes & t) && (ki = !0), (e.firstContext = null)));
  }
  function Pl(e) {
    var t = e._currentValue;
    if (jl !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), null === Cl)) {
        if (null === Sl) throw Error(n(308));
        ((Cl = e), (Sl.dependencies = { lanes: 0, firstContext: e }));
      } else Cl = Cl.next = e;
    return t;
  }
  var Rl = null;
  function Ml(e) {
    null === Rl ? (Rl = [e]) : Rl.push(e);
  }
  function zl(e, t, n, r) {
    var a = t.interleaved;
    return (
      null === a ? ((n.next = n), Ml(t)) : ((n.next = a.next), (a.next = n)),
      (t.interleaved = n),
      Ol(e, r)
    );
  }
  function Ol(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;)
      ((e.childLanes |= t),
        null !== (n = e.alternate) && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return 3 === n.tag ? n.stateNode : null;
  }
  var Il = !1;
  function Fl(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Dl(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function Ul(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Bl(e, t, n) {
    var r = e.updateQueue;
    if (null === r) return null;
    if (((r = r.shared), 2 & Ls)) {
      var a = r.pending;
      return (
        null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (r.pending = t),
        Ol(e, n)
      );
    }
    return (
      null === (a = r.interleaved)
        ? ((t.next = t), Ml(r))
        : ((t.next = a.next), (a.next = t)),
      (r.interleaved = t),
      Ol(e, n)
    );
  }
  function Al(e, t, n) {
    if (null !== (t = t.updateQueue) && ((t = t.shared), 4194240 & n)) {
      var r = t.lanes;
      ((n |= r &= e.pendingLanes), (t.lanes = n), bt(e, n));
    }
  }
  function $l(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (null !== r && n === (r = r.updateQueue)) {
      var a = null,
        l = null;
      if (null !== (n = n.firstBaseUpdate)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (null === l ? (a = l = o) : (l = l.next = o), (n = n.next));
        } while (null !== n);
        null === l ? (a = l = t) : (l = l.next = t);
      } else a = l = t;
      return (
        (n = {
          baseState: r.baseState,
          firstBaseUpdate: a,
          lastBaseUpdate: l,
          shared: r.shared,
          effects: r.effects,
        }),
        void (e.updateQueue = n)
      );
    }
    (null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function Vl(e, t, n, r) {
    var a = e.updateQueue;
    Il = !1;
    var l = a.firstBaseUpdate,
      o = a.lastBaseUpdate,
      i = a.shared.pending;
    if (null !== i) {
      a.shared.pending = null;
      var s = i,
        u = s.next;
      ((s.next = null), null === o ? (l = u) : (o.next = u), (o = s));
      var c = e.alternate;
      null !== c &&
        (i = (c = c.updateQueue).lastBaseUpdate) !== o &&
        (null === i ? (c.firstBaseUpdate = u) : (i.next = u),
        (c.lastBaseUpdate = s));
    }
    if (null !== l) {
      var d = a.baseState;
      for (o = 0, c = u = s = null, i = l; ;) {
        var f = i.lane,
          p = i.eventTime;
        if ((r & f) === f) {
          null !== c &&
            (c = c.next =
              {
                eventTime: p,
                lane: 0,
                tag: i.tag,
                payload: i.payload,
                callback: i.callback,
                next: null,
              });
          e: {
            var h = e,
              m = i;
            switch (((f = t), (p = n), m.tag)) {
              case 1:
                if ("function" == typeof (h = m.payload)) {
                  d = h.call(p, d, f);
                  break e;
                }
                d = h;
                break e;
              case 3:
                h.flags = (-65537 & h.flags) | 128;
              case 0:
                if (
                  null ==
                  (f =
                    "function" == typeof (h = m.payload) ? h.call(p, d, f) : h)
                )
                  break e;
                d = z({}, d, f);
                break e;
              case 2:
                Il = !0;
            }
          }
          null !== i.callback &&
            0 !== i.lane &&
            ((e.flags |= 64),
            null === (f = a.effects) ? (a.effects = [i]) : f.push(i));
        } else
          ((p = {
            eventTime: p,
            lane: f,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          }),
            null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
            (o |= f));
        if (null === (i = i.next)) {
          if (null === (i = a.shared.pending)) break;
          ((i = (f = i).next),
            (f.next = null),
            (a.lastBaseUpdate = f),
            (a.shared.pending = null));
        }
      }
      if (
        (null === c && (s = d),
        (a.baseState = s),
        (a.firstBaseUpdate = u),
        (a.lastBaseUpdate = c),
        null !== (t = a.shared.interleaved))
      ) {
        a = t;
        do {
          ((o |= a.lane), (a = a.next));
        } while (a !== t);
      } else null === l && (a.shared.lanes = 0);
      ((Fs |= o), (e.lanes = o), (e.memoizedState = d));
    }
  }
  function Wl(e, t, r) {
    if (((e = t.effects), (t.effects = null), null !== e))
      for (t = 0; t < e.length; t++) {
        var a = e[t],
          l = a.callback;
        if (null !== l) {
          if (((a.callback = null), (a = r), "function" != typeof l))
            throw Error(n(191, l));
          l.call(a);
        }
      }
  }
  var Hl = {},
    Ql = Ca(Hl),
    ql = Ca(Hl),
    Kl = Ca(Hl);
  function Xl(e) {
    if (e === Hl) throw Error(n(174));
    return e;
  }
  function Gl(e, t) {
    switch ((Na(Kl, t), Na(ql, e), Na(Ql, Hl), (e = t.nodeType))) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
        break;
      default:
        t = ue(
          (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
          (e = e.tagName),
        );
    }
    (ja(Ql), Na(Ql, t));
  }
  function Yl() {
    (ja(Ql), ja(ql), ja(Kl));
  }
  function Zl(e) {
    Xl(Kl.current);
    var t = Xl(Ql.current),
      n = ue(t, e.type);
    t !== n && (Na(ql, e), Na(Ql, n));
  }
  function Jl(e) {
    ql.current === e && (ja(Ql), ja(ql));
  }
  var eo = Ca(0);
  function to(e) {
    for (var t = e; null !== t;) {
      if (13 === t.tag) {
        var n = t.memoizedState;
        if (
          null !== n &&
          (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)
        )
          return t;
      } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
        if (128 & t.flags) return t;
      } else if (null !== t.child) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; null === t.sibling;) {
        if (null === t.return || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var no = [];
  function ro() {
    for (var e = 0; e < no.length; e++)
      no[e]._workInProgressVersionPrimary = null;
    no.length = 0;
  }
  var ao = v.ReactCurrentDispatcher,
    lo = v.ReactCurrentBatchConfig,
    oo = 0,
    io = null,
    so = null,
    uo = null,
    co = !1,
    fo = !1,
    po = 0,
    ho = 0;
  function mo() {
    throw Error(n(321));
  }
  function go(e, t) {
    if (null === t) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!sr(e[n], t[n])) return !1;
    return !0;
  }
  function vo(e, t, r, a, l, o) {
    if (
      ((oo = o),
      (io = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (ao.current = null === e || null === e.memoizedState ? ei : ti),
      (e = r(a, l)),
      fo)
    ) {
      o = 0;
      do {
        if (((fo = !1), (po = 0), 25 <= o)) throw Error(n(301));
        ((o += 1),
          (uo = so = null),
          (t.updateQueue = null),
          (ao.current = ni),
          (e = r(a, l)));
      } while (fo);
    }
    if (
      ((ao.current = Jo),
      (t = null !== so && null !== so.next),
      (oo = 0),
      (uo = so = io = null),
      (co = !1),
      t)
    )
      throw Error(n(300));
    return e;
  }
  function yo() {
    var e = 0 !== po;
    return ((po = 0), e);
  }
  function bo() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (null === uo ? (io.memoizedState = uo = e) : (uo = uo.next = e), uo);
  }
  function ko() {
    if (null === so) {
      var e = io.alternate;
      e = null !== e ? e.memoizedState : null;
    } else e = so.next;
    var t = null === uo ? io.memoizedState : uo.next;
    if (null !== t) ((uo = t), (so = e));
    else {
      if (null === e) throw Error(n(310));
      ((e = {
        memoizedState: (so = e).memoizedState,
        baseState: so.baseState,
        baseQueue: so.baseQueue,
        queue: so.queue,
        next: null,
      }),
        null === uo ? (io.memoizedState = uo = e) : (uo = uo.next = e));
    }
    return uo;
  }
  function xo(e, t) {
    return "function" == typeof t ? t(e) : t;
  }
  function wo(e) {
    var t = ko(),
      r = t.queue;
    if (null === r) throw Error(n(311));
    r.lastRenderedReducer = e;
    var a = so,
      l = a.baseQueue,
      o = r.pending;
    if (null !== o) {
      if (null !== l) {
        var i = l.next;
        ((l.next = o.next), (o.next = i));
      }
      ((a.baseQueue = l = o), (r.pending = null));
    }
    if (null !== l) {
      ((o = l.next), (a = a.baseState));
      var s = (i = null),
        u = null,
        c = o;
      do {
        var d = c.lane;
        if ((oo & d) === d)
          (null !== u &&
            (u = u.next =
              {
                lane: 0,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null,
              }),
            (a = c.hasEagerState ? c.eagerState : e(a, c.action)));
        else {
          var f = {
            lane: d,
            action: c.action,
            hasEagerState: c.hasEagerState,
            eagerState: c.eagerState,
            next: null,
          };
          (null === u ? ((s = u = f), (i = a)) : (u = u.next = f),
            (io.lanes |= d),
            (Fs |= d));
        }
        c = c.next;
      } while (null !== c && c !== o);
      (null === u ? (i = a) : (u.next = s),
        sr(a, t.memoizedState) || (ki = !0),
        (t.memoizedState = a),
        (t.baseState = i),
        (t.baseQueue = u),
        (r.lastRenderedState = a));
    }
    if (null !== (e = r.interleaved)) {
      l = e;
      do {
        ((o = l.lane), (io.lanes |= o), (Fs |= o), (l = l.next));
      } while (l !== e);
    } else null === l && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function _o(e) {
    var t = ko(),
      r = t.queue;
    if (null === r) throw Error(n(311));
    r.lastRenderedReducer = e;
    var a = r.dispatch,
      l = r.pending,
      o = t.memoizedState;
    if (null !== l) {
      r.pending = null;
      var i = (l = l.next);
      do {
        ((o = e(o, i.action)), (i = i.next));
      } while (i !== l);
      (sr(o, t.memoizedState) || (ki = !0),
        (t.memoizedState = o),
        null === t.baseQueue && (t.baseState = o),
        (r.lastRenderedState = o));
    }
    return [o, a];
  }
  function So() {}
  function Co(e, t) {
    var r = io,
      a = ko(),
      l = t(),
      o = !sr(a.memoizedState, l);
    if (
      (o && ((a.memoizedState = l), (ki = !0)),
      (a = a.queue),
      Fo(Eo.bind(null, r, a, e), [e]),
      a.getSnapshot !== t || o || (null !== uo && 1 & uo.memoizedState.tag))
    ) {
      if (
        ((r.flags |= 2048),
        Ro(9, No.bind(null, r, a, l, t), void 0, null),
        null === Ts)
      )
        throw Error(n(349));
      30 & oo || jo(r, t, l);
    }
    return l;
  }
  function jo(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      null === (t = io.updateQueue)
        ? ((t = { lastEffect: null, stores: null }),
          (io.updateQueue = t),
          (t.stores = [e]))
        : null === (n = t.stores)
          ? (t.stores = [e])
          : n.push(e));
  }
  function No(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), Lo(t) && To(e));
  }
  function Eo(e, t, n) {
    return n(function () {
      Lo(t) && To(e);
    });
  }
  function Lo(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !sr(e, n);
    } catch (r) {
      return !0;
    }
  }
  function To(e) {
    var t = Ol(e, 1);
    null !== t && ru(t, e, 1, -1);
  }
  function Po(e) {
    var t = bo();
    return (
      "function" == typeof e && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xo,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = Xo.bind(null, io, e)),
      [t.memoizedState, e]
    );
  }
  function Ro(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      null === (t = io.updateQueue)
        ? ((t = { lastEffect: null, stores: null }),
          (io.updateQueue = t),
          (t.lastEffect = e.next = e))
        : null === (n = t.lastEffect)
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
      e
    );
  }
  function Mo() {
    return ko().memoizedState;
  }
  function zo(e, t, n, r) {
    var a = bo();
    ((io.flags |= e),
      (a.memoizedState = Ro(1 | t, n, void 0, void 0 === r ? null : r)));
  }
  function Oo(e, t, n, r) {
    var a = ko();
    r = void 0 === r ? null : r;
    var l = void 0;
    if (null !== so) {
      var o = so.memoizedState;
      if (((l = o.destroy), null !== r && go(r, o.deps)))
        return void (a.memoizedState = Ro(t, n, l, r));
    }
    ((io.flags |= e), (a.memoizedState = Ro(1 | t, n, l, r)));
  }
  function Io(e, t) {
    return zo(8390656, 8, e, t);
  }
  function Fo(e, t) {
    return Oo(2048, 8, e, t);
  }
  function Do(e, t) {
    return Oo(4, 2, e, t);
  }
  function Uo(e, t) {
    return Oo(4, 4, e, t);
  }
  function Bo(e, t) {
    return "function" == typeof t
      ? ((e = e()),
        t(e),
        function () {
          t(null);
        })
      : null != t
        ? ((e = e()),
          (t.current = e),
          function () {
            t.current = null;
          })
        : void 0;
  }
  function Ao(e, t, n) {
    return (
      (n = null != n ? n.concat([e]) : null),
      Oo(4, 4, Bo.bind(null, t, e), n)
    );
  }
  function $o() {}
  function Vo(e, t) {
    var n = ko();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && go(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Wo(e, t) {
    var n = ko();
    t = void 0 === t ? null : t;
    var r = n.memoizedState;
    return null !== r && null !== t && go(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Ho(e, t, n) {
    return 21 & oo
      ? (sr(n, t) ||
          ((n = gt()), (io.lanes |= n), (Fs |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (ki = !0)), (e.memoizedState = n));
  }
  function Qo(e, t) {
    var n = kt;
    ((kt = 0 !== n && 4 > n ? n : 4), e(!0));
    var r = lo.transition;
    lo.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((kt = n), (lo.transition = r));
    }
  }
  function qo() {
    return ko().memoizedState;
  }
  function Ko(e, t, n) {
    var r = nu(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Go(e))
    )
      Yo(t, n);
    else if (null !== (n = zl(e, t, n, r))) {
      (ru(n, e, r, tu()), Zo(n, t, r));
    }
  }
  function Xo(e, t, n) {
    var r = nu(e),
      a = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Go(e)) Yo(t, a);
    else {
      var l = e.alternate;
      if (
        0 === e.lanes &&
        (null === l || 0 === l.lanes) &&
        null !== (l = t.lastRenderedReducer)
      )
        try {
          var o = t.lastRenderedState,
            i = l(o, n);
          if (((a.hasEagerState = !0), (a.eagerState = i), sr(i, o))) {
            var s = t.interleaved;
            return (
              null === s
                ? ((a.next = a), Ml(t))
                : ((a.next = s.next), (s.next = a)),
              void (t.interleaved = a)
            );
          }
        } catch (u) {}
      null !== (n = zl(e, t, a, r)) && (ru(n, e, r, (a = tu())), Zo(n, t, r));
    }
  }
  function Go(e) {
    var t = e.alternate;
    return e === io || (null !== t && t === io);
  }
  function Yo(e, t) {
    fo = co = !0;
    var n = e.pending;
    (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function Zo(e, t, n) {
    if (4194240 & n) {
      var r = t.lanes;
      ((n |= r &= e.pendingLanes), (t.lanes = n), bt(e, n));
    }
  }
  var Jo = {
      readContext: Pl,
      useCallback: mo,
      useContext: mo,
      useEffect: mo,
      useImperativeHandle: mo,
      useInsertionEffect: mo,
      useLayoutEffect: mo,
      useMemo: mo,
      useReducer: mo,
      useRef: mo,
      useState: mo,
      useDebugValue: mo,
      useDeferredValue: mo,
      useTransition: mo,
      useMutableSource: mo,
      useSyncExternalStore: mo,
      useId: mo,
      unstable_isNewReconciler: !1,
    },
    ei = {
      readContext: Pl,
      useCallback: function (e, t) {
        return ((bo().memoizedState = [e, void 0 === t ? null : t]), e);
      },
      useContext: Pl,
      useEffect: Io,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = null != n ? n.concat([e]) : null),
          zo(4194308, 4, Bo.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return zo(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return zo(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = bo();
        return (
          (t = void 0 === t ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = bo();
        return (
          (t = void 0 !== n ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = Ko.bind(null, io, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        return ((e = { current: e }), (bo().memoizedState = e));
      },
      useState: Po,
      useDebugValue: $o,
      useDeferredValue: function (e) {
        return (bo().memoizedState = e);
      },
      useTransition: function () {
        var e = Po(!1),
          t = e[0];
        return ((e = Qo.bind(null, e[1])), (bo().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var a = io,
          l = bo();
        if (ll) {
          if (void 0 === r) throw Error(n(407));
          r = r();
        } else {
          if (((r = t()), null === Ts)) throw Error(n(349));
          30 & oo || jo(a, t, r);
        }
        l.memoizedState = r;
        var o = { value: r, getSnapshot: t };
        return (
          (l.queue = o),
          Io(Eo.bind(null, a, o, e), [e]),
          (a.flags |= 2048),
          Ro(9, No.bind(null, a, o, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = bo(),
          t = Ts.identifierPrefix;
        if (ll) {
          var n = Za;
          ((t =
            ":" +
            t +
            "R" +
            (n = (Ya & ~(1 << (32 - it(Ya) - 1))).toString(32) + n)),
            0 < (n = po++) && (t += "H" + n.toString(32)),
            (t += ":"));
        } else t = ":" + t + "r" + (n = ho++).toString(32) + ":";
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    ti = {
      readContext: Pl,
      useCallback: Vo,
      useContext: Pl,
      useEffect: Fo,
      useImperativeHandle: Ao,
      useInsertionEffect: Do,
      useLayoutEffect: Uo,
      useMemo: Wo,
      useReducer: wo,
      useRef: Mo,
      useState: function () {
        return wo(xo);
      },
      useDebugValue: $o,
      useDeferredValue: function (e) {
        return Ho(ko(), so.memoizedState, e);
      },
      useTransition: function () {
        return [wo(xo)[0], ko().memoizedState];
      },
      useMutableSource: So,
      useSyncExternalStore: Co,
      useId: qo,
      unstable_isNewReconciler: !1,
    },
    ni = {
      readContext: Pl,
      useCallback: Vo,
      useContext: Pl,
      useEffect: Fo,
      useImperativeHandle: Ao,
      useInsertionEffect: Do,
      useLayoutEffect: Uo,
      useMemo: Wo,
      useReducer: _o,
      useRef: Mo,
      useState: function () {
        return _o(xo);
      },
      useDebugValue: $o,
      useDeferredValue: function (e) {
        var t = ko();
        return null === so ? (t.memoizedState = e) : Ho(t, so.memoizedState, e);
      },
      useTransition: function () {
        return [_o(xo)[0], ko().memoizedState];
      },
      useMutableSource: So,
      useSyncExternalStore: Co,
      useId: qo,
      unstable_isNewReconciler: !1,
    };
  function ri(e, t) {
    if (e && e.defaultProps) {
      for (var n in ((t = z({}, t)), (e = e.defaultProps)))
        void 0 === t[n] && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ai(e, t, n, r) {
    ((n = null == (n = n(r, (t = e.memoizedState))) ? t : z({}, t, n)),
      (e.memoizedState = n),
      0 === e.lanes && (e.updateQueue.baseState = n));
  }
  var li = {
    isMounted: function (e) {
      return !!(e = e._reactInternals) && Ve(e) === e;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = tu(),
        a = nu(e),
        l = Ul(r, a);
      ((l.payload = t),
        null != n && (l.callback = n),
        null !== (t = Bl(e, l, a)) && (ru(t, e, a, r), Al(t, e, a)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = tu(),
        a = nu(e),
        l = Ul(r, a);
      ((l.tag = 1),
        (l.payload = t),
        null != n && (l.callback = n),
        null !== (t = Bl(e, l, a)) && (ru(t, e, a, r), Al(t, e, a)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = tu(),
        r = nu(e),
        a = Ul(n, r);
      ((a.tag = 2),
        null != t && (a.callback = t),
        null !== (t = Bl(e, a, r)) && (ru(t, e, r, n), Al(t, e, r)));
    },
  };
  function oi(e, t, n, r, a, l, o) {
    return "function" == typeof (e = e.stateNode).shouldComponentUpdate
      ? e.shouldComponentUpdate(r, l, o)
      : !t.prototype ||
          !t.prototype.isPureReactComponent ||
          !ur(n, r) ||
          !ur(a, l);
  }
  function ii(e, t, n) {
    var r = !1,
      a = Ea,
      l = t.contextType;
    return (
      "object" == typeof l && null !== l
        ? (l = Pl(l))
        : ((a = Ma(t) ? Pa : La.current),
          (l = (r = null != (r = t.contextTypes)) ? Ra(e, a) : Ea)),
      (t = new t(n, l)),
      (e.memoizedState =
        null !== t.state && void 0 !== t.state ? t.state : null),
      (t.updater = li),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      t
    );
  }
  function si(e, t, n, r) {
    ((e = t.state),
      "function" == typeof t.componentWillReceiveProps &&
        t.componentWillReceiveProps(n, r),
      "function" == typeof t.UNSAFE_componentWillReceiveProps &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && li.enqueueReplaceState(t, t.state, null));
  }
  function ui(e, t, n, r) {
    var a = e.stateNode;
    ((a.props = n), (a.state = e.memoizedState), (a.refs = {}), Fl(e));
    var l = t.contextType;
    ("object" == typeof l && null !== l
      ? (a.context = Pl(l))
      : ((l = Ma(t) ? Pa : La.current), (a.context = Ra(e, l))),
      (a.state = e.memoizedState),
      "function" == typeof (l = t.getDerivedStateFromProps) &&
        (ai(e, t, l, n), (a.state = e.memoizedState)),
      "function" == typeof t.getDerivedStateFromProps ||
        "function" == typeof a.getSnapshotBeforeUpdate ||
        ("function" != typeof a.UNSAFE_componentWillMount &&
          "function" != typeof a.componentWillMount) ||
        ((t = a.state),
        "function" == typeof a.componentWillMount && a.componentWillMount(),
        "function" == typeof a.UNSAFE_componentWillMount &&
          a.UNSAFE_componentWillMount(),
        t !== a.state && li.enqueueReplaceState(a, a.state, null),
        Vl(e, n, a, r),
        (a.state = e.memoizedState)),
      "function" == typeof a.componentDidMount && (e.flags |= 4194308));
  }
  function ci(e, t) {
    try {
      var n = "",
        r = t;
      do {
        ((n += D(r)), (r = r.return));
      } while (r);
      var a = n;
    } catch (l) {
      a = "\nError generating stack: " + l.message + "\n" + l.stack;
    }
    return { value: e, source: t, stack: a, digest: null };
  }
  function di(e, t, n) {
    return {
      value: e,
      source: null,
      stack: null != n ? n : null,
      digest: null != t ? t : null,
    };
  }
  function fi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var pi = "function" == typeof WeakMap ? WeakMap : Map;
  function hi(e, t, n) {
    (((n = Ul(-1, n)).tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (Hs || ((Hs = !0), (Qs = r)), fi(0, t));
      }),
      n
    );
  }
  function mi(e, t, n) {
    (n = Ul(-1, n)).tag = 3;
    var r = e.type.getDerivedStateFromError;
    if ("function" == typeof r) {
      var a = t.value;
      ((n.payload = function () {
        return r(a);
      }),
        (n.callback = function () {
          fi(0, t);
        }));
    }
    var l = e.stateNode;
    return (
      null !== l &&
        "function" == typeof l.componentDidCatch &&
        (n.callback = function () {
          (fi(0, t),
            "function" != typeof r &&
              (null === qs ? (qs = new Set([this])) : qs.add(this)));
          var e = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: null !== e ? e : "",
          });
        }),
      n
    );
  }
  function gi(e, t, n) {
    var r = e.pingCache;
    if (null === r) {
      r = e.pingCache = new pi();
      var a = new Set();
      r.set(t, a);
    } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
    a.has(n) || (a.add(n), (e = ju.bind(null, e, t, n)), t.then(e, e));
  }
  function vi(e) {
    do {
      var t;
      if (
        ((t = 13 === e.tag) &&
          (t = null === (t = e.memoizedState) || null !== t.dehydrated),
        t)
      )
        return e;
      e = e.return;
    } while (null !== e);
    return null;
  }
  function yi(e, t, n, r, a) {
    return 1 & e.mode
      ? ((e.flags |= 65536), (e.lanes = a), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            1 === n.tag &&
              (null === n.alternate
                ? (n.tag = 17)
                : (((t = Ul(-1, 1)).tag = 2), Bl(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var bi = v.ReactCurrentOwner,
    ki = !1;
  function xi(e, t, n, r) {
    t.child = null === e ? wl(t, null, n, r) : xl(t, e.child, n, r);
  }
  function wi(e, t, n, r, a) {
    n = n.render;
    var l = t.ref;
    return (
      Tl(t, a),
      (r = vo(e, t, n, r, l, a)),
      (n = yo()),
      null === e || ki
        ? (ll && n && tl(t), (t.flags |= 1), xi(e, t, r, a), t.child)
        : ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          Hi(e, t, a))
    );
  }
  function _i(e, t, n, r, a) {
    if (null === e) {
      var l = n.type;
      return "function" != typeof l ||
        Mu(l) ||
        void 0 !== l.defaultProps ||
        null !== n.compare ||
        void 0 !== n.defaultProps
        ? (((e = Ou(n.type, null, r, t, t.mode, a)).ref = t.ref),
          (e.return = t),
          (t.child = e))
        : ((t.tag = 15), (t.type = l), Si(e, t, l, r, a));
    }
    if (((l = e.child), !(e.lanes & a))) {
      var o = l.memoizedProps;
      if ((n = null !== (n = n.compare) ? n : ur)(o, r) && e.ref === t.ref)
        return Hi(e, t, a);
    }
    return (
      (t.flags |= 1),
      ((e = zu(l, r)).ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Si(e, t, n, r, a) {
    if (null !== e) {
      var l = e.memoizedProps;
      if (ur(l, r) && e.ref === t.ref) {
        if (((ki = !1), (t.pendingProps = r = l), !(e.lanes & a)))
          return ((t.lanes = e.lanes), Hi(e, t, a));
        131072 & e.flags && (ki = !0);
      }
    }
    return Ni(e, t, n, r, a);
  }
  function Ci(e, t, n) {
    var r = t.pendingProps,
      a = r.children,
      l = null !== e ? e.memoizedState : null;
    if ("hidden" === r.mode)
      if (1 & t.mode) {
        if (!(1073741824 & n))
          return (
            (e = null !== l ? l.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Na(zs, Ms),
            (Ms |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = null !== l ? l.baseLanes : n),
          Na(zs, Ms),
          (Ms |= r));
      } else
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Na(zs, Ms),
          (Ms |= n));
    else
      (null !== l ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
        Na(zs, Ms),
        (Ms |= r));
    return (xi(e, t, a, n), t.child);
  }
  function ji(e, t) {
    var n = t.ref;
    ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ni(e, t, n, r, a) {
    var l = Ma(n) ? Pa : La.current;
    return (
      (l = Ra(t, l)),
      Tl(t, a),
      (n = vo(e, t, n, r, l, a)),
      (r = yo()),
      null === e || ki
        ? (ll && r && tl(t), (t.flags |= 1), xi(e, t, n, a), t.child)
        : ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~a),
          Hi(e, t, a))
    );
  }
  function Ei(e, t, n, r, a) {
    if (Ma(n)) {
      var l = !0;
      Fa(t);
    } else l = !1;
    if ((Tl(t, a), null === t.stateNode))
      (Wi(e, t), ii(t, n, r), ui(t, n, r, a), (r = !0));
    else if (null === e) {
      var o = t.stateNode,
        i = t.memoizedProps;
      o.props = i;
      var s = o.context,
        u = n.contextType;
      "object" == typeof u && null !== u
        ? (u = Pl(u))
        : (u = Ra(t, (u = Ma(n) ? Pa : La.current)));
      var c = n.getDerivedStateFromProps,
        d =
          "function" == typeof c ||
          "function" == typeof o.getSnapshotBeforeUpdate;
      (d ||
        ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
          "function" != typeof o.componentWillReceiveProps) ||
        ((i !== r || s !== u) && si(t, o, r, u)),
        (Il = !1));
      var f = t.memoizedState;
      ((o.state = f),
        Vl(t, r, o, a),
        (s = t.memoizedState),
        i !== r || f !== s || Ta.current || Il
          ? ("function" == typeof c && (ai(t, n, c, r), (s = t.memoizedState)),
            (i = Il || oi(t, n, i, r, f, s, u))
              ? (d ||
                  ("function" != typeof o.UNSAFE_componentWillMount &&
                    "function" != typeof o.componentWillMount) ||
                  ("function" == typeof o.componentWillMount &&
                    o.componentWillMount(),
                  "function" == typeof o.UNSAFE_componentWillMount &&
                    o.UNSAFE_componentWillMount()),
                "function" == typeof o.componentDidMount &&
                  (t.flags |= 4194308))
              : ("function" == typeof o.componentDidMount &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = s)),
            (o.props = r),
            (o.state = s),
            (o.context = u),
            (r = i))
          : ("function" == typeof o.componentDidMount && (t.flags |= 4194308),
            (r = !1)));
    } else {
      ((o = t.stateNode),
        Dl(e, t),
        (i = t.memoizedProps),
        (u = t.type === t.elementType ? i : ri(t.type, i)),
        (o.props = u),
        (d = t.pendingProps),
        (f = o.context),
        "object" == typeof (s = n.contextType) && null !== s
          ? (s = Pl(s))
          : (s = Ra(t, (s = Ma(n) ? Pa : La.current))));
      var p = n.getDerivedStateFromProps;
      ((c =
        "function" == typeof p ||
        "function" == typeof o.getSnapshotBeforeUpdate) ||
        ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
          "function" != typeof o.componentWillReceiveProps) ||
        ((i !== d || f !== s) && si(t, o, r, s)),
        (Il = !1),
        (f = t.memoizedState),
        (o.state = f),
        Vl(t, r, o, a));
      var h = t.memoizedState;
      i !== d || f !== h || Ta.current || Il
        ? ("function" == typeof p && (ai(t, n, p, r), (h = t.memoizedState)),
          (u = Il || oi(t, n, u, r, f, h, s) || !1)
            ? (c ||
                ("function" != typeof o.UNSAFE_componentWillUpdate &&
                  "function" != typeof o.componentWillUpdate) ||
                ("function" == typeof o.componentWillUpdate &&
                  o.componentWillUpdate(r, h, s),
                "function" == typeof o.UNSAFE_componentWillUpdate &&
                  o.UNSAFE_componentWillUpdate(r, h, s)),
              "function" == typeof o.componentDidUpdate && (t.flags |= 4),
              "function" == typeof o.getSnapshotBeforeUpdate &&
                (t.flags |= 1024))
            : ("function" != typeof o.componentDidUpdate ||
                (i === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 4),
              "function" != typeof o.getSnapshotBeforeUpdate ||
                (i === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = h)),
          (o.props = r),
          (o.state = h),
          (o.context = s),
          (r = u))
        : ("function" != typeof o.componentDidUpdate ||
            (i === e.memoizedProps && f === e.memoizedState) ||
            (t.flags |= 4),
          "function" != typeof o.getSnapshotBeforeUpdate ||
            (i === e.memoizedProps && f === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Li(e, t, n, r, l, a);
  }
  function Li(e, t, n, r, a, l) {
    ji(e, t);
    var o = !!(128 & t.flags);
    if (!r && !o) return (a && Da(t, n, !1), Hi(e, t, l));
    ((r = t.stateNode), (bi.current = t));
    var i =
      o && "function" != typeof n.getDerivedStateFromError ? null : r.render();
    return (
      (t.flags |= 1),
      null !== e && o
        ? ((t.child = xl(t, e.child, null, l)), (t.child = xl(t, null, i, l)))
        : xi(e, t, i, l),
      (t.memoizedState = r.state),
      a && Da(t, n, !0),
      t.child
    );
  }
  function Ti(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Oa(0, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Oa(0, t.context, !1),
      Gl(e, t.containerInfo));
  }
  function Pi(e, t, n, r, a) {
    return (hl(), ml(a), (t.flags |= 256), xi(e, t, n, r), t.child);
  }
  var Ri,
    Mi,
    zi,
    Oi,
    Ii = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Fi(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Di(e, t, r) {
    var a,
      l = t.pendingProps,
      o = eo.current,
      i = !1,
      s = !!(128 & t.flags);
    if (
      ((a = s) || (a = (null === e || null !== e.memoizedState) && !!(2 & o)),
      a
        ? ((i = !0), (t.flags &= -129))
        : (null !== e && null === e.memoizedState) || (o |= 1),
      Na(eo, 1 & o),
      null === e)
    )
      return (
        cl(t),
        null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
          ? (1 & t.mode
              ? "$!" === e.data
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((s = l.children),
            (e = l.fallback),
            i
              ? ((l = t.mode),
                (i = t.child),
                (s = { mode: "hidden", children: s }),
                1 & l || null === i
                  ? (i = Fu(s, l, 0, null))
                  : ((i.childLanes = 0), (i.pendingProps = s)),
                (e = Iu(e, l, r, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = Fi(r)),
                (t.memoizedState = Ii),
                e)
              : Ui(t, s))
      );
    if (null !== (o = e.memoizedState) && null !== (a = o.dehydrated))
      return (function (e, t, r, a, l, o, i) {
        if (r)
          return 256 & t.flags
            ? ((t.flags &= -257), Bi(e, t, i, (a = di(Error(n(422))))))
            : null !== t.memoizedState
              ? ((t.child = e.child), (t.flags |= 128), null)
              : ((o = a.fallback),
                (l = t.mode),
                (a = Fu({ mode: "visible", children: a.children }, l, 0, null)),
                ((o = Iu(o, l, i, null)).flags |= 2),
                (a.return = t),
                (o.return = t),
                (a.sibling = o),
                (t.child = a),
                1 & t.mode && xl(t, e.child, null, i),
                (t.child.memoizedState = Fi(i)),
                (t.memoizedState = Ii),
                o);
        if (!(1 & t.mode)) return Bi(e, t, i, null);
        if ("$!" === l.data) {
          if ((a = l.nextSibling && l.nextSibling.dataset)) var s = a.dgst;
          return (
            (a = s),
            Bi(e, t, i, (a = di((o = Error(n(419))), a, void 0)))
          );
        }
        if (((s = !!(i & e.childLanes)), ki || s)) {
          if (null !== (a = Ts)) {
            switch (i & -i) {
              case 4:
                l = 2;
                break;
              case 16:
                l = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                l = 32;
                break;
              case 536870912:
                l = 268435456;
                break;
              default:
                l = 0;
            }
            0 !== (l = l & (a.suspendedLanes | i) ? 0 : l) &&
              l !== o.retryLane &&
              ((o.retryLane = l), Ol(e, l), ru(a, e, l, -1));
          }
          return (gu(), Bi(e, t, i, (a = di(Error(n(421))))));
        }
        return "$?" === l.data
          ? ((t.flags |= 128),
            (t.child = e.child),
            (t = Eu.bind(null, e)),
            (l._reactRetry = t),
            null)
          : ((e = o.treeContext),
            (al = ca(l.nextSibling)),
            (rl = t),
            (ll = !0),
            (ol = null),
            null !== e &&
              ((Ka[Xa++] = Ya),
              (Ka[Xa++] = Za),
              (Ka[Xa++] = Ga),
              (Ya = e.id),
              (Za = e.overflow),
              (Ga = t)),
            (t = Ui(t, a.children)),
            (t.flags |= 4096),
            t);
      })(e, t, s, l, a, o, r);
    if (i) {
      ((i = l.fallback), (s = t.mode), (a = (o = e.child).sibling));
      var u = { mode: "hidden", children: l.children };
      return (
        1 & s || t.child === o
          ? ((l = zu(o, u)).subtreeFlags = 14680064 & o.subtreeFlags)
          : (((l = t.child).childLanes = 0),
            (l.pendingProps = u),
            (t.deletions = null)),
        null !== a ? (i = zu(a, i)) : ((i = Iu(i, s, r, null)).flags |= 2),
        (i.return = t),
        (l.return = t),
        (l.sibling = i),
        (t.child = l),
        (l = i),
        (i = t.child),
        (s =
          null === (s = e.child.memoizedState)
            ? Fi(r)
            : {
                baseLanes: s.baseLanes | r,
                cachePool: null,
                transitions: s.transitions,
              }),
        (i.memoizedState = s),
        (i.childLanes = e.childLanes & ~r),
        (t.memoizedState = Ii),
        l
      );
    }
    return (
      (e = (i = e.child).sibling),
      (l = zu(i, { mode: "visible", children: l.children })),
      !(1 & t.mode) && (l.lanes = r),
      (l.return = t),
      (l.sibling = null),
      null !== e &&
        (null === (r = t.deletions)
          ? ((t.deletions = [e]), (t.flags |= 16))
          : r.push(e)),
      (t.child = l),
      (t.memoizedState = null),
      l
    );
  }
  function Ui(e, t) {
    return (
      ((t = Fu({ mode: "visible", children: t }, e.mode, 0, null)).return = e),
      (e.child = t)
    );
  }
  function Bi(e, t, n, r) {
    return (
      null !== r && ml(r),
      xl(t, e.child, null, n),
      ((e = Ui(t, t.pendingProps.children)).flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Ai(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (null !== r && (r.lanes |= t), Ll(e.return, t, n));
  }
  function $i(e, t, n, r, a) {
    var l = e.memoizedState;
    null === l
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: a,
        })
      : ((l.isBackwards = t),
        (l.rendering = null),
        (l.renderingStartTime = 0),
        (l.last = r),
        (l.tail = n),
        (l.tailMode = a));
  }
  function Vi(e, t, n) {
    var r = t.pendingProps,
      a = r.revealOrder,
      l = r.tail;
    if ((xi(e, t, r.children, n), 2 & (r = eo.current)))
      ((r = (1 & r) | 2), (t.flags |= 128));
    else {
      if (null !== e && 128 & e.flags)
        e: for (e = t.child; null !== e;) {
          if (13 === e.tag) null !== e.memoizedState && Ai(e, n, t);
          else if (19 === e.tag) Ai(e, n, t);
          else if (null !== e.child) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; null === e.sibling;) {
            if (null === e.return || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    if ((Na(eo, r), 1 & t.mode))
      switch (a) {
        case "forwards":
          for (n = t.child, a = null; null !== n;)
            (null !== (e = n.alternate) && null === to(e) && (a = n),
              (n = n.sibling));
          (null === (n = a)
            ? ((a = t.child), (t.child = null))
            : ((a = n.sibling), (n.sibling = null)),
            $i(t, !1, a, n, l));
          break;
        case "backwards":
          for (n = null, a = t.child, t.child = null; null !== a;) {
            if (null !== (e = a.alternate) && null === to(e)) {
              t.child = a;
              break;
            }
            ((e = a.sibling), (a.sibling = n), (n = a), (a = e));
          }
          $i(t, !0, n, null, l);
          break;
        case "together":
          $i(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    else t.memoizedState = null;
    return t.child;
  }
  function Wi(e, t) {
    !(1 & t.mode) &&
      null !== e &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Hi(e, t, r) {
    if (
      (null !== e && (t.dependencies = e.dependencies),
      (Fs |= t.lanes),
      !(r & t.childLanes))
    )
      return null;
    if (null !== e && t.child !== e.child) throw Error(n(153));
    if (null !== t.child) {
      for (
        r = zu((e = t.child), e.pendingProps), t.child = r, r.return = t;
        null !== e.sibling;
      )
        ((e = e.sibling), ((r = r.sibling = zu(e, e.pendingProps)).return = t));
      r.sibling = null;
    }
    return t.child;
  }
  function Qi(e, t) {
    if (!ll)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; null !== t;)
            (null !== t.alternate && (n = t), (t = t.sibling));
          null === n ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; null !== n;)
            (null !== n.alternate && (r = n), (n = n.sibling));
          null === r
            ? t || null === e.tail
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function qi(e) {
    var t = null !== e.alternate && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var a = e.child; null !== a;)
        ((n |= a.lanes | a.childLanes),
          (r |= 14680064 & a.subtreeFlags),
          (r |= 14680064 & a.flags),
          (a.return = e),
          (a = a.sibling));
    else
      for (a = e.child; null !== a;)
        ((n |= a.lanes | a.childLanes),
          (r |= a.subtreeFlags),
          (r |= a.flags),
          (a.return = e),
          (a = a.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function Ki(e, t, r) {
    var l = t.pendingProps;
    switch ((nl(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (qi(t), null);
      case 1:
      case 17:
        return (Ma(t.type) && za(), qi(t), null);
      case 3:
        return (
          (l = t.stateNode),
          Yl(),
          ja(Ta),
          ja(La),
          ro(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (null !== e && null !== e.child) ||
            (fl(t)
              ? (t.flags |= 4)
              : null === e ||
                (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
                ((t.flags |= 1024), null !== ol && (iu(ol), (ol = null)))),
          Mi(e, t),
          qi(t),
          null
        );
      case 5:
        Jl(t);
        var o = Xl(Kl.current);
        if (((r = t.type), null !== e && null != t.stateNode))
          (zi(e, t, r, l, o),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!l) {
            if (null === t.stateNode) throw Error(n(166));
            return (qi(t), null);
          }
          if (((e = Xl(Ql.current)), fl(t))) {
            ((l = t.stateNode), (r = t.type));
            var i = t.memoizedProps;
            switch (((l[pa] = t), (l[ha] = i), (e = !!(1 & t.mode)), r)) {
              case "dialog":
                (Br("cancel", l), Br("close", l));
                break;
              case "iframe":
              case "object":
              case "embed":
                Br("load", l);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Ir.length; o++) Br(Ir[o], l);
                break;
              case "source":
                Br("error", l);
                break;
              case "img":
              case "image":
              case "link":
                (Br("error", l), Br("load", l));
                break;
              case "details":
                Br("toggle", l);
                break;
              case "input":
                (X(l, i), Br("invalid", l));
                break;
              case "select":
                ((l._wrapperState = { wasMultiple: !!i.multiple }),
                  Br("invalid", l));
                break;
              case "textarea":
                (le(l, i), Br("invalid", l));
            }
            for (var s in (be(r, i), (o = null), i))
              if (i.hasOwnProperty(s)) {
                var u = i[s];
                "children" === s
                  ? "string" == typeof u
                    ? l.textContent !== u &&
                      (!0 !== i.suppressHydrationWarning &&
                        Jr(l.textContent, u, e),
                      (o = ["children", u]))
                    : "number" == typeof u &&
                      l.textContent !== "" + u &&
                      (!0 !== i.suppressHydrationWarning &&
                        Jr(l.textContent, u, e),
                      (o = ["children", "" + u]))
                  : a.hasOwnProperty(s) &&
                    null != u &&
                    "onScroll" === s &&
                    Br("scroll", l);
              }
            switch (r) {
              case "input":
                (W(l), ee(l, i, !0));
                break;
              case "textarea":
                (W(l), ie(l));
                break;
              case "select":
              case "option":
                break;
              default:
                "function" == typeof i.onClick && (l.onclick = ea);
            }
            ((l = o), (t.updateQueue = l), null !== l && (t.flags |= 4));
          } else {
            ((s = 9 === o.nodeType ? o : o.ownerDocument),
              "http://www.w3.org/1999/xhtml" === e && (e = se(r)),
              "http://www.w3.org/1999/xhtml" === e
                ? "script" === r
                  ? (((e = s.createElement("div")).innerHTML =
                      "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : "string" == typeof l.is
                    ? (e = s.createElement(r, { is: l.is }))
                    : ((e = s.createElement(r)),
                      "select" === r &&
                        ((s = e),
                        l.multiple
                          ? (s.multiple = !0)
                          : l.size && (s.size = l.size)))
                : (e = s.createElementNS(e, r)),
              (e[pa] = t),
              (e[ha] = l),
              Ri(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((s = ke(r, l)), r)) {
                case "dialog":
                  (Br("cancel", e), Br("close", e), (o = l));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (Br("load", e), (o = l));
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < Ir.length; o++) Br(Ir[o], e);
                  o = l;
                  break;
                case "source":
                  (Br("error", e), (o = l));
                  break;
                case "img":
                case "image":
                case "link":
                  (Br("error", e), Br("load", e), (o = l));
                  break;
                case "details":
                  (Br("toggle", e), (o = l));
                  break;
                case "input":
                  (X(e, l), (o = K(e, l)), Br("invalid", e));
                  break;
                case "option":
                default:
                  o = l;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!l.multiple }),
                    (o = z({}, l, { value: void 0 })),
                    Br("invalid", e));
                  break;
                case "textarea":
                  (le(e, l), (o = ae(e, l)), Br("invalid", e));
              }
              for (i in (be(r, o), (u = o)))
                if (u.hasOwnProperty(i)) {
                  var c = u[i];
                  "style" === i
                    ? ve(e, c)
                    : "dangerouslySetInnerHTML" === i
                      ? null != (c = c ? c.__html : void 0) && fe(e, c)
                      : "children" === i
                        ? "string" == typeof c
                          ? ("textarea" !== r || "" !== c) && pe(e, c)
                          : "number" == typeof c && pe(e, "" + c)
                        : "suppressContentEditableWarning" !== i &&
                          "suppressHydrationWarning" !== i &&
                          "autoFocus" !== i &&
                          (a.hasOwnProperty(i)
                            ? null != c && "onScroll" === i && Br("scroll", e)
                            : null != c && g(e, i, c, s));
                }
              switch (r) {
                case "input":
                  (W(e), ee(e, l, !1));
                  break;
                case "textarea":
                  (W(e), ie(e));
                  break;
                case "option":
                  null != l.value && e.setAttribute("value", "" + $(l.value));
                  break;
                case "select":
                  ((e.multiple = !!l.multiple),
                    null != (i = l.value)
                      ? re(e, !!l.multiple, i, !1)
                      : null != l.defaultValue &&
                        re(e, !!l.multiple, l.defaultValue, !0));
                  break;
                default:
                  "function" == typeof o.onClick && (e.onclick = ea);
              }
              switch (r) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l = !!l.autoFocus;
                  break e;
                case "img":
                  l = !0;
                  break e;
                default:
                  l = !1;
              }
            }
            l && (t.flags |= 4);
          }
          null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (qi(t), null);
      case 6:
        if (e && null != t.stateNode) Oi(e, t, e.memoizedProps, l);
        else {
          if ("string" != typeof l && null === t.stateNode) throw Error(n(166));
          if (((r = Xl(Kl.current)), Xl(Ql.current), fl(t))) {
            if (
              ((l = t.stateNode),
              (r = t.memoizedProps),
              (l[pa] = t),
              (i = l.nodeValue !== r) && null !== (e = rl))
            )
              switch (e.tag) {
                case 3:
                  Jr(l.nodeValue, r, !!(1 & e.mode));
                  break;
                case 5:
                  !0 !== e.memoizedProps.suppressHydrationWarning &&
                    Jr(l.nodeValue, r, !!(1 & e.mode));
              }
            i && (t.flags |= 4);
          } else
            (((l = (9 === r.nodeType ? r : r.ownerDocument).createTextNode(l))[
              pa
            ] = t),
              (t.stateNode = l));
        }
        return (qi(t), null);
      case 13:
        if (
          (ja(eo),
          (l = t.memoizedState),
          null === e ||
            (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
        ) {
          if (ll && null !== al && 1 & t.mode && !(128 & t.flags))
            (pl(), hl(), (t.flags |= 98560), (i = !1));
          else if (((i = fl(t)), null !== l && null !== l.dehydrated)) {
            if (null === e) {
              if (!i) throw Error(n(318));
              if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null))
                throw Error(n(317));
              i[pa] = t;
            } else
              (hl(),
                !(128 & t.flags) && (t.memoizedState = null),
                (t.flags |= 4));
            (qi(t), (i = !1));
          } else (null !== ol && (iu(ol), (ol = null)), (i = !0));
          if (!i) return 65536 & t.flags ? t : null;
        }
        return 128 & t.flags
          ? ((t.lanes = r), t)
          : ((l = null !== l) !== (null !== e && null !== e.memoizedState) &&
              l &&
              ((t.child.flags |= 8192),
              1 & t.mode &&
                (null === e || 1 & eo.current ? 0 === Os && (Os = 3) : gu())),
            null !== t.updateQueue && (t.flags |= 4),
            qi(t),
            null);
      case 4:
        return (
          Yl(),
          Mi(e, t),
          null === e && Vr(t.stateNode.containerInfo),
          qi(t),
          null
        );
      case 10:
        return (El(t.type._context), qi(t), null);
      case 19:
        if ((ja(eo), null === (i = t.memoizedState))) return (qi(t), null);
        if (((l = !!(128 & t.flags)), null === (s = i.rendering)))
          if (l) Qi(i, !1);
          else {
            if (0 !== Os || (null !== e && 128 & e.flags))
              for (e = t.child; null !== e;) {
                if (null !== (s = to(e))) {
                  for (
                    t.flags |= 128,
                      Qi(i, !1),
                      null !== (l = s.updateQueue) &&
                        ((t.updateQueue = l), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      l = r,
                      r = t.child;
                    null !== r;
                  )
                    ((e = l),
                      ((i = r).flags &= 14680066),
                      null === (s = i.alternate)
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = s.childLanes),
                          (i.lanes = s.lanes),
                          (i.child = s.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = s.memoizedProps),
                          (i.memoizedState = s.memoizedState),
                          (i.updateQueue = s.updateQueue),
                          (i.type = s.type),
                          (e = s.dependencies),
                          (i.dependencies =
                            null === e
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (r = r.sibling));
                  return (Na(eo, (1 & eo.current) | 2), t.child);
                }
                e = e.sibling;
              }
            null !== i.tail &&
              Ze() > Vs &&
              ((t.flags |= 128), (l = !0), Qi(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (null !== (e = to(s))) {
              if (
                ((t.flags |= 128),
                (l = !0),
                null !== (r = e.updateQueue) &&
                  ((t.updateQueue = r), (t.flags |= 4)),
                Qi(i, !0),
                null === i.tail &&
                  "hidden" === i.tailMode &&
                  !s.alternate &&
                  !ll)
              )
                return (qi(t), null);
            } else
              2 * Ze() - i.renderingStartTime > Vs &&
                1073741824 !== r &&
                ((t.flags |= 128), (l = !0), Qi(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((s.sibling = t.child), (t.child = s))
            : (null !== (r = i.last) ? (r.sibling = s) : (t.child = s),
              (i.last = s));
        }
        return null !== i.tail
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = Ze()),
            (t.sibling = null),
            (r = eo.current),
            Na(eo, l ? (1 & r) | 2 : 1 & r),
            t)
          : (qi(t), null);
      case 22:
      case 23:
        return (
          fu(),
          (l = null !== t.memoizedState),
          null !== e && (null !== e.memoizedState) !== l && (t.flags |= 8192),
          l && 1 & t.mode
            ? !!(1073741824 & Ms) &&
              (qi(t), 6 & t.subtreeFlags && (t.flags |= 8192))
            : qi(t),
          null
        );
      case 24:
      case 25:
        return null;
    }
    throw Error(n(156, t.tag));
  }
  function Xi(e, t) {
    switch ((nl(t), t.tag)) {
      case 1:
        return (
          Ma(t.type) && za(),
          65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
        );
      case 3:
        return (
          Yl(),
          ja(Ta),
          ja(La),
          ro(),
          65536 & (e = t.flags) && !(128 & e)
            ? ((t.flags = (-65537 & e) | 128), t)
            : null
        );
      case 5:
        return (Jl(t), null);
      case 13:
        if ((ja(eo), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
          if (null === t.alternate) throw Error(n(340));
          hl();
        }
        return 65536 & (e = t.flags)
          ? ((t.flags = (-65537 & e) | 128), t)
          : null;
      case 19:
        return (ja(eo), null);
      case 4:
        return (Yl(), null);
      case 10:
        return (El(t.type._context), null);
      case 22:
      case 23:
        return (fu(), null);
      default:
        return null;
    }
  }
  ((Ri = function (e, t) {
    for (var n = t.child; null !== n;) {
      if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
      else if (4 !== n.tag && null !== n.child) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; null === n.sibling;) {
        if (null === n.return || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (Mi = function () {}),
    (zi = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), Xl(Ql.current));
        var o,
          i = null;
        switch (n) {
          case "input":
            ((l = K(e, l)), (r = K(e, r)), (i = []));
            break;
          case "select":
            ((l = z({}, l, { value: void 0 })),
              (r = z({}, r, { value: void 0 })),
              (i = []));
            break;
          case "textarea":
            ((l = ae(e, l)), (r = ae(e, r)), (i = []));
            break;
          default:
            "function" != typeof l.onClick &&
              "function" == typeof r.onClick &&
              (e.onclick = ea);
        }
        for (c in (be(n, r), (n = null), l))
          if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && null != l[c])
            if ("style" === c) {
              var s = l[c];
              for (o in s) s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
            } else
              "dangerouslySetInnerHTML" !== c &&
                "children" !== c &&
                "suppressContentEditableWarning" !== c &&
                "suppressHydrationWarning" !== c &&
                "autoFocus" !== c &&
                (a.hasOwnProperty(c)
                  ? i || (i = [])
                  : (i = i || []).push(c, null));
        for (c in r) {
          var u = r[c];
          if (
            ((s = null != l ? l[c] : void 0),
            r.hasOwnProperty(c) && u !== s && (null != u || null != s))
          )
            if ("style" === c)
              if (s) {
                for (o in s)
                  !s.hasOwnProperty(o) ||
                    (u && u.hasOwnProperty(o)) ||
                    (n || (n = {}), (n[o] = ""));
                for (o in u)
                  u.hasOwnProperty(o) &&
                    s[o] !== u[o] &&
                    (n || (n = {}), (n[o] = u[o]));
              } else (n || (i || (i = []), i.push(c, n)), (n = u));
            else
              "dangerouslySetInnerHTML" === c
                ? ((u = u ? u.__html : void 0),
                  (s = s ? s.__html : void 0),
                  null != u && s !== u && (i = i || []).push(c, u))
                : "children" === c
                  ? ("string" != typeof u && "number" != typeof u) ||
                    (i = i || []).push(c, "" + u)
                  : "suppressContentEditableWarning" !== c &&
                    "suppressHydrationWarning" !== c &&
                    (a.hasOwnProperty(c)
                      ? (null != u && "onScroll" === c && Br("scroll", e),
                        i || s === u || (i = []))
                      : (i = i || []).push(c, u));
        }
        n && (i = i || []).push("style", n);
        var c = i;
        (t.updateQueue = c) && (t.flags |= 4);
      }
    }),
    (Oi = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  var Gi = !1,
    Yi = !1,
    Zi = "function" == typeof WeakSet ? WeakSet : Set,
    Ji = null;
  function es(e, t) {
    var n = e.ref;
    if (null !== n)
      if ("function" == typeof n)
        try {
          n(null);
        } catch (r) {
          Cu(e, t, r);
        }
      else n.current = null;
  }
  function ts(e, t, n) {
    try {
      n();
    } catch (r) {
      Cu(e, t, r);
    }
  }
  var ns = !1;
  function rs(e, t, n) {
    var r = t.updateQueue;
    if (null !== (r = null !== r ? r.lastEffect : null)) {
      var a = (r = r.next);
      do {
        if ((a.tag & e) === e) {
          var l = a.destroy;
          ((a.destroy = void 0), void 0 !== l && ts(t, n, l));
        }
        a = a.next;
      } while (a !== r);
    }
  }
  function as(e, t) {
    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function ls(e) {
    var t = e.ref;
    if (null !== t) {
      var n = e.stateNode;
      (e.tag, (e = n), "function" == typeof t ? t(e) : (t.current = e));
    }
  }
  function os(e) {
    var t = e.alternate;
    (null !== t && ((e.alternate = null), os(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      5 === e.tag &&
        null !== (t = e.stateNode) &&
        (delete t[pa], delete t[ha], delete t[ga], delete t[va], delete t[ya]),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function is(e) {
    return 5 === e.tag || 3 === e.tag || 4 === e.tag;
  }
  function ss(e) {
    e: for (;;) {
      for (; null === e.sibling;) {
        if (null === e.return || is(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        5 !== e.tag && 6 !== e.tag && 18 !== e.tag;
      ) {
        if (2 & e.flags) continue e;
        if (null === e.child || 4 === e.tag) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(2 & e.flags)) return e.stateNode;
    }
  }
  function us(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
      ((e = e.stateNode),
        t
          ? 8 === n.nodeType
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (8 === n.nodeType
              ? (t = n.parentNode).insertBefore(e, n)
              : (t = n).appendChild(e),
            null != (n = n._reactRootContainer) ||
              null !== t.onclick ||
              (t.onclick = ea)));
    else if (4 !== r && null !== (e = e.child))
      for (us(e, t, n), e = e.sibling; null !== e;)
        (us(e, t, n), (e = e.sibling));
  }
  function cs(e, t, n) {
    var r = e.tag;
    if (5 === r || 6 === r)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (4 !== r && null !== (e = e.child))
      for (cs(e, t, n), e = e.sibling; null !== e;)
        (cs(e, t, n), (e = e.sibling));
  }
  var ds = null,
    fs = !1;
  function ps(e, t, n) {
    for (n = n.child; null !== n;) (hs(e, t, n), (n = n.sibling));
  }
  function hs(e, t, n) {
    if (ot && "function" == typeof ot.onCommitFiberUnmount)
      try {
        ot.onCommitFiberUnmount(lt, n);
      } catch (i) {}
    switch (n.tag) {
      case 5:
        Yi || es(n, t);
      case 6:
        var r = ds,
          a = fs;
        ((ds = null),
          ps(e, t, n),
          (fs = a),
          null !== (ds = r) &&
            (fs
              ? ((e = ds),
                (n = n.stateNode),
                8 === e.nodeType
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : ds.removeChild(n.stateNode)));
        break;
      case 18:
        null !== ds &&
          (fs
            ? ((e = ds),
              (n = n.stateNode),
              8 === e.nodeType
                ? ua(e.parentNode, n)
                : 1 === e.nodeType && ua(e, n),
              Vt(e))
            : ua(ds, n.stateNode));
        break;
      case 4:
        ((r = ds),
          (a = fs),
          (ds = n.stateNode.containerInfo),
          (fs = !0),
          ps(e, t, n),
          (ds = r),
          (fs = a));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Yi &&
          null !== (r = n.updateQueue) &&
          null !== (r = r.lastEffect)
        ) {
          a = r = r.next;
          do {
            var l = a,
              o = l.destroy;
            ((l = l.tag),
              void 0 !== o && (2 & l || 4 & l) && ts(n, t, o),
              (a = a.next));
          } while (a !== r);
        }
        ps(e, t, n);
        break;
      case 1:
        if (
          !Yi &&
          (es(n, t),
          "function" == typeof (r = n.stateNode).componentWillUnmount)
        )
          try {
            ((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount());
          } catch (i) {
            Cu(n, t, i);
          }
        ps(e, t, n);
        break;
      case 21:
        ps(e, t, n);
        break;
      case 22:
        1 & n.mode
          ? ((Yi = (r = Yi) || null !== n.memoizedState), ps(e, t, n), (Yi = r))
          : ps(e, t, n);
        break;
      default:
        ps(e, t, n);
    }
  }
  function ms(e) {
    var t = e.updateQueue;
    if (null !== t) {
      e.updateQueue = null;
      var n = e.stateNode;
      (null === n && (n = e.stateNode = new Zi()),
        t.forEach(function (t) {
          var r = Lu.bind(null, e, t);
          n.has(t) || (n.add(t), t.then(r, r));
        }));
    }
  }
  function gs(e, t) {
    var r = t.deletions;
    if (null !== r)
      for (var a = 0; a < r.length; a++) {
        var l = r[a];
        try {
          var o = e,
            i = t,
            s = i;
          e: for (; null !== s;) {
            switch (s.tag) {
              case 5:
                ((ds = s.stateNode), (fs = !1));
                break e;
              case 3:
              case 4:
                ((ds = s.stateNode.containerInfo), (fs = !0));
                break e;
            }
            s = s.return;
          }
          if (null === ds) throw Error(n(160));
          (hs(o, i, l), (ds = null), (fs = !1));
          var u = l.alternate;
          (null !== u && (u.return = null), (l.return = null));
        } catch (c) {
          Cu(l, t, c);
        }
      }
    if (12854 & t.subtreeFlags)
      for (t = t.child; null !== t;) (vs(t, e), (t = t.sibling));
  }
  function vs(e, t) {
    var r = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((gs(t, e), ys(e), 4 & a)) {
          try {
            (rs(3, e, e.return), as(3, e));
          } catch (v) {
            Cu(e, e.return, v);
          }
          try {
            rs(5, e, e.return);
          } catch (v) {
            Cu(e, e.return, v);
          }
        }
        break;
      case 1:
        (gs(t, e), ys(e), 512 & a && null !== r && es(r, r.return));
        break;
      case 5:
        if (
          (gs(t, e),
          ys(e),
          512 & a && null !== r && es(r, r.return),
          32 & e.flags)
        ) {
          var l = e.stateNode;
          try {
            pe(l, "");
          } catch (v) {
            Cu(e, e.return, v);
          }
        }
        if (4 & a && null != (l = e.stateNode)) {
          var o = e.memoizedProps,
            i = null !== r ? r.memoizedProps : o,
            s = e.type,
            u = e.updateQueue;
          if (((e.updateQueue = null), null !== u))
            try {
              ("input" === s && "radio" === o.type && null != o.name && Y(l, o),
                ke(s, i));
              var c = ke(s, o);
              for (i = 0; i < u.length; i += 2) {
                var d = u[i],
                  f = u[i + 1];
                "style" === d
                  ? ve(l, f)
                  : "dangerouslySetInnerHTML" === d
                    ? fe(l, f)
                    : "children" === d
                      ? pe(l, f)
                      : g(l, d, f, c);
              }
              switch (s) {
                case "input":
                  Z(l, o);
                  break;
                case "textarea":
                  oe(l, o);
                  break;
                case "select":
                  var p = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var h = o.value;
                  null != h
                    ? re(l, !!o.multiple, h, !1)
                    : p !== !!o.multiple &&
                      (null != o.defaultValue
                        ? re(l, !!o.multiple, o.defaultValue, !0)
                        : re(l, !!o.multiple, o.multiple ? [] : "", !1));
              }
              l[ha] = o;
            } catch (v) {
              Cu(e, e.return, v);
            }
        }
        break;
      case 6:
        if ((gs(t, e), ys(e), 4 & a)) {
          if (null === e.stateNode) throw Error(n(162));
          ((l = e.stateNode), (o = e.memoizedProps));
          try {
            l.nodeValue = o;
          } catch (v) {
            Cu(e, e.return, v);
          }
        }
        break;
      case 3:
        if (
          (gs(t, e), ys(e), 4 & a && null !== r && r.memoizedState.isDehydrated)
        )
          try {
            Vt(t.containerInfo);
          } catch (v) {
            Cu(e, e.return, v);
          }
        break;
      case 4:
      default:
        (gs(t, e), ys(e));
        break;
      case 13:
        (gs(t, e),
          ys(e),
          8192 & (l = e.child).flags &&
            ((o = null !== l.memoizedState),
            (l.stateNode.isHidden = o),
            !o ||
              (null !== l.alternate && null !== l.alternate.memoizedState) ||
              ($s = Ze())),
          4 & a && ms(e));
        break;
      case 22:
        if (
          ((d = null !== r && null !== r.memoizedState),
          1 & e.mode ? ((Yi = (c = Yi) || d), gs(t, e), (Yi = c)) : gs(t, e),
          ys(e),
          8192 & a)
        ) {
          if (
            ((c = null !== e.memoizedState),
            (e.stateNode.isHidden = c) && !d && 1 & e.mode)
          )
            for (Ji = e, d = e.child; null !== d;) {
              for (f = Ji = d; null !== Ji;) {
                switch (((h = (p = Ji).child), p.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    rs(4, p, p.return);
                    break;
                  case 1:
                    es(p, p.return);
                    var m = p.stateNode;
                    if ("function" == typeof m.componentWillUnmount) {
                      ((a = p), (r = p.return));
                      try {
                        ((t = a),
                          (m.props = t.memoizedProps),
                          (m.state = t.memoizedState),
                          m.componentWillUnmount());
                      } catch (v) {
                        Cu(a, r, v);
                      }
                    }
                    break;
                  case 5:
                    es(p, p.return);
                    break;
                  case 22:
                    if (null !== p.memoizedState) {
                      ws(f);
                      continue;
                    }
                }
                null !== h ? ((h.return = p), (Ji = h)) : ws(f);
              }
              d = d.sibling;
            }
          e: for (d = null, f = e; ;) {
            if (5 === f.tag) {
              if (null === d) {
                d = f;
                try {
                  ((l = f.stateNode),
                    c
                      ? "function" == typeof (o = l.style).setProperty
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none")
                      : ((s = f.stateNode),
                        (i =
                          null != (u = f.memoizedProps.style) &&
                          u.hasOwnProperty("display")
                            ? u.display
                            : null),
                        (s.style.display = ge("display", i))));
                } catch (v) {
                  Cu(e, e.return, v);
                }
              }
            } else if (6 === f.tag) {
              if (null === d)
                try {
                  f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                } catch (v) {
                  Cu(e, e.return, v);
                }
            } else if (
              ((22 !== f.tag && 23 !== f.tag) ||
                null === f.memoizedState ||
                f === e) &&
              null !== f.child
            ) {
              ((f.child.return = f), (f = f.child));
              continue;
            }
            if (f === e) break e;
            for (; null === f.sibling;) {
              if (null === f.return || f.return === e) break e;
              (d === f && (d = null), (f = f.return));
            }
            (d === f && (d = null),
              (f.sibling.return = f.return),
              (f = f.sibling));
          }
        }
        break;
      case 19:
        (gs(t, e), ys(e), 4 & a && ms(e));
      case 21:
    }
  }
  function ys(e) {
    var t = e.flags;
    if (2 & t) {
      try {
        e: {
          for (var r = e.return; null !== r;) {
            if (is(r)) {
              var a = r;
              break e;
            }
            r = r.return;
          }
          throw Error(n(160));
        }
        switch (a.tag) {
          case 5:
            var l = a.stateNode;
            (32 & a.flags && (pe(l, ""), (a.flags &= -33)), cs(e, ss(e), l));
            break;
          case 3:
          case 4:
            var o = a.stateNode.containerInfo;
            us(e, ss(e), o);
            break;
          default:
            throw Error(n(161));
        }
      } catch (i) {
        Cu(e, e.return, i);
      }
      e.flags &= -3;
    }
    4096 & t && (e.flags &= -4097);
  }
  function bs(e, t, n) {
    ((Ji = e), ks(e));
  }
  function ks(e, t, n) {
    for (var r = !!(1 & e.mode); null !== Ji;) {
      var a = Ji,
        l = a.child;
      if (22 === a.tag && r) {
        var o = null !== a.memoizedState || Gi;
        if (!o) {
          var i = a.alternate,
            s = (null !== i && null !== i.memoizedState) || Yi;
          i = Gi;
          var u = Yi;
          if (((Gi = o), (Yi = s) && !u))
            for (Ji = a; null !== Ji;)
              ((s = (o = Ji).child),
                22 === o.tag && null !== o.memoizedState
                  ? _s(a)
                  : null !== s
                    ? ((s.return = o), (Ji = s))
                    : _s(a));
          for (; null !== l;) ((Ji = l), ks(l), (l = l.sibling));
          ((Ji = a), (Gi = i), (Yi = u));
        }
        xs(e);
      } else
        8772 & a.subtreeFlags && null !== l
          ? ((l.return = a), (Ji = l))
          : xs(e);
    }
  }
  function xs(e) {
    for (; null !== Ji;) {
      var t = Ji;
      if (8772 & t.flags) {
        var r = t.alternate;
        try {
          if (8772 & t.flags)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Yi || as(5, t);
                break;
              case 1:
                var a = t.stateNode;
                if (4 & t.flags && !Yi)
                  if (null === r) a.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : ri(t.type, r.memoizedProps);
                    a.componentDidUpdate(
                      l,
                      r.memoizedState,
                      a.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var o = t.updateQueue;
                null !== o && Wl(t, o, a);
                break;
              case 3:
                var i = t.updateQueue;
                if (null !== i) {
                  if (((r = null), null !== t.child))
                    switch (t.child.tag) {
                      case 5:
                      case 1:
                        r = t.child.stateNode;
                    }
                  Wl(t, i, r);
                }
                break;
              case 5:
                var s = t.stateNode;
                if (null === r && 4 & t.flags) {
                  r = s;
                  var u = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      u.autoFocus && r.focus();
                      break;
                    case "img":
                      u.src && (r.src = u.src);
                  }
                }
                break;
              case 6:
              case 4:
              case 12:
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              case 13:
                if (null === t.memoizedState) {
                  var c = t.alternate;
                  if (null !== c) {
                    var d = c.memoizedState;
                    if (null !== d) {
                      var f = d.dehydrated;
                      null !== f && Vt(f);
                    }
                  }
                }
                break;
              default:
                throw Error(n(163));
            }
          Yi || (512 & t.flags && ls(t));
        } catch (p) {
          Cu(t, t.return, p);
        }
      }
      if (t === e) {
        Ji = null;
        break;
      }
      if (null !== (r = t.sibling)) {
        ((r.return = t.return), (Ji = r));
        break;
      }
      Ji = t.return;
    }
  }
  function ws(e) {
    for (; null !== Ji;) {
      var t = Ji;
      if (t === e) {
        Ji = null;
        break;
      }
      var n = t.sibling;
      if (null !== n) {
        ((n.return = t.return), (Ji = n));
        break;
      }
      Ji = t.return;
    }
  }
  function _s(e) {
    for (; null !== Ji;) {
      var t = Ji;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              as(4, t);
            } catch (s) {
              Cu(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if ("function" == typeof r.componentDidMount) {
              var a = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                Cu(t, a, s);
              }
            }
            var l = t.return;
            try {
              ls(t);
            } catch (s) {
              Cu(t, l, s);
            }
            break;
          case 5:
            var o = t.return;
            try {
              ls(t);
            } catch (s) {
              Cu(t, o, s);
            }
        }
      } catch (s) {
        Cu(t, t.return, s);
      }
      if (t === e) {
        Ji = null;
        break;
      }
      var i = t.sibling;
      if (null !== i) {
        ((i.return = t.return), (Ji = i));
        break;
      }
      Ji = t.return;
    }
  }
  var Ss,
    Cs = Math.ceil,
    js = v.ReactCurrentDispatcher,
    Ns = v.ReactCurrentOwner,
    Es = v.ReactCurrentBatchConfig,
    Ls = 0,
    Ts = null,
    Ps = null,
    Rs = 0,
    Ms = 0,
    zs = Ca(0),
    Os = 0,
    Is = null,
    Fs = 0,
    Ds = 0,
    Us = 0,
    Bs = null,
    As = null,
    $s = 0,
    Vs = 1 / 0,
    Ws = null,
    Hs = !1,
    Qs = null,
    qs = null,
    Ks = !1,
    Xs = null,
    Gs = 0,
    Ys = 0,
    Zs = null,
    Js = -1,
    eu = 0;
  function tu() {
    return 6 & Ls ? Ze() : -1 !== Js ? Js : (Js = Ze());
  }
  function nu(e) {
    return 1 & e.mode
      ? 2 & Ls && 0 !== Rs
        ? Rs & -Rs
        : null !== gl.transition
          ? (0 === eu && (eu = gt()), eu)
          : 0 !== (e = kt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type))
      : 1;
  }
  function ru(e, t, r, a) {
    if (50 < Ys) throw ((Ys = 0), (Zs = null), Error(n(185)));
    (yt(e, r, a),
      (2 & Ls && e === Ts) ||
        (e === Ts && (!(2 & Ls) && (Ds |= r), 4 === Os && su(e, Rs)),
        au(e, a),
        1 === r &&
          0 === Ls &&
          !(1 & t.mode) &&
          ((Vs = Ze() + 500), Ba && Va())));
  }
  function au(e, t) {
    var n = e.callbackNode;
    !(function (e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          a = e.expirationTimes,
          l = e.pendingLanes;
        0 < l;
      ) {
        var o = 31 - it(l),
          i = 1 << o,
          s = a[o];
        (-1 === s
          ? (i & n && !(i & r)) || (a[o] = ht(i, t))
          : s <= t && (e.expiredLanes |= i),
          (l &= ~i));
      }
    })(e, t);
    var r = pt(e, e === Ts ? Rs : 0);
    if (0 === r)
      (null !== n && Xe(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((null != n && Xe(n), 1 === t))
        (0 === e.tag
          ? (function (e) {
              ((Ba = !0), $a(e));
            })(uu.bind(null, e))
          : $a(uu.bind(null, e)),
          ia(function () {
            !(6 & Ls) && Va();
          }),
          (n = null));
      else {
        switch (xt(r)) {
          case 1:
            n = et;
            break;
          case 4:
            n = tt;
            break;
          case 16:
          default:
            n = nt;
            break;
          case 536870912:
            n = at;
        }
        n = Tu(n, lu.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function lu(e, t) {
    if (((Js = -1), (eu = 0), 6 & Ls)) throw Error(n(327));
    var r = e.callbackNode;
    if (_u() && e.callbackNode !== r) return null;
    var a = pt(e, e === Ts ? Rs : 0);
    if (0 === a) return null;
    if (30 & a || a & e.expiredLanes || t) t = vu(e, a);
    else {
      t = a;
      var l = Ls;
      Ls |= 2;
      var o = mu();
      for (
        (Ts === e && Rs === t) || ((Ws = null), (Vs = Ze() + 500), pu(e, t));
        ;
      )
        try {
          bu();
          break;
        } catch (s) {
          hu(e, s);
        }
      (Nl(),
        (js.current = o),
        (Ls = l),
        null !== Ps ? (t = 0) : ((Ts = null), (Rs = 0), (t = Os)));
    }
    if (0 !== t) {
      if ((2 === t && 0 !== (l = mt(e)) && ((a = l), (t = ou(e, l))), 1 === t))
        throw ((r = Is), pu(e, 0), su(e, a), au(e, Ze()), r);
      if (6 === t) su(e, a);
      else {
        if (
          ((l = e.current.alternate),
          !(
            30 & a ||
            (function (e) {
              for (var t = e; ;) {
                if (16384 & t.flags) {
                  var n = t.updateQueue;
                  if (null !== n && null !== (n = n.stores))
                    for (var r = 0; r < n.length; r++) {
                      var a = n[r],
                        l = a.getSnapshot;
                      a = a.value;
                      try {
                        if (!sr(l(), a)) return !1;
                      } catch (i) {
                        return !1;
                      }
                    }
                }
                if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                  ((n.return = t), (t = n));
                else {
                  if (t === e) break;
                  for (; null === t.sibling;) {
                    if (null === t.return || t.return === e) return !0;
                    t = t.return;
                  }
                  ((t.sibling.return = t.return), (t = t.sibling));
                }
              }
              return !0;
            })(l) ||
            ((t = vu(e, a)),
            2 === t && ((o = mt(e)), 0 !== o && ((a = o), (t = ou(e, o)))),
            1 !== t)
          ))
        )
          throw ((r = Is), pu(e, 0), su(e, a), au(e, Ze()), r);
        switch (((e.finishedWork = l), (e.finishedLanes = a), t)) {
          case 0:
          case 1:
            throw Error(n(345));
          case 2:
          case 5:
            wu(e, As, Ws);
            break;
          case 3:
            if (
              (su(e, a), (130023424 & a) === a && 10 < (t = $s + 500 - Ze()))
            ) {
              if (0 !== pt(e, 0)) break;
              if (((l = e.suspendedLanes) & a) !== a) {
                (tu(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = aa(wu.bind(null, e, As, Ws), t);
              break;
            }
            wu(e, As, Ws);
            break;
          case 4:
            if ((su(e, a), (4194240 & a) === a)) break;
            for (t = e.eventTimes, l = -1; 0 < a;) {
              var i = 31 - it(a);
              ((o = 1 << i), (i = t[i]) > l && (l = i), (a &= ~o));
            }
            if (
              ((a = l),
              10 <
                (a =
                  (120 > (a = Ze() - a)
                    ? 120
                    : 480 > a
                      ? 480
                      : 1080 > a
                        ? 1080
                        : 1920 > a
                          ? 1920
                          : 3e3 > a
                            ? 3e3
                            : 4320 > a
                              ? 4320
                              : 1960 * Cs(a / 1960)) - a))
            ) {
              e.timeoutHandle = aa(wu.bind(null, e, As, Ws), a);
              break;
            }
            wu(e, As, Ws);
            break;
          default:
            throw Error(n(329));
        }
      }
    }
    return (au(e, Ze()), e.callbackNode === r ? lu.bind(null, e) : null);
  }
  function ou(e, t) {
    var n = Bs;
    return (
      e.current.memoizedState.isDehydrated && (pu(e, t).flags |= 256),
      2 !== (e = vu(e, t)) && ((t = As), (As = n), null !== t && iu(t)),
      e
    );
  }
  function iu(e) {
    null === As ? (As = e) : As.push.apply(As, e);
  }
  function su(e, t) {
    for (
      t &= ~Us,
        t &= ~Ds,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - it(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function uu(e) {
    if (6 & Ls) throw Error(n(327));
    _u();
    var t = pt(e, 0);
    if (!(1 & t)) return (au(e, Ze()), null);
    var r = vu(e, t);
    if (0 !== e.tag && 2 === r) {
      var a = mt(e);
      0 !== a && ((t = a), (r = ou(e, a)));
    }
    if (1 === r) throw ((r = Is), pu(e, 0), su(e, t), au(e, Ze()), r);
    if (6 === r) throw Error(n(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      wu(e, As, Ws),
      au(e, Ze()),
      null
    );
  }
  function cu(e, t) {
    var n = Ls;
    Ls |= 1;
    try {
      return e(t);
    } finally {
      0 === (Ls = n) && ((Vs = Ze() + 500), Ba && Va());
    }
  }
  function du(e) {
    null !== Xs && 0 === Xs.tag && !(6 & Ls) && _u();
    var t = Ls;
    Ls |= 1;
    var n = Es.transition,
      r = kt;
    try {
      if (((Es.transition = null), (kt = 1), e)) return e();
    } finally {
      ((kt = r), (Es.transition = n), !(6 & (Ls = t)) && Va());
    }
  }
  function fu() {
    ((Ms = zs.current), ja(zs));
  }
  function pu(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((-1 !== n && ((e.timeoutHandle = -1), la(n)), null !== Ps))
      for (n = Ps.return; null !== n;) {
        var r = n;
        switch ((nl(r), r.tag)) {
          case 1:
            null != (r = r.type.childContextTypes) && za();
            break;
          case 3:
            (Yl(), ja(Ta), ja(La), ro());
            break;
          case 5:
            Jl(r);
            break;
          case 4:
            Yl();
            break;
          case 13:
          case 19:
            ja(eo);
            break;
          case 10:
            El(r.type._context);
            break;
          case 22:
          case 23:
            fu();
        }
        n = n.return;
      }
    if (
      ((Ts = e),
      (Ps = e = zu(e.current, null)),
      (Rs = Ms = t),
      (Os = 0),
      (Is = null),
      (Us = Ds = Fs = 0),
      (As = Bs = null),
      null !== Rl)
    ) {
      for (t = 0; t < Rl.length; t++)
        if (null !== (r = (n = Rl[t]).interleaved)) {
          n.interleaved = null;
          var a = r.next,
            l = n.pending;
          if (null !== l) {
            var o = l.next;
            ((l.next = a), (r.next = o));
          }
          n.pending = r;
        }
      Rl = null;
    }
    return e;
  }
  function hu(e, t) {
    for (;;) {
      var r = Ps;
      try {
        if ((Nl(), (ao.current = Jo), co)) {
          for (var a = io.memoizedState; null !== a;) {
            var l = a.queue;
            (null !== l && (l.pending = null), (a = a.next));
          }
          co = !1;
        }
        if (
          ((oo = 0),
          (uo = so = io = null),
          (fo = !1),
          (po = 0),
          (Ns.current = null),
          null === r || null === r.return)
        ) {
          ((Os = 1), (Is = t), (Ps = null));
          break;
        }
        e: {
          var o = e,
            i = r.return,
            s = r,
            u = t;
          if (
            ((t = Rs),
            (s.flags |= 32768),
            null !== u && "object" == typeof u && "function" == typeof u.then)
          ) {
            var c = u,
              d = s,
              f = d.tag;
            if (!(1 & d.mode || (0 !== f && 11 !== f && 15 !== f))) {
              var p = d.alternate;
              p
                ? ((d.updateQueue = p.updateQueue),
                  (d.memoizedState = p.memoizedState),
                  (d.lanes = p.lanes))
                : ((d.updateQueue = null), (d.memoizedState = null));
            }
            var h = vi(i);
            if (null !== h) {
              ((h.flags &= -257),
                yi(h, i, s, 0, t),
                1 & h.mode && gi(o, c, t),
                (u = c));
              var m = (t = h).updateQueue;
              if (null === m) {
                var g = new Set();
                (g.add(u), (t.updateQueue = g));
              } else m.add(u);
              break e;
            }
            if (!(1 & t)) {
              (gi(o, c, t), gu());
              break e;
            }
            u = Error(n(426));
          } else if (ll && 1 & s.mode) {
            var v = vi(i);
            if (null !== v) {
              (!(65536 & v.flags) && (v.flags |= 256),
                yi(v, i, s, 0, t),
                ml(ci(u, s)));
              break e;
            }
          }
          ((o = u = ci(u, s)),
            4 !== Os && (Os = 2),
            null === Bs ? (Bs = [o]) : Bs.push(o),
            (o = i));
          do {
            switch (o.tag) {
              case 3:
                ((o.flags |= 65536),
                  (t &= -t),
                  (o.lanes |= t),
                  $l(o, hi(0, u, t)));
                break e;
              case 1:
                s = u;
                var y = o.type,
                  b = o.stateNode;
                if (!(
                  128 & o.flags ||
                  ("function" != typeof y.getDerivedStateFromError &&
                    (null === b ||
                      "function" != typeof b.componentDidCatch ||
                      (null !== qs && qs.has(b))))
                )) {
                  ((o.flags |= 65536),
                    (t &= -t),
                    (o.lanes |= t),
                    $l(o, mi(o, s, t)));
                  break e;
                }
            }
            o = o.return;
          } while (null !== o);
        }
        xu(r);
      } catch (k) {
        ((t = k), Ps === r && null !== r && (Ps = r = r.return));
        continue;
      }
      break;
    }
  }
  function mu() {
    var e = js.current;
    return ((js.current = Jo), null === e ? Jo : e);
  }
  function gu() {
    ((0 !== Os && 3 !== Os && 2 !== Os) || (Os = 4),
      null === Ts || (!(268435455 & Fs) && !(268435455 & Ds)) || su(Ts, Rs));
  }
  function vu(e, t) {
    var r = Ls;
    Ls |= 2;
    var a = mu();
    for ((Ts === e && Rs === t) || ((Ws = null), pu(e, t)); ;)
      try {
        yu();
        break;
      } catch (l) {
        hu(e, l);
      }
    if ((Nl(), (Ls = r), (js.current = a), null !== Ps)) throw Error(n(261));
    return ((Ts = null), (Rs = 0), Os);
  }
  function yu() {
    for (; null !== Ps;) ku(Ps);
  }
  function bu() {
    for (; null !== Ps && !Ge();) ku(Ps);
  }
  function ku(e) {
    var t = Ss(e.alternate, e, Ms);
    ((e.memoizedProps = e.pendingProps),
      null === t ? xu(e) : (Ps = t),
      (Ns.current = null));
  }
  function xu(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), 32768 & t.flags)) {
        if (null !== (n = Xi(n, t))) return ((n.flags &= 32767), void (Ps = n));
        if (null === e) return ((Os = 6), void (Ps = null));
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      } else if (null !== (n = Ki(n, t, Ms))) return void (Ps = n);
      if (null !== (t = t.sibling)) return void (Ps = t);
      Ps = t = e;
    } while (null !== t);
    0 === Os && (Os = 5);
  }
  function wu(e, t, r) {
    var a = kt,
      l = Es.transition;
    try {
      ((Es.transition = null),
        (kt = 1),
        (function (e, t, r, a) {
          do {
            _u();
          } while (null !== Xs);
          if (6 & Ls) throw Error(n(327));
          r = e.finishedWork;
          var l = e.finishedLanes;
          if (null === r) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
            throw Error(n(177));
          ((e.callbackNode = null), (e.callbackPriority = 0));
          var o = r.lanes | r.childLanes;
          if (
            ((function (e, t) {
              var n = e.pendingLanes & ~t;
              ((e.pendingLanes = t),
                (e.suspendedLanes = 0),
                (e.pingedLanes = 0),
                (e.expiredLanes &= t),
                (e.mutableReadLanes &= t),
                (e.entangledLanes &= t),
                (t = e.entanglements));
              var r = e.eventTimes;
              for (e = e.expirationTimes; 0 < n;) {
                var a = 31 - it(n),
                  l = 1 << a;
                ((t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l));
              }
            })(e, o),
            e === Ts && ((Ps = Ts = null), (Rs = 0)),
            (!(2064 & r.subtreeFlags) && !(2064 & r.flags)) ||
              Ks ||
              ((Ks = !0),
              Tu(nt, function () {
                return (_u(), null);
              })),
            (o = !!(15990 & r.flags)),
            !!(15990 & r.subtreeFlags) || o)
          ) {
            ((o = Es.transition), (Es.transition = null));
            var i = kt;
            kt = 1;
            var s = Ls;
            ((Ls |= 4),
              (Ns.current = null),
              (function (e, t) {
                if (((ta = Ht), hr((e = pr())))) {
                  if ("selectionStart" in e)
                    var r = { start: e.selectionStart, end: e.selectionEnd };
                  else
                    e: {
                      var a =
                        (r = ((r = e.ownerDocument) && r.defaultView) || window)
                          .getSelection && r.getSelection();
                      if (a && 0 !== a.rangeCount) {
                        r = a.anchorNode;
                        var l = a.anchorOffset,
                          o = a.focusNode;
                        a = a.focusOffset;
                        try {
                          (r.nodeType, o.nodeType);
                        } catch (x) {
                          r = null;
                          break e;
                        }
                        var i = 0,
                          s = -1,
                          u = -1,
                          c = 0,
                          d = 0,
                          f = e,
                          p = null;
                        t: for (;;) {
                          for (
                            var h;
                            f !== r ||
                              (0 !== l && 3 !== f.nodeType) ||
                              (s = i + l),
                              f !== o ||
                                (0 !== a && 3 !== f.nodeType) ||
                                (u = i + a),
                              3 === f.nodeType && (i += f.nodeValue.length),
                              null !== (h = f.firstChild);
                          )
                            ((p = f), (f = h));
                          for (;;) {
                            if (f === e) break t;
                            if (
                              (p === r && ++c === l && (s = i),
                              p === o && ++d === a && (u = i),
                              null !== (h = f.nextSibling))
                            )
                              break;
                            p = (f = p).parentNode;
                          }
                          f = h;
                        }
                        r = -1 === s || -1 === u ? null : { start: s, end: u };
                      } else r = null;
                    }
                  r = r || { start: 0, end: 0 };
                } else r = null;
                for (
                  na = { focusedElem: e, selectionRange: r }, Ht = !1, Ji = t;
                  null !== Ji;
                )
                  if (
                    ((e = (t = Ji).child), 1028 & t.subtreeFlags && null !== e)
                  )
                    ((e.return = t), (Ji = e));
                  else
                    for (; null !== Ji;) {
                      t = Ji;
                      try {
                        var m = t.alternate;
                        if (1024 & t.flags)
                          switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                              break;
                            case 1:
                              if (null !== m) {
                                var g = m.memoizedProps,
                                  v = m.memoizedState,
                                  y = t.stateNode,
                                  b = y.getSnapshotBeforeUpdate(
                                    t.elementType === t.type
                                      ? g
                                      : ri(t.type, g),
                                    v,
                                  );
                                y.__reactInternalSnapshotBeforeUpdate = b;
                              }
                              break;
                            case 3:
                              var k = t.stateNode.containerInfo;
                              1 === k.nodeType
                                ? (k.textContent = "")
                                : 9 === k.nodeType &&
                                  k.documentElement &&
                                  k.removeChild(k.documentElement);
                              break;
                            default:
                              throw Error(n(163));
                          }
                      } catch (x) {
                        Cu(t, t.return, x);
                      }
                      if (null !== (e = t.sibling)) {
                        ((e.return = t.return), (Ji = e));
                        break;
                      }
                      Ji = t.return;
                    }
                ((m = ns), (ns = !1));
              })(e, r),
              vs(r, e),
              mr(na),
              (Ht = !!ta),
              (na = ta = null),
              (e.current = r),
              bs(r),
              Ye(),
              (Ls = s),
              (kt = i),
              (Es.transition = o));
          } else e.current = r;
          if (
            (Ks && ((Ks = !1), (Xs = e), (Gs = l)),
            (o = e.pendingLanes),
            0 === o && (qs = null),
            (function (e) {
              if (ot && "function" == typeof ot.onCommitFiberRoot)
                try {
                  ot.onCommitFiberRoot(
                    lt,
                    e,
                    void 0,
                    !(128 & ~e.current.flags),
                  );
                } catch (t) {}
            })(r.stateNode),
            au(e, Ze()),
            null !== t)
          )
            for (a = e.onRecoverableError, r = 0; r < t.length; r++)
              ((l = t[r]),
                a(l.value, { componentStack: l.stack, digest: l.digest }));
          if (Hs) throw ((Hs = !1), (e = Qs), (Qs = null), e);
          (!!(1 & Gs) && 0 !== e.tag && _u(),
            (o = e.pendingLanes),
            1 & o ? (e === Zs ? Ys++ : ((Ys = 0), (Zs = e))) : (Ys = 0),
            Va());
        })(e, t, r, a));
    } finally {
      ((Es.transition = l), (kt = a));
    }
    return null;
  }
  function _u() {
    if (null !== Xs) {
      var e = xt(Gs),
        t = Es.transition,
        r = kt;
      try {
        if (((Es.transition = null), (kt = 16 > e ? 16 : e), null === Xs))
          var a = !1;
        else {
          if (((e = Xs), (Xs = null), (Gs = 0), 6 & Ls)) throw Error(n(331));
          var l = Ls;
          for (Ls |= 4, Ji = e.current; null !== Ji;) {
            var o = Ji,
              i = o.child;
            if (16 & Ji.flags) {
              var s = o.deletions;
              if (null !== s) {
                for (var u = 0; u < s.length; u++) {
                  var c = s[u];
                  for (Ji = c; null !== Ji;) {
                    var d = Ji;
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        rs(8, d, o);
                    }
                    var f = d.child;
                    if (null !== f) ((f.return = d), (Ji = f));
                    else
                      for (; null !== Ji;) {
                        var p = (d = Ji).sibling,
                          h = d.return;
                        if ((os(d), d === c)) {
                          Ji = null;
                          break;
                        }
                        if (null !== p) {
                          ((p.return = h), (Ji = p));
                          break;
                        }
                        Ji = h;
                      }
                  }
                }
                var m = o.alternate;
                if (null !== m) {
                  var g = m.child;
                  if (null !== g) {
                    m.child = null;
                    do {
                      var v = g.sibling;
                      ((g.sibling = null), (g = v));
                    } while (null !== g);
                  }
                }
                Ji = o;
              }
            }
            if (2064 & o.subtreeFlags && null !== i) ((i.return = o), (Ji = i));
            else
              e: for (; null !== Ji;) {
                if (2048 & (o = Ji).flags)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rs(9, o, o.return);
                  }
                var y = o.sibling;
                if (null !== y) {
                  ((y.return = o.return), (Ji = y));
                  break e;
                }
                Ji = o.return;
              }
          }
          var b = e.current;
          for (Ji = b; null !== Ji;) {
            var k = (i = Ji).child;
            if (2064 & i.subtreeFlags && null !== k) ((k.return = i), (Ji = k));
            else
              e: for (i = b; null !== Ji;) {
                if (2048 & (s = Ji).flags)
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        as(9, s);
                    }
                  } catch (w) {
                    Cu(s, s.return, w);
                  }
                if (s === i) {
                  Ji = null;
                  break e;
                }
                var x = s.sibling;
                if (null !== x) {
                  ((x.return = s.return), (Ji = x));
                  break e;
                }
                Ji = s.return;
              }
          }
          if (
            ((Ls = l),
            Va(),
            ot && "function" == typeof ot.onPostCommitFiberRoot)
          )
            try {
              ot.onPostCommitFiberRoot(lt, e);
            } catch (w) {}
          a = !0;
        }
        return a;
      } finally {
        ((kt = r), (Es.transition = t));
      }
    }
    return !1;
  }
  function Su(e, t, n) {
    ((e = Bl(e, (t = hi(0, (t = ci(n, t)), 1)), 1)),
      (t = tu()),
      null !== e && (yt(e, 1, t), au(e, t)));
  }
  function Cu(e, t, n) {
    if (3 === e.tag) Su(e, e, n);
    else
      for (; null !== t;) {
        if (3 === t.tag) {
          Su(t, e, n);
          break;
        }
        if (1 === t.tag) {
          var r = t.stateNode;
          if (
            "function" == typeof t.type.getDerivedStateFromError ||
            ("function" == typeof r.componentDidCatch &&
              (null === qs || !qs.has(r)))
          ) {
            ((t = Bl(t, (e = mi(t, (e = ci(n, e)), 1)), 1)),
              (e = tu()),
              null !== t && (yt(t, 1, e), au(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function ju(e, t, n) {
    var r = e.pingCache;
    (null !== r && r.delete(t),
      (t = tu()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Ts === e &&
        (Rs & n) === n &&
        (4 === Os || (3 === Os && (130023424 & Rs) === Rs && 500 > Ze() - $s)
          ? pu(e, 0)
          : (Us |= n)),
      au(e, t));
  }
  function Nu(e, t) {
    0 === t &&
      (1 & e.mode
        ? ((t = dt), !(130023424 & (dt <<= 1)) && (dt = 4194304))
        : (t = 1));
    var n = tu();
    null !== (e = Ol(e, t)) && (yt(e, t, n), au(e, n));
  }
  function Eu(e) {
    var t = e.memoizedState,
      n = 0;
    (null !== t && (n = t.retryLane), Nu(e, n));
  }
  function Lu(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          l = e.memoizedState;
        null !== l && (r = l.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      default:
        throw Error(n(314));
    }
    (null !== a && a.delete(t), Nu(e, r));
  }
  function Tu(e, t) {
    return Ke(e, t);
  }
  function Pu(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Ru(e, t, n, r) {
    return new Pu(e, t, n, r);
  }
  function Mu(e) {
    return !(!(e = e.prototype) || !e.isReactComponent);
  }
  function zu(e, t) {
    var n = e.alternate;
    return (
      null === n
        ? (((n = Ru(e.tag, t, e.key, e.mode)).elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = 14680064 & e.flags),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Ou(e, t, r, a, l, o) {
    var i = 2;
    if (((a = e), "function" == typeof e)) Mu(e) && (i = 1);
    else if ("string" == typeof e) i = 5;
    else
      e: switch (e) {
        case k:
          return Iu(r.children, l, o, t);
        case x:
          ((i = 8), (l |= 8));
          break;
        case w:
          return (
            ((e = Ru(12, r, t, 2 | l)).elementType = w),
            (e.lanes = o),
            e
          );
        case j:
          return (((e = Ru(13, r, t, l)).elementType = j), (e.lanes = o), e);
        case N:
          return (((e = Ru(19, r, t, l)).elementType = N), (e.lanes = o), e);
        case T:
          return Fu(r, l, o, t);
        default:
          if ("object" == typeof e && null !== e)
            switch (e.$$typeof) {
              case _:
                i = 10;
                break e;
              case S:
                i = 9;
                break e;
              case C:
                i = 11;
                break e;
              case E:
                i = 14;
                break e;
              case L:
                ((i = 16), (a = null));
                break e;
            }
          throw Error(n(130, null == e ? e : typeof e, ""));
      }
    return (
      ((t = Ru(i, r, t, l)).elementType = e),
      (t.type = a),
      (t.lanes = o),
      t
    );
  }
  function Iu(e, t, n, r) {
    return (((e = Ru(7, e, r, t)).lanes = n), e);
  }
  function Fu(e, t, n, r) {
    return (
      ((e = Ru(22, e, r, t)).elementType = T),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Du(e, t, n) {
    return (((e = Ru(6, e, null, t)).lanes = n), e);
  }
  function Uu(e, t, n) {
    return (
      ((t = Ru(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Bu(e, t, n, r, a) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = vt(0)),
      (this.expirationTimes = vt(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = vt(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = a),
      (this.mutableSourceEagerHydrationData = null));
  }
  function Au(e, t, n, r, a, l, o, i, s) {
    return (
      (e = new Bu(e, t, n, i, s)),
      1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
      (l = Ru(3, null, null, t)),
      (e.current = l),
      (l.stateNode = e),
      (l.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Fl(l),
      e
    );
  }
  function $u(e) {
    if (!e) return Ea;
    e: {
      if (Ve((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(n(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ma(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (null !== t);
      throw Error(n(171));
    }
    if (1 === e.tag) {
      var r = e.type;
      if (Ma(r)) return Ia(e, r, t);
    }
    return t;
  }
  function Vu(e, t, n, r, a, l, o, i, s) {
    return (
      ((e = Au(n, r, !0, e, 0, l, 0, i, s)).context = $u(null)),
      (n = e.current),
      ((l = Ul((r = tu()), (a = nu(n)))).callback = null != t ? t : null),
      Bl(n, l, a),
      (e.current.lanes = a),
      yt(e, a, r),
      au(e, r),
      e
    );
  }
  function Wu(e, t, n, r) {
    var a = t.current,
      l = tu(),
      o = nu(a);
    return (
      (n = $u(n)),
      null === t.context ? (t.context = n) : (t.pendingContext = n),
      ((t = Ul(l, o)).payload = { element: e }),
      null !== (r = void 0 === r ? null : r) && (t.callback = r),
      null !== (e = Bl(a, t, o)) && (ru(e, a, o, l), Al(e, a, o)),
      o
    );
  }
  function Hu(e) {
    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
  }
  function Qu(e, t) {
    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
      var n = e.retryLane;
      e.retryLane = 0 !== n && n < t ? n : t;
    }
  }
  function qu(e, t) {
    (Qu(e, t), (e = e.alternate) && Qu(e, t));
  }
  Ss = function (e, t, r) {
    if (null !== e)
      if (e.memoizedProps !== t.pendingProps || Ta.current) ki = !0;
      else {
        if (!(e.lanes & r || 128 & t.flags))
          return (
            (ki = !1),
            (function (e, t, n) {
              switch (t.tag) {
                case 3:
                  (Ti(t), hl());
                  break;
                case 5:
                  Zl(t);
                  break;
                case 1:
                  Ma(t.type) && Fa(t);
                  break;
                case 4:
                  Gl(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  var r = t.type._context,
                    a = t.memoizedProps.value;
                  (Na(_l, r._currentValue), (r._currentValue = a));
                  break;
                case 13:
                  if (null !== (r = t.memoizedState))
                    return null !== r.dehydrated
                      ? (Na(eo, 1 & eo.current), (t.flags |= 128), null)
                      : n & t.child.childLanes
                        ? Di(e, t, n)
                        : (Na(eo, 1 & eo.current),
                          null !== (e = Hi(e, t, n)) ? e.sibling : null);
                  Na(eo, 1 & eo.current);
                  break;
                case 19:
                  if (((r = !!(n & t.childLanes)), 128 & e.flags)) {
                    if (r) return Vi(e, t, n);
                    t.flags |= 128;
                  }
                  if (
                    (null !== (a = t.memoizedState) &&
                      ((a.rendering = null),
                      (a.tail = null),
                      (a.lastEffect = null)),
                    Na(eo, eo.current),
                    r)
                  )
                    break;
                  return null;
                case 22:
                case 23:
                  return ((t.lanes = 0), Ci(e, t, n));
              }
              return Hi(e, t, n);
            })(e, t, r)
          );
        ki = !!(131072 & e.flags);
      }
    else ((ki = !1), ll && 1048576 & t.flags && el(t, qa, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var a = t.type;
        (Wi(e, t), (e = t.pendingProps));
        var l = Ra(t, La.current);
        (Tl(t, r), (l = vo(null, t, a, e, l, r)));
        var o = yo();
        return (
          (t.flags |= 1),
          "object" == typeof l &&
          null !== l &&
          "function" == typeof l.render &&
          void 0 === l.$$typeof
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ma(a) ? ((o = !0), Fa(t)) : (o = !1),
              (t.memoizedState =
                null !== l.state && void 0 !== l.state ? l.state : null),
              Fl(t),
              (l.updater = li),
              (t.stateNode = l),
              (l._reactInternals = t),
              ui(t, a, e, r),
              (t = Li(null, t, a, !0, o, r)))
            : ((t.tag = 0), ll && o && tl(t), xi(null, t, l, r), (t = t.child)),
          t
        );
      case 16:
        a = t.elementType;
        e: {
          switch (
            (Wi(e, t),
            (e = t.pendingProps),
            (a = (l = a._init)(a._payload)),
            (t.type = a),
            (l = t.tag =
              (function (e) {
                if ("function" == typeof e) return Mu(e) ? 1 : 0;
                if (null != e) {
                  if ((e = e.$$typeof) === C) return 11;
                  if (e === E) return 14;
                }
                return 2;
              })(a)),
            (e = ri(a, e)),
            l)
          ) {
            case 0:
              t = Ni(null, t, a, e, r);
              break e;
            case 1:
              t = Ei(null, t, a, e, r);
              break e;
            case 11:
              t = wi(null, t, a, e, r);
              break e;
            case 14:
              t = _i(null, t, a, ri(a.type, e), r);
              break e;
          }
          throw Error(n(306, a, ""));
        }
        return t;
      case 0:
        return (
          (a = t.type),
          (l = t.pendingProps),
          Ni(e, t, a, (l = t.elementType === a ? l : ri(a, l)), r)
        );
      case 1:
        return (
          (a = t.type),
          (l = t.pendingProps),
          Ei(e, t, a, (l = t.elementType === a ? l : ri(a, l)), r)
        );
      case 3:
        e: {
          if ((Ti(t), null === e)) throw Error(n(387));
          ((a = t.pendingProps),
            (l = (o = t.memoizedState).element),
            Dl(e, t),
            Vl(t, a, null, r));
          var i = t.memoizedState;
          if (((a = i.element), o.isDehydrated)) {
            if (
              ((o = {
                element: a,
                isDehydrated: !1,
                cache: i.cache,
                pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                transitions: i.transitions,
              }),
              (t.updateQueue.baseState = o),
              (t.memoizedState = o),
              256 & t.flags)
            ) {
              t = Pi(e, t, a, r, (l = ci(Error(n(423)), t)));
              break e;
            }
            if (a !== l) {
              t = Pi(e, t, a, r, (l = ci(Error(n(424)), t)));
              break e;
            }
            for (
              al = ca(t.stateNode.containerInfo.firstChild),
                rl = t,
                ll = !0,
                ol = null,
                r = wl(t, null, a, r),
                t.child = r;
              r;
            )
              ((r.flags = (-3 & r.flags) | 4096), (r = r.sibling));
          } else {
            if ((hl(), a === l)) {
              t = Hi(e, t, r);
              break e;
            }
            xi(e, t, a, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Zl(t),
          null === e && cl(t),
          (a = t.type),
          (l = t.pendingProps),
          (o = null !== e ? e.memoizedProps : null),
          (i = l.children),
          ra(a, l) ? (i = null) : null !== o && ra(a, o) && (t.flags |= 32),
          ji(e, t),
          xi(e, t, i, r),
          t.child
        );
      case 6:
        return (null === e && cl(t), null);
      case 13:
        return Di(e, t, r);
      case 4:
        return (
          Gl(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          null === e ? (t.child = xl(t, null, a, r)) : xi(e, t, a, r),
          t.child
        );
      case 11:
        return (
          (a = t.type),
          (l = t.pendingProps),
          wi(e, t, a, (l = t.elementType === a ? l : ri(a, l)), r)
        );
      case 7:
        return (xi(e, t, t.pendingProps, r), t.child);
      case 8:
      case 12:
        return (xi(e, t, t.pendingProps.children, r), t.child);
      case 10:
        e: {
          if (
            ((a = t.type._context),
            (l = t.pendingProps),
            (o = t.memoizedProps),
            (i = l.value),
            Na(_l, a._currentValue),
            (a._currentValue = i),
            null !== o)
          )
            if (sr(o.value, i)) {
              if (o.children === l.children && !Ta.current) {
                t = Hi(e, t, r);
                break e;
              }
            } else
              for (null !== (o = t.child) && (o.return = t); null !== o;) {
                var s = o.dependencies;
                if (null !== s) {
                  i = o.child;
                  for (var u = s.firstContext; null !== u;) {
                    if (u.context === a) {
                      if (1 === o.tag) {
                        (u = Ul(-1, r & -r)).tag = 2;
                        var c = o.updateQueue;
                        if (null !== c) {
                          var d = (c = c.shared).pending;
                          (null === d
                            ? (u.next = u)
                            : ((u.next = d.next), (d.next = u)),
                            (c.pending = u));
                        }
                      }
                      ((o.lanes |= r),
                        null !== (u = o.alternate) && (u.lanes |= r),
                        Ll(o.return, r, t),
                        (s.lanes |= r));
                      break;
                    }
                    u = u.next;
                  }
                } else if (10 === o.tag) i = o.type === t.type ? null : o.child;
                else if (18 === o.tag) {
                  if (null === (i = o.return)) throw Error(n(341));
                  ((i.lanes |= r),
                    null !== (s = i.alternate) && (s.lanes |= r),
                    Ll(i, r, t),
                    (i = o.sibling));
                } else i = o.child;
                if (null !== i) i.return = o;
                else
                  for (i = o; null !== i;) {
                    if (i === t) {
                      i = null;
                      break;
                    }
                    if (null !== (o = i.sibling)) {
                      ((o.return = i.return), (i = o));
                      break;
                    }
                    i = i.return;
                  }
                o = i;
              }
          (xi(e, t, l.children, r), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (a = t.pendingProps.children),
          Tl(t, r),
          (a = a((l = Pl(l)))),
          (t.flags |= 1),
          xi(e, t, a, r),
          t.child
        );
      case 14:
        return (
          (l = ri((a = t.type), t.pendingProps)),
          _i(e, t, a, (l = ri(a.type, l)), r)
        );
      case 15:
        return Si(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (a = t.type),
          (l = t.pendingProps),
          (l = t.elementType === a ? l : ri(a, l)),
          Wi(e, t),
          (t.tag = 1),
          Ma(a) ? ((e = !0), Fa(t)) : (e = !1),
          Tl(t, r),
          ii(t, a, l),
          ui(t, a, l, r),
          Li(null, t, a, !0, e, r)
        );
      case 19:
        return Vi(e, t, r);
      case 22:
        return Ci(e, t, r);
    }
    throw Error(n(156, t.tag));
  };
  var Ku =
    "function" == typeof reportError
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Xu(e) {
    this._internalRoot = e;
  }
  function Gu(e) {
    this._internalRoot = e;
  }
  function Yu(e) {
    return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
  }
  function Zu(e) {
    return !(
      !e ||
      (1 !== e.nodeType &&
        9 !== e.nodeType &&
        11 !== e.nodeType &&
        (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
    );
  }
  function Ju() {}
  function ec(e, t, n, r, a) {
    var l = n._reactRootContainer;
    if (l) {
      var o = l;
      if ("function" == typeof a) {
        var i = a;
        a = function () {
          var e = Hu(o);
          i.call(e);
        };
      }
      Wu(t, o, e, a);
    } else
      o = (function (e, t, n, r, a) {
        if (a) {
          if ("function" == typeof r) {
            var l = r;
            r = function () {
              var e = Hu(o);
              l.call(e);
            };
          }
          var o = Vu(t, r, e, 0, null, !1, 0, "", Ju);
          return (
            (e._reactRootContainer = o),
            (e[ma] = o.current),
            Vr(8 === e.nodeType ? e.parentNode : e),
            du(),
            o
          );
        }
        for (; (a = e.lastChild);) e.removeChild(a);
        if ("function" == typeof r) {
          var i = r;
          r = function () {
            var e = Hu(s);
            i.call(e);
          };
        }
        var s = Au(e, 0, !1, null, 0, !1, 0, "", Ju);
        return (
          (e._reactRootContainer = s),
          (e[ma] = s.current),
          Vr(8 === e.nodeType ? e.parentNode : e),
          du(function () {
            Wu(t, s, n, r);
          }),
          s
        );
      })(n, t, e, a, r);
    return Hu(o);
  }
  ((Gu.prototype.render = Xu.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (null === t) throw Error(n(409));
      Wu(e, t, null, null);
    }),
    (Gu.prototype.unmount = Xu.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (null !== e) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (du(function () {
            Wu(null, e, null, null);
          }),
            (t[ma] = null));
        }
      }),
    (Gu.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = Ct();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < zt.length && 0 !== t && t < zt[n].priority; n++);
        (zt.splice(n, 0, e), 0 === n && Dt(e));
      }
    }),
    (wt = function (e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var n = ft(t.pendingLanes);
            0 !== n &&
              (bt(t, 1 | n),
              au(t, Ze()),
              !(6 & Ls) && ((Vs = Ze() + 500), Va()));
          }
          break;
        case 13:
          (du(function () {
            var t = Ol(e, 1);
            if (null !== t) {
              var n = tu();
              ru(t, e, 1, n);
            }
          }),
            qu(e, 1));
      }
    }),
    (_t = function (e) {
      if (13 === e.tag) {
        var t = Ol(e, 134217728);
        if (null !== t) ru(t, e, 134217728, tu());
        qu(e, 134217728);
      }
    }),
    (St = function (e) {
      if (13 === e.tag) {
        var t = nu(e),
          n = Ol(e, t);
        if (null !== n) ru(n, e, t, tu());
        qu(e, t);
      }
    }),
    (Ct = function () {
      return kt;
    }),
    (jt = function (e, t) {
      var n = kt;
      try {
        return ((kt = e), t());
      } finally {
        kt = n;
      }
    }),
    (_e = function (e, t, r) {
      switch (t) {
        case "input":
          if ((Z(e, r), (t = r.name), "radio" === r.type && null != t)) {
            for (r = e; r.parentNode;) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var a = r[t];
              if (a !== e && a.form === e.form) {
                var l = wa(a);
                if (!l) throw Error(n(90));
                (Q(a), Z(a, l));
              }
            }
          }
          break;
        case "textarea":
          oe(e, r);
          break;
        case "select":
          null != (t = r.value) && re(e, !!r.multiple, t, !1);
      }
    }),
    (Le = cu),
    (Te = du));
  var tc = { usingClientEntryPoint: !1, Events: [ka, xa, wa, Ne, Ee, cu] },
    nc = {
      findFiberByHostInstance: ba,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    rc = {
      bundleType: nc.bundleType,
      version: nc.version,
      rendererPackageName: nc.rendererPackageName,
      rendererConfig: nc.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: v.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return null === (e = Qe(e)) ? null : e.stateNode;
      },
      findFiberByHostInstance: nc.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ac.isDisabled && ac.supportsFiber)
      try {
        ((lt = ac.inject(rc)), (ot = ac));
      } catch (de) {}
  }
  return (
    (G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
    (G.createPortal = function (e, t) {
      var r =
        2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
      if (!Yu(t)) throw Error(n(200));
      return (function (e, t, n) {
        var r =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
          $$typeof: b,
          key: null == r ? null : "" + r,
          children: e,
          containerInfo: t,
          implementation: n,
        };
      })(e, t, null, r);
    }),
    (G.createRoot = function (e, t) {
      if (!Yu(e)) throw Error(n(299));
      var r = !1,
        a = "",
        l = Ku;
      return (
        null != t &&
          (!0 === t.unstable_strictMode && (r = !0),
          void 0 !== t.identifierPrefix && (a = t.identifierPrefix),
          void 0 !== t.onRecoverableError && (l = t.onRecoverableError)),
        (t = Au(e, 1, !1, null, 0, r, 0, a, l)),
        (e[ma] = t.current),
        Vr(8 === e.nodeType ? e.parentNode : e),
        new Xu(t)
      );
    }),
    (G.findDOMNode = function (e) {
      if (null == e) return null;
      if (1 === e.nodeType) return e;
      var t = e._reactInternals;
      if (void 0 === t) {
        if ("function" == typeof e.render) throw Error(n(188));
        throw ((e = Object.keys(e).join(",")), Error(n(268, e)));
      }
      return (e = null === (e = Qe(t)) ? null : e.stateNode);
    }),
    (G.flushSync = function (e) {
      return du(e);
    }),
    (G.hydrate = function (e, t, r) {
      if (!Zu(t)) throw Error(n(200));
      return ec(null, e, t, !0, r);
    }),
    (G.hydrateRoot = function (e, t, r) {
      if (!Yu(e)) throw Error(n(405));
      var a = (null != r && r.hydratedSources) || null,
        l = !1,
        o = "",
        i = Ku;
      if (
        (null != r &&
          (!0 === r.unstable_strictMode && (l = !0),
          void 0 !== r.identifierPrefix && (o = r.identifierPrefix),
          void 0 !== r.onRecoverableError && (i = r.onRecoverableError)),
        (t = Vu(t, null, e, 1, null != r ? r : null, l, 0, o, i)),
        (e[ma] = t.current),
        Vr(e),
        a)
      )
        for (e = 0; e < a.length; e++)
          ((l = (l = (r = a[e])._getVersion)(r._source)),
            null == t.mutableSourceEagerHydrationData
              ? (t.mutableSourceEagerHydrationData = [r, l])
              : t.mutableSourceEagerHydrationData.push(r, l));
      return new Gu(t);
    }),
    (G.render = function (e, t, r) {
      if (!Zu(t)) throw Error(n(200));
      return ec(null, e, t, !1, r);
    }),
    (G.unmountComponentAtNode = function (e) {
      if (!Zu(e)) throw Error(n(40));
      return (
        !!e._reactRootContainer &&
        (du(function () {
          ec(null, null, e, !1, function () {
            ((e._reactRootContainer = null), (e[ma] = null));
          });
        }),
        !0)
      );
    }),
    (G.unstable_batchedUpdates = cu),
    (G.unstable_renderSubtreeIntoContainer = function (e, t, r, a) {
      if (!Zu(r)) throw Error(n(200));
      if (null == e || void 0 === e._reactInternals) throw Error(n(38));
      return ec(e, t, r, !1, a);
    }),
    (G.version = "18.3.1-next-f1338f8080-20240426"),
    G
  );
}
function te() {
  if (Q) return X.exports;
  return (
    (Q = 1),
    (function e() {
      if (
        "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
        "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
        } catch (t) {
          console.error(t);
        }
    })(),
    (X.exports = ee()),
    X.exports
  );
}
var ne = (function () {
  if (q) return K;
  q = 1;
  var e = te();
  return ((K.createRoot = e.createRoot), (K.hydrateRoot = e.hydrateRoot), K);
})();
const re = A.createContext({
    loggedIn: !1,
    setLoggedIn: () => {},
    loading: !0,
    setLoading: () => {},
    userData: null,
    setUserData: () => {},
  }),
  ae = () => A.useContext(re);
function le(e) {
  var t,
    n,
    r = "";
  if ("string" == typeof e || "number" == typeof e) r += e;
  else if ("object" == typeof e)
    if (Array.isArray(e)) {
      var a = e.length;
      for (t = 0; t < a; t++)
        e[t] && (n = le(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function oe() {
  for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++)
    (e = arguments[n]) && (t = le(e)) && (r && (r += " "), (r += t));
  return r;
}
var ie = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  se = $.createContext && $.createContext(ie),
  ue = ["attr", "size", "title"];
function ce(e, t) {
  if (null == e) return {};
  var n,
    r,
    a = (function (e, t) {
      if (null == e) return {};
      var n = {};
      for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          if (t.indexOf(r) >= 0) continue;
          n[r] = e[r];
        }
      return n;
    })(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++)
      ((n = l[r]),
        t.indexOf(n) >= 0 ||
          (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])));
  }
  return a;
}
function de() {
  return (
    (de = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    de.apply(this, arguments)
  );
}
function fe(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function pe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? fe(Object(n), !0).forEach(function (t) {
          he(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : fe(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function he(e, t, n) {
  var r;
  return (
    (t =
      "symbol" ==
      typeof (r = (function (e, t) {
        if ("object" != typeof e || !e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(e, t || "default");
          if ("object" != typeof r) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      })(t, "string"))
        ? r
        : r + "") in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function me(e) {
  return (
    e &&
    e.map((e, t) => $.createElement(e.tag, pe({ key: t }, e.attr), me(e.child)))
  );
}
function ge(e) {
  return (t) =>
    $.createElement(ve, de({ attr: pe({}, e.attr) }, t), me(e.child));
}
function ve(e) {
  var t = (t) => {
    var n,
      { attr: r, size: a, title: l } = e,
      o = ce(e, ue),
      i = a || t.size || "1em";
    return (
      t.className && (n = t.className),
      e.className && (n = (n ? n + " " : "") + e.className),
      (n = (n ? n + " " : "") + "lk-ios-icon"),
      $.createElement(
        "svg",
        de(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          t.attr,
          r,
          o,
          {
            strokeWidth: "1.8",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: n,
            style: pe(pe({ color: e.color || t.color }, t.style), e.style),
            height: i,
            width: i,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        l && $.createElement("title", null, l),
        e.children,
      )
    );
  };
  return void 0 !== se
    ? $.createElement(se.Consumer, null, (e) => t(e))
    : t(ie);
}
function ye(e) {
  return ge({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "path", attr: { d: "m5 12 7-7 7 7" }, child: [] },
      { tag: "path", attr: { d: "M12 19V5" }, child: [] },
    ],
  })(e);
}
function be(e) {
  return ge({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" },
        child: [],
      },
      { tag: "path", attr: { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" }, child: [] },
    ],
  })(e);
}
function ke(e) {
  return ge({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [{ tag: "path", attr: { d: "M20 6 9 17l-5-5" }, child: [] }],
  })(e);
}
function xe(e) {
  return ge({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [{ tag: "path", attr: { d: "m6 9 6 6 6-6" }, child: [] }],
  })(e);
}
function we(e) {
  return ge({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [{ tag: "path", attr: { d: "m15 18-6-6 6-6" }, child: [] }],
  })(e);
}
function _e(e) {
  return ge({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [{ tag: "path", attr: { d: "m18 15-6-6-6 6" }, child: [] }],
  })(e);
}
function Se(e) {
  return ge({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "rect",
        attr: { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" },
        child: [],
      },
      {
        tag: "path",
        attr: { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" },
        child: [],
      },
    ],
  })(e);
}
function Ce(e) {
  return ge({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" },
        child: [],
      },
      { tag: "polyline", attr: { points: "7 10 12 15 17 10" }, child: [] },
      {
        tag: "line",
        attr: { x1: "12", x2: "12", y1: "15", y2: "3" },
        child: [],
      },
    ],
  })(e);
}
function je(e) {
  return ge({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "line",
        attr: { x1: "2", x2: "22", y1: "2", y2: "22" },
        child: [],
      },
      {
        tag: "path",
        attr: { d: "M10.41 10.41a2 2 0 1 1-2.83-2.83" },
        child: [],
      },
      {
        tag: "line",
        attr: { x1: "13.5", x2: "6", y1: "13.5", y2: "21" },
        child: [],
      },
      {
        tag: "line",
        attr: { x1: "18", x2: "21", y1: "12", y2: "15" },
        child: [],
      },
      {
        tag: "path",
        attr: {
          d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",
        },
        child: [],
      },
      { tag: "path", attr: { d: "M21 15V5a2 2 0 0 0-2-2H9" }, child: [] },
    ],
  })(e);
}
function Ne(e) {
  return ge({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "path", attr: { d: "M16 5h6" }, child: [] },
      { tag: "path", attr: { d: "M19 2v6" }, child: [] },
      {
        tag: "path",
        attr: {
          d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",
        },
        child: [],
      },
      {
        tag: "path",
        attr: { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" },
        child: [],
      },
      { tag: "circle", attr: { cx: "9", cy: "9", r: "2" }, child: [] },
    ],
  })(e);
}
function Ee(e) {
  return ge({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "rect",
        attr: { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2" },
        child: [],
      },
      { tag: "circle", attr: { cx: "9", cy: "9", r: "2" }, child: [] },
      {
        tag: "path",
        attr: { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" },
        child: [],
      },
    ],
  })(e);
}
function Le(e) {
  return ge({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "circle", attr: { cx: "12", cy: "12", r: "10" }, child: [] },
      { tag: "path", attr: { d: "M12 16v-4" }, child: [] },
      { tag: "path", attr: { d: "M12 8h.01" }, child: [] },
    ],
  })(e);
}
function Te(e) {
  return ge({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "rect",
        attr: { width: "7", height: "7", x: "3", y: "3", rx: "1" },
        child: [],
      },
      {
        tag: "rect",
        attr: { width: "7", height: "7", x: "14", y: "3", rx: "1" },
        child: [],
      },
      {
        tag: "rect",
        attr: { width: "7", height: "7", x: "14", y: "14", rx: "1" },
        child: [],
      },
      {
        tag: "rect",
        attr: { width: "7", height: "7", x: "3", y: "14", rx: "1" },
        child: [],
      },
    ],
  })(e);
}
function Pe(e) {
  return ge({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" },
        child: [],
      },
      { tag: "polyline", attr: { points: "16 17 21 12 16 7" }, child: [] },
      {
        tag: "line",
        attr: { x1: "21", x2: "9", y1: "12", y2: "12" },
        child: [],
      },
    ],
  })(e);
}
function Re(e) {
  return ge({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "polygon", attr: { points: "6 3 20 12 6 21 6 3" }, child: [] },
    ],
  })(e);
}
function Me(e) {
  return ge({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "path", attr: { d: "M12 22v-5" }, child: [] },
      { tag: "path", attr: { d: "M9 8V2" }, child: [] },
      { tag: "path", attr: { d: "M15 8V2" }, child: [] },
      {
        tag: "path",
        attr: { d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" },
        child: [],
      },
    ],
  })(e);
}
function ze(e) {
  return ge({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "path", attr: { d: "M5 12h14" }, child: [] },
      { tag: "path", attr: { d: "M12 5v14" }, child: [] },
    ],
  })(e);
}
function Oe(e) {
  return ge({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" },
        child: [],
      },
      { tag: "path", attr: { d: "M21 3v5h-5" }, child: [] },
      {
        tag: "path",
        attr: { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" },
        child: [],
      },
      { tag: "path", attr: { d: "M8 16H3v5" }, child: [] },
    ],
  })(e);
}
function Ie(e) {
  return ge({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: {
          d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        },
        child: [],
      },
      { tag: "path", attr: { d: "m21.854 2.147-10.94 10.939" }, child: [] },
    ],
  })(e);
}
function Fe(e) {
  return ge({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: {
          d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
        },
        child: [],
      },
      { tag: "circle", attr: { cx: "12", cy: "12", r: "3" }, child: [] },
    ],
  })(e);
}
function De(e) {
  return ge({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "path", attr: { d: "M3 6h18" }, child: [] },
      {
        tag: "path",
        attr: { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" },
        child: [],
      },
      {
        tag: "path",
        attr: { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" },
        child: [],
      },
      {
        tag: "line",
        attr: { x1: "10", x2: "10", y1: "11", y2: "17" },
        child: [],
      },
      {
        tag: "line",
        attr: { x1: "14", x2: "14", y1: "11", y2: "17" },
        child: [],
      },
    ],
  })(e);
}
function Ue(e) {
  return ge({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" },
        child: [],
      },
      { tag: "polyline", attr: { points: "17 8 12 3 7 8" }, child: [] },
      {
        tag: "line",
        attr: { x1: "12", x2: "12", y1: "3", y2: "15" },
        child: [],
      },
    ],
  })(e);
}
function Be(e) {
  return ge({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      {
        tag: "path",
        attr: { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" },
        child: [],
      },
      { tag: "circle", attr: { cx: "9", cy: "7", r: "4" }, child: [] },
      { tag: "path", attr: { d: "M22 21v-2a4 4 0 0 0-3-3.87" }, child: [] },
      { tag: "path", attr: { d: "M16 3.13a4 4 0 0 1 0 7.75" }, child: [] },
    ],
  })(e);
}
function Ae(e) {
  return ge({
    tag: "svg",
    attr: {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    child: [
      { tag: "path", attr: { d: "M18 6 6 18" }, child: [] },
      { tag: "path", attr: { d: "m6 6 12 12" }, child: [] },
    ],
  })(e);
}
const $e = function (e) {
    const t = ["y", "mo", "d", "h", "m", "s"],
      n = Math.floor((new Date().valueOf() - new Date(e).valueOf()) / 1e3);
    let r = n / 31536e3;
    return r > 1
      ? Math.floor(r) + t[0]
      : ((r = n / 2592e3),
        r > 1
          ? Math.floor(r) + t[1]
          : ((r = n / 86400),
            r > 1
              ? Math.floor(r) + t[2]
              : ((r = n / 3600),
                r > 1
                  ? Math.floor(r) + t[3]
                  : ((r = n / 60),
                    r > 1 ? Math.floor(r) + t[4] : Math.floor(n) + t[5]))));
  },
  Ve = function (e) {
    const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let n = "";
    for (let r = e; r > 0; --r) n += t[Math.floor(62 * Math.random())];
    return n;
  },
  We = (e) => {
    const t = A.useId();
    return B.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 40 40",
      width: "1em",
      height: "1em",
      role: "img",
      "aria-label": "loocket",
      ...e,
      children: [
        B.jsx("defs", {
          children: B.jsxs("linearGradient", {
            id: t,
            x1: "0",
            y1: "0",
            x2: "1",
            y2: "1",
            children: [
              B.jsx("stop", { offset: "0%", stopColor: "#e888b6" }),
              B.jsx("stop", { offset: "100%", stopColor: "#a83566" }),
            ],
          }),
        }),
        B.jsx("rect", {
          width: 40,
          height: 40,
          rx: 9,
          ry: 9,
          fill: `url(#${t})`,
        }),
        B.jsx("circle", {
          cx: 14.6,
          cy: 20,
          r: 5.9,
          fill: "#fff",
          fillOpacity: 0.95,
        }),
        B.jsx("circle", {
          cx: 25.4,
          cy: 20,
          r: 4.9,
          fill: "none",
          stroke: "#fff",
          strokeOpacity: 0.95,
          strokeWidth: 2.9,
        }),
      ],
    });
  },
  He = "_rtSpinner_3f9db_1",
  Qe = "_rtSpinnerLeaf_3f9db_18";
function qe({ className: e, ...t }) {
  return B.jsxs("span", {
    ...t,
    className: oe(He, e),
    children: [
      B.jsx("span", { className: Qe }),
      B.jsx("span", { className: Qe }),
      B.jsx("span", { className: Qe }),
      B.jsx("span", { className: Qe }),
      B.jsx("span", { className: Qe }),
      B.jsx("span", { className: Qe }),
      B.jsx("span", { className: Qe }),
      B.jsx("span", { className: Qe }),
    ],
  });
}
const Ke = {},
  Xe = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      document.getElementsByTagName("link");
      const e = document.querySelector("meta[property=csp-nonce]"),
        n =
          (null == e ? void 0 : e.nonce) ||
          (null == e ? void 0 : e.getAttribute("nonce"));
      r = Promise.allSettled(
        t.map((e) => {
          if (
            (e = (function (e) {
              return "/" + e;
            })(e)) in Ke
          )
            return;
          Ke[e] = !0;
          const t = e.endsWith(".css"),
            r = t ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${e}"]${r}`)) return;
          const a = document.createElement("link");
          return (
            (a.rel = t ? "stylesheet" : "modulepreload"),
            t || (a.as = "script"),
            (a.crossOrigin = ""),
            (a.href = e),
            n && a.setAttribute("nonce", n),
            document.head.appendChild(a),
            t
              ? new Promise((t, n) => {
                  (a.addEventListener("load", t),
                    a.addEventListener("error", () =>
                      n(new Error(`Unable to preload CSS for ${e}`)),
                    ));
                })
              : void 0
          );
        }),
      );
    }
    function a(e) {
      const t = new Event("vite:preloadError", { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
        throw e;
    }
    return r.then((t) => {
      for (const e of t || []) "rejected" === e.status && a(e.reason);
      return e().catch(a);
    });
  };
var Ge = te();
const Ye = (e) => !!e && "o" === e[0],
  Ze = Ge.unstable_batchedUpdates || ((e) => e()),
  Je = (e, t) => !0 === e || !(!e || !e[t]),
  et = (e, t) => ("function" == typeof e ? e(t) : e),
  tt = "_szhsinMenu",
  nt = (e, t) => Object.defineProperty(t, tt, { value: e }),
  rt = (e, t) => (
    t &&
      Object.keys(t).forEach((n) => {
        const r = e[n],
          a = t[n];
        e[n] =
          "function" == typeof a && r
            ? (...e) => {
                (a(...e), r(...e));
              }
            : a;
      }),
    e
  ),
  at = (e) => {
    for (; e;) {
      if (!(e = e.parentNode) || e === document.body || !e.parentNode) return;
      const { overflow: t, overflowX: n, overflowY: r } = getComputedStyle(e);
      if (/auto|scroll|overlay|hidden/.test(t + r + n)) return e;
    }
  };
function lt(e, t) {
  return { "aria-disabled": e || void 0, tabIndex: t ? 0 : -1 };
}
function ot(e, t) {
  for (let n = 0; n < e.length; n++) if (e[n] === t) return n;
  return -1;
}
const it = ({ block: e, element: t, modifiers: n, className: r }) =>
    A.useMemo(() => {
      const a = t ? `${e}__${t}` : e;
      let l = a;
      n &&
        Object.keys(n).forEach((e) => {
          const t = n[e];
          t && (l += ` ${a}--${!0 === t ? e : `${e}-${t}`}`);
        });
      let o = "function" == typeof r ? r(n) : r;
      return ("string" == typeof o && ((o = o.trim()), o && (l += ` ${o}`)), l);
    }, [e, t, n, r]),
  st = "szh-menu",
  ut = A.createContext(),
  ct = A.createContext({}),
  dt = A.createContext({}),
  ft = A.createContext({}),
  pt = A.createContext({}),
  ht = A.createContext({}),
  mt = Object.freeze({
    ENTER: "Enter",
    ESC: "Escape",
    SPACE: " ",
    HOME: "Home",
    END: "End",
    LEFT: "ArrowLeft",
    RIGHT: "ArrowRight",
    UP: "ArrowUp",
    DOWN: "ArrowDown",
  }),
  gt = Object.freeze({
    RESET: 0,
    SET: 1,
    UNSET: 2,
    INCREASE: 3,
    DECREASE: 4,
    FIRST: 5,
    LAST: 6,
    SET_INDEX: 7,
  }),
  vt = Object.freeze({
    CLICK: "click",
    CANCEL: "cancel",
    BLUR: "blur",
    SCROLL: "scroll",
  }),
  yt = Object.freeze({ FIRST: "first", LAST: "last" }),
  bt = Object.freeze({
    entering: "opening",
    entered: "open",
    exiting: "closing",
    exited: "closed",
  }),
  kt = "absolute",
  xt = { preventScroll: !0 },
  wt = nt(
    "MenuButton",
    A.forwardRef(function (
      { className: e, isOpen: t, disabled: n, children: r, ...a },
      l,
    ) {
      const o = A.useMemo(() => ({ open: t }), [t]);
      return B.jsx("button", {
        "aria-haspopup": !0,
        "aria-expanded": t,
        "aria-disabled": n || void 0,
        type: "button",
        disabled: n,
        ...a,
        ref: l,
        className: it({ block: "szh-menu-button", modifiers: o, className: e }),
        children: r,
      });
    }),
  ),
  _t = ({
    className: e,
    containerRef: t,
    containerProps: n,
    children: r,
    isOpen: a,
    theming: l,
    transition: o,
    onClose: i,
  }) => {
    const s = Je(o, "item");
    return B.jsx("div", {
      ...rt(
        {
          onKeyDown: ({ key: e }) => {
            if (e === mt.ESC) et(i, { key: e, reason: vt.CANCEL });
          },
          onBlur: (e) => {
            a &&
              !e.currentTarget.contains(e.relatedTarget) &&
              et(i, { reason: vt.BLUR });
          },
        },
        n,
      ),
      className: it({
        block: "szh-menu-container",
        modifiers: A.useMemo(() => ({ theme: l, itemTransition: s }), [l, s]),
        className: e,
      }),
      style: { position: "absolute", ...(null == n ? void 0 : n.style) },
      ref: t,
      children: r,
    });
  },
  St = () => {
    let e,
      t = 0;
    return {
      toggle: (e) => {
        (e ? t++ : t--, (t = Math.max(t, 0)));
      },
      on: (n, r, a) => {
        t
          ? e ||
            (e = setTimeout(() => {
              ((e = 0), r());
            }, n))
          : null == a || a();
      },
      off: () => {
        e && (clearTimeout(e), (e = 0));
      },
    };
  },
  Ct = (e, t) => (Math.round(e) === t ? e : t),
  jt = (e, t, n, r) => {
    const a = ((e) => {
        const t = e.getBoundingClientRect();
        return (
          (t.width = Ct(t.width, e.offsetWidth)),
          (t.height = Ct(t.height, e.offsetHeight)),
          t
        );
      })(t.current),
      l = e.current.getBoundingClientRect(),
      o =
        n === window
          ? {
              left: 0,
              top: 0,
              right: document.documentElement.clientWidth,
              bottom: window.innerHeight,
            }
          : n.getBoundingClientRect(),
      i = ((e) => {
        if ("string" != typeof e)
          return { top: 0, right: 0, bottom: 0, left: 0 };
        const t = e.trim().split(/\s+/, 4).map(parseFloat),
          n = isNaN(t[0]) ? 0 : t[0],
          r = isNaN(t[1]) ? n : t[1];
        return {
          top: n,
          right: r,
          bottom: isNaN(t[2]) ? n : t[2],
          left: isNaN(t[3]) ? r : t[3],
        };
      })(r),
      s = (e) => e + l.left - o.left - i.left,
      u = (e) => e + l.left + a.width - o.right + i.right,
      c = (e) => e + l.top - o.top - i.top,
      d = (e) => e + l.top + a.height - o.bottom + i.bottom;
    return {
      menuRect: a,
      containerRect: l,
      getLeftOverflow: s,
      getRightOverflow: u,
      getTopOverflow: c,
      getBottomOverflow: d,
      confineHorizontally: (e) => {
        let t = s(e);
        if (t < 0) e -= t;
        else {
          const n = u(e);
          n > 0 && ((t = s((e -= n))), t < 0 && (e -= t));
        }
        return e;
      },
      confineVertically: (e) => {
        let t = c(e);
        if (t < 0) e -= t;
        else {
          const n = d(e);
          n > 0 && ((t = c((e -= n))), t < 0 && (e -= t));
        }
        return e;
      },
    };
  },
  Nt = ({
    anchorRect: e,
    containerRect: t,
    menuRect: n,
    placeLeftorRightY: r,
    placeLeftX: a,
    placeRightX: l,
    getLeftOverflow: o,
    getRightOverflow: i,
    confineHorizontally: s,
    confineVertically: u,
    arrowRef: c,
    arrow: d,
    direction: f,
    position: p,
  }) => {
    let h,
      m,
      g,
      v = f,
      y = r;
    ("initial" !== p &&
      ((y = u(y)),
      "anchor" === p &&
        ((y = Math.min(y, e.bottom - t.top)),
        (y = Math.max(y, e.top - t.top - n.height)))),
      "left" === v
        ? ((h = a),
          "initial" !== p &&
            ((m = o(h)),
            m < 0 &&
              ((g = i(l)), (g <= 0 || -m > g) && ((h = l), (v = "right")))))
        : ((h = l),
          "initial" !== p &&
            ((g = i(h)),
            g > 0 &&
              ((m = o(a)), (m >= 0 || -m < g) && ((h = a), (v = "left"))))),
      "auto" === p && (h = s(h)));
    const b = d
      ? (({
          arrowRef: e,
          menuY: t,
          anchorRect: n,
          containerRect: r,
          menuRect: a,
        }) => {
          let l = n.top - r.top - t + n.height / 2;
          const o = 1.25 * e.current.offsetHeight;
          return ((l = Math.max(o, l)), (l = Math.min(l, a.height - o)), l);
        })({
          menuY: y,
          arrowRef: c,
          anchorRect: e,
          containerRect: t,
          menuRect: n,
        })
      : void 0;
    return { arrowY: b, x: h, y: y, computedDirection: v };
  },
  Et = ({
    anchorRect: e,
    containerRect: t,
    menuRect: n,
    placeToporBottomX: r,
    placeTopY: a,
    placeBottomY: l,
    getTopOverflow: o,
    getBottomOverflow: i,
    confineHorizontally: s,
    confineVertically: u,
    arrowRef: c,
    arrow: d,
    direction: f,
    position: p,
  }) => {
    let h,
      m,
      g,
      v = "top" === f ? "top" : "bottom",
      y = r;
    ("initial" !== p &&
      ((y = s(y)),
      "anchor" === p &&
        ((y = Math.min(y, e.right - t.left)),
        (y = Math.max(y, e.left - t.left - n.width)))),
      "top" === v
        ? ((h = a),
          "initial" !== p &&
            ((m = o(h)),
            m < 0 &&
              ((g = i(l)), (g <= 0 || -m > g) && ((h = l), (v = "bottom")))))
        : ((h = l),
          "initial" !== p &&
            ((g = i(h)),
            g > 0 &&
              ((m = o(a)), (m >= 0 || -m < g) && ((h = a), (v = "top"))))),
      "auto" === p && (h = u(h)));
    const b = d
      ? (({
          arrowRef: e,
          menuX: t,
          anchorRect: n,
          containerRect: r,
          menuRect: a,
        }) => {
          let l = n.left - r.left - t + n.width / 2;
          const o = 1.25 * e.current.offsetWidth;
          return ((l = Math.max(o, l)), (l = Math.min(l, a.width - o)), l);
        })({
          menuX: y,
          arrowRef: c,
          anchorRect: e,
          containerRect: t,
          menuRect: n,
        })
      : void 0;
    return { arrowX: b, x: y, y: h, computedDirection: v };
  },
  Lt =
    "undefined" != typeof window &&
    void 0 !== window.document &&
    void 0 !== window.document.createElement
      ? A.useLayoutEffect
      : A.useEffect;
function Tt(e, t) {
  "function" == typeof e ? e(t) : (e.current = t);
}
const Pt = (e, t) =>
    A.useMemo(
      () =>
        e
          ? t
            ? (n) => {
                (Tt(e, n), Tt(t, n));
              }
            : e
          : t,
      [e, t],
    ),
  Rt = ({
    ariaLabel: e,
    menuClassName: t,
    menuStyle: n,
    arrow: r,
    arrowProps: a = {},
    anchorPoint: l,
    anchorRef: o,
    containerRef: i,
    containerProps: s,
    externalRef: u,
    parentScrollingRef: c,
    align: d = "start",
    direction: f = "bottom",
    position: p = "auto",
    overflow: h = "visible",
    setDownOverflow: m,
    repositionFlag: g,
    captureFocus: v = !0,
    state: y,
    endTransition: b,
    isDisabled: k,
    menuItemFocus: x,
    gap: w = 0,
    shift: _ = 0,
    children: S,
    onClose: C,
    focusProps: j,
    ...N
  }) => {
    const [E, L] = A.useState({ x: -9999, y: -9999 }),
      [T, P] = A.useState({}),
      [R, M] = A.useState(),
      [z, O] = A.useState(f),
      [I] = A.useState(St),
      [F, D] = A.useReducer((e) => e + 1, 1),
      {
        transition: U,
        boundingBoxRef: $,
        boundingBoxPadding: V,
        rootMenuRef: W,
        rootAnchorRef: H,
        scrollNodesRef: Q,
        reposition: q,
        viewScroll: K,
        submenuCloseDelay: X,
      } = A.useContext(ht),
      { submenuCtx: G, reposSubmenu: Y = g } = A.useContext(dt),
      Z = A.useRef(),
      J = A.useRef(),
      ee = A.useRef(!1),
      {
        hoverItem: te,
        dispatch: ne,
        updateItems: re,
      } = ((e) => {
        const [t, n] = A.useState(),
          r = A.useRef({ items: [], hoverIndex: -1, sorted: !1 }).current,
          a = A.useCallback(
            (t, a) => {
              const { items: l } = r;
              if (t)
                if (a) l.push(t);
                else {
                  const r = l.indexOf(t);
                  r > -1 &&
                    (l.splice(r, 1),
                    t.contains(document.activeElement) &&
                      (e.current.focus(xt), n()));
                }
              else r.items = [];
              ((r.hoverIndex = -1), (r.sorted = !1));
            },
            [r, e],
          );
        return {
          hoverItem: t,
          dispatch: A.useCallback(
            (t, a, l) => {
              const { items: o, hoverIndex: i } = r,
                s = () => {
                  if (r.sorted) return;
                  const t = e.current.querySelectorAll(".szh-menu__item");
                  (o.sort((e, n) => ot(t, e) - ot(t, n)), (r.sorted = !0));
                };
              let u,
                c = -1;
              switch (t) {
                case gt.RESET:
                  break;
                case gt.SET:
                  u = a;
                  break;
                case gt.UNSET:
                  u = (e) => (e === a ? void 0 : e);
                  break;
                case gt.FIRST:
                  (s(), (c = 0), (u = o[c]));
                  break;
                case gt.LAST:
                  (s(), (c = o.length - 1), (u = o[c]));
                  break;
                case gt.SET_INDEX:
                  (s(), (c = l), (u = o[c]));
                  break;
                case gt.INCREASE:
                  (s(),
                    (c = i),
                    c < 0 && (c = o.indexOf(a)),
                    c++,
                    c >= o.length && (c = 0),
                    (u = o[c]));
                  break;
                case gt.DECREASE:
                  (s(),
                    (c = i),
                    c < 0 && (c = o.indexOf(a)),
                    c--,
                    c < 0 && (c = o.length - 1),
                    (u = o[c]));
              }
              (u || (c = -1), n(u), (r.hoverIndex = c));
            },
            [e, r],
          ),
          updateItems: a,
        };
      })(Z),
      ae = Ye(y),
      le = Je(U, "open"),
      oe = Je(U, "close"),
      ie = Q.current,
      se = A.useCallback(
        (e) => {
          var t;
          const n = o
            ? null == (t = o.current)
              ? void 0
              : t.getBoundingClientRect()
            : l
              ? {
                  left: l.x,
                  right: l.x,
                  top: l.y,
                  bottom: l.y,
                  width: 0,
                  height: 0,
                }
              : null;
          if (!n) return;
          ie.menu || (ie.menu = ($ ? $.current : at(W.current)) || window);
          const a = jt(i, Z, ie.menu, V);
          let {
            arrowX: s,
            arrowY: u,
            x: c,
            y: m,
            computedDirection: g,
          } = (({
            arrow: e,
            align: t,
            direction: n,
            gap: r,
            shift: a,
            position: l,
            anchorRect: o,
            arrowRef: i,
            positionHelpers: s,
          }) => {
            const { menuRect: u, containerRect: c } = s,
              d = "left" === n || "right" === n;
            let f = d ? r : a,
              p = d ? a : r;
            if (e) {
              const e = i.current;
              d ? (f += e.offsetWidth) : (p += e.offsetHeight);
            }
            const h = o.left - c.left - u.width - f,
              m = o.right - c.left + f,
              g = o.top - c.top - u.height - p,
              v = o.bottom - c.top + p;
            let y, b;
            ("end" === t
              ? ((y = o.right - c.left - u.width),
                (b = o.bottom - c.top - u.height))
              : "center" === t
                ? ((y = o.left - c.left - (u.width - o.width) / 2),
                  (b = o.top - c.top - (u.height - o.height) / 2))
                : ((y = o.left - c.left), (b = o.top - c.top)),
              (y += f),
              (b += p));
            const k = {
              ...s,
              anchorRect: o,
              placeLeftX: h,
              placeRightX: m,
              placeLeftorRightY: b,
              placeTopY: g,
              placeBottomY: v,
              placeToporBottomX: y,
              arrowRef: i,
              arrow: e,
              direction: n,
              position: l,
            };
            switch (n) {
              case "left":
              case "right":
                return Nt(k);
              default:
                return Et(k);
            }
          })({
            arrow: r,
            align: d,
            direction: f,
            gap: w,
            shift: _,
            position: p,
            anchorRect: n,
            arrowRef: J,
            positionHelpers: a,
          });
          const { menuRect: v } = a,
            y = v.height;
          if (!e && "visible" !== h) {
            const { getTopOverflow: e, getBottomOverflow: t } = a;
            let n, r;
            const l = t(m);
            if (l > 0) ((n = y - l), (r = l));
            else {
              const t = e(m);
              t < 0 && ((n = y + t), (r = 0 - t), n >= 0 && (m -= t));
            }
            n >= 0 && M({ height: n, overflowAmt: r });
          }
          (r && P({ x: s, y: u }), L({ x: c, y: m }), O(g));
        },
        [r, d, V, f, w, _, p, h, l, o, i, $, W, ie],
      );
    (Lt(() => {
      (ae && (se(), ee.current && D()), (ee.current = ae));
    }, [ae, se, Y]),
      Lt(() => {
        R && !m && (Z.current.scrollTop = 0);
      }, [R, m]),
      Lt(() => re, [re]),
      A.useEffect(() => {
        let { menu: e } = ie;
        if (!ae || !e) return;
        if (((e = e.addEventListener ? e : window), !ie.anchors)) {
          ie.anchors = [];
          let t = at(H && H.current);
          for (; t && t !== e;) (ie.anchors.push(t), (t = at(t)));
        }
        let t = K;
        if (
          (ie.anchors.length && "initial" === t && (t = "auto"),
          "initial" === t)
        )
          return;
        const n = () => {
            "auto" === t ? Ze(() => se(!0)) : et(C, { reason: vt.SCROLL });
          },
          r = ie.anchors.concat("initial" !== K ? e : []);
        return (
          r.forEach((e) => e.addEventListener("scroll", n)),
          () => r.forEach((e) => e.removeEventListener("scroll", n))
        );
      }, [H, ie, ae, C, K, se]));
    const ue = !!R && R.overflowAmt > 0;
    (A.useEffect(() => {
      if (ue || !ae || !c) return;
      const e = () => Ze(se),
        t = c.current;
      return (
        t.addEventListener("scroll", e),
        () => t.removeEventListener("scroll", e)
      );
    }, [ae, ue, c, se]),
      A.useEffect(() => {
        if (!ae || "function" != typeof ResizeObserver || "initial" === q)
          return;
        const e = [],
          t = new ResizeObserver((t) =>
            t.forEach(({ target: t }) => {
              e.indexOf(t) < 0
                ? e.push(t)
                : Ge.flushSync(() => {
                    (se(), D());
                  });
            }),
          ),
          n = { box: "border-box" };
        t.observe(Z.current, n);
        const r = null == o ? void 0 : o.current;
        return (r && t.observe(r, n), () => t.disconnect());
      }, [ae, q, o, se]),
      A.useEffect(() => {
        if (!ae) return (ne(gt.RESET), void (oe || M()));
        const { position: e, alwaysUpdate: t } = x || {},
          n = () => {
            e === yt.FIRST
              ? ne(gt.FIRST)
              : e === yt.LAST
                ? ne(gt.LAST)
                : e >= -1 && ne(gt.SET_INDEX, void 0, e);
          };
        if (t) n();
        else if (v) {
          const e = setTimeout(
            () => {
              const e = Z.current;
              e && !e.contains(document.activeElement) && (e.focus(xt), n());
            },
            le ? 170 : 100,
          );
          return () => clearTimeout(e);
        }
      }, [ae, le, oe, v, x, ne]));
    const ce = A.useMemo(
      () => ({
        isParentOpen: ae,
        submenuCtx: I,
        dispatch: ne,
        updateItems: re,
      }),
      [ae, I, ne, re],
    );
    let de, fe;
    R && (m ? (fe = R.overflowAmt) : (de = R.height));
    const pe = A.useMemo(
        () => ({
          reposSubmenu: F,
          submenuCtx: I,
          overflow: h,
          overflowAmt: fe,
          parentMenuRef: Z,
          parentDir: z,
        }),
        [F, I, h, fe, z],
      ),
      he = de >= 0 ? { maxHeight: de, overflow: h } : void 0,
      me = A.useMemo(() => ({ state: y, align: d, dir: z }), [y, d, z]),
      ge = A.useMemo(() => ({ dir: z }), [z]),
      ve = it({
        block: st,
        element: "arrow",
        modifiers: ge,
        className: a.className,
      }),
      ye = B.jsxs("ul", {
        role: "menu",
        "aria-label": e,
        ...lt(k),
        ...rt(
          {
            onPointerEnter: null == G ? void 0 : G.off,
            onPointerMove: (e) => {
              (e.stopPropagation(),
                I.on(X, () => {
                  (ne(gt.RESET), Z.current.focus(xt));
                }));
            },
            onPointerLeave: (e) => {
              e.target === e.currentTarget && I.off();
            },
            onKeyDown: (e) => {
              switch (e.key) {
                case mt.HOME:
                  ne(gt.FIRST);
                  break;
                case mt.END:
                  ne(gt.LAST);
                  break;
                case mt.UP:
                  ne(gt.DECREASE, te);
                  break;
                case mt.DOWN:
                  ne(gt.INCREASE, te);
                  break;
                case mt.SPACE:
                  return void (
                    e.target &&
                    -1 !== e.target.className.indexOf(st) &&
                    e.preventDefault()
                  );
                default:
                  return;
              }
              (e.preventDefault(), e.stopPropagation());
            },
            onAnimationEnd: () => {
              ("closing" === y && M(), et(b));
            },
          },
          N,
        ),
        ref: Pt(u, Z),
        className: it({ block: st, modifiers: me, className: t }),
        style: {
          ...n,
          ...he,
          margin: 0,
          display: "closed" === y ? "none" : void 0,
          position: kt,
          left: E.x,
          top: E.y,
        },
        children: [
          r &&
            B.jsx("li", {
              "aria-hidden": !0,
              ...a,
              className: ve,
              style: {
                display: "block",
                position: kt,
                left: T.x,
                top: T.y,
                ...a.style,
              },
              ref: J,
            }),
          B.jsx(dt.Provider, {
            value: pe,
            children: B.jsx(ct.Provider, {
              value: ce,
              children: B.jsx(ut.Provider, { value: te, children: et(S, me) }),
            }),
          }),
        ],
      });
    return s ? B.jsx(_t, { ...s, isOpen: ae, children: ye }) : ye;
  },
  Mt = A.forwardRef(function (
    {
      "aria-label": e,
      className: t,
      containerProps: n,
      initialMounted: r,
      unmountOnClose: a,
      transition: l,
      transitionTimeout: o,
      boundingBoxRef: i,
      boundingBoxPadding: s,
      reposition: u = "auto",
      submenuOpenDelay: c = 300,
      submenuCloseDelay: d = 150,
      viewScroll: f = "initial",
      portal: p,
      theming: h,
      onItemClick: m,
      ...g
    },
    v,
  ) {
    const y = A.useRef(null),
      b = A.useRef({}),
      { anchorRef: k, state: x, onClose: w } = g,
      _ = A.useMemo(
        () => ({
          initialMounted: r,
          unmountOnClose: a,
          transition: l,
          transitionTimeout: o,
          boundingBoxRef: i,
          boundingBoxPadding: s,
          rootMenuRef: y,
          rootAnchorRef: k,
          scrollNodesRef: b,
          reposition: u,
          viewScroll: f,
          submenuOpenDelay: c,
          submenuCloseDelay: d,
        }),
        [r, a, l, o, k, i, s, u, f, c, d],
      ),
      S = A.useMemo(
        () => ({
          handleClick(e, t) {
            e.stopPropagation || et(m, e);
            let n = e.keepOpen;
            (void 0 === n && (n = t && e.key === mt.SPACE),
              n || et(w, { value: e.value, key: e.key, reason: vt.CLICK }));
          },
          handleClose(e) {
            et(w, { key: e, reason: vt.CLICK });
          },
        }),
        [m, w],
      );
    if (!x) return null;
    const C = B.jsx(ht.Provider, {
      value: _,
      children: B.jsx(ft.Provider, {
        value: S,
        children: B.jsx(Rt, {
          ...g,
          ariaLabel: e || "Menu",
          externalRef: v,
          containerRef: y,
          containerProps: {
            className: t,
            containerRef: y,
            containerProps: n,
            theming: h,
            transition: l,
            onClose: w,
          },
        }),
      }),
    });
    return !0 === p && "undefined" != typeof document
      ? Ge.createPortal(C, document.body)
      : p
        ? p.target
          ? Ge.createPortal(C, p.target)
          : p.stablePosition
            ? null
            : C
        : C;
  }),
  zt = [
    "preEnter",
    "entering",
    "entered",
    "preExit",
    "exiting",
    "exited",
    "unmounted",
  ],
  Ot = (e) => ({
    _s: e,
    status: zt[e],
    isEnter: e < 3,
    isMounted: 6 !== e,
    isResolved: 2 === e || e > 4,
  }),
  It = (e) => (e ? 6 : 5),
  Ft = (e, t, n, r, a) => {
    clearTimeout(r.current);
    const l = Ot(e);
    (t(l), (n.current = l), a && a({ current: l }));
  },
  Dt = ({
    enter: e = !0,
    exit: t = !0,
    preEnter: n,
    preExit: r,
    timeout: a,
    initialEntered: l,
    mountOnEnter: o,
    unmountOnExit: i,
    onStateChange: s,
  } = {}) => {
    const [u, c] = A.useState(() => Ot(l ? 2 : It(o))),
      d = A.useRef(u),
      f = A.useRef(),
      [p, h] = ((e) => ("object" == typeof e ? [e.enter, e.exit] : [e, e]))(a),
      m = A.useCallback(() => {
        const e = ((e, t) => {
          switch (e) {
            case 1:
            case 0:
              return 2;
            case 4:
            case 3:
              return It(t);
          }
        })(d.current._s, i);
        e && Ft(e, c, d, f, s);
      }, [s, i]),
      g = A.useCallback(
        (a) => {
          const l = (e) => {
              switch ((Ft(e, c, d, f, s), e)) {
                case 1:
                  p >= 0 && (f.current = setTimeout(m, p));
                  break;
                case 4:
                  h >= 0 && (f.current = setTimeout(m, h));
                  break;
                case 0:
                case 3:
                  f.current = ((e, t) =>
                    setTimeout(() => {
                      isNaN(document.body.offsetTop) || e(t + 1);
                    }, 0))(l, e);
              }
            },
            o = d.current.isEnter;
          ("boolean" != typeof a && (a = !o),
            a ? !o && l(e ? (n ? 0 : 1) : 2) : o && l(t ? (r ? 3 : 4) : It(i)));
        },
        [m, s, e, t, n, r, p, h, i],
      );
    return (A.useEffect(() => () => clearTimeout(f.current), []), [u, g, m]);
  },
  Ut = (e) => {
    const [t, n] = (({
        initialOpen: e,
        initialMounted: t,
        unmountOnClose: n,
        transition: r,
        transitionTimeout: a = 500,
      } = {}) => {
        const [{ status: l }, o, i] = Dt({
          initialEntered: e,
          mountOnEnter: !t,
          unmountOnExit: n,
          timeout: a,
          enter: Je(r, "open"),
          exit: Je(r, "close"),
        });
        return [{ state: bt[l], endTransition: i }, o];
      })(e),
      [r, a] = A.useState();
    return [
      { menuItemFocus: r, ...t },
      n,
      (e, t) => {
        (a({ position: e, alwaysUpdate: t }), n(!0));
      },
    ];
  },
  Bt = A.forwardRef(function (
    {
      "aria-label": e,
      captureFocus: t,
      initialOpen: n,
      menuButton: r,
      instanceRef: a,
      onMenuChange: l,
      ...o
    },
    i,
  ) {
    const [s, u, c] = Ut(o),
      { state: d } = s,
      f = Ye(d),
      p = A.useRef(null),
      h = ((e, t) => {
        const [n] = A.useState({});
        return {
          onMouseDown: () => {
            n.v = e && "closed" !== e;
          },
          onClick: (e) => (n.v ? (n.v = !1) : t(!0, e)),
        };
      })(d, (e, t) => c(t.detail ? void 0 : yt.FIRST)),
      m = A.useCallback(
        (e) => {
          (u(!1), e.key && p.current.focus());
        },
        [u],
      ),
      g = et(r, { open: f });
    if (!g || !g.type) throw new Error("Menu requires a menuButton prop.");
    const v = {
      ref: Pt(g.ref, p),
      ...rt(
        {
          onKeyDown: (e) => {
            switch (e.key) {
              case mt.UP:
                c(yt.LAST);
                break;
              case mt.DOWN:
                c(yt.FIRST);
                break;
              default:
                return;
            }
            e.preventDefault();
          },
          ...h,
        },
        g.props,
      ),
    };
    "MenuButton" === g.type[tt] && (v.isOpen = f);
    const y = A.cloneElement(g, v);
    return (
      ((e, t) => {
        const n = A.useRef(t);
        A.useEffect(() => {
          (n.current !== t && et(e, { open: t }), (n.current = t));
        }, [e, t]);
      })(l, f),
      A.useImperativeHandle(a, () => ({ openMenu: c, closeMenu: () => u(!1) })),
      B.jsxs(A.Fragment, {
        children: [
          y,
          B.jsx(Mt, {
            ...o,
            ...s,
            "aria-label":
              e ||
              ("string" == typeof g.props.children ? g.props.children : "Menu"),
            anchorRef: p,
            ref: i,
            onClose: m,
          }),
        ],
      })
    );
  }),
  At = (e, t, n, r) => {
    const { submenuCloseDelay: a } = A.useContext(ht),
      {
        isParentOpen: l,
        submenuCtx: o,
        dispatch: i,
        updateItems: s,
      } = A.useContext(ct),
      u = () => {
        !n && !r && i(gt.SET, e.current);
      },
      c = () => {
        !r && i(gt.UNSET, e.current);
      };
    return (
      ((e, t, n) => {
        Lt(() => {
          if (e) return;
          const r = t.current;
          return (
            n(r, !0),
            () => {
              n(r);
            }
          );
        }, [e, t, n]);
      })(r, e, s),
      A.useEffect(() => {
        n && l && t.current && t.current.focus();
      }, [t, n, l]),
      {
        setHover: u,
        onBlur: (e) => {
          n && !e.currentTarget.contains(e.relatedTarget) && c();
        },
        onPointerMove: (e) => {
          r || (e.stopPropagation(), o.on(a, u, u));
        },
        onPointerLeave: (e, t) => {
          (o.off(), !t && c());
        },
      }
    );
  },
  $t = ((e, t) => {
    const n = A.memo(t),
      r = A.forwardRef((e, t) => {
        const r = A.useRef(null);
        return B.jsx(n, {
          ...e,
          itemRef: r,
          externalRef: t,
          isHovering: A.useContext(ut) === r.current,
        });
      });
    return ((r.displayName = `WithHovering(${e})`), r);
  })(
    "MenuItem",
    function ({
      className: e,
      value: t,
      href: n,
      type: r,
      checked: a,
      disabled: l,
      children: o,
      onClick: i,
      isHovering: s,
      itemRef: u,
      externalRef: c,
      ...d
    }) {
      const f = !!l,
        { setHover: p, ...h } = At(u, u, s, f),
        m = A.useContext(ft),
        g = A.useContext(pt),
        v = "radio" === r,
        y = "checkbox" === r,
        b = !(!n || f || v || y),
        k = v ? g.value === t : !!y && !!a,
        x = (e) => {
          if (f) return (e.stopPropagation(), void e.preventDefault());
          const n = { value: t, syntheticEvent: e };
          (void 0 !== e.key && (n.key = e.key),
            y && (n.checked = !k),
            v && (n.name = g.name),
            et(i, n),
            v && et(g.onRadioChange, n),
            m.handleClick(n, y || v));
        },
        w = A.useMemo(
          () => ({ type: r, disabled: f, hover: s, checked: k, anchor: b }),
          [r, f, s, k, b],
        ),
        _ = rt(
          {
            ...h,
            onPointerDown: p,
            onKeyDown: (e) => {
              if (s)
                switch (e.key) {
                  case mt.ENTER:
                    e.preventDefault();
                  case mt.SPACE:
                    b ? u.current.click() : x(e);
                }
            },
            onClick: x,
          },
          d,
        ),
        S = {
          role: v ? "menuitemradio" : y ? "menuitemcheckbox" : "menuitem",
          "aria-checked": v || y ? k : void 0,
          ...lt(f, s),
          ..._,
          ref: Pt(c, u),
          className: it({
            block: st,
            element: "item",
            modifiers: w,
            className: e,
          }),
          children: A.useMemo(() => et(o, w), [o, w]),
        };
      return b
        ? B.jsx("li", { role: "none", children: B.jsx("a", { href: n, ...S }) })
        : B.jsx("li", { ...S });
    },
  );
function Vt(e) {
  const [t, n] = A.useState(null),
    [r, a] = A.useState(null),
    l = A.useRef(null);
  A.useEffect(() => {
    (Xe(() => import("./phone-ocj_V1CR.js"), []).then(n),
      Xe(() => import("./flags-Ds5sOQas.js"), __vite__mapDeps([0, 1])).then(a));
  }, []);
  const o = A.useRef(0),
    i = A.useRef(NaN),
    [s, u] = A.useState(e.defaultValue || ""),
    [c, d] = A.useState(e.defaultCountry || "ZZ");
  A.useEffect(() => {
    e.defaultCountry && d(e.defaultCountry);
  }, [e.defaultCountry]);
  const f = A.useMemo(() => {
    if (t) {
      const e = new t.AsYouType(c);
      if ((u(e.input(s)), e.isValid())) {
        const t = [
          "800",
          "808",
          "870",
          "870",
          "878",
          "881",
          "882",
          "883",
          "888",
          "979",
        ].includes(e.getCallingCode() ?? "");
        (e.getCountry() || t) && d(e.getCountry() || "ZZ");
      }
      return e;
    }
    return null;
  }, [c, s, t]);
  (A.useEffect(() => {
    "string" == typeof e.value && u(e.value);
  }, [e.value]),
    A.useEffect(() => {
      var n, r, a;
      t &&
        (null == (n = e.onValueChange) || n.call(e, s),
        null == (r = e.onE164ValueChange) ||
          r.call(e, f.getNumberValue() ?? ""),
        null == (a = e.onSuccessChange) || a.call(e, !0 === f.isValid()));
    }, [f, s, t, e]),
    A.useEffect(() => {
      l.current &&
        !isNaN(i.current) &&
        ((l.current.selectionStart = i.current),
        (l.current.selectionEnd = i.current),
        (i.current = NaN));
    }, [s]));
  const p = A.useMemo(
    () =>
      t
        ? null == t
          ? void 0
          : t
              .getCountries()
              .map((e) => {
                const n = (null == r ? void 0 : r.hasFlag(e))
                  ? r.Flags[e]
                  : null;
                return [
                  B.jsx(
                    $t,
                    {
                      value: e,
                      onClick: () => {
                        (d(e), f && (f.reset(), u(f.input(s))));
                      },
                      children: B.jsxs("div", {
                        style: { display: "flex", alignItems: "center" },
                        children: [
                          B.jsx("div", {
                            style: {
                              height: 23,
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                            },
                            children: n ? B.jsx(n, { height: 18 }) : e,
                          }),
                          B.jsxs("div", {
                            className: "HideText",
                            style: { marginLeft: 8 },
                            children: [
                              "+",
                              t.getCountryCallingCode(e),
                              " ",
                              B.jsx("span", {
                                style: { color: "gray" },
                                children: new Intl.DisplayNames(
                                  [navigator.language],
                                  { type: "region" },
                                ).of(e),
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    e,
                  ),
                  e,
                ];
              })
              .sort((e, t) => e[1].localeCompare(t[1]))
              .map((e) => e[0])
        : [],
    [r, f, s, t],
  );
  return B.jsx(B.Fragment, {
    children: B.jsxs("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        width: "100%",
        maxWidth: "350px",
      },
      children: [
        B.jsx(Bt, {
          menuStyle: { overflowY: "auto", maxHeight: "280px" },
          menuButton: B.jsx(wt, {
            className: oe("input"),
            style: {
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
              height: "100%",
              cursor: "pointer",
            },
            children: (null == r ? void 0 : r.hasFlag(c))
              ? A.createElement(r.Flags[c], { height: 18 })
              : B.jsx("div", { style: { height: "18px", width: "27px" } }),
          }),
          transition: !0,
          children: p,
        }),
        B.jsx("input", {
          value: s,
          className: oe("input", e.className),
          style: { flex: 1 },
          placeholder: "phone number",
          onKeyDown: (e) => {
            o.current =
              e.currentTarget.selectionEnd ??
              e.currentTarget.selectionStart ??
              0;
          },
          onChange: (e) => {
            var t, n, r;
            if (!f) return;
            const a = s;
            let l = e.target.value;
            const p =
                (null == (t = a.match(/\d|\+/g)) ? void 0 : t.join("")) ?? "",
              h = (null == (n = l.match(/\d|\+/g)) ? void 0 : n.join("")) ?? "";
            if ((f.reset(), (l = f.input(l)), f.getCountry() !== c)) {
              const e = [
                "800",
                "808",
                "870",
                "870",
                "878",
                "881",
                "882",
                "883",
                "888",
                "979",
              ].includes(f.getCallingCode() ?? "");
              (f.getCountry() || e) && d(f.getCountry() || "ZZ");
            }
            u(l);
            const m = o.current;
            let g =
              (null == (r = a.slice(0, m).match(/\d|\+/g))
                ? void 0
                : r.length) ?? 0;
            g += h.length - p.length;
            let v = g,
              y = 0;
            for (const o of l) {
              if (0 === v) break;
              (y++, o.match(/\d|\+/) && v--);
            }
            i.current = y;
          },
          ref: l,
        }),
      ],
    }),
  });
}
const Wt = "_Login_1q412_1",
  Ht = "_Hero_1q412_12",
  Qt = "_Logo_1q412_31",
  qt = "_Segmented_1q412_38",
  Kt = "_Segment_1q412_38",
  Xt = "_active_1q412_59",
  Gt = "_Form_1q412_67",
  Yt = "_TextLink_1q412_74",
  Zt = "_Footnote_1q412_87",
  Jt = "_Error_1q412_96",
  en = "_Consent_1q412_130",
  tn = "_open_1q412_146",
  nn = "_ConsentCard_1q412_151";
function rn() {
  const { setLoggedIn: e } = ae(),
    [t, n] = A.useState("email"),
    [p, h] = A.useState(!1),
    [m, g] = A.useState(""),
    [v, y] = A.useState(!1),
    [b, k] = A.useState(""),
    [x, w] = A.useState(""),
    [_, S] = A.useState(""),
    [C, j] = A.useState(""),
    [N, E] = A.useState(!1),
    [L, T] = A.useState(""),
    [P, R] = A.useState(!1),
    M = A.useCallback(
      async (t, n) => {
        var i;
        const s = null == (i = (await r(t)).users) ? void 0 : i[0];
        if (!s)
          return (
            g("Không lấy được thông tin tài khoản, thử lại nhé"),
            void h(!1)
          );
        (await a({ token: t, refreshToken: n, user: s }),
          l({ type: "refreshMoments" }),
          o({ type: "loggedIn" }),
          e(!0));
      },
      [e],
    ),
    z = A.useCallback(async () => {
      (g(""), h(!0));
      try {
        (await i(C), R(!0));
      } catch (e) {
        g(s(e));
      } finally {
        h(!1);
      }
    }, [C]),
    O = A.useCallback(async () => {
      (y(!1), g(""), h(!0));
      try {
        if ("phone" === t) {
          const e = await u(C, L),
            t = await c(e.token);
          await M(t.idToken, t.refreshToken);
        } else {
          const e = await d(b, x);
          await M(e.idToken, e.refreshToken);
        }
      } catch (e) {
        (g(s(e)), h(!1));
      }
    }, [t, C, L, b, x, M]),
    I = A.useCallback((e) => {
      (n(e), g(""), T(""), R(!1), S(""), j(""));
    }, []),
    F =
      "phone" === t
        ? N && 6 === L.length && !p
        : !!b &&
          !!x &&
          (function (e) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
          })(b) &&
          !p;
  return B.jsxs("div", {
    className: Wt,
    children: [
      !!m &&
        B.jsxs("div", {
          className: Jt,
          role: "alert",
          children: [
            B.jsx("span", { children: m }),
            B.jsx("button", {
              type: "button",
              "aria-label": "Đóng",
              onClick: () => g(""),
              children: B.jsx(Ae, {}),
            }),
          ],
        }),
      B.jsxs("div", {
        className: Ht,
        children: [
          B.jsx("span", { className: Qt, children: B.jsx(We, {}) }),
          B.jsx("h1", { children: f }),
          B.jsx("p", { children: "Đăng nhập bằng tài khoản Locket của bạn" }),
        ],
      }),
      B.jsxs("div", {
        className: qt,
        role: "tablist",
        children: [
          B.jsx("button", {
            type: "button",
            role: "tab",
            "aria-selected": "email" === t,
            className: oe(Kt, "email" === t && Xt),
            onClick: () => I("email"),
            children: "Email",
          }),
          B.jsx("button", {
            type: "button",
            role: "tab",
            "aria-selected": "phone" === t,
            className: oe(Kt, "phone" === t && Xt),
            onClick: () => I("phone"),
            children: "Số điện thoại",
          }),
        ],
      }),
      B.jsxs("div", {
        className: Gt,
        children: [
          "email" === t
            ? B.jsxs(B.Fragment, {
                children: [
                  B.jsx("input", {
                    className: "input",
                    type: "email",
                    name: "email",
                    placeholder: "Email",
                    autoComplete: "username",
                    disabled: p,
                    value: b,
                    onChange: (e) => k(e.target.value),
                  }),
                  B.jsx("input", {
                    className: "input",
                    type: "password",
                    name: "password",
                    placeholder: "Mật khẩu",
                    autoComplete: "current-password",
                    disabled: p,
                    value: x,
                    onChange: (e) => w(e.target.value),
                  }),
                ],
              })
            : B.jsxs(B.Fragment, {
                children: [
                  B.jsx(Vt, {
                    className: "input",
                    value: _,
                    onValueChange: S,
                    onE164ValueChange: j,
                    onSuccessChange: E,
                  }),
                  P &&
                    B.jsx("input", {
                      className: "input",
                      type: "text",
                      inputMode: "numeric",
                      name: "otp",
                      placeholder: "Mã OTP gồm 6 số",
                      maxLength: 6,
                      disabled: p,
                      value: L,
                      onChange: (e) =>
                        T(e.target.value.replace(/\D/g, "").slice(0, 6)),
                    }),
                ],
              }),
          "phone" !== t || P
            ? B.jsx("button", {
                type: "button",
                className: "btn",
                disabled: !F,
                onClick: () => y(!0),
                children: p ? B.jsx(qe, { "data-size": "3" }) : "Đăng nhập",
              })
            : B.jsx("button", {
                type: "button",
                className: "btn",
                disabled: !N || p,
                onClick: () => {
                  z();
                },
                children: p
                  ? B.jsx(qe, { "data-size": "3" })
                  : N
                    ? "Gửi mã OTP"
                    : "Nhập số hợp lệ",
              }),
          "phone" === t &&
            P &&
            B.jsx("button", {
              type: "button",
              className: Yt,
              disabled: p,
              onClick: () => {
                z();
              },
              children: "Gửi lại mã",
            }),
        ],
      }),
      B.jsxs("p", {
        className: Zt,
        children: [
          f,
          " là client không chính thức, không liên kết với Locket Labs, Inc.",
        ],
      }),
      B.jsx("div", {
        className: oe(en, v && tn),
        "aria-hidden": !v,
        children: B.jsxs("div", {
          className: nn,
          children: [
            B.jsx("h2", { children: "Trước khi tiếp tục" }),
            B.jsxs("p", {
              children: [
                f,
                " không phải và không liên kết gì với Locket hay Locket Labs, Inc. Đây là một client không chính thức — khi đăng nhập, bạn chấp nhận rủi ro tài khoản của mình có thể bị khoá bất cứ lúc nào.",
              ],
            }),
            B.jsx("p", {
              children:
                "Nếu bạn không chắc mình đang làm gì, hãy dừng lại ở đây.",
            }),
            B.jsx("button", {
              type: "button",
              className: "btn",
              onClick: () => {
                O();
              },
              children: "Tôi hiểu, tiếp tục",
            }),
            B.jsx("button", {
              type: "button",
              className: "btn btn-soft",
              onClick: () => y(!1),
              children: "Quay lại",
            }),
          ],
        }),
      }),
    ],
  });
}
const an = "_Loading_17ufw_1";
function ln() {
  return B.jsx("div", {
    className: an,
    children: B.jsx(qe, { "data-size": "3" }),
  });
}
const on = "_Nav_te3jl_1",
  sn = "_Tab_te3jl_11",
  un = "_active_te3jl_24",
  cn = "_accent_te3jl_27",
  dn = "_Icon_te3jl_31",
  fn = "_Label_te3jl_39",
  pn = "_Badge_te3jl_45",
  hn = [
    { id: "feed", label: "Khoảnh khắc", icon: B.jsx(Ee, {}) },
    { id: "gallery", label: "Thư viện", icon: B.jsx(Te, {}) },
    { id: "compose", label: "Đăng", icon: B.jsx(ze, {}) },
    { id: "settings", label: "Cài đặt", icon: B.jsx(Fe, {}) },
  ];
function mn({ active: e, onChange: t, unread: n }) {
  return B.jsx("nav", {
    className: on,
    children: hn.map((r) =>
      B.jsxs(
        "button",
        {
          type: "button",
          "aria-label": r.label,
          "aria-current": e === r.id,
          onClick: () => t(r.id),
          className: oe(sn, e === r.id && un, "compose" === r.id && cn),
          children: [
            B.jsxs("span", {
              className: dn,
              children: [
                r.icon,
                "feed" === r.id &&
                  !!n &&
                  n > 0 &&
                  B.jsx("span", { className: pn, children: n > 9 ? "9+" : n }),
              ],
            }),
            B.jsx("span", { className: fn, children: r.label }),
          ],
        },
        r.id,
      ),
    ),
  });
}
const gn = {
  IconButton: "_IconButton_1udaj_1",
  active: "_active_1udaj_23",
  brand: "_brand_1udaj_27",
  danger: "_danger_1udaj_35",
};
function vn({
  children: e,
  label: t,
  onClick: n,
  disabled: r,
  active: a,
  tone: l = "default",
  className: o,
}) {
  return B.jsx("button", {
    type: "button",
    title: t,
    "aria-label": t,
    onClick: n,
    disabled: r,
    className: oe(gn.IconButton, gn[l], a && gn.active, o),
    children: e,
  });
}
const yn = "#42210B";
function bn({ id: e, className: t }) {
  const n = A.useId().replace(/:/g, ""),
    r = `face-${n}`,
    a = `flame-${n}`,
    l = `heart-${n}`,
    o = {
      viewBox: "0 0 32 32",
      width: "1em",
      height: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      className: t,
      "aria-hidden": !0,
    },
    i = B.jsxs("radialGradient", {
      id: r,
      cx: "0.5",
      cy: "0.32",
      r: "0.78",
      children: [
        B.jsx("stop", { offset: "0%", stopColor: "#FFEB8A" }),
        B.jsx("stop", { offset: "60%", stopColor: "#FFC83D" }),
        B.jsx("stop", { offset: "100%", stopColor: "#F0A315" }),
      ],
    });
  return "fire" === e
    ? B.jsxs("svg", {
        ...o,
        children: [
          B.jsx("defs", {
            children: B.jsxs("linearGradient", {
              id: a,
              x1: "0.5",
              y1: "1",
              x2: "0.5",
              y2: "0",
              children: [
                B.jsx("stop", { offset: "0%", stopColor: "#F2691B" }),
                B.jsx("stop", { offset: "55%", stopColor: "#FB9E28" }),
                B.jsx("stop", { offset: "100%", stopColor: "#FFD447" }),
              ],
            }),
          }),
          B.jsx("path", {
            d: "M16 30.5c-6 0-10.5-4.2-10.5-10 0-5.6 4.2-8.8 6.4-15 .8 3.4 2 5.6 3.6 7.4 1-2.9 1.3-6.8.6-11.4 5.4 4.2 10.4 10.6 10.4 19 0 5.8-4.5 10-10.5 10Z",
            fill: `url(#${a})`,
          }),
          B.jsx("path", {
            d: "M16 30.5c-3 0-5.2-2.1-5.2-5 0-3 2.3-4.6 3.4-7.7.9 1.9 1.6 2.9 2.6 3.9.6-1.4.8-3 .6-4.8 2.6 2.4 3.8 5.5 3.8 8.6 0 2.9-2.2 5-5.2 5Z",
            fill: "#FFE79A",
            opacity: "0.9",
          }),
        ],
      })
    : "love" === e
      ? B.jsxs("svg", {
          ...o,
          children: [
            B.jsx("defs", {
              children: B.jsxs("linearGradient", {
                id: l,
                x1: "0.5",
                y1: "0",
                x2: "0.5",
                y2: "1",
                children: [
                  B.jsx("stop", { offset: "0%", stopColor: "#FF6E7F" }),
                  B.jsx("stop", { offset: "100%", stopColor: "#E01B3C" }),
                ],
              }),
            }),
            B.jsx("path", {
              d: "M16 28.4S3.2 20.6 3.2 12.1C3.2 7.6 6.7 4.3 10.7 4.3c2.4 0 4.4 1.2 5.3 3 0.9-1.8 2.9-3 5.3-3 4 0 7.5 3.3 7.5 7.8 0 8.5-12.8 16.3-12.8 16.3Z",
              fill: `url(#${l})`,
            }),
            B.jsx("path", {
              d: "M9.4 7.6c-1.8 0.4-3.1 1.9-3.3 3.8 1.5-0.3 2.9-1.7 3.3-3.8Z",
              fill: "#FFFFFF",
              opacity: "0.5",
            }),
          ],
        })
      : B.jsxs("svg", {
          ...o,
          children: [
            B.jsx("defs", { children: i }),
            B.jsx("circle", {
              cx: "16",
              cy: "16",
              r: "15",
              fill: `url(#${r})`,
            }),
            "joy" === e &&
              B.jsxs(B.Fragment, {
                children: [
                  B.jsx("path", {
                    d: "M7.6 13.6c1-2 2.6-3.1 4.3-3.1s3.3 1.1 4.3 3.1",
                    fill: "none",
                    stroke: yn,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                  }),
                  B.jsx("path", {
                    d: "M15.8 13.6c1-2 2.6-3.1 4.3-3.1s3.3 1.1 4.3 3.1",
                    fill: "none",
                    stroke: yn,
                    strokeWidth: "2",
                    strokeLinecap: "round",
                  }),
                  B.jsx("path", {
                    d: "M7.4 18.2h17.2c0 4.7-3.8 7.8-8.6 7.8s-8.6-3.1-8.6-7.8Z",
                    fill: yn,
                  }),
                  B.jsx("path", {
                    d: "M11 25.1c1.4-1.6 8.6-1.6 10 0a8.7 8.7 0 0 1-10 0Z",
                    fill: "#F2506A",
                  }),
                  B.jsx("path", {
                    d: "M2.4 15.6c1.6 1.5 2.6 3.4 2.9 5.6-2-0.6-3.4-2-3.6-3.8Z",
                    fill: "#59C2F0",
                  }),
                  B.jsx("path", {
                    d: "M29.6 15.6c-1.6 1.5-2.6 3.4-2.9 5.6 2-0.6 3.4-2 3.6-3.8Z",
                    fill: "#59C2F0",
                  }),
                ],
              }),
            "wow" === e &&
              B.jsxs(B.Fragment, {
                children: [
                  B.jsx("ellipse", {
                    cx: "11.2",
                    cy: "12.6",
                    rx: "2.1",
                    ry: "2.6",
                    fill: yn,
                  }),
                  B.jsx("ellipse", {
                    cx: "20.8",
                    cy: "12.6",
                    rx: "2.1",
                    ry: "2.6",
                    fill: yn,
                  }),
                  B.jsx("ellipse", {
                    cx: "16",
                    cy: "21.6",
                    rx: "3.6",
                    ry: "4.6",
                    fill: yn,
                  }),
                ],
              }),
            "sad" === e &&
              B.jsxs(B.Fragment, {
                children: [
                  B.jsx("ellipse", {
                    cx: "11.2",
                    cy: "13.4",
                    rx: "2",
                    ry: "2.5",
                    fill: yn,
                  }),
                  B.jsx("ellipse", {
                    cx: "20.8",
                    cy: "13.4",
                    rx: "2",
                    ry: "2.5",
                    fill: yn,
                  }),
                  B.jsx("path", {
                    d: "M11.4 24c1.2-1.9 2.9-2.9 4.6-2.9s3.4 1 4.6 2.9",
                    fill: "none",
                    stroke: yn,
                    strokeWidth: "1.9",
                    strokeLinecap: "round",
                  }),
                  B.jsx("path", {
                    d: "M9.2 16.4c1.6 2.4 2.5 4.4 2.5 5.8a2.5 2.5 0 0 1-5 0c0-1.4 0.9-3.4 2.5-5.8Z",
                    fill: "#59C2F0",
                  }),
                ],
              }),
          ],
        });
}
const kn = { love: "😍", joy: "😂", wow: "😮", sad: "😢", fire: "🔥" },
  xn = {
    love: "Thích",
    joy: "Buồn cười",
    wow: "Bất ngờ",
    sad: "Buồn",
    fire: "Cháy",
  },
  wn = ["love", "joy", "wow", "sad", "fire"],
  _n = "_Actions_dl0xs_1",
  Sn = "_Reactions_dl0xs_11",
  Cn = "_Reaction_dl0xs_11",
  jn = "_pending_dl0xs_43",
  Nn = "_ReplyRow_dl0xs_48",
  En = "_ReplyInput_dl0xs_55",
  Ln = "_Send_dl0xs_83",
  Tn = "_Toast_dl0xs_107",
  Pn = "_visible_dl0xs_125",
  Rn = "_error_dl0xs_130";
function Mn({ moment: t }) {
  const [n, r] = A.useState(""),
    [a, l] = A.useState(!1),
    [o, i] = A.useState(null),
    [s, u] = A.useState(null),
    c = A.useRef(null),
    d = A.useCallback((e) => {
      (u(e),
        c.current && clearTimeout(c.current),
        (c.current = setTimeout(() => u(null), 2e3)));
    }, []);
  (A.useEffect(() => {
    (r(""), u(null), i(null));
  }, [t.md5]),
    A.useEffect(
      () => () => {
        c.current && clearTimeout(c.current);
      },
      [],
    ));
  const f = !!t.momentUid,
    p = A.useCallback(
      async (e) => {
        if (t.momentUid && !o) {
          i(e);
          try {
            (await g({
              momentUid: t.momentUid,
              ownerUid: t.user.uid,
              reaction: kn[e],
            }),
              d({ kind: "ok", text: `Đã thả ${xn[e].toLowerCase()}` }));
          } catch {
            d({ kind: "error", text: "Không gửi được reaction" });
          } finally {
            i(null);
          }
        }
      },
      [t.momentUid, t.user.uid, o, d],
    ),
    h = A.useCallback(async () => {
      const o = n.trim();
      if (o && t.momentUid && !a) {
        l(!0);
        try {
          (await (({ message: t, receiverUid: n, momentUid: r = null }, a) =>
            e({
              endpoint: "sendChatMessageV2",
              token: a,
              body: {
                data: {
                  msg: t,
                  client_token: crypto.randomUUID(),
                  moment_uid: r,
                  receiver_uid: n,
                },
              },
            }))({
            message: o,
            receiverUid: t.user.uid,
            momentUid: t.momentUid,
          }),
            r(""),
            d({ kind: "ok", text: "Đã gửi" }));
        } catch {
          d({ kind: "error", text: "Không gửi được tin nhắn" });
        } finally {
          l(!1);
        }
      }
    }, [n, t.momentUid, t.user.uid, a, d]),
    m = t.user.username.trim().split(/\s+/).slice(-1)[0] || "";
  return B.jsxs("div", {
    className: _n,
    children: [
      B.jsx("span", {
        className: oe(
          Tn,
          !!s && Pn,
          "error" === (null == s ? void 0 : s.kind) && Rn,
        ),
        role: "status",
        children: (null == s ? void 0 : s.text) ?? "",
      }),
      B.jsx("div", {
        className: Sn,
        children: wn.map((e) =>
          B.jsx(
            "button",
            {
              type: "button",
              className: oe(Cn, o === e && jn),
              title: f
                ? xn[e]
                : "Khoảnh khắc này được lưu trước khi loocket hỗ trợ reaction",
              "aria-label": xn[e],
              disabled: !f || !!o,
              onClick: () => {
                p(e);
              },
              children: B.jsx(bn, { id: e }),
            },
            e,
          ),
        ),
      }),
      B.jsxs("div", {
        className: Nn,
        children: [
          B.jsx("input", {
            className: En,
            value: n,
            disabled: !f || a,
            maxLength: 500,
            placeholder: f ? `Trả lời ${m}…` : "Không trả lời được ảnh cũ",
            onChange: (e) => r(e.target.value),
            onKeyDown: (e) => {
              ("Enter" !== e.key || e.shiftKey || (e.preventDefault(), h()),
                e.stopPropagation());
            },
          }),
          B.jsx("button", {
            type: "button",
            className: Ln,
            "aria-label": "Gửi",
            disabled: !f || a || !n.trim(),
            onClick: () => {
              h();
            },
            children: a ? B.jsx(qe, {}) : B.jsx(Ie, {}),
          }),
        ],
      }),
    ],
  });
}
const zn = "_Root_1ip2o_1",
  On = "_Pill_1ip2o_7",
  In = "_open_1ip2o_23",
  Fn = "_PillAvatar_1ip2o_31",
  Dn = "_PillIcon_1ip2o_37",
  Un = "_PillLabel_1ip2o_50",
  Bn = "_Chevron_1ip2o_60",
  An = "_Scrim_1ip2o_71",
  $n = "_Panel_1ip2o_80",
  Vn = "_Option_1ip2o_107",
  Wn = "_selected_1ip2o_121",
  Hn = "_OptionName_1ip2o_121",
  Qn = "_OptionText_1ip2o_125",
  qn = "_OptionMeta_1ip2o_141",
  Kn = "_Check_1ip2o_149",
  Xn = "_Divider_1ip2o_155",
  Gn = "_Avatar_1ip2o_161",
  Yn = "_Fallback_1ip2o_170",
  Zn = "_EveryoneIcon_1ip2o_180";
function Jn({ src: e, name: t, className: n }) {
  return e
    ? B.jsx("img", { className: oe(Gn, n), src: e, alt: "" })
    : B.jsx("span", {
        className: oe(Gn, Yn, n),
        children: t.charAt(0).toUpperCase(),
      });
}
function er({ friends: e, selected: t, onSelect: n, onOpenChange: r }) {
  const [a, l] = A.useState(!1),
    o = A.useRef(null);
  A.useEffect(() => {
    null == r || r(a);
  }, [a, r]);
  const i = e.find((e) => e.uid === t) ?? null,
    s = i ? i.displayName : "Tất cả bạn bè";
  A.useEffect(() => {
    if (!a) return;
    const e = (e) => {
      "Escape" === e.key && (e.stopPropagation(), l(!1));
    };
    return (
      window.addEventListener("keydown", e, !0),
      () => window.removeEventListener("keydown", e, !0)
    );
  }, [a]);
  const u = (e) => {
    (n(e), l(!1));
  };
  return B.jsxs("div", {
    className: zn,
    ref: o,
    children: [
      B.jsxs("button", {
        type: "button",
        className: oe(On, a && In),
        "aria-haspopup": "listbox",
        "aria-expanded": a,
        disabled: 0 === e.length,
        onClick: () => l((e) => !e),
        children: [
          i
            ? B.jsx(Jn, { src: i.avatar, name: i.displayName, className: Fn })
            : B.jsx("span", { className: Dn, children: B.jsx(Be, {}) }),
          B.jsx("span", { className: Un, children: s }),
          B.jsx(xe, { className: Bn }),
        ],
      }),
      a &&
        B.jsxs(B.Fragment, {
          children: [
            B.jsx("button", {
              type: "button",
              className: An,
              "aria-label": "Đóng danh sách",
              onClick: () => l(!1),
            }),
            B.jsxs("div", {
              className: $n,
              role: "listbox",
              children: [
                B.jsxs("button", {
                  type: "button",
                  role: "option",
                  "aria-selected": null === t,
                  className: oe(Vn, null === t && Wn),
                  onClick: () => u(null),
                  children: [
                    B.jsx("span", {
                      className: oe(Gn, Zn),
                      children: B.jsx(Be, {}),
                    }),
                    B.jsxs("span", {
                      className: Qn,
                      children: [
                        B.jsx("span", {
                          className: Hn,
                          children: "Tất cả bạn bè",
                        }),
                        B.jsxs("span", {
                          className: qn,
                          children: [e.length, " người"],
                        }),
                      ],
                    }),
                    null === t && B.jsx(ke, { className: Kn }),
                  ],
                }),
                B.jsx("div", { className: Xn }),
                e.map((e) =>
                  B.jsxs(
                    "button",
                    {
                      type: "button",
                      role: "option",
                      "aria-selected": t === e.uid,
                      className: oe(Vn, t === e.uid && Wn),
                      onClick: () => u(e.uid),
                      children: [
                        B.jsx(Jn, { src: e.avatar, name: e.displayName }),
                        B.jsxs("span", {
                          className: Qn,
                          children: [
                            B.jsx("span", {
                              className: Hn,
                              children: e.displayName,
                            }),
                            !!e.username &&
                              B.jsxs("span", {
                                className: qn,
                                children: ["@", e.username],
                              }),
                          ],
                        }),
                        t === e.uid && B.jsx(ke, { className: Kn }),
                      ],
                    },
                    e.uid,
                  ),
                ),
              ],
            }),
          ],
        }),
    ],
  });
}
const tr = "_Feed_1bafh_1",
  nr = "_TopBar_1bafh_7",
  rr = "_PickerSlot_1bafh_21",
  ar = "_Actions_1bafh_33",
  lr = "_Brand_1bafh_39",
  or = "_spinning_1bafh_44",
  ir = "_Body_1bafh_53",
  sr = "_Card_1bafh_63",
  ur = "_Photo_1bafh_73",
  cr = "_Caption_1bafh_89",
  dr = "_Meta_1bafh_107",
  fr = "_Avatar_1bafh_120",
  pr = "_AvatarFallback_1bafh_129",
  hr = "_Name_1bafh_139",
  mr = "_Time_1bafh_148",
  gr = "_Pager_1bafh_154",
  vr = "_Counter_1bafh_162",
  yr = "_NewPill_1bafh_170",
  br = "_visible_1bafh_191",
  kr = "_Empty_1bafh_197",
  xr = "_EmptyIcon_1bafh_217",
  wr = "_EmptyHint_1bafh_223";
function _r({ date: e }) {
  const [t, n] = A.useState(() => $e(e));
  return (
    A.useEffect(() => {
      n($e(e));
      const t = setInterval(() => n($e(e)), 1e3);
      return () => clearInterval(t);
    }, [e]),
    B.jsx("span", { className: mr, children: t })
  );
}
function Sr() {
  return B.jsxs("div", {
    className: kr,
    children: [
      B.jsx("div", { className: xr, children: B.jsx(je, {}) }),
      B.jsx("h2", { children: "Chưa có khoảnh khắc nào" }),
      B.jsx("p", {
        children: "loocket sẽ tự động lưu lại khi bạn bè đăng ảnh mới.",
      }),
      B.jsx("p", {
        className: wr,
        children:
          "Muốn có ngay? Vào Cài đặt và bấm quét bạn bè để lấy khoảnh khắc mới nhất của từng người.",
      }),
    ],
  });
}
function Cr({
  moments: e,
  loading: t,
  index: n,
  setIndex: r,
  newCount: a,
  acknowledgeNew: o,
  active: i,
  friends: s,
  selectedFriend: u,
  onSelectFriend: c,
}) {
  const [d, f] = A.useState(!1),
    p = e.length,
    h = e[n],
    m = A.useRef(new Set()),
    g = i ? (null == h ? void 0 : h.momentUid) : void 0,
    y = A.useRef(!1),
    b = A.useRef(0),
    k = A.useRef(null),
    x = A.useRef(null),
    [w, _] = A.useState(!1);
  const [F, W] = A.useState(!1),
    [FD, WD] = A.useState(0),
    R = A.useRef(null),
    dyR = A.useRef(0);
  A.useEffect(() => {
    g &&
      !m.current.has(g) &&
      (m.current.add(g),
      v(g).catch(() => {
        m.current.delete(g);
      }));
  }, [g]);
  const S = A.useCallback(
    (e) => {
      r((t) => Math.min(Math.max(t + e, 0), Math.max(p - 1, 0)));
    },
    [r, p],
  );
  const T = A.useCallback(
    (e) => {
      y.current ||
        ((y.current = !0),
        S(e),
        setTimeout(() => {
          y.current = !1;
        }, 480));
    },
    [S],
  );
  A.useEffect(() => {
    const e = x.current;
    if (!i || 0 === p || !e) return;
    const t = (e) => {
        T(e);
      },
      n = (e) => {
        if (!w) {
          if ("r" === e.key || "R" === e.key) {
            d || (f(!0), l({ type: "refreshMoments" }));
            e.preventDefault();
            return;
          }
          if (
            "ArrowUp" === e.key ||
            "ArrowLeft" === e.key ||
            "k" === e.key
          )
            t(-1);
          else {
            if (
              "ArrowDown" !== e.key &&
              "ArrowRight" !== e.key &&
              "j" !== e.key
            )
              return;
            t(1);
          }
          e.preventDefault();
        }
      },
      r = (e) => {
        if (y.current) b.current = 0;
        else if (
          ((b.current += e.deltaY),
          k.current && clearTimeout(k.current),
          (k.current = setTimeout(() => {
            b.current = 0;
          }, 160)),
          Math.abs(b.current) >= 48)
        ) {
          const e = b.current > 0 ? 1 : -1;
          ((b.current = 0), t(e));
        }
      };
    return (
      window.addEventListener("keydown", n),
      e.addEventListener("wheel", r, { passive: !0 }),
      () => {
        (window.removeEventListener("keydown", n),
          e.removeEventListener("wheel", r),
          k.current && clearTimeout(k.current));
      }
    );
  }, [i, T, p, w, d]);
  A.useEffect(() => {
    for (const t of [1, -1, 2]) {
      const r = e[n + t];
      if (r)
        for (const e of [r.thumbnail_url, r.user.avatar]) {
          if (!e) continue;
          new Image().src = e;
        }
    }
  }, [n, e]);
  A.useEffect(() => {
    if (!F) return;
    const ap = (t, l) => {
        const a = R.current;
        if (!a) return;
        l - a.lt > 2 &&
          ((a.v = (t - a.ly) / Math.max(1, l - a.lt)), (a.ly = t), (a.lt = l));
        let o = t - a.y0;
        ((0 === n && o > 0) || (n === p - 1 && o < 0)) && (o *= 0.32);
        const i = x.current ? x.current.clientHeight : 600;
        Math.abs(o) > 0.9 * i && (o = 0.9 * (o > 0 ? 1 : -1));
        ((dyR.current = o), WD(o));
      },
      fin = () => {
        const a = R.current;
        if (!a) return;
        const l = x.current ? x.current.clientHeight : 600;
        let o = 0;
        a.v <= -0.38
          ? (o = 1)
          : a.v >= 0.38
            ? (o = -1)
            : dyR.current <= -0.18 * l
              ? (o = 1)
              : dyR.current >= 0.18 * l && (o = -1);
        ((R.current = null), (dyR.current = 0), WD(0), W(!1), o && S(o));
      },
      pmv = (t) => {
        const a = R.current;
        a && a.id === t.pointerId && ap(t.clientY, performance.now());
      },
      pu = (t) => {
        const a = R.current;
        a && a.id === t.pointerId && fin();
      },
      mmv = (t) => {
        const a = R.current;
        a && "m" === a.id && ap(t.clientY, performance.now());
      },
      mu = () => {
        const a = R.current;
        a && "m" === a.id && fin();
      };
    return (
      window.addEventListener("pointermove", pmv, { passive: !0 }),
      window.addEventListener("pointerup", pu),
      window.addEventListener("pointercancel", pu),
      window.addEventListener("mousemove", mmv, { passive: !0 }),
      window.addEventListener("mouseup", mu),
      () => {
        (window.removeEventListener("pointermove", pmv),
          window.removeEventListener("pointerup", pu),
          window.removeEventListener("pointercancel", pu),
          window.removeEventListener("mousemove", mmv),
          window.removeEventListener("mouseup", mu));
      }
    );
  }, [F, n, p, S]);
  const pdT = A.useRef(0);
  const dn = A.useCallback(
    (e) => {
      if (!i || t) return;
      if ("mouse" === e.pointerType && 0 !== e.button) return;
      const n = e.target;
      (n &&
        n.closest &&
        n.closest("input,textarea,button,a,select,[role=button]")) ||
        ((pdT.current = performance.now()),
        (R.current = {
          id: e.pointerId,
          y0: e.clientY,
          ly: e.clientY,
          lt: performance.now(),
          v: 0,
        }),
        (dyR.current = 0),
        WD(0),
        W(!0));
    },
    [i, t],
  );
  const dm = A.useCallback(
    (e) => {
      if (!i || t) return;
      if (0 !== e.button) return;
      if (performance.now() - pdT.current < 80) return;
      const n = e.target;
      (n &&
        n.closest &&
        n.closest("input,textarea,button,a,select,[role=button]")) ||
        ((R.current = {
          id: "m",
          y0: e.clientY,
          ly: e.clientY,
          lt: performance.now(),
          v: 0,
        }),
        (dyR.current = 0),
        WD(0),
        W(!0));
    },
    [i, t],
  );
  const C = A.useCallback(() => {
    d || (f(!0), l({ type: "refreshMoments" }));
  }, [d]);
  A.useEffect(() => {
    const e = (e) => {
      "refreshState" === e.type && "running" !== e.state && f(!1);
    };
    return (
      chrome.runtime.onMessage.addListener(e),
      () => chrome.runtime.onMessage.removeListener(e)
    );
  }, []);
  const j = A.useCallback(() => {
      h &&
        chrome.downloads.download({
          url: h.thumbnail_url,
          filename: `loocket-${String((null == h.user ? void 0 : h.user.username) || "moment").replace(/[^\p{L}\p{N}._-]+/gu, "_")}-${h.seconds || Date.now()}.jpg`,
          saveAs: !0,
        });
    }, [h]),
    N = A.useCallback(() => {
      (r(0), o());
    }, [r, o]);
  return B.jsxs("div", {
    className: tr,
    children: [
      B.jsxs("header", {
        className: nr,
        children: [
          B.jsx("span", { className: lr, children: B.jsx(We, {}) }),
          B.jsx("div", {
            className: rr,
            children: B.jsx(er, {
              friends: s,
              selected: u,
              onSelect: c,
              onOpenChange: _,
            }),
          }),
          B.jsxs("div", {
            className: ar,
            children: [
              B.jsx(vn, {
                label: "Tải ảnh này về",
                onClick: j,
                disabled: !h,
                children: B.jsx(Ce, {}),
              }),
              B.jsx(vn, {
                label: d ? "Đang làm mới…" : "Làm mới",
                onClick: C,
                disabled: d,
                children: B.jsx(Oe, { className: oe(d && or) }),
              }),
            ],
          }),
        ],
      }),
      B.jsx("div", {
        className: oe(ir, "lk-stage"),
        ref: x,
        onPointerDown: dn,
        onMouseDown: dm,
        style: { touchAction: "none" },
        children: t
          ? B.jsxs("div", {
              className: "lk-feed-skeleton",
              "aria-label": "Đang tải khoảnh khắc",
              children: [
                B.jsx("span", { className: "lk-skeleton-photo" }),
                B.jsx("span", { className: "lk-skeleton-meta" }),
                B.jsx("span", { className: "lk-skeleton-actions" }),
              ],
            })
          : 0 === p
            ? B.jsx(Sr, {})
            : B.jsxs(B.Fragment, {
                children: [
                  B.jsxs("button", {
                    type: "button",
                    onClick: N,
                    className: oe(yr, a > 0 && n > 0 && br),
                    children: [B.jsx(ye, {}), a, " khoảnh khắc mới"],
                  }),
                  B.jsx("div", {
                    className: "lk-stack" + (F ? " lk-dragging" : ""),
                    children: (() => {
                      const t = [];
                      for (let r = -2; r <= 2; r++) {
                        const a = n + r;
                        a >= 0 &&
                          a < p &&
                          e[a] &&
                          t.push({ it: e[a], rel: r, idx: a });
                      }
                      return t.map(({ it: t, rel: r, idx: a }) =>
                        B.jsx(
                          "figure",
                          {
                            className: oe(sr, "lk-card"),
                            style: {
                              transform: `translateY(calc(${100 * r}% + ${18 * r}px + ${F ? FD : 0}px)) rotate(${Math.max(-3, Math.min(3, 0.45 * r + (F ? FD / 90 : 0)))}deg) scale(${0 === r ? 1 : 0.965})`,
                              zIndex: 10 - Math.abs(r),
                              opacity: Math.abs(r) > 1 ? 0.72 : 1,
                            },
                            children: B.jsx("div", {
                              className: ur,
                              style: {
                                backgroundImage: `url("${t.thumbnail_url}")`,
                              },
                              children:
                                !!t.caption &&
                                B.jsx("figcaption", {
                                  className: cr,
                                  children: t.caption,
                                }),
                            }),
                          },
                          t.md5 || a,
                        ),
                      );
                    })(),
                  }),
                  B.jsxs("div", {
                    className: oe(dr, "lk-meta"),
                    key: h.md5 || n,
                    children: [
                      B.jsxs("span", {
                        className: vr,
                        children: [n + 1, "/", p],
                      }),
                      h.user.avatar
                        ? B.jsx("img", {
                            className: fr,
                            src: h.user.avatar,
                            alt: "",
                          })
                        : B.jsx("span", {
                            className: oe(fr, pr),
                            children: h.user.username.charAt(0).toUpperCase(),
                          }),
                      B.jsx("span", {
                        className: hr,
                        children: h.user.username,
                      }),
                      B.jsx(_r, { date: h.seconds || 0 }),
                      B.jsxs("div", {
                        className: gr,
                        children: [
                          B.jsx(vn, {
                            label: "Khoảnh khắc trước",
                            onClick: () => S(-1),
                            disabled: 0 === n,
                            children: B.jsx(_e, {}),
                          }),
                          B.jsx(vn, {
                            label: "Khoảnh khắc tiếp",
                            onClick: () => S(1),
                            disabled: n >= p - 1,
                            children: B.jsx(xe, {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                  B.jsx(Mn, { moment: h }),
                ],
              }),
      }),
    ],
  });
}
const jr = [
  "Chủ Nhật",
  "Thứ Hai",
  "Thứ Ba",
  "Thứ Tư",
  "Thứ Năm",
  "Thứ Sáu",
  "Thứ Bảy",
];
function Nr(e) {
  const t = new Date(e);
  return (t.setHours(0, 0, 0, 0), t.getTime());
}
function Er(e) {
  const t = Nr(e),
    n = Nr(Date.now()),
    r = Math.round((n - t) / 864e5);
  if (r <= 0) return "Hôm nay";
  if (1 === r) return "Hôm qua";
  if (r < 7) return jr[new Date(t).getDay()];
  const a = new Date(t),
    l = String(a.getDate()).padStart(2, "0"),
    o = String(a.getMonth() + 1).padStart(2, "0");
  return a.getFullYear() === new Date().getFullYear()
    ? `${l}/${o}`
    : `${l}/${o}/${a.getFullYear()}`;
}
const Lr = "_Header_16lod_1",
  Tr = "_Leading_16lod_13",
  Pr = "_Trailing_16lod_14",
  Rr = "_Titles_16lod_21",
  Mr = "_Title_16lod_21",
  zr = "_Subtitle_16lod_38";
function Or({ title: e, subtitle: t, leading: n, trailing: r }) {
  return B.jsxs("header", {
    className: Lr,
    children: [
      n && B.jsx("div", { className: Tr, children: n }),
      B.jsxs("div", {
        className: Rr,
        children: [
          B.jsx("h1", { className: Mr, children: e }),
          t && B.jsx("span", { className: zr, children: t }),
        ],
      }),
      r && B.jsx("div", { className: Pr, children: r }),
    ],
  });
}
const Ir = "_Gallery_8kz7b_1",
  Fr = "_Scroll_8kz7b_7",
  Dr = "_Day_8kz7b_15",
  Ur = "_DayLabel_8kz7b_19",
  Br = "_DayCount_8kz7b_33",
  Ar = "_Grid_8kz7b_43",
  $r = "_Cell_8kz7b_50",
  Vr = "_Overlay_8kz7b_64",
  Wr = "_Who_8kz7b_85",
  Hr = "_When_8kz7b_95",
  Qr = "_Empty_8kz7b_100",
  qr = "_EmptyIcon_8kz7b_115";
function Kr({
  moments: e,
  onOpen: t,
  loadingMore: nm,
  reachedEnd: rm,
  onLoadMore: am,
}) {
  const n = A.useMemo(
    () =>
      (function (e, t) {
        const n = [];
        return (
          e.forEach((e, r) => {
            const a = Nr(t(e)),
              l = n[n.length - 1];
            (null == l ? void 0 : l.key) === a
              ? l.entries.push({ item: e, index: r })
              : n.push({
                  key: a,
                  label: Er(a),
                  entries: [{ item: e, index: r }],
                });
          }),
          n
        );
      })(e, (e) => e.seconds),
    [e],
  );
  const lm = A.useCallback(
    (e) => {
      if (nm || rm) return;
      const t = e.currentTarget;
      t.scrollHeight - t.scrollTop - t.clientHeight <= 320 && am && am();
    },
    [nm, rm, am],
  );
  return B.jsxs("div", {
    className: Ir,
    children: [
      B.jsx(Or, {
        title: "Thư viện",
        subtitle:
          e.length > 0 ? `${e.length} khoảnh khắc · ${n.length} ngày` : void 0,
      }),
      0 === e.length
        ? B.jsxs("div", {
            className: Qr,
            children: [
              B.jsx("div", { className: qr, children: B.jsx(Te, {}) }),
              B.jsx("p", {
                children:
                  "Thư viện trống. Ảnh bạn bè đăng sẽ được lưu ở đây theo ngày.",
              }),
            ],
          })
        : B.jsx("div", {
            className: Fr,
            onScroll: lm,
            children: [
              n.map((e) =>
                B.jsxs(
                  "section",
                  {
                    className: Dr,
                    children: [
                      B.jsxs("h2", {
                        className: Ur,
                        children: [
                          e.label,
                          B.jsx("span", {
                            className: Br,
                            children: e.entries.length,
                          }),
                        ],
                      }),
                      B.jsx("div", {
                        className: Ar,
                        children: e.entries.map(({ item: e, index: n }) =>
                          B.jsx(
                            "button",
                            {
                              type: "button",
                              className: $r,
                              style: {
                                backgroundImage: `url("${e.thumbnail_url}")`,
                              },
                              title: `${e.user.username} · ${$e(e.seconds || 0)}`,
                              "aria-label": `Mở khoảnh khắc của ${e.user.username}`,
                              onClick: () => t(n, e.user.uid),
                              children: B.jsxs("span", {
                                className: Vr,
                                children: [
                                  B.jsx("span", {
                                    className: Wr,
                                    children: e.user.username,
                                  }),
                                  B.jsx("span", {
                                    className: Hr,
                                    children: $e(e.seconds || 0),
                                  }),
                                ],
                              }),
                            },
                            e.md5 || n,
                          ),
                        ),
                      }),
                    ],
                  },
                  e.key,
                ),
              ),
              (nm || rm) &&
                B.jsxs("div", {
                  className: "lk-libfoot",
                  children: [
                    nm
                      ? "Đang tải khoảnh khắc cũ…"
                      : rm
                        ? "Hết khoảnh khắc cũ để tải thêm"
                        : null,
                    nm && B.jsx("span", { className: "lk-lib-skel" }),
                  ],
                }),
            ],
          }),
    ],
  });
}
const Xr = "_Composer_1dxr5_1",
  Gr = "_Body_1dxr5_7",
  Yr = "_Frame_1dxr5_16",
  Zr = "_EmptyFrame_1dxr5_32",
  Jr = "_FileInput_1dxr5_42",
  ea = "_Prompt_1dxr5_50",
  ta = "_PromptIcon_1dxr5_67",
  na = "_CaptionInput_1dxr5_74",
  ra = "_Error_1dxr5_101",
  aa = "_Success_1dxr5_102",
  la = "_Submit_1dxr5_121",
  oa = ["image/jpeg", "image/png"];
function ia() {
  const e = A.useRef(null),
    [n, r] = A.useState(null),
    [l, o] = A.useState(""),
    [i, s] = A.useState(""),
    [u, c] = A.useState({ kind: "idle" }),
    d = "processing" === u.kind || "uploading" === u.kind;
  A.useEffect(() => {
    if (!n) return void o("");
    const e = URL.createObjectURL(n);
    return (o(e), () => URL.revokeObjectURL(e));
  }, [n]);
  const f = A.useCallback(() => {
      (r(null),
        s(""),
        c({ kind: "idle" }),
        e.current && (e.current.value = ""));
    }, []),
    p = A.useCallback(async (e) => {
      if (e.size > y) c({ kind: "error", message: "Ảnh vượt quá 4MB" });
      else if (oa.includes(e.type) || "image/webp" === e.type) {
        c({ kind: "processing" });
        try {
          (r(
            await (async function (e) {
              let a;
              try {
                a = await createImageBitmap(e);
              } catch {
                throw new Error("Tệp ảnh không hợp lệ hoặc đã hỏng");
              }
              try {
                if (a.width === w && a.height === w && e.size <= y)
                  return e;
                const t = Math.min(a.width, a.height, w),
                  n = t / Math.min(a.width, a.height),
                  l = document.createElement("canvas");
                ((l.width = t), (l.height = t));
                const o = l.getContext("2d", { alpha: !1 });
                if (!o)
                  throw new Error("Trình duyệt không dựng được canvas");
                ((o.imageSmoothingEnabled = !0),
                  (o.imageSmoothingQuality = "high"));
                const i = a.width * n,
                  s = a.height * n;
                o.drawImage(a, (t - i) / 2, (t - s) / 2, i, s);
                const u = await new Promise((t, n) => {
                  l.toBlob(
                    (e) =>
                      e
                        ? t(e)
                        : n(new Error("Không chuyển được ảnh")),
                    "image/webp",
                    0.95,
                  );
                });
                return u;
              } finally {
                a && a.close && a.close();
              }
            })(e),
          ),
            c({ kind: "idle" }));
        } catch (t) {
          c({
            kind: "error",
            message: t instanceof Error ? t.message : "Không xử lý được ảnh",
          });
        }
      } else c({ kind: "error", message: "Chỉ hỗ trợ ảnh JPEG hoặc PNG" });
    }, []),
    h = A.useCallback(async () => {
      var e;
      if (!n) return;
      c({ kind: "uploading" });
      const r = await b(),
        l = null == (e = (await m(["user"])).user) ? void 0 : e.localId;
      if (r && l)
        try {
          const e = await k(r.refreshToken),
            o = e.id_token || e.access_token;
          await a({ token: o, refreshToken: e.refresh_token });
          const s = await (async function ({
            blob: e,
            userId: n,
            token: r,
            fileName: a,
            contentType: l,
            kind: o,
          }) {
            const i = `users/${n}/${L[o]}/${a}`,
              s = encodeURIComponent(i),
              u = `https://firebasestorage.googleapis.com/v0/b/locket-img/o/${s}`,
              c = await fetch(`${u}?uploadType=resumable&name=${s}`, {
                method: "POST",
                headers: {
                  ...E,
                  Authorization: `Bearer ${r}`,
                  "Content-Type": "application/json; charset=UTF-8",
                  Accept: "application/json",
                  "X-Goog-Upload-Protocol": "resumable",
                  "X-Goog-Upload-Command": "start",
                  "X-Goog-Upload-Content-Length": e.size.toString(),
                  "X-Goog-Upload-Content-Type": l,
                },
                body: JSON.stringify({
                  name: i,
                  contentType: l,
                  bucket: "",
                  metadata: { creator: n, visibility: "private" },
                }),
              });
            if (!c.ok) throw new t("Không mở được phiên tải lên", "", c.status);
            const d = c.headers.get("X-Goog-Upload-URL");
            if (!d)
              throw new t("Máy chủ không trả về địa chỉ tải lên", "", c.status);
            const f = await fetch(d, {
              method: "PUT",
              headers: {
                ...E,
                "Content-Type": "application/octet-stream",
                "X-Goog-Upload-Command": "upload, finalize",
                "X-Goog-Upload-Offset": "0",
                "Upload-Incomplete": "?0",
                "Upload-Draft-Interop-Version": "3",
              },
              body: e,
            });
            if (!f.ok) throw new t("Tải lên thất bại", "", f.status);
            const p = await fetch(u, {
              method: "GET",
              headers: {
                ...E,
                Authorization: `Bearer ${r}`,
                "Content-Type": "application/json; charset=UTF-8",
                Accept: "application/json",
              },
            });
            if (!p.ok) throw new t("Không lấy được địa chỉ ảnh", "", p.status);
            const h = (await p.json()).downloadTokens;
            if (!h) throw new t("Máy chủ không trả về token tải xuống");
            return `${u}?alt=media&token=${h}`;
          })({
            blob: n,
            userId: l,
            token: o,
            fileName: `${Ve(20)}.${"image/png" === n.type ? "png" : "image/jpeg" === n.type ? "jpg" : "webp"}`,
            contentType: n.type || "image/webp",
            kind: "image",
          });
          (await x(s, i.trim(), o), c({ kind: "done" }), setTimeout(f, 1600));
        } catch (o) {
          c({
            kind: "error",
            message:
              o instanceof t && o.isNetworkError
                ? "Mất kết nối khi đang đăng"
                : o instanceof Error
                  ? o.message
                  : "Đăng thất bại",
          });
        }
      else
        c({
          kind: "error",
          message: "Phiên đăng nhập không hợp lệ, đăng nhập lại nhé",
        });
    }, [n, i, f]);
  return B.jsxs("div", {
    className: Xr,
    children: [
      B.jsx(Or, {
        title: "Đăng khoảnh khắc",
        subtitle: "Khung vuông 1020 px · giữ chất lượng nếu đã chỉnh",
        trailing: n
          ? B.jsx(vn, {
              label: "Bỏ ảnh",
              onClick: f,
              disabled: d,
              children: B.jsx(Ae, {}),
            })
          : void 0,
      }),
      B.jsxs("div", {
        className: Gr,
        children: [
          B.jsxs("div", {
            className: oe(Yr, !l && Zr),
            style: l ? { backgroundImage: `url("${l}")` } : void 0,
            children: [
              !l &&
                B.jsxs(B.Fragment, {
                  children: [
                    B.jsx("input", {
                      ref: e,
                      type: "file",
                      accept: ".jpg,.jpeg,.png",
                      className: Jr,
                      "aria-label": "Chọn ảnh để đăng",
                      onChange: (e) => {
                        var t;
                        const n = null == (t = e.target.files) ? void 0 : t[0];
                        n && p(n);
                      },
                    }),
                    B.jsx("div", {
                      className: ea,
                      children:
                        "processing" === u.kind
                          ? B.jsx(qe, { "data-size": "3" })
                          : B.jsxs(B.Fragment, {
                              children: [
                                B.jsx("span", {
                                  className: ta,
                                  children: B.jsx(Ne, {}),
                                }),
                                B.jsx("h2", {
                                  children: "Kéo thả hoặc bấm để chọn ảnh",
                                }),
                                B.jsx("p", {
                                  children: "JPEG hoặc PNG, tối đa 4MB",
                                }),
                              ],
                            }),
                    }),
                  ],
                }),
              l &&
                B.jsx("input", {
                  className: na,
                  value: i,
                  disabled: d,
                  maxLength: 120,
                  placeholder: "Thêm chú thích…",
                  onChange: (e) => s(e.target.value),
                }),
            ],
          }),
          "error" === u.kind &&
            B.jsx("p", { className: ra, children: u.message }),
          "done" === u.kind &&
            B.jsxs("p", {
              className: aa,
              children: [B.jsx(ke, {}), " Đã đăng lên Locket"],
            }),
          B.jsx("button", {
            type: "button",
            className: oe("btn", la),
            disabled: !n || d || "done" === u.kind,
            onClick: () => {
              h();
            },
            children:
              "uploading" === u.kind
                ? B.jsxs(B.Fragment, {
                    children: [B.jsx(qe, {}), " Đang đăng…"],
                  })
                : B.jsxs(B.Fragment, { children: [B.jsx(Ue, {}), " Đăng"] }),
          }),
        ],
      }),
    ],
  });
}
const sa = "_Settings_1mni3_1",
  ua = "_Body_1mni3_7",
  ca = "_Account_1mni3_18",
  da = "_Avatar_1mni3_29",
  fa = "_AvatarFallback_1mni3_38",
  pa = "_AccountText_1mni3_48",
  ha = "_AccountName_1mni3_54",
  ma = "_AccountMeta_1mni3_63",
  ga = "_Group_1mni3_71",
  va = "_GroupTitle_1mni3_78",
  ya = "_Row_1mni3_88",
  ba = "_RowIcon_1mni3_104",
  ka = "_RowText_1mni3_111",
  xa = "_RowLabel_1mni3_119",
  wa = "_RowHint_1mni3_124",
  _a = "_danger_1mni3_130",
  Sa = "_Toggle_1mni3_134",
  Ca = "_on_1mni3_145",
  ja = "_Knob_1mni3_149";
function Na({ checked: e, onChange: t, label: n }) {
  return B.jsx("button", {
    type: "button",
    role: "switch",
    "aria-checked": e,
    "aria-label": n,
    onClick: () => t(!e),
    className: oe(Sa, e && Ca),
    children: B.jsx("span", { className: ja }),
  });
}
function Ea({
  user: e,
  friends: t,
  onShowAbout: n,
  onShowChatProbe: r,
  onLogout: o,
}) {
  const { settings: i, update: s } = (function () {
      const [e, t] = A.useState(_);
      return (
        A.useEffect(() => {
          S().then(t);
        }, []),
        {
          settings: e,
          update: A.useCallback(async (e) => {
            t((t) => {
              const n = { ...t, ...e };
              return (a({ settings: n }), n);
            });
          }, []),
        }
      );
    })(),
    [u, c] = A.useState(!1),
    d = A.useRef(null),
    p = A.useCallback(() => {
      if (u)
        return (
          l({ type: "clearMoments" }),
          c(!1),
          void (d.current && clearTimeout(d.current))
        );
      (c(!0), (d.current = setTimeout(() => c(!1), 4e3)));
    }, [u]),
    h =
      (null == e ? void 0 : e.displayName) ||
      (null == e ? void 0 : e.email) ||
      "Tài khoản Locket";
  return B.jsxs("div", {
    className: sa,
    children: [
      B.jsx(Or, { title: "Cài đặt" }),
      B.jsxs("div", {
        className: ua,
        children: [
          B.jsxs("div", {
            className: ca,
            children: [
              (null == e ? void 0 : e.photoUrl)
                ? B.jsx("img", { className: da, src: e.photoUrl, alt: "" })
                : B.jsx("span", {
                    className: oe(da, fa),
                    children: h.charAt(0).toUpperCase(),
                  }),
              B.jsxs("div", {
                className: pa,
                children: [
                  B.jsx("span", { className: ha, children: h }),
                  !!(null == e ? void 0 : e.email) &&
                    e.email !== h &&
                    B.jsx("span", { className: ma, children: e.email }),
                ],
              }),
            ],
          }),
          B.jsxs("section", {
            className: ga,
            children: [
              B.jsx("h2", { className: va, children: "Thông báo" }),
              B.jsxs("div", {
                className: ya,
                children: [
                  B.jsx("span", { className: ba, children: B.jsx(be, {}) }),
                  B.jsxs("div", {
                    className: ka,
                    children: [
                      B.jsx("span", {
                        className: xa,
                        children: "Thông báo trên máy tính",
                      }),
                      B.jsx("span", {
                        className: wa,
                        children:
                          "Hiện thông báo hệ thống khi bạn bè đăng ảnh mới",
                      }),
                    ],
                  }),
                  B.jsx(Na, {
                    label: "Thông báo trên máy tính",
                    checked: i.desktopNotifications,
                    onChange: (e) => {
                      s({ desktopNotifications: e });
                    },
                  }),
                ],
              }),
            ],
          }),
          B.jsxs("section", {
            className: ga,
            children: [
              B.jsx("h2", { className: va, children: "Giao diện" }),
              B.jsxs("label", {
                className: "lk-setting-field",
                children: [
                  B.jsx("span", { children: "Chủ đề" }),
                  B.jsxs("select", {
                    className: "lk-select",
                    value: i.theme || "system",
                    onChange: (e) => s({ theme: e.target.value }),
                    children: [
                      B.jsx("option", {
                        value: "system",
                        children: "Theo hệ thống",
                      }),
                      B.jsx("option", { value: "dark", children: "Tối" }),
                      B.jsx("option", { value: "amoled", children: "AMOLED" }),
                      B.jsx("option", { value: "light", children: "Sáng" }),
                    ],
                  }),
                ],
              }),
              B.jsxs("label", {
                className: "lk-setting-field",
                children: [
                  B.jsx("span", { children: "Màu chủ đạo" }),
                  B.jsxs("select", {
                    className: "lk-select",
                    value: i.accent || "rose",
                    onChange: (e) => s({ accent: e.target.value }),
                    children: [
                      B.jsx("option", {
                        value: "rose",
                        children: "Hồng Locket",
                      }),
                      B.jsx("option", { value: "violet", children: "Tím" }),
                      B.jsx("option", { value: "blue", children: "Xanh" }),
                      B.jsx("option", { value: "orange", children: "Cam" }),
                    ],
                  }),
                ],
              }),
              B.jsxs("label", {
                className: "lk-setting-field",
                children: [
                  B.jsx("span", { children: "Lưới thư viện" }),
                  B.jsxs("select", {
                    className: "lk-select",
                    value: String(i.galleryColumns || 3),
                    onChange: (e) =>
                      s({ galleryColumns: Number(e.target.value) }),
                    children: [
                      B.jsx("option", { value: "2", children: "2 cột" }),
                      B.jsx("option", { value: "3", children: "3 cột" }),
                    ],
                  }),
                ],
              }),
              B.jsxs("label", {
                className: "lk-setting-field",
                children: [
                  B.jsx("span", { children: "Chuyển động" }),
                  B.jsxs("select", {
                    className: "lk-select",
                    value: i.motion || "full",
                    onChange: (e) => s({ motion: e.target.value }),
                    children: [
                      B.jsx("option", { value: "full", children: "Đầy đủ" }),
                      B.jsx("option", {
                        value: "reduced",
                        children: "Tối giản",
                      }),
                    ],
                  }),
                ],
              }),
              B.jsxs("label", {
                className: "lk-setting-field",
                children: [
                  B.jsx("span", { children: "Bo góc" }),
                  B.jsxs("select", {
                    className: "lk-select",
                    value: i.radius || "soft",
                    onChange: (e) => s({ radius: e.target.value }),
                    children: [
                      B.jsx("option", { value: "soft", children: "Mềm" }),
                      B.jsx("option", { value: "round", children: "Tròn" }),
                      B.jsx("option", { value: "compact", children: "Gọn" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          B.jsxs("section", {
            className: ga,
            children: [
              B.jsx("h2", { className: va, children: "Bạn bè" }),
              B.jsxs("button", {
                type: "button",
                className: ya,
                disabled: "running" === t.state,
                onClick: t.sync,
                children: [
                  B.jsx("span", {
                    className: ba,
                    children:
                      "running" === t.state ? B.jsx(qe, {}) : B.jsx(Be, {}),
                  }),
                  B.jsxs("div", {
                    className: ka,
                    children: [
                      B.jsx("span", {
                        className: xa,
                        children:
                          "running" === t.state
                            ? "Đang quét…"
                            : "Quét danh sách bạn bè",
                      }),
                      B.jsx("span", {
                        className: wa,
                        children:
                          "error" === t.state
                            ? "Quét thất bại, thử lại sau"
                            : t.friends.length > 0
                              ? `${t.friends.length} người · quét ${$e(t.syncedAt)} trước`
                              : "Locket không có API danh sách bạn bè, loocket phải dò từng người nên hơi tốn thời gian",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          B.jsxs("section", {
            className: ga,
            children: [
              B.jsx("h2", { className: va, children: "Dữ liệu" }),
              B.jsxs("button", {
                type: "button",
                className: ya,
                onClick: p,
                children: [
                  B.jsx("span", {
                    className: oe(ba, _a),
                    children: B.jsx(De, {}),
                  }),
                  B.jsxs("div", {
                    className: ka,
                    children: [
                      B.jsx("span", {
                        className: oe(xa, _a),
                        children: u ? "Bấm lần nữa để xoá" : "Xoá thư viện",
                      }),
                      B.jsx("span", {
                        className: wa,
                        children: "Xoá toàn bộ khoảnh khắc đã lưu trên máy này",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          B.jsxs("section", {
            className: ga,
            children: [
              B.jsx("h2", { className: va, children: "Nhà phát triển" }),
              B.jsxs("button", {
                type: "button",
                className: ya,
                onClick: r,
                children: [
                  B.jsx("span", { className: ba, children: B.jsx(Me, {}) }),
                  B.jsxs("div", {
                    className: ka,
                    children: [
                      B.jsx("span", {
                        className: xa,
                        children: "Thử kết nối chat",
                      }),
                      B.jsx("span", {
                        className: wa,
                        children:
                          "Kết nối WebSocket chat và in ra frame nhận được, để tìm định dạng tin nhắn",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          B.jsxs("section", {
            className: ga,
            children: [
              B.jsx("h2", { className: va, children: "Khác" }),
              B.jsxs("button", {
                type: "button",
                className: ya,
                onClick: n,
                children: [
                  B.jsx("span", { className: ba, children: B.jsx(Le, {}) }),
                  B.jsxs("div", {
                    className: ka,
                    children: [
                      B.jsxs("span", {
                        className: xa,
                        children: ["Giới thiệu ", f],
                      }),
                      B.jsxs("span", {
                        className: wa,
                        children: ["Phiên bản ", C],
                      }),
                    ],
                  }),
                ],
              }),
              B.jsxs("button", {
                type: "button",
                className: ya,
                onClick: o,
                children: [
                  B.jsx("span", {
                    className: oe(ba, _a),
                    children: B.jsx(Pe, {}),
                  }),
                  B.jsx("div", {
                    className: ka,
                    children: B.jsx("span", {
                      className: oe(xa, _a),
                      children: "Đăng xuất",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const La = "_About_r57mc_1",
  Ta = "_Body_r57mc_7",
  Pa = "_Hero_r57mc_18",
  Ra = "_Logo_r57mc_28",
  Ma = "_Name_r57mc_35",
  za = "_Tagline_r57mc_41",
  Oa = "_Version_r57mc_48",
  Ia = "_Card_r57mc_57";
function Fa({ onBack: e }) {
  return B.jsxs("div", {
    className: La,
    children: [
      B.jsx(Or, {
        title: "Giới thiệu",
        leading: B.jsx(vn, {
          label: "Quay lại",
          onClick: e,
          children: B.jsx(we, {}),
        }),
      }),
      B.jsxs("div", {
        className: Ta,
        children: [
          B.jsxs("div", {
            className: Pa,
            children: [
              B.jsx("span", { className: Ra, children: B.jsx(We, {}) }),
              B.jsx("h2", { className: Ma, children: f }),
              B.jsx("p", {
                className: za,
                children:
                  "Xem và đăng khoảnh khắc Locket ngay trên trình duyệt máy tính.",
              }),
              B.jsxs("span", { className: Oa, children: ["Phiên bản ", C] }),
            ],
          }),
          B.jsxs("section", {
            className: Ia,
            children: [
              B.jsx("h3", { children: "Miễn trừ trách nhiệm" }),
              B.jsxs("p", {
                children: [
                  f,
                  " không phải và không liên kết gì với Locket hay Locket Labs, Inc. Đây là một client không chính thức — khi dùng, bạn chấp nhận rủi ro tài khoản của mình có thể bị khoá bất cứ lúc nào.",
                ],
              }),
              B.jsx("p", {
                children:
                  "Nếu bạn không thoải mái với điều đó, hoặc không chắc mình đang làm gì, vui lòng gỡ tiện ích này.",
              }),
            ],
          }),
          B.jsxs("section", {
            className: Ia,
            children: [
              B.jsx("h3", { children: "Nguồn gốc" }),
              B.jsxs("p", {
                children: [
                  f,
                  " là dự án tiện ích độc lập, xây dựng riêng cho cộng đồng người dùng Locket.",
                ],
              }),
              B.jsxs("p", {
                children: [
                  "Mã nguồn ",
                  f,
                  " có tại",
                  " ",
                  B.jsx("a", {
                    href: N,
                    target: "_blank",
                    rel: "noreferrer",
                    children: "GitHub",
                  }),
                  ".",
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Da = {
    none: "Không gửi token",
    "query-token": "Query ?token=",
    "query-access-token": "Query ?access_token=",
    "query-authorization": "Query ?authorization=",
    "subprotocol-bearer": "Subprotocol: Bearer, <token>",
    "subprotocol-raw": "Subprotocol: <token>",
    "first-frame": "Gửi token ở frame đầu",
  },
  Ua = [
    "none",
    "query-token",
    "query-access-token",
    "query-authorization",
    "subprotocol-bearer",
    "subprotocol-raw",
    "first-frame",
  ];
function Ba({ selfUid: e, otherUid: t, token: n, strategy: r, onEvent: a }) {
  const l = (e, t) => a({ at: Date.now(), kind: e, detail: t });
  let o;
  try {
    o = new WebSocket(
      (function (e, t, n, r) {
        const a = new URL("wss://api.locketcamera.com/wss_v2/chat");
        return (
          a.searchParams.set("otherUserId", t),
          a.searchParams.set("userId", e),
          "query-token" === n && a.searchParams.set("token", r),
          "query-access-token" === n && a.searchParams.set("access_token", r),
          "query-authorization" === n &&
            a.searchParams.set("authorization", `Bearer ${r}`),
          a.toString()
        );
      })(e, t, r, n),
      (function (e, t) {
        return "subprotocol-bearer" === e
          ? ["Bearer", t]
          : "subprotocol-raw" === e
            ? [t]
            : void 0;
      })(r, n),
    );
  } catch (i) {
    return (l("error", `Không tạo được socket: ${String(i)}`), () => {});
  }
  return (
    (o.onopen = () => {
      if (
        (l("open", "Đã kết nối (101 Switching Protocols)"), "first-frame" === r)
      ) {
        const e = JSON.stringify({ authorization: `Bearer ${n}` });
        (o.send(e), l("sent", e));
      }
    }),
    (o.onmessage = (e) => {
      const t = e.data;
      "string" == typeof t
        ? l("frame", t)
        : t instanceof Blob
          ? t.text().then((e) => l("frame", `[binary ${t.size}B] ${e}`))
          : l("frame", `[${typeof t}] ${String(t)}`);
    }),
    (o.onerror = () => l("error", "Socket báo lỗi")),
    (o.onclose = (e) =>
      l("close", `Đóng: code ${e.code}${e.reason ? ` — ${e.reason}` : ""}`)),
    () => {
      ((o.onopen = null),
        (o.onmessage = null),
        (o.onerror = null),
        (o.onclose = null),
        (o.readyState !== WebSocket.OPEN &&
          o.readyState !== WebSocket.CONNECTING) ||
          o.close());
    }
  );
}
function Aa({
  selfUid: e,
  otherUid: t,
  token: n,
  strategy: r,
  budgetMs: a,
  onEvent: l,
}) {
  return new Promise((o) => {
    const i = {
      strategy: r,
      opened: !1,
      frames: [],
      closeCode: null,
      error: null,
    };
    let s = !1,
      u = () => {};
    const c = () => {
        s || ((s = !0), clearTimeout(d), u(), o(i));
      },
      d = setTimeout(c, a);
    u = Ba({
      selfUid: e,
      otherUid: t,
      token: n,
      strategy: r,
      onEvent: (e) => {
        var t;
        if (
          (null == l || l(e),
          "open" === e.kind && (i.opened = !0),
          "frame" === e.kind && i.frames.push(e.detail),
          "error" === e.kind && (i.error = e.detail),
          "close" === e.kind)
        ) {
          const n = Number(
            (null == (t = e.detail.match(/code (\d+)/)) ? void 0 : t[1]) ?? NaN,
          );
          ((i.closeCode = Number.isNaN(n) ? null : n), c());
        }
      },
    });
  });
}
const $a = {
    Probe: "_Probe_wc3ja_1",
    Body: "_Body_wc3ja_7",
    Intro: "_Intro_wc3ja_16",
    Controls: "_Controls_wc3ja_23",
    Select: "_Select_wc3ja_30",
    Run: "_Run_wc3ja_47",
    Results: "_Results_wc3ja_54",
    Result: "_Result_wc3ja_54",
    pass: "_pass_wc3ja_73",
    ResultName: "_ResultName_wc3ja_78",
    ResultStat: "_ResultStat_wc3ja_85",
    Winner: "_Winner_wc3ja_90",
    Log: "_Log_wc3ja_100",
    Placeholder: "_Placeholder_wc3ja_115",
    Line: "_Line_wc3ja_123",
    Stamp: "_Stamp_wc3ja_132",
    Kind: "_Kind_wc3ja_137",
    Detail: "_Detail_wc3ja_143",
    open: "_open_wc3ja_149",
    sent: "_sent_wc3ja_153",
    frame: "_frame_wc3ja_157",
    error: "_error_wc3ja_161",
    close: "_close_wc3ja_165",
  },
  Va = (e) => new Date(e).toLocaleTimeString("vi-VN", { hour12: !1 });
function Wa({ friends: e, onBack: t }) {
  var n;
  const [r, a] = A.useState((null == (n = e[0]) ? void 0 : n.uid) ?? ""),
    [l, o] = A.useState([]),
    [i, s] = A.useState([]),
    [u, c] = A.useState(!1),
    [d, f] = A.useState(!1),
    p = A.useRef(null),
    h = A.useRef(!1);
  (A.useEffect(
    () => () => {
      h.current = !0;
    },
    [],
  ),
    A.useEffect(() => {
      const e = p.current;
      e &&
        e.scrollHeight - e.scrollTop - e.clientHeight < 60 &&
        (e.scrollTop = e.scrollHeight);
    }, [l]));
  const g = A.useCallback(async () => {
      const e = await b(),
        { user: t } = await m(["user"]);
      e && (null == t ? void 0 : t.localId)
        ? r &&
          (c(!0),
          o([]),
          s([]),
          await (async function ({
            selfUid: e,
            otherUid: t,
            token: n,
            budgetMs: r = 4e3,
            onEvent: a,
            onResult: l,
          }) {
            const o = [];
            for (const i of Ua) {
              const s = await Aa({
                selfUid: e,
                otherUid: t,
                token: n,
                strategy: i,
                budgetMs: r,
                onEvent: (e) => (null == a ? void 0 : a(i, e)),
              });
              (o.push(s), null == l || l(s));
            }
            return o;
          })({
            selfUid: t.localId,
            otherUid: r,
            token: e.token,
            onEvent: (e, t) => {
              h.current || o((n) => [...n, { strategy: e, event: t }]);
            },
            onResult: (e) => {
              h.current || s((t) => [...t, e]);
            },
          }),
          h.current || c(!1))
        : o([
            {
              strategy: "none",
              event: {
                at: Date.now(),
                kind: "error",
                detail: "Chưa đăng nhập.",
              },
            },
          ]);
    }, [r]),
    v = A.useCallback(async () => {
      const e = i
          .map(
            (e) =>
              `${Da[e.strategy]}: open=${e.opened} frames=${e.frames.length} close=${e.closeCode ?? "-"}`,
          )
          .join("\n"),
        t = l
          .map(
            (e) =>
              `[${Va(e.event.at)}] ${e.strategy} ${e.event.kind}: ${e.event.detail}`,
          )
          .join("\n");
      (await navigator.clipboard.writeText(
        `=== KẾT QUẢ ===\n${e}\n\n=== LOG ===\n${t}`,
      ),
        f(!0),
        setTimeout(() => f(!1), 1800));
    }, [l, i]),
    y = i.find((e) => e.opened && e.frames.length > 0);
  return B.jsxs("div", {
    className: $a.Probe,
    children: [
      B.jsx(Or, {
        title: "Thử kết nối chat",
        subtitle: "Công cụ chẩn đoán",
        leading: B.jsx(vn, {
          label: "Quay lại",
          onClick: t,
          children: B.jsx(we, {}),
        }),
        trailing: B.jsx(vn, {
          label: d ? "Đã sao chép" : "Sao chép kết quả",
          onClick: () => {
            v();
          },
          disabled: 0 === l.length,
          active: d,
          children: B.jsx(Se, {}),
        }),
      }),
      B.jsxs("div", {
        className: $a.Body,
        children: [
          B.jsxs("p", {
            className: $a.Intro,
            children: [
              "Trình duyệt không đặt được header ",
              B.jsx("code", { children: "Authorization" }),
              " lên WebSocket, nên token phải đi đường khác. Công cụ này thử lần lượt từng cách và xem server chấp nhận cách nào, đồng thời in nguyên văn frame nhận được.",
            ],
          }),
          B.jsxs("div", {
            className: $a.Controls,
            children: [
              B.jsxs("select", {
                className: $a.Select,
                value: r,
                disabled: u,
                onChange: (e) => a(e.target.value),
                children: [
                  0 === e.length &&
                    B.jsx("option", {
                      value: "",
                      children: "Chưa quét bạn bè",
                    }),
                  e.map((e) =>
                    B.jsx(
                      "option",
                      { value: e.uid, children: e.displayName },
                      e.uid,
                    ),
                  ),
                ],
              }),
              B.jsxs("button", {
                type: "button",
                className: oe("btn", $a.Run),
                disabled: 0 === e.length || u || !r,
                onClick: () => {
                  g();
                },
                children: [
                  u ? B.jsx(qe, {}) : B.jsx(Re, {}),
                  u ? "Đang thử…" : "Chạy thử",
                ],
              }),
            ],
          }),
          i.length > 0 &&
            B.jsx("div", {
              className: $a.Results,
              children: i.map((e) => {
                const t = e.opened && e.frames.length > 0;
                return B.jsxs(
                  "div",
                  {
                    className: oe($a.Result, t && $a.pass),
                    children: [
                      B.jsx("span", {
                        className: $a.ResultName,
                        children: Da[e.strategy],
                      }),
                      B.jsxs("span", {
                        className: $a.ResultStat,
                        children: [
                          e.opened
                            ? "101"
                            : B.jsx(Ae, {
                                className: "lk-inline-status-icon",
                                "aria-label": "Thất bại",
                              }),
                          " · ",
                          e.frames.length,
                          " frame",
                          null !== e.closeCode && ` · ${e.closeCode}`,
                        ],
                      }),
                    ],
                  },
                  e.strategy,
                );
              }),
            }),
          y &&
            B.jsxs("p", {
              className: $a.Winner,
              children: [
                "Server chấp nhận: ",
                B.jsx("strong", { children: Da[y.strategy] }),
              ],
            }),
          B.jsx("div", {
            className: $a.Log,
            ref: p,
            children:
              0 === l.length
                ? B.jsx("p", {
                    className: $a.Placeholder,
                    children: "Chưa có gì. Bấm Chạy thử để bắt đầu.",
                  })
                : l.map((e, t) =>
                    B.jsxs(
                      "div",
                      {
                        className: oe($a.Line, $a[e.event.kind]),
                        children: [
                          B.jsx("span", {
                            className: $a.Stamp,
                            children: Va(e.event.at),
                          }),
                          B.jsx("span", {
                            className: $a.Kind,
                            children: e.event.kind,
                          }),
                          B.jsx("span", {
                            className: $a.Detail,
                            children: e.event.detail,
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
          }),
        ],
      }),
    ],
  });
}
const Ha = "_Shell_ls6w7_1",
  Qa = "_Stage_ls6w7_9",
  qa = "_Pane_ls6w7_16",
  Ka = "_visible_ls6w7_26";
function Xa() {
  const { userData: e, setLoggedIn: t, setUserData: n } = ae(),
    {
      moments: r,
      loading: a,
      newCount: o,
      acknowledgeNew: i,
    } = (function () {
      const [e, t] = A.useState([]),
        [n, r] = A.useState(!0),
        [a, o] = A.useState(0),
        i = A.useCallback(async () => {
          const e = await p("moments", []);
          (t(e), r(!1));
        }, []);
      return (
        A.useEffect(
          () => (
            i(),
            l({ type: "clearBadge" }),
            h((e) => {
              "momentsUpdated" === e.type && (i(), e.hasNew && o((e) => e + 1));
            })
          ),
          [i],
        ),
        {
          moments: e,
          loading: n,
          newCount: a,
          acknowledgeNew: A.useCallback(() => o(0), []),
          reload: i,
        }
      );
    })(),
    s = (function () {
      const [e, t] = A.useState([]),
        [n, r] = A.useState(0),
        [a, o] = A.useState("idle"),
        i = A.useCallback(async () => {
          const { friends: e = [], friendsSyncedAt: n = 0 } = await m([
            "friends",
            "friendsSyncedAt",
          ]);
          (t(e), r(n));
        }, []);
      return (
        A.useEffect(
          () => (
            i(),
            h((e) => {
              "friendsSync" === e.type &&
                ("running" === e.state
                  ? o("running")
                  : "error" === e.state
                    ? o("error")
                    : (o("idle"), i()));
            })
          ),
          [i],
        ),
        {
          friends: e,
          syncedAt: n,
          state: a,
          sync: A.useCallback(() => {
            (o("running"), l({ type: "syncFriends" }));
          }, []),
        }
      );
    })(),
    [u, c] = A.useState("feed"),
    [d, f] = A.useState(null),
    [g, v] = A.useState(0),
    [y, b] = A.useState(null),
    [lm, sm] = A.useState(null),
    k = A.useMemo(() => (y ? r.filter((e) => e.user.uid === y) : r), [r, y]),
    x = A.useCallback((e) => {
      (b(e), v(0));
    }, []),
    w = A.useCallback((e) => {
      sm(e);
    }, []);
  A.useEffect(() => {
    if (null === lm) return;
    const e = (e) => {
      "Escape" === e.key
        ? sm(null)
        : "ArrowLeft" === e.key
          ? sm((e) => Math.max(0, (e ?? 0) - 1))
          : "ArrowRight" === e.key &&
            sm((e) => Math.min(r.length - 1, (e ?? 0) + 1));
    };
    return (
      window.addEventListener("keydown", e),
      () => window.removeEventListener("keydown", e)
    );
  }, [lm, r.length]);
  const _ = A.useCallback(() => {
      (l({ type: "logout" }), n(null), t(!1));
    }, [t, n]),
    S = A.useCallback(
      (e) => {
        (c(e), "feed" === e && i());
      },
      [i],
    );
  const [ym, bm] = A.useState(!1),
    [vm, fm] = A.useState(!1);
  A.useEffect(
    () =>
      h((e) => {
        "libraryLoaded" === e.type && (bm(!1), !0 === e.end && fm(!0));
      }),
    [],
  );
  const xm = A.useCallback(() => {
    vm || ym || (bm(!0), l({ type: "loadLibrary" }));
  }, [vm, ym]);
  return "about" === d
    ? B.jsx("div", {
        className: Ha,
        children: B.jsx(Fa, { onBack: () => f(null) }),
      })
    : "chatProbe" === d
      ? B.jsx("div", {
          className: Ha,
          children: B.jsx(Wa, { friends: s.friends, onBack: () => f(null) }),
        })
      : B.jsxs("div", {
          className: Ha,
          children: [
            B.jsxs("div", {
              className: Qa,
              children: [
                B.jsx("section", {
                  className: oe(qa, "feed" === u && Ka),
                  children: B.jsx(Cr, {
                    moments: k,
                    loading: a,
                    index: Math.min(g, Math.max(k.length - 1, 0)),
                    setIndex: v,
                    newCount: o,
                    acknowledgeNew: i,
                    active: "feed" === u,
                    friends: s.friends,
                    selectedFriend: y,
                    onSelectFriend: x,
                  }),
                }),
                B.jsx("section", {
                  className: oe(qa, "gallery" === u && Ka),
                  children: B.jsx(Kr, {
                    moments: r,
                    onOpen: w,
                    loadingMore: ym,
                    reachedEnd: vm,
                    onLoadMore: xm,
                  }),
                }),
                B.jsx("section", {
                  className: oe(qa, "compose" === u && Ka),
                  children: B.jsx(ia, {}),
                }),
                B.jsx("section", {
                  className: oe(qa, "settings" === u && Ka),
                  children: B.jsx(Ea, {
                    user: e,
                    friends: s,
                    onShowAbout: () => f("about"),
                    onShowChatProbe: () => f("chatProbe"),
                    onLogout: _,
                  }),
                }),
              ],
            }),
            null !== lm &&
              r[lm] &&
              B.jsx("div", {
                className: "lk-lightbox",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Xem chi tiết khoảnh khắc",
                onClick: () => sm(null),
                children: B.jsxs("div", {
                  className: "lk-lightbox-card",
                  onClick: (e) => e.stopPropagation(),
                  children: [
                    B.jsxs("header", {
                      className: "lk-lightbox-head",
                      children: [
                        B.jsxs("div", {
                          children: [
                            B.jsx("strong", { children: r[lm].user.username }),
                            B.jsx("span", { children: $e(r[lm].seconds || 0) }),
                          ],
                        }),
                        B.jsx("button", {
                          type: "button",
                          className: "lk-lightbox-close",
                          "aria-label": "Đóng",
                          onClick: () => sm(null),
                          children: B.jsx(Ae, {}),
                        }),
                      ],
                    }),
                    B.jsx("div", {
                      className: "lk-lightbox-photo",
                      style: {
                        backgroundImage: `url("${r[lm].thumbnail_url}")`,
                      },
                      children:
                        r[lm].caption &&
                        B.jsx("p", {
                          className: "lk-lightbox-caption",
                          children: r[lm].caption,
                        }),
                    }),
                    B.jsxs("div", {
                      className: "lk-lightbox-tools",
                      children: [
                        B.jsx("button", {
                          type: "button",
                          "aria-label": "Khoảnh khắc trước",
                          disabled: lm <= 0,
                          onClick: () => sm((e) => Math.max(0, (e ?? 0) - 1)),
                          children: "‹",
                        }),
                        B.jsx("span", { children: `${lm + 1} / ${r.length}` }),
                        B.jsx("button", {
                          type: "button",
                          "aria-label": "Tải ảnh",
                          onClick: () =>
                            chrome.downloads.download({
                              url: r[lm].thumbnail_url,
                              filename: `loocket-${String(r[lm].user.username || "moment").replace(/[^\p{L}\p{N}._-]+/gu, "_")}-${r[lm].seconds || Date.now()}.jpg`,
                              saveAs: !0,
                            }),
                          children: "Tải ảnh",
                        }),
                        B.jsx("button", {
                          type: "button",
                          "aria-label": "Khoảnh khắc sau",
                          disabled: lm >= r.length - 1,
                          onClick: () =>
                            sm((e) => Math.min(r.length - 1, (e ?? 0) + 1)),
                          children: "›",
                        }),
                      ],
                    }),
                    B.jsx(Mn, { moment: r[lm] }),
                  ],
                }),
              }),
            B.jsx(mn, { active: u, onChange: S, unread: "feed" === u ? 0 : o }),
          ],
        });
}
function Ga() {
  const [e, t] = A.useState(!1),
    [n, r] = A.useState(!0),
    [a, l] = A.useState(null),
    o = A.useCallback(async () => {
      const { token: e, user: n } = await m(["token", "user"]);
      (e && n && (l(n), t(!0)), r(!1));
    }, []);
  return (
    A.useEffect(() => {
      o();
      const e = h((e) => {
          "loggedOut" === e.type
            ? (t(!1), l(null))
            : "loggedIn" === e.type && o();
        }),
        n = (e, n) => {
          var r, a;
          "local" === n &&
            ((null == (r = e.user) ? void 0 : r.newValue) && l(e.user.newValue),
            (null == (a = e.token) ? void 0 : a.newValue) && t(!0));
        };
      return (
        chrome.storage.onChanged.addListener(n),
        () => {
          (e(), chrome.storage.onChanged.removeListener(n));
        }
      );
    }, [o]),
    B.jsx(re.Provider, {
      value: {
        loggedIn: e,
        setLoggedIn: t,
        loading: n,
        setLoading: r,
        userData: a,
        setUserData: l,
      },
      children: n ? B.jsx(ln, {}) : e ? B.jsx(Xa, {}) : B.jsx(rn, {}),
    })
  );
}
const lkApplyPrefs = (e) => {
  const t = document.documentElement,
    n = e || {};
  ((t.dataset.theme = n.theme || "system"),
    (t.dataset.accent = n.accent || "rose"),
    (t.dataset.galleryColumns = String(n.galleryColumns || 3)),
    (t.dataset.motion = n.motion || "full"),
    (t.dataset.radius = n.radius || "soft"));
};
S().then(lkApplyPrefs);
chrome.storage.onChanged.addListener((e, t) => {
  "local" === t && e.settings && lkApplyPrefs(e.settings.newValue || {});
});
document.addEventListener("contextmenu", (e) => e.preventDefault());
const Ya = document.getElementById("loocket_app");
if (
  !(null == chrome ? void 0 : chrome.runtime) ||
  !(null == chrome ? void 0 : chrome.storage)
)
  throw (
    (document.body.innerHTML =
      "<b>Lỗi:</b> Môi trường không hợp lệ. loocket phải chạy bên trong một tiện ích Chrome."),
    new Error("loocket must run inside a Chrome extension context")
  );
ne.createRoot(Ya).render(B.jsx(A.StrictMode, { children: B.jsx(Ga, {}) }));
export { $ as R };
