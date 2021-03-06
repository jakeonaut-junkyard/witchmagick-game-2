(function() {
    "use strict";

    function t() {
        return 440 * Math.pow(2, 1 * (this - 69) / 12)
    }

    function n() {
        for (var t = Array(this.length), n = t.length; n--;) t[n] = 440 * Math.pow(2, 1 * (this[n] - 69) / 12);
        return t
    }

    function r() {
        return 12 * Math.log(1 * Math.abs(this) / 440) * Math.LOG2E + 69
    }

    function e() {
        for (var t = Array(this.length), n = t.length; n--;) t[n] = 12 * Math.log(1 * Math.abs(this[n]) / 440) * Math.LOG2E + 69;
        return t
    }

    function i() {
        return Math.pow(2, 1 * this / 12)
    }

    function s() {
        for (var t = Array(this.length), n = t.length; n--;) t[n] = Math.pow(2, 1 * this[n] / 12);
        return t
    }

    function o() {
        return 12 * Math.log(Math.abs(this)) * Math.LOG2E
    }

    function u() {
        for (var t = Array(this.length), n = t.length; n--;) t[n] = 12 * Math.log(Math.abs(this[n])) * Math.LOG2E;
        return t
    }

    function h() {
        return 20 * Math.log(this) * Math.LOG10E
    }

    function a() {
        return Math.pow(10, .05 * this)
    }

    function f() {
        return 440 * Math.pow(2, this - 4.75)
    }

    function c() {
        return Math.log(1 * Math.abs(this) / 440) * Math.LOG2E + 4.75
    }

    function l(t, n) {
        return n >= t ? t > this ? t : n > this ? this : n : l.call(this, n, t)
    }

    function p(t, n) {
        if (n >= t) {
            if (this >= t && n >= this) return this;
            var r = n - t + 1,
                e = (this - t) % r;
            return 0 > e && (e += r), e + t
        }
        return p.call(this, n, t)
    }

    function y(t, n) {
        if (n >= t) {
            if (this >= t && n >= this) return this;
            var r = n - t,
                e = r + r,
                i = (this - t) % e;
            return 0 > i && (i += e), i > r && (i = e - i), i + t
        }
        return y.call(this, n, t)
    }

    function g(t) {
        return t = Math.abs(t), 0 === t ? this : Math.floor(this / t) * t
    }

    function v() {
        return 0 | this
    }

    function m() {
        for (var t = Array(this.length), n = t.length; n--;) t[n] = 0 | this[n];
        return t
    }

    function d(t, n) {
        t = Math.max(0, 0 | t), n === void 0 && (n = 0);
        var r, e = Array(t);
        if ("function" == typeof n)
            for (r = 0; t > r; ++r) e[r] = n(r);
        else
            for (r = t; r--;) e[r] = n;
        return e
    }

    function A(t, n, r) {
        t = Math.max(0, 0 | t), n = "number" == typeof n ? n : 0, r = "number" == typeof r ? r : 1;
        for (var e = Array(t), i = 0, s = n; t > i; ++i, s += r) e[i] = s;
        return e
    }

    function b(t, n, r) {
        t = Math.max(0, 0 | t), n = "number" == typeof n ? n : 1, r = "number" == typeof r ? r : 2;
        for (var e = Array(t), i = 0, s = n; t > i; ++i, s *= r) e[i] = s;
        return e
    }

    function w(t, n, r, e) {
        t = Math.max(0, 0 | t), n = "number" == typeof n ? n : 0, r = "number" == typeof r ? r : 1;
        for (var i = Array(t), s = r - n, o = new Sn(e), u = t; u--;) i[u] = o.next() * s + n;
        return i
    }

    function M(t, n, r) {
        return 0 > n && (n *= -1), w(t, -n, +n, r)
    }

    function _(t) {
        return "number" == typeof t ? this[0 | t] : Array.isArray(t) ? t.map(function(t) {
            return _.call(this, t)
        }.bind(this)) : void 0
    }

    function x(t) {
        if ("number" == typeof t) return this[l.call(0 | t, 0, this.length - 1)];
        if (Array.isArray(t)) {
            for (var n = Array(t.length), r = n.length; r--;) n[r] = this[l.call(0 | t[r], 0, this.length - 1)];
            return n
        }
    }

    function O(t) {
        if ("number" == typeof t) return this[p.call(0 | t, 0, this.length - 1)];
        if (Array.isArray(t)) {
            for (var n = Array(t.length), r = n.length; r--;) n[r] = this[p.call(0 | t[r], 0, this.length - 1)];
            return n
        }
    }

    function P(t) {
        if ("number" == typeof t) return this[y.call(0 | t, 0, this.length - 1)];
        if (Array.isArray(t)) {
            for (var n = Array(t.length), r = n.length; r--;) n[r] = this[y.call(0 | t[r], 0, this.length - 1)];
            return n
        }
    }

    function T() {
        return this[0]
    }

    function k() {
        return this[this.length - 1]
    }

    function E(t) {
        return this.push(t), this
    }

    function R(t) {
        for (var n = 0, r = t.length; r > n; ++n) this.push(t[n]);
        return this
    }

    function I(t, n) {
        return t = Math.max(0, 0 | t), this.splice(t, 0, n), this
    }

    function L(t) {
        return t >= 0 ? this.splice(0 | t, 1)[0] : void 0
    }

    function C(t) {
        if (t |= 0, t >= 0 && this.length > t) {
            var n = this[t],
                r = this.pop();
            return t !== this.length && (this[t] = r), n
        }
    }

    function G(t) {
        var n = this.indexOf(t);
        return -1 !== n ? this.splice(n, 1)[0] : void 0
    }

    function S(t) {
        var n = this.indexOf(t);
        return -1 !== n ? C.call(this, n) : void 0
    }

    function z(t, n) {
        if ("number" == typeof t) t >= 0 && this.length > t && (this[0 | t] = n);
        else if (Array.isArray(t))
            for (var r = t.length; r--;) z.call(this, t[r], n);
        return this
    }

    function N(t, n) {
        if ("number" == typeof t) this[l.call(t, 0, this.length - 1)] = n;
        else if (Array.isArray(t))
            for (var r = t.length; r--;) this[l.call(t[r], 0, this.length - 1)] = n;
        return this
    }

    function j(t, n) {
        if ("number" == typeof t) this[p.call(t, 0, this.length - 1)] = n;
        else if (Array.isArray(t))
            for (var r = t.length; r--;) this[p.call(t[r], 0, this.length - 1)] = n;
        return this
    }

    function q(t, n) {
        if ("number" == typeof t) this[y.call(t, 0, this.length - 1)] = n;
        else if (Array.isArray(t))
            for (var r = t.length; r--;) this[p.call(t[r], 0, this.length - 1)] = n;
        return this
    }

    function D(t) {
        return this.length > 0 && (this[0] = t), this
    }

    function F(t) {
        return this.length > 0 && (this[this.length - 1] = t), this
    }

    function K(t, n) {
        if (t >= 0 && this.length > t && n >= 0 && this.length > n) {
            var r = this[0 | t];
            this[0 | t] = this[0 | n], this[0 | n] = r
        }
        return this
    }

    function U(t, n) {
        t = l.call(0 | t, 0, this.length - 1), n = l.call(0 | n, 0, this.length - 1);
        var r = this[t];
        return this[t] = this[n], this[n] = r, this
    }

    function B(t, n) {
        t = p.call(0 | t, 0, this.length - 1), n = p.call(0 | n, 0, this.length - 1);
        var r = this[t];
        return this[t] = this[n], this[n] = r, this
    }

    function J(t, n) {
        t = y.call(0 | t, 0, this.length - 1), n = y.call(0 | n, 0, this.length - 1);
        var r = this[t];
        return this[t] = this[n], this[n] = r, this
    }

    function H(t) {
        return -1 !== this.indexOf(t)
    }

    function Q(t) {
        for (var n = 0, r = this.length; r > n; ++n)
            if (this[n] > t) return n;
        return -1
    }

    function V(t) {
        var n = Q.call(this, t);
        if (-1 === n) return this.length - 1;
        if (0 === n) return n;
        var r = n - 1;
        return t - this[r] < this[n] - t ? r : n
    }

    function W(t) {
        var n = Q.call(this, t);
        if (-1 === n) return this.length - 1;
        if (0 === n) return n;
        var r = this[n - 1],
            e = this[n],
            i = e - r;
        return 0 === i ? n : (t - r) / i + n - 1
    }

    function X(t, n) {
        if (!Array.isArray(t)) return -1;
        n = Math.max(0, 0 | n);
        for (var r = n, e = this.length; e > r; ++r) {
            for (var i = !0, s = 0, o = t.length; o > s; s++)
                if (this[r + s] !== t[s]) {
                    i = !1;
                    break
                }
            if (i) return r
        }
        return -1
    }

    function Y(t, n) {
        var r = [];
        if (!Array.isArray(t)) return r;
        n = Math.max(0, 0 | n);
        for (var e = n, i = this.length; i > e; ++e) {
            for (var s = !0, o = 0, u = t.length; u > o; ++o)
                if (this[e + o] !== t[o]) {
                    s = !1;
                    break
                }
            s && r.push(e)
        }
        return r
    }

    function Z(t) {
        for (var n = [], r = this.length; r--;) this[r] === t && n.unshift(r);
        return n
    }

    function $(t, n) {
        return t = Math.max(0, 0 | t), n = Math.max(0, 0 | n), this.slice(t, n + 1)
    }

    function tn(t) {
        return t = Math.max(0, 0 | t), this.slice(t)
    }

    function nn(t) {
        return t = Math.max(0, 0 | t), this.slice(0, t + 1)
    }

    function rn(t) {
        return t |= 0, 0 > t ? this.slice(this.length + t, this.length) : this.slice(0, t)
    }

    function en(t) {
        return t |= 0, 0 > t ? this.slice(0, this.length + t) : this.slice(t, this.length)
    }

    function sn() {
        var t, n, r, e, i = this.slice(0),
            s = i.length;
        for (t = 0, e = s; s - 1 > t; t++, e--) n = t + (0 | Math.random() * e), r = i[t], i[t] = i[n], i[n] = r;
        return i
    }

    function on() {
        var t = 2 * this.length - 1;
        if (2 > t) return this.slice(0);
        var n, r, e, i = Array(t);
        for (n = 0, e = this.length; e > n; ++n) i[n] = this[n];
        for (r = e - 2, e = t; e > n; ++n, --r) i[n] = this[r];
        return i
    }

    function un() {
        var t = 2 * this.length - 2;
        if (2 > t) return this.slice(0);
        var n, r, e, i = Array(t);
        for (n = 0, e = this.length; e > n; ++n) i[n] = this[n];
        for (r = e - 2, e = t; e > n; ++n, --r) i[n] = this[r];
        return i
    }

    function hn() {
        var t = 2 * this.length;
        if (2 > t) return this.slice(0);
        var n, r, e, i = Array(t);
        for (n = 0, e = this.length; e > n; ++n) i[n] = this[n];
        for (r = e - 1, e = t; e > n; ++n, --r) i[n] = this[r];
        return i
    }

    function an(t) {
        t = "number" != typeof t ? 2 : Math.max(0, 0 | t);
        for (var n = Array(this.length * t), r = 0, e = 0, i = this.length; i > r; ++r)
            for (var s = 0; t > s; ++s, ++e) n[e] = this[r];
        return n
    }

    function fn(t) {
        t = "number" != typeof t ? 1 : 0 | t;
        var n = Array(this.length),
            r = n.length;
        t %= r, 0 > t && (t = r + t);
        for (var e = 0, i = t; r > e; ++e) n[i] = this[e], ++i >= r && (i = 0);
        return n
    }

    function cn(t, n) {
        t = "number" != typeof t ? .25 : t, n = "number" != typeof n ? 100 : 0 | n;
        for (var r = [], e = 0, i = 0, s = this.length; s > e && n > i;) r[i++] = this[e], Math.random() > t && (e += 1);
        return r
    }

    function ln(t) {
        t = Math.max(1, 0 | t);
        for (var n, r = Array(t), e = this.length, i = t; i--;) n = this[i % e], r[i] = Array.isArray(n) ? n[(0 | i / e) % n.length] : n;
        return r
    }

    function pn(t, n) {
        t = Math.max(0, 0 | t);
        for (var r = Array(t), e = t; e--;) r[e] = this.length > e ? this[e] : n;
        return r
    }

    function yn(t) {
        if (t = Math.max(0, 0 | t), t > this.length) {
            for (var n = Array(t), r = 0, e = this.length; e > r; ++r) n[r] = this[r];
            for (var i = n[r - 1]; t > r; ++r) n[r] = i;
            return n
        }
        return this.slice(0, t)
    }

    function gn(t) {
        t = Math.max(0, 0 | t);
        for (var n = Array(t), r = t; r--;) n[r] = this[r % this.length];
        return n
    }

    function vn(t) {
        t = Math.max(0, 0 | t);
        for (var n = Array(t), r = t; r--;) n[r] = P.call(this, r);
        return n
    }

    function mn() {
        return this[0 | Math.random() * this.length]
    }

    function dn(t) {
        for (var n = 0, r = 0, e = t.length; e > r; ++r)
            if (n += t[r], n >= Math.random()) return this[r];
        return this[t.length - 1]
    }

    function An(t, n, r) {
        "number" != typeof n && (n = 12), "number" != typeof r && (r = 0);
        var e = n * (0 | t / this.length) + O.call(this, t);
        return 0 === r ? e : e + r * (n / 12)
    }

    function bn(t, n) {
        "number" != typeof n && (n = 12);
        var r = (0 | t / n) * this.length,
            e = t % n;
        return W.call(this, e) + r
    }

    function wn(t) {
        return this[V.call(this, t)]
    }

    function Mn(t, n) {
        "number" != typeof n && (n = 12);
        var r = g.call(t, n),
            e = t % n;
        return wn.call(this, e) + r
    }

    function _n() {
        return this.length
    }

    function xn() {
        return 0 === this.length
    }

    function On(t) {
        if (!Array.isArray(t) || this.length !== t.length) return !1;
        for (var n = this.length; n--;)
            if (Array.isArray(this[n])) {
                if (!On.call(this[n], t[n])) return !1
            } else if (this[n] !== t[n]) return !1;
        return !0
    }

    function Pn() {
        this.count = 0
    }

    function Tn(t, n, r) {
        Pn.call(this), n = "number" == typeof n ? n : 1, r = "number" == typeof r ? r : 0, this.list = t, this.repeats = 1 / 0 !== n ? 0 | Math.max(0, n) : 1 / 0, this.offset = 0 | Math.max(0, r)
    }

    function kn(t, n, r) {
        Tn.call(this, t, n, r), this.repeats *= t.length
    }

    function En(t, n, r) {
        Tn.call(this, t, n, 0);
        var e = new Sn(r);
        this.list.sort(function() {
            return e.next() - .5
        })
    }

    function Rn(t, n, r) {
        Tn.call(this, t, n, 0);
        var e = new Sn(r);
        this._rand = e.next.bind(e)
    }

    function In(t, n, r) {
        Pn.call(this), t = "number" == typeof t ? t : 0, r = "number" == typeof r ? r : 1 / 0, this.start = t, this.value = this.start, this.step = n || 1, this.length = 1 / 0 !== r ? 0 | Math.max(0, r) : 1 / 0
    }

    function Ln(t, n, r) {
        Pn.call(this), t = "number" == typeof t ? t : 0, r = "number" == typeof r ? r : 1 / 0, this.start = t, this.value = this.start, this.grow = n || 1, this.length = 1 / 0 !== r ? 0 | Math.max(0, r) : 1 / 0
    }

    function Cn(t, n, r, e) {
        Array.isArray(t) || (t = [0, 2, 4, 5, 7, 9, 11]), "number" != typeof n && (n = Cn.guessPPO(t));
        var i;
        "string" == typeof r && (i = r, r = jn.TuningInfo.at(r)), r instanceof jn.Tuning || (r = jn.Tuning["default"](n)), void 0 === e && (e = i), "string" != typeof e && (e = "Unknown Scale"), this.name = e, this._degrees = t, this._pitchesPerOctave = n, this.tuning(r)
    }

    function Gn(t, n, r) {
        Array.isArray(t) || (t = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), "number" != typeof n && (n = 2), "string" != typeof r && (r = "Unknown Tuning"), this._tuning = t, this._octaveRatio = n, this.name = r
    }

    function Sn(t) {
        "number" != typeof t && (t = +new Date);
        var n = t;
        n += ~(n << 15), n ^= n >>> 10, n += n << 3, n ^= n >>> 6, n += ~(n << 11), n ^= n >>> 16, this.s1 = 1243598713 ^ t, 2 > this.s1 && (this.s1 = 1243598713), this.s2 = 3093459404 ^ t, 8 > this.s2 && (this.s2 = 3093459404), this.s3 = 1821928721 ^ t, 16 > this.s3 && (this.s3 = 1821928721)
    }

    function zn(t, n) {
        function r() {
            this.constructor = t
        }
        for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]);
        return r.prototype = n.prototype, t.prototype = new r, t.__super__ = n.prototype, t
    }

    function Nn(t, n, r, e) {
        if (void 0 === e && (e = function() {
                var t = [].slice.call(arguments);
                return this.map(function(n) {
                    return r.apply(n, t)
                })
            }), r !== Fn && e !== Fn) switch (n) {
            case 0:
                jn[t] = function(t) {
                    return "number" == typeof t ? r.call(t) : Array.isArray(t) ? e.call(t) : void 0
                };
                break;
            case 1:
                jn[t] = function(t, n) {
                    return "number" == typeof t ? r.call(t, n) : Array.isArray(t) ? e.call(t, n) : void 0
                };
                break;
            default:
                jn[t] = function(t) {
                    var n = [].slice.call(arguments, 1);
                    return "number" == typeof t ? r.apply(t, n) : Array.isArray(t) ? e.apply(t, n) : void 0
                }
        } else if (e !== Fn) switch (n) {
                case 0:
                    jn[t] = function(t) {
                        return Array.isArray(t) ? e.call(t) : void 0
                    };
                    break;
                case 1:
                    jn[t] = function(t, n) {
                        return Array.isArray(t) ? e.call(t, n) : void 0
                    };
                    break;
                default:
                    jn[t] = function(t) {
                        return Array.isArray(t) ? e.apply(t, [].slice.call(arguments, 1)) : void 0
                    }
            } else if (r !== Fn) switch (n) {
                case 0:
                    jn[t] = function(t) {
                        return "number" == typeof t ? r.call(t) : void 0
                    };
                    break;
                case 1:
                    jn[t] = function(t, n) {
                        return "number" == typeof t ? r.call(t, n) : void 0
                    };
                    break;
                default:
                    jn[t] = function(t) {
                        return "number" == typeof t ? r.apply(t, [].slice.call(arguments, 1)) : void 0
                    }
            }
            jn[t].use = function() {
            !qn[t] && r && (qn[t] = r), !Dn[t] && e && (Dn[t] = e)
        }, jn[t].unuse = function() {
            delete qn[t], delete Dn[t]
        }
    }
    var jn = {},
        qn = Number.prototype,
        Dn = Array.prototype,
        Fn = null;
    jn.use = function(t) {
        for (var n in jn) "function" == typeof jn[n].use && jn[n].use(t)
    }, jn.unuse = function(t) {
        for (var n in jn) "function" == typeof jn[n].unuse && jn[n].unuse(t)
    }, Nn("midicps", 0, t, n), Nn("cpsmidi", 0, r, e), Nn("midiratio", 0, i, s), Nn("ratiomidi", 0, o, u), Nn("ampdb", 0, h), Nn("dbamp", 0, a), Nn("octcps", 0, f), Nn("cpsoct", 0, c), Nn("clip", 2, l), Nn("wrap", 2, p), Nn("fold", 2, y), Nn("trunc", 1, g), Nn("asInteger", 0, v, m), jn.fill = d, jn.series = A, jn.geom = b, jn.rand = w, jn.rand2 = M, Nn("at", 1, Fn, _), Nn("clipAt", 1, Fn, x), Nn("wrapAt", 1, Fn, O), Nn("foldAt", 1, Fn, P), Nn("first", 0, Fn, T), Nn("last", 0, Fn, k), Nn("add", 1, Fn, E), Nn("addAll", 1, Fn, R), Nn("insert", 2, Fn, I), Nn("removeAt", 1, Fn, L), Nn("takeAt", 1, Fn, C), Nn("remove", 1, Fn, G), Nn("take", 1, Fn, S), Nn("put", 2, Fn, z), Nn("clipPut", 2, Fn, N), Nn("wrapPut", 2, Fn, j), Nn("foldPut", 2, Fn, q), Nn("putFirst", 1, Fn, D), Nn("putLast", 1, Fn, F), Nn("swap", 2, Fn, K), Nn("clipSwap", 2, Fn, U), Nn("wrapSwap", 2, Fn, B), Nn("foldSwap", 2, Fn, J), Nn("includes", 1, Fn, H), Nn("indexOfGreaterThan", 1, Fn, Q), Nn("indexIn", 1, Fn, V), Nn("indexInBetween", 1, Fn, W), Nn("find", 2, Fn, X), Nn("findAll", 2, Fn, Y), Nn("indicesOfEqual", 1, Fn, Z), Nn("copyRange", 2, Fn, $), Nn("copyToEnd", 1, Fn, tn), Nn("copyFromStart", 1, Fn, nn), Nn("keep", 1, Fn, rn), Nn("drop", 1, Fn, en), Nn("scramble", 0, Fn, sn), Nn("mirror", 0, Fn, on), Nn("mirror1", 0, Fn, un), Nn("mirror2", 0, Fn, hn), Nn("stutter", 1, Fn, an), Nn("rotate", 1, Fn, fn), Nn("sputter", 2, Fn, cn), Nn("lace", 1, Fn, ln), Nn("extend", 2, Fn, pn), Nn("clipExtend", 1, Fn, yn), Nn("wrapExtend", 1, Fn, gn), Nn("foldExtend", 1, Fn, vn), Nn("choose", 0, Fn, mn), Nn("wchoose", 1, Fn, dn), Nn("performDegreeToKey", 3, Fn, An), Nn("performKeyToDegree", 2, Fn, bn), Nn("performNearestInList", 1, Fn, wn), Nn("performNearestInScale", 2, Fn, Mn), Nn("size", 0, Fn, _n), Nn("isEmpty", 0, Fn, xn), Nn("equals", 1, Fn, On), Pn.prototype.next = function() {
        return null
    }, Pn.prototype.valueOf = function(t) {
        return "function" == typeof t.next ? t.next() : t
    }, Pn.prototype.reset = function() {
        this.count = 0
    }, zn(Tn, Pn), Tn.prototype.next = function() {
        if (this.count >= this.repeats) return null;
        var t = (this.count + this.offset) % this.list.length,
            n = this.list[t],
            r = this.valueOf(n);
        return null !== r ? ("function" != typeof n.next && (this.count += 1), r) : ("function" == typeof n.reset && n.reset(), this.count += 1, this.next())
    }, jn.Pser = Tn, zn(kn, Tn), jn.Pseq = kn, zn(En, Tn), jn.Pshuf = En, zn(Rn, Pn), Rn.prototype.next = function() {
        if (this.count >= this.repeats) return null;
        var t = 0 | this._rand() * this.list.length,
            n = this.list[t],
            r = this.valueOf(n);
        return null !== r ? ("function" != typeof n.next && (this.count += 1), r) : ("function" == typeof n.reset && n.reset(), this.count += 1, this.next())
    }, jn.Prand = Rn, zn(In, Pn), In.prototype.next = function() {
        if (this.count < this.length) {
            var t = this.valueOf(this.step);
            if (null !== t) {
                var n = this.value;
                return this.value += t, this.count += 1, n
            }
        }
        return null
    }, jn.Pseries = In, zn(Ln, Pn), Ln.prototype.next = function() {
        if (this.count < this.length) {
            var t = this.valueOf(this.grow);
            if (null !== t) {
                var n = this.value;
                return this.value *= t, this.count += 1, n
            }
        }
        return null
    }, jn.Pgeom = Ln, jn.Scale = Cn, Cn.prototype.tuning = function(t) {
        return void 0 === t ? this._tuning : ("string" == typeof t && (t = jn.TuningInfo.at(t)), t instanceof jn.Tuning ? this._pitchesPerOctave !== t.size() ? (console.warn("Scale steps per octave " + this._pitchesPerOctave + " does not match tuning size "), void 0) : (this._tuning = t, this._ratios = s.call(this.semitones()), t) : (console.warn("The first argument must be instance of Tuning"), void 0))
    }, Cn.prototype.semitones = function() {
        return this._degrees.map(this._tuning.wrapAt.bind(this._tuning))
    }, Cn.prototype.cents = function() {
        return this.semitones().map(function(t) {
            return 100 * t
        })
    }, Cn.prototype.ratios = function() {
        return this._ratios
    }, Cn.prototype.size = function() {
        return this._degrees.length
    }, Cn.prototype.pitchesPerOctave = function() {
        return this._pitchesPerOctave
    }, Cn.prototype.stepsPerOctave = function() {
        return 12 * Math.log(this.octaveRatio()) * Math.LOG2E
    }, Cn.prototype.at = function(t) {
        return this._tuning.at(O.call(this._degrees, t))
    }, Cn.prototype.wrapAt = function(t) {
        return this._tuning.wrapAt(O.call(this._degrees, t))
    }, Cn.prototype.degreeToFreq = function(t, n, r) {
        return this.degreeToRatio(t, r) * n
    }, Cn.prototype.degreeToRatio = function(t, n) {
        return "number" != typeof n && (n = 0), n += 0 | t / this._degrees.length, O.call(this.ratios(), t) * Math.pow(this.octaveRatio(), n)
    }, Cn.prototype.checkTuningForMismatch = function(t) {
        return this._pitchesPerOctave === t.size()
    }, Cn.prototype.degrees = function() {
        return this._degrees
    }, Cn.prototype.guessPPO = function() {
        return Cn.guessPPO(this._degrees)
    }, Cn.prototype.octaveRatio = function() {
        return this._tuning.octaveRatio()
    }, Cn.prototype.performDegreeToKey = function(t, n, r) {
        "number" != typeof n && (n = this.stepsPerOctave()), "number" != typeof r && (r = 0);
        var e = this.wrapAt(t);
        return e += n * (0 | t / this.size()), 0 === r ? e : e + r * (n / 12)
    }, Cn.prototype.performKeyToDegree = function(t, n) {
        return "number" != typeof n && (n = 12), bn.call(this._degrees, t, n)
    }, Cn.prototype.performNearestInList = function(t) {
        return wn.call(this._degrees, t)
    }, Cn.prototype.performNearestInScale = function(t, n) {
        return "number" != typeof n && (n = 12), Mn.call(this._degrees, t, n)
    }, Cn.prototype.equals = function(t) {
        return On.call(this.degrees(), t.degrees()) && this._tuning.equals(t._tuning)
    }, Cn.prototype.deepCopy = function() {
        return new Cn(this._degrees.slice(0), this._pitchesPerOctave, this._tuning.deepCopy(), this.name)
    }, Cn.choose = function(t, n) {
        return "number" != typeof t && (t = 7), "number" != typeof n && (n = 12), Kn.choose(function(r) {
            return r._degrees.length === t && r._pitchesPerOctave === n
        })
    }, Cn.guessPPO = function(t) {
        if (!Array.isArray(t)) return 128;
        var n, r = t[0] || 0;
        for (n = t.length; n--;) t[n] > r && (r = t[n]);
        var e = [53, 24, 19, 12];
        for (n = e.length; n--;)
            if (e[n] > r) return e[n];
        return 128
    };
    var Kn = jn.ScaleInfo = {},
        Un = {};
    Kn.choose = function(t) {
        for (var n, r = [], e = Object.keys(Un), i = e.length; i--;) n = Un[e[i]], ("function" != typeof t || t(n)) && r.push(n);
        return n = r[0 | Math.random() * r.length], n ? n.deepCopy() : void 0
    }, Kn.at = function(t) {
        var n = Un[t];
        return n ? n.deepCopy() : void 0
    }, Kn.names = function() {
        var t = Object.keys(Un);
        return t.sort(), t
    }, Kn.register = function(t, n) {
        "string" == typeof t && n instanceof Cn && (Un[t] = n, Cn[t] = function(t) {
            return function(n) {
                var r = Un[t].deepCopy();
                return "string" == typeof n && (n = jn.TuningInfo.at(n)), n instanceof jn.Tuning && r.tuning(n), r
            }
        }(t))
    }, jn.Tuning = Gn, Gn.prototype.semitones = function() {
        return this._tuning.slice(0)
    }, Gn.prototype.cents = function() {
        return this._tuning.slice(0).map(function(t) {
            return 100 * t
        })
    }, Gn.prototype.ratios = function() {
        return s.call(this._tuning)
    }, Gn.prototype.at = function(t) {
        return this._tuning[t]
    }, Gn.prototype.wrapAt = function(t) {
        return O.call(this._tuning, t)
    }, Gn.prototype.octaveRatio = function() {
        return this._octaveRatio
    }, Gn.prototype.size = function() {
        return this._tuning.length
    }, Gn.prototype.stepsPerOctave = function() {
        return 12 * Math.log(this._octaveRatio) * Math.LOG2E
    }, Gn.prototype.tuning = function() {
        return this._tuning
    }, Gn.prototype.equals = function(t) {
        return this._octaveRatio === t._octaveRatio && On.call(this._tuning, t._tuning)
    }, Gn.prototype.deepCopy = function() {
        return new Gn(this._tuning.slice(0), this._octaveRatio, this.name)
    }, Gn.et = function(t) {
        return "number" != typeof t && (t = 12), new Gn(Gn.calcET(t), 2, Gn.etName(t))
    }, Gn.choose = function(t) {
        return "number" != typeof t && (t = 12), Bn.choose(function(n) {
            return n.size() === t
        })
    }, Gn["default"] = function(t) {
        return Gn.et(t)
    }, Gn.calcET = function(t) {
        for (var n = Array(t), r = n.length; r--;) n[r] = r * (12 / t);
        return n
    }, Gn.etName = function(t) {
        return "ET" + t
    };
    var Bn = jn.TuningInfo = {},
        Jn = {};
    Bn.choose = function(t) {
        for (var n, r = [], e = Object.keys(Jn), i = e.length; i--;) n = Jn[e[i]], ("function" != typeof t || t(n)) && r.push(n);
        return n = r[0 | Math.random() * r.length], n ? n.deepCopy() : void 0
    }, Bn.at = function(t) {
        var n = Jn[t];
        return n ? n.deepCopy() : void 0
    }, Bn.names = function() {
        var t = Object.keys(Jn);
        return t.sort(), t
    }, Bn.register = function(t, n) {
        "string" == typeof t && n instanceof Gn && (Jn[t] = n, Gn[t] = function(t) {
            return function() {
                return Bn.at(t).deepCopy()
            }
        }(t))
    }, Sn.prototype.trand = function() {
        return this.s1 = (4294967294 & this.s1) << 12 ^ (this.s1 << 13 ^ this.s1) >>> 19, this.s2 = (4294967288 & this.s2) << 4 ^ (this.s2 << 2 ^ this.s2) >>> 25, this.s3 = (4294967280 & this.s3) << 17 ^ (this.s3 << 3 ^ this.s3) >>> 11, this.s1 ^ this.s2 ^ this.s3
    };
    var Hn = new Uint32Array(1),
        Qn = new Float32Array(Hn.buffer);
    Sn.prototype.next = function() {
        return Hn[0] = 1065353216 | this.trand() >>> 9, Qn[0] - 1
    }, jn.RGen = Sn, Kn.register("major", new Cn([0, 2, 4, 5, 7, 9, 11], 12, null, "Major")), Kn.register("minor", new Cn([0, 2, 3, 5, 7, 8, 10], 12, null, "Natural Minor")), Bn.register("et12", new Gn([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 2, "ET12")), Bn.register("just", new Gn(u.call([1, 16 / 15, 9 / 8, 1.2, 5 / 4, 4 / 3, 45 / 32, 1.5, 1.6, 5 / 3, 1.8, 15 / 8]), 2, "Limit Just Intonation"));
    var Vn = jn;
    "undefined" != typeof module && module.exports ? module.exports = Vn : "undefined" != typeof window && (Vn.noConflict = function() {
        var t = window.subcollider,
            n = window.sc;
        return function(r) {
            return window.sc === Vn && (window.sc = n), r && window.subcollider === Vn && (window.subcollider = t), Vn
        }
    }(), window.subcollider = window.sc = Vn)
})();