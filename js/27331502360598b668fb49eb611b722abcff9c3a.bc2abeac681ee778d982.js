(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [3], {
        "/0+H": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.isInAmpMode = u, t.useAmp = function() {
                return u(o.default.useContext(a.AmpStateContext))
            };
            var r, o = (r = n("q1tI")) && r.__esModule ? r : {
                    default: r
                },
                a = n("lwAK");

            function u() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.ampFirst,
                    n = void 0 !== t && t,
                    r = e.hybrid,
                    o = void 0 !== r && r,
                    a = e.hasQuery,
                    u = void 0 !== a && a;
                return n || o && u
            }
        },
        "5fIB": function(e, t, n) {
            var r = n("7eYB");
            e.exports = function(e) {
                if (Array.isArray(e)) return r(e)
            }
        },
        "6FTQ": function(e, t, n) {
            "use strict";

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        "8Kt/": function(e, t, n) {
            "use strict";
            n("oI91"), t.__esModule = !0, t.defaultHead = f, t.default = void 0;
            var r, o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = s();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                        } return n.default = e, t && t.set(e, n), n
                }(n("q1tI")),
                a = (r = n("Xuae")) && r.__esModule ? r : {
                    default: r
                },
                u = n("lwAK"),
                c = n("FYa8"),
                i = n("/0+H");

            function s() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return s = function() {
                    return e
                }, e
            }

            function f() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = [o.default.createElement("meta", {
                        charSet: "utf-8"
                    })];
                return e || t.push(o.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function l(e, t) {
                return "string" == typeof t || "number" == typeof t ? e : t.type === o.default.Fragment ? e.concat(o.default.Children.toArray(t.props.children).reduce((function(e, t) {
                    return "string" == typeof t || "number" == typeof t ? e : e.concat(t)
                }), [])) : e.concat(t)
            }
            var d = ["name", "httpEquiv", "charSet", "itemProp"];

            function p(e, t) {
                return e.reduce((function(e, t) {
                    var n = o.default.Children.toArray(t.props.children);
                    return e.concat(n)
                }), []).reduce(l, []).reverse().concat(f(t.inAmpMode)).filter(function() {
                    var e = new Set,
                        t = new Set,
                        n = new Set,
                        r = {};
                    return function(o) {
                        var a = !0,
                            u = !1;
                        if (o.key && "number" != typeof o.key && o.key.indexOf("$") > 0) {
                            u = !0;
                            var c = o.key.slice(o.key.indexOf("$") + 1);
                            e.has(c) ? a = !1 : e.add(c)
                        }
                        switch (o.type) {
                            case "title":
                            case "base":
                                t.has(o.type) ? a = !1 : t.add(o.type);
                                break;
                            case "meta":
                                for (var i = 0, s = d.length; i < s; i++) {
                                    var f = d[i];
                                    if (o.props.hasOwnProperty(f))
                                        if ("charSet" === f) n.has(f) ? a = !1 : n.add(f);
                                        else {
                                            var l = o.props[f],
                                                p = r[f] || new Set;
                                            "name" === f && u || !p.has(l) ? (p.add(l), r[f] = p) : a = !1
                                        }
                                }
                        }
                        return a
                    }
                }()).reverse().map((function(e, t) {
                    var n = e.key || t;
                    return o.default.cloneElement(e, {
                        key: n
                    })
                }))
            }

            function v(e) {
                var t = e.children,
                    n = (0, o.useContext)(u.AmpStateContext),
                    r = (0, o.useContext)(c.HeadManagerContext);
                return o.default.createElement(a.default, {
                    reduceComponentsToState: p,
                    headManager: r,
                    inAmpMode: (0, i.isInAmpMode)(n)
                }, t)
            }
            v.rewind = function() {};
            var h = v;
            t.default = h
        },
        "8rE2": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return o
            }));
            var r = n("6FTQ");

            function o(e, t) {
                if (e) {
                    if ("string" == typeof e) return Object(r.a)(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Object(r.a)(e, t) : void 0
                }
            }
        },
        Xuae: function(e, t, n) {
            "use strict";
            var r = n("mPvQ"),
                o = n("/GRZ"),
                a = n("i2R6"),
                u = (n("qXWd"), n("48fX")),
                c = n("tCBg"),
                i = n("T0f4");
            t.__esModule = !0, t.default = void 0;
            var s = function(e) {
                u(n, e);
                var t = function(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = i(e);
                        if (t) {
                            var o = i(this).constructor;
                            n = Reflect.construct(r, arguments, o)
                        } else n = r.apply(this, arguments);
                        return c(this, n)
                    }
                }(n);

                function n(e) {
                    var a;
                    return o(this, n), (a = t.call(this, e))._hasHeadManager = void 0, a.emitChange = function() {
                        a._hasHeadManager && a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances), a.props))
                    }, a._hasHeadManager = a.props.headManager && a.props.headManager.mountedInstances, a
                }
                return a(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.emitChange()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this._hasHeadManager && this.props.headManager.mountedInstances.delete(this), this.emitChange()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return null
                    }
                }]), n
            }(n("q1tI").Component);
            t.default = s
        },
        YFqc: function(e, t, n) {
            e.exports = n("cTJO")
        },
        cTJO: function(e, t, n) {
            "use strict";
            var r = n("zoAU"),
                o = n("7KCV");
            t.__esModule = !0, t.default = void 0;
            var a = o(n("q1tI")),
                u = n("elyg"),
                c = n("nOHt"),
                i = n("vNVm"),
                s = {};

            function f(e, t, n, r) {
                if (e && (0, u.isLocalURL)(t)) {
                    e.prefetch(t, n, r).catch((function(e) {}));
                    var o = r && void 0 !== r.locale ? r.locale : e && e.locale;
                    s[t + "%" + n + (o ? "%" + o : "")] = !0
                }
            }
            t.default = function(e) {
                var t = !1 !== e.prefetch,
                    n = (0, c.useRouter)(),
                    o = n && n.pathname || "/",
                    l = a.default.useMemo((function() {
                        var t = (0, u.resolveHref)(o, e.href, !0),
                            n = r(t, 2),
                            a = n[0],
                            c = n[1];
                        return {
                            href: a,
                            as: e.as ? (0, u.resolveHref)(o, e.as) : c || a
                        }
                    }), [o, e.href, e.as]),
                    d = l.href,
                    p = l.as,
                    v = e.children,
                    h = e.replace,
                    m = e.shallow,
                    y = e.scroll,
                    g = e.locale;
                "string" == typeof v && (v = a.default.createElement("a", null, v));
                var b = a.Children.only(v),
                    M = b && "object" == typeof b && b.ref,
                    w = (0, i.useIntersection)({
                        rootMargin: "200px"
                    }),
                    _ = r(w, 2),
                    C = _[0],
                    k = _[1],
                    I = a.default.useCallback((function(e) {
                        C(e), M && ("function" == typeof M ? M(e) : "object" == typeof M && (M.current = e))
                    }), [M, C]);
                (0, a.useEffect)((function() {
                    var e = k && t && (0, u.isLocalURL)(d),
                        r = void 0 !== g ? g : n && n.locale,
                        o = s[d + "%" + p + (r ? "%" + r : "")];
                    e && !o && f(n, d, p, {
                        locale: r
                    })
                }), [p, d, k, g, t, n]);
                var x = {
                    ref: I,
                    onClick: function(e) {
                        b.props && "function" == typeof b.props.onClick && b.props.onClick(e), e.defaultPrevented || function(e, t, n, r, o, a, c, i) {
                            ("A" !== e.currentTarget.nodeName || ! function(e) {
                                var t = e.currentTarget.target;
                                return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                            }(e) && (0, u.isLocalURL)(n)) && (e.preventDefault(), null == c && (c = r.indexOf("#") < 0), t[o ? "replace" : "push"](n, r, {
                                shallow: a,
                                locale: i,
                                scroll: c
                            }))
                        }(e, n, d, p, h, m, y, g)
                    },
                    onMouseEnter: function(e) {
                        (0, u.isLocalURL)(d) && (b.props && "function" == typeof b.props.onMouseEnter && b.props.onMouseEnter(e), f(n, d, p, {
                            priority: !0
                        }))
                    }
                };
                if (e.passHref || "a" === b.type && !("href" in b.props)) {
                    var O = void 0 !== g ? g : n && n.locale,
                        A = n && n.isLocaleDomain && (0, u.getDomainLocale)(p, O, n && n.locales, n && n.domainLocales);
                    x.href = A || (0, u.addBasePath)((0, u.addLocale)(p, O, n && n.defaultLocale))
                }
                return a.default.cloneElement(b, x)
            }
        },
        g4pe: function(e, t, n) {
            e.exports = n("8Kt/")
        },
        hLHZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            }));
            var r = n("nKUr"),
                o = n("YFqc"),
                a = n.n(o);

            function u(e) {
                var t = e.href,
                    n = e.children,
                    o = e.newTab;
                return Object(r.jsx)(a.a, {
                    href: t,
                    children: Object(r.jsx)("a", {
                        target: o ? "_blank" : "_self",
                        rel: o && "noreferrer",
                        className: "text-blue-500 hover:text-blue-600 transition",
                        children: n
                    })
                })
            }
        },
        kG2m: function(e, t) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        lwAK: function(e, t, n) {
            "use strict";
            var r;
            t.__esModule = !0, t.AmpStateContext = void 0;
            var o = ((r = n("q1tI")) && r.__esModule ? r : {
                default: r
            }).default.createContext({});
            t.AmpStateContext = o
        },
        mPvQ: function(e, t, n) {
            var r = n("5fIB"),
                o = n("rlHP"),
                a = n("KckH"),
                u = n("kG2m");
            e.exports = function(e) {
                return r(e) || o(e) || a(e) || u()
            }
        },
        oI91: function(e, t) {
            e.exports = function(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
        },
        rlHP: function(e, t) {
            e.exports = function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }
        },
        vNVm: function(e, t, n) {
            "use strict";
            var r = n("zoAU");
            t.__esModule = !0, t.useIntersection = function(e) {
                var t = e.rootMargin,
                    n = e.disabled || !u,
                    i = (0, o.useRef)(),
                    s = (0, o.useState)(!1),
                    f = r(s, 2),
                    l = f[0],
                    d = f[1],
                    p = (0, o.useCallback)((function(e) {
                        i.current && (i.current(), i.current = void 0), n || l || e && e.tagName && (i.current = function(e, t, n) {
                            var r = function(e) {
                                    var t = e.rootMargin || "",
                                        n = c.get(t);
                                    if (n) return n;
                                    var r = new Map,
                                        o = new IntersectionObserver((function(e) {
                                            e.forEach((function(e) {
                                                var t = r.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                t && n && t(n)
                                            }))
                                        }), e);
                                    return c.set(t, n = {
                                        id: t,
                                        observer: o,
                                        elements: r
                                    }), n
                                }(n),
                                o = r.id,
                                a = r.observer,
                                u = r.elements;
                            return u.set(e, (function(e) {
                                    return e && d(e)
                                })), a.observe(e),
                                function() {
                                    u.delete(e), a.unobserve(e), 0 === u.size && (a.disconnect(), c.delete(o))
                                }
                        }(e, 0, {
                            rootMargin: t
                        }))
                    }), [n, t, l]);
                return (0, o.useEffect)((function() {
                    if (!u && !l) {
                        var e = (0, a.requestIdleCallback)((function() {
                            return d(!0)
                        }));
                        return function() {
                            return (0, a.cancelIdleCallback)(e)
                        }
                    }
                }), [l]), [p, l]
            };
            var o = n("q1tI"),
                a = n("0G5g"),
                u = "undefined" != typeof IntersectionObserver,
                c = new Map
        }
    }
]);
