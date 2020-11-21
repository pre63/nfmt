!(function(e, n) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = n())
    : 'function' == typeof define && define.amd
      ? define(n)
      : ((e.prettierPlugins = e.prettierPlugins || {}), (e.prettierPlugins.graphql = n()))
})(this, function() {
  'use strict'
  function e(n) {
    return (e =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function(e) {
            return typeof e
          }
        : function(e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e
          })(n)
  }
  var n = function(e, n) {
    var t = new SyntaxError(e + ' (' + n.start.line + ':' + n.start.column + ')')
    return (t.loc = n), t
  }
  var t = function(e) {
    return /^\s*#[^\n\S]*@(format|prettier)\s*(\n|$)/.test(e)
  }
  function r(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
  }
  function i(e, n) {
    return e((n = { exports: {} }), n.exports), n.exports
  }
  var o = i(function(e, n) {
    Object.defineProperty(n, '__esModule', { value: !0 }),
      (n.getLocation = function(e, n) {
        var t = /\r\n|[\n\r]/g,
          r = 1,
          i = n + 1,
          o = void 0
        for (; (o = t.exec(e.body)) && o.index < n; )
          (r += 1), (i = n + 1 - (o.index + o[0].length))
        return { line: r, column: i }
      })
  })
  r(o)
  var a = i(function(e, n) {
    Object.defineProperty(n, '__esModule', { value: !0 })
    n.Kind = Object.freeze({
      NAME: 'Name',
      DOCUMENT: 'Document',
      OPERATION_DEFINITION: 'OperationDefinition',
      VARIABLE_DEFINITION: 'VariableDefinition',
      VARIABLE: 'Variable',
      SELECTION_SET: 'SelectionSet',
      FIELD: 'Field',
      ARGUMENT: 'Argument',
      FRAGMENT_SPREAD: 'FragmentSpread',
      INLINE_FRAGMENT: 'InlineFragment',
      FRAGMENT_DEFINITION: 'FragmentDefinition',
      INT: 'IntValue',
      FLOAT: 'FloatValue',
      STRING: 'StringValue',
      BOOLEAN: 'BooleanValue',
      NULL: 'NullValue',
      ENUM: 'EnumValue',
      LIST: 'ListValue',
      OBJECT: 'ObjectValue',
      OBJECT_FIELD: 'ObjectField',
      DIRECTIVE: 'Directive',
      NAMED_TYPE: 'NamedType',
      LIST_TYPE: 'ListType',
      NON_NULL_TYPE: 'NonNullType',
      SCHEMA_DEFINITION: 'SchemaDefinition',
      OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
      SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
      OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
      FIELD_DEFINITION: 'FieldDefinition',
      INPUT_VALUE_DEFINITION: 'InputValueDefinition',
      INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
      UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
      ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
      ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
      INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
      SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
      OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
      INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
      UNION_TYPE_EXTENSION: 'UnionTypeExtension',
      ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
      INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension',
      DIRECTIVE_DEFINITION: 'DirectiveDefinition'
    })
  })
  r(a)
  var c = i(function(e, n) {
    function t(e, n) {
      var t = n.line,
        o = e.locationOffset.line - 1,
        a = (function(e, n) {
          return 1 === n.line ? e.locationOffset.column - 1 : 0
        })(e, n),
        c = t + o,
        u = n.column + a,
        s = (c - 1).toString(),
        l = c.toString(),
        d = (c + 1).toString(),
        f = d.length,
        v = e.body.split(/\r\n|[\n\r]/g)
      return (
        (v[0] = r(e.locationOffset.column - 1) + v[0]),
        [
          e.name + ' (' + c + ':' + u + ')',
          t >= 2 && i(f, s) + ': ' + v[t - 2],
          i(f, l) + ': ' + v[t - 1],
          r(2 + f + u - 1) + '^',
          t < v.length && i(f, d) + ': ' + v[t]
        ]
          .filter(Boolean)
          .join('\n'))
    }
    function r(e) {
      return Array(e + 1).join(' ')
    }
    function i(e, n) {
      return r(e - n.length) + n
    }
    Object.defineProperty(n, '__esModule', { value: !0 }),
      (n.printError = function(e) {
        var n = []
        if (e.nodes)
          e.nodes.forEach(function(e) {
            e.loc && n.push(t(e.loc.source, (0, o.getLocation)(e.loc.source, e.loc.start)))
          })
        else if (e.source && e.locations) {
          var r = e.source
          e.locations.forEach(function(e) {
            n.push(t(r, e))
          })
        }
        return 0 === n.length ? e.message : [e.message].concat(n).join('\n\n') + '\n'
      })
  })
  r(c)
  var u = i(function(e, n) {
    function t(e, n, r, i, a, c, u) {
      var s = Array.isArray(n) ? (0 !== n.length ? n : void 0) : n ? [n] : void 0,
        l = r
      if (!l && s) {
        var d = s[0]
        l = d && d.loc && d.loc.source
      }
      var f = i
      !f &&
        s &&
        (f = s.reduce(function(e, n) {
          return n.loc && e.push(n.loc.start), e
        }, [])),
        f && 0 === f.length && (f = void 0)
      var v = void 0
      i && r
        ? (v = i.map(function(e) {
            return (0, o.getLocation)(r, e)
          }))
        : s &&
          (v = s.reduce(function(e, n) {
            return n.loc && e.push((0, o.getLocation)(n.loc.source, n.loc.start)), e
          }, [])),
        Object.defineProperties(this, {
          message: { value: e, enumerable: !0, writable: !0 },
          locations: { value: v || void 0, enumerable: !0 },
          path: { value: a || void 0, enumerable: !0 },
          nodes: { value: s || void 0 },
          source: { value: l || void 0 },
          positions: { value: f || void 0 },
          originalError: { value: c },
          extensions: { value: u || (c && c.extensions) }
        }),
        c && c.stack
          ? Object.defineProperty(this, 'stack', { value: c.stack, writable: !0, configurable: !0 })
          : Error.captureStackTrace
            ? Error.captureStackTrace(this, t)
            : Object.defineProperty(this, 'stack', {
                value: Error().stack,
                writable: !0,
                configurable: !0
              })
    }
    Object.defineProperty(n, '__esModule', { value: !0 }),
      (n.GraphQLError = t),
      (t.prototype = Object.create(Error.prototype, {
        constructor: { value: t },
        name: { value: 'GraphQLError' },
        toString: {
          value: function() {
            return (0, c.printError)(this)
          }
        }
      }))
  })
  r(u)
  var s = i(function(e, n) {
    Object.defineProperty(n, '__esModule', { value: !0 }),
      (n.syntaxError = function(e, n, t) {
        return new u.GraphQLError('Syntax Error: ' + t, void 0, e, [n])
      })
  })
  r(s)
  var l = i(function(e, n) {
    Object.defineProperty(n, '__esModule', { value: !0 }),
      (n.locatedError = function(e, n, t) {
        if (e && Array.isArray(e.path)) return e
        return new u.GraphQLError(
          e && e.message,
          (e && e.nodes) || n,
          e && e.source,
          e && e.positions,
          t,
          e
        )
      })
  })
  r(l)
  var d = i(function(e, n) {
    Object.defineProperty(n, '__esModule', { value: !0 }),
      (n.default = function(e, n) {
        if (!e) throw new Error(n)
      })
  })
  r(d)
  var f = i(function(e, n) {
    Object.defineProperty(n, '__esModule', { value: !0 })
    var t =
      Object.assign ||
      function(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = arguments[n]
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        }
        return e
      }
    n.formatError = function(e) {
      return (
        e || (0, i.default)(0, 'Received null or undefined error.'),
        t({}, e.extensions, {
          message: e.message || 'An unknown error occurred.',
          locations: e.locations,
          path: e.path
        }))
    }
    var r,
      i = (r = d) && r.__esModule ? r : { default: r }
  })
  r(f)
  var v = i(function(e, n) {
    Object.defineProperty(n, '__esModule', { value: !0 }),
      Object.defineProperty(n, 'GraphQLError', {
        enumerable: !0,
        get: function() {
          return u.GraphQLError
        }
      }),
      Object.defineProperty(n, 'syntaxError', {
        enumerable: !0,
        get: function() {
          return s.syntaxError
        }
      }),
      Object.defineProperty(n, 'locatedError', {
        enumerable: !0,
        get: function() {
          return l.locatedError
        }
      }),
      Object.defineProperty(n, 'printError', {
        enumerable: !0,
        get: function() {
          return c.printError
        }
      }),
      Object.defineProperty(n, 'formatError', {
        enumerable: !0,
        get: function() {
          return f.formatError
        }
      })
  })
  r(v)
  var E = i(function(e, n) {
    function t(e) {
      for (var n = 0; n < e.length && (' ' === e[n] || '\t' === e[n]); ) n++
      return n
    }
    function r(e) {
      return t(e) === e.length
    }
    Object.defineProperty(n, '__esModule', { value: !0 }),
      (n.default = function(e) {
        for (var n = e.split(/\r\n|[\n\r]/g), i = null, o = 1; o < n.length; o++) {
          var a = n[o],
            c = t(a)
          if (c < a.length && (null === i || c < i) && 0 === (i = c)) break
        }
        if (i) for (var u = 1; u < n.length; u++) n[u] = n[u].slice(i)
        for (; n.length > 0 && r(n[0]); ) n.shift()
        for (; n.length > 0 && r(n[n.length - 1]); ) n.pop()
        return n.join('\n')
      })
  })
  r(E)
  var p = i(function(e, n) {
    Object.defineProperty(n, '__esModule', { value: !0 }),
      (n.TokenKind = void 0),
      (n.createLexer = function(e, n) {
        var t = new s(a.SOF, 0, 0, 0, 0, null)
        return {
          source: e,
          options: n,
          lastToken: t,
          token: t,
          line: 1,
          lineStart: 0,
          advance: i,
          lookahead: o
        }
      }),
      (n.getTokenDesc = function(e) {
        var n = e.value
        return n ? e.kind + ' "' + n + '"' : e.kind
      })
    var t,
      r = (t = E) && t.__esModule ? t : { default: t }
    function i() {
      return (this.lastToken = this.token), (this.token = this.lookahead())
    }
    function o() {
      var e = this.token
      if (e.kind !== a.EOF)
        do {
          e = e.next || (e.next = d(this, e))
        } while (e.kind === a.COMMENT)
      return e
    }
    var a = (n.TokenKind = Object.freeze({
      SOF: '<SOF>',
      EOF: '<EOF>',
      BANG: '!',
      DOLLAR: '$',
      AMP: '&',
      PAREN_L: '(',
      PAREN_R: ')',
      SPREAD: '...',
      COLON: ':',
      EQUALS: '=',
      AT: '@',
      BRACKET_L: '[',
      BRACKET_R: ']',
      BRACE_L: '{',
      PIPE: '|',
      BRACE_R: '}',
      NAME: 'Name',
      INT: 'Int',
      FLOAT: 'Float',
      STRING: 'String',
      BLOCK_STRING: 'BlockString',
      COMMENT: 'Comment'
    }))
    var c = String.prototype.charCodeAt,
      u = String.prototype.slice
    function s(e, n, t, r, i, o, a) {
      ;(this.kind = e),
        (this.start = n),
        (this.end = t),
        (this.line = r),
        (this.column = i),
        (this.value = a),
        (this.prev = o),
        (this.next = null)
    }
    function l(e) {
      return isNaN(e)
        ? a.EOF
        : e < 127
          ? JSON.stringify(String.fromCharCode(e))
          : '"\\u' + ('00' + e.toString(16).toUpperCase()).slice(-4) + '"'
    }
    function d(e, n) {
      var t = e.source,
        i = t.body,
        o = i.length,
        d = (function(e, n, t) {
          var r = e.length,
            i = n
          for (; i < r; ) {
            var o = c.call(e, i)
            if (9 === o || 32 === o || 44 === o || 65279 === o) ++i
            else if (10 === o) ++i, ++t.line, (t.lineStart = i)
            else {
              if (13 !== o) break
              10 === c.call(e, i + 1) ? (i += 2) : ++i, ++t.line, (t.lineStart = i)
            }
          }
          return i
        })(i, n.end, e),
        E = e.line,
        T = 1 + d - e.lineStart
      if (d >= o) return new s(a.EOF, o, o, E, T, n)
      var N = c.call(i, d)
      if (N < 32 && 9 !== N && 10 !== N && 13 !== N)
        throw (0, v.syntaxError)(t, d, 'Cannot contain the invalid character ' + l(N) + '.')
      switch (N) {
        case 33:
          return new s(a.BANG, d, d + 1, E, T, n)
        case 35:
          return (function(e, n, t, r, i) {
            var o = e.body,
              l = void 0,
              d = n
            do {
              l = c.call(o, ++d)
            } while (null !== l && (l > 31 || 9 === l))
            return new s(a.COMMENT, n, d, t, r, i, u.call(o, n + 1, d))
          })(t, d, E, T, n)
        case 36:
          return new s(a.DOLLAR, d, d + 1, E, T, n)
        case 38:
          return new s(a.AMP, d, d + 1, E, T, n)
        case 40:
          return new s(a.PAREN_L, d, d + 1, E, T, n)
        case 41:
          return new s(a.PAREN_R, d, d + 1, E, T, n)
        case 46:
          if (46 === c.call(i, d + 1) && 46 === c.call(i, d + 2))
            return new s(a.SPREAD, d, d + 3, E, T, n)
          break
        case 58:
          return new s(a.COLON, d, d + 1, E, T, n)
        case 61:
          return new s(a.EQUALS, d, d + 1, E, T, n)
        case 64:
          return new s(a.AT, d, d + 1, E, T, n)
        case 91:
          return new s(a.BRACKET_L, d, d + 1, E, T, n)
        case 93:
          return new s(a.BRACKET_R, d, d + 1, E, T, n)
        case 123:
          return new s(a.BRACE_L, d, d + 1, E, T, n)
        case 124:
          return new s(a.PIPE, d, d + 1, E, T, n)
        case 125:
          return new s(a.BRACE_R, d, d + 1, E, T, n)
        case 65:
        case 66:
        case 67:
        case 68:
        case 69:
        case 70:
        case 71:
        case 72:
        case 73:
        case 74:
        case 75:
        case 76:
        case 77:
        case 78:
        case 79:
        case 80:
        case 81:
        case 82:
        case 83:
        case 84:
        case 85:
        case 86:
        case 87:
        case 88:
        case 89:
        case 90:
        case 95:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 108:
        case 109:
        case 110:
        case 111:
        case 112:
        case 113:
        case 114:
        case 115:
        case 116:
        case 117:
        case 118:
        case 119:
        case 120:
        case 121:
        case 122:
          return (function(e, n, t, r, i) {
            var o = e.body,
              l = o.length,
              d = n + 1,
              f = 0
            for (
              ;
              d !== l &&
              null !== (f = c.call(o, d)) &&
              (95 === f || (f >= 48 && f <= 57) || (f >= 65 && f <= 90) || (f >= 97 && f <= 122));

            )
              ++d
            return new s(a.NAME, n, d, t, r, i, u.call(o, n, d))
          })(t, d, E, T, n)
        case 45:
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          return (function(e, n, t, r, i, o) {
            var d = e.body,
              E = t,
              p = n,
              T = !1
            45 === E && (E = c.call(d, ++p))
            if (48 === E) {
              if ((E = c.call(d, ++p)) >= 48 && E <= 57)
                throw (0, v.syntaxError)(
                  e,
                  p,
                  'Invalid number, unexpected digit after 0: ' + l(E) + '.'
                )
            } else (p = f(e, p, E)), (E = c.call(d, p))
            46 === E && ((T = !0), (E = c.call(d, ++p)), (p = f(e, p, E)), (E = c.call(d, p)))
            ;(69 !== E && 101 !== E) ||
              ((T = !0),
              (43 !== (E = c.call(d, ++p)) && 45 !== E) || (E = c.call(d, ++p)),
              (p = f(e, p, E)))
            return new s(T ? a.FLOAT : a.INT, n, p, r, i, o, u.call(d, n, p))
          })(t, d, N, E, T, n)
        case 34:
          return 34 === c.call(i, d + 1) && 34 === c.call(i, d + 2)
            ? (function(e, n, t, i, o) {
                var d = e.body,
                  f = n + 3,
                  E = f,
                  p = 0,
                  T = ''
                for (; f < d.length && null !== (p = c.call(d, f)); ) {
                  if (34 === p && 34 === c.call(d, f + 1) && 34 === c.call(d, f + 2))
                    return (
                      (T += u.call(d, E, f)),
                      new s(a.BLOCK_STRING, n, f + 3, t, i, o, (0, r.default)(T)))
                  if (p < 32 && 9 !== p && 10 !== p && 13 !== p)
                    throw (0, v.syntaxError)(e, f, 'Invalid character within String: ' + l(p) + '.')
                  92 === p &&
                  34 === c.call(d, f + 1) &&
                  34 === c.call(d, f + 2) &&
                  34 === c.call(d, f + 3)
                    ? ((T += u.call(d, E, f) + '"""'), (E = f += 4))
                    : ++f
                }
                throw (0, v.syntaxError)(e, f, 'Unterminated string.')
              })(t, d, E, T, n)
            : (function(e, n, t, r, i) {
                var o = e.body,
                  d = n + 1,
                  f = d,
                  E = 0,
                  T = ''
                for (; d < o.length && null !== (E = c.call(o, d)) && 10 !== E && 13 !== E; ) {
                  if (34 === E) return (T += u.call(o, f, d)), new s(a.STRING, n, d + 1, t, r, i, T)
                  if (E < 32 && 9 !== E)
                    throw (0, v.syntaxError)(e, d, 'Invalid character within String: ' + l(E) + '.')
                  if ((++d, 92 === E)) {
                    switch (((T += u.call(o, f, d - 1)), (E = c.call(o, d)))) {
                      case 34:
                        T += '"'
                        break
                      case 47:
                        T += '/'
                        break
                      case 92:
                        T += '\\'
                        break
                      case 98:
                        T += '\b'
                        break
                      case 102:
                        T += '\f'
                        break
                      case 110:
                        T += '\n'
                        break
                      case 114:
                        T += '\r'
                        break
                      case 116:
                        T += '\t'
                        break
                      case 117:
                        var N = ((I = c.call(o, d + 1)),
                        (k = c.call(o, d + 2)),
                        (m = c.call(o, d + 3)),
                        (y = c.call(o, d + 4)),
                        (p(I) << 12) | (p(k) << 8) | (p(m) << 4) | p(y))
                        if (N < 0)
                          throw (0, v.syntaxError)(
                            e,
                            d,
                            'Invalid character escape sequence: \\u' + o.slice(d + 1, d + 5) + '.'
                          )
                        ;(T += String.fromCharCode(N)), (d += 4)
                        break
                      default:
                        throw (0, v.syntaxError)(
                          e,
                          d,
                          'Invalid character escape sequence: \\' + String.fromCharCode(E) + '.'
                        )
                    }
                    f = ++d
                  }
                }
                var I, k, m, y
                throw (0, v.syntaxError)(e, d, 'Unterminated string.')
              })(t, d, E, T, n)
      }
      throw (0, v.syntaxError)(
        t,
        d,
        (function(e) {
          if (39 === e)
            return 'Unexpected single quote character (\'), did you mean to use a double quote (")?'
          return 'Cannot parse the unexpected character ' + l(e) + '.'
        })(N))
    }
    function f(e, n, t) {
      var r = e.body,
        i = n,
        o = t
      if (o >= 48 && o <= 57) {
        do {
          o = c.call(r, ++i)
        } while (o >= 48 && o <= 57)
        return i
      }
      throw (0, v.syntaxError)(e, i, 'Invalid number, expected digit but got: ' + l(o) + '.')
    }
    function p(e) {
      return e >= 48 && e <= 57
        ? e - 48
        : e >= 65 && e <= 70
          ? e - 55
          : e >= 97 && e <= 102
            ? e - 87
            : -1
    }
    s.prototype.toJSON = s.prototype.inspect = function() {
      return { kind: this.kind, value: this.value, line: this.line, column: this.column }
    }
  })
  r(p)
  var T = i(function(e, n) {
    Object.defineProperty(n, '__esModule', { value: !0 }), (n.Source = void 0)
    var t,
      r = (t = d) && t.__esModule ? t : { default: t }
    n.Source = function e(n, t, i) {
      !(function(e, n) {
        if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function')
      })(this, e),
        (this.body = n),
        (this.name = t || 'GraphQL request'),
        (this.locationOffset = i || { line: 1, column: 1 }),
        this.locationOffset.line > 0 ||
          (0, r.default)(0, 'line in locationOffset is 1-indexed and must be positive'),
        this.locationOffset.column > 0 ||
          (0, r.default)(0, 'column in locationOffset is 1-indexed and must be positive')
    }
  })
  r(T)
  var N = i(function(e, n) {
    Object.defineProperty(n, '__esModule', { value: !0 })
    n.DirectiveLocation = Object.freeze({
      QUERY: 'QUERY',
      MUTATION: 'MUTATION',
      SUBSCRIPTION: 'SUBSCRIPTION',
      FIELD: 'FIELD',
      FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
      FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
      INLINE_FRAGMENT: 'INLINE_FRAGMENT',
      SCHEMA: 'SCHEMA',
      SCALAR: 'SCALAR',
      OBJECT: 'OBJECT',
      FIELD_DEFINITION: 'FIELD_DEFINITION',
      ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
      INTERFACE: 'INTERFACE',
      UNION: 'UNION',
      ENUM: 'ENUM',
      ENUM_VALUE: 'ENUM_VALUE',
      INPUT_OBJECT: 'INPUT_OBJECT',
      INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
    })
  })
  r(N)
  var I = i(function(e, n) {
    function t(e) {
      var n = X(e, p.TokenKind.NAME)
      return { kind: a.Kind.NAME, value: n.value, loc: Y(e, n) }
    }
    function r(e) {
      if (Q(e, p.TokenKind.NAME))
        switch (e.token.value) {
          case 'query':
          case 'mutation':
          case 'subscription':
          case 'fragment':
            return i(e)
          case 'schema':
          case 'scalar':
          case 'type':
          case 'interface':
          case 'union':
          case 'enum':
          case 'input':
          case 'extend':
          case 'directive':
            return S(e)
        }
      else {
        if (Q(e, p.TokenKind.BRACE_L)) return i(e)
        if (D(e)) return S(e)
      }
      throw $(e)
    }
    function i(e) {
      if (Q(e, p.TokenKind.NAME))
        switch (e.token.value) {
          case 'query':
          case 'mutation':
          case 'subscription':
            return o(e)
          case 'fragment':
            return (function(e) {
              var n = e.token
              if ((H(e, 'fragment'), e.options.experimentalFragmentVariables))
                return {
                  kind: a.Kind.FRAGMENT_DEFINITION,
                  name: m(e),
                  variableDefinitions: u(e),
                  typeCondition: (H(e, 'on'), L(e)),
                  directives: g(e, !1),
                  selectionSet: d(e),
                  loc: Y(e, n)
                }
              return {
                kind: a.Kind.FRAGMENT_DEFINITION,
                name: m(e),
                typeCondition: (H(e, 'on'), L(e)),
                directives: g(e, !1),
                selectionSet: d(e),
                loc: Y(e, n)
              }
            })(e)
        }
      else if (Q(e, p.TokenKind.BRACE_L)) return o(e)
      throw $(e)
    }
    function o(e) {
      var n = e.token
      if (Q(e, p.TokenKind.BRACE_L))
        return {
          kind: a.Kind.OPERATION_DEFINITION,
          operation: 'query',
          name: void 0,
          variableDefinitions: [],
          directives: [],
          selectionSet: d(e),
          loc: Y(e, n)
        }
      var r = c(e),
        i = void 0
      return (
        Q(e, p.TokenKind.NAME) && (i = t(e)),
        {
          kind: a.Kind.OPERATION_DEFINITION,
          operation: r,
          name: i,
          variableDefinitions: u(e),
          directives: g(e, !1),
          selectionSet: d(e),
          loc: Y(e, n)
        })
    }
    function c(e) {
      var n = X(e, p.TokenKind.NAME)
      switch (n.value) {
        case 'query':
          return 'query'
        case 'mutation':
          return 'mutation'
        case 'subscription':
          return 'subscription'
      }
      throw $(e, n)
    }
    function u(e) {
      return Q(e, p.TokenKind.PAREN_L) ? z(e, p.TokenKind.PAREN_L, s, p.TokenKind.PAREN_R) : []
    }
    function s(e) {
      var n = e.token
      return {
        kind: a.Kind.VARIABLE_DEFINITION,
        variable: l(e),
        type: (X(e, p.TokenKind.COLON), K(e)),
        defaultValue: q(e, p.TokenKind.EQUALS) ? y(e, !0) : void 0,
        loc: Y(e, n)
      }
    }
    function l(e) {
      var n = e.token
      return X(e, p.TokenKind.DOLLAR), { kind: a.Kind.VARIABLE, name: t(e), loc: Y(e, n) }
    }
    function d(e) {
      var n = e.token
      return {
        kind: a.Kind.SELECTION_SET,
        selections: z(e, p.TokenKind.BRACE_L, f, p.TokenKind.BRACE_R),
        loc: Y(e, n)
      }
    }
    function f(e) {
      return Q(e, p.TokenKind.SPREAD)
        ? (function(e) {
            var n = e.token
            if ((X(e, p.TokenKind.SPREAD), Q(e, p.TokenKind.NAME) && 'on' !== e.token.value))
              return {
                kind: a.Kind.FRAGMENT_SPREAD,
                name: m(e),
                directives: g(e, !1),
                loc: Y(e, n)
              }
            var t = void 0
            'on' === e.token.value && (e.advance(), (t = L(e)))
            return {
              kind: a.Kind.INLINE_FRAGMENT,
              typeCondition: t,
              directives: g(e, !1),
              selectionSet: d(e),
              loc: Y(e, n)
            }
          })(e)
        : (function(e) {
            var n = e.token,
              r = t(e),
              i = void 0,
              o = void 0
            q(e, p.TokenKind.COLON) ? ((i = r), (o = t(e))) : (o = r)
            return {
              kind: a.Kind.FIELD,
              alias: i,
              name: o,
              arguments: E(e, !1),
              directives: g(e, !1),
              selectionSet: Q(e, p.TokenKind.BRACE_L) ? d(e) : void 0,
              loc: Y(e, n)
            }
          })(e)
    }
    function E(e, n) {
      var t = n ? k : I
      return Q(e, p.TokenKind.PAREN_L) ? z(e, p.TokenKind.PAREN_L, t, p.TokenKind.PAREN_R) : []
    }
    function I(e) {
      var n = e.token
      return {
        kind: a.Kind.ARGUMENT,
        name: t(e),
        value: (X(e, p.TokenKind.COLON), y(e, !1)),
        loc: Y(e, n)
      }
    }
    function k(e) {
      var n = e.token
      return {
        kind: a.Kind.ARGUMENT,
        name: t(e),
        value: (X(e, p.TokenKind.COLON), _(e)),
        loc: Y(e, n)
      }
    }
    function m(e) {
      if ('on' === e.token.value) throw $(e)
      return t(e)
    }
    function y(e, n) {
      var t = e.token
      switch (t.kind) {
        case p.TokenKind.BRACKET_L:
          return (function(e, n) {
            var t = e.token,
              r = n ? _ : h
            return {
              kind: a.Kind.LIST,
              values: (function(e, n, t, r) {
                X(e, n)
                var i = []
                for (; !q(e, r); ) i.push(t(e))
                return i
              })(e, p.TokenKind.BRACKET_L, r, p.TokenKind.BRACKET_R),
              loc: Y(e, t)
            }
          })(e, n)
        case p.TokenKind.BRACE_L:
          return (function(e, n) {
            var t = e.token
            X(e, p.TokenKind.BRACE_L)
            var r = []
            for (; !q(e, p.TokenKind.BRACE_R); ) r.push(A(e, n))
            return { kind: a.Kind.OBJECT, fields: r, loc: Y(e, t) }
          })(e, n)
        case p.TokenKind.INT:
          return e.advance(), { kind: a.Kind.INT, value: t.value, loc: Y(e, t) }
        case p.TokenKind.FLOAT:
          return e.advance(), { kind: a.Kind.FLOAT, value: t.value, loc: Y(e, t) }
        case p.TokenKind.STRING:
        case p.TokenKind.BLOCK_STRING:
          return O(e)
        case p.TokenKind.NAME:
          return 'true' === t.value || 'false' === t.value
            ? (e.advance(), { kind: a.Kind.BOOLEAN, value: 'true' === t.value, loc: Y(e, t) })
            : 'null' === t.value
              ? (e.advance(), { kind: a.Kind.NULL, loc: Y(e, t) })
              : (e.advance(), { kind: a.Kind.ENUM, value: t.value, loc: Y(e, t) })
        case p.TokenKind.DOLLAR:
          if (!n) return l(e)
      }
      throw $(e)
    }
    function O(e) {
      var n = e.token
      return (
        e.advance(),
        {
          kind: a.Kind.STRING,
          value: n.value,
          block: n.kind === p.TokenKind.BLOCK_STRING,
          loc: Y(e, n)
        })
    }
    function _(e) {
      return y(e, !0)
    }
    function h(e) {
      return y(e, !1)
    }
    function A(e, n) {
      var r = e.token
      return {
        kind: a.Kind.OBJECT_FIELD,
        name: t(e),
        value: (X(e, p.TokenKind.COLON), y(e, n)),
        loc: Y(e, r)
      }
    }
    function g(e, n) {
      for (var t = []; Q(e, p.TokenKind.AT); ) t.push(b(e, n))
      return t
    }
    function b(e, n) {
      var r = e.token
      return (
        X(e, p.TokenKind.AT),
        { kind: a.Kind.DIRECTIVE, name: t(e), arguments: E(e, n), loc: Y(e, r) })
    }
    function K(e) {
      var n = e.token,
        t = void 0
      return (
        q(e, p.TokenKind.BRACKET_L)
          ? ((t = K(e)),
            X(e, p.TokenKind.BRACKET_R),
            (t = { kind: a.Kind.LIST_TYPE, type: t, loc: Y(e, n) }))
          : (t = L(e)),
        q(e, p.TokenKind.BANG) ? { kind: a.Kind.NON_NULL_TYPE, type: t, loc: Y(e, n) } : t
      )
    }
    function L(e) {
      var n = e.token
      return { kind: a.Kind.NAMED_TYPE, name: t(e), loc: Y(e, n) }
    }
    function S(e) {
      var n = D(e) ? e.lookahead() : e.token
      if (n.kind === p.TokenKind.NAME)
        switch (n.value) {
          case 'schema':
            return (function(e) {
              var n = e.token
              H(e, 'schema')
              var t = g(e, !0),
                r = z(e, p.TokenKind.BRACE_L, P, p.TokenKind.BRACE_R)
              return {
                kind: a.Kind.SCHEMA_DEFINITION,
                directives: t,
                operationTypes: r,
                loc: Y(e, n)
              }
            })(e)
          case 'scalar':
            return (function(e) {
              var n = e.token,
                r = R(e)
              H(e, 'scalar')
              var i = t(e),
                o = g(e, !0)
              return {
                kind: a.Kind.SCALAR_TYPE_DEFINITION,
                description: r,
                name: i,
                directives: o,
                loc: Y(e, n)
              }
            })(e)
          case 'type':
            return (function(e) {
              var n = e.token,
                r = R(e)
              H(e, 'type')
              var i = t(e),
                o = F(e),
                c = g(e, !0),
                u = C(e)
              return {
                kind: a.Kind.OBJECT_TYPE_DEFINITION,
                description: r,
                name: i,
                interfaces: o,
                directives: c,
                fields: u,
                loc: Y(e, n)
              }
            })(e)
          case 'interface':
            return (function(e) {
              var n = e.token,
                r = R(e)
              H(e, 'interface')
              var i = t(e),
                o = g(e, !0),
                c = C(e)
              return {
                kind: a.Kind.INTERFACE_TYPE_DEFINITION,
                description: r,
                name: i,
                directives: o,
                fields: c,
                loc: Y(e, n)
              }
            })(e)
          case 'union':
            return (function(e) {
              var n = e.token,
                r = R(e)
              H(e, 'union')
              var i = t(e),
                o = g(e, !0),
                c = B(e)
              return {
                kind: a.Kind.UNION_TYPE_DEFINITION,
                description: r,
                name: i,
                directives: o,
                types: c,
                loc: Y(e, n)
              }
            })(e)
          case 'enum':
            return (function(e) {
              var n = e.token,
                r = R(e)
              H(e, 'enum')
              var i = t(e),
                o = g(e, !0),
                c = j(e)
              return {
                kind: a.Kind.ENUM_TYPE_DEFINITION,
                description: r,
                name: i,
                directives: o,
                values: c,
                loc: Y(e, n)
              }
            })(e)
          case 'input':
            return (function(e) {
              var n = e.token,
                r = R(e)
              H(e, 'input')
              var i = t(e),
                o = g(e, !0),
                c = V(e)
              return {
                kind: a.Kind.INPUT_OBJECT_TYPE_DEFINITION,
                description: r,
                name: i,
                directives: o,
                fields: c,
                loc: Y(e, n)
              }
            })(e)
          case 'extend':
            return (function(e) {
              var n = e.lookahead()
              if (n.kind === p.TokenKind.NAME)
                switch (n.value) {
                  case 'scalar':
                    return (function(e) {
                      var n = e.token
                      H(e, 'extend'), H(e, 'scalar')
                      var r = t(e),
                        i = g(e, !0)
                      if (0 === i.length) throw $(e)
                      return {
                        kind: a.Kind.SCALAR_TYPE_EXTENSION,
                        name: r,
                        directives: i,
                        loc: Y(e, n)
                      }
                    })(e)
                  case 'type':
                    return (function(e) {
                      var n = e.token
                      H(e, 'extend'), H(e, 'type')
                      var r = t(e),
                        i = F(e),
                        o = g(e, !0),
                        c = C(e)
                      if (0 === i.length && 0 === o.length && 0 === c.length) throw $(e)
                      return {
                        kind: a.Kind.OBJECT_TYPE_EXTENSION,
                        name: r,
                        interfaces: i,
                        directives: o,
                        fields: c,
                        loc: Y(e, n)
                      }
                    })(e)
                  case 'interface':
                    return (function(e) {
                      var n = e.token
                      H(e, 'extend'), H(e, 'interface')
                      var r = t(e),
                        i = g(e, !0),
                        o = C(e)
                      if (0 === i.length && 0 === o.length) throw $(e)
                      return {
                        kind: a.Kind.INTERFACE_TYPE_EXTENSION,
                        name: r,
                        directives: i,
                        fields: o,
                        loc: Y(e, n)
                      }
                    })(e)
                  case 'union':
                    return (function(e) {
                      var n = e.token
                      H(e, 'extend'), H(e, 'union')
                      var r = t(e),
                        i = g(e, !0),
                        o = B(e)
                      if (0 === i.length && 0 === o.length) throw $(e)
                      return {
                        kind: a.Kind.UNION_TYPE_EXTENSION,
                        name: r,
                        directives: i,
                        types: o,
                        loc: Y(e, n)
                      }
                    })(e)
                  case 'enum':
                    return (function(e) {
                      var n = e.token
                      H(e, 'extend'), H(e, 'enum')
                      var r = t(e),
                        i = g(e, !0),
                        o = j(e)
                      if (0 === i.length && 0 === o.length) throw $(e)
                      return {
                        kind: a.Kind.ENUM_TYPE_EXTENSION,
                        name: r,
                        directives: i,
                        values: o,
                        loc: Y(e, n)
                      }
                    })(e)
                  case 'input':
                    return (function(e) {
                      var n = e.token
                      H(e, 'extend'), H(e, 'input')
                      var r = t(e),
                        i = g(e, !0),
                        o = V(e)
                      if (0 === i.length && 0 === o.length) throw $(e)
                      return {
                        kind: a.Kind.INPUT_OBJECT_TYPE_EXTENSION,
                        name: r,
                        directives: i,
                        fields: o,
                        loc: Y(e, n)
                      }
                    })(e)
                }
              throw $(e, n)
            })(e)
          case 'directive':
            return (function(e) {
              var n = e.token,
                r = R(e)
              H(e, 'directive'), X(e, p.TokenKind.AT)
              var i = t(e),
                o = M(e)
              H(e, 'on')
              var c = (function(e) {
                q(e, p.TokenKind.PIPE)
                var n = []
                do {
                  n.push(G(e))
                } while (q(e, p.TokenKind.PIPE))
                return n
              })(e)
              return {
                kind: a.Kind.DIRECTIVE_DEFINITION,
                description: r,
                name: i,
                arguments: o,
                locations: c,
                loc: Y(e, n)
              }
            })(e)
        }
      throw $(e, n)
    }
    function D(e) {
      return Q(e, p.TokenKind.STRING) || Q(e, p.TokenKind.BLOCK_STRING)
    }
    function R(e) {
      if (D(e)) return O(e)
    }
    function P(e) {
      var n = e.token,
        t = c(e)
      X(e, p.TokenKind.COLON)
      var r = L(e)
      return { kind: a.Kind.OPERATION_TYPE_DEFINITION, operation: t, type: r, loc: Y(e, n) }
    }
    function F(e) {
      var n = []
      if ('implements' === e.token.value) {
        e.advance(), q(e, p.TokenKind.AMP)
        do {
          n.push(L(e))
        } while (
          q(e, p.TokenKind.AMP) ||
          (e.options.allowLegacySDLImplementsInterfaces && Q(e, p.TokenKind.NAME)))
      }
      return n
    }
    function C(e) {
      return e.options.allowLegacySDLEmptyFields &&
        Q(e, p.TokenKind.BRACE_L) &&
        e.lookahead().kind === p.TokenKind.BRACE_R
        ? (e.advance(), e.advance(), [])
        : Q(e, p.TokenKind.BRACE_L)
          ? z(e, p.TokenKind.BRACE_L, w, p.TokenKind.BRACE_R)
          : []
    }
    function w(e) {
      var n = e.token,
        r = R(e),
        i = t(e),
        o = M(e)
      X(e, p.TokenKind.COLON)
      var c = K(e),
        u = g(e, !0)
      return {
        kind: a.Kind.FIELD_DEFINITION,
        description: r,
        name: i,
        arguments: o,
        type: c,
        directives: u,
        loc: Y(e, n)
      }
    }
    function M(e) {
      return Q(e, p.TokenKind.PAREN_L) ? z(e, p.TokenKind.PAREN_L, x, p.TokenKind.PAREN_R) : []
    }
    function x(e) {
      var n = e.token,
        r = R(e),
        i = t(e)
      X(e, p.TokenKind.COLON)
      var o = K(e),
        c = void 0
      q(e, p.TokenKind.EQUALS) && (c = _(e))
      var u = g(e, !0)
      return {
        kind: a.Kind.INPUT_VALUE_DEFINITION,
        description: r,
        name: i,
        type: o,
        defaultValue: c,
        directives: u,
        loc: Y(e, n)
      }
    }
    function B(e) {
      var n = []
      if (q(e, p.TokenKind.EQUALS)) {
        q(e, p.TokenKind.PIPE)
        do {
          n.push(L(e))
        } while (q(e, p.TokenKind.PIPE))
      }
      return n
    }
    function j(e) {
      return Q(e, p.TokenKind.BRACE_L) ? z(e, p.TokenKind.BRACE_L, U, p.TokenKind.BRACE_R) : []
    }
    function U(e) {
      var n = e.token,
        r = R(e),
        i = t(e),
        o = g(e, !0)
      return {
        kind: a.Kind.ENUM_VALUE_DEFINITION,
        description: r,
        name: i,
        directives: o,
        loc: Y(e, n)
      }
    }
    function V(e) {
      return Q(e, p.TokenKind.BRACE_L) ? z(e, p.TokenKind.BRACE_L, x, p.TokenKind.BRACE_R) : []
    }
    function G(e) {
      var n = e.token,
        r = t(e)
      if (N.DirectiveLocation.hasOwnProperty(r.value)) return r
      throw $(e, n)
    }
    function Y(e, n) {
      if (!e.options.noLocation) return new J(n, e.lastToken, e.source)
    }
    function J(e, n, t) {
      ;(this.start = e.start),
        (this.end = n.end),
        (this.startToken = e),
        (this.endToken = n),
        (this.source = t)
    }
    function Q(e, n) {
      return e.token.kind === n
    }
    function q(e, n) {
      var t = e.token.kind === n
      return t && e.advance(), t
    }
    function X(e, n) {
      var t = e.token
      if (t.kind === n) return e.advance(), t
      throw (0,
      v.syntaxError)(e.source, t.start, 'Expected ' + n + ', found ' + (0, p.getTokenDesc)(t))
    }
    function H(e, n) {
      var t = e.token
      if (t.kind === p.TokenKind.NAME && t.value === n) return e.advance(), t
      throw (0,
      v.syntaxError)(e.source, t.start, 'Expected "' + n + '", found ' + (0, p.getTokenDesc)(t))
    }
    function $(e, n) {
      var t = n || e.token
      return (0, v.syntaxError)(e.source, t.start, 'Unexpected ' + (0, p.getTokenDesc)(t))
    }
    function z(e, n, t, r) {
      X(e, n)
      for (var i = [t(e)]; !q(e, r); ) i.push(t(e))
      return i
    }
    Object.defineProperty(n, '__esModule', { value: !0 }),
      (n.parse = function(e, n) {
        var t = 'string' == typeof e ? new T.Source(e) : e
        if (!(t instanceof T.Source))
          throw new TypeError('Must provide Source. Received: ' + String(t))
        return (function(e) {
          var n = e.token
          X(e, p.TokenKind.SOF)
          var t = []
          do {
            t.push(r(e))
          } while (!q(e, p.TokenKind.EOF))
          return { kind: a.Kind.DOCUMENT, definitions: t, loc: Y(e, n) }
        })((0, p.createLexer)(t, n || {}))
      }),
      (n.parseValue = function(e, n) {
        var t = 'string' == typeof e ? new T.Source(e) : e,
          r = (0, p.createLexer)(t, n || {})
        X(r, p.TokenKind.SOF)
        var i = y(r, !1)
        return X(r, p.TokenKind.EOF), i
      }),
      (n.parseType = function(e, n) {
        var t = 'string' == typeof e ? new T.Source(e) : e,
          r = (0, p.createLexer)(t, n || {})
        X(r, p.TokenKind.SOF)
        var i = K(r)
        return X(r, p.TokenKind.EOF), i
      }),
      (n.parseConstValue = _),
      (n.parseTypeReference = K),
      (n.parseNamedType = L),
      (J.prototype.toJSON = J.prototype.inspect = function() {
        return { start: this.start, end: this.end }
      })
  })
  r(I)
  var k = i(function(e, n) {
    Object.defineProperty(n, '__esModule', { value: !0 }),
      (n.visit = function(e, n) {
        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
          c = void 0,
          u = Array.isArray(e),
          s = [e],
          l = -1,
          d = [],
          f = void 0,
          v = void 0,
          E = void 0,
          p = [],
          T = [],
          N = e
        do {
          var I = ++l === s.length,
            k = I && 0 !== d.length
          if (I) {
            if (((v = 0 === T.length ? void 0 : p[p.length - 1]), (f = E), (E = T.pop()), k)) {
              if (u) f = f.slice()
              else {
                var m = {}
                for (var y in f) f.hasOwnProperty(y) && (m[y] = f[y])
                f = m
              }
              for (var O = 0, _ = 0; _ < d.length; _++) {
                var h = d[_][0],
                  A = d[_][1]
                u && (h -= O), u && null === A ? (f.splice(h, 1), O++) : (f[h] = A)
              }
            }
            ;(l = c.index), (s = c.keys), (d = c.edits), (u = c.inArray), (c = c.prev)
          } else {
            if (((v = E ? (u ? l : s[l]) : void 0), null === (f = E ? E[v] : N) || void 0 === f))
              continue
            E && p.push(v)
          }
          var g = void 0
          if (!Array.isArray(f)) {
            if (!i(f)) throw new Error('Invalid AST Node: ' + JSON.stringify(f))
            var b = o(n, f.kind, I)
            if (b) {
              if ((g = b.call(n, f, v, E, p, T)) === r) break
              if (!1 === g) {
                if (!I) {
                  p.pop()
                  continue
                }
              } else if (void 0 !== g && (d.push([v, g]), !I)) {
                if (!i(g)) {
                  p.pop()
                  continue
                }
                f = g
              }
            }
          }
          void 0 === g && k && d.push([v, f]),
            I
              ? p.pop()
              : ((c = { inArray: u, index: l, keys: s, edits: d, prev: c }),
                (u = Array.isArray(f)),
                (s = u ? f : a[f.kind] || []),
                (l = -1),
                (d = []),
                E && T.push(E),
                (E = f))
        } while (void 0 !== c)
        0 !== d.length && (N = d[d.length - 1][1])
        return N
      }),
      (n.visitInParallel = function(e) {
        var n = new Array(e.length)
        return {
          enter: function(t) {
            for (var i = 0; i < e.length; i++)
              if (!n[i]) {
                var a = o(e[i], t.kind, !1)
                if (a) {
                  var c = a.apply(e[i], arguments)
                  if (!1 === c) n[i] = t
                  else if (c === r) n[i] = r
                  else if (void 0 !== c) return c
                }
              }
          },
          leave: function(t) {
            for (var i = 0; i < e.length; i++)
              if (n[i]) n[i] === t && (n[i] = null)
              else {
                var a = o(e[i], t.kind, !0)
                if (a) {
                  var c = a.apply(e[i], arguments)
                  if (c === r) n[i] = r
                  else if (void 0 !== c && !1 !== c) return c
                }
              }
          }
        }
      }),
      (n.visitWithTypeInfo = function(e, n) {
        return {
          enter: function(t) {
            e.enter(t)
            var r = o(n, t.kind, !1)
            if (r) {
              var a = r.apply(n, arguments)
              return void 0 !== a && (e.leave(t), i(a) && e.enter(a)), a
            }
          },
          leave: function(t) {
            var r = o(n, t.kind, !0),
              i = void 0
            return r && (i = r.apply(n, arguments)), e.leave(t), i
          }
        }
      }),
      (n.getVisitFn = o)
    var t = (n.QueryDocumentKeys = {
        Name: [],
        Document: ['definitions'],
        OperationDefinition: ['name', 'variableDefinitions', 'directives', 'selectionSet'],
        VariableDefinition: ['variable', 'type', 'defaultValue'],
        Variable: ['name'],
        SelectionSet: ['selections'],
        Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
        Argument: ['name', 'value'],
        FragmentSpread: ['name', 'directives'],
        InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
        FragmentDefinition: [
          'name',
          'variableDefinitions',
          'typeCondition',
          'directives',
          'selectionSet'
        ],
        IntValue: [],
        FloatValue: [],
        StringValue: [],
        BooleanValue: [],
        NullValue: [],
        EnumValue: [],
        ListValue: ['values'],
        ObjectValue: ['fields'],
        ObjectField: ['name', 'value'],
        Directive: ['name', 'arguments'],
        NamedType: ['name'],
        ListType: ['type'],
        NonNullType: ['type'],
        SchemaDefinition: ['directives', 'operationTypes'],
        OperationTypeDefinition: ['type'],
        ScalarTypeDefinition: ['description', 'name', 'directives'],
        ObjectTypeDefinition: ['description', 'name', 'interfaces', 'directives', 'fields'],
        FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
        InputValueDefinition: ['description', 'name', 'type', 'defaultValue', 'directives'],
        InterfaceTypeDefinition: ['description', 'name', 'directives', 'fields'],
        UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
        EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
        EnumValueDefinition: ['description', 'name', 'directives'],
        InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
        ScalarTypeExtension: ['name', 'directives'],
        ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
        InterfaceTypeExtension: ['name', 'directives', 'fields'],
        UnionTypeExtension: ['name', 'directives', 'types'],
        EnumTypeExtension: ['name', 'directives', 'values'],
        InputObjectTypeExtension: ['name', 'directives', 'fields'],
        DirectiveDefinition: ['description', 'name', 'arguments', 'locations']
      }),
      r = (n.BREAK = {})
    function i(e) {
      return Boolean(e && 'string' == typeof e.kind)
    }
    function o(e, n, t) {
      var r = e[n]
      if (r) {
        if (!t && 'function' == typeof r) return r
        var i = t ? r.leave : r.enter
        if ('function' == typeof i) return i
      } else {
        var o = t ? e.leave : e.enter
        if (o) {
          if ('function' == typeof o) return o
          var a = o[n]
          if ('function' == typeof a) return a
        }
      }
    }
  })
  r(k)
  var m = i(function(e, n) {
    Object.defineProperty(n, '__esModule', { value: !0 }),
      (n.print = function(e) {
        return (0, k.visit)(e, { leave: t })
      })
    var t = {
      Name: function(e) {
        return e.value
      },
      Variable: function(e) {
        return '$' + e.name
      },
      Document: function(e) {
        return i(e.definitions, '\n\n') + '\n'
      },
      OperationDefinition: function(e) {
        var n = e.operation,
          t = e.name,
          r = a('(', i(e.variableDefinitions, ', '), ')'),
          o = i(e.directives, ' '),
          c = e.selectionSet
        return t || o || r || 'query' !== n ? i([n, i([t, r]), o, c], ' ') : c
      },
      VariableDefinition: function(e) {
        return e.variable + ': ' + e.type + a(' = ', e.defaultValue)
      },
      SelectionSet: function(e) {
        return o(e.selections)
      },
      Field: function(e) {
        var n = e.alias,
          t = e.name,
          r = e.arguments,
          o = e.directives,
          c = e.selectionSet
        return i([a('', n, ': ') + t + a('(', i(r, ', '), ')'), i(o, ' '), c], ' ')
      },
      Argument: function(e) {
        return e.name + ': ' + e.value
      },
      FragmentSpread: function(e) {
        return '...' + e.name + a(' ', i(e.directives, ' '))
      },
      InlineFragment: function(e) {
        var n = e.typeCondition,
          t = e.directives,
          r = e.selectionSet
        return i(['...', a('on ', n), i(t, ' '), r], ' ')
      },
      FragmentDefinition: function(e) {
        var n = e.name,
          t = e.typeCondition,
          r = e.variableDefinitions,
          o = e.directives,
          c = e.selectionSet
        return (
          'fragment ' + n + a('(', i(r, ', '), ')') + ' on ' + t + ' ' + a('', i(o, ' '), ' ') + c
        )
      },
      IntValue: function(e) {
        return e.value
      },
      FloatValue: function(e) {
        return e.value
      },
      StringValue: function(e, n) {
        var t = e.value
        return e.block
          ? (function(e, n) {
              var t = e.replace(/"""/g, '\\"""')
              return (' ' !== e[0] && '\t' !== e[0]) || -1 !== e.indexOf('\n')
                ? '"""\n' + (n ? t : c(t)) + '\n"""'
                : '"""' + t.replace(/"$/, '"\n') + '"""'
            })(t, 'description' === n)
          : JSON.stringify(t)
      },
      BooleanValue: function(e) {
        return e.value ? 'true' : 'false'
      },
      NullValue: function() {
        return 'null'
      },
      EnumValue: function(e) {
        return e.value
      },
      ListValue: function(e) {
        return '[' + i(e.values, ', ') + ']'
      },
      ObjectValue: function(e) {
        return '{' + i(e.fields, ', ') + '}'
      },
      ObjectField: function(e) {
        return e.name + ': ' + e.value
      },
      Directive: function(e) {
        return '@' + e.name + a('(', i(e.arguments, ', '), ')')
      },
      NamedType: function(e) {
        return e.name
      },
      ListType: function(e) {
        return '[' + e.type + ']'
      },
      NonNullType: function(e) {
        return e.type + '!'
      },
      SchemaDefinition: function(e) {
        var n = e.directives,
          t = e.operationTypes
        return i(['schema', i(n, ' '), o(t)], ' ')
      },
      OperationTypeDefinition: function(e) {
        return e.operation + ': ' + e.type
      },
      ScalarTypeDefinition: r(function(e) {
        return i(['scalar', e.name, i(e.directives, ' ')], ' ')
      }),
      ObjectTypeDefinition: r(function(e) {
        var n = e.name,
          t = e.interfaces,
          r = e.directives,
          c = e.fields
        return i(['type', n, a('implements ', i(t, ' & ')), i(r, ' '), o(c)], ' ')
      }),
      FieldDefinition: r(function(e) {
        var n = e.name,
          t = e.arguments,
          r = e.type,
          o = e.directives
        return n + a('(', i(t, ', '), ')') + ': ' + r + a(' ', i(o, ' '))
      }),
      InputValueDefinition: r(function(e) {
        var n = e.name,
          t = e.type,
          r = e.defaultValue,
          o = e.directives
        return i([n + ': ' + t, a('= ', r), i(o, ' ')], ' ')
      }),
      InterfaceTypeDefinition: r(function(e) {
        var n = e.name,
          t = e.directives,
          r = e.fields
        return i(['interface', n, i(t, ' '), o(r)], ' ')
      }),
      UnionTypeDefinition: r(function(e) {
        var n = e.name,
          t = e.directives,
          r = e.types
        return i(['union', n, i(t, ' '), r && 0 !== r.length ? '= ' + i(r, ' | ') : ''], ' ')
      }),
      EnumTypeDefinition: r(function(e) {
        var n = e.name,
          t = e.directives,
          r = e.values
        return i(['enum', n, i(t, ' '), o(r)], ' ')
      }),
      EnumValueDefinition: r(function(e) {
        return i([e.name, i(e.directives, ' ')], ' ')
      }),
      InputObjectTypeDefinition: r(function(e) {
        var n = e.name,
          t = e.directives,
          r = e.fields
        return i(['input', n, i(t, ' '), o(r)], ' ')
      }),
      ScalarTypeExtension: function(e) {
        return i(['extend scalar', e.name, i(e.directives, ' ')], ' ')
      },
      ObjectTypeExtension: function(e) {
        var n = e.name,
          t = e.interfaces,
          r = e.directives,
          c = e.fields
        return i(['extend type', n, a('implements ', i(t, ' & ')), i(r, ' '), o(c)], ' ')
      },
      InterfaceTypeExtension: function(e) {
        var n = e.name,
          t = e.directives,
          r = e.fields
        return i(['extend interface', n, i(t, ' '), o(r)], ' ')
      },
      UnionTypeExtension: function(e) {
        var n = e.name,
          t = e.directives,
          r = e.types
        return i(['extend union', n, i(t, ' '), r && 0 !== r.length ? '= ' + i(r, ' | ') : ''], ' ')
      },
      EnumTypeExtension: function(e) {
        var n = e.name,
          t = e.directives,
          r = e.values
        return i(['extend enum', n, i(t, ' '), o(r)], ' ')
      },
      InputObjectTypeExtension: function(e) {
        var n = e.name,
          t = e.directives,
          r = e.fields
        return i(['extend input', n, i(t, ' '), o(r)], ' ')
      },
      DirectiveDefinition: r(function(e) {
        var n = e.name,
          t = e.arguments,
          r = e.locations
        return 'directive @' + n + a('(', i(t, ', '), ')') + ' on ' + i(r, ' | ')
      })
    }
    function r(e) {
      return function(n) {
        return i([n.description, e(n)], '\n')
      }
    }
    function i(e, n) {
      return e
        ? e
            .filter(function(e) {
              return e
            })
            .join(n || '')
        : ''
    }
    function o(e) {
      return e && 0 !== e.length ? '{\n' + c(i(e, '\n')) + '\n}' : ''
    }
    function a(e, n, t) {
      return n ? e + n + (t || '') : ''
    }
    function c(e) {
      return e && '  ' + e.replace(/\n/g, '\n  ')
    }
  })
  r(m)
  var y = i(function(e, n) {
    Object.defineProperty(n, '__esModule', { value: !0 }),
      Object.defineProperty(n, 'getLocation', {
        enumerable: !0,
        get: function() {
          return o.getLocation
        }
      }),
      Object.defineProperty(n, 'Kind', {
        enumerable: !0,
        get: function() {
          return a.Kind
        }
      }),
      Object.defineProperty(n, 'createLexer', {
        enumerable: !0,
        get: function() {
          return p.createLexer
        }
      }),
      Object.defineProperty(n, 'TokenKind', {
        enumerable: !0,
        get: function() {
          return p.TokenKind
        }
      }),
      Object.defineProperty(n, 'parse', {
        enumerable: !0,
        get: function() {
          return I.parse
        }
      }),
      Object.defineProperty(n, 'parseValue', {
        enumerable: !0,
        get: function() {
          return I.parseValue
        }
      }),
      Object.defineProperty(n, 'parseType', {
        enumerable: !0,
        get: function() {
          return I.parseType
        }
      }),
      Object.defineProperty(n, 'print', {
        enumerable: !0,
        get: function() {
          return m.print
        }
      }),
      Object.defineProperty(n, 'Source', {
        enumerable: !0,
        get: function() {
          return T.Source
        }
      }),
      Object.defineProperty(n, 'visit', {
        enumerable: !0,
        get: function() {
          return k.visit
        }
      }),
      Object.defineProperty(n, 'visitInParallel', {
        enumerable: !0,
        get: function() {
          return k.visitInParallel
        }
      }),
      Object.defineProperty(n, 'visitWithTypeInfo', {
        enumerable: !0,
        get: function() {
          return k.visitWithTypeInfo
        }
      }),
      Object.defineProperty(n, 'getVisitFn', {
        enumerable: !0,
        get: function() {
          return k.getVisitFn
        }
      }),
      Object.defineProperty(n, 'BREAK', {
        enumerable: !0,
        get: function() {
          return k.BREAK
        }
      }),
      Object.defineProperty(n, 'DirectiveLocation', {
        enumerable: !0,
        get: function() {
          return N.DirectiveLocation
        }
      })
  })
  return (
    r(y),
    {
      parsers: {
        graphql: {
          parse: function(t) {
            var r = y
            try {
              var i = (function(e, n) {
                try {
                  return e(n, { allowLegacySDLImplementsInterfaces: !1 })
                } catch (t) {
                  return e(n, { allowLegacySDLImplementsInterfaces: !0 })
                }
              })(r.parse, t)
              return (
                (i.comments = (function(e) {
                  for (var n = [], t = e.loc.startToken.next; '<EOF>' !== t.kind; )
                    'Comment' === t.kind && (Object.assign(t, { column: t.column - 1 }), n.push(t)),
                      (t = t.next)
                  return n
                })(i)),
                (function n(t) {
                  if (t && 'object' === e(t))
                    for (var r in (delete t.startToken,
                    delete t.endToken,
                    delete t.prev,
                    delete t.next,
                    t))
                      n(t[r])
                  return t
                })(i),
                i
              )
            } catch (e) {
              throw e instanceof v.GraphQLError
                ? n(e.message, {
                    start: { line: e.locations[0].line, column: e.locations[0].column }
                  })
                : e
            }
          },
          astFormat: 'graphql',
          hasPragma: t,
          locStart: function(e) {
            return 'number' == typeof e.start ? e.start : e.loc && e.loc.start
          },
          locEnd: function(e) {
            return 'number' == typeof e.end ? e.end : e.loc && e.loc.end
          }
        }
      }
    })
})
