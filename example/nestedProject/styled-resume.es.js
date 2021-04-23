import { jsx, jsxs, Fragment as Fragment$1 } from "preact/jsx-runtime";
import { useState, useEffect } from "preact/hooks";
import r$1, { useContext, createElement } from "preact/compat";

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function () {
  __assign =
    Object.assign ||
    function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    };
  return __assign.apply(this, arguments);
};

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}

function createCommonjsModule(fn) {
  var module = { exports: {} };
  return fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1 = "function" === typeof Symbol && Symbol.for,
  c = b$1 ? Symbol.for("react.element") : 60103,
  d = b$1 ? Symbol.for("react.portal") : 60106,
  e = b$1 ? Symbol.for("react.fragment") : 60107,
  f = b$1 ? Symbol.for("react.strict_mode") : 60108,
  g$1 = b$1 ? Symbol.for("react.profiler") : 60114,
  h = b$1 ? Symbol.for("react.provider") : 60109,
  k$1 = b$1 ? Symbol.for("react.context") : 60110,
  l = b$1 ? Symbol.for("react.async_mode") : 60111,
  m = b$1 ? Symbol.for("react.concurrent_mode") : 60111,
  n = b$1 ? Symbol.for("react.forward_ref") : 60112,
  p = b$1 ? Symbol.for("react.suspense") : 60113,
  q$1 = b$1 ? Symbol.for("react.suspense_list") : 60120,
  r = b$1 ? Symbol.for("react.memo") : 60115,
  t = b$1 ? Symbol.for("react.lazy") : 60116,
  v$1 = b$1 ? Symbol.for("react.block") : 60121,
  w$1 = b$1 ? Symbol.for("react.fundamental") : 60117,
  x$1 = b$1 ? Symbol.for("react.responder") : 60118,
  y$1 = b$1 ? Symbol.for("react.scope") : 60119;
function z$1(a) {
  if ("object" === typeof a && null !== a) {
    var u = a.$$typeof;
    switch (u) {
      case c:
        switch (((a = a.type), a)) {
          case l:
          case m:
          case e:
          case g$1:
          case f:
          case p:
            return a;
          default:
            switch (((a = a && a.$$typeof), a)) {
              case k$1:
              case n:
              case t:
              case r:
              case h:
                return a;
              default:
                return u;
            }
        }
      case d:
        return u;
    }
  }
}
function A$1(a) {
  return z$1(a) === m;
}
var AsyncMode = l;
var ConcurrentMode = m;
var ContextConsumer = k$1;
var ContextProvider = h;
var Element = c;
var ForwardRef = n;
var Fragment = e;
var Lazy = t;
var Memo = r;
var Portal = d;
var Profiler = g$1;
var StrictMode = f;
var Suspense = p;
var isAsyncMode = function (a) {
  return A$1(a) || z$1(a) === l;
};
var isConcurrentMode = A$1;
var isContextConsumer = function (a) {
  return z$1(a) === k$1;
};
var isContextProvider = function (a) {
  return z$1(a) === h;
};
var isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};
var isForwardRef = function (a) {
  return z$1(a) === n;
};
var isFragment = function (a) {
  return z$1(a) === e;
};
var isLazy = function (a) {
  return z$1(a) === t;
};
var isMemo = function (a) {
  return z$1(a) === r;
};
var isPortal = function (a) {
  return z$1(a) === d;
};
var isProfiler = function (a) {
  return z$1(a) === g$1;
};
var isStrictMode = function (a) {
  return z$1(a) === f;
};
var isSuspense = function (a) {
  return z$1(a) === p;
};
var isValidElementType = function (a) {
  return (
    "string" === typeof a ||
    "function" === typeof a ||
    a === e ||
    a === m ||
    a === g$1 ||
    a === f ||
    a === p ||
    a === q$1 ||
    ("object" === typeof a &&
      null !== a &&
      (a.$$typeof === t ||
        a.$$typeof === r ||
        a.$$typeof === h ||
        a.$$typeof === k$1 ||
        a.$$typeof === n ||
        a.$$typeof === w$1 ||
        a.$$typeof === x$1 ||
        a.$$typeof === y$1 ||
        a.$$typeof === v$1))
  );
};
var typeOf = z$1;

var reactIs_production_min = {
  AsyncMode: AsyncMode,
  ConcurrentMode: ConcurrentMode,
  ContextConsumer: ContextConsumer,
  ContextProvider: ContextProvider,
  Element: Element,
  ForwardRef: ForwardRef,
  Fragment: Fragment,
  Lazy: Lazy,
  Memo: Memo,
  Portal: Portal,
  Profiler: Profiler,
  StrictMode: StrictMode,
  Suspense: Suspense,
  isAsyncMode: isAsyncMode,
  isConcurrentMode: isConcurrentMode,
  isContextConsumer: isContextConsumer,
  isContextProvider: isContextProvider,
  isElement: isElement,
  isForwardRef: isForwardRef,
  isFragment: isFragment,
  isLazy: isLazy,
  isMemo: isMemo,
  isPortal: isPortal,
  isProfiler: isProfiler,
  isStrictMode: isStrictMode,
  isSuspense: isSuspense,
  isValidElementType: isValidElementType,
  typeOf: typeOf,
};

var reactIs = createCommonjsModule(function (module) {
  {
    module.exports = reactIs_production_min;
  }
});

function stylis_min(W) {
  function M(d, c, e, h, a) {
    for (
      var m = 0,
        b = 0,
        v = 0,
        n = 0,
        q,
        g,
        x = 0,
        K = 0,
        k,
        u = (k = q = 0),
        l = 0,
        r = 0,
        I = 0,
        t = 0,
        B = e.length,
        J = B - 1,
        y,
        f = "",
        p = "",
        F = "",
        G = "",
        C;
      l < B;

    ) {
      g = e.charCodeAt(l);
      l === J &&
        0 !== b + n + v + m &&
        (0 !== b && (g = 47 === b ? 10 : 47), (n = v = m = 0), B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, "")), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B; ) {
              switch ((g = e.charCodeAt(l))) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch ((g = e.charCodeAt(l + 1))) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (
                                42 === g &&
                                42 === e.charCodeAt(u - 1) &&
                                l + 2 !== u
                              ) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }
                          }
                        }

                        l = u;
                      }
                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g; ) {}
              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, "").trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ""));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A &&
                  ((r = X(O, f, I)),
                  (C = H(3, k, r, c, D, z, t, g, a, h)),
                  (f = r.join("")),
                  void 0 !== C &&
                    0 === (t = (k = C.trim()).length) &&
                    ((g = 0), (k = "")));
                if (0 < t)
                  switch (g) {
                    case 115:
                      f = f.replace(da, ea);

                    case 100:
                    case 109:
                    case 45:
                      k = f + "{" + k + "}";
                      break;

                    case 107:
                      f = f.replace(fa, "$1 $2");
                      k = f + "{" + k + "}";
                      k =
                        1 === w || (2 === w && L("@" + k, 3))
                          ? "@-webkit-" + k + "@" + k
                          : "@" + k;
                      break;

                    default:
                      (k = f + k), 112 === h && (k = ((p += k), ""));
                  }
                else k = "";
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = "";
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, "") : f).trim();
            if (1 < (t = f.length))
              switch (
                (0 === u &&
                  ((q = f.charCodeAt(0)), 45 === q || (96 < q && 123 > q)) &&
                  (t = (f = f.replace(" ", ":")).length),
                0 < A &&
                  void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) &&
                  0 === (t = (f = C.trim()).length) &&
                  (f = "\x00\x00"),
                (q = f.charCodeAt(0)),
                (g = f.charCodeAt(1)),
                q)
              ) {
                case 0:
                  break;

                case 64:
                  if (105 === g || 99 === g) {
                    G += f + e.charAt(l);
                    break;
                  }

                default:
                  58 !== f.charCodeAt(t - 1) &&
                    (p += P(f, q, g, f.charCodeAt(2)));
              }
            I = r = u = q = 0;
            f = "";
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b
            ? (b = 0)
            : 0 === 1 + q &&
              107 !== h &&
              0 < f.length &&
              ((r = 1), (f += "\x00"));
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b)
                switch (x) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    y = "";
                    break;

                  default:
                    32 !== g && (y = " ");
                }
              break;

            case 0:
              y = "\\0";
              break;

            case 12:
              y = "\\f";
              break;

            case 11:
              y = "\\v";
              break;

            case 38:
              0 === n + b + m && ((r = I = 1), (y = "\f" + y));
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u)
                switch (l - u) {
                  case 2:
                    112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                  case 8:
                    111 === K && (E = K);
                }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && ((r = 1), (y += "\r"));
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q)
                  switch (2 * x + 3 * K) {
                    case 533:
                      break;

                    default:
                      q = 1;
                  }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v))
                switch (b) {
                  case 0:
                    switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                      case 235:
                        b = 47;
                        break;

                      case 220:
                        (t = l), (b = 42);
                    }

                    break;

                  case 42:
                    47 === g &&
                      42 === x &&
                      t + 2 !== l &&
                      (33 === e.charCodeAt(t + 2) &&
                        (p += e.substring(t, l + 1)),
                      (y = ""),
                      (b = 0));
                }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (
        0 < A &&
        ((C = H(2, p, r, d, D, z, t, h, a, h)),
        void 0 !== C && 0 === (p = C).length)
      )
        return G + p + F;
      p = r.join(",") + "{" + p + "}";

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ":-moz-$1") + p;
            break;

          case 112:
            p =
              p.replace(Q, "::-webkit-input-$1") +
              p.replace(Q, "::-moz-$1") +
              p.replace(Q, ":-ms-input-$1") +
              p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
      m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? "" : d[0] + " "; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = (b = 0);

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + " ", h[b], e).trim();
          }
        }
    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, "$1" + d.trim());

      case 58:
        return d.trim() + c.replace(F, "$1" + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf("\f"))
          return c.replace(F, (58 === d.charCodeAt(0) ? "" : "$1") + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ";",
      m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(":", 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ";";
      return 1 === w || (2 === w && L(b, 1)) ? "-webkit-" + b + b : b;
    }

    if (0 === w || (2 === w && !L(a, 1))) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return "-webkit-" + a + a;

      case 978:
        return "-webkit-" + a + "-moz-" + a + a;

      case 1019:
      case 983:
        return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return "-webkit-" + a + a;
        if (0 < a.indexOf("image-set(", 11))
          return a.replace(ja, "$1-webkit-$2") + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4))
          switch (a.charCodeAt(5)) {
            case 103:
              return (
                "-webkit-box-" +
                a.replace("-grow", "") +
                "-webkit-" +
                a +
                "-ms-" +
                a.replace("grow", "positive") +
                a
              );

            case 115:
              return (
                "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a
              );

            case 98:
              return (
                "-webkit-" +
                a +
                "-ms-" +
                a.replace("basis", "preferred-size") +
                a
              );
          }
        return "-webkit-" + a + "-ms-" + a + a;

      case 964:
        return "-webkit-" + a + "-ms-flex-" + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a
          .substring(a.indexOf(":", 15))
          .replace("flex-", "")
          .replace("space-between", "justify");
        return (
          "-webkit-box-pack" + b + "-webkit-" + a + "-ms-flex-pack" + b + a
        );

      case 1005:
        return ka.test(a)
          ? a.replace(aa, ":-webkit-") + a.replace(aa, ":-moz-") + a
          : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf("-") + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, "tb");
            break;

          case 232:
            b = a.replace(G, "tb-rl");
            break;

          case 220:
            b = a.replace(G, "lr");
            break;

          default:
            return a;
        }

        return "-webkit-" + a + "-ms-" + b + a;

      case 1017:
        if (-1 === a.indexOf("sticky", 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a)
          .substring(d.indexOf(":", 7) + 1)
          .trim();

        switch ((m = b.charCodeAt(0) + (b.charCodeAt(7) | 0))) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, "-webkit-" + b) + ";" + a;
            break;

          case 207:
          case 102:
            a =
              a.replace(b, "-webkit-" + (102 < m ? "inline-" : "") + "box") +
              ";" +
              a.replace(b, "-webkit-" + b) +
              ";" +
              a.replace(b, "-ms-" + b + "box") +
              ";" +
              a;
        }

        return a + ";";

      case 938:
        if (45 === a.charCodeAt(5))
          switch (a.charCodeAt(6)) {
            case 105:
              return (
                (b = a.replace("-items", "")),
                "-webkit-" + a + "-webkit-box-" + b + "-ms-flex-" + b + a
              );

            case 115:
              return "-webkit-" + a + "-ms-flex-item-" + a.replace(ba, "") + a;

            default:
              return (
                "-webkit-" +
                a +
                "-ms-flex-line-pack" +
                a.replace("align-content", "").replace(ba, "") +
                a
              );
          }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d))
          return 115 === (b = d.substring(d.indexOf(":") + 1)).charCodeAt(0)
            ? P(d.replace("stretch", "fill-available"), c, e, h).replace(
                ":fill-available",
                ":stretch"
              )
            : a.replace(b, "-webkit-" + b) +
                a.replace(b, "-moz-" + b.replace("fill-", "")) +
                a;
        break;

      case 962:
        if (
          ((a =
            "-webkit-" + a + (102 === a.charCodeAt(5) ? "-ms-" + a : "") + a),
          211 === e + h &&
            105 === a.charCodeAt(13) &&
            0 < a.indexOf("transform", 10))
        )
          return (
            a.substring(0, a.indexOf(";", 27) + 1).replace(ma, "$1-webkit-$2") +
            a
          );
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ":" : "{"),
      h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, "$1"), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ";"
      ? e.replace(oa, " or ($1)").substring(4)
      : "(" + c + ")";
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch ((w = S[g].call(B, d, x, e, h, a, m, b, v, n, q))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ("function" === typeof d) S[A++] = d;
        else if ("object" === typeof d)
          for (var c = 0, e = d.length; c < e; ++c) {
            T(d[c]);
          }
        else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d &&
      ((R = null),
      d ? ("function" !== typeof d ? (w = 1) : ((w = 2), (R = d))) : (w = 0));
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && "string" === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A &&
      ((h = H(-2, a, e, e, D, z, a.length, 0, 0, 0)), void 0 !== h && (a = h));
    V = "";
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
    N = /[\0\r\f]/g,
    aa = /: */g,
    ka = /zoo|gra/,
    ma = /([,: ])(transform)/g,
    ia = /,\r+?/g,
    F = /([\t\r\n ])*\f?&/g,
    fa = /@(k\w+)\s*(\S*)\s*/,
    Q = /::(place)/g,
    ha = /:(read-only)/g,
    G = /[svh]\w+-[tblr]{2}/,
    da = /\(\s*(.*)\s*\)/g,
    oa = /([\s\S]*?);/g,
    ba = /-self|flex-/g,
    na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    la = /stretch|:\s*\w+\-(?:conte|avail)/,
    ja = /([^-])(image-set\()/,
    z = 1,
    D = 1,
    E = 0,
    w = 1,
    O = [],
    S = [],
    A = 0,
    R = null,
    Y = 0,
    V = "";
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
};

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize(
  function (prop) {
    return (
      reactPropsRegex.test(prop) ||
      (prop.charCodeAt(0) === 111 &&
        /* o */
        prop.charCodeAt(1) === 110 &&
        /* n */
        prop.charCodeAt(2) < 91)
    );
  }
  /* Z+1 */
);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true,
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true,
};
var FORWARD_REF_STATICS = {
  $$typeof: true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
};
var MEMO_STATICS = {
  $$typeof: true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true,
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above

  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== "string") {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (
        !KNOWN_STATICS[key] &&
        !(blacklist && blacklist[key]) &&
        !(sourceStatics && sourceStatics[key]) &&
        !(targetStatics && targetStatics[key])
      ) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

function v() {
  return (v =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
}
var y = function (e, t) {
    for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
      n.push(t[r], e[r + 1]);
    return n;
  },
  g = function (t) {
    return (
      null !== t &&
      "object" == typeof t &&
      "[object Object]" ===
        (t.toString ? t.toString() : Object.prototype.toString.call(t)) &&
      !reactIs.typeOf(t)
    );
  },
  S = Object.freeze([]),
  w = Object.freeze({});
function E(e) {
  return "function" == typeof e;
}
function b(e) {
  return e.displayName || e.name || "Component";
}
function N(e) {
  return e && "string" == typeof e.styledComponentId;
}
var _ =
    ("undefined" != typeof process &&
      (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR)) ||
    "data-styled",
  A = "undefined" != typeof window && "HTMLElement" in window,
  I = Boolean(
    "boolean" == typeof SC_DISABLE_SPEEDY
      ? SC_DISABLE_SPEEDY
      : "undefined" != typeof process &&
        void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY &&
        "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY
      ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY &&
        process.env.REACT_APP_SC_DISABLE_SPEEDY
      : "undefined" != typeof process &&
        void 0 !== process.env.SC_DISABLE_SPEEDY &&
        "" !== process.env.SC_DISABLE_SPEEDY
      ? "false" !== process.env.SC_DISABLE_SPEEDY &&
        process.env.SC_DISABLE_SPEEDY
      : "production" !== "production"
  );
function D(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw new Error(
    "An error occurred. See https://git.io/JUIaE#" +
      e +
      " for more information." +
      (n.length > 0 ? " Args: " + n.join(", ") : "")
  );
}
var j = (function () {
    function e(e) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = e);
    }
    var t = e.prototype;
    return (
      (t.indexOfGroup = function (e) {
        for (var t = 0, n = 0; n < e; n++) t += this.groupSizes[n];
        return t;
      }),
      (t.insertRules = function (e, t) {
        if (e >= this.groupSizes.length) {
          for (var n = this.groupSizes, r = n.length, o = r; e >= o; )
            (o <<= 1) < 0 && D(16, "" + e);
          (this.groupSizes = new Uint32Array(o)),
            this.groupSizes.set(n),
            (this.length = o);
          for (var i = r; i < o; i++) this.groupSizes[i] = 0;
        }
        for (var s = this.indexOfGroup(e + 1), a = 0, c = t.length; a < c; a++)
          this.tag.insertRule(s, t[a]) && (this.groupSizes[e]++, s++);
      }),
      (t.clearGroup = function (e) {
        if (e < this.length) {
          var t = this.groupSizes[e],
            n = this.indexOfGroup(e),
            r = n + t;
          this.groupSizes[e] = 0;
          for (var o = n; o < r; o++) this.tag.deleteRule(n);
        }
      }),
      (t.getGroup = function (e) {
        var t = "";
        if (e >= this.length || 0 === this.groupSizes[e]) return t;
        for (
          var n = this.groupSizes[e],
            r = this.indexOfGroup(e),
            o = r + n,
            i = r;
          i < o;
          i++
        )
          t += this.tag.getRule(i) + "/*!sc*/\n";
        return t;
      }),
      e
    );
  })(),
  T = new Map(),
  x = new Map(),
  k = 1,
  V = function (e) {
    if (T.has(e)) return T.get(e);
    for (; x.has(k); ) k++;
    var t = k++;
    return T.set(e, t), x.set(t, e), t;
  },
  M = function (e) {
    return x.get(e);
  },
  B = function (e, t) {
    T.set(e, t), x.set(t, e);
  },
  z = "style[" + _ + '][data-styled-version="5.2.3"]',
  L = new RegExp("^" + _ + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  G = function (e, t, n) {
    for (var r, o = n.split(","), i = 0, s = o.length; i < s; i++)
      (r = o[i]) && e.registerName(t, r);
  },
  F = function (e, t) {
    for (
      var n = t.innerHTML.split("/*!sc*/\n"), r = [], o = 0, i = n.length;
      o < i;
      o++
    ) {
      var s = n[o].trim();
      if (s) {
        var a = s.match(L);
        if (a) {
          var c = 0 | parseInt(a[1], 10),
            u = a[2];
          0 !== c && (B(u, c), G(e, u, a[3]), e.getTag().insertRules(c, r)),
            (r.length = 0);
        } else r.push(s);
      }
    }
  },
  Y = function () {
    return "undefined" != typeof window && void 0 !== window.__webpack_nonce__
      ? window.__webpack_nonce__
      : null;
  },
  q = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = (function (e) {
        for (var t = e.childNodes, n = t.length; n >= 0; n--) {
          var r = t[n];
          if (r && 1 === r.nodeType && r.hasAttribute(_)) return r;
        }
      })(n),
      i = void 0 !== o ? o.nextSibling : null;
    r.setAttribute(_, "active"), r.setAttribute("data-styled-version", "5.2.3");
    var s = Y();
    return s && r.setAttribute("nonce", s), n.insertBefore(r, i), r;
  },
  H = (function () {
    function e(e) {
      var t = (this.element = q(e));
      t.appendChild(document.createTextNode("")),
        (this.sheet = (function (e) {
          if (e.sheet) return e.sheet;
          for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
            var o = t[n];
            if (o.ownerNode === e) return o;
          }
          D(17);
        })(t)),
        (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (e, t) {
        try {
          return this.sheet.insertRule(t, e), this.length++, !0;
        } catch (e) {
          return !1;
        }
      }),
      (t.deleteRule = function (e) {
        this.sheet.deleteRule(e), this.length--;
      }),
      (t.getRule = function (e) {
        var t = this.sheet.cssRules[e];
        return void 0 !== t && "string" == typeof t.cssText ? t.cssText : "";
      }),
      e
    );
  })(),
  $ = (function () {
    function e(e) {
      var t = (this.element = q(e));
      (this.nodes = t.childNodes), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (e, t) {
        if (e <= this.length && e >= 0) {
          var n = document.createTextNode(t),
            r = this.nodes[e];
          return this.element.insertBefore(n, r || null), this.length++, !0;
        }
        return !1;
      }),
      (t.deleteRule = function (e) {
        this.element.removeChild(this.nodes[e]), this.length--;
      }),
      (t.getRule = function (e) {
        return e < this.length ? this.nodes[e].textContent : "";
      }),
      e
    );
  })(),
  W = (function () {
    function e(e) {
      (this.rules = []), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (e, t) {
        return (
          e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0)
        );
      }),
      (t.deleteRule = function (e) {
        this.rules.splice(e, 1), this.length--;
      }),
      (t.getRule = function (e) {
        return e < this.length ? this.rules[e] : "";
      }),
      e
    );
  })(),
  U = A,
  J = { isServer: !A, useCSSOMInjection: !I },
  Z = (function () {
    function e(e, t, n) {
      void 0 === e && (e = w),
        void 0 === t && (t = {}),
        (this.options = v({}, J, {}, e)),
        (this.gs = t),
        (this.names = new Map(n)),
        !this.options.isServer &&
          A &&
          U &&
          ((U = !1),
          (function (e) {
            for (
              var t = document.querySelectorAll(z), n = 0, r = t.length;
              n < r;
              n++
            ) {
              var o = t[n];
              o &&
                "active" !== o.getAttribute(_) &&
                (F(e, o), o.parentNode && o.parentNode.removeChild(o));
            }
          })(this));
    }
    e.registerId = function (e) {
      return V(e);
    };
    var t = e.prototype;
    return (
      (t.reconstructWithOptions = function (t, n) {
        return (
          void 0 === n && (n = !0),
          new e(
            v({}, this.options, {}, t),
            this.gs,
            (n && this.names) || void 0
          )
        );
      }),
      (t.allocateGSInstance = function (e) {
        return (this.gs[e] = (this.gs[e] || 0) + 1);
      }),
      (t.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((n = (t = this.options).isServer),
            (r = t.useCSSOMInjection),
            (o = t.target),
            (e = n ? new W(o) : r ? new H(o) : new $(o)),
            new j(e)))
        );
        var e, t, n, r, o;
      }),
      (t.hasNameForId = function (e, t) {
        return this.names.has(e) && this.names.get(e).has(t);
      }),
      (t.registerName = function (e, t) {
        if ((V(e), this.names.has(e))) this.names.get(e).add(t);
        else {
          var n = new Set();
          n.add(t), this.names.set(e, n);
        }
      }),
      (t.insertRules = function (e, t, n) {
        this.registerName(e, t), this.getTag().insertRules(V(e), n);
      }),
      (t.clearNames = function (e) {
        this.names.has(e) && this.names.get(e).clear();
      }),
      (t.clearRules = function (e) {
        this.getTag().clearGroup(V(e)), this.clearNames(e);
      }),
      (t.clearTag = function () {
        this.tag = void 0;
      }),
      (t.toString = function () {
        return (function (e) {
          for (var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++) {
            var i = M(o);
            if (void 0 !== i) {
              var s = e.names.get(i),
                a = t.getGroup(o);
              if (void 0 !== s && 0 !== a.length) {
                var c = _ + ".g" + o + '[id="' + i + '"]',
                  u = "";
                void 0 !== s &&
                  s.forEach(function (e) {
                    e.length > 0 && (u += e + ",");
                  }),
                  (r += "" + a + c + '{content:"' + u + '"}/*!sc*/\n');
              }
            }
          }
          return r;
        })(this);
      }),
      e
    );
  })(),
  X = /(a)(d)/gi,
  K = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Q(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = K(t % 52) + n;
  return (K(t % 52) + n).replace(X, "$1-$2");
}
var ee = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  te = function (e) {
    return ee(5381, e);
  };
function ne(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (E(n) && !N(n)) return !1;
  }
  return !0;
}
var re = te("5.2.3"),
  oe = (function () {
    function e(e, t, n) {
      (this.rules = e),
        (this.staticRulesId = ""),
        (this.isStatic = (void 0 === n || n.isStatic) && ne(e)),
        (this.componentId = t),
        (this.baseHash = ee(re, t)),
        (this.baseStyle = n),
        Z.registerId(t);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (e, t, n) {
        var r = this.componentId,
          o = [];
        if (
          (this.baseStyle &&
            o.push(this.baseStyle.generateAndInjectStyles(e, t, n)),
          this.isStatic && !n.hash)
        )
          if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId))
            o.push(this.staticRulesId);
          else {
            var i = Ne(this.rules, e, t, n).join(""),
              s = Q(ee(this.baseHash, i.length) >>> 0);
            if (!t.hasNameForId(r, s)) {
              var a = n(i, "." + s, void 0, r);
              t.insertRules(r, s, a);
            }
            o.push(s), (this.staticRulesId = s);
          }
        else {
          for (
            var c = this.rules.length,
              u = ee(this.baseHash, n.hash),
              l = "",
              d = 0;
            d < c;
            d++
          ) {
            var h = this.rules[d];
            if ("string" == typeof h) (l += h), "production" !== "production";
            else if (h) {
              var p = Ne(h, e, t, n),
                f = Array.isArray(p) ? p.join("") : p;
              (u = ee(u, f + d)), (l += f);
            }
          }
          if (l) {
            var m = Q(u >>> 0);
            if (!t.hasNameForId(r, m)) {
              var v = n(l, "." + m, void 0, r);
              t.insertRules(r, m, v);
            }
            o.push(m);
          }
        }
        return o.join(" ");
      }),
      e
    );
  })(),
  ie = /^\s*\/\/.*$/gm,
  se = [":", "[", ".", "#"];
function ae(e) {
  var t,
    n,
    r,
    o,
    i = void 0 === e ? w : e,
    s = i.options,
    a = void 0 === s ? w : s,
    c = i.plugins,
    u = void 0 === c ? S : c,
    l = new stylis_min(a),
    d = [],
    p = (function (e) {
      function t(t) {
        if (t)
          try {
            e(t + "}");
          } catch (e) {}
      }
      return function (n, r, o, i, s, a, c, u, l, d) {
        switch (n) {
          case 1:
            if (0 === l && 64 === r.charCodeAt(0)) return e(r + ";"), "";
            break;
          case 2:
            if (0 === u) return r + "/*|*/";
            break;
          case 3:
            switch (u) {
              case 102:
              case 112:
                return e(o[0] + r), "";
              default:
                return r + (0 === d ? "/*|*/" : "");
            }
          case -2:
            r.split("/*|*/}").forEach(t);
        }
      };
    })(function (e) {
      d.push(e);
    }),
    f = function (e, r, i) {
      return (0 === r && -1 !== se.indexOf(i[n.length])) || i.match(o)
        ? e
        : "." + t;
    };
  function m(e, i, s, a) {
    void 0 === a && (a = "&");
    var c = e.replace(ie, ""),
      u = i && s ? s + " " + i + " { " + c + " }" : c;
    return (
      (t = a),
      (n = i),
      (r = new RegExp("\\" + n + "\\b", "g")),
      (o = new RegExp("(\\" + n + "\\b){2,}")),
      l(s || !i ? "" : i, u)
    );
  }
  return (
    l.use(
      [].concat(u, [
        function (e, t, o) {
          2 === e &&
            o.length &&
            o[0].lastIndexOf(n) > 0 &&
            (o[0] = o[0].replace(r, f));
        },
        p,
        function (e) {
          if (-2 === e) {
            var t = d;
            return (d = []), t;
          }
        },
      ])
    ),
    (m.hash = u.length
      ? u
          .reduce(function (e, t) {
            return t.name || D(15), ee(e, t.name);
          }, 5381)
          .toString()
      : ""),
    m
  );
}
var ce = r$1.createContext();
ce.Consumer;
var le = r$1.createContext(),
  de = (le.Consumer, new Z()),
  he = ae();
function pe() {
  return useContext(ce) || de;
}
function fe() {
  return useContext(le) || he;
}
var ve = (function () {
    function e(e, t) {
      var n = this;
      (this.inject = function (e, t) {
        void 0 === t && (t = he);
        var r = n.name + t.hash;
        e.hasNameForId(n.id, r) ||
          e.insertRules(n.id, r, t(n.rules, r, "@keyframes"));
      }),
        (this.toString = function () {
          return D(12, String(n.name));
        }),
        (this.name = e),
        (this.id = "sc-keyframes-" + e),
        (this.rules = t);
    }
    return (
      (e.prototype.getName = function (e) {
        return void 0 === e && (e = he), this.name + e.hash;
      }),
      e
    );
  })(),
  ye = /([A-Z])/,
  ge = /([A-Z])/g,
  Se = /^ms-/,
  we = function (e) {
    return "-" + e.toLowerCase();
  };
function Ee(e) {
  return ye.test(e) ? e.replace(ge, we).replace(Se, "-ms-") : e;
}
var be = function (e) {
  return null == e || !1 === e || "" === e;
};
function Ne(e, n, r, o) {
  if (Array.isArray(e)) {
    for (var i, s = [], a = 0, c = e.length; a < c; a += 1)
      "" !== (i = Ne(e[a], n, r, o)) &&
        (Array.isArray(i) ? s.push.apply(s, i) : s.push(i));
    return s;
  }
  if (be(e)) return "";
  if (N(e)) return "." + e.styledComponentId;
  if (E(e)) {
    if (
      "function" != typeof (l = e) ||
      (l.prototype && l.prototype.isReactComponent) ||
      !n
    )
      return e;
    var u = e(n);
    return Ne(u, n, r, o);
  }
  var l;
  return e instanceof ve
    ? r
      ? (e.inject(r, o), e.getName(o))
      : e
    : g(e)
    ? (function e(t, n) {
        var r,
          o,
          i = [];
        for (var s in t)
          t.hasOwnProperty(s) &&
            !be(t[s]) &&
            (g(t[s])
              ? i.push.apply(i, e(t[s], s))
              : E(t[s])
              ? i.push(Ee(s) + ":", t[s], ";")
              : i.push(
                  Ee(s) +
                    ": " +
                    ((r = s),
                    null == (o = t[s]) || "boolean" == typeof o || "" === o
                      ? ""
                      : "number" != typeof o || 0 === o || r in unitlessKeys
                      ? String(o).trim()
                      : o + "px") +
                    ";"
                ));
        return n ? [n + " {"].concat(i, ["}"]) : i;
      })(e)
    : e.toString();
}
function _e(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  return E(e) || g(e)
    ? Ne(y(S, [e].concat(n)))
    : 0 === n.length && 1 === e.length && "string" == typeof e[0]
    ? e
    : Ne(y(e, n));
}
var Pe = function (e, t, n) {
    return (
      void 0 === n && (n = w), (e.theme !== n.theme && e.theme) || t || n.theme
    );
  },
  Oe = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Re = /(^-|-$)/g;
function De(e) {
  return e.replace(Oe, "-").replace(Re, "");
}
var je = function (e) {
  return Q(te(e) >>> 0);
};
function Te(e) {
  return "string" == typeof e && "production" === "production";
}
var xe = function (e) {
    return (
      "function" == typeof e ||
      ("object" == typeof e && null !== e && !Array.isArray(e))
    );
  },
  ke = function (e) {
    return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
  };
function Ve(e, t, n) {
  var r = e[n];
  xe(t) && xe(r) ? Me(r, t) : (e[n] = t);
}
function Me(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  for (var o = 0, i = n; o < i.length; o++) {
    var s = i[o];
    if (xe(s)) for (var a in s) ke(a) && Ve(e, s[a], a);
  }
  return e;
}
var Be = r$1.createContext();
Be.Consumer;
var Ge = {};
function Fe(e, t, n) {
  var o = N(e),
    s = !Te(e),
    a = t.attrs,
    c = void 0 === a ? S : a,
    d = t.componentId,
    h =
      void 0 === d
        ? (function (e, t) {
            var n = "string" != typeof e ? "sc" : De(e);
            Ge[n] = (Ge[n] || 0) + 1;
            var r = n + "-" + je("5.2.3" + n + Ge[n]);
            return t ? t + "-" + r : r;
          })(t.displayName, t.parentComponentId)
        : d,
    p = t.displayName,
    y =
      void 0 === p
        ? (function (e) {
            return Te(e) ? "styled." + e : "Styled(" + b(e) + ")";
          })(e)
        : p,
    g =
      t.displayName && t.componentId
        ? De(t.displayName) + "-" + t.componentId
        : t.componentId || h,
    _ = o && e.attrs ? Array.prototype.concat(e.attrs, c).filter(Boolean) : c,
    C = t.shouldForwardProp;
  o &&
    e.shouldForwardProp &&
    (C = t.shouldForwardProp
      ? function (n, r) {
          return e.shouldForwardProp(n, r) && t.shouldForwardProp(n, r);
        }
      : e.shouldForwardProp);
  var A,
    I = new oe(n, g, o ? e.componentStyle : void 0),
    P = I.isStatic && 0 === c.length,
    O = function (e, t) {
      return (function (e, t, n, r) {
        var o = e.attrs,
          s = e.componentStyle,
          a = e.defaultProps,
          c = e.foldedComponentIds,
          d = e.shouldForwardProp,
          h = e.styledComponentId,
          p = e.target;
        var m = (function (e, t, n) {
            void 0 === e && (e = w);
            var r = v({}, t, { theme: e }),
              o = {};
            return (
              n.forEach(function (e) {
                var t,
                  n,
                  i,
                  s = e;
                for (t in (E(s) && (s = s(r)), s))
                  r[t] = o[t] =
                    "className" === t
                      ? ((n = o[t]), (i = s[t]), n && i ? n + " " + i : n || i)
                      : s[t];
              }),
              [r, o]
            );
          })(Pe(t, useContext(Be), a) || w, t, o),
          y = m[0],
          g = m[1],
          S = (function (e, t, n, r) {
            var o = pe(),
              i = fe(),
              s = t
                ? e.generateAndInjectStyles(w, o, i)
                : e.generateAndInjectStyles(n, o, i);
            return s;
          })(s, r, y),
          b = n,
          N = g.$as || t.$as || g.as || t.as || p,
          _ = Te(N),
          C = g !== t ? v({}, t, {}, g) : t,
          A = {};
        for (var I in C)
          "$" !== I[0] &&
            "as" !== I &&
            ("forwardedAs" === I
              ? (A.as = C[I])
              : (d ? d(I, index) : !_ || index(I)) && (A[I] = C[I]));
        return (
          t.style &&
            g.style !== t.style &&
            (A.style = v({}, t.style, {}, g.style)),
          (A.className = Array.prototype
            .concat(c, h, S !== h ? S : null, t.className, g.className)
            .filter(Boolean)
            .join(" ")),
          (A.ref = b),
          createElement(N, A)
        );
      })(A, e, t, P);
    };
  return (
    (O.displayName = y),
    ((A = r$1.forwardRef(O)).attrs = _),
    (A.componentStyle = I),
    (A.displayName = y),
    (A.shouldForwardProp = C),
    (A.foldedComponentIds = o
      ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
      : S),
    (A.styledComponentId = g),
    (A.target = o ? e.target : e),
    (A.withComponent = function (e) {
      var r = t.componentId,
        o = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        })(t, ["componentId"]),
        i = r && r + "-" + (Te(e) ? e : De(b(e)));
      return Fe(e, v({}, o, { attrs: _, componentId: i }), n);
    }),
    Object.defineProperty(A, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (t) {
        this._foldedDefaultProps = o ? Me({}, e.defaultProps, t) : t;
      },
    }),
    (A.toString = function () {
      return "." + A.styledComponentId;
    }),
    s &&
      hoistNonReactStatics_cjs(A, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0,
      }),
    A
  );
}
var Ye = function (e) {
  return (function e(t, r, o) {
    if ((void 0 === o && (o = w), !reactIs.isValidElementType(r)))
      return D(1, String(r));
    var i = function () {
      return t(r, o, _e.apply(void 0, arguments));
    };
    return (
      (i.withConfig = function (n) {
        return e(t, r, v({}, o, {}, n));
      }),
      (i.attrs = function (n) {
        return e(
          t,
          r,
          v({}, o, {
            attrs: Array.prototype.concat(o.attrs, n).filter(Boolean),
          })
        );
      }),
      i
    );
  })(Fe, e);
};
[
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan",
].forEach(function (e) {
  Ye[e] = Ye(e);
});

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function () {
  function shim(
    props,
    propName,
    componentName,
    location,
    propFullName,
    secret
  ) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
        "Use PropTypes.checkPropTypes() to call them. " +
        "Read more at http://fb.me/use-check-prop-types"
    );
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  } // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction,
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var propTypes = createCommonjsModule(function (module) {
  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
});

// import React from "react";
// import { ThemeProvider } from "styled-components";
var accentColor = "#BC3463";
var mainColors = {
  accentColor: accentColor,
  textPrimaryColor: "rgb(90, 87, 87)",
  textSecondaryColor: "#737373",
  headerPrimaryColor: accentColor,
};
var sizeDefinitions = {
  headerPrimarySize: "1em",
  primarySpacing: "1em",
  smallSpacing: "0.5em",
};
// const Theme = (children: Array<React.ReactNode>): JSX.Element => {
//   return <ThemeProvider theme={{ mode: "light" }}>{children}</ThemeProvider>;
// };
// export default Theme;

var HeaderCommonStyles = _e(
  templateObject_1$4 ||
    (templateObject_1$4 = __makeTemplateObject(
      [
        '\n  font-weight: 600;\n  font-family: "Yantramanav", sans-serif;\n  font-size: ',
        ";\n  color: ",
        ";\n  text-transform: capitalize;\n",
      ],
      [
        '\n  font-weight: 600;\n  font-family: "Yantramanav", sans-serif;\n  font-size: ',
        ";\n  color: ",
        ";\n  text-transform: capitalize;\n",
      ]
    )),
  sizeDefinitions.headerPrimarySize,
  mainColors.textPrimaryColor
);
var BodyCommonStyles = _e(
  templateObject_2$2 ||
    (templateObject_2$2 = __makeTemplateObject(
      [
        '\n  font-weight: 500;\n  font-family: "Khula", sans-serif;\n  list-style-type: none;\n  font-size: 0.95em;\n  color: ',
        ";\n  @media screen and (min-width: 30em) {\n    list-style-type: circle;\n  }\n",
      ],
      [
        '\n  font-weight: 500;\n  font-family: "Khula", sans-serif;\n  list-style-type: none;\n  font-size: 0.95em;\n  color: ',
        ";\n  @media screen and (min-width: 30em) {\n    list-style-type: circle;\n  }\n",
      ]
    )),
  mainColors.textSecondaryColor
);
var ResumeBody = Ye.div(
  templateObject_3$1 ||
    (templateObject_3$1 = __makeTemplateObject(
      [
        "\n  padding: 10px;\n  display: grid;\n  grid-column: 1;\n  grid-auto-rows: auto;\n  grid-gap: ",
        ";\n",
      ],
      [
        "\n  padding: 10px;\n  display: grid;\n  grid-column: 1;\n  grid-auto-rows: auto;\n  grid-gap: ",
        ";\n",
      ]
    )),
  sizeDefinitions.primarySpacing
);
var Column = Ye.div(
  templateObject_4$1 ||
    (templateObject_4$1 = __makeTemplateObject(
      ["\n  display: flex;\n  flex-direction: column;\n  flex-basis: 90vw;\n"],
      ["\n  display: flex;\n  flex-direction: column;\n  flex-basis: 90vw;\n"]
    ))
);
var PlainLeftColumn = Ye(Column)(
  templateObject_5$1 ||
    (templateObject_5$1 = __makeTemplateObject(
      ["\n  flex-basis: auto;\n"],
      ["\n  flex-basis: auto;\n"]
    ))
);
var PlainRightColumn = Ye(Column)(
  templateObject_6$1 ||
    (templateObject_6$1 = __makeTemplateObject(
      [
        "\n  flex-basis: auto;\n  grid-area: description;\n  & > ul {\n    margin: 0;\n    padding-left: 1.2em;\n    list-style-type: square;\n  }\n\n  & > .jobTitle ~ .jobTitle {\n    margin-top: 10px;\n  }\n",
      ],
      [
        "\n  flex-basis: auto;\n  grid-area: description;\n  & > ul {\n    margin: 0;\n    padding-left: 1.2em;\n    list-style-type: square;\n  }\n\n  & > .jobTitle ~ .jobTitle {\n    margin-top: 10px;\n  }\n",
      ]
    ))
);
var TwoColumnSection = Ye.div(
  templateObject_7 ||
    (templateObject_7 = __makeTemplateObject(
      ["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n"],
      ["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n"]
    ))
);
var LeftColumn = Ye(Column)(
  templateObject_8 ||
    (templateObject_8 = __makeTemplateObject(
      [
        "\n  margin: 0;\n  flex-basis: auto;\n  @media screen and (min-width: 30em) {\n    flex-basis: 200px;\n    flex-grow: 9999;\n    margin: 0 1em 1em 0;\n  }\n",
      ],
      [
        "\n  margin: 0;\n  flex-basis: auto;\n  @media screen and (min-width: 30em) {\n    flex-basis: 200px;\n    flex-grow: 9999;\n    margin: 0 1em 1em 0;\n  }\n",
      ]
    ))
);
var RightColumn = Ye(Column)(
  templateObject_9 ||
    (templateObject_9 = __makeTemplateObject(
      [
        "\n  flex-basis: auto;\n  @media screen and (min-width: 30em) {\n    flex-basis: 100px;\n    flex-grow: 1;\n    min-width: 300px;\n  }\n",
      ],
      [
        "\n  flex-basis: auto;\n  @media screen and (min-width: 30em) {\n    flex-basis: 100px;\n    flex-grow: 1;\n    min-width: 300px;\n  }\n",
      ]
    ))
);
var Section = Ye.div(
  templateObject_10 ||
    (templateObject_10 = __makeTemplateObject(
      [
        "\n  grid-auto-rows: min-content;\n  display: grid;\n  grid-gap: ",
        ";\n",
      ],
      [
        "\n  grid-auto-rows: min-content;\n  display: grid;\n  grid-gap: ",
        ";\n",
      ]
    )),
  sizeDefinitions.smallSpacing
);
var ExperienceProjectSectionCommonStyles = _e(
  templateObject_11 ||
    (templateObject_11 = __makeTemplateObject(
      ["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-gap: ", ";\n"],
      ["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-gap: ", ";\n"]
    )),
  sizeDefinitions.smallSpacing
);
Ye.div(
  templateObject_12 ||
    (templateObject_12 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])),
  ExperienceProjectSectionCommonStyles
);
var ExperienceProjectItemCommonStyles = _e(
  templateObject_13 ||
    (templateObject_13 = __makeTemplateObject(
      [
        '\n  display: flex;\n  flex-direction: column;\n  margin-top: 1em;\n  flex-basis: 90vw;\n  @media screen and (min-width: 30em) {\n    display: grid;\n    grid-template-areas: "title description";\n    grid-gap: ',
        ";\n    grid-template-columns: minmax(auto, 135px) 1fr;\n  }\n",
      ],
      [
        '\n  display: flex;\n  flex-direction: column;\n  margin-top: 1em;\n  flex-basis: 90vw;\n  @media screen and (min-width: 30em) {\n    display: grid;\n    grid-template-areas: "title description";\n    grid-gap: ',
        ";\n    grid-template-columns: minmax(auto, 135px) 1fr;\n  }\n",
      ]
    )),
  sizeDefinitions.primarySpacing
);
var ExperienceProjectItem = Ye.div(
  templateObject_14 ||
    (templateObject_14 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])),
  ExperienceProjectItemCommonStyles
);
var PlainLeftColumnName = Ye(PlainLeftColumn)(
  templateObject_15 ||
    (templateObject_15 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])),
  HeaderCommonStyles
);
var PlainLeftColumnDateRange = Ye(PlainLeftColumn)(
  templateObject_16 ||
    (templateObject_16 = __makeTemplateObject(
      ["\n  ", "\n  text-transform: uppercase;\n  font-size: 0.85em;\n"],
      ["\n  ", "\n  text-transform: uppercase;\n  font-size: 0.85em;\n"]
    )),
  BodyCommonStyles
);
var PlainRightColumnTitle = Ye(PlainRightColumn)(
  templateObject_17 ||
    (templateObject_17 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])),
  HeaderCommonStyles
);
var PlainRightColumnDescription = Ye(PlainRightColumn)(
  templateObject_18 ||
    (templateObject_18 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])),
  BodyCommonStyles
);
var templateObject_1$4,
  templateObject_2$2,
  templateObject_3$1,
  templateObject_4$1,
  templateObject_5$1,
  templateObject_6$1,
  templateObject_7,
  templateObject_8,
  templateObject_9,
  templateObject_10,
  templateObject_11,
  templateObject_12,
  templateObject_13,
  templateObject_14,
  templateObject_15,
  templateObject_16,
  templateObject_17,
  templateObject_18;

Ye.p(
  templateObject_1$3 ||
    (templateObject_1$3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])),
  BodyCommonStyles
);
Ye.span(
  templateObject_2$1 ||
    (templateObject_2$1 = __makeTemplateObject(
      ["\n  font-weight: 600;\n  font-style: italic;\n  color: ", ";\n"],
      ["\n  font-weight: 600;\n  font-style: italic;\n  color: ", ";\n"]
    )),
  mainColors.textPrimaryColor
);
var ContactName = Ye.span(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        "\n  ",
        "\n  font-size:1em;\n  color: white;\n  @media screen and (min-width: 30em) {\n    font-size: 3em;\n  }\n",
      ],
      [
        "\n  ",
        "\n  font-size:1em;\n  color: white;\n  @media screen and (min-width: 30em) {\n    font-size: 3em;\n  }\n",
      ]
    )),
  HeaderCommonStyles
);
var ContactDetails = Ye.ul(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      [
        "\n  list-style-type: none;\n  padding: 0;\n  width: 100%;\n  text-align: center;\n  @media screen and (min-width: 30em) {\n    text-align: right;\n  }\n",
      ],
      [
        "\n  list-style-type: none;\n  padding: 0;\n  width: 100%;\n  text-align: center;\n  @media screen and (min-width: 30em) {\n    text-align: right;\n  }\n",
      ]
    ))
);
var ContactDetailsAnchorTag = Ye.a(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      ["\n  ", "\n  text-decoration: none;\n  color: white;\n"],
      ["\n  ", "\n  text-decoration: none;\n  color: white;\n"]
    )),
  BodyCommonStyles
);
var HeaderBase = Ye.header(
  templateObject_6 ||
    (templateObject_6 = __makeTemplateObject(
      [
        "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: ",
        ";\n  @media screen and (min-width: 30em) {\n    width: auto;\n    padding: 0 20px;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n",
      ],
      [
        "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: ",
        ";\n  @media screen and (min-width: 30em) {\n    width: auto;\n    padding: 0 20px;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n",
      ]
    )),
  mainColors.accentColor
);
var Header = function (props) {
  var _a = props.config,
    name = _a.name,
    site = _a.site,
    emailLabel = _a.emailLabel,
    emailLinkValue = _a.emailLinkValue,
    phone = _a.phone;
  var list = [
    { label: site, href: site },
    { label: emailLabel, href: emailLinkValue },
    { label: phone },
  ];
  var content;
  var objectNotEmpty = Object.keys(props).length > 0;
  if (objectNotEmpty) {
    var DetailsList = list.map(function (dataToRender) {
      return jsx(
        "li",
        {
          children: jsx(
            ContactDetailsAnchorTag,
            __assign(
              { href: dataToRender.href, target: "_blank" },
              { children: dataToRender.label }
            ),
            void 0
          ),
        },
        dataToRender.label.toString()
      );
    });
    content = jsxs(
      HeaderBase,
      {
        children: [
          jsx(ContactName, { children: name }, void 0),
          jsx(ContactDetails, { children: DetailsList }, void 0),
        ],
      },
      void 0
    );
  } else {
    content = null;
  }
  return content;
};
var templateObject_1$3,
  templateObject_2$1,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6;

var ProjectDescList = Ye.ul(
  templateObject_1$2 ||
    (templateObject_1$2 = __makeTemplateObject(
      ["\n  padding: 0;\n"],
      ["\n  padding: 0;\n"]
    ))
);
var ProjectDescListItem = Ye.li(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      ["\n  list-style-type: none;\n"],
      ["\n  list-style-type: none;\n"]
    ))
);
var ProjectsSection = function (props) {
  var config = props.config;
  if (config === null || config === undefined) {
    return null;
  }
  var projectList = config.map(function (project) {
    var title = project.title,
      dateRange = project.dateRange,
      desc = project.desc;
    var jsx$1 = jsxs(
      ExperienceProjectItem,
      {
        children: [
          jsxs(
            LeftColumn,
            {
              children: [
                jsx(
                  "span",
                  __assign({ className: "projectName" }, { children: title }),
                  void 0
                ),
                jsx(
                  "span",
                  __assign({ className: "dateRange" }, { children: dateRange }),
                  void 0
                ),
              ],
            },
            void 0
          ),
          jsx(
            RightColumn,
            {
              children: jsx(
                ProjectDescList,
                {
                  children: jsx(
                    ProjectDescListItem,
                    { children: desc },
                    void 0
                  ),
                },
                void 0
              ),
            },
            void 0
          ),
        ],
      },
      title.toString()
    );
    return jsx$1;
  });
  return jsx(Fragment$1, { children: projectList }, void 0);
};
var templateObject_1$2, templateObject_2;

var SkillsSection = function (props) {
  var config = props.config;
  var skillsList = config.map(function (value, index) {
    var nextVal = config[index + 1];
    return nextVal ? value.concat(", ") : value;
  });
  var jsx$1 = jsx(
    "span",
    __assign({ className: "description" }, { children: skillsList }),
    void 0
  );
  return jsx$1;
};

var generateColumns = function (first, second, third) {
  return jsxs(
    Fragment$1,
    {
      children: [
        jsxs(
          LeftColumn,
          {
            children: [
              jsx(PlainLeftColumnName, { children: first }, void 0),
              jsx(PlainLeftColumnDateRange, { children: second }, void 0),
            ],
          },
          void 0
        ),
        jsx(
          RightColumn,
          { children: jsx(PlainRightColumnTitle, { children: third }, void 0) },
          void 0
        ),
      ],
    },
    void 0
  );
};
var generateAllColumns = function (first, second, third, fourth, modifier) {
  return jsxs(
    Fragment$1,
    {
      children: [
        generateColumns(first, second, third),
        jsx(
          PlainRightColumnDescription,
          __assign({ as: modifier ? modifier : null }, { children: fourth }),
          void 0
        ),
      ],
    },
    void 0
  );
};

var EducationSection = function (props) {
  var config = props.config;
  var data;
  var list = config.map(function (section) {
    data = {
      name: section.name,
      date: section.dateRange,
      program: section.programOrDegree,
    };
    var name = data.name,
      date = data.date,
      program = data.program;
    return jsx(
      "section",
      { children: generateColumns(name, date, program) },
      section.toString()
    );
  });
  return jsx(Fragment$1, { children: list }, void 0);
};

var ExperienceSection = function (props) {
  var config = props.config;
  var list = config.map(function (job) {
    var companyName = job.companyName,
      dateRange = job.dateRange,
      jobTitle = job.jobTitle,
      jobDescription = job.jobDescription;
    var jobTasks = jobDescription.map(function (item, index) {
      var desc = jsx("li", { children: item.text }, index.toString());
      return desc;
    });
    var jsx$1 = jsx(
      ExperienceProjectItem,
      {
        children: generateAllColumns(
          companyName,
          dateRange,
          jobTitle,
          jobTasks,
          "ul"
        ),
      },
      companyName.toString()
    );
    return jsx$1;
  });
  return jsx(Fragment$1, { children: list }, void 0);
};

var SectionHeader = Ye.div(
  templateObject_1$1 ||
    (templateObject_1$1 = __makeTemplateObject(
      [
        "\n  ",
        "\n  border-bottom: 1px solid;\n  font-size: ",
        ";\n  text-transform: uppercase;\n  color: ",
        ";\n  margin-bottom: -5px;\n",
      ],
      [
        "\n  ",
        "\n  border-bottom: 1px solid;\n  font-size: ",
        ";\n  text-transform: uppercase;\n  color: ",
        ";\n  margin-bottom: -5px;\n",
      ]
    )),
  HeaderCommonStyles,
  sizeDefinitions.headerPrimarySize,
  mainColors.headerPrimaryColor
);
var SectionAndHeader = function (props) {
  var sectionTitle = props.sectionTitle,
    children = props.children;
  var jsx$1 = jsxs(
    Section,
    {
      children: [
        jsx(SectionHeader, { children: sectionTitle }, void 0),
        children,
      ],
    },
    void 0
  );
  return jsx$1;
};
var templateObject_1$1;

var ResumeGridContainer = Ye.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  background-color: #ffffff;\n  display: grid;\n  width: ",
        ";\n  @media print {\n    width: 100%;\n  }\n",
      ],
      [
        "\n  background-color: #ffffff;\n  display: grid;\n  width: ",
        ";\n  @media print {\n    width: 100%;\n  }\n",
      ]
    )),
  function (props) {
    return props.resumeWidth ? props.resumeWidth : "100%";
  }
);
var Block = function (props) {
  var componentType = props.componentType,
    config = props.config;
  var components = {
    experience: ExperienceSection,
    projects: ProjectsSection,
    education: EducationSection,
    skills: SkillsSection,
  };
  var Tag = components[componentType];
  var resumeDataToRender = config[componentType];
  var dataExists =
    resumeDataToRender !== null && resumeDataToRender !== undefined
      ? true
      : false;
  return Tag && dataExists
    ? jsx(
        SectionAndHeader,
        __assign(
          { sectionTitle: componentType },
          { children: jsx(Tag, { config: resumeDataToRender }, void 0) }
        ),
        void 0
      )
    : null;
};
var ResumeContent = function (props) {
  var config = props.config;
  return jsxs(
    ResumeGridContainer,
    {
      children: [
        jsx(Header, { config: config.header }, void 0),
        jsxs(
          ResumeBody,
          {
            children: [
              jsx(
                Block,
                { componentType: "experience", config: config },
                void 0
              ),
              jsx(Block, { componentType: "projects", config: config }, void 0),
              jsxs(
                TwoColumnSection,
                {
                  children: [
                    jsx(
                      LeftColumn,
                      {
                        children: jsx(
                          Block,
                          { componentType: "education", config: config },
                          void 0
                        ),
                      },
                      void 0
                    ),
                    jsx(
                      RightColumn,
                      {
                        children: jsx(
                          Block,
                          { componentType: "skills", config: config },
                          void 0
                        ),
                      },
                      void 0
                    ),
                  ],
                },
                void 0
              ),
            ],
          },
          void 0
        ),
      ],
    },
    void 0
  );
};
ResumeContent.propTypes = {
  config: propTypes.object,
};
var templateObject_1;

var defaultResumeDataObj = {
  header: {
    name: "First Last",
    site: "https://example.com",
    emailLinkValue: "mailto:foobar@example.com",
    emailLabel: "foobar@example.com",
    phone: "444-555-6661",
  },
  education: [
    {
      type: "college",
      name: "A school",
      dateRange: "200X - 20XX",
      programOrDegree: "Bachelor's, Computer Science",
    },
  ],
  experience: [
    {
      companyName: "Tech Co.",
      dateRange: "June 201XX - Present",
      jobTitle: "Team Lead",
      jobDescription: [
        {
          text:
            "Ex novum deserunt consetetur mea, his te dolores constituto,\n        ea vivendum percipitur efficiantur sit. Quo ei ipsum assentior. Te eos viris elitr,\n        te atqui possit quo. Reque altera graeco vis et, ad nisl suavitate laboramus nam,\n        nulla graeci quaeque an sit. Sumo ullum velit eam et.\n        Te vix tollit expetendis, te has veniam eligendi rationibus. ",
        },
        {
          text:
            "Ex novum deserunt consetetur mea, his te dolores constituto,\n        ea vivendum percipitur efficiantur sit. Quo ei ipsum assentior. Te eos viris elitr,\n        te atqui possit quo.",
        },
      ],
    },
    {
      companyName: "Software Corp",
      dateRange: "May 201XX - September 20XX",
      jobTitle: "Software Engineer",
      jobDescription: [
        {
          text:
            "Ex novum deserunt consetetur mea, his te dolores constituto,\n            ea vivendum percipitur efficiantur sit. Quo ei ipsum assentior. Te eos viris elitr,\n            te atqui possit quo. ",
        },
        {
          text:
            "Ex novum deserunt consetetur mea, his te dolores constituto,\n            ea vivendum percipitur efficiantur sit. Quo ei ipsum assentior. Te eos viris elitr,\n            te atqui possit quo. Reque altera graeco vis et, ad nisl suavitate laboramus nam,\n            nulla graeci quaeque an sit. Sumo ullum velit eam et.\n            Te vix tollit expetendis, te has veniam eligendi rationibus. ",
        },
      ],
    },
  ],
  projects: [
    {
      dateRange: "June 20XX",
      title: "Loren ipsum",
      desc:
        "Ex novum deserunt consetetur mea, his te dolores constituto,\n            ea vivendum percipitur efficiantur sit. Quo ei ipsum assentior. Te eos viris elitr,\n            te atqui possit quo. ",
    },
    {
      dateRange: "October 20XX",
      title: "Loren ipsum",
      desc:
        "Ex novum deserunt consetetur mea, his te dolores constituto,\n            ea vivendum percipitur efficiantur sit. Quo ei ipsum assentior. Te eos viris elitr,\n            te atqui possit quo. ",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Go",
    "React",
    "React Native",
    "Jest",
    "Webpack",
    "SCSS",
    "NodeJS",
    "SQL",
  ],
};

var StyledResume = function (props) {
  var config = props.config;
  var _a = useState(defaultResumeDataObj),
    data = _a[0],
    setData = _a[1];
  useEffect(function () {
    setData(config ? config : defaultResumeDataObj);
  }, []);
  return (
    // <Theme>
    jsx(ResumeContent, { config: data }, void 0)
    // </Theme>
  );
};
StyledResume.propTypes = {
  config: propTypes.shape({
    header: propTypes.shape({
      name: propTypes.string.isRequired,
      site: propTypes.string,
      emailLinkValue: propTypes.string.isRequired,
      emailLabel: propTypes.string.isRequired,
      phone: propTypes.string,
    }),
    //TODO: support various education types in props
    education: propTypes.arrayOf(
      propTypes.shape({
        college: propTypes.shape({
          name: propTypes.string,
          programOrDegree: propTypes.string,
          dateRange: propTypes.string,
        }),
        bootcamp: propTypes.shape({
          name: propTypes.string,
          programOrDegree: propTypes.string,
          dateRange: propTypes.string,
        }),
      })
    ),
    experience: propTypes.arrayOf(
      propTypes.shape({
        companyName: propTypes.string.isRequired,
        dateRange: propTypes.string.isRequired,
        jobTitle: propTypes.string.isRequired,
        jobDescription: propTypes.arrayOf(
          propTypes.shape({
            text: propTypes.string.isRequired,
          })
        ),
      })
    ),
    projects: propTypes.arrayOf(
      propTypes.shape({
        dateRange: propTypes.string,
        title: propTypes.string,
        desc: propTypes.string,
      })
    ),
    skills: propTypes.arrayOf(propTypes.string),
  }),
};

export default StyledResume;
//# sourceMappingURL=styled-resume.es.js.map