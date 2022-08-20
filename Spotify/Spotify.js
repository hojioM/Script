//https://github.com/app2smile/rules/blob/master/module/spotify.conf
[rewrite_local]
^https:\/\/spclient\.wg\.spotify\.com\/(bootstrap\/v1\/bootstrap|user-customization-service\/v1\/customize)$ url script-response-body https://raw.githubusercontent.com/hojioM/QuantumultX/main/Spotify/Spotify.js
hostname = spclient.wg.spotify.com

let protobuf = null;
!function (tt) {
    "use strict";
    !function (r, e, t) {
        var i = function t(i) {
            var n = e[i];
            return n || r[i][0].call(n = e[i] = {exports: {}}, t, n, n.exports), n.exports
        }(t[0]);
        protobuf = i.util.global.protobuf = i, "function" == typeof define && define.amd && define(["long"], function (t) {
            return t && t.isLong && (i.util.Long = t, i.configure()), i
        }), "object" == typeof module && module && module.exports && (module.exports = i)
    }({
        1: [function (t, i, n) {
            i.exports = function (t, i) {
                var n = Array(arguments.length - 1), s = 0, r = 2, o = !0;
                for (; r < arguments.length;) n[s++] = arguments[r++];
                return new Promise(function (r, e) {
                    n[s] = function (t) {
                        if (o) if (o = !1, t) e(t); else {
                            for (var i = Array(arguments.length - 1), n = 0; n < i.length;) i[n++] = arguments[n];
                            r.apply(null, i)
                        }
                    };
                    try {
                        t.apply(i || null, n)
                    } catch (t) {
                        o && (o = !1, e(t))
                    }
                })
            }
        }, {}],
        2: [function (t, i, n) {
            n.length = function (t) {
                var i = t.length;
                if (!i) return 0;
                for (var n = 0; 1 < --i % 4 && "=" == (t[0 | i] || "");) ++n;
                return Math.ceil(3 * t.length) / 4 - n
            };
            for (var h = Array(64), f = Array(123), r = 0; r < 64;) f[h[r] = r < 26 ? r + 65 : r < 52 ? r + 71 : r < 62 ? r - 4 : r - 59 | 43] = r++;
            n.encode = function (t, i, n) {
                for (var r, e = null, s = [], o = 0, u = 0; i < n;) {
                    var f = t[i++];
                    switch (u) {
                        case 0:
                            s[o++] = h[f >> 2], r = (3 & f) << 4, u = 1;
                            break;
                        case 1:
                            s[o++] = h[r | f >> 4], r = (15 & f) << 2, u = 2;
                            break;
                        case 2:
                            s[o++] = h[r | f >> 6], s[o++] = h[63 & f], u = 0
                    }
                    8191 < o && ((e = e || []).push(String.fromCharCode.apply(String, s)), o = 0)
                }
                return u && (s[o++] = h[r], s[o++] = 61, 1 === u && (s[o++] = 61)), e ? (o && e.push(String.fromCharCode.apply(String, s.slice(0, o))), e.join("")) : String.fromCharCode.apply(String, s.slice(0, o))
            };
            var a = "invalid encoding";
            n.decode = function (t, i, n) {
                for (var r, e = n, s = 0, o = 0; o < t.length;) {
                    var u = t.charCodeAt(o++);
                    if (61 == u && 1 < s) break;
                    if ((u = f[u]) === tt) throw Error(a);
                    switch (s) {
                        case 0:
                            r = u, s = 1;
                            break;
                        case 1:
                            i[n++] = r << 2 | (48 & u) >> 4, r = u, s = 2;
                            break;
                        case 2:
                            i[n++] = (15 & r) << 4 | (60 & u) >> 2, r = u, s = 3;
                            break;
                        case 3:
                            i[n++] = (3 & r) << 6 | u, s = 0
                    }
                }
                if (1 === s) throw Error(a);
                return n - e
            }, n.test = function (t) {
                return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t)
            }
        }, {}],
        3: [function (t, i, n) {
            function c(i, n) {
                "string" == typeof i && (n = i, i = tt);
                var f = [];

                function h(t) {
                    if ("string" != typeof t) {
                        var i = a();
                        if (c.verbose && console.log("codegen: " + i), i = "return " + i, t) {
                            for (var n = Object.keys(t), r = Array(n.length + 1), e = Array(n.length), s = 0; s < n.length;) r[s] = n[s], e[s] = t[n[s++]];
                            return r[s] = i, Function.apply(null, r).apply(null, e)
                        }
                        return Function(i)()
                    }
                    for (var o = Array(arguments.length - 1), u = 0; u < o.length;) o[u] = arguments[++u];
                    if (u = 0, t = t.replace(/%([%dfijs])/g, function (t, i) {
                        var n = o[u++];
                        switch (i) {
                            case"d":
                            case"f":
                                return "" + +("" + n);
                            case"i":
                                return "" + Math.floor(n);
                            case"j":
                                return JSON.stringify(n);
                            case"s":
                                return "" + n
                        }
                        return "%"
                    }), u !== o.length) throw Error("parameter count mismatch");
                    return f.push(t), h
                }

                function a(t) {
                    return "function " + (t || n || "") + "(" + (i && i.join(",") || "") + "){\n  " + f.join("\n  ") + "\n}"
                }

                return h.toString = a, h
            }

            (i.exports = c).verbose = !1
        }, {}],
        4: [function (t, i, n) {
            function r() {
                this.i = {}
            }

            (i.exports = r).prototype.on = function (t, i, n) {
                return (this.i[t] || (this.i[t] = [])).push({fn: i, ctx: n || this}), this
            }, r.prototype.off = function (t, i) {
                if (t === tt) this.i = {}; else if (i === tt) this.i[t] = []; else for (var n = this.i[t], r = 0; r < n.length;) n[r].fn === i ? n.splice(r, 1) : ++r;
                return this
            }, r.prototype.emit = function (t) {
                var i = this.i[t];
                if (i) {
                    for (var n = [], r = 1; r < arguments.length;) n.push(arguments[r++]);
                    for (r = 0; r < i.length;) i[r].fn.apply(i[r++].ctx, n)
                }
                return this
            }
        }, {}],
        5: [function (t, i, n) {
            i.exports = u;
            var s = t(1), o = t(7)("fs");

            function u(n, r, e) {
                return r = "function" == typeof r ? (e = r, {}) : r || {}, e ? !r.xhr && o && o.readFile ? o.readFile(n, function (t, i) {
                    return t && "undefined" != typeof XMLHttpRequest ? u.xhr(n, r, e) : t ? e(t) : e(null, r.binary ? i : i.toString("utf8"))
                }) : u.xhr(n, r, e) : s(u, this, n, r)
            }

            u.xhr = function (t, n, r) {
                var e = new XMLHttpRequest;
                e.onreadystatechange = function () {
                    if (4 !== e.readyState) return tt;
                    if (0 !== e.status && 200 !== e.status) return r(Error("status " + e.status));
                    if (n.binary) {
                        if (!(t = e.response)) for (var t = [], i = 0; i < e.responseText.length; ++i) t.push(255 & e.responseText.charCodeAt(i));
                        return r(null, "undefined" != typeof Uint8Array ? new Uint8Array(t) : t)
                    }
                    return r(null, e.responseText)
                }, n.binary && ("overrideMimeType" in e && e.overrideMimeType("text/plain; charset=x-user-defined"), e.responseType = "arraybuffer"), e.open("GET", t), e.send()
            }
        }, {1: 1, 7: 7}],
        6: [function (t, i, n) {
            function r(t) {
                function i(t, i, n, r) {
                    var e = i < 0 ? 1 : 0;
                    t(0 === (i = e ? -i : i) ? 0 < 1 / i ? 0 : 2147483648 : isNaN(i) ? 2143289344 : 34028234663852886e22 < i ? (e << 31 | 2139095040) >>> 0 : i < 11754943508222875e-54 ? (e << 31 | Math.round(i / 1401298464324817e-60)) >>> 0 : (e << 31 | 127 + (t = Math.floor(Math.log(i) / Math.LN2)) << 23 | 8388607 & Math.round(i * Math.pow(2, -t) * 8388608)) >>> 0, n, r)
                }

                function n(t, i, n) {
                    t = t(i, n), i = 2 * (t >> 31) + 1, n = t >>> 23 & 255, t &= 8388607;
                    return 255 == n ? t ? NaN : 1 / 0 * i : 0 == n ? 1401298464324817e-60 * i * t : i * Math.pow(2, n - 150) * (8388608 + t)
                }

                function r(t, i, n) {
                    u[0] = t, i[n] = f[0], i[n + 1] = f[1], i[n + 2] = f[2], i[n + 3] = f[3]
                }

                function e(t, i, n) {
                    u[0] = t, i[n] = f[3], i[n + 1] = f[2], i[n + 2] = f[1], i[n + 3] = f[0]
                }

                function s(t, i) {
                    return f[0] = t[i], f[1] = t[i + 1], f[2] = t[i + 2], f[3] = t[i + 3], u[0]
                }

                function o(t, i) {
                    return f[3] = t[i], f[2] = t[i + 1], f[1] = t[i + 2], f[0] = t[i + 3], u[0]
                }

                var u, f, h, a, c;

                function l(t, i, n, r, e, s) {
                    var o, u = r < 0 ? 1 : 0;
                    0 === (r = u ? -r : r) ? (t(0, e, s + i), t(0 < 1 / r ? 0 : 2147483648, e, s + n)) : isNaN(r) ? (t(0, e, s + i), t(2146959360, e, s + n)) : 17976931348623157e292 < r ? (t(0, e, s + i), t((u << 31 | 2146435072) >>> 0, e, s + n)) : r < 22250738585072014e-324 ? (t((o = r / 5e-324) >>> 0, e, s + i), t((u << 31 | o / 4294967296) >>> 0, e, s + n)) : (t(4503599627370496 * (o = r * Math.pow(2, -(r = 1024 === (r = Math.floor(Math.log(r) / Math.LN2)) ? 1023 : r))) >>> 0, e, s + i), t((u << 31 | r + 1023 << 20 | 1048576 * o & 1048575) >>> 0, e, s + n))
                }

                function d(t, i, n, r, e) {
                    i = t(r, e + i), t = t(r, e + n), r = 2 * (t >> 31) + 1, e = t >>> 20 & 2047, n = 4294967296 * (1048575 & t) + i;
                    return 2047 == e ? n ? NaN : 1 / 0 * r : 0 == e ? 5e-324 * r * n : r * Math.pow(2, e - 1075) * (n + 4503599627370496)
                }

                function p(t, i, n) {
                    h[0] = t, i[n] = a[0], i[n + 1] = a[1], i[n + 2] = a[2], i[n + 3] = a[3], i[n + 4] = a[4], i[n + 5] = a[5], i[n + 6] = a[6], i[n + 7] = a[7]
                }

                function v(t, i, n) {
                    h[0] = t, i[n] = a[7], i[n + 1] = a[6], i[n + 2] = a[5], i[n + 3] = a[4], i[n + 4] = a[3], i[n + 5] = a[2], i[n + 6] = a[1], i[n + 7] = a[0]
                }

                function b(t, i) {
                    return a[0] = t[i], a[1] = t[i + 1], a[2] = t[i + 2], a[3] = t[i + 3], a[4] = t[i + 4], a[5] = t[i + 5], a[6] = t[i + 6], a[7] = t[i + 7], h[0]
                }

                function w(t, i) {
                    return a[7] = t[i], a[6] = t[i + 1], a[5] = t[i + 2], a[4] = t[i + 3], a[3] = t[i + 4], a[2] = t[i + 5], a[1] = t[i + 6], a[0] = t[i + 7], h[0]
                }

                return "undefined" != typeof Float32Array ? (u = new Float32Array([-0]), f = new Uint8Array(u.buffer), c = 128 === f[3], t.writeFloatLE = c ? r : e, t.writeFloatBE = c ? e : r, t.readFloatLE = c ? s : o, t.readFloatBE = c ? o : s) : (t.writeFloatLE = i.bind(null, y), t.writeFloatBE = i.bind(null, m), t.readFloatLE = n.bind(null, g), t.readFloatBE = n.bind(null, j)), "undefined" != typeof Float64Array ? (h = new Float64Array([-0]), a = new Uint8Array(h.buffer), c = 128 === a[7], t.writeDoubleLE = c ? p : v, t.writeDoubleBE = c ? v : p, t.readDoubleLE = c ? b : w, t.readDoubleBE = c ? w : b) : (t.writeDoubleLE = l.bind(null, y, 0, 4), t.writeDoubleBE = l.bind(null, m, 4, 0), t.readDoubleLE = d.bind(null, g, 0, 4), t.readDoubleBE = d.bind(null, j, 4, 0)), t
            }

            function y(t, i, n) {
                i[n] = 255 & t, i[n + 1] = t >>> 8 & 255, i[n + 2] = t >>> 16 & 255, i[n + 3] = t >>> 24
            }

            function m(t, i, n) {
                i[n] = t >>> 24, i[n + 1] = t >>> 16 & 255, i[n + 2] = t >>> 8 & 255, i[n + 3] = 255 & t
            }

            function g(t, i) {
                return (t[i] | t[i + 1] << 8 | t[i + 2] << 16 | t[i + 3] << 24) >>> 0
            }

            function j(t, i) {
                return (t[i] << 24 | t[i + 1] << 16 | t[i + 2] << 8 | t[i + 3]) >>> 0
            }

            i.exports = r(r)
        }, {}],
        7: [function (t, i, n) {
            function r(t) {
                try {
                    var i = eval("require")(t);
                    if (i && (i.length || Object.keys(i).length)) return i
                } catch (t) {
                }
                return null
            }

            i.exports = r
        }, {}],
        8: [function (t, i, n) {
            var e = n.isAbsolute = function (t) {
                return /^(?:\/|\w+:)/.test(t)
            }, r = n.normalize = function (t) {
                var i = (t = t.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/"), n = e(t), t = "";
                n && (t = i.shift() + "/");
                for (var r = 0; r < i.length;) ".." === i[r] ? 0 < r && ".." !== i[r - 1] ? i.splice(--r, 2) : n ? i.splice(r, 1) : ++r : "." === i[r] ? i.splice(r, 1) : ++r;
                return t + i.join("/")
            };
            n.resolve = function (t, i, n) {
                return n || (i = r(i)), !e(i) && (t = (t = n ? t : r(t)).replace(/(?:\/|^)[^/]+$/, "")).length ? r(t + "/" + i) : i
            }
        }, {}],
        9: [function (t, i, n) {
            i.exports = function (i, n, t) {
                var r = t || 8192, e = r >>> 1, s = null, o = r;
                return function (t) {
                    if (t < 1 || e < t) return i(t);
                    r < o + t && (s = i(r), o = 0);
                    t = n.call(s, o, o += t);
                    return 7 & o && (o = 1 + (7 | o)), t
                }
            }
        }, {}],
        10: [function (t, i, n) {
            n.length = function (t) {
                for (var i, n = 0, r = 0; r < t.length; ++r) (i = t.charCodeAt(r)) < 128 ? n += 1 : i < 2048 ? n += 2 : 55296 == (64512 & i) && 56320 == (64512 & t.charCodeAt(r + 1)) ? (++r, n += 4) : n += 3;
                return n
            }, n.read = function (t, i, n) {
                if (n - i < 1) return "";
                for (var r, e = null, s = [], o = 0; i < n;) (r = t[i++]) < 128 ? s[o++] = r : 191 < r && r < 224 ? s[o++] = (31 & r) << 6 | 63 & t[i++] : 239 < r && r < 365 ? (r = ((7 & r) << 18 | (63 & t[i++]) << 12 | (63 & t[i++]) << 6 | 63 & t[i++]) - 65536, s[o++] = 55296 + (r >> 10), s[o++] = 56320 + (1023 & r)) : s[o++] = (15 & r) << 12 | (63 & t[i++]) << 6 | 63 & t[i++], 8191 < o && ((e = e || []).push(String.fromCharCode.apply(String, s)), o = 0);
                return e ? (o && e.push(String.fromCharCode.apply(String, s.slice(0, o))), e.join("")) : String.fromCharCode.apply(String, s.slice(0, o))
            }, n.write = function (t, i, n) {
                for (var r, e, s = n, o = 0; o < t.length; ++o) (r = t.charCodeAt(o)) < 128 ? i[n++] = r : (r < 2048 ? i[n++] = r >> 6 | 192 : (55296 == (64512 & r) && 56320 == (64512 & (e = t.charCodeAt(o + 1))) ? (++o, i[n++] = (r = 65536 + ((1023 & r) << 10) + (1023 & e)) >> 18 | 240, i[n++] = r >> 12 & 63 | 128) : i[n++] = r >> 12 | 224, i[n++] = r >> 6 & 63 | 128), i[n++] = 63 & r | 128);
                return n - s
            }
        }, {}],
        11: [function (t, i, n) {
            i.exports = e;
            var r = /\/|\./;

            function e(t, i) {
                r.test(t) || (t = "google/protobuf/" + t + ".proto", i = {nested: {google: {nested: {protobuf: {nested: i}}}}}), e[t] = i
            }

            e("any", {
                Any: {
                    fields: {
                        type_url: {type: "string", id: 1},
                        value: {type: "bytes", id: 2}
                    }
                }
            }), e("duration", {
                Duration: i = {
                    fields: {
                        seconds: {type: "int64", id: 1},
                        nanos: {type: "int32", id: 2}
                    }
                }
            }), e("timestamp", {Timestamp: i}), e("empty", {Empty: {fields: {}}}), e("struct", {
                Struct: {
                    fields: {
                        fields: {
                            keyType: "string",
                            type: "Value",
                            id: 1
                        }
                    }
                },
                Value: {
                    oneofs: {kind: {oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]}},
                    fields: {
                        nullValue: {type: "NullValue", id: 1},
                        numberValue: {type: "double", id: 2},
                        stringValue: {type: "string", id: 3},
                        boolValue: {type: "bool", id: 4},
                        structValue: {type: "Struct", id: 5},
                        listValue: {type: "ListValue", id: 6}
                    }
                },
                NullValue: {values: {NULL_VALUE: 0}},
                ListValue: {fields: {values: {rule: "repeated", type: "Value", id: 1}}}
            }), e("wrappers", {
                DoubleValue: {fields: {value: {type: "double", id: 1}}},
                FloatValue: {fields: {value: {type: "float", id: 1}}},
                Int64Value: {fields: {value: {type: "int64", id: 1}}},
                UInt64Value: {fields: {value: {type: "uint64", id: 1}}},
                Int32Value: {fields: {value: {type: "int32", id: 1}}},
                UInt32Value: {fields: {value: {type: "uint32", id: 1}}},
                BoolValue: {fields: {value: {type: "bool", id: 1}}},
                StringValue: {fields: {value: {type: "string", id: 1}}},
                BytesValue: {fields: {value: {type: "bytes", id: 1}}}
            }), e("field_mask", {
                FieldMask: {
                    fields: {
                        paths: {
                            rule: "repeated",
                            type: "string",
                            id: 1
                        }
                    }
                }
            }), e.get = function (t) {
                return e[t] || null
            }
        }, {}],
        12: [function (t, i, n) {
            var l = t(15), d = t(37);

            function o(t, i, n, r) {
                if (i.resolvedType) if (i.resolvedType instanceof l) {
                    t("switch(d%s){", r);
                    for (var e = i.resolvedType.values, s = Object.keys(e), o = 0; o < s.length; ++o) i.repeated && e[s[o]] === i.typeDefault && t("default:"), t("case%j:", s[o])("case %i:", e[s[o]])("m%s=%j", r, e[s[o]])("break");
                    t("}")
                } else t('if(typeof d%s!=="object")', r)("throw TypeError(%j)", i.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", r, n, r); else {
                    var u = !1;
                    switch (i.type) {
                        case"double":
                        case"float":
                            t("m%s=Number(d%s)", r, r);
                            break;
                        case"uint32":
                        case"fixed32":
                            t("m%s=d%s>>>0", r, r);
                            break;
                        case"int32":
                        case"sint32":
                        case"sfixed32":
                            t("m%s=d%s|0", r, r);
                            break;
                        case"uint64":
                            u = !0;
                        case"int64":
                        case"sint64":
                        case"fixed64":
                        case"sfixed64":
                            t("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", r, r, u)('else if(typeof d%s==="string")', r)("m%s=parseInt(d%s,10)", r, r)('else if(typeof d%s==="number")', r)("m%s=d%s", r, r)('else if(typeof d%s==="object")', r)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", r, r, r, u ? "true" : "");
                            break;
                        case"bytes":
                            t('if(typeof d%s==="string")', r)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", r, r, r)("else if(d%s.length)", r)("m%s=d%s", r, r);
                            break;
                        case"string":
                            t("m%s=String(d%s)", r, r);
                            break;
                        case"bool":
                            t("m%s=Boolean(d%s)", r, r)
                    }
                }
                return t
            }

            function p(t, i, n, r) {
                if (i.resolvedType) i.resolvedType instanceof l ? t("d%s=o.enums===String?types[%i].values[m%s]:m%s", r, n, r, r) : t("d%s=types[%i].toObject(m%s,o)", r, n, r); else {
                    var e = !1;
                    switch (i.type) {
                        case"double":
                        case"float":
                            t("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", r, r, r, r);
                            break;
                        case"uint64":
                            e = !0;
                        case"int64":
                        case"sint64":
                        case"fixed64":
                        case"sfixed64":
                            t('if(typeof m%s==="number")', r)("d%s=o.longs===String?String(m%s):m%s", r, r, r)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", r, r, r, r, e ? "true" : "", r);
                            break;
                        case"bytes":
                            t("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", r, r, r, r, r);
                            break;
                        default:
                            t("d%s=m%s", r, r)
                    }
                }
                return t
            }

            n.fromObject = function (t) {
                var i = t.fieldsArray,
                    n = d.codegen(["d"], t.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
                if (!i.length) return n("return new this.ctor");
                n("var m=new this.ctor");
                for (var r = 0; r < i.length; ++r) {
                    var e = i[r].resolve(), s = d.safeProp(e.name);
                    e.map ? (n("if(d%s){", s)('if(typeof d%s!=="object")', s)("throw TypeError(%j)", e.fullName + ": object expected")("m%s={}", s)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", s), o(n, e, r, s + "[ks[i]]")("}")("}")) : e.repeated ? (n("if(d%s){", s)("if(!Array.isArray(d%s))", s)("throw TypeError(%j)", e.fullName + ": array expected")("m%s=[]", s)("for(var i=0;i<d%s.length;++i){", s), o(n, e, r, s + "[i]")("}")("}")) : (e.resolvedType instanceof l || n("if(d%s!=null){", s), o(n, e, r, s), e.resolvedType instanceof l || n("}"))
                }
                return n("return m")
            }, n.toObject = function (t) {
                var i = t.fieldsArray.slice().sort(d.compareFieldsById);
                if (!i.length) return d.codegen()("return {}");
                for (var n = d.codegen(["m", "o"], t.name + "$toObject")("if(!o)")("o={}")("var d={}"), r = [], e = [], s = [], o = 0; o < i.length; ++o) i[o].partOf || (i[o].resolve().repeated ? r : i[o].map ? e : s).push(i[o]);
                if (r.length) {
                    for (n("if(o.arrays||o.defaults){"), o = 0; o < r.length; ++o) n("d%s=[]", d.safeProp(r[o].name));
                    n("}")
                }
                if (e.length) {
                    for (n("if(o.objects||o.defaults){"), o = 0; o < e.length; ++o) n("d%s={}", d.safeProp(e[o].name));
                    n("}")
                }
                if (s.length) {
                    for (n("if(o.defaults){"), o = 0; o < s.length; ++o) {
                        var u, f = s[o], h = d.safeProp(f.name);
                        f.resolvedType instanceof l ? n("d%s=o.enums===String?%j:%j", h, f.resolvedType.valuesById[f.typeDefault], f.typeDefault) : f.long ? n("if(util.Long){")("var n=new util.Long(%i,%i,%j)", f.typeDefault.low, f.typeDefault.high, f.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", h)("}else")("d%s=o.longs===String?%j:%i", h, f.typeDefault.toString(), f.typeDefault.toNumber()) : f.bytes ? (u = "[" + Array.prototype.slice.call(f.typeDefault).join(",") + "]", n("if(o.bytes===String)d%s=%j", h, String.fromCharCode.apply(String, f.typeDefault))("else{")("d%s=%s", h, u)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", h, h)("}")) : n("d%s=%j", h, f.typeDefault)
                    }
                    n("}")
                }
                for (var a = !1, o = 0; o < i.length; ++o) {
                    var f = i[o], c = t.e.indexOf(f), h = d.safeProp(f.name);
                    f.map ? (a || (a = !0, n("var ks2")), n("if(m%s&&(ks2=Object.keys(m%s)).length){", h, h)("d%s={}", h)("for(var j=0;j<ks2.length;++j){"), p(n, f, c, h + "[ks2[j]]")("}")) : f.repeated ? (n("if(m%s&&m%s.length){", h, h)("d%s=[]", h)("for(var j=0;j<m%s.length;++j){", h), p(n, f, c, h + "[j]")("}")) : (n("if(m%s!=null&&m.hasOwnProperty(%j)){", h, f.name), p(n, f, c, h), f.partOf && n("if(o.oneofs)")("d%s=%j", d.safeProp(f.partOf.name), f.name)), n("}")
                }
                return n("return d")
            }
        }, {15: 15, 37: 37}],
        13: [function (t, i, n) {
            i.exports = function (t) {
                var i = h.codegen(["r", "l"], t.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (t.fieldsArray.filter(function (t) {
                    return t.map
                }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
                t.group && i("if((t&7)===4)")("break");
                i("switch(t>>>3){");
                for (var n = 0; n < t.fieldsArray.length; ++n) {
                    var r = t.e[n].resolve(), e = r.resolvedType instanceof u ? "int32" : r.type,
                        s = "m" + h.safeProp(r.name);
                    i("case %i:", r.id), r.map ? (i("if(%s===util.emptyObject)", s)("%s={}", s)("var c2 = r.uint32()+r.pos"), f.defaults[r.keyType] !== tt ? i("k=%j", f.defaults[r.keyType]) : i("k=null"), f.defaults[e] !== tt ? i("value=%j", f.defaults[e]) : i("value=null"), i("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", r.keyType)("case 2:"), f.basic[e] === tt ? i("value=types[%i].decode(r,r.uint32())", n) : i("value=r.%s()", e), i("break")("default:")("r.skipType(tag2&7)")("break")("}")("}"), f.long[r.keyType] !== tt ? i('%s[typeof k==="object"?util.longToHash(k):k]=value', s) : i("%s[k]=value", s)) : r.repeated ? (i("if(!(%s&&%s.length))", s, s)("%s=[]", s), f.packed[e] !== tt && i("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", s, e)("}else"), f.basic[e] === tt ? i(r.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", s, n) : i("%s.push(r.%s())", s, e)) : f.basic[e] === tt ? i(r.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", s, n) : i("%s=r.%s()", s, e), i("break")
                }
                for (i("default:")("r.skipType(t&7)")("break")("}")("}"), n = 0; n < t.e.length; ++n) {
                    var o = t.e[n];
                    o.required && i("if(!m.hasOwnProperty(%j))", o.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + o.name + "'")
                }
                return i("return m")
            };
            var u = t(15), f = t(36), h = t(37)
        }, {15: 15, 36: 36, 37: 37}],
        14: [function (t, i, n) {
            i.exports = function (t) {
                for (var i, n = c.codegen(["m", "w"], t.name + "$encode")("if(!w)")("w=Writer.create()"), r = t.fieldsArray.slice().sort(c.compareFieldsById), e = 0; e < r.length; ++e) {
                    var s = r[e].resolve(), o = t.e.indexOf(s), u = s.resolvedType instanceof h ? "int32" : s.type,
                        f = a.basic[u];
                    i = "m" + c.safeProp(s.name), s.map ? (n("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", i, s.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", i)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (s.id << 3 | 2) >>> 0, 8 | a.mapKey[s.keyType], s.keyType), f === tt ? n("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", o, i) : n(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | f, u, i), n("}")("}")) : s.repeated ? (n("if(%s!=null&&%s.length){", i, i), s.packed && a.packed[u] !== tt ? n("w.uint32(%i).fork()", (s.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", i)("w.%s(%s[i])", u, i)("w.ldelim()") : (n("for(var i=0;i<%s.length;++i)", i), f === tt ? l(n, s, o, i + "[i]") : n("w.uint32(%i).%s(%s[i])", (s.id << 3 | f) >>> 0, u, i)), n("}")) : (s.optional && n("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", i, s.name), f === tt ? l(n, s, o, i) : n("w.uint32(%i).%s(%s)", (s.id << 3 | f) >>> 0, u, i))
                }
                return n("return w")
            };
            var h = t(15), a = t(36), c = t(37);

            function l(t, i, n, r) {
                i.resolvedType.group ? t("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", n, r, (i.id << 3 | 3) >>> 0, (i.id << 3 | 4) >>> 0) : t("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", n, r, (i.id << 3 | 2) >>> 0)
            }
        }, {15: 15, 36: 36, 37: 37}],
        15: [function (t, i, n) {
            i.exports = s;
            var u = t(24), r = (((s.prototype = Object.create(u.prototype)).constructor = s).className = "Enum", t(23)),
                e = t(37);

            function s(t, i, n, r, e) {
                if (u.call(this, t, n), i && "object" != typeof i) throw TypeError("values must be an object");
                if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = r, this.comments = e || {}, this.reserved = tt, i) for (var s = Object.keys(i), o = 0; o < s.length; ++o) "number" == typeof i[s[o]] && (this.valuesById[this.values[s[o]] = i[s[o]]] = s[o])
            }

            s.fromJSON = function (t, i) {
                t = new s(t, i.values, i.options, i.comment, i.comments);
                return t.reserved = i.reserved, t
            }, s.prototype.toJSON = function (t) {
                t = !!t && !!t.keepComments;
                return e.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : tt, "comment", t ? this.comment : tt, "comments", t ? this.comments : tt])
            }, s.prototype.add = function (t, i, n) {
                if (!e.isString(t)) throw TypeError("name must be a string");
                if (!e.isInteger(i)) throw TypeError("id must be an integer");
                if (this.values[t] !== tt) throw Error("duplicate name '" + t + "' in " + this);
                if (this.isReservedId(i)) throw Error("id " + i + " is reserved in " + this);
                if (this.isReservedName(t)) throw Error("name '" + t + "' is reserved in " + this);
                if (this.valuesById[i] !== tt) {
                    if (!this.options || !this.options.allow_alias) throw Error("duplicate id " + i + " in " + this);
                    this.values[t] = i
                } else this.valuesById[this.values[t] = i] = t;
                return this.comments[t] = n || null, this
            }, s.prototype.remove = function (t) {
                if (!e.isString(t)) throw TypeError("name must be a string");
                var i = this.values[t];
                if (null == i) throw Error("name '" + t + "' does not exist in " + this);
                return delete this.valuesById[i], delete this.values[t], delete this.comments[t], this
            }, s.prototype.isReservedId = function (t) {
                return r.isReservedId(this.reserved, t)
            }, s.prototype.isReservedName = function (t) {
                return r.isReservedName(this.reserved, t)
            }
        }, {23: 23, 24: 24, 37: 37}],
        16: [function (t, i, n) {
            i.exports = o;
            var r, u = t(24),
                e = (((o.prototype = Object.create(u.prototype)).constructor = o).className = "Field", t(15)),
                f = t(36), h = t(37), a = /^required|optional|repeated$/;

            function o(t, i, n, r, e, s, o) {
                if (h.isObject(r) ? (o = e, s = r, r = e = tt) : h.isObject(e) && (o = s, s = e, e = tt), u.call(this, t, s), !h.isInteger(i) || i < 0) throw TypeError("id must be a non-negative integer");
                if (!h.isString(n)) throw TypeError("type must be a string");
                if (r !== tt && !a.test(r = r.toString().toLowerCase())) throw TypeError("rule must be a string rule");
                if (e !== tt && !h.isString(e)) throw TypeError("extend must be a string");
                this.rule = (r = "proto3_optional" === r ? "optional" : r) && "optional" !== r ? r : tt, this.type = n, this.id = i, this.extend = e || tt, this.required = "required" === r, this.optional = !this.required, this.repeated = "repeated" === r, this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = !!h.Long && f.long[n] !== tt, this.bytes = "bytes" === n, this.resolvedType = null, this.extensionField = null, this.declaringField = null, this.o = null, this.comment = o
            }

            o.fromJSON = function (t, i) {
                return new o(t, i.id, i.type, i.rule, i.extend, i.options, i.comment)
            }, Object.defineProperty(o.prototype, "packed", {
                get: function () {
                    return null === this.o && (this.o = !1 !== this.getOption("packed")), this.o
                }
            }), o.prototype.setOption = function (t, i, n) {
                return "packed" === t && (this.o = null), u.prototype.setOption.call(this, t, i, n)
            }, o.prototype.toJSON = function (t) {
                t = !!t && !!t.keepComments;
                return h.toObject(["rule", "optional" !== this.rule && this.rule || tt, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : tt])
            }, o.prototype.resolve = function () {
                return this.resolved ? this : ((this.typeDefault = f.defaults[this.type]) === tt && (this.resolvedType = (this.declaringField || this).parent.lookupTypeOrEnum(this.type), this.resolvedType instanceof r ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]), this.options && null != this.options.default && (this.typeDefault = this.options.default, this.resolvedType instanceof e && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (!0 !== this.options.packed && (this.options.packed === tt || !this.resolvedType || this.resolvedType instanceof e) || delete this.options.packed, Object.keys(this.options).length || (this.options = tt)), this.long ? (this.typeDefault = h.Long.fromNumber(this.typeDefault, "u" == (this.type[0] || "")), Object.freeze && Object.freeze(this.typeDefault)) : this.bytes && "string" == typeof this.typeDefault && (h.base64.test(this.typeDefault) ? h.base64.decode(this.typeDefault, t = h.newBuffer(h.base64.length(this.typeDefault)), 0) : h.utf8.write(this.typeDefault, t = h.newBuffer(h.utf8.length(this.typeDefault)), 0), this.typeDefault = t), this.map ? this.defaultValue = h.emptyObject : this.repeated ? this.defaultValue = h.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof r && (this.parent.ctor.prototype[this.name] = this.defaultValue), u.prototype.resolve.call(this));
                var t
            }, o.d = function (n, r, e, s) {
                return "function" == typeof r ? r = h.decorateType(r).name : r && "object" == typeof r && (r = h.decorateEnum(r).name), function (t, i) {
                    h.decorateType(t.constructor).add(new o(i, n, r, e, {default: s}))
                }
            }, o.u = function (t) {
                r = t
            }
        }, {15: 15, 24: 24, 36: 36, 37: 37}],
        17: [function (t, i, n) {
            var r = i.exports = t(18);
            r.build = "light", r.load = function (t, i, n) {
                return (i = "function" == typeof i ? (n = i, new r.Root) : i || new r.Root).load(t, n)
            }, r.loadSync = function (t, i) {
                return (i = i || new r.Root).loadSync(t)
            }, r.encoder = t(14), r.decoder = t(13), r.verifier = t(40), r.converter = t(12), r.ReflectionObject = t(24), r.Namespace = t(23), r.Root = t(29), r.Enum = t(15), r.Type = t(35), r.Field = t(16), r.OneOf = t(25), r.MapField = t(20), r.Service = t(33), r.Method = t(22), r.Message = t(21), r.wrappers = t(41), r.types = t(36), r.util = t(37), r.ReflectionObject.u(r.Root), r.Namespace.u(r.Type, r.Service, r.Enum), r.Root.u(r.Type), r.Field.u(r.Type)
        }, {
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            18: 18,
            20: 20,
            21: 21,
            22: 22,
            23: 23,
            24: 24,
            25: 25,
            29: 29,
            33: 33,
            35: 35,
            36: 36,
            37: 37,
            40: 40,
            41: 41
        }],
        18: [function (t, i, n) {
            var r = n;

            function e() {
                r.util.u(), r.Writer.u(r.BufferWriter), r.Reader.u(r.BufferReader)
            }

            r.build = "minimal", r.Writer = t(42), r.BufferWriter = t(43), r.Reader = t(27), r.BufferReader = t(28), r.util = t(39), r.rpc = t(31), r.roots = t(30), r.configure = e, e()
        }, {27: 27, 28: 28, 30: 30, 31: 31, 39: 39, 42: 42, 43: 43}],
        19: [function (t, i, n) {
            i = i.exports = t(17);
            i.build = "full", i.tokenize = t(34), i.parse = t(26), i.common = t(11), i.Root.u(i.Type, i.parse, i.common)
        }, {11: 11, 17: 17, 26: 26, 34: 34}],
        20: [function (t, i, n) {
            i.exports = s;
            var o = t(16),
                r = (((s.prototype = Object.create(o.prototype)).constructor = s).className = "MapField", t(36)),
                u = t(37);

            function s(t, i, n, r, e, s) {
                if (o.call(this, t, i, r, tt, tt, e, s), !u.isString(n)) throw TypeError("keyType must be a string");
                this.keyType = n, this.resolvedKeyType = null, this.map = !0
            }

            s.fromJSON = function (t, i) {
                return new s(t, i.id, i.keyType, i.type, i.options, i.comment)
            }, s.prototype.toJSON = function (t) {
                t = !!t && !!t.keepComments;
                return u.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : tt])
            }, s.prototype.resolve = function () {
                if (this.resolved) return this;
                if (r.mapKey[this.keyType] === tt) throw Error("invalid key type: " + this.keyType);
                return o.prototype.resolve.call(this)
            }, s.d = function (n, r, e) {
                return "function" == typeof e ? e = u.decorateType(e).name : e && "object" == typeof e && (e = u.decorateEnum(e).name), function (t, i) {
                    u.decorateType(t.constructor).add(new s(i, n, r, e))
                }
            }
        }, {16: 16, 36: 36, 37: 37}],
        21: [function (t, i, n) {
            i.exports = e;
            var r = t(39);

            function e(t) {
                if (t) for (var i = Object.keys(t), n = 0; n < i.length; ++n) this[i[n]] = t[i[n]]
            }

            e.create = function (t) {
                return this.$type.create(t)
            }, e.encode = function (t, i) {
                return this.$type.encode(t, i)
            }, e.encodeDelimited = function (t, i) {
                return this.$type.encodeDelimited(t, i)
            }, e.decode = function (t) {
                return this.$type.decode(t)
            }, e.decodeDelimited = function (t) {
                return this.$type.decodeDelimited(t)
            }, e.verify = function (t) {
                return this.$type.verify(t)
            }, e.fromObject = function (t) {
                return this.$type.fromObject(t)
            }, e.toObject = function (t, i) {
                return this.$type.toObject(t, i)
            }, e.prototype.toJSON = function () {
                return this.$type.toObject(this, r.toJSONOptions)
            }
        }, {39: 39}],
        22: [function (t, i, n) {
            i.exports = r;
            var h = t(24),
                a = (((r.prototype = Object.create(h.prototype)).constructor = r).className = "Method", t(37));

            function r(t, i, n, r, e, s, o, u, f) {
                if (a.isObject(e) ? (o = e, e = s = tt) : a.isObject(s) && (o = s, s = tt), i !== tt && !a.isString(i)) throw TypeError("type must be a string");
                if (!a.isString(n)) throw TypeError("requestType must be a string");
                if (!a.isString(r)) throw TypeError("responseType must be a string");
                h.call(this, t, o), this.type = i || "rpc", this.requestType = n, this.requestStream = !!e || tt, this.responseType = r, this.responseStream = !!s || tt, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = u, this.parsedOptions = f
            }

            r.fromJSON = function (t, i) {
                return new r(t, i.type, i.requestType, i.responseType, i.requestStream, i.responseStream, i.options, i.comment, i.parsedOptions)
            }, r.prototype.toJSON = function (t) {
                t = !!t && !!t.keepComments;
                return a.toObject(["type", "rpc" !== this.type && this.type || tt, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", t ? this.comment : tt, "parsedOptions", this.parsedOptions])
            }, r.prototype.resolve = function () {
                return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), h.prototype.resolve.call(this))
            }
        }, {24: 24, 37: 37}],
        23: [function (t, i, n) {
            i.exports = c;
            var e, s, o, r = t(24),
                u = (((c.prototype = Object.create(r.prototype)).constructor = c).className = "Namespace", t(16)),
                f = t(25), h = t(37);

            function a(t, i) {
                if (!t || !t.length) return tt;
                for (var n = {}, r = 0; r < t.length; ++r) n[t[r].name] = t[r].toJSON(i);
                return n
            }

            function c(t, i) {
                r.call(this, t, i), this.nested = tt, this.f = null
            }

            function l(t) {
                return t.f = null, t
            }

            c.fromJSON = function (t, i) {
                return new c(t, i.options).addJSON(i.nested)
            }, c.arrayToJSON = a, c.isReservedId = function (t, i) {
                if (t) for (var n = 0; n < t.length; ++n) if ("string" != typeof t[n] && t[n][0] <= i && t[n][1] > i) return !0;
                return !1
            }, c.isReservedName = function (t, i) {
                if (t) for (var n = 0; n < t.length; ++n) if (t[n] === i) return !0;
                return !1
            }, Object.defineProperty(c.prototype, "nestedArray", {
                get: function () {
                    return this.f || (this.f = h.toArray(this.nested))
                }
            }), c.prototype.toJSON = function (t) {
                return h.toObject(["options", this.options, "nested", a(this.nestedArray, t)])
            }, c.prototype.addJSON = function (t) {
                if (t) for (var i, n = Object.keys(t), r = 0; r < n.length; ++r) i = t[n[r]], this.add((i.fields !== tt ? e : i.values !== tt ? o : i.methods !== tt ? s : i.id !== tt ? u : c).fromJSON(n[r], i));
                return this
            }, c.prototype.get = function (t) {
                return this.nested && this.nested[t] || null
            }, c.prototype.getEnum = function (t) {
                if (this.nested && this.nested[t] instanceof o) return this.nested[t].values;
                throw Error("no such enum: " + t)
            }, c.prototype.add = function (t) {
                if (!(t instanceof u && t.extend !== tt || t instanceof e || t instanceof o || t instanceof s || t instanceof c || t instanceof f)) throw TypeError("object must be a valid nested object");
                if (this.nested) {
                    var i = this.get(t.name);
                    if (i) {
                        if (!(i instanceof c && t instanceof c) || i instanceof e || i instanceof s) throw Error("duplicate name '" + t.name + "' in " + this);
                        for (var n = i.nestedArray, r = 0; r < n.length; ++r) t.add(n[r]);
                        this.remove(i), this.nested || (this.nested = {}), t.setOptions(i.options, !0)
                    }
                } else this.nested = {};
                return (this.nested[t.name] = t).onAdd(this), l(this)
            }, c.prototype.remove = function (t) {
                if (!(t instanceof r)) throw TypeError("object must be a ReflectionObject");
                if (t.parent !== this) throw Error(t + " is not a member of " + this);
                return delete this.nested[t.name], Object.keys(this.nested).length || (this.nested = tt), t.onRemove(this), l(this)
            }, c.prototype.define = function (t, i) {
                if (h.isString(t)) t = t.split("."); else if (!Array.isArray(t)) throw TypeError("illegal path");
                if (t && t.length && "" === t[0]) throw Error("path must be relative");
                for (var n = this; 0 < t.length;) {
                    var r = t.shift();
                    if (n.nested && n.nested[r]) {
                        if (!((n = n.nested[r]) instanceof c)) throw Error("path conflicts with non-namespace objects")
                    } else n.add(n = new c(r))
                }
                return i && n.addJSON(i), n
            }, c.prototype.resolveAll = function () {
                for (var t = this.nestedArray, i = 0; i < t.length;) t[i] instanceof c ? t[i++].resolveAll() : t[i++].resolve();
                return this.resolve()
            }, c.prototype.lookup = function (t, i, n) {
                if ("boolean" == typeof i ? (n = i, i = tt) : i && !Array.isArray(i) && (i = [i]), h.isString(t) && t.length) {
                    if ("." === t) return this.root;
                    t = t.split(".")
                } else if (!t.length) return this;
                if ("" === t[0]) return this.root.lookup(t.slice(1), i);
                var r = this.get(t[0]);
                if (r) {
                    if (1 === t.length) {
                        if (!i || ~i.indexOf(r.constructor)) return r
                    } else if (r instanceof c && (r = r.lookup(t.slice(1), i, !0))) return r
                } else for (var e = 0; e < this.nestedArray.length; ++e) if (this.f[e] instanceof c && (r = this.f[e].lookup(t, i, !0))) return r;
                return null === this.parent || n ? null : this.parent.lookup(t, i)
            }, c.prototype.lookupType = function (t) {
                var i = this.lookup(t, [e]);
                if (i) return i;
                throw Error("no such type: " + t)
            }, c.prototype.lookupEnum = function (t) {
                var i = this.lookup(t, [o]);
                if (i) return i;
                throw Error("no such Enum '" + t + "' in " + this)
            }, c.prototype.lookupTypeOrEnum = function (t) {
                var i = this.lookup(t, [e, o]);
                if (i) return i;
                throw Error("no such Type or Enum '" + t + "' in " + this)
            }, c.prototype.lookupService = function (t) {
                var i = this.lookup(t, [s]);
                if (i) return i;
                throw Error("no such Service '" + t + "' in " + this)
            }, c.u = function (t, i, n) {
                e = t, s = i, o = n
            }
        }, {16: 16, 24: 24, 25: 25, 37: 37}],
        24: [function (t, i, n) {
            (i.exports = e).className = "ReflectionObject";
            var r, o = t(37);

            function e(t, i) {
                if (!o.isString(t)) throw TypeError("name must be a string");
                if (i && !o.isObject(i)) throw TypeError("options must be an object");
                this.options = i, this.parsedOptions = null, this.name = t, this.parent = null, this.resolved = !1, this.comment = null, this.filename = null
            }

            Object.defineProperties(e.prototype, {
                root: {
                    get: function () {
                        for (var t = this; null !== t.parent;) t = t.parent;
                        return t
                    }
                }, fullName: {
                    get: function () {
                        for (var t = [this.name], i = this.parent; i;) t.unshift(i.name), i = i.parent;
                        return t.join(".")
                    }
                }
            }), e.prototype.toJSON = function () {
                throw Error()
            }, e.prototype.onAdd = function (t) {
                this.parent && this.parent !== t && this.parent.remove(this), this.parent = t, this.resolved = !1;
                t = t.root;
                t instanceof r && t.h(this)
            }, e.prototype.onRemove = function (t) {
                t = t.root;
                t instanceof r && t.a(this), this.parent = null, this.resolved = !1
            }, e.prototype.resolve = function () {
                return this.resolved || this.root instanceof r && (this.resolved = !0), this
            }, e.prototype.getOption = function (t) {
                return this.options ? this.options[t] : tt
            }, e.prototype.setOption = function (t, i, n) {
                return n && this.options && this.options[t] !== tt || ((this.options || (this.options = {}))[t] = i), this
            }, e.prototype.setParsedOption = function (i, t, n) {
                this.parsedOptions || (this.parsedOptions = []);
                var r, e, s = this.parsedOptions;
                return n ? (r = s.find(function (t) {
                    return Object.prototype.hasOwnProperty.call(t, i)
                })) ? (e = r[i], o.setProperty(e, n, t)) : ((r = {})[i] = o.setProperty({}, n, t), s.push(r)) : ((e = {})[i] = t, s.push(e)), this
            }, e.prototype.setOptions = function (t, i) {
                if (t) for (var n = Object.keys(t), r = 0; r < n.length; ++r) this.setOption(n[r], t[n[r]], i);
                return this
            }, e.prototype.toString = function () {
                var t = this.constructor.className, i = this.fullName;
                return i.length ? t + " " + i : t
            }, e.u = function (t) {
                r = t
            }
        }, {37: 37}],
        25: [function (t, i, n) {
            i.exports = o;
            var e = t(24),
                r = (((o.prototype = Object.create(e.prototype)).constructor = o).className = "OneOf", t(16)),
                s = t(37);

            function o(t, i, n, r) {
                if (Array.isArray(i) || (n = i, i = tt), e.call(this, t, n), i !== tt && !Array.isArray(i)) throw TypeError("fieldNames must be an Array");
                this.oneof = i || [], this.fieldsArray = [], this.comment = r
            }

            function u(t) {
                if (t.parent) for (var i = 0; i < t.fieldsArray.length; ++i) t.fieldsArray[i].parent || t.parent.add(t.fieldsArray[i])
            }

            o.fromJSON = function (t, i) {
                return new o(t, i.oneof, i.options, i.comment)
            }, o.prototype.toJSON = function (t) {
                t = !!t && !!t.keepComments;
                return s.toObject(["options", this.options, "oneof", this.oneof, "comment", t ? this.comment : tt])
            }, o.prototype.add = function (t) {
                if (t instanceof r) return t.parent && t.parent !== this.parent && t.parent.remove(t), this.oneof.push(t.name), this.fieldsArray.push(t), u(t.partOf = this), this;
                throw TypeError("field must be a Field")
            }, o.prototype.remove = function (t) {
                if (!(t instanceof r)) throw TypeError("field must be a Field");
                var i = this.fieldsArray.indexOf(t);
                if (i < 0) throw Error(t + " is not a member of " + this);
                return this.fieldsArray.splice(i, 1), -1 < (i = this.oneof.indexOf(t.name)) && this.oneof.splice(i, 1), t.partOf = null, this
            }, o.prototype.onAdd = function (t) {
                e.prototype.onAdd.call(this, t);
                for (var i = 0; i < this.oneof.length; ++i) {
                    var n = t.get(this.oneof[i]);
                    n && !n.partOf && (n.partOf = this).fieldsArray.push(n)
                }
                u(this)
            }, o.prototype.onRemove = function (t) {
                for (var i, n = 0; n < this.fieldsArray.length; ++n) (i = this.fieldsArray[n]).parent && i.parent.remove(i);
                e.prototype.onRemove.call(this, t)
            }, o.d = function () {
                for (var n = Array(arguments.length), t = 0; t < arguments.length;) n[t] = arguments[t++];
                return function (t, i) {
                    s.decorateType(t.constructor).add(new o(i, n)), Object.defineProperty(t, i, {
                        get: s.oneOfGetter(n),
                        set: s.oneOfSetter(n)
                    })
                }
            }
        }, {16: 16, 24: 24, 37: 37}],
        26: [function (t, i, n) {
            (i.exports = Y).filename = null, Y.defaults = {keepCase: !1};
            var _ = t(34), M = t(29), I = t(35), F = t(16), L = t(20), U = t(25), q = t(15), R = t(33), z = t(22),
                Z = t(36), B = t(37), P = /^[1-9][0-9]*$/, H = /^-?[1-9][0-9]*$/, X = /^0[x][0-9a-fA-F]+$/,
                C = /^-?0[x][0-9a-fA-F]+$/, D = /^0[0-7]+$/, J = /^-?0[0-7]+$/,
                W = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/, G = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
                K = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
                Q = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;

            function Y(t, i, n) {
                i instanceof M || (n = i, i = new M);
                var r, e, s, o, f, u, h, a = (n = n || Y.defaults).preferTrailingComment || !1,
                    c = _(t, n.alternateCommentMode || !1), l = c.next, d = c.push, p = c.peek, v = c.skip, b = c.cmnt,
                    w = !0, y = !1, m = i, g = n.keepCase ? function (t) {
                        return t
                    } : B.camelCase;

                function j(t, i, n) {
                    var r = Y.filename;
                    return n || (Y.filename = null), Error("illegal " + (i || "token") + " '" + t + "' (" + (r ? r + ", " : "") + "line " + c.line + ")")
                }

                function k() {
                    var t, i = [];
                    do {
                        if ('"' !== (t = l()) && "'" !== t) throw j(t)
                    } while (i.push(l()), v(t), '"' === (t = p()) || "'" === t);
                    return i.join("")
                }

                function O(i) {
                    var n = l();
                    switch (n) {
                        case"'":
                        case'"':
                            return d(n), k();
                        case"true":
                        case"TRUE":
                            return !0;
                        case"false":
                        case"FALSE":
                            return !1
                    }
                    try {
                        var t = n, r = !0, e = 1;
                        switch ("-" == (t[0] || "") && (e = -1, t = t.substring(1)), t) {
                            case"inf":
                            case"INF":
                            case"Inf":
                                return e * (1 / 0);
                            case"nan":
                            case"NAN":
                            case"Nan":
                            case"NaN":
                                return NaN;
                            case"0":
                                return 0
                        }
                        if (P.test(t)) return e * parseInt(t, 10);
                        if (X.test(t)) return e * parseInt(t, 16);
                        if (D.test(t)) return e * parseInt(t, 8);
                        if (W.test(t)) return e * parseFloat(t);
                        throw j(t, "number", r)
                    } catch (t) {
                        if (i && K.test(n)) return n;
                        throw j(n, "value")
                    }
                }

                function E(t, i) {
                    for (var n; !i || '"' !== (n = p()) && "'" !== n ? t.push([n = A(l()), v("to", !0) ? A(l()) : n]) : t.push(k()), v(",", !0);) ;
                    v(";")
                }

                function A(t, i) {
                    switch (t) {
                        case"max":
                        case"MAX":
                        case"Max":
                            return 536870911;
                        case"0":
                            return 0
                    }
                    if (!i && "-" == (t[0] || "")) throw j(t, "id");
                    if (H.test(t)) return parseInt(t, 10);
                    if (C.test(t)) return parseInt(t, 16);
                    if (J.test(t)) return parseInt(t, 8);
                    throw j(t, "id")
                }

                function x(t, i) {
                    switch (i) {
                        case"option":
                            return N(t, i), v(";"), 1;
                        case"message":
                            var n = t, r = i;
                            if (!G.test(r = l())) throw j(r, "type name");
                            var u = new I(r);
                            return T(u, function (t) {
                                if (!x(u, t)) switch (t) {
                                    case"map":
                                        var i = u, n = (v("<"), l());
                                        if (Z.mapKey[n] === tt) throw j(n, "type");
                                        v(",");
                                        var r = l();
                                        if (!K.test(r)) throw j(r, "type");
                                        v(">");
                                        var e = l();
                                        if (!G.test(e)) throw j(e, "name");
                                        v("=");
                                        var s = new L(g(e), A(l()), n, r);
                                        T(s, function (t) {
                                            if ("option" !== t) throw j(t);
                                            N(s, t), v(";")
                                        }, function () {
                                            $(s)
                                        }), i.add(s);
                                        break;
                                    case"required":
                                    case"repeated":
                                        S(u, t);
                                        break;
                                    case"optional":
                                        S(u, y ? "proto3_optional" : "optional");
                                        break;
                                    case"oneof":
                                        e = u, n = t;
                                        if (!G.test(n = l())) throw j(n, "name");
                                        var o = new U(g(n));
                                        T(o, function (t) {
                                            "option" === t ? (N(o, t), v(";")) : (d(t), S(o, "optional"))
                                        }), e.add(o);
                                        break;
                                    case"extensions":
                                        E(u.extensions || (u.extensions = []));
                                        break;
                                    case"reserved":
                                        E(u.reserved || (u.reserved = []), !0);
                                        break;
                                    default:
                                        if (!y || !K.test(t)) throw j(t);
                                        d(t), S(u, "optional")
                                }
                            }), n.add(u), 1;
                        case"enum":
                            r = t, n = i;
                            if (!G.test(n = l())) throw j(n, "name");
                            var s = new q(n);
                            return T(s, function (t) {
                                switch (t) {
                                    case"option":
                                        N(s, t), v(";");
                                        break;
                                    case"reserved":
                                        E(s.reserved || (s.reserved = []), !0);
                                        break;
                                    default:
                                        var i = s, n = t;
                                        if (!G.test(n)) throw j(n, "name");
                                        v("=");
                                        var r = A(l(), !0), e = {};
                                        T(e, function (t) {
                                            if ("option" !== t) throw j(t);
                                            N(e, t), v(";")
                                        }, function () {
                                            $(e)
                                        }), i.add(n, r, e.comment)
                                }
                            }), r.add(s), 1;
                        case"service":
                            var e = t, o = i;
                            if (!G.test(o = l())) throw j(o, "service name");
                            var h = new R(o);
                            return T(h, function (t) {
                                if (!x(h, t)) {
                                    if ("rpc" !== t) throw j(t);
                                    var i = h, n = b(), r = t;
                                    if (!G.test(t = l())) throw j(t, "name");
                                    var e, s, o, u = t;
                                    if (v("("), v("stream", !0) && (s = !0), !K.test(t = l())) throw j(t);
                                    if (e = t, v(")"), v("returns"), v("("), v("stream", !0) && (o = !0), !K.test(t = l())) throw j(t);
                                    t = t, v(")");
                                    var f = new z(u, r, e, t, s, o);
                                    f.comment = n, T(f, function (t) {
                                        if ("option" !== t) throw j(t);
                                        N(f, t), v(";")
                                    }), i.add(f)
                                }
                            }), e.add(h), 1;
                        case"extend":
                            var f = t, o = i;
                            if (!K.test(o = l())) throw j(o, "reference");
                            var a = o;
                            return T(null, function (t) {
                                switch (t) {
                                    case"required":
                                    case"repeated":
                                        S(f, t, a);
                                        break;
                                    case"optional":
                                        S(f, y ? "proto3_optional" : "optional", a);
                                        break;
                                    default:
                                        if (!y || !K.test(t)) throw j(t);
                                        d(t), S(f, "optional", a)
                                }
                            }), 1
                    }
                }

                function T(t, i, n) {
                    var r, e = c.line;
                    if (t && ("string" != typeof t.comment && (t.comment = b()), t.filename = Y.filename), v("{", !0)) {
                        for (; "}" !== (r = l());) i(r);
                        v(";", !0)
                    } else n && n(), v(";"), t && ("string" != typeof t.comment || a) && (t.comment = b(e) || t.comment)
                }

                function S(t, i, n) {
                    var r = l();
                    if ("group" === r) {
                        var e = t, s = i, o = l();
                        if (!G.test(o)) throw j(o, "name");
                        var u = B.lcFirst(o), f = (o === u && (o = B.ucFirst(o)), v("="), A(l())), h = new I(o);
                        return h.group = !0, (u = new F(u, f, o, s)).filename = Y.filename, T(h, function (t) {
                            switch (t) {
                                case"option":
                                    N(h, t), v(";");
                                    break;
                                case"required":
                                case"repeated":
                                    S(h, t);
                                    break;
                                case"optional":
                                    S(h, y ? "proto3_optional" : "optional");
                                    break;
                                default:
                                    throw j(t)
                            }
                        }), void e.add(h).add(u)
                    }
                    if (!K.test(r)) throw j(r, "type");
                    f = l();
                    if (!G.test(f)) throw j(f, "name");
                    f = g(f), v("=");
                    var a = new F(f, A(l()), r, i, n);
                    T(a, function (t) {
                        if ("option" !== t) throw j(t);
                        N(a, t), v(";")
                    }, function () {
                        $(a)
                    }), "proto3_optional" === i ? (o = new U("_" + f), a.setOption("proto3_optional", !0), o.add(a), t.add(o)) : t.add(a), y || !a.repeated || Z.packed[r] === tt && Z.basic[r] !== tt || a.setOption("packed", !1, !0)
                }

                function N(t, i) {
                    var n = v("(", !0);
                    if (!K.test(i = l())) throw j(i, "name");
                    var r, e = i, s = e,
                        n = (n && (v(")"), s = e = "(" + e + ")", i = p(), Q.test(i) && (r = i.substr(1), e += i, l())), v("="), function t(i, n) {
                            if (v("{", !0)) {
                                for (var r = {}; !v("}", !0);) {
                                    if (!G.test(f = l())) throw j(f, "name");
                                    var e, s = f,
                                        o = ("{" === p() ? e = t(i, n + "." + f) : (v(":"), "{" === p() ? e = t(i, n + "." + f) : (e = O(!0), V(i, n + "." + f, e))), r[s]);
                                    o && (e = [].concat(o).concat(e)), r[s] = e, v(",", !0)
                                }
                                return r
                            }
                            var u = O(!0);
                            V(i, n, u);
                            return u
                        }(t, e));
                    i = s, e = n, s = r, (n = t).setParsedOption && n.setParsedOption(i, e, s)
                }

                function V(t, i, n) {
                    t.setOption && t.setOption(i, n)
                }

                function $(t) {
                    if (v("[", !0)) {
                        for (; N(t, "option"), v(",", !0);) ;
                        v("]")
                    }
                }

                for (; null !== (f = l());) switch (f) {
                    case"package":
                        if (!w) throw j(f);
                        if (r !== tt) throw j("package");
                        if (r = l(), !K.test(r)) throw j(r, "name");
                        m = m.define(r), v(";");
                        break;
                    case"import":
                        if (!w) throw j(f);
                        switch (h = u = void 0, p()) {
                            case"weak":
                                h = s = s || [], l();
                                break;
                            case"public":
                                l();
                            default:
                                h = e = e || []
                        }
                        u = k(), v(";"), h.push(u);
                        break;
                    case"syntax":
                        if (!w) throw j(f);
                        if (v("="), o = k(), !(y = "proto3" === o) && "proto2" !== o) throw j(o, "syntax");
                        v(";");
                        break;
                    case"option":
                        N(m, f), v(";");
                        break;
                    default:
                        if (x(m, f)) {
                            w = !1;
                            continue
                        }
                        throw j(f)
                }
                return Y.filename = null, {package: r, imports: e, weakImports: s, syntax: o, root: i}
            }
        }, {15: 15, 16: 16, 20: 20, 22: 22, 25: 25, 29: 29, 33: 33, 34: 34, 35: 35, 36: 36, 37: 37}],
        27: [function (t, i, n) {
            i.exports = f;
            var r, e = t(39), s = e.LongBits, o = e.utf8;

            function u(t, i) {
                return RangeError("index out of range: " + t.pos + " + " + (i || 1) + " > " + t.len)
            }

            function f(t) {
                this.buf = t, this.pos = 0, this.len = t.length
            }

            function h() {
                return e.Buffer ? function (t) {
                    return (f.create = function (t) {
                        return e.Buffer.isBuffer(t) ? new r(t) : c(t)
                    })(t)
                } : c
            }

            var a, c = "undefined" != typeof Uint8Array ? function (t) {
                if (t instanceof Uint8Array || Array.isArray(t)) return new f(t);
                throw Error("illegal buffer")
            } : function (t) {
                if (Array.isArray(t)) return new f(t);
                throw Error("illegal buffer")
            };

            function l() {
                var t = new s(0, 0), i = 0;
                if (!(4 < this.len - this.pos)) {
                    for (; i < 3; ++i) {
                        if (this.pos >= this.len) throw u(this);
                        if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * i) >>> 0, this.buf[this.pos++] < 128) return t
                    }
                    return t.lo = (t.lo | (127 & this.buf[this.pos++]) << 7 * i) >>> 0, t
                }
                for (; i < 4; ++i) if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * i) >>> 0, this.buf[this.pos++] < 128) return t;
                if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 28) >>> 0, t.hi = (t.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) return t;
                if (i = 0, 4 < this.len - this.pos) {
                    for (; i < 5; ++i) if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * i + 3) >>> 0, this.buf[this.pos++] < 128) return t
                } else for (; i < 5; ++i) {
                    if (this.pos >= this.len) throw u(this);
                    if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * i + 3) >>> 0, this.buf[this.pos++] < 128) return t
                }
                throw Error("invalid varint encoding")
            }

            function d(t, i) {
                return (t[i - 4] | t[i - 3] << 8 | t[i - 2] << 16 | t[i - 1] << 24) >>> 0
            }

            function p() {
                if (this.pos + 8 > this.len) throw u(this, 8);
                return new s(d(this.buf, this.pos += 4), d(this.buf, this.pos += 4))
            }

            f.create = h(), f.prototype.c = e.Array.prototype.subarray || e.Array.prototype.slice, f.prototype.uint32 = (a = 4294967295, function () {
                if (a = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) return a;
                if (a = (a | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) return a;
                if (a = (a | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) return a;
                if (a = (a | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) return a;
                if (a = (a | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) return a;
                if ((this.pos += 5) > this.len) throw this.pos = this.len, u(this, 10);
                return a
            }), f.prototype.int32 = function () {
                return 0 | this.uint32()
            }, f.prototype.sint32 = function () {
                var t = this.uint32();
                return t >>> 1 ^ -(1 & t) | 0
            }, f.prototype.bool = function () {
                return 0 !== this.uint32()
            }, f.prototype.fixed32 = function () {
                if (this.pos + 4 > this.len) throw u(this, 4);
                return d(this.buf, this.pos += 4)
            }, f.prototype.sfixed32 = function () {
                if (this.pos + 4 > this.len) throw u(this, 4);
                return 0 | d(this.buf, this.pos += 4)
            }, f.prototype.float = function () {
                if (this.pos + 4 > this.len) throw u(this, 4);
                var t = e.float.readFloatLE(this.buf, this.pos);
                return this.pos += 4, t
            }, f.prototype.double = function () {
                if (this.pos + 8 > this.len) throw u(this, 4);
                var t = e.float.readDoubleLE(this.buf, this.pos);
                return this.pos += 8, t
            }, f.prototype.bytes = function () {
                var t = this.uint32(), i = this.pos, n = this.pos + t;
                if (n > this.len) throw u(this, t);
                return this.pos += t, Array.isArray(this.buf) ? this.buf.slice(i, n) : i === n ? new this.buf.constructor(0) : this.c.call(this.buf, i, n)
            }, f.prototype.string = function () {
                var t = this.bytes();
                return o.read(t, 0, t.length)
            }, f.prototype.skip = function (t) {
                if ("number" == typeof t) {
                    if (this.pos + t > this.len) throw u(this, t);
                    this.pos += t
                } else do {
                    if (this.pos >= this.len) throw u(this)
                } while (128 & this.buf[this.pos++]);
                return this
            }, f.prototype.skipType = function (t) {
                switch (t) {
                    case 0:
                        this.skip();
                        break;
                    case 1:
                        this.skip(8);
                        break;
                    case 2:
                        this.skip(this.uint32());
                        break;
                    case 3:
                        for (; 4 != (t = 7 & this.uint32());) this.skipType(t);
                        break;
                    case 5:
                        this.skip(4);
                        break;
                    default:
                        throw Error("invalid wire type " + t + " at offset " + this.pos)
                }
                return this
            }, f.u = function (t) {
                r = t, f.create = h(), r.u();
                var i = e.Long ? "toLong" : "toNumber";
                e.merge(f.prototype, {
                    int64: function () {
                        return l.call(this)[i](!1)
                    }, uint64: function () {
                        return l.call(this)[i](!0)
                    }, sint64: function () {
                        return l.call(this).zzDecode()[i](!1)
                    }, fixed64: function () {
                        return p.call(this)[i](!0)
                    }, sfixed64: function () {
                        return p.call(this)[i](!1)
                    }
                })
            }
        }, {39: 39}],
        28: [function (t, i, n) {
            i.exports = s;
            var r = t(27), e = ((s.prototype = Object.create(r.prototype)).constructor = s, t(39));

            function s(t) {
                r.call(this, t)
            }

            s.u = function () {
                e.Buffer && (s.prototype.c = e.Buffer.prototype.slice)
            }, s.prototype.string = function () {
                var t = this.uint32();
                return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + t, this.len))
            }, s.u()
        }, {27: 27, 39: 39}],
        29: [function (t, i, n) {
            i.exports = f;
            var r, d, p, e = t(23),
                s = (((f.prototype = Object.create(e.prototype)).constructor = f).className = "Root", t(16)), o = t(15),
                u = t(25), v = t(37);

            function f(t) {
                e.call(this, "", t), this.deferred = [], this.files = []
            }

            function b() {
            }

            f.fromJSON = function (t, i) {
                return i = i || new f, t.options && i.setOptions(t.options), i.addJSON(t.nested)
            }, f.prototype.resolvePath = v.path.resolve, f.prototype.fetch = v.fetch, f.prototype.load = function t(i, s, e) {
                "function" == typeof s && (e = s, s = tt);
                var o = this;
                if (!e) return v.asPromise(t, o, i, s);
                var u = e === b;

                function f(t, i) {
                    if (e) {
                        var n = e;
                        if (e = null, u) throw t;
                        n(t, i)
                    }
                }

                function h(t) {
                    var i = t.lastIndexOf("google/protobuf/");
                    if (-1 < i) {
                        t = t.substring(i);
                        if (t in p) return t
                    }
                    return null
                }

                function a(t, i) {
                    try {
                        if (v.isString(i) && "{" == (i[0] || "") && (i = JSON.parse(i)), v.isString(i)) {
                            d.filename = t;
                            var n, r = d(i, o, s), e = 0;
                            if (r.imports) for (; e < r.imports.length; ++e) (n = h(r.imports[e]) || o.resolvePath(t, r.imports[e])) && c(n);
                            if (r.weakImports) for (e = 0; e < r.weakImports.length; ++e) (n = h(r.weakImports[e]) || o.resolvePath(t, r.weakImports[e])) && c(n, !0)
                        } else o.setOptions(i.options).addJSON(i.nested)
                    } catch (t) {
                        f(t)
                    }
                    u || l || f(null, o)
                }

                function c(n, r) {
                    if (!~o.files.indexOf(n)) if (o.files.push(n), n in p) u ? a(n, p[n]) : (++l, setTimeout(function () {
                        --l, a(n, p[n])
                    })); else if (u) {
                        var t;
                        try {
                            t = v.fs.readFileSync(n).toString("utf8")
                        } catch (t) {
                            return void (r || f(t))
                        }
                        a(n, t)
                    } else ++l, o.fetch(n, function (t, i) {
                        --l, e && (t ? r ? l || f(null, o) : f(t) : a(n, i))
                    })
                }

                var l = 0;
                v.isString(i) && (i = [i]);
                for (var n, r = 0; r < i.length; ++r) (n = o.resolvePath("", i[r])) && c(n);
                return u ? o : (l || f(null, o), tt)
            }, f.prototype.loadSync = function (t, i) {
                if (v.isNode) return this.load(t, i, b);
                throw Error("not supported")
            }, f.prototype.resolveAll = function () {
                if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map(function (t) {
                    return "'extend " + t.extend + "' in " + t.parent.fullName
                }).join(", "));
                return e.prototype.resolveAll.call(this)
            };
            var h = /^[A-Z]/;

            function a(t, i) {
                var n, r = i.parent.lookup(i.extend);
                if (r) return ((n = new s(i.fullName, i.id, i.type, i.rule, tt, i.options)).declaringField = i).extensionField = n, r.add(n), 1
            }

            f.prototype.h = function (t) {
                if (t instanceof s) t.extend === tt || t.extensionField || a(0, t) || this.deferred.push(t); else if (t instanceof o) h.test(t.name) && (t.parent[t.name] = t.values); else if (!(t instanceof u)) {
                    if (t instanceof r) for (var i = 0; i < this.deferred.length;) a(0, this.deferred[i]) ? this.deferred.splice(i, 1) : ++i;
                    for (var n = 0; n < t.nestedArray.length; ++n) this.h(t.f[n]);
                    h.test(t.name) && (t.parent[t.name] = t)
                }
            }, f.prototype.a = function (t) {
                var i;
                if (t instanceof s) t.extend !== tt && (t.extensionField ? (t.extensionField.parent.remove(t.extensionField), t.extensionField = null) : -1 < (i = this.deferred.indexOf(t)) && this.deferred.splice(i, 1)); else if (t instanceof o) h.test(t.name) && delete t.parent[t.name]; else if (t instanceof e) {
                    for (var n = 0; n < t.nestedArray.length; ++n) this.a(t.f[n]);
                    h.test(t.name) && delete t.parent[t.name]
                }
            }, f.u = function (t, i, n) {
                r = t, d = i, p = n
            }
        }, {15: 15, 16: 16, 23: 23, 25: 25, 37: 37}],
        30: [function (t, i, n) {
            i.exports = {}
        }, {}],
        31: [function (t, i, n) {
            n.Service = t(32)
        }, {32: 32}],
        32: [function (t, i, n) {
            i.exports = r;
            var u = t(39);

            function r(t, i, n) {
                if ("function" != typeof t) throw TypeError("rpcImpl must be a function");
                u.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = !!i, this.responseDelimited = !!n
            }

            ((r.prototype = Object.create(u.EventEmitter.prototype)).constructor = r).prototype.rpcCall = function t(n, i, r, e, s) {
                if (!e) throw TypeError("request must be specified");
                var o = this;
                if (!s) return u.asPromise(t, o, n, i, r, e);
                if (!o.rpcImpl) return setTimeout(function () {
                    s(Error("already ended"))
                }, 0), tt;
                try {
                    return o.rpcImpl(n, i[o.requestDelimited ? "encodeDelimited" : "encode"](e).finish(), function (t, i) {
                        if (t) return o.emit("error", t, n), s(t);
                        if (null === i) return o.end(!0), tt;
                        if (!(i instanceof r)) try {
                            i = r[o.responseDelimited ? "decodeDelimited" : "decode"](i)
                        } catch (t) {
                            return o.emit("error", t, n), s(t)
                        }
                        return o.emit("data", i, n), s(null, i)
                    })
                } catch (t) {
                    return o.emit("error", t, n), setTimeout(function () {
                        s(t)
                    }, 0), tt
                }
            }, r.prototype.end = function (t) {
                return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this
            }
        }, {39: 39}],
        33: [function (t, i, n) {
            i.exports = o;
            var r = t(23),
                s = (((o.prototype = Object.create(r.prototype)).constructor = o).className = "Service", t(22)),
                u = t(37), f = t(31);

            function o(t, i) {
                r.call(this, t, i), this.methods = {}, this.l = null
            }

            function e(t) {
                return t.l = null, t
            }

            o.fromJSON = function (t, i) {
                var n = new o(t, i.options);
                if (i.methods) for (var r = Object.keys(i.methods), e = 0; e < r.length; ++e) n.add(s.fromJSON(r[e], i.methods[r[e]]));
                return i.nested && n.addJSON(i.nested), n.comment = i.comment, n
            }, o.prototype.toJSON = function (t) {
                var i = r.prototype.toJSON.call(this, t), n = !!t && !!t.keepComments;
                return u.toObject(["options", i && i.options || tt, "methods", r.arrayToJSON(this.methodsArray, t) || {}, "nested", i && i.nested || tt, "comment", n ? this.comment : tt])
            }, Object.defineProperty(o.prototype, "methodsArray", {
                get: function () {
                    return this.l || (this.l = u.toArray(this.methods))
                }
            }), o.prototype.get = function (t) {
                return this.methods[t] || r.prototype.get.call(this, t)
            }, o.prototype.resolveAll = function () {
                for (var t = this.methodsArray, i = 0; i < t.length; ++i) t[i].resolve();
                return r.prototype.resolve.call(this)
            }, o.prototype.add = function (t) {
                if (this.get(t.name)) throw Error("duplicate name '" + t.name + "' in " + this);
                return t instanceof s ? e((this.methods[t.name] = t).parent = this) : r.prototype.add.call(this, t)
            }, o.prototype.remove = function (t) {
                if (t instanceof s) {
                    if (this.methods[t.name] !== t) throw Error(t + " is not a member of " + this);
                    return delete this.methods[t.name], t.parent = null, e(this)
                }
                return r.prototype.remove.call(this, t)
            }, o.prototype.create = function (t, i, n) {
                for (var r, e = new f.Service(t, i, n), s = 0; s < this.methodsArray.length; ++s) {
                    var o = u.lcFirst((r = this.l[s]).resolve().name).replace(/[^$\w_]/g, "");
                    e[o] = u.codegen(["r", "c"], u.isReserved(o) ? o + "_" : o)("return this.rpcCall(m,q,s,r,c)")({
                        m: r,
                        q: r.resolvedRequestType.ctor,
                        s: r.resolvedResponseType.ctor
                    })
                }
                return e
            }
        }, {22: 22, 23: 23, 31: 31, 37: 37}],
        34: [function (t, i, n) {
            i.exports = s;
            var A = /[\s{}=;:[\],'"()<>]/g, x = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
                T = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g, S = /^ *[*/]+ */, N = /^\s*\*?\/*/, V = /\n/g, $ = /\s/,
                r = /\\(.?)/g, e = {0: "\0", r: "\r", n: "\n", t: "\t"};

            function _(t) {
                return t.replace(r, function (t, i) {
                    switch (i) {
                        case"\\":
                        case"":
                            return i;
                        default:
                            return e[i] || ""
                    }
                })
            }

            function s(h, a) {
                h = h.toString();
                var c = 0, l = h.length, d = 1, u = null, f = null, p = 0, v = !1, b = !1, w = [], y = null;

                function m(t) {
                    return Error("illegal " + t + " (line " + d + ")")
                }

                function g(t) {
                    return h[0 | t] || ""
                }

                function j(t, i, n) {
                    u = h[0 | t++] || "", p = d, v = !1, b = n;
                    var r, e = t - (a ? 2 : 3);
                    do {
                        if (--e < 0 || "\n" == (r = h[0 | e] || "")) {
                            v = !0;
                            break
                        }
                    } while (" " === r || "\t" === r);
                    for (var s = h.substring(t, i).split(V), o = 0; o < s.length; ++o) s[o] = s[o].replace(a ? N : S, "").trim();
                    f = s.join("\n").trim()
                }

                function k(t) {
                    var i = O(t), t = h.substring(t, i);
                    return /^\s*\/{1,2}/.test(t)
                }

                function O(t) {
                    for (var i = t; i < l && "\n" !== g(i);) i++;
                    return i
                }

                function r() {
                    if (0 < w.length) return w.shift();
                    if (y) {
                        var t = "'" === y ? T : x, i = (t.lastIndex = c - 1, t.exec(h));
                        if (i) return c = t.lastIndex, E(y), y = null, _(i[1]);
                        throw m("string")
                    }
                    var n, r, e, s, o, u = 0 === c;
                    do {
                        if (c === l) return null;
                        for (n = !1; $.test(e = g(c));) if ("\n" === e && (u = !0, ++d), ++c === l) return null;
                        if ("/" === g(c)) {
                            if (++c === l) throw m("comment");
                            if ("/" === g(c)) if (a) {
                                if (o = !1, k(s = c)) for (o = !0; (c = O(c)) !== l && k(++c);) ; else c = Math.min(l, O(c) + 1);
                                o && j(s, c, u), d++, n = !0
                            } else {
                                for (o = "/" === g(s = c + 1); "\n" !== g(++c);) if (c === l) return null;
                                ++c, o && j(s, c - 1, u), ++d, n = !0
                            } else {
                                if ("*" !== (e = g(c))) return "/";
                                s = c + 1, o = a || "*" === g(s);
                                do {
                                    if ("\n" === e && ++d, ++c === l) throw m("comment")
                                } while (r = e, e = g(c), "*" !== r || "/" !== e);
                                ++c, o && j(s, c - 2, u), n = !0
                            }
                        }
                    } while (n);
                    var f = c;
                    if (A.lastIndex = 0, !A.test(g(f++))) for (; f < l && !A.test(g(f));) ++f;
                    t = h.substring(c, c = f);
                    return '"' != t && "'" != t || (y = t), t
                }

                function E(t) {
                    w.push(t)
                }

                function e() {
                    if (!w.length) {
                        var t = r();
                        if (null === t) return null;
                        E(t)
                    }
                    return w[0]
                }

                return Object.defineProperty({
                    next: r, peek: e, push: E, skip: function (t, i) {
                        var n = e();
                        if (n === t) return r(), !0;
                        if (i) return !1;
                        throw m("token '" + n + "', '" + t + "' expected")
                    }, cmnt: function (t) {
                        var i = null;
                        return t === tt ? p === d - 1 && (a || "*" === u || v) && (i = b ? f : null) : (p < t && e(), p !== t || v || !a && "/" !== u || (i = b ? null : f)), i
                    }
                }, "line", {
                    get: function () {
                        return d
                    }
                })
            }

            s.unescape = _
        }, {}],
        35: [function (t, i, n) {
            i.exports = m;
            var o = t(23), u = (((m.prototype = Object.create(o.prototype)).constructor = m).className = "Type", t(15)),
                f = t(25), h = t(16), a = t(20), c = t(33), e = t(21), s = t(27), l = t(42), d = t(37), p = t(14),
                v = t(13), b = t(40), w = t(12), y = t(41);

            function m(t, i) {
                o.call(this, t, i), this.fields = {}, this.oneofs = tt, this.extensions = tt, this.reserved = tt, this.group = tt, this.p = null, this.e = null, this.v = null, this.b = null
            }

            function r(t) {
                return t.p = t.e = t.v = null, delete t.encode, delete t.decode, delete t.verify, t
            }

            Object.defineProperties(m.prototype, {
                fieldsById: {
                    get: function () {
                        if (this.p) return this.p;
                        this.p = {};
                        for (var t = Object.keys(this.fields), i = 0; i < t.length; ++i) {
                            var n = this.fields[t[i]], r = n.id;
                            if (this.p[r]) throw Error("duplicate id " + r + " in " + this);
                            this.p[r] = n
                        }
                        return this.p
                    }
                }, fieldsArray: {
                    get: function () {
                        return this.e || (this.e = d.toArray(this.fields))
                    }
                }, oneofsArray: {
                    get: function () {
                        return this.v || (this.v = d.toArray(this.oneofs))
                    }
                }, ctor: {
                    get: function () {
                        return this.b || (this.ctor = m.generateConstructor(this)())
                    }, set: function (t) {
                        for (var i = t.prototype, n = (i instanceof e || ((t.prototype = new e).constructor = t, d.merge(t.prototype, i)), t.$type = t.prototype.$type = this, d.merge(t, e, !0), this.b = t, 0); n < this.fieldsArray.length; ++n) this.e[n].resolve();
                        for (var r = {}, n = 0; n < this.oneofsArray.length; ++n) r[this.v[n].resolve().name] = {
                            get: d.oneOfGetter(this.v[n].oneof),
                            set: d.oneOfSetter(this.v[n].oneof)
                        };
                        n && Object.defineProperties(t.prototype, r)
                    }
                }
            }), m.generateConstructor = function (t) {
                for (var i, n = d.codegen(["p"], t.name), r = 0; r < t.fieldsArray.length; ++r) (i = t.e[r]).map ? n("this%s={}", d.safeProp(i.name)) : i.repeated && n("this%s=[]", d.safeProp(i.name));
                return n("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]")
            }, m.fromJSON = function (t, i) {
                for (var n = new m(t, i.options), r = (n.extensions = i.extensions, n.reserved = i.reserved, Object.keys(i.fields)), e = 0; e < r.length; ++e) n.add((void 0 !== i.fields[r[e]].keyType ? a : h).fromJSON(r[e], i.fields[r[e]]));
                if (i.oneofs) for (r = Object.keys(i.oneofs), e = 0; e < r.length; ++e) n.add(f.fromJSON(r[e], i.oneofs[r[e]]));
                if (i.nested) for (r = Object.keys(i.nested), e = 0; e < r.length; ++e) {
                    var s = i.nested[r[e]];
                    n.add((s.id !== tt ? h : s.fields !== tt ? m : s.values !== tt ? u : s.methods !== tt ? c : o).fromJSON(r[e], s))
                }
                return i.extensions && i.extensions.length && (n.extensions = i.extensions), i.reserved && i.reserved.length && (n.reserved = i.reserved), i.group && (n.group = !0), i.comment && (n.comment = i.comment), n
            }, m.prototype.toJSON = function (t) {
                var i = o.prototype.toJSON.call(this, t), n = !!t && !!t.keepComments;
                return d.toObject(["options", i && i.options || tt, "oneofs", o.arrayToJSON(this.oneofsArray, t), "fields", o.arrayToJSON(this.fieldsArray.filter(function (t) {
                    return !t.declaringField
                }), t) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : tt, "reserved", this.reserved && this.reserved.length ? this.reserved : tt, "group", this.group || tt, "nested", i && i.nested || tt, "comment", n ? this.comment : tt])
            }, m.prototype.resolveAll = function () {
                for (var t = this.fieldsArray, i = 0; i < t.length;) t[i++].resolve();
                for (var n = this.oneofsArray, i = 0; i < n.length;) n[i++].resolve();
                return o.prototype.resolveAll.call(this)
            }, m.prototype.get = function (t) {
                return this.fields[t] || this.oneofs && this.oneofs[t] || this.nested && this.nested[t] || null
            }, m.prototype.add = function (t) {
                if (this.get(t.name)) throw Error("duplicate name '" + t.name + "' in " + this);
                if (t instanceof h && t.extend === tt) {
                    if ((this.p || this.fieldsById)[t.id]) throw Error("duplicate id " + t.id + " in " + this);
                    if (this.isReservedId(t.id)) throw Error("id " + t.id + " is reserved in " + this);
                    if (this.isReservedName(t.name)) throw Error("name '" + t.name + "' is reserved in " + this);
                    return t.parent && t.parent.remove(t), (this.fields[t.name] = t).message = this, t.onAdd(this), r(this)
                }
                return t instanceof f ? (this.oneofs || (this.oneofs = {}), (this.oneofs[t.name] = t).onAdd(this), r(this)) : o.prototype.add.call(this, t)
            }, m.prototype.remove = function (t) {
                if (t instanceof h && t.extend === tt) {
                    if (this.fields && this.fields[t.name] === t) return delete this.fields[t.name], t.parent = null, t.onRemove(this), r(this);
                    throw Error(t + " is not a member of " + this)
                }
                if (t instanceof f) {
                    if (this.oneofs && this.oneofs[t.name] === t) return delete this.oneofs[t.name], t.parent = null, t.onRemove(this), r(this);
                    throw Error(t + " is not a member of " + this)
                }
                return o.prototype.remove.call(this, t)
            }, m.prototype.isReservedId = function (t) {
                return o.isReservedId(this.reserved, t)
            }, m.prototype.isReservedName = function (t) {
                return o.isReservedName(this.reserved, t)
            }, m.prototype.create = function (t) {
                return new this.ctor(t)
            }, m.prototype.setup = function () {
                for (var t = this.fullName, i = [], n = 0; n < this.fieldsArray.length; ++n) i.push(this.e[n].resolve().resolvedType);
                this.encode = p(this)({Writer: l, types: i, util: d}), this.decode = v(this)({
                    Reader: s,
                    types: i,
                    util: d
                }), this.verify = b(this)({types: i, util: d}), this.fromObject = w.fromObject(this)({
                    types: i,
                    util: d
                }), this.toObject = w.toObject(this)({types: i, util: d});
                var r, t = y[t];
                return t && ((r = Object.create(this)).fromObject = this.fromObject, this.fromObject = t.fromObject.bind(r), r.toObject = this.toObject, this.toObject = t.toObject.bind(r)), this
            }, m.prototype.encode = function (t, i) {
                return this.setup().encode(t, i)
            }, m.prototype.encodeDelimited = function (t, i) {
                return this.encode(t, i && i.len ? i.fork() : i).ldelim()
            }, m.prototype.decode = function (t, i) {
                return this.setup().decode(t, i)
            }, m.prototype.decodeDelimited = function (t) {
                return t instanceof s || (t = s.create(t)), this.decode(t, t.uint32())
            }, m.prototype.verify = function (t) {
                return this.setup().verify(t)
            }, m.prototype.fromObject = function (t) {
                return this.setup().fromObject(t)
            }, m.prototype.toObject = function (t, i) {
                return this.setup().toObject(t, i)
            }, m.d = function (i) {
                return function (t) {
                    d.decorateType(t, i)
                }
            }
        }, {
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            20: 20,
            21: 21,
            23: 23,
            25: 25,
            27: 27,
            33: 33,
            37: 37,
            40: 40,
            41: 41,
            42: 42
        }],
        36: [function (t, i, n) {
            var t = t(37),
                e = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];

            function r(t, i) {
                var n = 0, r = {};
                for (i |= 0; n < t.length;) r[e[n + i]] = t[n++];
                return r
            }

            n.basic = r([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]), n.defaults = r([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", t.emptyArray, null]), n.long = r([0, 0, 0, 1, 1], 7), n.mapKey = r([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2), n.packed = r([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0])
        }, {37: 37}],
        37: [function (n, t, i) {
            var r, e, s = t.exports = n(39), o = n(30),
                u = (s.codegen = n(3), s.fetch = n(5), s.path = n(8), s.fs = s.inquire("fs"), s.toArray = function (t) {
                    if (t) {
                        for (var i = Object.keys(t), n = Array(i.length), r = 0; r < i.length;) n[r] = t[i[r++]];
                        return n
                    }
                    return []
                }, s.toObject = function (t) {
                    for (var i = {}, n = 0; n < t.length;) {
                        var r = t[n++], e = t[n++];
                        e !== tt && (i[r] = e)
                    }
                    return i
                }, /\\/g), f = /"/g, h = (s.isReserved = function (t) {
                    return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(t)
                }, s.safeProp = function (t) {
                    return !/^[$\w_]+$/.test(t) || s.isReserved(t) ? '["' + t.replace(u, "\\\\").replace(f, '\\"') + '"]' : "." + t
                }, s.ucFirst = function (t) {
                    return (t[0] || "").toUpperCase() + t.substring(1)
                }, /_([a-z])/g), a = (s.camelCase = function (t) {
                    return t.substring(0, 1) + t.substring(1).replace(h, function (t, i) {
                        return i.toUpperCase()
                    })
                }, s.compareFieldsById = function (t, i) {
                    return t.id - i.id
                }, s.decorateType = function (t, i) {
                    if (t.$type) return i && t.$type.name !== i && (s.decorateRoot.remove(t.$type), t.$type.name = i, s.decorateRoot.add(t.$type)), t.$type;
                    i = new (r = r || n(35))(i || t.name);
                    return s.decorateRoot.add(i), i.ctor = t, Object.defineProperty(t, "$type", {
                        value: i,
                        enumerable: !1
                    }), Object.defineProperty(t.prototype, "$type", {value: i, enumerable: !1}), i
                }, 0);
            s.decorateEnum = function (t) {
                if (t.$type) return t.$type;
                var i = new (e = e || n(15))("Enum" + a++, t);
                return s.decorateRoot.add(i), Object.defineProperty(t, "$type", {value: i, enumerable: !1}), i
            }, s.setProperty = function (t, i, n) {
                if ("object" != typeof t) throw TypeError("dst must be an object");
                if (i) return function t(i, n, r) {
                    var e = n.shift();
                    return "__proto__" !== e && (0 < n.length ? i[e] = t(i[e] || {}, n, r) : ((n = i[e]) && (r = [].concat(n).concat(r)), i[e] = r)), i
                }(t, i = i.split("."), n);
                throw TypeError("path must be specified")
            }, Object.defineProperty(s, "decorateRoot", {
                get: function () {
                    return o.decorated || (o.decorated = new (n(29)))
                }
            })
        }, {15: 15, 29: 29, 3: 3, 30: 30, 35: 35, 39: 39, 5: 5, 8: 8}],
        38: [function (t, i, n) {
            i.exports = e;
            var r = t(39);

            function e(t, i) {
                this.lo = t >>> 0, this.hi = i >>> 0
            }

            var s = e.zero = new e(0, 0), o = (s.toNumber = function () {
                return 0
            }, s.zzEncode = s.zzDecode = function () {
                return this
            }, s.length = function () {
                return 1
            }, e.zeroHash = "\0\0\0\0\0\0\0\0", e.fromNumber = function (t) {
                if (0 === t) return s;
                var i = t < 0, n = (t = i ? -t : t) >>> 0, t = (t - n) / 4294967296 >>> 0;
                return i && (t = ~t >>> 0, n = ~n >>> 0, 4294967295 < ++n && (n = 0, 4294967295 < ++t && (t = 0))), new e(n, t)
            }, e.from = function (t) {
                if ("number" == typeof t) return e.fromNumber(t);
                if (r.isString(t)) {
                    if (!r.Long) return e.fromNumber(parseInt(t, 10));
                    t = r.Long.fromString(t)
                }
                return t.low || t.high ? new e(t.low >>> 0, t.high >>> 0) : s
            }, e.prototype.toNumber = function (t) {
                var i;
                return !t && this.hi >>> 31 ? (t = 1 + ~this.lo >>> 0, i = ~this.hi >>> 0, -(t + 4294967296 * (i = t ? i : i + 1 >>> 0))) : this.lo + 4294967296 * this.hi
            }, e.prototype.toLong = function (t) {
                return r.Long ? new r.Long(0 | this.lo, 0 | this.hi, !!t) : {
                    low: 0 | this.lo,
                    high: 0 | this.hi,
                    unsigned: !!t
                }
            }, String.prototype.charCodeAt);
            e.fromHash = function (t) {
                return "\0\0\0\0\0\0\0\0" === t ? s : new e((o.call(t, 0) | o.call(t, 1) << 8 | o.call(t, 2) << 16 | o.call(t, 3) << 24) >>> 0, (o.call(t, 4) | o.call(t, 5) << 8 | o.call(t, 6) << 16 | o.call(t, 7) << 24) >>> 0)
            }, e.prototype.toHash = function () {
                return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24)
            }, e.prototype.zzEncode = function () {
                var t = this.hi >> 31;
                return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ t) >>> 0, this.lo = (this.lo << 1 ^ t) >>> 0, this
            }, e.prototype.zzDecode = function () {
                var t = -(1 & this.lo);
                return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ t) >>> 0, this.hi = (this.hi >>> 1 ^ t) >>> 0, this
            }, e.prototype.length = function () {
                var t = this.lo, i = (this.lo >>> 28 | this.hi << 4) >>> 0, n = this.hi >>> 24;
                return 0 == n ? 0 == i ? t < 16384 ? t < 128 ? 1 : 2 : t < 2097152 ? 3 : 4 : i < 16384 ? i < 128 ? 5 : 6 : i < 2097152 ? 7 : 8 : n < 128 ? 9 : 10
            }
        }, {39: 39}],
        39: [function (t, i, n) {
            var r = n;

            function e(t, i, n) {
                for (var r = Object.keys(i), e = 0; e < r.length; ++e) t[r[e]] !== tt && n || (t[r[e]] = i[r[e]]);
                return t
            }

            function s(t) {
                function n(t, i) {
                    if (!(this instanceof n)) return new n(t, i);
                    Object.defineProperty(this, "message", {
                        get: function () {
                            return t
                        }
                    }), Error.captureStackTrace ? Error.captureStackTrace(this, n) : Object.defineProperty(this, "stack", {value: Error().stack || ""}), i && e(this, i)
                }

                return (n.prototype = Object.create(Error.prototype)).constructor = n, Object.defineProperty(n.prototype, "name", {
                    get: function () {
                        return t
                    }
                }), n.prototype.toString = function () {
                    return this.name + ": " + this.message
                }, n
            }

            r.asPromise = t(1), r.base64 = t(2), r.EventEmitter = t(4), r.float = t(6), r.inquire = t(7), r.utf8 = t(10), r.pool = t(9), r.LongBits = t(38), r.isNode = !!("undefined" != typeof global && global && global.process && global.process.versions && global.process.versions.node), r.global = r.isNode && global || "undefined" != typeof window && window || "undefined" != typeof self && self || this, r.emptyArray = Object.freeze ? Object.freeze([]) : [], r.emptyObject = Object.freeze ? Object.freeze({}) : {}, r.isInteger = Number.isInteger || function (t) {
                return "number" == typeof t && isFinite(t) && Math.floor(t) === t
            }, r.isString = function (t) {
                return "string" == typeof t || t instanceof String
            }, r.isObject = function (t) {
                return t && "object" == typeof t
            }, r.isset = r.isSet = function (t, i) {
                var n = t[i];
                return null != n && t.hasOwnProperty(i) && ("object" != typeof n || 0 < (Array.isArray(n) ? n : Object.keys(n)).length)
            }, r.Buffer = function () {
                try {
                    var t = r.inquire("buffer").Buffer;
                    return t.prototype.utf8Write ? t : null
                } catch (t) {
                    return null
                }
            }(), r.w = null, r.y = null, r.newBuffer = function (t) {
                return "number" == typeof t ? r.Buffer ? r.y(t) : new r.Array(t) : r.Buffer ? r.w(t) : "undefined" == typeof Uint8Array ? t : new Uint8Array(t)
            }, r.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, r.Long = r.global.dcodeIO && r.global.dcodeIO.Long || r.global.Long || r.inquire("long"), r.key2Re = /^true|false|0|1$/, r.key32Re = /^-?(?:0|[1-9][0-9]*)$/, r.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, r.longToHash = function (t) {
                return t ? r.LongBits.from(t).toHash() : r.LongBits.zeroHash
            }, r.longFromHash = function (t, i) {
                t = r.LongBits.fromHash(t);
                return r.Long ? r.Long.fromBits(t.lo, t.hi, i) : t.toNumber(!!i)
            }, r.merge = e, r.lcFirst = function (t) {
                return (t[0] || "").toLowerCase() + t.substring(1)
            }, r.newError = s, r.ProtocolError = s("ProtocolError"), r.oneOfGetter = function (t) {
                for (var n = {}, i = 0; i < t.length; ++i) n[t[i]] = 1;
                return function () {
                    for (var t = Object.keys(this), i = t.length - 1; -1 < i; --i) if (1 === n[t[i]] && this[t[i]] !== tt && null !== this[t[i]]) return t[i]
                }
            }, r.oneOfSetter = function (n) {
                return function (t) {
                    for (var i = 0; i < n.length; ++i) n[i] !== t && delete this[n[i]]
                }
            }, r.toJSONOptions = {longs: String, enums: String, bytes: String, json: !0}, r.u = function () {
                var n = r.Buffer;
                n ? (r.w = n.from !== Uint8Array.from && n.from || function (t, i) {
                    return new n(t, i)
                }, r.y = n.allocUnsafe || function (t) {
                    return new n(t)
                }) : r.w = r.y = null
            }
        }, {1: 1, 10: 10, 2: 2, 38: 38, 4: 4, 6: 6, 7: 7, 9: 9}],
        40: [function (t, i, n) {
            i.exports = function (t) {
                var i = f.codegen(["m"], t.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected"),
                    n = t.oneofsArray, r = {};
                n.length && i("var p={}");
                for (var e = 0; e < t.fieldsArray.length; ++e) {
                    var s, o = t.e[e].resolve(), u = "m" + f.safeProp(o.name);
                    o.optional && i("if(%s!=null&&m.hasOwnProperty(%j)){", u, o.name), o.map ? (i("if(!util.isObject(%s))", u)("return%j", h(o, "object"))("var k=Object.keys(%s)", u)("for(var i=0;i<k.length;++i){"), function (t, i, n) {
                        switch (i.keyType) {
                            case"int32":
                            case"uint32":
                            case"sint32":
                            case"fixed32":
                            case"sfixed32":
                                t("if(!util.key32Re.test(%s))", n)("return%j", h(i, "integer key"));
                                break;
                            case"int64":
                            case"uint64":
                            case"sint64":
                            case"fixed64":
                            case"sfixed64":
                                t("if(!util.key64Re.test(%s))", n)("return%j", h(i, "integer|Long key"));
                                break;
                            case"bool":
                                t("if(!util.key2Re.test(%s))", n)("return%j", h(i, "boolean key"))
                        }
                    }(i, o, "k[i]"), a(i, o, e, u + "[k[i]]")("}")) : o.repeated ? (i("if(!Array.isArray(%s))", u)("return%j", h(o, "array"))("for(var i=0;i<%s.length;++i){", u), a(i, o, e, u + "[i]")("}")) : (o.partOf && (s = f.safeProp(o.partOf.name), 1 === r[o.partOf.name] && i("if(p%s===1)", s)("return%j", o.partOf.name + ": multiple values"), r[o.partOf.name] = 1, i("p%s=1", s)), a(i, o, e, u)), o.optional && i("}")
                }
                return i("return null")
            };
            var o = t(15), f = t(37);

            function h(t, i) {
                return t.name + ": " + i + (t.repeated && "array" !== i ? "[]" : t.map && "object" !== i ? "{k:" + t.keyType + "}" : "") + " expected"
            }

            function a(t, i, n, r) {
                if (i.resolvedType) if (i.resolvedType instanceof o) {
                    t("switch(%s){", r)("default:")("return%j", h(i, "enum value"));
                    for (var e = Object.keys(i.resolvedType.values), s = 0; s < e.length; ++s) t("case %i:", i.resolvedType.values[e[s]]);
                    t("break")("}")
                } else t("{")("var e=types[%i].verify(%s);", n, r)("if(e)")("return%j+e", i.name + ".")("}"); else switch (i.type) {
                    case"int32":
                    case"uint32":
                    case"sint32":
                    case"fixed32":
                    case"sfixed32":
                        t("if(!util.isInteger(%s))", r)("return%j", h(i, "integer"));
                        break;
                    case"int64":
                    case"uint64":
                    case"sint64":
                    case"fixed64":
                    case"sfixed64":
                        t("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", r, r, r, r)("return%j", h(i, "integer|Long"));
                        break;
                    case"float":
                    case"double":
                        t('if(typeof %s!=="number")', r)("return%j", h(i, "number"));
                        break;
                    case"bool":
                        t('if(typeof %s!=="boolean")', r)("return%j", h(i, "boolean"));
                        break;
                    case"string":
                        t("if(!util.isString(%s))", r)("return%j", h(i, "string"));
                        break;
                    case"bytes":
                        t('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', r, r, r)("return%j", h(i, "buffer"))
                }
                return t
            }
        }, {15: 15, 37: 37}],
        41: [function (t, i, n) {
            var o = t(21);
            n[".google.protobuf.Any"] = {
                fromObject: function (t) {
                    if (t && t["@type"]) {
                        var i, n = t["@type"].substring(1 + t["@type"].lastIndexOf("/")), n = this.lookup(n);
                        if (n) return ~(i = "." == (t["@type"][0] || "") ? t["@type"].substr(1) : t["@type"]).indexOf("/") || (i = "/" + i), this.create({
                            type_url: i,
                            value: n.encode(n.fromObject(t)).finish()
                        })
                    }
                    return this.fromObject(t)
                }, toObject: function (t, i) {
                    var n, r, e = "", s = "";
                    return i && i.json && t.type_url && t.value && (s = t.type_url.substring(1 + t.type_url.lastIndexOf("/")), e = t.type_url.substring(0, 1 + t.type_url.lastIndexOf("/")), (n = this.lookup(s)) && (t = n.decode(t.value))), !(t instanceof this.ctor) && t instanceof o ? (n = t.$type.toObject(t, i), r = "." === t.$type.fullName[0] ? t.$type.fullName.substr(1) : t.$type.fullName, n["@type"] = s = (e = "" === e ? "type.googleapis.com/" : e) + r, n) : this.toObject(t, i)
                }
            }
        }, {21: 21}],
        42: [function (t, i, n) {
            i.exports = c;
            var r, e = t(39), s = e.LongBits, o = e.base64, u = e.utf8;

            function f(t, i, n) {
                this.fn = t, this.len = i, this.next = tt, this.val = n
            }

            function h() {
            }

            function a(t) {
                this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states
            }

            function c() {
                this.len = 0, this.head = new f(h, 0, 0), this.tail = this.head, this.states = null
            }

            function l() {
                return e.Buffer ? function () {
                    return (c.create = function () {
                        return new r
                    })()
                } : function () {
                    return new c
                }
            }

            function d(t, i, n) {
                i[n] = 255 & t
            }

            function p(t, i) {
                this.len = t, this.next = tt, this.val = i
            }

            function v(t, i, n) {
                for (; t.hi;) i[n++] = 127 & t.lo | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0, t.hi >>>= 7;
                for (; 127 < t.lo;) i[n++] = 127 & t.lo | 128, t.lo = t.lo >>> 7;
                i[n++] = t.lo
            }

            function b(t, i, n) {
                i[n] = 255 & t, i[n + 1] = t >>> 8 & 255, i[n + 2] = t >>> 16 & 255, i[n + 3] = t >>> 24
            }

            c.create = l(), c.alloc = function (t) {
                return new e.Array(t)
            }, e.Array !== Array && (c.alloc = e.pool(c.alloc, e.Array.prototype.subarray)), c.prototype.g = function (t, i, n) {
                return this.tail = this.tail.next = new f(t, i, n), this.len += i, this
            }, (p.prototype = Object.create(f.prototype)).fn = function (t, i, n) {
                for (; 127 < t;) i[n++] = 127 & t | 128, t >>>= 7;
                i[n] = t
            }, c.prototype.uint32 = function (t) {
                return this.len += (this.tail = this.tail.next = new p((t >>>= 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5, t)).len, this
            }, c.prototype.int32 = function (t) {
                return t < 0 ? this.g(v, 10, s.fromNumber(t)) : this.uint32(t)
            }, c.prototype.sint32 = function (t) {
                return this.uint32((t << 1 ^ t >> 31) >>> 0)
            }, c.prototype.int64 = c.prototype.uint64 = function (t) {
                t = s.from(t);
                return this.g(v, t.length(), t)
            }, c.prototype.sint64 = function (t) {
                t = s.from(t).zzEncode();
                return this.g(v, t.length(), t)
            }, c.prototype.bool = function (t) {
                return this.g(d, 1, t ? 1 : 0)
            }, c.prototype.sfixed32 = c.prototype.fixed32 = function (t) {
                return this.g(b, 4, t >>> 0)
            }, c.prototype.sfixed64 = c.prototype.fixed64 = function (t) {
                t = s.from(t);
                return this.g(b, 4, t.lo).g(b, 4, t.hi)
            }, c.prototype.float = function (t) {
                return this.g(e.float.writeFloatLE, 4, t)
            }, c.prototype.double = function (t) {
                return this.g(e.float.writeDoubleLE, 8, t)
            };
            var w = e.Array.prototype.set ? function (t, i, n) {
                i.set(t, n)
            } : function (t, i, n) {
                for (var r = 0; r < t.length; ++r) i[n + r] = t[r]
            };
            c.prototype.bytes = function (t) {
                var i, n = t.length >>> 0;
                return n ? (e.isString(t) && (i = c.alloc(n = o.length(t)), o.decode(t, i, 0), t = i), this.uint32(n).g(w, n, t)) : this.g(d, 1, 0)
            }, c.prototype.string = function (t) {
                var i = u.length(t);
                return i ? this.uint32(i).g(u.write, i, t) : this.g(d, 1, 0)
            }, c.prototype.fork = function () {
                return this.states = new a(this), this.head = this.tail = new f(h, 0, 0), this.len = 0, this
            }, c.prototype.reset = function () {
                return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new f(h, 0, 0), this.len = 0), this
            }, c.prototype.ldelim = function () {
                var t = this.head, i = this.tail, n = this.len;
                return this.reset().uint32(n), n && (this.tail.next = t.next, this.tail = i, this.len += n), this
            }, c.prototype.finish = function () {
                for (var t = this.head.next, i = this.constructor.alloc(this.len), n = 0; t;) t.fn(t.val, i, n), n += t.len, t = t.next;
                return i
            }, c.u = function (t) {
                r = t, c.create = l(), r.u()
            }
        }, {39: 39}],
        43: [function (t, i, n) {
            i.exports = s;
            var r = t(42), e = ((s.prototype = Object.create(r.prototype)).constructor = s, t(39));

            function s() {
                r.call(this)
            }

            function o(t, i, n) {
                t.length < 40 ? e.utf8.write(t, i, n) : i.utf8Write ? i.utf8Write(t, n) : i.write(t, n)
            }

            s.u = function () {
                s.alloc = e.y, s.writeBytesBuffer = e.Buffer && e.Buffer.prototype instanceof Uint8Array && "set" === e.Buffer.prototype.set.name ? function (t, i, n) {
                    i.set(t, n)
                } : function (t, i, n) {
                    if (t.copy) t.copy(i, n, 0, t.length); else for (var r = 0; r < t.length;) i[n++] = t[r++]
                }
            }, s.prototype.bytes = function (t) {
                var i = (t = e.isString(t) ? e.w(t, "base64") : t).length >>> 0;
                return this.uint32(i), i && this.g(s.writeBytesBuffer, i, t), this
            }, s.prototype.string = function (t) {
                var i = e.Buffer.byteLength(t);
                return this.uint32(i), i && this.g(o, i, t), this
            }, s.u()
        }, {39: 39, 42: 42}]
    }, {}, [19])
}();
const spotifyJson = {
    "options": {"java_package": "com.smile.spotify.model"}, "nested": {
        "BootstrapResponse": {
            "oneofs": {"ucsResponse": {"oneof": ["ucsResponseV0", "trialsFacadeResponseV1"]}},
            "fields": {
                "ucsResponseV0": {"type": "UcsResponseWrapperV0", "id": 2},
                "trialsFacadeResponseV1": {"type": "TrialsFacadeResponseWrapperV1", "id": 3}
            }
        },
        "UcsResponseWrapperV0": {
            "oneofs": {"result": {"oneof": ["success", "error"]}},
            "fields": {
                "success": {"type": "UcsResponseWrapperSuccess", "id": 1},
                "error": {"type": "UcsResponseWrapperError", "id": 2}
            }
        },
        "UcsResponseWrapperSuccess": {"fields": {"customization": {"type": "UcsResponseWrapper", "id": 1}}},
        "UcsResponseWrapperError": {
            "fields": {
                "errorCode": {"type": "int32", "id": 1},
                "message": {"type": "string", "id": 2},
                "logId": {"type": "string", "id": 3}
            }
        },
        "TrialsFacadeResponseWrapperV1": {
            "oneofs": {"result": {"oneof": ["success", "error"]}},
            "fields": {
                "success": {"type": "TrialsFacadeResponseWrapperSuccess", "id": 1},
                "error": {"type": "TrialsFacadeResponseWrapperError", "id": 2}
            }
        },
        "TrialsFacadeResponseWrapperError": {
            "fields": {
                "errorCode": {"type": "int32", "id": 1},
                "message": {"type": "string", "id": 2},
                "logId": {"type": "string", "id": 3}
            }
        },
        "TrialsFacadeResponseWrapperSuccess": {"fields": {"field1": {"type": "int32", "id": 1}}},
        "UcsResponseWrapper": {
            "oneofs": {"result": {"oneof": ["success", "error"]}},
            "fields": {"success": {"type": "UcsResponse", "id": 1}, "error": {"type": "Error", "id": 2}}
        },
        "UcsResponse": {
            "oneofs": {
                "resolveResult": {"oneof": ["resolveSuccess", "resolveError"]},
                "accountAttributesResult": {"oneof": ["accountAttributesSuccess", "accountAttributesError"]}
            },
            "fields": {
                "resolveSuccess": {"type": "ResolveResponse", "id": 1},
                "resolveError": {"type": "Error", "id": 2},
                "accountAttributesSuccess": {"type": "AccountAttributesResponse", "id": 3},
                "accountAttributesError": {"type": "Error", "id": 4},
                "fetchTimeMillis": {"type": "int64", "id": 5}
            }
        },
        "ResolveResponse": {"fields": {"configuration": {"type": "Configuration", "id": 1}}},
        "Configuration": {
            "fields": {
                "configurationAssignmentId": {"type": "string", "id": 1},
                "fetchTimeMillis": {"type": "int64", "id": 2},
                "assignedValues": {"rule": "repeated", "type": "AssignedValue", "id": 3}
            }
        },
        "AssignedValue": {
            "oneofs": {"structuredValue": {"oneof": ["boolValue", "intValue", "enumValue"]}},
            "fields": {
                "propertyId": {"type": "Identifier", "id": 1},
                "metadata": {"type": "Metadata", "id": 2},
                "boolValue": {"type": "BoolValue", "id": 3},
                "intValue": {"type": "IntValue", "id": 4},
                "enumValue": {"type": "EnumValue", "id": 5}
            }
        },
        "Identifier": {"fields": {"scope": {"type": "string", "id": 1}, "name": {"type": "string", "id": 2}}},
        "Metadata": {
            "fields": {
                "policyId": {"type": "int64", "id": 1},
                "externalRealm": {"type": "string", "id": 2},
                "externalRealmId": {"type": "int64", "id": 3}
            }
        },
        "BoolValue": {"fields": {"value": {"type": "bool", "id": 1}}},
        "EnumValue": {"fields": {"value": {"type": "string", "id": 1}}},
        "IntValue": {"fields": {"value": {"type": "int32", "id": 1}}},
        "AccountAttributesResponse": {
            "fields": {
                "accountAttributes": {
                    "keyType": "string",
                    "type": "AccountAttribute",
                    "id": 1
                }
            }
        },
        "AccountAttribute": {
            "oneofs": {"value": {"oneof": ["boolValue", "longValue", "stringValue"]}},
            "fields": {
                "boolValue": {"type": "bool", "id": 2},
                "longValue": {"type": "int64", "id": 3},
                "stringValue": {"type": "string", "id": 4}
            }
        },
        "Error": {"fields": {"errorCode": {"type": "int32", "id": 1}, "errorMessage": {"type": "string", "id": 2}}}
    }
};
let accountAttributesMap;

const url = $request.url;
const method = $request.method;
const postMethod = "POST";
const isQuanX = typeof $task != "undefined";
const binaryBody = isQuanX ? new Uint8Array($response.bodyBytes) : $response.body;
let body;
if (url.indexOf("bootstrap/v1/bootstrap") !== -1 && method === postMethod) {
    let bootstrapResponseType = protobuf.Root.fromJSON(spotifyJson).lookupType("BootstrapResponse");
    let bootstrapResponseMessage = bootstrapResponseType.decode(binaryBody);
    accountAttributesMap = bootstrapResponseMessage.ucsResponseV0.success.customization.success.accountAttributesSuccess.accountAttributes;
    processMap(accountAttributesMap);
    body = bootstrapResponseType.encode(bootstrapResponseMessage).finish();
    console.log('bootstrap');
} else if (url.indexOf("user-customization-service/v1/customize") !== -1 && method === postMethod) {
    let ucsResponseWrapperType = protobuf.Root.fromJSON(spotifyJson).lookupType("UcsResponseWrapper");
    let ucsResponseWrapperMessage = ucsResponseWrapperType.decode(binaryBody);
    accountAttributesMap = ucsResponseWrapperMessage.success.accountAttributesSuccess.accountAttributes;
    processMap(accountAttributesMap);
    body = ucsResponseWrapperType.encode(ucsResponseWrapperMessage).finish();
    console.log('customize');
} else {
    $notification.post('spotify解锁premium', "路径/请求方法匹配错误:", method + "," + url);
}
console.log(`${body.byteLength}---${body.buffer.byteLength}`);
if (isQuanX) {
    $done({bodyBytes: body.buffer.slice(body.byteOffset, body.byteLength + body.byteOffset)});
} else {
    $done({body});
}

function processMap(accountAttributesMap) {
    accountAttributesMap['player-license'] = {stringValue: 'premium'};
    accountAttributesMap['mobile'] = {boolValue: true};
    accountAttributesMap['streaming-rules'] = {stringValue: ''};
    accountAttributesMap['financial-product'] = {stringValue: 'pr:premium,tc:0'};
    accountAttributesMap['license-acceptance-grace-days'] = {longValue: 30};
    accountAttributesMap['mobile-login'] = {boolValue: true};
    accountAttributesMap['name'] = {stringValue: 'Spotify Premium'};
    accountAttributesMap['on-demand'] = {boolValue: true};
    accountAttributesMap['ads'] = {boolValue: false};
    accountAttributesMap['catalogue'] = {stringValue: 'premium'};
    accountAttributesMap['high-bitrate'] = {boolValue: true};
    accountAttributesMap['libspotify'] = {boolValue: true};
    // 主页右下角的会员广告tab
    accountAttributesMap['nft-disabled'] = {stringValue: '1'};
    accountAttributesMap['shuffle'] = {boolValue: false};
    accountAttributesMap['audio-quality'] = {stringValue: '1'};
    accountAttributesMap['offline'] = {boolValue: true};
    accountAttributesMap['pause-after'] = {longValue: 0};
    accountAttributesMap['can_use_superbird'] = {boolValue: true};
    accountAttributesMap['type'] = {stringValue: 'premium'};

    // vip新增的
    accountAttributesMap['loudness-levels'] = {stringValue: '1:-9.0,0.0,3.0:-2.0'};
    accountAttributesMap['payments-initial-campaign'] = {stringValue: 'web'};
    accountAttributesMap['shuffle-eligible'] = {boolValue: true};
    accountAttributesMap['unrestricted'] = {boolValue: true};
    // 儿童不宜
    // accountAttributesMap['filter-explicit-content'] = {boolValue : true};
    // 决定customize是否有效 有的用户没有此属性
    accountAttributesMap['com.spotify.madprops.use.ucs.product.state'] = {boolValue: true};

    delete accountAttributesMap['ad-use-adlogic'];
    delete accountAttributesMap['ad-catalogues'];

    // ab test
    // accountAttributesMap['ab-test-group'] = {longValue : 67};
    // accountAttributesMap['ab-mobile-discover'] = {longValue : 0};
    // accountAttributesMap['ab-navigation-menu'] = {longValue : 17};
    // accountAttributesMap['ab-sugarpills-sanity-check'] = {stringValue : '0'};
    // accountAttributesMap['ab-nft-navigation-menu'] = {stringValue : '3'};
    // accountAttributesMap['ab-desktop-hide-follow'] = {boolValue : false};

    // 不确定的字段
    // accountAttributesMap['social-session'] = {boolValue : true};
    // accountAttributesMap['head-files-url'] = {stringValue : 'https://heads-fa.scdn.co/head/{file_id}'};
    // accountAttributesMap['publish-playlist'] = {boolValue : true};
}
