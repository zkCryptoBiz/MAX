(function () {
  const o = document.createElement('link').relList;
  if (o && o.supports && o.supports('modulepreload')) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) s(a);
  new MutationObserver((a) => {
    for (const c of a)
      if (c.type === 'childList')
        for (const d of c.addedNodes)
          d.tagName === 'LINK' && d.rel === 'modulepreload' && s(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(a) {
    const c = {};
    return (
      a.integrity && (c.integrity = a.integrity),
      a.referrerPolicy && (c.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === 'use-credentials'
        ? (c.credentials = 'include')
        : a.crossOrigin === 'anonymous'
        ? (c.credentials = 'omit')
        : (c.credentials = 'same-origin'),
      c
    );
  }
  function s(a) {
    if (a.ep) return;
    a.ep = !0;
    const c = i(a);
    fetch(a.href, c);
  }
})();
var commonjsGlobal$1 =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {};
function getDefaultExportFromCjs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var jsxRuntime = { exports: {} },
  reactJsxRuntime_production_min = {},
  react = { exports: {} },
  react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var l$1 = Symbol.for('react.element'),
  n$1 = Symbol.for('react.portal'),
  p$2 = Symbol.for('react.fragment'),
  q$1 = Symbol.for('react.strict_mode'),
  r = Symbol.for('react.profiler'),
  t = Symbol.for('react.provider'),
  u = Symbol.for('react.context'),
  v$1 = Symbol.for('react.forward_ref'),
  w = Symbol.for('react.suspense'),
  x = Symbol.for('react.memo'),
  y = Symbol.for('react.lazy'),
  z$1 = Symbol.iterator;
function A$1(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (z$1 && e[z$1]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var B$1 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  C$1 = Object.assign,
  D$1 = {};
function E$1(e, o, i) {
  (this.props = e),
    (this.context = o),
    (this.refs = D$1),
    (this.updater = i || B$1);
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function (e, o) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, o, 'setState');
};
E$1.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function F() {}
F.prototype = E$1.prototype;
function G$1(e, o, i) {
  (this.props = e),
    (this.context = o),
    (this.refs = D$1),
    (this.updater = i || B$1);
}
var H$1 = (G$1.prototype = new F());
H$1.constructor = G$1;
C$1(H$1, E$1.prototype);
H$1.isPureReactComponent = !0;
var I$1 = Array.isArray,
  J = Object.prototype.hasOwnProperty,
  K$1 = { current: null },
  L$1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function M$1(e, o, i) {
  var s,
    a = {},
    c = null,
    d = null;
  if (o != null)
    for (s in (o.ref !== void 0 && (d = o.ref),
    o.key !== void 0 && (c = '' + o.key),
    o))
      J.call(o, s) && !L$1.hasOwnProperty(s) && (a[s] = o[s]);
  var h = arguments.length - 2;
  if (h === 1) a.children = i;
  else if (1 < h) {
    for (var g = Array(h), j = 0; j < h; j++) g[j] = arguments[j + 2];
    a.children = g;
  }
  if (e && e.defaultProps)
    for (s in ((h = e.defaultProps), h)) a[s] === void 0 && (a[s] = h[s]);
  return {
    $$typeof: l$1,
    type: e,
    key: c,
    ref: d,
    props: a,
    _owner: K$1.current,
  };
}
function N$1(e, o) {
  return {
    $$typeof: l$1,
    type: e.type,
    key: o,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function O$1(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === l$1;
}
function escape(e) {
  var o = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (i) {
      return o[i];
    })
  );
}
var P$1 = /\/+/g;
function Q$1(e, o) {
  return typeof e == 'object' && e !== null && e.key != null
    ? escape('' + e.key)
    : o.toString(36);
}
function R$1(e, o, i, s, a) {
  var c = typeof e;
  (c === 'undefined' || c === 'boolean') && (e = null);
  var d = !1;
  if (e === null) d = !0;
  else
    switch (c) {
      case 'string':
      case 'number':
        d = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case l$1:
          case n$1:
            d = !0;
        }
    }
  if (d)
    return (
      (d = e),
      (a = a(d)),
      (e = s === '' ? '.' + Q$1(d, 0) : s),
      I$1(a)
        ? ((i = ''),
          e != null && (i = e.replace(P$1, '$&/') + '/'),
          R$1(a, o, i, '', function (j) {
            return j;
          }))
        : a != null &&
          (O$1(a) &&
            (a = N$1(
              a,
              i +
                (!a.key || (d && d.key === a.key)
                  ? ''
                  : ('' + a.key).replace(P$1, '$&/') + '/') +
                e
            )),
          o.push(a)),
      1
    );
  if (((d = 0), (s = s === '' ? '.' : s + ':'), I$1(e)))
    for (var h = 0; h < e.length; h++) {
      c = e[h];
      var g = s + Q$1(c, h);
      d += R$1(c, o, i, g, a);
    }
  else if (((g = A$1(e)), typeof g == 'function'))
    for (e = g.call(e), h = 0; !(c = e.next()).done; )
      (c = c.value), (g = s + Q$1(c, h++)), (d += R$1(c, o, i, g, a));
  else if (c === 'object')
    throw (
      ((o = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (o === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : o) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return d;
}
function S$1(e, o, i) {
  if (e == null) return e;
  var s = [],
    a = 0;
  return (
    R$1(e, s, '', '', function (c) {
      return o.call(i, c, a++);
    }),
    s
  );
}
function T$1(e) {
  if (e._status === -1) {
    var o = e._result;
    (o = o()),
      o.then(
        function (i) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = i));
        },
        function (i) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = i));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = o));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var U$1 = { current: null },
  V$1 = { transition: null },
  W$1 = {
    ReactCurrentDispatcher: U$1,
    ReactCurrentBatchConfig: V$1,
    ReactCurrentOwner: K$1,
  };
function X$1() {
  throw Error('act(...) is not supported in production builds of React.');
}
react_production_min.Children = {
  map: S$1,
  forEach: function (e, o, i) {
    S$1(
      e,
      function () {
        o.apply(this, arguments);
      },
      i
    );
  },
  count: function (e) {
    var o = 0;
    return (
      S$1(e, function () {
        o++;
      }),
      o
    );
  },
  toArray: function (e) {
    return (
      S$1(e, function (o) {
        return o;
      }) || []
    );
  },
  only: function (e) {
    if (!O$1(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
react_production_min.Component = E$1;
react_production_min.Fragment = p$2;
react_production_min.Profiler = r;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$1;
react_production_min.Suspense = w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.act = X$1;
react_production_min.cloneElement = function (e, o, i) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var s = C$1({}, e.props),
    a = e.key,
    c = e.ref,
    d = e._owner;
  if (o != null) {
    if (
      (o.ref !== void 0 && ((c = o.ref), (d = K$1.current)),
      o.key !== void 0 && (a = '' + o.key),
      e.type && e.type.defaultProps)
    )
      var h = e.type.defaultProps;
    for (g in o)
      J.call(o, g) &&
        !L$1.hasOwnProperty(g) &&
        (s[g] = o[g] === void 0 && h !== void 0 ? h[g] : o[g]);
  }
  var g = arguments.length - 2;
  if (g === 1) s.children = i;
  else if (1 < g) {
    h = Array(g);
    for (var j = 0; j < g; j++) h[j] = arguments[j + 2];
    s.children = h;
  }
  return { $$typeof: l$1, type: e.type, key: a, ref: c, props: s, _owner: d };
};
react_production_min.createContext = function (e) {
  return (
    (e = {
      $$typeof: u,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: t, _context: e }),
    (e.Consumer = e)
  );
};
react_production_min.createElement = M$1;
react_production_min.createFactory = function (e) {
  var o = M$1.bind(null, e);
  return (o.type = e), o;
};
react_production_min.createRef = function () {
  return { current: null };
};
react_production_min.forwardRef = function (e) {
  return { $$typeof: v$1, render: e };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function (e) {
  return { $$typeof: y, _payload: { _status: -1, _result: e }, _init: T$1 };
};
react_production_min.memo = function (e, o) {
  return { $$typeof: x, type: e, compare: o === void 0 ? null : o };
};
react_production_min.startTransition = function (e) {
  var o = V$1.transition;
  V$1.transition = {};
  try {
    e();
  } finally {
    V$1.transition = o;
  }
};
react_production_min.unstable_act = X$1;
react_production_min.useCallback = function (e, o) {
  return U$1.current.useCallback(e, o);
};
react_production_min.useContext = function (e) {
  return U$1.current.useContext(e);
};
react_production_min.useDebugValue = function () {};
react_production_min.useDeferredValue = function (e) {
  return U$1.current.useDeferredValue(e);
};
react_production_min.useEffect = function (e, o) {
  return U$1.current.useEffect(e, o);
};
react_production_min.useId = function () {
  return U$1.current.useId();
};
react_production_min.useImperativeHandle = function (e, o, i) {
  return U$1.current.useImperativeHandle(e, o, i);
};
react_production_min.useInsertionEffect = function (e, o) {
  return U$1.current.useInsertionEffect(e, o);
};
react_production_min.useLayoutEffect = function (e, o) {
  return U$1.current.useLayoutEffect(e, o);
};
react_production_min.useMemo = function (e, o) {
  return U$1.current.useMemo(e, o);
};
react_production_min.useReducer = function (e, o, i) {
  return U$1.current.useReducer(e, o, i);
};
react_production_min.useRef = function (e) {
  return U$1.current.useRef(e);
};
react_production_min.useState = function (e) {
  return U$1.current.useState(e);
};
react_production_min.useSyncExternalStore = function (e, o, i) {
  return U$1.current.useSyncExternalStore(e, o, i);
};
react_production_min.useTransition = function () {
  return U$1.current.useTransition();
};
react_production_min.version = '18.3.1';
react.exports = react_production_min;
var reactExports = react.exports;
const React$1 = getDefaultExportFromCjs(reactExports);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var f = reactExports,
  k = Symbol.for('react.element'),
  l = Symbol.for('react.fragment'),
  m$1 = Object.prototype.hasOwnProperty,
  n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  p$1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function q(e, o, i) {
  var s,
    a = {},
    c = null,
    d = null;
  i !== void 0 && (c = '' + i),
    o.key !== void 0 && (c = '' + o.key),
    o.ref !== void 0 && (d = o.ref);
  for (s in o) m$1.call(o, s) && !p$1.hasOwnProperty(s) && (a[s] = o[s]);
  if (e && e.defaultProps)
    for (s in ((o = e.defaultProps), o)) a[s] === void 0 && (a[s] = o[s]);
  return { $$typeof: k, type: e, key: c, ref: d, props: a, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
jsxRuntime.exports = reactJsxRuntime_production_min;
var jsxRuntimeExports = jsxRuntime.exports,
  client = {},
  reactDom = { exports: {} },
  reactDom_production_min = {},
  scheduler = { exports: {} },
  scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function o(xt, Et) {
    var wt = xt.length;
    xt.push(Et);
    e: for (; 0 < wt; ) {
      var Pt = (wt - 1) >>> 1,
        Lt = xt[Pt];
      if (0 < a(Lt, Et)) (xt[Pt] = Et), (xt[wt] = Lt), (wt = Pt);
      else break e;
    }
  }
  function i(xt) {
    return xt.length === 0 ? null : xt[0];
  }
  function s(xt) {
    if (xt.length === 0) return null;
    var Et = xt[0],
      wt = xt.pop();
    if (wt !== Et) {
      xt[0] = wt;
      e: for (var Pt = 0, Lt = xt.length, Nt = Lt >>> 1; Pt < Nt; ) {
        var Tt = 2 * (Pt + 1) - 1,
          Bt = xt[Tt],
          Gt = Tt + 1,
          Vt = xt[Gt];
        if (0 > a(Bt, wt))
          Gt < Lt && 0 > a(Vt, Bt)
            ? ((xt[Pt] = Vt), (xt[Gt] = wt), (Pt = Gt))
            : ((xt[Pt] = Bt), (xt[Tt] = wt), (Pt = Tt));
        else if (Gt < Lt && 0 > a(Vt, wt))
          (xt[Pt] = Vt), (xt[Gt] = wt), (Pt = Gt);
        else break e;
      }
    }
    return Et;
  }
  function a(xt, Et) {
    var wt = xt.sortIndex - Et.sortIndex;
    return wt !== 0 ? wt : xt.id - Et.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var c = performance;
    e.unstable_now = function () {
      return c.now();
    };
  } else {
    var d = Date,
      h = d.now();
    e.unstable_now = function () {
      return d.now() - h;
    };
  }
  var g = [],
    j = [],
    tt = 1,
    _e = null,
    et = 3,
    ot = !1,
    st = !1,
    ft = !1,
    Ot = typeof setTimeout == 'function' ? setTimeout : null,
    b = typeof clearTimeout == 'function' ? clearTimeout : null,
    _ = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function $(xt) {
    for (var Et = i(j); Et !== null; ) {
      if (Et.callback === null) s(j);
      else if (Et.startTime <= xt)
        s(j), (Et.sortIndex = Et.expirationTime), o(g, Et);
      else break;
      Et = i(j);
    }
  }
  function ut(xt) {
    if (((ft = !1), $(xt), !st))
      if (i(g) !== null) (st = !0), At(at);
      else {
        var Et = i(j);
        Et !== null && $t(ut, Et.startTime - xt);
      }
  }
  function at(xt, Et) {
    (st = !1), ft && ((ft = !1), b(lt), (lt = -1)), (ot = !0);
    var wt = et;
    try {
      for (
        $(Et), _e = i(g);
        _e !== null && (!(_e.expirationTime > Et) || (xt && !yt()));

      ) {
        var Pt = _e.callback;
        if (typeof Pt == 'function') {
          (_e.callback = null), (et = _e.priorityLevel);
          var Lt = Pt(_e.expirationTime <= Et);
          (Et = e.unstable_now()),
            typeof Lt == 'function' ? (_e.callback = Lt) : _e === i(g) && s(g),
            $(Et);
        } else s(g);
        _e = i(g);
      }
      if (_e !== null) var Nt = !0;
      else {
        var Tt = i(j);
        Tt !== null && $t(ut, Tt.startTime - Et), (Nt = !1);
      }
      return Nt;
    } finally {
      (_e = null), (et = wt), (ot = !1);
    }
  }
  var it = !1,
    mt = null,
    lt = -1,
    bt = 5,
    _t = -1;
  function yt() {
    return !(e.unstable_now() - _t < bt);
  }
  function dt() {
    if (mt !== null) {
      var xt = e.unstable_now();
      _t = xt;
      var Et = !0;
      try {
        Et = mt(!0, xt);
      } finally {
        Et ? Rt() : ((it = !1), (mt = null));
      }
    } else it = !1;
  }
  var Rt;
  if (typeof _ == 'function')
    Rt = function () {
      _(dt);
    };
  else if (typeof MessageChannel < 'u') {
    var vt = new MessageChannel(),
      Mt = vt.port2;
    (vt.port1.onmessage = dt),
      (Rt = function () {
        Mt.postMessage(null);
      });
  } else
    Rt = function () {
      Ot(dt, 0);
    };
  function At(xt) {
    (mt = xt), it || ((it = !0), Rt());
  }
  function $t(xt, Et) {
    lt = Ot(function () {
      xt(e.unstable_now());
    }, Et);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (xt) {
      xt.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      st || ot || ((st = !0), At(at));
    }),
    (e.unstable_forceFrameRate = function (xt) {
      0 > xt || 125 < xt
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (bt = 0 < xt ? Math.floor(1e3 / xt) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return et;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return i(g);
    }),
    (e.unstable_next = function (xt) {
      switch (et) {
        case 1:
        case 2:
        case 3:
          var Et = 3;
          break;
        default:
          Et = et;
      }
      var wt = et;
      et = Et;
      try {
        return xt();
      } finally {
        et = wt;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (xt, Et) {
      switch (xt) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          xt = 3;
      }
      var wt = et;
      et = xt;
      try {
        return Et();
      } finally {
        et = wt;
      }
    }),
    (e.unstable_scheduleCallback = function (xt, Et, wt) {
      var Pt = e.unstable_now();
      switch (
        (typeof wt == 'object' && wt !== null
          ? ((wt = wt.delay),
            (wt = typeof wt == 'number' && 0 < wt ? Pt + wt : Pt))
          : (wt = Pt),
        xt)
      ) {
        case 1:
          var Lt = -1;
          break;
        case 2:
          Lt = 250;
          break;
        case 5:
          Lt = 1073741823;
          break;
        case 4:
          Lt = 1e4;
          break;
        default:
          Lt = 5e3;
      }
      return (
        (Lt = wt + Lt),
        (xt = {
          id: tt++,
          callback: Et,
          priorityLevel: xt,
          startTime: wt,
          expirationTime: Lt,
          sortIndex: -1,
        }),
        wt > Pt
          ? ((xt.sortIndex = wt),
            o(j, xt),
            i(g) === null &&
              xt === i(j) &&
              (ft ? (b(lt), (lt = -1)) : (ft = !0), $t(ut, wt - Pt)))
          : ((xt.sortIndex = Lt), o(g, xt), st || ot || ((st = !0), At(at))),
        xt
      );
    }),
    (e.unstable_shouldYield = yt),
    (e.unstable_wrapCallback = function (xt) {
      var Et = et;
      return function () {
        var wt = et;
        et = Et;
        try {
          return xt.apply(this, arguments);
        } finally {
          et = wt;
        }
      };
    });
})(scheduler_production_min);
scheduler.exports = scheduler_production_min;
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var aa = reactExports,
  ca = schedulerExports;
function p(e) {
  for (
    var o = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, i = 1;
    i < arguments.length;
    i++
  )
    o += '&args[]=' + encodeURIComponent(arguments[i]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    o +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var da = new Set(),
  ea = {};
function fa(e, o) {
  ha(e, o), ha(e + 'Capture', o);
}
function ha(e, o) {
  for (ea[e] = o, e = 0; e < o.length; e++) da.add(o[e]);
}
var ia = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  ja = Object.prototype.hasOwnProperty,
  ka =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  la = {},
  ma = {};
function oa(e) {
  return ja.call(ma, e)
    ? !0
    : ja.call(la, e)
    ? !1
    : ka.test(e)
    ? (ma[e] = !0)
    : ((la[e] = !0), !1);
}
function pa(e, o, i, s) {
  if (i !== null && i.type === 0) return !1;
  switch (typeof o) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return s
        ? !1
        : i !== null
        ? !i.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function qa(e, o, i, s) {
  if (o === null || typeof o > 'u' || pa(e, o, i, s)) return !0;
  if (s) return !1;
  if (i !== null)
    switch (i.type) {
      case 3:
        return !o;
      case 4:
        return o === !1;
      case 5:
        return isNaN(o);
      case 6:
        return isNaN(o) || 1 > o;
    }
  return !1;
}
function v(e, o, i, s, a, c, d) {
  (this.acceptsBooleans = o === 2 || o === 3 || o === 4),
    (this.attributeName = s),
    (this.attributeNamespace = a),
    (this.mustUseProperty = i),
    (this.propertyName = e),
    (this.type = o),
    (this.sanitizeURL = c),
    (this.removeEmptyString = d);
}
var z = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    z[e] = new v(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var o = e[0];
  z[o] = new v(o, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  z[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  z[e] = new v(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    z[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  z[e] = new v(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  z[e] = new v(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  z[e] = new v(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  z[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ra = /[\-:]([a-z])/g;
function sa(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var o = e.replace(ra, sa);
    z[o] = new v(o, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var o = e.replace(ra, sa);
    z[o] = new v(o, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var o = e.replace(ra, sa);
  z[o] = new v(o, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  z[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
z.xlinkHref = new v(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  z[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ta(e, o, i, s) {
  var a = z.hasOwnProperty(o) ? z[o] : null;
  (a !== null
    ? a.type !== 0
    : s ||
      !(2 < o.length) ||
      (o[0] !== 'o' && o[0] !== 'O') ||
      (o[1] !== 'n' && o[1] !== 'N')) &&
    (qa(o, i, a, s) && (i = null),
    s || a === null
      ? oa(o) && (i === null ? e.removeAttribute(o) : e.setAttribute(o, '' + i))
      : a.mustUseProperty
      ? (e[a.propertyName] = i === null ? (a.type === 3 ? !1 : '') : i)
      : ((o = a.attributeName),
        (s = a.attributeNamespace),
        i === null
          ? e.removeAttribute(o)
          : ((a = a.type),
            (i = a === 3 || (a === 4 && i === !0) ? '' : '' + i),
            s ? e.setAttributeNS(s, o, i) : e.setAttribute(o, i))));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  va = Symbol.for('react.element'),
  wa = Symbol.for('react.portal'),
  ya = Symbol.for('react.fragment'),
  za = Symbol.for('react.strict_mode'),
  Aa = Symbol.for('react.profiler'),
  Ba = Symbol.for('react.provider'),
  Ca = Symbol.for('react.context'),
  Da = Symbol.for('react.forward_ref'),
  Ea = Symbol.for('react.suspense'),
  Fa = Symbol.for('react.suspense_list'),
  Ga = Symbol.for('react.memo'),
  Ha = Symbol.for('react.lazy'),
  Ia = Symbol.for('react.offscreen'),
  Ja = Symbol.iterator;
function Ka(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ja && e[Ja]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var A = Object.assign,
  La;
function Ma(e) {
  if (La === void 0)
    try {
      throw Error();
    } catch (i) {
      var o = i.stack.trim().match(/\n( *(at )?)/);
      La = (o && o[1]) || '';
    }
  return (
    `
` +
    La +
    e
  );
}
var Na = !1;
function Oa(e, o) {
  if (!e || Na) return '';
  Na = !0;
  var i = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (o)
      if (
        ((o = function () {
          throw Error();
        }),
        Object.defineProperty(o.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(o, []);
        } catch (j) {
          var s = j;
        }
        Reflect.construct(e, [], o);
      } else {
        try {
          o.call();
        } catch (j) {
          s = j;
        }
        e.call(o.prototype);
      }
    else {
      try {
        throw Error();
      } catch (j) {
        s = j;
      }
      e();
    }
  } catch (j) {
    if (j && s && typeof j.stack == 'string') {
      for (
        var a = j.stack.split(`
`),
          c = s.stack.split(`
`),
          d = a.length - 1,
          h = c.length - 1;
        1 <= d && 0 <= h && a[d] !== c[h];

      )
        h--;
      for (; 1 <= d && 0 <= h; d--, h--)
        if (a[d] !== c[h]) {
          if (d !== 1 || h !== 1)
            do
              if ((d--, h--, 0 > h || a[d] !== c[h])) {
                var g =
                  `
` + a[d].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    g.includes('<anonymous>') &&
                    (g = g.replace('<anonymous>', e.displayName)),
                  g
                );
              }
            while (1 <= d && 0 <= h);
          break;
        }
    }
  } finally {
    (Na = !1), (Error.prepareStackTrace = i);
  }
  return (e = e ? e.displayName || e.name : '') ? Ma(e) : '';
}
function Pa(e) {
  switch (e.tag) {
    case 5:
      return Ma(e.type);
    case 16:
      return Ma('Lazy');
    case 13:
      return Ma('Suspense');
    case 19:
      return Ma('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Oa(e.type, !1)), e;
    case 11:
      return (e = Oa(e.type.render, !1)), e;
    case 1:
      return (e = Oa(e.type, !0)), e;
    default:
      return '';
  }
}
function Qa(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case ya:
      return 'Fragment';
    case wa:
      return 'Portal';
    case Aa:
      return 'Profiler';
    case za:
      return 'StrictMode';
    case Ea:
      return 'Suspense';
    case Fa:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Ca:
        return (e.displayName || 'Context') + '.Consumer';
      case Ba:
        return (e._context.displayName || 'Context') + '.Provider';
      case Da:
        var o = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = o.displayName || o.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Ga:
        return (
          (o = e.displayName || null), o !== null ? o : Qa(e.type) || 'Memo'
        );
      case Ha:
        (o = e._payload), (e = e._init);
        try {
          return Qa(e(o));
        } catch {}
    }
  return null;
}
function Ra(e) {
  var o = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (o.displayName || 'Context') + '.Consumer';
    case 10:
      return (o._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = o.render),
        (e = e.displayName || e.name || ''),
        o.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return o;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Qa(o);
    case 8:
      return o === za ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof o == 'function') return o.displayName || o.name || null;
      if (typeof o == 'string') return o;
  }
  return null;
}
function Sa(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Ta(e) {
  var o = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (o === 'checkbox' || o === 'radio')
  );
}
function Ua(e) {
  var o = Ta(e) ? 'checked' : 'value',
    i = Object.getOwnPropertyDescriptor(e.constructor.prototype, o),
    s = '' + e[o];
  if (
    !e.hasOwnProperty(o) &&
    typeof i < 'u' &&
    typeof i.get == 'function' &&
    typeof i.set == 'function'
  ) {
    var a = i.get,
      c = i.set;
    return (
      Object.defineProperty(e, o, {
        configurable: !0,
        get: function () {
          return a.call(this);
        },
        set: function (d) {
          (s = '' + d), c.call(this, d);
        },
      }),
      Object.defineProperty(e, o, { enumerable: i.enumerable }),
      {
        getValue: function () {
          return s;
        },
        setValue: function (d) {
          s = '' + d;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[o];
        },
      }
    );
  }
}
function Va(e) {
  e._valueTracker || (e._valueTracker = Ua(e));
}
function Wa(e) {
  if (!e) return !1;
  var o = e._valueTracker;
  if (!o) return !0;
  var i = o.getValue(),
    s = '';
  return (
    e && (s = Ta(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = s),
    e !== i ? (o.setValue(e), !0) : !1
  );
}
function Xa(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ya(e, o) {
  var i = o.checked;
  return A({}, o, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: i ?? e._wrapperState.initialChecked,
  });
}
function Za(e, o) {
  var i = o.defaultValue == null ? '' : o.defaultValue,
    s = o.checked != null ? o.checked : o.defaultChecked;
  (i = Sa(o.value != null ? o.value : i)),
    (e._wrapperState = {
      initialChecked: s,
      initialValue: i,
      controlled:
        o.type === 'checkbox' || o.type === 'radio'
          ? o.checked != null
          : o.value != null,
    });
}
function ab(e, o) {
  (o = o.checked), o != null && ta(e, 'checked', o, !1);
}
function bb(e, o) {
  ab(e, o);
  var i = Sa(o.value),
    s = o.type;
  if (i != null)
    s === 'number'
      ? ((i === 0 && e.value === '') || e.value != i) && (e.value = '' + i)
      : e.value !== '' + i && (e.value = '' + i);
  else if (s === 'submit' || s === 'reset') {
    e.removeAttribute('value');
    return;
  }
  o.hasOwnProperty('value')
    ? cb(e, o.type, i)
    : o.hasOwnProperty('defaultValue') && cb(e, o.type, Sa(o.defaultValue)),
    o.checked == null &&
      o.defaultChecked != null &&
      (e.defaultChecked = !!o.defaultChecked);
}
function db(e, o, i) {
  if (o.hasOwnProperty('value') || o.hasOwnProperty('defaultValue')) {
    var s = o.type;
    if (
      !(
        (s !== 'submit' && s !== 'reset') ||
        (o.value !== void 0 && o.value !== null)
      )
    )
      return;
    (o = '' + e._wrapperState.initialValue),
      i || o === e.value || (e.value = o),
      (e.defaultValue = o);
  }
  (i = e.name),
    i !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    i !== '' && (e.name = i);
}
function cb(e, o, i) {
  (o !== 'number' || Xa(e.ownerDocument) !== e) &&
    (i == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + i && (e.defaultValue = '' + i));
}
var eb = Array.isArray;
function fb(e, o, i, s) {
  if (((e = e.options), o)) {
    o = {};
    for (var a = 0; a < i.length; a++) o['$' + i[a]] = !0;
    for (i = 0; i < e.length; i++)
      (a = o.hasOwnProperty('$' + e[i].value)),
        e[i].selected !== a && (e[i].selected = a),
        a && s && (e[i].defaultSelected = !0);
  } else {
    for (i = '' + Sa(i), o = null, a = 0; a < e.length; a++) {
      if (e[a].value === i) {
        (e[a].selected = !0), s && (e[a].defaultSelected = !0);
        return;
      }
      o !== null || e[a].disabled || (o = e[a]);
    }
    o !== null && (o.selected = !0);
  }
}
function gb(e, o) {
  if (o.dangerouslySetInnerHTML != null) throw Error(p(91));
  return A({}, o, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function hb(e, o) {
  var i = o.value;
  if (i == null) {
    if (((i = o.children), (o = o.defaultValue), i != null)) {
      if (o != null) throw Error(p(92));
      if (eb(i)) {
        if (1 < i.length) throw Error(p(93));
        i = i[0];
      }
      o = i;
    }
    o == null && (o = ''), (i = o);
  }
  e._wrapperState = { initialValue: Sa(i) };
}
function ib(e, o) {
  var i = Sa(o.value),
    s = Sa(o.defaultValue);
  i != null &&
    ((i = '' + i),
    i !== e.value && (e.value = i),
    o.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)),
    s != null && (e.defaultValue = '' + s);
}
function jb(e) {
  var o = e.textContent;
  o === e._wrapperState.initialValue && o !== '' && o !== null && (e.value = o);
}
function kb(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function lb(e, o) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? kb(o)
    : e === 'http://www.w3.org/2000/svg' && o === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var mb,
  nb = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (o, i, s, a) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(o, i, s, a);
          });
        }
      : e;
  })(function (e, o) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = o;
    else {
      for (
        mb = mb || document.createElement('div'),
          mb.innerHTML = '<svg>' + o.valueOf().toString() + '</svg>',
          o = mb.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; o.firstChild; ) e.appendChild(o.firstChild);
    }
  });
function ob(e, o) {
  if (o) {
    var i = e.firstChild;
    if (i && i === e.lastChild && i.nodeType === 3) {
      i.nodeValue = o;
      return;
    }
  }
  e.textContent = o;
}
var pb = {
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
  qb = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(pb).forEach(function (e) {
  qb.forEach(function (o) {
    (o = o + e.charAt(0).toUpperCase() + e.substring(1)), (pb[o] = pb[e]);
  });
});
function rb(e, o, i) {
  return o == null || typeof o == 'boolean' || o === ''
    ? ''
    : i || typeof o != 'number' || o === 0 || (pb.hasOwnProperty(e) && pb[e])
    ? ('' + o).trim()
    : o + 'px';
}
function sb(e, o) {
  e = e.style;
  for (var i in o)
    if (o.hasOwnProperty(i)) {
      var s = i.indexOf('--') === 0,
        a = rb(i, o[i], s);
      i === 'float' && (i = 'cssFloat'), s ? e.setProperty(i, a) : (e[i] = a);
    }
}
var tb = A(
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
  }
);
function ub(e, o) {
  if (o) {
    if (tb[e] && (o.children != null || o.dangerouslySetInnerHTML != null))
      throw Error(p(137, e));
    if (o.dangerouslySetInnerHTML != null) {
      if (o.children != null) throw Error(p(60));
      if (
        typeof o.dangerouslySetInnerHTML != 'object' ||
        !('__html' in o.dangerouslySetInnerHTML)
      )
        throw Error(p(61));
    }
    if (o.style != null && typeof o.style != 'object') throw Error(p(62));
  }
}
function vb(e, o) {
  if (e.indexOf('-') === -1) return typeof o.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var wb = null;
function xb(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var yb = null,
  zb = null,
  Ab = null;
function Bb(e) {
  if ((e = Cb(e))) {
    if (typeof yb != 'function') throw Error(p(280));
    var o = e.stateNode;
    o && ((o = Db(o)), yb(e.stateNode, e.type, o));
  }
}
function Eb(e) {
  zb ? (Ab ? Ab.push(e) : (Ab = [e])) : (zb = e);
}
function Fb() {
  if (zb) {
    var e = zb,
      o = Ab;
    if (((Ab = zb = null), Bb(e), o)) for (e = 0; e < o.length; e++) Bb(o[e]);
  }
}
function Gb(e, o) {
  return e(o);
}
function Hb() {}
var Ib = !1;
function Jb(e, o, i) {
  if (Ib) return e(o, i);
  Ib = !0;
  try {
    return Gb(e, o, i);
  } finally {
    (Ib = !1), (zb !== null || Ab !== null) && (Hb(), Fb());
  }
}
function Kb(e, o) {
  var i = e.stateNode;
  if (i === null) return null;
  var s = Db(i);
  if (s === null) return null;
  i = s[o];
  e: switch (o) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (s = !s.disabled) ||
        ((e = e.type),
        (s = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !s);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (i && typeof i != 'function') throw Error(p(231, o, typeof i));
  return i;
}
var Lb = !1;
if (ia)
  try {
    var Mb = {};
    Object.defineProperty(Mb, 'passive', {
      get: function () {
        Lb = !0;
      },
    }),
      window.addEventListener('test', Mb, Mb),
      window.removeEventListener('test', Mb, Mb);
  } catch {
    Lb = !1;
  }
function Nb(e, o, i, s, a, c, d, h, g) {
  var j = Array.prototype.slice.call(arguments, 3);
  try {
    o.apply(i, j);
  } catch (tt) {
    this.onError(tt);
  }
}
var Ob = !1,
  Pb = null,
  Qb = !1,
  Rb = null,
  Sb = {
    onError: function (e) {
      (Ob = !0), (Pb = e);
    },
  };
function Tb(e, o, i, s, a, c, d, h, g) {
  (Ob = !1), (Pb = null), Nb.apply(Sb, arguments);
}
function Ub(e, o, i, s, a, c, d, h, g) {
  if ((Tb.apply(this, arguments), Ob)) {
    if (Ob) {
      var j = Pb;
      (Ob = !1), (Pb = null);
    } else throw Error(p(198));
    Qb || ((Qb = !0), (Rb = j));
  }
}
function Vb(e) {
  var o = e,
    i = e;
  if (e.alternate) for (; o.return; ) o = o.return;
  else {
    e = o;
    do (o = e), o.flags & 4098 && (i = o.return), (e = o.return);
    while (e);
  }
  return o.tag === 3 ? i : null;
}
function Wb(e) {
  if (e.tag === 13) {
    var o = e.memoizedState;
    if (
      (o === null && ((e = e.alternate), e !== null && (o = e.memoizedState)),
      o !== null)
    )
      return o.dehydrated;
  }
  return null;
}
function Xb(e) {
  if (Vb(e) !== e) throw Error(p(188));
}
function Yb(e) {
  var o = e.alternate;
  if (!o) {
    if (((o = Vb(e)), o === null)) throw Error(p(188));
    return o !== e ? null : e;
  }
  for (var i = e, s = o; ; ) {
    var a = i.return;
    if (a === null) break;
    var c = a.alternate;
    if (c === null) {
      if (((s = a.return), s !== null)) {
        i = s;
        continue;
      }
      break;
    }
    if (a.child === c.child) {
      for (c = a.child; c; ) {
        if (c === i) return Xb(a), e;
        if (c === s) return Xb(a), o;
        c = c.sibling;
      }
      throw Error(p(188));
    }
    if (i.return !== s.return) (i = a), (s = c);
    else {
      for (var d = !1, h = a.child; h; ) {
        if (h === i) {
          (d = !0), (i = a), (s = c);
          break;
        }
        if (h === s) {
          (d = !0), (s = a), (i = c);
          break;
        }
        h = h.sibling;
      }
      if (!d) {
        for (h = c.child; h; ) {
          if (h === i) {
            (d = !0), (i = c), (s = a);
            break;
          }
          if (h === s) {
            (d = !0), (s = c), (i = a);
            break;
          }
          h = h.sibling;
        }
        if (!d) throw Error(p(189));
      }
    }
    if (i.alternate !== s) throw Error(p(190));
  }
  if (i.tag !== 3) throw Error(p(188));
  return i.stateNode.current === i ? e : o;
}
function Zb(e) {
  return (e = Yb(e)), e !== null ? $b(e) : null;
}
function $b(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var o = $b(e);
    if (o !== null) return o;
    e = e.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback,
  bc = ca.unstable_cancelCallback,
  cc = ca.unstable_shouldYield,
  dc = ca.unstable_requestPaint,
  B = ca.unstable_now,
  ec = ca.unstable_getCurrentPriorityLevel,
  fc = ca.unstable_ImmediatePriority,
  gc = ca.unstable_UserBlockingPriority,
  hc = ca.unstable_NormalPriority,
  ic = ca.unstable_LowPriority,
  jc = ca.unstable_IdlePriority,
  kc = null,
  lc = null;
function mc(e) {
  if (lc && typeof lc.onCommitFiberRoot == 'function')
    try {
      lc.onCommitFiberRoot(kc, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var oc = Math.clz32 ? Math.clz32 : nc,
  pc = Math.log,
  qc = Math.LN2;
function nc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((pc(e) / qc) | 0)) | 0;
}
var rc = 64,
  sc = 4194304;
function tc(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
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
function uc(e, o) {
  var i = e.pendingLanes;
  if (i === 0) return 0;
  var s = 0,
    a = e.suspendedLanes,
    c = e.pingedLanes,
    d = i & 268435455;
  if (d !== 0) {
    var h = d & ~a;
    h !== 0 ? (s = tc(h)) : ((c &= d), c !== 0 && (s = tc(c)));
  } else (d = i & ~a), d !== 0 ? (s = tc(d)) : c !== 0 && (s = tc(c));
  if (s === 0) return 0;
  if (
    o !== 0 &&
    o !== s &&
    !(o & a) &&
    ((a = s & -s), (c = o & -o), a >= c || (a === 16 && (c & 4194240) !== 0))
  )
    return o;
  if ((s & 4 && (s |= i & 16), (o = e.entangledLanes), o !== 0))
    for (e = e.entanglements, o &= s; 0 < o; )
      (i = 31 - oc(o)), (a = 1 << i), (s |= e[i]), (o &= ~a);
  return s;
}
function vc(e, o) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return o + 250;
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
      return o + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(e, o) {
  for (
    var i = e.suspendedLanes,
      s = e.pingedLanes,
      a = e.expirationTimes,
      c = e.pendingLanes;
    0 < c;

  ) {
    var d = 31 - oc(c),
      h = 1 << d,
      g = a[d];
    g === -1
      ? (!(h & i) || h & s) && (a[d] = vc(h, o))
      : g <= o && (e.expiredLanes |= h),
      (c &= ~h);
  }
}
function xc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function yc() {
  var e = rc;
  return (rc <<= 1), !(rc & 4194240) && (rc = 64), e;
}
function zc(e) {
  for (var o = [], i = 0; 31 > i; i++) o.push(e);
  return o;
}
function Ac(e, o, i) {
  (e.pendingLanes |= o),
    o !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (o = 31 - oc(o)),
    (e[o] = i);
}
function Bc(e, o) {
  var i = e.pendingLanes & ~o;
  (e.pendingLanes = o),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= o),
    (e.mutableReadLanes &= o),
    (e.entangledLanes &= o),
    (o = e.entanglements);
  var s = e.eventTimes;
  for (e = e.expirationTimes; 0 < i; ) {
    var a = 31 - oc(i),
      c = 1 << a;
    (o[a] = 0), (s[a] = -1), (e[a] = -1), (i &= ~c);
  }
}
function Cc(e, o) {
  var i = (e.entangledLanes |= o);
  for (e = e.entanglements; i; ) {
    var s = 31 - oc(i),
      a = 1 << s;
    (a & o) | (e[s] & o) && (e[s] |= o), (i &= ~a);
  }
}
var C = 0;
function Dc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ec,
  Fc,
  Gc,
  Hc,
  Ic,
  Jc = !1,
  Kc = [],
  Lc = null,
  Mc = null,
  Nc = null,
  Oc = new Map(),
  Pc = new Map(),
  Qc = [],
  Rc =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Sc(e, o) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Lc = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Mc = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Nc = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Oc.delete(o.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Pc.delete(o.pointerId);
  }
}
function Tc(e, o, i, s, a, c) {
  return e === null || e.nativeEvent !== c
    ? ((e = {
        blockedOn: o,
        domEventName: i,
        eventSystemFlags: s,
        nativeEvent: c,
        targetContainers: [a],
      }),
      o !== null && ((o = Cb(o)), o !== null && Fc(o)),
      e)
    : ((e.eventSystemFlags |= s),
      (o = e.targetContainers),
      a !== null && o.indexOf(a) === -1 && o.push(a),
      e);
}
function Uc(e, o, i, s, a) {
  switch (o) {
    case 'focusin':
      return (Lc = Tc(Lc, e, o, i, s, a)), !0;
    case 'dragenter':
      return (Mc = Tc(Mc, e, o, i, s, a)), !0;
    case 'mouseover':
      return (Nc = Tc(Nc, e, o, i, s, a)), !0;
    case 'pointerover':
      var c = a.pointerId;
      return Oc.set(c, Tc(Oc.get(c) || null, e, o, i, s, a)), !0;
    case 'gotpointercapture':
      return (
        (c = a.pointerId), Pc.set(c, Tc(Pc.get(c) || null, e, o, i, s, a)), !0
      );
  }
  return !1;
}
function Vc(e) {
  var o = Wc(e.target);
  if (o !== null) {
    var i = Vb(o);
    if (i !== null) {
      if (((o = i.tag), o === 13)) {
        if (((o = Wb(i)), o !== null)) {
          (e.blockedOn = o),
            Ic(e.priority, function () {
              Gc(i);
            });
          return;
        }
      } else if (o === 3 && i.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Xc(e) {
  if (e.blockedOn !== null) return !1;
  for (var o = e.targetContainers; 0 < o.length; ) {
    var i = Yc(e.domEventName, e.eventSystemFlags, o[0], e.nativeEvent);
    if (i === null) {
      i = e.nativeEvent;
      var s = new i.constructor(i.type, i);
      (wb = s), i.target.dispatchEvent(s), (wb = null);
    } else return (o = Cb(i)), o !== null && Fc(o), (e.blockedOn = i), !1;
    o.shift();
  }
  return !0;
}
function Zc(e, o, i) {
  Xc(e) && i.delete(o);
}
function $c() {
  (Jc = !1),
    Lc !== null && Xc(Lc) && (Lc = null),
    Mc !== null && Xc(Mc) && (Mc = null),
    Nc !== null && Xc(Nc) && (Nc = null),
    Oc.forEach(Zc),
    Pc.forEach(Zc);
}
function ad(e, o) {
  e.blockedOn === o &&
    ((e.blockedOn = null),
    Jc ||
      ((Jc = !0),
      ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(e) {
  function o(a) {
    return ad(a, e);
  }
  if (0 < Kc.length) {
    ad(Kc[0], e);
    for (var i = 1; i < Kc.length; i++) {
      var s = Kc[i];
      s.blockedOn === e && (s.blockedOn = null);
    }
  }
  for (
    Lc !== null && ad(Lc, e),
      Mc !== null && ad(Mc, e),
      Nc !== null && ad(Nc, e),
      Oc.forEach(o),
      Pc.forEach(o),
      i = 0;
    i < Qc.length;
    i++
  )
    (s = Qc[i]), s.blockedOn === e && (s.blockedOn = null);
  for (; 0 < Qc.length && ((i = Qc[0]), i.blockedOn === null); )
    Vc(i), i.blockedOn === null && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig,
  dd = !0;
function ed(e, o, i, s) {
  var a = C,
    c = cd.transition;
  cd.transition = null;
  try {
    (C = 1), fd(e, o, i, s);
  } finally {
    (C = a), (cd.transition = c);
  }
}
function gd(e, o, i, s) {
  var a = C,
    c = cd.transition;
  cd.transition = null;
  try {
    (C = 4), fd(e, o, i, s);
  } finally {
    (C = a), (cd.transition = c);
  }
}
function fd(e, o, i, s) {
  if (dd) {
    var a = Yc(e, o, i, s);
    if (a === null) hd(e, o, s, id, i), Sc(e, s);
    else if (Uc(a, e, o, i, s)) s.stopPropagation();
    else if ((Sc(e, s), o & 4 && -1 < Rc.indexOf(e))) {
      for (; a !== null; ) {
        var c = Cb(a);
        if (
          (c !== null && Ec(c),
          (c = Yc(e, o, i, s)),
          c === null && hd(e, o, s, id, i),
          c === a)
        )
          break;
        a = c;
      }
      a !== null && s.stopPropagation();
    } else hd(e, o, s, null, i);
  }
}
var id = null;
function Yc(e, o, i, s) {
  if (((id = null), (e = xb(s)), (e = Wc(e)), e !== null))
    if (((o = Vb(e)), o === null)) e = null;
    else if (((i = o.tag), i === 13)) {
      if (((e = Wb(o)), e !== null)) return e;
      e = null;
    } else if (i === 3) {
      if (o.stateNode.current.memoizedState.isDehydrated)
        return o.tag === 3 ? o.stateNode.containerInfo : null;
      e = null;
    } else o !== e && (e = null);
  return (id = e), null;
}
function jd(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null,
  ld = null,
  md = null;
function nd() {
  if (md) return md;
  var e,
    o = ld,
    i = o.length,
    s,
    a = 'value' in kd ? kd.value : kd.textContent,
    c = a.length;
  for (e = 0; e < i && o[e] === a[e]; e++);
  var d = i - e;
  for (s = 1; s <= d && o[i - s] === a[c - s]; s++);
  return (md = a.slice(e, 1 < s ? 1 - s : void 0));
}
function od(e) {
  var o = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && o === 13 && (e = 13))
      : (e = o),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function pd() {
  return !0;
}
function qd() {
  return !1;
}
function rd(e) {
  function o(i, s, a, c, d) {
    (this._reactName = i),
      (this._targetInst = a),
      (this.type = s),
      (this.nativeEvent = c),
      (this.target = d),
      (this.currentTarget = null);
    for (var h in e)
      e.hasOwnProperty(h) && ((i = e[h]), (this[h] = i ? i(c) : c[h]));
    return (
      (this.isDefaultPrevented = (
        c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
      )
        ? pd
        : qd),
      (this.isPropagationStopped = qd),
      this
    );
  }
  return (
    A(o.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var i = this.nativeEvent;
        i &&
          (i.preventDefault
            ? i.preventDefault()
            : typeof i.returnValue != 'unknown' && (i.returnValue = !1),
          (this.isDefaultPrevented = pd));
      },
      stopPropagation: function () {
        var i = this.nativeEvent;
        i &&
          (i.stopPropagation
            ? i.stopPropagation()
            : typeof i.cancelBubble != 'unknown' && (i.cancelBubble = !0),
          (this.isPropagationStopped = pd));
      },
      persist: function () {},
      isPersistent: pd,
    }),
    o
  );
}
var sd = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  td = rd(sd),
  ud = A({}, sd, { view: 0, detail: 0 }),
  vd = rd(ud),
  wd,
  xd,
  yd,
  Ad = A({}, ud, {
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
    getModifierState: zd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== yd &&
            (yd && e.type === 'mousemove'
              ? ((wd = e.screenX - yd.screenX), (xd = e.screenY - yd.screenY))
              : (xd = wd = 0),
            (yd = e)),
          wd);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : xd;
    },
  }),
  Bd = rd(Ad),
  Cd = A({}, Ad, { dataTransfer: 0 }),
  Dd = rd(Cd),
  Ed = A({}, ud, { relatedTarget: 0 }),
  Fd = rd(Ed),
  Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Hd = rd(Gd),
  Id = A({}, sd, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Jd = rd(Id),
  Kd = A({}, sd, { data: 0 }),
  Ld = rd(Kd),
  Md = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Nd = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Od = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Pd(e) {
  var o = this.nativeEvent;
  return o.getModifierState ? o.getModifierState(e) : (e = Od[e]) ? !!o[e] : !1;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, {
    key: function (e) {
      if (e.key) {
        var o = Md[e.key] || e.key;
        if (o !== 'Unidentified') return o;
      }
      return e.type === 'keypress'
        ? ((e = od(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Nd[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zd,
    charCode: function (e) {
      return e.type === 'keypress' ? od(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? od(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  Rd = rd(Qd),
  Sd = A({}, Ad, {
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
  Td = rd(Sd),
  Ud = A({}, ud, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zd,
  }),
  Vd = rd(Ud),
  Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xd = rd(Wd),
  Yd = A({}, Ad, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Zd = rd(Yd),
  $d = [9, 13, 27, 32],
  ae = ia && 'CompositionEvent' in window,
  be = null;
ia && 'documentMode' in document && (be = document.documentMode);
var ce = ia && 'TextEvent' in window && !be,
  de = ia && (!ae || (be && 8 < be && 11 >= be)),
  ee = ' ',
  fe = !1;
function ge(e, o) {
  switch (e) {
    case 'keyup':
      return $d.indexOf(o.keyCode) !== -1;
    case 'keydown':
      return o.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function he(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var ie = !1;
function je(e, o) {
  switch (e) {
    case 'compositionend':
      return he(o);
    case 'keypress':
      return o.which !== 32 ? null : ((fe = !0), ee);
    case 'textInput':
      return (e = o.data), e === ee && fe ? null : e;
    default:
      return null;
  }
}
function ke(e, o) {
  if (ie)
    return e === 'compositionend' || (!ae && ge(e, o))
      ? ((e = nd()), (md = ld = kd = null), (ie = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(o.ctrlKey || o.altKey || o.metaKey) || (o.ctrlKey && o.altKey)) {
        if (o.char && 1 < o.char.length) return o.char;
        if (o.which) return String.fromCharCode(o.which);
      }
      return null;
    case 'compositionend':
      return de && o.locale !== 'ko' ? null : o.data;
    default:
      return null;
  }
}
var le = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
function me(e) {
  var o = e && e.nodeName && e.nodeName.toLowerCase();
  return o === 'input' ? !!le[e.type] : o === 'textarea';
}
function ne(e, o, i, s) {
  Eb(s),
    (o = oe(o, 'onChange')),
    0 < o.length &&
      ((i = new td('onChange', 'change', null, i, s)),
      e.push({ event: i, listeners: o }));
}
var pe = null,
  qe = null;
function re(e) {
  se(e, 0);
}
function te(e) {
  var o = ue(e);
  if (Wa(o)) return e;
}
function ve(e, o) {
  if (e === 'change') return o;
}
var we = !1;
if (ia) {
  var xe;
  if (ia) {
    var ye = 'oninput' in document;
    if (!ye) {
      var ze = document.createElement('div');
      ze.setAttribute('oninput', 'return;'),
        (ye = typeof ze.oninput == 'function');
    }
    xe = ye;
  } else xe = !1;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent('onpropertychange', Be), (qe = pe = null));
}
function Be(e) {
  if (e.propertyName === 'value' && te(qe)) {
    var o = [];
    ne(o, qe, e, xb(e)), Jb(re, o);
  }
}
function Ce(e, o, i) {
  e === 'focusin'
    ? (Ae(), (pe = o), (qe = i), pe.attachEvent('onpropertychange', Be))
    : e === 'focusout' && Ae();
}
function De(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return te(qe);
}
function Ee(e, o) {
  if (e === 'click') return te(o);
}
function Fe(e, o) {
  if (e === 'input' || e === 'change') return te(o);
}
function Ge(e, o) {
  return (e === o && (e !== 0 || 1 / e === 1 / o)) || (e !== e && o !== o);
}
var He = typeof Object.is == 'function' ? Object.is : Ge;
function Ie(e, o) {
  if (He(e, o)) return !0;
  if (typeof e != 'object' || e === null || typeof o != 'object' || o === null)
    return !1;
  var i = Object.keys(e),
    s = Object.keys(o);
  if (i.length !== s.length) return !1;
  for (s = 0; s < i.length; s++) {
    var a = i[s];
    if (!ja.call(o, a) || !He(e[a], o[a])) return !1;
  }
  return !0;
}
function Je(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ke(e, o) {
  var i = Je(e);
  e = 0;
  for (var s; i; ) {
    if (i.nodeType === 3) {
      if (((s = e + i.textContent.length), e <= o && s >= o))
        return { node: i, offset: o - e };
      e = s;
    }
    e: {
      for (; i; ) {
        if (i.nextSibling) {
          i = i.nextSibling;
          break e;
        }
        i = i.parentNode;
      }
      i = void 0;
    }
    i = Je(i);
  }
}
function Le(e, o) {
  return e && o
    ? e === o
      ? !0
      : e && e.nodeType === 3
      ? !1
      : o && o.nodeType === 3
      ? Le(e, o.parentNode)
      : 'contains' in e
      ? e.contains(o)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(o) & 16)
      : !1
    : !1;
}
function Me() {
  for (var e = window, o = Xa(); o instanceof e.HTMLIFrameElement; ) {
    try {
      var i = typeof o.contentWindow.location.href == 'string';
    } catch {
      i = !1;
    }
    if (i) e = o.contentWindow;
    else break;
    o = Xa(e.document);
  }
  return o;
}
function Ne(e) {
  var o = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    o &&
    ((o === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      o === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Oe(e) {
  var o = Me(),
    i = e.focusedElem,
    s = e.selectionRange;
  if (
    o !== i &&
    i &&
    i.ownerDocument &&
    Le(i.ownerDocument.documentElement, i)
  ) {
    if (s !== null && Ne(i)) {
      if (
        ((o = s.start),
        (e = s.end),
        e === void 0 && (e = o),
        'selectionStart' in i)
      )
        (i.selectionStart = o), (i.selectionEnd = Math.min(e, i.value.length));
      else if (
        ((e = ((o = i.ownerDocument || document) && o.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var a = i.textContent.length,
          c = Math.min(s.start, a);
        (s = s.end === void 0 ? c : Math.min(s.end, a)),
          !e.extend && c > s && ((a = s), (s = c), (c = a)),
          (a = Ke(i, c));
        var d = Ke(i, s);
        a &&
          d &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== a.node ||
            e.anchorOffset !== a.offset ||
            e.focusNode !== d.node ||
            e.focusOffset !== d.offset) &&
          ((o = o.createRange()),
          o.setStart(a.node, a.offset),
          e.removeAllRanges(),
          c > s
            ? (e.addRange(o), e.extend(d.node, d.offset))
            : (o.setEnd(d.node, d.offset), e.addRange(o)));
      }
    }
    for (o = [], e = i; (e = e.parentNode); )
      e.nodeType === 1 &&
        o.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof i.focus == 'function' && i.focus(), i = 0; i < o.length; i++)
      (e = o[i]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Pe = ia && 'documentMode' in document && 11 >= document.documentMode,
  Qe = null,
  Re = null,
  Se = null,
  Te = !1;
function Ue(e, o, i) {
  var s = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
  Te ||
    Qe == null ||
    Qe !== Xa(s) ||
    ((s = Qe),
    'selectionStart' in s && Ne(s)
      ? (s = { start: s.selectionStart, end: s.selectionEnd })
      : ((s = (
          (s.ownerDocument && s.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (s = {
          anchorNode: s.anchorNode,
          anchorOffset: s.anchorOffset,
          focusNode: s.focusNode,
          focusOffset: s.focusOffset,
        })),
    (Se && Ie(Se, s)) ||
      ((Se = s),
      (s = oe(Re, 'onSelect')),
      0 < s.length &&
        ((o = new td('onSelect', 'select', null, o, i)),
        e.push({ event: o, listeners: s }),
        (o.target = Qe))));
}
function Ve(e, o) {
  var i = {};
  return (
    (i[e.toLowerCase()] = o.toLowerCase()),
    (i['Webkit' + e] = 'webkit' + o),
    (i['Moz' + e] = 'moz' + o),
    i
  );
}
var We = {
    animationend: Ve('Animation', 'AnimationEnd'),
    animationiteration: Ve('Animation', 'AnimationIteration'),
    animationstart: Ve('Animation', 'AnimationStart'),
    transitionend: Ve('Transition', 'TransitionEnd'),
  },
  Xe = {},
  Ye = {};
ia &&
  ((Ye = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete We.animationend.animation,
    delete We.animationiteration.animation,
    delete We.animationstart.animation),
  'TransitionEvent' in window || delete We.transitionend.transition);
function Ze(e) {
  if (Xe[e]) return Xe[e];
  if (!We[e]) return e;
  var o = We[e],
    i;
  for (i in o) if (o.hasOwnProperty(i) && i in Ye) return (Xe[e] = o[i]);
  return e;
}
var $e = Ze('animationend'),
  af = Ze('animationiteration'),
  bf = Ze('animationstart'),
  cf = Ze('transitionend'),
  df = new Map(),
  ef =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function ff(e, o) {
  df.set(e, o), fa(o, [e]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf],
    jf = hf.toLowerCase(),
    kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, 'on' + kf);
}
ff($e, 'onAnimationEnd');
ff(af, 'onAnimationIteration');
ff(bf, 'onAnimationStart');
ff('dblclick', 'onDoubleClick');
ff('focusin', 'onFocus');
ff('focusout', 'onBlur');
ff(cf, 'onTransitionEnd');
ha('onMouseEnter', ['mouseout', 'mouseover']);
ha('onMouseLeave', ['mouseout', 'mouseover']);
ha('onPointerEnter', ['pointerout', 'pointerover']);
ha('onPointerLeave', ['pointerout', 'pointerover']);
fa(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
fa(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
fa('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
fa(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
fa(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
fa(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var lf =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  mf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(lf));
function nf(e, o, i) {
  var s = e.type || 'unknown-event';
  (e.currentTarget = i), Ub(s, o, void 0, e), (e.currentTarget = null);
}
function se(e, o) {
  o = (o & 4) !== 0;
  for (var i = 0; i < e.length; i++) {
    var s = e[i],
      a = s.event;
    s = s.listeners;
    e: {
      var c = void 0;
      if (o)
        for (var d = s.length - 1; 0 <= d; d--) {
          var h = s[d],
            g = h.instance,
            j = h.currentTarget;
          if (((h = h.listener), g !== c && a.isPropagationStopped())) break e;
          nf(a, h, j), (c = g);
        }
      else
        for (d = 0; d < s.length; d++) {
          if (
            ((h = s[d]),
            (g = h.instance),
            (j = h.currentTarget),
            (h = h.listener),
            g !== c && a.isPropagationStopped())
          )
            break e;
          nf(a, h, j), (c = g);
        }
    }
  }
  if (Qb) throw ((e = Rb), (Qb = !1), (Rb = null), e);
}
function D(e, o) {
  var i = o[of];
  i === void 0 && (i = o[of] = new Set());
  var s = e + '__bubble';
  i.has(s) || (pf(o, e, 2, !1), i.add(s));
}
function qf(e, o, i) {
  var s = 0;
  o && (s |= 4), pf(i, e, s, o);
}
var rf = '_reactListening' + Math.random().toString(36).slice(2);
function sf(e) {
  if (!e[rf]) {
    (e[rf] = !0),
      da.forEach(function (i) {
        i !== 'selectionchange' && (mf.has(i) || qf(i, !1, e), qf(i, !0, e));
      });
    var o = e.nodeType === 9 ? e : e.ownerDocument;
    o === null || o[rf] || ((o[rf] = !0), qf('selectionchange', !1, o));
  }
}
function pf(e, o, i, s) {
  switch (jd(o)) {
    case 1:
      var a = ed;
      break;
    case 4:
      a = gd;
      break;
    default:
      a = fd;
  }
  (i = a.bind(null, o, i, e)),
    (a = void 0),
    !Lb ||
      (o !== 'touchstart' && o !== 'touchmove' && o !== 'wheel') ||
      (a = !0),
    s
      ? a !== void 0
        ? e.addEventListener(o, i, { capture: !0, passive: a })
        : e.addEventListener(o, i, !0)
      : a !== void 0
      ? e.addEventListener(o, i, { passive: a })
      : e.addEventListener(o, i, !1);
}
function hd(e, o, i, s, a) {
  var c = s;
  if (!(o & 1) && !(o & 2) && s !== null)
    e: for (;;) {
      if (s === null) return;
      var d = s.tag;
      if (d === 3 || d === 4) {
        var h = s.stateNode.containerInfo;
        if (h === a || (h.nodeType === 8 && h.parentNode === a)) break;
        if (d === 4)
          for (d = s.return; d !== null; ) {
            var g = d.tag;
            if (
              (g === 3 || g === 4) &&
              ((g = d.stateNode.containerInfo),
              g === a || (g.nodeType === 8 && g.parentNode === a))
            )
              return;
            d = d.return;
          }
        for (; h !== null; ) {
          if (((d = Wc(h)), d === null)) return;
          if (((g = d.tag), g === 5 || g === 6)) {
            s = c = d;
            continue e;
          }
          h = h.parentNode;
        }
      }
      s = s.return;
    }
  Jb(function () {
    var j = c,
      tt = xb(i),
      _e = [];
    e: {
      var et = df.get(e);
      if (et !== void 0) {
        var ot = td,
          st = e;
        switch (e) {
          case 'keypress':
            if (od(i) === 0) break e;
          case 'keydown':
          case 'keyup':
            ot = Rd;
            break;
          case 'focusin':
            (st = 'focus'), (ot = Fd);
            break;
          case 'focusout':
            (st = 'blur'), (ot = Fd);
            break;
          case 'beforeblur':
          case 'afterblur':
            ot = Fd;
            break;
          case 'click':
            if (i.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            ot = Bd;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            ot = Dd;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            ot = Vd;
            break;
          case $e:
          case af:
          case bf:
            ot = Hd;
            break;
          case cf:
            ot = Xd;
            break;
          case 'scroll':
            ot = vd;
            break;
          case 'wheel':
            ot = Zd;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            ot = Jd;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            ot = Td;
        }
        var ft = (o & 4) !== 0,
          Ot = !ft && e === 'scroll',
          b = ft ? (et !== null ? et + 'Capture' : null) : et;
        ft = [];
        for (var _ = j, $; _ !== null; ) {
          $ = _;
          var ut = $.stateNode;
          if (
            ($.tag === 5 &&
              ut !== null &&
              (($ = ut),
              b !== null &&
                ((ut = Kb(_, b)), ut != null && ft.push(tf(_, ut, $)))),
            Ot)
          )
            break;
          _ = _.return;
        }
        0 < ft.length &&
          ((et = new ot(et, st, null, i, tt)),
          _e.push({ event: et, listeners: ft }));
      }
    }
    if (!(o & 7)) {
      e: {
        if (
          ((et = e === 'mouseover' || e === 'pointerover'),
          (ot = e === 'mouseout' || e === 'pointerout'),
          et &&
            i !== wb &&
            (st = i.relatedTarget || i.fromElement) &&
            (Wc(st) || st[uf]))
        )
          break e;
        if (
          (ot || et) &&
          ((et =
            tt.window === tt
              ? tt
              : (et = tt.ownerDocument)
              ? et.defaultView || et.parentWindow
              : window),
          ot
            ? ((st = i.relatedTarget || i.toElement),
              (ot = j),
              (st = st ? Wc(st) : null),
              st !== null &&
                ((Ot = Vb(st)), st !== Ot || (st.tag !== 5 && st.tag !== 6)) &&
                (st = null))
            : ((ot = null), (st = j)),
          ot !== st)
        ) {
          if (
            ((ft = Bd),
            (ut = 'onMouseLeave'),
            (b = 'onMouseEnter'),
            (_ = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((ft = Td),
              (ut = 'onPointerLeave'),
              (b = 'onPointerEnter'),
              (_ = 'pointer')),
            (Ot = ot == null ? et : ue(ot)),
            ($ = st == null ? et : ue(st)),
            (et = new ft(ut, _ + 'leave', ot, i, tt)),
            (et.target = Ot),
            (et.relatedTarget = $),
            (ut = null),
            Wc(tt) === j &&
              ((ft = new ft(b, _ + 'enter', st, i, tt)),
              (ft.target = $),
              (ft.relatedTarget = Ot),
              (ut = ft)),
            (Ot = ut),
            ot && st)
          )
            t: {
              for (ft = ot, b = st, _ = 0, $ = ft; $; $ = vf($)) _++;
              for ($ = 0, ut = b; ut; ut = vf(ut)) $++;
              for (; 0 < _ - $; ) (ft = vf(ft)), _--;
              for (; 0 < $ - _; ) (b = vf(b)), $--;
              for (; _--; ) {
                if (ft === b || (b !== null && ft === b.alternate)) break t;
                (ft = vf(ft)), (b = vf(b));
              }
              ft = null;
            }
          else ft = null;
          ot !== null && wf(_e, et, ot, ft, !1),
            st !== null && Ot !== null && wf(_e, Ot, st, ft, !0);
        }
      }
      e: {
        if (
          ((et = j ? ue(j) : window),
          (ot = et.nodeName && et.nodeName.toLowerCase()),
          ot === 'select' || (ot === 'input' && et.type === 'file'))
        )
          var at = ve;
        else if (me(et))
          if (we) at = Fe;
          else {
            at = De;
            var it = Ce;
          }
        else
          (ot = et.nodeName) &&
            ot.toLowerCase() === 'input' &&
            (et.type === 'checkbox' || et.type === 'radio') &&
            (at = Ee);
        if (at && (at = at(e, j))) {
          ne(_e, at, i, tt);
          break e;
        }
        it && it(e, et, j),
          e === 'focusout' &&
            (it = et._wrapperState) &&
            it.controlled &&
            et.type === 'number' &&
            cb(et, 'number', et.value);
      }
      switch (((it = j ? ue(j) : window), e)) {
        case 'focusin':
          (me(it) || it.contentEditable === 'true') &&
            ((Qe = it), (Re = j), (Se = null));
          break;
        case 'focusout':
          Se = Re = Qe = null;
          break;
        case 'mousedown':
          Te = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Te = !1), Ue(_e, i, tt);
          break;
        case 'selectionchange':
          if (Pe) break;
        case 'keydown':
        case 'keyup':
          Ue(_e, i, tt);
      }
      var mt;
      if (ae)
        e: {
          switch (e) {
            case 'compositionstart':
              var lt = 'onCompositionStart';
              break e;
            case 'compositionend':
              lt = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              lt = 'onCompositionUpdate';
              break e;
          }
          lt = void 0;
        }
      else
        ie
          ? ge(e, i) && (lt = 'onCompositionEnd')
          : e === 'keydown' && i.keyCode === 229 && (lt = 'onCompositionStart');
      lt &&
        (de &&
          i.locale !== 'ko' &&
          (ie || lt !== 'onCompositionStart'
            ? lt === 'onCompositionEnd' && ie && (mt = nd())
            : ((kd = tt),
              (ld = 'value' in kd ? kd.value : kd.textContent),
              (ie = !0))),
        (it = oe(j, lt)),
        0 < it.length &&
          ((lt = new Ld(lt, e, null, i, tt)),
          _e.push({ event: lt, listeners: it }),
          mt ? (lt.data = mt) : ((mt = he(i)), mt !== null && (lt.data = mt)))),
        (mt = ce ? je(e, i) : ke(e, i)) &&
          ((j = oe(j, 'onBeforeInput')),
          0 < j.length &&
            ((tt = new Ld('onBeforeInput', 'beforeinput', null, i, tt)),
            _e.push({ event: tt, listeners: j }),
            (tt.data = mt)));
    }
    se(_e, o);
  });
}
function tf(e, o, i) {
  return { instance: e, listener: o, currentTarget: i };
}
function oe(e, o) {
  for (var i = o + 'Capture', s = []; e !== null; ) {
    var a = e,
      c = a.stateNode;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      (c = Kb(e, i)),
      c != null && s.unshift(tf(e, c, a)),
      (c = Kb(e, o)),
      c != null && s.push(tf(e, c, a))),
      (e = e.return);
  }
  return s;
}
function vf(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function wf(e, o, i, s, a) {
  for (var c = o._reactName, d = []; i !== null && i !== s; ) {
    var h = i,
      g = h.alternate,
      j = h.stateNode;
    if (g !== null && g === s) break;
    h.tag === 5 &&
      j !== null &&
      ((h = j),
      a
        ? ((g = Kb(i, c)), g != null && d.unshift(tf(i, g, h)))
        : a || ((g = Kb(i, c)), g != null && d.push(tf(i, g, h)))),
      (i = i.return);
  }
  d.length !== 0 && e.push({ event: o, listeners: d });
}
var xf = /\r\n?/g,
  yf = /\u0000|\uFFFD/g;
function zf(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      xf,
      `
`
    )
    .replace(yf, '');
}
function Af(e, o, i) {
  if (((o = zf(o)), zf(e) !== o && i)) throw Error(p(425));
}
function Bf() {}
var Cf = null,
  Df = null;
function Ef(e, o) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof o.children == 'string' ||
    typeof o.children == 'number' ||
    (typeof o.dangerouslySetInnerHTML == 'object' &&
      o.dangerouslySetInnerHTML !== null &&
      o.dangerouslySetInnerHTML.__html != null)
  );
}
var Ff = typeof setTimeout == 'function' ? setTimeout : void 0,
  Gf = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Hf = typeof Promise == 'function' ? Promise : void 0,
  Jf =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Hf < 'u'
      ? function (e) {
          return Hf.resolve(null).then(e).catch(If);
        }
      : Ff;
function If(e) {
  setTimeout(function () {
    throw e;
  });
}
function Kf(e, o) {
  var i = o,
    s = 0;
  do {
    var a = i.nextSibling;
    if ((e.removeChild(i), a && a.nodeType === 8))
      if (((i = a.data), i === '/$')) {
        if (s === 0) {
          e.removeChild(a), bd(o);
          return;
        }
        s--;
      } else (i !== '$' && i !== '$?' && i !== '$!') || s++;
    i = a;
  } while (i);
  bd(o);
}
function Lf(e) {
  for (; e != null; e = e.nextSibling) {
    var o = e.nodeType;
    if (o === 1 || o === 3) break;
    if (o === 8) {
      if (((o = e.data), o === '$' || o === '$!' || o === '$?')) break;
      if (o === '/$') return null;
    }
  }
  return e;
}
function Mf(e) {
  e = e.previousSibling;
  for (var o = 0; e; ) {
    if (e.nodeType === 8) {
      var i = e.data;
      if (i === '$' || i === '$!' || i === '$?') {
        if (o === 0) return e;
        o--;
      } else i === '/$' && o++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2),
  Of = '__reactFiber$' + Nf,
  Pf = '__reactProps$' + Nf,
  uf = '__reactContainer$' + Nf,
  of = '__reactEvents$' + Nf,
  Qf = '__reactListeners$' + Nf,
  Rf = '__reactHandles$' + Nf;
function Wc(e) {
  var o = e[Of];
  if (o) return o;
  for (var i = e.parentNode; i; ) {
    if ((o = i[uf] || i[Of])) {
      if (
        ((i = o.alternate),
        o.child !== null || (i !== null && i.child !== null))
      )
        for (e = Mf(e); e !== null; ) {
          if ((i = e[Of])) return i;
          e = Mf(e);
        }
      return o;
    }
    (e = i), (i = e.parentNode);
  }
  return null;
}
function Cb(e) {
  return (
    (e = e[Of] || e[uf]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ue(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(p(33));
}
function Db(e) {
  return e[Pf] || null;
}
var Sf = [],
  Tf = -1;
function Uf(e) {
  return { current: e };
}
function E(e) {
  0 > Tf || ((e.current = Sf[Tf]), (Sf[Tf] = null), Tf--);
}
function G(e, o) {
  Tf++, (Sf[Tf] = e.current), (e.current = o);
}
var Vf = {},
  H = Uf(Vf),
  Wf = Uf(!1),
  Xf = Vf;
function Yf(e, o) {
  var i = e.type.contextTypes;
  if (!i) return Vf;
  var s = e.stateNode;
  if (s && s.__reactInternalMemoizedUnmaskedChildContext === o)
    return s.__reactInternalMemoizedMaskedChildContext;
  var a = {},
    c;
  for (c in i) a[c] = o[c];
  return (
    s &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    a
  );
}
function Zf(e) {
  return (e = e.childContextTypes), e != null;
}
function $f() {
  E(Wf), E(H);
}
function ag(e, o, i) {
  if (H.current !== Vf) throw Error(p(168));
  G(H, o), G(Wf, i);
}
function bg(e, o, i) {
  var s = e.stateNode;
  if (((o = o.childContextTypes), typeof s.getChildContext != 'function'))
    return i;
  s = s.getChildContext();
  for (var a in s) if (!(a in o)) throw Error(p(108, Ra(e) || 'Unknown', a));
  return A({}, i, s);
}
function cg(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Vf),
    (Xf = H.current),
    G(H, e),
    G(Wf, Wf.current),
    !0
  );
}
function dg(e, o, i) {
  var s = e.stateNode;
  if (!s) throw Error(p(169));
  i
    ? ((e = bg(e, o, Xf)),
      (s.__reactInternalMemoizedMergedChildContext = e),
      E(Wf),
      E(H),
      G(H, e))
    : E(Wf),
    G(Wf, i);
}
var eg = null,
  fg = !1,
  gg = !1;
function hg(e) {
  eg === null ? (eg = [e]) : eg.push(e);
}
function ig(e) {
  (fg = !0), hg(e);
}
function jg() {
  if (!gg && eg !== null) {
    gg = !0;
    var e = 0,
      o = C;
    try {
      var i = eg;
      for (C = 1; e < i.length; e++) {
        var s = i[e];
        do s = s(!0);
        while (s !== null);
      }
      (eg = null), (fg = !1);
    } catch (a) {
      throw (eg !== null && (eg = eg.slice(e + 1)), ac(fc, jg), a);
    } finally {
      (C = o), (gg = !1);
    }
  }
  return null;
}
var kg = [],
  lg = 0,
  mg = null,
  ng = 0,
  og = [],
  pg = 0,
  qg = null,
  rg = 1,
  sg = '';
function tg(e, o) {
  (kg[lg++] = ng), (kg[lg++] = mg), (mg = e), (ng = o);
}
function ug(e, o, i) {
  (og[pg++] = rg), (og[pg++] = sg), (og[pg++] = qg), (qg = e);
  var s = rg;
  e = sg;
  var a = 32 - oc(s) - 1;
  (s &= ~(1 << a)), (i += 1);
  var c = 32 - oc(o) + a;
  if (30 < c) {
    var d = a - (a % 5);
    (c = (s & ((1 << d) - 1)).toString(32)),
      (s >>= d),
      (a -= d),
      (rg = (1 << (32 - oc(o) + a)) | (i << a) | s),
      (sg = c + e);
  } else (rg = (1 << c) | (i << a) | s), (sg = e);
}
function vg(e) {
  e.return !== null && (tg(e, 1), ug(e, 1, 0));
}
function wg(e) {
  for (; e === mg; )
    (mg = kg[--lg]), (kg[lg] = null), (ng = kg[--lg]), (kg[lg] = null);
  for (; e === qg; )
    (qg = og[--pg]),
      (og[pg] = null),
      (sg = og[--pg]),
      (og[pg] = null),
      (rg = og[--pg]),
      (og[pg] = null);
}
var xg = null,
  yg = null,
  I = !1,
  zg = null;
function Ag(e, o) {
  var i = Bg(5, null, null, 0);
  (i.elementType = 'DELETED'),
    (i.stateNode = o),
    (i.return = e),
    (o = e.deletions),
    o === null ? ((e.deletions = [i]), (e.flags |= 16)) : o.push(i);
}
function Cg(e, o) {
  switch (e.tag) {
    case 5:
      var i = e.type;
      return (
        (o =
          o.nodeType !== 1 || i.toLowerCase() !== o.nodeName.toLowerCase()
            ? null
            : o),
        o !== null
          ? ((e.stateNode = o), (xg = e), (yg = Lf(o.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (o = e.pendingProps === '' || o.nodeType !== 3 ? null : o),
        o !== null ? ((e.stateNode = o), (xg = e), (yg = null), !0) : !1
      );
    case 13:
      return (
        (o = o.nodeType !== 8 ? null : o),
        o !== null
          ? ((i = qg !== null ? { id: rg, overflow: sg } : null),
            (e.memoizedState = {
              dehydrated: o,
              treeContext: i,
              retryLane: 1073741824,
            }),
            (i = Bg(18, null, null, 0)),
            (i.stateNode = o),
            (i.return = e),
            (e.child = i),
            (xg = e),
            (yg = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Dg(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Eg(e) {
  if (I) {
    var o = yg;
    if (o) {
      var i = o;
      if (!Cg(e, o)) {
        if (Dg(e)) throw Error(p(418));
        o = Lf(i.nextSibling);
        var s = xg;
        o && Cg(e, o)
          ? Ag(s, i)
          : ((e.flags = (e.flags & -4097) | 2), (I = !1), (xg = e));
      }
    } else {
      if (Dg(e)) throw Error(p(418));
      (e.flags = (e.flags & -4097) | 2), (I = !1), (xg = e);
    }
  }
}
function Fg(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  xg = e;
}
function Gg(e) {
  if (e !== xg) return !1;
  if (!I) return Fg(e), (I = !0), !1;
  var o;
  if (
    ((o = e.tag !== 3) &&
      !(o = e.tag !== 5) &&
      ((o = e.type),
      (o = o !== 'head' && o !== 'body' && !Ef(e.type, e.memoizedProps))),
    o && (o = yg))
  ) {
    if (Dg(e)) throw (Hg(), Error(p(418)));
    for (; o; ) Ag(e, o), (o = Lf(o.nextSibling));
  }
  if ((Fg(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(p(317));
    e: {
      for (e = e.nextSibling, o = 0; e; ) {
        if (e.nodeType === 8) {
          var i = e.data;
          if (i === '/$') {
            if (o === 0) {
              yg = Lf(e.nextSibling);
              break e;
            }
            o--;
          } else (i !== '$' && i !== '$!' && i !== '$?') || o++;
        }
        e = e.nextSibling;
      }
      yg = null;
    }
  } else yg = xg ? Lf(e.stateNode.nextSibling) : null;
  return !0;
}
function Hg() {
  for (var e = yg; e; ) e = Lf(e.nextSibling);
}
function Ig() {
  (yg = xg = null), (I = !1);
}
function Jg(e) {
  zg === null ? (zg = [e]) : zg.push(e);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(e, o, i) {
  if (
    ((e = i.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (i._owner) {
      if (((i = i._owner), i)) {
        if (i.tag !== 1) throw Error(p(309));
        var s = i.stateNode;
      }
      if (!s) throw Error(p(147, e));
      var a = s,
        c = '' + e;
      return o !== null &&
        o.ref !== null &&
        typeof o.ref == 'function' &&
        o.ref._stringRef === c
        ? o.ref
        : ((o = function (d) {
            var h = a.refs;
            d === null ? delete h[c] : (h[c] = d);
          }),
          (o._stringRef = c),
          o);
    }
    if (typeof e != 'string') throw Error(p(284));
    if (!i._owner) throw Error(p(290, e));
  }
  return e;
}
function Mg(e, o) {
  throw (
    ((e = Object.prototype.toString.call(o)),
    Error(
      p(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(o).join(', ') + '}'
          : e
      )
    ))
  );
}
function Ng(e) {
  var o = e._init;
  return o(e._payload);
}
function Og(e) {
  function o(b, _) {
    if (e) {
      var $ = b.deletions;
      $ === null ? ((b.deletions = [_]), (b.flags |= 16)) : $.push(_);
    }
  }
  function i(b, _) {
    if (!e) return null;
    for (; _ !== null; ) o(b, _), (_ = _.sibling);
    return null;
  }
  function s(b, _) {
    for (b = new Map(); _ !== null; )
      _.key !== null ? b.set(_.key, _) : b.set(_.index, _), (_ = _.sibling);
    return b;
  }
  function a(b, _) {
    return (b = Pg(b, _)), (b.index = 0), (b.sibling = null), b;
  }
  function c(b, _, $) {
    return (
      (b.index = $),
      e
        ? (($ = b.alternate),
          $ !== null
            ? (($ = $.index), $ < _ ? ((b.flags |= 2), _) : $)
            : ((b.flags |= 2), _))
        : ((b.flags |= 1048576), _)
    );
  }
  function d(b) {
    return e && b.alternate === null && (b.flags |= 2), b;
  }
  function h(b, _, $, ut) {
    return _ === null || _.tag !== 6
      ? ((_ = Qg($, b.mode, ut)), (_.return = b), _)
      : ((_ = a(_, $)), (_.return = b), _);
  }
  function g(b, _, $, ut) {
    var at = $.type;
    return at === ya
      ? tt(b, _, $.props.children, ut, $.key)
      : _ !== null &&
        (_.elementType === at ||
          (typeof at == 'object' &&
            at !== null &&
            at.$$typeof === Ha &&
            Ng(at) === _.type))
      ? ((ut = a(_, $.props)), (ut.ref = Lg(b, _, $)), (ut.return = b), ut)
      : ((ut = Rg($.type, $.key, $.props, null, b.mode, ut)),
        (ut.ref = Lg(b, _, $)),
        (ut.return = b),
        ut);
  }
  function j(b, _, $, ut) {
    return _ === null ||
      _.tag !== 4 ||
      _.stateNode.containerInfo !== $.containerInfo ||
      _.stateNode.implementation !== $.implementation
      ? ((_ = Sg($, b.mode, ut)), (_.return = b), _)
      : ((_ = a(_, $.children || [])), (_.return = b), _);
  }
  function tt(b, _, $, ut, at) {
    return _ === null || _.tag !== 7
      ? ((_ = Tg($, b.mode, ut, at)), (_.return = b), _)
      : ((_ = a(_, $)), (_.return = b), _);
  }
  function _e(b, _, $) {
    if ((typeof _ == 'string' && _ !== '') || typeof _ == 'number')
      return (_ = Qg('' + _, b.mode, $)), (_.return = b), _;
    if (typeof _ == 'object' && _ !== null) {
      switch (_.$$typeof) {
        case va:
          return (
            ($ = Rg(_.type, _.key, _.props, null, b.mode, $)),
            ($.ref = Lg(b, null, _)),
            ($.return = b),
            $
          );
        case wa:
          return (_ = Sg(_, b.mode, $)), (_.return = b), _;
        case Ha:
          var ut = _._init;
          return _e(b, ut(_._payload), $);
      }
      if (eb(_) || Ka(_))
        return (_ = Tg(_, b.mode, $, null)), (_.return = b), _;
      Mg(b, _);
    }
    return null;
  }
  function et(b, _, $, ut) {
    var at = _ !== null ? _.key : null;
    if ((typeof $ == 'string' && $ !== '') || typeof $ == 'number')
      return at !== null ? null : h(b, _, '' + $, ut);
    if (typeof $ == 'object' && $ !== null) {
      switch ($.$$typeof) {
        case va:
          return $.key === at ? g(b, _, $, ut) : null;
        case wa:
          return $.key === at ? j(b, _, $, ut) : null;
        case Ha:
          return (at = $._init), et(b, _, at($._payload), ut);
      }
      if (eb($) || Ka($)) return at !== null ? null : tt(b, _, $, ut, null);
      Mg(b, $);
    }
    return null;
  }
  function ot(b, _, $, ut, at) {
    if ((typeof ut == 'string' && ut !== '') || typeof ut == 'number')
      return (b = b.get($) || null), h(_, b, '' + ut, at);
    if (typeof ut == 'object' && ut !== null) {
      switch (ut.$$typeof) {
        case va:
          return (
            (b = b.get(ut.key === null ? $ : ut.key) || null), g(_, b, ut, at)
          );
        case wa:
          return (
            (b = b.get(ut.key === null ? $ : ut.key) || null), j(_, b, ut, at)
          );
        case Ha:
          var it = ut._init;
          return ot(b, _, $, it(ut._payload), at);
      }
      if (eb(ut) || Ka(ut))
        return (b = b.get($) || null), tt(_, b, ut, at, null);
      Mg(_, ut);
    }
    return null;
  }
  function st(b, _, $, ut) {
    for (
      var at = null, it = null, mt = _, lt = (_ = 0), bt = null;
      mt !== null && lt < $.length;
      lt++
    ) {
      mt.index > lt ? ((bt = mt), (mt = null)) : (bt = mt.sibling);
      var _t = et(b, mt, $[lt], ut);
      if (_t === null) {
        mt === null && (mt = bt);
        break;
      }
      e && mt && _t.alternate === null && o(b, mt),
        (_ = c(_t, _, lt)),
        it === null ? (at = _t) : (it.sibling = _t),
        (it = _t),
        (mt = bt);
    }
    if (lt === $.length) return i(b, mt), I && tg(b, lt), at;
    if (mt === null) {
      for (; lt < $.length; lt++)
        (mt = _e(b, $[lt], ut)),
          mt !== null &&
            ((_ = c(mt, _, lt)),
            it === null ? (at = mt) : (it.sibling = mt),
            (it = mt));
      return I && tg(b, lt), at;
    }
    for (mt = s(b, mt); lt < $.length; lt++)
      (bt = ot(mt, b, lt, $[lt], ut)),
        bt !== null &&
          (e &&
            bt.alternate !== null &&
            mt.delete(bt.key === null ? lt : bt.key),
          (_ = c(bt, _, lt)),
          it === null ? (at = bt) : (it.sibling = bt),
          (it = bt));
    return (
      e &&
        mt.forEach(function (yt) {
          return o(b, yt);
        }),
      I && tg(b, lt),
      at
    );
  }
  function ft(b, _, $, ut) {
    var at = Ka($);
    if (typeof at != 'function') throw Error(p(150));
    if ((($ = at.call($)), $ == null)) throw Error(p(151));
    for (
      var it = (at = null), mt = _, lt = (_ = 0), bt = null, _t = $.next();
      mt !== null && !_t.done;
      lt++, _t = $.next()
    ) {
      mt.index > lt ? ((bt = mt), (mt = null)) : (bt = mt.sibling);
      var yt = et(b, mt, _t.value, ut);
      if (yt === null) {
        mt === null && (mt = bt);
        break;
      }
      e && mt && yt.alternate === null && o(b, mt),
        (_ = c(yt, _, lt)),
        it === null ? (at = yt) : (it.sibling = yt),
        (it = yt),
        (mt = bt);
    }
    if (_t.done) return i(b, mt), I && tg(b, lt), at;
    if (mt === null) {
      for (; !_t.done; lt++, _t = $.next())
        (_t = _e(b, _t.value, ut)),
          _t !== null &&
            ((_ = c(_t, _, lt)),
            it === null ? (at = _t) : (it.sibling = _t),
            (it = _t));
      return I && tg(b, lt), at;
    }
    for (mt = s(b, mt); !_t.done; lt++, _t = $.next())
      (_t = ot(mt, b, lt, _t.value, ut)),
        _t !== null &&
          (e &&
            _t.alternate !== null &&
            mt.delete(_t.key === null ? lt : _t.key),
          (_ = c(_t, _, lt)),
          it === null ? (at = _t) : (it.sibling = _t),
          (it = _t));
    return (
      e &&
        mt.forEach(function (dt) {
          return o(b, dt);
        }),
      I && tg(b, lt),
      at
    );
  }
  function Ot(b, _, $, ut) {
    if (
      (typeof $ == 'object' &&
        $ !== null &&
        $.type === ya &&
        $.key === null &&
        ($ = $.props.children),
      typeof $ == 'object' && $ !== null)
    ) {
      switch ($.$$typeof) {
        case va:
          e: {
            for (var at = $.key, it = _; it !== null; ) {
              if (it.key === at) {
                if (((at = $.type), at === ya)) {
                  if (it.tag === 7) {
                    i(b, it.sibling),
                      (_ = a(it, $.props.children)),
                      (_.return = b),
                      (b = _);
                    break e;
                  }
                } else if (
                  it.elementType === at ||
                  (typeof at == 'object' &&
                    at !== null &&
                    at.$$typeof === Ha &&
                    Ng(at) === it.type)
                ) {
                  i(b, it.sibling),
                    (_ = a(it, $.props)),
                    (_.ref = Lg(b, it, $)),
                    (_.return = b),
                    (b = _);
                  break e;
                }
                i(b, it);
                break;
              } else o(b, it);
              it = it.sibling;
            }
            $.type === ya
              ? ((_ = Tg($.props.children, b.mode, ut, $.key)),
                (_.return = b),
                (b = _))
              : ((ut = Rg($.type, $.key, $.props, null, b.mode, ut)),
                (ut.ref = Lg(b, _, $)),
                (ut.return = b),
                (b = ut));
          }
          return d(b);
        case wa:
          e: {
            for (it = $.key; _ !== null; ) {
              if (_.key === it)
                if (
                  _.tag === 4 &&
                  _.stateNode.containerInfo === $.containerInfo &&
                  _.stateNode.implementation === $.implementation
                ) {
                  i(b, _.sibling),
                    (_ = a(_, $.children || [])),
                    (_.return = b),
                    (b = _);
                  break e;
                } else {
                  i(b, _);
                  break;
                }
              else o(b, _);
              _ = _.sibling;
            }
            (_ = Sg($, b.mode, ut)), (_.return = b), (b = _);
          }
          return d(b);
        case Ha:
          return (it = $._init), Ot(b, _, it($._payload), ut);
      }
      if (eb($)) return st(b, _, $, ut);
      if (Ka($)) return ft(b, _, $, ut);
      Mg(b, $);
    }
    return (typeof $ == 'string' && $ !== '') || typeof $ == 'number'
      ? (($ = '' + $),
        _ !== null && _.tag === 6
          ? (i(b, _.sibling), (_ = a(_, $)), (_.return = b), (b = _))
          : (i(b, _), (_ = Qg($, b.mode, ut)), (_.return = b), (b = _)),
        d(b))
      : i(b, _);
  }
  return Ot;
}
var Ug = Og(!0),
  Vg = Og(!1),
  Wg = Uf(null),
  Xg = null,
  Yg = null,
  Zg = null;
function $g() {
  Zg = Yg = Xg = null;
}
function ah(e) {
  var o = Wg.current;
  E(Wg), (e._currentValue = o);
}
function bh(e, o, i) {
  for (; e !== null; ) {
    var s = e.alternate;
    if (
      ((e.childLanes & o) !== o
        ? ((e.childLanes |= o), s !== null && (s.childLanes |= o))
        : s !== null && (s.childLanes & o) !== o && (s.childLanes |= o),
      e === i)
    )
      break;
    e = e.return;
  }
}
function ch(e, o) {
  (Xg = e),
    (Zg = Yg = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & o && (dh = !0), (e.firstContext = null));
}
function eh(e) {
  var o = e._currentValue;
  if (Zg !== e)
    if (((e = { context: e, memoizedValue: o, next: null }), Yg === null)) {
      if (Xg === null) throw Error(p(308));
      (Yg = e), (Xg.dependencies = { lanes: 0, firstContext: e });
    } else Yg = Yg.next = e;
  return o;
}
var fh = null;
function gh(e) {
  fh === null ? (fh = [e]) : fh.push(e);
}
function hh(e, o, i, s) {
  var a = o.interleaved;
  return (
    a === null ? ((i.next = i), gh(o)) : ((i.next = a.next), (a.next = i)),
    (o.interleaved = i),
    ih(e, s)
  );
}
function ih(e, o) {
  e.lanes |= o;
  var i = e.alternate;
  for (i !== null && (i.lanes |= o), i = e, e = e.return; e !== null; )
    (e.childLanes |= o),
      (i = e.alternate),
      i !== null && (i.childLanes |= o),
      (i = e),
      (e = e.return);
  return i.tag === 3 ? i.stateNode : null;
}
var jh = !1;
function kh(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function lh(e, o) {
  (e = e.updateQueue),
    o.updateQueue === e &&
      (o.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function mh(e, o) {
  return {
    eventTime: e,
    lane: o,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function nh(e, o, i) {
  var s = e.updateQueue;
  if (s === null) return null;
  if (((s = s.shared), K & 2)) {
    var a = s.pending;
    return (
      a === null ? (o.next = o) : ((o.next = a.next), (a.next = o)),
      (s.pending = o),
      ih(e, i)
    );
  }
  return (
    (a = s.interleaved),
    a === null ? ((o.next = o), gh(s)) : ((o.next = a.next), (a.next = o)),
    (s.interleaved = o),
    ih(e, i)
  );
}
function oh(e, o, i) {
  if (
    ((o = o.updateQueue), o !== null && ((o = o.shared), (i & 4194240) !== 0))
  ) {
    var s = o.lanes;
    (s &= e.pendingLanes), (i |= s), (o.lanes = i), Cc(e, i);
  }
}
function ph(e, o) {
  var i = e.updateQueue,
    s = e.alternate;
  if (s !== null && ((s = s.updateQueue), i === s)) {
    var a = null,
      c = null;
    if (((i = i.firstBaseUpdate), i !== null)) {
      do {
        var d = {
          eventTime: i.eventTime,
          lane: i.lane,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null,
        };
        c === null ? (a = c = d) : (c = c.next = d), (i = i.next);
      } while (i !== null);
      c === null ? (a = c = o) : (c = c.next = o);
    } else a = c = o;
    (i = {
      baseState: s.baseState,
      firstBaseUpdate: a,
      lastBaseUpdate: c,
      shared: s.shared,
      effects: s.effects,
    }),
      (e.updateQueue = i);
    return;
  }
  (e = i.lastBaseUpdate),
    e === null ? (i.firstBaseUpdate = o) : (e.next = o),
    (i.lastBaseUpdate = o);
}
function qh(e, o, i, s) {
  var a = e.updateQueue;
  jh = !1;
  var c = a.firstBaseUpdate,
    d = a.lastBaseUpdate,
    h = a.shared.pending;
  if (h !== null) {
    a.shared.pending = null;
    var g = h,
      j = g.next;
    (g.next = null), d === null ? (c = j) : (d.next = j), (d = g);
    var tt = e.alternate;
    tt !== null &&
      ((tt = tt.updateQueue),
      (h = tt.lastBaseUpdate),
      h !== d &&
        (h === null ? (tt.firstBaseUpdate = j) : (h.next = j),
        (tt.lastBaseUpdate = g)));
  }
  if (c !== null) {
    var _e = a.baseState;
    (d = 0), (tt = j = g = null), (h = c);
    do {
      var et = h.lane,
        ot = h.eventTime;
      if ((s & et) === et) {
        tt !== null &&
          (tt = tt.next =
            {
              eventTime: ot,
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null,
            });
        e: {
          var st = e,
            ft = h;
          switch (((et = o), (ot = i), ft.tag)) {
            case 1:
              if (((st = ft.payload), typeof st == 'function')) {
                _e = st.call(ot, _e, et);
                break e;
              }
              _e = st;
              break e;
            case 3:
              st.flags = (st.flags & -65537) | 128;
            case 0:
              if (
                ((st = ft.payload),
                (et = typeof st == 'function' ? st.call(ot, _e, et) : st),
                et == null)
              )
                break e;
              _e = A({}, _e, et);
              break e;
            case 2:
              jh = !0;
          }
        }
        h.callback !== null &&
          h.lane !== 0 &&
          ((e.flags |= 64),
          (et = a.effects),
          et === null ? (a.effects = [h]) : et.push(h));
      } else
        (ot = {
          eventTime: ot,
          lane: et,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null,
        }),
          tt === null ? ((j = tt = ot), (g = _e)) : (tt = tt.next = ot),
          (d |= et);
      if (((h = h.next), h === null)) {
        if (((h = a.shared.pending), h === null)) break;
        (et = h),
          (h = et.next),
          (et.next = null),
          (a.lastBaseUpdate = et),
          (a.shared.pending = null);
      }
    } while (!0);
    if (
      (tt === null && (g = _e),
      (a.baseState = g),
      (a.firstBaseUpdate = j),
      (a.lastBaseUpdate = tt),
      (o = a.shared.interleaved),
      o !== null)
    ) {
      a = o;
      do (d |= a.lane), (a = a.next);
      while (a !== o);
    } else c === null && (a.shared.lanes = 0);
    (rh |= d), (e.lanes = d), (e.memoizedState = _e);
  }
}
function sh(e, o, i) {
  if (((e = o.effects), (o.effects = null), e !== null))
    for (o = 0; o < e.length; o++) {
      var s = e[o],
        a = s.callback;
      if (a !== null) {
        if (((s.callback = null), (s = i), typeof a != 'function'))
          throw Error(p(191, a));
        a.call(s);
      }
    }
}
var th = {},
  uh = Uf(th),
  vh = Uf(th),
  wh = Uf(th);
function xh(e) {
  if (e === th) throw Error(p(174));
  return e;
}
function yh(e, o) {
  switch ((G(wh, o), G(vh, e), G(uh, th), (e = o.nodeType), e)) {
    case 9:
    case 11:
      o = (o = o.documentElement) ? o.namespaceURI : lb(null, '');
      break;
    default:
      (e = e === 8 ? o.parentNode : o),
        (o = e.namespaceURI || null),
        (e = e.tagName),
        (o = lb(o, e));
  }
  E(uh), G(uh, o);
}
function zh() {
  E(uh), E(vh), E(wh);
}
function Ah(e) {
  xh(wh.current);
  var o = xh(uh.current),
    i = lb(o, e.type);
  o !== i && (G(vh, e), G(uh, i));
}
function Bh(e) {
  vh.current === e && (E(uh), E(vh));
}
var L = Uf(0);
function Ch(e) {
  for (var o = e; o !== null; ) {
    if (o.tag === 13) {
      var i = o.memoizedState;
      if (
        i !== null &&
        ((i = i.dehydrated), i === null || i.data === '$?' || i.data === '$!')
      )
        return o;
    } else if (o.tag === 19 && o.memoizedProps.revealOrder !== void 0) {
      if (o.flags & 128) return o;
    } else if (o.child !== null) {
      (o.child.return = o), (o = o.child);
      continue;
    }
    if (o === e) break;
    for (; o.sibling === null; ) {
      if (o.return === null || o.return === e) return null;
      o = o.return;
    }
    (o.sibling.return = o.return), (o = o.sibling);
  }
  return null;
}
var Dh = [];
function Eh() {
  for (var e = 0; e < Dh.length; e++)
    Dh[e]._workInProgressVersionPrimary = null;
  Dh.length = 0;
}
var Fh = ua.ReactCurrentDispatcher,
  Gh = ua.ReactCurrentBatchConfig,
  Hh = 0,
  M = null,
  N = null,
  O = null,
  Ih = !1,
  Jh = !1,
  Kh = 0,
  Lh = 0;
function P() {
  throw Error(p(321));
}
function Mh(e, o) {
  if (o === null) return !1;
  for (var i = 0; i < o.length && i < e.length; i++)
    if (!He(e[i], o[i])) return !1;
  return !0;
}
function Nh(e, o, i, s, a, c) {
  if (
    ((Hh = c),
    (M = o),
    (o.memoizedState = null),
    (o.updateQueue = null),
    (o.lanes = 0),
    (Fh.current = e === null || e.memoizedState === null ? Oh : Ph),
    (e = i(s, a)),
    Jh)
  ) {
    c = 0;
    do {
      if (((Jh = !1), (Kh = 0), 25 <= c)) throw Error(p(301));
      (c += 1),
        (O = N = null),
        (o.updateQueue = null),
        (Fh.current = Qh),
        (e = i(s, a));
    } while (Jh);
  }
  if (
    ((Fh.current = Rh),
    (o = N !== null && N.next !== null),
    (Hh = 0),
    (O = N = M = null),
    (Ih = !1),
    o)
  )
    throw Error(p(300));
  return e;
}
function Sh() {
  var e = Kh !== 0;
  return (Kh = 0), e;
}
function Th() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return O === null ? (M.memoizedState = O = e) : (O = O.next = e), O;
}
function Uh() {
  if (N === null) {
    var e = M.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = N.next;
  var o = O === null ? M.memoizedState : O.next;
  if (o !== null) (O = o), (N = e);
  else {
    if (e === null) throw Error(p(310));
    (N = e),
      (e = {
        memoizedState: N.memoizedState,
        baseState: N.baseState,
        baseQueue: N.baseQueue,
        queue: N.queue,
        next: null,
      }),
      O === null ? (M.memoizedState = O = e) : (O = O.next = e);
  }
  return O;
}
function Vh(e, o) {
  return typeof o == 'function' ? o(e) : o;
}
function Wh(e) {
  var o = Uh(),
    i = o.queue;
  if (i === null) throw Error(p(311));
  i.lastRenderedReducer = e;
  var s = N,
    a = s.baseQueue,
    c = i.pending;
  if (c !== null) {
    if (a !== null) {
      var d = a.next;
      (a.next = c.next), (c.next = d);
    }
    (s.baseQueue = a = c), (i.pending = null);
  }
  if (a !== null) {
    (c = a.next), (s = s.baseState);
    var h = (d = null),
      g = null,
      j = c;
    do {
      var tt = j.lane;
      if ((Hh & tt) === tt)
        g !== null &&
          (g = g.next =
            {
              lane: 0,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null,
            }),
          (s = j.hasEagerState ? j.eagerState : e(s, j.action));
      else {
        var _e = {
          lane: tt,
          action: j.action,
          hasEagerState: j.hasEagerState,
          eagerState: j.eagerState,
          next: null,
        };
        g === null ? ((h = g = _e), (d = s)) : (g = g.next = _e),
          (M.lanes |= tt),
          (rh |= tt);
      }
      j = j.next;
    } while (j !== null && j !== c);
    g === null ? (d = s) : (g.next = h),
      He(s, o.memoizedState) || (dh = !0),
      (o.memoizedState = s),
      (o.baseState = d),
      (o.baseQueue = g),
      (i.lastRenderedState = s);
  }
  if (((e = i.interleaved), e !== null)) {
    a = e;
    do (c = a.lane), (M.lanes |= c), (rh |= c), (a = a.next);
    while (a !== e);
  } else a === null && (i.lanes = 0);
  return [o.memoizedState, i.dispatch];
}
function Xh(e) {
  var o = Uh(),
    i = o.queue;
  if (i === null) throw Error(p(311));
  i.lastRenderedReducer = e;
  var s = i.dispatch,
    a = i.pending,
    c = o.memoizedState;
  if (a !== null) {
    i.pending = null;
    var d = (a = a.next);
    do (c = e(c, d.action)), (d = d.next);
    while (d !== a);
    He(c, o.memoizedState) || (dh = !0),
      (o.memoizedState = c),
      o.baseQueue === null && (o.baseState = c),
      (i.lastRenderedState = c);
  }
  return [c, s];
}
function Yh() {}
function Zh(e, o) {
  var i = M,
    s = Uh(),
    a = o(),
    c = !He(s.memoizedState, a);
  if (
    (c && ((s.memoizedState = a), (dh = !0)),
    (s = s.queue),
    $h(ai.bind(null, i, s, e), [e]),
    s.getSnapshot !== o || c || (O !== null && O.memoizedState.tag & 1))
  ) {
    if (
      ((i.flags |= 2048),
      bi(9, ci.bind(null, i, s, a, o), void 0, null),
      Q === null)
    )
      throw Error(p(349));
    Hh & 30 || di(i, o, a);
  }
  return a;
}
function di(e, o, i) {
  (e.flags |= 16384),
    (e = { getSnapshot: o, value: i }),
    (o = M.updateQueue),
    o === null
      ? ((o = { lastEffect: null, stores: null }),
        (M.updateQueue = o),
        (o.stores = [e]))
      : ((i = o.stores), i === null ? (o.stores = [e]) : i.push(e));
}
function ci(e, o, i, s) {
  (o.value = i), (o.getSnapshot = s), ei(o) && fi(e);
}
function ai(e, o, i) {
  return i(function () {
    ei(o) && fi(e);
  });
}
function ei(e) {
  var o = e.getSnapshot;
  e = e.value;
  try {
    var i = o();
    return !He(e, i);
  } catch {
    return !0;
  }
}
function fi(e) {
  var o = ih(e, 1);
  o !== null && gi(o, e, 1, -1);
}
function hi(e) {
  var o = Th();
  return (
    typeof e == 'function' && (e = e()),
    (o.memoizedState = o.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Vh,
      lastRenderedState: e,
    }),
    (o.queue = e),
    (e = e.dispatch = ii.bind(null, M, e)),
    [o.memoizedState, e]
  );
}
function bi(e, o, i, s) {
  return (
    (e = { tag: e, create: o, destroy: i, deps: s, next: null }),
    (o = M.updateQueue),
    o === null
      ? ((o = { lastEffect: null, stores: null }),
        (M.updateQueue = o),
        (o.lastEffect = e.next = e))
      : ((i = o.lastEffect),
        i === null
          ? (o.lastEffect = e.next = e)
          : ((s = i.next), (i.next = e), (e.next = s), (o.lastEffect = e))),
    e
  );
}
function ji() {
  return Uh().memoizedState;
}
function ki(e, o, i, s) {
  var a = Th();
  (M.flags |= e),
    (a.memoizedState = bi(1 | o, i, void 0, s === void 0 ? null : s));
}
function li(e, o, i, s) {
  var a = Uh();
  s = s === void 0 ? null : s;
  var c = void 0;
  if (N !== null) {
    var d = N.memoizedState;
    if (((c = d.destroy), s !== null && Mh(s, d.deps))) {
      a.memoizedState = bi(o, i, c, s);
      return;
    }
  }
  (M.flags |= e), (a.memoizedState = bi(1 | o, i, c, s));
}
function mi(e, o) {
  return ki(8390656, 8, e, o);
}
function $h(e, o) {
  return li(2048, 8, e, o);
}
function ni(e, o) {
  return li(4, 2, e, o);
}
function oi(e, o) {
  return li(4, 4, e, o);
}
function pi(e, o) {
  if (typeof o == 'function')
    return (
      (e = e()),
      o(e),
      function () {
        o(null);
      }
    );
  if (o != null)
    return (
      (e = e()),
      (o.current = e),
      function () {
        o.current = null;
      }
    );
}
function qi(e, o, i) {
  return (
    (i = i != null ? i.concat([e]) : null), li(4, 4, pi.bind(null, o, e), i)
  );
}
function ri() {}
function si(e, o) {
  var i = Uh();
  o = o === void 0 ? null : o;
  var s = i.memoizedState;
  return s !== null && o !== null && Mh(o, s[1])
    ? s[0]
    : ((i.memoizedState = [e, o]), e);
}
function ti(e, o) {
  var i = Uh();
  o = o === void 0 ? null : o;
  var s = i.memoizedState;
  return s !== null && o !== null && Mh(o, s[1])
    ? s[0]
    : ((e = e()), (i.memoizedState = [e, o]), e);
}
function ui(e, o, i) {
  return Hh & 21
    ? (He(i, o) || ((i = yc()), (M.lanes |= i), (rh |= i), (e.baseState = !0)),
      o)
    : (e.baseState && ((e.baseState = !1), (dh = !0)), (e.memoizedState = i));
}
function vi(e, o) {
  var i = C;
  (C = i !== 0 && 4 > i ? i : 4), e(!0);
  var s = Gh.transition;
  Gh.transition = {};
  try {
    e(!1), o();
  } finally {
    (C = i), (Gh.transition = s);
  }
}
function wi() {
  return Uh().memoizedState;
}
function xi(e, o, i) {
  var s = yi(e);
  if (
    ((i = {
      lane: s,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    zi(e))
  )
    Ai(o, i);
  else if (((i = hh(e, o, i, s)), i !== null)) {
    var a = R();
    gi(i, e, s, a), Bi(i, o, s);
  }
}
function ii(e, o, i) {
  var s = yi(e),
    a = { lane: s, action: i, hasEagerState: !1, eagerState: null, next: null };
  if (zi(e)) Ai(o, a);
  else {
    var c = e.alternate;
    if (
      e.lanes === 0 &&
      (c === null || c.lanes === 0) &&
      ((c = o.lastRenderedReducer), c !== null)
    )
      try {
        var d = o.lastRenderedState,
          h = c(d, i);
        if (((a.hasEagerState = !0), (a.eagerState = h), He(h, d))) {
          var g = o.interleaved;
          g === null
            ? ((a.next = a), gh(o))
            : ((a.next = g.next), (g.next = a)),
            (o.interleaved = a);
          return;
        }
      } catch {
      } finally {
      }
    (i = hh(e, o, a, s)),
      i !== null && ((a = R()), gi(i, e, s, a), Bi(i, o, s));
  }
}
function zi(e) {
  var o = e.alternate;
  return e === M || (o !== null && o === M);
}
function Ai(e, o) {
  Jh = Ih = !0;
  var i = e.pending;
  i === null ? (o.next = o) : ((o.next = i.next), (i.next = o)),
    (e.pending = o);
}
function Bi(e, o, i) {
  if (i & 4194240) {
    var s = o.lanes;
    (s &= e.pendingLanes), (i |= s), (o.lanes = i), Cc(e, i);
  }
}
var Rh = {
    readContext: eh,
    useCallback: P,
    useContext: P,
    useEffect: P,
    useImperativeHandle: P,
    useInsertionEffect: P,
    useLayoutEffect: P,
    useMemo: P,
    useReducer: P,
    useRef: P,
    useState: P,
    useDebugValue: P,
    useDeferredValue: P,
    useTransition: P,
    useMutableSource: P,
    useSyncExternalStore: P,
    useId: P,
    unstable_isNewReconciler: !1,
  },
  Oh = {
    readContext: eh,
    useCallback: function (e, o) {
      return (Th().memoizedState = [e, o === void 0 ? null : o]), e;
    },
    useContext: eh,
    useEffect: mi,
    useImperativeHandle: function (e, o, i) {
      return (
        (i = i != null ? i.concat([e]) : null),
        ki(4194308, 4, pi.bind(null, o, e), i)
      );
    },
    useLayoutEffect: function (e, o) {
      return ki(4194308, 4, e, o);
    },
    useInsertionEffect: function (e, o) {
      return ki(4, 2, e, o);
    },
    useMemo: function (e, o) {
      var i = Th();
      return (
        (o = o === void 0 ? null : o), (e = e()), (i.memoizedState = [e, o]), e
      );
    },
    useReducer: function (e, o, i) {
      var s = Th();
      return (
        (o = i !== void 0 ? i(o) : o),
        (s.memoizedState = s.baseState = o),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: o,
        }),
        (s.queue = e),
        (e = e.dispatch = xi.bind(null, M, e)),
        [s.memoizedState, e]
      );
    },
    useRef: function (e) {
      var o = Th();
      return (e = { current: e }), (o.memoizedState = e);
    },
    useState: hi,
    useDebugValue: ri,
    useDeferredValue: function (e) {
      return (Th().memoizedState = e);
    },
    useTransition: function () {
      var e = hi(!1),
        o = e[0];
      return (e = vi.bind(null, e[1])), (Th().memoizedState = e), [o, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, o, i) {
      var s = M,
        a = Th();
      if (I) {
        if (i === void 0) throw Error(p(407));
        i = i();
      } else {
        if (((i = o()), Q === null)) throw Error(p(349));
        Hh & 30 || di(s, o, i);
      }
      a.memoizedState = i;
      var c = { value: i, getSnapshot: o };
      return (
        (a.queue = c),
        mi(ai.bind(null, s, c, e), [e]),
        (s.flags |= 2048),
        bi(9, ci.bind(null, s, c, i, o), void 0, null),
        i
      );
    },
    useId: function () {
      var e = Th(),
        o = Q.identifierPrefix;
      if (I) {
        var i = sg,
          s = rg;
        (i = (s & ~(1 << (32 - oc(s) - 1))).toString(32) + i),
          (o = ':' + o + 'R' + i),
          (i = Kh++),
          0 < i && (o += 'H' + i.toString(32)),
          (o += ':');
      } else (i = Lh++), (o = ':' + o + 'r' + i.toString(32) + ':');
      return (e.memoizedState = o);
    },
    unstable_isNewReconciler: !1,
  },
  Ph = {
    readContext: eh,
    useCallback: si,
    useContext: eh,
    useEffect: $h,
    useImperativeHandle: qi,
    useInsertionEffect: ni,
    useLayoutEffect: oi,
    useMemo: ti,
    useReducer: Wh,
    useRef: ji,
    useState: function () {
      return Wh(Vh);
    },
    useDebugValue: ri,
    useDeferredValue: function (e) {
      var o = Uh();
      return ui(o, N.memoizedState, e);
    },
    useTransition: function () {
      var e = Wh(Vh)[0],
        o = Uh().memoizedState;
      return [e, o];
    },
    useMutableSource: Yh,
    useSyncExternalStore: Zh,
    useId: wi,
    unstable_isNewReconciler: !1,
  },
  Qh = {
    readContext: eh,
    useCallback: si,
    useContext: eh,
    useEffect: $h,
    useImperativeHandle: qi,
    useInsertionEffect: ni,
    useLayoutEffect: oi,
    useMemo: ti,
    useReducer: Xh,
    useRef: ji,
    useState: function () {
      return Xh(Vh);
    },
    useDebugValue: ri,
    useDeferredValue: function (e) {
      var o = Uh();
      return N === null ? (o.memoizedState = e) : ui(o, N.memoizedState, e);
    },
    useTransition: function () {
      var e = Xh(Vh)[0],
        o = Uh().memoizedState;
      return [e, o];
    },
    useMutableSource: Yh,
    useSyncExternalStore: Zh,
    useId: wi,
    unstable_isNewReconciler: !1,
  };
function Ci(e, o) {
  if (e && e.defaultProps) {
    (o = A({}, o)), (e = e.defaultProps);
    for (var i in e) o[i] === void 0 && (o[i] = e[i]);
    return o;
  }
  return o;
}
function Di(e, o, i, s) {
  (o = e.memoizedState),
    (i = i(s, o)),
    (i = i == null ? o : A({}, o, i)),
    (e.memoizedState = i),
    e.lanes === 0 && (e.updateQueue.baseState = i);
}
var Ei = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Vb(e) === e : !1;
  },
  enqueueSetState: function (e, o, i) {
    e = e._reactInternals;
    var s = R(),
      a = yi(e),
      c = mh(s, a);
    (c.payload = o),
      i != null && (c.callback = i),
      (o = nh(e, c, a)),
      o !== null && (gi(o, e, a, s), oh(o, e, a));
  },
  enqueueReplaceState: function (e, o, i) {
    e = e._reactInternals;
    var s = R(),
      a = yi(e),
      c = mh(s, a);
    (c.tag = 1),
      (c.payload = o),
      i != null && (c.callback = i),
      (o = nh(e, c, a)),
      o !== null && (gi(o, e, a, s), oh(o, e, a));
  },
  enqueueForceUpdate: function (e, o) {
    e = e._reactInternals;
    var i = R(),
      s = yi(e),
      a = mh(i, s);
    (a.tag = 2),
      o != null && (a.callback = o),
      (o = nh(e, a, s)),
      o !== null && (gi(o, e, s, i), oh(o, e, s));
  },
};
function Fi(e, o, i, s, a, c, d) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(s, c, d)
      : o.prototype && o.prototype.isPureReactComponent
      ? !Ie(i, s) || !Ie(a, c)
      : !0
  );
}
function Gi(e, o, i) {
  var s = !1,
    a = Vf,
    c = o.contextType;
  return (
    typeof c == 'object' && c !== null
      ? (c = eh(c))
      : ((a = Zf(o) ? Xf : H.current),
        (s = o.contextTypes),
        (c = (s = s != null) ? Yf(e, a) : Vf)),
    (o = new o(i, c)),
    (e.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
    (o.updater = Ei),
    (e.stateNode = o),
    (o._reactInternals = e),
    s &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = a),
      (e.__reactInternalMemoizedMaskedChildContext = c)),
    o
  );
}
function Hi(e, o, i, s) {
  (e = o.state),
    typeof o.componentWillReceiveProps == 'function' &&
      o.componentWillReceiveProps(i, s),
    typeof o.UNSAFE_componentWillReceiveProps == 'function' &&
      o.UNSAFE_componentWillReceiveProps(i, s),
    o.state !== e && Ei.enqueueReplaceState(o, o.state, null);
}
function Ii(e, o, i, s) {
  var a = e.stateNode;
  (a.props = i), (a.state = e.memoizedState), (a.refs = {}), kh(e);
  var c = o.contextType;
  typeof c == 'object' && c !== null
    ? (a.context = eh(c))
    : ((c = Zf(o) ? Xf : H.current), (a.context = Yf(e, c))),
    (a.state = e.memoizedState),
    (c = o.getDerivedStateFromProps),
    typeof c == 'function' && (Di(e, o, c, i), (a.state = e.memoizedState)),
    typeof o.getDerivedStateFromProps == 'function' ||
      typeof a.getSnapshotBeforeUpdate == 'function' ||
      (typeof a.UNSAFE_componentWillMount != 'function' &&
        typeof a.componentWillMount != 'function') ||
      ((o = a.state),
      typeof a.componentWillMount == 'function' && a.componentWillMount(),
      typeof a.UNSAFE_componentWillMount == 'function' &&
        a.UNSAFE_componentWillMount(),
      o !== a.state && Ei.enqueueReplaceState(a, a.state, null),
      qh(e, i, a, s),
      (a.state = e.memoizedState)),
    typeof a.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Ji(e, o) {
  try {
    var i = '',
      s = o;
    do (i += Pa(s)), (s = s.return);
    while (s);
    var a = i;
  } catch (c) {
    a =
      `
Error generating stack: ` +
      c.message +
      `
` +
      c.stack;
  }
  return { value: e, source: o, stack: a, digest: null };
}
function Ki(e, o, i) {
  return { value: e, source: null, stack: i ?? null, digest: o ?? null };
}
function Li(e, o) {
  try {
    console.error(o.value);
  } catch (i) {
    setTimeout(function () {
      throw i;
    });
  }
}
var Mi = typeof WeakMap == 'function' ? WeakMap : Map;
function Ni(e, o, i) {
  (i = mh(-1, i)), (i.tag = 3), (i.payload = { element: null });
  var s = o.value;
  return (
    (i.callback = function () {
      Oi || ((Oi = !0), (Pi = s)), Li(e, o);
    }),
    i
  );
}
function Qi(e, o, i) {
  (i = mh(-1, i)), (i.tag = 3);
  var s = e.type.getDerivedStateFromError;
  if (typeof s == 'function') {
    var a = o.value;
    (i.payload = function () {
      return s(a);
    }),
      (i.callback = function () {
        Li(e, o);
      });
  }
  var c = e.stateNode;
  return (
    c !== null &&
      typeof c.componentDidCatch == 'function' &&
      (i.callback = function () {
        Li(e, o),
          typeof s != 'function' &&
            (Ri === null ? (Ri = new Set([this])) : Ri.add(this));
        var d = o.stack;
        this.componentDidCatch(o.value, {
          componentStack: d !== null ? d : '',
        });
      }),
    i
  );
}
function Si(e, o, i) {
  var s = e.pingCache;
  if (s === null) {
    s = e.pingCache = new Mi();
    var a = new Set();
    s.set(o, a);
  } else (a = s.get(o)), a === void 0 && ((a = new Set()), s.set(o, a));
  a.has(i) || (a.add(i), (e = Ti.bind(null, e, o, i)), o.then(e, e));
}
function Ui(e) {
  do {
    var o;
    if (
      ((o = e.tag === 13) &&
        ((o = e.memoizedState), (o = o !== null ? o.dehydrated !== null : !0)),
      o)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Vi(e, o, i, s, a) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = a), e)
    : (e === o
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (i.flags |= 131072),
          (i.flags &= -52805),
          i.tag === 1 &&
            (i.alternate === null
              ? (i.tag = 17)
              : ((o = mh(-1, 1)), (o.tag = 2), nh(i, o, 1))),
          (i.lanes |= 1)),
      e);
}
var Wi = ua.ReactCurrentOwner,
  dh = !1;
function Xi(e, o, i, s) {
  o.child = e === null ? Vg(o, null, i, s) : Ug(o, e.child, i, s);
}
function Yi(e, o, i, s, a) {
  i = i.render;
  var c = o.ref;
  return (
    ch(o, a),
    (s = Nh(e, o, i, s, c, a)),
    (i = Sh()),
    e !== null && !dh
      ? ((o.updateQueue = e.updateQueue),
        (o.flags &= -2053),
        (e.lanes &= ~a),
        Zi(e, o, a))
      : (I && i && vg(o), (o.flags |= 1), Xi(e, o, s, a), o.child)
  );
}
function $i(e, o, i, s, a) {
  if (e === null) {
    var c = i.type;
    return typeof c == 'function' &&
      !aj(c) &&
      c.defaultProps === void 0 &&
      i.compare === null &&
      i.defaultProps === void 0
      ? ((o.tag = 15), (o.type = c), bj(e, o, c, s, a))
      : ((e = Rg(i.type, null, s, o, o.mode, a)),
        (e.ref = o.ref),
        (e.return = o),
        (o.child = e));
  }
  if (((c = e.child), !(e.lanes & a))) {
    var d = c.memoizedProps;
    if (
      ((i = i.compare), (i = i !== null ? i : Ie), i(d, s) && e.ref === o.ref)
    )
      return Zi(e, o, a);
  }
  return (
    (o.flags |= 1),
    (e = Pg(c, s)),
    (e.ref = o.ref),
    (e.return = o),
    (o.child = e)
  );
}
function bj(e, o, i, s, a) {
  if (e !== null) {
    var c = e.memoizedProps;
    if (Ie(c, s) && e.ref === o.ref)
      if (((dh = !1), (o.pendingProps = s = c), (e.lanes & a) !== 0))
        e.flags & 131072 && (dh = !0);
      else return (o.lanes = e.lanes), Zi(e, o, a);
  }
  return cj(e, o, i, s, a);
}
function dj(e, o, i) {
  var s = o.pendingProps,
    a = s.children,
    c = e !== null ? e.memoizedState : null;
  if (s.mode === 'hidden')
    if (!(o.mode & 1))
      (o.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        G(ej, fj),
        (fj |= i);
    else {
      if (!(i & 1073741824))
        return (
          (e = c !== null ? c.baseLanes | i : i),
          (o.lanes = o.childLanes = 1073741824),
          (o.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (o.updateQueue = null),
          G(ej, fj),
          (fj |= e),
          null
        );
      (o.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (s = c !== null ? c.baseLanes : i),
        G(ej, fj),
        (fj |= s);
    }
  else
    c !== null ? ((s = c.baseLanes | i), (o.memoizedState = null)) : (s = i),
      G(ej, fj),
      (fj |= s);
  return Xi(e, o, a, i), o.child;
}
function gj(e, o) {
  var i = o.ref;
  ((e === null && i !== null) || (e !== null && e.ref !== i)) &&
    ((o.flags |= 512), (o.flags |= 2097152));
}
function cj(e, o, i, s, a) {
  var c = Zf(i) ? Xf : H.current;
  return (
    (c = Yf(o, c)),
    ch(o, a),
    (i = Nh(e, o, i, s, c, a)),
    (s = Sh()),
    e !== null && !dh
      ? ((o.updateQueue = e.updateQueue),
        (o.flags &= -2053),
        (e.lanes &= ~a),
        Zi(e, o, a))
      : (I && s && vg(o), (o.flags |= 1), Xi(e, o, i, a), o.child)
  );
}
function hj(e, o, i, s, a) {
  if (Zf(i)) {
    var c = !0;
    cg(o);
  } else c = !1;
  if ((ch(o, a), o.stateNode === null))
    ij(e, o), Gi(o, i, s), Ii(o, i, s, a), (s = !0);
  else if (e === null) {
    var d = o.stateNode,
      h = o.memoizedProps;
    d.props = h;
    var g = d.context,
      j = i.contextType;
    typeof j == 'object' && j !== null
      ? (j = eh(j))
      : ((j = Zf(i) ? Xf : H.current), (j = Yf(o, j)));
    var tt = i.getDerivedStateFromProps,
      _e =
        typeof tt == 'function' ||
        typeof d.getSnapshotBeforeUpdate == 'function';
    _e ||
      (typeof d.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof d.componentWillReceiveProps != 'function') ||
      ((h !== s || g !== j) && Hi(o, d, s, j)),
      (jh = !1);
    var et = o.memoizedState;
    (d.state = et),
      qh(o, s, d, a),
      (g = o.memoizedState),
      h !== s || et !== g || Wf.current || jh
        ? (typeof tt == 'function' && (Di(o, i, tt, s), (g = o.memoizedState)),
          (h = jh || Fi(o, i, h, s, et, g, j))
            ? (_e ||
                (typeof d.UNSAFE_componentWillMount != 'function' &&
                  typeof d.componentWillMount != 'function') ||
                (typeof d.componentWillMount == 'function' &&
                  d.componentWillMount(),
                typeof d.UNSAFE_componentWillMount == 'function' &&
                  d.UNSAFE_componentWillMount()),
              typeof d.componentDidMount == 'function' && (o.flags |= 4194308))
            : (typeof d.componentDidMount == 'function' && (o.flags |= 4194308),
              (o.memoizedProps = s),
              (o.memoizedState = g)),
          (d.props = s),
          (d.state = g),
          (d.context = j),
          (s = h))
        : (typeof d.componentDidMount == 'function' && (o.flags |= 4194308),
          (s = !1));
  } else {
    (d = o.stateNode),
      lh(e, o),
      (h = o.memoizedProps),
      (j = o.type === o.elementType ? h : Ci(o.type, h)),
      (d.props = j),
      (_e = o.pendingProps),
      (et = d.context),
      (g = i.contextType),
      typeof g == 'object' && g !== null
        ? (g = eh(g))
        : ((g = Zf(i) ? Xf : H.current), (g = Yf(o, g)));
    var ot = i.getDerivedStateFromProps;
    (tt =
      typeof ot == 'function' ||
      typeof d.getSnapshotBeforeUpdate == 'function') ||
      (typeof d.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof d.componentWillReceiveProps != 'function') ||
      ((h !== _e || et !== g) && Hi(o, d, s, g)),
      (jh = !1),
      (et = o.memoizedState),
      (d.state = et),
      qh(o, s, d, a);
    var st = o.memoizedState;
    h !== _e || et !== st || Wf.current || jh
      ? (typeof ot == 'function' && (Di(o, i, ot, s), (st = o.memoizedState)),
        (j = jh || Fi(o, i, j, s, et, st, g) || !1)
          ? (tt ||
              (typeof d.UNSAFE_componentWillUpdate != 'function' &&
                typeof d.componentWillUpdate != 'function') ||
              (typeof d.componentWillUpdate == 'function' &&
                d.componentWillUpdate(s, st, g),
              typeof d.UNSAFE_componentWillUpdate == 'function' &&
                d.UNSAFE_componentWillUpdate(s, st, g)),
            typeof d.componentDidUpdate == 'function' && (o.flags |= 4),
            typeof d.getSnapshotBeforeUpdate == 'function' && (o.flags |= 1024))
          : (typeof d.componentDidUpdate != 'function' ||
              (h === e.memoizedProps && et === e.memoizedState) ||
              (o.flags |= 4),
            typeof d.getSnapshotBeforeUpdate != 'function' ||
              (h === e.memoizedProps && et === e.memoizedState) ||
              (o.flags |= 1024),
            (o.memoizedProps = s),
            (o.memoizedState = st)),
        (d.props = s),
        (d.state = st),
        (d.context = g),
        (s = j))
      : (typeof d.componentDidUpdate != 'function' ||
          (h === e.memoizedProps && et === e.memoizedState) ||
          (o.flags |= 4),
        typeof d.getSnapshotBeforeUpdate != 'function' ||
          (h === e.memoizedProps && et === e.memoizedState) ||
          (o.flags |= 1024),
        (s = !1));
  }
  return jj(e, o, i, s, c, a);
}
function jj(e, o, i, s, a, c) {
  gj(e, o);
  var d = (o.flags & 128) !== 0;
  if (!s && !d) return a && dg(o, i, !1), Zi(e, o, c);
  (s = o.stateNode), (Wi.current = o);
  var h =
    d && typeof i.getDerivedStateFromError != 'function' ? null : s.render();
  return (
    (o.flags |= 1),
    e !== null && d
      ? ((o.child = Ug(o, e.child, null, c)), (o.child = Ug(o, null, h, c)))
      : Xi(e, o, h, c),
    (o.memoizedState = s.state),
    a && dg(o, i, !0),
    o.child
  );
}
function kj(e) {
  var o = e.stateNode;
  o.pendingContext
    ? ag(e, o.pendingContext, o.pendingContext !== o.context)
    : o.context && ag(e, o.context, !1),
    yh(e, o.containerInfo);
}
function lj(e, o, i, s, a) {
  return Ig(), Jg(a), (o.flags |= 256), Xi(e, o, i, s), o.child;
}
var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
function nj(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function oj(e, o, i) {
  var s = o.pendingProps,
    a = L.current,
    c = !1,
    d = (o.flags & 128) !== 0,
    h;
  if (
    ((h = d) ||
      (h = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
    h
      ? ((c = !0), (o.flags &= -129))
      : (e === null || e.memoizedState !== null) && (a |= 1),
    G(L, a & 1),
    e === null)
  )
    return (
      Eg(o),
      (e = o.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (o.mode & 1
            ? e.data === '$!'
              ? (o.lanes = 8)
              : (o.lanes = 1073741824)
            : (o.lanes = 1),
          null)
        : ((d = s.children),
          (e = s.fallback),
          c
            ? ((s = o.mode),
              (c = o.child),
              (d = { mode: 'hidden', children: d }),
              !(s & 1) && c !== null
                ? ((c.childLanes = 0), (c.pendingProps = d))
                : (c = pj(d, s, 0, null)),
              (e = Tg(e, s, i, null)),
              (c.return = o),
              (e.return = o),
              (c.sibling = e),
              (o.child = c),
              (o.child.memoizedState = nj(i)),
              (o.memoizedState = mj),
              e)
            : qj(o, d))
    );
  if (((a = e.memoizedState), a !== null && ((h = a.dehydrated), h !== null)))
    return rj(e, o, d, s, h, a, i);
  if (c) {
    (c = s.fallback), (d = o.mode), (a = e.child), (h = a.sibling);
    var g = { mode: 'hidden', children: s.children };
    return (
      !(d & 1) && o.child !== a
        ? ((s = o.child),
          (s.childLanes = 0),
          (s.pendingProps = g),
          (o.deletions = null))
        : ((s = Pg(a, g)), (s.subtreeFlags = a.subtreeFlags & 14680064)),
      h !== null ? (c = Pg(h, c)) : ((c = Tg(c, d, i, null)), (c.flags |= 2)),
      (c.return = o),
      (s.return = o),
      (s.sibling = c),
      (o.child = s),
      (s = c),
      (c = o.child),
      (d = e.child.memoizedState),
      (d =
        d === null
          ? nj(i)
          : {
              baseLanes: d.baseLanes | i,
              cachePool: null,
              transitions: d.transitions,
            }),
      (c.memoizedState = d),
      (c.childLanes = e.childLanes & ~i),
      (o.memoizedState = mj),
      s
    );
  }
  return (
    (c = e.child),
    (e = c.sibling),
    (s = Pg(c, { mode: 'visible', children: s.children })),
    !(o.mode & 1) && (s.lanes = i),
    (s.return = o),
    (s.sibling = null),
    e !== null &&
      ((i = o.deletions),
      i === null ? ((o.deletions = [e]), (o.flags |= 16)) : i.push(e)),
    (o.child = s),
    (o.memoizedState = null),
    s
  );
}
function qj(e, o) {
  return (
    (o = pj({ mode: 'visible', children: o }, e.mode, 0, null)),
    (o.return = e),
    (e.child = o)
  );
}
function sj(e, o, i, s) {
  return (
    s !== null && Jg(s),
    Ug(o, e.child, null, i),
    (e = qj(o, o.pendingProps.children)),
    (e.flags |= 2),
    (o.memoizedState = null),
    e
  );
}
function rj(e, o, i, s, a, c, d) {
  if (i)
    return o.flags & 256
      ? ((o.flags &= -257), (s = Ki(Error(p(422)))), sj(e, o, d, s))
      : o.memoizedState !== null
      ? ((o.child = e.child), (o.flags |= 128), null)
      : ((c = s.fallback),
        (a = o.mode),
        (s = pj({ mode: 'visible', children: s.children }, a, 0, null)),
        (c = Tg(c, a, d, null)),
        (c.flags |= 2),
        (s.return = o),
        (c.return = o),
        (s.sibling = c),
        (o.child = s),
        o.mode & 1 && Ug(o, e.child, null, d),
        (o.child.memoizedState = nj(d)),
        (o.memoizedState = mj),
        c);
  if (!(o.mode & 1)) return sj(e, o, d, null);
  if (a.data === '$!') {
    if (((s = a.nextSibling && a.nextSibling.dataset), s)) var h = s.dgst;
    return (s = h), (c = Error(p(419))), (s = Ki(c, s, void 0)), sj(e, o, d, s);
  }
  if (((h = (d & e.childLanes) !== 0), dh || h)) {
    if (((s = Q), s !== null)) {
      switch (d & -d) {
        case 4:
          a = 2;
          break;
        case 16:
          a = 8;
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
          a = 32;
          break;
        case 536870912:
          a = 268435456;
          break;
        default:
          a = 0;
      }
      (a = a & (s.suspendedLanes | d) ? 0 : a),
        a !== 0 &&
          a !== c.retryLane &&
          ((c.retryLane = a), ih(e, a), gi(s, e, a, -1));
    }
    return tj(), (s = Ki(Error(p(421)))), sj(e, o, d, s);
  }
  return a.data === '$?'
    ? ((o.flags |= 128),
      (o.child = e.child),
      (o = uj.bind(null, e)),
      (a._reactRetry = o),
      null)
    : ((e = c.treeContext),
      (yg = Lf(a.nextSibling)),
      (xg = o),
      (I = !0),
      (zg = null),
      e !== null &&
        ((og[pg++] = rg),
        (og[pg++] = sg),
        (og[pg++] = qg),
        (rg = e.id),
        (sg = e.overflow),
        (qg = o)),
      (o = qj(o, s.children)),
      (o.flags |= 4096),
      o);
}
function vj(e, o, i) {
  e.lanes |= o;
  var s = e.alternate;
  s !== null && (s.lanes |= o), bh(e.return, o, i);
}
function wj(e, o, i, s, a) {
  var c = e.memoizedState;
  c === null
    ? (e.memoizedState = {
        isBackwards: o,
        rendering: null,
        renderingStartTime: 0,
        last: s,
        tail: i,
        tailMode: a,
      })
    : ((c.isBackwards = o),
      (c.rendering = null),
      (c.renderingStartTime = 0),
      (c.last = s),
      (c.tail = i),
      (c.tailMode = a));
}
function xj(e, o, i) {
  var s = o.pendingProps,
    a = s.revealOrder,
    c = s.tail;
  if ((Xi(e, o, s.children, i), (s = L.current), s & 2))
    (s = (s & 1) | 2), (o.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = o.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && vj(e, i, o);
        else if (e.tag === 19) vj(e, i, o);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === o) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === o) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    s &= 1;
  }
  if ((G(L, s), !(o.mode & 1))) o.memoizedState = null;
  else
    switch (a) {
      case 'forwards':
        for (i = o.child, a = null; i !== null; )
          (e = i.alternate),
            e !== null && Ch(e) === null && (a = i),
            (i = i.sibling);
        (i = a),
          i === null
            ? ((a = o.child), (o.child = null))
            : ((a = i.sibling), (i.sibling = null)),
          wj(o, !1, a, i, c);
        break;
      case 'backwards':
        for (i = null, a = o.child, o.child = null; a !== null; ) {
          if (((e = a.alternate), e !== null && Ch(e) === null)) {
            o.child = a;
            break;
          }
          (e = a.sibling), (a.sibling = i), (i = a), (a = e);
        }
        wj(o, !0, i, null, c);
        break;
      case 'together':
        wj(o, !1, null, null, void 0);
        break;
      default:
        o.memoizedState = null;
    }
  return o.child;
}
function ij(e, o) {
  !(o.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (o.alternate = null), (o.flags |= 2));
}
function Zi(e, o, i) {
  if (
    (e !== null && (o.dependencies = e.dependencies),
    (rh |= o.lanes),
    !(i & o.childLanes))
  )
    return null;
  if (e !== null && o.child !== e.child) throw Error(p(153));
  if (o.child !== null) {
    for (
      e = o.child, i = Pg(e, e.pendingProps), o.child = i, i.return = o;
      e.sibling !== null;

    )
      (e = e.sibling), (i = i.sibling = Pg(e, e.pendingProps)), (i.return = o);
    i.sibling = null;
  }
  return o.child;
}
function yj(e, o, i) {
  switch (o.tag) {
    case 3:
      kj(o), Ig();
      break;
    case 5:
      Ah(o);
      break;
    case 1:
      Zf(o.type) && cg(o);
      break;
    case 4:
      yh(o, o.stateNode.containerInfo);
      break;
    case 10:
      var s = o.type._context,
        a = o.memoizedProps.value;
      G(Wg, s._currentValue), (s._currentValue = a);
      break;
    case 13:
      if (((s = o.memoizedState), s !== null))
        return s.dehydrated !== null
          ? (G(L, L.current & 1), (o.flags |= 128), null)
          : i & o.child.childLanes
          ? oj(e, o, i)
          : (G(L, L.current & 1),
            (e = Zi(e, o, i)),
            e !== null ? e.sibling : null);
      G(L, L.current & 1);
      break;
    case 19:
      if (((s = (i & o.childLanes) !== 0), e.flags & 128)) {
        if (s) return xj(e, o, i);
        o.flags |= 128;
      }
      if (
        ((a = o.memoizedState),
        a !== null &&
          ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
        G(L, L.current),
        s)
      )
        break;
      return null;
    case 22:
    case 23:
      return (o.lanes = 0), dj(e, o, i);
  }
  return Zi(e, o, i);
}
var zj, Aj, Bj, Cj;
zj = function (e, o) {
  for (var i = o.child; i !== null; ) {
    if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
    else if (i.tag !== 4 && i.child !== null) {
      (i.child.return = i), (i = i.child);
      continue;
    }
    if (i === o) break;
    for (; i.sibling === null; ) {
      if (i.return === null || i.return === o) return;
      i = i.return;
    }
    (i.sibling.return = i.return), (i = i.sibling);
  }
};
Aj = function () {};
Bj = function (e, o, i, s) {
  var a = e.memoizedProps;
  if (a !== s) {
    (e = o.stateNode), xh(uh.current);
    var c = null;
    switch (i) {
      case 'input':
        (a = Ya(e, a)), (s = Ya(e, s)), (c = []);
        break;
      case 'select':
        (a = A({}, a, { value: void 0 })),
          (s = A({}, s, { value: void 0 })),
          (c = []);
        break;
      case 'textarea':
        (a = gb(e, a)), (s = gb(e, s)), (c = []);
        break;
      default:
        typeof a.onClick != 'function' &&
          typeof s.onClick == 'function' &&
          (e.onclick = Bf);
    }
    ub(i, s);
    var d;
    i = null;
    for (j in a)
      if (!s.hasOwnProperty(j) && a.hasOwnProperty(j) && a[j] != null)
        if (j === 'style') {
          var h = a[j];
          for (d in h) h.hasOwnProperty(d) && (i || (i = {}), (i[d] = ''));
        } else
          j !== 'dangerouslySetInnerHTML' &&
            j !== 'children' &&
            j !== 'suppressContentEditableWarning' &&
            j !== 'suppressHydrationWarning' &&
            j !== 'autoFocus' &&
            (ea.hasOwnProperty(j)
              ? c || (c = [])
              : (c = c || []).push(j, null));
    for (j in s) {
      var g = s[j];
      if (
        ((h = a != null ? a[j] : void 0),
        s.hasOwnProperty(j) && g !== h && (g != null || h != null))
      )
        if (j === 'style')
          if (h) {
            for (d in h)
              !h.hasOwnProperty(d) ||
                (g && g.hasOwnProperty(d)) ||
                (i || (i = {}), (i[d] = ''));
            for (d in g)
              g.hasOwnProperty(d) &&
                h[d] !== g[d] &&
                (i || (i = {}), (i[d] = g[d]));
          } else i || (c || (c = []), c.push(j, i)), (i = g);
        else
          j === 'dangerouslySetInnerHTML'
            ? ((g = g ? g.__html : void 0),
              (h = h ? h.__html : void 0),
              g != null && h !== g && (c = c || []).push(j, g))
            : j === 'children'
            ? (typeof g != 'string' && typeof g != 'number') ||
              (c = c || []).push(j, '' + g)
            : j !== 'suppressContentEditableWarning' &&
              j !== 'suppressHydrationWarning' &&
              (ea.hasOwnProperty(j)
                ? (g != null && j === 'onScroll' && D('scroll', e),
                  c || h === g || (c = []))
                : (c = c || []).push(j, g));
    }
    i && (c = c || []).push('style', i);
    var j = c;
    (o.updateQueue = j) && (o.flags |= 4);
  }
};
Cj = function (e, o, i, s) {
  i !== s && (o.flags |= 4);
};
function Dj(e, o) {
  if (!I)
    switch (e.tailMode) {
      case 'hidden':
        o = e.tail;
        for (var i = null; o !== null; )
          o.alternate !== null && (i = o), (o = o.sibling);
        i === null ? (e.tail = null) : (i.sibling = null);
        break;
      case 'collapsed':
        i = e.tail;
        for (var s = null; i !== null; )
          i.alternate !== null && (s = i), (i = i.sibling);
        s === null
          ? o || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (s.sibling = null);
    }
}
function S(e) {
  var o = e.alternate !== null && e.alternate.child === e.child,
    i = 0,
    s = 0;
  if (o)
    for (var a = e.child; a !== null; )
      (i |= a.lanes | a.childLanes),
        (s |= a.subtreeFlags & 14680064),
        (s |= a.flags & 14680064),
        (a.return = e),
        (a = a.sibling);
  else
    for (a = e.child; a !== null; )
      (i |= a.lanes | a.childLanes),
        (s |= a.subtreeFlags),
        (s |= a.flags),
        (a.return = e),
        (a = a.sibling);
  return (e.subtreeFlags |= s), (e.childLanes = i), o;
}
function Ej(e, o, i) {
  var s = o.pendingProps;
  switch ((wg(o), o.tag)) {
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
      return S(o), null;
    case 1:
      return Zf(o.type) && $f(), S(o), null;
    case 3:
      return (
        (s = o.stateNode),
        zh(),
        E(Wf),
        E(H),
        Eh(),
        s.pendingContext &&
          ((s.context = s.pendingContext), (s.pendingContext = null)),
        (e === null || e.child === null) &&
          (Gg(o)
            ? (o.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(o.flags & 256)) ||
              ((o.flags |= 1024), zg !== null && (Fj(zg), (zg = null)))),
        Aj(e, o),
        S(o),
        null
      );
    case 5:
      Bh(o);
      var a = xh(wh.current);
      if (((i = o.type), e !== null && o.stateNode != null))
        Bj(e, o, i, s, a),
          e.ref !== o.ref && ((o.flags |= 512), (o.flags |= 2097152));
      else {
        if (!s) {
          if (o.stateNode === null) throw Error(p(166));
          return S(o), null;
        }
        if (((e = xh(uh.current)), Gg(o))) {
          (s = o.stateNode), (i = o.type);
          var c = o.memoizedProps;
          switch (((s[Of] = o), (s[Pf] = c), (e = (o.mode & 1) !== 0), i)) {
            case 'dialog':
              D('cancel', s), D('close', s);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              D('load', s);
              break;
            case 'video':
            case 'audio':
              for (a = 0; a < lf.length; a++) D(lf[a], s);
              break;
            case 'source':
              D('error', s);
              break;
            case 'img':
            case 'image':
            case 'link':
              D('error', s), D('load', s);
              break;
            case 'details':
              D('toggle', s);
              break;
            case 'input':
              Za(s, c), D('invalid', s);
              break;
            case 'select':
              (s._wrapperState = { wasMultiple: !!c.multiple }),
                D('invalid', s);
              break;
            case 'textarea':
              hb(s, c), D('invalid', s);
          }
          ub(i, c), (a = null);
          for (var d in c)
            if (c.hasOwnProperty(d)) {
              var h = c[d];
              d === 'children'
                ? typeof h == 'string'
                  ? s.textContent !== h &&
                    (c.suppressHydrationWarning !== !0 &&
                      Af(s.textContent, h, e),
                    (a = ['children', h]))
                  : typeof h == 'number' &&
                    s.textContent !== '' + h &&
                    (c.suppressHydrationWarning !== !0 &&
                      Af(s.textContent, h, e),
                    (a = ['children', '' + h]))
                : ea.hasOwnProperty(d) &&
                  h != null &&
                  d === 'onScroll' &&
                  D('scroll', s);
            }
          switch (i) {
            case 'input':
              Va(s), db(s, c, !0);
              break;
            case 'textarea':
              Va(s), jb(s);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof c.onClick == 'function' && (s.onclick = Bf);
          }
          (s = a), (o.updateQueue = s), s !== null && (o.flags |= 4);
        } else {
          (d = a.nodeType === 9 ? a : a.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = kb(i)),
            e === 'http://www.w3.org/1999/xhtml'
              ? i === 'script'
                ? ((e = d.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof s.is == 'string'
                ? (e = d.createElement(i, { is: s.is }))
                : ((e = d.createElement(i)),
                  i === 'select' &&
                    ((d = e),
                    s.multiple
                      ? (d.multiple = !0)
                      : s.size && (d.size = s.size)))
              : (e = d.createElementNS(e, i)),
            (e[Of] = o),
            (e[Pf] = s),
            zj(e, o, !1, !1),
            (o.stateNode = e);
          e: {
            switch (((d = vb(i, s)), i)) {
              case 'dialog':
                D('cancel', e), D('close', e), (a = s);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                D('load', e), (a = s);
                break;
              case 'video':
              case 'audio':
                for (a = 0; a < lf.length; a++) D(lf[a], e);
                a = s;
                break;
              case 'source':
                D('error', e), (a = s);
                break;
              case 'img':
              case 'image':
              case 'link':
                D('error', e), D('load', e), (a = s);
                break;
              case 'details':
                D('toggle', e), (a = s);
                break;
              case 'input':
                Za(e, s), (a = Ya(e, s)), D('invalid', e);
                break;
              case 'option':
                a = s;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!s.multiple }),
                  (a = A({}, s, { value: void 0 })),
                  D('invalid', e);
                break;
              case 'textarea':
                hb(e, s), (a = gb(e, s)), D('invalid', e);
                break;
              default:
                a = s;
            }
            ub(i, a), (h = a);
            for (c in h)
              if (h.hasOwnProperty(c)) {
                var g = h[c];
                c === 'style'
                  ? sb(e, g)
                  : c === 'dangerouslySetInnerHTML'
                  ? ((g = g ? g.__html : void 0), g != null && nb(e, g))
                  : c === 'children'
                  ? typeof g == 'string'
                    ? (i !== 'textarea' || g !== '') && ob(e, g)
                    : typeof g == 'number' && ob(e, '' + g)
                  : c !== 'suppressContentEditableWarning' &&
                    c !== 'suppressHydrationWarning' &&
                    c !== 'autoFocus' &&
                    (ea.hasOwnProperty(c)
                      ? g != null && c === 'onScroll' && D('scroll', e)
                      : g != null && ta(e, c, g, d));
              }
            switch (i) {
              case 'input':
                Va(e), db(e, s, !1);
                break;
              case 'textarea':
                Va(e), jb(e);
                break;
              case 'option':
                s.value != null && e.setAttribute('value', '' + Sa(s.value));
                break;
              case 'select':
                (e.multiple = !!s.multiple),
                  (c = s.value),
                  c != null
                    ? fb(e, !!s.multiple, c, !1)
                    : s.defaultValue != null &&
                      fb(e, !!s.multiple, s.defaultValue, !0);
                break;
              default:
                typeof a.onClick == 'function' && (e.onclick = Bf);
            }
            switch (i) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                s = !!s.autoFocus;
                break e;
              case 'img':
                s = !0;
                break e;
              default:
                s = !1;
            }
          }
          s && (o.flags |= 4);
        }
        o.ref !== null && ((o.flags |= 512), (o.flags |= 2097152));
      }
      return S(o), null;
    case 6:
      if (e && o.stateNode != null) Cj(e, o, e.memoizedProps, s);
      else {
        if (typeof s != 'string' && o.stateNode === null) throw Error(p(166));
        if (((i = xh(wh.current)), xh(uh.current), Gg(o))) {
          if (
            ((s = o.stateNode),
            (i = o.memoizedProps),
            (s[Of] = o),
            (c = s.nodeValue !== i) && ((e = xg), e !== null))
          )
            switch (e.tag) {
              case 3:
                Af(s.nodeValue, i, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Af(s.nodeValue, i, (e.mode & 1) !== 0);
            }
          c && (o.flags |= 4);
        } else
          (s = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(s)),
            (s[Of] = o),
            (o.stateNode = s);
      }
      return S(o), null;
    case 13:
      if (
        (E(L),
        (s = o.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (I && yg !== null && o.mode & 1 && !(o.flags & 128))
          Hg(), Ig(), (o.flags |= 98560), (c = !1);
        else if (((c = Gg(o)), s !== null && s.dehydrated !== null)) {
          if (e === null) {
            if (!c) throw Error(p(318));
            if (
              ((c = o.memoizedState),
              (c = c !== null ? c.dehydrated : null),
              !c)
            )
              throw Error(p(317));
            c[Of] = o;
          } else
            Ig(), !(o.flags & 128) && (o.memoizedState = null), (o.flags |= 4);
          S(o), (c = !1);
        } else zg !== null && (Fj(zg), (zg = null)), (c = !0);
        if (!c) return o.flags & 65536 ? o : null;
      }
      return o.flags & 128
        ? ((o.lanes = i), o)
        : ((s = s !== null),
          s !== (e !== null && e.memoizedState !== null) &&
            s &&
            ((o.child.flags |= 8192),
            o.mode & 1 &&
              (e === null || L.current & 1 ? T === 0 && (T = 3) : tj())),
          o.updateQueue !== null && (o.flags |= 4),
          S(o),
          null);
    case 4:
      return (
        zh(), Aj(e, o), e === null && sf(o.stateNode.containerInfo), S(o), null
      );
    case 10:
      return ah(o.type._context), S(o), null;
    case 17:
      return Zf(o.type) && $f(), S(o), null;
    case 19:
      if ((E(L), (c = o.memoizedState), c === null)) return S(o), null;
      if (((s = (o.flags & 128) !== 0), (d = c.rendering), d === null))
        if (s) Dj(c, !1);
        else {
          if (T !== 0 || (e !== null && e.flags & 128))
            for (e = o.child; e !== null; ) {
              if (((d = Ch(e)), d !== null)) {
                for (
                  o.flags |= 128,
                    Dj(c, !1),
                    s = d.updateQueue,
                    s !== null && ((o.updateQueue = s), (o.flags |= 4)),
                    o.subtreeFlags = 0,
                    s = i,
                    i = o.child;
                  i !== null;

                )
                  (c = i),
                    (e = s),
                    (c.flags &= 14680066),
                    (d = c.alternate),
                    d === null
                      ? ((c.childLanes = 0),
                        (c.lanes = e),
                        (c.child = null),
                        (c.subtreeFlags = 0),
                        (c.memoizedProps = null),
                        (c.memoizedState = null),
                        (c.updateQueue = null),
                        (c.dependencies = null),
                        (c.stateNode = null))
                      : ((c.childLanes = d.childLanes),
                        (c.lanes = d.lanes),
                        (c.child = d.child),
                        (c.subtreeFlags = 0),
                        (c.deletions = null),
                        (c.memoizedProps = d.memoizedProps),
                        (c.memoizedState = d.memoizedState),
                        (c.updateQueue = d.updateQueue),
                        (c.type = d.type),
                        (e = d.dependencies),
                        (c.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (i = i.sibling);
                return G(L, (L.current & 1) | 2), o.child;
              }
              e = e.sibling;
            }
          c.tail !== null &&
            B() > Gj &&
            ((o.flags |= 128), (s = !0), Dj(c, !1), (o.lanes = 4194304));
        }
      else {
        if (!s)
          if (((e = Ch(d)), e !== null)) {
            if (
              ((o.flags |= 128),
              (s = !0),
              (i = e.updateQueue),
              i !== null && ((o.updateQueue = i), (o.flags |= 4)),
              Dj(c, !0),
              c.tail === null && c.tailMode === 'hidden' && !d.alternate && !I)
            )
              return S(o), null;
          } else
            2 * B() - c.renderingStartTime > Gj &&
              i !== 1073741824 &&
              ((o.flags |= 128), (s = !0), Dj(c, !1), (o.lanes = 4194304));
        c.isBackwards
          ? ((d.sibling = o.child), (o.child = d))
          : ((i = c.last),
            i !== null ? (i.sibling = d) : (o.child = d),
            (c.last = d));
      }
      return c.tail !== null
        ? ((o = c.tail),
          (c.rendering = o),
          (c.tail = o.sibling),
          (c.renderingStartTime = B()),
          (o.sibling = null),
          (i = L.current),
          G(L, s ? (i & 1) | 2 : i & 1),
          o)
        : (S(o), null);
    case 22:
    case 23:
      return (
        Hj(),
        (s = o.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== s && (o.flags |= 8192),
        s && o.mode & 1
          ? fj & 1073741824 && (S(o), o.subtreeFlags & 6 && (o.flags |= 8192))
          : S(o),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p(156, o.tag));
}
function Ij(e, o) {
  switch ((wg(o), o.tag)) {
    case 1:
      return (
        Zf(o.type) && $f(),
        (e = o.flags),
        e & 65536 ? ((o.flags = (e & -65537) | 128), o) : null
      );
    case 3:
      return (
        zh(),
        E(Wf),
        E(H),
        Eh(),
        (e = o.flags),
        e & 65536 && !(e & 128) ? ((o.flags = (e & -65537) | 128), o) : null
      );
    case 5:
      return Bh(o), null;
    case 13:
      if ((E(L), (e = o.memoizedState), e !== null && e.dehydrated !== null)) {
        if (o.alternate === null) throw Error(p(340));
        Ig();
      }
      return (
        (e = o.flags), e & 65536 ? ((o.flags = (e & -65537) | 128), o) : null
      );
    case 19:
      return E(L), null;
    case 4:
      return zh(), null;
    case 10:
      return ah(o.type._context), null;
    case 22:
    case 23:
      return Hj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jj = !1,
  U = !1,
  Kj = typeof WeakSet == 'function' ? WeakSet : Set,
  V = null;
function Lj(e, o) {
  var i = e.ref;
  if (i !== null)
    if (typeof i == 'function')
      try {
        i(null);
      } catch (s) {
        W(e, o, s);
      }
    else i.current = null;
}
function Mj(e, o, i) {
  try {
    i();
  } catch (s) {
    W(e, o, s);
  }
}
var Nj = !1;
function Oj(e, o) {
  if (((Cf = dd), (e = Me()), Ne(e))) {
    if ('selectionStart' in e)
      var i = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        i = ((i = e.ownerDocument) && i.defaultView) || window;
        var s = i.getSelection && i.getSelection();
        if (s && s.rangeCount !== 0) {
          i = s.anchorNode;
          var a = s.anchorOffset,
            c = s.focusNode;
          s = s.focusOffset;
          try {
            i.nodeType, c.nodeType;
          } catch {
            i = null;
            break e;
          }
          var d = 0,
            h = -1,
            g = -1,
            j = 0,
            tt = 0,
            _e = e,
            et = null;
          t: for (;;) {
            for (
              var ot;
              _e !== i || (a !== 0 && _e.nodeType !== 3) || (h = d + a),
                _e !== c || (s !== 0 && _e.nodeType !== 3) || (g = d + s),
                _e.nodeType === 3 && (d += _e.nodeValue.length),
                (ot = _e.firstChild) !== null;

            )
              (et = _e), (_e = ot);
            for (;;) {
              if (_e === e) break t;
              if (
                (et === i && ++j === a && (h = d),
                et === c && ++tt === s && (g = d),
                (ot = _e.nextSibling) !== null)
              )
                break;
              (_e = et), (et = _e.parentNode);
            }
            _e = ot;
          }
          i = h === -1 || g === -1 ? null : { start: h, end: g };
        } else i = null;
      }
    i = i || { start: 0, end: 0 };
  } else i = null;
  for (Df = { focusedElem: e, selectionRange: i }, dd = !1, V = o; V !== null; )
    if (((o = V), (e = o.child), (o.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = o), (V = e);
    else
      for (; V !== null; ) {
        o = V;
        try {
          var st = o.alternate;
          if (o.flags & 1024)
            switch (o.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (st !== null) {
                  var ft = st.memoizedProps,
                    Ot = st.memoizedState,
                    b = o.stateNode,
                    _ = b.getSnapshotBeforeUpdate(
                      o.elementType === o.type ? ft : Ci(o.type, ft),
                      Ot
                    );
                  b.__reactInternalSnapshotBeforeUpdate = _;
                }
                break;
              case 3:
                var $ = o.stateNode.containerInfo;
                $.nodeType === 1
                  ? ($.textContent = '')
                  : $.nodeType === 9 &&
                    $.documentElement &&
                    $.removeChild($.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
        } catch (ut) {
          W(o, o.return, ut);
        }
        if (((e = o.sibling), e !== null)) {
          (e.return = o.return), (V = e);
          break;
        }
        V = o.return;
      }
  return (st = Nj), (Nj = !1), st;
}
function Pj(e, o, i) {
  var s = o.updateQueue;
  if (((s = s !== null ? s.lastEffect : null), s !== null)) {
    var a = (s = s.next);
    do {
      if ((a.tag & e) === e) {
        var c = a.destroy;
        (a.destroy = void 0), c !== void 0 && Mj(o, i, c);
      }
      a = a.next;
    } while (a !== s);
  }
}
function Qj(e, o) {
  if (
    ((o = o.updateQueue), (o = o !== null ? o.lastEffect : null), o !== null)
  ) {
    var i = (o = o.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.create;
        i.destroy = s();
      }
      i = i.next;
    } while (i !== o);
  }
}
function Rj(e) {
  var o = e.ref;
  if (o !== null) {
    var i = e.stateNode;
    switch (e.tag) {
      case 5:
        e = i;
        break;
      default:
        e = i;
    }
    typeof o == 'function' ? o(e) : (o.current = e);
  }
}
function Sj(e) {
  var o = e.alternate;
  o !== null && ((e.alternate = null), Sj(o)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((o = e.stateNode),
      o !== null &&
        (delete o[Of], delete o[Pf], delete o[of], delete o[Qf], delete o[Rf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Tj(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Uj(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Tj(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Vj(e, o, i) {
  var s = e.tag;
  if (s === 5 || s === 6)
    (e = e.stateNode),
      o
        ? i.nodeType === 8
          ? i.parentNode.insertBefore(e, o)
          : i.insertBefore(e, o)
        : (i.nodeType === 8
            ? ((o = i.parentNode), o.insertBefore(e, i))
            : ((o = i), o.appendChild(e)),
          (i = i._reactRootContainer),
          i != null || o.onclick !== null || (o.onclick = Bf));
  else if (s !== 4 && ((e = e.child), e !== null))
    for (Vj(e, o, i), e = e.sibling; e !== null; ) Vj(e, o, i), (e = e.sibling);
}
function Wj(e, o, i) {
  var s = e.tag;
  if (s === 5 || s === 6)
    (e = e.stateNode), o ? i.insertBefore(e, o) : i.appendChild(e);
  else if (s !== 4 && ((e = e.child), e !== null))
    for (Wj(e, o, i), e = e.sibling; e !== null; ) Wj(e, o, i), (e = e.sibling);
}
var X = null,
  Xj = !1;
function Yj(e, o, i) {
  for (i = i.child; i !== null; ) Zj(e, o, i), (i = i.sibling);
}
function Zj(e, o, i) {
  if (lc && typeof lc.onCommitFiberUnmount == 'function')
    try {
      lc.onCommitFiberUnmount(kc, i);
    } catch {}
  switch (i.tag) {
    case 5:
      U || Lj(i, o);
    case 6:
      var s = X,
        a = Xj;
      (X = null),
        Yj(e, o, i),
        (X = s),
        (Xj = a),
        X !== null &&
          (Xj
            ? ((e = X),
              (i = i.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i))
            : X.removeChild(i.stateNode));
      break;
    case 18:
      X !== null &&
        (Xj
          ? ((e = X),
            (i = i.stateNode),
            e.nodeType === 8
              ? Kf(e.parentNode, i)
              : e.nodeType === 1 && Kf(e, i),
            bd(e))
          : Kf(X, i.stateNode));
      break;
    case 4:
      (s = X),
        (a = Xj),
        (X = i.stateNode.containerInfo),
        (Xj = !0),
        Yj(e, o, i),
        (X = s),
        (Xj = a);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !U &&
        ((s = i.updateQueue), s !== null && ((s = s.lastEffect), s !== null))
      ) {
        a = s = s.next;
        do {
          var c = a,
            d = c.destroy;
          (c = c.tag),
            d !== void 0 && (c & 2 || c & 4) && Mj(i, o, d),
            (a = a.next);
        } while (a !== s);
      }
      Yj(e, o, i);
      break;
    case 1:
      if (
        !U &&
        (Lj(i, o),
        (s = i.stateNode),
        typeof s.componentWillUnmount == 'function')
      )
        try {
          (s.props = i.memoizedProps),
            (s.state = i.memoizedState),
            s.componentWillUnmount();
        } catch (h) {
          W(i, o, h);
        }
      Yj(e, o, i);
      break;
    case 21:
      Yj(e, o, i);
      break;
    case 22:
      i.mode & 1
        ? ((U = (s = U) || i.memoizedState !== null), Yj(e, o, i), (U = s))
        : Yj(e, o, i);
      break;
    default:
      Yj(e, o, i);
  }
}
function ak(e) {
  var o = e.updateQueue;
  if (o !== null) {
    e.updateQueue = null;
    var i = e.stateNode;
    i === null && (i = e.stateNode = new Kj()),
      o.forEach(function (s) {
        var a = bk.bind(null, e, s);
        i.has(s) || (i.add(s), s.then(a, a));
      });
  }
}
function ck(e, o) {
  var i = o.deletions;
  if (i !== null)
    for (var s = 0; s < i.length; s++) {
      var a = i[s];
      try {
        var c = e,
          d = o,
          h = d;
        e: for (; h !== null; ) {
          switch (h.tag) {
            case 5:
              (X = h.stateNode), (Xj = !1);
              break e;
            case 3:
              (X = h.stateNode.containerInfo), (Xj = !0);
              break e;
            case 4:
              (X = h.stateNode.containerInfo), (Xj = !0);
              break e;
          }
          h = h.return;
        }
        if (X === null) throw Error(p(160));
        Zj(c, d, a), (X = null), (Xj = !1);
        var g = a.alternate;
        g !== null && (g.return = null), (a.return = null);
      } catch (j) {
        W(a, o, j);
      }
    }
  if (o.subtreeFlags & 12854)
    for (o = o.child; o !== null; ) dk(o, e), (o = o.sibling);
}
function dk(e, o) {
  var i = e.alternate,
    s = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ck(o, e), ek(e), s & 4)) {
        try {
          Pj(3, e, e.return), Qj(3, e);
        } catch (ft) {
          W(e, e.return, ft);
        }
        try {
          Pj(5, e, e.return);
        } catch (ft) {
          W(e, e.return, ft);
        }
      }
      break;
    case 1:
      ck(o, e), ek(e), s & 512 && i !== null && Lj(i, i.return);
      break;
    case 5:
      if (
        (ck(o, e),
        ek(e),
        s & 512 && i !== null && Lj(i, i.return),
        e.flags & 32)
      ) {
        var a = e.stateNode;
        try {
          ob(a, '');
        } catch (ft) {
          W(e, e.return, ft);
        }
      }
      if (s & 4 && ((a = e.stateNode), a != null)) {
        var c = e.memoizedProps,
          d = i !== null ? i.memoizedProps : c,
          h = e.type,
          g = e.updateQueue;
        if (((e.updateQueue = null), g !== null))
          try {
            h === 'input' && c.type === 'radio' && c.name != null && ab(a, c),
              vb(h, d);
            var j = vb(h, c);
            for (d = 0; d < g.length; d += 2) {
              var tt = g[d],
                _e = g[d + 1];
              tt === 'style'
                ? sb(a, _e)
                : tt === 'dangerouslySetInnerHTML'
                ? nb(a, _e)
                : tt === 'children'
                ? ob(a, _e)
                : ta(a, tt, _e, j);
            }
            switch (h) {
              case 'input':
                bb(a, c);
                break;
              case 'textarea':
                ib(a, c);
                break;
              case 'select':
                var et = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!c.multiple;
                var ot = c.value;
                ot != null
                  ? fb(a, !!c.multiple, ot, !1)
                  : et !== !!c.multiple &&
                    (c.defaultValue != null
                      ? fb(a, !!c.multiple, c.defaultValue, !0)
                      : fb(a, !!c.multiple, c.multiple ? [] : '', !1));
            }
            a[Pf] = c;
          } catch (ft) {
            W(e, e.return, ft);
          }
      }
      break;
    case 6:
      if ((ck(o, e), ek(e), s & 4)) {
        if (e.stateNode === null) throw Error(p(162));
        (a = e.stateNode), (c = e.memoizedProps);
        try {
          a.nodeValue = c;
        } catch (ft) {
          W(e, e.return, ft);
        }
      }
      break;
    case 3:
      if (
        (ck(o, e), ek(e), s & 4 && i !== null && i.memoizedState.isDehydrated)
      )
        try {
          bd(o.containerInfo);
        } catch (ft) {
          W(e, e.return, ft);
        }
      break;
    case 4:
      ck(o, e), ek(e);
      break;
    case 13:
      ck(o, e),
        ek(e),
        (a = e.child),
        a.flags & 8192 &&
          ((c = a.memoizedState !== null),
          (a.stateNode.isHidden = c),
          !c ||
            (a.alternate !== null && a.alternate.memoizedState !== null) ||
            (fk = B())),
        s & 4 && ak(e);
      break;
    case 22:
      if (
        ((tt = i !== null && i.memoizedState !== null),
        e.mode & 1 ? ((U = (j = U) || tt), ck(o, e), (U = j)) : ck(o, e),
        ek(e),
        s & 8192)
      ) {
        if (
          ((j = e.memoizedState !== null),
          (e.stateNode.isHidden = j) && !tt && e.mode & 1)
        )
          for (V = e, tt = e.child; tt !== null; ) {
            for (_e = V = tt; V !== null; ) {
              switch (((et = V), (ot = et.child), et.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pj(4, et, et.return);
                  break;
                case 1:
                  Lj(et, et.return);
                  var st = et.stateNode;
                  if (typeof st.componentWillUnmount == 'function') {
                    (s = et), (i = et.return);
                    try {
                      (o = s),
                        (st.props = o.memoizedProps),
                        (st.state = o.memoizedState),
                        st.componentWillUnmount();
                    } catch (ft) {
                      W(s, i, ft);
                    }
                  }
                  break;
                case 5:
                  Lj(et, et.return);
                  break;
                case 22:
                  if (et.memoizedState !== null) {
                    gk(_e);
                    continue;
                  }
              }
              ot !== null ? ((ot.return = et), (V = ot)) : gk(_e);
            }
            tt = tt.sibling;
          }
        e: for (tt = null, _e = e; ; ) {
          if (_e.tag === 5) {
            if (tt === null) {
              tt = _e;
              try {
                (a = _e.stateNode),
                  j
                    ? ((c = a.style),
                      typeof c.setProperty == 'function'
                        ? c.setProperty('display', 'none', 'important')
                        : (c.display = 'none'))
                    : ((h = _e.stateNode),
                      (g = _e.memoizedProps.style),
                      (d =
                        g != null && g.hasOwnProperty('display')
                          ? g.display
                          : null),
                      (h.style.display = rb('display', d)));
              } catch (ft) {
                W(e, e.return, ft);
              }
            }
          } else if (_e.tag === 6) {
            if (tt === null)
              try {
                _e.stateNode.nodeValue = j ? '' : _e.memoizedProps;
              } catch (ft) {
                W(e, e.return, ft);
              }
          } else if (
            ((_e.tag !== 22 && _e.tag !== 23) ||
              _e.memoizedState === null ||
              _e === e) &&
            _e.child !== null
          ) {
            (_e.child.return = _e), (_e = _e.child);
            continue;
          }
          if (_e === e) break e;
          for (; _e.sibling === null; ) {
            if (_e.return === null || _e.return === e) break e;
            tt === _e && (tt = null), (_e = _e.return);
          }
          tt === _e && (tt = null),
            (_e.sibling.return = _e.return),
            (_e = _e.sibling);
        }
      }
      break;
    case 19:
      ck(o, e), ek(e), s & 4 && ak(e);
      break;
    case 21:
      break;
    default:
      ck(o, e), ek(e);
  }
}
function ek(e) {
  var o = e.flags;
  if (o & 2) {
    try {
      e: {
        for (var i = e.return; i !== null; ) {
          if (Tj(i)) {
            var s = i;
            break e;
          }
          i = i.return;
        }
        throw Error(p(160));
      }
      switch (s.tag) {
        case 5:
          var a = s.stateNode;
          s.flags & 32 && (ob(a, ''), (s.flags &= -33));
          var c = Uj(e);
          Wj(e, c, a);
          break;
        case 3:
        case 4:
          var d = s.stateNode.containerInfo,
            h = Uj(e);
          Vj(e, h, d);
          break;
        default:
          throw Error(p(161));
      }
    } catch (g) {
      W(e, e.return, g);
    }
    e.flags &= -3;
  }
  o & 4096 && (e.flags &= -4097);
}
function hk(e, o, i) {
  (V = e), ik(e);
}
function ik(e, o, i) {
  for (var s = (e.mode & 1) !== 0; V !== null; ) {
    var a = V,
      c = a.child;
    if (a.tag === 22 && s) {
      var d = a.memoizedState !== null || Jj;
      if (!d) {
        var h = a.alternate,
          g = (h !== null && h.memoizedState !== null) || U;
        h = Jj;
        var j = U;
        if (((Jj = d), (U = g) && !j))
          for (V = a; V !== null; )
            (d = V),
              (g = d.child),
              d.tag === 22 && d.memoizedState !== null
                ? jk(a)
                : g !== null
                ? ((g.return = d), (V = g))
                : jk(a);
        for (; c !== null; ) (V = c), ik(c), (c = c.sibling);
        (V = a), (Jj = h), (U = j);
      }
      kk(e);
    } else
      a.subtreeFlags & 8772 && c !== null ? ((c.return = a), (V = c)) : kk(e);
  }
}
function kk(e) {
  for (; V !== null; ) {
    var o = V;
    if (o.flags & 8772) {
      var i = o.alternate;
      try {
        if (o.flags & 8772)
          switch (o.tag) {
            case 0:
            case 11:
            case 15:
              U || Qj(5, o);
              break;
            case 1:
              var s = o.stateNode;
              if (o.flags & 4 && !U)
                if (i === null) s.componentDidMount();
                else {
                  var a =
                    o.elementType === o.type
                      ? i.memoizedProps
                      : Ci(o.type, i.memoizedProps);
                  s.componentDidUpdate(
                    a,
                    i.memoizedState,
                    s.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var c = o.updateQueue;
              c !== null && sh(o, c, s);
              break;
            case 3:
              var d = o.updateQueue;
              if (d !== null) {
                if (((i = null), o.child !== null))
                  switch (o.child.tag) {
                    case 5:
                      i = o.child.stateNode;
                      break;
                    case 1:
                      i = o.child.stateNode;
                  }
                sh(o, d, i);
              }
              break;
            case 5:
              var h = o.stateNode;
              if (i === null && o.flags & 4) {
                i = h;
                var g = o.memoizedProps;
                switch (o.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    g.autoFocus && i.focus();
                    break;
                  case 'img':
                    g.src && (i.src = g.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (o.memoizedState === null) {
                var j = o.alternate;
                if (j !== null) {
                  var tt = j.memoizedState;
                  if (tt !== null) {
                    var _e = tt.dehydrated;
                    _e !== null && bd(_e);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p(163));
          }
        U || (o.flags & 512 && Rj(o));
      } catch (et) {
        W(o, o.return, et);
      }
    }
    if (o === e) {
      V = null;
      break;
    }
    if (((i = o.sibling), i !== null)) {
      (i.return = o.return), (V = i);
      break;
    }
    V = o.return;
  }
}
function gk(e) {
  for (; V !== null; ) {
    var o = V;
    if (o === e) {
      V = null;
      break;
    }
    var i = o.sibling;
    if (i !== null) {
      (i.return = o.return), (V = i);
      break;
    }
    V = o.return;
  }
}
function jk(e) {
  for (; V !== null; ) {
    var o = V;
    try {
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          var i = o.return;
          try {
            Qj(4, o);
          } catch (g) {
            W(o, i, g);
          }
          break;
        case 1:
          var s = o.stateNode;
          if (typeof s.componentDidMount == 'function') {
            var a = o.return;
            try {
              s.componentDidMount();
            } catch (g) {
              W(o, a, g);
            }
          }
          var c = o.return;
          try {
            Rj(o);
          } catch (g) {
            W(o, c, g);
          }
          break;
        case 5:
          var d = o.return;
          try {
            Rj(o);
          } catch (g) {
            W(o, d, g);
          }
      }
    } catch (g) {
      W(o, o.return, g);
    }
    if (o === e) {
      V = null;
      break;
    }
    var h = o.sibling;
    if (h !== null) {
      (h.return = o.return), (V = h);
      break;
    }
    V = o.return;
  }
}
var lk = Math.ceil,
  mk = ua.ReactCurrentDispatcher,
  nk = ua.ReactCurrentOwner,
  ok = ua.ReactCurrentBatchConfig,
  K = 0,
  Q = null,
  Y = null,
  Z = 0,
  fj = 0,
  ej = Uf(0),
  T = 0,
  pk = null,
  rh = 0,
  qk = 0,
  rk = 0,
  sk = null,
  tk = null,
  fk = 0,
  Gj = 1 / 0,
  uk = null,
  Oi = !1,
  Pi = null,
  Ri = null,
  vk = !1,
  wk = null,
  xk = 0,
  yk = 0,
  zk = null,
  Ak = -1,
  Bk = 0;
function R() {
  return K & 6 ? B() : Ak !== -1 ? Ak : (Ak = B());
}
function yi(e) {
  return e.mode & 1
    ? K & 2 && Z !== 0
      ? Z & -Z
      : Kg.transition !== null
      ? (Bk === 0 && (Bk = yc()), Bk)
      : ((e = C),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : jd(e.type))),
        e)
    : 1;
}
function gi(e, o, i, s) {
  if (50 < yk) throw ((yk = 0), (zk = null), Error(p(185)));
  Ac(e, i, s),
    (!(K & 2) || e !== Q) &&
      (e === Q && (!(K & 2) && (qk |= i), T === 4 && Ck(e, Z)),
      Dk(e, s),
      i === 1 && K === 0 && !(o.mode & 1) && ((Gj = B() + 500), fg && jg()));
}
function Dk(e, o) {
  var i = e.callbackNode;
  wc(e, o);
  var s = uc(e, e === Q ? Z : 0);
  if (s === 0)
    i !== null && bc(i), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((o = s & -s), e.callbackPriority !== o)) {
    if ((i != null && bc(i), o === 1))
      e.tag === 0 ? ig(Ek.bind(null, e)) : hg(Ek.bind(null, e)),
        Jf(function () {
          !(K & 6) && jg();
        }),
        (i = null);
    else {
      switch (Dc(s)) {
        case 1:
          i = fc;
          break;
        case 4:
          i = gc;
          break;
        case 16:
          i = hc;
          break;
        case 536870912:
          i = jc;
          break;
        default:
          i = hc;
      }
      i = Fk(i, Gk.bind(null, e));
    }
    (e.callbackPriority = o), (e.callbackNode = i);
  }
}
function Gk(e, o) {
  if (((Ak = -1), (Bk = 0), K & 6)) throw Error(p(327));
  var i = e.callbackNode;
  if (Hk() && e.callbackNode !== i) return null;
  var s = uc(e, e === Q ? Z : 0);
  if (s === 0) return null;
  if (s & 30 || s & e.expiredLanes || o) o = Ik(e, s);
  else {
    o = s;
    var a = K;
    K |= 2;
    var c = Jk();
    (Q !== e || Z !== o) && ((uk = null), (Gj = B() + 500), Kk(e, o));
    do
      try {
        Lk();
        break;
      } catch (h) {
        Mk(e, h);
      }
    while (!0);
    $g(),
      (mk.current = c),
      (K = a),
      Y !== null ? (o = 0) : ((Q = null), (Z = 0), (o = T));
  }
  if (o !== 0) {
    if (
      (o === 2 && ((a = xc(e)), a !== 0 && ((s = a), (o = Nk(e, a)))), o === 1)
    )
      throw ((i = pk), Kk(e, 0), Ck(e, s), Dk(e, B()), i);
    if (o === 6) Ck(e, s);
    else {
      if (
        ((a = e.current.alternate),
        !(s & 30) &&
          !Ok(a) &&
          ((o = Ik(e, s)),
          o === 2 && ((c = xc(e)), c !== 0 && ((s = c), (o = Nk(e, c)))),
          o === 1))
      )
        throw ((i = pk), Kk(e, 0), Ck(e, s), Dk(e, B()), i);
      switch (((e.finishedWork = a), (e.finishedLanes = s), o)) {
        case 0:
        case 1:
          throw Error(p(345));
        case 2:
          Pk(e, tk, uk);
          break;
        case 3:
          if (
            (Ck(e, s), (s & 130023424) === s && ((o = fk + 500 - B()), 10 < o))
          ) {
            if (uc(e, 0) !== 0) break;
            if (((a = e.suspendedLanes), (a & s) !== s)) {
              R(), (e.pingedLanes |= e.suspendedLanes & a);
              break;
            }
            e.timeoutHandle = Ff(Pk.bind(null, e, tk, uk), o);
            break;
          }
          Pk(e, tk, uk);
          break;
        case 4:
          if ((Ck(e, s), (s & 4194240) === s)) break;
          for (o = e.eventTimes, a = -1; 0 < s; ) {
            var d = 31 - oc(s);
            (c = 1 << d), (d = o[d]), d > a && (a = d), (s &= ~c);
          }
          if (
            ((s = a),
            (s = B() - s),
            (s =
              (120 > s
                ? 120
                : 480 > s
                ? 480
                : 1080 > s
                ? 1080
                : 1920 > s
                ? 1920
                : 3e3 > s
                ? 3e3
                : 4320 > s
                ? 4320
                : 1960 * lk(s / 1960)) - s),
            10 < s)
          ) {
            e.timeoutHandle = Ff(Pk.bind(null, e, tk, uk), s);
            break;
          }
          Pk(e, tk, uk);
          break;
        case 5:
          Pk(e, tk, uk);
          break;
        default:
          throw Error(p(329));
      }
    }
  }
  return Dk(e, B()), e.callbackNode === i ? Gk.bind(null, e) : null;
}
function Nk(e, o) {
  var i = sk;
  return (
    e.current.memoizedState.isDehydrated && (Kk(e, o).flags |= 256),
    (e = Ik(e, o)),
    e !== 2 && ((o = tk), (tk = i), o !== null && Fj(o)),
    e
  );
}
function Fj(e) {
  tk === null ? (tk = e) : tk.push.apply(tk, e);
}
function Ok(e) {
  for (var o = e; ; ) {
    if (o.flags & 16384) {
      var i = o.updateQueue;
      if (i !== null && ((i = i.stores), i !== null))
        for (var s = 0; s < i.length; s++) {
          var a = i[s],
            c = a.getSnapshot;
          a = a.value;
          try {
            if (!He(c(), a)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((i = o.child), o.subtreeFlags & 16384 && i !== null))
      (i.return = o), (o = i);
    else {
      if (o === e) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === e) return !0;
        o = o.return;
      }
      (o.sibling.return = o.return), (o = o.sibling);
    }
  }
  return !0;
}
function Ck(e, o) {
  for (
    o &= ~rk,
      o &= ~qk,
      e.suspendedLanes |= o,
      e.pingedLanes &= ~o,
      e = e.expirationTimes;
    0 < o;

  ) {
    var i = 31 - oc(o),
      s = 1 << i;
    (e[i] = -1), (o &= ~s);
  }
}
function Ek(e) {
  if (K & 6) throw Error(p(327));
  Hk();
  var o = uc(e, 0);
  if (!(o & 1)) return Dk(e, B()), null;
  var i = Ik(e, o);
  if (e.tag !== 0 && i === 2) {
    var s = xc(e);
    s !== 0 && ((o = s), (i = Nk(e, s)));
  }
  if (i === 1) throw ((i = pk), Kk(e, 0), Ck(e, o), Dk(e, B()), i);
  if (i === 6) throw Error(p(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = o),
    Pk(e, tk, uk),
    Dk(e, B()),
    null
  );
}
function Qk(e, o) {
  var i = K;
  K |= 1;
  try {
    return e(o);
  } finally {
    (K = i), K === 0 && ((Gj = B() + 500), fg && jg());
  }
}
function Rk(e) {
  wk !== null && wk.tag === 0 && !(K & 6) && Hk();
  var o = K;
  K |= 1;
  var i = ok.transition,
    s = C;
  try {
    if (((ok.transition = null), (C = 1), e)) return e();
  } finally {
    (C = s), (ok.transition = i), (K = o), !(K & 6) && jg();
  }
}
function Hj() {
  (fj = ej.current), E(ej);
}
function Kk(e, o) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var i = e.timeoutHandle;
  if ((i !== -1 && ((e.timeoutHandle = -1), Gf(i)), Y !== null))
    for (i = Y.return; i !== null; ) {
      var s = i;
      switch ((wg(s), s.tag)) {
        case 1:
          (s = s.type.childContextTypes), s != null && $f();
          break;
        case 3:
          zh(), E(Wf), E(H), Eh();
          break;
        case 5:
          Bh(s);
          break;
        case 4:
          zh();
          break;
        case 13:
          E(L);
          break;
        case 19:
          E(L);
          break;
        case 10:
          ah(s.type._context);
          break;
        case 22:
        case 23:
          Hj();
      }
      i = i.return;
    }
  if (
    ((Q = e),
    (Y = e = Pg(e.current, null)),
    (Z = fj = o),
    (T = 0),
    (pk = null),
    (rk = qk = rh = 0),
    (tk = sk = null),
    fh !== null)
  ) {
    for (o = 0; o < fh.length; o++)
      if (((i = fh[o]), (s = i.interleaved), s !== null)) {
        i.interleaved = null;
        var a = s.next,
          c = i.pending;
        if (c !== null) {
          var d = c.next;
          (c.next = a), (s.next = d);
        }
        i.pending = s;
      }
    fh = null;
  }
  return e;
}
function Mk(e, o) {
  do {
    var i = Y;
    try {
      if (($g(), (Fh.current = Rh), Ih)) {
        for (var s = M.memoizedState; s !== null; ) {
          var a = s.queue;
          a !== null && (a.pending = null), (s = s.next);
        }
        Ih = !1;
      }
      if (
        ((Hh = 0),
        (O = N = M = null),
        (Jh = !1),
        (Kh = 0),
        (nk.current = null),
        i === null || i.return === null)
      ) {
        (T = 1), (pk = o), (Y = null);
        break;
      }
      e: {
        var c = e,
          d = i.return,
          h = i,
          g = o;
        if (
          ((o = Z),
          (h.flags |= 32768),
          g !== null && typeof g == 'object' && typeof g.then == 'function')
        ) {
          var j = g,
            tt = h,
            _e = tt.tag;
          if (!(tt.mode & 1) && (_e === 0 || _e === 11 || _e === 15)) {
            var et = tt.alternate;
            et
              ? ((tt.updateQueue = et.updateQueue),
                (tt.memoizedState = et.memoizedState),
                (tt.lanes = et.lanes))
              : ((tt.updateQueue = null), (tt.memoizedState = null));
          }
          var ot = Ui(d);
          if (ot !== null) {
            (ot.flags &= -257),
              Vi(ot, d, h, c, o),
              ot.mode & 1 && Si(c, j, o),
              (o = ot),
              (g = j);
            var st = o.updateQueue;
            if (st === null) {
              var ft = new Set();
              ft.add(g), (o.updateQueue = ft);
            } else st.add(g);
            break e;
          } else {
            if (!(o & 1)) {
              Si(c, j, o), tj();
              break e;
            }
            g = Error(p(426));
          }
        } else if (I && h.mode & 1) {
          var Ot = Ui(d);
          if (Ot !== null) {
            !(Ot.flags & 65536) && (Ot.flags |= 256),
              Vi(Ot, d, h, c, o),
              Jg(Ji(g, h));
            break e;
          }
        }
        (c = g = Ji(g, h)),
          T !== 4 && (T = 2),
          sk === null ? (sk = [c]) : sk.push(c),
          (c = d);
        do {
          switch (c.tag) {
            case 3:
              (c.flags |= 65536), (o &= -o), (c.lanes |= o);
              var b = Ni(c, g, o);
              ph(c, b);
              break e;
            case 1:
              h = g;
              var _ = c.type,
                $ = c.stateNode;
              if (
                !(c.flags & 128) &&
                (typeof _.getDerivedStateFromError == 'function' ||
                  ($ !== null &&
                    typeof $.componentDidCatch == 'function' &&
                    (Ri === null || !Ri.has($))))
              ) {
                (c.flags |= 65536), (o &= -o), (c.lanes |= o);
                var ut = Qi(c, h, o);
                ph(c, ut);
                break e;
              }
          }
          c = c.return;
        } while (c !== null);
      }
      Sk(i);
    } catch (at) {
      (o = at), Y === i && i !== null && (Y = i = i.return);
      continue;
    }
    break;
  } while (!0);
}
function Jk() {
  var e = mk.current;
  return (mk.current = Rh), e === null ? Rh : e;
}
function tj() {
  (T === 0 || T === 3 || T === 2) && (T = 4),
    Q === null || (!(rh & 268435455) && !(qk & 268435455)) || Ck(Q, Z);
}
function Ik(e, o) {
  var i = K;
  K |= 2;
  var s = Jk();
  (Q !== e || Z !== o) && ((uk = null), Kk(e, o));
  do
    try {
      Tk();
      break;
    } catch (a) {
      Mk(e, a);
    }
  while (!0);
  if (($g(), (K = i), (mk.current = s), Y !== null)) throw Error(p(261));
  return (Q = null), (Z = 0), T;
}
function Tk() {
  for (; Y !== null; ) Uk(Y);
}
function Lk() {
  for (; Y !== null && !cc(); ) Uk(Y);
}
function Uk(e) {
  var o = Vk(e.alternate, e, fj);
  (e.memoizedProps = e.pendingProps),
    o === null ? Sk(e) : (Y = o),
    (nk.current = null);
}
function Sk(e) {
  var o = e;
  do {
    var i = o.alternate;
    if (((e = o.return), o.flags & 32768)) {
      if (((i = Ij(i, o)), i !== null)) {
        (i.flags &= 32767), (Y = i);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (T = 6), (Y = null);
        return;
      }
    } else if (((i = Ej(i, o, fj)), i !== null)) {
      Y = i;
      return;
    }
    if (((o = o.sibling), o !== null)) {
      Y = o;
      return;
    }
    Y = o = e;
  } while (o !== null);
  T === 0 && (T = 5);
}
function Pk(e, o, i) {
  var s = C,
    a = ok.transition;
  try {
    (ok.transition = null), (C = 1), Wk(e, o, i, s);
  } finally {
    (ok.transition = a), (C = s);
  }
  return null;
}
function Wk(e, o, i, s) {
  do Hk();
  while (wk !== null);
  if (K & 6) throw Error(p(327));
  i = e.finishedWork;
  var a = e.finishedLanes;
  if (i === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), i === e.current))
    throw Error(p(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var c = i.lanes | i.childLanes;
  if (
    (Bc(e, c),
    e === Q && ((Y = Q = null), (Z = 0)),
    (!(i.subtreeFlags & 2064) && !(i.flags & 2064)) ||
      vk ||
      ((vk = !0),
      Fk(hc, function () {
        return Hk(), null;
      })),
    (c = (i.flags & 15990) !== 0),
    i.subtreeFlags & 15990 || c)
  ) {
    (c = ok.transition), (ok.transition = null);
    var d = C;
    C = 1;
    var h = K;
    (K |= 4),
      (nk.current = null),
      Oj(e, i),
      dk(i, e),
      Oe(Df),
      (dd = !!Cf),
      (Df = Cf = null),
      (e.current = i),
      hk(i),
      dc(),
      (K = h),
      (C = d),
      (ok.transition = c);
  } else e.current = i;
  if (
    (vk && ((vk = !1), (wk = e), (xk = a)),
    (c = e.pendingLanes),
    c === 0 && (Ri = null),
    mc(i.stateNode),
    Dk(e, B()),
    o !== null)
  )
    for (s = e.onRecoverableError, i = 0; i < o.length; i++)
      (a = o[i]), s(a.value, { componentStack: a.stack, digest: a.digest });
  if (Oi) throw ((Oi = !1), (e = Pi), (Pi = null), e);
  return (
    xk & 1 && e.tag !== 0 && Hk(),
    (c = e.pendingLanes),
    c & 1 ? (e === zk ? yk++ : ((yk = 0), (zk = e))) : (yk = 0),
    jg(),
    null
  );
}
function Hk() {
  if (wk !== null) {
    var e = Dc(xk),
      o = ok.transition,
      i = C;
    try {
      if (((ok.transition = null), (C = 16 > e ? 16 : e), wk === null))
        var s = !1;
      else {
        if (((e = wk), (wk = null), (xk = 0), K & 6)) throw Error(p(331));
        var a = K;
        for (K |= 4, V = e.current; V !== null; ) {
          var c = V,
            d = c.child;
          if (V.flags & 16) {
            var h = c.deletions;
            if (h !== null) {
              for (var g = 0; g < h.length; g++) {
                var j = h[g];
                for (V = j; V !== null; ) {
                  var tt = V;
                  switch (tt.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(8, tt, c);
                  }
                  var _e = tt.child;
                  if (_e !== null) (_e.return = tt), (V = _e);
                  else
                    for (; V !== null; ) {
                      tt = V;
                      var et = tt.sibling,
                        ot = tt.return;
                      if ((Sj(tt), tt === j)) {
                        V = null;
                        break;
                      }
                      if (et !== null) {
                        (et.return = ot), (V = et);
                        break;
                      }
                      V = ot;
                    }
                }
              }
              var st = c.alternate;
              if (st !== null) {
                var ft = st.child;
                if (ft !== null) {
                  st.child = null;
                  do {
                    var Ot = ft.sibling;
                    (ft.sibling = null), (ft = Ot);
                  } while (ft !== null);
                }
              }
              V = c;
            }
          }
          if (c.subtreeFlags & 2064 && d !== null) (d.return = c), (V = d);
          else
            e: for (; V !== null; ) {
              if (((c = V), c.flags & 2048))
                switch (c.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Pj(9, c, c.return);
                }
              var b = c.sibling;
              if (b !== null) {
                (b.return = c.return), (V = b);
                break e;
              }
              V = c.return;
            }
        }
        var _ = e.current;
        for (V = _; V !== null; ) {
          d = V;
          var $ = d.child;
          if (d.subtreeFlags & 2064 && $ !== null) ($.return = d), (V = $);
          else
            e: for (d = _; V !== null; ) {
              if (((h = V), h.flags & 2048))
                try {
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, h);
                  }
                } catch (at) {
                  W(h, h.return, at);
                }
              if (h === d) {
                V = null;
                break e;
              }
              var ut = h.sibling;
              if (ut !== null) {
                (ut.return = h.return), (V = ut);
                break e;
              }
              V = h.return;
            }
        }
        if (
          ((K = a), jg(), lc && typeof lc.onPostCommitFiberRoot == 'function')
        )
          try {
            lc.onPostCommitFiberRoot(kc, e);
          } catch {}
        s = !0;
      }
      return s;
    } finally {
      (C = i), (ok.transition = o);
    }
  }
  return !1;
}
function Xk(e, o, i) {
  (o = Ji(i, o)),
    (o = Ni(e, o, 1)),
    (e = nh(e, o, 1)),
    (o = R()),
    e !== null && (Ac(e, 1, o), Dk(e, o));
}
function W(e, o, i) {
  if (e.tag === 3) Xk(e, e, i);
  else
    for (; o !== null; ) {
      if (o.tag === 3) {
        Xk(o, e, i);
        break;
      } else if (o.tag === 1) {
        var s = o.stateNode;
        if (
          typeof o.type.getDerivedStateFromError == 'function' ||
          (typeof s.componentDidCatch == 'function' &&
            (Ri === null || !Ri.has(s)))
        ) {
          (e = Ji(i, e)),
            (e = Qi(o, e, 1)),
            (o = nh(o, e, 1)),
            (e = R()),
            o !== null && (Ac(o, 1, e), Dk(o, e));
          break;
        }
      }
      o = o.return;
    }
}
function Ti(e, o, i) {
  var s = e.pingCache;
  s !== null && s.delete(o),
    (o = R()),
    (e.pingedLanes |= e.suspendedLanes & i),
    Q === e &&
      (Z & i) === i &&
      (T === 4 || (T === 3 && (Z & 130023424) === Z && 500 > B() - fk)
        ? Kk(e, 0)
        : (rk |= i)),
    Dk(e, o);
}
function Yk(e, o) {
  o === 0 &&
    (e.mode & 1
      ? ((o = sc), (sc <<= 1), !(sc & 130023424) && (sc = 4194304))
      : (o = 1));
  var i = R();
  (e = ih(e, o)), e !== null && (Ac(e, o, i), Dk(e, i));
}
function uj(e) {
  var o = e.memoizedState,
    i = 0;
  o !== null && (i = o.retryLane), Yk(e, i);
}
function bk(e, o) {
  var i = 0;
  switch (e.tag) {
    case 13:
      var s = e.stateNode,
        a = e.memoizedState;
      a !== null && (i = a.retryLane);
      break;
    case 19:
      s = e.stateNode;
      break;
    default:
      throw Error(p(314));
  }
  s !== null && s.delete(o), Yk(e, i);
}
var Vk;
Vk = function (e, o, i) {
  if (e !== null)
    if (e.memoizedProps !== o.pendingProps || Wf.current) dh = !0;
    else {
      if (!(e.lanes & i) && !(o.flags & 128)) return (dh = !1), yj(e, o, i);
      dh = !!(e.flags & 131072);
    }
  else (dh = !1), I && o.flags & 1048576 && ug(o, ng, o.index);
  switch (((o.lanes = 0), o.tag)) {
    case 2:
      var s = o.type;
      ij(e, o), (e = o.pendingProps);
      var a = Yf(o, H.current);
      ch(o, i), (a = Nh(null, o, s, e, a, i));
      var c = Sh();
      return (
        (o.flags |= 1),
        typeof a == 'object' &&
        a !== null &&
        typeof a.render == 'function' &&
        a.$$typeof === void 0
          ? ((o.tag = 1),
            (o.memoizedState = null),
            (o.updateQueue = null),
            Zf(s) ? ((c = !0), cg(o)) : (c = !1),
            (o.memoizedState =
              a.state !== null && a.state !== void 0 ? a.state : null),
            kh(o),
            (a.updater = Ei),
            (o.stateNode = a),
            (a._reactInternals = o),
            Ii(o, s, e, i),
            (o = jj(null, o, s, !0, c, i)))
          : ((o.tag = 0), I && c && vg(o), Xi(null, o, a, i), (o = o.child)),
        o
      );
    case 16:
      s = o.elementType;
      e: {
        switch (
          (ij(e, o),
          (e = o.pendingProps),
          (a = s._init),
          (s = a(s._payload)),
          (o.type = s),
          (a = o.tag = Zk(s)),
          (e = Ci(s, e)),
          a)
        ) {
          case 0:
            o = cj(null, o, s, e, i);
            break e;
          case 1:
            o = hj(null, o, s, e, i);
            break e;
          case 11:
            o = Yi(null, o, s, e, i);
            break e;
          case 14:
            o = $i(null, o, s, Ci(s.type, e), i);
            break e;
        }
        throw Error(p(306, s, ''));
      }
      return o;
    case 0:
      return (
        (s = o.type),
        (a = o.pendingProps),
        (a = o.elementType === s ? a : Ci(s, a)),
        cj(e, o, s, a, i)
      );
    case 1:
      return (
        (s = o.type),
        (a = o.pendingProps),
        (a = o.elementType === s ? a : Ci(s, a)),
        hj(e, o, s, a, i)
      );
    case 3:
      e: {
        if ((kj(o), e === null)) throw Error(p(387));
        (s = o.pendingProps),
          (c = o.memoizedState),
          (a = c.element),
          lh(e, o),
          qh(o, s, null, i);
        var d = o.memoizedState;
        if (((s = d.element), c.isDehydrated))
          if (
            ((c = {
              element: s,
              isDehydrated: !1,
              cache: d.cache,
              pendingSuspenseBoundaries: d.pendingSuspenseBoundaries,
              transitions: d.transitions,
            }),
            (o.updateQueue.baseState = c),
            (o.memoizedState = c),
            o.flags & 256)
          ) {
            (a = Ji(Error(p(423)), o)), (o = lj(e, o, s, i, a));
            break e;
          } else if (s !== a) {
            (a = Ji(Error(p(424)), o)), (o = lj(e, o, s, i, a));
            break e;
          } else
            for (
              yg = Lf(o.stateNode.containerInfo.firstChild),
                xg = o,
                I = !0,
                zg = null,
                i = Vg(o, null, s, i),
                o.child = i;
              i;

            )
              (i.flags = (i.flags & -3) | 4096), (i = i.sibling);
        else {
          if ((Ig(), s === a)) {
            o = Zi(e, o, i);
            break e;
          }
          Xi(e, o, s, i);
        }
        o = o.child;
      }
      return o;
    case 5:
      return (
        Ah(o),
        e === null && Eg(o),
        (s = o.type),
        (a = o.pendingProps),
        (c = e !== null ? e.memoizedProps : null),
        (d = a.children),
        Ef(s, a) ? (d = null) : c !== null && Ef(s, c) && (o.flags |= 32),
        gj(e, o),
        Xi(e, o, d, i),
        o.child
      );
    case 6:
      return e === null && Eg(o), null;
    case 13:
      return oj(e, o, i);
    case 4:
      return (
        yh(o, o.stateNode.containerInfo),
        (s = o.pendingProps),
        e === null ? (o.child = Ug(o, null, s, i)) : Xi(e, o, s, i),
        o.child
      );
    case 11:
      return (
        (s = o.type),
        (a = o.pendingProps),
        (a = o.elementType === s ? a : Ci(s, a)),
        Yi(e, o, s, a, i)
      );
    case 7:
      return Xi(e, o, o.pendingProps, i), o.child;
    case 8:
      return Xi(e, o, o.pendingProps.children, i), o.child;
    case 12:
      return Xi(e, o, o.pendingProps.children, i), o.child;
    case 10:
      e: {
        if (
          ((s = o.type._context),
          (a = o.pendingProps),
          (c = o.memoizedProps),
          (d = a.value),
          G(Wg, s._currentValue),
          (s._currentValue = d),
          c !== null)
        )
          if (He(c.value, d)) {
            if (c.children === a.children && !Wf.current) {
              o = Zi(e, o, i);
              break e;
            }
          } else
            for (c = o.child, c !== null && (c.return = o); c !== null; ) {
              var h = c.dependencies;
              if (h !== null) {
                d = c.child;
                for (var g = h.firstContext; g !== null; ) {
                  if (g.context === s) {
                    if (c.tag === 1) {
                      (g = mh(-1, i & -i)), (g.tag = 2);
                      var j = c.updateQueue;
                      if (j !== null) {
                        j = j.shared;
                        var tt = j.pending;
                        tt === null
                          ? (g.next = g)
                          : ((g.next = tt.next), (tt.next = g)),
                          (j.pending = g);
                      }
                    }
                    (c.lanes |= i),
                      (g = c.alternate),
                      g !== null && (g.lanes |= i),
                      bh(c.return, i, o),
                      (h.lanes |= i);
                    break;
                  }
                  g = g.next;
                }
              } else if (c.tag === 10) d = c.type === o.type ? null : c.child;
              else if (c.tag === 18) {
                if (((d = c.return), d === null)) throw Error(p(341));
                (d.lanes |= i),
                  (h = d.alternate),
                  h !== null && (h.lanes |= i),
                  bh(d, i, o),
                  (d = c.sibling);
              } else d = c.child;
              if (d !== null) d.return = c;
              else
                for (d = c; d !== null; ) {
                  if (d === o) {
                    d = null;
                    break;
                  }
                  if (((c = d.sibling), c !== null)) {
                    (c.return = d.return), (d = c);
                    break;
                  }
                  d = d.return;
                }
              c = d;
            }
        Xi(e, o, a.children, i), (o = o.child);
      }
      return o;
    case 9:
      return (
        (a = o.type),
        (s = o.pendingProps.children),
        ch(o, i),
        (a = eh(a)),
        (s = s(a)),
        (o.flags |= 1),
        Xi(e, o, s, i),
        o.child
      );
    case 14:
      return (
        (s = o.type),
        (a = Ci(s, o.pendingProps)),
        (a = Ci(s.type, a)),
        $i(e, o, s, a, i)
      );
    case 15:
      return bj(e, o, o.type, o.pendingProps, i);
    case 17:
      return (
        (s = o.type),
        (a = o.pendingProps),
        (a = o.elementType === s ? a : Ci(s, a)),
        ij(e, o),
        (o.tag = 1),
        Zf(s) ? ((e = !0), cg(o)) : (e = !1),
        ch(o, i),
        Gi(o, s, a),
        Ii(o, s, a, i),
        jj(null, o, s, !0, e, i)
      );
    case 19:
      return xj(e, o, i);
    case 22:
      return dj(e, o, i);
  }
  throw Error(p(156, o.tag));
};
function Fk(e, o) {
  return ac(e, o);
}
function $k(e, o, i, s) {
  (this.tag = e),
    (this.key = i),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = o),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = s),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Bg(e, o, i, s) {
  return new $k(e, o, i, s);
}
function aj(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Zk(e) {
  if (typeof e == 'function') return aj(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Da)) return 11;
    if (e === Ga) return 14;
  }
  return 2;
}
function Pg(e, o) {
  var i = e.alternate;
  return (
    i === null
      ? ((i = Bg(e.tag, o, e.key, e.mode)),
        (i.elementType = e.elementType),
        (i.type = e.type),
        (i.stateNode = e.stateNode),
        (i.alternate = e),
        (e.alternate = i))
      : ((i.pendingProps = o),
        (i.type = e.type),
        (i.flags = 0),
        (i.subtreeFlags = 0),
        (i.deletions = null)),
    (i.flags = e.flags & 14680064),
    (i.childLanes = e.childLanes),
    (i.lanes = e.lanes),
    (i.child = e.child),
    (i.memoizedProps = e.memoizedProps),
    (i.memoizedState = e.memoizedState),
    (i.updateQueue = e.updateQueue),
    (o = e.dependencies),
    (i.dependencies =
      o === null ? null : { lanes: o.lanes, firstContext: o.firstContext }),
    (i.sibling = e.sibling),
    (i.index = e.index),
    (i.ref = e.ref),
    i
  );
}
function Rg(e, o, i, s, a, c) {
  var d = 2;
  if (((s = e), typeof e == 'function')) aj(e) && (d = 1);
  else if (typeof e == 'string') d = 5;
  else
    e: switch (e) {
      case ya:
        return Tg(i.children, a, c, o);
      case za:
        (d = 8), (a |= 8);
        break;
      case Aa:
        return (
          (e = Bg(12, i, o, a | 2)), (e.elementType = Aa), (e.lanes = c), e
        );
      case Ea:
        return (e = Bg(13, i, o, a)), (e.elementType = Ea), (e.lanes = c), e;
      case Fa:
        return (e = Bg(19, i, o, a)), (e.elementType = Fa), (e.lanes = c), e;
      case Ia:
        return pj(i, a, c, o);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Ba:
              d = 10;
              break e;
            case Ca:
              d = 9;
              break e;
            case Da:
              d = 11;
              break e;
            case Ga:
              d = 14;
              break e;
            case Ha:
              (d = 16), (s = null);
              break e;
          }
        throw Error(p(130, e == null ? e : typeof e, ''));
    }
  return (
    (o = Bg(d, i, o, a)), (o.elementType = e), (o.type = s), (o.lanes = c), o
  );
}
function Tg(e, o, i, s) {
  return (e = Bg(7, e, s, o)), (e.lanes = i), e;
}
function pj(e, o, i, s) {
  return (
    (e = Bg(22, e, s, o)),
    (e.elementType = Ia),
    (e.lanes = i),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Qg(e, o, i) {
  return (e = Bg(6, e, null, o)), (e.lanes = i), e;
}
function Sg(e, o, i) {
  return (
    (o = Bg(4, e.children !== null ? e.children : [], e.key, o)),
    (o.lanes = i),
    (o.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    o
  );
}
function al(e, o, i, s, a) {
  (this.tag = o),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = zc(0)),
    (this.expirationTimes = zc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = zc(0)),
    (this.identifierPrefix = s),
    (this.onRecoverableError = a),
    (this.mutableSourceEagerHydrationData = null);
}
function bl(e, o, i, s, a, c, d, h, g) {
  return (
    (e = new al(e, o, i, h, g)),
    o === 1 ? ((o = 1), c === !0 && (o |= 8)) : (o = 0),
    (c = Bg(3, null, null, o)),
    (e.current = c),
    (c.stateNode = e),
    (c.memoizedState = {
      element: s,
      isDehydrated: i,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    kh(c),
    e
  );
}
function cl(e, o, i) {
  var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: wa,
    key: s == null ? null : '' + s,
    children: e,
    containerInfo: o,
    implementation: i,
  };
}
function dl(e) {
  if (!e) return Vf;
  e = e._reactInternals;
  e: {
    if (Vb(e) !== e || e.tag !== 1) throw Error(p(170));
    var o = e;
    do {
      switch (o.tag) {
        case 3:
          o = o.stateNode.context;
          break e;
        case 1:
          if (Zf(o.type)) {
            o = o.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      o = o.return;
    } while (o !== null);
    throw Error(p(171));
  }
  if (e.tag === 1) {
    var i = e.type;
    if (Zf(i)) return bg(e, i, o);
  }
  return o;
}
function el(e, o, i, s, a, c, d, h, g) {
  return (
    (e = bl(i, s, !0, e, a, c, d, h, g)),
    (e.context = dl(null)),
    (i = e.current),
    (s = R()),
    (a = yi(i)),
    (c = mh(s, a)),
    (c.callback = o ?? null),
    nh(i, c, a),
    (e.current.lanes = a),
    Ac(e, a, s),
    Dk(e, s),
    e
  );
}
function fl(e, o, i, s) {
  var a = o.current,
    c = R(),
    d = yi(a);
  return (
    (i = dl(i)),
    o.context === null ? (o.context = i) : (o.pendingContext = i),
    (o = mh(c, d)),
    (o.payload = { element: e }),
    (s = s === void 0 ? null : s),
    s !== null && (o.callback = s),
    (e = nh(a, o, d)),
    e !== null && (gi(e, a, d, c), oh(e, a, d)),
    d
  );
}
function gl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function hl(e, o) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var i = e.retryLane;
    e.retryLane = i !== 0 && i < o ? i : o;
  }
}
function il(e, o) {
  hl(e, o), (e = e.alternate) && hl(e, o);
}
function jl() {
  return null;
}
var kl =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function ll(e) {
  this._internalRoot = e;
}
ml.prototype.render = ll.prototype.render = function (e) {
  var o = this._internalRoot;
  if (o === null) throw Error(p(409));
  fl(e, o, null, null);
};
ml.prototype.unmount = ll.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var o = e.containerInfo;
    Rk(function () {
      fl(null, e, null, null);
    }),
      (o[uf] = null);
  }
};
function ml(e) {
  this._internalRoot = e;
}
ml.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var o = Hc();
    e = { blockedOn: null, target: e, priority: o };
    for (var i = 0; i < Qc.length && o !== 0 && o < Qc[i].priority; i++);
    Qc.splice(i, 0, e), i === 0 && Vc(e);
  }
};
function nl(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ol(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function pl() {}
function ql(e, o, i, s, a) {
  if (a) {
    if (typeof s == 'function') {
      var c = s;
      s = function () {
        var j = gl(d);
        c.call(j);
      };
    }
    var d = el(o, s, e, 0, null, !1, !1, '', pl);
    return (
      (e._reactRootContainer = d),
      (e[uf] = d.current),
      sf(e.nodeType === 8 ? e.parentNode : e),
      Rk(),
      d
    );
  }
  for (; (a = e.lastChild); ) e.removeChild(a);
  if (typeof s == 'function') {
    var h = s;
    s = function () {
      var j = gl(g);
      h.call(j);
    };
  }
  var g = bl(e, 0, !1, null, null, !1, !1, '', pl);
  return (
    (e._reactRootContainer = g),
    (e[uf] = g.current),
    sf(e.nodeType === 8 ? e.parentNode : e),
    Rk(function () {
      fl(o, g, i, s);
    }),
    g
  );
}
function rl(e, o, i, s, a) {
  var c = i._reactRootContainer;
  if (c) {
    var d = c;
    if (typeof a == 'function') {
      var h = a;
      a = function () {
        var g = gl(d);
        h.call(g);
      };
    }
    fl(o, d, e, a);
  } else d = ql(i, o, e, a, s);
  return gl(d);
}
Ec = function (e) {
  switch (e.tag) {
    case 3:
      var o = e.stateNode;
      if (o.current.memoizedState.isDehydrated) {
        var i = tc(o.pendingLanes);
        i !== 0 &&
          (Cc(o, i | 1), Dk(o, B()), !(K & 6) && ((Gj = B() + 500), jg()));
      }
      break;
    case 13:
      Rk(function () {
        var s = ih(e, 1);
        if (s !== null) {
          var a = R();
          gi(s, e, 1, a);
        }
      }),
        il(e, 1);
  }
};
Fc = function (e) {
  if (e.tag === 13) {
    var o = ih(e, 134217728);
    if (o !== null) {
      var i = R();
      gi(o, e, 134217728, i);
    }
    il(e, 134217728);
  }
};
Gc = function (e) {
  if (e.tag === 13) {
    var o = yi(e),
      i = ih(e, o);
    if (i !== null) {
      var s = R();
      gi(i, e, o, s);
    }
    il(e, o);
  }
};
Hc = function () {
  return C;
};
Ic = function (e, o) {
  var i = C;
  try {
    return (C = e), o();
  } finally {
    C = i;
  }
};
yb = function (e, o, i) {
  switch (o) {
    case 'input':
      if ((bb(e, i), (o = i.name), i.type === 'radio' && o != null)) {
        for (i = e; i.parentNode; ) i = i.parentNode;
        for (
          i = i.querySelectorAll(
            'input[name=' + JSON.stringify('' + o) + '][type="radio"]'
          ),
            o = 0;
          o < i.length;
          o++
        ) {
          var s = i[o];
          if (s !== e && s.form === e.form) {
            var a = Db(s);
            if (!a) throw Error(p(90));
            Wa(s), bb(s, a);
          }
        }
      }
      break;
    case 'textarea':
      ib(e, i);
      break;
    case 'select':
      (o = i.value), o != null && fb(e, !!i.multiple, o, !1);
  }
};
Gb = Qk;
Hb = Rk;
var sl = { usingClientEntryPoint: !1, Events: [Cb, ue, Db, Eb, Fb, Qk] },
  tl = {
    findFiberByHostInstance: Wc,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  ul = {
    bundleType: tl.bundleType,
    version: tl.version,
    rendererPackageName: tl.rendererPackageName,
    rendererConfig: tl.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ua.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Zb(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: tl.findFiberByHostInstance || jl,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vl.isDisabled && vl.supportsFiber)
    try {
      (kc = vl.inject(ul)), (lc = vl);
    } catch {}
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
reactDom_production_min.createPortal = function (e, o) {
  var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!nl(o)) throw Error(p(200));
  return cl(e, o, null, i);
};
reactDom_production_min.createRoot = function (e, o) {
  if (!nl(e)) throw Error(p(299));
  var i = !1,
    s = '',
    a = kl;
  return (
    o != null &&
      (o.unstable_strictMode === !0 && (i = !0),
      o.identifierPrefix !== void 0 && (s = o.identifierPrefix),
      o.onRecoverableError !== void 0 && (a = o.onRecoverableError)),
    (o = bl(e, 1, !1, null, null, i, !1, s, a)),
    (e[uf] = o.current),
    sf(e.nodeType === 8 ? e.parentNode : e),
    new ll(o)
  );
};
reactDom_production_min.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var o = e._reactInternals;
  if (o === void 0)
    throw typeof e.render == 'function'
      ? Error(p(188))
      : ((e = Object.keys(e).join(',')), Error(p(268, e)));
  return (e = Zb(o)), (e = e === null ? null : e.stateNode), e;
};
reactDom_production_min.flushSync = function (e) {
  return Rk(e);
};
reactDom_production_min.hydrate = function (e, o, i) {
  if (!ol(o)) throw Error(p(200));
  return rl(null, e, o, !0, i);
};
reactDom_production_min.hydrateRoot = function (e, o, i) {
  if (!nl(e)) throw Error(p(405));
  var s = (i != null && i.hydratedSources) || null,
    a = !1,
    c = '',
    d = kl;
  if (
    (i != null &&
      (i.unstable_strictMode === !0 && (a = !0),
      i.identifierPrefix !== void 0 && (c = i.identifierPrefix),
      i.onRecoverableError !== void 0 && (d = i.onRecoverableError)),
    (o = el(o, null, e, 1, i ?? null, a, !1, c, d)),
    (e[uf] = o.current),
    sf(e),
    s)
  )
    for (e = 0; e < s.length; e++)
      (i = s[e]),
        (a = i._getVersion),
        (a = a(i._source)),
        o.mutableSourceEagerHydrationData == null
          ? (o.mutableSourceEagerHydrationData = [i, a])
          : o.mutableSourceEagerHydrationData.push(i, a);
  return new ml(o);
};
reactDom_production_min.render = function (e, o, i) {
  if (!ol(o)) throw Error(p(200));
  return rl(null, e, o, !1, i);
};
reactDom_production_min.unmountComponentAtNode = function (e) {
  if (!ol(e)) throw Error(p(40));
  return e._reactRootContainer
    ? (Rk(function () {
        rl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[uf] = null);
        });
      }),
      !0)
    : !1;
};
reactDom_production_min.unstable_batchedUpdates = Qk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function (
  e,
  o,
  i,
  s
) {
  if (!ol(i)) throw Error(p(200));
  if (e == null || e._reactInternals === void 0) throw Error(p(38));
  return rl(e, o, i, !1, s);
};
reactDom_production_min.version = '18.3.1-next-f1338f8080-20240426';
function checkDCE() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (e) {
      console.error(e);
    }
}
checkDCE(), (reactDom.exports = reactDom_production_min);
var reactDomExports = reactDom.exports,
  m = reactDomExports;
(client.createRoot = m.createRoot), (client.hydrateRoot = m.hydrateRoot);
var build = { exports: {} };
(() => {
  var e = {
      296: (a, c, d) => {
        var h = /^\s+|\s+$/g,
          g = /^[-+]0x[0-9a-f]+$/i,
          j = /^0b[01]+$/i,
          tt = /^0o[0-7]+$/i,
          _e = parseInt,
          et = typeof d.g == 'object' && d.g && d.g.Object === Object && d.g,
          ot =
            typeof self == 'object' && self && self.Object === Object && self,
          st = et || ot || Function('return this')(),
          ft = Object.prototype.toString,
          Ot = Math.max,
          b = Math.min,
          _ = function () {
            return st.Date.now();
          };
        function $(at) {
          var it = typeof at;
          return !!at && (it == 'object' || it == 'function');
        }
        function ut(at) {
          if (typeof at == 'number') return at;
          if (
            (function (lt) {
              return (
                typeof lt == 'symbol' ||
                ((function (bt) {
                  return !!bt && typeof bt == 'object';
                })(lt) &&
                  ft.call(lt) == '[object Symbol]')
              );
            })(at)
          )
            return NaN;
          if ($(at)) {
            var it = typeof at.valueOf == 'function' ? at.valueOf() : at;
            at = $(it) ? it + '' : it;
          }
          if (typeof at != 'string') return at === 0 ? at : +at;
          at = at.replace(h, '');
          var mt = j.test(at);
          return mt || tt.test(at)
            ? _e(at.slice(2), mt ? 2 : 8)
            : g.test(at)
            ? NaN
            : +at;
        }
        a.exports = function (at, it, mt) {
          var lt,
            bt,
            _t,
            yt,
            dt,
            Rt,
            vt = 0,
            Mt = !1,
            At = !1,
            $t = !0;
          if (typeof at != 'function')
            throw new TypeError('Expected a function');
          function xt(Nt) {
            var Tt = lt,
              Bt = bt;
            return (lt = bt = void 0), (vt = Nt), (yt = at.apply(Bt, Tt));
          }
          function Et(Nt) {
            var Tt = Nt - Rt;
            return Rt === void 0 || Tt >= it || Tt < 0 || (At && Nt - vt >= _t);
          }
          function wt() {
            var Nt = _();
            if (Et(Nt)) return Pt(Nt);
            dt = setTimeout(
              wt,
              (function (Tt) {
                var Bt = it - (Tt - Rt);
                return At ? b(Bt, _t - (Tt - vt)) : Bt;
              })(Nt)
            );
          }
          function Pt(Nt) {
            return (dt = void 0), $t && lt ? xt(Nt) : ((lt = bt = void 0), yt);
          }
          function Lt() {
            var Nt = _(),
              Tt = Et(Nt);
            if (((lt = arguments), (bt = this), (Rt = Nt), Tt)) {
              if (dt === void 0)
                return (function (Bt) {
                  return (vt = Bt), (dt = setTimeout(wt, it)), Mt ? xt(Bt) : yt;
                })(Rt);
              if (At) return (dt = setTimeout(wt, it)), xt(Rt);
            }
            return dt === void 0 && (dt = setTimeout(wt, it)), yt;
          }
          return (
            (it = ut(it) || 0),
            $(mt) &&
              ((Mt = !!mt.leading),
              (_t = (At = 'maxWait' in mt) ? Ot(ut(mt.maxWait) || 0, it) : _t),
              ($t = 'trailing' in mt ? !!mt.trailing : $t)),
            (Lt.cancel = function () {
              dt !== void 0 && clearTimeout(dt),
                (vt = 0),
                (lt = Rt = bt = dt = void 0);
            }),
            (Lt.flush = function () {
              return dt === void 0 ? yt : Pt(_());
            }),
            Lt
          );
        };
      },
      96: (a, c, d) => {
        var h = 'Expected a function',
          g = NaN,
          j = '[object Symbol]',
          tt = /^\s+|\s+$/g,
          _e = /^[-+]0x[0-9a-f]+$/i,
          et = /^0b[01]+$/i,
          ot = /^0o[0-7]+$/i,
          st = parseInt,
          ft = typeof d.g == 'object' && d.g && d.g.Object === Object && d.g,
          Ot =
            typeof self == 'object' && self && self.Object === Object && self,
          b = ft || Ot || Function('return this')(),
          _ = Object.prototype.toString,
          $ = Math.max,
          ut = Math.min,
          at = function () {
            return b.Date.now();
          };
        function it(lt) {
          var bt = typeof lt;
          return !!lt && (bt == 'object' || bt == 'function');
        }
        function mt(lt) {
          if (typeof lt == 'number') return lt;
          if (
            (function (yt) {
              return (
                typeof yt == 'symbol' ||
                ((function (dt) {
                  return !!dt && typeof dt == 'object';
                })(yt) &&
                  _.call(yt) == j)
              );
            })(lt)
          )
            return g;
          if (it(lt)) {
            var bt = typeof lt.valueOf == 'function' ? lt.valueOf() : lt;
            lt = it(bt) ? bt + '' : bt;
          }
          if (typeof lt != 'string') return lt === 0 ? lt : +lt;
          lt = lt.replace(tt, '');
          var _t = et.test(lt);
          return _t || ot.test(lt)
            ? st(lt.slice(2), _t ? 2 : 8)
            : _e.test(lt)
            ? g
            : +lt;
        }
        a.exports = function (lt, bt, _t) {
          var yt = !0,
            dt = !0;
          if (typeof lt != 'function') throw new TypeError(h);
          return (
            it(_t) &&
              ((yt = 'leading' in _t ? !!_t.leading : yt),
              (dt = 'trailing' in _t ? !!_t.trailing : dt)),
            (function (Rt, vt, Mt) {
              var At,
                $t,
                xt,
                Et,
                wt,
                Pt,
                Lt = 0,
                Nt = !1,
                Tt = !1,
                Bt = !0;
              if (typeof Rt != 'function') throw new TypeError(h);
              function Gt(Ft) {
                var Qt = At,
                  Dt = $t;
                return (At = $t = void 0), (Lt = Ft), (Et = Rt.apply(Dt, Qt));
              }
              function Vt(Ft) {
                var Qt = Ft - Pt;
                return (
                  Pt === void 0 || Qt >= vt || Qt < 0 || (Tt && Ft - Lt >= xt)
                );
              }
              function Ut() {
                var Ft = at();
                if (Vt(Ft)) return Jt(Ft);
                wt = setTimeout(
                  Ut,
                  (function (Qt) {
                    var Dt = vt - (Qt - Pt);
                    return Tt ? ut(Dt, xt - (Qt - Lt)) : Dt;
                  })(Ft)
                );
              }
              function Jt(Ft) {
                return (
                  (wt = void 0), Bt && At ? Gt(Ft) : ((At = $t = void 0), Et)
                );
              }
              function tn() {
                var Ft = at(),
                  Qt = Vt(Ft);
                if (((At = arguments), ($t = this), (Pt = Ft), Qt)) {
                  if (wt === void 0)
                    return (function (Dt) {
                      return (
                        (Lt = Dt), (wt = setTimeout(Ut, vt)), Nt ? Gt(Dt) : Et
                      );
                    })(Pt);
                  if (Tt) return (wt = setTimeout(Ut, vt)), Gt(Pt);
                }
                return wt === void 0 && (wt = setTimeout(Ut, vt)), Et;
              }
              return (
                (vt = mt(vt) || 0),
                it(Mt) &&
                  ((Nt = !!Mt.leading),
                  (xt = (Tt = 'maxWait' in Mt)
                    ? $(mt(Mt.maxWait) || 0, vt)
                    : xt),
                  (Bt = 'trailing' in Mt ? !!Mt.trailing : Bt)),
                (tn.cancel = function () {
                  wt !== void 0 && clearTimeout(wt),
                    (Lt = 0),
                    (At = Pt = $t = wt = void 0);
                }),
                (tn.flush = function () {
                  return wt === void 0 ? Et : Jt(at());
                }),
                tn
              );
            })(lt, bt, { leading: yt, maxWait: bt, trailing: dt })
          );
        };
      },
      703: (a, c, d) => {
        var h = d(414);
        function g() {}
        function j() {}
        (j.resetWarningCache = g),
          (a.exports = function () {
            function tt(ot, st, ft, Ot, b, _) {
              if (_ !== h) {
                var $ = new Error(
                  'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                );
                throw (($.name = 'Invariant Violation'), $);
              }
            }
            function _e() {
              return tt;
            }
            tt.isRequired = tt;
            var et = {
              array: tt,
              bigint: tt,
              bool: tt,
              func: tt,
              number: tt,
              object: tt,
              string: tt,
              symbol: tt,
              any: tt,
              arrayOf: _e,
              element: tt,
              elementType: tt,
              instanceOf: _e,
              node: tt,
              objectOf: _e,
              oneOf: _e,
              oneOfType: _e,
              shape: _e,
              exact: _e,
              checkPropTypes: j,
              resetWarningCache: g,
            };
            return (et.PropTypes = et), et;
          });
      },
      697: (a, c, d) => {
        a.exports = d(703)();
      },
      414: (a) => {
        a.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
      },
    },
    o = {};
  function i(a) {
    var c = o[a];
    if (c !== void 0) return c.exports;
    var d = (o[a] = { exports: {} });
    return e[a](d, d.exports, i), d.exports;
  }
  (i.n = (a) => {
    var c = a && a.__esModule ? () => a.default : () => a;
    return i.d(c, { a: c }), c;
  }),
    (i.d = (a, c) => {
      for (var d in c)
        i.o(c, d) &&
          !i.o(a, d) &&
          Object.defineProperty(a, d, { enumerable: !0, get: c[d] });
    }),
    (i.g = (function () {
      if (typeof globalThis == 'object') return globalThis;
      try {
        return this || new Function('return this')();
      } catch {
        if (typeof window == 'object') return window;
      }
    })()),
    (i.o = (a, c) => Object.prototype.hasOwnProperty.call(a, c)),
    (i.r = (a) => {
      typeof Symbol < 'u' &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(a, '__esModule', { value: !0 });
    });
  var s = {};
  (() => {
    i.r(s),
      i.d(s, {
        LazyLoadComponent: () => Ht,
        LazyLoadImage: () => vn,
        trackWindowScroll: () => Pt,
      });
    const a = reactExports;
    var c = i.n(a),
      d = i(697);
    const h = reactDomExports;
    var g = i.n(h);
    function j() {
      return (
        typeof window < 'u' &&
        'IntersectionObserver' in window &&
        'isIntersecting' in window.IntersectionObserverEntry.prototype
      );
    }
    function tt(pt) {
      return (
        (tt =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (nt) {
                return typeof nt;
              }
            : function (nt) {
                return nt &&
                  typeof Symbol == 'function' &&
                  nt.constructor === Symbol &&
                  nt !== Symbol.prototype
                  ? 'symbol'
                  : typeof nt;
              }),
        tt(pt)
      );
    }
    function _e(pt, nt) {
      var ht = Object.keys(pt);
      if (Object.getOwnPropertySymbols) {
        var gt = Object.getOwnPropertySymbols(pt);
        nt &&
          (gt = gt.filter(function (Ct) {
            return Object.getOwnPropertyDescriptor(pt, Ct).enumerable;
          })),
          ht.push.apply(ht, gt);
      }
      return ht;
    }
    function et(pt, nt, ht) {
      return (
        (nt = st(nt)) in pt
          ? Object.defineProperty(pt, nt, {
              value: ht,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (pt[nt] = ht),
        pt
      );
    }
    function ot(pt, nt) {
      for (var ht = 0; ht < nt.length; ht++) {
        var gt = nt[ht];
        (gt.enumerable = gt.enumerable || !1),
          (gt.configurable = !0),
          'value' in gt && (gt.writable = !0),
          Object.defineProperty(pt, st(gt.key), gt);
      }
    }
    function st(pt) {
      var nt = (function (ht, gt) {
        if (tt(ht) !== 'object' || ht === null) return ht;
        var Ct = ht[Symbol.toPrimitive];
        if (Ct !== void 0) {
          var zt = Ct.call(ht, 'string');
          if (tt(zt) !== 'object') return zt;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return String(ht);
      })(pt);
      return tt(nt) === 'symbol' ? nt : String(nt);
    }
    function ft(pt, nt) {
      return (
        (ft = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (ht, gt) {
              return (ht.__proto__ = gt), ht;
            }),
        ft(pt, nt)
      );
    }
    function Ot(pt) {
      return (
        (Ot = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (nt) {
              return nt.__proto__ || Object.getPrototypeOf(nt);
            }),
        Ot(pt)
      );
    }
    var b = function (pt) {
        pt.forEach(function (nt) {
          nt.isIntersecting && nt.target.onVisible();
        });
      },
      _ = {},
      $ = (function (pt) {
        (function (rt, ct) {
          if (typeof ct != 'function' && ct !== null)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (rt.prototype = Object.create(ct && ct.prototype, {
            constructor: { value: rt, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(rt, 'prototype', { writable: !1 }),
            ct && ft(rt, ct);
        })(Wt, pt);
        var nt,
          ht,
          gt,
          Ct,
          zt =
            ((gt = Wt),
            (Ct = (function () {
              if (
                typeof Reflect > 'u' ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if (typeof Proxy == 'function') return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch {
                return !1;
              }
            })()),
            function () {
              var rt,
                ct = Ot(gt);
              if (Ct) {
                var St = Ot(this).constructor;
                rt = Reflect.construct(ct, arguments, St);
              } else rt = ct.apply(this, arguments);
              return (function (kt, jt) {
                if (jt && (tt(jt) === 'object' || typeof jt == 'function'))
                  return jt;
                if (jt !== void 0)
                  throw new TypeError(
                    'Derived constructors may only return object or undefined'
                  );
                return (function (It) {
                  if (It === void 0)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return It;
                })(kt);
              })(this, rt);
            });
        function Wt(rt) {
          var ct;
          if (
            ((function (kt, jt) {
              if (!(kt instanceof jt))
                throw new TypeError('Cannot call a class as a function');
            })(this, Wt),
            ((ct = zt.call(this, rt)).supportsObserver =
              !rt.scrollPosition && rt.useIntersectionObserver && j()),
            ct.supportsObserver)
          ) {
            var St = rt.threshold;
            ct.observer = (function (kt) {
              return (
                (_[kt] =
                  _[kt] ||
                  new IntersectionObserver(b, { rootMargin: kt + 'px' })),
                _[kt]
              );
            })(St);
          }
          return ct;
        }
        return (
          (nt = Wt),
          (ht = [
            {
              key: 'componentDidMount',
              value: function () {
                this.placeholder &&
                  this.observer &&
                  ((this.placeholder.onVisible = this.props.onVisible),
                  this.observer.observe(this.placeholder)),
                  this.supportsObserver || this.updateVisibility();
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this.observer &&
                  this.placeholder &&
                  this.observer.unobserve(this.placeholder);
              },
            },
            {
              key: 'componentDidUpdate',
              value: function () {
                this.supportsObserver || this.updateVisibility();
              },
            },
            {
              key: 'getPlaceholderBoundingBox',
              value: function () {
                var rt =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : this.props.scrollPosition,
                  ct = this.placeholder.getBoundingClientRect(),
                  St = g().findDOMNode(this.placeholder).style,
                  kt = parseInt(St.getPropertyValue('margin-left'), 10) || 0,
                  jt = parseInt(St.getPropertyValue('margin-top'), 10) || 0;
                return {
                  bottom: rt.y + ct.bottom + jt,
                  left: rt.x + ct.left + kt,
                  right: rt.x + ct.right + kt,
                  top: rt.y + ct.top + jt,
                };
              },
            },
            {
              key: 'isPlaceholderInViewport',
              value: function () {
                if (typeof window > 'u' || !this.placeholder) return !1;
                var rt = this.props,
                  ct = rt.scrollPosition,
                  St = rt.threshold,
                  kt = this.getPlaceholderBoundingBox(ct),
                  jt = ct.y + window.innerHeight,
                  It = ct.x,
                  Yt = ct.x + window.innerWidth,
                  Xt = ct.y;
                return (
                  Xt - St <= kt.bottom &&
                  jt + St >= kt.top &&
                  It - St <= kt.right &&
                  Yt + St >= kt.left
                );
              },
            },
            {
              key: 'updateVisibility',
              value: function () {
                this.isPlaceholderInViewport() && this.props.onVisible();
              },
            },
            {
              key: 'render',
              value: function () {
                var rt = this,
                  ct = this.props,
                  St = ct.className,
                  kt = ct.height,
                  jt = ct.placeholder,
                  It = ct.style,
                  Yt = ct.width;
                if (jt && typeof jt.type != 'function')
                  return c().cloneElement(jt, {
                    ref: function (Kt) {
                      return (rt.placeholder = Kt);
                    },
                  });
                var Xt = (function (Kt) {
                  for (var en = 1; en < arguments.length; en++) {
                    var qt = arguments[en] != null ? arguments[en] : {};
                    en % 2
                      ? _e(Object(qt), !0).forEach(function (nn) {
                          et(Kt, nn, qt[nn]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          Kt,
                          Object.getOwnPropertyDescriptors(qt)
                        )
                      : _e(Object(qt)).forEach(function (nn) {
                          Object.defineProperty(
                            Kt,
                            nn,
                            Object.getOwnPropertyDescriptor(qt, nn)
                          );
                        });
                  }
                  return Kt;
                })({ display: 'inline-block' }, It);
                return (
                  Yt !== void 0 && (Xt.width = Yt),
                  kt !== void 0 && (Xt.height = kt),
                  c().createElement(
                    'span',
                    {
                      className: St,
                      ref: function (Kt) {
                        return (rt.placeholder = Kt);
                      },
                      style: Xt,
                    },
                    jt
                  )
                );
              },
            },
          ]),
          ht && ot(nt.prototype, ht),
          Object.defineProperty(nt, 'prototype', { writable: !1 }),
          Wt
        );
      })(c().Component);
    ($.propTypes = {
      onVisible: d.PropTypes.func.isRequired,
      className: d.PropTypes.string,
      height: d.PropTypes.oneOfType([d.PropTypes.number, d.PropTypes.string]),
      placeholder: d.PropTypes.element,
      threshold: d.PropTypes.number,
      useIntersectionObserver: d.PropTypes.bool,
      scrollPosition: d.PropTypes.shape({
        x: d.PropTypes.number.isRequired,
        y: d.PropTypes.number.isRequired,
      }),
      width: d.PropTypes.oneOfType([d.PropTypes.number, d.PropTypes.string]),
    }),
      ($.defaultProps = {
        className: '',
        placeholder: null,
        threshold: 100,
        useIntersectionObserver: !0,
      });
    const ut = $;
    var at = i(296),
      it = i.n(at),
      mt = i(96),
      lt = i.n(mt),
      bt = function (pt) {
        var nt = getComputedStyle(pt, null);
        return (
          nt.getPropertyValue('overflow') +
          nt.getPropertyValue('overflow-y') +
          nt.getPropertyValue('overflow-x')
        );
      };
    const _t = function (pt) {
      if (!(pt instanceof HTMLElement)) return window;
      for (var nt = pt; nt && nt instanceof HTMLElement; ) {
        if (/(scroll|auto)/.test(bt(nt))) return nt;
        nt = nt.parentNode;
      }
      return window;
    };
    function yt(pt) {
      return (
        (yt =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (nt) {
                return typeof nt;
              }
            : function (nt) {
                return nt &&
                  typeof Symbol == 'function' &&
                  nt.constructor === Symbol &&
                  nt !== Symbol.prototype
                  ? 'symbol'
                  : typeof nt;
              }),
        yt(pt)
      );
    }
    var dt = ['delayMethod', 'delayTime'];
    function Rt() {
      return (
        (Rt = Object.assign
          ? Object.assign.bind()
          : function (pt) {
              for (var nt = 1; nt < arguments.length; nt++) {
                var ht = arguments[nt];
                for (var gt in ht)
                  Object.prototype.hasOwnProperty.call(ht, gt) &&
                    (pt[gt] = ht[gt]);
              }
              return pt;
            }),
        Rt.apply(this, arguments)
      );
    }
    function vt(pt, nt) {
      for (var ht = 0; ht < nt.length; ht++) {
        var gt = nt[ht];
        (gt.enumerable = gt.enumerable || !1),
          (gt.configurable = !0),
          'value' in gt && (gt.writable = !0),
          Object.defineProperty(
            pt,
            ((Ct = (function (zt, Wt) {
              if (yt(zt) !== 'object' || zt === null) return zt;
              var rt = zt[Symbol.toPrimitive];
              if (rt !== void 0) {
                var ct = rt.call(zt, 'string');
                if (yt(ct) !== 'object') return ct;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return String(zt);
            })(gt.key)),
            yt(Ct) === 'symbol' ? Ct : String(Ct)),
            gt
          );
      }
      var Ct;
    }
    function Mt(pt, nt) {
      return (
        (Mt = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (ht, gt) {
              return (ht.__proto__ = gt), ht;
            }),
        Mt(pt, nt)
      );
    }
    function At(pt, nt) {
      if (nt && (yt(nt) === 'object' || typeof nt == 'function')) return nt;
      if (nt !== void 0)
        throw new TypeError(
          'Derived constructors may only return object or undefined'
        );
      return $t(pt);
    }
    function $t(pt) {
      if (pt === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return pt;
    }
    function xt(pt) {
      return (
        (xt = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (nt) {
              return nt.__proto__ || Object.getPrototypeOf(nt);
            }),
        xt(pt)
      );
    }
    var Et = function () {
        return typeof window > 'u' ? 0 : window.scrollX || window.pageXOffset;
      },
      wt = function () {
        return typeof window > 'u' ? 0 : window.scrollY || window.pageYOffset;
      };
    const Pt = function (pt) {
      var nt = (function (ht) {
        (function (St, kt) {
          if (typeof kt != 'function' && kt !== null)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (St.prototype = Object.create(kt && kt.prototype, {
            constructor: { value: St, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(St, 'prototype', { writable: !1 }),
            kt && Mt(St, kt);
        })(ct, ht);
        var gt,
          Ct,
          zt,
          Wt,
          rt =
            ((zt = ct),
            (Wt = (function () {
              if (
                typeof Reflect > 'u' ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if (typeof Proxy == 'function') return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch {
                return !1;
              }
            })()),
            function () {
              var St,
                kt = xt(zt);
              if (Wt) {
                var jt = xt(this).constructor;
                St = Reflect.construct(kt, arguments, jt);
              } else St = kt.apply(this, arguments);
              return At(this, St);
            });
        function ct(St) {
          var kt;
          if (
            ((function (It, Yt) {
              if (!(It instanceof Yt))
                throw new TypeError('Cannot call a class as a function');
            })(this, ct),
            ((kt = rt.call(this, St)).useIntersectionObserver =
              St.useIntersectionObserver && j()),
            kt.useIntersectionObserver)
          )
            return At(kt);
          var jt = kt.onChangeScroll.bind($t(kt));
          return (
            St.delayMethod === 'debounce'
              ? (kt.delayedScroll = it()(jt, St.delayTime))
              : St.delayMethod === 'throttle' &&
                (kt.delayedScroll = lt()(jt, St.delayTime)),
            (kt.state = { scrollPosition: { x: Et(), y: wt() } }),
            (kt.baseComponentRef = c().createRef()),
            kt
          );
        }
        return (
          (gt = ct),
          (Ct = [
            {
              key: 'componentDidMount',
              value: function () {
                this.addListeners();
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                this.removeListeners();
              },
            },
            {
              key: 'componentDidUpdate',
              value: function () {
                typeof window > 'u' ||
                  this.useIntersectionObserver ||
                  (_t(g().findDOMNode(this.baseComponentRef.current)) !==
                    this.scrollElement &&
                    (this.removeListeners(), this.addListeners()));
              },
            },
            {
              key: 'addListeners',
              value: function () {
                typeof window > 'u' ||
                  this.useIntersectionObserver ||
                  ((this.scrollElement = _t(
                    g().findDOMNode(this.baseComponentRef.current)
                  )),
                  this.scrollElement.addEventListener(
                    'scroll',
                    this.delayedScroll,
                    { passive: !0 }
                  ),
                  window.addEventListener('resize', this.delayedScroll, {
                    passive: !0,
                  }),
                  this.scrollElement !== window &&
                    window.addEventListener('scroll', this.delayedScroll, {
                      passive: !0,
                    }));
              },
            },
            {
              key: 'removeListeners',
              value: function () {
                typeof window > 'u' ||
                  this.useIntersectionObserver ||
                  (this.scrollElement.removeEventListener(
                    'scroll',
                    this.delayedScroll
                  ),
                  window.removeEventListener('resize', this.delayedScroll),
                  this.scrollElement !== window &&
                    window.removeEventListener('scroll', this.delayedScroll));
              },
            },
            {
              key: 'onChangeScroll',
              value: function () {
                this.useIntersectionObserver ||
                  this.setState({ scrollPosition: { x: Et(), y: wt() } });
              },
            },
            {
              key: 'render',
              value: function () {
                var St = this.props,
                  kt =
                    (St.delayMethod,
                    St.delayTime,
                    (function (It, Yt) {
                      if (It == null) return {};
                      var Xt,
                        Kt,
                        en = (function (nn, ln) {
                          if (nn == null) return {};
                          var on,
                            cn,
                            hn = {},
                            xn = Object.keys(nn);
                          for (cn = 0; cn < xn.length; cn++)
                            (on = xn[cn]),
                              ln.indexOf(on) >= 0 || (hn[on] = nn[on]);
                          return hn;
                        })(It, Yt);
                      if (Object.getOwnPropertySymbols) {
                        var qt = Object.getOwnPropertySymbols(It);
                        for (Kt = 0; Kt < qt.length; Kt++)
                          (Xt = qt[Kt]),
                            Yt.indexOf(Xt) >= 0 ||
                              (Object.prototype.propertyIsEnumerable.call(
                                It,
                                Xt
                              ) &&
                                (en[Xt] = It[Xt]));
                      }
                      return en;
                    })(St, dt)),
                  jt = this.useIntersectionObserver
                    ? null
                    : this.state.scrollPosition;
                return c().createElement(
                  pt,
                  Rt(
                    { forwardRef: this.baseComponentRef, scrollPosition: jt },
                    kt
                  )
                );
              },
            },
          ]) && vt(gt.prototype, Ct),
          Object.defineProperty(gt, 'prototype', { writable: !1 }),
          ct
        );
      })(c().Component);
      return (
        (nt.propTypes = {
          delayMethod: d.PropTypes.oneOf(['debounce', 'throttle']),
          delayTime: d.PropTypes.number,
          useIntersectionObserver: d.PropTypes.bool,
        }),
        (nt.defaultProps = {
          delayMethod: 'throttle',
          delayTime: 300,
          useIntersectionObserver: !0,
        }),
        nt
      );
    };
    function Lt(pt) {
      return (
        (Lt =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (nt) {
                return typeof nt;
              }
            : function (nt) {
                return nt &&
                  typeof Symbol == 'function' &&
                  nt.constructor === Symbol &&
                  nt !== Symbol.prototype
                  ? 'symbol'
                  : typeof nt;
              }),
        Lt(pt)
      );
    }
    function Nt(pt, nt) {
      for (var ht = 0; ht < nt.length; ht++) {
        var gt = nt[ht];
        (gt.enumerable = gt.enumerable || !1),
          (gt.configurable = !0),
          'value' in gt && (gt.writable = !0),
          Object.defineProperty(
            pt,
            ((Ct = (function (zt, Wt) {
              if (Lt(zt) !== 'object' || zt === null) return zt;
              var rt = zt[Symbol.toPrimitive];
              if (rt !== void 0) {
                var ct = rt.call(zt, 'string');
                if (Lt(ct) !== 'object') return ct;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return String(zt);
            })(gt.key)),
            Lt(Ct) === 'symbol' ? Ct : String(Ct)),
            gt
          );
      }
      var Ct;
    }
    function Tt(pt, nt) {
      return (
        (Tt = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (ht, gt) {
              return (ht.__proto__ = gt), ht;
            }),
        Tt(pt, nt)
      );
    }
    function Bt(pt) {
      return (
        (Bt = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (nt) {
              return nt.__proto__ || Object.getPrototypeOf(nt);
            }),
        Bt(pt)
      );
    }
    var Gt = (function (pt) {
      (function (rt, ct) {
        if (typeof ct != 'function' && ct !== null)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (rt.prototype = Object.create(ct && ct.prototype, {
          constructor: { value: rt, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(rt, 'prototype', { writable: !1 }),
          ct && Tt(rt, ct);
      })(Wt, pt);
      var nt,
        ht,
        gt,
        Ct,
        zt =
          ((gt = Wt),
          (Ct = (function () {
            if (
              typeof Reflect > 'u' ||
              !Reflect.construct ||
              Reflect.construct.sham
            )
              return !1;
            if (typeof Proxy == 'function') return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch {
              return !1;
            }
          })()),
          function () {
            var rt,
              ct = Bt(gt);
            if (Ct) {
              var St = Bt(this).constructor;
              rt = Reflect.construct(ct, arguments, St);
            } else rt = ct.apply(this, arguments);
            return (function (kt, jt) {
              if (jt && (Lt(jt) === 'object' || typeof jt == 'function'))
                return jt;
              if (jt !== void 0)
                throw new TypeError(
                  'Derived constructors may only return object or undefined'
                );
              return (function (It) {
                if (It === void 0)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return It;
              })(kt);
            })(this, rt);
          });
      function Wt(rt) {
        return (
          (function (ct, St) {
            if (!(ct instanceof St))
              throw new TypeError('Cannot call a class as a function');
          })(this, Wt),
          zt.call(this, rt)
        );
      }
      return (
        (nt = Wt),
        (ht = [
          {
            key: 'render',
            value: function () {
              return c().createElement(ut, this.props);
            },
          },
        ]) && Nt(nt.prototype, ht),
        Object.defineProperty(nt, 'prototype', { writable: !1 }),
        Wt
      );
    })(c().Component);
    const Vt = Pt(Gt);
    function Ut(pt) {
      return (
        (Ut =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (nt) {
                return typeof nt;
              }
            : function (nt) {
                return nt &&
                  typeof Symbol == 'function' &&
                  nt.constructor === Symbol &&
                  nt !== Symbol.prototype
                  ? 'symbol'
                  : typeof nt;
              }),
        Ut(pt)
      );
    }
    function Jt(pt, nt) {
      for (var ht = 0; ht < nt.length; ht++) {
        var gt = nt[ht];
        (gt.enumerable = gt.enumerable || !1),
          (gt.configurable = !0),
          'value' in gt && (gt.writable = !0),
          Object.defineProperty(
            pt,
            ((Ct = (function (zt, Wt) {
              if (Ut(zt) !== 'object' || zt === null) return zt;
              var rt = zt[Symbol.toPrimitive];
              if (rt !== void 0) {
                var ct = rt.call(zt, 'string');
                if (Ut(ct) !== 'object') return ct;
                throw new TypeError(
                  '@@toPrimitive must return a primitive value.'
                );
              }
              return String(zt);
            })(gt.key)),
            Ut(Ct) === 'symbol' ? Ct : String(Ct)),
            gt
          );
      }
      var Ct;
    }
    function tn(pt, nt) {
      return (
        (tn = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (ht, gt) {
              return (ht.__proto__ = gt), ht;
            }),
        tn(pt, nt)
      );
    }
    function Ft(pt) {
      if (pt === void 0)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return pt;
    }
    function Qt(pt) {
      return (
        (Qt = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (nt) {
              return nt.__proto__ || Object.getPrototypeOf(nt);
            }),
        Qt(pt)
      );
    }
    var Dt = (function (pt) {
      (function (rt, ct) {
        if (typeof ct != 'function' && ct !== null)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (rt.prototype = Object.create(ct && ct.prototype, {
          constructor: { value: rt, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(rt, 'prototype', { writable: !1 }),
          ct && tn(rt, ct);
      })(Wt, pt);
      var nt,
        ht,
        gt,
        Ct,
        zt =
          ((gt = Wt),
          (Ct = (function () {
            if (
              typeof Reflect > 'u' ||
              !Reflect.construct ||
              Reflect.construct.sham
            )
              return !1;
            if (typeof Proxy == 'function') return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch {
              return !1;
            }
          })()),
          function () {
            var rt,
              ct = Qt(gt);
            if (Ct) {
              var St = Qt(this).constructor;
              rt = Reflect.construct(ct, arguments, St);
            } else rt = ct.apply(this, arguments);
            return (function (kt, jt) {
              if (jt && (Ut(jt) === 'object' || typeof jt == 'function'))
                return jt;
              if (jt !== void 0)
                throw new TypeError(
                  'Derived constructors may only return object or undefined'
                );
              return Ft(kt);
            })(this, rt);
          });
      function Wt(rt) {
        var ct;
        (function (Yt, Xt) {
          if (!(Yt instanceof Xt))
            throw new TypeError('Cannot call a class as a function');
        })(this, Wt),
          (ct = zt.call(this, rt));
        var St = rt.afterLoad,
          kt = rt.beforeLoad,
          jt = rt.scrollPosition,
          It = rt.visibleByDefault;
        return (
          (ct.state = { visible: It }),
          It && (kt(), St()),
          (ct.onVisible = ct.onVisible.bind(Ft(ct))),
          (ct.isScrollTracked = !!(
            jt &&
            Number.isFinite(jt.x) &&
            jt.x >= 0 &&
            Number.isFinite(jt.y) &&
            jt.y >= 0
          )),
          ct
        );
      }
      return (
        (nt = Wt),
        (ht = [
          {
            key: 'componentDidUpdate',
            value: function (rt, ct) {
              ct.visible !== this.state.visible && this.props.afterLoad();
            },
          },
          {
            key: 'onVisible',
            value: function () {
              this.props.beforeLoad(), this.setState({ visible: !0 });
            },
          },
          {
            key: 'render',
            value: function () {
              if (this.state.visible) return this.props.children;
              var rt = this.props,
                ct = rt.className,
                St = rt.delayMethod,
                kt = rt.delayTime,
                jt = rt.height,
                It = rt.placeholder,
                Yt = rt.scrollPosition,
                Xt = rt.style,
                Kt = rt.threshold,
                en = rt.useIntersectionObserver,
                qt = rt.width;
              return this.isScrollTracked || (en && j())
                ? c().createElement(ut, {
                    className: ct,
                    height: jt,
                    onVisible: this.onVisible,
                    placeholder: It,
                    scrollPosition: Yt,
                    style: Xt,
                    threshold: Kt,
                    useIntersectionObserver: en,
                    width: qt,
                  })
                : c().createElement(Vt, {
                    className: ct,
                    delayMethod: St,
                    delayTime: kt,
                    height: jt,
                    onVisible: this.onVisible,
                    placeholder: It,
                    style: Xt,
                    threshold: Kt,
                    width: qt,
                  });
            },
          },
        ]) && Jt(nt.prototype, ht),
        Object.defineProperty(nt, 'prototype', { writable: !1 }),
        Wt
      );
    })(c().Component);
    (Dt.propTypes = {
      afterLoad: d.PropTypes.func,
      beforeLoad: d.PropTypes.func,
      useIntersectionObserver: d.PropTypes.bool,
      visibleByDefault: d.PropTypes.bool,
    }),
      (Dt.defaultProps = {
        afterLoad: function () {
          return {};
        },
        beforeLoad: function () {
          return {};
        },
        useIntersectionObserver: !0,
        visibleByDefault: !1,
      });
    const Ht = Dt;
    function Zt(pt) {
      return (
        (Zt =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (nt) {
                return typeof nt;
              }
            : function (nt) {
                return nt &&
                  typeof Symbol == 'function' &&
                  nt.constructor === Symbol &&
                  nt !== Symbol.prototype
                  ? 'symbol'
                  : typeof nt;
              }),
        Zt(pt)
      );
    }
    var rn = [
      'afterLoad',
      'beforeLoad',
      'delayMethod',
      'delayTime',
      'effect',
      'placeholder',
      'placeholderSrc',
      'scrollPosition',
      'threshold',
      'useIntersectionObserver',
      'visibleByDefault',
      'wrapperClassName',
      'wrapperProps',
    ];
    function sn(pt, nt) {
      var ht = Object.keys(pt);
      if (Object.getOwnPropertySymbols) {
        var gt = Object.getOwnPropertySymbols(pt);
        nt &&
          (gt = gt.filter(function (Ct) {
            return Object.getOwnPropertyDescriptor(pt, Ct).enumerable;
          })),
          ht.push.apply(ht, gt);
      }
      return ht;
    }
    function pn(pt) {
      for (var nt = 1; nt < arguments.length; nt++) {
        var ht = arguments[nt] != null ? arguments[nt] : {};
        nt % 2
          ? sn(Object(ht), !0).forEach(function (gt) {
              gn(pt, gt, ht[gt]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(pt, Object.getOwnPropertyDescriptors(ht))
          : sn(Object(ht)).forEach(function (gt) {
              Object.defineProperty(
                pt,
                gt,
                Object.getOwnPropertyDescriptor(ht, gt)
              );
            });
      }
      return pt;
    }
    function gn(pt, nt, ht) {
      return (
        (nt = mn(nt)) in pt
          ? Object.defineProperty(pt, nt, {
              value: ht,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (pt[nt] = ht),
        pt
      );
    }
    function an() {
      return (
        (an = Object.assign
          ? Object.assign.bind()
          : function (pt) {
              for (var nt = 1; nt < arguments.length; nt++) {
                var ht = arguments[nt];
                for (var gt in ht)
                  Object.prototype.hasOwnProperty.call(ht, gt) &&
                    (pt[gt] = ht[gt]);
              }
              return pt;
            }),
        an.apply(this, arguments)
      );
    }
    function yn(pt, nt) {
      for (var ht = 0; ht < nt.length; ht++) {
        var gt = nt[ht];
        (gt.enumerable = gt.enumerable || !1),
          (gt.configurable = !0),
          'value' in gt && (gt.writable = !0),
          Object.defineProperty(pt, mn(gt.key), gt);
      }
    }
    function mn(pt) {
      var nt = (function (ht, gt) {
        if (Zt(ht) !== 'object' || ht === null) return ht;
        var Ct = ht[Symbol.toPrimitive];
        if (Ct !== void 0) {
          var zt = Ct.call(ht, 'string');
          if (Zt(zt) !== 'object') return zt;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return String(ht);
      })(pt);
      return Zt(nt) === 'symbol' ? nt : String(nt);
    }
    function fn(pt, nt) {
      return (
        (fn = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (ht, gt) {
              return (ht.__proto__ = gt), ht;
            }),
        fn(pt, nt)
      );
    }
    function un(pt) {
      return (
        (un = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (nt) {
              return nt.__proto__ || Object.getPrototypeOf(nt);
            }),
        un(pt)
      );
    }
    var dn = (function (pt) {
      (function (rt, ct) {
        if (typeof ct != 'function' && ct !== null)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (rt.prototype = Object.create(ct && ct.prototype, {
          constructor: { value: rt, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(rt, 'prototype', { writable: !1 }),
          ct && fn(rt, ct);
      })(Wt, pt);
      var nt,
        ht,
        gt,
        Ct,
        zt =
          ((gt = Wt),
          (Ct = (function () {
            if (
              typeof Reflect > 'u' ||
              !Reflect.construct ||
              Reflect.construct.sham
            )
              return !1;
            if (typeof Proxy == 'function') return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {})
                ),
                !0
              );
            } catch {
              return !1;
            }
          })()),
          function () {
            var rt,
              ct = un(gt);
            if (Ct) {
              var St = un(this).constructor;
              rt = Reflect.construct(ct, arguments, St);
            } else rt = ct.apply(this, arguments);
            return (function (kt, jt) {
              if (jt && (Zt(jt) === 'object' || typeof jt == 'function'))
                return jt;
              if (jt !== void 0)
                throw new TypeError(
                  'Derived constructors may only return object or undefined'
                );
              return (function (It) {
                if (It === void 0)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return It;
              })(kt);
            })(this, rt);
          });
      function Wt(rt) {
        var ct;
        return (
          (function (St, kt) {
            if (!(St instanceof kt))
              throw new TypeError('Cannot call a class as a function');
          })(this, Wt),
          ((ct = zt.call(this, rt)).state = { loaded: !1 }),
          ct
        );
      }
      return (
        (nt = Wt),
        (ht = [
          {
            key: 'onImageLoad',
            value: function () {
              var rt = this;
              return this.state.loaded
                ? null
                : function (ct) {
                    rt.props.onLoad(ct),
                      rt.props.afterLoad(),
                      rt.setState({ loaded: !0 });
                  };
            },
          },
          {
            key: 'getImg',
            value: function () {
              var rt = this.props,
                ct =
                  (rt.afterLoad,
                  rt.beforeLoad,
                  rt.delayMethod,
                  rt.delayTime,
                  rt.effect,
                  rt.placeholder,
                  rt.placeholderSrc,
                  rt.scrollPosition,
                  rt.threshold,
                  rt.useIntersectionObserver,
                  rt.visibleByDefault,
                  rt.wrapperClassName,
                  rt.wrapperProps,
                  (function (St, kt) {
                    if (St == null) return {};
                    var jt,
                      It,
                      Yt = (function (Kt, en) {
                        if (Kt == null) return {};
                        var qt,
                          nn,
                          ln = {},
                          on = Object.keys(Kt);
                        for (nn = 0; nn < on.length; nn++)
                          (qt = on[nn]),
                            en.indexOf(qt) >= 0 || (ln[qt] = Kt[qt]);
                        return ln;
                      })(St, kt);
                    if (Object.getOwnPropertySymbols) {
                      var Xt = Object.getOwnPropertySymbols(St);
                      for (It = 0; It < Xt.length; It++)
                        (jt = Xt[It]),
                          kt.indexOf(jt) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(
                              St,
                              jt
                            ) &&
                              (Yt[jt] = St[jt]));
                    }
                    return Yt;
                  })(rt, rn));
              return c().createElement(
                'img',
                an({}, ct, { onLoad: this.onImageLoad() })
              );
            },
          },
          {
            key: 'getLazyLoadImage',
            value: function () {
              var rt = this.props,
                ct = rt.beforeLoad,
                St = rt.className,
                kt = rt.delayMethod,
                jt = rt.delayTime,
                It = rt.height,
                Yt = rt.placeholder,
                Xt = rt.scrollPosition,
                Kt = rt.style,
                en = rt.threshold,
                qt = rt.useIntersectionObserver,
                nn = rt.visibleByDefault,
                ln = rt.width;
              return c().createElement(
                Ht,
                {
                  beforeLoad: ct,
                  className: St,
                  delayMethod: kt,
                  delayTime: jt,
                  height: It,
                  placeholder: Yt,
                  scrollPosition: Xt,
                  style: Kt,
                  threshold: en,
                  useIntersectionObserver: qt,
                  visibleByDefault: nn,
                  width: ln,
                },
                this.getImg()
              );
            },
          },
          {
            key: 'getWrappedLazyLoadImage',
            value: function (rt) {
              var ct = this.props,
                St = ct.effect,
                kt = ct.height,
                jt = ct.placeholderSrc,
                It = ct.width,
                Yt = ct.wrapperClassName,
                Xt = ct.wrapperProps,
                Kt = this.state.loaded,
                en = Kt ? ' lazy-load-image-loaded' : '',
                qt =
                  Kt || !jt
                    ? {}
                    : {
                        backgroundImage: 'url('.concat(jt, ')'),
                        backgroundSize: '100% 100%',
                      };
              return c().createElement(
                'span',
                an(
                  {
                    className: Yt + ' lazy-load-image-background ' + St + en,
                    style: pn(
                      pn({}, qt),
                      {},
                      {
                        color: 'transparent',
                        display: 'inline-block',
                        height: kt,
                        width: It,
                      }
                    ),
                  },
                  Xt
                ),
                rt
              );
            },
          },
          {
            key: 'render',
            value: function () {
              var rt = this.props,
                ct = rt.effect,
                St = rt.placeholderSrc,
                kt = rt.visibleByDefault,
                jt = rt.wrapperClassName,
                It = rt.wrapperProps,
                Yt = this.getLazyLoadImage();
              return ((ct || St) && !kt) || jt || It
                ? this.getWrappedLazyLoadImage(Yt)
                : Yt;
            },
          },
        ]) && yn(nt.prototype, ht),
        Object.defineProperty(nt, 'prototype', { writable: !1 }),
        Wt
      );
    })(c().Component);
    (dn.propTypes = {
      onLoad: d.PropTypes.func,
      afterLoad: d.PropTypes.func,
      beforeLoad: d.PropTypes.func,
      delayMethod: d.PropTypes.string,
      delayTime: d.PropTypes.number,
      effect: d.PropTypes.string,
      placeholderSrc: d.PropTypes.string,
      threshold: d.PropTypes.number,
      useIntersectionObserver: d.PropTypes.bool,
      visibleByDefault: d.PropTypes.bool,
      wrapperClassName: d.PropTypes.string,
      wrapperProps: d.PropTypes.object,
    }),
      (dn.defaultProps = {
        onLoad: function () {},
        afterLoad: function () {
          return {};
        },
        beforeLoad: function () {
          return {};
        },
        delayMethod: 'throttle',
        delayTime: 300,
        effect: '',
        placeholderSrc: null,
        threshold: 100,
        useIntersectionObserver: !0,
        visibleByDefault: !1,
        wrapperClassName: '',
      });
    const vn = dn;
  })(),
    (build.exports = s);
})();
var buildExports = build.exports;
const ButtonMenu = ({ handleDrawer: e }) => {
    const [o, i] = reactExports.useState(!1);
    return jsxRuntimeExports.jsx('button', {
      id: 'btn-menu',
      className: `rounded-2xl xl:text-8xl xl:h-32 xl:w-96 ml-8 p-2 w-20 lg:h-[80px] lg:w-[204px] bg-gradient-custom text-neutral-50 text-lg lg:text-5xl font-primaryBold border-[3px] border-neutral-50 ${
        o ? 'btn-shadow ' : ''
      }`,
      onMouseEnter: () => i(!0),
      onMouseLeave: () => i(!1),
      onClick: e,
      children: jsxRuntimeExports.jsx('span', {
        className: 'z-10 relative',
        children: 'MENU',
      }),
    });
  },
  SocialMedia = ({ open: e }) => {
    const [o, i] = reactExports.useState(!1),
      [s, a] = reactExports.useState(!1);
    return jsxRuntimeExports.jsx('div', {
      children: jsxRuntimeExports.jsxs('div', {
        className: 'flex justify-center w-full  gap-2 lg:gap-4',
        children: [
          jsxRuntimeExports.jsx('a', {
            href: 'https://x.com/ElonMaxSol',
            className: `flex justify-center  items-center ${
              e === 'drawer' ? 'w-16 h-16' : 'w-12 h-12'
            }  ${
              o ? 'btn-shadow-social' : ''
            } lg:w-16 lg:h-16 xl:rounded-[2rem] xl:border-[5px] rounded-2xl border-[3px] border-neutral-50 bg-social-media-logo-x xl:w-28 xl:h-28 z-[1]`,
            children: jsxRuntimeExports.jsx('button', {
              className:
                'w-full h-full flex items-center justify-center -z[1] relative',
              onMouseEnter: () => i(!0),
              onMouseLeave: () => i(!1),
              children: jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                src: './assets/X.svg',
                alt: 'Logo',
                className: 'w-4 lg:w-6 xl:w-10',
                visibleByDefault: !0,
              }),
            }),
          }),
          jsxRuntimeExports.jsx('a', {
            href: 'https://t.me/ElonMaxSol',
            className: `flex justify-center items-center ${
              e === 'drawer' ? 'w-16 h-16' : 'w-12 h-12'
            } ${
              s ? 'btn-shadow-social' : ''
            }  lg:w-16 lg:h-16 xl:rounded-[2rem] xl:border-[5px] rounded-2xl border-[3px] border-neutral-50 bg-social-media-logo xl:w-28 xl:h-28 z-[1]`,
            children: jsxRuntimeExports.jsx('button', {
              className:
                'w-full h-full flex items-center justify-center -z[1] relative',
              onMouseEnter: () => a(!0),
              onMouseLeave: () => a(!1),
              children: jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                src: './assets/Telegram.svg',
                alt: 'Logo',
                className: 'w-6 lg:w-8 xl:w-10',
                visibleByDefault: !0,
              }),
            }),
          }),
        ],
      }),
    });
  };
var dist = {};
function ___$insertStyle(e) {
  if (typeof window > 'u') return;
  const o = document.createElement('style');
  return (
    o.setAttribute('type', 'text/css'),
    (o.innerHTML = e),
    document.head.appendChild(o),
    e
  );
}
Object.defineProperty(dist, '__esModule', { value: !0 });
var React = reactExports;
function _interopDefaultLegacy(e) {
  return e && typeof e == 'object' && 'default' in e ? e : { default: e };
}
var React__default = _interopDefaultLegacy(React);
___$insertStyle(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);
const Marquee = React.forwardRef(function (
  {
    style: o = {},
    className: i = '',
    autoFill: s = !1,
    play: a = !0,
    pauseOnHover: c = !1,
    pauseOnClick: d = !1,
    direction: h = 'left',
    speed: g = 50,
    delay: j = 0,
    loop: tt = 0,
    gradient: _e = !1,
    gradientColor: et = 'white',
    gradientWidth: ot = 200,
    onFinish: st,
    onCycleComplete: ft,
    onMount: Ot,
    children: b,
  },
  _
) {
  const [$, ut] = React.useState(0),
    [at, it] = React.useState(0),
    [mt, lt] = React.useState(1),
    [bt, _t] = React.useState(!1),
    yt = React.useRef(null),
    dt = _ || yt,
    Rt = React.useRef(null),
    vt = React.useCallback(() => {
      if (Rt.current && dt.current) {
        const Pt = dt.current.getBoundingClientRect(),
          Lt = Rt.current.getBoundingClientRect();
        let Nt = Pt.width,
          Tt = Lt.width;
        (h === 'up' || h === 'down') && ((Nt = Pt.height), (Tt = Lt.height)),
          lt(s && Nt && Tt && Tt < Nt ? Math.ceil(Nt / Tt) : 1),
          ut(Nt),
          it(Tt);
      }
    }, [s, dt, h]);
  React.useEffect(() => {
    if (bt && (vt(), Rt.current && dt.current)) {
      const Pt = new ResizeObserver(() => vt());
      return (
        Pt.observe(dt.current),
        Pt.observe(Rt.current),
        () => {
          Pt && Pt.disconnect();
        }
      );
    }
  }, [vt, dt, bt]),
    React.useEffect(() => {
      vt();
    }, [vt, b]),
    React.useEffect(() => {
      _t(!0);
    }, []),
    React.useEffect(() => {
      typeof Ot == 'function' && Ot();
    }, []);
  const Mt = React.useMemo(
      () => (s ? (at * mt) / g : at < $ ? $ / g : at / g),
      [s, $, at, mt, g]
    ),
    At = React.useMemo(
      () =>
        Object.assign(Object.assign({}, o), {
          '--pause-on-hover': !a || c ? 'paused' : 'running',
          '--pause-on-click': !a || (c && !d) || d ? 'paused' : 'running',
          '--width': h === 'up' || h === 'down' ? '100vh' : '100%',
          '--transform':
            h === 'up'
              ? 'rotate(-90deg)'
              : h === 'down'
              ? 'rotate(90deg)'
              : 'none',
        }),
      [o, a, c, d, h]
    ),
    $t = React.useMemo(
      () => ({
        '--gradient-color': et,
        '--gradient-width': typeof ot == 'number' ? `${ot}px` : ot,
      }),
      [et, ot]
    ),
    xt = React.useMemo(
      () => ({
        '--play': a ? 'running' : 'paused',
        '--direction': h === 'left' ? 'normal' : 'reverse',
        '--duration': `${Mt}s`,
        '--delay': `${j}s`,
        '--iteration-count': tt ? `${tt}` : 'infinite',
        '--min-width': s ? 'auto' : '100%',
      }),
      [a, h, Mt, j, tt, s]
    ),
    Et = React.useMemo(
      () => ({
        '--transform':
          h === 'up'
            ? 'rotate(90deg)'
            : h === 'down'
            ? 'rotate(-90deg)'
            : 'none',
      }),
      [h]
    ),
    wt = React.useCallback(
      (Pt) =>
        [...Array(Number.isFinite(Pt) && Pt >= 0 ? Pt : 0)].map((Lt, Nt) =>
          React__default.default.createElement(
            React.Fragment,
            { key: Nt },
            React.Children.map(b, (Tt) =>
              React__default.default.createElement(
                'div',
                { style: Et, className: 'rfm-child' },
                Tt
              )
            )
          )
        ),
      [Et, b]
    );
  return bt
    ? React__default.default.createElement(
        'div',
        { ref: dt, style: At, className: 'rfm-marquee-container ' + i },
        _e &&
          React__default.default.createElement('div', {
            style: $t,
            className: 'rfm-overlay',
          }),
        React__default.default.createElement(
          'div',
          {
            className: 'rfm-marquee',
            style: xt,
            onAnimationIteration: ft,
            onAnimationEnd: st,
          },
          React__default.default.createElement(
            'div',
            { className: 'rfm-initial-child-container', ref: Rt },
            React.Children.map(b, (Pt) =>
              React__default.default.createElement(
                'div',
                { style: Et, className: 'rfm-child' },
                Pt
              )
            )
          ),
          wt(mt - 1)
        ),
        React__default.default.createElement(
          'div',
          { className: 'rfm-marquee', style: xt },
          wt(mt)
        )
      )
    : null;
});
var _default = (dist.default = Marquee);
const RunningText = () =>
    jsxRuntimeExports.jsxs('div', {
      className:
        'w-full h-14 xl:h-24 relative  xl:left-0 items-center justify-center overflow-hidden z-[2]',
      children: [
        jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
          src: './assets/walking-banner.webp',
          alt: 'Logo',
          className: 'absolute inset-0 w-full h-full object-cover -z-10',
        }),
        jsxRuntimeExports.jsx('div', {
          className: 'mt-2 xl:mt-4',
          children: jsxRuntimeExports.jsxs(_default, {
            speed: 100,
            style: { overflow: 'hidden' },
            children: [
              jsxRuntimeExports.jsx('span', {
                className:
                  'lg:text-[38px] text-4xl font-primaryBold z-10 gradient-text-x mr-4 xl:text-6xl',
                children: 'WELCOME TO ELON MAX!',
              }),
              jsxRuntimeExports.jsx('span', {
                className:
                  'lg:text-[38px] text-4xl font-primaryBold z-10 gradient-text-x mr-4 xl:text-6xl',
                children: 'WELCOME TO ELON MAX!',
              }),
              jsxRuntimeExports.jsx('span', {
                className:
                  'lg:text-[38px] text-4xl font-primaryBold z-10 gradient-text-x mr-4 xl:text-6xl',
                children: 'WELCOME TO ELON MAX!',
              }),
              jsxRuntimeExports.jsx('span', {
                className:
                  'lg:text-[38px] text-4xl font-primaryBold z-10 gradient-text-x mr-4 xl:text-6xl',
                children: 'WELCOME TO ELON MAX!',
              }),
              jsxRuntimeExports.jsx('span', {
                className:
                  'lg:text-[38px] text-4xl font-primaryBold z-10 gradient-text-x mr-4 xl:text-6xl',
                children: 'WELCOME TO ELON MAX!',
              }),
              jsxRuntimeExports.jsx('span', {
                className:
                  'lg:text-[38px] text-4xl font-primaryBold z-10 gradient-text-x mr-4 xl:text-6xl',
                children: 'WELCOME TO ELON MAX!',
              }),
              jsxRuntimeExports.jsx('span', {
                className:
                  'lg:text-[38px] text-4xl font-primaryBold z-10 gradient-text-x mr-4 xl:text-6xl',
                children: 'WELCOME TO ELON MAX!',
              }),
              jsxRuntimeExports.jsx('span', {
                className:
                  'lg:text-[38px] text-4xl font-primaryBold z-10 gradient-text-x mr-4 xl:text-6xl',
                children: 'WELCOME TO ELON MAX!',
              }),
              jsxRuntimeExports.jsx('span', {
                className:
                  'lg:text-[38px] text-4xl font-primaryBold z-10 gradient-text-x mr-4 xl:text-6xl',
                children: 'WELCOME TO ELON MAX!',
              }),
            ],
          }),
        }),
      ],
    }),
  Drawer = ({ show: e, handleCloseDrawer: o, isMobile: i }) =>
    jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
      children: [
        jsxRuntimeExports.jsx('div', {
          className: `drawer h-[100vh] lg:w-full fixed z-30 w-full overflow-hidden bg-white transition-transform duration-100  ease-in-out ${
            e ? 'transform translate-y-0 top-0' : 'transform -translate-y-full '
          }`,
          children: jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
            src: './assets/walking-banner.webp',
            alt: 'How to Get',
            className: 'object-cover splash-bg relative h-full w-full -z-10',
          }),
        }),
        !i &&
          jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [
              jsxRuntimeExports.jsxs('div', {
                className:
                  'flex items-center justify-between px-16 fixed w-full bg-transparent z-50 ',
                children: [
                  jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                    src: './assets/mosk.svg',
                    // src: './assets/logo-white.svg',
                    alt: 'Logo',
                    visibleByDefault: !0,
                    className: 'logoB',
                  }),
                  jsxRuntimeExports.jsxs('div', {
                    className: 'flex mr-16 gap-6 xl:gap-16 ',
                    children: [
                      jsxRuntimeExports.jsx(SocialMedia, {}),
                      jsxRuntimeExports.jsx('button', {
                        className: 'flex',
                        onClick: o,
                        children: jsxRuntimeExports.jsx('div', {
                          className:
                            'flex border-4 border-neutral-50  rounded-full xl:p-8 p-4 bg-[#ff6e77]',
                          children: jsxRuntimeExports.jsx(
                            buildExports.LazyLoadImage,
                            {
                              src: './assets/close-btn.svg',
                              alt: 'Logo',
                              width: 26,
                              height: 26,
                              className: 'object-cover cursor-pointer xl:w-10 ',
                            }
                          ),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs('div', {
                className:
                  'flex fixed w-full gap-12 xl:gap-32 xl:mt-72 z-50 mt-40 xl:pr-[15rem] flex-wrap px-16 cursor-pointer ',
                children: [
                  jsxRuntimeExports.jsx('a', {
                    href: '#price',
                    onClick: o,
                    children: jsxRuntimeExports.jsx('span', {
                      className:
                        ' text-title-gd-1 text-9xl font-primaryBold hover:text-white xl:text-[15rem] ',
                      children: 'PRICE',
                    }),
                  }),
                  jsxRuntimeExports.jsx('a', {
                    href: '#moskonomic',
                    onClick: o,
                    children: jsxRuntimeExports.jsx('span', {
                      className:
                        ' text-title-gd-1 text-9xl font-primaryBold hover:text-white xl:text-[15rem] ',
                      children: 'MAXONOMICS',
                    }),
                  }),
                  jsxRuntimeExports.jsx('a', {
                    href: '#howtoget',
                    onClick: o,
                    children: jsxRuntimeExports.jsx('span', {
                      className:
                        ' text-title-gd-2 text-9xl font-primaryBold hover:text-white xl:text-[15rem]',
                      children: 'HOW TO GET',
                    }),
                  }),
                  jsxRuntimeExports.jsx('a', {
                    href: '#murs',
                    onClick: o,
                    children: jsxRuntimeExports.jsx('span', {
                      className:
                        ' text-title-gd-1 text-9xl font-primaryBold hover:text-white xl:text-[15rem]',
                      children: 'MURS MISHUN',
                    }),
                  }),
                  jsxRuntimeExports.jsx('a', {
                    href: '#meme',
                    onClick: o,
                    children: jsxRuntimeExports.jsx('span', {
                      className:
                        ' text-title-gd-1 text-9xl font-primaryBold hover:text-white xl:text-[15rem]',
                      children: 'MEMES',
                    }),
                  }),
                  jsxRuntimeExports.jsx('a', {
                    href: '#contact',
                    onClick: o,
                    children: jsxRuntimeExports.jsx('span', {
                      className:
                        ' text-title-gd-1 text-9xl font-primaryBold hover:text-white xl:text-[15rem]',
                      children: 'CONTACS',
                    }),
                  }),
                ],
              }),
            ],
          }),
        i &&
          jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [
              ' ',
              jsxRuntimeExports.jsxs('div', {
                className:
                  'flex w-full px-6 justify-between fixed z-50 bg-transparent',
                children: [
                  jsxRuntimeExports.jsxs('div', {
                    className: 'flex w-[10rem] relative items-center ml-1',
                    children: [
                      jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                        src: './assets/mosk-pic.webp',
                        alt: 'Logo',
                        className: 'absolute w-[6rem] -top-2 z-10',
                      }),
                      jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                        src: './assets/mosk.svg',
                        alt: 'Logo',
                        className: 'absolute w-[8rem] left-16',
                      }),
                    ],
                  }),
                  jsxRuntimeExports.jsx('button', {
                    className: 'flex',
                    onClick: o,
                    children: jsxRuntimeExports.jsx('div', {
                      className:
                        'flex border-4 border-neutral-50  rounded-full p-4 bg-[#ff6e77]',
                      children: jsxRuntimeExports.jsx(
                        buildExports.LazyLoadImage,
                        {
                          src: './assets/close-btn.svg',
                          alt: 'Logo',
                          width: 26,
                          height: 26,
                          className: 'object-cover cursor-pointer ',
                        }
                      ),
                    }),
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs('div', {
                className:
                  'flex pb-6 h-[70%] fixed w-full gap-5 z-50 mt-28  flex-wrap px-6 cursor-pointer',
                children: [
                  jsxRuntimeExports.jsx('a', {
                    href: '#price',
                    onClick: o,
                    children: jsxRuntimeExports.jsx('span', {
                      className:
                        ' text-title-gd-1 lg:text-9xl text-6xl font-primaryBold hover:text-white  ',
                      children: 'PRICE',
                    }),
                  }),
                  jsxRuntimeExports.jsx('a', {
                    href: '#moskonomic',
                    onClick: o,
                    children: jsxRuntimeExports.jsx('span', {
                      className:
                        ' text-title-gd-1 lg:text-9xl text-6xl font-primaryBold hover:text-white ',
                      children: 'MAXONOMICS',
                    }),
                  }),
                  jsxRuntimeExports.jsx('a', {
                    href: '#howtoget',
                    onClick: o,
                    children: jsxRuntimeExports.jsx('span', {
                      className:
                        ' text-title-gd-2 lg:text-9xl text-6xl font-primaryBold hover:text-white',
                      children: 'HOW TO GET',
                    }),
                  }),
                  jsxRuntimeExports.jsx('a', {
                    href: '#murs',
                    onClick: o,
                    children: jsxRuntimeExports.jsx('span', {
                      className:
                        ' text-title-gd-1 lg:text-9xl text-6xl font-primaryBold hover:text-white',
                      children: 'MURS MISHUN',
                    }),
                  }),
                  jsxRuntimeExports.jsx('a', {
                    href: '#meme',
                    onClick: o,
                    children: jsxRuntimeExports.jsx('span', {
                      className:
                        ' text-title-gd-1 lg:text-9xl text-6xl font-primaryBold hover:text-white',
                      children: 'MEMES',
                    }),
                  }),
                  jsxRuntimeExports.jsx('a', {
                    href: '#contact',
                    onClick: o,
                    children: jsxRuntimeExports.jsx('span', {
                      className:
                        ' text-title-gd-1 lg:text-9xl text-6xl font-primaryBold hover:text-white',
                      children: 'CONTACS',
                    }),
                  }),
                  jsxRuntimeExports.jsx('div', {
                    className:
                      'flex w-full justify-center bottom-0 mt-6  z-50 ',
                    children: jsxRuntimeExports.jsx(SocialMedia, {
                      open: 'drawer',
                    }),
                  }),
                ],
              }),
            ],
          }),
      ],
    }),
  Header = ({ isMobile: e }) => {
    const [o, i] = reactExports.useState(0),
      [s, a] = reactExports.useState(!1),
      [c, d] = reactExports.useState(!1),
      h = reactExports.useRef(null),
      g = () => {
        i(window.scrollY);
      };
    reactExports.useEffect(
      () => (
        window.addEventListener('scroll', g),
        () => {
          window.removeEventListener('scroll', g);
        }
      ),
      []
    ),
      reactExports.useEffect(() => {
        const _e = e ? 20 : 50;
        h.current &&
          (o > _e
            ? h.current.classList.add('scrolled')
            : h.current.classList.remove('scrolled'));
      }, [o]);
    const j = () => {
        a(!s), d(!c);
      },
      tt = () => {
        a(!1), d(!1);
      };
    return (
      console.log(e),
      jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
        children: e
          ? jsxRuntimeExports.jsxs('div', {
              children: [
                jsxRuntimeExports.jsx(RunningText, {}),
                !c &&
                  jsxRuntimeExports.jsxs('div', {
                    ref: h,
                    className:
                      'flex items-center justify-around mt-6 px-1 fixed w-full bg-transparent z-50 header-container',
                    children: [
                      jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                        src: './assets/logo.webp',
                        alt: 'Logo',
                        width: e ? 84 : 267,
                        height: e ? 38 : 76,
                        className: 'md:mx-72',
                      }),
                      jsxRuntimeExports.jsx(ButtonMenu, { handleDrawer: j }),
                      jsxRuntimeExports.jsx(SocialMedia, { isMobile: e }),
                    ],
                  }),
                s &&
                  jsxRuntimeExports.jsx(Drawer, {
                    isMobile: e,
                    show: s,
                    handleCloseDrawer: tt,
                  }),
              ],
            })
          : jsxRuntimeExports.jsxs('div', {
              children: [
                jsxRuntimeExports.jsx(RunningText, {}),
                !c &&
                  jsxRuntimeExports.jsxs('div', {
                    ref: h,
                    className:
                      'flex items-center xl:left-0 xl:top-16 justify-around mt-12 fixed w-full bg-transparent z-50 header-container',
                    children: [
                      jsxRuntimeExports.jsx(ButtonMenu, { handleDrawer: j }),
                      jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                        src: './assets/logo.webp',
                        alt: 'Logo',
                        width: 267,
                        height: 76,
                        className: 'md:mx-72 xl:w-96',
                      }),
                      jsxRuntimeExports.jsx(SocialMedia, {}),
                    ],
                  }),
                s &&
                  jsxRuntimeExports.jsx(Drawer, {
                    isMobile: e,
                    show: s,
                    handleCloseDrawer: tt,
                  }),
              ],
            }),
      })
    );
  },
  BuyButton = () => {
    const [e, o] = reactExports.useState(!1);
    return jsxRuntimeExports.jsx('div', {
      className:
        'absolute xl:rounded-[2rem]  z-10 top-72 xl:top-[90rem]  lg:top-[750px] button-bg rounded-2xl xl:w-[50%] ',
      children: jsxRuntimeExports.jsx('a', {
        href: 'https://raydium.io/swap/?inputMint=sol&outputMint=MAXgzJZaR31koHo8Gwj84ZfNKDCA3tRtzjySMdKMiHj',
        target: 'blank',
        children: jsxRuntimeExports.jsx('button', {
          className: `bottom-0  xl:rounded-[2rem] xl:border-[10px]   button-continer p-2 px-8 xl:w-full xl:h-56  lg:w-[673px] lg:h-[128px] border-4 border-neutral-50 rounded-2xl z-50 font-primaryBold ${
            e ? 'btn-shadow ' : ''
          }`,
          onMouseEnter: () => o(!0),
          onMouseLeave: () => o(!1),
          children: jsxRuntimeExports.jsx('span', {
            className: 'lg:text-8xl xl:text-[12rem] text-5xl gradient-btn-buy',
            children: 'BUY $MAX',
          }),
        }),
      }),
    });
  },
  Hero = ({ isMobile: e }) =>
    jsxRuntimeExports.jsxs('div', {
      className:
        'flex relative items-center h-[50vh] lg:h-[calc(200vh+100px)] mt-40 lg:mt-24 justify-center z-[2] ',
      children: [
        jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
          src: './assets/hero-bg.png',
          className: 'absolute top-20 lg:top-36 xl:top-72',
          alt: 'Hero',
          width: e ? 450 : '',
          visibleByDefault: !0,
        }),
        jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
          src: './assets/frame-3-img.png',
          className:
            'absolute z-10 top-16 lg:top-32 animate-main-c xl:w-[60rem] xl:top-[40rem]',
          alt: 'Hero',
          width: e ? 250 : '',
          visibleByDefault: !0,
        }),
        jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
          src: './assets/ufo.png',
          className:
            'absolute z-10 -left-6 lg:left-0 top-40 lg:top-56 animate-ufo  xl:w-[60rem]  xl:top-[40rem]',
          alt: 'Hero',
          width: e ? 200 : '',
          visibleByDefault: !0,
        }),
        jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
          src: './assets/rocket.png',
          className:
            'absolute z-10 right-0 top-40 lg:top-56 animate-rocket xl:w-[60rem]  xl:top-[40rem]',
          alt: 'Hero',
          width: e ? 200 : '',
          visibleByDefault: !0,
        }),
        jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
          src: './assets/coin-tesla.png',
          className:
            'absolute top-10 lg:top-28 left-16 lg:left-1/4 xl:w-[16rem]  xl:top-[30rem]',
          alt: 'Hero',
          width: e ? 60 : '',
        }),
        jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
          src: './assets/coin-sol.png',
          className:
            'absolute top-10 lg:top-28 right-16 lg:right-1/4 xl:w-[16rem]  xl:top-[30rem]',
          alt: 'Hero',
          width: e ? 60 : '',
        }),
        jsxRuntimeExports.jsx(BuyButton, {}),
      ],
    }),
  AboutUs = ({ isMobile: e }) =>
    jsxRuntimeExports.jsxs('div', {
      className:
        ' flex justify-center relative  rounded-lg  lg:rounded-3xl w-full h-56 lg:h-[70vh] mt-48 lg:mt-60',
      children: [
        jsxRuntimeExports.jsxs('div', {
          className:
            ' lg:w-[1000px] xl:h-[50rem]  xl:w-[100rem] xl:rounded-[3rem]  w-[350px] h-[170px] lg:h-[420px]  flex items-center justify-center relative  bg-[#113a3a] rounded-xl lg:rounded-3xl',
          children: [
            jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
              src: './assets/border-1.webp',
              alt: 'About',
              className:
                'relative w-full h-full object-cover rounded-3xl xl:rounded-[3rem] ',
            }),
            jsxRuntimeExports.jsx('span', {
              className:
                ' absolute xl:text-6xl  px-6 lg:px-24 text-center lg:text-4xl text-sm font-primaryBold text-white',
              children: `ELON MAX IS THA MOIST RICHEZT BILYUNARE OHN ERTH... SEWN MURS WONT JEST BEE UH PIPEDREEM, BUTT WIL BECUM HOUR REALYTEE. MAX'S BAZED AWN ELON MAX, EKSEPT HEE'S 42069X MOAR RETURDED. GED RETTY FURR UH LUNG JOURNEY FILD WIF SMOAK & DRINX BECUZ "WEN MERKETING" CUMS HEAR TWO DYE.`,
            }),
          ],
        }),
        jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
          src: './assets/border-2.webp',
          alt: 'Logo',
          className:
            'absolute rounded-xl xl:h-[50rem]  xl:w-[100rem] xl:rounded-[3rem] lg:rounded-3xl -z-[1] -translate-y-20 -translate-x-20 lg:-translate-y-36 lg:-translate-x-36 box-child-5',
          width: e ? 350 : 1e3,
          height: e ? 200 : 420,
        }),
        jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
          src: './assets/border-4.webp',
          alt: 'Logo',
          className:
            'absolute rounded-xl xl:h-[50rem]  xl:w-[100rem] xl:rounded-[3rem] lg:rounded-3xl -z-[1] -translate-y-16 -translate-x-16 lg:-translate-y-28 lg:-translate-x-28 box-child-4',
          width: e ? 350 : 1e3,
          height: e ? 200 : 420,
        }),
        jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
          src: './assets/border-3.webp',
          alt: 'Logo',
          className:
            'absolute rounded-xl xl:h-[50rem]  xl:w-[100rem]   xl:rounded-[3rem] lg:rounded-3xl -z-[1] -translate-x-12 -translate-y-12 lg:-translate-y-20 lg:-translate-x-20 box-child-3',
          width: e ? 350 : 1e3,
          height: e ? 200 : 420,
        }),
        jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
          src: './assets/border-2.webp',
          alt: 'Logo',
          className:
            'absolute rounded-xl xl:h-[50rem]  xl:w-[100rem]  xl:rounded-[3rem] lg:rounded-3xl -z-[1] -translate-x-6 -translate-y-6 lg:-translate-y-12  lg:-translate-x-12 box-child-2',
          width: e ? 350 : 1e3,
          height: e ? 200 : 420,
        }),
      ],
    });
var aos = { exports: {} };
(function (e, o) {
  (function (i, s) {
    e.exports = s();
  })(commonjsGlobal$1, function () {
    return (function (i) {
      function s(c) {
        if (a[c]) return a[c].exports;
        var d = (a[c] = { exports: {}, id: c, loaded: !1 });
        return (
          i[c].call(d.exports, d, d.exports, s), (d.loaded = !0), d.exports
        );
      }
      var a = {};
      return (s.m = i), (s.c = a), (s.p = 'dist/'), s(0);
    })([
      function (i, s, a) {
        function c(vt) {
          return vt && vt.__esModule ? vt : { default: vt };
        }
        var d =
            Object.assign ||
            function (vt) {
              for (var Mt = 1; Mt < arguments.length; Mt++) {
                var At = arguments[Mt];
                for (var $t in At)
                  Object.prototype.hasOwnProperty.call(At, $t) &&
                    (vt[$t] = At[$t]);
              }
              return vt;
            },
          h = a(1),
          g = (c(h), a(6)),
          j = c(g),
          tt = a(7),
          _e = c(tt),
          et = a(8),
          ot = c(et),
          st = a(9),
          ft = c(st),
          Ot = a(10),
          b = c(Ot),
          _ = a(11),
          $ = c(_),
          ut = a(14),
          at = c(ut),
          it = [],
          mt = !1,
          lt = {
            offset: 120,
            delay: 0,
            easing: 'ease',
            duration: 400,
            disable: !1,
            once: !1,
            startEvent: 'DOMContentLoaded',
            throttleDelay: 99,
            debounceDelay: 50,
            disableMutationObserver: !1,
          },
          bt = function () {
            var vt =
              arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
            if ((vt && (mt = !0), mt))
              return (
                (it = (0, $.default)(it, lt)), (0, b.default)(it, lt.once), it
              );
          },
          _t = function () {
            (it = (0, at.default)()), bt();
          },
          yt = function () {
            it.forEach(function (vt, Mt) {
              vt.node.removeAttribute('data-aos'),
                vt.node.removeAttribute('data-aos-easing'),
                vt.node.removeAttribute('data-aos-duration'),
                vt.node.removeAttribute('data-aos-delay');
            });
          },
          dt = function (vt) {
            return (
              vt === !0 ||
              (vt === 'mobile' && ft.default.mobile()) ||
              (vt === 'phone' && ft.default.phone()) ||
              (vt === 'tablet' && ft.default.tablet()) ||
              (typeof vt == 'function' && vt() === !0)
            );
          },
          Rt = function (vt) {
            (lt = d(lt, vt)), (it = (0, at.default)());
            var Mt = document.all && !window.atob;
            return dt(lt.disable) || Mt
              ? yt()
              : (lt.disableMutationObserver ||
                  ot.default.isSupported() ||
                  (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
                  (lt.disableMutationObserver = !0)),
                document
                  .querySelector('body')
                  .setAttribute('data-aos-easing', lt.easing),
                document
                  .querySelector('body')
                  .setAttribute('data-aos-duration', lt.duration),
                document
                  .querySelector('body')
                  .setAttribute('data-aos-delay', lt.delay),
                lt.startEvent === 'DOMContentLoaded' &&
                ['complete', 'interactive'].indexOf(document.readyState) > -1
                  ? bt(!0)
                  : lt.startEvent === 'load'
                  ? window.addEventListener(lt.startEvent, function () {
                      bt(!0);
                    })
                  : document.addEventListener(lt.startEvent, function () {
                      bt(!0);
                    }),
                window.addEventListener(
                  'resize',
                  (0, _e.default)(bt, lt.debounceDelay, !0)
                ),
                window.addEventListener(
                  'orientationchange',
                  (0, _e.default)(bt, lt.debounceDelay, !0)
                ),
                window.addEventListener(
                  'scroll',
                  (0, j.default)(function () {
                    (0, b.default)(it, lt.once);
                  }, lt.throttleDelay)
                ),
                lt.disableMutationObserver ||
                  ot.default.ready('[data-aos]', _t),
                it);
          };
        i.exports = { init: Rt, refresh: bt, refreshHard: _t };
      },
      function (i, s) {},
      ,
      ,
      ,
      ,
      function (i, s) {
        (function (a) {
          function c(dt, Rt, vt) {
            function Mt(Ht) {
              var Zt = Tt,
                rn = Bt;
              return (Tt = Bt = void 0), (tn = Ht), (Vt = dt.apply(rn, Zt));
            }
            function At(Ht) {
              return (tn = Ht), (Ut = setTimeout(Et, Rt)), Ft ? Mt(Ht) : Vt;
            }
            function $t(Ht) {
              var Zt = Ht - Jt,
                rn = Ht - tn,
                sn = Rt - Zt;
              return Qt ? _t(sn, Gt - rn) : sn;
            }
            function xt(Ht) {
              var Zt = Ht - Jt,
                rn = Ht - tn;
              return Jt === void 0 || Zt >= Rt || Zt < 0 || (Qt && rn >= Gt);
            }
            function Et() {
              var Ht = yt();
              return xt(Ht) ? wt(Ht) : void (Ut = setTimeout(Et, $t(Ht)));
            }
            function wt(Ht) {
              return (
                (Ut = void 0), Dt && Tt ? Mt(Ht) : ((Tt = Bt = void 0), Vt)
              );
            }
            function Pt() {
              Ut !== void 0 && clearTimeout(Ut),
                (tn = 0),
                (Tt = Jt = Bt = Ut = void 0);
            }
            function Lt() {
              return Ut === void 0 ? Vt : wt(yt());
            }
            function Nt() {
              var Ht = yt(),
                Zt = xt(Ht);
              if (((Tt = arguments), (Bt = this), (Jt = Ht), Zt)) {
                if (Ut === void 0) return At(Jt);
                if (Qt) return (Ut = setTimeout(Et, Rt)), Mt(Jt);
              }
              return Ut === void 0 && (Ut = setTimeout(Et, Rt)), Vt;
            }
            var Tt,
              Bt,
              Gt,
              Vt,
              Ut,
              Jt,
              tn = 0,
              Ft = !1,
              Qt = !1,
              Dt = !0;
            if (typeof dt != 'function') throw new TypeError(et);
            return (
              (Rt = tt(Rt) || 0),
              h(vt) &&
                ((Ft = !!vt.leading),
                (Qt = 'maxWait' in vt),
                (Gt = Qt ? bt(tt(vt.maxWait) || 0, Rt) : Gt),
                (Dt = 'trailing' in vt ? !!vt.trailing : Dt)),
              (Nt.cancel = Pt),
              (Nt.flush = Lt),
              Nt
            );
          }
          function d(dt, Rt, vt) {
            var Mt = !0,
              At = !0;
            if (typeof dt != 'function') throw new TypeError(et);
            return (
              h(vt) &&
                ((Mt = 'leading' in vt ? !!vt.leading : Mt),
                (At = 'trailing' in vt ? !!vt.trailing : At)),
              c(dt, Rt, { leading: Mt, maxWait: Rt, trailing: At })
            );
          }
          function h(dt) {
            var Rt = typeof dt > 'u' ? 'undefined' : _e(dt);
            return !!dt && (Rt == 'object' || Rt == 'function');
          }
          function g(dt) {
            return !!dt && (typeof dt > 'u' ? 'undefined' : _e(dt)) == 'object';
          }
          function j(dt) {
            return (
              (typeof dt > 'u' ? 'undefined' : _e(dt)) == 'symbol' ||
              (g(dt) && lt.call(dt) == st)
            );
          }
          function tt(dt) {
            if (typeof dt == 'number') return dt;
            if (j(dt)) return ot;
            if (h(dt)) {
              var Rt = typeof dt.valueOf == 'function' ? dt.valueOf() : dt;
              dt = h(Rt) ? Rt + '' : Rt;
            }
            if (typeof dt != 'string') return dt === 0 ? dt : +dt;
            dt = dt.replace(ft, '');
            var vt = b.test(dt);
            return vt || _.test(dt)
              ? $(dt.slice(2), vt ? 2 : 8)
              : Ot.test(dt)
              ? ot
              : +dt;
          }
          var _e =
              typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (dt) {
                    return typeof dt;
                  }
                : function (dt) {
                    return dt &&
                      typeof Symbol == 'function' &&
                      dt.constructor === Symbol &&
                      dt !== Symbol.prototype
                      ? 'symbol'
                      : typeof dt;
                  },
            et = 'Expected a function',
            ot = NaN,
            st = '[object Symbol]',
            ft = /^\s+|\s+$/g,
            Ot = /^[-+]0x[0-9a-f]+$/i,
            b = /^0b[01]+$/i,
            _ = /^0o[0-7]+$/i,
            $ = parseInt,
            ut =
              (typeof a > 'u' ? 'undefined' : _e(a)) == 'object' &&
              a &&
              a.Object === Object &&
              a,
            at =
              (typeof self > 'u' ? 'undefined' : _e(self)) == 'object' &&
              self &&
              self.Object === Object &&
              self,
            it = ut || at || Function('return this')(),
            mt = Object.prototype,
            lt = mt.toString,
            bt = Math.max,
            _t = Math.min,
            yt = function () {
              return it.Date.now();
            };
          i.exports = d;
        }).call(
          s,
          (function () {
            return this;
          })()
        );
      },
      function (i, s) {
        (function (a) {
          function c(yt, dt, Rt) {
            function vt(Dt) {
              var Ht = Nt,
                Zt = Tt;
              return (Nt = Tt = void 0), (Jt = Dt), (Gt = yt.apply(Zt, Ht));
            }
            function Mt(Dt) {
              return (Jt = Dt), (Vt = setTimeout(xt, dt)), tn ? vt(Dt) : Gt;
            }
            function At(Dt) {
              var Ht = Dt - Ut,
                Zt = Dt - Jt,
                rn = dt - Ht;
              return Ft ? bt(rn, Bt - Zt) : rn;
            }
            function $t(Dt) {
              var Ht = Dt - Ut,
                Zt = Dt - Jt;
              return Ut === void 0 || Ht >= dt || Ht < 0 || (Ft && Zt >= Bt);
            }
            function xt() {
              var Dt = _t();
              return $t(Dt) ? Et(Dt) : void (Vt = setTimeout(xt, At(Dt)));
            }
            function Et(Dt) {
              return (
                (Vt = void 0), Qt && Nt ? vt(Dt) : ((Nt = Tt = void 0), Gt)
              );
            }
            function wt() {
              Vt !== void 0 && clearTimeout(Vt),
                (Jt = 0),
                (Nt = Ut = Tt = Vt = void 0);
            }
            function Pt() {
              return Vt === void 0 ? Gt : Et(_t());
            }
            function Lt() {
              var Dt = _t(),
                Ht = $t(Dt);
              if (((Nt = arguments), (Tt = this), (Ut = Dt), Ht)) {
                if (Vt === void 0) return Mt(Ut);
                if (Ft) return (Vt = setTimeout(xt, dt)), vt(Ut);
              }
              return Vt === void 0 && (Vt = setTimeout(xt, dt)), Gt;
            }
            var Nt,
              Tt,
              Bt,
              Gt,
              Vt,
              Ut,
              Jt = 0,
              tn = !1,
              Ft = !1,
              Qt = !0;
            if (typeof yt != 'function') throw new TypeError(_e);
            return (
              (dt = j(dt) || 0),
              d(Rt) &&
                ((tn = !!Rt.leading),
                (Ft = 'maxWait' in Rt),
                (Bt = Ft ? lt(j(Rt.maxWait) || 0, dt) : Bt),
                (Qt = 'trailing' in Rt ? !!Rt.trailing : Qt)),
              (Lt.cancel = wt),
              (Lt.flush = Pt),
              Lt
            );
          }
          function d(yt) {
            var dt = typeof yt > 'u' ? 'undefined' : tt(yt);
            return !!yt && (dt == 'object' || dt == 'function');
          }
          function h(yt) {
            return !!yt && (typeof yt > 'u' ? 'undefined' : tt(yt)) == 'object';
          }
          function g(yt) {
            return (
              (typeof yt > 'u' ? 'undefined' : tt(yt)) == 'symbol' ||
              (h(yt) && mt.call(yt) == ot)
            );
          }
          function j(yt) {
            if (typeof yt == 'number') return yt;
            if (g(yt)) return et;
            if (d(yt)) {
              var dt = typeof yt.valueOf == 'function' ? yt.valueOf() : yt;
              yt = d(dt) ? dt + '' : dt;
            }
            if (typeof yt != 'string') return yt === 0 ? yt : +yt;
            yt = yt.replace(st, '');
            var Rt = Ot.test(yt);
            return Rt || b.test(yt)
              ? _(yt.slice(2), Rt ? 2 : 8)
              : ft.test(yt)
              ? et
              : +yt;
          }
          var tt =
              typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                ? function (yt) {
                    return typeof yt;
                  }
                : function (yt) {
                    return yt &&
                      typeof Symbol == 'function' &&
                      yt.constructor === Symbol &&
                      yt !== Symbol.prototype
                      ? 'symbol'
                      : typeof yt;
                  },
            _e = 'Expected a function',
            et = NaN,
            ot = '[object Symbol]',
            st = /^\s+|\s+$/g,
            ft = /^[-+]0x[0-9a-f]+$/i,
            Ot = /^0b[01]+$/i,
            b = /^0o[0-7]+$/i,
            _ = parseInt,
            $ =
              (typeof a > 'u' ? 'undefined' : tt(a)) == 'object' &&
              a &&
              a.Object === Object &&
              a,
            ut =
              (typeof self > 'u' ? 'undefined' : tt(self)) == 'object' &&
              self &&
              self.Object === Object &&
              self,
            at = $ || ut || Function('return this')(),
            it = Object.prototype,
            mt = it.toString,
            lt = Math.max,
            bt = Math.min,
            _t = function () {
              return at.Date.now();
            };
          i.exports = c;
        }).call(
          s,
          (function () {
            return this;
          })()
        );
      },
      function (i, s) {
        function a(tt) {
          var _e = void 0,
            et = void 0;
          for (_e = 0; _e < tt.length; _e += 1)
            if (
              ((et = tt[_e]),
              (et.dataset && et.dataset.aos) || (et.children && a(et.children)))
            )
              return !0;
          return !1;
        }
        function c() {
          return (
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver
          );
        }
        function d() {
          return !!c();
        }
        function h(tt, _e) {
          var et = window.document,
            ot = c(),
            st = new ot(g);
          (j = _e),
            st.observe(et.documentElement, {
              childList: !0,
              subtree: !0,
              removedNodes: !0,
            });
        }
        function g(tt) {
          tt &&
            tt.forEach(function (_e) {
              var et = Array.prototype.slice.call(_e.addedNodes),
                ot = Array.prototype.slice.call(_e.removedNodes),
                st = et.concat(ot);
              if (a(st)) return j();
            });
        }
        Object.defineProperty(s, '__esModule', { value: !0 });
        var j = function () {};
        s.default = { isSupported: d, ready: h };
      },
      function (i, s) {
        function a(et, ot) {
          if (!(et instanceof ot))
            throw new TypeError('Cannot call a class as a function');
        }
        function c() {
          return navigator.userAgent || navigator.vendor || window.opera || '';
        }
        Object.defineProperty(s, '__esModule', { value: !0 });
        var d = (function () {
            function et(ot, st) {
              for (var ft = 0; ft < st.length; ft++) {
                var Ot = st[ft];
                (Ot.enumerable = Ot.enumerable || !1),
                  (Ot.configurable = !0),
                  'value' in Ot && (Ot.writable = !0),
                  Object.defineProperty(ot, Ot.key, Ot);
              }
            }
            return function (ot, st, ft) {
              return st && et(ot.prototype, st), ft && et(ot, ft), ot;
            };
          })(),
          h =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          g =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          j =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
          tt =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          _e = (function () {
            function et() {
              a(this, et);
            }
            return (
              d(et, [
                {
                  key: 'phone',
                  value: function () {
                    var ot = c();
                    return !(!h.test(ot) && !g.test(ot.substr(0, 4)));
                  },
                },
                {
                  key: 'mobile',
                  value: function () {
                    var ot = c();
                    return !(!j.test(ot) && !tt.test(ot.substr(0, 4)));
                  },
                },
                {
                  key: 'tablet',
                  value: function () {
                    return this.mobile() && !this.phone();
                  },
                },
              ]),
              et
            );
          })();
        s.default = new _e();
      },
      function (i, s) {
        Object.defineProperty(s, '__esModule', { value: !0 });
        var a = function (d, h, g) {
            var j = d.node.getAttribute('data-aos-once');
            h > d.position
              ? d.node.classList.add('aos-animate')
              : typeof j < 'u' &&
                (j === 'false' || (!g && j !== 'true')) &&
                d.node.classList.remove('aos-animate');
          },
          c = function (d, h) {
            var g = window.pageYOffset,
              j = window.innerHeight;
            d.forEach(function (tt, _e) {
              a(tt, j + g, h);
            });
          };
        s.default = c;
      },
      function (i, s, a) {
        function c(j) {
          return j && j.__esModule ? j : { default: j };
        }
        Object.defineProperty(s, '__esModule', { value: !0 });
        var d = a(12),
          h = c(d),
          g = function (j, tt) {
            return (
              j.forEach(function (_e, et) {
                _e.node.classList.add('aos-init'),
                  (_e.position = (0, h.default)(_e.node, tt.offset));
              }),
              j
            );
          };
        s.default = g;
      },
      function (i, s, a) {
        function c(j) {
          return j && j.__esModule ? j : { default: j };
        }
        Object.defineProperty(s, '__esModule', { value: !0 });
        var d = a(13),
          h = c(d),
          g = function (j, tt) {
            var _e = 0,
              et = 0,
              ot = window.innerHeight,
              st = {
                offset: j.getAttribute('data-aos-offset'),
                anchor: j.getAttribute('data-aos-anchor'),
                anchorPlacement: j.getAttribute('data-aos-anchor-placement'),
              };
            switch (
              (st.offset && !isNaN(st.offset) && (et = parseInt(st.offset)),
              st.anchor &&
                document.querySelectorAll(st.anchor) &&
                (j = document.querySelectorAll(st.anchor)[0]),
              (_e = (0, h.default)(j).top),
              st.anchorPlacement)
            ) {
              case 'top-bottom':
                break;
              case 'center-bottom':
                _e += j.offsetHeight / 2;
                break;
              case 'bottom-bottom':
                _e += j.offsetHeight;
                break;
              case 'top-center':
                _e += ot / 2;
                break;
              case 'bottom-center':
                _e += ot / 2 + j.offsetHeight;
                break;
              case 'center-center':
                _e += ot / 2 + j.offsetHeight / 2;
                break;
              case 'top-top':
                _e += ot;
                break;
              case 'bottom-top':
                _e += j.offsetHeight + ot;
                break;
              case 'center-top':
                _e += j.offsetHeight / 2 + ot;
            }
            return (
              st.anchorPlacement || st.offset || isNaN(tt) || (et = tt), _e + et
            );
          };
        s.default = g;
      },
      function (i, s) {
        Object.defineProperty(s, '__esModule', { value: !0 });
        var a = function (c) {
          for (
            var d = 0, h = 0;
            c && !isNaN(c.offsetLeft) && !isNaN(c.offsetTop);

          )
            (d += c.offsetLeft - (c.tagName != 'BODY' ? c.scrollLeft : 0)),
              (h += c.offsetTop - (c.tagName != 'BODY' ? c.scrollTop : 0)),
              (c = c.offsetParent);
          return { top: h, left: d };
        };
        s.default = a;
      },
      function (i, s) {
        Object.defineProperty(s, '__esModule', { value: !0 });
        var a = function (c) {
          return (
            (c = c || document.querySelectorAll('[data-aos]')),
            Array.prototype.map.call(c, function (d) {
              return { node: d };
            })
          );
        };
        s.default = a;
      },
    ]);
  });
})(aos);
var aosExports = aos.exports;
const Aos = getDefaultExportFromCjs(aosExports),
  About = ({ isMobile: e }) => {
    const [o, i] = reactExports.useState(!1);
    reactExports.useEffect(() => {
      Aos.init({ duration: 2e3 });
    }, []);
    const s = () => {
      navigator.clipboard
        .writeText('MAXgzJZaR31koHo8Gwj84ZfNKDCA3tRtzjySMdKMiHj')
        .then(() => {
          i(!0),
            setTimeout(() => {
              i(!1);
            }, 1e3);
        })
        .catch((c) => {
          console.error('Failed to copy text to clipboard:', c);
        });
    };
    return jsxRuntimeExports.jsxs('div', {
      className:
        ' w-full relative lg:h-[150vh] xl:h-auto overflow-hidden lg:-top-56 z-[2] ',
      children: [
        jsxRuntimeExports.jsx(AboutUs, { isMobile: e }),
        jsxRuntimeExports.jsxs('div', {
          className: 'flex relative w-full hover:shake',
          'data-aos': 'fade-left',
          children: [
            jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
              src: './assets/contract-rocket.webp',
              alt: 'Logo',
              width: 1e3,
              height: 420,
              className:
                'relative rounded-3xl xl:w-[150rem] left-1/2 transform -translate-x-1/2 lg:translate-y-[10%] z-0 ',
            }),
            jsxRuntimeExports.jsxs('button', {
              id: 'price',
              className:
                'absolute flex items-center gap-2 lg:gap-4  xl:gap-10 justify-betweenx font-primaryBold text-neutral-50 xl:text-8xl lg:text-[40px] top-[50%] lg:top-[60%] left-1/2 -rotate-2 transform -translate-x-[30%] -translate-y-[60%] z-10 cursor-pointer bg-transparent border-none',
              onClick: s,
              children: [
                'CONTRACT: MAX...KMiHj',
                jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                  src: './assets/copy-img.svg',
                  alt: 'Logo',
                  className: 'w-[0.7rem] lg:w-[1.5rem] xl:w-16',
                  visibleByDefault: !0,
                }),
              ],
            }),
            o &&
              jsxRuntimeExports.jsx('div', {
                className:
                  'absolute bottom-[10%] left-1/2 transform -translate-x-1/2 z-10 bg-white xl:text-4xl rounded-lg py-2 px-4 shadow-md',
                children: 'Contract copied',
              }),
          ],
        }),
      ],
    });
  },
  Price = ({ isMobile: e }) => {
    const [o, i] = reactExports.useState(0),
      [s, a] = reactExports.useState(173.72),
      [c, d] = reactExports.useState(0),
      [h, g] = reactExports.useState('0H 0M 0S'),
      j = (tt) => {
        const _e = new Date(),
          et = new Date(tt),
          ot = _e - et,
          st = Math.floor(ot / 1e3),
          ft = Math.floor(st / (3600 * 24)),
          Ot = Math.floor((st % (3600 * 24)) / 3600),
          b = Math.floor((st % 3600) / 60),
          _ = st % 60,
          $ = `${Ot}H ${b}M ${_}S`;
        d(ft), g($);
      };
    return (
      reactExports.useEffect(() => {
        j('April 25, 2024 15:46:16 UTC');
        const tt = setInterval(() => j('April 25, 2024 15:46:16 UTC'), 1e3);
        return () => clearInterval(tt);
      }, []),
      reactExports.useEffect(() => {
        (async () => {
          try {
            const et = await (
              await fetch(
                'https://eodhd.com/api/real-time/TSLA.US?api_token=6644591659eb69.66889136&fmt=json',
                { method: 'GET' }
              )
            ).json();
            a(et == null ? void 0 : et.open);
          } catch (_e) {
            console.error('Error fetching data:', _e);
          }
        })();
      }, []),
      reactExports.useEffect(() => {
        (async () => {
          try {
            const et = await (
              await fetch(
                'https://openapi.dexview.com/latest/dex/pairs/solana/HVWxvXbCB9M2ttASv7FLGbZS4PQQeAn4N2fcpYKauQWV',
                { method: 'GET' }
              )
            ).json();
            i(et == null ? void 0 : et.pair.priceUsd.toFixed(3));
          } catch (_e) {
            console.error('Error fetching data:', _e);
          }
        })();
      }, []),
      jsxRuntimeExports.jsxs('div', {
        className:
          'relative w-full h-[50vh] lg:h-[130vh] top-24 lg:-top-36 z-10 ',
        children: [
          jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
            src: './assets/television.webp',
            alt: 'Logo',
            width: 1284,
            height: 1284,
            visibleByDefault: !0,
            className:
              'relative xl:w-[130rem] rounded-3xl left-1/2 transform -translate-x-1/2 -translate-y-[6rem] -z-10 ',
          }),
          jsxRuntimeExports.jsxs('div', {
            className: ` w-[240px] h-[120px] xl:w-[79rem] xl:h-[39rem] xl:top-[0rem] xl:left-[58.5rem] xl:border-8 xl:-translate-y-[126rem]\r
       bg-neutral-50 border-4 lg:border-4 rounded-md xl:rounded-3xl border-neutral-50 \r
       lg:w-[775px] left-[1.7rem] -translate-y-[29rem] lg:h-[370px] relative \r
       overflow-hidden lg:left-1/2 transform top-0 lg:-translate-x-[34.5em]  lg:-translate-y-[80rem] z-0`,
            children: [
              jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                src: './assets/tv-bg.webp',
                alt: 'Logo',
                className: 'absolute -z-10 w-full animate-bg-tv  ',
              }),
              jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                src: './assets/tv-corner.svg',
                alt: 'Logo',
                className: 'absolute -z-10 top-2 left-2 xl:w-[10rem]',
                width: e ? 50 : '',
              }),
              jsxRuntimeExports.jsx('div', {
                className:
                  'absolute  left-2 lg:left-0 flex flex-col items-center w-[100%] h-full top-0 z-10',
                children: jsxRuntimeExports.jsx('span', {
                  className:
                    'lg:text-[42px] font-primaryBold tv-title xl:text-5xl normal-case',
                  children: 'Realtime Price :',
                }),
              }),
              jsxRuntimeExports.jsxs('div', {
                className:
                  'absolute left-2 lg:left-0 flex justify-center items-center w-[100%] top-4 mt-2 lg:top-16 z-10',
                children: [
                  jsxRuntimeExports.jsxs('span', {
                    className:
                      'lg:text-[58px] font-primaryBold tv-title xl:text-9xl xl:mt-16',
                    children: ['$MAX: ', '0.01', '$'], //Было 0
                  }),
                  jsxRuntimeExports.jsx('span', {
                    className:
                      'lg:text-[58px] font-primaryBold text-white tv-gap xl:text-9xl',
                    children: '||',
                  }),
                  jsxRuntimeExports.jsxs('span', {
                    className:
                      'lg:text-[58px] font-primaryBold tv-title-2 xl:text-9xl',
                    children: ['TESLA: ', s, '$'],
                  }),
                ],
              }),
              jsxRuntimeExports.jsxs('div', {
                className:
                  'absolute left-2 lg:left-0 flex flex-col lg:pb-2 items-center justify-end w-[100%] bottom-0 z-10',
                children: [
                  jsxRuntimeExports.jsxs('span', {
                    className:
                      'lg:text-[40px] text-[14px] font-primaryBold btn-number xl:text-7xl xl:mt-6',
                    children: [c, ' DAYS'],
                  }),
                  jsxRuntimeExports.jsx('span', {
                    className:
                      'lg:text-[40px] text-[14px] font-primaryBold btn-number xl:text-7xl ',
                    children: h,
                  }),
                  jsxRuntimeExports.jsx('a', {
                    href: 'https://solscan.io/token/MAXgzJZaR31koHo8Gwj84ZfNKDCA3tRtzjySMdKMiHj',
                    target: '_blank',
                    className: 'z-50 relative',
                    children: jsxRuntimeExports.jsx('button', {
                      className:
                        'bg-white xl:text-8xl xl:mt-12 xl:py-4 xl:px-10 btn-buy cursor-pointer text-white lg:text-[48px] font-primaryBold px-4  rounded-lg lg:mt-2',
                      children: 'SOLSCAN',
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  FullWidthButton = () => {
    const [e, o] = reactExports.useState(!1);
    return jsxRuntimeExports.jsx('div', {
      className:
        'absolute bottom-1/4 translate-y-32 lg:bottom-1/2 lg:translate-y-[50rem] xl:h-56 button-bg rounded-2xl xl:w-[100%]',
      children: jsxRuntimeExports.jsx('a', {
        href: 'https://www.dextools.io/app/en/solana/pair-explorer/MAXgzJZaR31koHo8Gwj84ZfNKDCA3tRtzjySMdKMiHj',
        target: 'blank',
        children: jsxRuntimeExports.jsx('button', {
          className: `bottom-0 py-2 lg:py-0  button-continer w-[380px] lg:w-[1280px] xl:h-full  xl:w-full lg:h-[192px] rounded-2xl z-50 font-primaryBold border-2 lg:border-4 border-neutral-50 ${
            e ? 'btn-shadow ' : ''
          }`,
          onMouseEnter: () => o(!0),
          onMouseLeave: () => o(!1),
          children: jsxRuntimeExports.jsx('span', {
            className:
              'lg:text-8xl text-6xl gradient-btn-buy xl:text-[10rem] xl:py-6 ',
            children: 'Dextools',
          }),
        }),
      }),
    });
  };
var propTypes = { exports: {} },
  ReactPropTypesSecret_1,
  hasRequiredReactPropTypesSecret;
function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;
  var e = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  return (ReactPropTypesSecret_1 = e), ReactPropTypesSecret_1;
}
var factoryWithThrowingShims, hasRequiredFactoryWithThrowingShims;
function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;
  var e = requireReactPropTypesSecret();
  function o() {}
  function i() {}
  return (
    (i.resetWarningCache = o),
    (factoryWithThrowingShims = function () {
      function s(d, h, g, j, tt, _e) {
        if (_e !== e) {
          var et = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
          );
          throw ((et.name = 'Invariant Violation'), et);
        }
      }
      s.isRequired = s;
      function a() {
        return s;
      }
      var c = {
        array: s,
        bigint: s,
        bool: s,
        func: s,
        number: s,
        object: s,
        string: s,
        symbol: s,
        any: s,
        arrayOf: a,
        element: s,
        elementType: s,
        instanceOf: a,
        node: s,
        objectOf: a,
        oneOf: a,
        oneOfType: a,
        shape: a,
        exact: a,
        checkPropTypes: i,
        resetWarningCache: o,
      };
      return (c.PropTypes = c), c;
    }),
    factoryWithThrowingShims
  );
}
var hasRequiredPropTypes;
function requirePropTypes() {
  return (
    hasRequiredPropTypes ||
      ((hasRequiredPropTypes = 1),
      (propTypes.exports = requireFactoryWithThrowingShims()())),
    propTypes.exports
  );
}
var propTypesExports = requirePropTypes();
const PropTypes = getDefaultExportFromCjs(propTypesExports);
function _classCallCheck(e, o) {
  if (!(e instanceof o))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, o) {
  for (var i = 0; i < o.length; i++) {
    var s = o[i];
    (s.enumerable = s.enumerable || !1),
      (s.configurable = !0),
      'value' in s && (s.writable = !0),
      Object.defineProperty(e, s.key, s);
  }
}
function _createClass(e, o, i) {
  return o && _defineProperties(e.prototype, o), e;
}
function _defineProperty(e, o, i) {
  return (
    o in e
      ? Object.defineProperty(e, o, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[o] = i),
    e
  );
}
function _objectSpread(e) {
  for (var o = 1; o < arguments.length; o++) {
    var i = arguments[o] != null ? arguments[o] : {},
      s = Object.keys(i);
    typeof Object.getOwnPropertySymbols == 'function' &&
      (s = s.concat(
        Object.getOwnPropertySymbols(i).filter(function (a) {
          return Object.getOwnPropertyDescriptor(i, a).enumerable;
        })
      )),
      s.forEach(function (a) {
        _defineProperty(e, a, i[a]);
      });
  }
  return e;
}
function _inherits(e, o) {
  if (typeof o != 'function' && o !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(o && o.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    o && _setPrototypeOf(e, o);
}
function _getPrototypeOf(e) {
  return (
    (_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (i) {
          return i.__proto__ || Object.getPrototypeOf(i);
        }),
    _getPrototypeOf(e)
  );
}
function _setPrototypeOf(e, o) {
  return (
    (_setPrototypeOf =
      Object.setPrototypeOf ||
      function (s, a) {
        return (s.__proto__ = a), s;
      }),
    _setPrototypeOf(e, o)
  );
}
function _assertThisInitialized(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function _possibleConstructorReturn(e, o) {
  return o && (typeof o == 'object' || typeof o == 'function')
    ? o
    : _assertThisInitialized(e);
}
function isObject(e) {
  var o = typeof e;
  return e != null && (o == 'object' || o == 'function');
}
var isObject_1 = isObject,
  commonjsGlobal =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : typeof self < 'u'
      ? self
      : {},
  freeGlobal =
    typeof commonjsGlobal == 'object' &&
    commonjsGlobal &&
    commonjsGlobal.Object === Object &&
    commonjsGlobal,
  _freeGlobal = freeGlobal,
  freeSelf = typeof self == 'object' && self && self.Object === Object && self,
  root = _freeGlobal || freeSelf || Function('return this')(),
  _root = root,
  now = function () {
    return _root.Date.now();
  },
  now_1 = now,
  Symbol$1 = _root.Symbol,
  _Symbol = Symbol$1,
  objectProto = Object.prototype,
  hasOwnProperty = objectProto.hasOwnProperty,
  nativeObjectToString = objectProto.toString,
  symToStringTag = _Symbol ? _Symbol.toStringTag : void 0;
function getRawTag(e) {
  var o = hasOwnProperty.call(e, symToStringTag),
    i = e[symToStringTag];
  try {
    e[symToStringTag] = void 0;
    var s = !0;
  } catch {}
  var a = nativeObjectToString.call(e);
  return s && (o ? (e[symToStringTag] = i) : delete e[symToStringTag]), a;
}
var _getRawTag = getRawTag,
  objectProto$1 = Object.prototype,
  nativeObjectToString$1 = objectProto$1.toString;
function objectToString(e) {
  return nativeObjectToString$1.call(e);
}
var _objectToString = objectToString,
  nullTag = '[object Null]',
  undefinedTag = '[object Undefined]',
  symToStringTag$1 = _Symbol ? _Symbol.toStringTag : void 0;
function baseGetTag(e) {
  return e == null
    ? e === void 0
      ? undefinedTag
      : nullTag
    : symToStringTag$1 && symToStringTag$1 in Object(e)
    ? _getRawTag(e)
    : _objectToString(e);
}
var _baseGetTag = baseGetTag;
function isObjectLike(e) {
  return e != null && typeof e == 'object';
}
var isObjectLike_1 = isObjectLike,
  symbolTag = '[object Symbol]';
function isSymbol(e) {
  return (
    typeof e == 'symbol' || (isObjectLike_1(e) && _baseGetTag(e) == symbolTag)
  );
}
var isSymbol_1 = isSymbol,
  NAN = NaN,
  reTrim = /^\s+|\s+$/g,
  reIsBadHex = /^[-+]0x[0-9a-f]+$/i,
  reIsBinary = /^0b[01]+$/i,
  reIsOctal = /^0o[0-7]+$/i,
  freeParseInt = parseInt;
function toNumber(e) {
  if (typeof e == 'number') return e;
  if (isSymbol_1(e)) return NAN;
  if (isObject_1(e)) {
    var o = typeof e.valueOf == 'function' ? e.valueOf() : e;
    e = isObject_1(o) ? o + '' : o;
  }
  if (typeof e != 'string') return e === 0 ? e : +e;
  e = e.replace(reTrim, '');
  var i = reIsBinary.test(e);
  return i || reIsOctal.test(e)
    ? freeParseInt(e.slice(2), i ? 2 : 8)
    : reIsBadHex.test(e)
    ? NAN
    : +e;
}
var toNumber_1 = toNumber,
  FUNC_ERROR_TEXT = 'Expected a function',
  nativeMax = Math.max,
  nativeMin = Math.min;
function debounce(e, o, i) {
  var s,
    a,
    c,
    d,
    h,
    g,
    j = 0,
    tt = !1,
    _e = !1,
    et = !0;
  if (typeof e != 'function') throw new TypeError(FUNC_ERROR_TEXT);
  (o = toNumber_1(o) || 0),
    isObject_1(i) &&
      ((tt = !!i.leading),
      (_e = 'maxWait' in i),
      (c = _e ? nativeMax(toNumber_1(i.maxWait) || 0, o) : c),
      (et = 'trailing' in i ? !!i.trailing : et));
  function ot(it) {
    var mt = s,
      lt = a;
    return (s = a = void 0), (j = it), (d = e.apply(lt, mt)), d;
  }
  function st(it) {
    return (j = it), (h = setTimeout(b, o)), tt ? ot(it) : d;
  }
  function ft(it) {
    var mt = it - g,
      lt = it - j,
      bt = o - mt;
    return _e ? nativeMin(bt, c - lt) : bt;
  }
  function Ot(it) {
    var mt = it - g,
      lt = it - j;
    return g === void 0 || mt >= o || mt < 0 || (_e && lt >= c);
  }
  function b() {
    var it = now_1();
    if (Ot(it)) return _(it);
    h = setTimeout(b, ft(it));
  }
  function _(it) {
    return (h = void 0), et && s ? ot(it) : ((s = a = void 0), d);
  }
  function $() {
    h !== void 0 && clearTimeout(h), (j = 0), (s = g = a = h = void 0);
  }
  function ut() {
    return h === void 0 ? d : _(now_1());
  }
  function at() {
    var it = now_1(),
      mt = Ot(it);
    if (((s = arguments), (a = this), (g = it), mt)) {
      if (h === void 0) return st(g);
      if (_e) return (h = setTimeout(b, o)), ot(g);
    }
    return h === void 0 && (h = setTimeout(b, o)), d;
  }
  return (at.cancel = $), (at.flush = ut), at;
}
var debounce_1 = debounce,
  FUNC_ERROR_TEXT$1 = 'Expected a function';
function throttle(e, o, i) {
  var s = !0,
    a = !0;
  if (typeof e != 'function') throw new TypeError(FUNC_ERROR_TEXT$1);
  return (
    isObject_1(i) &&
      ((s = 'leading' in i ? !!i.leading : s),
      (a = 'trailing' in i ? !!i.trailing : a)),
    debounce_1(e, o, { leading: s, maxWait: o, trailing: a })
  );
}
var throttle_1 = throttle,
  wrapperStyles = { display: 'inline-block', position: 'relative' },
  ScrollRotate = (function (e) {
    _inherits(o, e);
    function o(i) {
      var s;
      return (
        _classCallCheck(this, o),
        (s = _possibleConstructorReturn(
          this,
          _getPrototypeOf(o).call(this, i)
        )),
        (s.state = {
          clientHeight: 0,
          scrollTop: 0,
          topPercentage: 0,
          scrollOnce: !1,
          getOnce: !1,
        }),
        (s.handleFunc = null),
        s
      );
    }
    return (
      _createClass(o, [
        {
          key: 'getStartValues',
          value: function () {
            var s = this.props.target;
            if (!s) {
              var a = window.innerHeight,
                c = window.scrollY,
                d = (c / (document.documentElement.offsetHeight - a)) * 100;
              this.setState({
                clientHeight: a,
                scrollTop: c,
                topPercentage: d,
              });
            }
            this.setState({ getOnce: !0 });
          },
        },
        {
          key: 'updateValues',
          value: function (s) {
            var a = this.props.target,
              c = a ? s.srcElement : s.srcElement.scrollingElement,
              d = c.clientHeight,
              h = c.scrollTop,
              g = (h / ((a ? c.scrollHeight : c.offsetHeight) - d)) * 100;
            this.setState({
              clientHeight: d,
              scrollTop: h,
              topPercentage: g,
              scrollOnce: !0,
            });
          },
        },
        {
          key: 'setScrollHandle',
          value: function () {
            var s = this,
              a = throttle_1(
                function (j) {
                  s.updateValues(j);
                },
                this.props.throttle ? 1e3 * this.props.throttle : 0,
                { leading: !1 }
              ),
              c = function (tt) {
                s.updateValues(tt);
              },
              d = this.props.target,
              h = this.props.throttle ? a : c,
              g = d ? document.getElementById(d) : window;
            return g !== null
              ? (g.addEventListener('scroll', h),
                function () {
                  g.removeEventListener('scroll', h);
                })
              : function () {};
          },
        },
        {
          key: 'getAnimationStyles',
          value: function () {
            var s = this.state.scrollOnce,
              a = this.props.animationDuration;
            return {
              transform: 'rotate('.concat(this.getDeg(), 'deg)'),
              transition: s
                ? 'transform '.concat(a || a === 0 ? a : '0.1', 's')
                : '',
            };
          },
        },
        {
          key: 'getDeg',
          value: function () {
            var s = this.props.method,
              a = this.props.from || 0,
              c = this.props.to || 360;
            if (s === 'perc') {
              var d = this.state.topPercentage,
                h = this.props.loops || 1,
                g =
                  parseInt((h * d) / 100) +
                  (d !== 100 ? 1 : Number.isInteger(h) ? 0 : 1);
              return (
                (d / 100 - (1 / h) * (g - 1)) * (c - a) * h +
                a +
                360 * (g - 1) * (a > c ? -1 : 1)
              );
            } else {
              var j = this.state.scrollTop,
                tt = parseInt(j / (c - a));
              return (j - tt * (c - a)) * (a > c ? -1 : 1) + (a + 360 * tt);
            }
          },
        },
        {
          key: 'componentDidMount',
          value: function () {
            this.getStartValues(),
              (this.removeHandleFunc = this.setScrollHandle());
          },
        },
        {
          key: 'componentDidUpdate',
          value: function (s) {
            s.throttle !== this.props.throttle &&
              (this.removeHandleFunc(),
              (this.removeHandleFunc = this.setScrollHandle()));
          },
        },
        {
          key: 'componentWillUnmount',
          value: function () {
            this.removeHandleFunc();
          },
        },
        {
          key: 'render',
          value: function () {
            var s = this.state.getOnce,
              a = this.getAnimationStyles();
            return React$1.createElement(
              'div',
              {
                style: _objectSpread(
                  { position: 'relative', display: 'inline-block' },
                  this.props.style
                ),
              },
              s &&
                React$1.createElement(
                  'div',
                  { style: _objectSpread({}, wrapperStyles, a) },
                  this.props.children
                )
            );
          },
        },
      ]),
      o
    );
  })(React$1.Component);
ScrollRotate.propTypes = {
  target: PropTypes.string,
  throttle: PropTypes.number,
  from: PropTypes.number,
  to: PropTypes.number,
  method: PropTypes.string,
  loops: PropTypes.number,
  animationDuration: PropTypes.number,
};
ScrollRotate.defaultProps = {
  target: null,
  throttle: null,
  from: 0,
  to: 360,
  method: 'px',
  loops: 1,
  animationDuration: 0.1,
};
const Maxonomics = ({ isMobile: e }) => (
    reactExports.useEffect(() => {
      const o = () => {};
      return (
        window.addEventListener('scroll', o),
        () => {
          window.removeEventListener('scroll', o);
        }
      );
    }, []),
    jsxRuntimeExports.jsxs('div', {
      id: 'moskonomic',
      className:
        'relative w-full h-auto flex flex-col items-center xl:h-auto xl:top-0 overflow-hidden  lg:top-32 z-[2] ',
      children: [
        jsxRuntimeExports.jsx('span', {
          className:
            'text-title-gd-1 mt-20 lg:mt-0 font-primaryBold text-6xl lg:text-9xl xl:text-[15rem] xl:mt-16',
          children: 'MAXON0MICS',
        }),
        jsxRuntimeExports.jsxs('div', {
          className:
            'flex flex-col gap-12 lg:gap-16 mt-28 lg:mt-56 -z-10 relative ',
          children: [
            jsxRuntimeExports.jsxs(_default, {
              speed: 200,
              style: { overflow: 'hidden' },
              children: [
                jsxRuntimeExports.jsx('span', {
                  className:
                    'lg:text-8xl text-5xl font-primaryBold z-10 gradient-text-x mr-8 xl:text-[12rem] ',
                  children: 'SELL TAX 0%',
                }),
                jsxRuntimeExports.jsx('div', {
                  className: 'rounded-full h-6 w-6 bg-white mr-8 round-text',
                }),
                jsxRuntimeExports.jsx('span', {
                  className:
                    'lg:text-8xl text-5xl font-primaryBold z-10 gradient-text-x mr-8 xl:text-[12rem]',
                  children: 'LIQUIDITY BURNT',
                }),
                jsxRuntimeExports.jsx('div', {
                  className: 'rounded-full h-6 w-6 bg-white mr-8 round-text',
                }),
                jsxRuntimeExports.jsx('span', {
                  className:
                    'lg:text-8xl text-5xl font-primaryBold z-10 gradient-text-x mr-8 xl:text-[12rem]',
                  children: 'CONTRACT REVOKED',
                }),
                jsxRuntimeExports.jsx('div', {
                  className:
                    'rounded-full h-6 w-6 bg-white mr-8 round-text xl:text-[12rem]',
                }),
              ],
            }),
            jsxRuntimeExports.jsxs(_default, {
              speed: 300,
              style: { overflow: 'hidden' },
              children: [
                jsxRuntimeExports.jsx('span', {
                  className:
                    'lg:text-8xl text-5xl font-primaryBold z-10 gradient-text-x mr-8 xl:text-[12rem]',
                  children: 'SELL TAX 0%',
                }),
                jsxRuntimeExports.jsx('div', {
                  className: 'rounded-full h-6 w-6 bg-white mr-8 round-text',
                }),
                jsxRuntimeExports.jsx('span', {
                  className:
                    'lg:text-8xl text-5xl font-primaryBold z-10 gradient-text-x mr-8 xl:text-[12rem]',
                  children: 'LIQUIDITY BURNT',
                }),
                jsxRuntimeExports.jsx('div', {
                  className: 'rounded-full h-6 w-6 bg-white mr-8 round-text',
                }),
                jsxRuntimeExports.jsx('span', {
                  className:
                    'lg:text-8xl text-5xl font-primaryBold z-10 gradient-text-x mr-8 xl:text-[12rem]',
                  children: 'CONTRACT REVOKED',
                }),
                jsxRuntimeExports.jsx('div', {
                  className: 'rounded-full h-6 w-6 bg-white mr-8 round-text',
                }),
              ],
            }),
            jsxRuntimeExports.jsxs(_default, {
              speed: 250,
              style: { overflow: 'hidden' },
              children: [
                jsxRuntimeExports.jsx('span', {
                  className:
                    'lg:text-8xl text-5xl font-primaryBold z-10 gradient-text-x mr-8 xl:text-[12rem]',
                  children: 'SELL TAX 0%',
                }),
                jsxRuntimeExports.jsx('div', {
                  className: 'rounded-full h-6 w-6 bg-white mr-8 round-text',
                }),
                jsxRuntimeExports.jsx('span', {
                  className:
                    'lg:text-8xl text-5xl font-primaryBold z-10 gradient-text-x mr-8 xl:text-[12rem]',
                  children: 'LIQUIDITY BURNT',
                }),
                jsxRuntimeExports.jsx('div', {
                  className: 'rounded-full h-6 w-6 bg-white mr-8 round-text',
                }),
                jsxRuntimeExports.jsx('span', {
                  className:
                    'lg:text-8xl text-5xl font-primaryBold z-10 gradient-text-x mr-8 xl:text-[12rem]',
                  children: 'CONTRACT REVOKED',
                }),
                jsxRuntimeExports.jsx('div', {
                  className: 'rounded-full h-6 w-6 bg-white mr-8 round-text',
                }),
              ],
            }),
          ],
        }),
        jsxRuntimeExports.jsxs('div', {
          className: 'lg:mt-72 mt-20 flex items-center justify-center relative',
          children: [
            !e &&
              jsxRuntimeExports.jsx(ScrollRotate, {
                method: 'perc',
                from: e ? 0 : -800,
                to: e ? 0 : 360,
                children: jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                  src: './assets/circle-mc.webp',
                  className: 'relative xl:w-[120rem]',
                  alt: 'Logo',
                  width: 1e3,
                  height: 1e3,
                }),
              }),
            e &&
              jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                src: './assets/circle-mc.webp',
                className: 'relative xl:w-[120rem] rotating-mc',
                alt: 'Logo',
                width: 1e3,
                height: 1e3,
              }),
            jsxRuntimeExports.jsx(FullWidthButton, {}),
          ],
        }),
        jsxRuntimeExports.jsxs('div', {
          className:
            'flex flex-col  gap-12 lg:gap-16 mt-28 lg:mt-96 -z-10 relative mb-8 lg:mb-0 ',
          children: [
            jsxRuntimeExports.jsxs(_default, {
              speed: 200,
              style: { overflow: 'hidden' },
              children: [
                jsxRuntimeExports.jsx('span', {
                  className:
                    'lg:text-8xl text-5xl font-primaryBold z-10 gradient-text-x mr-8 xl:text-[12rem]',
                  children: 'SELL TAX 0%',
                }),
                jsxRuntimeExports.jsx('div', {
                  className: 'rounded-full h-6 w-6 bg-white mr-8 round-text',
                }),
                jsxRuntimeExports.jsx('span', {
                  className:
                    'lg:text-8xl text-5xl font-primaryBold z-10 gradient-text-x mr-8 xl:text-[12rem]',
                  children: 'LIQUIDITY BURNT',
                }),
                jsxRuntimeExports.jsx('div', {
                  className: 'rounded-full h-6 w-6 bg-white mr-8 round-text',
                }),
                jsxRuntimeExports.jsx('span', {
                  className:
                    'lg:text-8xl text-5xl font-primaryBold z-10 gradient-text-x mr-8 xl:text-[12rem]',
                  children: 'CONTRACT REVOKED',
                }),
                jsxRuntimeExports.jsx('div', {
                  className: 'rounded-full h-6 w-6 bg-white mr-8 round-text',
                }),
              ],
            }),
            jsxRuntimeExports.jsxs(_default, {
              speed: 300,
              style: { overflow: 'hidden' },
              children: [
                jsxRuntimeExports.jsx('span', {
                  className:
                    'lg:text-8xl text-5xl font-primaryBold z-10 gradient-text-x mr-8 xl:text-[12rem]',
                  children: 'SELL TAX 0%',
                }),
                jsxRuntimeExports.jsx('div', {
                  className: 'rounded-full h-6 w-6 bg-white mr-8 round-text',
                }),
                jsxRuntimeExports.jsx('span', {
                  className:
                    'lg:text-8xl text-5xl font-primaryBold z-10 gradient-text-x mr-8 xl:text-[12rem]',
                  children: 'LIQUIDITY BURNT',
                }),
                jsxRuntimeExports.jsx('div', {
                  className: 'rounded-full h-6 w-6 bg-white mr-8 round-text',
                }),
                jsxRuntimeExports.jsx('span', {
                  className:
                    'lg:text-8xl text-5xl font-primaryBold z-10 gradient-text-x mr-8 xl:text-[12rem]',
                  children: 'CONTRACT REVOKED',
                }),
                jsxRuntimeExports.jsx('div', {
                  className: 'rounded-full h-6 w-6 bg-white mr-8 round-text',
                }),
              ],
            }),
            jsxRuntimeExports.jsxs(_default, {
              speed: 250,
              style: { overflow: 'hidden' },
              children: [
                jsxRuntimeExports.jsx('span', {
                  className:
                    'lg:text-8xl text-5xl font-primaryBold z-10 gradient-text-x mr-8 xl:text-[12rem]',
                  children: 'SELL TAX 0%',
                }),
                jsxRuntimeExports.jsx('div', {
                  className: 'rounded-full h-6 w-6 bg-white mr-8 round-text',
                }),
                jsxRuntimeExports.jsx('span', {
                  className:
                    'lg:text-8xl text-5xl font-primaryBold z-10 gradient-text-x mr-8 xl:text-[12rem]',
                  children: 'LIQUIDITY BURNT',
                }),
                jsxRuntimeExports.jsx('div', {
                  className: 'rounded-full h-6 w-6 bg-white mr-8 round-text',
                }),
                jsxRuntimeExports.jsx('span', {
                  className:
                    'lg:text-8xl text-5xl font-primaryBold z-10 gradient-text-x mr-8 xl:text-[12rem]',
                  children: 'CONTRACT REVOKED',
                }),
                jsxRuntimeExports.jsx('div', {
                  className: 'rounded-full h-6 w-6 bg-white mr-8 round-text',
                }),
              ],
            }),
          ],
        }),
      ],
    })
  ),
  HowToGet = ({ isMobile: e }) => {
    const [o, i] = reactExports.useState(!1),
      s = () => {
        window.scrollY > e, i(!0);
      };
    window.addEventListener('scroll', s);
    const [a, c] = reactExports.useState(!1),
      d = () => {
        navigator.clipboard
          .writeText('MAXgzJZaR31koHo8Gwj84ZfNKDCA3tRtzjySMdKMiHj')
          .then(() => {
            c(!0),
              setTimeout(() => {
                c(!1);
              }, 1e3);
          })
          .catch((g) => {
            console.error('Failed to copy text to clipboard:', g);
          });
      };
    return jsxRuntimeExports.jsxs('div', {
      id: 'howtoget',
      className:
        'w-full relative flex items-center flex-col xl:h-auto lg:h-auto mt-0 lg:mt-72 overflow-hidden z-[2]',
      children: [
        jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
          src: './assets/title-how.png',
          alt: 'How to Get',
          width: e ? 362 : 640,
          height: 362,
          className: 'object-cover mt-16 xl:w-[65rem] ',
        }),
        a &&
          jsxRuntimeExports.jsx('div', {
            className:
              'absolute bottom-[10%] left-1/2 transform xl:text-4xl -translate-x-1/2 z-10 bg-white rounded-lg py-2 px-4 shadow-md',
            children: 'Contract copied',
          }),
        jsxRuntimeExports.jsx('div', {
          className:
            'flex justify-center items-center mt-24 lg:mt-56 overflow-hidden py-16',
          children: jsxRuntimeExports.jsxs('div', {
            className: `flex ${
              o ? 'marquee-container ' : ''
            } h-[260px] lg:h-[560px] xl:h-[60rem] xl:gap-32 xl:w-auto w-full rounded`,
            children: [
              jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                src: './assets/step-1.webp',
                alt: 'How to Get',
                visibleByDefault: !0,
                className:
                  'object-cover mx-8 hover:scale-110 hover:-rotate-2 transition duration-300 ease-in-out',
              }),
              jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                src: './assets/step-2.webp',
                alt: 'How to Get',
                visibleByDefault: !0,
                className:
                  'object-cover mx-8 hover:scale-110 hover:rotate-2 transition duration-300 ease-in-out',
              }),
              jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                onClick: d,
                src: './assets/step-5.webp',
                alt: 'How to Get',
                visibleByDefault: !0,
                className:
                  'object-cover mx-8 hover:scale-110 hover:-rotate-2 transition duration-300 ease-in-out ',
              }),
              jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                src: './assets/step-3.webp',
                alt: 'How to Get',
                visibleByDefault: !0,
                className:
                  'object-cover mx-8  hover:scale-110 hover:rotate-2 transition duration-300 ease-in-out',
              }),
              jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                src: './assets/step-4.webp',
                alt: 'How to Get',
                visibleByDefault: !0,
                className:
                  'object-cover mx-8  hover:scale-110 hover:-rotate-2 transition duration-300 ease-in-out',
              }),
            ],
          }),
        }),
      ],
    });
  },
  Plans = ({ isMobile: e }) => (
    reactExports.useEffect(() => {
      Aos.init({ duration: 1500, offset: 500 });
    }, []),
    jsxRuntimeExports.jsxs('div', {
      id: 'murs',
      className:
        'flex relative items-center flex-col w-full justify-center xl:h-auto h-auto  overflow-hidden z-[2] pb-20',
      children: [
        jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
          src: './assets/title-plans.png',
          alt: 'How to Get',
          className: 'relative my-20 lg:mb-56 xl:w-[80rem]',
          width: 740,
          height: 205,
        }),
        jsxRuntimeExports.jsxs('div', {
          'data-aos': 'fade-right',
          'data-aos-anchor-placement': 'top-bottom',
          className:
            'relative mt-20 h-[18rem]  xl:h-[50rem]  xl:left-[15rem]  lg:h-[18rem] w-full flex  ',
          children: [
            jsxRuntimeExports.jsx('div', {
              className:
                'absolute  flex lg:left-32 lg:w-[30rem] lg:top-10 xl:w-[60rem] xl:left-36 xl:top-20 z-10 w-[20rem]',
              children: jsxRuntimeExports.jsx('span', {
                className:
                  'text-[1.6rem] top-6 leading-[1.8rem] frame-text stroke-2 stroke-black lg:text-4xl xl:text-[5rem] xl:leading-[1.1] font-primaryBold text-white absolute  left-4',
                children:
                  "X-PLOAR THA GALAKSI WIF SPACESEX'S NOOWEST ROKITCHIP, DASINED BI ELON MAX'S THUPER THECRET SPESHUL TEEM UV MAXETEERS.",
              }),
            }),
            jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
              src: './assets/frame-1.png',
              alt: 'How to Get',
              className: ' absolute lg:left-28 xl:w-[65rem] ',
              width: e ? 350 : 550,
              visibleByDefault: !0,
            }),
            jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
              src: './assets/shadow-1.webp',
              alt: 'How to Get',
              className:
                'absolute -top-12 -left-14 lg:left-8 xl:w-[65rem]  -z-[1] border-child-1 ',
              width: e ? 350 : 550,
            }),
            jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
              src: './assets/shadow-2.webp',
              alt: 'How to Get',
              className:
                ' absolute  -top-6 -left-8 lg:left-16 xl:w-[65rem] -z-[1] border-child-2',
              width: e ? 350 : 550,
            }),
            jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
              src: './assets/shadow-3.webp',
              alt: 'How to Get',
              className:
                ' absolute -z-[1]  lg:left-20 border-child-3 xl:w-[65rem]',
              width: e ? 350 : 550,
            }),
            jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
              src: './assets/frame-1-img.webp',
              alt: 'How to Get',
              className:
                'object-cover absolute left-[30%]  xl:w-[50rem] z-20 ufo-animation ',
              width: e ? 300 : '',
            }),
          ],
        }),
        jsxRuntimeExports.jsxs('div', {
          'data-aos': 'fade-left',
          'data-aos-anchor-placement': 'top-bottom',
          className:
            'relative mt-28  h-[18rem] w-full  xl:h-[50rem]  xl:right-[15rem]  flex ',
          children: [
            jsxRuntimeExports.jsx('div', {
              className:
                'absolute  right-4 flex w-[19rem] lg:right-36 lg:w-[30rem] lg:top-8 xl:right-48 xl:top-24 xl:w-[68rem] z-10 ',
              children: jsxRuntimeExports.jsx('span', {
                className:
                  'text-[1.6rem] top-6 leading-[1.6rem] lg:text-4xl xl:text-[5rem] xl:leading-[1.1]   frame-text stroke-2 stroke-black font-primaryBold text-white absolute  ',
                children:
                  'WYLE AWN HOUR JURNEE WEE INCOWNTURD UH CUPPEL JIANT TURDS, FOURSING UZ TWO REATURN TA URTH, WEAR WEE REBILT THA ROKITCHIP EVIN BIGER AND BADER THAN EVUR.',
              }),
            }),
            jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
              src: './assets/frame-2.png',
              alt: 'How to Get',
              className: 'absolute right-0 lg:right-28  xl:w-[80rem]',
              width: e ? 350 : 550,
            }),
            jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
              src: './assets/shadow-3.webp',
              alt: 'How to Get',
              className:
                'absolute -right-16 -top-12 lg:right-8  xl:w-[80rem] -z-[1] right-box-1  ',
              width: e ? 350 : 550,
            }),
            jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
              src: './assets/shadow-2.webp',
              alt: 'How to Get',
              className:
                ' absolute -right-8 -top-6 lg:right-16  xl:w-[80rem] -z-[1] right-box-2',
              width: e ? 350 : 550,
            }),
            jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
              src: './assets/shadow-1.webp',
              alt: 'How to Get',
              className:
                ' absolute right-0 lg:right-20  xl:w-[80rem]  -z-[1] right-box-3',
              width: e ? 350 : 550,
            }),
          ],
        }),
        jsxRuntimeExports.jsxs('div', {
          'data-aos': 'fade-right',
          'data-aos-anchor-placement': 'top-bottom',
          className:
            'relative mt-56 h-[18rem] w-full flex  xl:h-[50rem]  xl:left-[15rem]  ',
          children: [
            jsxRuntimeExports.jsx('div', {
              className:
                'absolute  left-4 flex w-[19rem] lg:left-36 lg:w-[30rem] lg:top-8 xl:left-48 xl:top-24 xl:w-[68rem]  z-10 ',
              children: jsxRuntimeExports.jsx('span', {
                className:
                  'text-[1.6rem] top-8 leading-[1.6rem] lg:text-4xl xl:text-[5rem] xl:leading-[1.1]  frame-text stroke-2 stroke-black font-primaryBold text-white absolute  ',
                children:
                  'DETERMINT TWO REECH MURS, THA MAXETEERS KERFULLY CALKULAYTED THER JURNEY, AND LUNCHED THA MOIST CRAY-Z ROKITCHIP THA WERLD HED EVAR SCENE.',
              }),
            }),
            jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
              src: './assets/frame-3.png',
              alt: 'How to Get',
              className: ' absolute left-0   xl:w-[80rem]  lg:left-28 ',
              width: e ? 350 : 550,
            }),
            jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
              src: './assets/shadow-1.webp',
              alt: 'How to Get',
              className:
                'absolute -top-12 -left-14 lg:left-8  xl:w-[80rem] -z-[1] border-child-1 ',
              width: e ? 350 : 550,
            }),
            jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
              src: './assets/shadow-3.webp',
              alt: 'How to Get',
              className:
                ' absolute -top-6 -left-8 -z-[1] lg:left-16  xl:w-[80rem] border-child-2',
              width: e ? 350 : 550,
            }),
            jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
              src: './assets/shadow-2.webp',
              alt: 'How to Get',
              className:
                'absolute left-0 -z-[1] lg:left-20  xl:w-[80rem] border-child-3',
              width: e ? 350 : 550,
            }),
            jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
              src: './assets/main-c.webp',
              alt: 'How to Get',
              className:
                'absolute left-[30%] -top-[100%]  xl:-top-96 xl:left-[35%]  xl:w-[60rem] z-20 rocket-animation ',
            }),
          ],
        }),
        jsxRuntimeExports.jsxs('div', {
          'data-aos': 'fade-left',
          'data-aos-anchor-placement': 'top-bottom',
          className:
            'relative mt-36 lg:mt-72 h-[18rem] w-full flex  xl:h-[50rem]  xl:right-[15rem] ',
          children: [
            jsxRuntimeExports.jsx('div', {
              className:
                'absolute  right-4 flex w-[19rem] lg:right-36 lg:w-[30rem] lg:top-8 xl:right-48 xl:top-24 xl:w-[68rem]  z-10 ',
              children: jsxRuntimeExports.jsx('span', {
                className:
                  'text-[1.6rem] top-10 leading-[1.6rem] lg:text-4xl xl:text-[5rem] xl:leading-[1.1]  frame-text stroke-2 stroke-black font-primaryBold text-white absolute  ',
                children:
                  'JIGANTEK EKSPLOSHUNS AND PHLAMES ERUPTID FRUM THA ROCKIT AND THA MAXETEERS HEDDED STRATE FOUR UH MASIF BLECK WHOLE.',
              }),
            }),
            jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
              src: './assets/frame-4.png',
              alt: 'How to Get',
              className: 'absolute right-0 lg:right-28  xl:w-[80rem]  ',
              width: e ? 350 : 550,
            }),
            jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
              src: './assets/shadow-1.webp',
              alt: 'How to Get',
              className:
                'absolute -right-16 -top-12 lg:right-8 -z-[1] right-box-1  xl:w-[80rem] ',
              width: e ? 350 : 550,
            }),
            jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
              src: './assets/shadow-2.webp',
              alt: 'How to Get',
              className:
                'absolute -right-8 -top-6 -z-[1] lg:right-16 right-box-2  xl:w-[80rem]',
              width: e ? 350 : 550,
            }),
            jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
              src: './assets/shadow-3.webp',
              alt: 'How to Get',
              className:
                'absolute right-0 -z-[1] lg:right-20 right-box-3  xl:w-[80rem]',
              width: e ? 350 : 550,
            }),
            jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
              src: './assets/frame-4-img.webp',
              alt: 'How to Get',
              className:
                'absolute -top-[90%] z-20 lg:right-96 globe-animation xl:right-[35%] xl:-top-32 xl:w-[55rem]',
              width: e ? 350 : '',
            }),
          ],
        }),
        e
          ? jsxRuntimeExports.jsxs('div', {
              'data-aos': 'fade-right',
              'data-aos-anchor-placement': 'top-bottom',
              className: 'relative mt-28 h-[30rem] w-full flex ',
              children: [
                jsxRuntimeExports.jsx('div', {
                  className:
                    'absolute  left-4 flex w-[19rem] lg:left-36 lg:w-[30rem] lg:top-8 xl:left-48 xl:top-24 xl:w-[68rem]  z-10 ',
                  children: jsxRuntimeExports.jsx('span', {
                    className:
                      'text-[1.6rem] top-10 leading-[1.6rem] lg:text-4xl xl:text-[5rem] xl:leading-[1.1]  frame-text stroke-2 stroke-black font-primaryBold text-white absolute  ',
                    children:
                      "AFTUR ENTURING THA BLECK WHOLE, WEA LOZT CUMMUNIKASHUN, BUTT WEN THAY LAND AWN MURS, IM SHURE THAY'LL HEV UH CRAY-Z STOREY TWO TEL...",
                  }),
                }),
                jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                  src: './assets/frame-5-mobile.png',
                  alt: 'How to Get',
                  className: 'absolute ',
                  width: e ? 350 : '',
                }),
                jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                  src: './assets/shadow-1.webp',
                  alt: 'How to Get',
                  className:
                    'absolute -top-12 -left-14  -z-[1] border-child-1 ',
                  width: e ? 350 : '',
                }),
                jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                  src: './assets/shadow-2.webp',
                  alt: 'How to Get',
                  className: 'absolute  -top-6 -left-8  -z-[1] border-child-2',
                  width: e ? 350 : '',
                }),
                jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                  src: './assets/shadow-3.webp',
                  alt: 'How to Get',
                  className: 'absolute -z-[1]   border-child-3',
                  width: e ? 350 : '',
                }),
                jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                  src: './assets/frame-5-img.webp',
                  alt: 'How to Get',
                  className: 'absolute top-32 mt-4 z-20 lab-animation ',
                }),
              ],
            })
          : jsxRuntimeExports.jsxs('div', {
              'data-aos': 'fade-right',
              'data-aos-anchor-placement': 'top-bottom',
              className:
                'relative mt-28 h-[36rem] w-full flex  xl:h-[60rem]  xl:left-[15rem]  ',
              children: [
                jsxRuntimeExports.jsx('div', {
                  className:
                    'absolute  left-4 flex w-[19rem] lg:left-36 lg:w-[40rem] lg:top-8 xl:left-48 xl:top-24 xl:w-[90rem]  z-10 ',
                  children: jsxRuntimeExports.jsx('span', {
                    className:
                      'text-[1.6rem] top-10 leading-[1.6rem] lg:text-4xl xl:text-[5rem] xl:leading-[1.1]  frame-text stroke-2 stroke-black font-primaryBold text-white absolute  ',
                    children:
                      "AFTUR ENTURING THA BLECK WHOLE, WEA LOZT CUMMUNIKASHUN, BUTT WEN THAY LAND AWN MURS, IM SHURE THAY'LL HEV UH CRAY-Z STOREY TWO TEL...",
                  }),
                }),
                jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                  src: './assets/frame-5.png',
                  alt: 'How to Get',
                  className: 'absolute left-28  xl:w-[100rem]',
                  width: e ? 350 : '',
                }),
                jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                  src: './assets/frame-long-1.webp',
                  alt: 'How to Get',
                  className:
                    'absolute -top-12 -left-14 lg:left-8 -z-[1] border-child-1 xl:w-[100rem] ',
                  width: e ? 350 : '',
                }),
                jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                  src: './assets/frame-long-2.webp',
                  alt: 'How to Get',
                  className:
                    ' absolute -top-6 -left-8 -z-[1] lg:left-16 border-child-2 xl:w-[100rem]',
                  width: e ? 350 : '',
                }),
                jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                  src: './assets/frame-long-3.webp',
                  alt: 'How to Get',
                  className:
                    'absolute left-0 -z-[1] lg:left-20  border-child-3 xl:w-[100rem]',
                  width: e ? 350 : '',
                }),
                jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                  src: './assets/frame-5-img.webp',
                  alt: 'How to Get',
                  className:
                    'absolute right-48 z-20 lab-animation xl:right-[15%] xl:w-[60rem]',
                }),
              ],
            }),
      ],
    })
  ),
  Meme = () =>
    jsxRuntimeExports.jsxs('div', {
      id: 'meme',
      className:
        'flex flex-col items-center justify-center h-auto relative overflow-hidden z-[2]',
      children: [
        jsxRuntimeExports.jsx('span', {
          className:
            'text-title-gd-1 font-primaryBold text-9xl my-32 xl:text-[15rem] xl:mt-56',
          children: 'MEMES',
        }),
        jsxRuntimeExports.jsxs('div', {
          className: 'flex justify-center gap-0 lg:gap-8 mb-12 px-8 ',
          children: [
            jsxRuntimeExports.jsx('a', {
              href: 'https://t.me/ElonMaxSol',
              className:
                'h-[200px] w-[229px] flex lg:h-[560px] lg:w-[640px] bg-neutral-50 rounded-lg meme-1 cursor-pointer',
              children: jsxRuntimeExports.jsx('div', {
                className: 'w-full h-full',
                children: jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                  src: './assets/meme-1.webp',
                  alt: 'How to Get',
                  className: 'object-cover ',
                  effect: 'blur',
                  visibleByDefault: !0,
                }),
              }),
            }),
            jsxRuntimeExports.jsx('a', {
              href: 'https://t.me/ElonMaxSol',
              className:
                'h-[200px] w-[229px] flex lg:h-[560px] lg:w-[640px] bg-neutral-50 rounded-lg meme-2 cursor-pointer',
              children: jsxRuntimeExports.jsx('div', {
                className: '',
                children: jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                  src: './assets/meme-2.webp',
                  alt: 'How to Get',
                  className: 'object-cover',
                  effect: 'blur',
                }),
              }),
            }),
          ],
        }),
        jsxRuntimeExports.jsxs('div', {
          className: 'flex justify-center gap-0 lg:gap-8 mb-12',
          children: [
            jsxRuntimeExports.jsx('a', {
              href: 'https://t.me/ElonMaxSol',
              className:
                'h-[200px] w-[229px] flex lg:h-[560px] lg:w-[640px] bg-neutral-50 rounded-lg meme-3 cursor-pointer',
              children: jsxRuntimeExports.jsxs('div', {
                className: '',
                children: [
                  ' ',
                  jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                    src: './assets/meme-3.webp',
                    alt: 'How to Get',
                    className: 'object-cover',
                    effect: 'blur',
                    visibleByDefault: !0,
                  }),
                ],
              }),
            }),
            jsxRuntimeExports.jsx('a', {
              href: 'https://t.me/ElonMaxSol',
              className:
                'h-[200px] w-[229px] flex lg:h-[560px] lg:w-[640px] bg-neutral-50 rounded-lg meme-4 cursor-pointer',
              children: jsxRuntimeExports.jsx('div', {
                className: '',
                children: jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                  src: './assets/meme-4.webp',
                  alt: 'How to Get',
                  className: 'object-cover',
                  effect: 'blur',
                }),
              }),
            }),
          ],
        }),
        jsxRuntimeExports.jsxs('div', {
          className: 'flex justify-center gap-0 lg:gap-8 mb-32 xl:mb-56',
          children: [
            jsxRuntimeExports.jsx('a', {
              href: 'https://t.me/ElonMaxSol',
              className:
                'h-[200px] w-[229px] flex lg:h-[560px] lg:w-[640px] bg-neutral-50 rounded-lg meme-1 cursor-pointer',
              children: jsxRuntimeExports.jsxs('div', {
                className: '',
                children: [
                  ' ',
                  jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                    src: './assets/meme-5.webp',
                    alt: 'How to Get',
                    className: 'object-cover',
                    effect: 'blur',
                    visibleByDefault: !0,
                  }),
                ],
              }),
            }),
            jsxRuntimeExports.jsx('a', {
              href: 'https://t.me/ElonMaxSol',
              className:
                'h-[200px] w-[229px] flex lg:h-[560px] lg:w-[640px] bg-neutral-50 rounded-lg meme-2 cursor-pointer',
              children: jsxRuntimeExports.jsxs('div', {
                className: '',
                children: [
                  ' ',
                  jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                    src: './assets/meme-6.webp',
                    alt: 'How to Get',
                    className: 'object-cover',
                    effect: 'blur',
                  }),
                ],
              }),
            }),
          ],
        }),
        jsxRuntimeExports.jsx('div', {
          className: 'mt-32 z-10 overflow-hidden absolute bottom-0  ',
          children: jsxRuntimeExports.jsx(RunningText, {}),
        }),
      ],
    }),
  Contact = ({ isMobile: e }) =>
    jsxRuntimeExports.jsx('div', {
      id: 'contact',
      className:
        ' h-full bg-[#141147] lg:h-full   w-full relative top-0 z-[2] ',
      children: jsxRuntimeExports.jsxs('div', {
        className: 'h-full lg:h-auto w-full relative overflow-hidden -z-10',
        children: [
          jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
            src: './assets/contact-bg.webp',
            alt: 'Logo',
            className: 'object-cover absolute h-full w-full  ',
          }),
          jsxRuntimeExports.jsx('div', {
            className: 'flex justify-center items-center w-full',
            children: jsxRuntimeExports.jsx('span', {
              className:
                'text-title-gd-2 relative font-primaryBold text-7xl lg:text-9xl top-12 lg:top-24  xl:text-[15rem]  ',
              children: 'CONTACT US',
            }),
          }),
          jsxRuntimeExports.jsx('div', {
            className:
              'flex lg:top-32 justify-center items-center w-full mt-16 z-10 lg:translate-x-10 relative',
            children: jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
              src: './assets/contact-group.webp',
              alt: 'Logo',
              className: 'relative contact-group-animation z-10  xl:w-[65rem] ',
            }),
          }),
          jsxRuntimeExports.jsxs('div', {
            className:
              'flex justify-between items-center -top-32 translate-y-32 z-0 relative',
            children: [
              jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                src: './assets/left-rocket.webp',
                alt: 'Logo',
                className: 'relative  xl:w-[35rem] xl:left-72   ',
                width: e ? 160 : '',
                visibleByDefault: !0,
              }),
              jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                src: './assets/right-rocket.webp',
                alt: 'Logo',
                className: 'relative  xl:w-[35rem] xl:right-72   ',
                width: e ? 160 : '',
                visibleByDefault: !0,
              }),
            ],
          }),
          jsxRuntimeExports.jsxs('div', {
            className:
              'flex absolute flex-col lg:bottom-[10%] items-center justify-center z-40 bottom-16 xl:gap-[8rem]  gap-8 w-full',
            children: [
              jsxRuntimeExports.jsx('span', {
                className:
                  ' text-title-gd-3 lg:py-4 text-4xl lg:text-6xl  font-primaryBold relative xl:text-8xl ',
                children: '',
              }),
              jsxRuntimeExports.jsxs('div', {
                className: 'flex gap-8 px-12 relative xl:gap-[12rem] z-10',
                children: [
                  jsxRuntimeExports.jsx('a', {
                    href: 'https://x.com/ElonMaxSol',
                    target: '_blank',
                    children: jsxRuntimeExports.jsx(
                      buildExports.LazyLoadImage,
                      {
                        src: './assets/x-logo.svg',
                        alt: 'Logo',
                        className:
                          'relative xl:w-[12rem] cursor-pointer hover:-rotate-12 hover:scale-110 transition-transform duration-500 ease-in-out',
                      }
                    ),
                  }),
                  jsxRuntimeExports.jsx('a', {
                    href: 'https://t.me/ElonMaxSol',
                    target: '_blank',
                    children: jsxRuntimeExports.jsx(
                      buildExports.LazyLoadImage,
                      {
                        src: './assets/telegram-logo.svg',
                        alt: 'Logo',
                        className:
                          'relative xl:w-[12rem] cursor-pointer hover:rotate-6 hover:scale-110 transition-transform duration-500 ease-in-out ',
                      }
                    ),
                  }),
                  jsxRuntimeExports.jsx('a', {
                    href: 'https://solscan.io/token/MAXgzJZaR31koHo8Gwj84ZfNKDCA3tRtzjySMdKMiHj',
                    target: '_blank',
                    children: jsxRuntimeExports.jsx(
                      buildExports.LazyLoadImage,
                      {
                        src: './assets/sol-logo.svg',
                        alt: 'Logo',
                        className:
                          'relative xl:w-[12rem] cursor-pointer hover:-rotate-12 hover:scale-110 transition-transform duration-500 ease-in-out  ',
                      }
                    ),
                  }),
                ],
              }),
              jsxRuntimeExports.jsx('span', {
                className:
                  ' text-title-gd-2 text-4xl lg:text-6xl  font-primaryBold relative -bottom-8 lg:bottom-0 xl:text-8xl  ',
                children: '$max copyright 2024',
              }),
            ],
          }),
        ],
      }),
    }),
  SplashScreen = ({ handleCloseSplash: e }) => {
    const [o, i] = reactExports.useState(!1);
    return (
      reactExports.useEffect(() => {
        setInterval(() => {
          i(!o);
        }, 2e3);
      }, []),
      jsxRuntimeExports.jsxs('div', {
        className:
          'w-full h-[100vh] flex justify-center items-center absolute  z-[99] overflow-hidden ',
        children: [
          jsxRuntimeExports.jsx('div', {
            className: 'h-full w-full bg-[#110f40]  absolute',
          }),
          jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
            src: './assets/contact-group.webp',
            alt: 'Logo',
            className:
              'absolute z-[9999] w-[35rem] top-0 left-4 lg:left-auto xl:w-[70rem]',
          }),
          jsxRuntimeExports.jsxs('div', {
            className:
              'flex w-full h-full items-center justify-center absolute ',
            children: [
              jsxRuntimeExports.jsxs('div', {
                className:
                  'flex flex-col justify-center items-center gap-8 relative -bottom-16 xl:-bottom-40 ',
                children: [
                  jsxRuntimeExports.jsx('span', {
                    className:
                      ' text-title-gd-3 xl:text-[12rem] lg:text-7xl text-6xl text-center px-4 lg:px-0 font-primaryBold z-[9999] ',
                    children: 'WELCOME TO ELON MAX',
                  }),
                  jsxRuntimeExports.jsx('span', {
                    className:
                      ' text-white xl:text-[5rem] lg:text-4xl text-2xl px-8 text-center font-primaryBold z-[9999] ',
                    children: 'ENTUR THA ROCKITCHIP AND HEAD STRATE TWO MURS',
                  }),
                  jsxRuntimeExports.jsxs('div', {
                    className:
                      'flex lg:flex-row flex-col gap-2 lg:gap-8 xl:gap-20 xl:mt-52 lg:mt-20',
                    children: [
                      jsxRuntimeExports.jsx('div', {
                        className:
                          ' z-[9999] flex lg:px-20 px-6 py-1 lg:py-2 xl:px-32 xl:py-4 button-splash text-neutral-50 xl:rounded-[2rem] xl:border-[6px]   items-center justify-center rounded-2xl button-splash border-2 lg:border-[3px] border-neutral-50',
                        children: jsxRuntimeExports.jsx('button', {
                          className: 'w-full h-full',
                          onClick: e,
                          children: jsxRuntimeExports.jsx('span', {
                            className:
                              'z-10 font-primaryBold text-4xl xl:text-9xl lg:text-5xl',
                            children: 'ENTUR',
                          }),
                        }),
                      }),
                      jsxRuntimeExports.jsx('div', {
                        className:
                          ' z-[9999] text-neutral-50 flex  lg:px-20 px-10 py-1 lg:py-2 button-splash-2 xl:rounded-[2rem]  xl:border-[6px]  items-center justify-center rounded-2xl button-splash border-2 lg:border-[3px] border-neutral-50',
                        children: jsxRuntimeExports.jsx('a', {
                          href: 'https://raydium.io/swap/?inputMint=sol&outputMint=MAXgzJZaR31koHo8Gwj84ZfNKDCA3tRtzjySMdKMiHj',
                          target: 'blank',
                          children: jsxRuntimeExports.jsx('button', {
                            className: 'w-full h-full',
                            children: jsxRuntimeExports.jsx('span', {
                              className:
                                'z-10 font-primaryBold  xl:text-9xl  text-4xl lg:text-5xl',
                              children: 'GET $MAX',
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              jsxRuntimeExports.jsx('div', {
                className:
                  'lg:flex hidden absolute overflow-hidden justify-center w-[70%] rounded-3xl border-4 border-neutral-50 h-[90%]  bg-neutral-50',
                children: jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                  src: './assets/bg-splashh.webp',
                  alt: 'Logo',
                  className: `object-cover ${
                    o ? 'splash-bg' : ''
                  } lg:w-full h-auto absolute z-[999] opacity-100 hidden lg:block`,
                }),
              }),
              jsxRuntimeExports.jsx('div', {
                className:
                  'flex absolute overflow-hidden justify-center w-[90%] rounded-lg border-4 border-neutral-50 h-3/4 lg:hidden  bg-neutral-50',
                children: jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                  src: './assets/splash-mobile.webp',
                  alt: 'Logo',
                  className:
                    'object-cover w-full splash-bg z-[999] opacity-100 block lg:hidden',
                }),
              }),
            ],
          }),
        ],
      })
    );
  };
var bundle = (function (e) {
  var o = {};
  function i(s) {
    if (o[s]) return o[s].exports;
    var a = (o[s] = { i: s, l: !1, exports: {} });
    return e[s].call(a.exports, a, a.exports, i), (a.l = !0), a.exports;
  }
  return (
    (i.m = e),
    (i.c = o),
    (i.d = function (s, a, c) {
      i.o(s, a) || Object.defineProperty(s, a, { enumerable: !0, get: c });
    }),
    (i.r = function (s) {
      typeof Symbol < 'u' &&
        Symbol.toStringTag &&
        Object.defineProperty(s, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(s, '__esModule', { value: !0 });
    }),
    (i.t = function (s, a) {
      if (
        (1 & a && (s = i(s)),
        8 & a || (4 & a && typeof s == 'object' && s && s.__esModule))
      )
        return s;
      var c = Object.create(null);
      if (
        (i.r(c),
        Object.defineProperty(c, 'default', { enumerable: !0, value: s }),
        2 & a && typeof s != 'string')
      )
        for (var d in s)
          i.d(
            c,
            d,
            function (h) {
              return s[h];
            }.bind(null, d)
          );
      return c;
    }),
    (i.n = function (s) {
      var a =
        s && s.__esModule
          ? function () {
              return s.default;
            }
          : function () {
              return s;
            };
      return i.d(a, 'a', a), a;
    }),
    (i.o = function (s, a) {
      return Object.prototype.hasOwnProperty.call(s, a);
    }),
    (i.p = ''),
    i((i.s = 2))
  );
})([
  function (e, o) {
    e.exports = requirePropTypes();
  },
  function (e, o) {
    e.exports = reactExports;
  },
  function (module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__),
      function (module) {
        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1),
          react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_0__
          ),
          prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
          prop_types__WEBPACK_IMPORTED_MODULE_1___default =
            __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),
          enterModule;
        function _typeof(e) {
          return (_typeof =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (o) {
                  return typeof o;
                }
              : function (o) {
                  return o &&
                    typeof Symbol == 'function' &&
                    o.constructor === Symbol &&
                    o !== Symbol.prototype
                    ? 'symbol'
                    : typeof o;
                })(e);
        }
        function _extends() {
          return (_extends =
            Object.assign ||
            function (e) {
              for (var o = 1; o < arguments.length; o++) {
                var i = arguments[o];
                for (var s in i)
                  Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
              }
              return e;
            }).apply(this, arguments);
        }
        function _classCallCheck(e, o) {
          if (!(e instanceof o))
            throw new TypeError('Cannot call a class as a function');
        }
        function _defineProperties(e, o) {
          for (var i = 0; i < o.length; i++) {
            var s = o[i];
            (s.enumerable = s.enumerable || !1),
              (s.configurable = !0),
              'value' in s && (s.writable = !0),
              Object.defineProperty(e, s.key, s);
          }
        }
        function _createClass(e, o, i) {
          return o && _defineProperties(e.prototype, o), e;
        }
        function _inherits(e, o) {
          if (typeof o != 'function' && o !== null)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          (e.prototype = Object.create(o && o.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            o && _setPrototypeOf(e, o);
        }
        function _setPrototypeOf(e, o) {
          return (_setPrototypeOf =
            Object.setPrototypeOf ||
            function (i, s) {
              return (i.__proto__ = s), i;
            })(e, o);
        }
        function _createSuper(e) {
          return function () {
            var o,
              i = _getPrototypeOf(e);
            if (_isNativeReflectConstruct()) {
              var s = _getPrototypeOf(this).constructor;
              o = Reflect.construct(i, arguments, s);
            } else o = i.apply(this, arguments);
            return _possibleConstructorReturn(this, o);
          };
        }
        function _possibleConstructorReturn(e, o) {
          return !o || (_typeof(o) !== 'object' && typeof o != 'function')
            ? _assertThisInitialized(e)
            : o;
        }
        function _assertThisInitialized(e) {
          if (e === void 0)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function _isNativeReflectConstruct() {
          if (
            typeof Reflect > 'u' ||
            !Reflect.construct ||
            Reflect.construct.sham
          )
            return !1;
          if (typeof Proxy == 'function') return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch {
            return !1;
          }
        }
        function _getPrototypeOf(e) {
          return (_getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              })(e);
        }
        function _defineProperty(e, o, i) {
          return (
            o in e
              ? Object.defineProperty(e, o, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[o] = i),
            e
          );
        }
        (enterModule =
          typeof reactHotLoaderGlobal < 'u'
            ? reactHotLoaderGlobal.enterModule
            : void 0),
          enterModule && enterModule(module),
          typeof reactHotLoaderGlobal < 'u' &&
            reactHotLoaderGlobal.default.signature;
        var ReactAudioPlayer = (function (_Component) {
          _inherits(ReactAudioPlayer, _Component);
          var _super = _createSuper(ReactAudioPlayer);
          function ReactAudioPlayer() {
            var e;
            _classCallCheck(this, ReactAudioPlayer);
            for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++)
              i[s] = arguments[s];
            return (
              _defineProperty(
                _assertThisInitialized(
                  (e = _super.call.apply(_super, [this].concat(i)))
                ),
                'audioEl',
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef()
              ),
              _defineProperty(
                _assertThisInitialized(e),
                'listenTracker',
                void 0
              ),
              _defineProperty(
                _assertThisInitialized(e),
                'onError',
                function (a) {
                  var c, d;
                  return (c = (d = e.props).onError) === null || c === void 0
                    ? void 0
                    : c.call(d, a);
                }
              ),
              _defineProperty(
                _assertThisInitialized(e),
                'onCanPlay',
                function (a) {
                  var c, d;
                  return (c = (d = e.props).onCanPlay) === null || c === void 0
                    ? void 0
                    : c.call(d, a);
                }
              ),
              _defineProperty(
                _assertThisInitialized(e),
                'onCanPlayThrough',
                function (a) {
                  var c, d;
                  return (c = (d = e.props).onCanPlayThrough) === null ||
                    c === void 0
                    ? void 0
                    : c.call(d, a);
                }
              ),
              _defineProperty(
                _assertThisInitialized(e),
                'onPlay',
                function (a) {
                  var c, d;
                  e.setListenTrack(),
                    (c = (d = e.props).onPlay) === null ||
                      c === void 0 ||
                      c.call(d, a);
                }
              ),
              _defineProperty(
                _assertThisInitialized(e),
                'onAbort',
                function (a) {
                  var c, d;
                  e.clearListenTrack(),
                    (c = (d = e.props).onAbort) === null ||
                      c === void 0 ||
                      c.call(d, a);
                }
              ),
              _defineProperty(
                _assertThisInitialized(e),
                'onEnded',
                function (a) {
                  var c, d;
                  e.clearListenTrack(),
                    (c = (d = e.props).onEnded) === null ||
                      c === void 0 ||
                      c.call(d, a);
                }
              ),
              _defineProperty(
                _assertThisInitialized(e),
                'onPause',
                function (a) {
                  var c, d;
                  e.clearListenTrack(),
                    (c = (d = e.props).onPause) === null ||
                      c === void 0 ||
                      c.call(d, a);
                }
              ),
              _defineProperty(
                _assertThisInitialized(e),
                'onSeeked',
                function (a) {
                  var c, d;
                  (c = (d = e.props).onSeeked) === null ||
                    c === void 0 ||
                    c.call(d, a);
                }
              ),
              _defineProperty(
                _assertThisInitialized(e),
                'onLoadedMetadata',
                function (a) {
                  var c, d;
                  (c = (d = e.props).onLoadedMetadata) === null ||
                    c === void 0 ||
                    c.call(d, a);
                }
              ),
              _defineProperty(
                _assertThisInitialized(e),
                'onVolumeChanged',
                function (a) {
                  var c, d;
                  (c = (d = e.props).onVolumeChanged) === null ||
                    c === void 0 ||
                    c.call(d, a);
                }
              ),
              e
            );
          }
          return (
            _createClass(ReactAudioPlayer, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.audioEl.current;
                  e &&
                    (this.updateVolume(this.props.volume),
                    e.addEventListener('error', this.onError),
                    e.addEventListener('canplay', this.onCanPlay),
                    e.addEventListener('canplaythrough', this.onCanPlayThrough),
                    e.addEventListener('play', this.onPlay),
                    e.addEventListener('abort', this.onAbort),
                    e.addEventListener('ended', this.onEnded),
                    e.addEventListener('pause', this.onPause),
                    e.addEventListener('seeked', this.onSeeked),
                    e.addEventListener('loadedmetadata', this.onLoadedMetadata),
                    e.addEventListener('volumechange', this.onVolumeChanged));
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  var e = this.audioEl.current;
                  e &&
                    (e.removeEventListener('error', this.onError),
                    e.removeEventListener('canplay', this.onCanPlay),
                    e.removeEventListener(
                      'canplaythrough',
                      this.onCanPlayThrough
                    ),
                    e.removeEventListener('play', this.onPlay),
                    e.removeEventListener('abort', this.onAbort),
                    e.removeEventListener('ended', this.onEnded),
                    e.removeEventListener('pause', this.onPause),
                    e.removeEventListener('seeked', this.onSeeked),
                    e.removeEventListener(
                      'loadedmetadata',
                      this.onLoadedMetadata
                    ),
                    e.removeEventListener(
                      'volumechange',
                      this.onVolumeChanged
                    ));
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  this.updateVolume(this.props.volume);
                },
              },
              {
                key: 'setListenTrack',
                value: function () {
                  var e = this;
                  if (!this.listenTracker) {
                    var o = this.props.listenInterval;
                    this.listenTracker = window.setInterval(function () {
                      var i, s;
                      e.audioEl.current &&
                        ((i = (s = e.props).onListen) === null ||
                          i === void 0 ||
                          i.call(s, e.audioEl.current.currentTime));
                    }, o);
                  }
                },
              },
              {
                key: 'updateVolume',
                value: function (e) {
                  var o = this.audioEl.current;
                  o !== null &&
                    typeof e == 'number' &&
                    e !== (o == null ? void 0 : o.volume) &&
                    (o.volume = e);
                },
              },
              {
                key: 'clearListenTrack',
                value: function () {
                  this.listenTracker &&
                    (clearInterval(this.listenTracker),
                    delete this.listenTracker);
                },
              },
              {
                key: 'render',
                value: function () {
                  var e =
                      this.props.children ||
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'p',
                        null,
                        'Your browser does not support the ',
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'code',
                          null,
                          'audio'
                        ),
                        ' element.'
                      ),
                    o = this.props.controls !== !1,
                    i = this.props.title ? this.props.title : this.props.src,
                    s = {};
                  return (
                    this.props.controlsList &&
                      (s.controlsList = this.props.controlsList),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'audio',
                      _extends(
                        {
                          autoPlay: this.props.autoPlay,
                          className: 'react-audio-player '.concat(
                            this.props.className
                          ),
                          controls: o,
                          crossOrigin: this.props.crossOrigin,
                          id: this.props.id,
                          loop: this.props.loop,
                          muted: this.props.muted,
                          preload: this.props.preload,
                          ref: this.audioEl,
                          src: this.props.src,
                          style: this.props.style,
                          title: i,
                        },
                        s
                      ),
                      e
                    )
                  );
                },
              },
              {
                key: '__reactstandin__regenerateByEval',
                value: function __reactstandin__regenerateByEval(key, code) {
                  this[key] = eval(code);
                },
              },
            ]),
            ReactAudioPlayer
          );
        })(react__WEBPACK_IMPORTED_MODULE_0__.Component);
        _defineProperty(ReactAudioPlayer, 'propTypes', void 0),
          _defineProperty(ReactAudioPlayer, 'defaultProps', void 0),
          (ReactAudioPlayer.defaultProps = {
            autoPlay: !1,
            children: null,
            className: '',
            controls: !1,
            controlsList: '',
            id: '',
            listenInterval: 1e4,
            loop: !1,
            muted: !1,
            onAbort: function () {},
            onCanPlay: function () {},
            onCanPlayThrough: function () {},
            onEnded: function () {},
            onError: function () {},
            onListen: function () {},
            onPause: function () {},
            onPlay: function () {},
            onSeeked: function () {},
            onVolumeChanged: function () {},
            onLoadedMetadata: function () {},
            preload: 'metadata',
            style: {},
            title: '',
            volume: 1,
          }),
          (ReactAudioPlayer.propTypes = {
            autoPlay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
            className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            controls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            controlsList:
              prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            crossOrigin:
              prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            listenInterval:
              prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
            loop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            muted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
            onAbort: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onCanPlay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onCanPlayThrough:
              prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onEnded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onListen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onLoadedMetadata:
              prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onPause: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onPlay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onSeeked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            onVolumeChanged:
              prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
            preload: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([
              '',
              'none',
              'metadata',
              'auto',
            ]),
            src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.objectOf(
              prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
            ),
            title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
            volume: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
          });
        var _default = ReactAudioPlayer,
          reactHotLoader,
          leaveModule;
        (__webpack_exports__.default = _default),
          (reactHotLoader =
            typeof reactHotLoaderGlobal < 'u'
              ? reactHotLoaderGlobal.default
              : void 0),
          reactHotLoader &&
            (reactHotLoader.register(
              ReactAudioPlayer,
              'ReactAudioPlayer',
              '/home/justin/Projects/react-audio-player/src/index.tsx'
            ),
            reactHotLoader.register(
              _default,
              'default',
              '/home/justin/Projects/react-audio-player/src/index.tsx'
            )),
          (leaveModule =
            typeof reactHotLoaderGlobal < 'u'
              ? reactHotLoaderGlobal.leaveModule
              : void 0),
          leaveModule && leaveModule(module);
      }.call(this, __webpack_require__(3)(module));
  },
  function (e, o) {
    e.exports = function (i) {
      if (!i.webpackPolyfill) {
        var s = Object.create(i);
        s.children || (s.children = []),
          Object.defineProperty(s, 'loaded', {
            enumerable: !0,
            get: function () {
              return s.l;
            },
          }),
          Object.defineProperty(s, 'id', {
            enumerable: !0,
            get: function () {
              return s.i;
            },
          }),
          Object.defineProperty(s, 'exports', { enumerable: !0 }),
          (s.webpackPolyfill = 1);
      }
      return s;
    };
  },
]);
const ReactAudioPlayer = getDefaultExportFromCjs(bundle),
  LandingPages = () => {
    const [e, o] = reactExports.useState(window.innerWidth <= 768),
      [i, s] = reactExports.useState(!0),
      a = () => {
        o(window.innerWidth <= 768);
      };
    reactExports.useEffect(
      () => (
        window.addEventListener('resize', a),
        a(),
        () => {
          window.removeEventListener('resize', a), clearTimeout();
        }
      ),
      []
    );
    const c = () => {
      s(!1);
    };
    return i
      ? jsxRuntimeExports.jsx(SplashScreen, {
          isMobile: e,
          handleCloseSplash: c,
        })
      : jsxRuntimeExports.jsxs('body', {
          className: 'w-full  relative h-auto bg-slate-900 overflow-hidden ',
          children: [
            jsxRuntimeExports.jsxs('div', {
              className: 'w-full h-full absolute z-[1] overflow-hidden',
              children: [
                jsxRuntimeExports.jsx('div', {
                  className: 'sparkle-container',
                  children: [...Array(e ? 200 : 900)].map((d, h) =>
                    jsxRuntimeExports.jsx(
                      'img',
                      {
                        src: './assets/sparkle.webp',
                        alt: 'Sparkle',
                        className: 'sparkle',
                        style: {
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          width: `${Math.random() * 5 + 5}px`,
                          height: `${Math.random() * 5 + 5}px`,
                          position: 'absolute',
                          animation: `sparkle ${
                            Math.random() * 5 + 2
                          }s infinite`,
                        },
                      },
                      h
                    )
                  ),
                }),
                jsxRuntimeExports.jsx(buildExports.LazyLoadImage, {
                  src: './assets/body-bg.svg',
                  alt: 'Logo',
                  className:
                    '-z-10 absolute object-cover w-full h-full background-image',
                }),
              ],
            }),
            jsxRuntimeExports.jsx(ReactAudioPlayer, {
              src: './assets/audio-mosk.mp3',
              autoPlay: !0,
              loop: !0,
            }),
            jsxRuntimeExports.jsx(Header, { isMobile: e }),
            jsxRuntimeExports.jsx(Hero, { isMobile: e }),
            jsxRuntimeExports.jsx(About, { isMobile: e }),
            jsxRuntimeExports.jsx(Price, { isMobile: e }),
            jsxRuntimeExports.jsx(Maxonomics, { isMobile: e }),
            jsxRuntimeExports.jsx(HowToGet, { isMobile: e }),
            jsxRuntimeExports.jsx(Plans, { isMobile: e }),
            jsxRuntimeExports.jsx(Meme, { isMobile: e }),
            jsxRuntimeExports.jsx(Contact, { isMobile: e }),
          ],
        });
  };
function App() {
  return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
    children: jsxRuntimeExports.jsx(LandingPages, {}),
  });
}
client.createRoot(document.getElementById('root')).render(
  jsxRuntimeExports.jsx(React$1.StrictMode, {
    children: jsxRuntimeExports.jsx(App, {}),
  })
);
