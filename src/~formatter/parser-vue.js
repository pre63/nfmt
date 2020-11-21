!(function(t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
      ? define(e)
      : ((t.prettierPlugins = t.prettierPlugins || {}), (t.prettierPlugins.vue = e()))
})(this, function() {
  'use strict'
  var t = function(t) {
    return /^\s*<!--\s*@(format|prettier)\s*-->/.test(t)
  }
  function e(t, e) {
    for (var n = Object.create(null), r = t.split(','), a = r.length, o = 0; o < a; o++)
      n[r[o]] = !0
    return e
      ? function(t) {
          return n[t.toLowerCase()]
        }
      : function(t) {
          return n[t]
        }
  }
  var n = function() {
      return !1
    },
    r = e(
      'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track'
    ),
    a = /^\s*([^\s"'<>/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
    o = '[a-zA-Z_][\\w\\-\\.]*',
    s = '((?:'.concat(o, '\\:)?').concat(o, ')'),
    i = new RegExp('^<'.concat(s)),
    c = /^\s*(\/?)>/,
    u = new RegExp('^<\\/'.concat(s, '[^>]*>')),
    l = /^<!DOCTYPE [^>]+>/i,
    f = /^<!--/,
    d = /^<!\[/,
    h = !1
  'x'.replace(/x(.)?/g, function(t, e) {
    h = '' === e
  })
  var g = e('script,style,textarea', !0),
    p = {},
    v = { '&lt;': '<', '&gt;': '>', '&quot;': '"', '&amp;': '&', '&#10;': '\n', '&#9;': '\t' },
    m = /&(?:lt|gt|quot|amp);/g,
    x = /&(?:lt|gt|quot|amp|#10|#9);/g,
    y = e('pre,textarea', !0),
    w = function(t, e) {
      return t && y(t) && '\n' === e[0]
    }
  function b(t, e) {
    var n = e ? x : m
    return t.replace(n, function(t) {
      return v[t]
    })
  }
  return {
    parsers: {
      vue: {
        parse: function(t) {
          var e = {
              tag: 'root',
              attrs: [],
              unary: !1,
              start: 0,
              contentStart: 0,
              contentEnd: t.length,
              end: t.length,
              children: [],
              comments: []
            },
            o = [e],
            s = e
          return (
            (function(t, e) {
              for (
                var o,
                  s,
                  v = [],
                  m = e.expectHTML,
                  x = e.isUnaryTag || n,
                  y = e.canBeLeftOpenTag || n,
                  C = 0;
                t;

              ) {
                if (((o = t), s && g(s)))
                  !(function() {
                    var n = 0,
                      r = s.toLowerCase(),
                      a = p[r] || (p[r] = new RegExp('([\\s\\S]*?)(</' + r + '[^>]*>)', 'i')),
                      o = t.replace(a, function(t, a, o) {
                        return (
                          (n = o.length),
                          g(r) ||
                            'noscript' === r ||
                            (a = a
                              .replace(/<!--([\s\S]*?)-->/g, '$1')
                              .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1')),
                          w(r, a) && (a = a.slice(1)),
                          e.chars && e.chars(a),
                          ''
                        )
                      })
                    ;(C += t.length - o.length), (t = o), F(r, C - n, C)
                  })()
                else {
                  var O = t.indexOf('<')
                  if (0 === O) {
                    if (f.test(t)) {
                      var S = t.indexOf('--\x3e')
                      if (S >= 0) {
                        e.shouldKeepComment && e.comment(t.substring(4, S)), k(S + 3)
                        continue
                      }
                    }
                    if (d.test(t)) {
                      var E = t.indexOf(']>')
                      if (E >= 0) {
                        k(E + 2)
                        continue
                      }
                    }
                    var T = t.match(l)
                    if (T) {
                      k(T[0].length)
                      continue
                    }
                    var L = t.match(u)
                    if (L) {
                      var P = C
                      k(L[0].length), F(L[1], P, C)
                      continue
                    }
                    var q = R()
                    if (q) {
                      j(q), w(s, t) && k(1)
                      continue
                    }
                  }
                  var A = void 0,
                    D = void 0,
                    N = void 0
                  if (O >= 0) {
                    for (
                      D = t.slice(O);
                      !(
                        u.test(D) ||
                        i.test(D) ||
                        f.test(D) ||
                        d.test(D) ||
                        (N = D.indexOf('<', 1)) < 0
                      );

                    )
                      (O += N), (D = t.slice(O))
                    ;(A = t.substring(0, O)), k(O)
                  }
                  O < 0 && ((A = t), (t = '')), e.chars && A && e.chars(A)
                }
                if (t === o) {
                  e.chars && e.chars(t)
                  break
                }
              }
              function k(e) {
                ;(C += e), (t = t.substring(e))
              }
              function R() {
                var e = t.match(i)
                if (e) {
                  var n,
                    r,
                    o = { tagName: e[1], attrs: [], start: C }
                  for (k(e[0].length); !(n = t.match(c)) && (r = t.match(a)); )
                    k(r[0].length), o.attrs.push(r)
                  if (n) return (o.unarySlash = n[1]), k(n[0].length), (o.end = C), o
                }
              }
              function j(t) {
                var n = t.tagName,
                  a = t.unarySlash
                m && ('p' === s && r(n) && F(s), y(n) && s === n && F(n))
                for (var o = x(n) || !!a, i = t.attrs.length, c = new Array(i), u = 0; u < i; u++) {
                  var l = t.attrs[u]
                  h &&
                    -1 === l[0].indexOf('""') &&
                    ('' === l[3] && delete l[3],
                    '' === l[4] && delete l[4],
                    '' === l[5] && delete l[5])
                  var f = l[3] || l[4] || l[5] || '',
                    d =
                      'a' === n && 'href' === l[1]
                        ? e.shouldDecodeNewlinesForHref
                        : e.shouldDecodeNewlines
                  c[u] = { name: l[1], value: b(f, d) }
                }
                o || (v.push({ tag: n, lowerCasedTag: n.toLowerCase(), attrs: c }), (s = n)),
                  e.start && e.start(n, c, o, t.start, t.end)
              }
              function F(t, n, r) {
                var a, o
                if ((null == n && (n = C), null == r && (r = C), t && (o = t.toLowerCase()), t))
                  for (a = v.length - 1; a >= 0 && v[a].lowerCasedTag !== o; a--);
                else a = 0
                if (a >= 0) {
                  for (var i = v.length - 1; i >= a; i--) e.end && e.end(v[i].tag, n, r)
                  ;(v.length = a), (s = a && v[a - 1].tag)
                } else
                  'br' === o
                    ? e.start && e.start(t, [], !0, n, r)
                    : 'p' === o && (e.start && e.start(t, [], !1, n, r), e.end && e.end(t, n, r))
              }
              F()
            })(t, {
              start: function(t, e, n, r, a) {
                var i = { tag: t, attrs: e, unary: n, start: r, children: [] }
                s.children.push(i), n ? (i.end = a) : ((i.contentStart = a), o.push(i), (s = i))
              },
              end: function(t, e, n) {
                o.pop(), (s.contentEnd = e), (s.end = n), (s = o[o.length - 1])
              }
            }),
            e
          )
        },
        hasPragma: t,
        astFormat: 'vue',
        locStart: function(t) {
          return t.start
        },
        locEnd: function(t) {
          return t.end
        }
      }
    }
  }
})
