let roundStart = 0
let roundFinish = 0
let isFirstStart = true
function J() {
    this.B = function(a) {
        for (var b = 0; 24 > b; b++)
            this[String.fromCharCode(97 + b)] = a[b] || 0;
        .01 > this.c && (this.c = .01),
        a = this.b + this.c + this.e,
        .18 > a && (a = .18 / a,
        this.b *= a,
        this.c *= a,
        this.e *= a)
    }
}
var W = new function() {
    this.A = new J;
    var a, b, c, d, e, f, g, h, i, j, k, l;
    this.reset = function() {
        var a = this.A;
        d = 100 / (a.f * a.f + .001),
        e = 100 / (a.g * a.g + .001),
        f = 1 - a.h * a.h * a.h * .01,
        g = -a.i * a.i * a.i * 1e-6,
        a.a || (k = .5 - a.n / 2,
        l = 5e-5 * -a.o),
        h = 1 + a.l * a.l * (0 < a.l ? -.9 : 10),
        i = 0,
        j = 1 == a.m ? 0 : (1 - a.m) * (1 - a.m) * 2e4 + 32
    }
    ,
    this.D = function() {
        this.reset();
        var d = this.A;
        return a = d.b * d.b * 1e5,
        b = d.c * d.c * 1e5,
        c = d.e * d.e * 1e5 + 12,
        3 * ((a + b + c) / 3 | 0)
    }
    ,
    this.C = function(m, n) {
        var o = this.A
          , p = 1 != o.s || o.v
          , q = o.v * o.v * .1
          , r = 1 + 3e-4 * o.w
          , s = o.s * o.s * o.s * .1
          , t = 1 + 1e-4 * o.t
          , u = 1 != o.s
          , v = o.x * o.x
          , w = o.g
          , x = o.q || o.r
          , y = o.r * o.r * o.r * .2
          , z = o.q * o.q * (0 > o.q ? -1020 : 1020)
          , A = o.p ? ((1 - o.p) * (1 - o.p) * 2e4 | 0) + 32 : 0
          , B = o.d
          , C = o.j / 2
          , D = o.k * o.k * .01
          , E = o.a
          , F = a
          , G = 1 / a
          , H = 1 / b
          , I = 1 / c
          , o = 5 / (1 + o.u * o.u * 20) * (.01 + s);
        o > .8 && (o = .8);
        for (var J, K, L, M, N, o = 1 - o, O = !1, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = Array(1024), $ = Array(32), _ = Z.length; _--; )
            Z[_] = 0;
        for (_ = $.length; _--; )
            $[_] = 2 * Math.random() - 1;
        for (_ = 0; n > _; _++) {
            if (O)
                return _;
            if (A && ++X >= A && (X = 0,
            this.reset()),
            j && ++i >= j && (j = 0,
            d *= h),
            f += g,
            d *= f,
            d > e && (d = e,
            w > 0 && (O = !0)),
            K = d,
            C > 0 && (Y += D,
            K *= 1 + Math.sin(Y) * C),
            K |= 0,
            8 > K && (K = 8),
            E || (k += l,
            0 > k ? k = 0 : k > .5 && (k = .5)),
            ++Q > F)
                switch (Q = 0,
                ++P) {
                case 1:
                    F = b;
                    break;
                case 2:
                    F = c
                }
            switch (P) {
            case 0:
                R = Q * G;
                break;
            case 1:
                R = 1 + 2 * (1 - Q * H) * B;
                break;
            case 2:
                R = 1 - Q * I;
                break;
            case 3:
                R = 0,
                O = !0
            }
            x && (z += y,
            L = 0 | z,
            0 > L ? L = -L : L > 1023 && (L = 1023)),
            p && r && (q *= r,
            1e-5 > q ? q = 1e-5 : q > .1 && (q = .1)),
            N = 0;
            for (var aa = 8; aa--; ) {
                if (V++,
                V >= K && (V %= K,
                3 == E))
                    for (J = $.length; J--; )
                        $[J] = 2 * Math.random() - 1;
                switch (E) {
                case 0:
                    M = k > V / K ? .5 : -.5;
                    break;
                case 1:
                    M = 1 - V / K * 2;
                    break;
                case 2:
                    M = V / K,
                    M = 6.28318531 * (M > .5 ? M - 1 : M),
                    M = 1.27323954 * M + .405284735 * M * M * (0 > M ? 1 : -1),
                    M = .225 * ((0 > M ? -1 : 1) * M * M - M) + M;
                    break;
                case 3:
                    M = $[Math.abs(32 * V / K | 0)]
                }
                p && (J = U,
                s *= t,
                0 > s ? s = 0 : s > .1 && (s = .1),
                u ? (T += (M - U) * s,
                T *= o) : (U = M,
                T = 0),
                U += T,
                S += U - J,
                M = S *= 1 - q),
                x && (Z[W % 1024] = M,
                M += Z[(W - L + 1024) % 1024],
                W++),
                N += M
            }
            N = .125 * N * R * v,
            m[_] = N >= 1 ? 32767 : -1 >= N ? -32768 : 32767 * N | 0
        }
        return n
    }
}
;
window.jsfxr = function(a) {
    W.A.B(a);
    var b = W.D();
    a = new Uint8Array(4 * ((b + 1) / 2 | 0) + 44);
    var b = 2 * W.C(new Uint16Array(a.buffer,44), b)
      , c = new Uint32Array(a.buffer,0,44);
    c[0] = 1179011410,
    c[1] = b + 36,
    c[2] = 1163280727,
    c[3] = 544501094,
    c[4] = 16,
    c[5] = 65537,
    c[6] = 44100,
    c[7] = 88200,
    c[8] = 1048578,
    c[9] = 1635017060,
    c[10] = b;
    for (var b = b + 44, c = 0, d = "data:audio/wav;base64,"; b > c; c += 3)
        var e = a[c] << 16 | a[c + 1] << 8 | a[c + 2]
          , d = d + ("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e >> 18] + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e >> 12 & 63] + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[e >> 6 & 63] + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[63 & e]);
    return d
}
;
var aa;
!function() {
    function a() {
        this.sounds = {}
    }
    a.prototype.add = function(a, b, c) {
        this.sounds[a] = [],
        c.forEach(function(c, d) {
            this.sounds[a].push({
                tick: 0,
                count: b,
                pool: []
            });
            for (var e = 0; b > e; e++) {
                var f = new Audio;
                f.src = jsfxr(c),
                this.sounds[a][d].pool.push(f)
            }
        }, this)
    }
    ,
    a.prototype.play = function(a) {
        console.log("action:", a)
        if (a === "move" && isFirstStart === true) {
            roundStart = new Date()
            isFirstStart = false
        } else if (a === "checkmate") {
            console.log("game over, check db for scores...")
            roundFinish = new Date()

            const timePass = Math.round((roundFinish - roundStart) / 10) / 100
            console.log("time passed on the round:", timePass)
            roundStart = 0
            roundFinish = 0
            isFirstStart = true
            const posting = $.ajax({
                url: "http://europe-west3-cmpe48-final.cloudfunctions.net/function-1",
                dataType: 'jsonp',
                method: 'POST',
                crossDomain: true,
                data: { score: timePass },
                contentType: 'application/json',
                success: function (result) {
                    console.log('success:', result);
                }
            });
        }
        var b = this.sounds[a]
          , c = b.length > 1 ? b[Math.floor(Math.random() * b.length)] : b[0];
        c.pool[c.tick].play(),
        c.tick < c.count - 1 ? c.tick++ : c.tick = 0
    }
    ,
    aa = new a,
    aa.add("check", 1, [[2, , .1747, , .1291, .6731, .2, -.2999, , , , , , .4368, .1862, , .28, , 1, , , .1596, , .5]]),
    aa.add("move", 5, [[3, , .0316, , .1483, .5871, , -.6609, , , , , , , , , , , 1, , , .0227, , .25]]),
    aa.add("capture", 5, [[0, , .3065, , .2516, .36, , .1584, , , , , , .1149, , , , , 1, , , .2188, , .25]]),
    aa.add("checkmate", 1, [[1, , .2402, , .3917, .2242, , .1535, , , , , , , , .5609, , , 1, , , , , .5]])
}(),
window.onload = function() {
    "use strict";
    function a() {
        $ = Y.createElement("div"),
        $.id = "root",
        Z.appendChild($);
        var a = $.style;
        a.position = "absolute",
        a.left = "50%",
        a.top = "0",
        a.marginLeft = -ea / 2 + "px ",
        A(),
        C(),
        H(),
        B(),
        c(0),
        j()
    }
    function b() {
        for (var a = Ba.length - 1, b = 0; b < Ba.length; b++)
            if (ya < Ba[b]) {
                b > 0 && (a = b - 1);
                break
            }
        c(a),
        P = null,
        Ca = -1,
        sa++
    }
    function c(a) {
        function b() {
            var a = _.ceil(f / 2);
            Ba.push(h + a);
            for (var b = 0; f > b; b++) {
                if (Aa[h] = [],
                b == a)
                    for (var c = 0; fa > c; c++)
                        Aa[h][c] = {
                            checkPoint: !0
                        };
                h++
            }
        }
        function c() {
            var b, c = Array.prototype.slice.call(arguments);
            b = "object" == typeof c[0] ? c.shift() : {};
            var d, f, i, j, k = a < Ba.length, l = h;
            for (i = c.length - 1; i >= 0; i--) {
                if (f = c[i],
                f.length > fa)
                    throw new Error;
                if (Aa[h] = [],
                k && "" !== f)
                    for (j = 0; j < f.length; j++) {
                        var m = f.charAt(j);
                        if (" " !== m && "." !== m) {
                            var n = m.toLowerCase()
                              , o = e(n, h, j);
                            b.showThreat == n && (d = Aa[h][j]),
                            b.intro && (o.piece.intro = !0)
                        }
                    }
                h++
            }
            if (d)
                for (d.piece.showThreat = !0,
                i = l; h > i; i++)
                    for (f = Aa[i],
                    j = 0; fa > j; j++) {
                        var p = g(i, j);
                        p && p.piece == d.piece && (Aa[i][j] || (Aa[i][j] = {}),
                        Aa[i][j].showThreat = !0)
                    }
        }
        Aa && d(),
        Aa = [],
        Ba = [0];
        var f = 5
          , h = 0;
        c({
            intro: !0
        }, "", "", "", La ? "  reqr" : "", La ? "   kk" : "", "", "", "", "", "", "", "kkkkkkkk"),
        c({
            showThreat: "p"
        }, "", "", "    p", "", "", "", "", ""),
        c("  pppp", "  pppp", "", "  p", "", "     p", "", " p"),
        c("", "pppppp", "", "  pppppp", "", "pppppp", "", ""),
        c("", "pp   ppp", "  p p", "   p", "", "", "", ""),
        c("", "   pp", "p p  p p", " p    p", "", "", "", ""),
        c("", "    ppp", "     p", "ppp", " p   ppp", "      p", "", ""),
        b(),
        c({
            showThreat: "r"
        }, "", "   p", "", "   r", "", "   p", "", ""),
        c("", "", "r", " r", "  r", "   r", "    r", "     r", "pppppp"),
        c("", "", "", "       p", "    rp r", "", "", "pp", "r   p  p", "p"),
        c("", "p     r", "r     p", "r    p", "", "   p", "   p", "p  ppppp", ""),
        b(),
        c({
            showThreat: "b"
        }, "", "", "", "", "...b", "", "", "", ""),
        c("", " p p p", "b b b b", "", "", "", "", "", ""),
        c("", "r.p..p.r", "p......p", "", "b      b", "pp....pp", "", ""),
        c("", "r", " r  p..b", "     ..r", "....p", "...p", "..p", "pp.....p"),
        b(),
        c({
            showThreat: "k"
        }, "", "", "   k", "", "", "", "", ""),
        c("p", "r.....p", "", "", "......kk", "", "pkk", ""),
        c("p   pppp", "r    b r", "   p b p", "", "", "", " k", "", "", ""),
        b(),
        c({
            showThreat: "l"
        }, "", "", "", "   l", "", "", "", ""),
        c("l.llllll", "l.l....l", "..l.llll", ".ll.l   ", "l...l l ", "l.lll l ", "l.    l ", "lllllll "),
        c(" p  pll", " l p   l", "lpl p p ", "     lp", "ll ll l", " l  l", "", ""),
        c("", "  r", "  llk", "     .", "   l ..", "   p  pb", "  . .  l", "  p  l", "", "", "", "", ""),
        b(),
        c("", "c", "", "", "", "", ""),
        Q = h,
        0 === a ? (Fa = e(Pa, 5, 4).piece,
        ya = 2) : (ya = Ba[a],
        Fa = e(Pa, ya, 3).piece,
        ya -= 4)
    }
    function d() {
        for (var a in Aa)
            if (Aa[a])
                for (var b in Aa[a]) {
                    var c = Aa[a][b];
                    c && c.piece && G(c.piece)
                }
    }
    function e(a, b, c) {
        var d = {
            shape: null,
            type: a,
            row: b,
            col: c,
            showThreat: !1
        };
        if (Aa[b] || (Aa[b] = []),
        Aa[b][c] || (Aa[b][c] = {}),
        Aa[b][c].piece = d,
        a == Xa)
            for (var e = 0; fa > e; e++)
                3 != e && 4 != e && (Aa[b][e] || (Aa[b][e] = {}),
                Aa[b][e].wall = !0);
        return Aa[b][c]
    }
    function f(a, b) {
        var c = Fa.col
          , d = Fa.row;
        0 > b ? b = 0 : b >= fa && (b = fa - 1);
        var e = _.floor(ya)
          , f = Ca - 2;
        if (e > a ? a = e : a >= f && (a = f),
        b != c || a != d) {
            var h = Aa[d][c];
            Aa[a] || (Aa[a] = []);
            var j = Aa[a][b];
            if (j || (j = {},
            Aa[a][b] = j),
            !j.wall) {
                var l = g(a, b);
                l ? (aa.play("check"),
                Fa.invalid = !0,
                Fa.invalidCol = b,
                Fa.invalidRow = a,
                Fa.threateningPiece = l.piece,
                b = c,
                a = d,
                ta++) : (Fa.invalid = !1,
                j.piece ? (i(j.piece),
                ra++,
                aa.play("capture")) : aa.play("move"),
                h.piece = null,
                j.piece = Fa),
                Fa.oldCol = c,
                Fa.oldRow = d,
                Fa.anim = !0,
                Fa.animStartTime = pa,
                Fa.col = b,
                Fa.row = a,
                a >= Q && k(!0, !0)
            }
        }
    }
    function g(a, b) {
        var c;
        if (c = h(a, b, Va))
            return c;
        if (c = h(a + 1, b - 1, Ra) || h(a + 1, b + 1, Ra))
            return c;
        var d, e, f;
        for (e = b - 1; e >= 0; e--)
            if (f = h(a, e),
            f && f.piece) {
                if (f.piece.type == Sa)
                    return f;
                break
            }
        for (e = b + 1; fa >= e; e++)
            if (f = h(a, e),
            f && f.piece) {
                if (f.piece.type == Sa)
                    return f;
                break
            }
        for (d = a + 1; a + fa >= d; d++)
            if (f = h(d, b),
            f && f.piece) {
                if (f.piece.type == Sa)
                    return f;
                break
            }
        for (d = a - 1; d >= a - fa; d--)
            if (f = h(d, b),
            f && f.piece) {
                if (f.piece.type == Sa)
                    return f;
                break
            }
        for (e = b - 1,
        d = a - 1; e >= 0; e--,
        d--)
            if (f = h(d, e),
            f && f.piece) {
                if (f.piece.type == Ta)
                    return f;
                break
            }
        for (e = b + 1,
        d = a - 1; fa > e; e++,
        d--)
            if (f = h(d, e),
            f && f.piece) {
                if (f.piece.type == Ta)
                    return f;
                break
            }
        for (e = b - 1,
        d = a + 1; e >= 0; e--,
        d++)
            if (f = h(d, e),
            f && f.piece) {
                if (f.piece.type == Ta)
                    return f;
                break
            }
        for (e = b + 1,
        d = a + 1; fa > e; e++,
        d++)
            if (f = h(d, e),
            f && f.piece) {
                if (f.piece.type == Ta)
                    return f;
                break
            }
        return c = h(a + 2, b - 1, Ua) || h(a - 2, b - 1, Ua) || h(a + 2, b + 1, Ua) || h(a - 2, b + 1, Ua) || h(a + 1, b - 2, Ua) || h(a - 1, b - 2, Ua) || h(a + 1, b + 2, Ua) || h(a - 1, b + 2, Ua)
    }
    function h(a, b, c) {
        var d = Aa[a];
        if (d) {
            var e = d[b];
            if (e && e.piece && (!c || e.piece.type == c))
                return e
        }
    }
    function i(a) {
        if (Ea.push(a),
        a.removedTime = pa,
        a.justRemoved = !0,
        a.showThreat)
            for (var b = a.row - fa; b < a.row + fa; b++) {
                var c = Aa[b];
                if (c)
                    for (var d = a.col - fa; d < a.col + fa; d++)
                        c[d] && (c[d].showThreat = !1)
            }
    }
    function j() {
        window.stb && stb(),
        wa ? (0 === Eb.space || cb.click) && (k(!1),
        Eb.space = -1) : (La ? (Oa >= 0 && (0 === Eb.space || cb.click) && (Eb.space = -1,
        o()),
        n()) : (l(),
        m()),
        t()),
        cb.click = !1,
        window.ste && ste(),
        Da && requestAnimationFrame(j)
    }
    function k(a, c) {
        c ? (Da = !1,
        wa = !0,
        ua.style.display = "block") : a != wa && (wa = a,
        wa ? va.style.display = "block" : (va.style.display = "none",
        b()))
    }
    function l() {
        if (!(0 >= Ca || Fa.invalid || La)) {
            var a = 0
              , b = 0;
            bb || ((Eb.down == _a || 0 === Eb.down) && (b = -1),
            (Eb.up == _a || 0 === Eb.up) && (b = 1),
            (Eb.left == _a || 0 === Eb.left) && (a = -1),
            (Eb.right == _a || 0 === Eb.right) && (a = 1),
            (a || b) && (a ? (Eb.up <= _a && Eb.up > 0 && (b = 1),
            Eb.down <= _a && Eb.down > 0 && (b = -1)) : (Eb.left <= _a && Eb.left > 0 && (a = -1),
            Eb.right <= _a && Eb.right > 0 && (a = 1)),
            f(Fa.row + b, Fa.col + a),
            bb = !0));
            var c;
            if (bb) {
                var d = !0;
                for (c in Db)
                    if (Db[c]) {
                        d = !1;
                        break
                    }
                bb = !d
            }
            for (c in Eb)
                Eb[c] >= 1 ? Eb[c]++ : Eb[c] > ab && Eb[c]--;
            if (!Fa.anim && cb.x > 0 && cb.x < ea && cb.y > da && cb.y < ea + da) {
                var e = cb.x / ea
                  , g = (cb.y - da) / ea;
                x(e, g),
                eb = _.floor(x.res.x * fa),
                db = _.floor(x.res.y * fa + ya),
                a = eb - Fa.col,
                b = db - Fa.row,
                a > 1 ? a = 1 : -1 > a && (a = -1),
                b > 1 ? b = 1 : -1 > b && (b = -1),
                db = Fa.row + b,
                eb = Fa.col + a,
                cb.click && (a || b) && f(db, eb)
            } else
                eb = -1,
                db = -1
        }
    }
    function m() {
        if (pa = Date.now(),
        P && (ya += za * (pa - P) * qa),
        Fa.row < ya - .9) {
            if (xa)
                if (g(Fa.row + 1, Fa.col))
                    if (g(Fa.row + 1, Fa.col + 1)) {
                        if (g(Fa.row + 1, Fa.col - 1))
                            return void k(!0);
                        f(Fa.row + 1, Fa.col + 1)
                    } else
                        f(Fa.row + 1, Fa.col + 1);
                else
                    f(Fa.row + 1, Fa.col);
            else
                k(!0);
            aa.play("checkmate")
        }
        var a = _.floor(ya) + ha;
        if (!P || a > Ca) {
            for (var b, c, d, e = a - ha - 5; e > Ca - ha - 5; e--)
                if (b = Aa[e])
                    for (d = !0,
                    c = 0; fa > c; c++)
                        b[c] && b[c].piece && G(b[c].piece);
            for (e = Ca + 1; a >= e; e++)
                if (b = Aa[e])
                    for (d = !0,
                    c = 0; fa > c; c++) {
                        var h = fa / 2;
                        c % 2 === 0 ? h += c / 2 : h -= (c + 1) / 2,
                        b[h] && b[h].piece && F(b[h].piece)
                    }
            Ca = a
        }
        P = pa
    }
    function n() {
        var a, b, c, d, e = Aa[8][3].piece, f = Fa;
        pa = Date.now();
        var g = !R;
        if (g && (R = pa,
        r(),
        e && (e.talking = !1,
        e.talkingStarTime = pa),
        f.talking = !1,
        f.talkingStarTime = pa),
        -1 == Oa)
            la.style.opacity = 0,
            na.style.opacity = 0,
            Ma = 0,
            m(),
            P = null,
            Oa = 0;
        else if (0 === Oa)
            ;
        else if (1 == Oa)
            g && (I(!0, ["Surrender Black King !", "Your army is defeated, and your Queen is mine !"]),
            e.talking = !0);
        else if (2 == Oa) {
            if (g)
                for (J(),
                b = 0; fa > b; b++)
                    c = Aa[0][b],
                    p(c.piece, {
                        row: 2,
                        col: b + (b % 2 === 0 ? 1 : -1)
                    }, .1 * b, .5)
        } else if (3 == Oa)
            g && (I(!0, ["You thought I'd only bring two knights to battle ?", "You are surrounded,", "admit defeat now and I shall be merciful."]),
            e.talking = !0);
        else if (4 == Oa)
            g && (I(!1, ["Never !"]),
            f.talking = !0);
        else if (5 == Oa)
            g && (I(!0, ["As you wish...", "I am taking the prisoner back to the castle.", "Knights, capture him, I want him alive."]),
            e.talking = !0);
        else if (6 == Oa) {
            if (g) {
                for (J(),
                b = 2; 5 >= b; b++)
                    c = Aa[8][b],
                    c && (p(c.piece, {
                        row: 9
                    }, 0, .5),
                    p(c.piece, {
                        row: 10
                    }, 1, .5));
                p(Aa[7][3].piece, {
                    row: 8,
                    col: 1
                }, .5, .5),
                p(Aa[7][3].piece, {
                    row: 10,
                    col: 2
                }, 1.5, .5),
                p(Aa[7][4].piece, {
                    row: 8,
                    col: 6
                }, .5, .5),
                p(Aa[7][4].piece, {
                    row: 10,
                    col: 5
                }, 1.5, .5)
            }
        } else if (7 == Oa) {
            if (g) {
                var h = '<animate attributeType="CSS" attributeName="fill" from="red" to="orange" dur="0.5s" repeatCount="indefinite"/>';
                for (I(!1, ['It looks like our roles are <tspan fill="red" font-family="impact">REVERSED' + h + "</tspan> my Queen.", "Today, it is my turn to protect you !"]),
                f.talking = !0,
                a = 1; 2 * fa > a; a++)
                    if (d = Aa[a])
                        for (b = 0; fa > b; b++)
                            c = d[b],
                            c && c.piece && c.piece.intro && (G(c.piece),
                            d[b] = {})
            }
        } else
            8 == Oa && (g && (J(),
            Ia.style.display = "none"),
            Na = (pa - R) / 4e3,
            Na > 1 ? Oa = 9 : (Na = _.sin(Na * ba / 2),
            Ma = (Na - .2) / .6,
            0 > Ma ? Ma = 0 : Ma > 1 && (Ma = 1),
            la.style.opacity = Ma,
            Na > .8 && (Ka.style.opacity = (1 - Na) / .2,
            na.style.opacity = 1 - Ka.style.opacity)));
        if (g)
            if (W.length) {
                Ia.style.opacity = 0;
                var i = W[0].e == S && W[0].to._y == xb
                  , j = W[W.length - 1]
                  , k = j.du + j.de;
                i ? p(Ia.style, {
                    opacity: 1
                }, k + 2, .1) : Oa > 1 && 8 > Oa && q(o, k)
            } else
                Ia.style.opacity = 1;
        s(),
        9 == Oa && (La = !1,
        Ma = 1,
        Ka.style.display = "none",
        la.style.opacity = 1,
        na.style.opacity = 1,
        Ia.style.display = "none",
        J(),
        Fa.talking = !1),
        P = pa
    }
    function o() {
        Oa++,
        R = null
    }
    function p(a, b, c, d) {
        W.push({
            e: a,
            to: b,
            de: c || 0,
            du: d
        })
    }
    function q(a, b) {
        W.push({
            cb: a,
            de: 0,
            du: b
        })
    }
    function r() {
        if (W)
            for (var a = 0; a < W.length; a++) {
                var b = W[a];
                if (b.e)
                    for (var c in b.to)
                        b.e[c] = b.to[c]
            }
        W = []
    }
    function s() {
        for (var a, b = (pa - R) * qa, c = 0; c < W.length; c++) {
            var d = W[c];
            if (b <= d.de)
                ;
            else if (b >= d.de + d.du)
                d.cb && (d.cb(),
                d.cb = null);
            else if (d.e) {
                if (!d.from) {
                    d.from = {};
                    for (a in d.to)
                        d.from[a] = d.e[a]
                }
                var e = (b - d.de) / d.du;
                e = _.sin(e * ba / 2);
                for (a in d.to)
                    d.e[a] = d.from[a] * (1 - e) + d.to[a] * e
            }
        }
        S.setAttributeNS(null, "y", S._y)
    }
    function t() {
        for (var a, b, c = Ca - ha - 5; Ca >= c; c++)
            if (b = Aa[c])
                for (var d = 0; fa > d; d++)
                    if (b[d] && b[d].piece) {
                        var e = b[d].piece;
                        if (u(e.row, e.col, e),
                        e.talking) {
                            var f = -_.abs(_.sin((pa - e.talkingStarTime) * ba / 800)) * ga * .2;
                            e.y += f
                        }
                        v(e),
                        e.y > Fa.y && (!a || a.y > e.y) && (a = e)
                    }
        var g;
        if (Fa.anim)
            if (g = Fa.invalid ? qa * (pa - Fa.animStartTime) / Ha : qa * (pa - Fa.animStartTime) / Ga,
            0 > g || g >= 1)
                Fa.anim = !1,
                Fa.invalid && Fa.threateningPiece && (Fa.threateningPiece.shape.style.filter = "none"),
                Fa.invalid = !1;
            else if (g = _.sin(g * ba * .5),
            Fa.invalid) {
                u(Fa.row, Fa.col);
                var h = .4 * (.5 > g ? g : 1 - g) * ga
                  , i = _.sin(6 * g * ba) * h;
                Fa.x += i,
                v(Fa),
                Fa.threateningPiece.shape.style.filter = "url(#" + Za + ")"
            } else
                u(Fa.oldRow, Fa.oldCol),
                Fa.opacity = g * Fa.opacity + (1 - g) * u.res.opacity,
                Fa.scale = g * Fa.scale + (1 - g) * u.res.scale,
                Fa.x = g * Fa.x + (1 - g) * u.res.x,
                Fa.y = g * Fa.y + (1 - g) * u.res.y,
                v(Fa);
        for (l = 0,
        n = Ea.length; n > l; l++) {
            var j = Ea[l]
              , k = (pa - j.removedTime) / 1e3;
            k > 1 ? (G(j),
            Ea[l] = Ea[n - 1],
            n--,
            l--,
            Ea = Ea.slice(0, n)) : (j.justRemoved && (j.justRemoved = !1,
            j.removedX = j.x,
            j.removedY = j.y),
            j.x < .5 * ea ? j.x = j.removedX - k * ea : j.x = j.removedX + k * ea,
            j.y = j.removedY - _.sin(k * ba) * ea * .4,
            v(j))
        }
        Fa.anim && Fa.invalid ? (V || (V = {
            onTop: !0,
            type: $a
        }),
        V.shape || (F(V),
        V.row = Fa.invalidRow,
        V.col = Fa.invalidCol),
        u(Fa.invalidRow, Fa.invalidCol, V),
        V.scale = 1,
        V.y -= g * V.scale * ga * .2,
        V.opacity = .8 > g ? 1 : 1 - (g - .8) / (1 - .8),
        v(V)) : V && V.shape && G(V),
        a && a.shape && Fa.shape && Fa.shape.nextSibling != a.shape && zb.insertBefore(Fa.shape, a.shape),
        ka.save(),
        ka.translate(0, da),
        ka.fillStyle = fb,
        ka.beginPath(),
        ka.rect(0, 0, ea, ea),
        ka.fill(),
        ka.clip();
        var l, m, n, o = _.floor(ya), p = -(ya - _.floor(ya)), q = {}, r = {}, s = {}, t = {};
        for (l = -1; ha > l; l++)
            for (m = 0; fa > m; m++) {
                if (w(m / fa, (l + p) / fa, q),
                w(m / fa, (l + 1 + p) / fa, t),
                w((m + 1) / fa, (l + 1 + p) / fa, s),
                w((m + 1) / fa, (l + p) / fa, r),
                ka.beginPath(),
                ka.moveTo(q.x * ea, q.y * ea),
                ka.lineTo(r.x * ea, r.y * ea),
                ka.lineTo(s.x * ea, s.y * ea),
                ka.lineTo(t.x * ea, t.y * ea),
                ka.closePath(),
                ka.lineWidth = 1,
                -1 != db && -1 != eb && l + o == db && m == eb ? ka.fillStyle = ib : (l + m + o) % 2 === 0 ? ka.fillStyle = gb : ka.fillStyle = hb,
                ka.fill(),
                b = Aa[l + o],
                b && b[m]) {
                    var x = b[m];
                    x.showThreat && (ka.fillStyle = "rgba(" + lb + ",0.5)",
                    ka.fill()),
                    x.checkPoint && (ka.fillStyle = mb,
                    ka.fill())
                }
                if (Fa.invalid && Fa.invalidCol == m && Fa.invalidRow == l + o) {
                    var y = 1.5 * (.5 > g ? g : 1 - g);
                    ka.fillStyle = "rgba(" + lb + "," + y + ")",
                    ka.fill()
                }
            }
        ka.restore()
    }
    function u(a, b, c) {
        c = c || u.res,
        w((b + .5) / fa, (a - ya + .5) / fa);
        var d = .02
          , e = 1;
        return w.res.y < nb ? e = 0 : w.res.y < ob && (e = 1 - (d - w.res.y) / (ob - nb)),
        c.opacity = e,
        c.x = w.res.x * ea,
        c.y = w.res.y * ea + da,
        c.scale = w.res.scaleX,
        c
    }
    function v(a) {
        a.shape && (a.shape.style.opacity = a.opacity,
        a.scale > 0 && a.shape.setAttributeNS(null, "transform", "scale(" + a.scale + ") translate(" + a.x / a.scale + "," + a.y / a.scale + ")"))
    }
    function w(a, b, c) {
        return c = c || w.res,
        c.y = y(b, pb, qb, rb),
        c.scaleX = y(b, sb, tb, ub),
        c.scaleY = c.scaleX,
        c.x = (1 - c.scaleX) / 2 + a * c.scaleX,
        La && (c.x = Ma * c.x + (1 - Ma) * a,
        c.y = Ma * c.y + (1 - Ma) * (1 - b),
        c.scaleX = Ma * c.scaleX + 1 * (1 - Ma),
        c.scaleY = c.scaleX),
        c
    }
    function x(a, b, c) {
        c = c || x.res,
        c.y = z(b, pb, qb, rb, !1);
        var d = y(c.y, sb, tb, ub);
        return c.x = (a - (1 - d) / 2) / d,
        c
    }
    function y(a, b, c, d) {
        return b * a * a + c * a + d
    }
    function z(a, b, c, d, e) {
        return e ? (-c + _.sqrt(c * c - 4 * b * (d - a))) / (2 * b) : (-c - _.sqrt(c * c - 4 * b * (d - a))) / (2 * b)
    }
    function A() {
        $.appendChild(ja),
        ja.width = ea,
        ja.height = ea + da
    }
    function B() {
        var a = ma
          , b = a.createLinearGradient(0, 0, 0, ea)
          , c = "rgba(10,20,25,"
          , d = ")";
        b.addColorStop(0, c + 0 + d),
        b.addColorStop(.2, c + 0 + d),
        b.addColorStop(1, c + .5 + d),
        a.fillStyle = b,
        a.fillRect(0, 0, ea, ea),
        a.restore(),
        la.style.top = da + "px",
        la.style.pointerEvents = "none",
        $.appendChild(la)
    }
    function C() {
        var a = .02 * ea;
        na.width = ea,
        na.height = da + a;
        var b = oa;
        b.clearRect(0, 0, ea, ea),
        b.save(),
        b.fillStyle = "#FF8601",
        b.beginPath(),
        b.rect(0, 0, ea, da),
        b.fill(),
        b.clip(),
        b.fillStyle = "#FFE7CA";
        var c = ea / 4;
        b.beginPath(),
        b.arc(ea / 2, da + .3 * c, c, 0, ba, !0),
        b.fill(),
        b.restore(),
        b.beginPath(),
        b.fillStyle = "rgb(10,20,25)";
        for (var d = 40, e = [0, .7, .1, .3, .2, 1, .3, .5, .35, .8, .42, .5, .55, .9, .7, .45, .8, 1.1, .88, .4, 1, .8], f = 0; f < e.length; f += 2) {
            var g = e[f] * ea
              , h = da - d * e[f + 1];
            0 === f ? b.moveTo(g, h) : b.lineTo(g, h)
        }
        b.lineTo(ea, da),
        b.lineTo(0, da),
        b.fill(),
        b.restore(),
        b.save(),
        b.translate(0, da);
        var i = b.createLinearGradient(0, 0, 0, a)
          , j = "rgba(10,20,25,"
          , k = ")";
        i.addColorStop(0, j + 1 + k),
        i.addColorStop(1, j + 0 + k),
        b.fillStyle = i,
        b.fillRect(0, 0, ea, a),
        b.restore(),
        $.appendChild(na)
    }
    function D(a, b, c) {
        var d = Y.createElement("canvas");
        return c && (d.id = c),
        d.width = a,
        d.height = b,
        d
    }
    function E(a) {
        return a.getContext("2d")
    }
    function F(a) {
        var b;
        if (Ab[a.type] || (Ab[a.type] = []),
        b = Ab[a.type].length ? Ab[a.type].pop() : vb(a.type),
        zb.firstChild && !a.onTop ? zb.insertBefore(b, zb.firstChild) : zb.appendChild(b),
        a.shape)
            throw new Error;
        a.shape = b,
        b.style.filter = "none"
    }
    function G(a) {
        a.shape && (Ab[a.type].push(a.shape),
        zb.removeChild(a.shape),
        a.shape = null)
    }
    function H() {
        function a(a, b) {
            return g(["M", [a, b], "L", [a + 1, b], "L", [a + .5, b - 3], "L", [a, b]])
        }
        function b(a, b, c) {
            var e = Y.createElementNS(r, "g");
            e.setAttributeNS(null, "id", a),
            c || e.appendChild(d());
            for (var f = 0; f < b.length; f++) {
                var g = b[f];
                g.getAttributeNS(null, "x") || (g.setAttributeNS(null, "x", -ga / 2),
                g.setAttributeNS(null, "y", -ga)),
                e.appendChild(g)
            }
            return v.appendChild(e),
            e
        }
        function c(a) {
            var b = Y.createElementNS(r, "filter");
            return b.setAttributeNS(null, "id", a),
            L(b, {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                "color-interpolation-filters": "sRGB"
            }),
            K(b, '<feFlood flood-color="rgba(255,0,0,0.3)" result="COLOR"></feFlood><feComposite operator="atop" in="COLOR" in2="SourceGraphic"></feComposite>'),
            v.appendChild(b),
            b
        }
        function d() {
            var a = f(5, 8, 3.1, 1.8);
            return M(a, "rgba(0,0,0,0.2)", "none"),
            a
        }
        function e(a, b, c) {
            var d = Y.createElementNS(r, "circle");
            return L(d, {
                cx: j(a - w),
                cy: j(b - x),
                r: j(c)
            }),
            d
        }
        function f(a, b, c, d) {
            var e = Y.createElementNS(r, "ellipse");
            return L(e, {
                cx: j(a - w),
                cy: j(b - x),
                rx: j(c),
                ry: j(d)
            }),
            e
        }
        function g(a, b) {
            var c = Y.createElementNS(r, "path");
            return c.setAttributeNS(null, "d", h(a)),
            b && L(c, b),
            c
        }
        function h(a) {
            for (var b = "", c = 0; c < a.length; c++) {
                var d = a[c];
                "object" == typeof d && (d = j(d[0] - w) + "," + j(d[1] - x)),
                b += d + " "
            }
            return b
        }
        function i(a, b) {
            var c = Y.createElementNS(r, "use");
            return L(c, b),
            c.setAttributeNS(s, "xlink:href", "#" + a),
            c.setAttribute("xmlns:xlink", s),
            c
        }
        function j(a) {
            return .1 * _.round(ga * a)
        }
        function k(a, b) {
            var c = Y.createElementNS(r, "text");
            c.setAttributeNS(null, "id", a),
            L(c, {
                x: "-40",
                "font-size": "28",
                fill: "red",
                stroke: "black",
                "stroke-width": "1",
                "font-family": "Impact"
            }),
            K(c, b),
            v.appendChild(c)
        }
        function l() {
            va = Y.createElementNS(r, "g"),
            va.style.display = "none",
            wb.appendChild(va);
            var a = Y.createElementNS(r, "rect");
            L(a, {
                x: 0,
                y: 0,
                width: "100%",
                height: "100%",
                fill: "rgba(0,0,0,0.5)"
            }),
            va.appendChild(a);
            var b = Y.createElementNS(r, "text");
            L(b, {
                x: "50%",
                y: "50%",
                "font-size": "48px",
                fill: "orange",
                stroke: "red",
                "stroke-width": "2px",
                "text-anchor": "middle",
                "font-family": "Impact"
            }),
            K(b, "CHECKMATE !"),
            va.appendChild(b),
            b = Y.createElementNS(r, "text"),
            L(b, {
                x: "50%",
                y: "60%",
                "font-size": "22px",
                fill: "white",
                stroke: "black",
                "stroke-width": "1px",
                "text-anchor": "middle",
                "font-family": "Impact"
            }),
            K(b, '<tspan x="50%">Press <tspan style="fill:orange;">SPACE</tspan> or <tspan style="fill:orange;">CLICK</tspan></tspan><tspan x="50%" dy="1.5em">to restart from the last checkpoint.</tspan>'),
            va.appendChild(b)
        }
        function m() {
            Ka = Y.createElementNS(r, "g"),
            wb.appendChild(Ka);
            var a = Y.createElementNS(r, "rect");
            L(a, {
                x: 0,
                y: 0,
                width: "100%",
                height: da,
                fill: fb,
                stroke: "#000"
            }),
            Ka.appendChild(a);
            var b = Y.createElementNS(r, "text");
            L(b, {
                x: "50%",
                y: "60",
                "font-size": "48px",
                fill: "orange",
                stroke: "red",
                "stroke-width": "2px",
                "text-anchor": "middle",
                "font-family": "Impact"
            }),
            K(b, 'CHESS<tspan style="font-style:italic;">PURSUIT</tspan>'),
            Ka.appendChild(b)
        }
        function n() {
            Ia = Y.createElementNS(r, "text"),
            L(Ia, {
                x: "50%",
                y: da + ea - 10,
                "font-size": "22px",
                fill: "white",
                stroke: "black",
                "stroke-width": "1px",
                "text-anchor": "middle",
                "font-family": "Impact"
            }),
            K(Ia, 'Press <tspan style="fill:orange;">SPACE</tspan> or <tspan style="fill:orange;">CLICK</tspan>'),
            wb.appendChild(Ia)
        }
        function o() {
            Ja = Y.createElementNS(r, "text"),
            L(Ja, {
                x: "50%",
                y: "50%",
                "font-size": "32px",
                fill: "orange",
                stroke: "black",
                "stroke-width": "1px",
                "text-anchor": "middle",
                "font-family": "Impact"
            }),
            K(Ja, "PAUSED"),
            Ja.style.display = "none",
            wb.appendChild(Ja)
        }
        function p() {
            var a = ea - 2 * ia
              , b = .3 * ea - 2 * ia;
            yb = ea + da,
            xb = da + ea - b - ia,
            S = Y.createElementNS(r, "svg"),
            S._y = yb,
            L(S, {
                x: ia,
                y: yb,
                width: a,
                height: b
            }),
            wb.appendChild(S);
            var c = Y.createElementNS(r, "rect");
            L(c, {
                width: "100%",
                height: "100%",
                fill: "rgba(0,0,0,0.8)",
                stroke: "#fff",
                "stroke-width": 2
            }),
            S.appendChild(c),
            T = Y.createElementNS(r, "text"),
            L(T, {
                x: 10,
                y: 20,
                "font-size": "18px",
                fill: "#fff",
                "text-anchor": "left",
                "font-family": "Impact"
            }),
            S.appendChild(T),
            U = Y.createElementNS(r, "text"),
            L(U, {
                x: 10,
                y: 40,
                "font-size": "16px",
                fill: "#fff",
                "text-anchor": "left",
                "font-family": "sans-serif"
            }),
            S.appendChild(U)
        }
        function q() {
            ua = Y.createElementNS(r, "g"),
            ua.style.display = "none",
            wb.appendChild(ua);
            var a = Y.createElementNS(r, "rect");
            L(a, {
                x: 0,
                y: 0,
                width: "100%",
                height: "100%",
                fill: "rgba(0,0,0,0.5)"
            }),
            ua.appendChild(a);
            var b = Y.createElementNS(r, "text");
            L(b, {
                x: "50%",
                y: "50%",
                "font-size": "48px",
                fill: "#5f7",
                stroke: "black",
                "stroke-width": "2px",
                "text-anchor": "middle",
                "font-family": "Impact"
            }),
            K(b, "YOU WIN !"),
            ua.appendChild(b),
            b = Y.createElementNS(r, "text"),
            L(b, {
                x: "50%",
                y: "60%",
                "font-size": "22px",
                fill: "white",
                stroke: "black",
                "stroke-width": "1px",
                "text-anchor": "middle",
                "font-family": "Impact"
            }),
            K(b, "Alas, your Queen is in another castle..."),
            ua.appendChild(b)
        }
        vb = i;
        var r = "http://www.w3.org/2000/svg"
          , s = "http://www.w3.org/1999/xlink"
          , t = ea
          , u = ea + da;
        wb = Y.createElementNS(r, "svg"),
        wb.setAttribute("xmlns", r),
        wb.setAttributeNS(null, "viewBox", "0 0 " + t + " " + u),
        wb.setAttributeNS(null, "width", t),
        wb.setAttributeNS(null, "height", u),
        $.appendChild(wb);
        var v = Y.createElementNS(r, "defs");
        wb.appendChild(v),
        zb = Y.createElementNS(r, "g"),
        wb.appendChild(zb),
        m(),
        c(Za),
        k($a, "CHECK"),
        l(),
        p(),
        n(),
        o(),
        q();
        var w = 5
          , x = 8;
        M(b(Ra, [g(["M", [2, 8], "Q", [5, 10], [8, 8], "L", [5, 3], "L", [2, 8]]), e(5, 3, 2)]), jb, kb, 0),
        M(b(Qa, [g(["M", [4.6, 1.4], "L", [5.4, 1.4], "L", [5.4, -.6], "L", [6.4, -.6], "L", [6.4, -1.4], "L", [5.4, -1.4], "L", [5.4, -2.4], "L", [4.6, -2.4], "L", [4.6, -1.4], "L", [3.6, -1.4], "L", [3.6, -.6], "L", [4.6, -.6], "L", [4.6, 1.4]]), g(["M", [2, 8], "Q", [5, 10], [8, 8], "L", [6, 3], "L", [7, 1], "Q", [5, 0], [3, 1], "L", [4, 3], "L", [2, 8]])]), jb, kb, 0),
        M(b(Ua, [g(["M", [2, 8], "Q", [5, 10], [8, 8], "L", [7, 6], "Q", [8, 3], [7, 0], "L", [6, 1], "L", [5, 1], "L", [2, 4], "L", [3, 5], "L", [5, 4], "L", [2, 8]])]), jb, kb, 0),
        M(b(Sa, [g(["M", [2, 8], "Q", [5, 10], [8, 8], "L", [6.5, 3], "L", [8, 2], "L", [8, 0], "L", [7, 0], "L", [7, 1], "L", [6, 1], "L", [6, 0], "L", [4, 0], "L", [4, 1], "L", [3, 1], "L", [3, 0], "L", [2, 0], "L", [2, 2], "L", [3.5, 3], "L", [2, 8]])]), jb, kb, 0),
        M(b(Ta, [g(["M", [2, 8], "Q", [5, 10], [8, 8], "L", [6, 4], "Q", [8, 1.1], [5, 0], "Q", [2, 1.1], [4, 4], "L", [2, 8]]), e(5, 0, .7), g(["M", [3.8, .8], "L", [4.4, 2.5]], {
            "stroke-width": 2
        })]), jb, kb, 0),
        M(b(Wa, [g(["M", [2, 8], "Q", [5, 10], [8, 8], "L", [8.5, 6], "L", [7, 7], "L", [7, 5], "L", [6, 6], "L", [5, 4.5], "L", [4, 6], "L", [3, 5], "L", [3, 7], "L", [1.5, 6], "L", [2, 8]])]), jb, kb, 0),
        M(b(Va, [a(2, 9.5), a(5, 9), a(8, 10), a(7, 8), a(4, 7.5), a(1, 8.5)], !0), jb, kb, 0),
        M(b(Pa, [g(["M", [4.6, 1.4], "L", [5.4, 1.4], "L", [5.4, -.6], "L", [6.4, -.6], "L", [6.4, -1.4], "L", [5.4, -1.4], "L", [5.4, -2.4], "L", [4.6, -2.4], "L", [4.6, -1.4], "L", [3.6, -1.4], "L", [3.6, -.6], "L", [4.6, -.6], "L", [4.6, 1.4]]), g(["M", [2, 8], "Q", [5, 10], [8, 8], "L", [6, 3], "L", [7, 1], "Q", [5, 0], [3, 1], "L", [4, 3], "L", [2, 8]])]), "#002", "#333", 0),
        M(b(Ya, [e(5, .4, .6), g(["M", [2, 8], "Q", [5, 10], [8, 8], "L", [6, 3], "L", [7.5, 1], "L", [5.8, 1.5], "L", [5, .8], "L", [4.2, 1.5], "L", [2.5, 1], "L", [4, 3], "L", [2, 8]])]), "#002", "#333", 0),
        w = 2.5,
        x = 50,
        M(b(Xa, [g(["M", [25, 30], "L", [50, 30], "L", [50, 5], "L", [45, 5], "L", [45, 10], "L", [40, 10], "L", [40, 5], "L", [35, 5], "L", [35, 10], "L", [30, 10], "L", [30, 5], "L", [25, 5], "L", [25, 30]]), g(["M", [0, 50], "L", [0, 50], "L", [27.5, 50], "L", [27.5, 35], "L", [47.5, 35], "L", [47.5, 50], "L", [75, 50], "L", [75, 20], "L", [70, 20], "L", [70, 25], "L", [65, 25], "L", [65, 20], "L", [60, 20], "L", [60, 25], "L", [55, 25], "L", [55, 20], "L", [50, 20], "L", [50, 25], "L", [45, 25], "L", [45, 20], "L", [40, 20], "L", [40, 25], "L", [35, 25], "L", [35, 20], "L", [30, 20], "L", [30, 25], "L", [25, 25], "L", [25, 20], "L", [20, 20], "L", [20, 25], "L", [15, 25], "L", [15, 20], "L", [10, 20], "L", [10, 25], "L", [5, 25], "L", [5, 20], "L", [0, 20], "L", [0, 50]])], !0), jb, kb, 0)
    }
    function I(a, b) {
        a ? K(T, "White King :") : K(T, "Black King :");
        for (var c = "", d = 0; d < b.length; d++)
            c += '<tspan x="10" ' + (0 === d ? "" : 'dy="1.2em"') + ">" + b[d] + "</tspan>";
        K(U, c),
        p(S, {
            _y: xb
        }, 0, .5)
    }
    function J() {
        p(S, {
            _y: yb
        }, 0, .5)
    }
    function K(a, b) {
        for (; a.firstChild; )
            a.removeChild(a.firstChild);
        var c = "<svg>" + b + "</svg>";
        Bb.innerHTML = c;
        var d = Array.prototype.slice.call(Bb.childNodes[0].childNodes);
        d.forEach(function(b) {
            a.appendChild(b)
        })
    }
    function L(a, b) {
        if (b)
            for (var c in b)
                a.setAttributeNS(null, c, b[c]);
        return a
    }
    function M(a, b, c, d) {
        var e = {};
        return "undefined" != typeof b && (e.fill = b),
        "undefined" != typeof c && (e.stroke = c),
        "undefined" != typeof d && (e.strokeWidth = d),
        L(a, e),
        a
    }
    function N(a, b) {
        b || (b = window.e);
        var c = b.keyCode;
        b.charCode && !c && (c = b.charCode);
        var d = Cb[c];
        // console.log('a', a)
        // console.log('db', db)
        // console.log('cb', Cb)
        // console.log('Eb', Eb)
        // console.log('c', c)
        // console.log('d', d)
        d && (b.preventDefault(),
        Db[d] !== a && (Db[d] = a,
        "undefined" == typeof Eb[d] && (Eb[d] = -1),
        a ? Eb[d] < 1 && (Eb[d] = 1) : Eb[d] > 0 && (Eb[d] = 0)))
    }
    function O(a, b) {
        cb.click = a,
        Y.onmousemove(b)
    }
    var P, Q, R, S, T, U, V, W, X = window, Y = X.document, Z = Y.body, $ = null, _ = X.Math, ba = _.PI, ca = (_.sqrt,
    _.random,
    1), da = 100 * ca, ea = 400 * ca, fa = 8, ga = ea / fa, ha = 2 * fa + 3, ia = 6, ja = D(ea, ea, "bg"), ka = E(ja), la = D(ea, ea, "shadow"), ma = E(la), na = D(ea, 2 * ea, "sky"), oa = E(na), pa = 0, qa = .001, ra = 0, sa = 0, ta = 0, ua = null, va = null, wa = !1, xa = !1, ya = 0, za = 1, Aa = null, Ba = null, Ca = -1, Da = !0, Ea = [], Fa = null, Ga = .05, Ha = .5, Ia = null, Ja = null, Ka = null, La = !0, Ma = 0, Na = 0, Oa = -1, Pa = "h", Qa = "e", Ra = "p", Sa = "r", Ta = "b", Ua = "k", Va = "l", Wa = "w", Xa = "c", Ya = "q", Za = "ef", $a = "ct", _a = 6, ab = -1, bb = !1, cb = {}, db = -1, eb = -1, fb = "#193441", gb = "#D1DBBD", hb = "#3E606F", ib = "#794", jb = "#eee", kb = "#555", lb = "255,0,0", mb = "rgba(93, 255, 182, 0.56)", nb = -.02, ob = .02;
    u.res = {};
    var pb = 3 / 16
      , qb = -0.875
      , rb = 1
      , sb = -2.5 / 16
      , tb = 0
      , ub = 1;
    w.res = {},
    x.res = {};
    var vb, wb, xb, yb, zb = null, Ab = {}, Bb = Y.createElement("div"), Cb = {
        37: "left",
        65: "left",
        81: "left",
        38: "up",
        90: "up",
        87: "up",
        83: "down",
        40: "down",
        39: "right",
        68: "right",
        32: "space",
        27: "esc",
        13: "enter"
    }, Db = {}, Eb = {};
    Y.onkeyup = function(a) {
        La || !Db.enter || wa || (Da = !Da,
        Ja.style.display = Da ? "none" : "block",
        console.log("debug toggle anim: ", Da),
        Da && (P = Date.now(),
        j())),
        N(!1, a)
    }
    ,
    Y.onkeydown = function(a) {
        N(!0, a)
    }
    ,
    Y.onmousedown = function(a) {
        O(!0, a)
    }
    ,
    Y.onmousemove = function(a) {
        cb.x = a.clientX - $.offsetLeft,
        cb.y = a.clientY
    }
    ,
    a()
}
;
