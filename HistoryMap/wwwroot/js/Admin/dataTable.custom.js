﻿/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#zf-5.5.2/jqc-1.11.3,dt-1.10.8
 *
 * Included libraries:
 *   jQuery compat 1.11.3, Foundation 5.5.2, DataTables 1.10.8
 */
/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
! function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = "1.11.3",
        m = function (a, b) {
            return new m.fn.init(a, b)
        },
        n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        o = /^-ms-/,
        p = /-([\da-z])/gi,
        q = function (a, b) {
            return b.toUpperCase()
        };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function () {
            return d.call(this)
        },
        get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function (a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function (a, b) {
            return m.each(this, a, b)
        },
        map: function (a) {
            return this.pushStack(m.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, m.extend = m.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (a) {
            throw new Error(a)
        },
        noop: function () { },
        isFunction: function (a) {
            return "function" === m.type(a)
        },
        isArray: Array.isArray || function (a) {
            return "array" === m.type(a)
        },
        isWindow: function (a) {
            return null != a && a == a.window
        },
        isNumeric: function (a) {
            return !m.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isEmptyObject: function (a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function (a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (k.ownLast)
                for (b in a) return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        },
        type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function (b) {
            b && m.trim(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function (a) {
            return a.replace(o, "ms-").replace(p, q)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (a, b, c) {
            var d, e = 0,
                f = a.length,
                g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a
        },
        trim: function (a) {
            return null == a ? "" : (a + "").replace(n, "")
        },
        makeArray: function (a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function (a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function (a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function (a, b, c) {
            var d, f = 0,
                g = a.length,
                h = r(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function (a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function () {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }, e.guid = a.guid = a.guid || m.guid++ , e) : void 0
        },
        now: function () {
            return +new Date
        },
        support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function r(a) {
        var b = "length" in a && a.length,
            c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function (a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = M.replace("w", "w#"),
            O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
            P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            Q = new RegExp(L + "+", "g"),
            R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            S = new RegExp("^" + L + "*," + L + "*"),
            T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            V = new RegExp(P),
            W = new RegExp("^" + N + "$"),
            X = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            aa = /[+~]/,
            ba = /'|\\/g,
            ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            da = function (a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            ea = function () {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fa) {
            H = {
                apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b))
                } : function (a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode) return d;
                            if (h.id === j) return d.push(h), d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                    } else {
                        if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d
                    } catch (y) { } finally {
                            r || b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = ga.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function (a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(ca, da);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function (a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) { }
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function (a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function (a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
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
                ATTR: function (a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                },
                PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function (a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function (a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function (a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--) (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function (a) {
                    return a = a.replace(ca, da),
                        function (b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ia(function (a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(),
                        function (b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function (a) {
                    return a === o
                },
                focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function (a) {
                    return a.disabled === !1
                },
                disabled: function (a) {
                    return a.disabled === !0
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function (a) {
                    return !d.pseudos.empty(a)
                },
                header: function (a) {
                    return Z.test(a.nodeName)
                },
                input: function (a) {
                    return Y.test(a.nodeName)
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: oa(function () {
                    return [0]
                }),
                last: oa(function (a, b) {
                    return [b - 1]
                }),
                eq: oa(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: oa(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: oa(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = ma(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = na(b);

        function qa() { }
        qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };

        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function sa(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function ta(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
            return c
        }

        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ua(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : va(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = va(r, n), d(j, [], h, i), k = j.length;
                    while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
                return a === b
            }, h, !0), l = sa(function (a) {
                return J(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                    }
                    m.push(c)
                }
            return ta(m)
        }

        function ya(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function (f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || .1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = v)
                        }
                        c && ((l = !o && l) && p-- , f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++]) o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = F.call(i));
                            s = va(s)
                        }
                        H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? ia(f) : f
        }
        return h = ga.compile = function (a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ja(function (a) {
            return null == a.getAttribute("disabled")
        }) || ka(K, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext,
        u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        v = /^.[^:#\[\.,]*$/;

    function w(a, b, c) {
        if (m.isFunction(b)) return m.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return m.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (v.test(b)) return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function (a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }
    m.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, m.fn.extend({
        find: function (a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(m(a).filter(function () {
                for (b = 0; e > b; b++)
                    if (m.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function (a) {
            return this.pushStack(w(this, a || [], !1))
        },
        not: function (a) {
            return this.pushStack(w(this, a || [], !0))
        },
        is: function (a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = m.fn.init = function (a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
                        for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = y.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return x.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = y, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
        };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    m.extend({
        dir: function (a, b, c) {
            var d = [],
                e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        },
        sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), m.fn.extend({
        has: function (a) {
            var b, c = m(a, this),
                d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++)
                    if (m.contains(this, c[b])) return !0
            })
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    m.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function (a) {
            return m.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return m.dir(a, "parentNode", c)
        },
        next: function (a) {
            return D(a, "nextSibling")
        },
        prev: function (a) {
            return D(a, "previousSibling")
        },
        nextAll: function (a) {
            return m.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return m.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return m.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return m.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function (a) {
            return m.sibling(a.firstChild)
        },
        contents: function (a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function (a, b) {
        m.fn[a] = function (c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};

    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function (a, c) {
            b[c] = !0
        }), b
    }
    m.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function (l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        c = !1;
                        break
                    }
                b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
            },
            k = {
                add: function () {
                    if (h) {
                        var d = h.length;
                        ! function f(b) {
                            m.each(b, function (b, c) {
                                var d = m.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), b ? e = h.length : c && (g = d, j(c))
                    }
                    return this
                },
                remove: function () {
                    return h && m.each(arguments, function (a, c) {
                        var d;
                        while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e-- , f >= d && f--)
                    }), this
                },
                has: function (a) {
                    return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function () {
                    return h = [], e = 0, this
                },
                disable: function () {
                    return h = i = c = void 0, this
                },
                disabled: function () {
                    return !h
                },
                lock: function () {
                    return i = void 0, c || k.disable(), this
                },
                locked: function () {
                    return !i
                },
                fireWith: function (a, c) {
                    return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
                },
                fire: function () {
                    return k.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!d
                }
            };
        return k
    }, m.extend({
        Deferred: function (a) {
            var b = [
                ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                ["notify", "progress", m.Callbacks("memory")]
            ],
                c = "pending",
                d = {
                    state: function () {
                        return c
                    },
                    always: function () {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var a = arguments;
                        return m.Deferred(function (c) {
                            m.each(b, function (b, f) {
                                var g = m.isFunction(a[b]) && a[b];
                                e[f[1]](function () {
                                    var a = g && g.apply(this, arguments);
                                    a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function (a) {
                        return null != a ? m.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, m.each(b, function (a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function (a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : m.Deferred(),
                h = function (a, b, c) {
                    return function (e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    m.fn.ready = function (a) {
        return m.ready.promise().done(a), this
    }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (a) {
            a ? m.readyWait++ : m.ready(!0)
        },
        ready: function (a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body) return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }
    });

    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }

    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }
    m.ready.promise = function (b) {
        if (!H)
            if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);
            else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);
            else {
                y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
                var c = !1;
                try {
                    c = null == a.frameElement && y.documentElement
                } catch (d) { }
                c && c.doScroll && ! function e() {
                    if (!m.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(e, 50)
                        }
                        I(), m.ready()
                    }
                }()
            }
        return H.promise(b)
    };
    var K = "undefined",
        L;
    for (L in m(k)) break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () {
        var a, b, c, d;
        c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
    }),
        function () {
            var a = y.createElement("div");
            if (null == k.deleteExpando) {
                k.deleteExpando = !0;
                try {
                    delete a.test
                } catch (b) {
                    k.deleteExpando = !1
                }
            }
            a = null
        }(), m.acceptData = function (a) {
            var b = m.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) { }
                m.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;

        return !0
    }

    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando,
                i = a.nodeType,
                j = i ? m.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: m.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
        }
    }

    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? m.cache : a,
                h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d)) return
                } (c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
        },
        data: function (a, b, c) {
            return Q(a, b, c)
        },
        removeData: function (a, b) {
            return R(a, b)
        },
        _data: function (a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function (a, b) {
            return R(a, b, !0)
        }
    }), m.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function () {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function (a) {
            return this.each(function () {
                m.removeData(this, a)
            })
        }
    }), m.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function (a, b) {
            b = b || "fx";
            var c = m.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = m._queueHooks(a, b),
                g = function () {
                    m.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function () {
                    m._removeData(a, b + "queue"), m._removeData(a, c)
                })
            })
        }
    }), m.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                m.dequeue(this, a)
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx", [])
        },
        promise: function (a, b) {
            var c, d = 1,
                e = m.Deferred(),
                f = this,
                g = this.length,
                h = function () {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++ , c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = ["Top", "Right", "Bottom", "Left"],
        U = function (a, b) {
            return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
        },
        V = m.access = function (a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === m.type(c)) {
                e = !0;
                for (h in c) m.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                return j.call(m(a), c)
            })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        W = /^(?:checkbox|radio)$/i;
    ! function () {
        var a = y.createElement("input"),
            b = y.createElement("div"),
            c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
            k.noCloneEvent = !1
        }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(),
        function () {
            var b, c, d = y.createElement("div");
            for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
            d = null
        }();
    var X = /^(?:input|select|textarea)$/i,
        Y = /^key/,
        Z = /^(?:mouse|pointer|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = /^([^.]*)(?:\.(.+)|)$/;

    function aa() {
        return !0
    }

    function ba() {
        return !1
    }

    function ca() {
        try {
            return y.activeElement
        } catch (a) { }
    }
    m.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && m.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                a = null
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                        while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount-- , l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) { }
                    m.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function (a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (m._data(this, "events") || {})[a.type] || [],
                k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function (a) {
            if (a[m.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== ca() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) { }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === ca() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = m.extend(new m.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, m.removeEvent = y.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
    }, m.Event = function (a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? aa : ba) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando] = !0)) : new m.Event(a, b)
    }, m.Event.prototype = {
        isDefaultPrevented: ba,
        isPropagationStopped: ba,
        isImmediatePropagationStopped: ba,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = aa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = aa, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = aa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function (a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function () {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) {
                var b = a.target,
                    c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), m._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function () {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function () {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), m.event.add(this, "click._change", function (a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
            })), !1) : void m.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }), m._data(b, "changeBubbles", !0))
            })
        },
        handle: function (a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return m.event.remove(this, "._change"), !X.test(this.nodeName)
        }
    }), k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = function (a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this,
                    e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
            },
            teardown: function () {
                var d = this.ownerDocument || this,
                    e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
            }
        }
    }), m.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = ba;
            else if (!d) return this;
            return 1 === e && (g = d, d = function (a) {
                return m().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () {
                m.event.add(this, a, d, c, b)
            })
        },
        one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ba), this.each(function () {
                m.event.remove(this, a, c, b)
            })
        },
        trigger: function (a, b) {
            return this.each(function () {
                m.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });

    function da(a) {
        var b = ea.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }
    var ea = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        fa = / jQuery\d+="(?:null|\d+)"/g,
        ga = new RegExp("<(?:" + ea + ")[\\s/>]", "i"),
        ha = /^\s+/,
        ia = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ja = /<([\w:]+)/,
        ka = /<tbody/i,
        la = /<|&#?\w+;/,
        ma = /<(?:script|style|link)/i,
        na = /checked\s*(?:[^=]|=\s*.checked.)/i,
        oa = /^$|\/(?:java|ecma)script/i,
        pa = /^true\/(.*)/,
        qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ra = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        sa = da(y),
        ta = sa.appendChild(y.createElement("div"));
    ra.optgroup = ra.option, ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead, ra.th = ra.td;

    function ua(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ua(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }

    function va(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }

    function wa(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function xa(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
    }

    function ya(a) {
        var b = pa.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function za(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }

    function Aa(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a),
                g = m._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }

    function Ba(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events) m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xa(b).text = a.text, ya(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !ga.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ta.innerHTML = a.outerHTML, ta.removeChild(f = ta.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ua(f), h = ua(a), g = 0; null != (e = h[g]); ++g) d[g] && Ba(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ua(a), d = d || ua(f), g = 0; null != (e = h[g]); g++) Aa(e, d[g]);
                else Aa(a, f);
            return d = ua(f, "script"), d.length > 0 && za(d, !i && ua(a, "script")), d = h = e = null, f
        },
        buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0; n > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);
                    else if (la.test(f)) {
                        h = h || o.appendChild(b.createElement("div")), i = (ja.exec(f) || ["", ""])[1].toLowerCase(), l = ra[i] || ra._default, h.innerHTML = l[1] + f.replace(ia, "<$1></$2>") + l[2], e = l[0];
                        while (e--) h = h.lastChild;
                        if (!k.leadingWhitespace && ha.test(f) && p.push(b.createTextNode(ha.exec(f)[0])), !k.tbody) {
                            f = "table" !== i || ka.test(f) ? "<table>" !== l[1] || ka.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                            while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                        }
                        m.merge(p, h.childNodes), h.textContent = "";
                        while (h.firstChild) h.removeChild(h.firstChild);
                        h = o.lastChild
                    } else p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ua(p, "input"), va), q = 0;
            while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ua(o.appendChild(f), "script"), g && za(h), c)) {
                    e = 0;
                    while (f = h[e++]) oa.test(f.type || "") && c.push(f)
                }
            return h = null, o
        },
        cleanData: function (a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
        }
    }), m.fn.extend({
        text: function (a) {
            return V(this, function (a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function (a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ua(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && za(ua(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ua(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return m.clone(this, a, b)
            })
        },
        html: function (a) {
            return V(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fa, "") : void 0;
                if (!("string" != typeof a || ma.test(a) || !k.htmlSerialize && ga.test(a) || !k.leadingWhitespace && ha.test(a) || ra[(ja.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ia, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ua(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) { }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, m.cleanData(ua(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function (a) {
            return this.remove(a, !0)
        },
        domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                n = this,
                o = l - 1,
                p = a[0],
                q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && na.test(p)) return this.each(function (c) {
                var d = n.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ua(i, "script"), xa), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ua(d, "script"))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, m.map(g, ya), j = 0; f > j; j++) d = g[j], oa.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qa, "")));
                i = c = null
            }
            return this
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        m.fn[a] = function (a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ca, Da = {};

    function Ea(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
    }

    function Fa(a) {
        var b = y,
            c = Da[a];
        return c || (c = Ea(a, b), "none" !== c && c || (Ca = (Ca || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ca[0].contentWindow || Ca[0].contentDocument).document, b.write(), b.close(), c = Ea(a, b), Ca.detach()), Da[a] = c), c
    } ! function () {
        var a;
        k.shrinkWrapBlocks = function () {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Ga = /^margin/,
        Ha = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ia, Ja, Ka = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ia = function (b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    }, Ja = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ia(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Ha.test(g) && Ga.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : y.documentElement.currentStyle && (Ia = function (a) {
        return a.currentStyle
    }, Ja = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ia(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ha.test(g) && !Ka.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function La(a, b) {
        return {
            get: function () {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    } ! function () {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
                reliableHiddenOffsets: function () {
                    return null == g && i(), g
                },
                boxSizingReliable: function () {
                    return null == f && i(), f
                },
                pixelPosition: function () {
                    return null == e && i(), e
                },
                reliableMarginRight: function () {
                    return null == h && i(), h
                }
            });

            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {
                    width: "4px"
                }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Ma = /alpha\([^)]*\)/i,
        Na = /opacity\s*=\s*([^)]*)/,
        Oa = /^(none|table(?!-c[ea]).+)/,
        Pa = new RegExp("^(" + S + ")(.*)$", "i"),
        Qa = new RegExp("^([+-])=(" + S + ")", "i"),
        Ra = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Sa = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ta = ["Webkit", "O", "Moz", "ms"];

    function Ua(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Ta.length;
        while (e--)
            if (b = Ta[e] + c, b in a) return b;
        return d
    }

    function Va(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fa(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Wa(a, b, c) {
        var d = Pa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Xa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }

    function Ya(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ia(a),
            g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Ja(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ha.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xa(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Ja(a, "opacity");
                        return "" === c ? "1" : c
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
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b),
                    i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Qa.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) { }
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Ja(a, b, d)), "normal" === f && b in Sa && (f = Sa[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }), m.each(["height", "width"], function (a, b) {
        m.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? Oa.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Ra, function () {
                    return Ya(a, b, d)
                }) : Ya(a, b, d) : void 0
            },
            set: function (a, c, d) {
                var e = d && Ia(a);
                return Wa(a, c, d ? Xa(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), k.opacity || (m.cssHooks.opacity = {
        get: function (a, b) {
            return Na.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function (a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Ma, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Ma.test(f) ? f.replace(Ma, e) : f + " " + e)
        }
    }), m.cssHooks.marginRight = La(k.reliableMarginRight, function (a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Ja, [a, "marginRight"]) : void 0
    }), m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (a, b) {
        m.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Ga.test(a) || (m.cssHooks[a + b].set = Wa)
    }), m.fn.extend({
        css: function (a, b) {
            return V(this, function (a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (m.isArray(b)) {
                    for (d = Ia(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function () {
            return Va(this, !0)
        },
        hide: function () {
            return Va(this)
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                U(this) ? m(this).show() : m(this).hide()
            })
        }
    });

    function Za(a, b, c, d, e) {
        return new Za.prototype.init(a, b, c, d, e)
    }
    m.Tween = Za, Za.prototype = {
        constructor: Za,
        init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function () {
            var a = Za.propHooks[this.prop];
            return a && a.get ? a.get(this) : Za.propHooks._default.get(this)
        },
        run: function (a) {
            var b, c = Za.propHooks[this.prop];
            return this.options.duration ? this.pos = b = m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Za.propHooks._default.set(this), this
        }
    }, Za.prototype.init.prototype = Za.prototype, Za.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function (a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Za.propHooks.scrollTop = Za.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, m.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, m.fx = Za.prototype.init, m.fx.step = {};
    var $a, _a, ab = /^(?:toggle|show|hide)$/,
        bb = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        cb = /queueHooks$/,
        db = [ib],
        eb = {
            "*": [function (a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = bb.exec(b),
                    f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
                    g = (m.cssNumber[a] || "px" !== f && +d) && bb.exec(m.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function fb() {
        return setTimeout(function () {
            $a = void 0
        }), $a = m.now()
    }

    function gb(a, b) {
        var c, d = {
            height: a
        },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function hb(a, b, c) {
        for (var d, e = (eb[b] || []).concat(eb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ib(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this,
            o = {},
            p = a.style,
            q = a.nodeType && U(a),
            r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++ , n.always(function () {
            n.always(function () {
                h.unqueued-- , m.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fa(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fa(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], ab.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else j = void 0;
        if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fa(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () {
                m(a).hide()
            }), n.done(function () {
                var b;
                m._removeData(a, "fxshow");
                for (b in o) m.style(a, b, o[b])
            });
            for (d in o) g = hb(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function jb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function kb(a, b, c) {
        var d, e, f = 0,
            g = db.length,
            h = m.Deferred().always(function () {
                delete i.elem
            }),
            i = function () {
                if (e) return !1;
                for (var b = $a || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: m.extend({}, b),
                opts: m.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $a || fb(),
                duration: c.duration,
                tweens: [],
                createTween: function (b, c) {
                    var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function (b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (jb(k, j.opts.specialEasing); g > f; f++)
            if (d = db[f].call(j, a, k, j.opts)) return d;
        return m.map(k, hb, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kb, {
        tweener: function (a, b) {
            m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], eb[c] = eb[c] || [], eb[c].unshift(b)
        },
        prefilter: function (a, b) {
            b ? db.unshift(a) : db.push(a)
        }
    }), m.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? m.extend({}, a) : {
            complete: c || !c && b || m.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !m.isFunction(b) && b
        };
        return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
        }, d
    }, m.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(U).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d) {
            var e = m.isEmptyObject(a),
                f = m.speed(b, c, d),
                g = function () {
                    var b = kb(this, m.extend({}, a), f);
                    (e || m._data(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = m.timers,
                    g = m._data(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g) g[e] && g[e].stop && cb.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && m.dequeue(this, a)
            })
        },
        finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = m._data(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = m.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), m.each(["toggle", "show", "hide"], function (a, b) {
        var c = m.fn[b];
        m.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e)
        }
    }), m.each({
        slideDown: gb("show"),
        slideUp: gb("hide"),
        slideToggle: gb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (a, b) {
        m.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), m.timers = [], m.fx.tick = function () {
        var a, b = m.timers,
            c = 0;
        for ($a = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || m.fx.stop(), $a = void 0
    }, m.fx.timer = function (a) {
        m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
    }, m.fx.interval = 13, m.fx.start = function () {
        _a || (_a = setInterval(m.fx.tick, m.fx.interval))
    }, m.fx.stop = function () {
        clearInterval(_a), _a = null
    }, m.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, m.fn.delay = function (a, b) {
        return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    },
        function () {
            var a, b, c, d, e;
            b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
        }();
    var lb = /\r/g;
    m.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = m.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lb, "") : null == c ? "" : c)
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function (a, b) {
                    var c, d, e = a.options,
                        f = m.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), m.each(["radio", "checkbox"], function () {
        m.valHooks[this] = {
            set: function (a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (m.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var mb, nb, ob = m.expr.attrHandle,
        pb = /^(?:checked|selected)$/i,
        qb = k.getSetAttribute,
        rb = k.input;
    m.fn.extend({
        attr: function (a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                m.removeAttr(this, a)
            })
        }
    }), m.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nb : mb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
        },
        removeAttr: function (a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rb && qb || !pb.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qb ? c : d)
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), nb = {
        set: function (a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rb && qb || !pb.test(c) ? a.setAttribute(!qb && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = ob[b] || m.find.attr;
        ob[b] = rb && qb || !pb.test(b) ? function (a, b, d) {
            var e, f;
            return d || (f = ob[b], ob[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ob[b] = f), e
        } : function (a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), rb && qb || (m.attrHooks.value = {
        set: function (a, b, c) {
            return m.nodeName(a, "input") ? void (a.defaultValue = b) : mb && mb.set(a, b, c)
        }
    }), qb || (mb = {
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, ob.id = ob.name = ob.coords = function (a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, m.valHooks.button = {
        get: function (a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: mb.set
    }, m.attrHooks.contenteditable = {
        set: function (a, b, c) {
            mb.set(a, "" === b ? !1 : b, c)
        }
    }, m.each(["width", "height"], function (a, b) {
        m.attrHooks[b] = {
            set: function (a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), k.style || (m.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || void 0
        },
        set: function (a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sb = /^(?:input|select|textarea|button|object)$/i,
        tb = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function (a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return a = m.propFix[a] || a, this.each(function () {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) { }
            })
        }
    }), m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), k.hrefNormalized || m.each(["href", "src"], function (a, b) {
        m.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    }), k.optSelected || (m.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        m.propFix[this.toLowerCase()] = this
    }), k.enctype || (m.propFix.enctype = "encoding");
    var ub = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function (b) {
                m(this).addClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function (b) {
                m(this).removeClass(a.call(this, b, this.className))
            });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) {
                    var b, d = 0,
                        e = m(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            })
        },
        hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        m.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), m.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vb = m.now(),
        wb = /\?/,
        xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = m.trim(b + "");
        return e && !m.trim(e.replace(xb, function (a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function (b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
    };
    var yb, zb, Ab = /#.*$/,
        Bb = /([?&])_=[^&]*/,
        Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Eb = /^(?:GET|HEAD)$/,
        Fb = /^\/\//,
        Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hb = {},
        Ib = {},
        Jb = "*/".concat("*");
    try {
        zb = location.href
    } catch (Kb) {
        zb = y.createElement("a"), zb.href = "", zb = zb.href
    }
    yb = Gb.exec(zb.toLowerCase()) || [];

    function Lb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Mb(a, b, c, d) {
        var e = {},
            f = a === Ib;

        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Nb(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c), a
    }

    function Ob(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Pb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"]) b = g(b);
                        else try {
                            b = g(b)
                        } catch (l) {
                            return {
                                state: "parsererror",
                                error: g ? l : "No conversion from " + i + " to " + f
                            }
                        }
                }
        return {
            state: "success",
            data: b
        }
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zb,
            type: "GET",
            isLocal: Db.test(yb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jb,
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
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? Nb(Nb(a, m.ajaxSettings), b) : Nb(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lb(Hb),
        ajaxTransport: Lb(Ib),
        ajax: function (a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b),
                l = k.context || k,
                n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
                o = m.Deferred(),
                p = m.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function (a) {
                        var b;
                        if (2 === t) {
                            if (!j) {
                                j = {};
                                while (b = Cb.exec(f)) j[b[1].toLowerCase()] = b[2]
                            }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function () {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function (a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function (a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function (a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function (a) {
                        var b = a || u;
                        return i && i.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zb) + "").replace(Ab, "").replace(Fb, yb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gb.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yb[1] && c[2] === yb[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yb[3] || ("http:" === yb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mb(Hb, k, b, v), 2 === t) return v;
            h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Eb.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wb.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bb.test(e) ? e.replace(Bb, "$1_=" + vb++) : e + (wb.test(e) ? "&" : "?") + "_=" + vb++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jb + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            }) v[d](k[d]);
            if (i = Mb(Ib, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Ob(k, v, c)), u = Pb(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function (a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return m.get(a, void 0, b, "script")
        }
    }), m.each(["get", "post"], function (a, b) {
        m[b] = function (a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), m._evalUrl = function (a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, m.fn.extend({
        wrapAll: function (a) {
            if (m.isFunction(a)) return this.each(function (b) {
                m(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            return this.each(m.isFunction(a) ? function (b) {
                m(this).wrapInner(a.call(this, b))
            } : function () {
                var b = m(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function (a) {
            var b = m.isFunction(a);
            return this.each(function (c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }), m.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }, m.expr.filters.visible = function (a) {
        return !m.expr.filters.hidden(a)
    };
    var Qb = /%20/g,
        Rb = /\[\]$/,
        Sb = /\r?\n/g,
        Tb = /^(?:submit|button|image|reset|file)$/i,
        Ub = /^(?:input|select|textarea|keygen)/i;

    function Vb(a, b, c, d) {
        var e;
        if (m.isArray(b)) m.each(b, function (b, e) {
            c || Rb.test(a) ? d(a, e) : Vb(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== m.type(b)) d(a, b);
        else
            for (e in b) Vb(a + "[" + e + "]", b[e], c, d)
    }
    m.param = function (a, b) {
        var c, d = [],
            e = function (a, b) {
                b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function () {
            e(this.name, this.value)
        });
        else
            for (c in a) Vb(c, a[c], b, e);
        return d.join("&").replace(Qb, "+")
    }, m.fn.extend({
        serialize: function () {
            return m.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Ub.test(this.nodeName) && !Tb.test(a) && (this.checked || !W.test(a))
            }).map(function (a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(Sb, "\r\n")
                    }
                }) : {
                        name: b.name,
                        value: c.replace(Sb, "\r\n")
                    }
            }).get()
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zb() || $b()
    } : Zb;
    var Wb = 0,
        Xb = {},
        Yb = m.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in Xb) Xb[a](void 0, !0)
    }), k.cors = !!Yb && "withCredentials" in Yb, Yb = k.ajax = !!Yb, Yb && m.ajaxTransport(function (a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function (c, d) {
                    var e, f = a.xhr(),
                        g = ++Wb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function (c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Xb[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xb[g] = b : b()
                },
                abort: function () {
                    b && b(void 0, !0)
                }
            }
        }
    });

    function Zb() {
        try {
            return new a.XMLHttpRequest
        } catch (b) { }
    }

    function $b() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) { }
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (a) {
                return m.globalEval(a), a
            }
        }
    }), m.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), m.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function (d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function () {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _b = [],
        ac = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var a = _b.pop() || m.expando + "_" + vb++;
            return this[a] = !0, a
        }
    }), m.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ac.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ac, "$1" + e) : b.jsonp !== !1 && (b.url += (wb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || m.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), m.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bc = m.fn.load;
    m.fn.load = function (a, b, c) {
        if ("string" != typeof a && bc) return bc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function (a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        m.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), m.expr.filters.animated = function (a) {
        return m.grep(m.timers, function (b) {
            return a === b.elem
        }).length
    };
    var cc = a.document.documentElement;

    function dc(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    m.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"),
                l = m(a),
                n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
        }
    }, m.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                m.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                top: 0,
                left: 0
            },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function () {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                },
                    d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || cc;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent;
                return a || cc
            })
        }
    }), m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function (d) {
            return V(this, function (a, d, e) {
                var f = dc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), m.each(["top", "left"], function (a, b) {
        m.cssHooks[b] = La(k.pixelPosition, function (a, c) {
            return c ? (c = Ja(a, b), Ha.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }), m.each({
        Height: "height",
        Width: "width"
    }, function (a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function (c, d) {
            m.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function (b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function () {
        return this.length
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return m
    });
    var ec = a.jQuery,
        fc = a.$;
    return m.noConflict = function (b) {
        return a.$ === m && (a.$ = fc), b && a.jQuery === m && (a.jQuery = ec), m
    }, typeof b === K && (a.jQuery = a.$ = m), m
});


! function (t, e, i, s) {
    "use strict";

    function n(t) {
        return ("string" == typeof t || t instanceof String) && (t = t.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), t
    }
    var a = function (e) {
        for (var i = e.length, s = t("head"); i--;) 0 === s.has("." + e[i]).length && s.append('<meta class="' + e[i] + '" />')
    };
    a(["foundation-mq-small", "foundation-mq-small-only", "foundation-mq-medium", "foundation-mq-medium-only", "foundation-mq-large", "foundation-mq-large-only", "foundation-mq-xlarge", "foundation-mq-xlarge-only", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), t(function () {
        "undefined" != typeof FastClick && "undefined" != typeof i.body && FastClick.attach(i.body)
    });
    var o = function (e, s) {
        if ("string" == typeof e) {
            if (s) {
                var n;
                if (s.jquery) {
                    if (n = s[0], !n) return s
                } else n = s;
                return t(n.querySelectorAll(e))
            }
            return t(i.querySelectorAll(e))
        }
        return t(e, s)
    },
        r = function (t) {
            var e = [];
            return t || e.push("data"), this.namespace.length > 0 && e.push(this.namespace), e.push(this.name), e.join("-")
        },
        l = function (t) {
            for (var e = t.split("-"), i = e.length, s = []; i--;) 0 !== i ? s.push(e[i]) : this.namespace.length > 0 ? s.push(this.namespace, e[i]) : s.push(e[i]);
            return s.reverse().join("-")
        },
        d = function (e, i) {
            var s = this,
                n = function () {
                    var n = o(this),
                        a = !n.data(s.attr_name(!0) + "-init");
                    n.data(s.attr_name(!0) + "-init", t.extend({}, s.settings, i || e, s.data_options(n))), a && s.events(this)
                };
            return o(this.scope).is("[" + this.attr_name() + "]") ? n.call(this.scope) : o("[" + this.attr_name() + "]", this.scope).each(n), "string" == typeof e ? this[e].call(this, i) : void 0
        },
        c = function (t, e) {
            function i() {
                e(t[0])
            }

            function s() {
                if (this.one("load", i), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                    var t = this.attr("src"),
                        e = t.match(/\?/) ? "&" : "?";
                    e += "random=" + (new Date).getTime(), this.attr("src", t + e)
                }
            }
            return t.attr("src") ? void (t[0].complete || 4 === t[0].readyState ? i() : s.call(t)) : void i()
        };
    e.matchMedia || (e.matchMedia = function () {
        var t = e.styleMedia || e.media;
        if (!t) {
            var s = i.createElement("style"),
                n = i.getElementsByTagName("script")[0],
                a = null;
            s.type = "text/css", s.id = "matchmediajs-test", n.parentNode.insertBefore(s, n), a = "getComputedStyle" in e && e.getComputedStyle(s, null) || s.currentStyle, t = {
                matchMedium: function (t) {
                    var e = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
                    return s.styleSheet ? s.styleSheet.cssText = e : s.textContent = e, "1px" === a.width
                }
            }
        }
        return function (e) {
            return {
                matches: t.matchMedium(e || "all"),
                media: e || "all"
            }
        }
    }()),
        function (t) {
            function i() {
                s && (o(i), l && t.fx.tick())
            }
            for (var s, n = 0, a = ["webkit", "moz"], o = e.requestAnimationFrame, r = e.cancelAnimationFrame, l = "undefined" != typeof t.fx; n < a.length && !o; n++) o = e[a[n] + "RequestAnimationFrame"], r = r || e[a[n] + "CancelAnimationFrame"] || e[a[n] + "CancelRequestAnimationFrame"];
            o ? (e.requestAnimationFrame = o, e.cancelAnimationFrame = r, l && (t.fx.timer = function (e) {
                e() && t.timers.push(e) && !s && (s = !0, i())
            }, t.fx.stop = function () {
                s = !1
            })) : (e.requestAnimationFrame = function (t) {
                var i = (new Date).getTime(),
                    s = Math.max(0, 16 - (i - n)),
                    a = e.setTimeout(function () {
                        t(i + s)
                    }, s);
                return n = i + s, a
            }, e.cancelAnimationFrame = function (t) {
                clearTimeout(t)
            })
        }(t), e.Foundation = {
            name: "Foundation",
            version: "5.5.2",
            media_queries: {
                small: o(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                "small-only": o(".foundation-mq-small-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                medium: o(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                "medium-only": o(".foundation-mq-medium-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                large: o(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                "large-only": o(".foundation-mq-large-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                xlarge: o(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                "xlarge-only": o(".foundation-mq-xlarge-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                xxlarge: o(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
            },
            stylesheet: t("<style></style>").appendTo("head")[0].sheet,
            global: {
                namespace: s
            },
            init: function (t, i, s, n, a) {
                var r = [t, s, n, a],
                    l = [];
                if (this.rtl = /rtl/i.test(o("html").attr("dir")), this.scope = t || this.scope, this.set_namespace(), i && "string" == typeof i && !/reflow/i.test(i)) this.libs.hasOwnProperty(i) && l.push(this.init_lib(i, r));
                else
                    for (var d in this.libs) l.push(this.init_lib(d, i));
                return o(e).load(function () {
                    o(e).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")
                }), t
            },
            init_lib: function (e, i) {
                return this.libs.hasOwnProperty(e) ? (this.patch(this.libs[e]), i && i.hasOwnProperty(e) ? ("undefined" != typeof this.libs[e].settings ? t.extend(!0, this.libs[e].settings, i[e]) : "undefined" != typeof this.libs[e].defaults && t.extend(!0, this.libs[e].defaults, i[e]), this.libs[e].init.apply(this.libs[e], [this.scope, i[e]])) : (i = i instanceof Array ? i : new Array(i), this.libs[e].init.apply(this.libs[e], i))) : function () { }
            },
            patch: function (t) {
                t.scope = this.scope, t.namespace = this.global.namespace, t.rtl = this.rtl, t.data_options = this.utils.data_options, t.attr_name = r, t.add_namespace = l, t.bindings = d, t.S = this.utils.S
            },
            inherit: function (t, e) {
                for (var i = e.split(" "), s = i.length; s--;) this.utils.hasOwnProperty(i[s]) && (t[i[s]] = this.utils[i[s]])
            },
            set_namespace: function () {
                var e = this.global.namespace === s ? t(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
                this.global.namespace = e === s || /false/i.test(e) ? "" : e
            },
            libs: {},
            utils: {
                S: o,
                throttle: function (t, e) {
                    var i = null;
                    return function () {
                        var s = this,
                            n = arguments;
                        null == i && (i = setTimeout(function () {
                            t.apply(s, n), i = null
                        }, e))
                    }
                },
                debounce: function (t, e, i) {
                    var s, n;
                    return function () {
                        var a = this,
                            o = arguments,
                            r = function () {
                                s = null, i || (n = t.apply(a, o))
                            },
                            l = i && !s;
                        return clearTimeout(s), s = setTimeout(r, e), l && (n = t.apply(a, o)), n
                    }
                },
                data_options: function (e, i) {
                    function s(t) {
                        return !isNaN(t - 0) && null !== t && "" !== t && t !== !1 && t !== !0
                    }

                    function n(e) {
                        return "string" == typeof e ? t.trim(e) : e
                    }
                    i = i || "options";
                    var a, o, r, l = {},
                        d = function (t) {
                            var e = Foundation.global.namespace;
                            return t.data(e.length > 0 ? e + "-" + i : i)
                        },
                        c = d(e);
                    if ("object" == typeof c) return c;
                    for (r = (c || ":").split(";"), a = r.length; a--;) o = r[a].split(":"), o = [o[0], o.slice(1).join(":")], /true/i.test(o[1]) && (o[1] = !0), /false/i.test(o[1]) && (o[1] = !1), s(o[1]) && (o[1] = -1 === o[1].indexOf(".") ? parseInt(o[1], 10) : parseFloat(o[1])), 2 === o.length && o[0].length > 0 && (l[n(o[0])] = n(o[1]));
                    return l
                },
                register_media: function (e, i) {
                    Foundation.media_queries[e] === s && (t("head").append('<meta class="' + i + '"/>'), Foundation.media_queries[e] = n(t("." + i).css("font-family")))
                },
                add_custom_rule: function (t, e) {
                    if (e === s && Foundation.stylesheet) Foundation.stylesheet.insertRule(t, Foundation.stylesheet.cssRules.length);
                    else {
                        var i = Foundation.media_queries[e];
                        i !== s && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[e] + "{ " + t + " }", Foundation.stylesheet.cssRules.length)
                    }
                },
                image_loaded: function (t, e) {
                    function i(t) {
                        for (var e = t.length, i = e - 1; i >= 0; i--)
                            if (t.attr("height") === s) return !1;
                        return !0
                    }
                    var n = this,
                        a = t.length;
                    (0 === a || i(t)) && e(t), t.each(function () {
                        c(n.S(this), function () {
                            a -= 1, 0 === a && e(t)
                        })
                    })
                },
                random_str: function () {
                    return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [this.name || "F", (+new Date).toString(36)].join("-"), this.prefix + (this.fidx++).toString(36)
                },
                match: function (t) {
                    return e.matchMedia(t).matches
                },
                is_small_up: function () {
                    return this.match(Foundation.media_queries.small)
                },
                is_medium_up: function () {
                    return this.match(Foundation.media_queries.medium)
                },
                is_large_up: function () {
                    return this.match(Foundation.media_queries.large)
                },
                is_xlarge_up: function () {
                    return this.match(Foundation.media_queries.xlarge)
                },
                is_xxlarge_up: function () {
                    return this.match(Foundation.media_queries.xxlarge)
                },
                is_small_only: function () {
                    return !(this.is_medium_up() || this.is_large_up() || this.is_xlarge_up() || this.is_xxlarge_up())
                },
                is_medium_only: function () {
                    return this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
                },
                is_large_only: function () {
                    return this.is_medium_up() && this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
                },
                is_xlarge_only: function () {
                    return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && !this.is_xxlarge_up()
                },
                is_xxlarge_only: function () {
                    return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && this.is_xxlarge_up()
                }
            }
        }, t.fn.foundation = function () {
            var t = Array.prototype.slice.call(arguments, 0);
            return this.each(function () {
                return Foundation.init.apply(Foundation, [this].concat(t)), this
            })
        }
}(jQuery, window, window.document),
    function (t, e) {
        "use strict";
        Foundation.libs.slider = {
            name: "slider",
            version: "5.5.2",
            settings: {
                start: 0,
                end: 100,
                step: 1,
                precision: null,
                initial: null,
                display_selector: "",
                vertical: !1,
                trigger_input_change: !1,
                on_change: function () { }
            },
            cache: {},
            init: function (t, e, i) {
                Foundation.inherit(this, "throttle"), this.bindings(e, i), this.reflow()
            },
            events: function () {
                var i = this;
                t(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider", "[" + i.attr_name() + "]:not(.disabled, [disabled]) .range-slider-handle", function (e) {
                    i.cache.active || (e.preventDefault(), i.set_active_slider(t(e.target)))
                }).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider", function (s) {
                    if (i.cache.active)
                        if (s.preventDefault(), t.data(i.cache.active[0], "settings").vertical) {
                            var n = 0;
                            s.pageY || (n = e.scrollY), i.calculate_position(i.cache.active, i.get_cursor_position(s, "y") + n)
                        } else i.calculate_position(i.cache.active, i.get_cursor_position(s, "x"))
                }).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider", function () {
                    i.remove_active_slider()
                }).on("change.fndtn.slider", function () {
                    i.settings.on_change()
                }), i.S(e).on("resize.fndtn.slider", i.throttle(function () {
                    i.reflow()
                }, 300)), this.S("[" + this.attr_name() + "]").each(function () {
                    var e = t(this),
                        s = e.children(".range-slider-handle")[0],
                        n = i.initialize_settings(s);
                    "" != n.display_selector && t(n.display_selector).each(function () {
                        this.hasOwnProperty("value") && t(this).change(function () {
                            e.foundation("slider", "set_value", t(this).val())
                        })
                    })
                })
            },
            get_cursor_position: function (t, e) {
                var i, s = "page" + e.toUpperCase(),
                    n = "client" + e.toUpperCase();
                return "undefined" != typeof t[s] ? i = t[s] : "undefined" != typeof t.originalEvent[n] ? i = t.originalEvent[n] : t.originalEvent.touches && t.originalEvent.touches[0] && "undefined" != typeof t.originalEvent.touches[0][n] ? i = t.originalEvent.touches[0][n] : t.currentPoint && "undefined" != typeof t.currentPoint[e] && (i = t.currentPoint[e]), i
            },
            set_active_slider: function (t) {
                this.cache.active = t
            },
            remove_active_slider: function () {
                this.cache.active = null
            },
            calculate_position: function (e, i) {
                var s = this,
                    n = t.data(e[0], "settings"),
                    a = (t.data(e[0], "handle_l"), t.data(e[0], "handle_o"), t.data(e[0], "bar_l")),
                    o = t.data(e[0], "bar_o");
                requestAnimationFrame(function () {
                    var t;
                    t = Foundation.rtl && !n.vertical ? s.limit_to((o + a - i) / a, 0, 1) : s.limit_to((i - o) / a, 0, 1), t = n.vertical ? 1 - t : t;
                    var r = s.normalized_value(t, n.start, n.end, n.step, n.precision);
                    s.set_ui(e, r)
                })
            },
            set_ui: function (e, i) {
                var s = t.data(e[0], "settings"),
                    n = t.data(e[0], "handle_l"),
                    a = t.data(e[0], "bar_l"),
                    o = this.normalized_percentage(i, s.start, s.end),
                    r = o * (a - n) - 1,
                    l = 100 * o,
                    d = e.parent(),
                    c = e.parent().children("input[type=hidden]");
                Foundation.rtl && !s.vertical && (r = -r), r = s.vertical ? -r + a - n + 1 : r, this.set_translate(e, r, s.vertical), s.vertical ? e.siblings(".range-slider-active-segment").css("height", l + "%") : e.siblings(".range-slider-active-segment").css("width", l + "%"), d.attr(this.attr_name(), i).trigger("change.fndtn.slider"), c.val(i), s.trigger_input_change && c.trigger("change.fndtn.slider"), e[0].hasAttribute("aria-valuemin") || e.attr({
                    "aria-valuemin": s.start,
                    "aria-valuemax": s.end
                }), e.attr("aria-valuenow", i), "" != s.display_selector && t(s.display_selector).each(function () {
                    this.hasAttribute("value") ? t(this).val(i) : t(this).text(i)
                })
            },
            normalized_percentage: function (t, e, i) {
                return Math.min(1, (t - e) / (i - e))
            },
            normalized_value: function (t, e, i, s, n) {
                var a = i - e,
                    o = t * a,
                    r = (o - o % s) / s,
                    l = o % s,
                    d = l >= .5 * s ? s : 0;
                return (r * s + d + e).toFixed(n)
            },
            set_translate: function (e, i, s) {
                s ? t(e).css("-webkit-transform", "translateY(" + i + "px)").css("-moz-transform", "translateY(" + i + "px)").css("-ms-transform", "translateY(" + i + "px)").css("-o-transform", "translateY(" + i + "px)").css("transform", "translateY(" + i + "px)") : t(e).css("-webkit-transform", "translateX(" + i + "px)").css("-moz-transform", "translateX(" + i + "px)").css("-ms-transform", "translateX(" + i + "px)").css("-o-transform", "translateX(" + i + "px)").css("transform", "translateX(" + i + "px)")
            },
            limit_to: function (t, e, i) {
                return Math.min(Math.max(t, e), i)
            },
            initialize_settings: function (e) {
                var i, s = t.extend({}, this.settings, this.data_options(t(e).parent()));
                return null === s.precision && (i = ("" + s.step).match(/\.([\d]*)/), s.precision = i && i[1] ? i[1].length : 0), s.vertical ? (t.data(e, "bar_o", t(e).parent().offset().top), t.data(e, "bar_l", t(e).parent().outerHeight()), t.data(e, "handle_o", t(e).offset().top), t.data(e, "handle_l", t(e).outerHeight())) : (t.data(e, "bar_o", t(e).parent().offset().left), t.data(e, "bar_l", t(e).parent().outerWidth()), t.data(e, "handle_o", t(e).offset().left), t.data(e, "handle_l", t(e).outerWidth())), t.data(e, "bar", t(e).parent()), t.data(e, "settings", s)
            },
            set_initial_position: function (e) {
                var i = t.data(e.children(".range-slider-handle")[0], "settings"),
                    s = "number" != typeof i.initial || isNaN(i.initial) ? Math.floor(.5 * (i.end - i.start) / i.step) * i.step + i.start : i.initial,
                    n = e.children(".range-slider-handle");
                this.set_ui(n, s)
            },
            set_value: function (e) {
                var i = this;
                t("[" + i.attr_name() + "]", this.scope).each(function () {
                    t(this).attr(i.attr_name(), e)
                }), t(this.scope).attr(i.attr_name()) && t(this.scope).attr(i.attr_name(), e), i.reflow()
            },
            reflow: function () {
                var e = this;
                e.S("[" + this.attr_name() + "]").each(function () {
                    var i = t(this).children(".range-slider-handle")[0],
                        s = t(this).attr(e.attr_name());
                    e.initialize_settings(i), s ? e.set_ui(t(i), parseFloat(s)) : e.set_initial_position(t(this))
                })
            }
        }
    }(jQuery, window, window.document),
    function (t, e, i, s) {
        "use strict";
        Foundation.libs.joyride = {
            name: "joyride",
            version: "5.5.2",
            defaults: {
                expose: !1,
                modal: !0,
                keyboard: !0,
                tip_location: "bottom",
                nub_position: "auto",
                scroll_speed: 1500,
                scroll_animation: "linear",
                timer: 0,
                start_timer_on_click: !0,
                start_offset: 0,
                next_button: !0,
                prev_button: !0,
                tip_animation: "fade",
                pause_after: [],
                exposed: [],
                tip_animation_fade_speed: 300,
                cookie_monster: !1,
                cookie_name: "joyride",
                cookie_domain: !1,
                cookie_expires: 365,
                tip_container: "body",
                abort_on_close: !0,
                tip_location_patterns: {
                    top: ["bottom"],
                    bottom: [],
                    left: ["right", "top", "bottom"],
                    right: ["left", "top", "bottom"]
                },
                post_ride_callback: function () { },
                post_step_callback: function () { },
                pre_step_callback: function () { },
                pre_ride_callback: function () { },
                post_expose_callback: function () { },
                template: {
                    link: '<a href="#close" class="joyride-close-tip">&times;</a>',
                    timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
                    tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
                    wrapper: '<div class="joyride-content-wrapper"></div>',
                    button: '<a href="#" class="small button joyride-next-tip"></a>',
                    prev_button: '<a href="#" class="small button joyride-prev-tip"></a>',
                    modal: '<div class="joyride-modal-bg"></div>',
                    expose: '<div class="joyride-expose-wrapper"></div>',
                    expose_cover: '<div class="joyride-expose-cover"></div>'
                },
                expose_add_class: ""
            },
            init: function (e, i, s) {
                Foundation.inherit(this, "throttle random_str"), this.settings = this.settings || t.extend({}, this.defaults, s || i), this.bindings(i, s)
            },
            go_next: function () {
                this.settings.$li.next().length < 1 ? this.end() : this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(), this.startTimer()) : (this.hide(), this.show())
            },
            go_prev: function () {
                this.settings.$li.prev().length < 1 || (this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(null, !0), this.startTimer()) : (this.hide(), this.show(null, !0)))
            },
            events: function () {
                var i = this;
                t(this.scope).off(".joyride").on("click.fndtn.joyride", ".joyride-next-tip, .joyride-modal-bg", function (t) {
                    t.preventDefault(), this.go_next()
                }.bind(this)).on("click.fndtn.joyride", ".joyride-prev-tip", function (t) {
                    t.preventDefault(), this.go_prev()
                }.bind(this)).on("click.fndtn.joyride", ".joyride-close-tip", function (t) {
                    t.preventDefault(), this.end(this.settings.abort_on_close)
                }.bind(this)).on("keyup.fndtn.joyride", function (t) {
                    if (this.settings.keyboard && this.settings.riding) switch (t.which) {
                        case 39:
                            t.preventDefault(), this.go_next();
                            break;
                        case 37:
                            t.preventDefault(), this.go_prev();
                            break;
                        case 27:
                            t.preventDefault(), this.end(this.settings.abort_on_close)
                    }
                }.bind(this)), t(e).off(".joyride").on("resize.fndtn.joyride", i.throttle(function () {
                    if (t("[" + i.attr_name() + "]").length > 0 && i.settings.$next_tip && i.settings.riding) {
                        if (i.settings.exposed.length > 0) {
                            var e = t(i.settings.exposed);
                            e.each(function () {
                                var e = t(this);
                                i.un_expose(e), i.expose(e)
                            })
                        }
                        i.is_phone() ? i.pos_phone() : i.pos_default(!1)
                    }
                }, 100))
            },
            start: function () {
                var e = this,
                    i = t("[" + this.attr_name() + "]", this.scope),
                    s = ["timer", "scrollSpeed", "startOffset", "tipAnimationFadeSpeed", "cookieExpires"],
                    n = s.length;
                !i.length > 0 || (this.settings.init || this.events(), this.settings = i.data(this.attr_name(!0) + "-init"), this.settings.$content_el = i, this.settings.$body = t(this.settings.tip_container), this.settings.body_offset = t(this.settings.tip_container).position(), this.settings.$tip_content = this.settings.$content_el.find("> li"), this.settings.paused = !1, this.settings.attempts = 0, this.settings.riding = !0, "function" != typeof t.cookie && (this.settings.cookie_monster = !1), (!this.settings.cookie_monster || this.settings.cookie_monster && !t.cookie(this.settings.cookie_name)) && (this.settings.$tip_content.each(function (i) {
                    var a = t(this);
                    this.settings = t.extend({}, e.defaults, e.data_options(a));
                    for (var o = n; o--;) e.settings[s[o]] = parseInt(e.settings[s[o]], 10);
                    e.create({
                        $li: a,
                        index: i
                    })
                }), !this.settings.start_timer_on_click && this.settings.timer > 0 ? (this.show("init"), this.startTimer()) : this.show("init")))
            },
            resume: function () {
                this.set_li(), this.show()
            },
            tip_template: function (e) {
                var i, s;
                return e.tip_class = e.tip_class || "", i = t(this.settings.template.tip).addClass(e.tip_class), s = t.trim(t(e.li).html()) + this.prev_button_text(e.prev_button_text, e.index) + this.button_text(e.button_text) + this.settings.template.link + this.timer_instance(e.index), i.append(t(this.settings.template.wrapper)), i.first().attr(this.add_namespace("data-index"), e.index), t(".joyride-content-wrapper", i).append(s), i[0]
            },
            timer_instance: function (e) {
                var i;
                return i = 0 === e && this.settings.start_timer_on_click && this.settings.timer > 0 || 0 === this.settings.timer ? "" : t(this.settings.template.timer)[0].outerHTML
            },
            button_text: function (e) {
                return this.settings.tip_settings.next_button ? (e = t.trim(e) || "Next", e = t(this.settings.template.button).append(e)[0].outerHTML) : e = "", e
            },
            prev_button_text: function (e, i) {
                return this.settings.tip_settings.prev_button ? (e = t.trim(e) || "Previous", e = 0 == i ? t(this.settings.template.prev_button).append(e).addClass("disabled")[0].outerHTML : t(this.settings.template.prev_button).append(e)[0].outerHTML) : e = "", e
            },
            create: function (e) {
                this.settings.tip_settings = t.extend({}, this.settings, this.data_options(e.$li));
                var i = e.$li.attr(this.add_namespace("data-button")) || e.$li.attr(this.add_namespace("data-text")),
                    s = e.$li.attr(this.add_namespace("data-button-prev")) || e.$li.attr(this.add_namespace("data-prev-text")),
                    n = e.$li.attr("class"),
                    a = t(this.tip_template({
                        tip_class: n,
                        index: e.index,
                        button_text: i,
                        prev_button_text: s,
                        li: e.$li
                    }));
                t(this.settings.tip_container).append(a)
            },
            show: function (e, i) {
                var n = null;
                if (this.settings.$li === s || -1 === t.inArray(this.settings.$li.index(), this.settings.pause_after))
                    if (this.settings.paused ? this.settings.paused = !1 : this.set_li(e, i), this.settings.attempts = 0, this.settings.$li.length && this.settings.$target.length > 0) {
                        if (e && (this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.show_modal()), this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.settings.expose && this.expose(), this.settings.tip_settings = t.extend({}, this.settings, this.data_options(this.settings.$li)), this.settings.timer = parseInt(this.settings.timer, 10), this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location], !/body/i.test(this.settings.$target.selector)) {
                            var a = t(".joyride-modal-bg");
                            /pop/i.test(this.settings.tipAnimation) ? a.hide() : a.fadeOut(this.settings.tipAnimationFadeSpeed), this.scroll_to()
                        }
                        this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0), n = this.settings.$next_tip.find(".joyride-timer-indicator"), /pop/i.test(this.settings.tip_animation) ? (n.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.show(), setTimeout(function () {
                            n.animate({
                                width: n.parent().width()
                            }, this.settings.timer, "linear")
                        }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.show()) : /fade/i.test(this.settings.tip_animation) && (n.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(), setTimeout(function () {
                            n.animate({
                                width: n.parent().width()
                            }, this.settings.timer, "linear")
                        }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)), this.settings.$current_tip = this.settings.$next_tip
                    } else this.settings.$li && this.settings.$target.length < 1 ? this.show(e, i) : this.end();
                else this.settings.paused = !0
            },
            is_phone: function () {
                return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
            },
            hide: function () {
                this.settings.modal && this.settings.expose && this.un_expose(), this.settings.modal || t(".joyride-modal-bg").hide(), this.settings.$current_tip.css("visibility", "hidden"), setTimeout(t.proxy(function () {
                    this.hide(), this.css("visibility", "visible")
                }, this.settings.$current_tip), 0), this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip)
            },
            set_li: function (t, e) {
                t ? (this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset), this.set_next_tip(), this.settings.$current_tip = this.settings.$next_tip) : (this.settings.$li = e ? this.settings.$li.prev() : this.settings.$li.next(), this.set_next_tip()), this.set_target()
            },
            set_next_tip: function () {
                this.settings.$next_tip = t(".joyride-tip-guide").eq(this.settings.$li.index()), this.settings.$next_tip.data("closed", "")
            },
            set_target: function () {
                var e = this.settings.$li.attr(this.add_namespace("data-class")),
                    s = this.settings.$li.attr(this.add_namespace("data-id")),
                    n = function () {
                        return s ? t(i.getElementById(s)) : e ? t("." + e).first() : t("body")
                    };
                this.settings.$target = n()
            },
            scroll_to: function () {
                var i, s;
                i = t(e).height() / 2, s = Math.ceil(this.settings.$target.offset().top - i + this.settings.$next_tip.outerHeight()), 0 != s && t("html, body").stop().animate({
                    scrollTop: s
                }, this.settings.scroll_speed, "swing")
            },
            paused: function () {
                return -1 === t.inArray(this.settings.$li.index() + 1, this.settings.pause_after)
            },
            restart: function () {
                this.hide(), this.settings.$li = s, this.show("init")
            },
            pos_default: function (t) {
                var e = this.settings.$next_tip.find(".joyride-nub"),
                    i = Math.ceil(e.outerWidth() / 2),
                    s = Math.ceil(e.outerHeight() / 2),
                    n = t || !1;
                if (n && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector)) this.settings.$li.length && this.pos_modal(e);
                else {
                    var a = this.settings.tip_settings.tipAdjustmentY ? parseInt(this.settings.tip_settings.tipAdjustmentY) : 0,
                        o = this.settings.tip_settings.tipAdjustmentX ? parseInt(this.settings.tip_settings.tipAdjustmentX) : 0;
                    this.bottom() ? (this.settings.$next_tip.css(this.rtl ? {
                        top: this.settings.$target.offset().top + s + this.settings.$target.outerHeight() + a,
                        left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth() + o
                    } : {
                            top: this.settings.$target.offset().top + s + this.settings.$target.outerHeight() + a,
                            left: this.settings.$target.offset().left + o
                        }), this.nub_position(e, this.settings.tip_settings.nub_position, "top")) : this.top() ? (this.settings.$next_tip.css(this.rtl ? {
                            top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - s + a,
                            left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()
                        } : {
                                top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - s + a,
                                left: this.settings.$target.offset().left + o
                            }), this.nub_position(e, this.settings.tip_settings.nub_position, "bottom")) : this.right() ? (this.settings.$next_tip.css({
                                top: this.settings.$target.offset().top + a,
                                left: this.settings.$target.outerWidth() + this.settings.$target.offset().left + i + o
                            }), this.nub_position(e, this.settings.tip_settings.nub_position, "left")) : this.left() && (this.settings.$next_tip.css({
                                top: this.settings.$target.offset().top + a,
                                left: this.settings.$target.offset().left - this.settings.$next_tip.outerWidth() - i + o
                            }), this.nub_position(e, this.settings.tip_settings.nub_position, "right")), !this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length && (e.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts], this.settings.attempts++ , this.pos_default())
                }
                n && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
            },
            pos_phone: function (e) {
                var i = this.settings.$next_tip.outerHeight(),
                    s = (this.settings.$next_tip.offset(), this.settings.$target.outerHeight()),
                    n = t(".joyride-nub", this.settings.$next_tip),
                    a = Math.ceil(n.outerHeight() / 2),
                    o = e || !1;
                n.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), o && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(n) : this.top() ? (this.settings.$next_tip.offset({
                    top: this.settings.$target.offset().top - i - a
                }), n.addClass("bottom")) : (this.settings.$next_tip.offset({
                    top: this.settings.$target.offset().top + s + a
                }), n.addClass("top")), o && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
            },
            pos_modal: function (t) {
                this.center(), t.hide(), this.show_modal()
            },
            show_modal: function () {
                if (!this.settings.$next_tip.data("closed")) {
                    var e = t(".joyride-modal-bg");
                    if (e.length < 1) {
                        var e = t(this.settings.template.modal);
                        e.appendTo("body")
                    }
                    /pop/i.test(this.settings.tip_animation) ? e.show() : e.fadeIn(this.settings.tip_animation_fade_speed)
                }
            },
            expose: function () {
                var i, s, n, a, o, r = "expose-" + this.random_str(6);
                if (arguments.length > 0 && arguments[0] instanceof t) n = arguments[0];
                else {
                    if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
                    n = this.settings.$target
                }
                return n.length < 1 ? (e.console && console.error("element not valid", n), !1) : (i = t(this.settings.template.expose), this.settings.$body.append(i), i.css({
                    top: n.offset().top,
                    left: n.offset().left,
                    width: n.outerWidth(!0),
                    height: n.outerHeight(!0)
                }), s = t(this.settings.template.expose_cover), a = {
                    zIndex: n.css("z-index"),
                    position: n.css("position")
                }, o = null == n.attr("class") ? "" : n.attr("class"), n.css("z-index", parseInt(i.css("z-index")) + 1), "static" == a.position && n.css("position", "relative"), n.data("expose-css", a), n.data("orig-class", o), n.attr("class", o + " " + this.settings.expose_add_class), s.css({
                    top: n.offset().top,
                    left: n.offset().left,
                    width: n.outerWidth(!0),
                    height: n.outerHeight(!0)
                }), this.settings.modal && this.show_modal(), this.settings.$body.append(s), i.addClass(r), s.addClass(r), n.data("expose", r), this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, n), void this.add_exposed(n))
            },
            un_expose: function () {
                var i, s, n, a, o, r = !1;
                if (arguments.length > 0 && arguments[0] instanceof t) s = arguments[0];
                else {
                    if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
                    s = this.settings.$target
                }
                return s.length < 1 ? (e.console && console.error("element not valid", s), !1) : (i = s.data("expose"), n = t("." + i), arguments.length > 1 && (r = arguments[1]), r === !0 ? t(".joyride-expose-wrapper,.joyride-expose-cover").remove() : n.remove(), a = s.data("expose-css"), "auto" == a.zIndex ? s.css("z-index", "") : s.css("z-index", a.zIndex), a.position != s.css("position") && ("static" == a.position ? s.css("position", "") : s.css("position", a.position)), o = s.data("orig-class"), s.attr("class", o), s.removeData("orig-classes"), s.removeData("expose"), s.removeData("expose-z-index"), void this.remove_exposed(s))
            },
            add_exposed: function (e) {
                this.settings.exposed = this.settings.exposed || [], e instanceof t || "object" == typeof e ? this.settings.exposed.push(e[0]) : "string" == typeof e && this.settings.exposed.push(e)
            },
            remove_exposed: function (e) {
                var i, s;
                for (e instanceof t ? i = e[0] : "string" == typeof e && (i = e), this.settings.exposed = this.settings.exposed || [], s = this.settings.exposed.length; s--;)
                    if (this.settings.exposed[s] == i) return void this.settings.exposed.splice(s, 1)
            },
            center: function () {
                var i = t(e);
                return this.settings.$next_tip.css({
                    top: (i.height() - this.settings.$next_tip.outerHeight()) / 2 + i.scrollTop(),
                    left: (i.width() - this.settings.$next_tip.outerWidth()) / 2 + i.scrollLeft()
                }), !0
            },
            bottom: function () {
                return /bottom/i.test(this.settings.tip_settings.tip_location)
            },
            top: function () {
                return /top/i.test(this.settings.tip_settings.tip_location)
            },
            right: function () {
                return /right/i.test(this.settings.tip_settings.tip_location)
            },
            left: function () {
                return /left/i.test(this.settings.tip_settings.tip_location)
            },
            corners: function (i) {
                var s = t(e),
                    n = s.height() / 2,
                    a = Math.ceil(this.settings.$target.offset().top - n + this.settings.$next_tip.outerHeight()),
                    o = s.width() + s.scrollLeft(),
                    r = s.height() + a,
                    l = s.height() + s.scrollTop(),
                    d = s.scrollTop();
                return d > a && (d = 0 > a ? 0 : a), r > l && (l = r), [i.offset().top < d, o < i.offset().left + i.outerWidth(), l < i.offset().top + i.outerHeight(), s.scrollLeft() > i.offset().left]
            },
            visible: function (t) {
                for (var e = t.length; e--;)
                    if (t[e]) return !1;
                return !0
            },
            nub_position: function (t, e, i) {
                t.addClass("auto" === e ? i : e)
            },
            startTimer: function () {
                this.settings.$li.length ? this.settings.automate = setTimeout(function () {
                    this.hide(), this.show(), this.startTimer()
                }.bind(this), this.settings.timer) : clearTimeout(this.settings.automate)
            },
            end: function (e) {
                this.settings.cookie_monster && t.cookie(this.settings.cookie_name, "ridden", {
                    expires: this.settings.cookie_expires,
                    domain: this.settings.cookie_domain
                }), this.settings.timer > 0 && clearTimeout(this.settings.automate), this.settings.modal && this.settings.expose && this.un_expose(), t(this.scope).off("keyup.joyride"), this.settings.$next_tip.data("closed", !0), this.settings.riding = !1, t(".joyride-modal-bg").hide(), this.settings.$current_tip.hide(), ("undefined" == typeof e || e === !1) && (this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip), this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip)), t(".joyride-tip-guide").remove()
            },
            off: function () {
                t(this.scope).off(".joyride"), t(e).off(".joyride"), t(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"), t(".joyride-tip-guide, .joyride-modal-bg").remove(), clearTimeout(this.settings.automate), this.settings = {}
            },
            reflow: function () { }
        }
    }(jQuery, window, window.document),
    function (t, e) {
        "use strict";
        Foundation.libs.equalizer = {
            name: "equalizer",
            version: "5.5.2",
            settings: {
                use_tallest: !0,
                before_height_change: t.noop,
                after_height_change: t.noop,
                equalize_on_stack: !1,
                act_on_hidden_el: !1
            },
            init: function (t, e, i) {
                Foundation.inherit(this, "image_loaded"), this.bindings(e, i), this.reflow()
            },
            events: function () {
                this.S(e).off(".equalizer").on("resize.fndtn.equalizer", function () {
                    this.reflow()
                }.bind(this))
            },
            equalize: function (e) {
                var i, s, n = !1,
                    a = e.data("equalizer"),
                    o = e.data(this.attr_name(!0) + "-init") || this.settings;
                if (i = e.find(o.act_on_hidden_el ? a ? "[" + this.attr_name() + '-watch="' + a + '"]' : "[" + this.attr_name() + "-watch]" : a ? "[" + this.attr_name() + '-watch="' + a + '"]:visible' : "[" + this.attr_name() + "-watch]:visible"), 0 !== i.length && (o.before_height_change(), e.trigger("before-height-change.fndth.equalizer"), i.height("inherit"), o.equalize_on_stack !== !1 || (s = i.first().offset().top, i.each(function () {
                    return t(this).offset().top !== s ? (n = !0, !1) : void 0
                }), !n))) {
                    var r = i.map(function () {
                        return t(this).outerHeight(!1)
                    }).get();
                    if (o.use_tallest) {
                        var l = Math.max.apply(null, r);
                        i.css("height", l)
                    } else {
                        var d = Math.min.apply(null, r);
                        i.css("height", d)
                    }
                    o.after_height_change(), e.trigger("after-height-change.fndtn.equalizer")
                }
            },
            reflow: function () {
                var e = this;
                this.S("[" + this.attr_name() + "]", this.scope).each(function () {
                    var i = t(this),
                        s = i.data("equalizer-mq"),
                        n = !0;
                    s && (s = "is_" + s.replace(/-/g, "_"), Foundation.utils.hasOwnProperty(s) && (n = !1)), e.image_loaded(e.S("img", this), function () {
                        if (n || Foundation.utils[s]()) e.equalize(i);
                        else {
                            var t = i.find("[" + e.attr_name() + "-watch]:visible");
                            t.css("height", "auto")
                        }
                    })
                })
            }
        }
    }(jQuery, window, window.document),
    function (t, e, i) {
        "use strict";
        Foundation.libs.dropdown = {
            name: "dropdown",
            version: "5.5.2",
            settings: {
                active_class: "open",
                disabled_class: "disabled",
                mega_class: "mega",
                align: "bottom",
                is_hover: !1,
                hover_timeout: 150,
                opened: function () { },
                closed: function () { }
            },
            init: function (e, i, s) {
                Foundation.inherit(this, "throttle"), t.extend(!0, this.settings, i, s), this.bindings(i, s)
            },
            events: function () {
                var s = this,
                    n = s.S;
                n(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[" + this.attr_name() + "]", function (e) {
                    var i = n(this).data(s.attr_name(!0) + "-init") || s.settings;
                    (!i.is_hover || Modernizr.touch) && (e.preventDefault(), n(this).parent("[data-reveal-id]").length && e.stopPropagation(), s.toggle(t(this)))
                }).on("mouseenter.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function (t) {
                    var e, i, a = n(this);
                    clearTimeout(s.timeout), a.data(s.data_attr()) ? (e = n("#" + a.data(s.data_attr())), i = a) : (e = a, i = n("[" + s.attr_name() + '="' + e.attr("id") + '"]'));
                    var o = i.data(s.attr_name(!0) + "-init") || s.settings;
                    n(t.currentTarget).data(s.data_attr()) && o.is_hover && s.closeall.call(s), o.is_hover && s.open.apply(s, [e, i])
                }).on("mouseleave.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function () {
                    var t, e = n(this);
                    if (e.data(s.data_attr())) t = e.data(s.data_attr(!0) + "-init") || s.settings;
                    else var i = n("[" + s.attr_name() + '="' + n(this).attr("id") + '"]'),
                        t = i.data(s.attr_name(!0) + "-init") || s.settings;
                    s.timeout = setTimeout(function () {
                        e.data(s.data_attr()) ? t.is_hover && s.close.call(s, n("#" + e.data(s.data_attr()))) : t.is_hover && s.close.call(s, e)
                    }.bind(this), t.hover_timeout)
                }).on("click.fndtn.dropdown", function (e) {
                    var a = n(e.target).closest("[" + s.attr_name() + "-content]"),
                        o = a.find("a");
                    return o.length > 0 && "false" !== a.attr("aria-autoclose") && s.close.call(s, n("[" + s.attr_name() + "-content]")), e.target !== i && !t.contains(i.documentElement, e.target) || n(e.target).closest("[" + s.attr_name() + "]").length > 0 ? void 0 : !n(e.target).data("revealId") && a.length > 0 && (n(e.target).is("[" + s.attr_name() + "-content]") || t.contains(a.first()[0], e.target)) ? void e.stopPropagation() : void s.close.call(s, n("[" + s.attr_name() + "-content]"))
                }).on("opened.fndtn.dropdown", "[" + s.attr_name() + "-content]", function () {
                    s.settings.opened.call(this)
                }).on("closed.fndtn.dropdown", "[" + s.attr_name() + "-content]", function () {
                    s.settings.closed.call(this)
                }), n(e).off(".dropdown").on("resize.fndtn.dropdown", s.throttle(function () {
                    s.resize.call(s)
                }, 50)), this.resize()
            },
            close: function (e) {
                var i = this;
                e.each(function (s) {
                    var n = t("[" + i.attr_name() + "=" + e[s].id + "]") || t("aria-controls=" + e[s].id + "]");
                    n.attr("aria-expanded", "false"), i.S(this).hasClass(i.settings.active_class) && (i.S(this).css(Foundation.rtl ? "right" : "left", "-99999px").attr("aria-hidden", "true").removeClass(i.settings.active_class).prev("[" + i.attr_name() + "]").removeClass(i.settings.active_class).removeData("target"), i.S(this).trigger("closed.fndtn.dropdown", [e]))
                }), e.removeClass("f-open-" + this.attr_name(!0))
            },
            closeall: function () {
                var e = this;
                t.each(e.S(".f-open-" + this.attr_name(!0)), function () {
                    e.close.call(e, e.S(this))
                })
            },
            open: function (t, e) {
                this.css(t.addClass(this.settings.active_class), e), t.prev("[" + this.attr_name() + "]").addClass(this.settings.active_class), t.data("target", e.get(0)).trigger("opened.fndtn.dropdown", [t, e]), t.attr("aria-hidden", "false"), e.attr("aria-expanded", "true"), t.focus(), t.addClass("f-open-" + this.attr_name(!0))
            },
            data_attr: function () {
                return this.namespace.length > 0 ? this.namespace + "-" + this.name : this.name
            },
            toggle: function (t) {
                if (!t.hasClass(this.settings.disabled_class)) {
                    var e = this.S("#" + t.data(this.data_attr()));
                    0 !== e.length && (this.close.call(this, this.S("[" + this.attr_name() + "-content]").not(e)), e.hasClass(this.settings.active_class) ? (this.close.call(this, e), e.data("target") !== t.get(0) && this.open.call(this, e, t)) : this.open.call(this, e, t))
                }
            },
            resize: function () {
                var e = this.S("[" + this.attr_name() + "-content].open"),
                    i = t(e.data("target"));
                e.length && i.length && this.css(e, i)
            },
            css: function (t, e) {
                var i = Math.max((e.width() - t.width()) / 2, 8),
                    s = e.data(this.attr_name(!0) + "-init") || this.settings,
                    n = t.parent().css("overflow-y") || t.parent().css("overflow");
                if (this.clear_idx(), this.small()) {
                    var a = this.dirs.bottom.call(t, e, s);
                    t.attr("style", "").removeClass("drop-left drop-right drop-top").css({
                        position: "absolute",
                        width: "95%",
                        "max-width": "none",
                        top: a.top
                    }), t.css(Foundation.rtl ? "right" : "left", i)
                } else if ("visible" !== n) {
                    var o = e[0].offsetTop + e[0].offsetHeight;
                    t.attr("style", "").css({
                        position: "absolute",
                        top: o
                    }), t.css(Foundation.rtl ? "right" : "left", i)
                } else this.style(t, e, s);
                return t
            },
            style: function (e, i, s) {
                var n = t.extend({
                    position: "absolute"
                }, this.dirs[s.align].call(e, i, s));
                e.attr("style", "").css(n)
            },
            dirs: {
                _base: function (t) {
                    var s = this.offsetParent(),
                        n = s.offset(),
                        a = t.offset();
                    a.top -= n.top, a.left -= n.left, a.missRight = !1, a.missTop = !1, a.missLeft = !1, a.leftRightFlag = !1;
                    var o;
                    o = i.getElementsByClassName("row")[0] ? i.getElementsByClassName("row")[0].clientWidth : e.innerWidth;
                    var r = (e.innerWidth - o) / 2,
                        l = o;
                    return this.hasClass("mega") || (t.offset().top <= this.outerHeight() && (a.missTop = !0, l = e.innerWidth - r, a.leftRightFlag = !0), t.offset().left + this.outerWidth() > t.offset().left + r && t.offset().left - r > this.outerWidth() && (a.missRight = !0, a.missLeft = !1), t.offset().left - this.outerWidth() <= 0 && (a.missLeft = !0, a.missRight = !1)), a
                },
                top: function (t, e) {
                    var i = Foundation.libs.dropdown,
                        s = i.dirs._base.call(this, t);
                    return this.addClass("drop-top"), 1 == s.missTop && (s.top = s.top + t.outerHeight() + this.outerHeight(), this.removeClass("drop-top")), 1 == s.missRight && (s.left = s.left - this.outerWidth() + t.outerWidth()), (t.outerWidth() < this.outerWidth() || i.small() || this.hasClass(e.mega_menu)) && i.adjust_pip(this, t, e, s), Foundation.rtl ? {
                        left: s.left - this.outerWidth() + t.outerWidth(),
                        top: s.top - this.outerHeight()
                    } : {
                            left: s.left,
                            top: s.top - this.outerHeight()
                        }
                },
                bottom: function (t, e) {
                    var i = Foundation.libs.dropdown,
                        s = i.dirs._base.call(this, t);
                    return 1 == s.missRight && (s.left = s.left - this.outerWidth() + t.outerWidth()), (t.outerWidth() < this.outerWidth() || i.small() || this.hasClass(e.mega_menu)) && i.adjust_pip(this, t, e, s), i.rtl ? {
                        left: s.left - this.outerWidth() + t.outerWidth(),
                        top: s.top + t.outerHeight()
                    } : {
                            left: s.left,
                            top: s.top + t.outerHeight()
                        }
                },
                left: function (t) {
                    var e = Foundation.libs.dropdown.dirs._base.call(this, t);
                    return this.addClass("drop-left"), 1 == e.missLeft && (e.left = e.left + this.outerWidth(), e.top = e.top + t.outerHeight(), this.removeClass("drop-left")), {
                        left: e.left - this.outerWidth(),
                        top: e.top
                    }
                },
                right: function (t, e) {
                    var i = Foundation.libs.dropdown.dirs._base.call(this, t);
                    this.addClass("drop-right"), 1 == i.missRight ? (i.left = i.left - this.outerWidth(), i.top = i.top + t.outerHeight(), this.removeClass("drop-right")) : i.triggeredRight = !0;
                    var s = Foundation.libs.dropdown;
                    return (t.outerWidth() < this.outerWidth() || s.small() || this.hasClass(e.mega_menu)) && s.adjust_pip(this, t, e, i), {
                        left: i.left + t.outerWidth(),
                        top: i.top
                    }
                }
            },
            adjust_pip: function (t, e, i, s) {
                var n = Foundation.stylesheet,
                    a = 8;
                t.hasClass(i.mega_class) ? a = s.left + e.outerWidth() / 2 - 8 : this.small() && (a += s.left - 8), this.rule_idx = n.cssRules.length;
                var o = ".f-dropdown.open:before",
                    r = ".f-dropdown.open:after",
                    l = "left: " + a + "px;",
                    d = "left: " + (a - 1) + "px;";
                1 == s.missRight && (a = t.outerWidth() - 23, o = ".f-dropdown.open:before", r = ".f-dropdown.open:after", l = "left: " + a + "px;", d = "left: " + (a - 1) + "px;"), 1 == s.triggeredRight && (o = ".f-dropdown.open:before", r = ".f-dropdown.open:after", l = "left:-12px;", d = "left:-14px;"), n.insertRule ? (n.insertRule([o, "{", l, "}"].join(" "), this.rule_idx), n.insertRule([r, "{", d, "}"].join(" "), this.rule_idx + 1)) : (n.addRule(o, l, this.rule_idx), n.addRule(r, d, this.rule_idx + 1))
            },
            clear_idx: function () {
                var t = Foundation.stylesheet;
                "undefined" != typeof this.rule_idx && (t.deleteRule(this.rule_idx), t.deleteRule(this.rule_idx), delete this.rule_idx)
            },
            small: function () {
                return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
            },
            off: function () {
                this.S(this.scope).off(".fndtn.dropdown"), this.S("html, body").off(".fndtn.dropdown"), this.S(e).off(".fndtn.dropdown"), this.S("[data-dropdown-content]").off(".fndtn.dropdown")
            },
            reflow: function () { }
        }
    }(jQuery, window, window.document),
    function (t, e, i, s) {
        "use strict";
        Foundation.libs.clearing = {
            name: "clearing",
            version: "5.5.2",
            settings: {
                templates: {
                    viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div><img class="clearing-preload-next" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><img class="clearing-preload-prev" style="display: none" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" />'
                },
                close_selectors: ".clearing-close, div.clearing-blackout",
                open_selectors: "",
                skip_selector: "",
                touch_label: "",
                init: !1,
                locked: !1
            },
            init: function (t, e, i) {
                var s = this;
                Foundation.inherit(this, "throttle image_loaded"), this.bindings(e, i), s.S(this.scope).is("[" + this.attr_name() + "]") ? this.assemble(s.S("li", this.scope)) : s.S("[" + this.attr_name() + "]", this.scope).each(function () {
                    s.assemble(s.S("li", this))
                })
            },
            events: function (s) {
                var n = this,
                    a = n.S,
                    o = t(".scroll-container");
                o.length > 0 && (this.scope = o), a(this.scope).off(".clearing").on("click.fndtn.clearing", "ul[" + this.attr_name() + "] li " + this.settings.open_selectors, function (t, e, i) {
                    var e = e || a(this),
                        i = i || e,
                        s = e.next("li"),
                        o = e.closest("[" + n.attr_name() + "]").data(n.attr_name(!0) + "-init"),
                        r = a(t.target);
                    t.preventDefault(), o || (n.init(), o = e.closest("[" + n.attr_name() + "]").data(n.attr_name(!0) + "-init")), i.hasClass("visible") && e[0] === i[0] && s.length > 0 && n.is_open(e) && (i = s, r = a("img", i)), n.open(r, e, i), n.update_paddles(i)
                }).on("click.fndtn.clearing", ".clearing-main-next", function (t) {
                    n.nav(t, "next")
                }).on("click.fndtn.clearing", ".clearing-main-prev", function (t) {
                    n.nav(t, "prev")
                }).on("click.fndtn.clearing", this.settings.close_selectors, function (t) {
                    Foundation.libs.clearing.close(t, this)
                }), t(i).on("keydown.fndtn.clearing", function (t) {
                    n.keydown(t)
                }), a(e).off(".clearing").on("resize.fndtn.clearing", function () {
                    n.resize()
                }), this.swipe_events(s)
            },
            swipe_events: function () {
                var t = this,
                    e = t.S;
                e(this.scope).on("touchstart.fndtn.clearing", ".visible-img", function (t) {
                    t.touches || (t = t.originalEvent);
                    var i = {
                        start_page_x: t.touches[0].pageX,
                        start_page_y: t.touches[0].pageY,
                        start_time: (new Date).getTime(),
                        delta_x: 0,
                        is_scrolling: s
                    };
                    e(this).data("swipe-transition", i), t.stopPropagation()
                }).on("touchmove.fndtn.clearing", ".visible-img", function (i) {
                    if (i.touches || (i = i.originalEvent), !(i.touches.length > 1 || i.scale && 1 !== i.scale)) {
                        var s = e(this).data("swipe-transition");
                        if ("undefined" == typeof s && (s = {}), s.delta_x = i.touches[0].pageX - s.start_page_x, Foundation.rtl && (s.delta_x = -s.delta_x), "undefined" == typeof s.is_scrolling && (s.is_scrolling = !!(s.is_scrolling || Math.abs(s.delta_x) < Math.abs(i.touches[0].pageY - s.start_page_y))), !s.is_scrolling && !s.active) {
                            i.preventDefault();
                            var n = s.delta_x < 0 ? "next" : "prev";
                            s.active = !0, t.nav(i, n)
                        }
                    }
                }).on("touchend.fndtn.clearing", ".visible-img", function (t) {
                    e(this).data("swipe-transition", {}), t.stopPropagation()
                })
            },
            assemble: function (e) {
                var i = e.parent();
                if (!i.parent().hasClass("carousel")) {
                    i.after('<div id="foundationClearingHolder"></div>');
                    var s = i.detach(),
                        n = "";
                    if (null != s[0]) {
                        n = s[0].outerHTML;
                        var a = this.S("#foundationClearingHolder"),
                            o = i.data(this.attr_name(!0) + "-init"),
                            r = {
                                grid: '<div class="carousel">' + n + "</div>",
                                viewing: o.templates.viewing
                            },
                            l = '<div class="clearing-assembled"><div>' + r.viewing + r.grid + "</div></div>",
                            d = this.settings.touch_label;
                        Modernizr.touch && (l = t(l).find(".clearing-touch-label").html(d).end()), a.after(l).remove()
                    }
                }
            },
            open: function (e, s, n) {
                function a() {
                    setTimeout(function () {
                        this.image_loaded(u, function () {
                            1 !== u.outerWidth() || p ? o.call(this, u) : a.call(this)
                        }.bind(this))
                    }.bind(this), 100)
                }

                function o(e) {
                    var i = t(e);
                    i.css("visibility", "visible"), i.trigger("imageVisible"), l.css("overflow", "hidden"), d.addClass("clearing-blackout"), c.addClass("clearing-container"), h.show(), this.fix_height(n).caption(r.S(".clearing-caption", h), r.S("img", n)).center_and_label(e, f).shift(s, n, function () {
                        n.closest("li").siblings().removeClass("visible"), n.closest("li").addClass("visible")
                    }), h.trigger("opened.fndtn.clearing")
                }
                var r = this,
                    l = t(i.body),
                    d = n.closest(".clearing-assembled"),
                    c = r.S("div", d).first(),
                    h = r.S(".visible-img", c),
                    u = r.S("img", h).not(e),
                    f = r.S(".clearing-touch-label", c),
                    p = !1,
                    g = {};
                t("body").on("touchmove", function (t) {
                    t.preventDefault()
                }), u.error(function () {
                    p = !0
                }), this.locked() || (h.trigger("open.fndtn.clearing"), g = this.load(e), g.interchange ? u.attr("data-interchange", g.interchange).foundation("interchange", "reflow") : u.attr("src", g.src).attr("data-interchange", ""), u.css("visibility", "hidden"), a.call(this))
            },
            close: function (e, s) {
                e.preventDefault();
                var n, a, o = function (t) {
                    return /blackout/.test(t.selector) ? t : t.closest(".clearing-blackout")
                }(t(s)),
                    r = t(i.body);
                return s === e.target && o && (r.css("overflow", ""), n = t("div", o).first(), a = t(".visible-img", n), a.trigger("close.fndtn.clearing"), this.settings.prev_index = 0, t("ul[" + this.attr_name() + "]", o).attr("style", "").closest(".clearing-blackout").removeClass("clearing-blackout"), n.removeClass("clearing-container"), a.hide(), a.trigger("closed.fndtn.clearing")), t("body").off("touchmove"), !1
            },
            is_open: function (t) {
                return t.parent().prop("style").length > 0
            },
            keydown: function (e) {
                var i = t(".clearing-blackout ul[" + this.attr_name() + "]"),
                    s = this.rtl ? 37 : 39,
                    n = this.rtl ? 39 : 37,
                    a = 27;
                e.which === s && this.go(i, "next"), e.which === n && this.go(i, "prev"), e.which === a && this.S("a.clearing-close").trigger("click.fndtn.clearing")
            },
            nav: function (e, i) {
                var s = t("ul[" + this.attr_name() + "]", ".clearing-blackout");
                e.preventDefault(), this.go(s, i)
            },
            resize: function () {
                var e = t("img", ".clearing-blackout .visible-img"),
                    i = t(".clearing-touch-label", ".clearing-blackout");
                e.length && (this.center_and_label(e, i), e.trigger("resized.fndtn.clearing"))
            },
            fix_height: function (t) {
                var e = t.parent().children(),
                    i = this;
                return e.each(function () {
                    var t = i.S(this),
                        e = t.find("img");
                    t.height() > e.outerHeight() && t.addClass("fix-height")
                }).closest("ul").width(100 * e.length + "%"), this
            },
            update_paddles: function (t) {
                t = t.closest("li");
                var e = t.closest(".carousel").siblings(".visible-img");
                t.next().length > 0 ? this.S(".clearing-main-next", e).removeClass("disabled") : this.S(".clearing-main-next", e).addClass("disabled"), t.prev().length > 0 ? this.S(".clearing-main-prev", e).removeClass("disabled") : this.S(".clearing-main-prev", e).addClass("disabled")
            },
            center_and_label: function (t, e) {
                return e.css(!this.rtl && e.length > 0 ? {
                    marginLeft: -(e.outerWidth() / 2),
                    marginTop: -(t.outerHeight() / 2) - e.outerHeight() - 10
                } : {
                        marginRight: -(e.outerWidth() / 2),
                        marginTop: -(t.outerHeight() / 2) - e.outerHeight() - 10,
                        left: "auto",
                        right: "50%"
                    }), this
            },
            load: function (t) {
                var e, i, s;
                return "A" === t[0].nodeName ? (e = t.attr("href"), i = t.data("clearing-interchange")) : (s = t.closest("a"), e = s.attr("href"), i = s.data("clearing-interchange")), this.preload(t), {
                    src: e ? e : t.attr("src"),
                    interchange: e ? i : t.data("clearing-interchange")
                }
            },
            preload: function (t) {
                this.img(t.closest("li").next(), "next").img(t.closest("li").prev(), "prev")
            },
            img: function (e, i) {
                if (e.length) {
                    var s, n, a, o = t(".clearing-preload-" + i),
                        r = this.S("a", e);
                    r.length ? (s = r.attr("href"), n = r.data("clearing-interchange")) : (a = this.S("img", e), s = a.attr("src"), n = a.data("clearing-interchange")), n ? o.attr("data-interchange", n) : (o.attr("src", s), o.attr("data-interchange", ""))
                }
                return this
            },
            caption: function (t, e) {
                var i = e.attr("data-caption");
                return i ? t.html(i).show() : t.text("").hide(), this
            },
            go: function (t, e) {
                var i = this.S(".visible", t),
                    s = i[e]();
                this.settings.skip_selector && 0 != s.find(this.settings.skip_selector).length && (s = s[e]()), s.length && this.S("img", s).trigger("click.fndtn.clearing", [i, s]).trigger("change.fndtn.clearing")
            },
            shift: function (t, e, i) {
                var s, n = e.parent(),
                    a = this.settings.prev_index || e.index(),
                    o = this.direction(n, t, e),
                    r = this.rtl ? "right" : "left",
                    l = parseInt(n.css("left"), 10),
                    d = e.outerWidth(),
                    c = {};
                e.index() === a || /skip/.test(o) ? /skip/.test(o) && (s = e.index() - this.settings.up_count, this.lock(), s > 0 ? (c[r] = -(s * d), n.animate(c, 300, this.unlock())) : (c[r] = 0, n.animate(c, 300, this.unlock()))) : /left/.test(o) ? (this.lock(), c[r] = l + d, n.animate(c, 300, this.unlock())) : /right/.test(o) && (this.lock(), c[r] = l - d, n.animate(c, 300, this.unlock())), i()
            },
            direction: function (t, e, i) {
                var s, n = this.S("li", t),
                    a = n.outerWidth() + n.outerWidth() / 4,
                    o = Math.floor(this.S(".clearing-container").outerWidth() / a) - 1,
                    r = n.index(i);
                return this.settings.up_count = o, s = this.adjacent(this.settings.prev_index, r) ? r > o && r > this.settings.prev_index ? "right" : r > o - 1 && r <= this.settings.prev_index ? "left" : !1 : "skip", this.settings.prev_index = r, s
            },
            adjacent: function (t, e) {
                for (var i = e + 1; i >= e - 1; i--)
                    if (i === t) return !0;
                return !1
            },
            lock: function () {
                this.settings.locked = !0
            },
            unlock: function () {
                this.settings.locked = !1
            },
            locked: function () {
                return this.settings.locked
            },
            off: function () {
                this.S(this.scope).off(".fndtn.clearing"), this.S(e).off(".fndtn.clearing")
            },
            reflow: function () {
                this.init()
            }
        }
    }(jQuery, window, window.document),
    function (t, e, i, s) {
        "use strict";
        var n = function () { },
            a = function (n, a) {
                if (n.hasClass(a.slides_container_class)) return this;
                var d, c, h, u, f, p, g = this,
                    _ = n,
                    m = 0,
                    v = !1;
                g.slides = function () {
                    return _.children(a.slide_selector)
                }, g.slides().first().addClass(a.active_slide_class), g.update_slide_number = function (e) {
                    a.slide_number && (c.find("span:first").text(parseInt(e) + 1), c.find("span:last").text(g.slides().length)), a.bullets && (h.children().removeClass(a.bullets_active_class), t(h.children().get(e)).addClass(a.bullets_active_class))
                }, g.update_active_link = function (e) {
                    var i = t('[data-orbit-link="' + g.slides().eq(e).attr("data-orbit-slide") + '"]');
                    i.siblings().removeClass(a.bullets_active_class), i.addClass(a.bullets_active_class)
                }, g.build_markup = function () {
                    _.wrap('<div class="' + a.container_class + '"></div>'), d = _.parent(), _.addClass(a.slides_container_class), a.stack_on_small && d.addClass(a.stack_on_small_class), a.navigation_arrows && (d.append(t('<a href="#"><span></span></a>').addClass(a.prev_class)), d.append(t('<a href="#"><span></span></a>').addClass(a.next_class))), a.timer && (u = t("<div>").addClass(a.timer_container_class), u.append("<span>"), u.append(t("<div>").addClass(a.timer_progress_class)), u.addClass(a.timer_paused_class), d.append(u)), a.slide_number && (c = t("<div>").addClass(a.slide_number_class), c.append("<span></span> " + a.slide_number_text + " <span></span>"), d.append(c)), a.bullets && (h = t("<ol>").addClass(a.bullets_container_class), d.append(h), h.wrap('<div class="orbit-bullets-container"></div>'), g.slides().each(function (e) {
                        var i = t("<li>").attr("data-orbit-slide", e).on("click", g.link_bullet);
                        h.append(i)
                    }))
                }, g._goto = function (e, i) {
                    if (e === m) return !1;
                    "object" == typeof p && p.restart();
                    var s = g.slides(),
                        n = "next";
                    if (v = !0, m > e && (n = "prev"), e >= s.length) {
                        if (!a.circular) return !1;
                        e = 0
                    } else if (0 > e) {
                        if (!a.circular) return !1;
                        e = s.length - 1
                    }
                    var o = t(s.get(m)),
                        r = t(s.get(e));
                    o.css("zIndex", 2), o.removeClass(a.active_slide_class), r.css("zIndex", 4).addClass(a.active_slide_class), _.trigger("before-slide-change.fndtn.orbit"), a.before_slide_change(), g.update_active_link(e);
                    var l = function () {
                        var t = function () {
                            m = e, v = !1, i === !0 && (p = g.create_timer(), p.start()), g.update_slide_number(m), _.trigger("after-slide-change.fndtn.orbit", [{
                                slide_number: m,
                                total_slides: s.length
                            }]), a.after_slide_change(m, s.length)
                        };
                        _.outerHeight() != r.outerHeight() && a.variable_height ? _.animate({
                            height: r.outerHeight()
                        }, 250, "linear", t) : t()
                    };
                    if (1 === s.length) return l(), !1;
                    var d = function () {
                        "next" === n && f.next(o, r, l), "prev" === n && f.prev(o, r, l)
                    };
                    r.outerHeight() > _.outerHeight() && a.variable_height ? _.animate({
                        height: r.outerHeight()
                    }, 250, "linear", d) : d()
                }, g.next = function (t) {
                    t.stopImmediatePropagation(), t.preventDefault(), g._goto(m + 1)
                }, g.prev = function (t) {
                    t.stopImmediatePropagation(), t.preventDefault(), g._goto(m - 1)
                }, g.link_custom = function (e) {
                    e.preventDefault();
                    var i = t(this).attr("data-orbit-link");
                    if ("string" == typeof i && "" != (i = t.trim(i))) {
                        var s = d.find("[data-orbit-slide=" + i + "]"); - 1 != s.index() && g._goto(s.index())
                    }
                }, g.link_bullet = function () {
                    var e = t(this).attr("data-orbit-slide");
                    if ("string" == typeof e && "" != (e = t.trim(e)))
                        if (isNaN(parseInt(e))) {
                            var i = d.find("[data-orbit-slide=" + e + "]"); - 1 != i.index() && g._goto(i.index() + 1)
                        } else g._goto(parseInt(e))
                }, g.timer_callback = function () {
                    g._goto(m + 1, !0)
                }, g.compute_dimensions = function () {
                    var e = t(g.slides().get(m)),
                        i = e.outerHeight();
                    a.variable_height || g.slides().each(function () {
                        t(this).outerHeight() > i && (i = t(this).outerHeight())
                    }), _.height(i)
                }, g.create_timer = function () {
                    var t = new o(d.find("." + a.timer_container_class), a, g.timer_callback);
                    return t
                }, g.stop_timer = function () {
                    "object" == typeof p && p.stop()
                }, g.toggle_timer = function () {
                    var t = d.find("." + a.timer_container_class);
                    t.hasClass(a.timer_paused_class) ? ("undefined" == typeof p && (p = g.create_timer()), p.start()) : "object" == typeof p && p.stop()
                }, g.init = function () {
                    g.build_markup(), a.timer && (p = g.create_timer(), Foundation.utils.image_loaded(this.slides().children("img"), p.start)), f = new l(a, _), "slide" === a.animation && (f = new r(a, _)), d.on("click", "." + a.next_class, g.next), d.on("click", "." + a.prev_class, g.prev), a.next_on_click && d.on("click", "." + a.slides_container_class + " [data-orbit-slide]", g.link_bullet), d.on("click", g.toggle_timer), a.swipe && d.on("touchstart.fndtn.orbit", function (t) {
                        t.touches || (t = t.originalEvent);
                        var e = {
                            start_page_x: t.touches[0].pageX,
                            start_page_y: t.touches[0].pageY,
                            start_time: (new Date).getTime(),
                            delta_x: 0,
                            is_scrolling: s
                        };
                        d.data("swipe-transition", e), t.stopPropagation()
                    }).on("touchmove.fndtn.orbit", function (t) {
                        if (t.touches || (t = t.originalEvent), !(t.touches.length > 1 || t.scale && 1 !== t.scale)) {
                            var e = d.data("swipe-transition");
                            if ("undefined" == typeof e && (e = {}), e.delta_x = t.touches[0].pageX - e.start_page_x, "undefined" == typeof e.is_scrolling && (e.is_scrolling = !!(e.is_scrolling || Math.abs(e.delta_x) < Math.abs(t.touches[0].pageY - e.start_page_y))), !e.is_scrolling && !e.active) {
                                t.preventDefault();
                                var i = e.delta_x < 0 ? m + 1 : m - 1;
                                e.active = !0, g._goto(i)
                            }
                        }
                    }).on("touchend.fndtn.orbit", function (t) {
                        d.data("swipe-transition", {}), t.stopPropagation()
                    }), d.on("mouseenter.fndtn.orbit", function () {
                        a.timer && a.pause_on_hover && g.stop_timer()
                    }).on("mouseleave.fndtn.orbit", function () {
                        a.timer && a.resume_on_mouseout && p.start()
                    }), t(i).on("click", "[data-orbit-link]", g.link_custom), t(e).on("load resize", g.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), g.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), function () {
                        d.prev("." + a.preloader_class).css("display", "none"), g.update_slide_number(0), g.update_active_link(0), _.trigger("ready.fndtn.orbit")
                    })
                }, g.init()
            },
            o = function (t, e, i) {
                var s, n, a = this,
                    o = e.timer_speed,
                    r = t.find("." + e.timer_progress_class),
                    l = -1;
                this.update_progress = function (t) {
                    var e = r.clone();
                    e.attr("style", ""), e.css("width", t + "%"), r.replaceWith(e), r = e
                }, this.restart = function () {
                    clearTimeout(n), t.addClass(e.timer_paused_class), l = -1, a.update_progress(0)
                }, this.start = function () {
                    return t.hasClass(e.timer_paused_class) ? (l = -1 === l ? o : l, t.removeClass(e.timer_paused_class), s = (new Date).getTime(), r.animate({
                        width: "100%"
                    }, l, "linear"), n = setTimeout(function () {
                        a.restart(), i()
                    }, l), void t.trigger("timer-started.fndtn.orbit")) : !0
                }, this.stop = function () {
                    if (t.hasClass(e.timer_paused_class)) return !0;
                    clearTimeout(n), t.addClass(e.timer_paused_class);
                    var i = (new Date).getTime();
                    l -= i - s;
                    var r = 100 - l / o * 100;
                    a.update_progress(r), t.trigger("timer-stopped.fndtn.orbit")
                }
            },
            r = function (e) {
                var i = e.animation_speed,
                    s = 1 === t("html[dir=rtl]").length,
                    n = s ? "marginRight" : "marginLeft",
                    a = {};
                a[n] = "0%", this.next = function (t, e, s) {
                    t.animate({
                        marginLeft: "-100%"
                    }, i), e.animate(a, i, function () {
                        t.css(n, "100%"), s()
                    })
                }, this.prev = function (t, e, s) {
                    t.animate({
                        marginLeft: "100%"
                    }, i), e.css(n, "-100%"), e.animate(a, i, function () {
                        t.css(n, "100%"), s()
                    })
                }
            },
            l = function (e) {
                {
                    var i = e.animation_speed;
                    1 === t("html[dir=rtl]").length
                }
                this.next = function (t, e, s) {
                    e.css({
                        margin: "0%",
                        opacity: "0.01"
                    }), e.animate({
                        opacity: "1"
                    }, i, "linear", function () {
                        t.css("margin", "100%"), s()
                    })
                }, this.prev = function (t, e, s) {
                    e.css({
                        margin: "0%",
                        opacity: "0.01"
                    }), e.animate({
                        opacity: "1"
                    }, i, "linear", function () {
                        t.css("margin", "100%"), s()
                    })
                }
            };
        Foundation.libs = Foundation.libs || {}, Foundation.libs.orbit = {
            name: "orbit",
            version: "5.5.2",
            settings: {
                animation: "slide",
                timer_speed: 1e4,
                pause_on_hover: !0,
                resume_on_mouseout: !1,
                next_on_click: !0,
                animation_speed: 500,
                stack_on_small: !1,
                navigation_arrows: !0,
                slide_number: !0,
                slide_number_text: "of",
                container_class: "orbit-container",
                stack_on_small_class: "orbit-stack-on-small",
                next_class: "orbit-next",
                prev_class: "orbit-prev",
                timer_container_class: "orbit-timer",
                timer_paused_class: "paused",
                timer_progress_class: "orbit-progress",
                slides_container_class: "orbit-slides-container",
                preloader_class: "preloader",
                slide_selector: "*",
                bullets_container_class: "orbit-bullets",
                bullets_active_class: "active",
                slide_number_class: "orbit-slide-number",
                caption_class: "orbit-caption",
                active_slide_class: "active",
                orbit_transition_class: "orbit-transitioning",
                bullets: !0,
                circular: !0,
                timer: !0,
                variable_height: !1,
                swipe: !0,
                before_slide_change: n,
                after_slide_change: n
            },
            init: function (t, e, i) {
                this.bindings(e, i)
            },
            events: function (t) {
                var e = new a(this.S(t), this.S(t).data("orbit-init"));
                this.S(t).data(this.name + "-instance", e)
            },
            reflow: function () {
                var t = this;
                if (t.S(t.scope).is("[data-orbit]")) {
                    var e = t.S(t.scope),
                        i = e.data(t.name + "-instance");
                    i.compute_dimensions()
                } else t.S("[data-orbit]", t.scope).each(function (e, i) {
                    var s = t.S(i),
                        n = (t.data_options(s), s.data(t.name + "-instance"));
                    n.compute_dimensions()
                })
            }
        }
    }(jQuery, window, window.document),
    function (t) {
        "use strict";
        Foundation.libs.offcanvas = {
            name: "offcanvas",
            version: "5.5.2",
            settings: {
                open_method: "move",
                close_on_click: !1
            },
            init: function (t, e, i) {
                this.bindings(e, i)
            },
            events: function () {
                var e = this,
                    i = e.S,
                    s = "",
                    n = "",
                    a = "";
                "move" === this.settings.open_method ? (s = "move-", n = "right", a = "left") : "overlap_single" === this.settings.open_method ? (s = "offcanvas-overlap-", n = "right", a = "left") : "overlap" === this.settings.open_method && (s = "offcanvas-overlap"), i(this.scope).off(".offcanvas").on("click.fndtn.offcanvas", ".left-off-canvas-toggle", function (a) {
                    e.click_toggle_class(a, s + n), "overlap" !== e.settings.open_method && i(".left-submenu").removeClass(s + n), t(".left-off-canvas-toggle").attr("aria-expanded", "true")
                }).on("click.fndtn.offcanvas", ".left-off-canvas-menu a", function (a) {
                    var o = e.get_settings(a),
                        r = i(this).parent();
                    !o.close_on_click || r.hasClass("has-submenu") || r.hasClass("back") ? i(this).parent().hasClass("has-submenu") ? (a.preventDefault(), i(this).siblings(".left-submenu").toggleClass(s + n)) : r.hasClass("back") && (a.preventDefault(), r.parent().removeClass(s + n)) : (e.hide.call(e, s + n, e.get_wrapper(a)), r.parent().removeClass(s + n)), t(".left-off-canvas-toggle").attr("aria-expanded", "true")
                }).on("click.fndtn.offcanvas", ".right-off-canvas-toggle", function (n) {
                    e.click_toggle_class(n, s + a), "overlap" !== e.settings.open_method && i(".right-submenu").removeClass(s + a), t(".right-off-canvas-toggle").attr("aria-expanded", "true")
                }).on("click.fndtn.offcanvas", ".right-off-canvas-menu a", function (n) {
                    var o = e.get_settings(n),
                        r = i(this).parent();
                    !o.close_on_click || r.hasClass("has-submenu") || r.hasClass("back") ? i(this).parent().hasClass("has-submenu") ? (n.preventDefault(), i(this).siblings(".right-submenu").toggleClass(s + a)) : r.hasClass("back") && (n.preventDefault(), r.parent().removeClass(s + a)) : (e.hide.call(e, s + a, e.get_wrapper(n)), r.parent().removeClass(s + a)), t(".right-off-canvas-toggle").attr("aria-expanded", "true")
                }).on("click.fndtn.offcanvas", ".exit-off-canvas", function (o) {
                    e.click_remove_class(o, s + a), i(".right-submenu").removeClass(s + a), n && (e.click_remove_class(o, s + n), i(".left-submenu").removeClass(s + a)), t(".right-off-canvas-toggle").attr("aria-expanded", "true")
                }).on("click.fndtn.offcanvas", ".exit-off-canvas", function (i) {
                    e.click_remove_class(i, s + a), t(".left-off-canvas-toggle").attr("aria-expanded", "false"), n && (e.click_remove_class(i, s + n), t(".right-off-canvas-toggle").attr("aria-expanded", "false"))
                })
            },
            toggle: function (t, e) {
                e = e || this.get_wrapper(), e.is("." + t) ? this.hide(t, e) : this.show(t, e)
            },
            show: function (t, e) {
                e = e || this.get_wrapper(), e.trigger("open.fndtn.offcanvas"), e.addClass(t)
            },
            hide: function (t, e) {
                e = e || this.get_wrapper(), e.trigger("close.fndtn.offcanvas"), e.removeClass(t)
            },
            click_toggle_class: function (t, e) {
                t.preventDefault();
                var i = this.get_wrapper(t);
                this.toggle(e, i)
            },
            click_remove_class: function (t, e) {
                t.preventDefault();
                var i = this.get_wrapper(t);
                this.hide(e, i)
            },
            get_settings: function (t) {
                var e = this.S(t.target).closest("[" + this.attr_name() + "]");
                return e.data(this.attr_name(!0) + "-init") || this.settings
            },
            get_wrapper: function (t) {
                var e = this.S(t ? t.target : this.scope).closest(".off-canvas-wrap");
                return 0 === e.length && (e = this.S(".off-canvas-wrap")), e
            },
            reflow: function () { }
        }
    }(jQuery, window, window.document),
    function (t) {
        "use strict";
        Foundation.libs.alert = {
            name: "alert",
            version: "5.5.2",
            settings: {
                callback: function () { }
            },
            init: function (t, e, i) {
                this.bindings(e, i)
            },
            events: function () {
                var e = this,
                    i = this.S;
                t(this.scope).off(".alert").on("click.fndtn.alert", "[" + this.attr_name() + "] .close", function (t) {
                    var s = i(this).closest("[" + e.attr_name() + "]"),
                        n = s.data(e.attr_name(!0) + "-init") || e.settings;
                    t.preventDefault(), Modernizr.csstransitions ? (s.addClass("alert-close"), s.on("transitionend webkitTransitionEnd oTransitionEnd", function () {
                        i(this).trigger("close.fndtn.alert").remove(), n.callback()
                    })) : s.fadeOut(300, function () {
                        i(this).trigger("close.fndtn.alert").remove(), n.callback()
                    })
                })
            },
            reflow: function () { }
        }
    }(jQuery, window, window.document),
    function (t, e, i, s) {
        "use strict";

        function n(t) {
            var e = /fade/i.test(t),
                i = /pop/i.test(t);
            return {
                animate: e || i,
                pop: i,
                fade: e
            }
        }
        Foundation.libs.reveal = {
            name: "reveal",
            version: "5.5.2",
            locked: !1,
            settings: {
                animation: "fadeAndPop",
                animation_speed: 250,
                close_on_background_click: !0,
                close_on_esc: !0,
                dismiss_modal_class: "close-reveal-modal",
                multiple_opened: !1,
                bg_class: "reveal-modal-bg",
                root_element: "body",
                open: function () { },
                opened: function () { },
                close: function () { },
                closed: function () { },
                on_ajax_error: t.noop,
                bg: t(".reveal-modal-bg"),
                css: {
                    open: {
                        opacity: 0,
                        visibility: "visible",
                        display: "block"
                    },
                    close: {
                        opacity: 1,
                        visibility: "hidden",
                        display: "none"
                    }
                }
            },
            init: function (e, i, s) {
                t.extend(!0, this.settings, i, s), this.bindings(i, s)
            },
            events: function () {
                var t = this,
                    e = t.S;
                return e(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]:not([disabled])", function (i) {
                    if (i.preventDefault(), !t.locked) {
                        var s = e(this),
                            n = s.data(t.data_attr("reveal-ajax")),
                            a = s.data(t.data_attr("reveal-replace-content"));
                        if (t.locked = !0, "undefined" == typeof n) t.open.call(t, s);
                        else {
                            var o = n === !0 ? s.attr("href") : n;
                            t.open.call(t, s, {
                                url: o
                            }, {
                                    replaceContentSel: a
                                })
                        }
                    }
                }), e(i).on("click.fndtn.reveal", this.close_targets(), function (i) {
                    if (i.preventDefault(), !t.locked) {
                        var s = e("[" + t.attr_name() + "].open").data(t.attr_name(!0) + "-init") || t.settings,
                            n = e(i.target)[0] === e("." + s.bg_class)[0];
                        if (n) {
                            if (!s.close_on_background_click) return;
                            i.stopPropagation()
                        }
                        t.locked = !0, t.close.call(t, n ? e("[" + t.attr_name() + "].open:not(.toback)") : e(this).closest("[" + t.attr_name() + "]"))
                    }
                }), e("[" + t.attr_name() + "]", this.scope).length > 0 ? e(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : e(this.scope).on("open.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.close_video), !0
            },
            key_up_on: function () {
                var t = this;
                return t.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function (e) {
                    var i = t.S("[" + t.attr_name() + "].open"),
                        s = i.data(t.attr_name(!0) + "-init") || t.settings;
                    s && 27 === e.which && s.close_on_esc && !t.locked && t.close.call(t, i)
                }), !0
            },
            key_up_off: function () {
                return this.S("body").off("keyup.fndtn.reveal"), !0
            },
            open: function (i, s) {
                var n, a = this;
                i ? "undefined" != typeof i.selector ? n = a.S("#" + i.data(a.data_attr("reveal-id"))).first() : (n = a.S(this.scope), s = i) : n = a.S(this.scope);
                var o = n.data(a.attr_name(!0) + "-init");
                if (o = o || this.settings, n.hasClass("open") && i.attr("data-reveal-id") == n.attr("id")) return a.close(n);
                if (!n.hasClass("open")) {
                    var r = a.S("[" + a.attr_name() + "].open");
                    if ("undefined" == typeof n.data("css-top") && n.data("css-top", parseInt(n.css("top"), 10)).data("offset", this.cache_offset(n)), n.attr("tabindex", "0").attr("aria-hidden", "false"), this.key_up_on(n), n.on("open.fndtn.reveal", function (t) {
                        "fndtn.reveal" !== t.namespace
                    }), n.on("open.fndtn.reveal").trigger("open.fndtn.reveal"), r.length < 1 && this.toggle_bg(n, !0), "string" == typeof s && (s = {
                        url: s
                    }), "undefined" != typeof s && s.url) {
                        var l = "undefined" != typeof s.success ? s.success : null;
                        t.extend(s, {
                            success: function (e, i, s) {
                                if (t.isFunction(l)) {
                                    var d = l(e, i, s);
                                    "string" == typeof d && (e = d)
                                }
                                "undefined" != typeof options && "undefined" != typeof options.replaceContentSel ? n.find(options.replaceContentSel).html(e) : n.html(e), a.S(n).foundation("section", "reflow"), a.S(n).children().foundation(), r.length > 0 && (o.multiple_opened ? a.to_back(r) : a.hide(r, o.css.close)), a.show(n, o.css.open)
                            }
                        }), o.on_ajax_error !== t.noop && t.extend(s, {
                            error: o.on_ajax_error
                        }), t.ajax(s)
                    } else r.length > 0 && (o.multiple_opened ? a.to_back(r) : a.hide(r, o.css.close)), this.show(n, o.css.open)
                }
                a.S(e).trigger("resize")
            },
            close: function (e) {
                var e = e && e.length ? e : this.S(this.scope),
                    i = this.S("[" + this.attr_name() + "].open"),
                    s = e.data(this.attr_name(!0) + "-init") || this.settings,
                    n = this;
                i.length > 0 && (e.removeAttr("tabindex", "0").attr("aria-hidden", "true"), this.locked = !0, this.key_up_off(e), e.trigger("close.fndtn.reveal"), (s.multiple_opened && 1 === i.length || !s.multiple_opened || e.length > 1) && (n.toggle_bg(e, !1), n.to_front(e)), s.multiple_opened ? (n.hide(e, s.css.close, s), n.to_front(t(t.makeArray(i).reverse()[1]))) : n.hide(i, s.css.close, s))
            },
            close_targets: function () {
                var t = "." + this.settings.dismiss_modal_class;
                return this.settings.close_on_background_click ? t + ", ." + this.settings.bg_class : t
            },
            toggle_bg: function (e, i) {
                0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = t("<div />", {
                    "class": this.settings.bg_class
                }).appendTo("body").hide());
                var n = this.settings.bg.filter(":visible").length > 0;
                i != n && ((i == s ? n : !i) ? this.hide(this.settings.bg) : this.show(this.settings.bg))
            },
            show: function (i, s) {
                if (s) {
                    var a = i.data(this.attr_name(!0) + "-init") || this.settings,
                        o = a.root_element,
                        r = this;
                    if (0 === i.parent(o).length) {
                        var l = i.wrap('<div style="display: none;" />').parent();
                        i.on("closed.fndtn.reveal.wrapped", function () {
                            i.detach().appendTo(l), i.unwrap().unbind("closed.fndtn.reveal.wrapped")
                        }), i.detach().appendTo(o)
                    }
                    var d = n(a.animation);
                    if (d.animate || (this.locked = !1), d.pop) {
                        s.top = t(e).scrollTop() - i.data("offset") + "px";
                        var c = {
                            top: t(e).scrollTop() + i.data("css-top") + "px",
                            opacity: 1
                        };
                        return setTimeout(function () {
                            return i.css(s).animate(c, a.animation_speed, "linear", function () {
                                r.locked = !1, i.trigger("opened.fndtn.reveal")
                            }).addClass("open")
                        }, a.animation_speed / 2)
                    }
                    if (d.fade) {
                        s.top = t(e).scrollTop() + i.data("css-top") + "px";
                        var c = {
                            opacity: 1
                        };
                        return setTimeout(function () {
                            return i.css(s).animate(c, a.animation_speed, "linear", function () {
                                r.locked = !1, i.trigger("opened.fndtn.reveal")
                            }).addClass("open")
                        }, a.animation_speed / 2)
                    }
                    return i.css(s).show().css({
                        opacity: 1
                    }).addClass("open").trigger("opened.fndtn.reveal")
                }
                var a = this.settings;
                return n(a.animation).fade ? i.fadeIn(a.animation_speed / 2) : (this.locked = !1, i.show())
            },
            to_back: function (t) {
                t.addClass("toback")
            },
            to_front: function (t) {
                t.removeClass("toback")
            },
            hide: function (i, s) {
                if (s) {
                    var a = i.data(this.attr_name(!0) + "-init"),
                        o = this;
                    a = a || this.settings;
                    var r = n(a.animation);
                    if (r.animate || (this.locked = !1), r.pop) {
                        var l = {
                            top: -t(e).scrollTop() - i.data("offset") + "px",
                            opacity: 0
                        };
                        return setTimeout(function () {
                            return i.animate(l, a.animation_speed, "linear", function () {
                                o.locked = !1, i.css(s).trigger("closed.fndtn.reveal")
                            }).removeClass("open")
                        }, a.animation_speed / 2)
                    }
                    if (r.fade) {
                        var l = {
                            opacity: 0
                        };
                        return setTimeout(function () {
                            return i.animate(l, a.animation_speed, "linear", function () {
                                o.locked = !1, i.css(s).trigger("closed.fndtn.reveal")
                            }).removeClass("open")
                        }, a.animation_speed / 2)
                    }
                    return i.hide().css(s).removeClass("open").trigger("closed.fndtn.reveal")
                }
                var a = this.settings;
                return n(a.animation).fade ? i.fadeOut(a.animation_speed / 2) : i.hide()
            },
            close_video: function (e) {
                var i = t(".flex-video", e.target),
                    s = t("iframe", i);
                s.length > 0 && (s.attr("data-src", s[0].src), s.attr("src", s.attr("src")), i.hide())
            },
            open_video: function (e) {
                var i = t(".flex-video", e.target),
                    n = i.find("iframe");
                if (n.length > 0) {
                    var a = n.attr("data-src");
                    if ("string" == typeof a) n[0].src = n.attr("data-src");
                    else {
                        var o = n[0].src;
                        n[0].src = s, n[0].src = o
                    }
                    i.show()
                }
            },
            data_attr: function (t) {
                return this.namespace.length > 0 ? this.namespace + "-" + t : t
            },
            cache_offset: function (t) {
                var e = t.show().height() + parseInt(t.css("top"), 10) + t.scrollY;
                return t.hide(), e
            },
            off: function () {
                t(this.scope).off(".fndtn.reveal")
            },
            reflow: function () { }
        }
    }(jQuery, window, window.document),
    function (t, e) {
        "use strict";
        Foundation.libs.interchange = {
            name: "interchange",
            version: "5.5.2",
            cache: {},
            images_loaded: !1,
            nodes_loaded: !1,
            settings: {
                load_attr: "interchange",
                named_queries: {
                    "default": "only screen",
                    small: Foundation.media_queries.small,
                    "small-only": Foundation.media_queries["small-only"],
                    medium: Foundation.media_queries.medium,
                    "medium-only": Foundation.media_queries["medium-only"],
                    large: Foundation.media_queries.large,
                    "large-only": Foundation.media_queries["large-only"],
                    xlarge: Foundation.media_queries.xlarge,
                    "xlarge-only": Foundation.media_queries["xlarge-only"],
                    xxlarge: Foundation.media_queries.xxlarge,
                    landscape: "only screen and (orientation: landscape)",
                    portrait: "only screen and (orientation: portrait)",
                    retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
                },
                directives: {
                    replace: function (e, i, s) {
                        if (null !== e && /IMG/.test(e[0].nodeName)) {
                            var n = e[0].src;
                            if (new RegExp(i, "i").test(n)) return;
                            return e.attr("src", i), s(e[0].src)
                        }
                        var a = e.data(this.data_attr + "-last-path"),
                            o = this;
                        if (a != i) return /\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(i) ? (t(e).css("background-image", "url(" + i + ")"), e.data("interchange-last-path", i), s(i)) : t.get(i, function (t) {
                            e.html(t), e.data(o.data_attr + "-last-path", i), s()
                        })
                    }
                }
            },
            init: function (e, i, s) {
                Foundation.inherit(this, "throttle random_str"), this.data_attr = this.set_data_attr(), t.extend(!0, this.settings, i, s), this.bindings(i, s), this.reflow()
            },
            get_media_hash: function () {
                var t = "";
                for (var e in this.settings.named_queries) t += matchMedia(this.settings.named_queries[e]).matches.toString();
                return t
            },
            events: function () {
                var i, s = this;
                return t(e).off(".interchange").on("resize.fndtn.interchange", s.throttle(function () {
                    var t = s.get_media_hash();
                    t !== i && s.resize(), i = t
                }, 50)), this
            },
            resize: function () {
                var e = this.cache;
                if (!this.images_loaded || !this.nodes_loaded) return void setTimeout(t.proxy(this.resize, this), 50);
                for (var i in e)
                    if (e.hasOwnProperty(i)) {
                        var s = this.results(i, e[i]);
                        s && this.settings.directives[s.scenario[1]].call(this, s.el, s.scenario[0], function (t) {
                            if (arguments[0] instanceof Array) var e = arguments[0];
                            else var e = Array.prototype.slice.call(arguments, 0);
                            return function () {
                                t.el.trigger(t.scenario[1], e)
                            }
                        }(s))
                    }
            },
            results: function (t, e) {
                var i = e.length;
                if (i > 0)
                    for (var s = this.S("[" + this.add_namespace("data-uuid") + '="' + t + '"]'); i--;) {
                        var n, a = e[i][2];
                        if (n = matchMedia(this.settings.named_queries.hasOwnProperty(a) ? this.settings.named_queries[a] : a), n.matches) return {
                            el: s,
                            scenario: e[i]
                        }
                    }
                return !1
            },
            load: function (t, e) {
                return ("undefined" == typeof this["cached_" + t] || e) && this["update_" + t](), this["cached_" + t]
            },
            update_images: function () {
                var t = this.S("img[" + this.data_attr + "]"),
                    e = t.length,
                    i = e,
                    s = 0,
                    n = this.data_attr;
                for (this.cache = {}, this.cached_images = [], this.images_loaded = 0 === e; i--;) {
                    if (s++ , t[i]) {
                        var a = t[i].getAttribute(n) || "";
                        a.length > 0 && this.cached_images.push(t[i])
                    }
                    s === e && (this.images_loaded = !0, this.enhance("images"))
                }
                return this
            },
            update_nodes: function () {
                var t = this.S("[" + this.data_attr + "]").not("img"),
                    e = t.length,
                    i = e,
                    s = 0,
                    n = this.data_attr;
                for (this.cached_nodes = [], this.nodes_loaded = 0 === e; i--;) {
                    s++;
                    var a = t[i].getAttribute(n) || "";
                    a.length > 0 && this.cached_nodes.push(t[i]), s === e && (this.nodes_loaded = !0, this.enhance("nodes"))
                }
                return this
            },
            enhance: function (i) {
                for (var s = this["cached_" + i].length; s--;) this.object(t(this["cached_" + i][s]));
                return t(e).trigger("resize.fndtn.interchange")
            },
            convert_directive: function (t) {
                var e = this.trim(t);
                return e.length > 0 ? e : "replace"
            },
            parse_scenario: function (t) {
                var e = t[0].match(/(.+),\s*(\w+)\s*$/),
                    i = t[1].match(/(.*)\)/);
                if (e) var s = e[1],
                    n = e[2];
                else var a = t[0].split(/,\s*$/),
                    s = a[0],
                    n = "";
                return [this.trim(s), this.convert_directive(n), this.trim(i[1])]
            },
            object: function (t) {
                var e = this.parse_data_attr(t),
                    i = [],
                    s = e.length;
                if (s > 0)
                    for (; s--;) {
                        var n = e[s].split(/,\s?\(/);
                        if (n.length > 1) {
                            var a = this.parse_scenario(n);
                            i.push(a)
                        }
                    }
                return this.store(t, i)
            },
            store: function (t, e) {
                var i = this.random_str(),
                    s = t.data(this.add_namespace("uuid", !0));
                return this.cache[s] ? this.cache[s] : (t.attr(this.add_namespace("data-uuid"), i), this.cache[i] = e)
            },
            trim: function (e) {
                return "string" == typeof e ? t.trim(e) : e
            },
            set_data_attr: function (t) {
                return t ? this.namespace.length > 0 ? this.namespace + "-" + this.settings.load_attr : this.settings.load_attr : this.namespace.length > 0 ? "data-" + this.namespace + "-" + this.settings.load_attr : "data-" + this.settings.load_attr
            },
            parse_data_attr: function (t) {
                for (var e = t.attr(this.attr_name()).split(/\[(.*?)\]/), i = e.length, s = []; i--;) e[i].replace(/[\W\d]+/, "").length > 4 && s.push(e[i]);
                return s
            },
            reflow: function () {
                this.load("images", !0), this.load("nodes", !0)
            }
        }
    }(jQuery, window, window.document),
    function (t, e) {
        "use strict";
        Foundation.libs["magellan-expedition"] = {
            name: "magellan-expedition",
            version: "5.5.2",
            settings: {
                active_class: "active",
                threshold: 0,
                destination_threshold: 20,
                throttle_delay: 30,
                fixed_top: 0,
                offset_by_height: !0,
                duration: 700,
                easing: "swing"
            },
            init: function (t, e, i) {
                Foundation.inherit(this, "throttle"), this.bindings(e, i)
            },
            events: function () {
                var e = this,
                    i = e.S,
                    s = e.settings;
                e.set_expedition_position(), i(e.scope).off(".magellan").on("click.fndtn.magellan", "[" + e.add_namespace("data-magellan-arrival") + "] a[href*=#]", function (i) {
                    var s = this.hostname === location.hostname || !this.hostname,
                        n = e.filterPathname(location.pathname) === e.filterPathname(this.pathname),
                        a = this.hash.replace(/(:|\.|\/)/g, "\\$1"),
                        o = this;
                    if (s && n && a) {
                        i.preventDefault();
                        var r = t(this).closest("[" + e.attr_name() + "]"),
                            l = r.data("magellan-expedition-init"),
                            d = this.hash.split("#").join(""),
                            c = t('a[name="' + d + '"]');
                        0 === c.length && (c = t("#" + d));
                        var h = c.offset().top - l.destination_threshold + 1;
                        l.offset_by_height && (h -= r.outerHeight()), t("html, body").stop().animate({
                            scrollTop: h
                        }, l.duration, l.easing, function () {
                            history.pushState ? history.pushState(null, null, o.pathname + "#" + d) : location.hash = o.pathname + "#" + d
                        })
                    }
                }).on("scroll.fndtn.magellan", e.throttle(this.check_for_arrivals.bind(this), s.throttle_delay))
            },
            check_for_arrivals: function () {
                var t = this;
                t.update_arrivals(), t.update_expedition_positions()
            },
            set_expedition_position: function () {
                var e = this;
                t("[" + this.attr_name() + "=fixed]", e.scope).each(function () {
                    var i, s, n = t(this),
                        a = n.data("magellan-expedition-init"),
                        o = n.attr("styles");
                    n.attr("style", ""), i = n.offset().top + a.threshold, s = parseInt(n.data("magellan-fixed-top")), isNaN(s) || (e.settings.fixed_top = s), n.data(e.data_attr("magellan-top-offset"), i), n.attr("style", o)
                })
            },
            update_expedition_positions: function () {
                var i = this,
                    s = t(e).scrollTop();
                t("[" + this.attr_name() + "=fixed]", i.scope).each(function () {
                    var e = t(this),
                        n = e.data("magellan-expedition-init"),
                        a = e.attr("style"),
                        o = e.data("magellan-top-offset");
                    if (s + i.settings.fixed_top >= o) {
                        var r = e.prev("[" + i.add_namespace("data-magellan-expedition-clone") + "]");
                        0 === r.length && (r = e.clone(), r.removeAttr(i.attr_name()), r.attr(i.add_namespace("data-magellan-expedition-clone"), ""), e.before(r)), e.css({
                            position: "fixed",
                            top: n.fixed_top
                        }).addClass("fixed")
                    } else e.prev("[" + i.add_namespace("data-magellan-expedition-clone") + "]").remove(), e.attr("style", a).css("position", "").css("top", "").removeClass("fixed")
                })
            },
            update_arrivals: function () {
                var i = this,
                    s = t(e).scrollTop();
                t("[" + this.attr_name() + "]", i.scope).each(function () {
                    var e = t(this),
                        n = e.data(i.attr_name(!0) + "-init"),
                        a = i.offsets(e, s),
                        o = e.find("[" + i.add_namespace("data-magellan-arrival") + "]"),
                        r = !1;
                    a.each(function (t, s) {
                        if (s.viewport_offset >= s.top_offset) {
                            var a = e.find("[" + i.add_namespace("data-magellan-arrival") + "]");
                            return a.not(s.arrival).removeClass(n.active_class), s.arrival.addClass(n.active_class), r = !0, !0
                        }
                    }), r || o.removeClass(n.active_class)
                })
            },
            offsets: function (e, i) {
                var s = this,
                    n = e.data(s.attr_name(!0) + "-init"),
                    a = i;
                return e.find("[" + s.add_namespace("data-magellan-arrival") + "]").map(function () {
                    var i = t(this).data(s.data_attr("magellan-arrival")),
                        o = t("[" + s.add_namespace("data-magellan-destination") + "=" + i + "]");
                    if (o.length > 0) {
                        var r = o.offset().top - n.destination_threshold;
                        return n.offset_by_height && (r -= e.outerHeight()), r = Math.floor(r), {
                            destination: o,
                            arrival: t(this),
                            top_offset: r,
                            viewport_offset: a
                        }
                    }
                }).sort(function (t, e) {
                    return t.top_offset < e.top_offset ? -1 : t.top_offset > e.top_offset ? 1 : 0
                })
            },
            data_attr: function (t) {
                return this.namespace.length > 0 ? this.namespace + "-" + t : t
            },
            off: function () {
                this.S(this.scope).off(".magellan"), this.S(e).off(".magellan")
            },
            filterPathname: function (t) {
                return t = t || "", t.replace(/^\//, "").replace(/(?:index|default).[a-zA-Z]{3,4}$/, "").replace(/\/$/, "")
            },
            reflow: function () {
                var e = this;
                t("[" + e.add_namespace("data-magellan-expedition-clone") + "]", e.scope).remove()
            }
        }
    }(jQuery, window, window.document),
    function (t) {
        "use strict";
        Foundation.libs.accordion = {
            name: "accordion",
            version: "5.5.2",
            settings: {
                content_class: "content",
                active_class: "active",
                multi_expand: !1,
                toggleable: !0,
                callback: function () { }
            },
            init: function (t, e, i) {
                this.bindings(e, i)
            },
            events: function (e) {
                var i = this,
                    s = this.S;
                i.create(this.S(e)), s(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion", "[" + this.attr_name() + "] > dd > a, [" + this.attr_name() + "] > li > a", function (e) {
                    var n = s(this).closest("[" + i.attr_name() + "]"),
                        a = i.attr_name() + "=" + n.attr(i.attr_name()),
                        o = n.data(i.attr_name(!0) + "-init") || i.settings,
                        r = s("#" + this.href.split("#")[1]),
                        l = t("> dd, > li", n),
                        d = l.children("." + o.content_class),
                        c = d.filter("." + o.active_class);
                    return e.preventDefault(), n.attr(i.attr_name()) && (d = d.add("[" + a + "] dd > ." + o.content_class + ", [" + a + "] li > ." + o.content_class), l = l.add("[" + a + "] dd, [" + a + "] li")), o.toggleable && r.is(c) ? (r.parent("dd, li").toggleClass(o.active_class, !1), r.toggleClass(o.active_class, !1), s(this).attr("aria-expanded", function (t, e) {
                        return "true" === e ? "false" : "true"
                    }), o.callback(r), r.triggerHandler("toggled", [n]), void n.triggerHandler("toggled", [r])) : (o.multi_expand || (d.removeClass(o.active_class), l.removeClass(o.active_class), l.children("a").attr("aria-expanded", "false")), r.addClass(o.active_class).parent().addClass(o.active_class), o.callback(r), r.triggerHandler("toggled", [n]), n.triggerHandler("toggled", [r]), void s(this).attr("aria-expanded", "true"))
                })
            },
            create: function (e) {
                var i = this,
                    s = e,
                    n = t("> .accordion-navigation", s),
                    a = s.data(i.attr_name(!0) + "-init") || i.settings;
                n.children("a").attr("aria-expanded", "false"), n.has("." + a.content_class + "." + a.active_class).children("a").attr("aria-expanded", "true"), a.multi_expand && e.attr("aria-multiselectable", "true")
            },
            off: function () { },
            reflow: function () { }
        }
    }(jQuery, window, window.document),
    function (t, e, i) {
        "use strict";
        Foundation.libs.topbar = {
            name: "topbar",
            version: "5.5.2",
            settings: {
                index: 0,
                start_offset: 0,
                sticky_class: "sticky",
                custom_back_text: !0,
                back_text: "Back",
                mobile_show_parent_link: !0,
                is_hover: !0,
                scrolltop: !0,
                sticky_on: "all",
                dropdown_autoclose: !0
            },
            init: function (e, i, s) {
                Foundation.inherit(this, "add_custom_rule register_media throttle");
                var n = this;
                n.register_media("topbar", "foundation-mq-topbar"), this.bindings(i, s), n.S("[" + this.attr_name() + "]", this.scope).each(function () {
                    {
                        var e = t(this),
                            i = e.data(n.attr_name(!0) + "-init");
                        n.S("section, .top-bar-section", this)
                    }
                    e.data("index", 0);
                    var s = e.parent();
                    s.hasClass("fixed") || n.is_sticky(e, s, i) ? (n.settings.sticky_class = i.sticky_class, n.settings.sticky_topbar = e, e.data("height", s.outerHeight()), e.data("stickyoffset", s.offset().top)) : e.data("height", e.outerHeight()), i.assembled || n.assemble(e), i.is_hover ? n.S(".has-dropdown", e).addClass("not-click") : n.S(".has-dropdown", e).removeClass("not-click"), n.add_custom_rule(".f-topbar-fixed { padding-top: " + e.data("height") + "px }"), s.hasClass("fixed") && n.S("body").addClass("f-topbar-fixed")
                })
            },
            is_sticky: function (t, e, i) {
                var s = e.hasClass(i.sticky_class),
                    n = matchMedia(Foundation.media_queries.small).matches,
                    a = matchMedia(Foundation.media_queries.medium).matches,
                    o = matchMedia(Foundation.media_queries.large).matches;
                return s && "all" === i.sticky_on ? !0 : s && this.small() && -1 !== i.sticky_on.indexOf("small") && n && !a && !o ? !0 : s && this.medium() && -1 !== i.sticky_on.indexOf("medium") && n && a && !o ? !0 : s && this.large() && -1 !== i.sticky_on.indexOf("large") && n && a && o ? !0 : !1
            },
            toggle: function (i) {
                var s, n = this;
                s = i ? n.S(i).closest("[" + this.attr_name() + "]") : n.S("[" + this.attr_name() + "]");
                var a = s.data(this.attr_name(!0) + "-init"),
                    o = n.S("section, .top-bar-section", s);
                n.breakpoint() && (n.rtl ? (o.css({
                    right: "0%"
                }), t(">.name", o).css({
                    right: "100%"
                })) : (o.css({
                    left: "0%"
                }), t(">.name", o).css({
                    left: "100%"
                })), n.S("li.moved", o).removeClass("moved"), s.data("index", 0), s.toggleClass("expanded").css("height", "")), a.scrolltop ? s.hasClass("expanded") ? s.parent().hasClass("fixed") && (a.scrolltop ? (s.parent().removeClass("fixed"), s.addClass("fixed"), n.S("body").removeClass("f-topbar-fixed"), e.scrollTo(0, 0)) : s.parent().removeClass("expanded")) : s.hasClass("fixed") && (s.parent().addClass("fixed"), s.removeClass("fixed"), n.S("body").addClass("f-topbar-fixed")) : (n.is_sticky(s, s.parent(), a) && s.parent().addClass("fixed"), s.parent().hasClass("fixed") && (s.hasClass("expanded") ? (s.addClass("fixed"), s.parent().addClass("expanded"), n.S("body").addClass("f-topbar-fixed")) : (s.removeClass("fixed"), s.parent().removeClass("expanded"), n.update_sticky_positioning())))
            },
            timer: null,
            events: function () {
                var i = this,
                    s = this.S;
                s(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar", function (t) {
                    t.preventDefault(), i.toggle(this)
                }).on("click.fndtn.topbar contextmenu.fndtn.topbar", '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function () {
                    var e = t(this).closest("li"),
                        s = e.closest("[" + i.attr_name() + "]"),
                        n = s.data(i.attr_name(!0) + "-init");
                    if (n.dropdown_autoclose && n.is_hover) {
                        var a = t(this).closest(".hover");
                        a.removeClass("hover")
                    } !i.breakpoint() || e.hasClass("back") || e.hasClass("has-dropdown") || i.toggle()
                }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown", function (e) {
                    var n = s(this),
                        a = s(e.target),
                        o = n.closest("[" + i.attr_name() + "]"),
                        r = o.data(i.attr_name(!0) + "-init");
                    return a.data("revealId") ? void i.toggle() : void (i.breakpoint() || (!r.is_hover || Modernizr.touch) && (e.stopImmediatePropagation(), n.hasClass("hover") ? (n.removeClass("hover").find("li").removeClass("hover"), n.parents("li.hover").removeClass("hover")) : (n.addClass("hover"), t(n).siblings().removeClass("hover"), "A" === a[0].nodeName && a.parent().hasClass("has-dropdown") && e.preventDefault())))
                }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function (t) {
                    if (i.breakpoint()) {
                        t.preventDefault();
                        var e = s(this),
                            n = e.closest("[" + i.attr_name() + "]"),
                            a = n.find("section, .top-bar-section"),
                            o = (e.next(".dropdown").outerHeight(), e.closest("li"));
                        n.data("index", n.data("index") + 1), o.addClass("moved"), i.rtl ? (a.css({
                            right: -(100 * n.data("index")) + "%"
                        }), a.find(">.name").css({
                            right: 100 * n.data("index") + "%"
                        })) : (a.css({
                            left: -(100 * n.data("index")) + "%"
                        }), a.find(">.name").css({
                            left: 100 * n.data("index") + "%"
                        })), n.css("height", e.siblings("ul").outerHeight(!0) + n.data("height"))
                    }
                }), s(e).off(".topbar").on("resize.fndtn.topbar", i.throttle(function () {
                    i.resize.call(i)
                }, 50)).trigger("resize.fndtn.topbar").load(function () {
                    s(this).trigger("resize.fndtn.topbar")
                }), s("body").off(".topbar").on("click.fndtn.topbar", function (t) {
                    var e = s(t.target).closest("li").closest("li.hover");
                    e.length > 0 || s("[" + i.attr_name() + "] li.hover").removeClass("hover")
                }), s(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function (t) {
                    t.preventDefault();
                    var e = s(this),
                        n = e.closest("[" + i.attr_name() + "]"),
                        a = n.find("section, .top-bar-section"),
                        o = (n.data(i.attr_name(!0) + "-init"), e.closest("li.moved")),
                        r = o.parent();
                    n.data("index", n.data("index") - 1), i.rtl ? (a.css({
                        right: -(100 * n.data("index")) + "%"
                    }), a.find(">.name").css({
                        right: 100 * n.data("index") + "%"
                    })) : (a.css({
                        left: -(100 * n.data("index")) + "%"
                    }), a.find(">.name").css({
                        left: 100 * n.data("index") + "%"
                    })), 0 === n.data("index") ? n.css("height", "") : n.css("height", r.outerHeight(!0) + n.data("height")), setTimeout(function () {
                        o.removeClass("moved")
                    }, 300)
                }), s(this.scope).find(".dropdown a").focus(function () {
                    t(this).parents(".has-dropdown").addClass("hover")
                }).blur(function () {
                    t(this).parents(".has-dropdown").removeClass("hover")
                })
            },
            resize: function () {
                var t = this;
                t.S("[" + this.attr_name() + "]").each(function () {
                    var e, s = t.S(this),
                        n = s.data(t.attr_name(!0) + "-init"),
                        a = s.parent("." + t.settings.sticky_class);
                    if (!t.breakpoint()) {
                        var o = s.hasClass("expanded");
                        s.css("height", "").removeClass("expanded").find("li").removeClass("hover"), o && t.toggle(s)
                    }
                    t.is_sticky(s, a, n) && (a.hasClass("fixed") ? (a.removeClass("fixed"), e = a.offset().top, t.S(i.body).hasClass("f-topbar-fixed") && (e -= s.data("height")), s.data("stickyoffset", e), a.addClass("fixed")) : (e = a.offset().top, s.data("stickyoffset", e)))
                })
            },
            breakpoint: function () {
                return !matchMedia(Foundation.media_queries.topbar).matches
            },
            small: function () {
                return matchMedia(Foundation.media_queries.small).matches
            },
            medium: function () {
                return matchMedia(Foundation.media_queries.medium).matches
            },
            large: function () {
                return matchMedia(Foundation.media_queries.large).matches
            },
            assemble: function (e) {
                var i = this,
                    s = e.data(this.attr_name(!0) + "-init"),
                    n = i.S("section, .top-bar-section", e);
                n.detach(), i.S(".has-dropdown>a", n).each(function () {
                    var e, n = i.S(this),
                        a = n.siblings(".dropdown"),
                        o = n.attr("href");
                    a.find(".title.back").length || (e = t(1 == s.mobile_show_parent_link && o ? '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link hide-for-medium-up"><a class="parent-link js-generated" href="' + o + '">' + n.html() + "</a></li>" : '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'), t("h5>a", e).html(1 == s.custom_back_text ? s.back_text : "&laquo; " + n.html()), a.prepend(e))
                }), n.appendTo(e), this.sticky(), this.assembled(e)
            },
            assembled: function (e) {
                e.data(this.attr_name(!0), t.extend({}, e.data(this.attr_name(!0)), {
                    assembled: !0
                }))
            },
            height: function (e) {
                var i = 0,
                    s = this;
                return t("> li", e).each(function () {
                    i += s.S(this).outerHeight(!0)
                }), i
            },
            sticky: function () {
                var t = this;
                this.S(e).on("scroll", function () {
                    t.update_sticky_positioning()
                })
            },
            update_sticky_positioning: function () {
                var t = "." + this.settings.sticky_class,
                    i = this.S(e),
                    s = this;
                if (s.settings.sticky_topbar && s.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
                    var n = this.settings.sticky_topbar.data("stickyoffset") + this.settings.start_offset;
                    s.S(t).hasClass("expanded") || (i.scrollTop() > n ? s.S(t).hasClass("fixed") || (s.S(t).addClass("fixed"), s.S("body").addClass("f-topbar-fixed")) : i.scrollTop() <= n && s.S(t).hasClass("fixed") && (s.S(t).removeClass("fixed"), s.S("body").removeClass("f-topbar-fixed")))
                }
            },
            off: function () {
                this.S(this.scope).off(".fndtn.topbar"), this.S(e).off(".fndtn.topbar")
            },
            reflow: function () { }
        }
    }(jQuery, window, window.document),
    function (t, e, i, s) {
        "use strict";
        Foundation.libs.tab = {
            name: "tab",
            version: "5.5.2",
            settings: {
                active_class: "active",
                callback: function () { },
                deep_linking: !1,
                scroll_to_content: !0,
                is_hover: !1
            },
            default_tab_hashes: [],
            init: function (t, i, s) {
                var n = this,
                    a = this.S;
                a("[" + this.attr_name() + "] > .active > a", this.scope).each(function () {
                    n.default_tab_hashes.push(this.hash)
                }), n.entry_location = e.location.href, this.bindings(i, s), this.handle_location_hash_change()
            },
            events: function () {
                var t = this,
                    i = this.S,
                    s = function (e, s) {
                        var n = i(s).closest("[" + t.attr_name() + "]").data(t.attr_name(!0) + "-init");
                        (!n.is_hover || Modernizr.touch) && (e.preventDefault(), e.stopPropagation(), t.toggle_active_tab(i(s).parent()))
                    };
                i(this.scope).off(".tab").on("keydown.fndtn.tab", "[" + this.attr_name() + "] > * > a", function (t) {
                    var e = this,
                        i = t.keyCode || t.which;
                    9 == i && (t.preventDefault(), s(t, e))
                }).on("click.fndtn.tab", "[" + this.attr_name() + "] > * > a", function (t) {
                    var e = this;
                    s(t, e)
                }).on("mouseenter.fndtn.tab", "[" + this.attr_name() + "] > * > a", function () {
                    var e = i(this).closest("[" + t.attr_name() + "]").data(t.attr_name(!0) + "-init");
                    e.is_hover && t.toggle_active_tab(i(this).parent())
                }), i(e).on("hashchange.fndtn.tab", function (e) {
                    e.preventDefault(), t.handle_location_hash_change()
                })
            },
            handle_location_hash_change: function () {
                var e = this,
                    i = this.S;
                i("[" + this.attr_name() + "]", this.scope).each(function () {
                    var n = i(this).data(e.attr_name(!0) + "-init");
                    if (n.deep_linking) {
                        var a;
                        if (a = n.scroll_to_content ? e.scope.location.hash : e.scope.location.hash.replace("fndtn-", ""), "" != a) {
                            var o = i(a);
                            if (o.hasClass("content") && o.parent().hasClass("tabs-content")) e.toggle_active_tab(t("[" + e.attr_name() + "] > * > a[href=" + a + "]").parent());
                            else {
                                var r = o.closest(".content").attr("id");
                                r != s && e.toggle_active_tab(t("[" + e.attr_name() + "] > * > a[href=#" + r + "]").parent(), a)
                            }
                        } else
                            for (var l = 0; l < e.default_tab_hashes.length; l++) e.toggle_active_tab(t("[" + e.attr_name() + "] > * > a[href=" + e.default_tab_hashes[l] + "]").parent())
                    }
                })
            },
            toggle_active_tab: function (n, a) {
                var o = this,
                    r = o.S,
                    l = n.closest("[" + this.attr_name() + "]"),
                    d = n.find("a"),
                    c = n.children("a").first(),
                    h = "#" + c.attr("href").split("#")[1],
                    u = r(h),
                    f = n.siblings(),
                    p = l.data(this.attr_name(!0) + "-init"),
                    g = function (e) {
                        var s, n = t(this),
                            a = t(this).parents("li").prev().children('[role="tab"]'),
                            o = t(this).parents("li").next().children('[role="tab"]');
                        switch (e.keyCode) {
                            case 37:
                                s = a;
                                break;
                            case 39:
                                s = o;
                                break;
                            default:
                                s = !1
                        }
                        s.length && (n.attr({
                            tabindex: "-1",
                            "aria-selected": null
                        }), s.attr({
                            tabindex: "0",
                            "aria-selected": !0
                        }).focus()), t('[role="tabpanel"]').attr("aria-hidden", "true"), t("#" + t(i.activeElement).attr("href").substring(1)).attr("aria-hidden", null)
                    },
                    _ = function (t) {
                        var i = e.location.href === o.entry_location,
                            s = p.scroll_to_content ? o.default_tab_hashes[0] : i ? e.location.hash : "fndtn-" + o.default_tab_hashes[0].replace("#", "");
                        i && t === s || (e.location.hash = t)
                    };
                c.data("tab-content") && (h = "#" + c.data("tab-content").split("#")[1], u = r(h)), p.deep_linking && (p.scroll_to_content ? (_(a || h), a == s || a == h ? n.parent()[0].scrollIntoView() : r(h)[0].scrollIntoView()) : _(a != s ? "fndtn-" + a.replace("#", "") : "fndtn-" + h.replace("#", ""))), n.addClass(p.active_class).triggerHandler("opened"), d.attr({
                    "aria-selected": "true",
                    tabindex: 0
                }), f.removeClass(p.active_class), f.find("a").attr({
                    "aria-selected": "false",
                    tabindex: -1
                }), u.siblings().removeClass(p.active_class).attr({
                    "aria-hidden": "true",
                    tabindex: -1
                }), u.addClass(p.active_class).attr("aria-hidden", "false").removeAttr("tabindex"), p.callback(n), u.triggerHandler("toggled", [u]), l.triggerHandler("toggled", [n]), d.off("keydown").on("keydown", g)
            },
            data_attr: function (t) {
                return this.namespace.length > 0 ? this.namespace + "-" + t : t
            },
            off: function () { },
            reflow: function () { }
        }
    }(jQuery, window, window.document),
    function (t, e, i) {
        "use strict";
        Foundation.libs.abide = {
            name: "abide",
            version: "5.5.2",
            settings: {
                live_validate: !0,
                validate_on_blur: !0,
                focus_on_invalid: !0,
                error_labels: !0,
                error_class: "error",
                timeout: 1e3,
                patterns: {
                    alpha: /^[a-zA-Z]+$/,
                    alpha_numeric: /^[a-zA-Z0-9]+$/,
                    integer: /^[-+]?\d+$/,
                    number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
                    card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                    cvv: /^([0-9]){3,4}$/,
                    email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
                    url: /^(https?|ftp|file|ssh):\/\/([-;:&=\+\$,\w]+@{1})?([-A-Za-z0-9\.]+)+:?(\d+)?((\/[-\+~%\/\.\w]+)?\??([-\+=&;%@\.\w]+)?#?([\w]+)?)?/,
                    domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
                    datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
                    date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
                    time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
                    dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
                    month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
                    day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
                    color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
                },
                validators: {
                    equalTo: function (t) {
                        var e = i.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value,
                            s = t.value,
                            n = e === s;
                        return n
                    }
                }
            },
            timer: null,
            init: function (t, e, i) {
                this.bindings(e, i)
            },
            events: function (e) {
                function i(t, e) {
                    clearTimeout(s.timer), s.timer = setTimeout(function () {
                        s.validate([t], e)
                    }.bind(t), a.timeout)
                }
                var s = this,
                    n = s.S(e).attr("novalidate", "novalidate"),
                    a = n.data(this.attr_name(!0) + "-init") || {};
                this.invalid_attr = this.add_namespace("data-invalid"), n.off(".abide").on("submit.fndtn.abide", function (t) {
                    var e = /ajax/i.test(s.S(this).attr(s.attr_name()));
                    return s.validate(s.S(this).find("input, textarea, select").not(":hidden, [data-abide-ignore]").get(), t, e)
                }).on("validate.fndtn.abide", function (t) {
                    "manual" === a.validate_on && s.validate([t.target], t)
                }).on("reset", function (e) {
                    return s.reset(t(this), e)
                }).find("input, textarea, select").not(":hidden, [data-abide-ignore]").off(".abide").on("blur.fndtn.abide change.fndtn.abide", function (t) {
                    a.validate_on_blur && a.validate_on_blur === !0 && i(this, t), "change" === a.validate_on && i(this, t)
                }).on("keydown.fndtn.abide", function (t) {
                    a.live_validate && a.live_validate === !0 && 9 != t.which && i(this, t), "tab" === a.validate_on && 9 === t.which ? i(this, t) : "change" === a.validate_on && i(this, t)
                }).on("focus", function (e) {
                    navigator.userAgent.match(/iPad|iPhone|Android|BlackBerry|Windows Phone|webOS/i) && t("html, body").animate({
                        scrollTop: t(e.target).offset().top
                    }, 100)
                })
            },
            reset: function (e) {
                var i = this;
                e.removeAttr(i.invalid_attr), t("[" + i.invalid_attr + "]", e).removeAttr(i.invalid_attr), t("." + i.settings.error_class, e).not("small").removeClass(i.settings.error_class), t(":input", e).not(":button, :submit, :reset, :hidden, [data-abide-ignore]").val("").removeAttr(i.invalid_attr)
            },
            validate: function (t, e, i) {
                for (var s = this.parse_patterns(t), n = s.length, a = this.S(t[0]).closest("form"), o = /submit/.test(e.type), r = 0; n > r; r++)
                    if (!s[r] && (o || i)) return this.settings.focus_on_invalid && t[r].focus(), a.trigger("invalid.fndtn.abide"), this.S(t[r]).closest("form").attr(this.invalid_attr, ""), !1;
                return (o || i) && a.trigger("valid.fndtn.abide"), a.removeAttr(this.invalid_attr), i ? !1 : !0
            },
            parse_patterns: function (t) {
                for (var e = t.length, i = []; e--;) i.push(this.pattern(t[e]));
                return this.check_validation_and_apply_styles(i)
            },
            pattern: function (t) {
                var e = t.getAttribute("type"),
                    i = "string" == typeof t.getAttribute("required"),
                    s = t.getAttribute("pattern") || "";
                return this.settings.patterns.hasOwnProperty(s) && s.length > 0 ? [t, this.settings.patterns[s], i] : s.length > 0 ? [t, new RegExp(s), i] : this.settings.patterns.hasOwnProperty(e) ? [t, this.settings.patterns[e], i] : (s = /.*/, [t, s, i])
            },
            check_validation_and_apply_styles: function (e) {
                var i = e.length,
                    s = [],
                    n = this.S(e[0][0]).closest("[data-" + this.attr_name(!0) + "]");
                for (n.data(this.attr_name(!0) + "-init") || {}; i--;) {
                    var a, o, r = e[i][0],
                        l = e[i][2],
                        d = r.value.trim(),
                        c = this.S(r).parent(),
                        h = r.getAttribute(this.add_namespace("data-abide-validator")),
                        u = "radio" === r.type,
                        f = "checkbox" === r.type,
                        p = this.S('label[for="' + r.getAttribute("id") + '"]'),
                        g = l ? r.value.length > 0 : !0,
                        _ = [];
                    if (r.getAttribute(this.add_namespace("data-equalto")) && (h = "equalTo"), a = c.is("label") ? c.parent() : c, u && l) _.push(this.valid_radio(r, l));
                    else if (f && l) _.push(this.valid_checkbox(r, l));
                    else if (h) {
                        for (var m = h.split(" "), v = !0, b = !0, x = 0; x < m.length; x++) o = this.settings.validators[m[x]].apply(this, [r, l, a]), _.push(o), b = o && v, v = o;
                        b ? (this.S(r).removeAttr(this.invalid_attr), a.removeClass("error"), p.length > 0 && this.settings.error_labels && p.removeClass(this.settings.error_class).removeAttr("role"), t(r).triggerHandler("valid")) : (this.S(r).attr(this.invalid_attr, ""), a.addClass("error"), p.length > 0 && this.settings.error_labels && p.addClass(this.settings.error_class).attr("role", "alert"), t(r).triggerHandler("invalid"))
                    } else if (_.push(e[i][1].test(d) && g || !l && r.value.length < 1 || t(r).attr("disabled") ? !0 : !1), _ = [_.every(function (t) {
                        return t
                    })], _[0]) this.S(r).removeAttr(this.invalid_attr), r.setAttribute("aria-invalid", "false"), r.removeAttribute("aria-describedby"), a.removeClass(this.settings.error_class), p.length > 0 && this.settings.error_labels && p.removeClass(this.settings.error_class).removeAttr("role"), t(r).triggerHandler("valid");
                    else {
                        this.S(r).attr(this.invalid_attr, ""), r.setAttribute("aria-invalid", "true");
                        var y = a.find("small." + this.settings.error_class, "span." + this.settings.error_class),
                            w = y.length > 0 ? y[0].id : "";
                        w.length > 0 && r.setAttribute("aria-describedby", w), a.addClass(this.settings.error_class), p.length > 0 && this.settings.error_labels && p.addClass(this.settings.error_class).attr("role", "alert"), t(r).triggerHandler("invalid")
                    }
                    s = s.concat(_)
                }
                return s
            },
            valid_checkbox: function (e, i) {
                var e = this.S(e),
                    s = e.is(":checked") || !i || e.get(0).getAttribute("disabled");
                return s ? (e.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class), t(e).triggerHandler("valid")) : (e.attr(this.invalid_attr, "").parent().addClass(this.settings.error_class), t(e).triggerHandler("invalid")), s
            },
            valid_radio: function (e) {
                for (var i = e.getAttribute("name"), s = this.S(e).closest("[data-" + this.attr_name(!0) + "]").find("[name='" + i + "']"), n = s.length, a = !1, o = !1, r = 0; n > r; r++) s[r].getAttribute("disabled") ? (o = !0, a = !0) : s[r].checked ? a = !0 : o && (a = !1);
                for (var r = 0; n > r; r++) a ? (this.S(s[r]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class), t(s[r]).triggerHandler("valid")) : (this.S(s[r]).attr(this.invalid_attr, "").parent().addClass(this.settings.error_class), t(s[r]).triggerHandler("invalid"));
                return a
            },
            valid_equal: function (t, e, s) {
                var n = i.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value,
                    a = t.value,
                    o = n === a;
                return o ? (this.S(t).removeAttr(this.invalid_attr), s.removeClass(this.settings.error_class), label.length > 0 && settings.error_labels && label.removeClass(this.settings.error_class)) : (this.S(t).attr(this.invalid_attr, ""), s.addClass(this.settings.error_class), label.length > 0 && settings.error_labels && label.addClass(this.settings.error_class)), o
            },
            valid_oneof: function (t, e, i, s) {
                var t = this.S(t),
                    n = this.S("[" + this.add_namespace("data-oneof") + "]"),
                    a = n.filter(":checked").length > 0;
                if (a ? t.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class) : t.attr(this.invalid_attr, "").parent().addClass(this.settings.error_class), !s) {
                    var o = this;
                    n.each(function () {
                        o.valid_oneof.call(o, this, null, null, !0)
                    })
                }
                return a
            },
            reflow: function () {
                var t = this,
                    e = t.S("[" + this.attr_name() + "]").attr("novalidate", "novalidate");
                t.S(e).each(function (e, i) {
                    t.events(i)
                })
            }
        }
    }(jQuery, window, window.document),
    function (t, e) {
        "use strict";
        Foundation.libs.tooltip = {
            name: "tooltip",
            version: "5.5.2",
            settings: {
                additional_inheritable_classes: [],
                tooltip_class: ".tooltip",
                append_to: "body",
                touch_close_text: "Tap To Close",
                disable_for_touch: !1,
                hover_delay: 200,
                show_on: "all",
                tip_template: function (t, e) {
                    return '<span data-selector="' + t + '" id="' + t + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '" role="tooltip">' + e + '<span class="nub"></span></span>'
                }
            },
            cache: {},
            init: function (t, e, i) {
                Foundation.inherit(this, "random_str"), this.bindings(e, i)
            },
            should_show: function (e) {
                var i = t.extend({}, this.settings, this.data_options(e));
                return "all" === i.show_on ? !0 : this.small() && "small" === i.show_on ? !0 : this.medium() && "medium" === i.show_on ? !0 : this.large() && "large" === i.show_on ? !0 : !1
            },
            medium: function () {
                return matchMedia(Foundation.media_queries.medium).matches
            },
            large: function () {
                return matchMedia(Foundation.media_queries.large).matches
            },
            events: function (e) {
                function i(t, e, i) {
                    t.timer || (i ? (t.timer = null, n.showTip(e)) : t.timer = setTimeout(function () {
                        t.timer = null, n.showTip(e)
                    }.bind(t), n.settings.hover_delay))
                }

                function s(t, e) {
                    t.timer && (clearTimeout(t.timer), t.timer = null), n.hide(e)
                }
                var n = this,
                    a = n.S;
                n.create(this.S(e)), t(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "]", function (e) {
                    var o = a(this),
                        r = t.extend({}, n.settings, n.data_options(o)),
                        l = !1;
                    if (Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && a(e.target).is("a")) return !1;
                    if (/mouse/i.test(e.type) && n.ie_touch(e)) return !1;
                    if (o.hasClass("open")) Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && e.preventDefault(), n.hide(o);
                    else {
                        if (r.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) return;
                        if (!r.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && (e.preventDefault(), a(r.tooltip_class + ".open").hide(), l = !0, t(".open[" + n.attr_name() + "]").length > 0)) {
                            var d = a(t(".open[" + n.attr_name() + "]")[0]);
                            n.hide(d)
                        }
                        /enter|over/i.test(e.type) ? i(this, o) : "mouseout" === e.type || "mouseleave" === e.type ? s(this, o) : i(this, o, !0)
                    }
                }).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "].open", function (e) {
                    return /mouse/i.test(e.type) && n.ie_touch(e) ? !1 : void (("touch" != t(this).data("tooltip-open-event-type") || "mouseleave" != e.type) && ("mouse" == t(this).data("tooltip-open-event-type") && /MSPointerDown|touchstart/i.test(e.type) ? n.convert_to_touch(t(this)) : s(this, t(this))))
                }).on("DOMNodeRemoved DOMAttrModified", "[" + this.attr_name() + "]:not(a)", function () {
                    s(this, a(this))
                })
            },
            ie_touch: function () {
                return !1
            },
            showTip: function (t) {
                var e = this.getTip(t);
                return this.should_show(t, e) ? this.show(t) : void 0
            },
            getTip: function (e) {
                var i = this.selector(e),
                    s = t.extend({}, this.settings, this.data_options(e)),
                    n = null;
                return i && (n = this.S('span[data-selector="' + i + '"]' + s.tooltip_class)), "object" == typeof n ? n : !1
            },
            selector: function (t) {
                var e = t.attr(this.attr_name()) || t.attr("data-selector");
                return "string" != typeof e && (e = this.random_str(6), t.attr("data-selector", e).attr("aria-describedby", e)), e
            },
            create: function (i) {
                var s = this,
                    n = t.extend({}, this.settings, this.data_options(i)),
                    a = this.settings.tip_template;
                "string" == typeof n.tip_template && e.hasOwnProperty(n.tip_template) && (a = e[n.tip_template]);
                var o = t(a(this.selector(i), t("<div></div>").html(i.attr("title")).html())),
                    r = this.inheritable_classes(i);
                o.addClass(r).appendTo(n.append_to), Modernizr.touch && (o.append('<span class="tap-to-close">' + n.touch_close_text + "</span>"), o.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", function () {
                    s.hide(i)
                })), i.removeAttr("title").attr("title", "")
            },
            reposition: function (e, i, s) {
                var n, a, o, r, l;
                if (i.css("visibility", "hidden").show(), n = e.data("width"), a = i.children(".nub"), o = a.outerHeight(), r = a.outerHeight(), i.css(this.small() ? {
                    width: "100%"
                } : {
                        width: n ? n : "auto"
                    }), l = function (t, e, i, s, n) {
                        return t.css({
                            top: e ? e : "auto",
                            bottom: s ? s : "auto",
                            left: n ? n : "auto",
                            right: i ? i : "auto"
                        }).end()
                    }, l(i, e.offset().top + e.outerHeight() + 10, "auto", "auto", e.offset().left), this.small()) l(i, e.offset().top + e.outerHeight() + 10, "auto", "auto", 12.5, t(this.scope).width()), i.addClass("tip-override"), l(a, -o, "auto", "auto", e.offset().left);
                else {
                    var d = e.offset().left;
                    Foundation.rtl && (a.addClass("rtl"), d = e.offset().left + e.outerWidth() - i.outerWidth()), l(i, e.offset().top + e.outerHeight() + 10, "auto", "auto", d), a.attr("style") && a.removeAttr("style"), i.removeClass("tip-override"), s && s.indexOf("tip-top") > -1 ? (Foundation.rtl && a.addClass("rtl"), l(i, e.offset().top - i.outerHeight(), "auto", "auto", d).removeClass("tip-override")) : s && s.indexOf("tip-left") > -1 ? (l(i, e.offset().top + e.outerHeight() / 2 - i.outerHeight() / 2, "auto", "auto", e.offset().left - i.outerWidth() - o).removeClass("tip-override"), a.removeClass("rtl")) : s && s.indexOf("tip-right") > -1 && (l(i, e.offset().top + e.outerHeight() / 2 - i.outerHeight() / 2, "auto", "auto", e.offset().left + e.outerWidth() + o).removeClass("tip-override"), a.removeClass("rtl"))
                }
                i.css("visibility", "visible").hide()
            },
            small: function () {
                return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
            },
            inheritable_classes: function (e) {
                var i = t.extend({}, this.settings, this.data_options(e)),
                    s = ["tip-top", "tip-left", "tip-bottom", "tip-right", "radius", "round"].concat(i.additional_inheritable_classes),
                    n = e.attr("class"),
                    a = n ? t.map(n.split(" "), function (e) {
                        return -1 !== t.inArray(e, s) ? e : void 0
                    }).join(" ") : "";
                return t.trim(a)
            },
            convert_to_touch: function (e) {
                var i = this,
                    s = i.getTip(e),
                    n = t.extend({}, i.settings, i.data_options(e));
                0 === s.find(".tap-to-close").length && (s.append('<span class="tap-to-close">' + n.touch_close_text + "</span>"), s.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose", function () {
                    i.hide(e)
                })), e.data("tooltip-open-event-type", "touch")
            },
            show: function (t) {
                var e = this.getTip(t);
                "touch" == t.data("tooltip-open-event-type") && this.convert_to_touch(t), this.reposition(t, e, t.attr("class")), t.addClass("open"), e.fadeIn(150)
            },
            hide: function (t) {
                var e = this.getTip(t);
                e.fadeOut(150, function () {
                    e.find(".tap-to-close").remove(), e.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"), t.removeClass("open")
                })
            },
            off: function () {
                var e = this;
                this.S(this.scope).off(".fndtn.tooltip"), this.S(this.settings.tooltip_class).each(function (i) {
                    t("[" + e.attr_name() + "]").eq(i).attr("title", t(this).text())
                }).remove()
            },
            reflow: function () { }
        }
    }(jQuery, window, window.document);

/*!
 DataTables 1.10.8
 ©2008-2014 SpryMedia Ltd - datatables.net/license
*/
(function (Fa, T, k) {
    var S = function (g) {
        function X(a) {
            var b, c, d = {};
            g.each(a, function (e) {
                if ((b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ")) c = e.replace(b[0], b[2].toLowerCase()), d[c] = e, "o" === b[1] && X(a[e])
            });
            a._hungarianMap = d
        }

        function I(a, b, c) {
            a._hungarianMap || X(a);
            var d;
            g.each(b, function (e) {
                d = a._hungarianMap[e];
                if (d !== k && (c || b[d] === k)) "o" === d.charAt(0) ? (b[d] || (b[d] = {}), g.extend(!0, b[d], b[e]), I(a[d], b[d], c)) : b[d] = b[e]
            })
        }

        function S(a) {
            var b = m.defaults.oLanguage,
                c = a.sZeroRecords;
            !a.sEmptyTable && (c && "No data available in table" === b.sEmptyTable) && F(a, a, "sZeroRecords", "sEmptyTable");
            !a.sLoadingRecords && (c && "Loading..." === b.sLoadingRecords) && F(a, a, "sZeroRecords", "sLoadingRecords");
            a.sInfoThousands && (a.sThousands = a.sInfoThousands);
            (a = a.sDecimal) && db(a)
        }

        function eb(a) {
            B(a, "ordering", "bSort");
            B(a, "orderMulti", "bSortMulti");
            B(a, "orderClasses", "bSortClasses");
            B(a, "orderCellsTop", "bSortCellsTop");
            B(a, "order", "aaSorting");
            B(a, "orderFixed", "aaSortingFixed");
            B(a, "paging", "bPaginate");
            B(a, "pagingType", "sPaginationType");
            B(a, "pageLength", "iDisplayLength");
            B(a, "searching", "bFilter");
            "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : "");
            if (a = a.aoSearchCols)
                for (var b = 0, c = a.length; b < c; b++) a[b] && I(m.models.oSearch, a[b])
        }

        function fb(a) {
            B(a, "orderable", "bSortable");
            B(a, "orderData", "aDataSort");
            B(a, "orderSequence", "asSorting");
            B(a, "orderDataType", "sortDataType");
            var b = a.aDataSort;
            b && !g.isArray(b) && (a.aDataSort = [b])
        }

        function gb(a) {
            var a = a.oBrowser,
                b = g("<div/>").css({
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: 1,
                    width: 1,
                    overflow: "hidden"
                }).append(g("<div/>").css({
                    position: "absolute",
                    top: 1,
                    left: 1,
                    width: 100,
                    overflow: "scroll"
                }).append(g('<div class="test"/>').css({
                    width: "100%",
                    height: 10
                }))).appendTo("body"),
                c = b.find(".test");
            a.bScrollOversize = 100 === c[0].offsetWidth;
            a.bScrollbarLeft = 1 !== Math.round(c.offset().left);
            a.bBounding = b[0].getBoundingClientRect().width ? !0 : !1;
            b.remove()
        }

        function hb(a, b, c, d, e, f) {
            var h, i = !1;
            c !== k && (h = c, i = !0);
            for (; d !== e;) a.hasOwnProperty(d) && (h = i ? b(h, a[d], d, a) : a[d],
                i = !0, d += f);
            return h
        }

        function Ga(a, b) {
            var c = m.defaults.column,
                d = a.aoColumns.length,
                c = g.extend({}, m.models.oColumn, c, {
                    nTh: b ? b : T.createElement("th"),
                    sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
                    aDataSort: c.aDataSort ? c.aDataSort : [d],
                    mData: c.mData ? c.mData : d,
                    idx: d
                });
            a.aoColumns.push(c);
            c = a.aoPreSearchCols;
            c[d] = g.extend({}, m.models.oSearch, c[d]);
            ka(a, d, g(b).data())
        }

        function ka(a, b, c) {
            var b = a.aoColumns[b],
                d = a.oClasses,
                e = g(b.nTh);
            if (!b.sWidthOrig) {
                b.sWidthOrig = e.attr("width") || null;
                var f = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
                f && (b.sWidthOrig = f[1])
            }
            c !== k && null !== c && (fb(c), I(m.defaults.column, c), c.mDataProp !== k && !c.mData && (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), g.extend(b, c), F(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== k && (b.aDataSort = [c.iDataSort]), F(b, c, "aDataSort"));
            var h = b.mData,
                i = P(h),
                j = b.mRender ? P(b.mRender) : null,
                c = function (a) {
                    return "string" === typeof a && -1 !== a.indexOf("@")
                };
            b._bAttrSrc = g.isPlainObject(h) && (c(h.sort) || c(h.type) || c(h.filter));
            b.fnGetData =
                function (a, b, c) {
                    var d = i(a, b, k, c);
                    return j && b ? j(d, b, a, c) : d
                };
            b.fnSetData = function (a, b, c) {
                return Q(h)(a, b, c)
            };
            "number" !== typeof h && (a._rowReadObject = !0);
            a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone));
            a = -1 !== g.inArray("asc", b.asSorting);
            c = -1 !== g.inArray("desc", b.asSorting);
            !b.bSortable || !a && !c ? (b.sSortingClass = d.sSortableNone, b.sSortingClassJUI = "") : a && !c ? (b.sSortingClass = d.sSortableAsc, b.sSortingClassJUI = d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI =
                d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI)
        }

        function Y(a) {
            if (!1 !== a.oFeatures.bAutoWidth) {
                var b = a.aoColumns;
                Ha(a);
                for (var c = 0, d = b.length; c < d; c++) b[c].nTh.style.width = b[c].sWidth
            }
            b = a.oScroll;
            ("" !== b.sY || "" !== b.sX) && Z(a);
            w(a, null, "column-sizing", [a])
        }

        function la(a, b) {
            var c = $(a, "bVisible");
            return "number" === typeof c[b] ? c[b] : null
        }

        function aa(a, b) {
            var c = $(a, "bVisible"),
                c = g.inArray(b, c);
            return -1 !== c ? c : null
        }

        function ba(a) {
            return $(a, "bVisible").length
        }

        function $(a, b) {
            var c = [];
            g.map(a.aoColumns, function (a, e) {
                a[b] && c.push(e)
            });
            return c
        }

        function Ia(a) {
            var b = a.aoColumns,
                c = a.aoData,
                d = m.ext.type.detect,
                e, f, h, i, j, g, l, r, q;
            e = 0;
            for (f = b.length; e < f; e++)
                if (l = b[e], q = [], !l.sType && l._sManualType) l.sType = l._sManualType;
                else if (!l.sType) {
                    h = 0;
                    for (i = d.length; h < i; h++) {
                        j = 0;
                        for (g = c.length; j < g; j++) {
                            q[j] === k && (q[j] = y(a, j, e, "type"));
                            r = d[h](q[j], a);
                            if (!r && h !== d.length - 1) break;
                            if ("html" === r) break
                        }
                        if (r) {
                            l.sType = r;
                            break
                        }
                    }
                    l.sType || (l.sType = "string")
                }
        }

        function ib(a, b, c, d) {
            var e, f, h, i, j, n, l = a.aoColumns;
            if (b)
                for (e = b.length - 1; 0 <= e; e--) {
                    n = b[e];
                    var r = n.targets !== k ? n.targets : n.aTargets;
                    g.isArray(r) || (r = [r]);
                    f = 0;
                    for (h = r.length; f < h; f++)
                        if ("number" === typeof r[f] && 0 <= r[f]) {
                            for (; l.length <= r[f];) Ga(a);
                            d(r[f], n)
                        } else if ("number" === typeof r[f] && 0 > r[f]) d(l.length + r[f], n);
                        else if ("string" === typeof r[f]) {
                            i = 0;
                            for (j = l.length; i < j; i++)("_all" == r[f] || g(l[i].nTh).hasClass(r[f])) && d(i, n)
                        }
                }
            if (c) {
                e = 0;
                for (a = c.length; e < a; e++) d(e, c[e])
            }
        }

        function L(a, b, c, d) {
            var e = a.aoData.length,
                f = g.extend(!0, {}, m.models.oRow, {
                    src: c ? "dom" : "data",
                    idx: e
                });
            f._aData = b;
            a.aoData.push(f);
            for (var h = a.aoColumns, i = 0, j = h.length; i < j; i++) c && Ja(a, e, i, y(a, e, i)), h[i].sType = null;
            a.aiDisplayMaster.push(e);
            b = a.rowIdFn(b);
            b !== k && (a.aIds[b] = f);
            (c || !a.oFeatures.bDeferRender) && Ka(a, e, c, d);
            return e
        }

        function ma(a, b) {
            var c;
            b instanceof g || (b = g(b));
            return b.map(function (b, e) {
                c = na(a, e);
                return L(a, c.data, e, c.cells)
            })
        }

        function y(a, b, c, d) {
            var e = a.iDraw,
                f = a.aoColumns[c],
                h = a.aoData[b]._aData,
                i = f.sDefaultContent,
                c = f.fnGetData(h, d, {
                    settings: a,
                    row: b,
                    col: c
                });
            if (c === k) return a.iDrawError !=
                e && null === i && (J(a, 0, "Requested unknown parameter " + ("function" == typeof f.mData ? "{function}" : "'" + f.mData + "'") + " for row " + b, 4), a.iDrawError = e), i;
            if ((c === h || null === c) && null !== i) c = i;
            else if ("function" === typeof c) return c.call(h);
            return null === c && "display" == d ? "" : c
        }

        function Ja(a, b, c, d) {
            a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, {
                settings: a,
                row: b,
                col: c
            })
        }

        function La(a) {
            return g.map(a.match(/(\\.|[^\.])+/g) || [""], function (a) {
                return a.replace(/\\./g, ".")
            })
        }

        function P(a) {
            if (g.isPlainObject(a)) {
                var b = {};
                g.each(a, function (a, c) {
                    c && (b[a] = P(c))
                });
                return function (a, c, f, h) {
                    var i = b[c] || b._;
                    return i !== k ? i(a, c, f, h) : a
                }
            }
            if (null === a) return function (a) {
                return a
            };
            if ("function" === typeof a) return function (b, c, f, h) {
                return a(b, c, f, h)
            };
            if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
                var c = function (a, b, f) {
                    var h, i;
                    if ("" !== f) {
                        i = La(f);
                        for (var j = 0, g = i.length; j < g; j++) {
                            f = i[j].match(ca);
                            h = i[j].match(U);
                            if (f) {
                                i[j] = i[j].replace(ca, "");
                                "" !== i[j] && (a = a[i[j]]);
                                h = [];
                                i.splice(0, j + 1);
                                i = i.join(".");
                                j = 0;
                                for (g = a.length; j < g; j++) h.push(c(a[j], b, i));
                                a = f[0].substring(1, f[0].length - 1);
                                a = "" === a ? h : h.join(a);
                                break
                            } else if (h) {
                                i[j] = i[j].replace(U, "");
                                a = a[i[j]]();
                                continue
                            }
                            if (null === a || a[i[j]] === k) return k;
                            a = a[i[j]]
                        }
                    }
                    return a
                };
                return function (b, e) {
                    return c(b, e, a)
                }
            }
            return function (b) {
                return b[a]
            }
        }

        function Q(a) {
            if (g.isPlainObject(a)) return Q(a._);
            if (null === a) return function () { };
            if ("function" === typeof a) return function (b, d, e) {
                a(b, "set", d, e)
            };
            if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") ||
                -1 !== a.indexOf("("))) {
                var b = function (a, d, e) {
                    var e = La(e),
                        f;
                    f = e[e.length - 1];
                    for (var h, i, j = 0, g = e.length - 1; j < g; j++) {
                        h = e[j].match(ca);
                        i = e[j].match(U);
                        if (h) {
                            e[j] = e[j].replace(ca, "");
                            a[e[j]] = [];
                            f = e.slice();
                            f.splice(0, j + 1);
                            h = f.join(".");
                            i = 0;
                            for (g = d.length; i < g; i++) f = {}, b(f, d[i], h), a[e[j]].push(f);
                            return
                        }
                        i && (e[j] = e[j].replace(U, ""), a = a[e[j]](d));
                        if (null === a[e[j]] || a[e[j]] === k) a[e[j]] = {};
                        a = a[e[j]]
                    }
                    if (f.match(U)) a[f.replace(U, "")](d);
                    else a[f.replace(ca, "")] = d
                };
                return function (c, d) {
                    return b(c, d, a)
                }
            }
            return function (b,
                d) {
                b[a] = d
            }
        }

        function Ma(a) {
            return D(a.aoData, "_aData")
        }

        function oa(a) {
            a.aoData.length = 0;
            a.aiDisplayMaster.length = 0;
            a.aiDisplay.length = 0
        }

        function pa(a, b, c) {
            for (var d = -1, e = 0, f = a.length; e < f; e++) a[e] == b ? d = e : a[e] > b && a[e]--; - 1 != d && c === k && a.splice(d, 1)
        }

        function da(a, b, c, d) {
            var e = a.aoData[b],
                f, h = function (c, f) {
                    for (; c.childNodes.length;) c.removeChild(c.firstChild);
                    c.innerHTML = y(a, b, f, "display")
                };
            if ("dom" === c || (!c || "auto" === c) && "dom" === e.src) e._aData = na(a, e, d, d === k ? k : e._aData).data;
            else {
                var i = e.anCells;
                if (i)
                    if (d !==
                        k) h(i[d], d);
                    else {
                        c = 0;
                        for (f = i.length; c < f; c++) h(i[c], c)
                    }
            }
            e._aSortData = null;
            e._aFilterData = null;
            h = a.aoColumns;
            if (d !== k) h[d].sType = null;
            else {
                c = 0;
                for (f = h.length; c < f; c++) h[c].sType = null;
                Na(a, e)
            }
        }

        function na(a, b, c, d) {
            var e = [],
                f = b.firstChild,
                h, i, j = 0,
                n, l = a.aoColumns,
                r = a._rowReadObject,
                d = d || r ? {} : [],
                q = function (a, b) {
                    if ("string" === typeof a) {
                        var c = a.indexOf("@"); - 1 !== c && (c = a.substring(c + 1), Q(a)(d, b.getAttribute(c)))
                    }
                },
                jb = function (a) {
                    if (c === k || c === j) i = l[j], n = g.trim(a.innerHTML), i && i._bAttrSrc ? (Q(i.mData._)(d, n),
                        q(i.mData.sort, a), q(i.mData.type, a), q(i.mData.filter, a)) : r ? (i._setter || (i._setter = Q(i.mData)), i._setter(d, n)) : d[j] = n;
                    j++
                };
            if (f)
                for (; f;) {
                    h = f.nodeName.toUpperCase();
                    if ("TD" == h || "TH" == h) jb(f), e.push(f);
                    f = f.nextSibling
                } else {
                e = b.anCells;
                f = 0;
                for (h = e.length; f < h; f++) jb(e[f])
            } (b = b.getAttribute("id")) && Q(a.rowId)(d, b);
            return {
                data: d,
                cells: e
            }
        }

        function Ka(a, b, c, d) {
            var e = a.aoData[b],
                f = e._aData,
                h = [],
                i, j, g, l, r;
            if (null === e.nTr) {
                i = c || T.createElement("tr");
                e.nTr = i;
                e.anCells = h;
                i._DT_RowIndex = b;
                Na(a, e);
                l = 0;
                for (r = a.aoColumns.length; l <
                    r; l++) {
                    g = a.aoColumns[l];
                    j = c ? d[l] : T.createElement(g.sCellType);
                    h.push(j);
                    if (!c || g.mRender || g.mData !== l) j.innerHTML = y(a, b, l, "display");
                    g.sClass && (j.className += " " + g.sClass);
                    g.bVisible && !c ? i.appendChild(j) : !g.bVisible && c && j.parentNode.removeChild(j);
                    g.fnCreatedCell && g.fnCreatedCell.call(a.oInstance, j, y(a, b, l), f, b, l)
                }
                w(a, "aoRowCreatedCallback", null, [i, f, b])
            }
            e.nTr.setAttribute("role", "row")
        }

        function Na(a, b) {
            var c = b.nTr,
                d = b._aData;
            if (c) {
                var e = a.rowIdFn(d);
                e && (c.id = e);
                d.DT_RowClass && (e = d.DT_RowClass.split(" "),
                    b.__rowc = b.__rowc ? Oa(b.__rowc.concat(e)) : e, g(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
                d.DT_RowAttr && g(c).attr(d.DT_RowAttr);
                d.DT_RowData && g(c).data(d.DT_RowData)
            }
        }

        function kb(a) {
            var b, c, d, e, f, h = a.nTHead,
                i = a.nTFoot,
                j = 0 === g("th, td", h).length,
                n = a.oClasses,
                l = a.aoColumns;
            j && (e = g("<tr/>").appendTo(h));
            b = 0;
            for (c = l.length; b < c; b++) f = l[b], d = g(f.nTh).addClass(f.sClass), j && d.appendTo(e), a.oFeatures.bSort && (d.addClass(f.sSortingClass), !1 !== f.bSortable && (d.attr("tabindex", a.iTabIndex).attr("aria-controls",
                a.sTableId), Pa(a, f.nTh, b))), f.sTitle != d[0].innerHTML && d.html(f.sTitle), Qa(a, "header")(a, d, f, n);
            j && ea(a.aoHeader, h);
            g(h).find(">tr").attr("role", "row");
            g(h).find(">tr>th, >tr>td").addClass(n.sHeaderTH);
            g(i).find(">tr>th, >tr>td").addClass(n.sFooterTH);
            if (null !== i) {
                a = a.aoFooter[0];
                b = 0;
                for (c = a.length; b < c; b++) f = l[b], f.nTf = a[b].cell, f.sClass && g(f.nTf).addClass(f.sClass)
            }
        }

        function fa(a, b, c) {
            var d, e, f, h = [],
                i = [],
                j = a.aoColumns.length,
                n;
            if (b) {
                c === k && (c = !1);
                d = 0;
                for (e = b.length; d < e; d++) {
                    h[d] = b[d].slice();
                    h[d].nTr =
                        b[d].nTr;
                    for (f = j - 1; 0 <= f; f--) !a.aoColumns[f].bVisible && !c && h[d].splice(f, 1);
                    i.push([])
                }
                d = 0;
                for (e = h.length; d < e; d++) {
                    if (a = h[d].nTr)
                        for (; f = a.firstChild;) a.removeChild(f);
                    f = 0;
                    for (b = h[d].length; f < b; f++)
                        if (n = j = 1, i[d][f] === k) {
                            a.appendChild(h[d][f].cell);
                            for (i[d][f] = 1; h[d + j] !== k && h[d][f].cell == h[d + j][f].cell;) i[d + j][f] = 1, j++;
                            for (; h[d][f + n] !== k && h[d][f].cell == h[d][f + n].cell;) {
                                for (c = 0; c < j; c++) i[d + c][f + n] = 1;
                                n++
                            }
                            g(h[d][f].cell).attr("rowspan", j).attr("colspan", n)
                        }
                }
            }
        }

        function M(a) {
            var b = w(a, "aoPreDrawCallback",
                "preDraw", [a]);
            if (-1 !== g.inArray(!1, b)) C(a, !1);
            else {
                var b = [],
                    c = 0,
                    d = a.asStripeClasses,
                    e = d.length,
                    f = a.oLanguage,
                    h = a.iInitDisplayStart,
                    i = "ssp" == z(a),
                    j = a.aiDisplay;
                a.bDrawing = !0;
                h !== k && -1 !== h && (a._iDisplayStart = i ? h : h >= a.fnRecordsDisplay() ? 0 : h, a.iInitDisplayStart = -1);
                var h = a._iDisplayStart,
                    n = a.fnDisplayEnd();
                if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++ , C(a, !1);
                else if (i) {
                    if (!a.bDestroying && !lb(a)) return
                } else a.iDraw++;
                if (0 !== j.length) {
                    f = i ? a.aoData.length : n;
                    for (i = i ? 0 : h; i < f; i++) {
                        var l = j[i],
                            r = a.aoData[l];
                        null === r.nTr && Ka(a, l);
                        l = r.nTr;
                        if (0 !== e) {
                            var q = d[c % e];
                            r._sRowStripe != q && (g(l).removeClass(r._sRowStripe).addClass(q), r._sRowStripe = q)
                        }
                        w(a, "aoRowCallback", null, [l, r._aData, c, i]);
                        b.push(l);
                        c++
                    }
                } else c = f.sZeroRecords, 1 == a.iDraw && "ajax" == z(a) ? c = f.sLoadingRecords : f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable), b[0] = g("<tr/>", {
                    "class": e ? d[0] : ""
                }).append(g("<td />", {
                    valign: "top",
                    colSpan: ba(a),
                    "class": a.oClasses.sRowEmpty
                }).html(c))[0];
                w(a, "aoHeaderCallback", "header", [g(a.nTHead).children("tr")[0],
                Ma(a), h, n, j
                ]);
                w(a, "aoFooterCallback", "footer", [g(a.nTFoot).children("tr")[0], Ma(a), h, n, j]);
                d = g(a.nTBody);
                d.children().detach();
                d.append(g(b));
                w(a, "aoDrawCallback", "draw", [a]);
                a.bSorted = !1;
                a.bFiltered = !1;
                a.bDrawing = !1
            }
        }

        function R(a, b) {
            var c = a.oFeatures,
                d = c.bFilter;
            c.bSort && mb(a);
            d ? ga(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice();
            !0 !== b && (a._iDisplayStart = 0);
            a._drawHold = b;
            M(a);
            a._drawHold = !1
        }

        function nb(a) {
            var b = a.oClasses,
                c = g(a.nTable),
                c = g("<div/>").insertBefore(c),
                d = a.oFeatures,
                e = g("<div/>", {
                    id: a.sTableId + "_wrapper",
                    "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter)
                });
            a.nHolding = c[0];
            a.nTableWrapper = e[0];
            a.nTableReinsertBefore = a.nTable.nextSibling;
            for (var f = a.sDom.split(""), h, i, j, n, l, r, q = 0; q < f.length; q++) {
                h = null;
                i = f[q];
                if ("<" == i) {
                    j = g("<div/>")[0];
                    n = f[q + 1];
                    if ("'" == n || '"' == n) {
                        l = "";
                        for (r = 2; f[q + r] != n;) l += f[q + r], r++;
                        "H" == l ? l = b.sJUIHeader : "F" == l && (l = b.sJUIFooter); - 1 != l.indexOf(".") ? (n = l.split("."), j.id = n[0].substr(1, n[0].length - 1), j.className = n[1]) : "#" == l.charAt(0) ? j.id = l.substr(1, l.length -
                            1) : j.className = l;
                        q += r
                    }
                    e.append(j);
                    e = g(j)
                } else if (">" == i) e = e.parent();
                else if ("l" == i && d.bPaginate && d.bLengthChange) h = ob(a);
                else if ("f" == i && d.bFilter) h = pb(a);
                else if ("r" == i && d.bProcessing) h = qb(a);
                else if ("t" == i) h = rb(a);
                else if ("i" == i && d.bInfo) h = sb(a);
                else if ("p" == i && d.bPaginate) h = tb(a);
                else if (0 !== m.ext.feature.length) {
                    j = m.ext.feature;
                    r = 0;
                    for (n = j.length; r < n; r++)
                        if (i == j[r].cFeature) {
                            h = j[r].fnInit(a);
                            break
                        }
                }
                h && (j = a.aanFeatures, j[i] || (j[i] = []), j[i].push(h), e.append(h))
            }
            c.replaceWith(e);
            a.nHolding = null
        }

        function ea(a, b) {
            var c = g(b).children("tr"),
                d, e, f, h, i, j, n, l, r, q;
            a.splice(0, a.length);
            f = 0;
            for (j = c.length; f < j; f++) a.push([]);
            f = 0;
            for (j = c.length; f < j; f++) {
                d = c[f];
                for (e = d.firstChild; e;) {
                    if ("TD" == e.nodeName.toUpperCase() || "TH" == e.nodeName.toUpperCase()) {
                        l = 1 * e.getAttribute("colspan");
                        r = 1 * e.getAttribute("rowspan");
                        l = !l || 0 === l || 1 === l ? 1 : l;
                        r = !r || 0 === r || 1 === r ? 1 : r;
                        h = 0;
                        for (i = a[f]; i[h];) h++;
                        n = h;
                        q = 1 === l ? !0 : !1;
                        for (i = 0; i < l; i++)
                            for (h = 0; h < r; h++) a[f + h][n + i] = {
                                cell: e,
                                unique: q
                            }, a[f + h].nTr = d
                    }
                    e = e.nextSibling
                }
            }
        }

        function qa(a,
            b, c) {
            var d = [];
            c || (c = a.aoHeader, b && (c = [], ea(c, b)));
            for (var b = 0, e = c.length; b < e; b++)
                for (var f = 0, h = c[b].length; f < h; f++)
                    if (c[b][f].unique && (!d[f] || !a.bSortCellsTop)) d[f] = c[b][f].cell;
            return d
        }

        function ra(a, b, c) {
            w(a, "aoServerParams", "serverParams", [b]);
            if (b && g.isArray(b)) {
                var d = {},
                    e = /(.*?)\[\]$/;
                g.each(b, function (a, b) {
                    var c = b.name.match(e);
                    c ? (c = c[0], d[c] || (d[c] = []), d[c].push(b.value)) : d[b.name] = b.value
                });
                b = d
            }
            var f, h = a.ajax,
                i = a.oInstance,
                j = function (b) {
                    w(a, null, "xhr", [a, b, a.jqXHR]);
                    c(b)
                };
            if (g.isPlainObject(h) &&
                h.data) {
                f = h.data;
                var n = g.isFunction(f) ? f(b, a) : f,
                    b = g.isFunction(f) && n ? n : g.extend(!0, b, n);
                delete h.data
            }
            n = {
                data: b,
                success: function (b) {
                    var c = b.error || b.sError;
                    c && J(a, 0, c);
                    a.json = b;
                    j(b)
                },
                dataType: "json",
                cache: !1,
                type: a.sServerMethod,
                error: function (b, c) {
                    var f = w(a, null, "xhr", [a, null, a.jqXHR]); - 1 === g.inArray(!0, f) && ("parsererror" == c ? J(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && J(a, 0, "Ajax error", 7));
                    C(a, !1)
                }
            };
            a.oAjaxData = b;
            w(a, null, "preXhr", [a, b]);
            a.fnServerData ? a.fnServerData.call(i, a.sAjaxSource,
                g.map(b, function (a, b) {
                    return {
                        name: b,
                        value: a
                    }
                }), j, a) : a.sAjaxSource || "string" === typeof h ? a.jqXHR = g.ajax(g.extend(n, {
                    url: h || a.sAjaxSource
                })) : g.isFunction(h) ? a.jqXHR = h.call(i, b, j, a) : (a.jqXHR = g.ajax(g.extend(n, h)), h.data = f)
        }

        function lb(a) {
            return a.bAjaxDataGet ? (a.iDraw++ , C(a, !0), ra(a, ub(a), function (b) {
                vb(a, b)
            }), !1) : !0
        }

        function ub(a) {
            var b = a.aoColumns,
                c = b.length,
                d = a.oFeatures,
                e = a.oPreviousSearch,
                f = a.aoPreSearchCols,
                h, i = [],
                j, n, l, r = V(a);
            h = a._iDisplayStart;
            j = !1 !== d.bPaginate ? a._iDisplayLength : -1;
            var q = function (a,
                b) {
                i.push({
                    name: a,
                    value: b
                })
            };
            q("sEcho", a.iDraw);
            q("iColumns", c);
            q("sColumns", D(b, "sName").join(","));
            q("iDisplayStart", h);
            q("iDisplayLength", j);
            var k = {
                draw: a.iDraw,
                columns: [],
                order: [],
                start: h,
                length: j,
                search: {
                    value: e.sSearch,
                    regex: e.bRegex
                }
            };
            for (h = 0; h < c; h++) n = b[h], l = f[h], j = "function" == typeof n.mData ? "function" : n.mData, k.columns.push({
                data: j,
                name: n.sName,
                searchable: n.bSearchable,
                orderable: n.bSortable,
                search: {
                    value: l.sSearch,
                    regex: l.bRegex
                }
            }), q("mDataProp_" + h, j), d.bFilter && (q("sSearch_" + h, l.sSearch),
                q("bRegex_" + h, l.bRegex), q("bSearchable_" + h, n.bSearchable)), d.bSort && q("bSortable_" + h, n.bSortable);
            d.bFilter && (q("sSearch", e.sSearch), q("bRegex", e.bRegex));
            d.bSort && (g.each(r, function (a, b) {
                k.order.push({
                    column: b.col,
                    dir: b.dir
                });
                q("iSortCol_" + a, b.col);
                q("sSortDir_" + a, b.dir)
            }), q("iSortingCols", r.length));
            b = m.ext.legacy.ajax;
            return null === b ? a.sAjaxSource ? i : k : b ? i : k
        }

        function vb(a, b) {
            var c = sa(a, b),
                d = b.sEcho !== k ? b.sEcho : b.draw,
                e = b.iTotalRecords !== k ? b.iTotalRecords : b.recordsTotal,
                f = b.iTotalDisplayRecords !==
                    k ? b.iTotalDisplayRecords : b.recordsFiltered;
            if (d) {
                if (1 * d < a.iDraw) return;
                a.iDraw = 1 * d
            }
            oa(a);
            a._iRecordsTotal = parseInt(e, 10);
            a._iRecordsDisplay = parseInt(f, 10);
            d = 0;
            for (e = c.length; d < e; d++) L(a, c[d]);
            a.aiDisplay = a.aiDisplayMaster.slice();
            a.bAjaxDataGet = !1;
            M(a);
            a._bInitComplete || ta(a, b);
            a.bAjaxDataGet = !0;
            C(a, !1)
        }

        function sa(a, b) {
            var c = g.isPlainObject(a.ajax) && a.ajax.dataSrc !== k ? a.ajax.dataSrc : a.sAjaxDataProp;
            return "data" === c ? b.aaData || b[c] : "" !== c ? P(c)(b) : b
        }

        function pb(a) {
            var b = a.oClasses,
                c = a.sTableId,
                d = a.oLanguage,
                e = a.oPreviousSearch,
                f = a.aanFeatures,
                h = '<input type="search" class="search-field form-control' + b.sFilterInput + '"/>',
                i = d.sSearch,
                i = i.match(/_INPUT_/) ? i.replace("_INPUT_", h) : i + h,
                b = g("<div/>", {
                    id: !f.f ? c + "_filter" : null,
                    "class": b.sFilter
                }).append(g("<span/>", {
                    "class": "table-bootgrid__icon zmdi zmdi-search"
                })).append(i).append('<i class="form-group__bar"></i>'),
                f = function () {
                    var b = !this.value ? "" : this.value;
                    b != e.sSearch && (ga(a, {
                        sSearch: b,
                        bRegex: e.bRegex,
                        bSmart: e.bSmart,
                        bCaseInsensitive: e.bCaseInsensitive
                    }), a._iDisplayStart = 0, M(a))
                },
                h = null !== a.searchDelay ? a.searchDelay : "ssp" === z(a) ? 400 : 0,
                j = g("input", b).val(e.sSearch).attr("placeholder",
                    d.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT", h ? ua(f, h) : f).bind("keypress.DT", function (a) {
                        if (13 == a.keyCode) return !1
                    }).attr("aria-controls", c);
            g(a.nTable).on("search.dt.DT", function (b, c) {
                if (a === c) try {
                    j[0] !== T.activeElement && j.val(e.sSearch)
                } catch (f) { }
            });
            return b[0]
        }

        function ga(a, b, c) {
            var d = a.oPreviousSearch,
                e = a.aoPreSearchCols,
                f = function (a) {
                    d.sSearch = a.sSearch;
                    d.bRegex = a.bRegex;
                    d.bSmart = a.bSmart;
                    d.bCaseInsensitive = a.bCaseInsensitive
                };
            Ia(a);
            if ("ssp" != z(a)) {
                wb(a, b.sSearch,
                    c, b.bEscapeRegex !== k ? !b.bEscapeRegex : b.bRegex, b.bSmart, b.bCaseInsensitive);
                f(b);
                for (b = 0; b < e.length; b++) xb(a, e[b].sSearch, b, e[b].bEscapeRegex !== k ? !e[b].bEscapeRegex : e[b].bRegex, e[b].bSmart, e[b].bCaseInsensitive);
                yb(a)
            } else f(b);
            a.bFiltered = !0;
            w(a, null, "search", [a])
        }

        function yb(a) {
            for (var b = m.ext.search, c = a.aiDisplay, d, e, f = 0, h = b.length; f < h; f++) {
                for (var i = [], j = 0, g = c.length; j < g; j++) e = c[j], d = a.aoData[e], b[f](a, d._aFilterData, e, d._aData, j) && i.push(e);
                c.length = 0;
                c.push.apply(c, i)
            }
        }

        function xb(a, b, c, d, e,
            f) {
            if ("" !== b)
                for (var h = a.aiDisplay, d = Ra(b, d, e, f), e = h.length - 1; 0 <= e; e--) b = a.aoData[h[e]]._aFilterData[c], d.test(b) || h.splice(e, 1)
        }

        function wb(a, b, c, d, e, f) {
            var d = Ra(b, d, e, f),
                e = a.oPreviousSearch.sSearch,
                f = a.aiDisplayMaster,
                h;
            0 !== m.ext.search.length && (c = !0);
            h = zb(a);
            if (0 >= b.length) a.aiDisplay = f.slice();
            else {
                if (h || c || e.length > b.length || 0 !== b.indexOf(e) || a.bSorted) a.aiDisplay = f.slice();
                b = a.aiDisplay;
                for (c = b.length - 1; 0 <= c; c--) d.test(a.aoData[b[c]]._sFilterRow) || b.splice(c, 1)
            }
        }

        function Ra(a, b, c, d) {
            a = b ? a : va(a);
            c && (a = "^(?=.*?" + g.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (a) {
                if ('"' === a.charAt(0)) var b = a.match(/^"(.*)"$/),
                    a = b ? b[1] : a;
                return a.replace('"', "")
            }).join(")(?=.*?") + ").*$");
            return RegExp(a, d ? "i" : "")
        }

        function va(a) {
            return a.replace(Zb, "\\$1")
        }

        function zb(a) {
            var b = a.aoColumns,
                c, d, e, f, h, i, j, g, l = m.ext.type.search;
            c = !1;
            d = 0;
            for (f = a.aoData.length; d < f; d++)
                if (g = a.aoData[d], !g._aFilterData) {
                    i = [];
                    e = 0;
                    for (h = b.length; e < h; e++) c = b[e], c.bSearchable ? (j = y(a, d, e, "filter"), l[c.sType] && (j = l[c.sType](j)), null === j && (j =
                        ""), "string" !== typeof j && j.toString && (j = j.toString())) : j = "", j.indexOf && -1 !== j.indexOf("&") && (wa.innerHTML = j, j = $b ? wa.textContent : wa.innerText), j.replace && (j = j.replace(/[\r\n]/g, "")), i.push(j);
                    g._aFilterData = i;
                    g._sFilterRow = i.join("  ");
                    c = !0
                }
            return c
        }

        function Ab(a) {
            return {
                search: a.sSearch,
                smart: a.bSmart,
                regex: a.bRegex,
                caseInsensitive: a.bCaseInsensitive
            }
        }

        function Bb(a) {
            return {
                sSearch: a.search,
                bSmart: a.smart,
                bRegex: a.regex,
                bCaseInsensitive: a.caseInsensitive
            }
        }

        function sb(a) {
            var b = a.sTableId,
                c = a.aanFeatures.i,
                d = g("<div/>", {
                    "class": a.oClasses.sInfo,
                    id: !c ? b + "_info" : null
                });
            c || (a.aoDrawCallback.push({
                fn: Cb,
                sName: "information"
            }), d.attr("role", "status").attr("aria-live", "polite"), g(a.nTable).attr("aria-describedby", b + "_info"));
            return d[0]
        }

        function Cb(a) {
            var b = a.aanFeatures.i;
            if (0 !== b.length) {
                var c = a.oLanguage,
                    d = a._iDisplayStart + 1,
                    e = a.fnDisplayEnd(),
                    f = a.fnRecordsTotal(),
                    h = a.fnRecordsDisplay(),
                    i = h ? c.sInfo : c.sInfoEmpty;
                h !== f && (i += " " + c.sInfoFiltered);
                i += c.sInfoPostFix;
                i = Db(a, i);
                c = c.fnInfoCallback;
                null !== c && (i =
                    c.call(a.oInstance, a, d, e, f, h, i));
                g(b).html(i)
            }
        }

        function Db(a, b) {
            var c = a.fnFormatNumber,
                d = a._iDisplayStart + 1,
                e = a._iDisplayLength,
                f = a.fnRecordsDisplay(),
                h = -1 === e;
            return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a, f)).replace(/_PAGE_/g, c.call(a, h ? 1 : Math.ceil(d / e))).replace(/_PAGES_/g, c.call(a, h ? 1 : Math.ceil(f / e)))
        }

        function ha(a) {
            var b, c, d = a.iInitDisplayStart,
                e = a.aoColumns,
                f;
            c = a.oFeatures;
            var h =
                a.bDeferLoading;
            if (a.bInitialised) {
                nb(a);
                kb(a);
                fa(a, a.aoHeader);
                fa(a, a.aoFooter);
                C(a, !0);
                c.bAutoWidth && Ha(a);
                b = 0;
                for (c = e.length; b < c; b++) f = e[b], f.sWidth && (f.nTh.style.width = u(f.sWidth));
                w(a, null, "preInit", [a]);
                R(a);
                e = z(a);
                if ("ssp" != e || h) "ajax" == e ? ra(a, [], function (c) {
                    var f = sa(a, c);
                    for (b = 0; b < f.length; b++) L(a, f[b]);
                    a.iInitDisplayStart = d;
                    R(a);
                    C(a, !1);
                    ta(a, c)
                }, a) : (C(a, !1), ta(a))
            } else setTimeout(function () {
                ha(a)
            }, 200)
        }

        function ta(a, b) {
            a._bInitComplete = !0;
            (b || a.oInit.aaData) && Y(a);
            w(a, "aoInitComplete", "init", [a, b])
        }

        function Sa(a, b) {
            var c = parseInt(b, 10);
            a._iDisplayLength = c;
            Ta(a);
            w(a, null, "length", [a, c])
        }

        function ob(a) {
            for (var b = a.oClasses, c = a.sTableId, d = a.aLengthMenu, e = g.isArray(d[0]), f = e ? d[0] : d, d = e ? d[1] : d, e = g("<select/>", {
                name: c + "_length",
                "aria-controls": c,
                "class": "form-control " + b.sLengthSelect
            }), h = 0, i = f.length; h < i; h++) e[0][h] = new Option(d[h], f[h]);
            var j = g("<div/>").addClass(b.sLength);
            a.aanFeatures.l || (j[0].id = c + "_length");
            j.append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML));
            g("select",
                j).val(a._iDisplayLength).bind("change.DT", function () {
                    Sa(a, g(this).val());
                    M(a)
                });
            g(a.nTable).bind("length.dt.DT", function (b, c, f) {
                a === c && g("select", j).val(f)
            });
            return j[0]
        }

        function tb(a) {
            var b = a.sPaginationType,
                c = m.ext.pager[b],
                d = "function" === typeof c,
                e = function (a) {
                    M(a)
                },
                b = g("<div/>").addClass(a.oClasses.sPaging + b)[0],
                f = a.aanFeatures;
            d || c.fnInit(a, b, e);
            f.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({
                fn: function (a) {
                    if (d) {
                        var b = a._iDisplayStart,
                            g = a._iDisplayLength,
                            n = a.fnRecordsDisplay(),
                            l = -1 ===
                                g,
                            b = l ? 0 : Math.ceil(b / g),
                            g = l ? 1 : Math.ceil(n / g),
                            n = c(b, g),
                            k, l = 0;
                        for (k = f.p.length; l < k; l++) Qa(a, "pageButton")(a, f.p[l], l, n, b, g)
                    } else c.fnUpdate(a, e)
                },
                sName: "pagination"
            }));
            return b
        }

        function Ua(a, b, c) {
            var d = a._iDisplayStart,
                e = a._iDisplayLength,
                f = a.fnRecordsDisplay();
            0 === f || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e, d > f && (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0, 0 > d && (d = 0)) : "next" == b ? d + e < f && (d += e) : "last" == b ? d = Math.floor((f - 1) / e) * e : J(a, 0, "Unknown paging action: " + b, 5);
            b = a._iDisplayStart !== d;
            a._iDisplayStart =
                d;
            b && (w(a, null, "page", [a]), c && M(a));
            return b
        }

        function qb(a) {
            return g("<div/>", {
                id: !a.aanFeatures.r ? a.sTableId + "_processing" : null,
                "class": a.oClasses.sProcessing
            }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]
        }

        function C(a, b) {
            a.oFeatures.bProcessing && g(a.aanFeatures.r).css("display", b ? "block" : "none");
            w(a, null, "processing", [a, b])
        }

        function rb(a) {
            var b = g(a.nTable);
            b.attr("role", "grid");
            var c = a.oScroll;
            if ("" === c.sX && "" === c.sY) return a.nTable;
            var d = c.sX,
                e = c.sY,
                f = a.oClasses,
                h = b.children("caption"),
                i = h.length ? h[0]._captionSide : null,
                j = g(b[0].cloneNode(!1)),
                n = g(b[0].cloneNode(!1)),
                l = b.children("tfoot");
            c.sX && "100%" === b.attr("width") && b.removeAttr("width");
            l.length || (l = null);
            j = g("<div/>", {
                "class": f.sScrollWrapper
            }).append(g("<div/>", {
                "class": f.sScrollHead
            }).css({
                overflow: "hidden",
                position: "relative",
                border: 0,
                width: d ? !d ? null : u(d) : "100%"
            }).append(g("<div/>", {
                "class": f.sScrollHeadInner
            }).css({
                "box-sizing": "content-box",
                width: c.sXInner || "100%"
            }).append(j.removeAttr("id").css("margin-left", 0).append("top" ===
                i ? h : null).append(b.children("thead"))))).append(g("<div/>", {
                    "class": f.sScrollBody
                }).css({
                    position: "relative",
                    overflow: "auto",
                    width: !d ? null : u(d)
                }).append(b));
            l && j.append(g("<div/>", {
                "class": f.sScrollFoot
            }).css({
                overflow: "hidden",
                border: 0,
                width: d ? !d ? null : u(d) : "100%"
            }).append(g("<div/>", {
                "class": f.sScrollFootInner
            }).append(n.removeAttr("id").css("margin-left", 0).append("bottom" === i ? h : null).append(b.children("tfoot")))));
            var b = j.children(),
                k = b[0],
                f = b[1],
                q = l ? b[2] : null;
            if (d) g(f).on("scroll.DT", function () {
                var a =
                    this.scrollLeft;
                k.scrollLeft = a;
                l && (q.scrollLeft = a)
            });
            g(f).css(e && c.bCollapse ? "max-height" : "height", e);
            a.nScrollHead = k;
            a.nScrollBody = f;
            a.nScrollFoot = q;
            a.aoDrawCallback.push({
                fn: Z,
                sName: "scrolling"
            });
            return j[0]
        }

        function Z(a) {
            var b = a.oScroll,
                c = b.sX,
                d = b.sXInner,
                e = b.sY,
                b = b.iBarWidth,
                f = g(a.nScrollHead),
                h = f[0].style,
                i = f.children("div"),
                j = i[0].style,
                n = i.children("table"),
                i = a.nScrollBody,
                l = g(i),
                k = i.style,
                q = g(a.nScrollFoot).children("div"),
                m = q.children("table"),
                o = g(a.nTHead),
                E = g(a.nTable),
                p = E[0],
                t = p.style,
                N = a.nTFoot ? g(a.nTFoot) : null,
                Eb = a.oBrowser,
                w = Eb.bScrollOversize,
                s, v, O, x, y = [],
                z = [],
                A = [],
                B, C = function (a) {
                    a = a.style;
                    a.paddingTop = "0";
                    a.paddingBottom = "0";
                    a.borderTopWidth = "0";
                    a.borderBottomWidth = "0";
                    a.height = 0
                };
            E.children("thead, tfoot").remove();
            x = o.clone().prependTo(E);
            o = o.find("tr");
            v = x.find("tr");
            x.find("th, td").removeAttr("tabindex");
            N && (O = N.clone().prependTo(E), s = N.find("tr"), O = O.find("tr"));
            c || (k.width = "100%", f[0].style.width = "100%");
            g.each(qa(a, x), function (b, c) {
                B = la(a, b);
                c.style.width = a.aoColumns[B].sWidth
            });
            N && H(function (a) {
                a.style.width = ""
            }, O);
            f = E.outerWidth();
            if ("" === c) {
                t.width = "100%";
                if (w && (E.find("tbody").height() > i.offsetHeight || "scroll" == l.css("overflow-y"))) t.width = u(E.outerWidth() - b);
                f = E.outerWidth()
            } else "" !== d && (t.width = u(d), f = E.outerWidth());
            H(C, v);
            H(function (a) {
                A.push(a.innerHTML);
                y.push(u(g(a).css("width")))
            }, v);
            H(function (a, b) {
                a.style.width = y[b]
            }, o);
            g(v).height(0);
            N && (H(C, O), H(function (a) {
                z.push(u(g(a).css("width")))
            }, O), H(function (a, b) {
                a.style.width = z[b]
            }, s), g(O).height(0));
            H(function (a,
                b) {
                a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + A[b] + "</div>";
                a.style.width = y[b]
            }, v);
            N && H(function (a, b) {
                a.innerHTML = "";
                a.style.width = z[b]
            }, O);
            if (E.outerWidth() < f) {
                s = i.scrollHeight > i.offsetHeight || "scroll" == l.css("overflow-y") ? f + b : f;
                if (w && (i.scrollHeight > i.offsetHeight || "scroll" == l.css("overflow-y"))) t.width = u(s - b);
                ("" === c || "" !== d) && J(a, 1, "Possible column misalignment", 6)
            } else s = "100%";
            k.width = u(s);
            h.width = u(s);
            N && (a.nScrollFoot.style.width = u(s));
            !e && w && (k.height =
                u(p.offsetHeight + b));
            c = E.outerWidth();
            n[0].style.width = u(c);
            j.width = u(c);
            d = E.height() > i.clientHeight || "scroll" == l.css("overflow-y");
            e = "padding" + (Eb.bScrollbarLeft ? "Left" : "Right");
            j[e] = d ? b + "px" : "0px";
            N && (m[0].style.width = u(c), q[0].style.width = u(c), q[0].style[e] = d ? b + "px" : "0px");
            l.scroll();
            if ((a.bSorted || a.bFiltered) && !a._drawHold) i.scrollTop = 0
        }

        function H(a, b, c) {
            for (var d = 0, e = 0, f = b.length, h, i; e < f;) {
                h = b[e].firstChild;
                for (i = c ? c[e].firstChild : null; h;) 1 === h.nodeType && (c ? a(h, i, d) : a(h, d), d++), h = h.nextSibling,
                    i = c ? i.nextSibling : null;
                e++
            }
        }

        function Ha(a) {
            var b = a.nTable,
                c = a.aoColumns,
                d = a.oScroll,
                e = d.sY,
                f = d.sX,
                h = d.sXInner,
                i = c.length,
                j = $(a, "bVisible"),
                n = g("th", a.nTHead),
                l = b.getAttribute("width"),
                k = b.parentNode,
                q = !1,
                m, o, p;
            p = a.oBrowser;
            d = p.bScrollOversize;
            (m = b.style.width) && -1 !== m.indexOf("%") && (l = m);
            for (m = 0; m < j.length; m++) o = c[j[m]], null !== o.sWidth && (o.sWidth = Fb(o.sWidthOrig, k), q = !0);
            if (d || !q && !f && !e && i == ba(a) && i == n.length)
                for (m = 0; m < i; m++) c[m].sWidth = u(n.eq(m).width());
            else {
                i = g(b).clone().css("visibility", "hidden").removeAttr("id");
                i.find("tbody tr").remove();
                var t = g("<tr/>").appendTo(i.find("tbody"));
                i.find("thead, tfoot").remove();
                i.append(g(a.nTHead).clone()).append(g(a.nTFoot).clone());
                i.find("tfoot th, tfoot td").css("width", "");
                n = qa(a, i.find("thead")[0]);
                for (m = 0; m < j.length; m++) o = c[j[m]], n[m].style.width = null !== o.sWidthOrig && "" !== o.sWidthOrig ? u(o.sWidthOrig) : "";
                if (a.aoData.length)
                    for (m = 0; m < j.length; m++) q = j[m], o = c[q], g(Gb(a, q)).clone(!1).append(o.sContentPadding).appendTo(t);
                q = g("<div/>").css(f || e ? {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: 1,
                    right: 0,
                    overflow: "hidden"
                } : {}).append(i).appendTo(k);
                f && h ? i.width(h) : f ? (i.css("width", "auto"), i.width() < k.clientWidth && i.width(k.clientWidth)) : e ? i.width(k.clientWidth) : l && i.width(l);
                if (f) {
                    for (m = h = 0; m < j.length; m++) o = c[j[m]], e = p.bBounding ? n[m].getBoundingClientRect().width : g(n[m]).outerWidth(), h += null === o.sWidthOrig ? e : parseInt(o.sWidth, 10) + e - g(n[m]).width();
                    i.width(u(h));
                    b.style.width = u(h)
                }
                for (m = 0; m < j.length; m++)
                    if (o = c[j[m]], p = g(n[m]).width()) o.sWidth = u(p);
                b.style.width = u(i.css("width"));
                q.remove()
            }
            l && (b.style.width = u(l));
            if ((l || f) && !a._reszEvt) b = function () {
                g(Fa).bind("resize.DT-" + a.sInstance, ua(function () {
                    Y(a)
                }))
            }, d ? setTimeout(b, 1E3) : b(), a._reszEvt = !0
        }

        function ua(a, b) {
            var c = b !== k ? b : 200,
                d, e;
            return function () {
                var b = this,
                    h = +new Date,
                    i = arguments;
                d && h < d + c ? (clearTimeout(e), e = setTimeout(function () {
                    d = k;
                    a.apply(b, i)
                }, c)) : (d = h, a.apply(b, i))
            }
        }

        function Fb(a, b) {
            if (!a) return 0;
            var c = g("<div/>").css("width", u(a)).appendTo(b || T.body),
                d = c[0].offsetWidth;
            c.remove();
            return d
        }

        function Gb(a, b) {
            var c =
                Hb(a, b);
            if (0 > c) return null;
            var d = a.aoData[c];
            return !d.nTr ? g("<td/>").html(y(a, c, b, "display"))[0] : d.anCells[b]
        }

        function Hb(a, b) {
            for (var c, d = -1, e = -1, f = 0, h = a.aoData.length; f < h; f++) c = y(a, f, b, "display") + "", c = c.replace(ac, ""), c.length > d && (d = c.length, e = f);
            return e
        }

        function u(a) {
            return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a
        }

        function Ib() {
            var a = m.__scrollbarWidth;
            if (a === k) {
                var b = g("<p/>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 150,
                    padding: 0,
                    overflow: "scroll",
                    visibility: "hidden"
                }).appendTo("body"),
                    a = b[0].offsetWidth - b[0].clientWidth;
                m.__scrollbarWidth = a;
                b.remove()
            }
            return a
        }

        function V(a) {
            var b, c, d = [],
                e = a.aoColumns,
                f, h, i, j;
            b = a.aaSortingFixed;
            c = g.isPlainObject(b);
            var n = [];
            f = function (a) {
                a.length && !g.isArray(a[0]) ? n.push(a) : n.push.apply(n, a)
            };
            g.isArray(b) && f(b);
            c && b.pre && f(b.pre);
            f(a.aaSorting);
            c && b.post && f(b.post);
            for (a = 0; a < n.length; a++) {
                j = n[a][0];
                f = e[j].aDataSort;
                b = 0;
                for (c = f.length; b < c; b++) h = f[b], i = e[h].sType || "string", n[a]._idx === k && (n[a]._idx = g.inArray(n[a][1],
                    e[h].asSorting)), d.push({
                        src: j,
                        col: h,
                        dir: n[a][1],
                        index: n[a]._idx,
                        type: i,
                        formatter: m.ext.type.order[i + "-pre"]
                    })
            }
            return d
        }

        function mb(a) {
            var b, c, d = [],
                e = m.ext.type.order,
                f = a.aoData,
                h = 0,
                i, g = a.aiDisplayMaster,
                n;
            Ia(a);
            n = V(a);
            b = 0;
            for (c = n.length; b < c; b++) i = n[b], i.formatter && h++ , Jb(a, i.col);
            if ("ssp" != z(a) && 0 !== n.length) {
                b = 0;
                for (c = g.length; b < c; b++) d[g[b]] = b;
                h === n.length ? g.sort(function (a, b) {
                    var c, e, h, i, g = n.length,
                        j = f[a]._aSortData,
                        k = f[b]._aSortData;
                    for (h = 0; h < g; h++)
                        if (i = n[h], c = j[i.col], e = k[i.col], c = c < e ? -1 : c >
                            e ? 1 : 0, 0 !== c) return "asc" === i.dir ? c : -c;
                    c = d[a];
                    e = d[b];
                    return c < e ? -1 : c > e ? 1 : 0
                }) : g.sort(function (a, b) {
                    var c, h, i, g, j = n.length,
                        k = f[a]._aSortData,
                        m = f[b]._aSortData;
                    for (i = 0; i < j; i++)
                        if (g = n[i], c = k[g.col], h = m[g.col], g = e[g.type + "-" + g.dir] || e["string-" + g.dir], c = g(c, h), 0 !== c) return c;
                    c = d[a];
                    h = d[b];
                    return c < h ? -1 : c > h ? 1 : 0
                })
            }
            a.bSorted = !0
        }

        function Kb(a) {
            for (var b, c, d = a.aoColumns, e = V(a), a = a.oLanguage.oAria, f = 0, h = d.length; f < h; f++) {
                c = d[f];
                var i = c.asSorting;
                b = c.sTitle.replace(/<.*?>/g, "");
                var g = c.nTh;
                g.removeAttribute("aria-sort");
                c.bSortable && (0 < e.length && e[0].col == f ? (g.setAttribute("aria-sort", "asc" == e[0].dir ? "ascending" : "descending"), c = i[e[0].index + 1] || i[0]) : c = i[0], b += "asc" === c ? a.sSortAscending : a.sSortDescending);
                g.setAttribute("aria-label", b)
            }
        }

        function Va(a, b, c, d) {
            var e = a.aaSorting,
                f = a.aoColumns[b].asSorting,
                h = function (a, b) {
                    var c = a._idx;
                    c === k && (c = g.inArray(a[1], f));
                    return c + 1 < f.length ? c + 1 : b ? null : 0
                };
            "number" === typeof e[0] && (e = a.aaSorting = [e]);
            c && a.oFeatures.bSortMulti ? (c = g.inArray(b, D(e, "0")), -1 !== c ? (b = h(e[c], !0), null ===
                b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = f[b], e[c]._idx = b)) : (e.push([b, f[0], 0]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = h(e[0]), e.length = 1, e[0][1] = f[b], e[0]._idx = b) : (e.length = 0, e.push([b, f[0]]), e[0]._idx = 0);
            R(a);
            "function" == typeof d && d(a)
        }

        function Pa(a, b, c, d) {
            var e = a.aoColumns[c];
            Wa(b, {}, function (b) {
                !1 !== e.bSortable && (a.oFeatures.bProcessing ? (C(a, !0), setTimeout(function () {
                    Va(a, c, b.shiftKey, d);
                    "ssp" !== z(a) && C(a, !1)
                }, 0)) : Va(a, c, b.shiftKey, d))
            })
        }

        function xa(a) {
            var b = a.aLastSort,
                c = a.oClasses.sSortColumn,
                d = V(a),
                e = a.oFeatures,
                f, h;
            if (e.bSort && e.bSortClasses) {
                e = 0;
                for (f = b.length; e < f; e++) h = b[e].src, g(D(a.aoData, "anCells", h)).removeClass(c + (2 > e ? e + 1 : 3));
                e = 0;
                for (f = d.length; e < f; e++) h = d[e].src, g(D(a.aoData, "anCells", h)).addClass(c + (2 > e ? e + 1 : 3))
            }
            a.aLastSort = d
        }

        function Jb(a, b) {
            var c = a.aoColumns[b],
                d = m.ext.order[c.sSortDataType],
                e;
            d && (e = d.call(a.oInstance, a, b, aa(a, b)));
            for (var f, h = m.ext.type.order[c.sType + "-pre"], i = 0, g = a.aoData.length; i < g; i++)
                if (c = a.aoData[i], c._aSortData || (c._aSortData = []), !c._aSortData[b] || d) f = d ? e[i] : y(a, i, b, "sort"), c._aSortData[b] = h ? h(f) : f
        }

        function ya(a) {
            if (a.oFeatures.bStateSave && !a.bDestroying) {
                var b = {
                    time: +new Date,
                    start: a._iDisplayStart,
                    length: a._iDisplayLength,
                    order: g.extend(!0, [], a.aaSorting),
                    search: Ab(a.oPreviousSearch),
                    columns: g.map(a.aoColumns, function (b, d) {
                        return {
                            visible: b.bVisible,
                            search: Ab(a.aoPreSearchCols[d])
                        }
                    })
                };
                w(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
                a.oSavedState = b;
                a.fnStateSaveCallback.call(a.oInstance, a, b)
            }
        }

        function Lb(a) {
            var b, c, d =
                a.aoColumns;
            if (a.oFeatures.bStateSave) {
                var e = a.fnStateLoadCallback.call(a.oInstance, a);
                if (e && e.time && (b = w(a, "aoStateLoadParams", "stateLoadParams", [a, e]), -1 === g.inArray(!1, b) && (b = a.iStateDuration, !(0 < b && e.time < +new Date - 1E3 * b) && d.length === e.columns.length))) {
                    a.oLoadedState = g.extend(!0, {}, e);
                    e.start !== k && (a._iDisplayStart = e.start, a.iInitDisplayStart = e.start);
                    e.length !== k && (a._iDisplayLength = e.length);
                    e.order !== k && (a.aaSorting = [], g.each(e.order, function (b, c) {
                        a.aaSorting.push(c[0] >= d.length ? [0, c[1]] :
                            c)
                    }));
                    e.search !== k && g.extend(a.oPreviousSearch, Bb(e.search));
                    b = 0;
                    for (c = e.columns.length; b < c; b++) {
                        var f = e.columns[b];
                        f.visible !== k && (d[b].bVisible = f.visible);
                        f.search !== k && g.extend(a.aoPreSearchCols[b], Bb(f.search))
                    }
                    w(a, "aoStateLoaded", "stateLoaded", [a, e])
                }
            }
        }

        function za(a) {
            var b = m.settings,
                a = g.inArray(a, D(b, "nTable"));
            return -1 !== a ? b[a] : null
        }

        function J(a, b, c, d) {
            c = "DataTables warning: " + (a ? "table id=" + a.sTableId + " - " : "") + c;
            d && (c += ". For more information about this error, please see http://datatables.net/tn/" +
                d);
            if (b) Fa.console && console.log && console.log(c);
            else if (b = m.ext, b = b.sErrMode || b.errMode, a && w(a, null, "error", [a, d, c]), "alert" == b) alert(c);
            else {
                if ("throw" == b) throw Error(c);
                "function" == typeof b && b(a, d, c)
            }
        }

        function F(a, b, c, d) {
            g.isArray(c) ? g.each(c, function (c, f) {
                g.isArray(f) ? F(a, b, f[0], f[1]) : F(a, b, f)
            }) : (d === k && (d = c), b[c] !== k && (a[d] = b[c]))
        }

        function Mb(a, b, c) {
            var d, e;
            for (e in b) b.hasOwnProperty(e) && (d = b[e], g.isPlainObject(d) ? (g.isPlainObject(a[e]) || (a[e] = {}), g.extend(!0, a[e], d)) : a[e] = c && "data" !== e && "aaData" !==
                e && g.isArray(d) ? d.slice() : d);
            return a
        }

        function Wa(a, b, c) {
            g(a).bind("click.DT", b, function (b) {
                a.blur();
                c(b)
            }).bind("keypress.DT", b, function (a) {
                13 === a.which && (a.preventDefault(), c(a))
            }).bind("selectstart.DT", function () {
                return !1
            })
        }

        function A(a, b, c, d) {
            c && a[b].push({
                fn: c,
                sName: d
            })
        }

        function w(a, b, c, d) {
            var e = [];
            b && (e = g.map(a[b].slice().reverse(), function (b) {
                return b.fn.apply(a.oInstance, d)
            }));
            null !== c && (b = g.Event(c + ".dt"), g(a.nTable).trigger(b, d), e.push(b.result));
            return e
        }

        function Ta(a) {
            var b = a._iDisplayStart,
                c = a.fnDisplayEnd(),
                d = a._iDisplayLength;
            b >= c && (b = c - d);
            b -= b % d;
            if (-1 === d || 0 > b) b = 0;
            a._iDisplayStart = b
        }

        function Qa(a, b) {
            var c = a.renderer,
                d = m.ext.renderer[b];
            return g.isPlainObject(c) && c[b] ? d[c[b]] || d._ : "string" === typeof c ? d[c] || d._ : d._
        }

        function z(a) {
            return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom"
        }

        function Aa(a, b) {
            var c = [],
                c = Nb.numbers_length,
                d = Math.floor(c / 2);
            b <= c ? c = W(0, b) : a <= d ? (c = W(0, c - 2), c.push("ellipsis"), c.push(b - 1)) : (a >= b - 1 - d ? c = W(b - (c - 2), b) : (c = W(a - d + 2, a + d - 1), c.push("ellipsis"),
                c.push(b - 1)), c.splice(0, 0, "ellipsis"), c.splice(0, 0, 0));
            c.DT_el = "span";
            return c
        }

        function db(a) {
            g.each({
                num: function (b) {
                    return Ba(b, a)
                },
                "num-fmt": function (b) {
                    return Ba(b, a, Xa)
                },
                "html-num": function (b) {
                    return Ba(b, a, Ca)
                },
                "html-num-fmt": function (b) {
                    return Ba(b, a, Ca, Xa)
                }
            }, function (b, c) {
                v.type.order[b + a + "-pre"] = c;
                b.match(/^html\-/) && (v.type.search[b + a] = v.type.search.html)
            })
        }

        function Ob(a) {
            return function () {
                var b = [za(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
                return m.ext.internal[a].apply(this,
                    b)
            }
        }
        var m, v, t, p, s, Ya = {},
            Pb = /[\r\n]/g,
            Ca = /<.*?>/g,
            bc = /^[\w\+\-]/,
            cc = /[\w\+\-]$/,
            Zb = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"),
            Xa = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,
            K = function (a) {
                return !a || !0 === a || "-" === a ? !0 : !1
            },
            Qb = function (a) {
                var b = parseInt(a, 10);
                return !isNaN(b) && isFinite(a) ? b : null
            },
            Rb = function (a, b) {
                Ya[b] || (Ya[b] = RegExp(va(b), "g"));
                return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace(Ya[b], ".") : a
            },
            Za = function (a, b, c) {
                var d = "string" === typeof a;
                if (K(a)) return !0;
                b && d && (a = Rb(a, b));
                c && d && (a = a.replace(Xa, ""));
                return !isNaN(parseFloat(a)) && isFinite(a)
            },
            Sb = function (a, b, c) {
                return K(a) ? !0 : !(K(a) || "string" === typeof a) ? null : Za(a.replace(Ca, ""), b, c) ? !0 : null
            },
            D = function (a, b, c) {
                var d = [],
                    e = 0,
                    f = a.length;
                if (c !== k)
                    for (; e < f; e++) a[e] && a[e][b] && d.push(a[e][b][c]);
                else
                    for (; e < f; e++) a[e] && d.push(a[e][b]);
                return d
            },
            ia = function (a, b, c, d) {
                var e = [],
                    f = 0,
                    h = b.length;
                if (d !== k)
                    for (; f < h; f++) a[b[f]][c] && e.push(a[b[f]][c][d]);
                else
                    for (; f < h; f++) e.push(a[b[f]][c]);
                return e
            },
            W = function (a, b) {
                var c = [],
                    d;
                b === k ? (b = 0, d = a) : (d = b, b = a);
                for (var e = b; e < d; e++) c.push(e);
                return c
            },
            Tb = function (a) {
                for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]);
                return b
            },
            Oa = function (a) {
                var b = [],
                    c, d, e = a.length,
                    f, h = 0;
                d = 0;
                a: for (; d < e; d++) {
                    c = a[d];
                    for (f = 0; f < h; f++)
                        if (b[f] === c) continue a;
                    b.push(c);
                    h++
                }
                return b
            },
            B = function (a, b, c) {
                a[b] !== k && (a[c] = a[b])
            },
            ca = /\[.*?\]$/,
            U = /\(\)$/,
            wa = g("<div>")[0],
            $b = wa.textContent !== k,
            ac = /<.*?>/g;
        m = function (a) {
            this.$ = function (a, b) {
                return this.api(!0).$(a, b)
            };
            this._ = function (a,
                b) {
                return this.api(!0).rows(a, b).data()
            };
            this.api = function (a) {
                return a ? new t(za(this[v.iApiIndex])) : new t(this)
            };
            this.fnAddData = function (a, b) {
                var c = this.api(!0),
                    d = g.isArray(a) && (g.isArray(a[0]) || g.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a);
                (b === k || b) && c.draw();
                return d.flatten().toArray()
            };
            this.fnAdjustColumnSizing = function (a) {
                var b = this.api(!0).columns.adjust(),
                    c = b.settings()[0],
                    d = c.oScroll;
                a === k || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && Z(c)
            };
            this.fnClearTable = function (a) {
                var b = this.api(!0).clear();
                (a === k || a) && b.draw()
            };
            this.fnClose = function (a) {
                this.api(!0).row(a).child.hide()
            };
            this.fnDeleteRow = function (a, b, c) {
                var d = this.api(!0),
                    a = d.rows(a),
                    e = a.settings()[0],
                    g = e.aoData[a[0][0]];
                a.remove();
                b && b.call(this, e, g);
                (c === k || c) && d.draw();
                return g
            };
            this.fnDestroy = function (a) {
                this.api(!0).destroy(a)
            };
            this.fnDraw = function (a) {
                this.api(!0).draw(a)
            };
            this.fnFilter = function (a, b, c, d, e, g) {
                e = this.api(!0);
                null === b || b === k ? e.search(a, c, d, g) : e.column(b).search(a, c, d, g);
                e.draw()
            };
            this.fnGetData = function (a, b) {
                var c =
                    this.api(!0);
                if (a !== k) {
                    var d = a.nodeName ? a.nodeName.toLowerCase() : "";
                    return b !== k || "td" == d || "th" == d ? c.cell(a, b).data() : c.row(a).data() || null
                }
                return c.data().toArray()
            };
            this.fnGetNodes = function (a) {
                var b = this.api(!0);
                return a !== k ? b.row(a).node() : b.rows().nodes().flatten().toArray()
            };
            this.fnGetPosition = function (a) {
                var b = this.api(!0),
                    c = a.nodeName.toUpperCase();
                return "TR" == c ? b.row(a).index() : "TD" == c || "TH" == c ? (a = b.cell(a).index(), [a.row, a.columnVisible, a.column]) : null
            };
            this.fnIsOpen = function (a) {
                return this.api(!0).row(a).child.isShown()
            };
            this.fnOpen = function (a, b, c) {
                return this.api(!0).row(a).child(b, c).show().child()[0]
            };
            this.fnPageChange = function (a, b) {
                var c = this.api(!0).page(a);
                (b === k || b) && c.draw(!1)
            };
            this.fnSetColumnVis = function (a, b, c) {
                a = this.api(!0).column(a).visible(b);
                (c === k || c) && a.columns.adjust().draw()
            };
            this.fnSettings = function () {
                return za(this[v.iApiIndex])
            };
            this.fnSort = function (a) {
                this.api(!0).order(a).draw()
            };
            this.fnSortListener = function (a, b, c) {
                this.api(!0).order.listener(a, b, c)
            };
            this.fnUpdate = function (a, b, c, d, e) {
                var g =
                    this.api(!0);
                c === k || null === c ? g.row(b).data(a) : g.cell(b, c).data(a);
                (e === k || e) && g.columns.adjust();
                (d === k || d) && g.draw();
                return 0
            };
            this.fnVersionCheck = v.fnVersionCheck;
            var b = this,
                c = a === k,
                d = this.length;
            c && (a = {});
            this.oApi = this.internal = v.internal;
            for (var e in m.ext.internal) e && (this[e] = Ob(e));
            this.each(function () {
                var f = {},
                    f = 1 < d ? Mb(f, a, !0) : a,
                    e = 0,
                    i, j = this.getAttribute("id"),
                    n = !1,
                    l = m.defaults,
                    r = g(this);
                if ("table" != this.nodeName.toLowerCase()) J(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                else {
                    eb(l);
                    fb(l.column);
                    I(l, l, !0);
                    I(l.column, l.column, !0);
                    I(l, g.extend(f, r.data()));
                    var q = m.settings,
                        e = 0;
                    for (i = q.length; e < i; e++) {
                        var p = q[e];
                        if (p.nTable == this || p.nTHead.parentNode == this || p.nTFoot && p.nTFoot.parentNode == this) {
                            e = f.bRetrieve !== k ? f.bRetrieve : l.bRetrieve;
                            if (c || e) return p.oInstance;
                            if (f.bDestroy !== k ? f.bDestroy : l.bDestroy) {
                                p.oInstance.fnDestroy();
                                break
                            } else {
                                J(p, 0, "Cannot reinitialise DataTable", 3);
                                return
                            }
                        }
                        if (p.sTableId == this.id) {
                            q.splice(e, 1);
                            break
                        }
                    }
                    if (null === j || "" === j) this.id = j = "DataTables_Table_" +
                        m.ext._unique++;
                    var o = g.extend(!0, {}, m.models.oSettings, {
                        sDestroyWidth: r[0].style.width,
                        sInstance: j,
                        sTableId: j
                    });
                    o.nTable = this;
                    o.oApi = b.internal;
                    o.oInit = f;
                    q.push(o);
                    o.oInstance = 1 === b.length ? b : r.dataTable();
                    eb(f);
                    f.oLanguage && S(f.oLanguage);
                    f.aLengthMenu && !f.iDisplayLength && (f.iDisplayLength = g.isArray(f.aLengthMenu[0]) ? f.aLengthMenu[0][0] : f.aLengthMenu[0]);
                    f = Mb(g.extend(!0, {}, l), f);
                    F(o.oFeatures, f, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
                    F(o, f, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"],
                        ["oSearch", "oPreviousSearch"],
                        ["aoSearchCols", "aoPreSearchCols"],
                        ["iDisplayLength", "_iDisplayLength"],
                        ["bJQueryUI", "bJUI"]
                    ]);
                    F(o.oScroll, f, [
                        ["sScrollX", "sX"],
                        ["sScrollXInner",
                            "sXInner"
                        ],
                        ["sScrollY", "sY"],
                        ["bScrollCollapse", "bCollapse"]
                    ]);
                    F(o.oLanguage, f, "fnInfoCallback");
                    A(o, "aoDrawCallback", f.fnDrawCallback, "user");
                    A(o, "aoServerParams", f.fnServerParams, "user");
                    A(o, "aoStateSaveParams", f.fnStateSaveParams, "user");
                    A(o, "aoStateLoadParams", f.fnStateLoadParams, "user");
                    A(o, "aoStateLoaded", f.fnStateLoaded, "user");
                    A(o, "aoRowCallback", f.fnRowCallback, "user");
                    A(o, "aoRowCreatedCallback", f.fnCreatedRow, "user");
                    A(o, "aoHeaderCallback", f.fnHeaderCallback, "user");
                    A(o, "aoFooterCallback",
                        f.fnFooterCallback, "user");
                    A(o, "aoInitComplete", f.fnInitComplete, "user");
                    A(o, "aoPreDrawCallback", f.fnPreDrawCallback, "user");
                    o.rowIdFn = P(f.rowId);
                    j = o.oClasses;
                    f.bJQueryUI ? (g.extend(j, m.ext.oJUIClasses, f.oClasses), f.sDom === l.sDom && "lfrtip" === l.sDom && (o.sDom = '<"H"lfr>t<"F"ip>'), o.renderer) ? g.isPlainObject(o.renderer) && !o.renderer.header && (o.renderer.header = "jqueryui") : o.renderer = "jqueryui" : g.extend(j, m.ext.classes, f.oClasses);
                    r.addClass(j.sTable);
                    if ("" !== o.oScroll.sX || "" !== o.oScroll.sY) o.oScroll.iBarWidth =
                        Ib();
                    o.iInitDisplayStart === k && (o.iInitDisplayStart = f.iDisplayStart, o._iDisplayStart = f.iDisplayStart);
                    null !== f.iDeferLoading && (o.bDeferLoading = !0, e = g.isArray(f.iDeferLoading), o._iRecordsDisplay = e ? f.iDeferLoading[0] : f.iDeferLoading, o._iRecordsTotal = e ? f.iDeferLoading[1] : f.iDeferLoading);
                    var t = o.oLanguage;
                    g.extend(!0, t, f.oLanguage);
                    "" !== t.sUrl && (g.ajax({
                        dataType: "json",
                        url: t.sUrl,
                        success: function (a) {
                            S(a);
                            I(l.oLanguage, a);
                            g.extend(true, t, a);
                            ha(o)
                        },
                        error: function () {
                            ha(o)
                        }
                    }), n = !0);
                    null === f.asStripeClasses &&
                        (o.asStripeClasses = [j.sStripeOdd, j.sStripeEven]);
                    var e = o.asStripeClasses,
                        s = r.children("tbody").find("tr").eq(0); - 1 !== g.inArray(!0, g.map(e, function (a) {
                            return s.hasClass(a)
                        })) && (g("tbody tr", this).removeClass(e.join(" ")), o.asDestroyStripes = e.slice());
                    q = [];
                    e = this.getElementsByTagName("thead");
                    0 !== e.length && (ea(o.aoHeader, e[0]), q = qa(o));
                    if (null === f.aoColumns) {
                        p = [];
                        e = 0;
                        for (i = q.length; e < i; e++) p.push(null)
                    } else p = f.aoColumns;
                    e = 0;
                    for (i = p.length; e < i; e++) Ga(o, q ? q[e] : null);
                    ib(o, f.aoColumnDefs, p, function (a,
                        b) {
                        ka(o, a, b)
                    });
                    if (s.length) {
                        var u = function (a, b) {
                            return a.getAttribute("data-" + b) !== null ? b : null
                        };
                        g.each(na(o, s[0]).cells, function (a, b) {
                            var c = o.aoColumns[a];
                            if (c.mData === a) {
                                var d = u(b, "sort") || u(b, "order"),
                                    e = u(b, "filter") || u(b, "search");
                                if (d !== null || e !== null) {
                                    c.mData = {
                                        _: a + ".display",
                                        sort: d !== null ? a + ".@data-" + d : k,
                                        type: d !== null ? a + ".@data-" + d : k,
                                        filter: e !== null ? a + ".@data-" + e : k
                                    };
                                    ka(o, a)
                                }
                            }
                        })
                    }
                    var v = o.oFeatures;
                    f.bStateSave && (v.bStateSave = !0, Lb(o, f), A(o, "aoDrawCallback", ya, "state_save"));
                    if (f.aaSorting === k) {
                        q =
                            o.aaSorting;
                        e = 0;
                        for (i = q.length; e < i; e++) q[e][1] = o.aoColumns[e].asSorting[0]
                    }
                    xa(o);
                    v.bSort && A(o, "aoDrawCallback", function () {
                        if (o.bSorted) {
                            var a = V(o),
                                b = {};
                            g.each(a, function (a, c) {
                                b[c.src] = c.dir
                            });
                            w(o, null, "order", [o, a, b]);
                            Kb(o)
                        }
                    });
                    A(o, "aoDrawCallback", function () {
                        (o.bSorted || z(o) === "ssp" || v.bDeferRender) && xa(o)
                    }, "sc");
                    gb(o);
                    e = r.children("caption").each(function () {
                        this._captionSide = r.css("caption-side")
                    });
                    i = r.children("thead");
                    0 === i.length && (i = g("<thead/>").appendTo(this));
                    o.nTHead = i[0];
                    i = r.children("tbody");
                    0 === i.length && (i = g("<tbody/>").appendTo(this));
                    o.nTBody = i[0];
                    i = r.children("tfoot");
                    if (0 === i.length && 0 < e.length && ("" !== o.oScroll.sX || "" !== o.oScroll.sY)) i = g("<tfoot/>").appendTo(this);
                    0 === i.length || 0 === i.children().length ? r.addClass(j.sNoFooter) : 0 < i.length && (o.nTFoot = i[0], ea(o.aoFooter, o.nTFoot));
                    if (f.aaData)
                        for (e = 0; e < f.aaData.length; e++) L(o, f.aaData[e]);
                    else (o.bDeferLoading || "dom" == z(o)) && ma(o, g(o.nTBody).children("tr"));
                    o.aiDisplay = o.aiDisplayMaster.slice();
                    o.bInitialised = !0;
                    !1 === n && ha(o)
                }
            });
            b = null;
            return this
        };
        var Ub = [],
            x = Array.prototype,
            dc = function (a) {
                var b, c, d = m.settings,
                    e = g.map(d, function (a) {
                        return a.nTable
                    });
                if (a) {
                    if (a.nTable && a.oApi) return [a];
                    if (a.nodeName && "table" === a.nodeName.toLowerCase()) return b = g.inArray(a, e), -1 !== b ? [d[b]] : null;
                    if (a && "function" === typeof a.settings) return a.settings().toArray();
                    "string" === typeof a ? c = g(a) : a instanceof g && (c = a)
                } else return [];
                if (c) return c.map(function () {
                    b = g.inArray(this, e);
                    return -1 !== b ? d[b] : null
                }).toArray()
            };
        t = function (a, b) {
            if (!(this instanceof t)) return new t(a,
                b);
            var c = [],
                d = function (a) {
                    (a = dc(a)) && c.push.apply(c, a)
                };
            if (g.isArray(a))
                for (var e = 0, f = a.length; e < f; e++) d(a[e]);
            else d(a);
            this.context = Oa(c);
            b && this.push.apply(this, b.toArray ? b.toArray() : b);
            this.selector = {
                rows: null,
                cols: null,
                opts: null
            };
            t.extend(this, this, Ub)
        };
        m.Api = t;
        t.prototype = {
            any: function () {
                return 0 !== this.count()
            },
            concat: x.concat,
            context: [],
            count: function () {
                return this.flatten().length
            },
            each: function (a) {
                for (var b = 0, c = this.length; b < c; b++) a.call(this, this[b], b, this);
                return this
            },
            eq: function (a) {
                var b =
                    this.context;
                return b.length > a ? new t(b[a], this[a]) : null
            },
            filter: function (a) {
                var b = [];
                if (x.filter) b = x.filter.call(this, a, this);
                else
                    for (var c = 0, d = this.length; c < d; c++) a.call(this, this[c], c, this) && b.push(this[c]);
                return new t(this.context, b)
            },
            flatten: function () {
                var a = [];
                return new t(this.context, a.concat.apply(a, this.toArray()))
            },
            join: x.join,
            indexOf: x.indexOf || function (a, b) {
                for (var c = b || 0, d = this.length; c < d; c++)
                    if (this[c] === a) return c;
                return -1
            },
            iterator: function (a, b, c, d) {
                var e = [],
                    f, h, g, j, n, l = this.context,
                    m, q, p = this.selector;
                "string" === typeof a && (d = c, c = b, b = a, a = !1);
                h = 0;
                for (g = l.length; h < g; h++) {
                    var o = new t(l[h]);
                    if ("table" === b) f = c.call(o, l[h], h), f !== k && e.push(f);
                    else if ("columns" === b || "rows" === b) f = c.call(o, l[h], this[h], h), f !== k && e.push(f);
                    else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) {
                        q = this[h];
                        "column-rows" === b && (m = Da(l[h], p.opts));
                        j = 0;
                        for (n = q.length; j < n; j++) f = q[j], f = "cell" === b ? c.call(o, l[h], f.row, f.column, h, j) : c.call(o, l[h], f, h, j, m), f !== k && e.push(f)
                    }
                }
                return e.length || d ? (a = new t(l, a ?
                    e.concat.apply([], e) : e), b = a.selector, b.rows = p.rows, b.cols = p.cols, b.opts = p.opts, a) : this
            },
            lastIndexOf: x.lastIndexOf || function (a, b) {
                return this.indexOf.apply(this.toArray.reverse(), arguments)
            },
            length: 0,
            map: function (a) {
                var b = [];
                if (x.map) b = x.map.call(this, a, this);
                else
                    for (var c = 0, d = this.length; c < d; c++) b.push(a.call(this, this[c], c));
                return new t(this.context, b)
            },
            pluck: function (a) {
                return this.map(function (b) {
                    return b[a]
                })
            },
            pop: x.pop,
            push: x.push,
            reduce: x.reduce || function (a, b) {
                return hb(this, a, b, 0, this.length,
                    1)
            },
            reduceRight: x.reduceRight || function (a, b) {
                return hb(this, a, b, this.length - 1, -1, -1)
            },
            reverse: x.reverse,
            selector: null,
            shift: x.shift,
            sort: x.sort,
            splice: x.splice,
            toArray: function () {
                return x.slice.call(this)
            },
            to$: function () {
                return g(this)
            },
            toJQuery: function () {
                return g(this)
            },
            unique: function () {
                return new t(this.context, Oa(this))
            },
            unshift: x.unshift
        };
        t.extend = function (a, b, c) {
            if (c.length && b && (b instanceof t || b.__dt_wrapper)) {
                var d, e, f, h = function (a, b, c) {
                    return function () {
                        var d = b.apply(a, arguments);
                        t.extend(d,
                            d, c.methodExt);
                        return d
                    }
                };
                d = 0;
                for (e = c.length; d < e; d++) f = c[d], b[f.name] = "function" === typeof f.val ? h(a, f.val, f) : g.isPlainObject(f.val) ? {} : f.val, b[f.name].__dt_wrapper = !0, t.extend(a, b[f.name], f.propExt)
            }
        };
        t.register = p = function (a, b) {
            if (g.isArray(a))
                for (var c = 0, d = a.length; c < d; c++) t.register(a[c], b);
            else
                for (var e = a.split("."), f = Ub, h, i, c = 0, d = e.length; c < d; c++) {
                    h = (i = -1 !== e[c].indexOf("()")) ? e[c].replace("()", "") : e[c];
                    var j;
                    a: {
                        j = 0;
                        for (var n = f.length; j < n; j++)
                            if (f[j].name === h) {
                                j = f[j];
                                break a
                            }
                        j = null
                    }
                    j || (j = {
                        name: h,
                        val: {},
                        methodExt: [],
                        propExt: []
                    }, f.push(j));
                    c === d - 1 ? j.val = b : f = i ? j.methodExt : j.propExt
                }
        };
        t.registerPlural = s = function (a, b, c) {
            t.register(a, c);
            t.register(b, function () {
                var a = c.apply(this, arguments);
                return a === this ? this : a instanceof t ? a.length ? g.isArray(a[0]) ? new t(a.context, a[0]) : a[0] : k : a
            })
        };
        p("tables()", function (a) {
            var b;
            if (a) {
                b = t;
                var c = this.context;
                if ("number" === typeof a) a = [c[a]];
                else var d = g.map(c, function (a) {
                    return a.nTable
                }),
                    a = g(d).filter(a).map(function () {
                        var a = g.inArray(this, d);
                        return c[a]
                    }).toArray();
                b = new b(a)
            } else b = this;
            return b
        });
        p("table()", function (a) {
            var a = this.tables(a),
                b = a.context;
            return b.length ? new t(b[0]) : a
        });
        s("tables().nodes()", "table().node()", function () {
            return this.iterator("table", function (a) {
                return a.nTable
            }, 1)
        });
        s("tables().body()", "table().body()", function () {
            return this.iterator("table", function (a) {
                return a.nTBody
            }, 1)
        });
        s("tables().header()", "table().header()", function () {
            return this.iterator("table", function (a) {
                return a.nTHead
            }, 1)
        });
        s("tables().footer()", "table().footer()",
            function () {
                return this.iterator("table", function (a) {
                    return a.nTFoot
                }, 1)
            });
        s("tables().containers()", "table().container()", function () {
            return this.iterator("table", function (a) {
                return a.nTableWrapper
            }, 1)
        });
        p("draw()", function (a) {
            return this.iterator("table", function (b) {
                "page" === a ? M(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), R(b, !1 === a))
            })
        });
        p("page()", function (a) {
            return a === k ? this.page.info().page : this.iterator("table", function (b) {
                Ua(b, a)
            })
        });
        p("page.info()", function () {
            if (0 === this.context.length) return k;
            var a = this.context[0],
                b = a._iDisplayStart,
                c = a._iDisplayLength,
                d = a.fnRecordsDisplay(),
                e = -1 === c;
            return {
                page: e ? 0 : Math.floor(b / c),
                pages: e ? 1 : Math.ceil(d / c),
                start: b,
                end: a.fnDisplayEnd(),
                length: c,
                recordsTotal: a.fnRecordsTotal(),
                recordsDisplay: d,
                serverSide: "ssp" === z(a)
            }
        });
        p("page.len()", function (a) {
            return a === k ? 0 !== this.context.length ? this.context[0]._iDisplayLength : k : this.iterator("table", function (b) {
                Sa(b, a)
            })
        });
        var Vb = function (a, b, c) {
            if (c) {
                var d = new t(a);
                d.one("draw", function () {
                    c(d.ajax.json())
                })
            }
            if ("ssp" ==
                z(a)) R(a, b);
            else {
                C(a, !0);
                var e = a.jqXHR;
                e && 4 !== e.readyState && e.abort();
                ra(a, [], function (c) {
                    oa(a);
                    for (var c = sa(a, c), d = 0, e = c.length; d < e; d++) L(a, c[d]);
                    R(a, b);
                    C(a, !1)
                })
            }
        };
        p("ajax.json()", function () {
            var a = this.context;
            if (0 < a.length) return a[0].json
        });
        p("ajax.params()", function () {
            var a = this.context;
            if (0 < a.length) return a[0].oAjaxData
        });
        p("ajax.reload()", function (a, b) {
            return this.iterator("table", function (c) {
                Vb(c, !1 === b, a)
            })
        });
        p("ajax.url()", function (a) {
            var b = this.context;
            if (a === k) {
                if (0 === b.length) return k;
                b = b[0];
                return b.ajax ? g.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource
            }
            return this.iterator("table", function (b) {
                g.isPlainObject(b.ajax) ? b.ajax.url = a : b.ajax = a
            })
        });
        p("ajax.url().load()", function (a, b) {
            return this.iterator("table", function (c) {
                Vb(c, !1 === b, a)
            })
        });
        var $a = function (a, b, c, d, e) {
            var f = [],
                h, i, j, n, l, m;
            j = typeof b;
            if (!b || "string" === j || "function" === j || b.length === k) b = [b];
            j = 0;
            for (n = b.length; j < n; j++) {
                i = b[j] && b[j].split ? b[j].split(",") : [b[j]];
                l = 0;
                for (m = i.length; l < m; l++)(h = c("string" === typeof i[l] ?
                    g.trim(i[l]) : i[l])) && h.length && f.push.apply(f, h)
            }
            a = v.selector[a];
            if (a.length) {
                j = 0;
                for (n = a.length; j < n; j++) f = a[j](d, e, f)
            }
            return f
        },
            ab = function (a) {
                a || (a = {});
                a.filter && a.search === k && (a.search = a.filter);
                return g.extend({
                    search: "none",
                    order: "current",
                    page: "all"
                }, a)
            },
            bb = function (a) {
                for (var b = 0, c = a.length; b < c; b++)
                    if (0 < a[b].length) return a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a;
                a.length = 0;
                return a
            },
            Da = function (a, b) {
                var c, d, e, f = [],
                    h = a.aiDisplay;
                c = a.aiDisplayMaster;
                var i = b.search;
                d = b.order;
                e = b.page;
                if ("ssp" == z(a)) return "removed" === i ? [] : W(0, c.length);
                if ("current" == e) {
                    c = a._iDisplayStart;
                    for (d = a.fnDisplayEnd(); c < d; c++) f.push(h[c])
                } else if ("current" == d || "applied" == d) f = "none" == i ? c.slice() : "applied" == i ? h.slice() : g.map(c, function (a) {
                    return -1 === g.inArray(a, h) ? a : null
                });
                else if ("index" == d || "original" == d) {
                    c = 0;
                    for (d = a.aoData.length; c < d; c++) "none" == i ? f.push(c) : (e = g.inArray(c, h), (-1 === e && "removed" == i || 0 <= e && "applied" == i) && f.push(c))
                }
                return f
            };
        p("rows()", function (a, b) {
            a === k ? a = "" : g.isPlainObject(a) &&
                (b = a, a = "");
            var b = ab(b),
                c = this.iterator("table", function (c) {
                    var e = b;
                    return $a("row", a, function (a) {
                        var b = Qb(a);
                        if (b !== null && !e) return [b];
                        var i = Da(c, e);
                        if (b !== null && g.inArray(b, i) !== -1) return [b];
                        if (!a) return i;
                        if (typeof a === "function") return g.map(i, function (b) {
                            var e = c.aoData[b];
                            return a(b, e._aData, e.nTr) ? b : null
                        });
                        b = Tb(ia(c.aoData, i, "nTr"));
                        if (a.nodeName && g.inArray(a, b) !== -1) return [a._DT_RowIndex];
                        if (typeof a === "string" && a.charAt(0) === "#") {
                            i = c.aIds[a.replace(/^#/, "")];
                            if (i !== k) return [i.idx]
                        }
                        return g(b).filter(a).map(function () {
                            return this._DT_RowIndex
                        }).toArray()
                    },
                        c, e)
                }, 1);
            c.selector.rows = a;
            c.selector.opts = b;
            return c
        });
        p("rows().nodes()", function () {
            return this.iterator("row", function (a, b) {
                return a.aoData[b].nTr || k
            }, 1)
        });
        p("rows().data()", function () {
            return this.iterator(!0, "rows", function (a, b) {
                return ia(a.aoData, b, "_aData")
            }, 1)
        });
        s("rows().cache()", "row().cache()", function (a) {
            return this.iterator("row", function (b, c) {
                var d = b.aoData[c];
                return "search" === a ? d._aFilterData : d._aSortData
            }, 1)
        });
        s("rows().invalidate()", "row().invalidate()", function (a) {
            return this.iterator("row",
                function (b, c) {
                    da(b, c, a)
                })
        });
        s("rows().indexes()", "row().index()", function () {
            return this.iterator("row", function (a, b) {
                return b
            }, 1)
        });
        s("rows().ids()", "row().id()", function (a) {
            for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++)
                for (var f = 0, g = this[d].length; f < g; f++) {
                    var i = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);
                    b.push((!0 === a ? "#" : "") + i)
                }
            return new t(c, b)
        });
        s("rows().remove()", "row().remove()", function () {
            var a = this;
            this.iterator("row", function (b, c, d) {
                var e = b.aoData;
                e.splice(c, 1);
                for (var f = 0, g = e.length; f <
                    g; f++) null !== e[f].nTr && (e[f].nTr._DT_RowIndex = f);
                pa(b.aiDisplayMaster, c);
                pa(b.aiDisplay, c);
                pa(a[d], c, !1);
                Ta(b)
            });
            this.iterator("table", function (a) {
                for (var c = 0, d = a.aoData.length; c < d; c++) a.aoData[c].idx = c
            });
            return this
        });
        p("rows.add()", function (a) {
            var b = this.iterator("table", function (b) {
                var c, f, g, i = [];
                f = 0;
                for (g = a.length; f < g; f++) c = a[f], c.nodeName && "TR" === c.nodeName.toUpperCase() ? i.push(ma(b, c)[0]) : i.push(L(b, c));
                return i
            }, 1),
                c = this.rows(-1);
            c.pop();
            c.push.apply(c, b.toArray());
            return c
        });
        p("row()", function (a,
            b) {
            return bb(this.rows(a, b))
        });
        p("row().data()", function (a) {
            var b = this.context;
            if (a === k) return b.length && this.length ? b[0].aoData[this[0]]._aData : k;
            b[0].aoData[this[0]]._aData = a;
            da(b[0], this[0], "data");
            return this
        });
        p("row().node()", function () {
            var a = this.context;
            return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null
        });
        p("row.add()", function (a) {
            a instanceof g && a.length && (a = a[0]);
            var b = this.iterator("table", function (b) {
                return a.nodeName && "TR" === a.nodeName.toUpperCase() ? ma(b, a)[0] : L(b, a)
            });
            return this.row(b[0])
        });
        var cb = function (a, b) {
            var c = a.context;
            if (c.length && (c = c[0].aoData[b !== k ? b : a[0]]) && c._details) c._details.remove(), c._detailsShow = k, c._details = k
        },
            Wb = function (a, b) {
                var c = a.context;
                if (c.length && a.length) {
                    var d = c[0].aoData[a[0]];
                    if (d._details) {
                        (d._detailsShow = b) ? d._details.insertAfter(d.nTr) : d._details.detach();
                        var e = c[0],
                            f = new t(e),
                            g = e.aoData;
                        f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
                        0 < D(g, "_details").length && (f.on("draw.dt.DT_details", function (a,
                            b) {
                            e === b && f.rows({
                                page: "current"
                            }).eq(0).each(function (a) {
                                a = g[a];
                                a._detailsShow && a._details.insertAfter(a.nTr)
                            })
                        }), f.on("column-visibility.dt.DT_details", function (a, b) {
                            if (e === b)
                                for (var c, d = ba(b), f = 0, k = g.length; f < k; f++) c = g[f], c._details && c._details.children("td[colspan]").attr("colspan", d)
                        }), f.on("destroy.dt.DT_details", function (a, b) {
                            if (e === b)
                                for (var c = 0, d = g.length; c < d; c++) g[c]._details && cb(f, c)
                        }))
                    }
                }
            };
        p("row().child()", function (a, b) {
            var c = this.context;
            if (a === k) return c.length && this.length ? c[0].aoData[this[0]]._details :
                k;
            if (!0 === a) this.child.show();
            else if (!1 === a) cb(this);
            else if (c.length && this.length) {
                var d = c[0],
                    c = c[0].aoData[this[0]],
                    e = [],
                    f = function (a, b) {
                        if (g.isArray(a) || a instanceof g)
                            for (var c = 0, k = a.length; c < k; c++) f(a[c], b);
                        else a.nodeName && "tr" === a.nodeName.toLowerCase() ? e.push(a) : (c = g("<tr><td/></tr>").addClass(b), g("td", c).addClass(b).html(a)[0].colSpan = ba(d), e.push(c[0]))
                    };
                f(a, b);
                c._details && c._details.remove();
                c._details = g(e);
                c._detailsShow && c._details.insertAfter(c.nTr)
            }
            return this
        });
        p(["row().child.show()",
            "row().child().show()"
        ], function () {
            Wb(this, !0);
            return this
        });
        p(["row().child.hide()", "row().child().hide()"], function () {
            Wb(this, !1);
            return this
        });
        p(["row().child.remove()", "row().child().remove()"], function () {
            cb(this);
            return this
        });
        p("row().child.isShown()", function () {
            var a = this.context;
            return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1
        });
        var ec = /^(.+):(name|visIdx|visible)$/,
            Xb = function (a, b, c, d, e) {
                for (var c = [], d = 0, f = e.length; d < f; d++) c.push(y(a, e[d], b));
                return c
            };
        p("columns()",
            function (a, b) {
                a === k ? a = "" : g.isPlainObject(a) && (b = a, a = "");
                var b = ab(b),
                    c = this.iterator("table", function (c) {
                        var e = a,
                            f = b,
                            h = c.aoColumns,
                            i = D(h, "sName"),
                            j = D(h, "nTh");
                        return $a("column", e, function (a) {
                            var b = Qb(a);
                            if (a === "") return W(h.length);
                            if (b !== null) return [b >= 0 ? b : h.length + b];
                            if (typeof a === "function") {
                                var e = Da(c, f);
                                return g.map(h, function (b, f) {
                                    return a(f, Xb(c, f, 0, 0, e), j[f]) ? f : null
                                })
                            }
                            var k = typeof a === "string" ? a.match(ec) : "";
                            if (k) switch (k[2]) {
                                case "visIdx":
                                case "visible":
                                    b = parseInt(k[1], 10);
                                    if (b < 0) {
                                        var m =
                                            g.map(h, function (a, b) {
                                                return a.bVisible ? b : null
                                            });
                                        return [m[m.length + b]]
                                    }
                                    return [la(c, b)];
                                case "name":
                                    return g.map(i, function (a, b) {
                                        return a === k[1] ? b : null
                                    })
                            } else return g(j).filter(a).map(function () {
                                return g.inArray(this, j)
                            }).toArray()
                        }, c, f)
                    }, 1);
                c.selector.cols = a;
                c.selector.opts = b;
                return c
            });
        s("columns().header()", "column().header()", function () {
            return this.iterator("column", function (a, b) {
                return a.aoColumns[b].nTh
            }, 1)
        });
        s("columns().footer()", "column().footer()", function () {
            return this.iterator("column",
                function (a, b) {
                    return a.aoColumns[b].nTf
                }, 1)
        });
        s("columns().data()", "column().data()", function () {
            return this.iterator("column-rows", Xb, 1)
        });
        s("columns().dataSrc()", "column().dataSrc()", function () {
            return this.iterator("column", function (a, b) {
                return a.aoColumns[b].mData
            }, 1)
        });
        s("columns().cache()", "column().cache()", function (a) {
            return this.iterator("column-rows", function (b, c, d, e, f) {
                return ia(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c)
            }, 1)
        });
        s("columns().nodes()", "column().nodes()", function () {
            return this.iterator("column-rows",
                function (a, b, c, d, e) {
                    return ia(a.aoData, e, "anCells", b)
                }, 1)
        });
        s("columns().visible()", "column().visible()", function (a, b) {
            return this.iterator("column", function (c, d) {
                if (a === k) return c.aoColumns[d].bVisible;
                var e = c.aoColumns,
                    f = e[d],
                    h = c.aoData,
                    i, j, n;
                if (a !== k && f.bVisible !== a) {
                    if (a) {
                        var l = g.inArray(!0, D(e, "bVisible"), d + 1);
                        i = 0;
                        for (j = h.length; i < j; i++) n = h[i].nTr, e = h[i].anCells, n && n.insertBefore(e[d], e[l] || null)
                    } else g(D(c.aoData, "anCells", d)).detach();
                    f.bVisible = a;
                    fa(c, c.aoHeader);
                    fa(c, c.aoFooter);
                    if (b === k ||
                        b) Y(c), (c.oScroll.sX || c.oScroll.sY) && Z(c);
                    w(c, null, "column-visibility", [c, d, a]);
                    ya(c)
                }
            })
        });
        s("columns().indexes()", "column().index()", function (a) {
            return this.iterator("column", function (b, c) {
                return "visible" === a ? aa(b, c) : c
            }, 1)
        });
        p("columns.adjust()", function () {
            return this.iterator("table", function (a) {
                Y(a)
            }, 1)
        });
        p("column.index()", function (a, b) {
            if (0 !== this.context.length) {
                var c = this.context[0];
                if ("fromVisible" === a || "toData" === a) return la(c, b);
                if ("fromData" === a || "toVisible" === a) return aa(c, b)
            }
        });
        p("column()",
            function (a, b) {
                return bb(this.columns(a, b))
            });
        p("cells()", function (a, b, c) {
            g.isPlainObject(a) && (a.row === k ? (c = a, a = null) : (c = b, b = null));
            g.isPlainObject(b) && (c = b, b = null);
            if (null === b || b === k) return this.iterator("table", function (b) {
                var d = a,
                    e = ab(c),
                    f = b.aoData,
                    h = Da(b, e),
                    i = Tb(ia(f, h, "anCells")),
                    j = g([].concat.apply([], i)),
                    l, n = b.aoColumns.length,
                    m, p, t, s, u, v;
                return $a("cell", d, function (a) {
                    var c = typeof a === "function";
                    if (a === null || a === k || c) {
                        m = [];
                        p = 0;
                        for (t = h.length; p < t; p++) {
                            l = h[p];
                            for (s = 0; s < n; s++) {
                                u = {
                                    row: l,
                                    column: s
                                };
                                if (c) {
                                    v = b.aoData[l];
                                    a(u, y(b, l, s), v.anCells ? v.anCells[s] : null) && m.push(u)
                                } else m.push(u)
                            }
                        }
                        return m
                    }
                    return g.isPlainObject(a) ? [a] : j.filter(a).map(function (a, b) {
                        l = b.parentNode._DT_RowIndex;
                        return {
                            row: l,
                            column: g.inArray(b, f[l].anCells)
                        }
                    }).toArray()
                }, b, e)
            });
            var d = this.columns(b, c),
                e = this.rows(a, c),
                f, h, i, j, n, l = this.iterator("table", function (a, b) {
                    f = [];
                    h = 0;
                    for (i = e[b].length; h < i; h++) {
                        j = 0;
                        for (n = d[b].length; j < n; j++) f.push({
                            row: e[b][h],
                            column: d[b][j]
                        })
                    }
                    return f
                }, 1);
            g.extend(l.selector, {
                cols: b,
                rows: a,
                opts: c
            });
            return l
        });
        s("cells().nodes()", "cell().node()", function () {
            return this.iterator("cell", function (a, b, c) {
                return (a = a.aoData[b].anCells) ? a[c] : k
            }, 1)
        });
        p("cells().data()", function () {
            return this.iterator("cell", function (a, b, c) {
                return y(a, b, c)
            }, 1)
        });
        s("cells().cache()", "cell().cache()", function (a) {
            a = "search" === a ? "_aFilterData" : "_aSortData";
            return this.iterator("cell", function (b, c, d) {
                return b.aoData[c][a][d]
            }, 1)
        });
        s("cells().render()", "cell().render()", function (a) {
            return this.iterator("cell", function (b, c, d) {
                return y(b,
                    c, d, a)
            }, 1)
        });
        s("cells().indexes()", "cell().index()", function () {
            return this.iterator("cell", function (a, b, c) {
                return {
                    row: b,
                    column: c,
                    columnVisible: aa(a, c)
                }
            }, 1)
        });
        s("cells().invalidate()", "cell().invalidate()", function (a) {
            return this.iterator("cell", function (b, c, d) {
                da(b, c, a, d)
            })
        });
        p("cell()", function (a, b, c) {
            return bb(this.cells(a, b, c))
        });
        p("cell().data()", function (a) {
            var b = this.context,
                c = this[0];
            if (a === k) return b.length && c.length ? y(b[0], c[0].row, c[0].column) : k;
            Ja(b[0], c[0].row, c[0].column, a);
            da(b[0], c[0].row,
                "data", c[0].column);
            return this
        });
        p("order()", function (a, b) {
            var c = this.context;
            if (a === k) return 0 !== c.length ? c[0].aaSorting : k;
            "number" === typeof a ? a = [
                [a, b]
            ] : g.isArray(a[0]) || (a = Array.prototype.slice.call(arguments));
            return this.iterator("table", function (b) {
                b.aaSorting = a.slice()
            })
        });
        p("order.listener()", function (a, b, c) {
            return this.iterator("table", function (d) {
                Pa(d, a, b, c)
            })
        });
        p(["columns().order()", "column().order()"], function (a) {
            var b = this;
            return this.iterator("table", function (c, d) {
                var e = [];
                g.each(b[d],
                    function (b, c) {
                        e.push([c, a])
                    });
                c.aaSorting = e
            })
        });
        p("search()", function (a, b, c, d) {
            var e = this.context;
            return a === k ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : k : this.iterator("table", function (e) {
                e.oFeatures.bFilter && ga(e, g.extend({}, e.oPreviousSearch, {
                    sSearch: a + "",
                    bRegex: null === b ? !1 : b,
                    bSmart: null === c ? !0 : c,
                    bCaseInsensitive: null === d ? !0 : d
                }), 1)
            })
        });
        s("columns().search()", "column().search()", function (a, b, c, d) {
            return this.iterator("column", function (e, f) {
                var h = e.aoPreSearchCols;
                if (a === k) return h[f].sSearch;
                e.oFeatures.bFilter &&
                    (g.extend(h[f], {
                        sSearch: a + "",
                        bRegex: null === b ? !1 : b,
                        bSmart: null === c ? !0 : c,
                        bCaseInsensitive: null === d ? !0 : d
                    }), ga(e, e.oPreviousSearch, 1))
            })
        });
        p("state()", function () {
            return this.context.length ? this.context[0].oSavedState : null
        });
        p("state.clear()", function () {
            return this.iterator("table", function (a) {
                a.fnStateSaveCallback.call(a.oInstance, a, {})
            })
        });
        p("state.loaded()", function () {
            return this.context.length ? this.context[0].oLoadedState : null
        });
        p("state.save()", function () {
            return this.iterator("table", function (a) {
                ya(a)
            })
        });
        m.versionCheck = m.fnVersionCheck = function (a) {
            for (var b = m.version.split("."), a = a.split("."), c, d, e = 0, f = a.length; e < f; e++)
                if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d) return c > d;
            return !0
        };
        m.isDataTable = m.fnIsDataTable = function (a) {
            var b = g(a).get(0),
                c = !1;
            g.each(m.settings, function (a, e) {
                var f = e.nScrollHead ? g("table", e.nScrollHead)[0] : null,
                    h = e.nScrollFoot ? g("table", e.nScrollFoot)[0] : null;
                if (e.nTable === b || f === b || h === b) c = !0
            });
            return c
        };
        m.tables = m.fnTables = function (a) {
            var b = !1;
            g.isPlainObject(a) && (b =
                a.api, a = a.visible);
            var c = g.map(m.settings, function (b) {
                if (!a || a && g(b.nTable).is(":visible")) return b.nTable
            });
            return b ? new t(c) : c
        };
        m.util = {
            throttle: ua,
            escapeRegex: va
        };
        m.camelToHungarian = I;
        p("$()", function (a, b) {
            var c = this.rows(b).nodes(),
                c = g(c);
            return g([].concat(c.filter(a).toArray(), c.find(a).toArray()))
        });
        g.each(["on", "one", "off"], function (a, b) {
            p(b + "()", function () {
                var a = Array.prototype.slice.call(arguments);
                a[0].match(/\.dt\b/) || (a[0] += ".dt");
                var d = g(this.tables().nodes());
                d[b].apply(d, a);
                return this
            })
        });
        p("clear()", function () {
            return this.iterator("table", function (a) {
                oa(a)
            })
        });
        p("settings()", function () {
            return new t(this.context, this.context)
        });
        p("init()", function () {
            var a = this.context;
            return a.length ? a[0].oInit : null
        });
        p("data()", function () {
            return this.iterator("table", function (a) {
                return D(a.aoData, "_aData")
            }).flatten()
        });
        p("destroy()", function (a) {
            a = a || !1;
            return this.iterator("table", function (b) {
                var c = b.nTableWrapper.parentNode,
                    d = b.oClasses,
                    e = b.nTable,
                    f = b.nTBody,
                    h = b.nTHead,
                    i = b.nTFoot,
                    j = g(e),
                    f = g(f),
                    k = g(b.nTableWrapper),
                    l = g.map(b.aoData, function (a) {
                        return a.nTr
                    }),
                    p;
                b.bDestroying = !0;
                w(b, "aoDestroyCallback", "destroy", [b]);
                a || (new t(b)).columns().visible(!0);
                k.unbind(".DT").find(":not(tbody *)").unbind(".DT");
                g(Fa).unbind(".DT-" + b.sInstance);
                e != h.parentNode && (j.children("thead").detach(), j.append(h));
                i && e != i.parentNode && (j.children("tfoot").detach(), j.append(i));
                b.aaSorting = [];
                b.aaSortingFixed = [];
                xa(b);
                g(l).removeClass(b.asStripeClasses.join(" "));
                g("th, td", h).removeClass(d.sSortable + " " + d.sSortableAsc +
                    " " + d.sSortableDesc + " " + d.sSortableNone);
                b.bJUI && (g("th span." + d.sSortIcon + ", td span." + d.sSortIcon, h).detach(), g("th, td", h).each(function () {
                    var a = g("div." + d.sSortJUIWrapper, this);
                    g(this).append(a.contents());
                    a.detach()
                }));
                f.children().detach();
                f.append(l);
                h = a ? "remove" : "detach";
                j[h]();
                k[h]();
                !a && c && (c.insertBefore(e, b.nTableReinsertBefore), j.css("width", b.sDestroyWidth).removeClass(d.sTable), (p = b.asDestroyStripes.length) && f.children().each(function (a) {
                    g(this).addClass(b.asDestroyStripes[a % p])
                }));
                c = g.inArray(b, m.settings); - 1 !== c && m.settings.splice(c, 1)
            })
        });
        g.each(["column", "row", "cell"], function (a, b) {
            p(b + "s().every()", function (a) {
                return this.iterator(b, function (d, e, f, g, i) {
                    a.call((new t(d))[b](e, "cell" === b ? f : k), e, f, g, i)
                })
            })
        });
        p("i18n()", function (a, b, c) {
            var d = this.context[0],
                a = P(a)(d.oLanguage);
            a === k && (a = b);
            c !== k && g.isPlainObject(a) && (a = a[c] !== k ? a[c] : a._);
            return a.replace("%d", c)
        });
        m.version = "1.10.8";
        m.settings = [];
        m.models = {};
        m.models.oSearch = {
            bCaseInsensitive: !0,
            sSearch: "",
            bRegex: !1,
            bSmart: !0
        };
        m.models.oRow = {
            nTr: null,
            anCells: null,
            _aData: [],
            _aSortData: null,
            _aFilterData: null,
            _sFilterRow: null,
            _sRowStripe: "",
            src: null,
            idx: -1
        };
        m.models.oColumn = {
            idx: null,
            aDataSort: null,
            asSorting: null,
            bSearchable: null,
            bSortable: null,
            bVisible: null,
            _sManualType: null,
            _bAttrSrc: !1,
            fnCreatedCell: null,
            fnGetData: null,
            fnSetData: null,
            mData: null,
            mRender: null,
            nTh: null,
            nTf: null,
            sClass: null,
            sContentPadding: null,
            sDefaultContent: null,
            sName: null,
            sSortDataType: "std",
            sSortingClass: null,
            sSortingClassJUI: null,
            sTitle: null,
            sType: null,
            sWidth: null,
            sWidthOrig: null
        };
        m.defaults = {
            aaData: null,
            aaSorting: [
                [0, "asc"]
            ],
            aaSortingFixed: [],
            ajax: null,
            aLengthMenu: [10, 25, 50, 100],
            aoColumns: null,
            aoColumnDefs: null,
            aoSearchCols: [],
            asStripeClasses: null,
            bAutoWidth: !0,
            bDeferRender: !1,
            bDestroy: !1,
            bFilter: !0,
            bInfo: !0,
            bJQueryUI: !1,
            bLengthChange: !0,
            bPaginate: !0,
            bProcessing: !1,
            bRetrieve: !1,
            bScrollCollapse: !1,
            bServerSide: !1,
            bSort: !0,
            bSortMulti: !0,
            bSortCellsTop: !1,
            bSortClasses: !0,
            bStateSave: !1,
            fnCreatedRow: null,
            fnDrawCallback: null,
            fnFooterCallback: null,
            fnFormatNumber: function (a) {
                return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
                    this.oLanguage.sThousands)
            },
            fnHeaderCallback: null,
            fnInfoCallback: null,
            fnInitComplete: null,
            fnPreDrawCallback: null,
            fnRowCallback: null,
            fnServerData: null,
            fnServerParams: null,
            fnStateLoadCallback: function (a) {
                try {
                    return JSON.parse((-1 === a.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname))
                } catch (b) { }
            },
            fnStateLoadParams: null,
            fnStateLoaded: null,
            fnStateSaveCallback: function (a, b) {
                try {
                    (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance +
                        "_" + location.pathname, JSON.stringify(b))
                } catch (c) { }
            },
            fnStateSaveParams: null,
            iStateDuration: 7200,
            iDeferLoading: null,
            iDisplayLength: 10,
            iDisplayStart: 0,
            iTabIndex: 0,
            oClasses: {},
            oLanguage: {
                oAria: {
                    sSortAscending: ": activate to sort column ascending",
                    sSortDescending: ": activate to sort column descending"
                },
                oPaginate: {
                    sFirst: "First",
                    sLast: "Last",
                    sNext: "Next",
                    sPrevious: "Previous"
                },
                sEmptyTable: "No data available in table",
                sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
                sInfoEmpty: "Showing 0 to 0 of 0 entries",
                sInfoFiltered: "(filtered from _MAX_ total entries)",
                sInfoPostFix: "",
                sDecimal: "",
                sThousands: ",",
                sLengthMenu: "_MENU_",
                sLoadingRecords: "Loading...",
                sProcessing: "Processing...",
                sSearch: "",
                sSearchPlaceholder: "Search",
                sUrl: "",
                sZeroRecords: "No matching records found"
            },
            oSearch: g.extend({}, m.models.oSearch),
            sAjaxDataProp: "data",
            sAjaxSource: null,
            sDom: "lfrtip",
            searchDelay: null,
            sPaginationType: "simple_numbers",
            sScrollX: "",
            sScrollXInner: "",
            sScrollY: "",
            sServerMethod: "GET",
            renderer: null,
            rowId: "DT_RowId"
        };
        X(m.defaults);
        m.defaults.column = {
            aDataSort: null,
            iDataSort: -1,
            asSorting: ["asc", "desc"],
            bSearchable: !0,
            bSortable: !0,
            bVisible: !0,
            fnCreatedCell: null,
            mData: null,
            mRender: null,
            sCellType: "td",
            sClass: "",
            sContentPadding: "",
            sDefaultContent: null,
            sName: "",
            sSortDataType: "std",
            sTitle: null,
            sType: null,
            sWidth: null
        };
        X(m.defaults.column);
        m.models.oSettings = {
            oFeatures: {
                bAutoWidth: null,
                bDeferRender: null,
                bFilter: null,
                bInfo: null,
                bLengthChange: null,
                bPaginate: null,
                bProcessing: null,
                bServerSide: null,
                bSort: null,
                bSortMulti: null,
                bSortClasses: null,
                bStateSave: null
            },
            oScroll: {
                bCollapse: null,
                iBarWidth: 0,
                sX: null,
                sXInner: null,
                sY: null
            },
            oLanguage: {
                fnInfoCallback: null
            },
            oBrowser: {
                bScrollOversize: !1,
                bScrollbarLeft: !1,
                bBounding: !1
            },
            ajax: null,
            aanFeatures: [],
            aoData: [],
            aiDisplay: [],
            aiDisplayMaster: [],
            aIds: {},
            aoColumns: [],
            aoHeader: [],
            aoFooter: [],
            oPreviousSearch: {},
            aoPreSearchCols: [],
            aaSorting: null,
            aaSortingFixed: [],
            asStripeClasses: null,
            asDestroyStripes: [],
            sDestroyWidth: 0,
            aoRowCallback: [],
            aoHeaderCallback: [],
            aoFooterCallback: [],
            aoDrawCallback: [],
            aoRowCreatedCallback: [],
            aoPreDrawCallback: [],
            aoInitComplete: [],
            aoStateSaveParams: [],
            aoStateLoadParams: [],
            aoStateLoaded: [],
            sTableId: "",
            nTable: null,
            nTHead: null,
            nTFoot: null,
            nTBody: null,
            nTableWrapper: null,
            bDeferLoading: !1,
            bInitialised: !1,
            aoOpenRows: [],
            sDom: null,
            searchDelay: null,
            sPaginationType: "two_button",
            iStateDuration: 0,
            aoStateSave: [],
            aoStateLoad: [],
            oSavedState: null,
            oLoadedState: null,
            sAjaxSource: null,
            sAjaxDataProp: null,
            bAjaxDataGet: !0,
            jqXHR: null,
            json: k,
            oAjaxData: k,
            fnServerData: null,
            aoServerParams: [],
            sServerMethod: null,
            fnFormatNumber: null,
            aLengthMenu: null,
            iDraw: 0,
            bDrawing: !1,
            iDrawError: -1,
            _iDisplayLength: 10,
            _iDisplayStart: 0,
            _iRecordsTotal: 0,
            _iRecordsDisplay: 0,
            bJUI: null,
            oClasses: {},
            bFiltered: !1,
            bSorted: !1,
            bSortCellsTop: null,
            oInit: null,
            aoDestroyCallback: [],
            fnRecordsTotal: function () {
                return "ssp" == z(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
            },
            fnRecordsDisplay: function () {
                return "ssp" == z(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
            },
            fnDisplayEnd: function () {
                var a = this._iDisplayLength,
                    b = this._iDisplayStart,
                    c = b + a,
                    d = this.aiDisplay.length,
                    e = this.oFeatures,
                    f = e.bPaginate;
                return e.bServerSide ? !1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d : c
            },
            oInstance: null,
            sInstance: null,
            iTabIndex: 0,
            nScrollHead: null,
            nScrollFoot: null,
            aLastSort: [],
            oPlugins: {},
            rowIdFn: null,
            rowId: null
        };
        m.ext = v = {
            buttons: {},
            classes: {},
            errMode: "alert",
            feature: [],
            search: [],
            selector: {
                cell: [],
                column: [],
                row: []
            },
            internal: {},
            legacy: {
                ajax: null
            },
            pager: {},
            renderer: {
                pageButton: {},
                header: {}
            },
            order: {},
            type: {
                detect: [],
                search: {},
                order: {}
            },
            _unique: 0,
            fnVersionCheck: m.fnVersionCheck,
            iApiIndex: 0,
            oJUIClasses: {},
            sVersion: m.version
        };
        g.extend(v, {
            afnFiltering: v.search,
            aTypes: v.type.detect,
            ofnSearch: v.type.search,
            oSort: v.type.order,
            afnSortData: v.order,
            aoFeatures: v.feature,
            oApi: v.internal,
            oStdClasses: v.classes,
            oPagination: v.pager
        });
        g.extend(m.ext.classes, {
            sTable: "dataTable",
            sNoFooter: "no-footer",
            sPageButton: "paginate_button",
            sPageButtonActive: "current",
            sPageButtonDisabled: "disabled",
            sStripeOdd: "odd",
            sStripeEven: "even",
            sRowEmpty: "dataTables_empty",
            sWrapper: "dataTables_wrapper",
            sFilter: "dataTables_filter",
            sInfo: "dataTables_info",
            sPaging: "dataTables_paginate paging_",
            sLength: "dataTables_length form-group form-group--select",
            sProcessing: "dataTables_processing",
            sSortAsc: "sorting_asc",
            sSortDesc: "sorting_desc",
            sSortable: "sorting",
            sSortableAsc: "sorting_asc_disabled",
            sSortableDesc: "sorting_desc_disabled",
            sSortableNone: "sorting_disabled",
            sSortColumn: "sorting_",
            sFilterInput: "",
            sLengthSelect: "",
            sScrollWrapper: "dataTables_scroll",
            sScrollHead: "dataTables_scrollHead",
            sScrollHeadInner: "dataTables_scrollHeadInner",
            sScrollBody: "dataTables_scrollBody",
            sScrollFoot: "dataTables_scrollFoot",
            sScrollFootInner: "dataTables_scrollFootInner",
            sHeaderTH: "",
            sFooterTH: "",
            sSortJUIAsc: "",
            sSortJUIDesc: "",
            sSortJUI: "",
            sSortJUIAscAllowed: "",
            sSortJUIDescAllowed: "",
            sSortJUIWrapper: "",
            sSortIcon: "",
            sJUIHeader: "",
            sJUIFooter: ""
        });
        var Ea = "",
            Ea = "",
            G = Ea + "ui-state-default",
            ja = Ea + "css_right ui-icon ui-icon-",
            Yb = Ea + "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
        g.extend(m.ext.oJUIClasses, m.ext.classes, {
            sPageButton: "fg-button ui-button " +
            G,
            sPageButtonActive: "ui-state-disabled",
            sPageButtonDisabled: "ui-state-disabled",
            sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
            sSortAsc: G + " sorting_asc",
            sSortDesc: G + " sorting_desc",
            sSortable: G + " sorting",
            sSortableAsc: G + " sorting_asc_disabled",
            sSortableDesc: G + " sorting_desc_disabled",
            sSortableNone: G + " sorting_disabled",
            sSortJUIAsc: ja + "triangle-1-n",
            sSortJUIDesc: ja + "triangle-1-s",
            sSortJUI: ja + "carat-2-n-s",
            sSortJUIAscAllowed: ja + "carat-1-n",
            sSortJUIDescAllowed: ja +
            "carat-1-s",
            sSortJUIWrapper: "DataTables_sort_wrapper",
            sSortIcon: "DataTables_sort_icon",
            sScrollHead: "dataTables_scrollHead " + G,
            sScrollFoot: "dataTables_scrollFoot " + G,
            sHeaderTH: G,
            sFooterTH: G,
            sJUIHeader: Yb + " ui-corner-tl ui-corner-tr",
            sJUIFooter: Yb + " ui-corner-bl ui-corner-br"
        });
        var Nb = m.ext.pager;
        g.extend(Nb, {
            simple: function () {
                return ["previous", "next"]
            },
            full: function () {
                return ["first", "previous", "next", "last"]
            },
            numbers: function (a, b) {
                return [Aa(a, b)]
            },
            simple_numbers: function (a, b) {
                return ["previous", Aa(a,
                    b), "next"]
            },
            full_numbers: function (a, b) {
                return ["first", "previous", Aa(a, b), "next", "last"]
            },
            _numbers: Aa,
            numbers_length: 7
        });
        g.extend(!0, m.ext.renderer, {
            pageButton: {
                _: function (a, b, c, d, e, f) {
                    var h = a.oClasses,
                        i = a.oLanguage.oPaginate,
                        j, k, l = 0,
                        m = function (b, d) {
                            var p, q, t, s, u = function (b) {
                                Ua(a, b.data.action, true)
                            };
                            p = 0;
                            for (q = d.length; p < q; p++) {
                                s = d[p];
                                if (g.isArray(s)) {
                                    t = g("<" + (s.DT_el || "div") + "/>").appendTo(b);
                                    m(t, s)
                                } else {
                                    j = null;
                                    k = "";
                                    switch (s) {
                                        case "ellipsis":
                                            b.append('<span class="ellipsis">&#x2026;</span>');
                                            break;
                                        case "first":
                                            j = i.sFirst;
                                            k = s + (e > 0 ? "" : " " + h.sPageButtonDisabled);
                                            break;
                                        case "previous":
                                            j = i.sPrevious;
                                            k = s + (e > 0 ? "" : " " + h.sPageButtonDisabled);
                                            break;
                                        case "next":
                                            j = i.sNext;
                                            k = s + (e < f - 1 ? "" : " " + h.sPageButtonDisabled);
                                            break;
                                        case "last":
                                            j = i.sLast;
                                            k = s + (e < f - 1 ? "" : " " + h.sPageButtonDisabled);
                                            break;
                                        default:
                                            j = s + 1;
                                            k = e === s ? h.sPageButtonActive : ""
                                    }
                                    if (j !== null) {
                                        t = g("<a>", {
                                            "class": h.sPageButton + " " + k,
                                            "aria-controls": a.sTableId,
                                            "data-dt-idx": l,
                                            tabindex: a.iTabIndex,
                                            id: c === 0 && typeof s === "string" ? a.sTableId + "_" + s : null
                                        }).html(j).appendTo(b);
                                        Wa(t, {
                                            action: s
                                        }, u);
                                        l++
                                    }
                                }
                            }
                        },
                        p;
                    try {
                        p = g(b).find(T.activeElement).data("dt-idx")
                    } catch (t) { }
                    m(g(b).empty(), d);
                    p && g(b).find("[data-dt-idx=" + p + "]").focus()
                }
            }
        });
        g.extend(m.ext.type.detect, [function (a, b) {
            var c = b.oLanguage.sDecimal;
            return Za(a, c) ? "num" + c : null
        }, function (a) {
            if (a && !(a instanceof Date) && (!bc.test(a) || !cc.test(a))) return null;
            var b = Date.parse(a);
            return null !== b && !isNaN(b) || K(a) ? "date" : null
        }, function (a, b) {
            var c = b.oLanguage.sDecimal;
            return Za(a, c, !0) ? "num-fmt" + c : null
        }, function (a, b) {
            var c = b.oLanguage.sDecimal;
            return Sb(a, c) ? "html-num" + c : null
        }, function (a, b) {
            var c = b.oLanguage.sDecimal;
            return Sb(a, c, !0) ? "html-num-fmt" + c : null
        }, function (a) {
            return K(a) || "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null
        }]);
        g.extend(m.ext.type.search, {
            html: function (a) {
                return K(a) ? a : "string" === typeof a ? a.replace(Pb, " ").replace(Ca, "") : ""
            },
            string: function (a) {
                return K(a) ? a : "string" === typeof a ? a.replace(Pb, " ") : a
            }
        });
        var Ba = function (a, b, c, d) {
            if (0 !== a && (!a || "-" === a)) return -Infinity;
            b && (a = Rb(a, b));
            a.replace && (c && (a = a.replace(c, "")),
                d && (a = a.replace(d, "")));
            return 1 * a
        };
        g.extend(v.type.order, {
            "date-pre": function (a) {
                return Date.parse(a) || 0
            },
            "html-pre": function (a) {
                return K(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + ""
            },
            "string-pre": function (a) {
                return K(a) ? "" : "string" === typeof a ? a.toLowerCase() : !a.toString ? "" : a.toString()
            },
            "string-asc": function (a, b) {
                return a < b ? -1 : a > b ? 1 : 0
            },
            "string-desc": function (a, b) {
                return a < b ? 1 : a > b ? -1 : 0
            }
        });
        db("");
        g.extend(!0, m.ext.renderer, {
            header: {
                _: function (a, b, c, d) {
                    g(a.nTable).on("order.dt.DT", function (e,
                        f, g, i) {
                        if (a === f) {
                            e = c.idx;
                            b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass(i[e] == "asc" ? d.sSortAsc : i[e] == "desc" ? d.sSortDesc : c.sSortingClass)
                        }
                    })
                },
                jqueryui: function (a, b, c, d) {
                    g("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(g("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b);
                    g(a.nTable).on("order.dt.DT", function (e, f, g, i) {
                        if (a === f) {
                            e = c.idx;
                            b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass(i[e] == "asc" ? d.sSortAsc : i[e] == "desc" ? d.sSortDesc : c.sSortingClass);
                            b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " + d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass(i[e] == "asc" ? d.sSortJUIAsc : i[e] == "desc" ? d.sSortJUIDesc : c.sSortingClassJUI)
                        }
                    })
                }
            }
        });
        m.render = {
            number: function (a, b, c, d, e) {
                return {
                    display: function (f) {
                        if ("number" !== typeof f && "string" !== typeof f) return f;
                        var g = 0 > f ? "-" : "",
                            f = Math.abs(parseFloat(f)),
                            i = parseInt(f, 10),
                            f = c ? b + (f - i).toFixed(c).substring(2) : "";
                        return g + (d || "") + i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
                            a) + f + (e || "")
                    }
                }
            }
        };
        g.extend(m.ext.internal, {
            _fnExternApiFunc: Ob,
            _fnBuildAjax: ra,
            _fnAjaxUpdate: lb,
            _fnAjaxParameters: ub,
            _fnAjaxUpdateDraw: vb,
            _fnAjaxDataSrc: sa,
            _fnAddColumn: Ga,
            _fnColumnOptions: ka,
            _fnAdjustColumnSizing: Y,
            _fnVisibleToColumnIndex: la,
            _fnColumnIndexToVisible: aa,
            _fnVisbleColumns: ba,
            _fnGetColumns: $,
            _fnColumnTypes: Ia,
            _fnApplyColumnDefs: ib,
            _fnHungarianMap: X,
            _fnCamelToHungarian: I,
            _fnLanguageCompat: S,
            _fnBrowserDetect: gb,
            _fnAddData: L,
            _fnAddTr: ma,
            _fnNodeToDataIndex: function (a, b) {
                return b._DT_RowIndex !==
                    k ? b._DT_RowIndex : null
            },
            _fnNodeToColumnIndex: function (a, b, c) {
                return g.inArray(c, a.aoData[b].anCells)
            },
            _fnGetCellData: y,
            _fnSetCellData: Ja,
            _fnSplitObjNotation: La,
            _fnGetObjectDataFn: P,
            _fnSetObjectDataFn: Q,
            _fnGetDataMaster: Ma,
            _fnClearTable: oa,
            _fnDeleteIndex: pa,
            _fnInvalidate: da,
            _fnGetRowElements: na,
            _fnCreateTr: Ka,
            _fnBuildHead: kb,
            _fnDrawHead: fa,
            _fnDraw: M,
            _fnReDraw: R,
            _fnAddOptionsHtml: nb,
            _fnDetectHeader: ea,
            _fnGetUniqueThs: qa,
            _fnFeatureHtmlFilter: pb,
            _fnFilterComplete: ga,
            _fnFilterCustom: yb,
            _fnFilterColumn: xb,
            _fnFilter: wb,
            _fnFilterCreateSearch: Ra,
            _fnEscapeRegex: va,
            _fnFilterData: zb,
            _fnFeatureHtmlInfo: sb,
            _fnUpdateInfo: Cb,
            _fnInfoMacros: Db,
            _fnInitialise: ha,
            _fnInitComplete: ta,
            _fnLengthChange: Sa,
            _fnFeatureHtmlLength: ob,
            _fnFeatureHtmlPaginate: tb,
            _fnPageChange: Ua,
            _fnFeatureHtmlProcessing: qb,
            _fnProcessingDisplay: C,
            _fnFeatureHtmlTable: rb,
            _fnScrollDraw: Z,
            _fnApplyToChildren: H,
            _fnCalculateColumnWidths: Ha,
            _fnThrottle: ua,
            _fnConvertToWidth: Fb,
            _fnGetWidestNode: Gb,
            _fnGetMaxLenString: Hb,
            _fnStringToCss: u,
            _fnScrollBarWidth: Ib,
            _fnSortFlatten: V,
            _fnSort: mb,
            _fnSortAria: Kb,
            _fnSortListener: Va,
            _fnSortAttachListener: Pa,
            _fnSortingClasses: xa,
            _fnSortData: Jb,
            _fnSaveState: ya,
            _fnLoadState: Lb,
            _fnSettingsFromNode: za,
            _fnLog: J,
            _fnMap: F,
            _fnBindAction: Wa,
            _fnCallbackReg: A,
            _fnCallbackFire: w,
            _fnLengthOverflow: Ta,
            _fnRenderer: Qa,
            _fnDataSource: z,
            _fnRowAttributes: Na,
            _fnCalculateEnd: function () { }
        });
        g.fn.dataTable = m;
        g.fn.dataTableSettings = m.settings;
        g.fn.dataTableExt = m.ext;
        g.fn.DataTable = function (a) {
            return g(this).dataTable(a).api()
        };
        g.each(m, function (a,
            b) {
            g.fn.DataTable[a] = b
        });
        return g.fn.dataTable
    };
    "function" === typeof define && define.amd ? define("datatables", ["jquery"], S) : "object" === typeof exports ? module.exports = S(require("jquery")) : jQuery && !jQuery.fn.dataTable && S(jQuery)
})(window, document);


/*!
 DataTables Foundation integration
 ©2011-2014 SpryMedia Ltd - datatables.net/license
*/
(function () {
    var d = function (g, e) {
        g.extend(e.ext.classes, {
            sWrapper: "dataTables_wrapper dt-foundation"
        });
        g.extend(!0, e.defaults, {
            dom: "<'row'<'table-bootgrid__search form-group'f><'table-bootgrid__actions'l>r>t<'row'<'col-sm-6'p><'col-sm-6 table-bootgrid__showing hidden-xs'i>>",
            renderer: "foundation"
        });
        e.ext.renderer.pageButton.foundation = function (f, d, p, k, h, l) {
            var q = new e.Api(f),
                r = f.oClasses,
                i = f.oLanguage.oPaginate,
                b, c, o = function (d, e) {
                    var j, m, n, a, k = function (a) {
                        a.preventDefault();
                        "ellipsis" !== a.data.action && q.page(a.data.action).draw("page")
                    };
                    j = 0;
                    for (m = e.length; j < m; j++)
                        if (a = e[j], g.isArray(a)) o(d, a);
                        else {
                            c = b = "";
                            switch (a) {
                                case "ellipsis":
                                    b = "&hellip;";
                                    c = "unavailable";
                                    break;
                                case "first":
                                    b = i.sFirst;
                                    c = a + (0 < h ? "" : " unavailable");
                                    break;
                                case "previous":
                                    b = i.sPrevious;
                                    c = a + (0 < h ? "" : " unavailable");
                                    break;
                                case "next":
                                    b = i.sNext;
                                    c = a + (h < l - 1 ? "" : " unavailable");
                                    break;
                                case "last":
                                    b = i.sLast;
                                    c = a + (h < l - 1 ? "" : " unavailable");
                                    break;
                                default:
                                    b = a + 1, c = h === a ? "active" : ""
                            }
                            b && (n = g("<li>", {
                                "class": r.sPageButton + " " + c,
                                "aria-controls": f.sTableId,
                                tabindex: f.iTabIndex,
                                id: 0 === p &&
                                    "string" === typeof a ? f.sTableId + "_" + a : null
                            }).append(g("<a>", {
                                href: "#"
                            }).html(b)).appendTo(d), f.oApi._fnBindAction(n, {
                                action: a
                            }, k))
                        }
                };
            o(g(d).empty().html('<ul class="pagination table-bootgrid__pagination"/>').children("ul"), k)
        }
    };
    "function" === typeof define && define.amd ? define(["jquery", "datatables"], d) : "object" === typeof exports ? d(require("jquery"), require("datatables")) : jQuery && d(jQuery, jQuery.fn.dataTable)
})(window, document);


jQuery.fn.dataTable.ext.builder = "zf-5.5.2\/jqc-1.11.3,dt-1.10.8";