!function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    }
    : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
        var e = "length"in t && t.length
          , i = K.type(t);
        return "function" === i || K.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }
    function n(t, e, i) {
        if (K.isFunction(e))
            return K.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i
            });
        if (e.nodeType)
            return K.grep(t, function(t) {
                return t === e !== i
            });
        if ("string" == typeof e) {
            if (at.test(e))
                return K.filter(e, t, i);
            e = K.filter(e, t)
        }
        return K.grep(t, function(t) {
            return U.call(e, t) >= 0 !== i
        })
    }
    function o(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; )
            ;
        return t
    }
    function r(t) {
        var e = ft[t] = {};
        return K.each(t.match(ht) || [], function(t, i) {
            e[i] = !0
        }),
        e
    }
    function s() {
        J.removeEventListener("DOMContentLoaded", s, !1),
        t.removeEventListener("load", s, !1),
        K.ready()
    }
    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }),
        this.expando = K.expando + a.uid++
    }
    function l(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(bt, "-$1").toLowerCase(),
            i = t.getAttribute(n),
            "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : wt.test(i) ? K.parseJSON(i) : i
                } catch (o) {}
                vt.set(t, e, i)
            } else
                i = void 0;
        return i
    }
    function u() {
        return !0
    }
    function d() {
        return !1
    }
    function p() {
        try {
            return J.activeElement
        } catch (t) {}
    }
    function c(t, e) {
        return K.nodeName(t, "table") && K.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function h(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
        t
    }
    function f(t) {
        var e = jt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"),
        t
    }
    function m(t, e) {
        for (var i = 0, n = t.length; n > i; i++)
            yt.set(t[i], "globalEval", !e || yt.get(e[i], "globalEval"))
    }
    function g(t, e) {
        var i, n, o, r, s, a, l, u;
        if (1 === e.nodeType) {
            if (yt.hasData(t) && (r = yt.access(t),
            s = yt.set(e, r),
            u = r.events)) {
                delete s.handle,
                s.events = {};
                for (o in u)
                    for (i = 0,
                    n = u[o].length; n > i; i++)
                        K.event.add(e, o, u[o][i])
            }
            vt.hasData(t) && (a = vt.access(t),
            l = K.extend({}, a),
            vt.set(e, l))
        }
    }
    function y(t, e) {
        var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && K.nodeName(t, e) ? K.merge([t], i) : i
    }
    function v(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && St.test(t.type) ? e.checked = t.checked : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
    }
    function w(e, i) {
        var n, o = K(i.createElement(e)).appendTo(i.body), r = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(o[0])) ? n.display : K.css(o[0], "display");
        return o.detach(),
        r
    }
    function b(t) {
        var e = J
          , i = Rt[t];
        return i || (i = w(t, e),
        "none" !== i && i || (Mt = (Mt || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement),
        e = Mt[0].contentDocument,
        e.write(),
        e.close(),
        i = w(t, e),
        Mt.detach()),
        Rt[t] = i),
        i
    }
    function x(t, e, i) {
        var n, o, r, s, a = t.style;
        return i = i || Nt(t),
        i && (s = i.getPropertyValue(e) || i[e]),
        i && ("" !== s || K.contains(t.ownerDocument, t) || (s = K.style(t, e)),
        qt.test(s) && Wt.test(e) && (n = a.width,
        o = a.minWidth,
        r = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = i.width,
        a.width = n,
        a.minWidth = o,
        a.maxWidth = r)),
        void 0 !== s ? s + "" : s
    }
    function _(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }
    function T(t, e) {
        if (e in t)
            return e;
        for (var i = e[0].toUpperCase() + e.slice(1), n = e, o = Xt.length; o--; )
            if (e = Xt[o] + i,
            e in t)
                return e;
        return n
    }
    function S(t, e, i) {
        var n = Yt.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }
    function k(t, e, i, n, o) {
        for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2)
            "margin" === i && (s += K.css(t, i + _t[r], !0, o)),
            n ? ("content" === i && (s -= K.css(t, "padding" + _t[r], !0, o)),
            "margin" !== i && (s -= K.css(t, "border" + _t[r] + "Width", !0, o))) : (s += K.css(t, "padding" + _t[r], !0, o),
            "padding" !== i && (s += K.css(t, "border" + _t[r] + "Width", !0, o)));
        return s
    }
    function C(t, e, i) {
        var n = !0
          , o = "width" === e ? t.offsetWidth : t.offsetHeight
          , r = Nt(t)
          , s = "border-box" === K.css(t, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = x(t, e, r),
            (0 > o || null == o) && (o = t.style[e]),
            qt.test(o))
                return o;
            n = s && (G.boxSizingReliable() || o === t.style[e]),
            o = parseFloat(o) || 0
        }
        return o + k(t, e, i || (s ? "border" : "content"), n, r) + "px"
    }
    function E(t, e) {
        for (var i, n, o, r = [], s = 0, a = t.length; a > s; s++)
            n = t[s],
            n.style && (r[s] = yt.get(n, "olddisplay"),
            i = n.style.display,
            e ? (r[s] || "none" !== i || (n.style.display = ""),
            "" === n.style.display && Tt(n) && (r[s] = yt.access(n, "olddisplay", b(n.nodeName)))) : (o = Tt(n),
            "none" === i && o || yt.set(n, "olddisplay", o ? i : K.css(n, "display"))));
        for (s = 0; a > s; s++)
            n = t[s],
            n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[s] || "" : "none"));
        return t
    }
    function D(t, e, i, n, o) {
        return new D.prototype.init(t,e,i,n,o)
    }
    function L() {
        return setTimeout(function() {
            Gt = void 0
        }),
        Gt = K.now()
    }
    function $(t, e) {
        var i, n = 0, o = {
            height: t
        };
        for (e = e ? 1 : 0; 4 > n; n += 2 - e)
            i = _t[n],
            o["margin" + i] = o["padding" + i] = t;
        return e && (o.opacity = o.width = t),
        o
    }
    function I(t, e, i) {
        for (var n, o = (ie[e] || []).concat(ie["*"]), r = 0, s = o.length; s > r; r++)
            if (n = o[r].call(i, e, t))
                return n
    }
    function z(t, e, i) {
        var n, o, r, s, a, l, u, d, p = this, c = {}, h = t.style, f = t.nodeType && Tt(t), m = yt.get(t, "fxshow");
        i.queue || (a = K._queueHooks(t, "fx"),
        null == a.unqueued && (a.unqueued = 0,
        l = a.empty.fire,
        a.empty.fire = function() {
            a.unqueued || l()
        }
        ),
        a.unqueued++,
        p.always(function() {
            p.always(function() {
                a.unqueued--,
                K.queue(t, "fx").length || a.empty.fire()
            })
        })),
        1 === t.nodeType && ("height"in e || "width"in e) && (i.overflow = [h.overflow, h.overflowX, h.overflowY],
        u = K.css(t, "display"),
        d = "none" === u ? yt.get(t, "olddisplay") || b(t.nodeName) : u,
        "inline" === d && "none" === K.css(t, "float") && (h.display = "inline-block")),
        i.overflow && (h.overflow = "hidden",
        p.always(function() {
            h.overflow = i.overflow[0],
            h.overflowX = i.overflow[1],
            h.overflowY = i.overflow[2]
        }));
        for (n in e)
            if (o = e[n],
            Zt.exec(o)) {
                if (delete e[n],
                r = r || "toggle" === o,
                o === (f ? "hide" : "show")) {
                    if ("show" !== o || !m || void 0 === m[n])
                        continue;
                    f = !0
                }
                c[n] = m && m[n] || K.style(t, n)
            } else
                u = void 0;
        if (K.isEmptyObject(c))
            "inline" === ("none" === u ? b(t.nodeName) : u) && (h.display = u);
        else {
            m ? "hidden"in m && (f = m.hidden) : m = yt.access(t, "fxshow", {}),
            r && (m.hidden = !f),
            f ? K(t).show() : p.done(function() {
                K(t).hide()
            }),
            p.done(function() {
                var e;
                yt.remove(t, "fxshow");
                for (e in c)
                    K.style(t, e, c[e])
            });
            for (n in c)
                s = I(f ? m[n] : 0, n, p),
                n in m || (m[n] = s.start,
                f && (s.end = s.start,
                s.start = "width" === n || "height" === n ? 1 : 0))
        }
    }
    function A(t, e) {
        var i, n, o, r, s;
        for (i in t)
            if (n = K.camelCase(i),
            o = e[n],
            r = t[i],
            K.isArray(r) && (o = r[1],
            r = t[i] = r[0]),
            i !== n && (t[n] = r,
            delete t[i]),
            s = K.cssHooks[n],
            s && "expand"in s) {
                r = s.expand(r),
                delete t[n];
                for (i in r)
                    i in t || (t[i] = r[i],
                    e[i] = o)
            } else
                e[n] = o
    }
    function P(t, e, i) {
        var n, o, r = 0, s = ee.length, a = K.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (o)
                return !1;
            for (var e = Gt || L(), i = Math.max(0, u.startTime + u.duration - e), n = i / u.duration || 0, r = 1 - n, s = 0, l = u.tweens.length; l > s; s++)
                u.tweens[s].run(r);
            return a.notifyWith(t, [u, r, i]),
            1 > r && l ? i : (a.resolveWith(t, [u]),
            !1)
        }, u = a.promise({
            elem: t,
            props: K.extend({}, e),
            opts: K.extend(!0, {
                specialEasing: {}
            }, i),
            originalProperties: e,
            originalOptions: i,
            startTime: Gt || L(),
            duration: i.duration,
            tweens: [],
            createTween: function(e, i) {
                var n = K.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                return u.tweens.push(n),
                n
            },
            stop: function(e) {
                var i = 0
                  , n = e ? u.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; n > i; i++)
                    u.tweens[i].run(1);
                return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]),
                this
            }
        }), d = u.props;
        for (A(d, u.opts.specialEasing); s > r; r++)
            if (n = ee[r].call(u, t, d, u.opts))
                return n;
        return K.map(d, I, u),
        K.isFunction(u.opts.start) && u.opts.start.call(t, u),
        K.fx.timer(K.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function F(t) {
        return function(e, i) {
            "string" != typeof e && (i = e,
            e = "*");
            var n, o = 0, r = e.toLowerCase().match(ht) || [];
            if (K.isFunction(i))
                for (; n = r[o++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }
    function j(t, e, i, n) {
        function o(a) {
            var l;
            return r[a] = !0,
            K.each(t[a] || [], function(t, a) {
                var u = a(e, i, n);
                return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u),
                o(u),
                !1)
            }),
            l
        }
        var r = {}
          , s = t === we;
        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }
    function O(t, e) {
        var i, n, o = K.ajaxSettings.flatOptions || {};
        for (i in e)
            void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
        return n && K.extend(!0, t, n),
        t
    }
    function H(t, e, i) {
        for (var n, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0]; )
            l.shift(),
            void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
        if (n)
            for (o in a)
                if (a[o] && a[o].test(n)) {
                    l.unshift(o);
                    break
                }
        if (l[0]in i)
            r = l[0];
        else {
            for (o in i) {
                if (!l[0] || t.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        return r ? (r !== l[0] && l.unshift(r),
        i[r]) : void 0
    }
    function M(t, e, i, n) {
        var o, r, s, a, l, u = {}, d = t.dataTypes.slice();
        if (d[1])
            for (s in t.converters)
                u[s.toLowerCase()] = t.converters[s];
        for (r = d.shift(); r; )
            if (t.responseFields[r] && (i[t.responseFields[r]] = e),
            !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
            l = r,
            r = d.shift())
                if ("*" === r)
                    r = l;
                else if ("*" !== l && l !== r) {
                    if (s = u[l + " " + r] || u["* " + r],
                    !s)
                        for (o in u)
                            if (a = o.split(" "),
                            a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                s === !0 ? s = u[o] : u[o] !== !0 && (r = a[0],
                                d.unshift(a[1]));
                                break
                            }
                    if (s !== !0)
                        if (s && t["throws"])
                            e = s(e);
                        else
                            try {
                                e = s(e)
                            } catch (p) {
                                return {
                                    state: "parsererror",
                                    error: s ? p : "No conversion from " + l + " to " + r
                                }
                            }
                }
        return {
            state: "success",
            data: e
        }
    }
    function R(t, e, i, n) {
        var o;
        if (K.isArray(e))
            K.each(e, function(e, o) {
                i || Se.test(t) ? n(t, o) : R(t + "[" + ("object" == typeof o ? e : "") + "]", o, i, n)
            });
        else if (i || "object" !== K.type(e))
            n(t, e);
        else
            for (o in e)
                R(t + "[" + o + "]", e[o], i, n)
    }
    function W(t) {
        return K.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var q = []
      , N = q.slice
      , B = q.concat
      , Y = q.push
      , U = q.indexOf
      , V = {}
      , Q = V.toString
      , X = V.hasOwnProperty
      , G = {}
      , J = t.document
      , Z = "2.1.4"
      , K = function(t, e) {
        return new K.fn.init(t,e)
    }
      , tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , et = /^-ms-/
      , it = /-([\da-z])/gi
      , nt = function(t, e) {
        return e.toUpperCase()
    };
    K.fn = K.prototype = {
        jquery: Z,
        constructor: K,
        selector: "",
        length: 0,
        toArray: function() {
            return N.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : N.call(this)
        },
        pushStack: function(t) {
            var e = K.merge(this.constructor(), t);
            return e.prevObject = this,
            e.context = this.context,
            e
        },
        each: function(t, e) {
            return K.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(K.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(N.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length
              , i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Y,
        sort: q.sort,
        splice: q.splice
    },
    K.extend = K.fn.extend = function() {
        var t, e, i, n, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof s && (u = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || K.isFunction(s) || (s = {}),
        a === l && (s = this,
        a--); l > a; a++)
            if (null != (t = arguments[a]))
                for (e in t)
                    i = s[e],
                    n = t[e],
                    s !== n && (u && n && (K.isPlainObject(n) || (o = K.isArray(n))) ? (o ? (o = !1,
                    r = i && K.isArray(i) ? i : []) : r = i && K.isPlainObject(i) ? i : {},
                    s[e] = K.extend(u, r, n)) : void 0 !== n && (s[e] = n));
        return s
    }
    ,
    K.extend({
        expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === K.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            return !K.isArray(t) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(t) {
            return "object" !== K.type(t) || t.nodeType || K.isWindow(t) ? !1 : t.constructor && !X.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? V[Q.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, i = eval;
            t = K.trim(t),
            t && (1 === t.indexOf("use strict") ? (e = J.createElement("script"),
            e.text = t,
            J.head.appendChild(e).parentNode.removeChild(e)) : i(t))
        },
        camelCase: function(t) {
            return t.replace(et, "ms-").replace(it, nt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, n) {
            var o, r = 0, s = t.length, a = i(t);
            if (n) {
                if (a)
                    for (; s > r && (o = e.apply(t[r], n),
                    o !== !1); r++)
                        ;
                else
                    for (r in t)
                        if (o = e.apply(t[r], n),
                        o === !1)
                            break
            } else if (a)
                for (; s > r && (o = e.call(t[r], r, t[r]),
                o !== !1); r++)
                    ;
            else
                for (r in t)
                    if (o = e.call(t[r], r, t[r]),
                    o === !1)
                        break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(tt, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? K.merge(n, "string" == typeof t ? [t] : t) : Y.call(n, t)),
            n
        },
        inArray: function(t, e, i) {
            return null == e ? -1 : U.call(e, t, i)
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, o = t.length; i > n; n++)
                t[o++] = e[n];
            return t.length = o,
            t
        },
        grep: function(t, e, i) {
            for (var n, o = [], r = 0, s = t.length, a = !i; s > r; r++)
                n = !e(t[r], r),
                n !== a && o.push(t[r]);
            return o
        },
        map: function(t, e, n) {
            var o, r = 0, s = t.length, a = i(t), l = [];
            if (a)
                for (; s > r; r++)
                    o = e(t[r], r, n),
                    null != o && l.push(o);
            else
                for (r in t)
                    o = e(t[r], r, n),
                    null != o && l.push(o);
            return B.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, o;
            return "string" == typeof e && (i = t[e],
            e = t,
            t = i),
            K.isFunction(t) ? (n = N.call(arguments, 2),
            o = function() {
                return t.apply(e || this, n.concat(N.call(arguments)))
            }
            ,
            o.guid = t.guid = t.guid || K.guid++,
            o) : void 0
        },
        now: Date.now,
        support: G
    }),
    K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        V["[object " + e + "]"] = e.toLowerCase()
    });
    var ot = function(t) {
        function e(t, e, i, n) {
            var o, r, s, a, l, u, p, h, f, m;
            if ((e ? e.ownerDocument || e : R) !== z && I(e),
            e = e || z,
            i = i || [],
            a = e.nodeType,
            "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a)
                return i;
            if (!n && P) {
                if (11 !== a && (o = vt.exec(t)))
                    if (s = o[1]) {
                        if (9 === a) {
                            if (r = e.getElementById(s),
                            !r || !r.parentNode)
                                return i;
                            if (r.id === s)
                                return i.push(r),
                                i
                        } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && H(e, r) && r.id === s)
                            return i.push(r),
                            i
                    } else {
                        if (o[2])
                            return Z.apply(i, e.getElementsByTagName(t)),
                            i;
                        if ((s = o[3]) && x.getElementsByClassName)
                            return Z.apply(i, e.getElementsByClassName(s)),
                            i
                    }
                if (x.qsa && (!F || !F.test(t))) {
                    if (h = p = M,
                    f = e,
                    m = 1 !== a && t,
                    1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (u = k(t),
                        (p = e.getAttribute("id")) ? h = p.replace(bt, "\\$&") : e.setAttribute("id", h),
                        h = "[id='" + h + "'] ",
                        l = u.length; l--; )
                            u[l] = h + c(u[l]);
                        f = wt.test(t) && d(e.parentNode) || e,
                        m = u.join(",")
                    }
                    if (m)
                        try {
                            return Z.apply(i, f.querySelectorAll(m)),
                            i
                        } catch (g) {} finally {
                            p || e.removeAttribute("id")
                        }
                }
            }
            return E(t.replace(lt, "$1"), e, i, n)
        }
        function i() {
            function t(i, n) {
                return e.push(i + " ") > _.cacheLength && delete t[e.shift()],
                t[i + " "] = n
            }
            var e = [];
            return t
        }
        function n(t) {
            return t[M] = !0,
            t
        }
        function o(t) {
            var e = z.createElement("div");
            try {
                return !!t(e)
            } catch (i) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function r(t, e) {
            for (var i = t.split("|"), n = t.length; n--; )
                _.attrHandle[i[n]] = e
        }
        function s(t, e) {
            var i = e && t
              , n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
            if (n)
                return n;
            if (i)
                for (; i = i.nextSibling; )
                    if (i === e)
                        return -1;
            return t ? 1 : -1
        }
        function a(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }
        function l(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }
        function u(t) {
            return n(function(e) {
                return e = +e,
                n(function(i, n) {
                    for (var o, r = t([], i.length, e), s = r.length; s--; )
                        i[o = r[s]] && (i[o] = !(n[o] = i[o]))
                })
            })
        }
        function d(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }
        function p() {}
        function c(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++)
                n += t[e].value;
            return n
        }
        function h(t, e, i) {
            var n = e.dir
              , o = i && "parentNode" === n
              , r = q++;
            return e.first ? function(e, i, r) {
                for (; e = e[n]; )
                    if (1 === e.nodeType || o)
                        return t(e, i, r)
            }
            : function(e, i, s) {
                var a, l, u = [W, r];
                if (s) {
                    for (; e = e[n]; )
                        if ((1 === e.nodeType || o) && t(e, i, s))
                            return !0
                } else
                    for (; e = e[n]; )
                        if (1 === e.nodeType || o) {
                            if (l = e[M] || (e[M] = {}),
                            (a = l[n]) && a[0] === W && a[1] === r)
                                return u[2] = a[2];
                            if (l[n] = u,
                            u[2] = t(e, i, s))
                                return !0
                        }
            }
        }
        function f(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var o = t.length; o--; )
                    if (!t[o](e, i, n))
                        return !1;
                return !0
            }
            : t[0]
        }
        function m(t, i, n) {
            for (var o = 0, r = i.length; r > o; o++)
                e(t, i[o], n);
            return n
        }
        function g(t, e, i, n, o) {
            for (var r, s = [], a = 0, l = t.length, u = null != e; l > a; a++)
                (r = t[a]) && (!i || i(r, n, o)) && (s.push(r),
                u && e.push(a));
            return s
        }
        function y(t, e, i, o, r, s) {
            return o && !o[M] && (o = y(o)),
            r && !r[M] && (r = y(r, s)),
            n(function(n, s, a, l) {
                var u, d, p, c = [], h = [], f = s.length, y = n || m(e || "*", a.nodeType ? [a] : a, []), v = !t || !n && e ? y : g(y, c, t, a, l), w = i ? r || (n ? t : f || o) ? [] : s : v;
                if (i && i(v, w, a, l),
                o)
                    for (u = g(w, h),
                    o(u, [], a, l),
                    d = u.length; d--; )
                        (p = u[d]) && (w[h[d]] = !(v[h[d]] = p));
                if (n) {
                    if (r || t) {
                        if (r) {
                            for (u = [],
                            d = w.length; d--; )
                                (p = w[d]) && u.push(v[d] = p);
                            r(null, w = [], u, l)
                        }
                        for (d = w.length; d--; )
                            (p = w[d]) && (u = r ? tt(n, p) : c[d]) > -1 && (n[u] = !(s[u] = p))
                    }
                } else
                    w = g(w === s ? w.splice(f, w.length) : w),
                    r ? r(null, s, w, l) : Z.apply(s, w)
            })
        }
        function v(t) {
            for (var e, i, n, o = t.length, r = _.relative[t[0].type], s = r || _.relative[" "], a = r ? 1 : 0, l = h(function(t) {
                return t === e
            }, s, !0), u = h(function(t) {
                return tt(e, t) > -1
            }, s, !0), d = [function(t, i, n) {
                var o = !r && (n || i !== D) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n));
                return e = null,
                o
            }
            ]; o > a; a++)
                if (i = _.relative[t[a].type])
                    d = [h(f(d), i)];
                else {
                    if (i = _.filter[t[a].type].apply(null, t[a].matches),
                    i[M]) {
                        for (n = ++a; o > n && !_.relative[t[n].type]; n++)
                            ;
                        return y(a > 1 && f(d), a > 1 && c(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(lt, "$1"), i, n > a && v(t.slice(a, n)), o > n && v(t = t.slice(n)), o > n && c(t))
                    }
                    d.push(i)
                }
            return f(d)
        }
        function w(t, i) {
            var o = i.length > 0
              , r = t.length > 0
              , s = function(n, s, a, l, u) {
                var d, p, c, h = 0, f = "0", m = n && [], y = [], v = D, w = n || r && _.find.TAG("*", u), b = W += null == v ? 1 : Math.random() || .1, x = w.length;
                for (u && (D = s !== z && s); f !== x && null != (d = w[f]); f++) {
                    if (r && d) {
                        for (p = 0; c = t[p++]; )
                            if (c(d, s, a)) {
                                l.push(d);
                                break
                            }
                        u && (W = b)
                    }
                    o && ((d = !c && d) && h--,
                    n && m.push(d))
                }
                if (h += f,
                o && f !== h) {
                    for (p = 0; c = i[p++]; )
                        c(m, y, s, a);
                    if (n) {
                        if (h > 0)
                            for (; f--; )
                                m[f] || y[f] || (y[f] = G.call(l));
                        y = g(y)
                    }
                    Z.apply(l, y),
                    u && !n && y.length > 0 && h + i.length > 1 && e.uniqueSort(l)
                }
                return u && (W = b,
                D = v),
                m
            };
            return o ? n(s) : s
        }
        var b, x, _, T, S, k, C, E, D, L, $, I, z, A, P, F, j, O, H, M = "sizzle" + 1 * new Date, R = t.document, W = 0, q = 0, N = i(), B = i(), Y = i(), U = function(t, e) {
            return t === e && ($ = !0),
            0
        }, V = 1 << 31, Q = {}.hasOwnProperty, X = [], G = X.pop, J = X.push, Z = X.push, K = X.slice, tt = function(t, e) {
            for (var i = 0, n = t.length; n > i; i++)
                if (t[i] === e)
                    return i;
            return -1
        }, et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", it = "[\\x20\\t\\r\\n\\f]", nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ot = nt.replace("w", "w#"), rt = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + it + "*\\]", st = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)", at = new RegExp(it + "+","g"), lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$","g"), ut = new RegExp("^" + it + "*," + it + "*"), dt = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"), pt = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]","g"), ct = new RegExp(st), ht = new RegExp("^" + ot + "$"), ft = {
            ID: new RegExp("^#(" + nt + ")"),
            CLASS: new RegExp("^\\.(" + nt + ")"),
            TAG: new RegExp("^(" + nt.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + rt),
            PSEUDO: new RegExp("^" + st),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)","i"),
            bool: new RegExp("^(?:" + et + ")$","i"),
            needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)","i")
        }, mt = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, yt = /^[^{]+\{\s*\[native \w/, vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, wt = /[+~]/, bt = /'|\\/g, xt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)","ig"), _t = function(t, e, i) {
            var n = "0x" + e - 65536;
            return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        }, Tt = function() {
            I()
        };
        try {
            Z.apply(X = K.call(R.childNodes), R.childNodes),
            X[R.childNodes.length].nodeType
        } catch (St) {
            Z = {
                apply: X.length ? function(t, e) {
                    J.apply(t, K.call(e))
                }
                : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++]; )
                        ;
                    t.length = i - 1
                }
            }
        }
        x = e.support = {},
        S = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }
        ,
        I = e.setDocument = function(t) {
            var e, i, n = t ? t.ownerDocument || t : R;
            return n !== z && 9 === n.nodeType && n.documentElement ? (z = n,
            A = n.documentElement,
            i = n.defaultView,
            i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", Tt, !1) : i.attachEvent && i.attachEvent("onunload", Tt)),
            P = !S(n),
            x.attributes = o(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }),
            x.getElementsByTagName = o(function(t) {
                return t.appendChild(n.createComment("")),
                !t.getElementsByTagName("*").length
            }),
            x.getElementsByClassName = yt.test(n.getElementsByClassName),
            x.getById = o(function(t) {
                return A.appendChild(t).id = M,
                !n.getElementsByName || !n.getElementsByName(M).length
            }),
            x.getById ? (_.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && P) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [i] : []
                }
            }
            ,
            _.filter.ID = function(t) {
                var e = t.replace(xt, _t);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }
            ) : (delete _.find.ID,
            _.filter.ID = function(t) {
                var e = t.replace(xt, _t);
                return function(t) {
                    var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }
            ),
            _.find.TAG = x.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
            }
            : function(t, e) {
                var i, n = [], o = 0, r = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = r[o++]; )
                        1 === i.nodeType && n.push(i);
                    return n
                }
                return r
            }
            ,
            _.find.CLASS = x.getElementsByClassName && function(t, e) {
                return P ? e.getElementsByClassName(t) : void 0
            }
            ,
            j = [],
            F = [],
            (x.qsa = yt.test(n.querySelectorAll)) && (o(function(t) {
                A.appendChild(t).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\f]' msallowcapture=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + it + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || F.push("\\[" + it + "*(?:value|" + et + ")"),
                t.querySelectorAll("[id~=" + M + "-]").length || F.push("~="),
                t.querySelectorAll(":checked").length || F.push(":checked"),
                t.querySelectorAll("a#" + M + "+*").length || F.push(".#.+[+~]")
            }),
            o(function(t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && F.push("name" + it + "*[*^$|!~]?="),
                t.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                F.push(",.*:")
            })),
            (x.matchesSelector = yt.test(O = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && o(function(t) {
                x.disconnectedMatch = O.call(t, "div"),
                O.call(t, "[s!='']:x"),
                j.push("!=", st)
            }),
            F = F.length && new RegExp(F.join("|")),
            j = j.length && new RegExp(j.join("|")),
            e = yt.test(A.compareDocumentPosition),
            H = e || yt.test(A.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t
                  , n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            }
            : function(t, e) {
                if (e)
                    for (; e = e.parentNode; )
                        if (e === t)
                            return !0;
                return !1
            }
            ,
            U = e ? function(t, e) {
                if (t === e)
                    return $ = !0,
                    0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1,
                1 & i || !x.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === R && H(R, t) ? -1 : e === n || e.ownerDocument === R && H(R, e) ? 1 : L ? tt(L, t) - tt(L, e) : 0 : 4 & i ? -1 : 1)
            }
            : function(t, e) {
                if (t === e)
                    return $ = !0,
                    0;
                var i, o = 0, r = t.parentNode, a = e.parentNode, l = [t], u = [e];
                if (!r || !a)
                    return t === n ? -1 : e === n ? 1 : r ? -1 : a ? 1 : L ? tt(L, t) - tt(L, e) : 0;
                if (r === a)
                    return s(t, e);
                for (i = t; i = i.parentNode; )
                    l.unshift(i);
                for (i = e; i = i.parentNode; )
                    u.unshift(i);
                for (; l[o] === u[o]; )
                    o++;
                return o ? s(l[o], u[o]) : l[o] === R ? -1 : u[o] === R ? 1 : 0
            }
            ,
            n) : z
        }
        ,
        e.matches = function(t, i) {
            return e(t, null, null, i)
        }
        ,
        e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== z && I(t),
            i = i.replace(pt, "='$1']"),
            !(!x.matchesSelector || !P || j && j.test(i) || F && F.test(i)))
                try {
                    var n = O.call(t, i);
                    if (n || x.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return n
                } catch (o) {}
            return e(i, z, null, [t]).length > 0
        }
        ,
        e.contains = function(t, e) {
            return (t.ownerDocument || t) !== z && I(t),
            H(t, e)
        }
        ,
        e.attr = function(t, e) {
            (t.ownerDocument || t) !== z && I(t);
            var i = _.attrHandle[e.toLowerCase()]
              , n = i && Q.call(_.attrHandle, e.toLowerCase()) ? i(t, e, !P) : void 0;
            return void 0 !== n ? n : x.attributes || !P ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }
        ,
        e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }
        ,
        e.uniqueSort = function(t) {
            var e, i = [], n = 0, o = 0;
            if ($ = !x.detectDuplicates,
            L = !x.sortStable && t.slice(0),
            t.sort(U),
            $) {
                for (; e = t[o++]; )
                    e === t[o] && (n = i.push(o));
                for (; n--; )
                    t.splice(i[n], 1)
            }
            return L = null,
            t
        }
        ,
        T = e.getText = function(t) {
            var e, i = "", n = 0, o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        i += T(t)
                } else if (3 === o || 4 === o)
                    return t.nodeValue
            } else
                for (; e = t[n++]; )
                    i += T(e);
            return i
        }
        ,
        _ = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(xt, _t),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(xt, _t),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]),
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                    t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ct.test(i) && (e = k(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e),
                    t[2] = i.slice(0, e)),
                    t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(xt, _t).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    }
                    : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = N[t + " "];
                    return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && N(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, i, n) {
                    return function(o) {
                        var r = e.attr(o, t);
                        return null == r ? "!=" === i : i ? (r += "",
                        "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r.replace(at, " ") + " ").indexOf(n) > -1 : "|=" === i ? r === n || r.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, i, n, o) {
                    var r = "nth" !== t.slice(0, 3)
                      , s = "last" !== t.slice(-4)
                      , a = "of-type" === e;
                    return 1 === n && 0 === o ? function(t) {
                        return !!t.parentNode
                    }
                    : function(e, i, l) {
                        var u, d, p, c, h, f, m = r !== s ? "nextSibling" : "previousSibling", g = e.parentNode, y = a && e.nodeName.toLowerCase(), v = !l && !a;
                        if (g) {
                            if (r) {
                                for (; m; ) {
                                    for (p = e; p = p[m]; )
                                        if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)
                                            return !1;
                                    f = m = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? g.firstChild : g.lastChild],
                            s && v) {
                                for (d = g[M] || (g[M] = {}),
                                u = d[t] || [],
                                h = u[0] === W && u[1],
                                c = u[0] === W && u[2],
                                p = h && g.childNodes[h]; p = ++h && p && p[m] || (c = h = 0) || f.pop(); )
                                    if (1 === p.nodeType && ++c && p === e) {
                                        d[t] = [W, h, c];
                                        break
                                    }
                            } else if (v && (u = (e[M] || (e[M] = {}))[t]) && u[0] === W)
                                c = u[1];
                            else
                                for (; (p = ++h && p && p[m] || (c = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++c || (v && ((p[M] || (p[M] = {}))[t] = [W, c]),
                                p !== e)); )
                                    ;
                            return c -= o,
                            c === n || c % n === 0 && c / n >= 0
                        }
                    }
                },
                PSEUDO: function(t, i) {
                    var o, r = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return r[M] ? r(i) : r.length > 1 ? (o = [t, t, "", i],
                    _.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, o = r(t, i), s = o.length; s--; )
                            n = tt(t, o[s]),
                            t[n] = !(e[n] = o[s])
                    }) : function(t) {
                        return r(t, 0, o)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = []
                      , i = []
                      , o = C(t.replace(lt, "$1"));
                    return o[M] ? n(function(t, e, i, n) {
                        for (var r, s = o(t, null, n, []), a = t.length; a--; )
                            (r = s[a]) && (t[a] = !(e[a] = r))
                    }) : function(t, n, r) {
                        return e[0] = t,
                        o(e, null, r, i),
                        e[0] = null,
                        !i.pop()
                    }
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function(t) {
                    return t = t.replace(xt, _t),
                    function(e) {
                        return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                    }
                }),
                lang: n(function(t) {
                    return ht.test(t || "") || e.error("unsupported lang: " + t),
                    t = t.replace(xt, _t).toLowerCase(),
                    function(e) {
                        var i;
                        do
                            if (i = P ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return i = i.toLowerCase(),
                                i === t || 0 === i.indexOf(t + "-");
                        while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function(t) {
                    return t === A
                },
                focus: function(t) {
                    return t === z.activeElement && (!z.hasFocus || z.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex,
                    t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !_.pseudos.empty(t)
                },
                header: function(t) {
                    return gt.test(t.nodeName)
                },
                input: function(t) {
                    return mt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(t, e) {
                    return [e - 1]
                }),
                eq: u(function(t, e, i) {
                    return [0 > i ? i + e : i]
                }),
                even: u(function(t, e) {
                    for (var i = 0; e > i; i += 2)
                        t.push(i);
                    return t
                }),
                odd: u(function(t, e) {
                    for (var i = 1; e > i; i += 2)
                        t.push(i);
                    return t
                }),
                lt: u(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; --n >= 0; )
                        t.push(n);
                    return t
                }),
                gt: u(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; ++n < e; )
                        t.push(n);
                    return t
                })
            }
        },
        _.pseudos.nth = _.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            _.pseudos[b] = a(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            _.pseudos[b] = l(b);
        return p.prototype = _.filters = _.pseudos,
        _.setFilters = new p,
        k = e.tokenize = function(t, i) {
            var n, o, r, s, a, l, u, d = B[t + " "];
            if (d)
                return i ? 0 : d.slice(0);
            for (a = t,
            l = [],
            u = _.preFilter; a; ) {
                (!n || (o = ut.exec(a))) && (o && (a = a.slice(o[0].length) || a),
                l.push(r = [])),
                n = !1,
                (o = dt.exec(a)) && (n = o.shift(),
                r.push({
                    value: n,
                    type: o[0].replace(lt, " ")
                }),
                a = a.slice(n.length));
                for (s in _.filter)
                    !(o = ft[s].exec(a)) || u[s] && !(o = u[s](o)) || (n = o.shift(),
                    r.push({
                        value: n,
                        type: s,
                        matches: o
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return i ? a.length : a ? e.error(t) : B(t, l).slice(0)
        }
        ,
        C = e.compile = function(t, e) {
            var i, n = [], o = [], r = Y[t + " "];
            if (!r) {
                for (e || (e = k(t)),
                i = e.length; i--; )
                    r = v(e[i]),
                    r[M] ? n.push(r) : o.push(r);
                r = Y(t, w(o, n)),
                r.selector = t
            }
            return r
        }
        ,
        E = e.select = function(t, e, i, n) {
            var o, r, s, a, l, u = "function" == typeof t && t, p = !n && k(t = u.selector || t);
            if (i = i || [],
            1 === p.length) {
                if (r = p[0] = p[0].slice(0),
                r.length > 2 && "ID" === (s = r[0]).type && x.getById && 9 === e.nodeType && P && _.relative[r[1].type]) {
                    if (e = (_.find.ID(s.matches[0].replace(xt, _t), e) || [])[0],
                    !e)
                        return i;
                    u && (e = e.parentNode),
                    t = t.slice(r.shift().value.length)
                }
                for (o = ft.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o],
                !_.relative[a = s.type]); )
                    if ((l = _.find[a]) && (n = l(s.matches[0].replace(xt, _t), wt.test(r[0].type) && d(e.parentNode) || e))) {
                        if (r.splice(o, 1),
                        t = n.length && c(r),
                        !t)
                            return Z.apply(i, n),
                            i;
                        break
                    }
            }
            return (u || C(t, p))(n, e, !P, i, wt.test(t) && d(e.parentNode) || e),
            i
        }
        ,
        x.sortStable = M.split("").sort(U).join("") === M,
        x.detectDuplicates = !!$,
        I(),
        x.sortDetached = o(function(t) {
            return 1 & t.compareDocumentPosition(z.createElement("div"))
        }),
        o(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        x.attributes && o(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || r("value", function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }),
        o(function(t) {
            return null == t.getAttribute("disabled")
        }) || r(et, function(t, e, i) {
            var n;
            return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }),
        e
    }(t);
    K.find = ot,
    K.expr = ot.selectors,
    K.expr[":"] = K.expr.pseudos,
    K.unique = ot.uniqueSort,
    K.text = ot.getText,
    K.isXMLDoc = ot.isXML,
    K.contains = ot.contains;
    var rt = K.expr.match.needsContext
      , st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , at = /^.[^:#\[\.,]*$/;
    K.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"),
        1 === e.length && 1 === n.nodeType ? K.find.matchesSelector(n, t) ? [n] : [] : K.find.matches(t, K.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }
    ,
    K.fn.extend({
        find: function(t) {
            var e, i = this.length, n = [], o = this;

            if ("string" != typeof t)
                return this.pushStack(K(t).filter(function() {
                    for (e = 0; i > e; e++)
                        if (K.contains(o[e], this))
                            return !0
                }));
            for (e = 0; i > e; e++)
                K.find(t, o[e], n);
            return n = this.pushStack(i > 1 ? K.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + t : t,
            n
        },
        filter: function(t) {
            return this.pushStack(n(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(n(this, t || [], !0))
        },
        is: function(t) {
            return !!n(this, "string" == typeof t && rt.test(t) ? K(t) : t || [], !1).length
        }
    });
    var lt, ut = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, dt = K.fn.init = function(t, e) {
        var i, n;
        if (!t)
            return this;
        if ("string" == typeof t) {
            if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ut.exec(t),
            !i || !i[1] && e)
                return !e || e.jquery ? (e || lt).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof K ? e[0] : e,
                K.merge(this, K.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : J, !0)),
                st.test(i[1]) && K.isPlainObject(e))
                    for (i in e)
                        K.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            return n = J.getElementById(i[2]),
            n && n.parentNode && (this.length = 1,
            this[0] = n),
            this.context = J,
            this.selector = t,
            this
        }
        return t.nodeType ? (this.context = this[0] = t,
        this.length = 1,
        this) : K.isFunction(t) ? "undefined" != typeof lt.ready ? lt.ready(t) : t(K) : (void 0 !== t.selector && (this.selector = t.selector,
        this.context = t.context),
        K.makeArray(t, this))
    }
    ;
    dt.prototype = K.fn,
    lt = K(J);
    var pt = /^(?:parents|prev(?:Until|All))/
      , ct = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    K.extend({
        dir: function(t, e, i) {
            for (var n = [], o = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
                if (1 === t.nodeType) {
                    if (o && K(t).is(i))
                        break;
                    n.push(t)
                }
            return n
        },
        sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    }),
    K.fn.extend({
        has: function(t) {
            var e = K(t, this)
              , i = e.length;
            return this.filter(function() {
                for (var t = 0; i > t; t++)
                    if (K.contains(this, e[t]))
                        return !0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0, o = this.length, r = [], s = rt.test(t) || "string" != typeof t ? K(t, e || this.context) : 0; o > n; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && K.find.matchesSelector(i, t))) {
                        r.push(i);
                        break
                    }
            return this.pushStack(r.length > 1 ? K.unique(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? U.call(K(t), this[0]) : U.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(K.unique(K.merge(this.get(), K(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
    K.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return K.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return K.dir(t, "parentNode", i)
        },
        next: function(t) {
            return o(t, "nextSibling")
        },
        prev: function(t) {
            return o(t, "previousSibling")
        },
        nextAll: function(t) {
            return K.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return K.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return K.dir(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return K.dir(t, "previousSibling", i)
        },
        siblings: function(t) {
            return K.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return K.sibling(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || K.merge([], t.childNodes)
        }
    }, function(t, e) {
        K.fn[t] = function(i, n) {
            var o = K.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i),
            n && "string" == typeof n && (o = K.filter(n, o)),
            this.length > 1 && (ct[t] || K.unique(o),
            pt.test(t) && o.reverse()),
            this.pushStack(o)
        }
    });
    var ht = /\S+/g
      , ft = {};
    K.Callbacks = function(t) {
        t = "string" == typeof t ? ft[t] || r(t) : K.extend({}, t);
        var e, i, n, o, s, a, l = [], u = !t.once && [], d = function(r) {
            for (e = t.memory && r,
            i = !0,
            a = o || 0,
            o = 0,
            s = l.length,
            n = !0; l && s > a; a++)
                if (l[a].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
                    e = !1;
                    break
                }
            n = !1,
            l && (u ? u.length && d(u.shift()) : e ? l = [] : p.disable())
        }, p = {
            add: function() {
                if (l) {
                    var i = l.length;
                    !function r(e) {
                        K.each(e, function(e, i) {
                            var n = K.type(i);
                            "function" === n ? t.unique && p.has(i) || l.push(i) : i && i.length && "string" !== n && r(i)
                        })
                    }(arguments),
                    n ? s = l.length : e && (o = i,
                    d(e))
                }
                return this
            },
            remove: function() {
                return l && K.each(arguments, function(t, e) {
                    for (var i; (i = K.inArray(e, l, i)) > -1; )
                        l.splice(i, 1),
                        n && (s >= i && s--,
                        a >= i && a--)
                }),
                this
            },
            has: function(t) {
                return t ? K.inArray(t, l) > -1 : !(!l || !l.length)
            },
            empty: function() {
                return l = [],
                s = 0,
                this
            },
            disable: function() {
                return l = u = e = void 0,
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return u = void 0,
                e || p.disable(),
                this
            },
            locked: function() {
                return !u
            },
            fireWith: function(t, e) {
                return !l || i && !u || (e = e || [],
                e = [t, e.slice ? e.slice() : e],
                n ? u.push(e) : d(e)),
                this
            },
            fire: function() {
                return p.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return p
    }
    ,
    K.extend({
        Deferred: function(t) {
            var e = [["resolve", "done", K.Callbacks("once memory"), "resolved"], ["reject", "fail", K.Callbacks("once memory"), "rejected"], ["notify", "progress", K.Callbacks("memory")]]
              , i = "pending"
              , n = {
                state: function() {
                    return i
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var t = arguments;
                    return K.Deferred(function(i) {
                        K.each(e, function(e, r) {
                            var s = K.isFunction(t[e]) && t[e];
                            o[r[1]](function() {
                                var t = s && s.apply(this, arguments);
                                t && K.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[r[0] + "With"](this === n ? i.promise() : this, s ? [t] : arguments)
                            })
                        }),
                        t = null
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? K.extend(t, n) : n
                }
            }
              , o = {};
            return n.pipe = n.then,
            K.each(e, function(t, r) {
                var s = r[2]
                  , a = r[3];
                n[r[1]] = s.add,
                a && s.add(function() {
                    i = a
                }, e[1 ^ t][2].disable, e[2][2].lock),
                o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? n : this, arguments),
                    this
                }
                ,
                o[r[0] + "With"] = s.fireWith
            }),
            n.promise(o),
            t && t.call(o, o),
            o
        },
        when: function(t) {
            var e, i, n, o = 0, r = N.call(arguments), s = r.length, a = 1 !== s || t && K.isFunction(t.promise) ? s : 0, l = 1 === a ? t : K.Deferred(), u = function(t, i, n) {
                return function(o) {
                    i[t] = this,
                    n[t] = arguments.length > 1 ? N.call(arguments) : o,
                    n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                }
            };
            if (s > 1)
                for (e = new Array(s),
                i = new Array(s),
                n = new Array(s); s > o; o++)
                    r[o] && K.isFunction(r[o].promise) ? r[o].promise().done(u(o, n, r)).fail(l.reject).progress(u(o, i, e)) : --a;
            return a || l.resolveWith(n, r),
            l.promise()
        }
    });
    var mt;
    K.fn.ready = function(t) {
        return K.ready.promise().done(t),
        this
    }
    ,
    K.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? K.readyWait++ : K.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --K.readyWait : K.isReady) || (K.isReady = !0,
            t !== !0 && --K.readyWait > 0 || (mt.resolveWith(J, [K]),
            K.fn.triggerHandler && (K(J).triggerHandler("ready"),
            K(J).off("ready"))))
        }
    }),
    K.ready.promise = function(e) {
        return mt || (mt = K.Deferred(),
        "complete" === J.readyState ? setTimeout(K.ready) : (J.addEventListener("DOMContentLoaded", s, !1),
        t.addEventListener("load", s, !1))),
        mt.promise(e)
    }
    ,
    K.ready.promise();
    var gt = K.access = function(t, e, i, n, o, r, s) {
        var a = 0
          , l = t.length
          , u = null == i;
        if ("object" === K.type(i)) {
            o = !0;
            for (a in i)
                K.access(t, e, a, i[a], !0, r, s)
        } else if (void 0 !== n && (o = !0,
        K.isFunction(n) || (s = !0),
        u && (s ? (e.call(t, n),
        e = null) : (u = e,
        e = function(t, e, i) {
            return u.call(K(t), i)
        }
        )),
        e))
            for (; l > a; a++)
                e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
        return o ? t : u ? e.call(t) : l ? e(t[0], i) : r
    }
    ;
    K.acceptData = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }
    ,
    a.uid = 1,
    a.accepts = K.acceptData,
    a.prototype = {
        key: function(t) {
            if (!a.accepts(t))
                return 0;
            var e = {}
              , i = t[this.expando];
            if (!i) {
                i = a.uid++;
                try {
                    e[this.expando] = {
                        value: i
                    },
                    Object.defineProperties(t, e)
                } catch (n) {
                    e[this.expando] = i,
                    K.extend(t, e)
                }
            }
            return this.cache[i] || (this.cache[i] = {}),
            i
        },
        set: function(t, e, i) {
            var n, o = this.key(t), r = this.cache[o];
            if ("string" == typeof e)
                r[e] = i;
            else if (K.isEmptyObject(r))
                K.extend(this.cache[o], e);
            else
                for (n in e)
                    r[n] = e[n];
            return r
        },
        get: function(t, e) {
            var i = this.cache[this.key(t)];
            return void 0 === e ? i : i[e]
        },
        access: function(t, e, i) {
            var n;
            return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e),
            void 0 !== n ? n : this.get(t, K.camelCase(e))) : (this.set(t, e, i),
            void 0 !== i ? i : e)
        },
        remove: function(t, e) {
            var i, n, o, r = this.key(t), s = this.cache[r];
            if (void 0 === e)
                this.cache[r] = {};
            else {
                K.isArray(e) ? n = e.concat(e.map(K.camelCase)) : (o = K.camelCase(e),
                e in s ? n = [e, o] : (n = o,
                n = n in s ? [n] : n.match(ht) || [])),
                i = n.length;
                for (; i--; )
                    delete s[n[i]]
            }
        },
        hasData: function(t) {
            return !K.isEmptyObject(this.cache[t[this.expando]] || {})
        },
        discard: function(t) {
            t[this.expando] && delete this.cache[t[this.expando]]
        }
    };
    var yt = new a
      , vt = new a
      , wt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , bt = /([A-Z])/g;
    K.extend({
        hasData: function(t) {
            return vt.hasData(t) || yt.hasData(t)
        },
        data: function(t, e, i) {
            return vt.access(t, e, i)
        },
        removeData: function(t, e) {
            vt.remove(t, e)
        },
        _data: function(t, e, i) {
            return yt.access(t, e, i)
        },
        _removeData: function(t, e) {
            yt.remove(t, e)
        }
    }),
    K.fn.extend({
        data: function(t, e) {
            var i, n, o, r = this[0], s = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = vt.get(r),
                1 === r.nodeType && !yt.get(r, "hasDataAttrs"))) {
                    for (i = s.length; i--; )
                        s[i] && (n = s[i].name,
                        0 === n.indexOf("data-") && (n = K.camelCase(n.slice(5)),
                        l(r, n, o[n])));
                    yt.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function() {
                vt.set(this, t)
            }) : gt(this, function(e) {
                var i, n = K.camelCase(t);
                if (r && void 0 === e) {
                    if (i = vt.get(r, t),
                    void 0 !== i)
                        return i;
                    if (i = vt.get(r, n),
                    void 0 !== i)
                        return i;
                    if (i = l(r, n, void 0),
                    void 0 !== i)
                        return i
                } else
                    this.each(function() {
                        var i = vt.get(this, n);
                        vt.set(this, n, e),
                        -1 !== t.indexOf("-") && void 0 !== i && vt.set(this, t, e)
                    })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                vt.remove(this, t)
            })
        }
    }),
    K.extend({
        queue: function(t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue",
            n = yt.get(t, e),
            i && (!n || K.isArray(i) ? n = yt.access(t, e, K.makeArray(i)) : n.push(i)),
            n || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = K.queue(t, e)
              , n = i.length
              , o = i.shift()
              , r = K._queueHooks(t, e)
              , s = function() {
                K.dequeue(t, e)
            };
            "inprogress" === o && (o = i.shift(),
            n--),
            o && ("fx" === e && i.unshift("inprogress"),
            delete r.stop,
            o.call(t, s, r)),
            !n && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return yt.get(t, i) || yt.access(t, i, {
                empty: K.Callbacks("once memory").add(function() {
                    yt.remove(t, [e + "queue", i])
                })
            })
        }
    }),
    K.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t,
            t = "fx",
            i--),
            arguments.length < i ? K.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = K.queue(this, t, e);
                K._queueHooks(this, t),
                "fx" === t && "inprogress" !== i[0] && K.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                K.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1, o = K.Deferred(), r = this, s = this.length, a = function() {
                --n || o.resolveWith(r, [r])
            };
            for ("string" != typeof t && (e = t,
            t = void 0),
            t = t || "fx"; s--; )
                i = yt.get(r[s], t + "queueHooks"),
                i && i.empty && (n++,
                i.empty.add(a));
            return a(),
            o.promise(e)
        }
    });
    var xt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , _t = ["Top", "Right", "Bottom", "Left"]
      , Tt = function(t, e) {
        return t = e || t,
        "none" === K.css(t, "display") || !K.contains(t.ownerDocument, t)
    }
      , St = /^(?:checkbox|radio)$/i;
    !function() {
        var t = J.createDocumentFragment()
          , e = t.appendChild(J.createElement("div"))
          , i = J.createElement("input");
        i.setAttribute("type", "radio"),
        i.setAttribute("checked", "checked"),
        i.setAttribute("name", "t"),
        e.appendChild(i),
        G.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        e.innerHTML = "<textarea>x</textarea>",
        G.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var kt = "undefined";
    G.focusinBubbles = "onfocusin"in t;
    var Ct = /^key/
      , Et = /^(?:mouse|pointer|contextmenu)|click/
      , Dt = /^(?:focusinfocus|focusoutblur)$/
      , Lt = /^([^.]*)(?:\.(.+)|)$/;
    K.event = {
        global: {},
        add: function(t, e, i, n, o) {
            var r, s, a, l, u, d, p, c, h, f, m, g = yt.get(t);
            if (g)
                for (i.handler && (r = i,
                i = r.handler,
                o = r.selector),
                i.guid || (i.guid = K.guid++),
                (l = g.events) || (l = g.events = {}),
                (s = g.handle) || (s = g.handle = function(e) {
                    return typeof K !== kt && K.event.triggered !== e.type ? K.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                e = (e || "").match(ht) || [""],
                u = e.length; u--; )
                    a = Lt.exec(e[u]) || [],
                    h = m = a[1],
                    f = (a[2] || "").split(".").sort(),
                    h && (p = K.event.special[h] || {},
                    h = (o ? p.delegateType : p.bindType) || h,
                    p = K.event.special[h] || {},
                    d = K.extend({
                        type: h,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && K.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, r),
                    (c = l[h]) || (c = l[h] = [],
                    c.delegateCount = 0,
                    p.setup && p.setup.call(t, n, f, s) !== !1 || t.addEventListener && t.addEventListener(h, s, !1)),
                    p.add && (p.add.call(t, d),
                    d.handler.guid || (d.handler.guid = i.guid)),
                    o ? c.splice(c.delegateCount++, 0, d) : c.push(d),
                    K.event.global[h] = !0)
        },
        remove: function(t, e, i, n, o) {
            var r, s, a, l, u, d, p, c, h, f, m, g = yt.hasData(t) && yt.get(t);
            if (g && (l = g.events)) {
                for (e = (e || "").match(ht) || [""],
                u = e.length; u--; )
                    if (a = Lt.exec(e[u]) || [],
                    h = m = a[1],
                    f = (a[2] || "").split(".").sort(),
                    h) {
                        for (p = K.event.special[h] || {},
                        h = (n ? p.delegateType : p.bindType) || h,
                        c = l[h] || [],
                        a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = r = c.length; r--; )
                            d = c[r],
                            !o && m !== d.origType || i && i.guid !== d.guid || a && !a.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (c.splice(r, 1),
                            d.selector && c.delegateCount--,
                            p.remove && p.remove.call(t, d));
                        s && !c.length && (p.teardown && p.teardown.call(t, f, g.handle) !== !1 || K.removeEvent(t, h, g.handle),
                        delete l[h])
                    } else
                        for (h in l)
                            K.event.remove(t, h + e[u], i, n, !0);
                K.isEmptyObject(l) && (delete g.handle,
                yt.remove(t, "events"))
            }
        },
        trigger: function(e, i, n, o) {
            var r, s, a, l, u, d, p, c = [n || J], h = X.call(e, "type") ? e.type : e, f = X.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = n = n || J,
            3 !== n.nodeType && 8 !== n.nodeType && !Dt.test(h + K.event.triggered) && (h.indexOf(".") >= 0 && (f = h.split("."),
            h = f.shift(),
            f.sort()),
            u = h.indexOf(":") < 0 && "on" + h,
            e = e[K.expando] ? e : new K.Event(h,"object" == typeof e && e),
            e.isTrigger = o ? 2 : 3,
            e.namespace = f.join("."),
            e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            i = null == i ? [e] : K.makeArray(i, [e]),
            p = K.event.special[h] || {},
            o || !p.trigger || p.trigger.apply(n, i) !== !1)) {
                if (!o && !p.noBubble && !K.isWindow(n)) {
                    for (l = p.delegateType || h,
                    Dt.test(l + h) || (s = s.parentNode); s; s = s.parentNode)
                        c.push(s),
                        a = s;
                    a === (n.ownerDocument || J) && c.push(a.defaultView || a.parentWindow || t)
                }
                for (r = 0; (s = c[r++]) && !e.isPropagationStopped(); )
                    e.type = r > 1 ? l : p.bindType || h,
                    d = (yt.get(s, "events") || {})[e.type] && yt.get(s, "handle"),
                    d && d.apply(s, i),
                    d = u && s[u],
                    d && d.apply && K.acceptData(s) && (e.result = d.apply(s, i),
                    e.result === !1 && e.preventDefault());
                return e.type = h,
                o || e.isDefaultPrevented() || p._default && p._default.apply(c.pop(), i) !== !1 || !K.acceptData(n) || u && K.isFunction(n[h]) && !K.isWindow(n) && (a = n[u],
                a && (n[u] = null),
                K.event.triggered = h,
                n[h](),
                K.event.triggered = void 0,
                a && (n[u] = a)),
                e.result
            }
        },
        dispatch: function(t) {
            t = K.event.fix(t);
            var e, i, n, o, r, s = [], a = N.call(arguments), l = (yt.get(this, "events") || {})[t.type] || [], u = K.event.special[t.type] || {};
            if (a[0] = t,
            t.delegateTarget = this,
            !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (s = K.event.handlers.call(this, t, l),
                e = 0; (o = s[e++]) && !t.isPropagationStopped(); )
                    for (t.currentTarget = o.elem,
                    i = 0; (r = o.handlers[i++]) && !t.isImmediatePropagationStopped(); )
                        (!t.namespace_re || t.namespace_re.test(r.namespace)) && (t.handleObj = r,
                        t.data = r.data,
                        n = ((K.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a),
                        void 0 !== n && (t.result = n) === !1 && (t.preventDefault(),
                        t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t),
                t.result
            }
        },
        handlers: function(t, e) {
            var i, n, o, r, s = [], a = e.delegateCount, l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))
                for (; l !== this; l = l.parentNode || this)
                    if (l.disabled !== !0 || "click" !== t.type) {
                        for (n = [],
                        i = 0; a > i; i++)
                            r = e[i],
                            o = r.selector + " ",
                            void 0 === n[o] && (n[o] = r.needsContext ? K(o, this).index(l) >= 0 : K.find(o, this, null, [l]).length),
                            n[o] && n.push(r);
                        n.length && s.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }),
            s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode),
                t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, o, r = e.button;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || J,
                n = i.documentElement,
                o = i.body,
                t.pageX = e.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0),
                t.pageY = e.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)),
                t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                t
            }
        },
        fix: function(t) {
            if (t[K.expando])
                return t;
            var e, i, n, o = t.type, r = t, s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = Et.test(o) ? this.mouseHooks : Ct.test(o) ? this.keyHooks : {}),
            n = s.props ? this.props.concat(s.props) : this.props,
            t = new K.Event(r),
            e = n.length; e--; )
                i = n[e],
                t[i] = r[i];
            return t.target || (t.target = J),
            3 === t.target.nodeType && (t.target = t.target.parentNode),
            s.filter ? s.filter(t, r) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== p() && this.focus ? (this.focus(),
                    !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === p() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && K.nodeName(this, "input") ? (this.click(),
                    !1) : void 0
                },
                _default: function(t) {
                    return K.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, i, n) {
            var o = K.extend(new K.Event, i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? K.event.trigger(o, null, e) : K.event.dispatch.call(e, o),
            o.isDefaultPrevented() && i.preventDefault()
        }
    },
    K.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    }
    ,
    K.Event = function(t, e) {
        return this instanceof K.Event ? (t && t.type ? (this.originalEvent = t,
        this.type = t.type,
        this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? u : d) : this.type = t,
        e && K.extend(this, e),
        this.timeStamp = t && t.timeStamp || K.now(),
        void (this[K.expando] = !0)) : new K.Event(t,e)
    }
    ,
    K.Event.prototype = {
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = u,
            t && t.preventDefault && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = u,
            t && t.stopPropagation && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = u,
            t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    K.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        K.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this, o = t.relatedTarget, r = t.handleObj;
                return (!o || o !== n && !K.contains(n, o)) && (t.type = r.origType,
                i = r.handler.apply(this, arguments),
                t.type = e),
                i
            }
        }
    }),
    G.focusinBubbles || K.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            K.event.simulate(e, t.target, K.event.fix(t), !0)
        };
        K.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this
                  , o = yt.access(n, e);
                o || n.addEventListener(t, i, !0),
                yt.access(n, e, (o || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this
                  , o = yt.access(n, e) - 1;
                o ? yt.access(n, e, o) : (n.removeEventListener(t, i, !0),
                yt.remove(n, e))
            }
        }
    }),
    K.fn.extend({
        on: function(t, e, i, n, o) {
            var r, s;
            if ("object" == typeof t) {
                "string" != typeof e && (i = i || e,
                e = void 0);
                for (s in t)
                    this.on(s, e, i, t[s], o);
                return this
            }
            if (null == i && null == n ? (n = e,
            i = e = void 0) : null == n && ("string" == typeof e ? (n = i,
            i = void 0) : (n = i,
            i = e,
            e = void 0)),
            n === !1)
                n = d;
            else if (!n)
                return this;
            return 1 === o && (r = n,
            n = function(t) {
                return K().off(t),
                r.apply(this, arguments)
            }
            ,
            n.guid = r.guid || (r.guid = K.guid++)),
            this.each(function() {
                K.event.add(this, t, n, i, e)
            })
        },
        one: function(t, e, i, n) {
            return this.on(t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, o;
            if (t && t.preventDefault && t.handleObj)
                return n = t.handleObj,
                K(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler),
                this;
            if ("object" == typeof t) {
                for (o in t)
                    this.off(o, e, t[o]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (i = e,
            e = void 0),
            i === !1 && (i = d),
            this.each(function() {
                K.event.remove(this, t, i, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                K.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? K.event.trigger(t, e, i, !0) : void 0
        }
    });
    var $t = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , It = /<([\w:]+)/
      , zt = /<|&#?\w+;/
      , At = /<(?:script|style|link)/i
      , Pt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Ft = /^$|\/(?:java|ecma)script/i
      , jt = /^true\/(.*)/
      , Ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , Ht = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Ht.optgroup = Ht.option,
    Ht.tbody = Ht.tfoot = Ht.colgroup = Ht.caption = Ht.thead,
    Ht.th = Ht.td,
    K.extend({
        clone: function(t, e, i) {
            var n, o, r, s, a = t.cloneNode(!0), l = K.contains(t.ownerDocument, t);
            if (!(G.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || K.isXMLDoc(t)))
                for (s = y(a),
                r = y(t),
                n = 0,
                o = r.length; o > n; n++)
                    v(r[n], s[n]);
            if (e)
                if (i)
                    for (r = r || y(t),
                    s = s || y(a),
                    n = 0,
                    o = r.length; o > n; n++)
                        g(r[n], s[n]);
                else
                    g(t, a);
            return s = y(a, "script"),
            s.length > 0 && m(s, !l && y(t, "script")),
            a
        },
        buildFragment: function(t, e, i, n) {
            for (var o, r, s, a, l, u, d = e.createDocumentFragment(), p = [], c = 0, h = t.length; h > c; c++)
                if (o = t[c],
                o || 0 === o)
                    if ("object" === K.type(o))
                        K.merge(p, o.nodeType ? [o] : o);
                    else if (zt.test(o)) {
                        for (r = r || d.appendChild(e.createElement("div")),
                        s = (It.exec(o) || ["", ""])[1].toLowerCase(),
                        a = Ht[s] || Ht._default,
                        r.innerHTML = a[1] + o.replace($t, "<$1></$2>") + a[2],
                        u = a[0]; u--; )
                            r = r.lastChild;
                        K.merge(p, r.childNodes),
                        r = d.firstChild,
                        r.textContent = ""
                    } else
                        p.push(e.createTextNode(o));
            for (d.textContent = "",
            c = 0; o = p[c++]; )
                if ((!n || -1 === K.inArray(o, n)) && (l = K.contains(o.ownerDocument, o),
                r = y(d.appendChild(o), "script"),
                l && m(r),
                i))
                    for (u = 0; o = r[u++]; )
                        Ft.test(o.type || "") && i.push(o);
            return d
        },
        cleanData: function(t) {
            for (var e, i, n, o, r = K.event.special, s = 0; void 0 !== (i = t[s]); s++) {
                if (K.acceptData(i) && (o = i[yt.expando],
                o && (e = yt.cache[o]))) {
                    if (e.events)
                        for (n in e.events)
                            r[n] ? K.event.remove(i, n) : K.removeEvent(i, n, e.handle);
                    yt.cache[o] && delete yt.cache[o]
                }
                delete vt.cache[i[vt.expando]]
            }
        }
    }),
    K.fn.extend({
        text: function(t) {
            return gt(this, function(t) {
                return void 0 === t ? K.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = c(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = c(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var i, n = t ? K.filter(t, this) : this, o = 0; null != (i = n[o]); o++)
                e || 1 !== i.nodeType || K.cleanData(y(i)),
                i.parentNode && (e && K.contains(i.ownerDocument, i) && m(y(i, "script")),
                i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++)
                1 === t.nodeType && (K.cleanData(y(t, !1)),
                t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t,
            e = null == e ? t : e,
            this.map(function() {
                return K.clone(this, t, e)
            })
        },
        html: function(t) {
            return gt(this, function(t) {
                var e = this[0] || {}
                  , i = 0
                  , n = this.length;
                if (void 0 === t && 1 === e.nodeType)
                    return e.innerHTML;
                if ("string" == typeof t && !At.test(t) && !Ht[(It.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace($t, "<$1></$2>");
                    try {
                        for (; n > i; i++)
                            e = this[i] || {},
                            1 === e.nodeType && (K.cleanData(y(e, !1)),
                            e.innerHTML = t);
                        e = 0
                    } catch (o) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode,
                K.cleanData(y(this)),
                t && t.replaceChild(e, this)
            }),
            t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = B.apply([], t);
            var i, n, o, r, s, a, l = 0, u = this.length, d = this, p = u - 1, c = t[0], m = K.isFunction(c);
            if (m || u > 1 && "string" == typeof c && !G.checkClone && Pt.test(c))
                return this.each(function(i) {
                    var n = d.eq(i);
                    m && (t[0] = c.call(this, i, n.html())),
                    n.domManip(t, e)
                });
            if (u && (i = K.buildFragment(t, this[0].ownerDocument, !1, this),
            n = i.firstChild,
            1 === i.childNodes.length && (i = n),
            n)) {
                for (o = K.map(y(i, "script"), h),
                r = o.length; u > l; l++)
                    s = i,
                    l !== p && (s = K.clone(s, !0, !0),
                    r && K.merge(o, y(s, "script"))),
                    e.call(this[l], s, l);
                if (r)
                    for (a = o[o.length - 1].ownerDocument,
                    K.map(o, f),
                    l = 0; r > l; l++)
                        s = o[l],
                        Ft.test(s.type || "") && !yt.access(s, "globalEval") && K.contains(a, s) && (s.src ? K._evalUrl && K._evalUrl(s.src) : K.globalEval(s.textContent.replace(Ot, "")))
            }
            return this
        }
    }),
    K.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        K.fn[t] = function(t) {
            for (var i, n = [], o = K(t), r = o.length - 1, s = 0; r >= s; s++)
                i = s === r ? this : this.clone(!0),
                K(o[s])[e](i),
                Y.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var Mt, Rt = {}, Wt = /^margin/, qt = new RegExp("^(" + xt + ")(?!px)[a-z%]+$","i"), Nt = function(e) {
        return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
    };
    !function() {
        function e() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
            s.innerHTML = "",
            o.appendChild(r);
            var e = t.getComputedStyle(s, null);
            i = "1%" !== e.top,
            n = "4px" === e.width,
            o.removeChild(r)
        }
        var i, n, o = J.documentElement, r = J.createElement("div"), s = J.createElement("div");
        s.style && (s.style.backgroundClip = "content-box",
        s.cloneNode(!0).style.backgroundClip = "",
        G.clearCloneStyle = "content-box" === s.style.backgroundClip,
        r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",
        r.appendChild(s),
        t.getComputedStyle && K.extend(G, {
            pixelPosition: function() {
                return e(),
                i
            },
            boxSizingReliable: function() {
                return null == n && e(),
                n
            },
            reliableMarginRight: function() {
                var e, i = s.appendChild(J.createElement("div"));
                return i.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                i.style.marginRight = i.style.width = "0",
                s.style.width = "1px",
                o.appendChild(r),
                e = !parseFloat(t.getComputedStyle(i, null).marginRight),
                o.removeChild(r),
                s.removeChild(i),
                e
            }
        }))
    }(),
    K.swap = function(t, e, i, n) {
        var o, r, s = {};
        for (r in e)
            s[r] = t.style[r],
            t.style[r] = e[r];
        o = i.apply(t, n || []);
        for (r in e)
            t.style[r] = s[r];
        return o
    }
    ;
    var Bt = /^(none|table(?!-c[ea]).+)/
      , Yt = new RegExp("^(" + xt + ")(.*)$","i")
      , Ut = new RegExp("^([+-])=(" + xt + ")","i")
      , Vt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Qt = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Xt = ["Webkit", "O", "Moz", "ms"];
    K.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = x(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, s, a = K.camelCase(e), l = t.style;
                return e = K.cssProps[a] || (K.cssProps[a] = T(l, a)),
                s = K.cssHooks[e] || K.cssHooks[a],
                void 0 === i ? s && "get"in s && void 0 !== (o = s.get(t, !1, n)) ? o : l[e] : (r = typeof i,
                "string" === r && (o = Ut.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(K.css(t, e)),
                r = "number"),
                null != i && i === i && ("number" !== r || K.cssNumber[a] || (i += "px"),
                G.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"),
                s && "set"in s && void 0 === (i = s.set(t, i, n)) || (l[e] = i)),
                void 0)
            }
        },
        css: function(t, e, i, n) {
            var o, r, s, a = K.camelCase(e);
            return e = K.cssProps[a] || (K.cssProps[a] = T(t.style, a)),
            s = K.cssHooks[e] || K.cssHooks[a],
            s && "get"in s && (o = s.get(t, !0, i)),
            void 0 === o && (o = x(t, e, n)),
            "normal" === o && e in Qt && (o = Qt[e]),
            "" === i || i ? (r = parseFloat(o),
            i === !0 || K.isNumeric(r) ? r || 0 : o) : o
        }
    }),
    K.each(["height", "width"], function(t, e) {
        K.cssHooks[e] = {
            get: function(t, i, n) {
                return i ? Bt.test(K.css(t, "display")) && 0 === t.offsetWidth ? K.swap(t, Vt, function() {
                    return C(t, e, n)
                }) : C(t, e, n) : void 0
            },
            set: function(t, i, n) {
                var o = n && Nt(t);
                return S(t, i, n ? k(t, e, n, "border-box" === K.css(t, "boxSizing", !1, o), o) : 0)
            }
        }
    }),
    K.cssHooks.marginRight = _(G.reliableMarginRight, function(t, e) {
        return e ? K.swap(t, {
            display: "inline-block"
        }, x, [t, "marginRight"]) : void 0
    }),
    K.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        K.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++)
                    o[t + _t[n] + e] = r[n] || r[n - 2] || r[0];
                return o
            }
        },
        Wt.test(t) || (K.cssHooks[t + e].set = S)
    }),
    K.fn.extend({
        css: function(t, e) {
            return gt(this, function(t, e, i) {
                var n, o, r = {}, s = 0;
                if (K.isArray(e)) {
                    for (n = Nt(t),
                    o = e.length; o > s; s++)
                        r[e[s]] = K.css(t, e[s], !1, n);
                    return r
                }
                return void 0 !== i ? K.style(t, e, i) : K.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return E(this, !0)
        },
        hide: function() {
            return E(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Tt(this) ? K(this).show() : K(this).hide()
            })
        }
    }),
    K.Tween = D,
    D.prototype = {
        constructor: D,
        init: function(t, e, i, n, o, r) {
            this.elem = t,
            this.prop = i,
            this.easing = o || "swing",
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = n,
            this.unit = r || (K.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = D.propHooks[this.prop];
            return t && t.get ? t.get(this) : D.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = D.propHooks[this.prop];
            return this.pos = e = this.options.duration ? K.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            i && i.set ? i.set(this) : D.propHooks._default.set(this),
            this
        }
    },
    D.prototype.init.prototype = D.prototype,
    D.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = K.css(t.elem, t.prop, ""),
                e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                K.fx.step[t.prop] ? K.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[K.cssProps[t.prop]] || K.cssHooks[t.prop]) ? K.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    },
    D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    K.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    },
    K.fx = D.prototype.init,
    K.fx.step = {};
    var Gt, Jt, Zt = /^(?:toggle|show|hide)$/, Kt = new RegExp("^(?:([+-])=|)(" + xt + ")([a-z%]*)$","i"), te = /queueHooks$/, ee = [z], ie = {
        "*": [function(t, e) {
            var i = this.createTween(t, e)
              , n = i.cur()
              , o = Kt.exec(e)
              , r = o && o[3] || (K.cssNumber[t] ? "" : "px")
              , s = (K.cssNumber[t] || "px" !== r && +n) && Kt.exec(K.css(i.elem, t))
              , a = 1
              , l = 20;
            if (s && s[3] !== r) {
                r = r || s[3],
                o = o || [],
                s = +n || 1;
                do
                    a = a || ".5",
                    s /= a,
                    K.style(i.elem, t, s + r);
                while (a !== (a = i.cur() / n) && 1 !== a && --l)
            }
            return o && (s = i.start = +s || +n || 0,
            i.unit = r,
            i.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]),
            i
        }
        ]
    };
    K.Animation = K.extend(P, {
        tweener: function(t, e) {
            K.isFunction(t) ? (e = t,
            t = ["*"]) : t = t.split(" ");
            for (var i, n = 0, o = t.length; o > n; n++)
                i = t[n],
                ie[i] = ie[i] || [],
                ie[i].unshift(e)
        },
        prefilter: function(t, e) {
            e ? ee.unshift(t) : ee.push(t)
        }
    }),
    K.speed = function(t, e, i) {
        var n = t && "object" == typeof t ? K.extend({}, t) : {
            complete: i || !i && e || K.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !K.isFunction(e) && e
        };
        return n.duration = K.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in K.fx.speeds ? K.fx.speeds[n.duration] : K.fx.speeds._default,
        (null == n.queue || n.queue === !0) && (n.queue = "fx"),
        n.old = n.complete,
        n.complete = function() {
            K.isFunction(n.old) && n.old.call(this),
            n.queue && K.dequeue(this, n.queue)
        }
        ,
        n
    }
    ,
    K.fn.extend({
        fadeTo: function(t, e, i, n) {
            return this.filter(Tt).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n)
        },
        animate: function(t, e, i, n) {
            var o = K.isEmptyObject(t)
              , r = K.speed(e, i, n)
              , s = function() {
                var e = P(this, K.extend({}, t), r);
                (o || yt.get(this, "finish")) && e.stop(!0)
            };
            return s.finish = s,
            o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function(t, e, i) {
            var n = function(t) {
                var e = t.stop;
                delete t.stop,
                e(i)
            };
            return "string" != typeof t && (i = e,
            e = t,
            t = void 0),
            e && t !== !1 && this.queue(t || "fx", []),
            this.each(function() {
                var e = !0
                  , o = null != t && t + "queueHooks"
                  , r = K.timers
                  , s = yt.get(this);
                if (o)
                    s[o] && s[o].stop && n(s[o]);
                else
                    for (o in s)
                        s[o] && s[o].stop && te.test(o) && n(s[o]);
                for (o = r.length; o--; )
                    r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(i),
                    e = !1,
                    r.splice(o, 1));
                (e || !i) && K.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"),
            this.each(function() {
                var e, i = yt.get(this), n = i[t + "queue"], o = i[t + "queueHooks"], r = K.timers, s = n ? n.length : 0;
                for (i.finish = !0,
                K.queue(this, t, []),
                o && o.stop && o.stop.call(this, !0),
                e = r.length; e--; )
                    r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0),
                    r.splice(e, 1));
                for (e = 0; s > e; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete i.finish
            })
        }
    }),
    K.each(["toggle", "show", "hide"], function(t, e) {
        var i = K.fn[e];
        K.fn[e] = function(t, n, o) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate($(e, !0), t, n, o)
        }
    }),
    K.each({
        slideDown: $("show"),
        slideUp: $("hide"),
        slideToggle: $("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        K.fn[t] = function(t, i, n) {
            return this.animate(e, t, i, n)
        }
    }),
    K.timers = [],
    K.fx.tick = function() {
        var t, e = 0, i = K.timers;
        for (Gt = K.now(); e < i.length; e++)
            t = i[e],
            t() || i[e] !== t || i.splice(e--, 1);
        i.length || K.fx.stop(),
        Gt = void 0
    }
    ,
    K.fx.timer = function(t) {
        K.timers.push(t),
        t() ? K.fx.start() : K.timers.pop()
    }
    ,
    K.fx.interval = 13,
    K.fx.start = function() {
        Jt || (Jt = setInterval(K.fx.tick, K.fx.interval))
    }
    ,
    K.fx.stop = function() {
        clearInterval(Jt),
        Jt = null
    }
    ,
    K.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    K.fn.delay = function(t, e) {
        return t = K.fx ? K.fx.speeds[t] || t : t,
        e = e || "fx",
        this.queue(e, function(e, i) {
            var n = setTimeout(e, t);
            i.stop = function() {
                clearTimeout(n)
            }
        })
    }
    ,
    function() {
        var t = J.createElement("input")
          , e = J.createElement("select")
          , i = e.appendChild(J.createElement("option"));
        t.type = "checkbox",
        G.checkOn = "" !== t.value,
        G.optSelected = i.selected,
        e.disabled = !0,
        G.optDisabled = !i.disabled,
        t = J.createElement("input"),
        t.value = "t",
        t.type = "radio",
        G.radioValue = "t" === t.value
    }();
    var ne, oe, re = K.expr.attrHandle;
    K.fn.extend({
        attr: function(t, e) {
            return gt(this, K.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                K.removeAttr(this, t)
            })
        }
    }),
    K.extend({
        attr: function(t, e, i) {
            var n, o, r = t.nodeType;
            if (t && 3 !== r && 8 !== r && 2 !== r)
                return typeof t.getAttribute === kt ? K.prop(t, e, i) : (1 === r && K.isXMLDoc(t) || (e = e.toLowerCase(),
                n = K.attrHooks[e] || (K.expr.match.bool.test(e) ? oe : ne)),
                void 0 === i ? n && "get"in n && null !== (o = n.get(t, e)) ? o : (o = K.find.attr(t, e),
                null == o ? void 0 : o) : null !== i ? n && "set"in n && void 0 !== (o = n.set(t, i, e)) ? o : (t.setAttribute(e, i + ""),
                i) : void K.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var i, n, o = 0, r = e && e.match(ht);
            if (r && 1 === t.nodeType)
                for (; i = r[o++]; )
                    n = K.propFix[i] || i,
                    K.expr.match.bool.test(i) && (t[n] = !1),
                    t.removeAttribute(i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!G.radioValue && "radio" === e && K.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e),
                        i && (t.value = i),
                        e
                    }
                }
            }
        }
    }),
    oe = {
        set: function(t, e, i) {
            return e === !1 ? K.removeAttr(t, i) : t.setAttribute(i, i),
            i
        }
    },
    K.each(K.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = re[e] || K.find.attr;
        re[e] = function(t, e, n) {
            var o, r;
            return n || (r = re[e],
            re[e] = o,
            o = null != i(t, e, n) ? e.toLowerCase() : null,
            re[e] = r),
            o
        }
    });
    var se = /^(?:input|select|textarea|button)$/i;
    K.fn.extend({
        prop: function(t, e) {
            return gt(this, K.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[K.propFix[t] || t]
            })
        }
    }),
    K.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, i) {
            var n, o, r, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s)
                return r = 1 !== s || !K.isXMLDoc(t),
                r && (e = K.propFix[e] || e,
                o = K.propHooks[e]),
                void 0 !== i ? o && "set"in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get"in o && null !== (n = o.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    return t.hasAttribute("tabindex") || se.test(t.nodeName) || t.href ? t.tabIndex : -1
                }
            }
        }
    }),
    G.optSelected || (K.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex,
            null
        }
    }),
    K.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        K.propFix[this.toLowerCase()] = this
    });
    var ae = /[\t\r\n\f]/g;
    K.fn.extend({
        addClass: function(t) {
            var e, i, n, o, r, s, a = "string" == typeof t && t, l = 0, u = this.length;
            if (K.isFunction(t))
                return this.each(function(e) {
                    K(this).addClass(t.call(this, e, this.className))
                });
            if (a)
                for (e = (t || "").match(ht) || []; u > l; l++)
                    if (i = this[l],
                    n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ae, " ") : " ")) {
                        for (r = 0; o = e[r++]; )
                            n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        s = K.trim(n),
                        i.className !== s && (i.className = s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, o, r, s, a = 0 === arguments.length || "string" == typeof t && t, l = 0, u = this.length;
            if (K.isFunction(t))
                return this.each(function(e) {
                    K(this).removeClass(t.call(this, e, this.className))
                });
            if (a)
                for (e = (t || "").match(ht) || []; u > l; l++)
                    if (i = this[l],
                    n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ae, " ") : "")) {
                        for (r = 0; o = e[r++]; )
                            for (; n.indexOf(" " + o + " ") >= 0; )
                                n = n.replace(" " + o + " ", " ");
                        s = t ? K.trim(n) : "",
                        i.className !== s && (i.className = s)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(K.isFunction(t) ? function(i) {
                K(this).toggleClass(t.call(this, i, this.className, e), e)
            }
            : function() {
                if ("string" === i)
                    for (var e, n = 0, o = K(this), r = t.match(ht) || []; e = r[n++]; )
                        o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else
                    (i === kt || "boolean" === i) && (this.className && yt.set(this, "__className__", this.className),
                    this.className = this.className || t === !1 ? "" : yt.get(this, "__className__") || "")
            }
            )
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(ae, " ").indexOf(e) >= 0)
                    return !0;
            return !1
        }
    });
    var le = /\r/g;
    K.fn.extend({
        val: function(t) {
            var e, i, n, o = this[0];
            {
                if (arguments.length)
                    return n = K.isFunction(t),
                    this.each(function(i) {
                        var o;
                        1 === this.nodeType && (o = n ? t.call(this, i, K(this).val()) : t,
                        null == o ? o = "" : "number" == typeof o ? o += "" : K.isArray(o) && (o = K.map(o, function(t) {
                            return null == t ? "" : t + ""
                        })),
                        e = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()],
                        e && "set"in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                    });
                if (o)
                    return e = K.valHooks[o.type] || K.valHooks[o.nodeName.toLowerCase()],
                    e && "get"in e && void 0 !== (i = e.get(o, "value")) ? i : (i = o.value,
                    "string" == typeof i ? i.replace(le, "") : null == i ? "" : i)
            }
        }
    }),
    K.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = K.find.attr(t, "value");
                    return null != e ? e : K.trim(K.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : n.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                        if (i = n[l],
                        !(!i.selected && l !== o || (G.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && K.nodeName(i.parentNode, "optgroup"))) {
                            if (e = K(i).val(),
                            r)
                                return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var i, n, o = t.options, r = K.makeArray(e), s = o.length; s--; )
                        n = o[s],
                        (n.selected = K.inArray(n.value, r) >= 0) && (i = !0);
                    return i || (t.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    K.each(["radio", "checkbox"], function() {
        K.valHooks[this] = {
            set: function(t, e) {
                return K.isArray(e) ? t.checked = K.inArray(K(t).val(), e) >= 0 : void 0
            }
        },
        G.checkOn || (K.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        }
        )
    }),
    K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        K.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }),
    K.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    });
    var ue = K.now()
      , de = /\?/;
    K.parseJSON = function(t) {
        return JSON.parse(t + "")
    }
    ,
    K.parseXML = function(t) {
        var e, i;
        if (!t || "string" != typeof t)
            return null;
        try {
            i = new DOMParser,
            e = i.parseFromString(t, "text/xml")
        } catch (n) {
            e = void 0
        }
        return (!e || e.getElementsByTagName("parsererror").length) && K.error("Invalid XML: " + t),
        e
    }
    ;
    var pe = /#.*$/
      , ce = /([?&])_=[^&]*/
      , he = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , me = /^(?:GET|HEAD)$/
      , ge = /^\/\//
      , ye = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , ve = {}
      , we = {}
      , be = "*/".concat("*")
      , xe = t.location.href
      , _e = ye.exec(xe.toLowerCase()) || [];
    K.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xe,
            type: "GET",
            isLocal: fe.test(_e[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": be,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": K.parseJSON,
                "text xml": K.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? O(O(t, K.ajaxSettings), e) : O(K.ajaxSettings, t)
        },
        ajaxPrefilter: F(ve),
        ajaxTransport: F(we),
        ajax: function(t, e) {
            function i(t, e, i, s) {
                var l, d, y, v, b, _ = e;
                2 !== w && (w = 2,
                a && clearTimeout(a),
                n = void 0,
                r = s || "",
                x.readyState = t > 0 ? 4 : 0,
                l = t >= 200 && 300 > t || 304 === t,
                i && (v = H(p, x, i)),
                v = M(p, v, x, l),
                l ? (p.ifModified && (b = x.getResponseHeader("Last-Modified"),
                b && (K.lastModified[o] = b),
                b = x.getResponseHeader("etag"),
                b && (K.etag[o] = b)),
                204 === t || "HEAD" === p.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = v.state,
                d = v.data,
                y = v.error,
                l = !y)) : (y = _,
                (t || !_) && (_ = "error",
                0 > t && (t = 0))),
                x.status = t,
                x.statusText = (e || _) + "",
                l ? f.resolveWith(c, [d, _, x]) : f.rejectWith(c, [x, _, y]),
                x.statusCode(g),
                g = void 0,
                u && h.trigger(l ? "ajaxSuccess" : "ajaxError", [x, p, l ? d : y]),
                m.fireWith(c, [x, _]),
                u && (h.trigger("ajaxComplete", [x, p]),
                --K.active || K.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t,
            t = void 0),
            e = e || {};
            var n, o, r, s, a, l, u, d, p = K.ajaxSetup({}, e), c = p.context || p, h = p.context && (c.nodeType || c.jquery) ? K(c) : K.event, f = K.Deferred(), m = K.Callbacks("once memory"), g = p.statusCode || {}, y = {}, v = {}, w = 0, b = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === w) {
                        if (!s)
                            for (s = {}; e = he.exec(r); )
                                s[e[1].toLowerCase()] = e[2];
                        e = s[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? r : null
                },
                setRequestHeader: function(t, e) {
                    var i = t.toLowerCase();
                    return w || (t = v[i] = v[i] || t,
                    y[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return w || (p.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    var e;
                    if (t)
                        if (2 > w)
                            for (e in t)
                                g[e] = [g[e], t[e]];
                        else
                            x.always(t[x.status]);
                    return this
                },
                abort: function(t) {
                    var e = t || b;
                    return n && n.abort(e),
                    i(0, e),
                    this
                }
            };
            if (f.promise(x).complete = m.add,
            x.success = x.done,
            x.error = x.fail,
            p.url = ((t || p.url || xe) + "").replace(pe, "").replace(ge, _e[1] + "//"),
            p.type = e.method || e.type || p.method || p.type,
            p.dataTypes = K.trim(p.dataType || "*").toLowerCase().match(ht) || [""],
            null == p.crossDomain && (l = ye.exec(p.url.toLowerCase()),
            p.crossDomain = !(!l || l[1] === _e[1] && l[2] === _e[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (_e[3] || ("http:" === _e[1] ? "80" : "443")))),
            p.data && p.processData && "string" != typeof p.data && (p.data = K.param(p.data, p.traditional)),
            j(ve, p, e, x),
            2 === w)
                return x;
            u = K.event && p.global,
            u && 0 === K.active++ && K.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !me.test(p.type),
            o = p.url,
            p.hasContent || (p.data && (o = p.url += (de.test(o) ? "&" : "?") + p.data,
            delete p.data),
            p.cache === !1 && (p.url = ce.test(o) ? o.replace(ce, "$1_=" + ue++) : o + (de.test(o) ? "&" : "?") + "_=" + ue++)),
            p.ifModified && (K.lastModified[o] && x.setRequestHeader("If-Modified-Since", K.lastModified[o]),
            K.etag[o] && x.setRequestHeader("If-None-Match", K.etag[o])),
            (p.data && p.hasContent && p.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", p.contentType),
            x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + be + "; q=0.01" : "") : p.accepts["*"]);
            for (d in p.headers)
                x.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (p.beforeSend.call(c, x, p) === !1 || 2 === w))
                return x.abort();
            b = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            })
                x[d](p[d]);
            if (n = j(we, p, e, x)) {
                x.readyState = 1,
                u && h.trigger("ajaxSend", [x, p]),
                p.async && p.timeout > 0 && (a = setTimeout(function() {
                    x.abort("timeout")
                }, p.timeout));
                try {
                    w = 1,
                    n.send(y, i)
                } catch (_) {
                    if (!(2 > w))
                        throw _;
                    i(-1, _)
                }
            } else
                i(-1, "No Transport");
            return x
        },
        getJSON: function(t, e, i) {
            return K.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return K.get(t, void 0, e, "script")
        }
    }),
    K.each(["get", "post"], function(t, e) {
        K[e] = function(t, i, n, o) {
            return K.isFunction(i) && (o = o || n,
            n = i,
            i = void 0),
            K.ajax({
                url: t,
                type: e,
                dataType: o,
                data: i,
                success: n
            })
        }
    }),
    K._evalUrl = function(t) {
        return K.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    K.fn.extend({
        wrapAll: function(t) {
            var e;
            return K.isFunction(t) ? this.each(function(e) {
                K(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = K(t, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && e.insertBefore(this[0]),
            e.map(function() {
                for (var t = this; t.firstElementChild; )
                    t = t.firstElementChild;
                return t
            }).append(this)),
            this)
        },
        wrapInner: function(t) {
            return this.each(K.isFunction(t) ? function(e) {
                K(this).wrapInner(t.call(this, e))
            }
            : function() {
                var e = K(this)
                  , i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            }
            )
        },
        wrap: function(t) {
            var e = K.isFunction(t);
            return this.each(function(i) {
                K(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    K.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0
    }
    ,
    K.expr.filters.visible = function(t) {
        return !K.expr.filters.hidden(t)
    }
    ;
    var Te = /%20/g
      , Se = /\[\]$/
      , ke = /\r?\n/g
      , Ce = /^(?:submit|button|image|reset|file)$/i
      , Ee = /^(?:input|select|textarea|keygen)/i;
    K.param = function(t, e) {
        var i, n = [], o = function(t, e) {
            e = K.isFunction(e) ? e() : null == e ? "" : e,
            n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = K.ajaxSettings && K.ajaxSettings.traditional),
        K.isArray(t) || t.jquery && !K.isPlainObject(t))
            K.each(t, function() {
                o(this.name, this.value)
            });
        else
            for (i in t)
                R(i, t[i], e, o);
        return n.join("&").replace(Te, "+")
    }
    ,
    K.fn.extend({
        serialize: function() {
            return K.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = K.prop(this, "elements");
                return t ? K.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !K(this).is(":disabled") && Ee.test(this.nodeName) && !Ce.test(t) && (this.checked || !St.test(t))
            }).map(function(t, e) {
                var i = K(this).val();
                return null == i ? null : K.isArray(i) ? K.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(ke, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(ke, "\r\n")
                }
            }).get()
        }
    }),
    K.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (t) {}
    }
    ;
    var De = 0
      , Le = {}
      , $e = {
        0: 200,
        1223: 204
    }
      , Ie = K.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in Le)
            Le[t]()
    }),
    G.cors = !!Ie && "withCredentials"in Ie,
    G.ajax = Ie = !!Ie,
    K.ajaxTransport(function(t) {
        var e;
        return G.cors || Ie && !t.crossDomain ? {
            send: function(i, n) {
                var o, r = t.xhr(), s = ++De;
                if (r.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
                    for (o in t.xhrFields)
                        r[o] = t.xhrFields[o];
                t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType),
                t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (o in i)
                    r.setRequestHeader(o, i[o]);
                e = function(t) {
                    return function() {
                        e && (delete Le[s],
                        e = r.onload = r.onerror = null,
                        "abort" === t ? r.abort() : "error" === t ? n(r.status, r.statusText) : n($e[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
                            text: r.responseText
                        } : void 0, r.getAllResponseHeaders()))
                    }
                }
                ,
                r.onload = e(),
                r.onerror = e("error"),
                e = Le[s] = e("abort");
                try {
                    r.send(t.hasContent && t.data || null)
                } catch (a) {
                    if (e)
                        throw a
                }
            },
            abort: function() {
                e && e()
            }
        } : void 0
    }),
    K.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return K.globalEval(t),
                t
            }
        }
    }),
    K.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1),
        t.crossDomain && (t.type = "GET")
    }),
    K.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i;
            return {
                send: function(n, o) {
                    e = K("<script>").prop({
                        async: !0,
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function(t) {
                        e.remove(),
                        i = null,
                        t && o("error" === t.type ? 404 : 200, t.type)
                    }
                    ),
                    J.head.appendChild(e[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }
    });
    var ze = []
      , Ae = /(=)\?(?=&|$)|\?\?/;
    K.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = ze.pop() || K.expando + "_" + ue++;
            return this[t] = !0,
            t
        }
    }),
    K.ajaxPrefilter("json jsonp", function(e, i, n) {
        var o, r, s, a = e.jsonp !== !1 && (Ae.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ae.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = K.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
        a ? e[a] = e[a].replace(Ae, "$1" + o) : e.jsonp !== !1 && (e.url += (de.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
        e.converters["script json"] = function() {
            return s || K.error(o + " was not called"),
            s[0]
        }
        ,
        e.dataTypes[0] = "json",
        r = t[o],
        t[o] = function() {
            s = arguments
        }
        ,
        n.always(function() {
            t[o] = r,
            e[o] && (e.jsonpCallback = i.jsonpCallback,
            ze.push(o)),
            s && K.isFunction(r) && r(s[0]),
            s = r = void 0
        }),
        "script") : void 0
    }),
    K.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t)
            return null;
        "boolean" == typeof e && (i = e,
        e = !1),
        e = e || J;
        var n = st.exec(t)
          , o = !i && [];
        return n ? [e.createElement(n[1])] : (n = K.buildFragment([t], e, o),
        o && o.length && K(o).remove(),
        K.merge([], n.childNodes))
    }
    ;
    var Pe = K.fn.load;
    K.fn.load = function(t, e, i) {
        if ("string" != typeof t && Pe)
            return Pe.apply(this, arguments);
        var n, o, r, s = this, a = t.indexOf(" ");
        return a >= 0 && (n = K.trim(t.slice(a)),
        t = t.slice(0, a)),
        K.isFunction(e) ? (i = e,
        e = void 0) : e && "object" == typeof e && (o = "POST"),
        s.length > 0 && K.ajax({
            url: t,
            type: o,
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments,
            s.html(n ? K("<div>").append(K.parseHTML(t)).find(n) : t)
        }).complete(i && function(t, e) {
            s.each(i, r || [t.responseText, e, t])
        }
        ),
        this
    }
    ,
    K.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        K.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    K.expr.filters.animated = function(t) {
        return K.grep(K.timers, function(e) {
            return t === e.elem
        }).length
    }
    ;
    var Fe = t.document.documentElement;
    K.offset = {
        setOffset: function(t, e, i) {
            var n, o, r, s, a, l, u, d = K.css(t, "position"), p = K(t), c = {};
            "static" === d && (t.style.position = "relative"),
            a = p.offset(),
            r = K.css(t, "top"),
            l = K.css(t, "left"),
            u = ("absolute" === d || "fixed" === d) && (r + l).indexOf("auto") > -1,
            u ? (n = p.position(),
            s = n.top,
            o = n.left) : (s = parseFloat(r) || 0,
            o = parseFloat(l) || 0),
            K.isFunction(e) && (e = e.call(t, i, a)),
            null != e.top && (c.top = e.top - a.top + s),
            null != e.left && (c.left = e.left - a.left + o),
            "using"in e ? e.using.call(t, c) : p.css(c)
        }
    },
    K.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    K.offset.setOffset(this, t, e)
                });
            var e, i, n = this[0], o = {
                top: 0,
                left: 0
            }, r = n && n.ownerDocument;
            if (r)
                return e = r.documentElement,
                K.contains(e, n) ? (typeof n.getBoundingClientRect !== kt && (o = n.getBoundingClientRect()),
                i = W(r),
                {
                    top: o.top + i.pageYOffset - e.clientTop,
                    left: o.left + i.pageXOffset - e.clientLeft
                }) : o
        },
        position: function() {
            if (this[0]) {
                var t, e, i = this[0], n = {
                    top: 0,
                    left: 0
                };
                return "fixed" === K.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(),
                e = this.offset(),
                K.nodeName(t[0], "html") || (n = t.offset()),
                n.top += K.css(t[0], "borderTopWidth", !0),
                n.left += K.css(t[0], "borderLeftWidth", !0)),
                {
                    top: e.top - n.top - K.css(i, "marginTop", !0),
                    left: e.left - n.left - K.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || Fe; t && !K.nodeName(t, "html") && "static" === K.css(t, "position"); )
                    t = t.offsetParent;
                return t || Fe
            })
        }
    }),
    K.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, i) {
        var n = "pageYOffset" === i;
        K.fn[e] = function(o) {
            return gt(this, function(e, o, r) {
                var s = W(e);
                return void 0 === r ? s ? s[i] : e[o] : void (s ? s.scrollTo(n ? t.pageXOffset : r, n ? r : t.pageYOffset) : e[o] = r)
            }, e, o, arguments.length, null)
        }
    }),
    K.each(["top", "left"], function(t, e) {
        K.cssHooks[e] = _(G.pixelPosition, function(t, i) {
            return i ? (i = x(t, e),
            qt.test(i) ? K(t).position()[e] + "px" : i) : void 0
        })
    }),
    K.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        K.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            K.fn[n] = function(n, o) {
                var r = arguments.length && (i || "boolean" != typeof n)
                  , s = i || (n === !0 || o === !0 ? "margin" : "border");
                return gt(this, function(e, i, n) {
                    var o;
                    return K.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement,
                    Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === n ? K.css(e, i, s) : K.style(e, i, n, s)
                }, e, r ? n : void 0, r, null)
            }
        })
    }),
    K.fn.size = function() {
        return this.length
    }
    ,
    K.fn.andSelf = K.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return K
    });
    var je = t.jQuery
      , Oe = t.$;
    return K.noConflict = function(e) {
        return t.$ === K && (t.$ = Oe),
        e && t.jQuery === K && (t.jQuery = je),
        K
    }
    ,
    typeof e === kt && (t.jQuery = t.$ = K),
    K
}),
function() {
    "use strict";
    var t;
    t = jQuery,
    t.fn.extend({
        animateCSS: function(e, i) {
            var n, o, r, s, a, l, u, d, p, c;
            return d = {
                effect: e,
                delay: 0,
                animationClass: "animated",
                infinite: !1,
                callback: i,
                duration: 1e3,
                debug: !1
            },
            p = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
            d = t.extend(d, i),
            a = function(t) {
                return o(t)
            }
            ,
            o = function(t) {
                return d.infinite === !0 && (d.animationClass += " infinite"),
                setTimeout(function() {
                    return u(t),
                    c(t),
                    n(t),
                    s(t)
                }, d.delay)
            }
            ,
            n = function(t) {
                return t.addClass(d.effect + " " + d.animationClass + " ")
            }
            ,
            c = function(t) {
                return "hidden" === t.css("visibility") && t.css("visibility", "visible"),
                t.is(":hidden") ? t.show() : void 0
            }
            ,
            l = function(t) {
                return t.removeClass(d.effect + " " + d.animationClass)
            }
            ,
            u = function(t) {
                return t.css({
                    "-webkit-animation-duration": d.duration + "ms",
                    "-moz-animation-duration": d.duration + "ms",
                    "-o-animation-duration": d.duration + "ms",
                    "animation-duration": d.duration + "ms"
                })
            }
            ,
            r = function(t) {
                return d.infinite === !1 && l(t),
                "function" == typeof d.callback ? d.callback.call(t) : void 0
            }
            ,
            s = function(t) {
                return t.one(p, function() {
                    return r(t)
                })
            }
            ,
            this.each(function() {
                return a(t(this))
            })
        }
    })
}
.call(this),
function(t) {
    "use strict";
    function e(t) {
        if (t) {
            if ("string" == typeof n[t])
                return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, o = 0, r = i.length; r > o; o++)
                if (e = i[o] + t,
                "string" == typeof n[e])
                    return e
        }
    }
    var i = "Webkit Moz ms Ms O".split(" ")
      , n = document.documentElement.style;
    "function" == typeof define && define.amd ? define(function() {
        return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window),
function(t, e) {
    "use strict";
    function i(t) {
        var e = parseFloat(t)
          , i = -1 === t.indexOf("%") && !isNaN(e);
        return i && e
    }
    function n() {}
    function o() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0, i = a.length; i > e; e++) {
            var n = a[e];
            t[n] = 0
        }
        return t
    }
    function r(e) {
        function n() {
            if (!c) {
                c = !0;
                var n = t.getComputedStyle;
                if (u = function() {
                    var t = n ? function(t) {
                        return n(t, null)
                    }
                    : function(t) {
                        return t.currentStyle
                    }
                    ;
                    return function(e) {
                        var i = t(e);
                        return i || s("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),
                        i
                    }
                }(),
                d = e("boxSizing")) {
                    var o = document.createElement("div");
                    o.style.width = "200px",
                    o.style.padding = "1px 2px 3px 4px",
                    o.style.borderStyle = "solid",
                    o.style.borderWidth = "1px 2px 3px 4px",
                    o.style[d] = "border-box";
                    var r = document.body || document.documentElement;
                    r.appendChild(o);
                    var a = u(o);
                    p = 200 === i(a.width),
                    r.removeChild(o)
                }
            }
        }
        function r(t) {
            if (n(),
            "string" == typeof t && (t = document.querySelector(t)),
            t && "object" == typeof t && t.nodeType) {
                var e = u(t);
                if ("none" === e.display)
                    return o();
                var r = {};
                r.width = t.offsetWidth,
                r.height = t.offsetHeight;
                for (var s = r.isBorderBox = !(!d || !e[d] || "border-box" !== e[d]), c = 0, h = a.length; h > c; c++) {
                    var f = a[c]
                      , m = e[f];
                    m = l(t, m);
                    var g = parseFloat(m);
                    r[f] = isNaN(g) ? 0 : g
                }
                var y = r.paddingLeft + r.paddingRight
                  , v = r.paddingTop + r.paddingBottom
                  , w = r.marginLeft + r.marginRight
                  , b = r.marginTop + r.marginBottom
                  , x = r.borderLeftWidth + r.borderRightWidth
                  , _ = r.borderTopWidth + r.borderBottomWidth
                  , T = s && p
                  , S = i(e.width);
                S !== !1 && (r.width = S + (T ? 0 : y + x));
                var k = i(e.height);
                return k !== !1 && (r.height = k + (T ? 0 : v + _)),
                r.innerWidth = r.width - (y + x),
                r.innerHeight = r.height - (v + _),
                r.outerWidth = r.width + w,
                r.outerHeight = r.height + b,
                r
            }
        }
        function l(e, i) {
            if (t.getComputedStyle || -1 === i.indexOf("%"))
                return i;
            var n = e.style
              , o = n.left
              , r = e.runtimeStyle
              , s = r && r.left;
            return s && (r.left = e.currentStyle.left),
            n.left = i,
            i = n.pixelLeft,
            n.left = o,
            s && (r.left = s),
            i
        }
        var u, d, p, c = !1;
        return r
    }
    var s = "undefined" == typeof console ? n : function(t) {
        console.error(t)
    }
      , a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define(["get-style-property/get-style-property"], r) : "object" == typeof exports ? module.exports = r(require("desandro-get-style-property")) : t.getSize = r(t.getStyleProperty)
}(window),
function(t) {
    "use strict";
    function e(t, e) {
        return t[s](e)
    }
    function i(t) {
        if (!t.parentNode) {
            var e = document.createDocumentFragment();
            e.appendChild(t)
        }
    }
    function n(t, e) {
        i(t);
        for (var n = t.parentNode.querySelectorAll(e), o = 0, r = n.length; r > o; o++)
            if (n[o] === t)
                return !0;
        return !1
    }
    function o(t, n) {
        return i(t),
        e(t, n)
    }
    var r, s = function() {
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
            var o = e[i]
              , r = o + "MatchesSelector";
            if (t[r])
                return r
        }
    }();
    if (s) {
        var a = document.createElement("div")
          , l = e(a, "div");
        r = l ? e : o
    } else
        r = n;
    "function" == typeof define && define.amd ? define(function() {
        return r
    }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r
}(Element.prototype),
function(t) {
    "use strict";
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e,
        i
    }
    var i = document.documentElement
      , n = function() {};
    i.addEventListener ? n = function(t, e, i) {
        t.addEventListener(e, i, !1)
    }
    : i.attachEvent && (n = function(t, i, n) {
        t[i + n] = n.handleEvent ? function() {
            var i = e(t);
            n.handleEvent.call(n, i)
        }
        : function() {
            var i = e(t);
            n.call(t, i)
        }
        ,
        t.attachEvent("on" + i, t[i + n])
    }
    );
    var o = function() {};
    i.removeEventListener ? o = function(t, e, i) {
        t.removeEventListener(e, i, !1)
    }
    : i.detachEvent && (o = function(t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (n) {
            t[e + i] = void 0
        }
    }
    );
    var r = {
        bind: n,
        unbind: o
    };
    "function" == typeof define && define.amd ? define(r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(window),
function(t) {
    "use strict";
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : s.push(t))
    }
    function i(t) {
        var i = "readystatechange" === t.type && "complete" !== r.readyState;
        e.isReady || i || n()
    }
    function n() {
        e.isReady = !0;
        for (var t = 0, i = s.length; i > t; t++) {
            var n = s[t];
            n()
        }
    }
    function o(o) {
        return "complete" === r.readyState ? n() : (o.bind(r, "DOMContentLoaded", i),
        o.bind(r, "readystatechange", i),
        o.bind(t, "load", i)),
        e
    }
    var r = t.document
      , s = [];
    e.isReady = !1,
    "function" == typeof define && define.amd ? define(["eventie/eventie"], o) : "object" == typeof exports ? module.exports = o(require("eventie")) : t.docReady = o(t.eventie)
}(window),
function() {
    "use strict";
    function t() {}
    function e(t, e) {
        for (var i = t.length; i--; )
            if (t[i].listener === e)
                return i;
        return -1
    }
    function i(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var n = t.prototype
      , o = this
      , r = o.EventEmitter;
    n.getListeners = function(t) {
        var e, i, n = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in n)
                n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
        } else
            e = n[t] || (n[t] = []);
        return e
    }
    ,
    n.flattenListeners = function(t) {
        var e, i = [];
        for (e = 0; e < t.length; e += 1)
            i.push(t[e].listener);
        return i
    }
    ,
    n.getListenersAsObject = function(t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {},
        e[t] = i),
        e || i
    }
    ,
    n.addListener = function(t, i) {
        var n, o = this.getListenersAsObject(t), r = "object" == typeof i;
        for (n in o)
            o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(r ? i : {
                listener: i,
                once: !1
            });
        return this
    }
    ,
    n.on = i("addListener"),
    n.addOnceListener = function(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }
    ,
    n.once = i("addOnceListener"),
    n.defineEvent = function(t) {
        return this.getListeners(t),
        this
    }
    ,
    n.defineEvents = function(t) {
        for (var e = 0; e < t.length; e += 1)
            this.defineEvent(t[e]);
        return this
    }
    ,
    n.removeListener = function(t, i) {
        var n, o, r = this.getListenersAsObject(t);
        for (o in r)
            r.hasOwnProperty(o) && (n = e(r[o], i),
            -1 !== n && r[o].splice(n, 1));
        return this
    }
    ,
    n.off = i("removeListener"),
    n.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }
    ,
    n.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }
    ,
    n.manipulateListeners = function(t, e, i) {
        var n, o, r = t ? this.removeListener : this.addListener, s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (n = i.length; n--; )
                r.call(this, e, i[n]);
        else
            for (n in e)
                e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? r.call(this, n, o) : s.call(this, n, o));
        return this
    }
    ,
    n.removeEvent = function(t) {
        var e, i = typeof t, n = this._getEvents();
        if ("string" === i)
            delete n[t];
        else if (t instanceof RegExp)
            for (e in n)
                n.hasOwnProperty(e) && t.test(e) && delete n[e];
        else
            delete this._events;
        return this
    }
    ,
    n.removeAllListeners = i("removeEvent"),
    n.emitEvent = function(t, e) {
        var i, n, o, r, s = this.getListenersAsObject(t);
        for (o in s)
            if (s.hasOwnProperty(o))
                for (n = s[o].length; n--; )
                    i = s[o][n],
                    i.once === !0 && this.removeListener(t, i.listener),
                    r = i.listener.apply(this, e || []),
                    r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }
    ,
    n.trigger = i("emitEvent"),
    n.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }
    ,
    n.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t,
        this
    }
    ,
    n._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }
    ,
    n._getEvents = function() {
        return this._events || (this._events = {})
    }
    ,
    t.noConflict = function() {
        return o.EventEmitter = r,
        t
    }
    ,
    "function" == typeof define && define.amd ? define(function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : o.EventEmitter = t
}
.call(this),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["doc-ready/doc-ready", "matches-selector/matches-selector"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
}(window, function(t, e, i) {
    "use strict";
    var n = {};
    n.extend = function(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    ,
    n.modulo = function(t, e) {
        return (t % e + e) % e
    }
    ;
    var o = Object.prototype.toString;
    n.isArray = function(t) {
        return "[object Array]" == o.call(t)
    }
    ,
    n.makeArray = function(t) {
        var e = [];
        if (n.isArray(t))
            e = t;
        else if (t && "number" == typeof t.length)
            for (var i = 0, o = t.length; o > i; i++)
                e.push(t[i]);
        else
            e.push(t);
        return e
    }
    ,
    n.indexOf = Array.prototype.indexOf ? function(t, e) {
        return t.indexOf(e)
    }
    : function(t, e) {
        for (var i = 0, n = t.length; n > i; i++)
            if (t[i] === e)
                return i;
        return -1
    }
    ,
    n.removeFrom = function(t, e) {
        var i = n.indexOf(t, e);
        -1 != i && t.splice(i, 1)
    }
    ,
    n.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) {
        return t instanceof HTMLElement
    }
    : function(t) {
        return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
    }
    ,
    n.setText = function() {
        function t(t, i) {
            e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"),
            t[e] = i
        }
        var e;
        return t
    }(),
    n.getParent = function(t, e) {
        for (; t != document.body; )
            if (t = t.parentNode,
            i(t, e))
                return t
    }
    ,
    n.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }
    ,
    n.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    n.filterFindElements = function(t, e) {
        t = n.makeArray(t);
        for (var o = [], r = 0, s = t.length; s > r; r++) {
            var a = t[r];
            if (n.isElement(a))
                if (e) {
                    i(a, e) && o.push(a);
                    for (var l = a.querySelectorAll(e), u = 0, d = l.length; d > u; u++)
                        o.push(l[u])
                } else
                    o.push(a)
        }
        return o
    }
    ,
    n.debounceMethod = function(t, e, i) {
        var n = t.prototype[e]
          , o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            t && clearTimeout(t);
            var e = arguments
              , r = this;
            this[o] = setTimeout(function() {
                n.apply(r, e),
                delete r[o]
            }, i || 100)
        }
    }
    ,
    n.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    }
    ;
    var r = t.console;
    return n.htmlInit = function(i, o) {
        e(function() {
            for (var e = n.toDashed(o), s = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", l = 0, u = s.length; u > l; l++) {
                var d, p = s[l], c = p.getAttribute(a);
                try {
                    d = c && JSON.parse(c)
                } catch (h) {
                    r && r.error("Error parsing " + a + " on " + p.nodeName.toLowerCase() + (p.id ? "#" + p.id : "") + ": " + h);
                    continue
                }
                var f = new i(p,d)
                  , m = t.jQuery;
                m && m.data(p, o, f)
            }
        })
    }
    ,
    n
}),
function(t) {
    function e() {}
    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function(e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            }
            )
        }
        function o(e, i) {
            t.fn[e] = function(o) {
                if ("string" == typeof o) {
                    for (var s = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                        var u = this[a]
                          , d = t.data(u, e);
                        if (d)
                            if (t.isFunction(d[o]) && "_" !== o.charAt(0)) {
                                var p = d[o].apply(d, s);
                                if (void 0 !== p)
                                    return p
                            } else
                                r("no such method '" + o + "' for " + e + " instance");
                        else
                            r("cannot call methods on " + e + " prior to initialization; attempted to call '" + o + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var n = t.data(this, e);
                    n ? (n.option(o),
                    n._init()) : (n = new i(this,o),
                    t.data(this, e, n));

                })
            }
        }
        if (t) {
            var r = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            }
            ;
            return t.bridget = function(t, e) {
                i(e),
                o(t, e)
            }
            ,
            t.bridget
        }
    }
    var n = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery)
}(window),
function(t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e,
        i
    }
    var i = document.documentElement
      , n = function() {};
    i.addEventListener ? n = function(t, e, i) {
        t.addEventListener(e, i, !1)
    }
    : i.attachEvent && (n = function(t, i, n) {
        t[i + n] = n.handleEvent ? function() {
            var i = e(t);
            n.handleEvent.call(n, i)
        }
        : function() {
            var i = e(t);
            n.call(t, i)
        }
        ,
        t.attachEvent("on" + i, t[i + n])
    }
    );
    var o = function() {};
    i.removeEventListener ? o = function(t, e, i) {
        t.removeEventListener(e, i, !1)
    }
    : i.detachEvent && (o = function(t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (n) {
            t[e + i] = void 0
        }
    }
    );
    var r = {
        bind: n,
        unbind: o
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(window),
function() {
    function t() {}
    function e(t, e) {
        for (var i = t.length; i--; )
            if (t[i].listener === e)
                return i;
        return -1
    }
    function i(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var n = t.prototype
      , o = this
      , r = o.EventEmitter;
    n.getListeners = function(t) {
        var e, i, n = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in n)
                n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
        } else
            e = n[t] || (n[t] = []);
        return e
    }
    ,
    n.flattenListeners = function(t) {
        var e, i = [];
        for (e = 0; t.length > e; e += 1)
            i.push(t[e].listener);
        return i
    }
    ,
    n.getListenersAsObject = function(t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {},
        e[t] = i),
        e || i
    }
    ,
    n.addListener = function(t, i) {
        var n, o = this.getListenersAsObject(t), r = "object" == typeof i;
        for (n in o)
            o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(r ? i : {
                listener: i,
                once: !1
            });
        return this
    }
    ,
    n.on = i("addListener"),
    n.addOnceListener = function(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }
    ,
    n.once = i("addOnceListener"),
    n.defineEvent = function(t) {
        return this.getListeners(t),
        this
    }
    ,
    n.defineEvents = function(t) {
        for (var e = 0; t.length > e; e += 1)
            this.defineEvent(t[e]);
        return this
    }
    ,
    n.removeListener = function(t, i) {
        var n, o, r = this.getListenersAsObject(t);
        for (o in r)
            r.hasOwnProperty(o) && (n = e(r[o], i),
            -1 !== n && r[o].splice(n, 1));
        return this
    }
    ,
    n.off = i("removeListener"),
    n.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }
    ,
    n.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }
    ,
    n.manipulateListeners = function(t, e, i) {
        var n, o, r = t ? this.removeListener : this.addListener, s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (n = i.length; n--; )
                r.call(this, e, i[n]);
        else
            for (n in e)
                e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? r.call(this, n, o) : s.call(this, n, o));
        return this
    }
    ,
    n.removeEvent = function(t) {
        var e, i = typeof t, n = this._getEvents();
        if ("string" === i)
            delete n[t];
        else if (t instanceof RegExp)
            for (e in n)
                n.hasOwnProperty(e) && t.test(e) && delete n[e];
        else
            delete this._events;
        return this
    }
    ,
    n.removeAllListeners = i("removeEvent"),
    n.emitEvent = function(t, e) {
        var i, n, o, r, s = this.getListenersAsObject(t);
        for (o in s)
            if (s.hasOwnProperty(o))
                for (n = s[o].length; n--; )
                    i = s[o][n],
                    i.once === !0 && this.removeListener(t, i.listener),
                    r = i.listener.apply(this, e || []),
                    r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }
    ,
    n.trigger = i("emitEvent"),
    n.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }
    ,
    n.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t,
        this
    }
    ,
    n._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }
    ,
    n._getEvents = function() {
        return this._events || (this._events = {})
    }
    ,
    t.noConflict = function() {
        return o.EventEmitter = r,
        t
    }
    ,
    "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : o.EventEmitter = t
}
.call(this),
function(t) {
    function e(t) {
        if (t) {
            if ("string" == typeof n[t])
                return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, o = 0, r = i.length; r > o; o++)
                if (e = i[o] + t,
                "string" == typeof n[e])
                    return e
        }
    }
    var i = "Webkit Moz ms Ms O".split(" ")
      , n = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
        return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window),
function(t) {
    function e(t) {
        var e = parseFloat(t)
          , i = -1 === t.indexOf("%") && !isNaN(e);
        return i && e
    }
    function i() {}
    function n() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0, i = s.length; i > e; e++) {
            var n = s[e];
            t[n] = 0
        }
        return t
    }
    function o(i) {
        function o() {
            if (!c) {
                c = !0;
                var n = t.getComputedStyle;
                if (u = function() {
                    var t = n ? function(t) {
                        return n(t, null)
                    }
                    : function(t) {
                        return t.currentStyle
                    }
                    ;
                    return function(e) {
                        var i = t(e);
                        return i || r("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),
                        i
                    }
                }(),
                d = i("boxSizing")) {
                    var o = document.createElement("div");
                    o.style.width = "200px",
                    o.style.padding = "1px 2px 3px 4px",
                    o.style.borderStyle = "solid",
                    o.style.borderWidth = "1px 2px 3px 4px",
                    o.style[d] = "border-box";
                    var s = document.body || document.documentElement;
                    s.appendChild(o);
                    var a = u(o);
                    p = 200 === e(a.width),
                    s.removeChild(o)
                }
            }
        }
        function a(t) {
            if (o(),
            "string" == typeof t && (t = document.querySelector(t)),
            t && "object" == typeof t && t.nodeType) {
                var i = u(t);
                if ("none" === i.display)
                    return n();
                var r = {};
                r.width = t.offsetWidth,
                r.height = t.offsetHeight;
                for (var a = r.isBorderBox = !(!d || !i[d] || "border-box" !== i[d]), c = 0, h = s.length; h > c; c++) {
                    var f = s[c]
                      , m = i[f];
                    m = l(t, m);
                    var g = parseFloat(m);
                    r[f] = isNaN(g) ? 0 : g
                }
                var y = r.paddingLeft + r.paddingRight
                  , v = r.paddingTop + r.paddingBottom
                  , w = r.marginLeft + r.marginRight
                  , b = r.marginTop + r.marginBottom
                  , x = r.borderLeftWidth + r.borderRightWidth
                  , _ = r.borderTopWidth + r.borderBottomWidth
                  , T = a && p
                  , S = e(i.width);
                S !== !1 && (r.width = S + (T ? 0 : y + x));
                var k = e(i.height);
                return k !== !1 && (r.height = k + (T ? 0 : v + _)),
                r.innerWidth = r.width - (y + x),
                r.innerHeight = r.height - (v + _),
                r.outerWidth = r.width + w,
                r.outerHeight = r.height + b,
                r
            }
        }
        function l(e, i) {
            if (t.getComputedStyle || -1 === i.indexOf("%"))
                return i;
            var n = e.style
              , o = n.left
              , r = e.runtimeStyle
              , s = r && r.left;
            return s && (r.left = e.currentStyle.left),
            n.left = i,
            i = n.pixelLeft,
            n.left = o,
            s && (r.left = s),
            i
        }
        var u, d, p, c = !1;
        return a
    }
    var r = "undefined" == typeof console ? i : function(t) {
        console.error(t)
    }
      , s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("desandro-get-style-property")) : t.getSize = o(t.getStyleProperty)
}(window),
function(t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : s.push(t))
    }
    function i(t) {
        var i = "readystatechange" === t.type && "complete" !== r.readyState;
        e.isReady || i || n()
    }
    function n() {
        e.isReady = !0;
        for (var t = 0, i = s.length; i > t; t++) {
            var n = s[t];
            n()
        }
    }
    function o(o) {
        return "complete" === r.readyState ? n() : (o.bind(r, "DOMContentLoaded", i),
        o.bind(r, "readystatechange", i),
        o.bind(t, "load", i)),
        e
    }
    var r = t.document
      , s = [];
    e.isReady = !1,
    "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], o) : "object" == typeof exports ? module.exports = o(require("eventie")) : t.docReady = o(t.eventie)
}(window),
function(t) {
    function e(t, e) {
        return t[s](e)
    }
    function i(t) {
        if (!t.parentNode) {
            var e = document.createDocumentFragment();
            e.appendChild(t)
        }
    }
    function n(t, e) {
        i(t);
        for (var n = t.parentNode.querySelectorAll(e), o = 0, r = n.length; r > o; o++)
            if (n[o] === t)
                return !0;
        return !1
    }
    function o(t, n) {
        return i(t),
        e(t, n)
    }
    var r, s = function() {
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
            var o = e[i]
              , r = o + "MatchesSelector";
            if (t[r])
                return r
        }
    }();
    if (s) {
        var a = document.createElement("div")
          , l = e(a, "div");
        r = l ? e : o
    } else
        r = n;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
        return r
    }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r
}(Element.prototype),
function(t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(i, n) {
        return e(t, i, n)
    }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
}(window, function(t, e, i) {
    var n = {};
    n.extend = function(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    ,
    n.modulo = function(t, e) {
        return (t % e + e) % e
    }
    ;
    var o = Object.prototype.toString;
    n.isArray = function(t) {
        return "[object Array]" == o.call(t)
    }
    ,
    n.makeArray = function(t) {
        var e = [];
        if (n.isArray(t))
            e = t;
        else if (t && "number" == typeof t.length)
            for (var i = 0, o = t.length; o > i; i++)
                e.push(t[i]);
        else
            e.push(t);
        return e
    }
    ,
    n.indexOf = Array.prototype.indexOf ? function(t, e) {
        return t.indexOf(e)
    }
    : function(t, e) {
        for (var i = 0, n = t.length; n > i; i++)
            if (t[i] === e)
                return i;
        return -1
    }
    ,
    n.removeFrom = function(t, e) {
        var i = n.indexOf(t, e);
        -1 != i && t.splice(i, 1)
    }
    ,
    n.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) {
        return t instanceof HTMLElement
    }
    : function(t) {
        return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
    }
    ,
    n.setText = function() {
        function t(t, i) {
            e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"),
            t[e] = i
        }
        var e;
        return t
    }(),
    n.getParent = function(t, e) {
        for (; t != document.body; )
            if (t = t.parentNode,
            i(t, e))
                return t
    }
    ,
    n.getQueryElement = function(t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }
    ,
    n.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    n.filterFindElements = function(t, e) {
        t = n.makeArray(t);
        for (var o = [], r = 0, s = t.length; s > r; r++) {
            var a = t[r];
            if (n.isElement(a))
                if (e) {
                    i(a, e) && o.push(a);
                    for (var l = a.querySelectorAll(e), u = 0, d = l.length; d > u; u++)
                        o.push(l[u])
                } else
                    o.push(a)
        }
        return o
    }
    ,
    n.debounceMethod = function(t, e, i) {
        var n = t.prototype[e]
          , o = e + "Timeout";
        t.prototype[e] = function() {
            var t = this[o];
            t && clearTimeout(t);
            var e = arguments
              , r = this;
            this[o] = setTimeout(function() {
                n.apply(r, e),
                delete r[o]
            }, i || 100)
        }
    }
    ,
    n.toDashed = function(t) {
        return t.replace(/(.)([A-Z])/g, function(t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    }
    ;
    var r = t.console;
    return n.htmlInit = function(i, o) {
        e(function() {
            for (var e = n.toDashed(o), s = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", l = 0, u = s.length; u > l; l++) {
                var d, p = s[l], c = p.getAttribute(a);
                try {
                    d = c && JSON.parse(c)
                } catch (h) {
                    r && r.error("Error parsing " + a + " on " + p.nodeName.toLowerCase() + (p.id ? "#" + p.id : "") + ": " + h);
                    continue
                }
                var f = new i(p,d)
                  , m = t.jQuery;
                m && m.data(p, o, f)
            }
        })
    }
    ,
    n
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(i, n, o, r) {
        return e(t, i, n, o, r)
    }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {},
    t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils))
}(window, function(t, e, i, n, o) {
    function r(t) {
        for (var e in t)
            return !1;
        return e = null,
        !0
    }
    function s(t, e) {
        t && (this.element = t,
        this.layout = e,
        this.position = {
            x: 0,
            y: 0
        },
        this._create())
    }
    var a = t.getComputedStyle
      , l = a ? function(t) {
        return a(t, null)
    }
    : function(t) {
        return t.currentStyle
    }
      , u = n("transition")
      , d = n("transform")
      , p = u && d
      , c = !!n("perspective")
      , h = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "otransitionend",
        transition: "transitionend"
    }[u]
      , f = ["transform", "transition", "transitionDuration", "transitionProperty"]
      , m = function() {
        for (var t = {}, e = 0, i = f.length; i > e; e++) {
            var o = f[e]
              , r = n(o);
            r && r !== o && (t[o] = r)
        }
        return t
    }();
    o.extend(s.prototype, e.prototype),
    s.prototype._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        },
        this.css({
            position: "absolute"
        })
    }
    ,
    s.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    s.prototype.getSize = function() {
        this.size = i(this.element)
    }
    ,
    s.prototype.css = function(t) {
        var e = this.element.style;
        for (var i in t) {
            var n = m[i] || i;
            e[n] = t[i]
        }
    }
    ,
    s.prototype.getPosition = function() {
        var t = l(this.element)
          , e = this.layout.options
          , i = e.isOriginLeft
          , n = e.isOriginTop
          , o = parseInt(t[i ? "left" : "right"], 10)
          , r = parseInt(t[n ? "top" : "bottom"], 10);
        o = isNaN(o) ? 0 : o,
        r = isNaN(r) ? 0 : r;
        var s = this.layout.size;
        o -= i ? s.paddingLeft : s.paddingRight,
        r -= n ? s.paddingTop : s.paddingBottom,
        this.position.x = o,
        this.position.y = r
    }
    ,
    s.prototype.layoutPosition = function() {
        var t = this.layout.size
          , e = this.layout.options
          , i = {}
          , n = e.isOriginLeft ? "paddingLeft" : "paddingRight"
          , o = e.isOriginLeft ? "left" : "right"
          , r = e.isOriginLeft ? "right" : "left"
          , s = this.position.x + t[n];
        s = e.percentPosition && !e.isHorizontal ? 100 * (s / t.width) + "%" : s + "px",
        i[o] = s,
        i[r] = "";
        var a = e.isOriginTop ? "paddingTop" : "paddingBottom"
          , l = e.isOriginTop ? "top" : "bottom"
          , u = e.isOriginTop ? "bottom" : "top"
          , d = this.position.y + t[a];
        d = e.percentPosition && e.isHorizontal ? 100 * (d / t.height) + "%" : d + "px",
        i[l] = d,
        i[u] = "",
        this.css(i),
        this.emitEvent("layout", [this])
    }
    ;
    var g = c ? function(t, e) {
        return "translate3d(" + t + "px, " + e + "px, 0)"
    }
    : function(t, e) {
        return "translate(" + t + "px, " + e + "px)"
    }
    ;
    s.prototype._transitionTo = function(t, e) {
        this.getPosition();
        var i = this.position.x
          , n = this.position.y
          , o = parseInt(t, 10)
          , r = parseInt(e, 10)
          , s = o === this.position.x && r === this.position.y;
        if (this.setPosition(t, e),
        s && !this.isTransitioning)
            return void this.layoutPosition();
        var a = t - i
          , l = e - n
          , u = {}
          , d = this.layout.options;
        a = d.isOriginLeft ? a : -a,
        l = d.isOriginTop ? l : -l,
        u.transform = g(a, l),
        this.transition({
            to: u,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }
    ,
    s.prototype.goTo = function(t, e) {
        this.setPosition(t, e),
        this.layoutPosition()
    }
    ,
    s.prototype.moveTo = p ? s.prototype._transitionTo : s.prototype.goTo,
    s.prototype.setPosition = function(t, e) {
        this.position.x = parseInt(t, 10),
        this.position.y = parseInt(e, 10)
    }
    ,
    s.prototype._nonTransition = function(t) {
        this.css(t.to),
        t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd)
            t.onTransitionEnd[e].call(this)
    }
    ,
    s.prototype._transition = function(t) {
        if (!parseFloat(this.layout.options.transitionDuration))
            return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd)
            e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
            e.ingProperties[i] = !0,
            t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(t.to),
        this.css(t.to),
        this.isTransitioning = !0
    }
    ;
    var y = d && o.toDashed(d) + ",opacity";
    s.prototype.enableTransition = function() {
        this.isTransitioning || (this.css({
            transitionProperty: y,
            transitionDuration: this.layout.options.transitionDuration
        }),
        this.element.addEventListener(h, this, !1))
    }
    ,
    s.prototype.transition = s.prototype[u ? "_transition" : "_nonTransition"],
    s.prototype.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }
    ,
    s.prototype.onotransitionend = function(t) {
        this.ontransitionend(t)
    }
    ;
    var v = {
        "-webkit-transform": "transform",
        "-moz-transform": "transform",
        "-o-transform": "transform"
    };
    s.prototype.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn
              , i = v[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[i],
            r(e.ingProperties) && this.disableTransition(),
            i in e.clean && (this.element.style[t.propertyName] = "",
            delete e.clean[i]),
            i in e.onEnd) {
                var n = e.onEnd[i];
                n.call(this),
                delete e.onEnd[i]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }
    ,
    s.prototype.disableTransition = function() {
        this.removeTransitionStyles(),
        this.element.removeEventListener(h, this, !1),
        this.isTransitioning = !1
    }
    ,
    s.prototype._removeStyles = function(t) {
        var e = {};
        for (var i in t)
            e[i] = "";
        this.css(e)
    }
    ;
    var w = {
        transitionProperty: "",
        transitionDuration: ""
    };
    return s.prototype.removeTransitionStyles = function() {
        this.css(w)
    }
    ,
    s.prototype.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.css({
            display: ""
        }),
        this.emitEvent("remove", [this])
    }
    ,
    s.prototype.remove = function() {
        if (!u || !parseFloat(this.layout.options.transitionDuration))
            return void this.removeElem();
        var t = this;
        this.once("transitionEnd", function() {
            t.removeElem()
        }),
        this.hide()
    }
    ,
    s.prototype.reveal = function() {
        delete this.isHidden,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {}
          , i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd,
        this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    s.prototype.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }
    ,
    s.prototype.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity)
            return "opacity";
        for (var i in e)
            return i
    }
    ,
    s.prototype.hide = function() {
        this.isHidden = !0,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {}
          , i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd,
        this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    s.prototype.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }),
        this.emitEvent("hide"))
    }
    ,
    s.prototype.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }
    ,
    s
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, r, s) {
        return e(t, i, n, o, r, s)
    }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, n, o, r) {
    function s(t, e) {
        var i = o.getQueryElement(t);
        if (!i)
            return void (a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i,
        l && (this.$element = l(this.element)),
        this.options = o.extend({}, this.constructor.defaults),
        this.option(e);
        var n = ++d;
        this.element.outlayerGUID = n,
        p[n] = this,
        this._create(),
        this.options.isInitLayout && this.layout()
    }
    var a = t.console
      , l = t.jQuery
      , u = function() {}
      , d = 0
      , p = {};
    return s.namespace = "outlayer",
    s.Item = r,
    s.defaults = {
        containerStyle: {
            position: "relative"
        },
        isInitLayout: !0,
        isOriginLeft: !0,
        isOriginTop: !0,
        isResizeBound: !0,
        isResizingContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    },
    o.extend(s.prototype, i.prototype),
    s.prototype.option = function(t) {
        o.extend(this.options, t)
    }
    ,
    s.prototype._create = function() {
        this.reloadItems(),
        this.stamps = [],
        this.stamp(this.options.stamp),
        o.extend(this.element.style, this.options.containerStyle),
        this.options.isResizeBound && this.bindResize()
    }
    ,
    s.prototype.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }
    ,
    s.prototype._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0, r = e.length; r > o; o++) {
            var s = e[o]
              , a = new i(s,this);
            n.push(a)
        }
        return n
    }
    ,
    s.prototype._filterFindItemElements = function(t) {
        return o.filterFindElements(t, this.options.itemSelector)
    }
    ,
    s.prototype.getItemElements = function() {
        for (var t = [], e = 0, i = this.items.length; i > e; e++)
            t.push(this.items[e].element);
        return t
    }
    ,
    s.prototype.layout = function() {
        this._resetLayout(),
        this._manageStamps();
        var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, t),
        this._isLayoutInited = !0
    }
    ,
    s.prototype._init = s.prototype.layout,
    s.prototype._resetLayout = function() {
        this.getSize()
    }
    ,
    s.prototype.getSize = function() {
        this.size = n(this.element)
    }
    ,
    s.prototype._getMeasurement = function(t, e) {
        var i, r = this.options[t];
        r ? ("string" == typeof r ? i = this.element.querySelector(r) : o.isElement(r) && (i = r),
        this[t] = i ? n(i)[e] : r) : this[t] = 0
    }
    ,
    s.prototype.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t),
        this._layoutItems(t, e),
        this._postLayout()
    }
    ,
    s.prototype._getItemsForLayout = function(t) {
        for (var e = [], i = 0, n = t.length; n > i; i++) {
            var o = t[i];
            o.isIgnored || e.push(o)
        }
        return e
    }
    ,
    s.prototype._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t),
        t && t.length) {
            for (var i = [], n = 0, o = t.length; o > n; n++) {
                var r = t[n]
                  , s = this._getItemLayoutPosition(r);
                s.item = r,
                s.isInstant = e || r.isLayoutInstant,
                i.push(s)
            }
            this._processLayoutQueue(i)
        }
    }
    ,
    s.prototype._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }
    ,
    s.prototype._processLayoutQueue = function(t) {
        for (var e = 0, i = t.length; i > e; e++) {
            var n = t[e];
            this._positionItem(n.item, n.x, n.y, n.isInstant)
        }
    }
    ,
    s.prototype._positionItem = function(t, e, i, n) {
        n ? t.goTo(e, i) : t.moveTo(e, i)
    }
    ,
    s.prototype._postLayout = function() {
        this.resizeContainer()
    }
    ,
    s.prototype.resizeContainer = function() {
        if (this.options.isResizingContainer) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0),
            this._setContainerMeasure(t.height, !1))
        }
    }
    ,
    s.prototype._getContainerSize = u,
    s.prototype._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
            t = Math.max(t, 0),
            this.element.style[e ? "width" : "height"] = t + "px"
        }
    }
    ,
    s.prototype._emitCompleteOnItems = function(t, e) {
        function i() {
            o.emitEvent(t + "Complete", [e])
        }
        function n() {
            s++,
            s === r && i()
        }
        var o = this
          , r = e.length;
        if (!e || !r)
            return void i();
        for (var s = 0, a = 0, l = e.length; l > a; a++) {
            var u = e[a];
            u.once(t, n)
        }
    }
    ,
    s.prototype.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }
    ,
    s.prototype.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }
    ,
    s.prototype.stamp = function(t) {
        if (t = this._find(t)) {
            this.stamps = this.stamps.concat(t);
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                this.ignore(n)
            }
        }
    }
    ,
    s.prototype.unstamp = function(t) {
        if (t = this._find(t))
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                o.removeFrom(this.stamps, n),
                this.unignore(n)
            }
    }
    ,
    s.prototype._find = function(t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
        t = o.makeArray(t)) : void 0
    }
    ,
    s.prototype._manageStamps = function() {
        if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var t = 0, e = this.stamps.length; e > t; t++) {
                var i = this.stamps[t];
                this._manageStamp(i)
            }
        }
    }
    ,
    s.prototype._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect()
          , e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }
    ,
    s.prototype._manageStamp = u,
    s.prototype._getElementOffset = function(t) {
        var e = t.getBoundingClientRect()
          , i = this._boundingRect
          , o = n(t)
          , r = {
            left: e.left - i.left - o.marginLeft,
            top: e.top - i.top - o.marginTop,
            right: i.right - e.right - o.marginRight,
            bottom: i.bottom - e.bottom - o.marginBottom
        };
        return r
    }
    ,
    s.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    s.prototype.bindResize = function() {
        this.isResizeBound || (e.bind(t, "resize", this),
        this.isResizeBound = !0)
    }
    ,
    s.prototype.unbindResize = function() {
        this.isResizeBound && e.unbind(t, "resize", this),
        this.isResizeBound = !1
    }
    ,
    s.prototype.onresize = function() {
        function t() {
            e.resize(),
            delete e.resizeTimeout
        }
        this.resizeTimeout && clearTimeout(this.resizeTimeout);
        var e = this;
        this.resizeTimeout = setTimeout(t, 100)
    }
    ,
    s.prototype.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }
    ,
    s.prototype.needsResizeLayout = function() {
        var t = n(this.element)
          , e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }
    ,
    s.prototype.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)),
        e
    }
    ,
    s.prototype.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0),
        this.reveal(e))
    }
    ,
    s.prototype.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i)
        }
    }
    ,
    s.prototype.reveal = function(t) {
        this._emitCompleteOnItems("reveal", t);
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var n = t[i];
            n.reveal()
        }
    }
    ,
    s.prototype.hide = function(t) {
        this._emitCompleteOnItems("hide", t);
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var n = t[i];
            n.hide()
        }
    }
    ,
    s.prototype.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }
    ,
    s.prototype.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }
    ,
    s.prototype.getItem = function(t) {
        for (var e = 0, i = this.items.length; i > e; e++) {
            var n = this.items[e];
            if (n.element === t)
                return n
        }
    }
    ,
    s.prototype.getItems = function(t) {
        t = o.makeArray(t);
        for (var e = [], i = 0, n = t.length; n > i; i++) {
            var r = t[i]
              , s = this.getItem(r);
            s && e.push(s)
        }
        return e
    }
    ,
    s.prototype.remove = function(t) {
        var e = this.getItems(t);
        if (this._emitCompleteOnItems("remove", e),
        e && e.length)
            for (var i = 0, n = e.length; n > i; i++) {
                var r = e[i];
                r.remove(),
                o.removeFrom(this.items, r)
            }
    }
    ,
    s.prototype.destroy = function() {
        var t = this.element.style;
        t.height = "",
        t.position = "",
        t.width = "";
        for (var e = 0, i = this.items.length; i > e; e++) {
            var n = this.items[e];
            n.destroy()
        }
        this.unbindResize();
        var o = this.element.outlayerGUID;
        delete p[o],
        delete this.element.outlayerGUID,
        l && l.removeData(this.element, this.constructor.namespace)
    }
    ,
    s.data = function(t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && p[e]
    }
    ,
    s.create = function(t, e) {
        function i() {
            s.apply(this, arguments)
        }
        return Object.create ? i.prototype = Object.create(s.prototype) : o.extend(i.prototype, s.prototype),
        i.prototype.constructor = i,
        i.defaults = o.extend({}, s.defaults),
        o.extend(i.defaults, e),
        i.prototype.settings = {},
        i.namespace = t,
        i.data = s.data,
        i.Item = function() {
            r.apply(this, arguments)
        }
        ,
        i.Item.prototype = new r,
        o.htmlInit(i, t),
        l && l.bridget && l.bridget(t, i),
        i
    }
    ,
    s.Item = r,
    s
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {},
    t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
    function e() {
        t.Item.apply(this, arguments)
    }
    e.prototype = new t.Item,
    e.prototype._create = function() {
        this.id = this.layout.itemGUID++,
        t.Item.prototype._create.call(this),
        this.sortData = {}
    }
    ,
    e.prototype.updateSortData = function() {
        if (!this.isIgnored) {
            this.sortData.id = this.id,
            this.sortData["original-order"] = this.id,
            this.sortData.random = Math.random();
            var t = this.layout.options.getSortData
              , e = this.layout._sorters;
            for (var i in t) {
                var n = e[i];
                this.sortData[i] = n(this.element, this)
            }
        }
    }
    ;
    var i = e.prototype.destroy;
    return e.prototype.destroy = function() {
        i.apply(this, arguments),
        this.css({
            display: ""
        })
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {},
    t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(t, e) {
    function i(t) {
        this.isotope = t,
        t && (this.options = t.options[this.namespace],
        this.element = t.element,
        this.items = t.filteredItems,
        this.size = t.size)
    }
    return function() {
        function t(t) {
            return function() {
                return e.prototype[t].apply(this.isotope, arguments)
            }
        }
        for (var n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], o = 0, r = n.length; r > o; o++) {
            var s = n[o];
            i.prototype[s] = t(s)
        }
    }(),
    i.prototype.needsVerticalResizeLayout = function() {
        var e = t(this.isotope.element)
          , i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }
    ,
    i.prototype._getMeasurement = function() {
        this.isotope._getMeasurement.apply(this, arguments)
    }
    ,
    i.prototype.getColumnWidth = function() {
        this.getSegmentSize("column", "Width")
    }
    ,
    i.prototype.getRowHeight = function() {
        this.getSegmentSize("row", "Height")
    }
    ,
    i.prototype.getSegmentSize = function(t, e) {
        var i = t + e
          , n = "outer" + e;
        if (this._getMeasurement(i, n),
        !this[i]) {
            var o = this.getFirstItemSize();
            this[i] = o && o[n] || this.isotope.size["inner" + e]
        }
    }
    ,
    i.prototype.getFirstItemSize = function() {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }
    ,
    i.prototype.layout = function() {
        this.isotope.layout.apply(this.isotope, arguments)
    }
    ,
    i.prototype.getSize = function() {
        this.isotope.getSize(),
        this.size = this.isotope.size
    }
    ,
    i.modes = {},
    i.create = function(t, e) {
        function n() {
            i.apply(this, arguments)
        }
        return n.prototype = new i,
        e && (n.options = e),
        n.prototype.namespace = t,
        i.modes[t] = n,
        n
    }
    ,
    i
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils)
}(window, function(t, e, i) {
    var n = t.create("masonry");
    return n.prototype._resetLayout = function() {
        this.getSize(),
        this._getMeasurement("columnWidth", "outerWidth"),
        this._getMeasurement("gutter", "outerWidth"),
        this.measureColumns();
        var t = this.cols;
        for (this.colYs = []; t--; )
            this.colYs.push(0);
        this.maxY = 0
    }
    ,
    n.prototype.measureColumns = function() {
        if (this.getContainerWidth(),
        !this.columnWidth) {
            var t = this.items[0]
              , i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter
          , o = this.containerWidth + this.gutter
          , r = o / n
          , s = n - o % n
          , a = s && 1 > s ? "round" : "floor";
        r = Math[a](r),
        this.cols = Math.max(r, 1)
    }
    ,
    n.prototype.getContainerWidth = function() {
        var t = this.options.isFitWidth ? this.element.parentNode : this.element
          , i = e(t);
        this.containerWidth = i && i.innerWidth
    }
    ,
    n.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth
          , n = e && 1 > e ? "round" : "ceil"
          , o = Math[n](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (var r = this._getColGroup(o), s = Math.min.apply(Math, r), a = i.indexOf(r, s), l = {
            x: this.columnWidth * a,
            y: s
        }, u = s + t.size.outerHeight, d = this.cols + 1 - r.length, p = 0; d > p; p++)
            this.colYs[a + p] = u;
        return l
    }
    ,
    n.prototype._getColGroup = function(t) {
        if (2 > t)
            return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
            var o = this.colYs.slice(n, n + t);
            e[n] = Math.max.apply(Math, o)
        }
        return e
    }
    ,
    n.prototype._manageStamp = function(t) {
        var i = e(t)
          , n = this._getElementOffset(t)
          , o = this.options.isOriginLeft ? n.left : n.right
          , r = o + i.outerWidth
          , s = Math.floor(o / this.columnWidth);
        s = Math.max(0, s);
        var a = Math.floor(r / this.columnWidth);
        a -= r % this.columnWidth ? 0 : 1,
        a = Math.min(this.cols - 1, a);
        for (var l = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, u = s; a >= u; u++)
            this.colYs[u] = Math.max(l, this.colYs[u])
    }
    ,
    n.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this.options.isFitWidth && (t.width = this._getContainerFitWidth()),
        t
    }
    ,
    n.prototype._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
            t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }
    ,
    n.prototype.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(),
        t !== this.containerWidth
    }
    ,
    n
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
    function i(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    var n = t.create("masonry")
      , o = n.prototype._getElementOffset
      , r = n.prototype.layout
      , s = n.prototype._getMeasurement;
    i(n.prototype, e.prototype),
    n.prototype._getElementOffset = o,
    n.prototype.layout = r,
    n.prototype._getMeasurement = s;
    var a = n.prototype.measureColumns;
    n.prototype.measureColumns = function() {
        this.items = this.isotope.filteredItems,
        a.call(this)
    }
    ;
    var l = n.prototype._manageStamp;
    return n.prototype._manageStamp = function() {
        this.options.isOriginLeft = this.isotope.options.isOriginLeft,
        this.options.isOriginTop = this.isotope.options.isOriginTop,
        l.apply(this, arguments)
    }
    ,
    n
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    var e = t.create("fitRows");
    return e.prototype._resetLayout = function() {
        this.x = 0,
        this.y = 0,
        this.maxY = 0,
        this._getMeasurement("gutter", "outerWidth")
    }
    ,
    e.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter
          , i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0,
        this.y = this.maxY);
        var n = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight),
        this.x += e,
        n
    }
    ,
    e.prototype._getContainerSize = function() {
        return {
            height: this.maxY
        }
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
    var e = t.create("vertical", {
        horizontalAlignment: 0
    });
    return e.prototype._resetLayout = function() {
        this.y = 0
    }
    ,
    e.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment
          , i = this.y;
        return this.y += t.size.outerHeight,
        {
            x: e,
            y: i
        }
    }
    ,
    e.prototype._getContainerSize = function() {
        return {
            height: this.y
        }
    }
    ,
    e
}),
function(t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, o, r, s, a) {
        return e(t, i, n, o, r, s, a)
    }) : "object" == typeof exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function(t, e, i, n, o, r, s) {
    function a(t, e) {
        return function(i, n) {
            for (var o = 0, r = t.length; r > o; o++) {
                var s = t[o]
                  , a = i.sortData[s]
                  , l = n.sortData[s];
                if (a > l || l > a) {
                    var u = void 0 !== e[s] ? e[s] : e
                      , d = u ? 1 : -1;
                    return (a > l ? 1 : -1) * d
                }
            }
            return 0
        }
    }
    var l = t.jQuery
      , u = String.prototype.trim ? function(t) {
        return t.trim()
    }
    : function(t) {
        return t.replace(/^\s+|\s+$/g, "")
    }
      , d = document.documentElement
      , p = d.textContent ? function(t) {
        return t.textContent
    }
    : function(t) {
        return t.innerText
    }
      , c = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
    });
    c.Item = r,
    c.LayoutMode = s,
    c.prototype._create = function() {
        this.itemGUID = 0,
        this._sorters = {},
        this._getSorters(),
        e.prototype._create.call(this),
        this.modes = {},
        this.filteredItems = this.items,
        this.sortHistory = ["original-order"];
        for (var t in s.modes)
            this._initLayoutMode(t)
    }
    ,
    c.prototype.reloadItems = function() {
        this.itemGUID = 0,
        e.prototype.reloadItems.call(this)
    }
    ,
    c.prototype._itemize = function() {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0, n = t.length; n > i; i++) {
            var o = t[i];
            o.id = this.itemGUID++
        }
        return this._updateItemsSortData(t),
        t
    }
    ,
    c.prototype._initLayoutMode = function(t) {
        var e = s.modes[t]
          , i = this.options[t] || {};
        this.options[t] = e.options ? o.extend(e.options, i) : i,
        this.modes[t] = new e(this)
    }
    ,
    c.prototype.layout = function() {
        return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
    }
    ,
    c.prototype._layout = function() {
        var t = this._getIsInstant();
        this._resetLayout(),
        this._manageStamps(),
        this.layoutItems(this.filteredItems, t),
        this._isLayoutInited = !0
    }
    ,
    c.prototype.arrange = function(t) {
        function e() {
            n.reveal(i.needReveal),
            n.hide(i.needHide)
        }
        this.option(t),
        this._getIsInstant();
        var i = this._filter(this.items);
        this.filteredItems = i.matches;
        var n = this;
        this._bindArrangeComplete(),
        this._isInstant ? this._noTransition(e) : e(),
        this._sort(),
        this._layout()
    }
    ,
    c.prototype._init = c.prototype.arrange,
    c.prototype._getIsInstant = function() {
        var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        return this._isInstant = t,
        t
    }
    ,
    c.prototype._bindArrangeComplete = function() {
        function t() {
            e && i && n && o.emitEvent("arrangeComplete", [o.filteredItems])
        }
        var e, i, n, o = this;
        this.once("layoutComplete", function() {
            e = !0,
            t()
        }),
        this.once("hideComplete", function() {
            i = !0,
            t()
        }),
        this.once("revealComplete", function() {
            n = !0,
            t()
        })
    }
    ,
    c.prototype._filter = function(t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], n = [], o = [], r = this._getFilterTest(e), s = 0, a = t.length; a > s; s++) {
            var l = t[s];
            if (!l.isIgnored) {
                var u = r(l);
                u && i.push(l),
                u && l.isHidden ? n.push(l) : u || l.isHidden || o.push(l)
            }
        }
        return {
            matches: i,
            needReveal: n,
            needHide: o
        }
    }
    ,
    c.prototype._getFilterTest = function(t) {
        return l && this.options.isJQueryFiltering ? function(e) {
            return l(e.element).is(t)
        }
        : "function" == typeof t ? function(e) {
            return t(e.element)
        }
        : function(e) {
            return n(e.element, t)
        }
    }
    ,
    c.prototype.updateSortData = function(t) {
        var e;
        t ? (t = o.makeArray(t),
        e = this.getItems(t)) : e = this.items,
        this._getSorters(),
        this._updateItemsSortData(e)
    }
    ,
    c.prototype._getSorters = function() {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = h(i)
        }
    }
    ,
    c.prototype._updateItemsSortData = function(t) {
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var n = t[i];
            n.updateSortData()
        }
    }
    ;
    var h = function() {
        function t(t) {
            if ("string" != typeof t)
                return t;
            var i = u(t).split(" ")
              , n = i[0]
              , o = n.match(/^\[(.+)\]$/)
              , r = o && o[1]
              , s = e(r, n)
              , a = c.sortDataParsers[i[1]];
            return t = a ? function(t) {
                return t && a(s(t))
            }
            : function(t) {
                return t && s(t)
            }
        }
        function e(t, e) {
            var i;
            return i = t ? function(e) {
                return e.getAttribute(t)
            }
            : function(t) {
                var i = t.querySelector(e);
                return i && p(i)
            }
        }
        return t
    }();
    c.sortDataParsers = {
        parseInt: function(t) {
            return parseInt(t, 10)
        },
        parseFloat: function(t) {
            return parseFloat(t)
        }
    },
    c.prototype._sort = function() {
        var t = this.options.sortBy;
        if (t) {
            var e = [].concat.apply(t, this.sortHistory)
              , i = a(e, this.options.sortAscending);
            this.filteredItems.sort(i),
            t != this.sortHistory[0] && this.sortHistory.unshift(t)
        }
    }
    ,
    c.prototype._mode = function() {
        var t = this.options.layoutMode
          , e = this.modes[t];
        if (!e)
            throw Error("No layout mode: " + t);
        return e.options = this.options[t],
        e
    }
    ,
    c.prototype._resetLayout = function() {
        e.prototype._resetLayout.call(this),
        this._mode()._resetLayout()
    }
    ,
    c.prototype._getItemLayoutPosition = function(t) {
        return this._mode()._getItemLayoutPosition(t)
    }
    ,
    c.prototype._manageStamp = function(t) {
        this._mode()._manageStamp(t)
    }
    ,
    c.prototype._getContainerSize = function() {
        return this._mode()._getContainerSize()
    }
    ,
    c.prototype.needsResizeLayout = function() {
        return this._mode().needsResizeLayout()
    }
    ,
    c.prototype.appended = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }
    ,
    c.prototype.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(),
            this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems),
            this.filteredItems = i.concat(this.filteredItems),
            this.items = e.concat(this.items)
        }
    }
    ,
    c.prototype._filterRevealAdded = function(t) {
        var e = this._filter(t);
        return this.hide(e.needHide),
        this.reveal(e.matches),
        this.layoutItems(e.matches, !0),
        e.matches
    }
    ,
    c.prototype.insert = function(t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, n, o = e.length;
            for (i = 0; o > i; i++)
                n = e[i],
                this.element.appendChild(n.element);
            var r = this._filter(e).matches;
            for (i = 0; o > i; i++)
                e[i].isLayoutInstant = !0;
            for (this.arrange(),
            i = 0; o > i; i++)
                delete e[i].isLayoutInstant;
            this.reveal(r)
        }
    }
    ;
    var f = c.prototype.remove;
    return c.prototype.remove = function(t) {
        t = o.makeArray(t);
        var e = this.getItems(t);
        f.call(this, t);
        var i = e && e.length;
        if (i)
            for (var n = 0; i > n; n++) {
                var r = e[n];
                o.removeFrom(this.filteredItems, r)
            }
    }
    ,
    c.prototype.shuffle = function() {
        for (var t = 0, e = this.items.length; e > t; t++) {
            var i = this.items[t];
            i.sortData.random = Math.random()
        }
        this.options.sortBy = "random",
        this._sort(),
        this._layout()
    }
    ,
    c.prototype._noTransition = function(t) {
        var e = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var i = t.call(this);
        return this.options.transitionDuration = e,
        i
    }
    ,
    c.prototype.getFilteredItemElements = function() {
        for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++)
            t.push(this.filteredItems[e].element);
        return t
    }
    ,
    c
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, r, s) {
        return e(t, i, n, o, r, s)
    }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function(t, e, i, n, o, r) {
    "use strict";
    function s(t, e) {
        var i = o.getQueryElement(t);
        if (!i)
            return void (a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i,
        l && (this.$element = l(this.element)),
        this.options = o.extend({}, this.constructor.defaults),
        this.option(e);
        var n = ++d;
        this.element.outlayerGUID = n,
        p[n] = this,
        this._create(),
        this.options.isInitLayout && this.layout()
    }
    var a = t.console
      , l = t.jQuery
      , u = function() {}
      , d = 0
      , p = {};
    return s.namespace = "outlayer",
    s.Item = r,
    s.defaults = {
        containerStyle: {
            position: "relative"
        },
        isInitLayout: !0,
        isOriginLeft: !0,
        isOriginTop: !0,
        isResizeBound: !0,
        isResizingContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    },
    o.extend(s.prototype, i.prototype),
    s.prototype.option = function(t) {
        o.extend(this.options, t)
    }
    ,
    s.prototype._create = function() {
        this.reloadItems(),
        this.stamps = [],
        this.stamp(this.options.stamp),
        o.extend(this.element.style, this.options.containerStyle),
        this.options.isResizeBound && this.bindResize()
    }
    ,
    s.prototype.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }
    ,
    s.prototype._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0, r = e.length; r > o; o++) {
            var s = e[o]
              , a = new i(s,this);
            n.push(a)
        }
        return n
    }
    ,
    s.prototype._filterFindItemElements = function(t) {
        return o.filterFindElements(t, this.options.itemSelector)
    }
    ,
    s.prototype.getItemElements = function() {
        for (var t = [], e = 0, i = this.items.length; i > e; e++)
            t.push(this.items[e].element);
        return t
    }
    ,
    s.prototype.layout = function() {
        this._resetLayout(),
        this._manageStamps();
        var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, t),
        this._isLayoutInited = !0
    }
    ,
    s.prototype._init = s.prototype.layout,
    s.prototype._resetLayout = function() {
        this.getSize()
    }
    ,
    s.prototype.getSize = function() {
        this.size = n(this.element)
    }
    ,
    s.prototype._getMeasurement = function(t, e) {
        var i, r = this.options[t];
        r ? ("string" == typeof r ? i = this.element.querySelector(r) : o.isElement(r) && (i = r),
        this[t] = i ? n(i)[e] : r) : this[t] = 0
    }
    ,
    s.prototype.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t),
        this._layoutItems(t, e),
        this._postLayout()
    }
    ,
    s.prototype._getItemsForLayout = function(t) {
        for (var e = [], i = 0, n = t.length; n > i; i++) {
            var o = t[i];
            o.isIgnored || e.push(o)
        }
        return e
    }
    ,
    s.prototype._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t),
        t && t.length) {
            for (var i = [], n = 0, o = t.length; o > n; n++) {
                var r = t[n]
                  , s = this._getItemLayoutPosition(r);
                s.item = r,
                s.isInstant = e || r.isLayoutInstant,
                i.push(s)
            }
            this._processLayoutQueue(i)
        }
    }
    ,
    s.prototype._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }
    ,
    s.prototype._processLayoutQueue = function(t) {
        for (var e = 0, i = t.length; i > e; e++) {
            var n = t[e];
            this._positionItem(n.item, n.x, n.y, n.isInstant)
        }
    }
    ,
    s.prototype._positionItem = function(t, e, i, n) {
        n ? t.goTo(e, i) : t.moveTo(e, i)
    }
    ,
    s.prototype._postLayout = function() {
        this.resizeContainer()
    }
    ,
    s.prototype.resizeContainer = function() {
        if (this.options.isResizingContainer) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0),
            this._setContainerMeasure(t.height, !1))
        }
    }
    ,
    s.prototype._getContainerSize = u,
    s.prototype._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
            t = Math.max(t, 0),
            this.element.style[e ? "width" : "height"] = t + "px"
        }
    }
    ,
    s.prototype._emitCompleteOnItems = function(t, e) {
        function i() {
            o.dispatchEvent(t + "Complete", null, [e])
        }
        function n() {
            s++,
            s === r && i()
        }
        var o = this
          , r = e.length;
        if (!e || !r)
            return void i();
        for (var s = 0, a = 0, l = e.length; l > a; a++) {
            var u = e[a];
            u.once(t, n)
        }
    }
    ,
    s.prototype.dispatchEvent = function(t, e, i) {
        var n = e ? [e].concat(i) : i;
        if (this.emitEvent(t, n),
        l)
            if (this.$element = this.$element || l(this.element),
            e) {
                var o = l.Event(e);
                o.type = t,
                this.$element.trigger(o, i)
            } else
                this.$element.trigger(t, i)
    }
    ,
    s.prototype.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }
    ,
    s.prototype.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }
    ,
    s.prototype.stamp = function(t) {
        if (t = this._find(t)) {
            this.stamps = this.stamps.concat(t);
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                this.ignore(n)
            }
        }
    }
    ,
    s.prototype.unstamp = function(t) {
        if (t = this._find(t))
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                o.removeFrom(this.stamps, n),
                this.unignore(n)
            }
    }
    ,
    s.prototype._find = function(t) {
        return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
        t = o.makeArray(t)) : void 0
    }
    ,
    s.prototype._manageStamps = function() {
        if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var t = 0, e = this.stamps.length; e > t; t++) {
                var i = this.stamps[t];
                this._manageStamp(i)
            }
        }
    }
    ,
    s.prototype._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect()
          , e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }
    ,
    s.prototype._manageStamp = u,
    s.prototype._getElementOffset = function(t) {
        var e = t.getBoundingClientRect()
          , i = this._boundingRect
          , o = n(t)
          , r = {
            left: e.left - i.left - o.marginLeft,
            top: e.top - i.top - o.marginTop,
            right: i.right - e.right - o.marginRight,
            bottom: i.bottom - e.bottom - o.marginBottom
        };
        return r
    }
    ,
    s.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    s.prototype.bindResize = function() {
        this.isResizeBound || (e.bind(t, "resize", this),
        this.isResizeBound = !0)
    }
    ,
    s.prototype.unbindResize = function() {
        this.isResizeBound && e.unbind(t, "resize", this),
        this.isResizeBound = !1
    }
    ,
    s.prototype.onresize = function() {
        function t() {
            e.resize(),
            delete e.resizeTimeout
        }
        this.resizeTimeout && clearTimeout(this.resizeTimeout);
        var e = this;
        this.resizeTimeout = setTimeout(t, 100)
    }
    ,
    s.prototype.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }
    ,
    s.prototype.needsResizeLayout = function() {
        var t = n(this.element)
          , e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }
    ,
    s.prototype.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)),
        e
    }
    ,
    s.prototype.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0),
        this.reveal(e))
    }
    ,
    s.prototype.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i)
        }
    }
    ,
    s.prototype.reveal = function(t) {
        this._emitCompleteOnItems("reveal", t);
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var n = t[i];
            n.reveal()
        }
    }
    ,
    s.prototype.hide = function(t) {
        this._emitCompleteOnItems("hide", t);
        for (var e = t && t.length, i = 0; e && e > i; i++) {
            var n = t[i];
            n.hide()
        }
    }
    ,
    s.prototype.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }
    ,
    s.prototype.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }
    ,
    s.prototype.getItem = function(t) {
        for (var e = 0, i = this.items.length; i > e; e++) {
            var n = this.items[e];
            if (n.element === t)
                return n
        }
    }
    ,
    s.prototype.getItems = function(t) {
        t = o.makeArray(t);
        for (var e = [], i = 0, n = t.length; n > i; i++) {
            var r = t[i]
              , s = this.getItem(r);
            s && e.push(s)
        }
        return e
    }
    ,
    s.prototype.remove = function(t) {
        var e = this.getItems(t);
        if (this._emitCompleteOnItems("remove", e),
        e && e.length)
            for (var i = 0, n = e.length; n > i; i++) {
                var r = e[i];
                r.remove(),
                o.removeFrom(this.items, r)
            }
    }
    ,
    s.prototype.destroy = function() {
        var t = this.element.style;
        t.height = "",
        t.position = "",
        t.width = "";
        for (var e = 0, i = this.items.length; i > e; e++) {
            var n = this.items[e];
            n.destroy()
        }
        this.unbindResize();
        var o = this.element.outlayerGUID;
        delete p[o],
        delete this.element.outlayerGUID,
        l && l.removeData(this.element, this.constructor.namespace)
    }
    ,
    s.data = function(t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && p[e]
    }
    ,
    s.create = function(t, e) {
        function i() {
            s.apply(this, arguments)
        }
        return Object.create ? i.prototype = Object.create(s.prototype) : o.extend(i.prototype, s.prototype),
        i.prototype.constructor = i,
        i.defaults = o.extend({}, s.defaults),
        o.extend(i.defaults, e),
        i.prototype.settings = {},
        i.namespace = t,
        i.data = s.data,
        i.Item = function() {
            r.apply(this, arguments)
        }
        ,
        i.Item.prototype = new r,
        o.htmlInit(i, t),
        l && l.bridget && l.bridget(t, i),
        i
    }
    ,
    s.Item = r,
    s
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils)
}(window, function(t, e, i) {
    "use strict";
    var n = t.create("masonry");
    return n.prototype._resetLayout = function() {
        this.getSize(),
        this._getMeasurement("columnWidth", "outerWidth"),
        this._getMeasurement("gutter", "outerWidth"),
        this.measureColumns();
        var t = this.cols;
        for (this.colYs = []; t--; )
            this.colYs.push(0);
        this.maxY = 0
    }
    ,
    n.prototype.measureColumns = function() {
        if (this.getContainerWidth(),
        !this.columnWidth) {
            var t = this.items[0]
              , i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter
          , o = this.containerWidth + this.gutter
          , r = o / n
          , s = n - o % n
          , a = s && 1 > s ? "round" : "floor";
        r = Math[a](r),
        this.cols = Math.max(r, 1)
    }
    ,
    n.prototype.getContainerWidth = function() {
        var t = this.options.isFitWidth ? this.element.parentNode : this.element
          , i = e(t);
        this.containerWidth = i && i.innerWidth
    }
    ,
    n.prototype._getItemLayoutPosition = function(t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth
          , n = e && 1 > e ? "round" : "ceil"
          , o = Math[n](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (var r = this._getColGroup(o), s = Math.min.apply(Math, r), a = i.indexOf(r, s), l = {
            x: this.columnWidth * a,
            y: s
        }, u = s + t.size.outerHeight, d = this.cols + 1 - r.length, p = 0; d > p; p++)
            this.colYs[a + p] = u;
        return l
    }
    ,
    n.prototype._getColGroup = function(t) {
        if (2 > t)
            return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
            var o = this.colYs.slice(n, n + t);
            e[n] = Math.max.apply(Math, o)
        }
        return e
    }
    ,
    n.prototype._manageStamp = function(t) {
        var i = e(t)
          , n = this._getElementOffset(t)
          , o = this.options.isOriginLeft ? n.left : n.right
          , r = o + i.outerWidth
          , s = Math.floor(o / this.columnWidth);
        s = Math.max(0, s);
        var a = Math.floor(r / this.columnWidth);
        a -= r % this.columnWidth ? 0 : 1,
        a = Math.min(this.cols - 1, a);
        for (var l = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, u = s; a >= u; u++)
            this.colYs[u] = Math.max(l, this.colYs[u])
    }
    ,
    n.prototype._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
            height: this.maxY
        };
        return this.options.isFitWidth && (t.width = this._getContainerFitWidth()),
        t
    }
    ,
    n.prototype._getContainerFitWidth = function() {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; )
            t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }
    ,
    n.prototype.needsResizeLayout = function() {
        var t = this.containerWidth;
        return this.getContainerWidth(),
        t !== this.containerWidth
    }
    ,
    n
}),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    "use strict";
    function e(t) {
        if (t instanceof Date)
            return t;
        if (String(t).match(s))
            return String(t).match(/^[0-9]*$/) && (t = Number(t)),
            String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")),
            new Date(t);
        throw new Error("Couldn't cast `" + t + "` to a date object.")
    }
    function i(t) {
        return function(e) {
            var i = e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (i)
                for (var o = 0, r = i.length; r > o; ++o) {
                    var s = i[o].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/)
                      , l = new RegExp(s[0])
                      , u = s[1] || ""
                      , d = s[3] || ""
                      , p = null;
                    s = s[2],
                    a.hasOwnProperty(s) && (p = a[s],
                    p = Number(t[p])),
                    null !== p && ("!" === u && (p = n(d, p)),
                    "" === u && 10 > p && (p = "0" + p.toString()),
                    e = e.replace(l, p.toString()))
                }
            return e = e.replace(/%%/, "%")
        }
    }
    function n(t, e) {
        var i = "s"
          , n = "";
        return t && (t = t.replace(/(:|;|\s)/gi, "").split(/\,/),
        1 === t.length ? i = t[0] : (n = t[0],
        i = t[1])),
        1 === Math.abs(e) ? n : i
    }
    var o = 100
      , r = []
      , s = [];
    s.push(/^[0-9]*$/.source),
    s.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    s.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    s = new RegExp(s.join("|"));
    var a = {
        Y: "years",
        m: "months",
        w: "weeks",
        d: "days",
        D: "totalDays",
        H: "hours",
        M: "minutes",
        S: "seconds"
    }
      , l = function(e, i, n) {
        this.el = e,
        this.$el = t(e),
        this.interval = null,
        this.offset = {},
        this.instanceNumber = r.length,
        r.push(this),
        this.$el.data("countdown-instance", this.instanceNumber),
        n && (this.$el.on("update.countdown", n),
        this.$el.on("stoped.countdown", n),
        this.$el.on("finish.countdown", n)),
        this.setFinalDate(i),
        this.start()
    };
    t.extend(l.prototype, {
        start: function() {
            null !== this.interval && clearInterval(this.interval);
            var t = this;
            this.update(),
            this.interval = setInterval(function() {
                t.update.call(t)
            }, o)
        },
        stop: function() {
            clearInterval(this.interval),
            this.interval = null,
            this.dispatchEvent("stoped")
        },
        pause: function() {
            this.stop.call(this)
        },
        resume: function() {
            this.start.call(this)
        },
        remove: function() {
            this.stop(),
            r[this.instanceNumber] = null,
            delete this.$el.data().countdownInstance
        },
        setFinalDate: function(t) {
            this.finalDate = e(t)
        },
        update: function() {
            return 0 === this.$el.closest("html").length ? void this.remove() : (this.totalSecsLeft = this.finalDate.getTime() - (new Date).getTime(),
            this.totalSecsLeft = Math.ceil(this.totalSecsLeft / 1e3),
            this.totalSecsLeft = this.totalSecsLeft < 0 ? 0 : this.totalSecsLeft,
            this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30),
                years: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 365)
            },
            void (0 === this.totalSecsLeft ? (this.stop(),
            this.dispatchEvent("finish")) : this.dispatchEvent("update")))
        },
        dispatchEvent: function(e) {
            var n = t.Event(e + ".countdown");
            n.finalDate = this.finalDate,
            n.offset = t.extend({}, this.offset),
            n.strftime = i(this.offset),
            this.$el.trigger(n)
        }
    }),
    t.fn.countdown = function() {
        var e = Array.prototype.slice.call(arguments, 0);
        return this.each(function() {
            var i = t(this).data("countdown-instance");
            if (void 0 !== i) {
                var n = r[i]
                  , o = e[0];
                l.prototype.hasOwnProperty(o) ? n[o].apply(n, e.slice(1)) : null === String(o).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (n.setFinalDate.call(n, o),
                n.start()) : t.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, o))
            } else
                new l(this,e[0],e[1])
        })
    }
}),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    t.extend(t.fn, {
        validate: function(e) {
            if (!this.length)
                return void (e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var i = t.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"),
            i = new t.validator(e,this[0]),
            t.data(this[0], "validator", i),
            i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(e) {
                i.settings.submitHandler && (i.submitButton = e.target),
                t(e.target).hasClass("cancel") && (i.cancelSubmit = !0),
                void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0)
            }),
            this.submit(function(e) {
                function n() {
                    var n;
                    return i.settings.submitHandler ? (i.submitButton && (n = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),
                    i.settings.submitHandler.call(i, i.currentForm, e),
                    i.submitButton && n.remove(),
                    !1) : !0
                }
                return i.settings.debug && e.preventDefault(),
                i.cancelSubmit ? (i.cancelSubmit = !1,
                n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0,
                !1) : n() : (i.focusInvalid(),
                !1)
            })),
            i)
        },
        valid: function() {
            var e, i;
            return t(this[0]).is("form") ? e = this.validate().form() : (e = !0,
            i = t(this[0].form).validate(),
            this.each(function() {
                e = i.element(this) && e
            })),
            e
        },
        removeAttrs: function(e) {
            var i = {}
              , n = this;
            return t.each(e.split(/\s/), function(t, e) {
                i[e] = n.attr(e),
                n.removeAttr(e)
            }),
            i
        },
        rules: function(e, i) {
            var n, o, r, s, a, l, u = this[0];
            if (e)
                switch (n = t.data(u.form, "validator").settings,
                o = n.rules,
                r = t.validator.staticRules(u),
                e) {
                case "add":
                    t.extend(r, t.validator.normalizeRule(i)),
                    delete r.messages,
                    o[u.name] = r,
                    i.messages && (n.messages[u.name] = t.extend(n.messages[u.name], i.messages));
                    break;
                case "remove":
                    return i ? (l = {},
                    t.each(i.split(/\s/), function(e, i) {
                        l[i] = r[i],
                        delete r[i],
                        "required" === i && t(u).removeAttr("aria-required")
                    }),
                    l) : (delete o[u.name],
                    r)
                }
            return s = t.validator.normalizeRules(t.extend({}, t.validator.classRules(u), t.validator.attributeRules(u), t.validator.dataRules(u), t.validator.staticRules(u)), u),
            s.required && (a = s.required,
            delete s.required,
            s = t.extend({
                required: a
            }, s),
            t(u).attr("aria-required", "true")),
            s.remote && (a = s.remote,
            delete s.remote,
            s = t.extend(s, {
                remote: a
            })),
            s
        }
    }),
    t.extend(t.expr[":"], {
        blank: function(e) {
            return !t.trim("" + t(e).val())
        },
        filled: function(e) {
            return !!t.trim("" + t(e).val())
        },
        unchecked: function(e) {
            return !t(e).prop("checked")
        }
    }),
    t.validator = function(e, i) {
        this.settings = t.extend(!0, {}, t.validator.defaults, e),
        this.currentForm = i,
        this.init()
    }
    ,
    t.validator.format = function(e, i) {
        return 1 === arguments.length ? function() {
            var i = t.makeArray(arguments);
            return i.unshift(e),
            t.validator.format.apply(this, i)
        }
        : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)),
        i.constructor !== Array && (i = [i]),
        t.each(i, function(t, i) {
            e = e.replace(new RegExp("\\{" + t + "\\}","g"), function() {
                return i
            })
        }),
        e)
    }
    ,
    t.extend(t.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: t([]),
            errorLabelContainer: t([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(t) {
                this.lastActive = t,
                this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass),
                this.hideThese(this.errorsFor(t)))
            },
            onfocusout: function(t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function(t, e) {
                (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
            },
            onclick: function(t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function(e, i, n) {
                "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(n) : t(e).addClass(i).removeClass(n)
            },
            unhighlight: function(e, i, n) {
                "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(n) : t(e).removeClass(i).addClass(n)
            }
        },
        setDefaults: function(e) {
            t.extend(t.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: t.validator.format("Please enter no more than {0} characters."),
            minlength: t.validator.format("Please enter at least {0} characters."),
            rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
            range: t.validator.format("Please enter a value between {0} and {1}."),
            max: t.validator.format("Please enter a value less than or equal to {0}."),
            min: t.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function e(e) {
                    var i = t.data(this[0].form, "validator")
                      , n = "on" + e.type.replace(/^validate/, "")
                      , o = i.settings;
                    o[n] && !this.is(o.ignore) && o[n].call(i, this[0], e)
                }
                this.labelContainer = t(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm),
                this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset();
                var i, n = this.groups = {};
                t.each(this.settings.groups, function(e, i) {
                    "string" == typeof i && (i = i.split(/\s/)),
                    t.each(i, function(t, i) {
                        n[i] = e
                    })
                }),
                i = this.settings.rules,
                t.each(i, function(e, n) {
                    i[e] = t.validator.normalizeRule(n)
                }),
                t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", e).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", e),
                this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler),
                t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(),
                t.extend(this.submitted, this.errorMap),
                this.invalid = t.extend({}, this.errorMap),
                this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++)
                    this.check(e[t]);
                return this.valid()
            },
            element: function(e) {
                var i = this.clean(e)
                  , n = this.validationTargetFor(i)
                  , o = !0;
                return this.lastElement = n,
                void 0 === n ? delete this.invalid[i.name] : (this.prepareElement(n),
                this.currentElements = t(n),
                o = this.check(n) !== !1,
                o ? delete this.invalid[n.name] : this.invalid[n.name] = !0),
                t(e).attr("aria-invalid", !o),
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                o
            },
            showErrors: function(e) {
                if (e) {
                    t.extend(this.errorMap, e),
                    this.errorList = [];
                    for (var i in e)
                        this.errorList.push({
                            message: e[i],
                            element: this.findByName(i)[0]
                        });
                    this.successList = t.grep(this.successList, function(t) {
                        return !(t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                t.fn.resetForm && t(this.currentForm).resetForm(),
                this.submitted = {},
                this.lastElement = null,
                this.prepareForm(),
                this.hideErrors(),
                this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(t) {
                var e, i = 0;
                for (e in t)
                    i++;
                return i
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(t) {
                t.not(this.containers).text(""),
                this.addWrapper(t).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (e) {}
            },
            findLastActive: function() {
                var e = this.lastActive;
                return e && 1 === t.grep(this.errorList, function(t) {
                    return t.element.name === e.name
                }).length && e
            },
            elements: function() {
                var e = this
                  , i = {};
                return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this),
                    this.name in i || !e.objectLength(t(this).rules()) ? !1 : (i[this.name] = !0,
                    !0)
                })
            },
            clean: function(e) {
                return t(e)[0]
            },
            errors: function() {
                var e = this.settings.errorClass.split(" ").join(".");
                return t(this.settings.errorElement + "." + e, this.errorContext)
            },
            reset: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = t([]),
                this.toHide = t([]),
                this.currentElements = t([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(t) {
                this.reset(),
                this.toHide = this.errorsFor(t)
            },
            elementValue: function(e) {
                var i, n = t(e), o = e.type;
                return "radio" === o || "checkbox" === o ? t("input[name='" + e.name + "']:checked").val() : "number" === o && "undefined" != typeof e.validity ? e.validity.badInput ? !1 : n.val() : (i = n.val(),
                "string" == typeof i ? i.replace(/\r/g, "") : i)
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var i, n, o, r = t(e).rules(), s = t.map(r, function(t, e) {
                    return e
                }).length, a = !1, l = this.elementValue(e);
                for (n in r) {
                    o = {
                        method: n,
                        parameters: r[n]
                    };
                    try {
                        if (i = t.validator.methods[n].call(this, l, e, o.parameters),
                        "dependency-mismatch" === i && 1 === s) {
                            a = !0;
                            continue
                        }
                        if (a = !1,
                        "pending" === i)
                            return void (this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!i)
                            return this.formatAndAdd(e, o),
                            !1
                    } catch (u) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + o.method + "' method.", u),
                        u
                    }
                }
                if (!a)
                    return this.objectLength(r) && this.successList.push(e),
                    !0
            },
            customDataMessage: function(e, i) {
                return t(e).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || t(e).data("msg")
            },
            customMessage: function(t, e) {
                var i = this.settings.messages[t];
                return i && (i.constructor === String ? i : i[e])
            },
            findDefined: function() {
                for (var t = 0; t < arguments.length; t++)
                    if (void 0 !== arguments[t])
                        return arguments[t];
                return void 0
            },
            defaultMessage: function(e, i) {
                return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
            },
            formatAndAdd: function(e, i) {
                var n = this.defaultMessage(e, i.method)
                  , o = /\$?\{(\d+)\}/g;

                "function" == typeof n ? n = n.call(this, i.parameters, e) : o.test(n) && (n = t.validator.format(n.replace(o, "{$1}"), i.parameters)),
                this.errorList.push({
                    message: n,
                    element: e,
                    method: i.method
                }),
                this.errorMap[e.name] = n,
                this.submitted[e.name] = n
            },
            addWrapper: function(t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))),
                t
            },
            defaultShowErrors: function() {
                var t, e, i;
                for (t = 0; this.errorList[t]; t++)
                    i = this.errorList[t],
                    this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(i.element, i.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (t = 0; this.successList[t]; t++)
                        this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)
                    for (t = 0,
                    e = this.validElements(); e[t]; t++)
                        this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return t(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(e, i) {
                var n, o, r, s = this.errorsFor(e), a = this.idOrName(e), l = t(e).attr("aria-describedby");
                s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                s.html(i)) : (s = t("<" + this.settings.errorElement + ">").attr("id", a + "-error").addClass(this.settings.errorClass).html(i || ""),
                n = s,
                this.settings.wrapper && (n = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement(n, t(e)) : n.insertAfter(e),
                s.is("label") ? s.attr("for", a) : 0 === s.parents("label[for='" + a + "']").length && (r = s.attr("id"),
                l ? l.match(new RegExp("\b" + r + "\b")) || (l += " " + r) : l = r,
                t(e).attr("aria-describedby", l),
                o = this.groups[e.name],
                o && t.each(this.groups, function(e, i) {
                    i === o && t("[name='" + e + "']", this.currentForm).attr("aria-describedby", s.attr("id"))
                }))),
                !i && this.settings.success && (s.text(""),
                "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)),
                this.toShow = this.toShow.add(s)
            },
            errorsFor: function(e) {
                var i = this.idOrName(e)
                  , n = t(e).attr("aria-describedby")
                  , o = "label[for='" + i + "'], label[for='" + i + "'] *";
                return n && (o = o + ", #" + n.replace(/\s+/g, ", #")),
                this.errors().filter(o)
            },
            idOrName: function(t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]),
                t
            },
            checkable: function(t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function(e) {
                return t(this.currentForm).find("[name='" + e + "']")
            },
            getLength: function(e, i) {
                switch (i.nodeName.toLowerCase()) {
                case "select":
                    return t("option:selected", i).length;
                case "input":
                    if (this.checkable(i))
                        return this.findByName(i.name).filter(":checked").length
                }
                return e.length
            },
            depend: function(t, e) {
                return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
            },
            dependTypes: {
                "boolean": function(t) {
                    return t
                },
                string: function(e, i) {
                    return !!t(e, i.form).length
                },
                "function": function(t, e) {
                    return t(e)
                }
            },
            optional: function(e) {
                var i = this.elementValue(e);
                return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++,
                this.pending[t.name] = !0)
            },
            stopRequest: function(e, i) {
                this.pendingRequest--,
                this.pendingRequest < 0 && (this.pendingRequest = 0),
                delete this.pending[e.name],
                i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(),
                this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(e) {
                return t.data(e, "previousValue") || t.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(e, i) {
            e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
        },
        classRules: function(e) {
            var i = {}
              , n = t(e).attr("class");
            return n && t.each(n.split(" "), function() {
                this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
            }),
            i
        },
        attributeRules: function(e) {
            var i, n, o = {}, r = t(e), s = e.getAttribute("type");
            for (i in t.validator.methods)
                "required" === i ? (n = e.getAttribute(i),
                "" === n && (n = !0),
                n = !!n) : n = r.attr(i),
                /min|max/.test(i) && (null === s || /number|range|text/.test(s)) && (n = Number(n)),
                n || 0 === n ? o[i] = n : s === i && "range" !== s && (o[i] = !0);
            return o.maxlength && /-1|2147483647|524288/.test(o.maxlength) && delete o.maxlength,
            o
        },
        dataRules: function(e) {
            var i, n, o = {}, r = t(e);
            for (i in t.validator.methods)
                n = r.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()),
                void 0 !== n && (o[i] = n);
            return o
        },
        staticRules: function(e) {
            var i = {}
              , n = t.data(e.form, "validator");
            return n.settings.rules && (i = t.validator.normalizeRule(n.settings.rules[e.name]) || {}),
            i
        },
        normalizeRules: function(e, i) {
            return t.each(e, function(n, o) {
                if (o === !1)
                    return void delete e[n];
                if (o.param || o.depends) {
                    var r = !0;
                    switch (typeof o.depends) {
                    case "string":
                        r = !!t(o.depends, i.form).length;
                        break;
                    case "function":
                        r = o.depends.call(i, i)
                    }
                    r ? e[n] = void 0 !== o.param ? o.param : !0 : delete e[n]
                }
            }),
            t.each(e, function(n, o) {
                e[n] = t.isFunction(o) ? o(i) : o
            }),
            t.each(["minlength", "maxlength"], function() {
                e[this] && (e[this] = Number(e[this]))
            }),
            t.each(["rangelength", "range"], function() {
                var i;
                e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/),
                e[this] = [Number(i[0]), Number(i[1])]))
            }),
            t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max],
            delete e.min,
            delete e.max),
            e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength],
            delete e.minlength,
            delete e.maxlength)),
            e
        },
        normalizeRule: function(e) {
            if ("string" == typeof e) {
                var i = {};
                t.each(e.split(/\s/), function() {
                    i[this] = !0
                }),
                e = i
            }
            return e
        },
        addMethod: function(e, i, n) {
            t.validator.methods[e] = i,
            t.validator.messages[e] = void 0 !== n ? n : t.validator.messages[e],
            i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
        },
        methods: {
            required: function(e, i, n) {
                if (!this.depend(n, i))
                    return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var o = t(i).val();
                    return o && o.length > 0
                }
                return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0
            },
            email: function(t, e) {
                return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
            },
            url: function(t, e) {
                return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
            },
            date: function(t, e) {
                return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
            },
            dateISO: function(t, e) {
                return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
            },
            number: function(t, e) {
                return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            },
            digits: function(t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            creditcard: function(t, e) {
                if (this.optional(e))
                    return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(t))
                    return !1;
                var i, n, o = 0, r = 0, s = !1;
                if (t = t.replace(/\D/g, ""),
                t.length < 13 || t.length > 19)
                    return !1;
                for (i = t.length - 1; i >= 0; i--)
                    n = t.charAt(i),
                    r = parseInt(n, 10),
                    s && (r *= 2) > 9 && (r -= 9),
                    o += r,
                    s = !s;
                return o % 10 === 0
            },
            minlength: function(e, i, n) {
                var o = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || o >= n
            },
            maxlength: function(e, i, n) {
                var o = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || n >= o
            },
            rangelength: function(e, i, n) {
                var o = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || o >= n[0] && o <= n[1]
            },
            min: function(t, e, i) {
                return this.optional(e) || t >= i
            },
            max: function(t, e, i) {
                return this.optional(e) || i >= t
            },
            range: function(t, e, i) {
                return this.optional(e) || t >= i[0] && t <= i[1]
            },
            equalTo: function(e, i, n) {
                var o = t(n);
                return this.settings.onfocusout && o.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    t(i).valid()
                }),
                e === o.val()
            },
            remote: function(e, i, n) {
                if (this.optional(i))
                    return "dependency-mismatch";
                var o, r, s = this.previousValue(i);
                return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}),
                s.originalMessage = this.settings.messages[i.name].remote,
                this.settings.messages[i.name].remote = s.message,
                n = "string" == typeof n && {
                    url: n
                } || n,
                s.old === e ? s.valid : (s.old = e,
                o = this,
                this.startRequest(i),
                r = {},
                r[i.name] = e,
                t.ajax(t.extend(!0, {
                    url: n,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: r,
                    context: o.currentForm,
                    success: function(n) {
                        var r, a, l, u = n === !0 || "true" === n;
                        o.settings.messages[i.name].remote = s.originalMessage,
                        u ? (l = o.formSubmitted,
                        o.prepareElement(i),
                        o.formSubmitted = l,
                        o.successList.push(i),
                        delete o.invalid[i.name],
                        o.showErrors()) : (r = {},
                        a = n || o.defaultMessage(i, "remote"),
                        r[i.name] = s.message = t.isFunction(a) ? a(e) : a,
                        o.invalid[i.name] = !0,
                        o.showErrors(r)),
                        s.valid = u,
                        o.stopRequest(i, u)
                    }
                }, n)),
                "pending")
            }
        }
    }),
    t.format = function() {
        throw "$.format has been deprecated. Please use $.validator.format instead."
    }
    ;
    var e, i = {};
    t.ajaxPrefilter ? t.ajaxPrefilter(function(t, e, n) {
        var o = t.port;
        "abort" === t.mode && (i[o] && i[o].abort(),
        i[o] = n)
    }) : (e = t.ajax,
    t.ajax = function(n) {
        var o = ("mode"in n ? n : t.ajaxSettings).mode
          , r = ("port"in n ? n : t.ajaxSettings).port;
        return "abort" === o ? (i[r] && i[r].abort(),
        i[r] = e.apply(this, arguments),
        i[r]) : e.apply(this, arguments)
    }
    ),
    t.extend(t.fn, {
        validateDelegate: function(e, i, n) {
            return this.bind(i, function(i) {
                var o = t(i.target);
                return o.is(e) ? n.apply(o, arguments) : void 0
            })
        }
    })
}),
!function() {
    "use strict";
    function t(n) {
        if (!n)
            throw new Error("No options passed to Waypoint constructor");
        if (!n.element)
            throw new Error("No element option passed to Waypoint constructor");
        if (!n.handler)
            throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e,
        this.options = t.Adapter.extend({}, t.defaults, n),
        this.element = this.options.element,
        this.adapter = new t.Adapter(this.element),
        this.callback = n.handler,
        this.axis = this.options.horizontal ? "horizontal" : "vertical",
        this.enabled = this.options.enabled,
        this.triggerPoint = null,
        this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }),
        this.context = t.Context.findOrCreateByElement(this.options.context),
        t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        i[this.key] = this,
        e += 1
    }
    var e = 0
      , i = {};
    t.prototype.queueTrigger = function(t) {
        this.group.queueTrigger(this, t)
    }
    ,
    t.prototype.trigger = function(t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }
    ,
    t.prototype.destroy = function() {
        this.context.remove(this),
        this.group.remove(this),
        delete i[this.key]
    }
    ,
    t.prototype.disable = function() {
        return this.enabled = !1,
        this
    }
    ,
    t.prototype.enable = function() {
        return this.context.refresh(),
        this.enabled = !0,
        this
    }
    ,
    t.prototype.next = function() {
        return this.group.next(this)
    }
    ,
    t.prototype.previous = function() {
        return this.group.previous(this)
    }
    ,
    t.invokeAll = function(t) {
        var e = [];
        for (var n in i)
            e.push(i[n]);
        for (var o = 0, r = e.length; r > o; o++)
            e[o][t]()
    }
    ,
    t.destroyAll = function() {
        t.invokeAll("destroy")
    }
    ,
    t.disableAll = function() {
        t.invokeAll("disable")
    }
    ,
    t.enableAll = function() {
        t.invokeAll("enable")
    }
    ,
    t.refreshAll = function() {
        t.Context.refreshAll()
    }
    ,
    t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }
    ,
    t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }
    ,
    t.adapters = [],
    t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    },
    t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    },
    window.Waypoint = t
}(),
function() {
    "use strict";
    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }
    function e(t) {
        this.element = t,
        this.Adapter = o.Adapter,
        this.adapter = new this.Adapter(t),
        this.key = "waypoint-context-" + i,
        this.didScroll = !1,
        this.didResize = !1,
        this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        },
        this.waypoints = {
            vertical: {},
            horizontal: {}
        },
        t.waypointContextKey = this.key,
        n[t.waypointContextKey] = this,
        i += 1,
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler()
    }
    var i = 0
      , n = {}
      , o = window.Waypoint
      , r = window.onload;
    e.prototype.add = function(t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t,
        this.refresh()
    }
    ,
    e.prototype.checkEmpty = function() {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal)
          , e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"),
        delete n[this.key])
    }
    ,
    e.prototype.createThrottledResizeHandler = function() {
        function t() {
            e.handleResize(),
            e.didResize = !1
        }
        var e = this;
        this.adapter.on("resize.waypoints", function() {
            e.didResize || (e.didResize = !0,
            o.requestAnimationFrame(t))
        })
    }
    ,
    e.prototype.createThrottledScrollHandler = function() {
        function t() {
            e.handleScroll(),
            e.didScroll = !1
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function() {
            (!e.didScroll || o.isTouch) && (e.didScroll = !0,
            o.requestAnimationFrame(t))
        })
    }
    ,
    e.prototype.handleResize = function() {
        o.Context.refreshAll()
    }
    ,
    e.prototype.handleScroll = function() {
        var t = {}
          , e = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var i in e) {
            var n = e[i]
              , o = n.newScroll > n.oldScroll
              , r = o ? n.forward : n.backward;
            for (var s in this.waypoints[i]) {
                var a = this.waypoints[i][s]
                  , l = n.oldScroll < a.triggerPoint
                  , u = n.newScroll >= a.triggerPoint
                  , d = l && u
                  , p = !l && !u;
                (d || p) && (a.queueTrigger(r),
                t[a.group.id] = a.group)
            }
        }
        for (var c in t)
            t[c].flushTriggers();
        this.oldScroll = {
            x: e.horizontal.newScroll,
            y: e.vertical.newScroll
        }
    }
    ,
    e.prototype.innerHeight = function() {
        return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
    }
    ,
    e.prototype.remove = function(t) {
        delete this.waypoints[t.axis][t.key],
        this.checkEmpty()
    }
    ,
    e.prototype.innerWidth = function() {
        return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
    }
    ,
    e.prototype.destroy = function() {
        var t = [];
        for (var e in this.waypoints)
            for (var i in this.waypoints[e])
                t.push(this.waypoints[e][i]);
        for (var n = 0, o = t.length; o > n; n++)
            t[n].destroy()
    }
    ,
    e.prototype.refresh = function() {
        var t, e = this.element == this.element.window, i = this.adapter.offset(), n = {};
        this.handleScroll(),
        t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var o in t) {
            var r = t[o];
            for (var s in this.waypoints[o]) {
                var a, l, u, d, p, c = this.waypoints[o][s], h = c.options.offset, f = c.triggerPoint, m = 0, g = null == f;
                c.element !== c.element.window && (m = c.adapter.offset()[r.offsetProp]),
                "function" == typeof h ? h = h.apply(c) : "string" == typeof h && (h = parseFloat(h),
                c.options.offset.indexOf("%") > -1 && (h = Math.ceil(r.contextDimension * h / 100))),
                a = r.contextScroll - r.contextOffset,
                c.triggerPoint = m + a - h,
                l = f < r.oldScroll,
                u = c.triggerPoint >= r.oldScroll,
                d = l && u,
                p = !l && !u,
                !g && d ? (c.queueTrigger(r.backward),
                n[c.group.id] = c.group) : !g && p ? (c.queueTrigger(r.forward),
                n[c.group.id] = c.group) : g && r.oldScroll >= c.triggerPoint && (c.queueTrigger(r.forward),
                n[c.group.id] = c.group)
            }
        }
        for (var y in n)
            n[y].flushTriggers();
        return this
    }
    ,
    e.findOrCreateByElement = function(t) {
        return e.findByElement(t) || new e(t)
    }
    ,
    e.refreshAll = function() {
        for (var t in n)
            n[t].refresh()
    }
    ,
    e.findByElement = function(t) {
        return n[t.waypointContextKey]
    }
    ,
    window.onload = function() {
        r && r(),
        e.refreshAll()
    }
    ,
    o.requestAnimationFrame = function(e) {
        var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
        i.call(window, e)
    }
    ,
    o.Context = e
}(),
function() {
    "use strict";
    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }
    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }
    function i(t) {
        this.name = t.name,
        this.axis = t.axis,
        this.id = this.name + "-" + this.axis,
        this.waypoints = [],
        this.clearTriggerQueues(),
        n[this.axis][this.name] = this
    }
    var n = {
        vertical: {},
        horizontal: {}
    }
      , o = window.Waypoint;
    i.prototype.add = function(t) {
        this.waypoints.push(t)
    }
    ,
    i.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }
    ,
    i.prototype.flushTriggers = function() {
        for (var i in this.triggerQueues) {
            var n = this.triggerQueues[i]
              , o = "up" === i || "left" === i;
            n.sort(o ? e : t);
            for (var r = 0, s = n.length; s > r; r += 1) {
                var a = n[r];
                (a.options.continuous || r === n.length - 1) && a.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }
    ,
    i.prototype.next = function(e) {
        this.waypoints.sort(t);
        var i = o.Adapter.inArray(e, this.waypoints)
          , n = i === this.waypoints.length - 1;
        return n ? null : this.waypoints[i + 1]
    }
    ,
    i.prototype.previous = function(e) {
        this.waypoints.sort(t);
        var i = o.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }
    ,
    i.prototype.queueTrigger = function(t, e) {
        this.triggerQueues[e].push(t)
    }
    ,
    i.prototype.remove = function(t) {
        var e = o.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }
    ,
    i.prototype.first = function() {
        return this.waypoints[0]
    }
    ,
    i.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }
    ,
    i.findOrCreate = function(t) {
        return n[t.axis][t.name] || new i(t)
    }
    ,
    o.Group = i
}(),
function() {
    "use strict";
    function t(t) {
        return t === t.window
    }
    function e(e) {
        return t(e) ? e : e.defaultView
    }
    function i(t) {
        this.element = t,
        this.handlers = {}
    }
    var n = window.Waypoint;
    i.prototype.innerHeight = function() {
        var e = t(this.element);
        return e ? this.element.innerHeight : this.element.clientHeight
    }
    ,
    i.prototype.innerWidth = function() {
        var e = t(this.element);
        return e ? this.element.innerWidth : this.element.clientWidth
    }
    ,
    i.prototype.off = function(t, e) {
        function i(t, e, i) {
            for (var n = 0, o = e.length - 1; o > n; n++) {
                var r = e[n];
                i && i !== r || t.removeEventListener(r)
            }
        }
        var n = t.split(".")
          , o = n[0]
          , r = n[1]
          , s = this.element;
        if (r && this.handlers[r] && o)
            i(s, this.handlers[r][o], e),
            this.handlers[r][o] = [];
        else if (o)
            for (var a in this.handlers)
                i(s, this.handlers[a][o] || [], e),
                this.handlers[a][o] = [];
        else if (r && this.handlers[r]) {
            for (var l in this.handlers[r])
                i(s, this.handlers[r][l], e);
            this.handlers[r] = {}
        }
    }
    ,
    i.prototype.offset = function() {
        if (!this.element.ownerDocument)
            return null;
        var t = this.element.ownerDocument.documentElement
          , i = e(this.element.ownerDocument)
          , n = {
            top: 0,
            left: 0
        };
        return this.element.getBoundingClientRect && (n = this.element.getBoundingClientRect()),
        {
            top: n.top + i.pageYOffset - t.clientTop,
            left: n.left + i.pageXOffset - t.clientLeft
        }
    }
    ,
    i.prototype.on = function(t, e) {
        var i = t.split(".")
          , n = i[0]
          , o = i[1] || "__default"
          , r = this.handlers[o] = this.handlers[o] || {}
          , s = r[n] = r[n] || [];
        s.push(e),
        this.element.addEventListener(n, e)
    }
    ,
    i.prototype.outerHeight = function(e) {
        var i, n = this.innerHeight();
        return e && !t(this.element) && (i = window.getComputedStyle(this.element),
        n += parseInt(i.marginTop, 10),
        n += parseInt(i.marginBottom, 10)),
        n
    }
    ,
    i.prototype.outerWidth = function(e) {
        var i, n = this.innerWidth();
        return e && !t(this.element) && (i = window.getComputedStyle(this.element),
        n += parseInt(i.marginLeft, 10),
        n += parseInt(i.marginRight, 10)),
        n
    }
    ,
    i.prototype.scrollLeft = function() {
        var t = e(this.element);
        return t ? t.pageXOffset : this.element.scrollLeft
    }
    ,
    i.prototype.scrollTop = function() {
        var t = e(this.element);
        return t ? t.pageYOffset : this.element.scrollTop
    }
    ,
    i.extend = function() {
        function t(t, e) {
            if ("object" == typeof t && "object" == typeof e)
                for (var i in e)
                    e.hasOwnProperty(i) && (t[i] = e[i]);
            return t
        }
        for (var e = Array.prototype.slice.call(arguments), i = 1, n = e.length; n > i; i++)
            t(e[0], e[i]);
        return e[0]
    }
    ,
    i.inArray = function(t, e, i) {
        return null == e ? -1 : e.indexOf(t, i)
    }
    ,
    i.isEmptyObject = function(t) {
        for (var e in t)
            return !1;
        return !0
    }
    ,
    n.adapters.push({
        name: "noframework",
        Adapter: i
    }),
    n.Adapter = i
}(),
function(t) {
    function e() {
        var t = location.href;
        return hashtag = -1 !== t.indexOf("#prettyPhoto") ? decodeURI(t.substring(t.indexOf("#prettyPhoto") + 1, t.length)) : !1,
        hashtag && (hashtag = hashtag.replace(/<|>/g, "")),
        hashtag
    }
    function i() {
        "undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/")
    }
    function n() {
        -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto")
    }
    function o(t, e) {
        t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var i = "[\\?&]" + t + "=([^&#]*)"
          , n = new RegExp(i)
          , o = n.exec(e);
        return null == o ? "" : o[1]
    }
    t.prettyPhoto = {
        version: "3.1.6"
    },
    t.fn.prettyPhoto = function(r) {
        function s() {
            t(".pp_loaderIcon").hide(),
            projectedTop = scroll_pos.scrollTop + (C / 2 - y.containerHeight / 2),
            projectedTop < 0 && (projectedTop = 0),
            $ppt.fadeTo(settings.animation_speed, 1),
            $pp_pic_holder.find(".pp_content").animate({
                height: y.contentHeight,
                width: y.contentWidth
            }, settings.animation_speed),
            $pp_pic_holder.animate({
                top: projectedTop,
                left: E / 2 - y.containerWidth / 2 < 0 ? 0 : E / 2 - y.containerWidth / 2,
                width: y.containerWidth
            }, settings.animation_speed, function() {
                $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(y.height).width(y.width),
                $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed),
                isSet && "image" == p(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(),
                settings.allow_expand && (y.resized ? t("a.pp_expand,a.pp_contract").show() : t("a.pp_expand").hide()),
                !settings.autoplay_slideshow || T || v || t.prettyPhoto.startSlideshow(),
                settings.changepicturecallback(),
                v = !0
            }),
            m(),
            r.ajaxcallback()
        }
        function a(e) {
            $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"),
            $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function() {
                t(".pp_loaderIcon").show(),
                e()
            })
        }
        function l(e) {
            e > 1 ? t(".pp_nav").show() : t(".pp_nav").hide()
        }
        function u(t, e) {
            if (resized = !1,
            d(t, e),
            imageWidth = t,
            imageHeight = e,
            (_ > E || x > C) && doresize && settings.allow_resize && !k) {
                for (resized = !0,
                fitting = !1; !fitting; )
                    _ > E ? (imageWidth = E - 200,
                    imageHeight = e / t * imageWidth) : x > C ? (imageHeight = C - 200,
                    imageWidth = t / e * imageHeight) : fitting = !0,
                    x = imageHeight,
                    _ = imageWidth;
                (_ > E || x > C) && u(_, x),
                d(imageWidth, imageHeight)
            }
            return {
                width: Math.floor(imageWidth),
                height: Math.floor(imageHeight),
                containerHeight: Math.floor(x),
                containerWidth: Math.floor(_) + 2 * settings.horizontal_padding,
                contentHeight: Math.floor(w),
                contentWidth: Math.floor(b),
                resized: resized
            }
        }
        function d(e, i) {
            e = parseFloat(e),
            i = parseFloat(i),
            $pp_details = $pp_pic_holder.find(".pp_details"),
            $pp_details.width(e),
            detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")),
            $pp_details = $pp_details.clone().addClass(settings.theme).width(e).appendTo(t("body")).css({
                position: "absolute",
                top: -1e4
            }),
            detailsHeight += $pp_details.height(),
            detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight,
            $pp_details.remove(),
            $pp_title = $pp_pic_holder.find(".ppt"),
            $pp_title.width(e),
            titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")),
            $pp_title = $pp_title.clone().appendTo(t("body")).css({
                position: "absolute",
                top: -1e4
            }),
            titleHeight += $pp_title.height(),
            $pp_title.remove(),
            w = i + detailsHeight,
            b = e,
            x = w + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(),
            _ = e
        }
        function p(t) {
            return t.match(/youtube\.com\/watch/i) || t.match(/youtu\.be/i) ? "youtube" : t.match(/vimeo\.com/i) ? "vimeo" : t.match(/\b.mov\b/i) ? "quicktime" : t.match(/\b.swf\b/i) ? "flash" : t.match(/\biframe=true\b/i) ? "iframe" : t.match(/\bajax=true\b/i) ? "ajax" : t.match(/\bcustom=true\b/i) ? "custom" : "#" == t.substr(0, 1) ? "inline" : "image"
        }
        function c() {
            if (doresize && "undefined" != typeof $pp_pic_holder) {
                if (scroll_pos = h(),
                contentHeight = $pp_pic_holder.height(),
                contentwidth = $pp_pic_holder.width(),
                projectedTop = C / 2 + scroll_pos.scrollTop - contentHeight / 2,
                projectedTop < 0 && (projectedTop = 0),
                contentHeight > C)
                    return;
                $pp_pic_holder.css({
                    top: projectedTop,
                    left: E / 2 + scroll_pos.scrollLeft - contentwidth / 2
                })
            }
        }
        function h() {
            return self.pageYOffset ? {
                scrollTop: self.pageYOffset,
                scrollLeft: self.pageXOffset
            } : document.documentElement && document.documentElement.scrollTop ? {
                scrollTop: document.documentElement.scrollTop,
                scrollLeft: document.documentElement.scrollLeft
            } : document.body ? {
                scrollTop: document.body.scrollTop,
                scrollLeft: document.body.scrollLeft
            } : void 0
        }
        function f() {
            C = t(window).height(),
            E = t(window).width(),
            "undefined" != typeof $pp_overlay && $pp_overlay.height(t(document).height()).width(E)
        }
        function m() {
            isSet && settings.overlay_gallery && "image" == p(pp_images[set_position]) ? (itemWidth = 57,
            navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30,
            itemsPerPage = Math.floor((y.containerWidth - 100 - navWidth) / itemWidth),
            itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length,
            totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1,
            0 == totalPage ? (navWidth = 0,
            $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(),
            galleryWidth = itemsPerPage * itemWidth,
            fullGalleryWidth = pp_images.length * itemWidth,
            $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"),
            goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage,
            t.prettyPhoto.changeGalleryPage(goToPage),
            $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
        }
        function g(e) {
            if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))),
            settings.markup = settings.markup.replace("{pp_social}", ""),
            t("body").append(settings.markup),
            $pp_pic_holder = t(".pp_pic_holder"),
            $ppt = t(".ppt"),
            $pp_overlay = t("div.pp_overlay"),
            isSet && settings.overlay_gallery) {
                currentGalleryPage = 0,
                toInject = "";
                for (var i = 0; i < pp_images.length; i++)
                    pp_images[i].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "",
                    img_src = pp_images[i]) : (classname = "default",
                    img_src = ""),
                    toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
                toInject = settings.gallery_markup.replace(/{gallery}/g, toInject),
                $pp_pic_holder.find("#pp_full_res").after(toInject),
                $pp_gallery = t(".pp_pic_holder .pp_gallery"),
                $pp_gallery_li = $pp_gallery.find("li"),
                $pp_gallery.find(".pp_arrow_next").click(function() {
                    return t.prettyPhoto.changeGalleryPage("next"),
                    t.prettyPhoto.stopSlideshow(),
                    !1
                }),
                $pp_gallery.find(".pp_arrow_previous").click(function() {
                    return t.prettyPhoto.changeGalleryPage("previous"),
                    t.prettyPhoto.stopSlideshow(),
                    !1
                }),
                $pp_pic_holder.find(".pp_content").hover(function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
                }, function() {
                    $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
                }),
                itemWidth = 57,
                $pp_gallery_li.each(function(e) {
                    t(this).find("a").click(function() {
                        return t.prettyPhoto.changePage(e),
                        t.prettyPhoto.stopSlideshow(),
                        !1
                    })
                })
            }
            settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'),
            $pp_pic_holder.find(".pp_nav .pp_play").click(function() {
                return t.prettyPhoto.startSlideshow(),
                !1
            })),
            $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme),
            $pp_overlay.css({
                opacity: 0,
                height: t(document).height(),
                width: t(window).width()
            }).bind("click", function() {
                settings.modal || t.prettyPhoto.close()
            }),
            t("a.pp_close").bind("click", function() {
                return t.prettyPhoto.close(),
                !1
            }),
            settings.allow_expand && t("a.pp_expand").bind("click", function(e) {
                return t(this).hasClass("pp_expand") ? (t(this).removeClass("pp_expand").addClass("pp_contract"),
                doresize = !1) : (t(this).removeClass("pp_contract").addClass("pp_expand"),
                doresize = !0),
                a(function() {
                    t.prettyPhoto.open()
                }),
                !1
            }),
            $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function() {
                return t.prettyPhoto.changePage("previous"),
                t.prettyPhoto.stopSlideshow(),
                !1
            }),
            $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function() {
                return t.prettyPhoto.changePage("next"),
                t.prettyPhoto.stopSlideshow(),
                !1
            }),
            c()
        }
        r = jQuery.extend({
            hook: "rel",
            animation_speed: "fast",
            ajaxcallback: function() {},
            slideshow: 5e3,
            autoplay_slideshow: !1,
            opacity: .8,
            show_title: !0,
            allow_resize: !0,
            allow_expand: !0,
            default_width: 500,
            default_height: 344,
            counter_separator_label: "/",
            theme: "pp_default",
            horizontal_padding: 20,
            hideflash: !1,
            wmode: "opaque",
            autoplay: !0,
            modal: !1,
            deeplinking: !0,
            overlay_gallery: !0,
            overlay_gallery_max: 30,
            keyboard_shortcuts: !0,
            changepicturecallback: function() {},
            callback: function() {},
            ie6_fallback: !0,
            markup: '<div class="pp_pic_holder"> 						<div class="ppt">&nbsp;</div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>',
            gallery_markup: '<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>',
            image_markup: '<img id="fullResImage" src="{path}" />',
            flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
            quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
            iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
            inline_markup: '<div class="pp_inline">{content}</div>',
            custom_markup: "",
            social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
        }, r);
        var y, v, w, b, x, _, T, S = this, k = !1, C = t(window).height(), E = t(window).width();
        return doresize = !0,
        scroll_pos = h(),
        t(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function() {
            c(),
            f()
        }),
        r.keyboard_shortcuts && t(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function(e) {
            if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible"))
                switch (e.keyCode) {
                case 37:
                    t.prettyPhoto.changePage("previous"),
                    e.preventDefault();
                    break;
                case 39:
                    t.prettyPhoto.changePage("next"),
                    e.preventDefault();
                    break;
                case 27:
                    settings.modal || t.prettyPhoto.close(),
                    e.preventDefault()
                }
        }),
        t.prettyPhoto.initialize = function() {
            return settings = r,
            "pp_default" == settings.theme && (settings.horizontal_padding = 16),
            theRel = t(this).attr(settings.hook),
            galleryRegExp = /\[(?:.*)\]/,
            isSet = galleryRegExp.exec(theRel) ? !0 : !1,
            pp_images = isSet ? jQuery.map(S, function(e, i) {
                return -1 != t(e).attr(settings.hook).indexOf(theRel) ? t(e).attr("href") : void 0
            }) : t.makeArray(t(this).attr("href")),
            pp_titles = isSet ? jQuery.map(S, function(e, i) {
                return -1 != t(e).attr(settings.hook).indexOf(theRel) ? t(e).find("img").attr("alt") ? t(e).find("img").attr("alt") : "" : void 0
            }) : t.makeArray(t(this).find("img").attr("alt")),
            pp_descriptions = isSet ? jQuery.map(S, function(e, i) {
                return -1 != t(e).attr(settings.hook).indexOf(theRel) ? t(e).attr("title") ? t(e).attr("title") : "" : void 0
            }) : t.makeArray(t(this).attr("title")),
            pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1),
            set_position = jQuery.inArray(t(this).attr("href"), pp_images),
            rel_index = isSet ? set_position : t("a[" + settings.hook + "^='" + theRel + "']").index(t(this)),
            g(this),
            settings.allow_resize && t(window).bind("scroll.prettyphoto", function() {
                c()
            }),
            t.prettyPhoto.open(),
            !1
        }
        ,
        t.prettyPhoto.open = function(e) {
            return "undefined" == typeof settings && (settings = r,
            pp_images = t.makeArray(arguments[0]),
            pp_titles = t.makeArray(arguments[1] ? arguments[1] : ""),
            pp_descriptions = t.makeArray(arguments[2] ? arguments[2] : ""),
            isSet = pp_images.length > 1 ? !0 : !1,
            set_position = arguments[3] ? arguments[3] : 0,
            g(e.target)),
            settings.hideflash && t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"),
            l(t(pp_images).size()),
            t(".pp_loaderIcon").show(),
            settings.deeplinking && i(),
            settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)),
            $pp_pic_holder.find(".pp_social").html(facebook_like_link)),
            $ppt.is(":hidden") && $ppt.css("opacity", 0).show(),
            $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity),
            $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + t(pp_images).size()),
            "undefined" != typeof pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(),
            movie_width = parseFloat(o("width", pp_images[set_position])) ? o("width", pp_images[set_position]) : settings.default_width.toString(),
            movie_height = parseFloat(o("height", pp_images[set_position])) ? o("height", pp_images[set_position]) : settings.default_height.toString(),
            k = !1,
            -1 != movie_height.indexOf("%") && (movie_height = parseFloat(t(window).height() * parseFloat(movie_height) / 100 - 150),
            k = !0),
            -1 != movie_width.indexOf("%") && (movie_width = parseFloat(t(window).width() * parseFloat(movie_width) / 100 - 150),
            k = !0),
            $pp_pic_holder.fadeIn(function() {
                switch ($ppt.html(settings.show_title && "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? unescape(pp_titles[set_position]) : "&nbsp;"),
                imgPreloader = "",
                skipInjection = !1,
                p(pp_images[set_position])) {
                case "image":
                    imgPreloader = new Image,
                    nextImage = new Image,
                    isSet && set_position < t(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]),
                    prevImage = new Image,
                    isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]),
                    $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]),
                    imgPreloader.onload = function() {
                        y = u(imgPreloader.width, imgPreloader.height),
                        s()
                    }
                    ,
                    imgPreloader.onerror = function() {
                        alert("Image cannot be loaded. Make sure the path is correct and image exist."),
                        t.prettyPhoto.close()
                    }
                    ,
                    imgPreloader.src = pp_images[set_position];
                    break;
                case "youtube":
                    y = u(movie_width, movie_height),
                    movie_id = o("v", pp_images[set_position]),
                    "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"),
                    movie_id = movie_id[1],
                    movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))),
                    movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))),
                    movie = "http://www.youtube.com/embed/" + movie_id,
                    movie += o("rel", pp_images[set_position]) ? "?rel=" + o("rel", pp_images[set_position]) : "?rel=1",
                    settings.autoplay && (movie += "&autoplay=1"),
                    toInject = settings.iframe_markup.replace(/{width}/g, y.width).replace(/{height}/g, y.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
                    break;
                case "vimeo":
                    y = u(movie_width, movie_height),
                    movie_id = pp_images[set_position];
                    var e = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/
                      , i = movie_id.match(e);
                    movie = "http://player.vimeo.com/video/" + i[3] + "?title=0&amp;byline=0&amp;portrait=0",
                    settings.autoplay && (movie += "&autoplay=1;"),
                    vimeo_width = y.width + "/embed/?moog_width=" + y.width,
                    toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, y.height).replace(/{path}/g, movie);
                    break;
                case "quicktime":
                    y = u(movie_width, movie_height),
                    y.height += 15,
                    y.contentHeight += 15,
                    y.containerHeight += 15,
                    toInject = settings.quicktime_markup.replace(/{width}/g, y.width).replace(/{height}/g, y.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
                    break;
                case "flash":
                    y = u(movie_width, movie_height),
                    flash_vars = pp_images[set_position],
                    flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length),
                    filename = pp_images[set_position],
                    filename = filename.substring(0, filename.indexOf("?")),
                    toInject = settings.flash_markup.replace(/{width}/g, y.width).replace(/{height}/g, y.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
                    break;
                case "iframe":
                    y = u(movie_width, movie_height),
                    frame_url = pp_images[set_position],
                    frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1),
                    toInject = settings.iframe_markup.replace(/{width}/g, y.width).replace(/{height}/g, y.height).replace(/{path}/g, frame_url);
                    break;
                case "ajax":
                    doresize = !1,
                    y = u(movie_width, movie_height),
                    doresize = !0,
                    skipInjection = !0,
                    t.get(pp_images[set_position], function(t) {
                        toInject = settings.inline_markup.replace(/{content}/g, t),
                        $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject,
                        s()
                    });
                    break;
                case "custom":
                    y = u(movie_width, movie_height),
                    toInject = settings.custom_markup;
                    break;
                case "inline":
                    myClone = t(pp_images[set_position]).clone().append('<br clear="all" />').css({
                        width: settings.default_width
                    }).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(t("body")).show(),
                    doresize = !1,
                    y = u(t(myClone).width(), t(myClone).height()),
                    doresize = !0,
                    t(myClone).remove(),
                    toInject = settings.inline_markup.replace(/{content}/g, t(pp_images[set_position]).html())
                }
                imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject,
                s())
            }),
            !1
        }
        ,
        t.prettyPhoto.changePage = function(e) {
            currentGalleryPage = 0,
            "previous" == e ? (set_position--,
            set_position < 0 && (set_position = t(pp_images).size() - 1)) : "next" == e ? (set_position++,
            set_position > t(pp_images).size() - 1 && (set_position = 0)) : set_position = e,
            rel_index = set_position,
            doresize || (doresize = !0),
            settings.allow_expand && t(".pp_contract").removeClass("pp_contract").addClass("pp_expand"),
            a(function() {
                t.prettyPhoto.open()
            })
        }
        ,
        t.prettyPhoto.changeGalleryPage = function(t) {
            "next" == t ? (currentGalleryPage++,
            currentGalleryPage > totalPage && (currentGalleryPage = 0)) : "previous" == t ? (currentGalleryPage--,
            currentGalleryPage < 0 && (currentGalleryPage = totalPage)) : currentGalleryPage = t,
            slide_speed = "next" == t || "previous" == t ? settings.animation_speed : 0,
            slide_to = currentGalleryPage * itemsPerPage * itemWidth,
            $pp_gallery.find("ul").animate({
                left: -slide_to
            }, slide_speed)
        }
        ,
        t.prettyPhoto.startSlideshow = function() {
            "undefined" == typeof T ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function() {
                return t.prettyPhoto.stopSlideshow(),
                !1
            }),
            T = setInterval(t.prettyPhoto.startSlideshow, settings.slideshow)) : t.prettyPhoto.changePage("next")
        }
        ,
        t.prettyPhoto.stopSlideshow = function() {
            $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function() {
                return t.prettyPhoto.startSlideshow(),
                !1
            }),
            clearInterval(T),
            T = void 0
        }
        ,
        t.prettyPhoto.close = function() {
            $pp_overlay.is(":animated") || (t.prettyPhoto.stopSlideshow(),
            $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"),
            t("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function() {
                t(this).remove()
            }),
            $pp_overlay.fadeOut(settings.animation_speed, function() {
                settings.hideflash && t("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"),
                t(this).remove(),
                t(window).unbind("scroll.prettyphoto"),
                n(),
                settings.callback(),
                doresize = !0,
                v = !1,
                delete settings
            }))
        }
        ,
        !pp_alreadyInitialized && e() && (pp_alreadyInitialized = !0,
        hashIndex = e(),
        hashRel = hashIndex,
        hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1),
        hashRel = hashRel.substring(0, hashRel.indexOf("/")),
        setTimeout(function() {
            t("a[" + r.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
        }, 50)),
        this.unbind("click.prettyphoto").bind("click.prettyphoto", t.prettyPhoto.initialize)
    }
}(jQuery);
var pp_alreadyInitialized = !1;
!function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    "use strict";
    var e = window.Slick || {};
    e = function() {
        function e(e, n) {
            var o, r, s, a = this;
            if (a.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(e),
                appendDots: t(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(t, e) {
                    return '<button type="button" data-role="none">' + (e + 1) + "</button>"
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0
            },
            a.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            t.extend(a, a.initials),
            a.activeBreakpoint = null,
            a.animType = null,
            a.animProp = null,
            a.breakpoints = [],
            a.breakpointSettings = [],
            a.cssTransitions = !1,
            a.hidden = "hidden",
            a.paused = !1,
            a.positionProp = null,
            a.respondTo = null,
            a.rowCount = 1,
            a.shouldClick = !0,
            a.$slider = t(e),
            a.$slidesCache = null,
            a.transformType = null,
            a.transitionType = null,
            a.visibilityChange = "visibilitychange",
            a.windowWidth = 0,
            a.windowTimer = null,
            o = t(e).data("slick") || {},
            a.options = t.extend({}, a.defaults, o, n),
            a.currentSlide = a.options.initialSlide,
            a.originalSettings = a.options,
            r = a.options.responsive || null,
            r && r.length > -1) {
                a.respondTo = a.options.respondTo || "window";
                for (s in r)
                    r.hasOwnProperty(s) && (a.breakpoints.push(r[s].breakpoint),
                    a.breakpointSettings[r[s].breakpoint] = r[s].settings);
                a.breakpoints.sort(function(t, e) {
                    return a.options.mobileFirst === !0 ? t - e : e - t
                })
            }
            "undefined" != typeof document.mozHidden ? (a.hidden = "mozHidden",
            a.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (a.hidden = "webkitHidden",
            a.visibilityChange = "webkitvisibilitychange"),
            a.autoPlay = t.proxy(a.autoPlay, a),
            a.autoPlayClear = t.proxy(a.autoPlayClear, a),
            a.changeSlide = t.proxy(a.changeSlide, a),
            a.clickHandler = t.proxy(a.clickHandler, a),
            a.selectHandler = t.proxy(a.selectHandler, a),
            a.setPosition = t.proxy(a.setPosition, a),
            a.swipeHandler = t.proxy(a.swipeHandler, a),
            a.dragHandler = t.proxy(a.dragHandler, a),
            a.keyHandler = t.proxy(a.keyHandler, a),
            a.autoPlayIterator = t.proxy(a.autoPlayIterator, a),
            a.instanceUid = i++,
            a.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            a.init(!0),
            a.checkResponsive(!0)
        }
        var i = 0;
        return e
    }(),
    e.prototype.addSlide = e.prototype.slickAdd = function(e, i, n) {
        var o = this;
        if ("boolean" == typeof i)
            n = i,
            i = null;
        else if (0 > i || i >= o.slideCount)
            return !1;
        o.unload(),
        "number" == typeof i ? 0 === i && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : n ? t(e).insertBefore(o.$slides.eq(i)) : t(e).insertAfter(o.$slides.eq(i)) : n === !0 ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack),
        o.$slides = o.$slideTrack.children(this.options.slide),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        o.$slides.each(function(e, i) {
            t(i).attr("data-slick-index", e)
        }),
        o.$slidesCache = o.$slides,
        o.reinit()
    }
    ,
    e.prototype.animateHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({
                height: e
            }, t.options.speed)
        }
    }
    ,
    e.prototype.animateSlide = function(e, i) {
        var n = {}
          , o = this;
        o.animateHeight(),
        o.options.rtl === !0 && o.options.vertical === !1 && (e = -e),
        o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
            left: e
        }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
            top: e
        }, o.options.speed, o.options.easing, i) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft),
        t({
            animStart: o.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(t) {
                t = Math.ceil(t),
                o.options.vertical === !1 ? (n[o.animType] = "translate(" + t + "px, 0px)",
                o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + t + "px)",
                o.$slideTrack.css(n))
            },
            complete: function() {
                i && i.call()
            }
        })) : (o.applyTransition(),
        e = Math.ceil(e),
        n[o.animType] = o.options.vertical === !1 ? "translate3d(" + e + "px, 0px, 0px)" : "translate3d(0px," + e + "px, 0px)",
        o.$slideTrack.css(n),
        i && setTimeout(function() {
            o.disableTransition(),
            i.call()
        }, o.options.speed))
    }
    ,
    e.prototype.asNavFor = function(e) {
        var i = this
          , n = i.options.asNavFor;
        n && null !== n && (n = t(n).not(i.$slider)),
        null !== n && "object" == typeof n && n.each(function() {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        })
    }
    ,
    e.prototype.applyTransition = function(t) {
        var e = this
          , i = {};
        i[e.transitionType] = e.options.fade === !1 ? e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : "opacity " + e.options.speed + "ms " + e.options.cssEase,
        e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }
    ,
    e.prototype.autoPlay = function() {
        var t = this;
        t.autoPlayTimer && clearInterval(t.autoPlayTimer),
        t.slideCount > t.options.slidesToShow && t.paused !== !0 && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }
    ,
    e.prototype.autoPlayClear = function() {
        var t = this;
        t.autoPlayTimer && clearInterval(t.autoPlayTimer)
    }
    ,
    e.prototype.autoPlayIterator = function() {
        var t = this;
        t.options.infinite === !1 ? 1 === t.direction ? (t.currentSlide + 1 === t.slideCount - 1 && (t.direction = 0),
        t.slideHandler(t.currentSlide + t.options.slidesToScroll)) : (t.currentSlide - 1 === 0 && (t.direction = 1),
        t.slideHandler(t.currentSlide - t.options.slidesToScroll)) : t.slideHandler(t.currentSlide + t.options.slidesToScroll)
    }
    ,
    e.prototype.buildArrows = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow = t(e.options.prevArrow),
        e.$nextArrow = t(e.options.nextArrow),
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.appendTo(e.options.appendArrows),
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
        e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled"))
    }
    ,
    e.prototype.buildDots = function() {
        var e, i, n = this;
        if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
            for (i = '<ul class="' + n.options.dotsClass + '">',
            e = 0; e <= n.getDotCount(); e += 1)
                i += "<li>" + n.options.customPaging.call(this, n, e) + "</li>";
            i += "</ul>",
            n.$dots = t(i).appendTo(n.options.appendDots),
            n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }
    ,
    e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(":not(.slick-cloned)").addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.$slides.each(function(e, i) {
            t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
        }),
        e.$slidesCache = e.$slides,
        e.$slider.addClass("slick-slider"),
        e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
        e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),
        e.$slideTrack.css("opacity", 0),
        (e.options.centerMode === !0 || e.options.swipeToSlide === !0) && (e.options.slidesToScroll = 1),
        t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.options.accessibility === !0 && e.$list.prop("tabIndex", 0),
        e.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide : 0),
        e.options.draggable === !0 && e.$list.addClass("draggable")
    }
    ,
    e.prototype.buildRows = function() {
        var t, e, i, n, o, r, s, a = this;
        if (n = document.createDocumentFragment(),
        r = a.$slider.children(),
        a.options.rows > 1) {
            for (s = a.options.slidesPerRow * a.options.rows,
            o = Math.ceil(r.length / s),
            t = 0; o > t; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var u = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var d = t * s + (e * a.options.slidesPerRow + i);
                        r.get(d) && u.appendChild(r.get(d))
                    }
                    l.appendChild(u)
                }
                n.appendChild(l)
            }
            a.$slider.html(n),
            a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    e.prototype.checkResponsive = function(e) {
        var i, n, o, r = this, s = !1, a = r.$slider.width(), l = window.innerWidth || t(window).width();
        if ("window" === r.respondTo ? o = l : "slider" === r.respondTo ? o = a : "min" === r.respondTo && (o = Math.min(l, a)),
        r.originalSettings.responsive && r.originalSettings.responsive.length > -1 && null !== r.originalSettings.responsive) {
            n = null;
            for (i in r.breakpoints)
                r.breakpoints.hasOwnProperty(i) && (r.originalSettings.mobileFirst === !1 ? o < r.breakpoints[i] && (n = r.breakpoints[i]) : o > r.breakpoints[i] && (n = r.breakpoints[i]));
            null !== n ? null !== r.activeBreakpoint ? n !== r.activeBreakpoint && (r.activeBreakpoint = n,
            "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[n]),
            e === !0 && (r.currentSlide = r.options.initialSlide),
            r.refresh(e)),
            s = n) : (r.activeBreakpoint = n,
            "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[n]),
            e === !0 && (r.currentSlide = r.options.initialSlide),
            r.refresh(e)),
            s = n) : null !== r.activeBreakpoint && (r.activeBreakpoint = null,
            r.options = r.originalSettings,
            e === !0 && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            s = n),
            e || s === !1 || r.$slider.trigger("breakpoint", [r, s])
        }
    }
    ,
    e.prototype.changeSlide = function(e, i) {
        var n, o, r, s = this, a = t(e.target);
        switch (a.is("a") && e.preventDefault(),
        a.is("li") || (a = a.closest("li")),
        r = s.slideCount % s.options.slidesToScroll !== 0,
        n = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll,
        e.data.message) {
        case "previous":
            o = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n,
            s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, i);
            break;
        case "next":
            o = 0 === n ? s.options.slidesToScroll : n,
            s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, i);
            break;
        case "index":
            var l = 0 === e.data.index ? 0 : e.data.index || a.index() * s.options.slidesToScroll;
            s.slideHandler(s.checkNavigable(l), !1, i),
            a.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    e.prototype.checkNavigable = function(t) {
        var e, i, n = this;
        if (e = n.getNavigableIndexes(),
        i = 0,
        t > e[e.length - 1])
            t = e[e.length - 1];
        else
            for (var o in e) {
                if (t < e[o]) {
                    t = i;
                    break
                }
                i = e[o]
            }
        return t
    }
    ,
    e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide),
        e.options.pauseOnDotsHover === !0 && e.options.autoplay === !0 && t("li", e.$dots).off("mouseenter.slick", t.proxy(e.setPaused, e, !0)).off("mouseleave.slick", t.proxy(e.setPaused, e, !1))),
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        t(document).off(e.visibilityChange, e.visibility),
        e.$list.off("mouseenter.slick", t.proxy(e.setPaused, e, !0)),
        e.$list.off("mouseleave.slick", t.proxy(e.setPaused, e, !1)),
        e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler),
        e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler),
        t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
        t(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
        t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition),
        t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    e.prototype.cleanUpRows = function() {
        var t, e = this;
        e.options.rows > 1 && (t = e.$slides.children().children(),
        t.removeAttr("style"),
        e.$slider.html(t))
    }
    ,
    e.prototype.clickHandler = function(t) {
        var e = this;
        e.shouldClick === !1 && (t.stopImmediatePropagation(),
        t.stopPropagation(),
        t.preventDefault())
    }
    ,
    e.prototype.destroy = function(e) {
        var i = this;
        i.autoPlayClear(),
        i.touchObject = {},
        i.cleanUpEvents(),
        t(".slick-cloned", i.$slider).detach(),
        i.$dots && i.$dots.remove(),
        i.$prevArrow && "object" != typeof i.options.prevArrow && i.$prevArrow.remove(),
        i.$nextArrow && "object" != typeof i.options.nextArrow && i.$nextArrow.remove(),
        i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            t(this).attr("style", t(this).data("originalStyling"))
        }),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slideTrack.detach(),
        i.$list.detach(),
        i.$slider.append(i.$slides)),
        i.cleanUpRows(),
        i.$slider.removeClass("slick-slider"),
        i.$slider.removeClass("slick-initialized"),
        i.unslicked = !0,
        e || i.$slider.trigger("destroy", [i])
    }
    ,
    e.prototype.disableTransition = function(t) {
        var e = this
          , i = {};
        i[e.transitionType] = "",
        e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }
    ,
    e.prototype.fadeSlide = function(t, e) {
        var i = this;
        i.cssTransitions === !1 ? (i.$slides.eq(t).css({
            zIndex: 1e3
        }),
        i.$slides.eq(t).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t),
        i.$slides.eq(t).css({
            opacity: 1,
            zIndex: 1e3
        }),
        e && setTimeout(function() {
            i.disableTransition(t),
            e.call()
        }, i.options.speed))
    }
    ,
    e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
        var e = this;
        null !== t && (e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(t).appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        var t = this;
        return t.currentSlide
    }
    ,
    e.prototype.getDotCount = function() {
        var t = this
          , e = 0
          , i = 0
          , n = 0;
        if (t.options.infinite === !0)
            for (; e < t.slideCount; )
                ++n,
                e = i + t.options.slidesToShow,
                i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (t.options.centerMode === !0)
            n = t.slideCount;
        else
            for (; e < t.slideCount; )
                ++n,
                e = i + t.options.slidesToShow,
                i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return n - 1
    }
    ,
    e.prototype.getLeft = function(t) {
        var e, i, n, o = this, r = 0;
        return o.slideOffset = 0,
        i = o.$slides.first().outerHeight(),
        o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1,
        r = i * o.options.slidesToShow * -1),
        o.slideCount % o.options.slidesToScroll !== 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1,
        r = (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1,
        r = o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth,
        r = (t + o.options.slidesToShow - o.slideCount) * i),
        o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0,
        r = 0),
        o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0,
        o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)),
        e = o.options.vertical === !1 ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + r,
        o.options.variableWidth === !0 && (n = o.$slideTrack.children(".slick-slide").eq(o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? t : t + o.options.slidesToShow),
        e = n[0] ? -1 * n[0].offsetLeft : 0,
        o.options.centerMode === !0 && (n = o.$slideTrack.children(".slick-slide").eq(o.options.infinite === !1 ? t : t + o.options.slidesToShow + 1),
        e = n[0] ? -1 * n[0].offsetLeft : 0,
        e += (o.$list.width() - n.outerWidth()) / 2)),
        e
    }
    ,
    e.prototype.getOption = e.prototype.slickGetOption = function(t) {
        var e = this;
        return e.options[t]
    }
    ,
    e.prototype.getNavigableIndexes = function() {
        var t, e = this, i = 0, n = 0, o = [];
        for (e.options.infinite === !1 ? t = e.slideCount : (i = -1 * e.options.slidesToScroll,
        n = -1 * e.options.slidesToScroll,
        t = 2 * e.slideCount); t > i; )
            o.push(i),
            i = n + e.options.slidesToScroll,
            n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return o
    }
    ,
    e.prototype.getSlick = function() {
        return this
    }
    ,
    e.prototype.getSlideCount = function() {
        var e, i, n, o = this;
        return n = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0,
        o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function(e, r) {
            return r.offsetLeft - n + t(r).outerWidth() / 2 > -1 * o.swipeLeft ? (i = r,
            !1) : void 0
        }),
        e = Math.abs(t(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }
    ,
    e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
        var i = this;
        i.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, e)
    }
    ,
    e.prototype.init = function(e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"),
        i.buildRows(),
        i.buildOut(),
        i.setProps(),
        i.startLoad(),
        i.loadSlider(),
        i.initializeEvents(),
        i.updateArrows(),
        i.updateDots()),
        e && i.$slider.trigger("init", [i])
    }
    ,
    e.prototype.initArrowEvents = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.on("click.slick", {
            message: "previous"
        }, t.changeSlide),
        t.$nextArrow.on("click.slick", {
            message: "next"
        }, t.changeSlide))
    }
    ,
    e.prototype.initDotEvents = function() {
        var e = this;
        e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide),
        e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.options.autoplay === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.setPaused, e, !0)).on("mouseleave.slick", t.proxy(e.setPaused, e, !1))
    }
    ,
    e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(),
        e.initDotEvents(),
        e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler),
        e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler),
        e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("click.slick", e.clickHandler),
        t(document).on(e.visibilityChange, t.proxy(e.visibility, e)),
        e.$list.on("mouseenter.slick", t.proxy(e.setPaused, e, !0)),
        e.$list.on("mouseleave.slick", t.proxy(e.setPaused, e, !1)),
        e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler),
        e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
        t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)),
        t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)),
        t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    e.prototype.initUI = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(),
        t.$nextArrow.show()),
        t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show(),
        t.options.autoplay === !0 && t.autoPlay()
    }
    ,
    e.prototype.keyHandler = function(t) {
        var e = this;
        37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    e.prototype.lazyLoad = function() {
        function e(e) {
            t("img[data-lazy]", e).each(function() {
                var e = t(this)
                  , i = t(this).attr("data-lazy")
                  , n = document.createElement("img");
                n.onload = function() {
                    e.animate({
                        opacity: 1
                    }, 200)
                }
                ,
                n.src = i,
                e.css({
                    opacity: 0
                }).attr("src", i).removeAttr("data-lazy").removeClass("slick-loading")
            })
        }
        var i, n, o, r, s = this;
        s.options.centerMode === !0 ? s.options.infinite === !0 ? (o = s.currentSlide + (s.options.slidesToShow / 2 + 1),
        r = o + s.options.slidesToShow + 2) : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)),
        r = 2 + (s.options.slidesToShow / 2 + 1) + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide,
        r = o + s.options.slidesToShow,
        s.options.fade === !0 && (o > 0 && o--,
        r <= s.slideCount && r++)),
        i = s.$slider.find(".slick-slide").slice(o, r),
        e(i),
        s.slideCount <= s.options.slidesToShow ? (n = s.$slider.find(".slick-slide"),
        e(n)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (n = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow),
        e(n)) : 0 === s.currentSlide && (n = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow),
        e(n))
    }
    ,
    e.prototype.loadSlider = function() {
        var t = this;
        t.setPosition(),
        t.$slideTrack.css({
            opacity: 1
        }),
        t.$slider.removeClass("slick-loading"),
        t.initUI(),
        "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }
    ,
    e.prototype.next = e.prototype.slickNext = function() {
        var t = this;
        t.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    e.prototype.orientationChange = function() {
        var t = this;
        t.checkResponsive(),
        t.setPosition()
    }
    ,
    e.prototype.pause = e.prototype.slickPause = function() {
        var t = this;
        t.autoPlayClear(),
        t.paused = !0
    }
    ,
    e.prototype.play = e.prototype.slickPlay = function() {
        var t = this;
        t.paused = !1,
        t.autoPlay()
    }
    ,
    e.prototype.postSlide = function(t) {
        var e = this;
        e.$slider.trigger("afterChange", [e, t]),
        e.animating = !1,
        e.setPosition(),
        e.swipeLeft = null,
        e.options.autoplay === !0 && e.paused === !1 && e.autoPlay()
    }
    ,
    e.prototype.prev = e.prototype.slickPrev = function() {
        var t = this;
        t.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    e.prototype.preventDefault = function(t) {
        t.preventDefault()
    }
    ,
    e.prototype.progressiveLazyLoad = function() {
        var e, i, n = this;
        e = t("img[data-lazy]", n.$slider).length,
        e > 0 && (i = t("img[data-lazy]", n.$slider).first(),
        i.attr("src", i.attr("data-lazy")).removeClass("slick-loading").load(function() {
            i.removeAttr("data-lazy"),
            n.progressiveLazyLoad(),
            n.options.adaptiveHeight === !0 && n.setPosition()
        }).error(function() {
            i.removeAttr("data-lazy"),
            n.progressiveLazyLoad()
        }))
    }
    ,
    e.prototype.refresh = function(e) {
        var i = this
          , n = i.currentSlide;
        i.destroy(!0),
        t.extend(i, i.initials),
        i.init(),
        e || i.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1)
    }
    ,
    e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses(0),
        e.setPosition(),
        e.$slider.trigger("reInit", [e])
    }
    ,
    e.prototype.resize = function() {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
        e.windowDelay = window.setTimeout(function() {
            e.windowWidth = t(window).width(),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }, 50))
    }
    ,
    e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
        var n = this;
        return "boolean" == typeof t ? (e = t,
        t = e === !0 ? 0 : n.slideCount - 1) : t = e === !0 ? --t : t,
        n.slideCount < 1 || 0 > t || t > n.slideCount - 1 ? !1 : (n.unload(),
        i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(),
        n.$slides = n.$slideTrack.children(this.options.slide),
        n.$slideTrack.children(this.options.slide).detach(),
        n.$slideTrack.append(n.$slides),
        n.$slidesCache = n.$slides,
        void n.reinit())
    }
    ,
    e.prototype.setCSS = function(t) {
        var e, i, n = this, o = {};
        n.options.rtl === !0 && (t = -t),
        e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px",
        i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px",
        o[n.positionProp] = t,
        n.transformsEnabled === !1 ? n.$slideTrack.css(o) : (o = {},
        n.cssTransitions === !1 ? (o[n.animType] = "translate(" + e + ", " + i + ")",
        n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)",
        n.$slideTrack.css(o)))
    }
    ,
    e.prototype.setDimensions = function() {
        var t = this;
        t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow),
        t.options.centerMode === !0 && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })),
        t.listWidth = t.$list.width(),
        t.listHeight = t.$list.height(),
        t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow),
        t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth),
        t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }
    ,
    e.prototype.setFade = function() {
        var e, i = this;
        i.$slides.each(function(n, o) {
            e = i.slideWidth * n * -1,
            t(o).css(i.options.rtl === !0 ? {
                position: "relative",
                right: e,
                top: 0,
                zIndex: 800,
                opacity: 0
            } : {
                position: "relative",
                left: e,
                top: 0,
                zIndex: 800,
                opacity: 0
            })
        }),
        i.$slides.eq(i.currentSlide).css({
            zIndex: 900,
            opacity: 1
        })
    }
    ,
    e.prototype.setHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }
    ,
    e.prototype.setOption = e.prototype.slickSetOption = function(t, e, i) {
        var n = this;
        n.options[t] = e,
        i === !0 && (n.unload(),
        n.reinit())
    }
    ,
    e.prototype.setPosition = function() {
        var t = this;
        t.setDimensions(),
        t.setHeight(),
        t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(),
        t.$slider.trigger("setPosition", [t])
    }
    ,
    e.prototype.setProps = function() {
        var t = this
          , e = document.body.style;
        t.positionProp = t.options.vertical === !0 ? "top" : "left",
        "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"),
        (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && t.options.useCSS === !0 && (t.cssTransitions = !0),
        void 0 !== e.OTransform && (t.animType = "OTransform",
        t.transformType = "-o-transform",
        t.transitionType = "OTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
        void 0 !== e.MozTransform && (t.animType = "MozTransform",
        t.transformType = "-moz-transform",
        t.transitionType = "MozTransition",
        void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)),
        void 0 !== e.webkitTransform && (t.animType = "webkitTransform",
        t.transformType = "-webkit-transform",
        t.transitionType = "webkitTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
        void 0 !== e.msTransform && (t.animType = "msTransform",
        t.transformType = "-ms-transform",
        t.transitionType = "msTransition",
        void 0 === e.msTransform && (t.animType = !1)),
        void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform",
        t.transformType = "transform",
        t.transitionType = "transition"),
        t.transformsEnabled = null !== t.animType && t.animType !== !1
    }
    ,
    e.prototype.setSlideClasses = function(t) {
        var e, i, n, o, r = this;
        r.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true").removeClass("slick-center"),
        i = r.$slider.find(".slick-slide"),
        r.options.centerMode === !0 ? (e = Math.floor(r.options.slidesToShow / 2),
        r.options.infinite === !0 && (t >= e && t <= r.slideCount - 1 - e ? r.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = r.options.slidesToShow + t,
        i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
        0 === t ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : t === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")),
        r.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(t, t + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow,
        n = r.options.infinite === !0 ? r.options.slidesToShow + t : t,
        r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - t < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")),
        "ondemand" === r.options.lazyLoad && r.lazyLoad()
    }
    ,
    e.prototype.setupInfinite = function() {
        var e, i, n, o = this;
        if (o.options.fade === !0 && (o.options.centerMode = !1),
        o.options.infinite === !0 && o.options.fade === !1 && (i = null,
        o.slideCount > o.options.slidesToShow)) {
            for (n = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow,
            e = o.slideCount; e > o.slideCount - n; e -= 1)
                i = e - 1,
                t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (e = 0; n > e; e += 1)
                i = e,
                t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                t(this).attr("id", "")
            })
        }
    }
    ,
    e.prototype.setPaused = function(t) {
        var e = this;
        e.options.autoplay === !0 && e.options.pauseOnHover === !0 && (e.paused = t,
        t ? e.autoPlayClear() : e.autoPlay())
    }
    ,
    e.prototype.selectHandler = function(e) {
        var i = this
          , n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide")
          , o = parseInt(n.attr("data-slick-index"));
        return o || (o = 0),
        i.slideCount <= i.options.slidesToShow ? (i.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true"),
        i.$slides.eq(o).addClass("slick-active").attr("aria-hidden", "false"),
        i.options.centerMode === !0 && (i.$slider.find(".slick-slide").removeClass("slick-center"),
        i.$slides.eq(o).addClass("slick-center")),
        void i.asNavFor(o)) : void i.slideHandler(o)
    }
    ,
    e.prototype.slideHandler = function(t, e, i) {
        var n, o, r, s, a = null, l = this;
        return e = e || !1,
        l.animating === !0 && l.options.waitForAnimate === !0 || l.options.fade === !0 && l.currentSlide === t || l.slideCount <= l.options.slidesToShow ? void 0 : (e === !1 && l.asNavFor(t),
        n = t,
        a = l.getLeft(n),
        s = l.getLeft(l.currentSlide),
        l.currentLeft = null === l.swipeLeft ? s : l.swipeLeft,
        l.options.infinite === !1 && l.options.centerMode === !1 && (0 > t || t > l.getDotCount() * l.options.slidesToScroll) ? void (l.options.fade === !1 && (n = l.currentSlide,
        i !== !0 ? l.animateSlide(s, function() {
            l.postSlide(n)
        }) : l.postSlide(n))) : l.options.infinite === !1 && l.options.centerMode === !0 && (0 > t || t > l.slideCount - l.options.slidesToScroll) ? void (l.options.fade === !1 && (n = l.currentSlide,
        i !== !0 ? l.animateSlide(s, function() {
            l.postSlide(n)
        }) : l.postSlide(n))) : (l.options.autoplay === !0 && clearInterval(l.autoPlayTimer),
        o = 0 > n ? l.slideCount % l.options.slidesToScroll !== 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + n : n >= l.slideCount ? l.slideCount % l.options.slidesToScroll !== 0 ? 0 : n - l.slideCount : n,
        l.animating = !0,
        l.$slider.trigger("beforeChange", [l, l.currentSlide, o]),
        r = l.currentSlide,
        l.currentSlide = o,
        l.setSlideClasses(l.currentSlide),
        l.updateDots(),
        l.updateArrows(),
        l.options.fade === !0 ? (i !== !0 ? l.fadeSlide(o, function() {
            l.postSlide(o)
        }) : l.postSlide(o),
        void l.animateHeight()) : void (i !== !0 ? l.animateSlide(a, function() {
            l.postSlide(o)
        }) : l.postSlide(o))))
    }
    ,
    e.prototype.startLoad = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(),
        t.$nextArrow.hide()),
        t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(),
        t.$slider.addClass("slick-loading")
    }
    ,
    e.prototype.swipeDirection = function() {
        var t, e, i, n, o = this;
        return t = o.touchObject.startX - o.touchObject.curX,
        e = o.touchObject.startY - o.touchObject.curY,
        i = Math.atan2(e, t),
        n = Math.round(180 * i / Math.PI),
        0 > n && (n = 360 - Math.abs(n)),
        45 >= n && n >= 0 ? o.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? o.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? n >= 35 && 135 >= n ? "left" : "right" : "vertical"
    }
    ,
    e.prototype.swipeEnd = function(t) {
        var e, i = this;
        if (i.dragging = !1,
        i.shouldClick = i.touchObject.swipeLength > 10 ? !1 : !0,
        void 0 === i.touchObject.curX)
            return !1;
        if (i.touchObject.edgeHit === !0 && i.$slider.trigger("edge", [i, i.swipeDirection()]),
        i.touchObject.swipeLength >= i.touchObject.minSwipe)
            switch (i.swipeDirection()) {
            case "left":
                e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(),
                i.slideHandler(e),
                i.currentDirection = 0,
                i.touchObject = {},
                i.$slider.trigger("swipe", [i, "left"]);
                break;
            case "right":
                e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(),
                i.slideHandler(e),
                i.currentDirection = 1,
                i.touchObject = {},
                i.$slider.trigger("swipe", [i, "right"])
            }
        else
            i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide),
            i.touchObject = {})
    }
    ,
    e.prototype.swipeHandler = function(t) {
        var e = this;
        if (!(e.options.swipe === !1 || "ontouchend"in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== t.type.indexOf("mouse")))
            switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1,
            e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
            e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
            t.data.action) {
            case "start":
                e.swipeStart(t);
                break;
            case "move":
                e.swipeMove(t);
                break;
            case "end":
                e.swipeEnd(t)
            }
    }
    ,
    e.prototype.swipeMove = function(t) {
        var e, i, n, o, r, s = this;
        return r = void 0 !== t.originalEvent ? t.originalEvent.touches : null,
        !s.dragging || r && 1 !== r.length ? !1 : (e = s.getLeft(s.currentSlide),
        s.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX,
        s.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY,
        s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))),
        s.options.verticalSwiping === !0 && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))),
        i = s.swipeDirection(),
        "vertical" !== i ? (void 0 !== t.originalEvent && s.touchObject.swipeLength > 4 && t.preventDefault(),
        o = (s.options.rtl === !1 ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1),
        s.options.verticalSwiping === !0 && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1),
        n = s.touchObject.swipeLength,
        s.touchObject.edgeHit = !1,
        s.options.infinite === !1 && (0 === s.currentSlide && "right" === i || s.currentSlide >= s.getDotCount() && "left" === i) && (n = s.touchObject.swipeLength * s.options.edgeFriction,
        s.touchObject.edgeHit = !0),
        s.swipeLeft = s.options.vertical === !1 ? e + n * o : e + n * (s.$list.height() / s.listWidth) * o,
        s.options.verticalSwiping === !0 && (s.swipeLeft = e + n * o),
        s.options.fade === !0 || s.options.touchMove === !1 ? !1 : s.animating === !0 ? (s.swipeLeft = null,
        !1) : void s.setCSS(s.swipeLeft)) : void 0)
    }
    ,
    e.prototype.swipeStart = function(t) {
        var e, i = this;
        return 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {},
        !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]),
        i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX,
        i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY,
        void (i.dragging = !0))
    }
    ,
    e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var t = this;
        null !== t.$slidesCache && (t.unload(),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slidesCache.appendTo(t.$slideTrack),
        t.reinit())
    }
    ,
    e.prototype.unload = function() {
        var e = this;
        t(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && "object" != typeof e.options.prevArrow && e.$prevArrow.remove(),
        e.$nextArrow && "object" != typeof e.options.nextArrow && e.$nextArrow.remove(),
        e.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden", "true").css("width", "")
    }
    ,
    e.prototype.unslick = function(t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]),
        e.destroy()
    }
    ,
    e.prototype.updateArrows = function() {
        var t, e = this;
        t = Math.floor(e.options.slidesToShow / 2),
        e.options.arrows === !0 && e.options.infinite !== !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.removeClass("slick-disabled"),
        e.$nextArrow.removeClass("slick-disabled"),
        0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled"),
        e.$nextArrow.removeClass("slick-disabled")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled"),
        e.$prevArrow.removeClass("slick-disabled")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled"),
        e.$prevArrow.removeClass("slick-disabled")))
    }
    ,
    e.prototype.updateDots = function() {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"),
        t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }
    ,
    e.prototype.visibility = function() {
        var t = this;
        document[t.hidden] ? (t.paused = !0,
        t.autoPlayClear()) : t.options.autoplay === !0 && (t.paused = !1,
        t.autoPlay())
    }
    ,
    t.fn.slick = function() {
        var t, i = this, n = arguments[0], o = Array.prototype.slice.call(arguments, 1), r = i.length, s = 0;
        for (s; r > s; s++)
            if ("object" == typeof n || "undefined" == typeof n ? i[s].slick = new e(i[s],n) : t = i[s].slick[n].apply(i[s].slick, o),
            "undefined" != typeof t)
                return t;
        return i
    }
}),
function(t, e, i) {
    "use strict";
    t.Calendario = function(e, i) {
        this.$el = t(i),
        this._init(e)
    }
    ,
    t.Calendario.defaults = {
        weeks: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        weekabbrs: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthabbrs: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        displayWeekAbbr: !1,
        displayMonthAbbr: !1,
        startIn: 1,
        events: "click",
        fillEmpty: !0,
        feedParser: "./feed/",
        zone: "00:00",
        checkUpdate: !0
    },
    t.Calendario.prototype = {
        _init: function(e) {
            this.VERSION = "3.2.0",
            this.UNIQUE = "%{unique}%",
            this.options = t.extend(!0, {}, t.Calendario.defaults, e),
            this.today = new Date,
            this.month = isNaN(this.options.month) || null === this.options.month ? this.today.getMonth() : this.options.month - 1,
            this.year = isNaN(this.options.year) || null === this.options.year ? this.today.getFullYear() : this.options.year,
            this.caldata = this._processCaldata(this.options.caldata),
            parseFloat(t().jquery) >= 1.9 && -1 != this.options.events.indexOf("hover") && this.logError("'hover' psuedo-name is not supported in jQuery 1.9+. Use 'mouseenter' 'mouseleave' events instead."),
            this.options.events = this.options.events.split(","),
            this.options.zone = "+" != this.options.zone.charAt(0) && "-" != this.options.zone.charAt(0) ? "+" + this.options.zone : this.options.zone,
            this._generateTemplate(!0),
            this._initEvents()
        },
        _processCaldataObj: function(e, n) {
            if ("object" != typeof e && (e = {
                content: e,
                startTime: "00:00",
                endTime: "23:59",
                allDay: !0
            }),
            e.content || this.logError("Content is missing in date " + n),
            e.startTime && !e.endTime && (e.endTime = parseInt(e.startTime.split(":")[0]) + 1 + ":" + e.startTime.split(":")[1]),
            e.startTime || e.endTime || (e = t.extend({}, e, {
                startTime: "00:00",
                endTime: "23:59",
                allDay: !0
            })),
            e.startTime && e.endTime && e.allDay === i && (e.allDay = !1),
            /^\d{2}-DD-\d{4}/.test(n) || /^\d{2}-DD-YYYY/.test(n)) {
                var o, r = /^(\d{2})-DD-(\d{4})/.exec(n) || /^(\d{2})-DD-YYYY/.exec(n);
                3 == r.length ? o = new Date(r[2],r[1],0) : 2 == r.length && (o = new Date(this.year,r[1],0)),
                e.startDate || (e.startDate = 1),
                e.endDate || 1 == o.getDate() || (e.endDate = o.getDate()),
                e.endDate || 1 != o.getDate() || 3 != r.length || (e.endDate = o.getDate())
            }
            return e
        },
        _processCaldata: function(e) {
            var i = this;
            return e = e || {},
            t.each(e, function(n, o) {
                /^\d{2}-\d{2}-\d{4}/.test(n) || /^\d{2}-\d{2}-YYYY/.test(n) || /^\d{2}-DD-YYYY/.test(n) || /^MM-\d{2}-YYYY/.test(n) || /^\d{2}-DD-YYYY/.test(n) || /^MM-\d{2}-\d{4}/.test(n) || /^\d{2}-DD-\d{4}/.test(n) || "TODAY" == n || i.logError(n + " is an Invalid Date. Date should not contain spaces, should be separated by '-' and should be in the format 'MM-DD-YYYY'. That ain't that difficult!"),
                Array.isArray(o) ? (t.each(o, function(t, e) {
                    o[t] = i._processCaldataObj(e, n)
                }),
                e[n] = o) : e[n] = i._processCaldataObj(o, n)
            }),
            e
        },
        _propDate: function(t, e) {
            var i = t.index()
              , n = {
                allDay: [],
                content: [],
                endTime: [],
                startTime: []
            }
              , o = {
                day: t.children("span.fc-date").text(),
                month: this.month + 1,
                monthname: this.options.displayMonthAbbr ? this.options.monthabbrs[this.month] : this.options.months[this.month],
                year: this.year,
                weekday: i + this.options.startIn,
                weekdayname: this.options.weeks[6 == i ? 0 : i + this.options.startIn]
            };
            o.day && this.options[e](t, n, o)
        },
        _initEvents: function() {
            for (var e = this, n = [], o = [], r = 0; r < e.options.events.length; r++)
                n[r] = e.options.events[r].toLowerCase().trim(),
                o[r] = "onDay" + n[r].charAt(0).toUpperCase() + n[r].slice(1),
                this.options[o[r]] === i && (this.options[o[r]] = function(t, e, i) {
                    return !1
                }
                ),
                this.$el.on(n[r] + ".calendario", "div.fc-row > div", function(i) {
                    ("mouseenter" == i.type || "mouseleave" == i.type) && (i.type = -1 == t.inArray(i.type, n) ? "hover" : i.type),
                    e._propDate(t(this), o[t.inArray(i.type, n)])
                });
            this.$el.delay(new Date(this.today.getFullYear(),this.today.getMonth(),this.today.getDate() + 1,0,0,0) - (new Date).getTime()).queue(function() {
                e.today = new Date,
                (e.today.getMonth() == e.month || e.today.getMonth() + 1 == e.month) && e._generateTemplate(!0),
                e.$el.trigger(t.Event("newday.calendar.calendario"))
            })
        },
        _generateTemplate: function(e, i) {
            var n, o = this._getHead(), r = this._getBody();
            switch (this.rowTotal) {
            case 4:
                n = "fc-four-rows";
                break;
            case 5:
                n = "fc-five-rows";
                break;
            case 6:
                n = "fc-six-rows"
            }
            this.$cal = t('<div class="fc-calendar ' + n + '">').append(o, r),
            this.$el.find("div.fc-calendar").remove().end().append(this.$cal),
            this.$el.find(".fc-emptydate").parent().css({
                background: "transparent",
                cursor: "default"
            }),
            e || this.$el.trigger(t.Event("shown.calendario")),
            i && i.call()
        },
        _getHead: function() {
            for (var t = '<div class="fc-head">', e = 0; 6 >= e; e++) {
                var i = e + this.options.startIn
                  , n = i > 6 ? i - 6 - 1 : i;
                t += "<div>" + (this.options.displayWeekAbbr ? this.options.weekabbrs[n] : this.options.weeks[n]) + "</div>"
            }
            return t + "</div>"
        },
        _parseDataToDay: function(t, e, i) {
            var n = "";
            if (i) {
                Array.isArray(t) || (t = [t]);
                for (var o = 0; o < t.length; o++)
                    1 != this.month && e >= t[o].startDate && e <= t[o].endDate ? n += this._wrapDay(t[o], e, !0) : 1 == this.month && e >= t[o].startDate && (t[o].endDate && e <= t[o].endDate ? n += this._wrapDay(t[o], e, !0) : t[o].endDate || (n += this._wrapDay(t[o], e, !0)))
            } else
                n = Array.isArray(t) ? this._convertDayArray(t, e) : this._wrapDay(t, e, !0);
            return n
        },
        _toDateTime: function(t, e, i) {
            var n = parseInt(this.options.zone.split(":")[0])
              , o = parseInt(this.options.zone.charAt(0) + this.options.zone.split(":")[1])
              , r = parseInt(t.split(":")[0]) - n
              , s = parseInt(t.split(":")[1]) - o
              , a = new Date(Date.UTC(this.year, this.month, e, r, s, 0, 0));
            if (i) {
                var l = parseInt(i.split(":")[0]) - n
                  , u = parseInt(i.split(":")[1]) - o;
                a.getTime() - new Date(Date.UTC(this.year, this.month, e, l, u, 0, 0)).getTime() < 0 && (a = new Date(Date.UTC(this.year, this.month, e + 1, r, s, 0, 0)))
            }
            return a.toISOString()
        },
        _timeHtml: function(t, e) {
            var i = t.content;
            return i += '<time class="fc-allday" datetime="' + t.allDay + '"></time>',
            i += '<time class="fc-starttime" datetime="' + this._toDateTime(t.startTime, e) + '">' + t.startTime + "</time>",
            i += '<time class="fc-endtime" datetime="' + this._toDateTime(t.endTime, e, t.startTime) + '">' + t.endTime + "</time>"
        },
        _wrapDay: function(t, e, i) {
            return e ? i ? '<div class="fc-calendar-event">' + this._timeHtml(t, e) + "</div>" : this._timeHtml(t, e) : '<div class="fc-calendar-event">' + t + "</div>"
        },
        _convertDayArray: function(t, e) {
            for (var i = [], n = 0; n < t.length; n++)
                i[n] = this._wrapDay(t[n], e, !1);
            return this._wrapDay(i.join('</div><div class="fc-calendar-event">'))
        },
        _getBody: function() {
            var t = new Date(this.year,this.month + 1,0)
              , e = t.getDate()
              , i = new Date(this.year,t.getMonth(),1)
              , n = new Date(this.year,this.month,0).getDate();
            this.startingDay = i.getDay();
            for (var o = '<div class="fc-body"><div class="fc-row">', r = 1, s = 0; 7 > s; s++) {
                for (var a = 0; 6 >= a; a++) {
                    var l = this.startingDay - this.options.startIn
                      , u = 0 > l ? 6 + l + 1 : l
                      , d = ""
                      , p = this.month === this.today.getMonth() && this.year === this.today.getFullYear() && r === this.today.getDate()
                      , c = this.year < this.today.getFullYear() || this.month < this.today.getMonth() && this.year === this.today.getFullYear() || this.month === this.today.getMonth() && this.year === this.today.getFullYear() && r < this.today.getDate()
                      , h = "";
                    if (this.options.fillEmpty && (u > a || s > 0) && (r > e ? (d = '<span class="fc-date fc-emptydate">' + (r - e) + '</span><span class="fc-weekday">',
                    ++r) : 1 == r && (d = '<span class="fc-date fc-emptydate">' + (n - u + 1) + '</span><span class="fc-weekday">',
                    ++n),
                    d += this.options.weekabbrs[a + this.options.startIn > 6 ? a + this.options.startIn - 6 - 1 : a + this.options.startIn] + "</span>"),
                    e >= r && (s > 0 || a >= u)) {
                        d = '<span class="fc-date">' + r + '</span><span class="fc-weekday">' + this.options.weekabbrs[a + this.options.startIn > 6 ? a + this.options.startIn - 6 - 1 : a + this.options.startIn] + "</span>";
                        var f = (this.month + 1 < 10 ? "0" + (this.month + 1) : this.month + 1) + "-" + (10 > r ? "0" + r : r) + "-" + this.year
                          , m = this.caldata[f]
                          , g = (this.month + 1 < 10 ? "0" + (this.month + 1) : this.month + 1) + "-" + (10 > r ? "0" + r : r) + "-YYYY"
                          , y = this.caldata[g]
                          , v = "MM-" + (10 > r ? "0" + r : r) + "-" + this.year
                          , w = this.caldata[v]
                          , b = "MM-" + (10 > r ? "0" + r : r) + "-YYYY"
                          , x = this.caldata[b]
                          , _ = (this.month + 1 < 10 ? "0" + (this.month + 1) : this.month + 1) + "-DD-" + this.year
                          , T = this.caldata[_]
                          , S = (this.month + 1 < 10 ? "0" + (this.month + 1) : this.month + 1) + "-DD-YYYY"
                          , k = this.caldata[S];
                        p && this.caldata.TODAY && (h += this._parseDataToDay(this.caldata.TODAY, r)),
                        m && (h += this._parseDataToDay(m, r)),
                        w && (h += this._parseDataToDay(w, r)),
                        T && (h += this._parseDataToDay(T, r, !0)),
                        k && (h += this._parseDataToDay(k, r, !0)),
                        x && (h += this._parseDataToDay(x, r)),
                        y && (h += this._parseDataToDay(y, r)),
                        "" !== h && (d += '<div class="fc-calendar-events">' + h + "</div>"),
                        ++r
                    } else
                        p = !1;
                    var C = p ? "fc-today " : "";
                    C += c ? "fc-past " : "fc-future ",
                    "" !== h && (C += "fc-content"),
                    o += ("" !== C ? '<div class="' + C.trim() + '">' : "<div>") + d + "</div>"
                }
                if (r > e) {
                    this.rowTotal = s + 1;
                    break
                }
                o += '</div><div class="fc-row">'
            }
            return o + "</div></div>"
        },
        _move: function(t, e, i) {
            "previous" === e ? "month" === t ? (this.year = this.month > 0 ? this.year : --this.year,
            this.month = this.month > 0 ? --this.month : 11) : "year" === t && (this.year = --this.year) : "next" === e && ("month" === t ? (this.year = this.month < 11 ? this.year : ++this.year,
            this.month = this.month < 11 ? ++this.month : 0) : "year" === t && (this.year = ++this.year)),
            this._generateTemplate(!1, i)
        },
        option: function(t, e) {
            return e ? void (this.options[t] = e) : this.options[t]
        },
        getYear: function() {
            return this.year
        },
        getMonth: function() {
            return this.month + 1
        },
        getMonthName: function() {
            return this.options.displayMonthAbbr ? this.options.monthabbrs[this.month] : this.options.months[this.month]
        },
        getCell: function(t) {
            var e = Math.floor((t + this.startingDay - this.options.startIn - 1) / 7)
              , i = t + this.startingDay - this.options.startIn - 7 * e - 1;
            return this.$cal.find("div.fc-body").children("div.fc-row").eq(e).children("div").eq(i)
        },
        setData: function(e, i) {
            e = this._processCaldata(e),
            i ? this.caldata = e : t.extend(this.caldata, e),
            this._generateTemplate(!1)
        },
        gotoNow: function(t) {
            this.month = this.today.getMonth(),
            this.year = this.today.getFullYear(),
            this._generateTemplate(!1, t)
        },
        gotoMonth: function(t, e, i) {
            this.month = t - 1,
            this.year = e,
            this._generateTemplate(!1, i)
        },
        gotoPreviousMonth: function(t) {
            this._move("month", "previous", t)
        },
        gotoPreviousYear: function(t) {
            this._move("year", "previous", t)
        },
        gotoNextMonth: function(t) {
            this._move("month", "next", t)
        },
        gotoNextYear: function(t) {
            this._move("year", "next", t)
        },
        feed: function(e) {
            var i = this;
            t.post(i.options.feedParser, {
                dates: this.caldata
            }).always(function(t) {
                e && e.call(this, JSON.parse(t).hevent)
            })
        },
        version: function() {
            return this.VERSION
        }
    };
    var n = function(t) {
        throw new Error(t)
    };
    t.fn.calendario = function(e) {
        var i = t.data(this, "calendario");
        if ("string" == typeof e) {
            var o = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                return i ? (t.isFunction(i[e]) && "_" !== e.charAt(0) || n("No such method '" + e + "' for calendario instance."),
                void i[e].apply(i, o)) : void n("Cannot call methods on calendario prior to initialization; Attempted to call method '" + e + "'")
            })
        } else
            this.each(function() {
                i ? i._init() : i = t.data(this, "calendario", new t.Calendario(e,this))
            });
        return i.$el.trigger(t.Event("shown.calendar.calendario"), [i]),
        i
    }
}(jQuery, window),
function(e) {
    e.fn.extend({
        slimScroll: function(i) {
            var n = e.extend({
                width: "auto",
                height: "250px",
                size: "7px",
                color: "#000",
                position: "right",
                distance: "1px",
                start: "top",
                opacity: .4,
                alwaysVisible: !1,
                disableFadeOut: !1,
                railVisible: !1,
                railColor: "#333",
                railOpacity: .2,
                railDraggable: !0,
                railClass: "slimScrollRail",
                barClass: "slimScrollBar",
                wrapperClass: "slimScrollDiv",
                allowPageScroll: !1,
                wheelStep: 20,
                touchScrollStep: 200,
                borderRadius: "7px",
                railBorderRadius: "7px"
            }, i);
            return this.each(function() {
                function o(t) {
                    if (u) {
                        t = t || window.event;
                        var i = 0;
                        t.wheelDelta && (i = -t.wheelDelta / 120),
                        t.detail && (i = t.detail / 3),
                        e(t.target || t.srcTarget || t.srcElement).closest("." + n.wrapperClass).is(v.parent()) && r(i, !0),
                        t.preventDefault && !y && t.preventDefault(),
                        y || (t.returnValue = !1)
                    }
                }
                function r(t, e, i) {
                    y = !1;
                    var o = t
                      , r = v.outerHeight() - b.outerHeight();
                    e && (o = parseInt(b.css("top")) + t * parseInt(n.wheelStep) / 100 * b.outerHeight(),
                    o = Math.min(Math.max(o, 0), r),
                    o = t > 0 ? Math.ceil(o) : Math.floor(o),
                    b.css({
                        top: o + "px"
                    })),
                    m = parseInt(b.css("top")) / (v.outerHeight() - b.outerHeight()),
                    o = m * (v[0].scrollHeight - v.outerHeight()),
                    i && (o = t,
                    t = o / v[0].scrollHeight * v.outerHeight(),
                    t = Math.min(Math.max(t, 0), r),
                    b.css({
                        top: t + "px"
                    })),
                    v.scrollTop(o),
                    v.trigger("slimscrolling", ~~o),
                    a(),
                    l()
                }
                function s() {
                    f = Math.max(v.outerHeight() / v[0].scrollHeight * v.outerHeight(), 30),
                    b.css({
                        height: f + "px"
                    });
                    var t = f == v.outerHeight() ? "none" : "block";
                    b.css({
                        display: t
                    })
                }
                function a() {
                    s(),
                    clearTimeout(c),
                    m == ~~m ? (y = n.allowPageScroll,
                    g != m && v.trigger("slimscroll", 0 == ~~m ? "top" : "bottom")) : y = !1,
                    g = m,
                    f >= v.outerHeight() ? y = !0 : (b.stop(!0, !0).fadeIn("fast"),
                    n.railVisible && x.stop(!0, !0).fadeIn("fast"))
                }
                function l() {
                    n.alwaysVisible || (c = setTimeout(function() {
                        n.disableFadeOut && u || d || p || (b.fadeOut("slow"),
                        x.fadeOut("slow"))
                    }, 1e3))
                }
                var u, d, p, c, h, f, m, g, y = !1, v = e(this);
                if (v.parent().hasClass(n.wrapperClass)) {
                    var w = v.scrollTop()
                      , b = v.closest("." + n.barClass)
                      , x = v.closest("." + n.railClass);
                    if (s(),
                    e.isPlainObject(i)) {
                        if ("height"in i && "auto" == i.height) {
                            v.parent().css("height", "auto"),
                            v.css("height", "auto");
                            var _ = v.parent().parent().height();
                            v.parent().css("height", _),
                            v.css("height", _)
                        }
                        if ("scrollTo"in i)
                            w = parseInt(n.scrollTo);
                        else if ("scrollBy"in i)
                            w += parseInt(n.scrollBy);
                        else if ("destroy"in i)
                            return b.remove(),
                            x.remove(),
                            void v.unwrap();
                        r(w, !1, !0)
                    }
                } else if (!(e.isPlainObject(i) && "destroy"in i)) {
                    n.height = "auto" == n.height ? v.parent().height() : n.height,
                    w = e("<div></div>").addClass(n.wrapperClass).css({
                        position: "relative",
                        overflow: "hidden",
                        width: n.width,
                        height: n.height
                    }),
                    v.css({
                        overflow: "hidden",
                        width: n.width,
                        height: n.height
                    });
                    var x = e("<div></div>").addClass(n.railClass).css({
                        width: n.size,
                        height: "100%",
                        position: "absolute",
                        top: 0,
                        display: n.alwaysVisible && n.railVisible ? "block" : "none",
                        "border-radius": n.railBorderRadius,
                        background: n.railColor,
                        opacity: n.railOpacity,
                        zIndex: 90
                    })
                      , b = e("<div></div>").addClass(n.barClass).css({
                        background: n.color,
                        width: n.size,
                        position: "absolute",
                        top: 0,
                        opacity: n.opacity,
                        display: n.alwaysVisible ? "block" : "none",
                        "border-radius": n.borderRadius,
                        BorderRadius: n.borderRadius,
                        MozBorderRadius: n.borderRadius,
                        WebkitBorderRadius: n.borderRadius,
                        zIndex: 99
                    })
                      , _ = "right" == n.position ? {
                        right: n.distance
                    } : {
                        left: n.distance
                    };
                    x.css(_),
                    b.css(_),
                    v.wrap(w),
                    v.parent().append(b),
                    v.parent().append(x),
                    n.railDraggable && b.bind("mousedown", function(i) {
                        var n = e(document);
                        return p = !0,
                        t = parseFloat(b.css("top")),
                        pageY = i.pageY,
                        n.bind("mousemove.slimscroll", function(e) {
                            currTop = t + e.pageY - pageY,
                            b.css("top", currTop),
                            r(0, b.position().top, !1)
                        }),
                        n.bind("mouseup.slimscroll", function(t) {
                            p = !1,
                            l(),
                            n.unbind(".slimscroll")
                        }),
                        !1
                    }).bind("selectstart.slimscroll", function(t) {
                        return t.stopPropagation(),
                        t.preventDefault(),
                        !1
                    }),
                    x.hover(function() {
                        a()
                    }, function() {
                        l()
                    }),
                    b.hover(function() {
                        d = !0
                    }, function() {
                        d = !1
                    }),
                    v.hover(function() {
                        u = !0,
                        a(),
                        l()
                    }, function() {
                        u = !1,
                        l()
                    }),
                    v.bind("touchstart", function(t, e) {
                        t.originalEvent.touches.length && (h = t.originalEvent.touches[0].pageY)
                    }),
                    v.bind("touchmove", function(t) {
                        y || t.originalEvent.preventDefault(),
                        t.originalEvent.touches.length && (r((h - t.originalEvent.touches[0].pageY) / n.touchScrollStep, !0),
                        h = t.originalEvent.touches[0].pageY)
                    }),
                    s(),
                    "bottom" === n.start ? (b.css({
                        top: v.outerHeight() - b.outerHeight()
                    }),
                    r(0, !0)) : "top" !== n.start && (r(e(n.start).position().top, null, !0),
                    n.alwaysVisible || b.hide()),
                    window.addEventListener ? (this.addEventListener("DOMMouseScroll", o, !1),
                    this.addEventListener("mousewheel", o, !1)) : document.attachEvent("onmousewheel", o)
                }
            }),
            this
        }
    }),
    e.fn.extend({
        slimscroll: e.fn.slimScroll
    })
}(jQuery);
u7