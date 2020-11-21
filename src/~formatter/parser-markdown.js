!(function(r, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
      ? define(e)
      : ((r.prettierPlugins = r.prettierPlugins || {}), (r.prettierPlugins.markdown = e()))
})(this, function() {
  'use strict'
  function r(e) {
    return (r =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function(r) {
            return typeof r
          }
        : function(r) {
            return r &&
              'function' == typeof Symbol &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? 'symbol'
              : typeof r
          })(e)
  }
  function e(r, e) {
    return (
      (function(r) {
        if (Array.isArray(r)) return r
      })(r) ||
      (function(r, e) {
        var t = [],
          n = !0,
          u = !1,
          o = void 0
        try {
          for (
            var a, i = r[Symbol.iterator]();
            !(n = (a = i.next()).done) && (t.push(a.value), !e || t.length !== e);
            n = !0
          );
        } catch (r) {
          ;(u = !0), (o = r)
        } finally {
          try {
            n || null == i.return || i.return()
          } finally {
            if (u) throw o
          }
        }
        return t
      })(r, e) ||
      (function() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance')
      })())
  }
  var t = function() {
      for (var r = {}, e = 0; e < arguments.length; e++) {
        var t = arguments[e]
        for (var u in t) n.call(t, u) && (r[u] = t[u])
      }
      return r
    },
    n = Object.prototype.hasOwnProperty
  function u(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, 'default') ? r.default : r
  }
  function o(r, e) {
    return r((e = { exports: {} }), e.exports), e.exports
  }
  var a = {},
    i = Object.freeze({ default: a }),
    c = o(function(r) {
      'function' == typeof Object.create
        ? (r.exports = function(r, e) {
            ;(r.super_ = e),
              (r.prototype = Object.create(e.prototype, {
                constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 }
              }))
          })
        : (r.exports = function(r, e) {
            r.super_ = e
            var t = function() {}
            ;(t.prototype = e.prototype), (r.prototype = new t()), (r.prototype.constructor = r)
          })
    }),
    s = (i && a) || i,
    l = o(function(r) {
      try {
        var e = s
        if ('function' != typeof e.inherits) throw ''
        r.exports = e.inherits
      } catch (e) {
        r.exports = c
      }
    }),
    f = function(e) {
      var n, u, o
      for (u in (l(i, e), l(a, i), (n = i.prototype)))
        (o = n[u]) && 'object' === r(o) && (n[u] = 'concat' in o ? o.concat() : t(o))
      return i
      function a(r) {
        return e.apply(this, r)
      }
      function i() {
        return this instanceof i ? e.apply(this, arguments) : new a(arguments)
      }
    }
  var p = function(r, e, t) {
    return function() {
      var n = t || this,
        u = n[r]
      return (
        (n[r] = !e),
        function() {
          n[r] = u
        })
    }
  }
  var D = function(r) {
    var e = (function(r) {
      var e = [],
        t = r.indexOf('\n')
      for (; -1 !== t; ) e.push(t + 1), (t = r.indexOf('\n', t + 1))
      return e.push(r.length + 1), e
    })(String(r))
    return {
      toPosition: (function(r) {
        return function(e) {
          var t = -1,
            n = r.length
          if (e < 0) return {}
          for (; ++t < n; )
            if (r[t] > e) return { line: t + 1, column: e - (r[t - 1] || 0) + 1, offset: e }
          return {}
        }
      })(e),
      toOffset: (function(r) {
        return function(e) {
          var t = e && e.line,
            n = e && e.column
          if (!isNaN(t) && !isNaN(n) && t - 1 in r) return (r[t - 2] || 0) + n - 1 || 0
          return -1
        }
      })(e)
    }
  }
  var h = function(r, e) {
    return function(t) {
      var n,
        u = 0,
        o = t.indexOf('\\'),
        a = r[e],
        i = []
      for (; -1 !== o; )
        i.push(t.slice(u, o)),
          (u = o + 1),
          ((n = t.charAt(u)) && -1 !== a.indexOf(n)) || i.push('\\'),
          (o = t.indexOf('\\', u))
      return i.push(t.slice(u)), i.join('')
    }
  }
  var d = {
      AEli: 'Æ',
      AElig: 'Æ',
      AM: '&',
      AMP: '&',
      Aacut: 'Á',
      Aacute: 'Á',
      Abreve: 'Ă',
      Acir: 'Â',
      Acirc: 'Â',
      Acy: 'А',
      Afr: '𝔄',
      Agrav: 'À',
      Agrave: 'À',
      Alpha: 'Α',
      Amacr: 'Ā',
      And: '⩓',
      Aogon: 'Ą',
      Aopf: '𝔸',
      ApplyFunction: '⁡',
      Arin: 'Å',
      Aring: 'Å',
      Ascr: '𝒜',
      Assign: '≔',
      Atild: 'Ã',
      Atilde: 'Ã',
      Aum: 'Ä',
      Auml: 'Ä',
      Backslash: '∖',
      Barv: '⫧',
      Barwed: '⌆',
      Bcy: 'Б',
      Because: '∵',
      Bernoullis: 'ℬ',
      Beta: 'Β',
      Bfr: '𝔅',
      Bopf: '𝔹',
      Breve: '˘',
      Bscr: 'ℬ',
      Bumpeq: '≎',
      CHcy: 'Ч',
      COP: '©',
      COPY: '©',
      Cacute: 'Ć',
      Cap: '⋒',
      CapitalDifferentialD: 'ⅅ',
      Cayleys: 'ℭ',
      Ccaron: 'Č',
      Ccedi: 'Ç',
      Ccedil: 'Ç',
      Ccirc: 'Ĉ',
      Cconint: '∰',
      Cdot: 'Ċ',
      Cedilla: '¸',
      CenterDot: '·',
      Cfr: 'ℭ',
      Chi: 'Χ',
      CircleDot: '⊙',
      CircleMinus: '⊖',
      CirclePlus: '⊕',
      CircleTimes: '⊗',
      ClockwiseContourIntegral: '∲',
      CloseCurlyDoubleQuote: '”',
      CloseCurlyQuote: '’',
      Colon: '∷',
      Colone: '⩴',
      Congruent: '≡',
      Conint: '∯',
      ContourIntegral: '∮',
      Copf: 'ℂ',
      Coproduct: '∐',
      CounterClockwiseContourIntegral: '∳',
      Cross: '⨯',
      Cscr: '𝒞',
      Cup: '⋓',
      CupCap: '≍',
      DD: 'ⅅ',
      DDotrahd: '⤑',
      DJcy: 'Ђ',
      DScy: 'Ѕ',
      DZcy: 'Џ',
      Dagger: '‡',
      Darr: '↡',
      Dashv: '⫤',
      Dcaron: 'Ď',
      Dcy: 'Д',
      Del: '∇',
      Delta: 'Δ',
      Dfr: '𝔇',
      DiacriticalAcute: '´',
      DiacriticalDot: '˙',
      DiacriticalDoubleAcute: '˝',
      DiacriticalGrave: '`',
      DiacriticalTilde: '˜',
      Diamond: '⋄',
      DifferentialD: 'ⅆ',
      Dopf: '𝔻',
      Dot: '¨',
      DotDot: '⃜',
      DotEqual: '≐',
      DoubleContourIntegral: '∯',
      DoubleDot: '¨',
      DoubleDownArrow: '⇓',
      DoubleLeftArrow: '⇐',
      DoubleLeftRightArrow: '⇔',
      DoubleLeftTee: '⫤',
      DoubleLongLeftArrow: '⟸',
      DoubleLongLeftRightArrow: '⟺',
      DoubleLongRightArrow: '⟹',
      DoubleRightArrow: '⇒',
      DoubleRightTee: '⊨',
      DoubleUpArrow: '⇑',
      DoubleUpDownArrow: '⇕',
      DoubleVerticalBar: '∥',
      DownArrow: '↓',
      DownArrowBar: '⤓',
      DownArrowUpArrow: '⇵',
      DownBreve: '̑',
      DownLeftRightVector: '⥐',
      DownLeftTeeVector: '⥞',
      DownLeftVector: '↽',
      DownLeftVectorBar: '⥖',
      DownRightTeeVector: '⥟',
      DownRightVector: '⇁',
      DownRightVectorBar: '⥗',
      DownTee: '⊤',
      DownTeeArrow: '↧',
      Downarrow: '⇓',
      Dscr: '𝒟',
      Dstrok: 'Đ',
      ENG: 'Ŋ',
      ET: 'Ð',
      ETH: 'Ð',
      Eacut: 'É',
      Eacute: 'É',
      Ecaron: 'Ě',
      Ecir: 'Ê',
      Ecirc: 'Ê',
      Ecy: 'Э',
      Edot: 'Ė',
      Efr: '𝔈',
      Egrav: 'È',
      Egrave: 'È',
      Element: '∈',
      Emacr: 'Ē',
      EmptySmallSquare: '◻',
      EmptyVerySmallSquare: '▫',
      Eogon: 'Ę',
      Eopf: '𝔼',
      Epsilon: 'Ε',
      Equal: '⩵',
      EqualTilde: '≂',
      Equilibrium: '⇌',
      Escr: 'ℰ',
      Esim: '⩳',
      Eta: 'Η',
      Eum: 'Ë',
      Euml: 'Ë',
      Exists: '∃',
      ExponentialE: 'ⅇ',
      Fcy: 'Ф',
      Ffr: '𝔉',
      FilledSmallSquare: '◼',
      FilledVerySmallSquare: '▪',
      Fopf: '𝔽',
      ForAll: '∀',
      Fouriertrf: 'ℱ',
      Fscr: 'ℱ',
      GJcy: 'Ѓ',
      G: '>',
      GT: '>',
      Gamma: 'Γ',
      Gammad: 'Ϝ',
      Gbreve: 'Ğ',
      Gcedil: 'Ģ',
      Gcirc: 'Ĝ',
      Gcy: 'Г',
      Gdot: 'Ġ',
      Gfr: '𝔊',
      Gg: '⋙',
      Gopf: '𝔾',
      GreaterEqual: '≥',
      GreaterEqualLess: '⋛',
      GreaterFullEqual: '≧',
      GreaterGreater: '⪢',
      GreaterLess: '≷',
      GreaterSlantEqual: '⩾',
      GreaterTilde: '≳',
      Gscr: '𝒢',
      Gt: '≫',
      HARDcy: 'Ъ',
      Hacek: 'ˇ',
      Hat: '^',
      Hcirc: 'Ĥ',
      Hfr: 'ℌ',
      HilbertSpace: 'ℋ',
      Hopf: 'ℍ',
      HorizontalLine: '─',
      Hscr: 'ℋ',
      Hstrok: 'Ħ',
      HumpDownHump: '≎',
      HumpEqual: '≏',
      IEcy: 'Е',
      IJlig: 'Ĳ',
      IOcy: 'Ё',
      Iacut: 'Í',
      Iacute: 'Í',
      Icir: 'Î',
      Icirc: 'Î',
      Icy: 'И',
      Idot: 'İ',
      Ifr: 'ℑ',
      Igrav: 'Ì',
      Igrave: 'Ì',
      Im: 'ℑ',
      Imacr: 'Ī',
      ImaginaryI: 'ⅈ',
      Implies: '⇒',
      Int: '∬',
      Integral: '∫',
      Intersection: '⋂',
      InvisibleComma: '⁣',
      InvisibleTimes: '⁢',
      Iogon: 'Į',
      Iopf: '𝕀',
      Iota: 'Ι',
      Iscr: 'ℐ',
      Itilde: 'Ĩ',
      Iukcy: 'І',
      Ium: 'Ï',
      Iuml: 'Ï',
      Jcirc: 'Ĵ',
      Jcy: 'Й',
      Jfr: '𝔍',
      Jopf: '𝕁',
      Jscr: '𝒥',
      Jsercy: 'Ј',
      Jukcy: 'Є',
      KHcy: 'Х',
      KJcy: 'Ќ',
      Kappa: 'Κ',
      Kcedil: 'Ķ',
      Kcy: 'К',
      Kfr: '𝔎',
      Kopf: '𝕂',
      Kscr: '𝒦',
      LJcy: 'Љ',
      L: '<',
      LT: '<',
      Lacute: 'Ĺ',
      Lambda: 'Λ',
      Lang: '⟪',
      Laplacetrf: 'ℒ',
      Larr: '↞',
      Lcaron: 'Ľ',
      Lcedil: 'Ļ',
      Lcy: 'Л',
      LeftAngleBracket: '⟨',
      LeftArrow: '←',
      LeftArrowBar: '⇤',
      LeftArrowRightArrow: '⇆',
      LeftCeiling: '⌈',
      LeftDoubleBracket: '⟦',
      LeftDownTeeVector: '⥡',
      LeftDownVector: '⇃',
      LeftDownVectorBar: '⥙',
      LeftFloor: '⌊',
      LeftRightArrow: '↔',
      LeftRightVector: '⥎',
      LeftTee: '⊣',
      LeftTeeArrow: '↤',
      LeftTeeVector: '⥚',
      LeftTriangle: '⊲',
      LeftTriangleBar: '⧏',
      LeftTriangleEqual: '⊴',
      LeftUpDownVector: '⥑',
      LeftUpTeeVector: '⥠',
      LeftUpVector: '↿',
      LeftUpVectorBar: '⥘',
      LeftVector: '↼',
      LeftVectorBar: '⥒',
      Leftarrow: '⇐',
      Leftrightarrow: '⇔',
      LessEqualGreater: '⋚',
      LessFullEqual: '≦',
      LessGreater: '≶',
      LessLess: '⪡',
      LessSlantEqual: '⩽',
      LessTilde: '≲',
      Lfr: '𝔏',
      Ll: '⋘',
      Lleftarrow: '⇚',
      Lmidot: 'Ŀ',
      LongLeftArrow: '⟵',
      LongLeftRightArrow: '⟷',
      LongRightArrow: '⟶',
      Longleftarrow: '⟸',
      Longleftrightarrow: '⟺',
      Longrightarrow: '⟹',
      Lopf: '𝕃',
      LowerLeftArrow: '↙',
      LowerRightArrow: '↘',
      Lscr: 'ℒ',
      Lsh: '↰',
      Lstrok: 'Ł',
      Lt: '≪',
      Mcy: 'М',
      MediumSpace: ' ',
      Mellintrf: 'ℳ',
      Mfr: '𝔐',
      MinusPlus: '∓',
      Mopf: '𝕄',
      Mscr: 'ℳ',
      Mu: 'Μ',
      NJcy: 'Њ',
      Nacute: 'Ń',
      Ncaron: 'Ň',
      Ncedil: 'Ņ',
      Ncy: 'Н',
      NegativeMediumSpace: '​',
      NegativeThickSpace: '​',
      NegativeThinSpace: '​',
      NegativeVeryThinSpace: '​',
      NestedGreaterGreater: '≫',
      NestedLessLess: '≪',
      NewLine: '\n',
      Nfr: '𝔑',
      NoBreak: '⁠',
      NonBreakingSpace: ' ',
      Nopf: 'ℕ',
      Not: '⫬',
      NotCongruent: '≢',
      NotCupCap: '≭',
      NotDoubleVerticalBar: '∦',
      NotElement: '∉',
      NotEqual: '≠',
      NotEqualTilde: '≂̸',
      NotExists: '∄',
      NotGreater: '≯',
      NotGreaterEqual: '≱',
      NotGreaterFullEqual: '≧̸',
      NotGreaterGreater: '≫̸',
      NotGreaterLess: '≹',
      NotGreaterSlantEqual: '⩾̸',
      NotGreaterTilde: '≵',
      NotHumpDownHump: '≎̸',
      NotHumpEqual: '≏̸',
      NotLeftTriangle: '⋪',
      NotLeftTriangleBar: '⧏̸',
      NotLeftTriangleEqual: '⋬',
      NotLess: '≮',
      NotLessEqual: '≰',
      NotLessGreater: '≸',
      NotLessLess: '≪̸',
      NotLessSlantEqual: '⩽̸',
      NotLessTilde: '≴',
      NotNestedGreaterGreater: '⪢̸',
      NotNestedLessLess: '⪡̸',
      NotPrecedes: '⊀',
      NotPrecedesEqual: '⪯̸',
      NotPrecedesSlantEqual: '⋠',
      NotReverseElement: '∌',
      NotRightTriangle: '⋫',
      NotRightTriangleBar: '⧐̸',
      NotRightTriangleEqual: '⋭',
      NotSquareSubset: '⊏̸',
      NotSquareSubsetEqual: '⋢',
      NotSquareSuperset: '⊐̸',
      NotSquareSupersetEqual: '⋣',
      NotSubset: '⊂⃒',
      NotSubsetEqual: '⊈',
      NotSucceeds: '⊁',
      NotSucceedsEqual: '⪰̸',
      NotSucceedsSlantEqual: '⋡',
      NotSucceedsTilde: '≿̸',
      NotSuperset: '⊃⃒',
      NotSupersetEqual: '⊉',
      NotTilde: '≁',
      NotTildeEqual: '≄',
      NotTildeFullEqual: '≇',
      NotTildeTilde: '≉',
      NotVerticalBar: '∤',
      Nscr: '𝒩',
      Ntild: 'Ñ',
      Ntilde: 'Ñ',
      Nu: 'Ν',
      OElig: 'Œ',
      Oacut: 'Ó',
      Oacute: 'Ó',
      Ocir: 'Ô',
      Ocirc: 'Ô',
      Ocy: 'О',
      Odblac: 'Ő',
      Ofr: '𝔒',
      Ograv: 'Ò',
      Ograve: 'Ò',
      Omacr: 'Ō',
      Omega: 'Ω',
      Omicron: 'Ο',
      Oopf: '𝕆',
      OpenCurlyDoubleQuote: '“',
      OpenCurlyQuote: '‘',
      Or: '⩔',
      Oscr: '𝒪',
      Oslas: 'Ø',
      Oslash: 'Ø',
      Otild: 'Õ',
      Otilde: 'Õ',
      Otimes: '⨷',
      Oum: 'Ö',
      Ouml: 'Ö',
      OverBar: '‾',
      OverBrace: '⏞',
      OverBracket: '⎴',
      OverParenthesis: '⏜',
      PartialD: '∂',
      Pcy: 'П',
      Pfr: '𝔓',
      Phi: 'Φ',
      Pi: 'Π',
      PlusMinus: '±',
      Poincareplane: 'ℌ',
      Popf: 'ℙ',
      Pr: '⪻',
      Precedes: '≺',
      PrecedesEqual: '⪯',
      PrecedesSlantEqual: '≼',
      PrecedesTilde: '≾',
      Prime: '″',
      Product: '∏',
      Proportion: '∷',
      Proportional: '∝',
      Pscr: '𝒫',
      Psi: 'Ψ',
      QUO: '"',
      QUOT: '"',
      Qfr: '𝔔',
      Qopf: 'ℚ',
      Qscr: '𝒬',
      RBarr: '⤐',
      RE: '®',
      REG: '®',
      Racute: 'Ŕ',
      Rang: '⟫',
      Rarr: '↠',
      Rarrtl: '⤖',
      Rcaron: 'Ř',
      Rcedil: 'Ŗ',
      Rcy: 'Р',
      Re: 'ℜ',
      ReverseElement: '∋',
      ReverseEquilibrium: '⇋',
      ReverseUpEquilibrium: '⥯',
      Rfr: 'ℜ',
      Rho: 'Ρ',
      RightAngleBracket: '⟩',
      RightArrow: '→',
      RightArrowBar: '⇥',
      RightArrowLeftArrow: '⇄',
      RightCeiling: '⌉',
      RightDoubleBracket: '⟧',
      RightDownTeeVector: '⥝',
      RightDownVector: '⇂',
      RightDownVectorBar: '⥕',
      RightFloor: '⌋',
      RightTee: '⊢',
      RightTeeArrow: '↦',
      RightTeeVector: '⥛',
      RightTriangle: '⊳',
      RightTriangleBar: '⧐',
      RightTriangleEqual: '⊵',
      RightUpDownVector: '⥏',
      RightUpTeeVector: '⥜',
      RightUpVector: '↾',
      RightUpVectorBar: '⥔',
      RightVector: '⇀',
      RightVectorBar: '⥓',
      Rightarrow: '⇒',
      Ropf: 'ℝ',
      RoundImplies: '⥰',
      Rrightarrow: '⇛',
      Rscr: 'ℛ',
      Rsh: '↱',
      RuleDelayed: '⧴',
      SHCHcy: 'Щ',
      SHcy: 'Ш',
      SOFTcy: 'Ь',
      Sacute: 'Ś',
      Sc: '⪼',
      Scaron: 'Š',
      Scedil: 'Ş',
      Scirc: 'Ŝ',
      Scy: 'С',
      Sfr: '𝔖',
      ShortDownArrow: '↓',
      ShortLeftArrow: '←',
      ShortRightArrow: '→',
      ShortUpArrow: '↑',
      Sigma: 'Σ',
      SmallCircle: '∘',
      Sopf: '𝕊',
      Sqrt: '√',
      Square: '□',
      SquareIntersection: '⊓',
      SquareSubset: '⊏',
      SquareSubsetEqual: '⊑',
      SquareSuperset: '⊐',
      SquareSupersetEqual: '⊒',
      SquareUnion: '⊔',
      Sscr: '𝒮',
      Star: '⋆',
      Sub: '⋐',
      Subset: '⋐',
      SubsetEqual: '⊆',
      Succeeds: '≻',
      SucceedsEqual: '⪰',
      SucceedsSlantEqual: '≽',
      SucceedsTilde: '≿',
      SuchThat: '∋',
      Sum: '∑',
      Sup: '⋑',
      Superset: '⊃',
      SupersetEqual: '⊇',
      Supset: '⋑',
      THOR: 'Þ',
      THORN: 'Þ',
      TRADE: '™',
      TSHcy: 'Ћ',
      TScy: 'Ц',
      Tab: '\t',
      Tau: 'Τ',
      Tcaron: 'Ť',
      Tcedil: 'Ţ',
      Tcy: 'Т',
      Tfr: '𝔗',
      Therefore: '∴',
      Theta: 'Θ',
      ThickSpace: '  ',
      ThinSpace: ' ',
      Tilde: '∼',
      TildeEqual: '≃',
      TildeFullEqual: '≅',
      TildeTilde: '≈',
      Topf: '𝕋',
      TripleDot: '⃛',
      Tscr: '𝒯',
      Tstrok: 'Ŧ',
      Uacut: 'Ú',
      Uacute: 'Ú',
      Uarr: '↟',
      Uarrocir: '⥉',
      Ubrcy: 'Ў',
      Ubreve: 'Ŭ',
      Ucir: 'Û',
      Ucirc: 'Û',
      Ucy: 'У',
      Udblac: 'Ű',
      Ufr: '𝔘',
      Ugrav: 'Ù',
      Ugrave: 'Ù',
      Umacr: 'Ū',
      UnderBar: '_',
      UnderBrace: '⏟',
      UnderBracket: '⎵',
      UnderParenthesis: '⏝',
      Union: '⋃',
      UnionPlus: '⊎',
      Uogon: 'Ų',
      Uopf: '𝕌',
      UpArrow: '↑',
      UpArrowBar: '⤒',
      UpArrowDownArrow: '⇅',
      UpDownArrow: '↕',
      UpEquilibrium: '⥮',
      UpTee: '⊥',
      UpTeeArrow: '↥',
      Uparrow: '⇑',
      Updownarrow: '⇕',
      UpperLeftArrow: '↖',
      UpperRightArrow: '↗',
      Upsi: 'ϒ',
      Upsilon: 'Υ',
      Uring: 'Ů',
      Uscr: '𝒰',
      Utilde: 'Ũ',
      Uum: 'Ü',
      Uuml: 'Ü',
      VDash: '⊫',
      Vbar: '⫫',
      Vcy: 'В',
      Vdash: '⊩',
      Vdashl: '⫦',
      Vee: '⋁',
      Verbar: '‖',
      Vert: '‖',
      VerticalBar: '∣',
      VerticalLine: '|',
      VerticalSeparator: '❘',
      VerticalTilde: '≀',
      VeryThinSpace: ' ',
      Vfr: '𝔙',
      Vopf: '𝕍',
      Vscr: '𝒱',
      Vvdash: '⊪',
      Wcirc: 'Ŵ',
      Wedge: '⋀',
      Wfr: '𝔚',
      Wopf: '𝕎',
      Wscr: '𝒲',
      Xfr: '𝔛',
      Xi: 'Ξ',
      Xopf: '𝕏',
      Xscr: '𝒳',
      YAcy: 'Я',
      YIcy: 'Ї',
      YUcy: 'Ю',
      Yacut: 'Ý',
      Yacute: 'Ý',
      Ycirc: 'Ŷ',
      Ycy: 'Ы',
      Yfr: '𝔜',
      Yopf: '𝕐',
      Yscr: '𝒴',
      Yuml: 'Ÿ',
      ZHcy: 'Ж',
      Zacute: 'Ź',
      Zcaron: 'Ž',
      Zcy: 'З',
      Zdot: 'Ż',
      ZeroWidthSpace: '​',
      Zeta: 'Ζ',
      Zfr: 'ℨ',
      Zopf: 'ℤ',
      Zscr: '𝒵',
      aacut: 'á',
      aacute: 'á',
      abreve: 'ă',
      ac: '∾',
      acE: '∾̳',
      acd: '∿',
      acir: 'â',
      acirc: 'â',
      acut: '´',
      acute: '´',
      acy: 'а',
      aeli: 'æ',
      aelig: 'æ',
      af: '⁡',
      afr: '𝔞',
      agrav: 'à',
      agrave: 'à',
      alefsym: 'ℵ',
      aleph: 'ℵ',
      alpha: 'α',
      amacr: 'ā',
      amalg: '⨿',
      am: '&',
      amp: '&',
      and: '∧',
      andand: '⩕',
      andd: '⩜',
      andslope: '⩘',
      andv: '⩚',
      ang: '∠',
      ange: '⦤',
      angle: '∠',
      angmsd: '∡',
      angmsdaa: '⦨',
      angmsdab: '⦩',
      angmsdac: '⦪',
      angmsdad: '⦫',
      angmsdae: '⦬',
      angmsdaf: '⦭',
      angmsdag: '⦮',
      angmsdah: '⦯',
      angrt: '∟',
      angrtvb: '⊾',
      angrtvbd: '⦝',
      angsph: '∢',
      angst: 'Å',
      angzarr: '⍼',
      aogon: 'ą',
      aopf: '𝕒',
      ap: '≈',
      apE: '⩰',
      apacir: '⩯',
      ape: '≊',
      apid: '≋',
      apos: "'",
      approx: '≈',
      approxeq: '≊',
      arin: 'å',
      aring: 'å',
      ascr: '𝒶',
      ast: '*',
      asymp: '≈',
      asympeq: '≍',
      atild: 'ã',
      atilde: 'ã',
      aum: 'ä',
      auml: 'ä',
      awconint: '∳',
      awint: '⨑',
      bNot: '⫭',
      backcong: '≌',
      backepsilon: '϶',
      backprime: '‵',
      backsim: '∽',
      backsimeq: '⋍',
      barvee: '⊽',
      barwed: '⌅',
      barwedge: '⌅',
      bbrk: '⎵',
      bbrktbrk: '⎶',
      bcong: '≌',
      bcy: 'б',
      bdquo: '„',
      becaus: '∵',
      because: '∵',
      bemptyv: '⦰',
      bepsi: '϶',
      bernou: 'ℬ',
      beta: 'β',
      beth: 'ℶ',
      between: '≬',
      bfr: '𝔟',
      bigcap: '⋂',
      bigcirc: '◯',
      bigcup: '⋃',
      bigodot: '⨀',
      bigoplus: '⨁',
      bigotimes: '⨂',
      bigsqcup: '⨆',
      bigstar: '★',
      bigtriangledown: '▽',
      bigtriangleup: '△',
      biguplus: '⨄',
      bigvee: '⋁',
      bigwedge: '⋀',
      bkarow: '⤍',
      blacklozenge: '⧫',
      blacksquare: '▪',
      blacktriangle: '▴',
      blacktriangledown: '▾',
      blacktriangleleft: '◂',
      blacktriangleright: '▸',
      blank: '␣',
      blk12: '▒',
      blk14: '░',
      blk34: '▓',
      block: '█',
      bne: '=⃥',
      bnequiv: '≡⃥',
      bnot: '⌐',
      bopf: '𝕓',
      bot: '⊥',
      bottom: '⊥',
      bowtie: '⋈',
      boxDL: '╗',
      boxDR: '╔',
      boxDl: '╖',
      boxDr: '╓',
      boxH: '═',
      boxHD: '╦',
      boxHU: '╩',
      boxHd: '╤',
      boxHu: '╧',
      boxUL: '╝',
      boxUR: '╚',
      boxUl: '╜',
      boxUr: '╙',
      boxV: '║',
      boxVH: '╬',
      boxVL: '╣',
      boxVR: '╠',
      boxVh: '╫',
      boxVl: '╢',
      boxVr: '╟',
      boxbox: '⧉',
      boxdL: '╕',
      boxdR: '╒',
      boxdl: '┐',
      boxdr: '┌',
      boxh: '─',
      boxhD: '╥',
      boxhU: '╨',
      boxhd: '┬',
      boxhu: '┴',
      boxminus: '⊟',
      boxplus: '⊞',
      boxtimes: '⊠',
      boxuL: '╛',
      boxuR: '╘',
      boxul: '┘',
      boxur: '└',
      boxv: '│',
      boxvH: '╪',
      boxvL: '╡',
      boxvR: '╞',
      boxvh: '┼',
      boxvl: '┤',
      boxvr: '├',
      bprime: '‵',
      breve: '˘',
      brvba: '¦',
      brvbar: '¦',
      bscr: '𝒷',
      bsemi: '⁏',
      bsim: '∽',
      bsime: '⋍',
      bsol: '\\',
      bsolb: '⧅',
      bsolhsub: '⟈',
      bull: '•',
      bullet: '•',
      bump: '≎',
      bumpE: '⪮',
      bumpe: '≏',
      bumpeq: '≏',
      cacute: 'ć',
      cap: '∩',
      capand: '⩄',
      capbrcup: '⩉',
      capcap: '⩋',
      capcup: '⩇',
      capdot: '⩀',
      caps: '∩︀',
      caret: '⁁',
      caron: 'ˇ',
      ccaps: '⩍',
      ccaron: 'č',
      ccedi: 'ç',
      ccedil: 'ç',
      ccirc: 'ĉ',
      ccups: '⩌',
      ccupssm: '⩐',
      cdot: 'ċ',
      cedi: '¸',
      cedil: '¸',
      cemptyv: '⦲',
      cen: '¢',
      cent: '¢',
      centerdot: '·',
      cfr: '𝔠',
      chcy: 'ч',
      check: '✓',
      checkmark: '✓',
      chi: 'χ',
      cir: '○',
      cirE: '⧃',
      circ: 'ˆ',
      circeq: '≗',
      circlearrowleft: '↺',
      circlearrowright: '↻',
      circledR: '®',
      circledS: 'Ⓢ',
      circledast: '⊛',
      circledcirc: '⊚',
      circleddash: '⊝',
      cire: '≗',
      cirfnint: '⨐',
      cirmid: '⫯',
      cirscir: '⧂',
      clubs: '♣',
      clubsuit: '♣',
      colon: ':',
      colone: '≔',
      coloneq: '≔',
      comma: ',',
      commat: '@',
      comp: '∁',
      compfn: '∘',
      complement: '∁',
      complexes: 'ℂ',
      cong: '≅',
      congdot: '⩭',
      conint: '∮',
      copf: '𝕔',
      coprod: '∐',
      cop: '©',
      copy: '©',
      copysr: '℗',
      crarr: '↵',
      cross: '✗',
      cscr: '𝒸',
      csub: '⫏',
      csube: '⫑',
      csup: '⫐',
      csupe: '⫒',
      ctdot: '⋯',
      cudarrl: '⤸',
      cudarrr: '⤵',
      cuepr: '⋞',
      cuesc: '⋟',
      cularr: '↶',
      cularrp: '⤽',
      cup: '∪',
      cupbrcap: '⩈',
      cupcap: '⩆',
      cupcup: '⩊',
      cupdot: '⊍',
      cupor: '⩅',
      cups: '∪︀',
      curarr: '↷',
      curarrm: '⤼',
      curlyeqprec: '⋞',
      curlyeqsucc: '⋟',
      curlyvee: '⋎',
      curlywedge: '⋏',
      curre: '¤',
      curren: '¤',
      curvearrowleft: '↶',
      curvearrowright: '↷',
      cuvee: '⋎',
      cuwed: '⋏',
      cwconint: '∲',
      cwint: '∱',
      cylcty: '⌭',
      dArr: '⇓',
      dHar: '⥥',
      dagger: '†',
      daleth: 'ℸ',
      darr: '↓',
      dash: '‐',
      dashv: '⊣',
      dbkarow: '⤏',
      dblac: '˝',
      dcaron: 'ď',
      dcy: 'д',
      dd: 'ⅆ',
      ddagger: '‡',
      ddarr: '⇊',
      ddotseq: '⩷',
      de: '°',
      deg: '°',
      delta: 'δ',
      demptyv: '⦱',
      dfisht: '⥿',
      dfr: '𝔡',
      dharl: '⇃',
      dharr: '⇂',
      diam: '⋄',
      diamond: '⋄',
      diamondsuit: '♦',
      diams: '♦',
      die: '¨',
      digamma: 'ϝ',
      disin: '⋲',
      div: '÷',
      divid: '÷',
      divide: '÷',
      divideontimes: '⋇',
      divonx: '⋇',
      djcy: 'ђ',
      dlcorn: '⌞',
      dlcrop: '⌍',
      dollar: '$',
      dopf: '𝕕',
      dot: '˙',
      doteq: '≐',
      doteqdot: '≑',
      dotminus: '∸',
      dotplus: '∔',
      dotsquare: '⊡',
      doublebarwedge: '⌆',
      downarrow: '↓',
      downdownarrows: '⇊',
      downharpoonleft: '⇃',
      downharpoonright: '⇂',
      drbkarow: '⤐',
      drcorn: '⌟',
      drcrop: '⌌',
      dscr: '𝒹',
      dscy: 'ѕ',
      dsol: '⧶',
      dstrok: 'đ',
      dtdot: '⋱',
      dtri: '▿',
      dtrif: '▾',
      duarr: '⇵',
      duhar: '⥯',
      dwangle: '⦦',
      dzcy: 'џ',
      dzigrarr: '⟿',
      eDDot: '⩷',
      eDot: '≑',
      eacut: 'é',
      eacute: 'é',
      easter: '⩮',
      ecaron: 'ě',
      ecir: 'ê',
      ecirc: 'ê',
      ecolon: '≕',
      ecy: 'э',
      edot: 'ė',
      ee: 'ⅇ',
      efDot: '≒',
      efr: '𝔢',
      eg: '⪚',
      egrav: 'è',
      egrave: 'è',
      egs: '⪖',
      egsdot: '⪘',
      el: '⪙',
      elinters: '⏧',
      ell: 'ℓ',
      els: '⪕',
      elsdot: '⪗',
      emacr: 'ē',
      empty: '∅',
      emptyset: '∅',
      emptyv: '∅',
      emsp13: ' ',
      emsp14: ' ',
      emsp: ' ',
      eng: 'ŋ',
      ensp: ' ',
      eogon: 'ę',
      eopf: '𝕖',
      epar: '⋕',
      eparsl: '⧣',
      eplus: '⩱',
      epsi: 'ε',
      epsilon: 'ε',
      epsiv: 'ϵ',
      eqcirc: '≖',
      eqcolon: '≕',
      eqsim: '≂',
      eqslantgtr: '⪖',
      eqslantless: '⪕',
      equals: '=',
      equest: '≟',
      equiv: '≡',
      equivDD: '⩸',
      eqvparsl: '⧥',
      erDot: '≓',
      erarr: '⥱',
      escr: 'ℯ',
      esdot: '≐',
      esim: '≂',
      eta: 'η',
      et: 'ð',
      eth: 'ð',
      eum: 'ë',
      euml: 'ë',
      euro: '€',
      excl: '!',
      exist: '∃',
      expectation: 'ℰ',
      exponentiale: 'ⅇ',
      fallingdotseq: '≒',
      fcy: 'ф',
      female: '♀',
      ffilig: 'ﬃ',
      fflig: 'ﬀ',
      ffllig: 'ﬄ',
      ffr: '𝔣',
      filig: 'ﬁ',
      fjlig: 'fj',
      flat: '♭',
      fllig: 'ﬂ',
      fltns: '▱',
      fnof: 'ƒ',
      fopf: '𝕗',
      forall: '∀',
      fork: '⋔',
      forkv: '⫙',
      fpartint: '⨍',
      frac1: '¼',
      frac12: '½',
      frac13: '⅓',
      frac14: '¼',
      frac15: '⅕',
      frac16: '⅙',
      frac18: '⅛',
      frac23: '⅔',
      frac25: '⅖',
      frac3: '¾',
      frac34: '¾',
      frac35: '⅗',
      frac38: '⅜',
      frac45: '⅘',
      frac56: '⅚',
      frac58: '⅝',
      frac78: '⅞',
      frasl: '⁄',
      frown: '⌢',
      fscr: '𝒻',
      gE: '≧',
      gEl: '⪌',
      gacute: 'ǵ',
      gamma: 'γ',
      gammad: 'ϝ',
      gap: '⪆',
      gbreve: 'ğ',
      gcirc: 'ĝ',
      gcy: 'г',
      gdot: 'ġ',
      ge: '≥',
      gel: '⋛',
      geq: '≥',
      geqq: '≧',
      geqslant: '⩾',
      ges: '⩾',
      gescc: '⪩',
      gesdot: '⪀',
      gesdoto: '⪂',
      gesdotol: '⪄',
      gesl: '⋛︀',
      gesles: '⪔',
      gfr: '𝔤',
      gg: '≫',
      ggg: '⋙',
      gimel: 'ℷ',
      gjcy: 'ѓ',
      gl: '≷',
      glE: '⪒',
      gla: '⪥',
      glj: '⪤',
      gnE: '≩',
      gnap: '⪊',
      gnapprox: '⪊',
      gne: '⪈',
      gneq: '⪈',
      gneqq: '≩',
      gnsim: '⋧',
      gopf: '𝕘',
      grave: '`',
      gscr: 'ℊ',
      gsim: '≳',
      gsime: '⪎',
      gsiml: '⪐',
      g: '>',
      gt: '>',
      gtcc: '⪧',
      gtcir: '⩺',
      gtdot: '⋗',
      gtlPar: '⦕',
      gtquest: '⩼',
      gtrapprox: '⪆',
      gtrarr: '⥸',
      gtrdot: '⋗',
      gtreqless: '⋛',
      gtreqqless: '⪌',
      gtrless: '≷',
      gtrsim: '≳',
      gvertneqq: '≩︀',
      gvnE: '≩︀',
      hArr: '⇔',
      hairsp: ' ',
      half: '½',
      hamilt: 'ℋ',
      hardcy: 'ъ',
      harr: '↔',
      harrcir: '⥈',
      harrw: '↭',
      hbar: 'ℏ',
      hcirc: 'ĥ',
      hearts: '♥',
      heartsuit: '♥',
      hellip: '…',
      hercon: '⊹',
      hfr: '𝔥',
      hksearow: '⤥',
      hkswarow: '⤦',
      hoarr: '⇿',
      homtht: '∻',
      hookleftarrow: '↩',
      hookrightarrow: '↪',
      hopf: '𝕙',
      horbar: '―',
      hscr: '𝒽',
      hslash: 'ℏ',
      hstrok: 'ħ',
      hybull: '⁃',
      hyphen: '‐',
      iacut: 'í',
      iacute: 'í',
      ic: '⁣',
      icir: 'î',
      icirc: 'î',
      icy: 'и',
      iecy: 'е',
      iexc: '¡',
      iexcl: '¡',
      iff: '⇔',
      ifr: '𝔦',
      igrav: 'ì',
      igrave: 'ì',
      ii: 'ⅈ',
      iiiint: '⨌',
      iiint: '∭',
      iinfin: '⧜',
      iiota: '℩',
      ijlig: 'ĳ',
      imacr: 'ī',
      image: 'ℑ',
      imagline: 'ℐ',
      imagpart: 'ℑ',
      imath: 'ı',
      imof: '⊷',
      imped: 'Ƶ',
      incare: '℅',
      infin: '∞',
      infintie: '⧝',
      inodot: 'ı',
      int: '∫',
      intcal: '⊺',
      integers: 'ℤ',
      intercal: '⊺',
      intlarhk: '⨗',
      intprod: '⨼',
      iocy: 'ё',
      iogon: 'į',
      iopf: '𝕚',
      iota: 'ι',
      iprod: '⨼',
      iques: '¿',
      iquest: '¿',
      iscr: '𝒾',
      isin: '∈',
      isinE: '⋹',
      isindot: '⋵',
      isins: '⋴',
      isinsv: '⋳',
      isinv: '∈',
      it: '⁢',
      itilde: 'ĩ',
      iukcy: 'і',
      ium: 'ï',
      iuml: 'ï',
      jcirc: 'ĵ',
      jcy: 'й',
      jfr: '𝔧',
      jmath: 'ȷ',
      jopf: '𝕛',
      jscr: '𝒿',
      jsercy: 'ј',
      jukcy: 'є',
      kappa: 'κ',
      kappav: 'ϰ',
      kcedil: 'ķ',
      kcy: 'к',
      kfr: '𝔨',
      kgreen: 'ĸ',
      khcy: 'х',
      kjcy: 'ќ',
      kopf: '𝕜',
      kscr: '𝓀',
      lAarr: '⇚',
      lArr: '⇐',
      lAtail: '⤛',
      lBarr: '⤎',
      lE: '≦',
      lEg: '⪋',
      lHar: '⥢',
      lacute: 'ĺ',
      laemptyv: '⦴',
      lagran: 'ℒ',
      lambda: 'λ',
      lang: '⟨',
      langd: '⦑',
      langle: '⟨',
      lap: '⪅',
      laqu: '«',
      laquo: '«',
      larr: '←',
      larrb: '⇤',
      larrbfs: '⤟',
      larrfs: '⤝',
      larrhk: '↩',
      larrlp: '↫',
      larrpl: '⤹',
      larrsim: '⥳',
      larrtl: '↢',
      lat: '⪫',
      latail: '⤙',
      late: '⪭',
      lates: '⪭︀',
      lbarr: '⤌',
      lbbrk: '❲',
      lbrace: '{',
      lbrack: '[',
      lbrke: '⦋',
      lbrksld: '⦏',
      lbrkslu: '⦍',
      lcaron: 'ľ',
      lcedil: 'ļ',
      lceil: '⌈',
      lcub: '{',
      lcy: 'л',
      ldca: '⤶',
      ldquo: '“',
      ldquor: '„',
      ldrdhar: '⥧',
      ldrushar: '⥋',
      ldsh: '↲',
      le: '≤',
      leftarrow: '←',
      leftarrowtail: '↢',
      leftharpoondown: '↽',
      leftharpoonup: '↼',
      leftleftarrows: '⇇',
      leftrightarrow: '↔',
      leftrightarrows: '⇆',
      leftrightharpoons: '⇋',
      leftrightsquigarrow: '↭',
      leftthreetimes: '⋋',
      leg: '⋚',
      leq: '≤',
      leqq: '≦',
      leqslant: '⩽',
      les: '⩽',
      lescc: '⪨',
      lesdot: '⩿',
      lesdoto: '⪁',
      lesdotor: '⪃',
      lesg: '⋚︀',
      lesges: '⪓',
      lessapprox: '⪅',
      lessdot: '⋖',
      lesseqgtr: '⋚',
      lesseqqgtr: '⪋',
      lessgtr: '≶',
      lesssim: '≲',
      lfisht: '⥼',
      lfloor: '⌊',
      lfr: '𝔩',
      lg: '≶',
      lgE: '⪑',
      lhard: '↽',
      lharu: '↼',
      lharul: '⥪',
      lhblk: '▄',
      ljcy: 'љ',
      ll: '≪',
      llarr: '⇇',
      llcorner: '⌞',
      llhard: '⥫',
      lltri: '◺',
      lmidot: 'ŀ',
      lmoust: '⎰',
      lmoustache: '⎰',
      lnE: '≨',
      lnap: '⪉',
      lnapprox: '⪉',
      lne: '⪇',
      lneq: '⪇',
      lneqq: '≨',
      lnsim: '⋦',
      loang: '⟬',
      loarr: '⇽',
      lobrk: '⟦',
      longleftarrow: '⟵',
      longleftrightarrow: '⟷',
      longmapsto: '⟼',
      longrightarrow: '⟶',
      looparrowleft: '↫',
      looparrowright: '↬',
      lopar: '⦅',
      lopf: '𝕝',
      loplus: '⨭',
      lotimes: '⨴',
      lowast: '∗',
      lowbar: '_',
      loz: '◊',
      lozenge: '◊',
      lozf: '⧫',
      lpar: '(',
      lparlt: '⦓',
      lrarr: '⇆',
      lrcorner: '⌟',
      lrhar: '⇋',
      lrhard: '⥭',
      lrm: '‎',
      lrtri: '⊿',
      lsaquo: '‹',
      lscr: '𝓁',
      lsh: '↰',
      lsim: '≲',
      lsime: '⪍',
      lsimg: '⪏',
      lsqb: '[',
      lsquo: '‘',
      lsquor: '‚',
      lstrok: 'ł',
      l: '<',
      lt: '<',
      ltcc: '⪦',
      ltcir: '⩹',
      ltdot: '⋖',
      lthree: '⋋',
      ltimes: '⋉',
      ltlarr: '⥶',
      ltquest: '⩻',
      ltrPar: '⦖',
      ltri: '◃',
      ltrie: '⊴',
      ltrif: '◂',
      lurdshar: '⥊',
      luruhar: '⥦',
      lvertneqq: '≨︀',
      lvnE: '≨︀',
      mDDot: '∺',
      mac: '¯',
      macr: '¯',
      male: '♂',
      malt: '✠',
      maltese: '✠',
      map: '↦',
      mapsto: '↦',
      mapstodown: '↧',
      mapstoleft: '↤',
      mapstoup: '↥',
      marker: '▮',
      mcomma: '⨩',
      mcy: 'м',
      mdash: '—',
      measuredangle: '∡',
      mfr: '𝔪',
      mho: '℧',
      micr: 'µ',
      micro: 'µ',
      mid: '∣',
      midast: '*',
      midcir: '⫰',
      middo: '·',
      middot: '·',
      minus: '−',
      minusb: '⊟',
      minusd: '∸',
      minusdu: '⨪',
      mlcp: '⫛',
      mldr: '…',
      mnplus: '∓',
      models: '⊧',
      mopf: '𝕞',
      mp: '∓',
      mscr: '𝓂',
      mstpos: '∾',
      mu: 'μ',
      multimap: '⊸',
      mumap: '⊸',
      nGg: '⋙̸',
      nGt: '≫⃒',
      nGtv: '≫̸',
      nLeftarrow: '⇍',
      nLeftrightarrow: '⇎',
      nLl: '⋘̸',
      nLt: '≪⃒',
      nLtv: '≪̸',
      nRightarrow: '⇏',
      nVDash: '⊯',
      nVdash: '⊮',
      nabla: '∇',
      nacute: 'ń',
      nang: '∠⃒',
      nap: '≉',
      napE: '⩰̸',
      napid: '≋̸',
      napos: 'ŉ',
      napprox: '≉',
      natur: '♮',
      natural: '♮',
      naturals: 'ℕ',
      nbs: ' ',
      nbsp: ' ',
      nbump: '≎̸',
      nbumpe: '≏̸',
      ncap: '⩃',
      ncaron: 'ň',
      ncedil: 'ņ',
      ncong: '≇',
      ncongdot: '⩭̸',
      ncup: '⩂',
      ncy: 'н',
      ndash: '–',
      ne: '≠',
      neArr: '⇗',
      nearhk: '⤤',
      nearr: '↗',
      nearrow: '↗',
      nedot: '≐̸',
      nequiv: '≢',
      nesear: '⤨',
      nesim: '≂̸',
      nexist: '∄',
      nexists: '∄',
      nfr: '𝔫',
      ngE: '≧̸',
      nge: '≱',
      ngeq: '≱',
      ngeqq: '≧̸',
      ngeqslant: '⩾̸',
      nges: '⩾̸',
      ngsim: '≵',
      ngt: '≯',
      ngtr: '≯',
      nhArr: '⇎',
      nharr: '↮',
      nhpar: '⫲',
      ni: '∋',
      nis: '⋼',
      nisd: '⋺',
      niv: '∋',
      njcy: 'њ',
      nlArr: '⇍',
      nlE: '≦̸',
      nlarr: '↚',
      nldr: '‥',
      nle: '≰',
      nleftarrow: '↚',
      nleftrightarrow: '↮',
      nleq: '≰',
      nleqq: '≦̸',
      nleqslant: '⩽̸',
      nles: '⩽̸',
      nless: '≮',
      nlsim: '≴',
      nlt: '≮',
      nltri: '⋪',
      nltrie: '⋬',
      nmid: '∤',
      nopf: '𝕟',
      no: '¬',
      not: '¬',
      notin: '∉',
      notinE: '⋹̸',
      notindot: '⋵̸',
      notinva: '∉',
      notinvb: '⋷',
      notinvc: '⋶',
      notni: '∌',
      notniva: '∌',
      notnivb: '⋾',
      notnivc: '⋽',
      npar: '∦',
      nparallel: '∦',
      nparsl: '⫽⃥',
      npart: '∂̸',
      npolint: '⨔',
      npr: '⊀',
      nprcue: '⋠',
      npre: '⪯̸',
      nprec: '⊀',
      npreceq: '⪯̸',
      nrArr: '⇏',
      nrarr: '↛',
      nrarrc: '⤳̸',
      nrarrw: '↝̸',
      nrightarrow: '↛',
      nrtri: '⋫',
      nrtrie: '⋭',
      nsc: '⊁',
      nsccue: '⋡',
      nsce: '⪰̸',
      nscr: '𝓃',
      nshortmid: '∤',
      nshortparallel: '∦',
      nsim: '≁',
      nsime: '≄',
      nsimeq: '≄',
      nsmid: '∤',
      nspar: '∦',
      nsqsube: '⋢',
      nsqsupe: '⋣',
      nsub: '⊄',
      nsubE: '⫅̸',
      nsube: '⊈',
      nsubset: '⊂⃒',
      nsubseteq: '⊈',
      nsubseteqq: '⫅̸',
      nsucc: '⊁',
      nsucceq: '⪰̸',
      nsup: '⊅',
      nsupE: '⫆̸',
      nsupe: '⊉',
      nsupset: '⊃⃒',
      nsupseteq: '⊉',
      nsupseteqq: '⫆̸',
      ntgl: '≹',
      ntild: 'ñ',
      ntilde: 'ñ',
      ntlg: '≸',
      ntriangleleft: '⋪',
      ntrianglelefteq: '⋬',
      ntriangleright: '⋫',
      ntrianglerighteq: '⋭',
      nu: 'ν',
      num: '#',
      numero: '№',
      numsp: ' ',
      nvDash: '⊭',
      nvHarr: '⤄',
      nvap: '≍⃒',
      nvdash: '⊬',
      nvge: '≥⃒',
      nvgt: '>⃒',
      nvinfin: '⧞',
      nvlArr: '⤂',
      nvle: '≤⃒',
      nvlt: '<⃒',
      nvltrie: '⊴⃒',
      nvrArr: '⤃',
      nvrtrie: '⊵⃒',
      nvsim: '∼⃒',
      nwArr: '⇖',
      nwarhk: '⤣',
      nwarr: '↖',
      nwarrow: '↖',
      nwnear: '⤧',
      oS: 'Ⓢ',
      oacut: 'ó',
      oacute: 'ó',
      oast: '⊛',
      ocir: 'ô',
      ocirc: 'ô',
      ocy: 'о',
      odash: '⊝',
      odblac: 'ő',
      odiv: '⨸',
      odot: '⊙',
      odsold: '⦼',
      oelig: 'œ',
      ofcir: '⦿',
      ofr: '𝔬',
      ogon: '˛',
      ograv: 'ò',
      ograve: 'ò',
      ogt: '⧁',
      ohbar: '⦵',
      ohm: 'Ω',
      oint: '∮',
      olarr: '↺',
      olcir: '⦾',
      olcross: '⦻',
      oline: '‾',
      olt: '⧀',
      omacr: 'ō',
      omega: 'ω',
      omicron: 'ο',
      omid: '⦶',
      ominus: '⊖',
      oopf: '𝕠',
      opar: '⦷',
      operp: '⦹',
      oplus: '⊕',
      or: '∨',
      orarr: '↻',
      ord: 'º',
      order: 'ℴ',
      orderof: 'ℴ',
      ordf: 'ª',
      ordm: 'º',
      origof: '⊶',
      oror: '⩖',
      orslope: '⩗',
      orv: '⩛',
      oscr: 'ℴ',
      oslas: 'ø',
      oslash: 'ø',
      osol: '⊘',
      otild: 'õ',
      otilde: 'õ',
      otimes: '⊗',
      otimesas: '⨶',
      oum: 'ö',
      ouml: 'ö',
      ovbar: '⌽',
      par: '¶',
      para: '¶',
      parallel: '∥',
      parsim: '⫳',
      parsl: '⫽',
      part: '∂',
      pcy: 'п',
      percnt: '%',
      period: '.',
      permil: '‰',
      perp: '⊥',
      pertenk: '‱',
      pfr: '𝔭',
      phi: 'φ',
      phiv: 'ϕ',
      phmmat: 'ℳ',
      phone: '☎',
      pi: 'π',
      pitchfork: '⋔',
      piv: 'ϖ',
      planck: 'ℏ',
      planckh: 'ℎ',
      plankv: 'ℏ',
      plus: '+',
      plusacir: '⨣',
      plusb: '⊞',
      pluscir: '⨢',
      plusdo: '∔',
      plusdu: '⨥',
      pluse: '⩲',
      plusm: '±',
      plusmn: '±',
      plussim: '⨦',
      plustwo: '⨧',
      pm: '±',
      pointint: '⨕',
      popf: '𝕡',
      poun: '£',
      pound: '£',
      pr: '≺',
      prE: '⪳',
      prap: '⪷',
      prcue: '≼',
      pre: '⪯',
      prec: '≺',
      precapprox: '⪷',
      preccurlyeq: '≼',
      preceq: '⪯',
      precnapprox: '⪹',
      precneqq: '⪵',
      precnsim: '⋨',
      precsim: '≾',
      prime: '′',
      primes: 'ℙ',
      prnE: '⪵',
      prnap: '⪹',
      prnsim: '⋨',
      prod: '∏',
      profalar: '⌮',
      profline: '⌒',
      profsurf: '⌓',
      prop: '∝',
      propto: '∝',
      prsim: '≾',
      prurel: '⊰',
      pscr: '𝓅',
      psi: 'ψ',
      puncsp: ' ',
      qfr: '𝔮',
      qint: '⨌',
      qopf: '𝕢',
      qprime: '⁗',
      qscr: '𝓆',
      quaternions: 'ℍ',
      quatint: '⨖',
      quest: '?',
      questeq: '≟',
      quo: '"',
      quot: '"',
      rAarr: '⇛',
      rArr: '⇒',
      rAtail: '⤜',
      rBarr: '⤏',
      rHar: '⥤',
      race: '∽̱',
      racute: 'ŕ',
      radic: '√',
      raemptyv: '⦳',
      rang: '⟩',
      rangd: '⦒',
      range: '⦥',
      rangle: '⟩',
      raqu: '»',
      raquo: '»',
      rarr: '→',
      rarrap: '⥵',
      rarrb: '⇥',
      rarrbfs: '⤠',
      rarrc: '⤳',
      rarrfs: '⤞',
      rarrhk: '↪',
      rarrlp: '↬',
      rarrpl: '⥅',
      rarrsim: '⥴',
      rarrtl: '↣',
      rarrw: '↝',
      ratail: '⤚',
      ratio: '∶',
      rationals: 'ℚ',
      rbarr: '⤍',
      rbbrk: '❳',
      rbrace: '}',
      rbrack: ']',
      rbrke: '⦌',
      rbrksld: '⦎',
      rbrkslu: '⦐',
      rcaron: 'ř',
      rcedil: 'ŗ',
      rceil: '⌉',
      rcub: '}',
      rcy: 'р',
      rdca: '⤷',
      rdldhar: '⥩',
      rdquo: '”',
      rdquor: '”',
      rdsh: '↳',
      real: 'ℜ',
      realine: 'ℛ',
      realpart: 'ℜ',
      reals: 'ℝ',
      rect: '▭',
      re: '®',
      reg: '®',
      rfisht: '⥽',
      rfloor: '⌋',
      rfr: '𝔯',
      rhard: '⇁',
      rharu: '⇀',
      rharul: '⥬',
      rho: 'ρ',
      rhov: 'ϱ',
      rightarrow: '→',
      rightarrowtail: '↣',
      rightharpoondown: '⇁',
      rightharpoonup: '⇀',
      rightleftarrows: '⇄',
      rightleftharpoons: '⇌',
      rightrightarrows: '⇉',
      rightsquigarrow: '↝',
      rightthreetimes: '⋌',
      ring: '˚',
      risingdotseq: '≓',
      rlarr: '⇄',
      rlhar: '⇌',
      rlm: '‏',
      rmoust: '⎱',
      rmoustache: '⎱',
      rnmid: '⫮',
      roang: '⟭',
      roarr: '⇾',
      robrk: '⟧',
      ropar: '⦆',
      ropf: '𝕣',
      roplus: '⨮',
      rotimes: '⨵',
      rpar: ')',
      rpargt: '⦔',
      rppolint: '⨒',
      rrarr: '⇉',
      rsaquo: '›',
      rscr: '𝓇',
      rsh: '↱',
      rsqb: ']',
      rsquo: '’',
      rsquor: '’',
      rthree: '⋌',
      rtimes: '⋊',
      rtri: '▹',
      rtrie: '⊵',
      rtrif: '▸',
      rtriltri: '⧎',
      ruluhar: '⥨',
      rx: '℞',
      sacute: 'ś',
      sbquo: '‚',
      sc: '≻',
      scE: '⪴',
      scap: '⪸',
      scaron: 'š',
      sccue: '≽',
      sce: '⪰',
      scedil: 'ş',
      scirc: 'ŝ',
      scnE: '⪶',
      scnap: '⪺',
      scnsim: '⋩',
      scpolint: '⨓',
      scsim: '≿',
      scy: 'с',
      sdot: '⋅',
      sdotb: '⊡',
      sdote: '⩦',
      seArr: '⇘',
      searhk: '⤥',
      searr: '↘',
      searrow: '↘',
      sec: '§',
      sect: '§',
      semi: ';',
      seswar: '⤩',
      setminus: '∖',
      setmn: '∖',
      sext: '✶',
      sfr: '𝔰',
      sfrown: '⌢',
      sharp: '♯',
      shchcy: 'щ',
      shcy: 'ш',
      shortmid: '∣',
      shortparallel: '∥',
      sh: '­',
      shy: '­',
      sigma: 'σ',
      sigmaf: 'ς',
      sigmav: 'ς',
      sim: '∼',
      simdot: '⩪',
      sime: '≃',
      simeq: '≃',
      simg: '⪞',
      simgE: '⪠',
      siml: '⪝',
      simlE: '⪟',
      simne: '≆',
      simplus: '⨤',
      simrarr: '⥲',
      slarr: '←',
      smallsetminus: '∖',
      smashp: '⨳',
      smeparsl: '⧤',
      smid: '∣',
      smile: '⌣',
      smt: '⪪',
      smte: '⪬',
      smtes: '⪬︀',
      softcy: 'ь',
      sol: '/',
      solb: '⧄',
      solbar: '⌿',
      sopf: '𝕤',
      spades: '♠',
      spadesuit: '♠',
      spar: '∥',
      sqcap: '⊓',
      sqcaps: '⊓︀',
      sqcup: '⊔',
      sqcups: '⊔︀',
      sqsub: '⊏',
      sqsube: '⊑',
      sqsubset: '⊏',
      sqsubseteq: '⊑',
      sqsup: '⊐',
      sqsupe: '⊒',
      sqsupset: '⊐',
      sqsupseteq: '⊒',
      squ: '□',
      square: '□',
      squarf: '▪',
      squf: '▪',
      srarr: '→',
      sscr: '𝓈',
      ssetmn: '∖',
      ssmile: '⌣',
      sstarf: '⋆',
      star: '☆',
      starf: '★',
      straightepsilon: 'ϵ',
      straightphi: 'ϕ',
      strns: '¯',
      sub: '⊂',
      subE: '⫅',
      subdot: '⪽',
      sube: '⊆',
      subedot: '⫃',
      submult: '⫁',
      subnE: '⫋',
      subne: '⊊',
      subplus: '⪿',
      subrarr: '⥹',
      subset: '⊂',
      subseteq: '⊆',
      subseteqq: '⫅',
      subsetneq: '⊊',
      subsetneqq: '⫋',
      subsim: '⫇',
      subsub: '⫕',
      subsup: '⫓',
      succ: '≻',
      succapprox: '⪸',
      succcurlyeq: '≽',
      succeq: '⪰',
      succnapprox: '⪺',
      succneqq: '⪶',
      succnsim: '⋩',
      succsim: '≿',
      sum: '∑',
      sung: '♪',
      sup: '⊃',
      sup1: '¹',
      sup2: '²',
      sup3: '³',
      supE: '⫆',
      supdot: '⪾',
      supdsub: '⫘',
      supe: '⊇',
      supedot: '⫄',
      suphsol: '⟉',
      suphsub: '⫗',
      suplarr: '⥻',
      supmult: '⫂',
      supnE: '⫌',
      supne: '⊋',
      supplus: '⫀',
      supset: '⊃',
      supseteq: '⊇',
      supseteqq: '⫆',
      supsetneq: '⊋',
      supsetneqq: '⫌',
      supsim: '⫈',
      supsub: '⫔',
      supsup: '⫖',
      swArr: '⇙',
      swarhk: '⤦',
      swarr: '↙',
      swarrow: '↙',
      swnwar: '⤪',
      szli: 'ß',
      szlig: 'ß',
      target: '⌖',
      tau: 'τ',
      tbrk: '⎴',
      tcaron: 'ť',
      tcedil: 'ţ',
      tcy: 'т',
      tdot: '⃛',
      telrec: '⌕',
      tfr: '𝔱',
      there4: '∴',
      therefore: '∴',
      theta: 'θ',
      thetasym: 'ϑ',
      thetav: 'ϑ',
      thickapprox: '≈',
      thicksim: '∼',
      thinsp: ' ',
      thkap: '≈',
      thksim: '∼',
      thor: 'þ',
      thorn: 'þ',
      tilde: '˜',
      time: '×',
      times: '×',
      timesb: '⊠',
      timesbar: '⨱',
      timesd: '⨰',
      tint: '∭',
      toea: '⤨',
      top: '⊤',
      topbot: '⌶',
      topcir: '⫱',
      topf: '𝕥',
      topfork: '⫚',
      tosa: '⤩',
      tprime: '‴',
      trade: '™',
      triangle: '▵',
      triangledown: '▿',
      triangleleft: '◃',
      trianglelefteq: '⊴',
      triangleq: '≜',
      triangleright: '▹',
      trianglerighteq: '⊵',
      tridot: '◬',
      trie: '≜',
      triminus: '⨺',
      triplus: '⨹',
      trisb: '⧍',
      tritime: '⨻',
      trpezium: '⏢',
      tscr: '𝓉',
      tscy: 'ц',
      tshcy: 'ћ',
      tstrok: 'ŧ',
      twixt: '≬',
      twoheadleftarrow: '↞',
      twoheadrightarrow: '↠',
      uArr: '⇑',
      uHar: '⥣',
      uacut: 'ú',
      uacute: 'ú',
      uarr: '↑',
      ubrcy: 'ў',
      ubreve: 'ŭ',
      ucir: 'û',
      ucirc: 'û',
      ucy: 'у',
      udarr: '⇅',
      udblac: 'ű',
      udhar: '⥮',
      ufisht: '⥾',
      ufr: '𝔲',
      ugrav: 'ù',
      ugrave: 'ù',
      uharl: '↿',
      uharr: '↾',
      uhblk: '▀',
      ulcorn: '⌜',
      ulcorner: '⌜',
      ulcrop: '⌏',
      ultri: '◸',
      umacr: 'ū',
      um: '¨',
      uml: '¨',
      uogon: 'ų',
      uopf: '𝕦',
      uparrow: '↑',
      updownarrow: '↕',
      upharpoonleft: '↿',
      upharpoonright: '↾',
      uplus: '⊎',
      upsi: 'υ',
      upsih: 'ϒ',
      upsilon: 'υ',
      upuparrows: '⇈',
      urcorn: '⌝',
      urcorner: '⌝',
      urcrop: '⌎',
      uring: 'ů',
      urtri: '◹',
      uscr: '𝓊',
      utdot: '⋰',
      utilde: 'ũ',
      utri: '▵',
      utrif: '▴',
      uuarr: '⇈',
      uum: 'ü',
      uuml: 'ü',
      uwangle: '⦧',
      vArr: '⇕',
      vBar: '⫨',
      vBarv: '⫩',
      vDash: '⊨',
      vangrt: '⦜',
      varepsilon: 'ϵ',
      varkappa: 'ϰ',
      varnothing: '∅',
      varphi: 'ϕ',
      varpi: 'ϖ',
      varpropto: '∝',
      varr: '↕',
      varrho: 'ϱ',
      varsigma: 'ς',
      varsubsetneq: '⊊︀',
      varsubsetneqq: '⫋︀',
      varsupsetneq: '⊋︀',
      varsupsetneqq: '⫌︀',
      vartheta: 'ϑ',
      vartriangleleft: '⊲',
      vartriangleright: '⊳',
      vcy: 'в',
      vdash: '⊢',
      vee: '∨',
      veebar: '⊻',
      veeeq: '≚',
      vellip: '⋮',
      verbar: '|',
      vert: '|',
      vfr: '𝔳',
      vltri: '⊲',
      vnsub: '⊂⃒',
      vnsup: '⊃⃒',
      vopf: '𝕧',
      vprop: '∝',
      vrtri: '⊳',
      vscr: '𝓋',
      vsubnE: '⫋︀',
      vsubne: '⊊︀',
      vsupnE: '⫌︀',
      vsupne: '⊋︀',
      vzigzag: '⦚',
      wcirc: 'ŵ',
      wedbar: '⩟',
      wedge: '∧',
      wedgeq: '≙',
      weierp: '℘',
      wfr: '𝔴',
      wopf: '𝕨',
      wp: '℘',
      wr: '≀',
      wreath: '≀',
      wscr: '𝓌',
      xcap: '⋂',
      xcirc: '◯',
      xcup: '⋃',
      xdtri: '▽',
      xfr: '𝔵',
      xhArr: '⟺',
      xharr: '⟷',
      xi: 'ξ',
      xlArr: '⟸',
      xlarr: '⟵',
      xmap: '⟼',
      xnis: '⋻',
      xodot: '⨀',
      xopf: '𝕩',
      xoplus: '⨁',
      xotime: '⨂',
      xrArr: '⟹',
      xrarr: '⟶',
      xscr: '𝓍',
      xsqcup: '⨆',
      xuplus: '⨄',
      xutri: '△',
      xvee: '⋁',
      xwedge: '⋀',
      yacut: 'ý',
      yacute: 'ý',
      yacy: 'я',
      ycirc: 'ŷ',
      ycy: 'ы',
      ye: '¥',
      yen: '¥',
      yfr: '𝔶',
      yicy: 'ї',
      yopf: '𝕪',
      yscr: '𝓎',
      yucy: 'ю',
      yum: 'ÿ',
      yuml: 'ÿ',
      zacute: 'ź',
      zcaron: 'ž',
      zcy: 'з',
      zdot: 'ż',
      zeetrf: 'ℨ',
      zeta: 'ζ',
      zfr: '𝔷',
      zhcy: 'ж',
      zigrarr: '⇝',
      zopf: '𝕫',
      zscr: '𝓏',
      zwj: '‍',
      zwnj: '‌',
      Map: '⤅',
      in: '∈'
    },
    g = Object.freeze({
      AEli: 'Æ',
      AElig: 'Æ',
      AM: '&',
      AMP: '&',
      Aacut: 'Á',
      Aacute: 'Á',
      Abreve: 'Ă',
      Acir: 'Â',
      Acirc: 'Â',
      Acy: 'А',
      Afr: '𝔄',
      Agrav: 'À',
      Agrave: 'À',
      Alpha: 'Α',
      Amacr: 'Ā',
      And: '⩓',
      Aogon: 'Ą',
      Aopf: '𝔸',
      ApplyFunction: '⁡',
      Arin: 'Å',
      Aring: 'Å',
      Ascr: '𝒜',
      Assign: '≔',
      Atild: 'Ã',
      Atilde: 'Ã',
      Aum: 'Ä',
      Auml: 'Ä',
      Backslash: '∖',
      Barv: '⫧',
      Barwed: '⌆',
      Bcy: 'Б',
      Because: '∵',
      Bernoullis: 'ℬ',
      Beta: 'Β',
      Bfr: '𝔅',
      Bopf: '𝔹',
      Breve: '˘',
      Bscr: 'ℬ',
      Bumpeq: '≎',
      CHcy: 'Ч',
      COP: '©',
      COPY: '©',
      Cacute: 'Ć',
      Cap: '⋒',
      CapitalDifferentialD: 'ⅅ',
      Cayleys: 'ℭ',
      Ccaron: 'Č',
      Ccedi: 'Ç',
      Ccedil: 'Ç',
      Ccirc: 'Ĉ',
      Cconint: '∰',
      Cdot: 'Ċ',
      Cedilla: '¸',
      CenterDot: '·',
      Cfr: 'ℭ',
      Chi: 'Χ',
      CircleDot: '⊙',
      CircleMinus: '⊖',
      CirclePlus: '⊕',
      CircleTimes: '⊗',
      ClockwiseContourIntegral: '∲',
      CloseCurlyDoubleQuote: '”',
      CloseCurlyQuote: '’',
      Colon: '∷',
      Colone: '⩴',
      Congruent: '≡',
      Conint: '∯',
      ContourIntegral: '∮',
      Copf: 'ℂ',
      Coproduct: '∐',
      CounterClockwiseContourIntegral: '∳',
      Cross: '⨯',
      Cscr: '𝒞',
      Cup: '⋓',
      CupCap: '≍',
      DD: 'ⅅ',
      DDotrahd: '⤑',
      DJcy: 'Ђ',
      DScy: 'Ѕ',
      DZcy: 'Џ',
      Dagger: '‡',
      Darr: '↡',
      Dashv: '⫤',
      Dcaron: 'Ď',
      Dcy: 'Д',
      Del: '∇',
      Delta: 'Δ',
      Dfr: '𝔇',
      DiacriticalAcute: '´',
      DiacriticalDot: '˙',
      DiacriticalDoubleAcute: '˝',
      DiacriticalGrave: '`',
      DiacriticalTilde: '˜',
      Diamond: '⋄',
      DifferentialD: 'ⅆ',
      Dopf: '𝔻',
      Dot: '¨',
      DotDot: '⃜',
      DotEqual: '≐',
      DoubleContourIntegral: '∯',
      DoubleDot: '¨',
      DoubleDownArrow: '⇓',
      DoubleLeftArrow: '⇐',
      DoubleLeftRightArrow: '⇔',
      DoubleLeftTee: '⫤',
      DoubleLongLeftArrow: '⟸',
      DoubleLongLeftRightArrow: '⟺',
      DoubleLongRightArrow: '⟹',
      DoubleRightArrow: '⇒',
      DoubleRightTee: '⊨',
      DoubleUpArrow: '⇑',
      DoubleUpDownArrow: '⇕',
      DoubleVerticalBar: '∥',
      DownArrow: '↓',
      DownArrowBar: '⤓',
      DownArrowUpArrow: '⇵',
      DownBreve: '̑',
      DownLeftRightVector: '⥐',
      DownLeftTeeVector: '⥞',
      DownLeftVector: '↽',
      DownLeftVectorBar: '⥖',
      DownRightTeeVector: '⥟',
      DownRightVector: '⇁',
      DownRightVectorBar: '⥗',
      DownTee: '⊤',
      DownTeeArrow: '↧',
      Downarrow: '⇓',
      Dscr: '𝒟',
      Dstrok: 'Đ',
      ENG: 'Ŋ',
      ET: 'Ð',
      ETH: 'Ð',
      Eacut: 'É',
      Eacute: 'É',
      Ecaron: 'Ě',
      Ecir: 'Ê',
      Ecirc: 'Ê',
      Ecy: 'Э',
      Edot: 'Ė',
      Efr: '𝔈',
      Egrav: 'È',
      Egrave: 'È',
      Element: '∈',
      Emacr: 'Ē',
      EmptySmallSquare: '◻',
      EmptyVerySmallSquare: '▫',
      Eogon: 'Ę',
      Eopf: '𝔼',
      Epsilon: 'Ε',
      Equal: '⩵',
      EqualTilde: '≂',
      Equilibrium: '⇌',
      Escr: 'ℰ',
      Esim: '⩳',
      Eta: 'Η',
      Eum: 'Ë',
      Euml: 'Ë',
      Exists: '∃',
      ExponentialE: 'ⅇ',
      Fcy: 'Ф',
      Ffr: '𝔉',
      FilledSmallSquare: '◼',
      FilledVerySmallSquare: '▪',
      Fopf: '𝔽',
      ForAll: '∀',
      Fouriertrf: 'ℱ',
      Fscr: 'ℱ',
      GJcy: 'Ѓ',
      G: '>',
      GT: '>',
      Gamma: 'Γ',
      Gammad: 'Ϝ',
      Gbreve: 'Ğ',
      Gcedil: 'Ģ',
      Gcirc: 'Ĝ',
      Gcy: 'Г',
      Gdot: 'Ġ',
      Gfr: '𝔊',
      Gg: '⋙',
      Gopf: '𝔾',
      GreaterEqual: '≥',
      GreaterEqualLess: '⋛',
      GreaterFullEqual: '≧',
      GreaterGreater: '⪢',
      GreaterLess: '≷',
      GreaterSlantEqual: '⩾',
      GreaterTilde: '≳',
      Gscr: '𝒢',
      Gt: '≫',
      HARDcy: 'Ъ',
      Hacek: 'ˇ',
      Hat: '^',
      Hcirc: 'Ĥ',
      Hfr: 'ℌ',
      HilbertSpace: 'ℋ',
      Hopf: 'ℍ',
      HorizontalLine: '─',
      Hscr: 'ℋ',
      Hstrok: 'Ħ',
      HumpDownHump: '≎',
      HumpEqual: '≏',
      IEcy: 'Е',
      IJlig: 'Ĳ',
      IOcy: 'Ё',
      Iacut: 'Í',
      Iacute: 'Í',
      Icir: 'Î',
      Icirc: 'Î',
      Icy: 'И',
      Idot: 'İ',
      Ifr: 'ℑ',
      Igrav: 'Ì',
      Igrave: 'Ì',
      Im: 'ℑ',
      Imacr: 'Ī',
      ImaginaryI: 'ⅈ',
      Implies: '⇒',
      Int: '∬',
      Integral: '∫',
      Intersection: '⋂',
      InvisibleComma: '⁣',
      InvisibleTimes: '⁢',
      Iogon: 'Į',
      Iopf: '𝕀',
      Iota: 'Ι',
      Iscr: 'ℐ',
      Itilde: 'Ĩ',
      Iukcy: 'І',
      Ium: 'Ï',
      Iuml: 'Ï',
      Jcirc: 'Ĵ',
      Jcy: 'Й',
      Jfr: '𝔍',
      Jopf: '𝕁',
      Jscr: '𝒥',
      Jsercy: 'Ј',
      Jukcy: 'Є',
      KHcy: 'Х',
      KJcy: 'Ќ',
      Kappa: 'Κ',
      Kcedil: 'Ķ',
      Kcy: 'К',
      Kfr: '𝔎',
      Kopf: '𝕂',
      Kscr: '𝒦',
      LJcy: 'Љ',
      L: '<',
      LT: '<',
      Lacute: 'Ĺ',
      Lambda: 'Λ',
      Lang: '⟪',
      Laplacetrf: 'ℒ',
      Larr: '↞',
      Lcaron: 'Ľ',
      Lcedil: 'Ļ',
      Lcy: 'Л',
      LeftAngleBracket: '⟨',
      LeftArrow: '←',
      LeftArrowBar: '⇤',
      LeftArrowRightArrow: '⇆',
      LeftCeiling: '⌈',
      LeftDoubleBracket: '⟦',
      LeftDownTeeVector: '⥡',
      LeftDownVector: '⇃',
      LeftDownVectorBar: '⥙',
      LeftFloor: '⌊',
      LeftRightArrow: '↔',
      LeftRightVector: '⥎',
      LeftTee: '⊣',
      LeftTeeArrow: '↤',
      LeftTeeVector: '⥚',
      LeftTriangle: '⊲',
      LeftTriangleBar: '⧏',
      LeftTriangleEqual: '⊴',
      LeftUpDownVector: '⥑',
      LeftUpTeeVector: '⥠',
      LeftUpVector: '↿',
      LeftUpVectorBar: '⥘',
      LeftVector: '↼',
      LeftVectorBar: '⥒',
      Leftarrow: '⇐',
      Leftrightarrow: '⇔',
      LessEqualGreater: '⋚',
      LessFullEqual: '≦',
      LessGreater: '≶',
      LessLess: '⪡',
      LessSlantEqual: '⩽',
      LessTilde: '≲',
      Lfr: '𝔏',
      Ll: '⋘',
      Lleftarrow: '⇚',
      Lmidot: 'Ŀ',
      LongLeftArrow: '⟵',
      LongLeftRightArrow: '⟷',
      LongRightArrow: '⟶',
      Longleftarrow: '⟸',
      Longleftrightarrow: '⟺',
      Longrightarrow: '⟹',
      Lopf: '𝕃',
      LowerLeftArrow: '↙',
      LowerRightArrow: '↘',
      Lscr: 'ℒ',
      Lsh: '↰',
      Lstrok: 'Ł',
      Lt: '≪',
      Mcy: 'М',
      MediumSpace: ' ',
      Mellintrf: 'ℳ',
      Mfr: '𝔐',
      MinusPlus: '∓',
      Mopf: '𝕄',
      Mscr: 'ℳ',
      Mu: 'Μ',
      NJcy: 'Њ',
      Nacute: 'Ń',
      Ncaron: 'Ň',
      Ncedil: 'Ņ',
      Ncy: 'Н',
      NegativeMediumSpace: '​',
      NegativeThickSpace: '​',
      NegativeThinSpace: '​',
      NegativeVeryThinSpace: '​',
      NestedGreaterGreater: '≫',
      NestedLessLess: '≪',
      NewLine: '\n',
      Nfr: '𝔑',
      NoBreak: '⁠',
      NonBreakingSpace: ' ',
      Nopf: 'ℕ',
      Not: '⫬',
      NotCongruent: '≢',
      NotCupCap: '≭',
      NotDoubleVerticalBar: '∦',
      NotElement: '∉',
      NotEqual: '≠',
      NotEqualTilde: '≂̸',
      NotExists: '∄',
      NotGreater: '≯',
      NotGreaterEqual: '≱',
      NotGreaterFullEqual: '≧̸',
      NotGreaterGreater: '≫̸',
      NotGreaterLess: '≹',
      NotGreaterSlantEqual: '⩾̸',
      NotGreaterTilde: '≵',
      NotHumpDownHump: '≎̸',
      NotHumpEqual: '≏̸',
      NotLeftTriangle: '⋪',
      NotLeftTriangleBar: '⧏̸',
      NotLeftTriangleEqual: '⋬',
      NotLess: '≮',
      NotLessEqual: '≰',
      NotLessGreater: '≸',
      NotLessLess: '≪̸',
      NotLessSlantEqual: '⩽̸',
      NotLessTilde: '≴',
      NotNestedGreaterGreater: '⪢̸',
      NotNestedLessLess: '⪡̸',
      NotPrecedes: '⊀',
      NotPrecedesEqual: '⪯̸',
      NotPrecedesSlantEqual: '⋠',
      NotReverseElement: '∌',
      NotRightTriangle: '⋫',
      NotRightTriangleBar: '⧐̸',
      NotRightTriangleEqual: '⋭',
      NotSquareSubset: '⊏̸',
      NotSquareSubsetEqual: '⋢',
      NotSquareSuperset: '⊐̸',
      NotSquareSupersetEqual: '⋣',
      NotSubset: '⊂⃒',
      NotSubsetEqual: '⊈',
      NotSucceeds: '⊁',
      NotSucceedsEqual: '⪰̸',
      NotSucceedsSlantEqual: '⋡',
      NotSucceedsTilde: '≿̸',
      NotSuperset: '⊃⃒',
      NotSupersetEqual: '⊉',
      NotTilde: '≁',
      NotTildeEqual: '≄',
      NotTildeFullEqual: '≇',
      NotTildeTilde: '≉',
      NotVerticalBar: '∤',
      Nscr: '𝒩',
      Ntild: 'Ñ',
      Ntilde: 'Ñ',
      Nu: 'Ν',
      OElig: 'Œ',
      Oacut: 'Ó',
      Oacute: 'Ó',
      Ocir: 'Ô',
      Ocirc: 'Ô',
      Ocy: 'О',
      Odblac: 'Ő',
      Ofr: '𝔒',
      Ograv: 'Ò',
      Ograve: 'Ò',
      Omacr: 'Ō',
      Omega: 'Ω',
      Omicron: 'Ο',
      Oopf: '𝕆',
      OpenCurlyDoubleQuote: '“',
      OpenCurlyQuote: '‘',
      Or: '⩔',
      Oscr: '𝒪',
      Oslas: 'Ø',
      Oslash: 'Ø',
      Otild: 'Õ',
      Otilde: 'Õ',
      Otimes: '⨷',
      Oum: 'Ö',
      Ouml: 'Ö',
      OverBar: '‾',
      OverBrace: '⏞',
      OverBracket: '⎴',
      OverParenthesis: '⏜',
      PartialD: '∂',
      Pcy: 'П',
      Pfr: '𝔓',
      Phi: 'Φ',
      Pi: 'Π',
      PlusMinus: '±',
      Poincareplane: 'ℌ',
      Popf: 'ℙ',
      Pr: '⪻',
      Precedes: '≺',
      PrecedesEqual: '⪯',
      PrecedesSlantEqual: '≼',
      PrecedesTilde: '≾',
      Prime: '″',
      Product: '∏',
      Proportion: '∷',
      Proportional: '∝',
      Pscr: '𝒫',
      Psi: 'Ψ',
      QUO: '"',
      QUOT: '"',
      Qfr: '𝔔',
      Qopf: 'ℚ',
      Qscr: '𝒬',
      RBarr: '⤐',
      RE: '®',
      REG: '®',
      Racute: 'Ŕ',
      Rang: '⟫',
      Rarr: '↠',
      Rarrtl: '⤖',
      Rcaron: 'Ř',
      Rcedil: 'Ŗ',
      Rcy: 'Р',
      Re: 'ℜ',
      ReverseElement: '∋',
      ReverseEquilibrium: '⇋',
      ReverseUpEquilibrium: '⥯',
      Rfr: 'ℜ',
      Rho: 'Ρ',
      RightAngleBracket: '⟩',
      RightArrow: '→',
      RightArrowBar: '⇥',
      RightArrowLeftArrow: '⇄',
      RightCeiling: '⌉',
      RightDoubleBracket: '⟧',
      RightDownTeeVector: '⥝',
      RightDownVector: '⇂',
      RightDownVectorBar: '⥕',
      RightFloor: '⌋',
      RightTee: '⊢',
      RightTeeArrow: '↦',
      RightTeeVector: '⥛',
      RightTriangle: '⊳',
      RightTriangleBar: '⧐',
      RightTriangleEqual: '⊵',
      RightUpDownVector: '⥏',
      RightUpTeeVector: '⥜',
      RightUpVector: '↾',
      RightUpVectorBar: '⥔',
      RightVector: '⇀',
      RightVectorBar: '⥓',
      Rightarrow: '⇒',
      Ropf: 'ℝ',
      RoundImplies: '⥰',
      Rrightarrow: '⇛',
      Rscr: 'ℛ',
      Rsh: '↱',
      RuleDelayed: '⧴',
      SHCHcy: 'Щ',
      SHcy: 'Ш',
      SOFTcy: 'Ь',
      Sacute: 'Ś',
      Sc: '⪼',
      Scaron: 'Š',
      Scedil: 'Ş',
      Scirc: 'Ŝ',
      Scy: 'С',
      Sfr: '𝔖',
      ShortDownArrow: '↓',
      ShortLeftArrow: '←',
      ShortRightArrow: '→',
      ShortUpArrow: '↑',
      Sigma: 'Σ',
      SmallCircle: '∘',
      Sopf: '𝕊',
      Sqrt: '√',
      Square: '□',
      SquareIntersection: '⊓',
      SquareSubset: '⊏',
      SquareSubsetEqual: '⊑',
      SquareSuperset: '⊐',
      SquareSupersetEqual: '⊒',
      SquareUnion: '⊔',
      Sscr: '𝒮',
      Star: '⋆',
      Sub: '⋐',
      Subset: '⋐',
      SubsetEqual: '⊆',
      Succeeds: '≻',
      SucceedsEqual: '⪰',
      SucceedsSlantEqual: '≽',
      SucceedsTilde: '≿',
      SuchThat: '∋',
      Sum: '∑',
      Sup: '⋑',
      Superset: '⊃',
      SupersetEqual: '⊇',
      Supset: '⋑',
      THOR: 'Þ',
      THORN: 'Þ',
      TRADE: '™',
      TSHcy: 'Ћ',
      TScy: 'Ц',
      Tab: '\t',
      Tau: 'Τ',
      Tcaron: 'Ť',
      Tcedil: 'Ţ',
      Tcy: 'Т',
      Tfr: '𝔗',
      Therefore: '∴',
      Theta: 'Θ',
      ThickSpace: '  ',
      ThinSpace: ' ',
      Tilde: '∼',
      TildeEqual: '≃',
      TildeFullEqual: '≅',
      TildeTilde: '≈',
      Topf: '𝕋',
      TripleDot: '⃛',
      Tscr: '𝒯',
      Tstrok: 'Ŧ',
      Uacut: 'Ú',
      Uacute: 'Ú',
      Uarr: '↟',
      Uarrocir: '⥉',
      Ubrcy: 'Ў',
      Ubreve: 'Ŭ',
      Ucir: 'Û',
      Ucirc: 'Û',
      Ucy: 'У',
      Udblac: 'Ű',
      Ufr: '𝔘',
      Ugrav: 'Ù',
      Ugrave: 'Ù',
      Umacr: 'Ū',
      UnderBar: '_',
      UnderBrace: '⏟',
      UnderBracket: '⎵',
      UnderParenthesis: '⏝',
      Union: '⋃',
      UnionPlus: '⊎',
      Uogon: 'Ų',
      Uopf: '𝕌',
      UpArrow: '↑',
      UpArrowBar: '⤒',
      UpArrowDownArrow: '⇅',
      UpDownArrow: '↕',
      UpEquilibrium: '⥮',
      UpTee: '⊥',
      UpTeeArrow: '↥',
      Uparrow: '⇑',
      Updownarrow: '⇕',
      UpperLeftArrow: '↖',
      UpperRightArrow: '↗',
      Upsi: 'ϒ',
      Upsilon: 'Υ',
      Uring: 'Ů',
      Uscr: '𝒰',
      Utilde: 'Ũ',
      Uum: 'Ü',
      Uuml: 'Ü',
      VDash: '⊫',
      Vbar: '⫫',
      Vcy: 'В',
      Vdash: '⊩',
      Vdashl: '⫦',
      Vee: '⋁',
      Verbar: '‖',
      Vert: '‖',
      VerticalBar: '∣',
      VerticalLine: '|',
      VerticalSeparator: '❘',
      VerticalTilde: '≀',
      VeryThinSpace: ' ',
      Vfr: '𝔙',
      Vopf: '𝕍',
      Vscr: '𝒱',
      Vvdash: '⊪',
      Wcirc: 'Ŵ',
      Wedge: '⋀',
      Wfr: '𝔚',
      Wopf: '𝕎',
      Wscr: '𝒲',
      Xfr: '𝔛',
      Xi: 'Ξ',
      Xopf: '𝕏',
      Xscr: '𝒳',
      YAcy: 'Я',
      YIcy: 'Ї',
      YUcy: 'Ю',
      Yacut: 'Ý',
      Yacute: 'Ý',
      Ycirc: 'Ŷ',
      Ycy: 'Ы',
      Yfr: '𝔜',
      Yopf: '𝕐',
      Yscr: '𝒴',
      Yuml: 'Ÿ',
      ZHcy: 'Ж',
      Zacute: 'Ź',
      Zcaron: 'Ž',
      Zcy: 'З',
      Zdot: 'Ż',
      ZeroWidthSpace: '​',
      Zeta: 'Ζ',
      Zfr: 'ℨ',
      Zopf: 'ℤ',
      Zscr: '𝒵',
      aacut: 'á',
      aacute: 'á',
      abreve: 'ă',
      ac: '∾',
      acE: '∾̳',
      acd: '∿',
      acir: 'â',
      acirc: 'â',
      acut: '´',
      acute: '´',
      acy: 'а',
      aeli: 'æ',
      aelig: 'æ',
      af: '⁡',
      afr: '𝔞',
      agrav: 'à',
      agrave: 'à',
      alefsym: 'ℵ',
      aleph: 'ℵ',
      alpha: 'α',
      amacr: 'ā',
      amalg: '⨿',
      am: '&',
      amp: '&',
      and: '∧',
      andand: '⩕',
      andd: '⩜',
      andslope: '⩘',
      andv: '⩚',
      ang: '∠',
      ange: '⦤',
      angle: '∠',
      angmsd: '∡',
      angmsdaa: '⦨',
      angmsdab: '⦩',
      angmsdac: '⦪',
      angmsdad: '⦫',
      angmsdae: '⦬',
      angmsdaf: '⦭',
      angmsdag: '⦮',
      angmsdah: '⦯',
      angrt: '∟',
      angrtvb: '⊾',
      angrtvbd: '⦝',
      angsph: '∢',
      angst: 'Å',
      angzarr: '⍼',
      aogon: 'ą',
      aopf: '𝕒',
      ap: '≈',
      apE: '⩰',
      apacir: '⩯',
      ape: '≊',
      apid: '≋',
      apos: "'",
      approx: '≈',
      approxeq: '≊',
      arin: 'å',
      aring: 'å',
      ascr: '𝒶',
      ast: '*',
      asymp: '≈',
      asympeq: '≍',
      atild: 'ã',
      atilde: 'ã',
      aum: 'ä',
      auml: 'ä',
      awconint: '∳',
      awint: '⨑',
      bNot: '⫭',
      backcong: '≌',
      backepsilon: '϶',
      backprime: '‵',
      backsim: '∽',
      backsimeq: '⋍',
      barvee: '⊽',
      barwed: '⌅',
      barwedge: '⌅',
      bbrk: '⎵',
      bbrktbrk: '⎶',
      bcong: '≌',
      bcy: 'б',
      bdquo: '„',
      becaus: '∵',
      because: '∵',
      bemptyv: '⦰',
      bepsi: '϶',
      bernou: 'ℬ',
      beta: 'β',
      beth: 'ℶ',
      between: '≬',
      bfr: '𝔟',
      bigcap: '⋂',
      bigcirc: '◯',
      bigcup: '⋃',
      bigodot: '⨀',
      bigoplus: '⨁',
      bigotimes: '⨂',
      bigsqcup: '⨆',
      bigstar: '★',
      bigtriangledown: '▽',
      bigtriangleup: '△',
      biguplus: '⨄',
      bigvee: '⋁',
      bigwedge: '⋀',
      bkarow: '⤍',
      blacklozenge: '⧫',
      blacksquare: '▪',
      blacktriangle: '▴',
      blacktriangledown: '▾',
      blacktriangleleft: '◂',
      blacktriangleright: '▸',
      blank: '␣',
      blk12: '▒',
      blk14: '░',
      blk34: '▓',
      block: '█',
      bne: '=⃥',
      bnequiv: '≡⃥',
      bnot: '⌐',
      bopf: '𝕓',
      bot: '⊥',
      bottom: '⊥',
      bowtie: '⋈',
      boxDL: '╗',
      boxDR: '╔',
      boxDl: '╖',
      boxDr: '╓',
      boxH: '═',
      boxHD: '╦',
      boxHU: '╩',
      boxHd: '╤',
      boxHu: '╧',
      boxUL: '╝',
      boxUR: '╚',
      boxUl: '╜',
      boxUr: '╙',
      boxV: '║',
      boxVH: '╬',
      boxVL: '╣',
      boxVR: '╠',
      boxVh: '╫',
      boxVl: '╢',
      boxVr: '╟',
      boxbox: '⧉',
      boxdL: '╕',
      boxdR: '╒',
      boxdl: '┐',
      boxdr: '┌',
      boxh: '─',
      boxhD: '╥',
      boxhU: '╨',
      boxhd: '┬',
      boxhu: '┴',
      boxminus: '⊟',
      boxplus: '⊞',
      boxtimes: '⊠',
      boxuL: '╛',
      boxuR: '╘',
      boxul: '┘',
      boxur: '└',
      boxv: '│',
      boxvH: '╪',
      boxvL: '╡',
      boxvR: '╞',
      boxvh: '┼',
      boxvl: '┤',
      boxvr: '├',
      bprime: '‵',
      breve: '˘',
      brvba: '¦',
      brvbar: '¦',
      bscr: '𝒷',
      bsemi: '⁏',
      bsim: '∽',
      bsime: '⋍',
      bsol: '\\',
      bsolb: '⧅',
      bsolhsub: '⟈',
      bull: '•',
      bullet: '•',
      bump: '≎',
      bumpE: '⪮',
      bumpe: '≏',
      bumpeq: '≏',
      cacute: 'ć',
      cap: '∩',
      capand: '⩄',
      capbrcup: '⩉',
      capcap: '⩋',
      capcup: '⩇',
      capdot: '⩀',
      caps: '∩︀',
      caret: '⁁',
      caron: 'ˇ',
      ccaps: '⩍',
      ccaron: 'č',
      ccedi: 'ç',
      ccedil: 'ç',
      ccirc: 'ĉ',
      ccups: '⩌',
      ccupssm: '⩐',
      cdot: 'ċ',
      cedi: '¸',
      cedil: '¸',
      cemptyv: '⦲',
      cen: '¢',
      cent: '¢',
      centerdot: '·',
      cfr: '𝔠',
      chcy: 'ч',
      check: '✓',
      checkmark: '✓',
      chi: 'χ',
      cir: '○',
      cirE: '⧃',
      circ: 'ˆ',
      circeq: '≗',
      circlearrowleft: '↺',
      circlearrowright: '↻',
      circledR: '®',
      circledS: 'Ⓢ',
      circledast: '⊛',
      circledcirc: '⊚',
      circleddash: '⊝',
      cire: '≗',
      cirfnint: '⨐',
      cirmid: '⫯',
      cirscir: '⧂',
      clubs: '♣',
      clubsuit: '♣',
      colon: ':',
      colone: '≔',
      coloneq: '≔',
      comma: ',',
      commat: '@',
      comp: '∁',
      compfn: '∘',
      complement: '∁',
      complexes: 'ℂ',
      cong: '≅',
      congdot: '⩭',
      conint: '∮',
      copf: '𝕔',
      coprod: '∐',
      cop: '©',
      copy: '©',
      copysr: '℗',
      crarr: '↵',
      cross: '✗',
      cscr: '𝒸',
      csub: '⫏',
      csube: '⫑',
      csup: '⫐',
      csupe: '⫒',
      ctdot: '⋯',
      cudarrl: '⤸',
      cudarrr: '⤵',
      cuepr: '⋞',
      cuesc: '⋟',
      cularr: '↶',
      cularrp: '⤽',
      cup: '∪',
      cupbrcap: '⩈',
      cupcap: '⩆',
      cupcup: '⩊',
      cupdot: '⊍',
      cupor: '⩅',
      cups: '∪︀',
      curarr: '↷',
      curarrm: '⤼',
      curlyeqprec: '⋞',
      curlyeqsucc: '⋟',
      curlyvee: '⋎',
      curlywedge: '⋏',
      curre: '¤',
      curren: '¤',
      curvearrowleft: '↶',
      curvearrowright: '↷',
      cuvee: '⋎',
      cuwed: '⋏',
      cwconint: '∲',
      cwint: '∱',
      cylcty: '⌭',
      dArr: '⇓',
      dHar: '⥥',
      dagger: '†',
      daleth: 'ℸ',
      darr: '↓',
      dash: '‐',
      dashv: '⊣',
      dbkarow: '⤏',
      dblac: '˝',
      dcaron: 'ď',
      dcy: 'д',
      dd: 'ⅆ',
      ddagger: '‡',
      ddarr: '⇊',
      ddotseq: '⩷',
      de: '°',
      deg: '°',
      delta: 'δ',
      demptyv: '⦱',
      dfisht: '⥿',
      dfr: '𝔡',
      dharl: '⇃',
      dharr: '⇂',
      diam: '⋄',
      diamond: '⋄',
      diamondsuit: '♦',
      diams: '♦',
      die: '¨',
      digamma: 'ϝ',
      disin: '⋲',
      div: '÷',
      divid: '÷',
      divide: '÷',
      divideontimes: '⋇',
      divonx: '⋇',
      djcy: 'ђ',
      dlcorn: '⌞',
      dlcrop: '⌍',
      dollar: '$',
      dopf: '𝕕',
      dot: '˙',
      doteq: '≐',
      doteqdot: '≑',
      dotminus: '∸',
      dotplus: '∔',
      dotsquare: '⊡',
      doublebarwedge: '⌆',
      downarrow: '↓',
      downdownarrows: '⇊',
      downharpoonleft: '⇃',
      downharpoonright: '⇂',
      drbkarow: '⤐',
      drcorn: '⌟',
      drcrop: '⌌',
      dscr: '𝒹',
      dscy: 'ѕ',
      dsol: '⧶',
      dstrok: 'đ',
      dtdot: '⋱',
      dtri: '▿',
      dtrif: '▾',
      duarr: '⇵',
      duhar: '⥯',
      dwangle: '⦦',
      dzcy: 'џ',
      dzigrarr: '⟿',
      eDDot: '⩷',
      eDot: '≑',
      eacut: 'é',
      eacute: 'é',
      easter: '⩮',
      ecaron: 'ě',
      ecir: 'ê',
      ecirc: 'ê',
      ecolon: '≕',
      ecy: 'э',
      edot: 'ė',
      ee: 'ⅇ',
      efDot: '≒',
      efr: '𝔢',
      eg: '⪚',
      egrav: 'è',
      egrave: 'è',
      egs: '⪖',
      egsdot: '⪘',
      el: '⪙',
      elinters: '⏧',
      ell: 'ℓ',
      els: '⪕',
      elsdot: '⪗',
      emacr: 'ē',
      empty: '∅',
      emptyset: '∅',
      emptyv: '∅',
      emsp13: ' ',
      emsp14: ' ',
      emsp: ' ',
      eng: 'ŋ',
      ensp: ' ',
      eogon: 'ę',
      eopf: '𝕖',
      epar: '⋕',
      eparsl: '⧣',
      eplus: '⩱',
      epsi: 'ε',
      epsilon: 'ε',
      epsiv: 'ϵ',
      eqcirc: '≖',
      eqcolon: '≕',
      eqsim: '≂',
      eqslantgtr: '⪖',
      eqslantless: '⪕',
      equals: '=',
      equest: '≟',
      equiv: '≡',
      equivDD: '⩸',
      eqvparsl: '⧥',
      erDot: '≓',
      erarr: '⥱',
      escr: 'ℯ',
      esdot: '≐',
      esim: '≂',
      eta: 'η',
      et: 'ð',
      eth: 'ð',
      eum: 'ë',
      euml: 'ë',
      euro: '€',
      excl: '!',
      exist: '∃',
      expectation: 'ℰ',
      exponentiale: 'ⅇ',
      fallingdotseq: '≒',
      fcy: 'ф',
      female: '♀',
      ffilig: 'ﬃ',
      fflig: 'ﬀ',
      ffllig: 'ﬄ',
      ffr: '𝔣',
      filig: 'ﬁ',
      fjlig: 'fj',
      flat: '♭',
      fllig: 'ﬂ',
      fltns: '▱',
      fnof: 'ƒ',
      fopf: '𝕗',
      forall: '∀',
      fork: '⋔',
      forkv: '⫙',
      fpartint: '⨍',
      frac1: '¼',
      frac12: '½',
      frac13: '⅓',
      frac14: '¼',
      frac15: '⅕',
      frac16: '⅙',
      frac18: '⅛',
      frac23: '⅔',
      frac25: '⅖',
      frac3: '¾',
      frac34: '¾',
      frac35: '⅗',
      frac38: '⅜',
      frac45: '⅘',
      frac56: '⅚',
      frac58: '⅝',
      frac78: '⅞',
      frasl: '⁄',
      frown: '⌢',
      fscr: '𝒻',
      gE: '≧',
      gEl: '⪌',
      gacute: 'ǵ',
      gamma: 'γ',
      gammad: 'ϝ',
      gap: '⪆',
      gbreve: 'ğ',
      gcirc: 'ĝ',
      gcy: 'г',
      gdot: 'ġ',
      ge: '≥',
      gel: '⋛',
      geq: '≥',
      geqq: '≧',
      geqslant: '⩾',
      ges: '⩾',
      gescc: '⪩',
      gesdot: '⪀',
      gesdoto: '⪂',
      gesdotol: '⪄',
      gesl: '⋛︀',
      gesles: '⪔',
      gfr: '𝔤',
      gg: '≫',
      ggg: '⋙',
      gimel: 'ℷ',
      gjcy: 'ѓ',
      gl: '≷',
      glE: '⪒',
      gla: '⪥',
      glj: '⪤',
      gnE: '≩',
      gnap: '⪊',
      gnapprox: '⪊',
      gne: '⪈',
      gneq: '⪈',
      gneqq: '≩',
      gnsim: '⋧',
      gopf: '𝕘',
      grave: '`',
      gscr: 'ℊ',
      gsim: '≳',
      gsime: '⪎',
      gsiml: '⪐',
      g: '>',
      gt: '>',
      gtcc: '⪧',
      gtcir: '⩺',
      gtdot: '⋗',
      gtlPar: '⦕',
      gtquest: '⩼',
      gtrapprox: '⪆',
      gtrarr: '⥸',
      gtrdot: '⋗',
      gtreqless: '⋛',
      gtreqqless: '⪌',
      gtrless: '≷',
      gtrsim: '≳',
      gvertneqq: '≩︀',
      gvnE: '≩︀',
      hArr: '⇔',
      hairsp: ' ',
      half: '½',
      hamilt: 'ℋ',
      hardcy: 'ъ',
      harr: '↔',
      harrcir: '⥈',
      harrw: '↭',
      hbar: 'ℏ',
      hcirc: 'ĥ',
      hearts: '♥',
      heartsuit: '♥',
      hellip: '…',
      hercon: '⊹',
      hfr: '𝔥',
      hksearow: '⤥',
      hkswarow: '⤦',
      hoarr: '⇿',
      homtht: '∻',
      hookleftarrow: '↩',
      hookrightarrow: '↪',
      hopf: '𝕙',
      horbar: '―',
      hscr: '𝒽',
      hslash: 'ℏ',
      hstrok: 'ħ',
      hybull: '⁃',
      hyphen: '‐',
      iacut: 'í',
      iacute: 'í',
      ic: '⁣',
      icir: 'î',
      icirc: 'î',
      icy: 'и',
      iecy: 'е',
      iexc: '¡',
      iexcl: '¡',
      iff: '⇔',
      ifr: '𝔦',
      igrav: 'ì',
      igrave: 'ì',
      ii: 'ⅈ',
      iiiint: '⨌',
      iiint: '∭',
      iinfin: '⧜',
      iiota: '℩',
      ijlig: 'ĳ',
      imacr: 'ī',
      image: 'ℑ',
      imagline: 'ℐ',
      imagpart: 'ℑ',
      imath: 'ı',
      imof: '⊷',
      imped: 'Ƶ',
      incare: '℅',
      infin: '∞',
      infintie: '⧝',
      inodot: 'ı',
      int: '∫',
      intcal: '⊺',
      integers: 'ℤ',
      intercal: '⊺',
      intlarhk: '⨗',
      intprod: '⨼',
      iocy: 'ё',
      iogon: 'į',
      iopf: '𝕚',
      iota: 'ι',
      iprod: '⨼',
      iques: '¿',
      iquest: '¿',
      iscr: '𝒾',
      isin: '∈',
      isinE: '⋹',
      isindot: '⋵',
      isins: '⋴',
      isinsv: '⋳',
      isinv: '∈',
      it: '⁢',
      itilde: 'ĩ',
      iukcy: 'і',
      ium: 'ï',
      iuml: 'ï',
      jcirc: 'ĵ',
      jcy: 'й',
      jfr: '𝔧',
      jmath: 'ȷ',
      jopf: '𝕛',
      jscr: '𝒿',
      jsercy: 'ј',
      jukcy: 'є',
      kappa: 'κ',
      kappav: 'ϰ',
      kcedil: 'ķ',
      kcy: 'к',
      kfr: '𝔨',
      kgreen: 'ĸ',
      khcy: 'х',
      kjcy: 'ќ',
      kopf: '𝕜',
      kscr: '𝓀',
      lAarr: '⇚',
      lArr: '⇐',
      lAtail: '⤛',
      lBarr: '⤎',
      lE: '≦',
      lEg: '⪋',
      lHar: '⥢',
      lacute: 'ĺ',
      laemptyv: '⦴',
      lagran: 'ℒ',
      lambda: 'λ',
      lang: '⟨',
      langd: '⦑',
      langle: '⟨',
      lap: '⪅',
      laqu: '«',
      laquo: '«',
      larr: '←',
      larrb: '⇤',
      larrbfs: '⤟',
      larrfs: '⤝',
      larrhk: '↩',
      larrlp: '↫',
      larrpl: '⤹',
      larrsim: '⥳',
      larrtl: '↢',
      lat: '⪫',
      latail: '⤙',
      late: '⪭',
      lates: '⪭︀',
      lbarr: '⤌',
      lbbrk: '❲',
      lbrace: '{',
      lbrack: '[',
      lbrke: '⦋',
      lbrksld: '⦏',
      lbrkslu: '⦍',
      lcaron: 'ľ',
      lcedil: 'ļ',
      lceil: '⌈',
      lcub: '{',
      lcy: 'л',
      ldca: '⤶',
      ldquo: '“',
      ldquor: '„',
      ldrdhar: '⥧',
      ldrushar: '⥋',
      ldsh: '↲',
      le: '≤',
      leftarrow: '←',
      leftarrowtail: '↢',
      leftharpoondown: '↽',
      leftharpoonup: '↼',
      leftleftarrows: '⇇',
      leftrightarrow: '↔',
      leftrightarrows: '⇆',
      leftrightharpoons: '⇋',
      leftrightsquigarrow: '↭',
      leftthreetimes: '⋋',
      leg: '⋚',
      leq: '≤',
      leqq: '≦',
      leqslant: '⩽',
      les: '⩽',
      lescc: '⪨',
      lesdot: '⩿',
      lesdoto: '⪁',
      lesdotor: '⪃',
      lesg: '⋚︀',
      lesges: '⪓',
      lessapprox: '⪅',
      lessdot: '⋖',
      lesseqgtr: '⋚',
      lesseqqgtr: '⪋',
      lessgtr: '≶',
      lesssim: '≲',
      lfisht: '⥼',
      lfloor: '⌊',
      lfr: '𝔩',
      lg: '≶',
      lgE: '⪑',
      lhard: '↽',
      lharu: '↼',
      lharul: '⥪',
      lhblk: '▄',
      ljcy: 'љ',
      ll: '≪',
      llarr: '⇇',
      llcorner: '⌞',
      llhard: '⥫',
      lltri: '◺',
      lmidot: 'ŀ',
      lmoust: '⎰',
      lmoustache: '⎰',
      lnE: '≨',
      lnap: '⪉',
      lnapprox: '⪉',
      lne: '⪇',
      lneq: '⪇',
      lneqq: '≨',
      lnsim: '⋦',
      loang: '⟬',
      loarr: '⇽',
      lobrk: '⟦',
      longleftarrow: '⟵',
      longleftrightarrow: '⟷',
      longmapsto: '⟼',
      longrightarrow: '⟶',
      looparrowleft: '↫',
      looparrowright: '↬',
      lopar: '⦅',
      lopf: '𝕝',
      loplus: '⨭',
      lotimes: '⨴',
      lowast: '∗',
      lowbar: '_',
      loz: '◊',
      lozenge: '◊',
      lozf: '⧫',
      lpar: '(',
      lparlt: '⦓',
      lrarr: '⇆',
      lrcorner: '⌟',
      lrhar: '⇋',
      lrhard: '⥭',
      lrm: '‎',
      lrtri: '⊿',
      lsaquo: '‹',
      lscr: '𝓁',
      lsh: '↰',
      lsim: '≲',
      lsime: '⪍',
      lsimg: '⪏',
      lsqb: '[',
      lsquo: '‘',
      lsquor: '‚',
      lstrok: 'ł',
      l: '<',
      lt: '<',
      ltcc: '⪦',
      ltcir: '⩹',
      ltdot: '⋖',
      lthree: '⋋',
      ltimes: '⋉',
      ltlarr: '⥶',
      ltquest: '⩻',
      ltrPar: '⦖',
      ltri: '◃',
      ltrie: '⊴',
      ltrif: '◂',
      lurdshar: '⥊',
      luruhar: '⥦',
      lvertneqq: '≨︀',
      lvnE: '≨︀',
      mDDot: '∺',
      mac: '¯',
      macr: '¯',
      male: '♂',
      malt: '✠',
      maltese: '✠',
      map: '↦',
      mapsto: '↦',
      mapstodown: '↧',
      mapstoleft: '↤',
      mapstoup: '↥',
      marker: '▮',
      mcomma: '⨩',
      mcy: 'м',
      mdash: '—',
      measuredangle: '∡',
      mfr: '𝔪',
      mho: '℧',
      micr: 'µ',
      micro: 'µ',
      mid: '∣',
      midast: '*',
      midcir: '⫰',
      middo: '·',
      middot: '·',
      minus: '−',
      minusb: '⊟',
      minusd: '∸',
      minusdu: '⨪',
      mlcp: '⫛',
      mldr: '…',
      mnplus: '∓',
      models: '⊧',
      mopf: '𝕞',
      mp: '∓',
      mscr: '𝓂',
      mstpos: '∾',
      mu: 'μ',
      multimap: '⊸',
      mumap: '⊸',
      nGg: '⋙̸',
      nGt: '≫⃒',
      nGtv: '≫̸',
      nLeftarrow: '⇍',
      nLeftrightarrow: '⇎',
      nLl: '⋘̸',
      nLt: '≪⃒',
      nLtv: '≪̸',
      nRightarrow: '⇏',
      nVDash: '⊯',
      nVdash: '⊮',
      nabla: '∇',
      nacute: 'ń',
      nang: '∠⃒',
      nap: '≉',
      napE: '⩰̸',
      napid: '≋̸',
      napos: 'ŉ',
      napprox: '≉',
      natur: '♮',
      natural: '♮',
      naturals: 'ℕ',
      nbs: ' ',
      nbsp: ' ',
      nbump: '≎̸',
      nbumpe: '≏̸',
      ncap: '⩃',
      ncaron: 'ň',
      ncedil: 'ņ',
      ncong: '≇',
      ncongdot: '⩭̸',
      ncup: '⩂',
      ncy: 'н',
      ndash: '–',
      ne: '≠',
      neArr: '⇗',
      nearhk: '⤤',
      nearr: '↗',
      nearrow: '↗',
      nedot: '≐̸',
      nequiv: '≢',
      nesear: '⤨',
      nesim: '≂̸',
      nexist: '∄',
      nexists: '∄',
      nfr: '𝔫',
      ngE: '≧̸',
      nge: '≱',
      ngeq: '≱',
      ngeqq: '≧̸',
      ngeqslant: '⩾̸',
      nges: '⩾̸',
      ngsim: '≵',
      ngt: '≯',
      ngtr: '≯',
      nhArr: '⇎',
      nharr: '↮',
      nhpar: '⫲',
      ni: '∋',
      nis: '⋼',
      nisd: '⋺',
      niv: '∋',
      njcy: 'њ',
      nlArr: '⇍',
      nlE: '≦̸',
      nlarr: '↚',
      nldr: '‥',
      nle: '≰',
      nleftarrow: '↚',
      nleftrightarrow: '↮',
      nleq: '≰',
      nleqq: '≦̸',
      nleqslant: '⩽̸',
      nles: '⩽̸',
      nless: '≮',
      nlsim: '≴',
      nlt: '≮',
      nltri: '⋪',
      nltrie: '⋬',
      nmid: '∤',
      nopf: '𝕟',
      no: '¬',
      not: '¬',
      notin: '∉',
      notinE: '⋹̸',
      notindot: '⋵̸',
      notinva: '∉',
      notinvb: '⋷',
      notinvc: '⋶',
      notni: '∌',
      notniva: '∌',
      notnivb: '⋾',
      notnivc: '⋽',
      npar: '∦',
      nparallel: '∦',
      nparsl: '⫽⃥',
      npart: '∂̸',
      npolint: '⨔',
      npr: '⊀',
      nprcue: '⋠',
      npre: '⪯̸',
      nprec: '⊀',
      npreceq: '⪯̸',
      nrArr: '⇏',
      nrarr: '↛',
      nrarrc: '⤳̸',
      nrarrw: '↝̸',
      nrightarrow: '↛',
      nrtri: '⋫',
      nrtrie: '⋭',
      nsc: '⊁',
      nsccue: '⋡',
      nsce: '⪰̸',
      nscr: '𝓃',
      nshortmid: '∤',
      nshortparallel: '∦',
      nsim: '≁',
      nsime: '≄',
      nsimeq: '≄',
      nsmid: '∤',
      nspar: '∦',
      nsqsube: '⋢',
      nsqsupe: '⋣',
      nsub: '⊄',
      nsubE: '⫅̸',
      nsube: '⊈',
      nsubset: '⊂⃒',
      nsubseteq: '⊈',
      nsubseteqq: '⫅̸',
      nsucc: '⊁',
      nsucceq: '⪰̸',
      nsup: '⊅',
      nsupE: '⫆̸',
      nsupe: '⊉',
      nsupset: '⊃⃒',
      nsupseteq: '⊉',
      nsupseteqq: '⫆̸',
      ntgl: '≹',
      ntild: 'ñ',
      ntilde: 'ñ',
      ntlg: '≸',
      ntriangleleft: '⋪',
      ntrianglelefteq: '⋬',
      ntriangleright: '⋫',
      ntrianglerighteq: '⋭',
      nu: 'ν',
      num: '#',
      numero: '№',
      numsp: ' ',
      nvDash: '⊭',
      nvHarr: '⤄',
      nvap: '≍⃒',
      nvdash: '⊬',
      nvge: '≥⃒',
      nvgt: '>⃒',
      nvinfin: '⧞',
      nvlArr: '⤂',
      nvle: '≤⃒',
      nvlt: '<⃒',
      nvltrie: '⊴⃒',
      nvrArr: '⤃',
      nvrtrie: '⊵⃒',
      nvsim: '∼⃒',
      nwArr: '⇖',
      nwarhk: '⤣',
      nwarr: '↖',
      nwarrow: '↖',
      nwnear: '⤧',
      oS: 'Ⓢ',
      oacut: 'ó',
      oacute: 'ó',
      oast: '⊛',
      ocir: 'ô',
      ocirc: 'ô',
      ocy: 'о',
      odash: '⊝',
      odblac: 'ő',
      odiv: '⨸',
      odot: '⊙',
      odsold: '⦼',
      oelig: 'œ',
      ofcir: '⦿',
      ofr: '𝔬',
      ogon: '˛',
      ograv: 'ò',
      ograve: 'ò',
      ogt: '⧁',
      ohbar: '⦵',
      ohm: 'Ω',
      oint: '∮',
      olarr: '↺',
      olcir: '⦾',
      olcross: '⦻',
      oline: '‾',
      olt: '⧀',
      omacr: 'ō',
      omega: 'ω',
      omicron: 'ο',
      omid: '⦶',
      ominus: '⊖',
      oopf: '𝕠',
      opar: '⦷',
      operp: '⦹',
      oplus: '⊕',
      or: '∨',
      orarr: '↻',
      ord: 'º',
      order: 'ℴ',
      orderof: 'ℴ',
      ordf: 'ª',
      ordm: 'º',
      origof: '⊶',
      oror: '⩖',
      orslope: '⩗',
      orv: '⩛',
      oscr: 'ℴ',
      oslas: 'ø',
      oslash: 'ø',
      osol: '⊘',
      otild: 'õ',
      otilde: 'õ',
      otimes: '⊗',
      otimesas: '⨶',
      oum: 'ö',
      ouml: 'ö',
      ovbar: '⌽',
      par: '¶',
      para: '¶',
      parallel: '∥',
      parsim: '⫳',
      parsl: '⫽',
      part: '∂',
      pcy: 'п',
      percnt: '%',
      period: '.',
      permil: '‰',
      perp: '⊥',
      pertenk: '‱',
      pfr: '𝔭',
      phi: 'φ',
      phiv: 'ϕ',
      phmmat: 'ℳ',
      phone: '☎',
      pi: 'π',
      pitchfork: '⋔',
      piv: 'ϖ',
      planck: 'ℏ',
      planckh: 'ℎ',
      plankv: 'ℏ',
      plus: '+',
      plusacir: '⨣',
      plusb: '⊞',
      pluscir: '⨢',
      plusdo: '∔',
      plusdu: '⨥',
      pluse: '⩲',
      plusm: '±',
      plusmn: '±',
      plussim: '⨦',
      plustwo: '⨧',
      pm: '±',
      pointint: '⨕',
      popf: '𝕡',
      poun: '£',
      pound: '£',
      pr: '≺',
      prE: '⪳',
      prap: '⪷',
      prcue: '≼',
      pre: '⪯',
      prec: '≺',
      precapprox: '⪷',
      preccurlyeq: '≼',
      preceq: '⪯',
      precnapprox: '⪹',
      precneqq: '⪵',
      precnsim: '⋨',
      precsim: '≾',
      prime: '′',
      primes: 'ℙ',
      prnE: '⪵',
      prnap: '⪹',
      prnsim: '⋨',
      prod: '∏',
      profalar: '⌮',
      profline: '⌒',
      profsurf: '⌓',
      prop: '∝',
      propto: '∝',
      prsim: '≾',
      prurel: '⊰',
      pscr: '𝓅',
      psi: 'ψ',
      puncsp: ' ',
      qfr: '𝔮',
      qint: '⨌',
      qopf: '𝕢',
      qprime: '⁗',
      qscr: '𝓆',
      quaternions: 'ℍ',
      quatint: '⨖',
      quest: '?',
      questeq: '≟',
      quo: '"',
      quot: '"',
      rAarr: '⇛',
      rArr: '⇒',
      rAtail: '⤜',
      rBarr: '⤏',
      rHar: '⥤',
      race: '∽̱',
      racute: 'ŕ',
      radic: '√',
      raemptyv: '⦳',
      rang: '⟩',
      rangd: '⦒',
      range: '⦥',
      rangle: '⟩',
      raqu: '»',
      raquo: '»',
      rarr: '→',
      rarrap: '⥵',
      rarrb: '⇥',
      rarrbfs: '⤠',
      rarrc: '⤳',
      rarrfs: '⤞',
      rarrhk: '↪',
      rarrlp: '↬',
      rarrpl: '⥅',
      rarrsim: '⥴',
      rarrtl: '↣',
      rarrw: '↝',
      ratail: '⤚',
      ratio: '∶',
      rationals: 'ℚ',
      rbarr: '⤍',
      rbbrk: '❳',
      rbrace: '}',
      rbrack: ']',
      rbrke: '⦌',
      rbrksld: '⦎',
      rbrkslu: '⦐',
      rcaron: 'ř',
      rcedil: 'ŗ',
      rceil: '⌉',
      rcub: '}',
      rcy: 'р',
      rdca: '⤷',
      rdldhar: '⥩',
      rdquo: '”',
      rdquor: '”',
      rdsh: '↳',
      real: 'ℜ',
      realine: 'ℛ',
      realpart: 'ℜ',
      reals: 'ℝ',
      rect: '▭',
      re: '®',
      reg: '®',
      rfisht: '⥽',
      rfloor: '⌋',
      rfr: '𝔯',
      rhard: '⇁',
      rharu: '⇀',
      rharul: '⥬',
      rho: 'ρ',
      rhov: 'ϱ',
      rightarrow: '→',
      rightarrowtail: '↣',
      rightharpoondown: '⇁',
      rightharpoonup: '⇀',
      rightleftarrows: '⇄',
      rightleftharpoons: '⇌',
      rightrightarrows: '⇉',
      rightsquigarrow: '↝',
      rightthreetimes: '⋌',
      ring: '˚',
      risingdotseq: '≓',
      rlarr: '⇄',
      rlhar: '⇌',
      rlm: '‏',
      rmoust: '⎱',
      rmoustache: '⎱',
      rnmid: '⫮',
      roang: '⟭',
      roarr: '⇾',
      robrk: '⟧',
      ropar: '⦆',
      ropf: '𝕣',
      roplus: '⨮',
      rotimes: '⨵',
      rpar: ')',
      rpargt: '⦔',
      rppolint: '⨒',
      rrarr: '⇉',
      rsaquo: '›',
      rscr: '𝓇',
      rsh: '↱',
      rsqb: ']',
      rsquo: '’',
      rsquor: '’',
      rthree: '⋌',
      rtimes: '⋊',
      rtri: '▹',
      rtrie: '⊵',
      rtrif: '▸',
      rtriltri: '⧎',
      ruluhar: '⥨',
      rx: '℞',
      sacute: 'ś',
      sbquo: '‚',
      sc: '≻',
      scE: '⪴',
      scap: '⪸',
      scaron: 'š',
      sccue: '≽',
      sce: '⪰',
      scedil: 'ş',
      scirc: 'ŝ',
      scnE: '⪶',
      scnap: '⪺',
      scnsim: '⋩',
      scpolint: '⨓',
      scsim: '≿',
      scy: 'с',
      sdot: '⋅',
      sdotb: '⊡',
      sdote: '⩦',
      seArr: '⇘',
      searhk: '⤥',
      searr: '↘',
      searrow: '↘',
      sec: '§',
      sect: '§',
      semi: ';',
      seswar: '⤩',
      setminus: '∖',
      setmn: '∖',
      sext: '✶',
      sfr: '𝔰',
      sfrown: '⌢',
      sharp: '♯',
      shchcy: 'щ',
      shcy: 'ш',
      shortmid: '∣',
      shortparallel: '∥',
      sh: '­',
      shy: '­',
      sigma: 'σ',
      sigmaf: 'ς',
      sigmav: 'ς',
      sim: '∼',
      simdot: '⩪',
      sime: '≃',
      simeq: '≃',
      simg: '⪞',
      simgE: '⪠',
      siml: '⪝',
      simlE: '⪟',
      simne: '≆',
      simplus: '⨤',
      simrarr: '⥲',
      slarr: '←',
      smallsetminus: '∖',
      smashp: '⨳',
      smeparsl: '⧤',
      smid: '∣',
      smile: '⌣',
      smt: '⪪',
      smte: '⪬',
      smtes: '⪬︀',
      softcy: 'ь',
      sol: '/',
      solb: '⧄',
      solbar: '⌿',
      sopf: '𝕤',
      spades: '♠',
      spadesuit: '♠',
      spar: '∥',
      sqcap: '⊓',
      sqcaps: '⊓︀',
      sqcup: '⊔',
      sqcups: '⊔︀',
      sqsub: '⊏',
      sqsube: '⊑',
      sqsubset: '⊏',
      sqsubseteq: '⊑',
      sqsup: '⊐',
      sqsupe: '⊒',
      sqsupset: '⊐',
      sqsupseteq: '⊒',
      squ: '□',
      square: '□',
      squarf: '▪',
      squf: '▪',
      srarr: '→',
      sscr: '𝓈',
      ssetmn: '∖',
      ssmile: '⌣',
      sstarf: '⋆',
      star: '☆',
      starf: '★',
      straightepsilon: 'ϵ',
      straightphi: 'ϕ',
      strns: '¯',
      sub: '⊂',
      subE: '⫅',
      subdot: '⪽',
      sube: '⊆',
      subedot: '⫃',
      submult: '⫁',
      subnE: '⫋',
      subne: '⊊',
      subplus: '⪿',
      subrarr: '⥹',
      subset: '⊂',
      subseteq: '⊆',
      subseteqq: '⫅',
      subsetneq: '⊊',
      subsetneqq: '⫋',
      subsim: '⫇',
      subsub: '⫕',
      subsup: '⫓',
      succ: '≻',
      succapprox: '⪸',
      succcurlyeq: '≽',
      succeq: '⪰',
      succnapprox: '⪺',
      succneqq: '⪶',
      succnsim: '⋩',
      succsim: '≿',
      sum: '∑',
      sung: '♪',
      sup: '⊃',
      sup1: '¹',
      sup2: '²',
      sup3: '³',
      supE: '⫆',
      supdot: '⪾',
      supdsub: '⫘',
      supe: '⊇',
      supedot: '⫄',
      suphsol: '⟉',
      suphsub: '⫗',
      suplarr: '⥻',
      supmult: '⫂',
      supnE: '⫌',
      supne: '⊋',
      supplus: '⫀',
      supset: '⊃',
      supseteq: '⊇',
      supseteqq: '⫆',
      supsetneq: '⊋',
      supsetneqq: '⫌',
      supsim: '⫈',
      supsub: '⫔',
      supsup: '⫖',
      swArr: '⇙',
      swarhk: '⤦',
      swarr: '↙',
      swarrow: '↙',
      swnwar: '⤪',
      szli: 'ß',
      szlig: 'ß',
      target: '⌖',
      tau: 'τ',
      tbrk: '⎴',
      tcaron: 'ť',
      tcedil: 'ţ',
      tcy: 'т',
      tdot: '⃛',
      telrec: '⌕',
      tfr: '𝔱',
      there4: '∴',
      therefore: '∴',
      theta: 'θ',
      thetasym: 'ϑ',
      thetav: 'ϑ',
      thickapprox: '≈',
      thicksim: '∼',
      thinsp: ' ',
      thkap: '≈',
      thksim: '∼',
      thor: 'þ',
      thorn: 'þ',
      tilde: '˜',
      time: '×',
      times: '×',
      timesb: '⊠',
      timesbar: '⨱',
      timesd: '⨰',
      tint: '∭',
      toea: '⤨',
      top: '⊤',
      topbot: '⌶',
      topcir: '⫱',
      topf: '𝕥',
      topfork: '⫚',
      tosa: '⤩',
      tprime: '‴',
      trade: '™',
      triangle: '▵',
      triangledown: '▿',
      triangleleft: '◃',
      trianglelefteq: '⊴',
      triangleq: '≜',
      triangleright: '▹',
      trianglerighteq: '⊵',
      tridot: '◬',
      trie: '≜',
      triminus: '⨺',
      triplus: '⨹',
      trisb: '⧍',
      tritime: '⨻',
      trpezium: '⏢',
      tscr: '𝓉',
      tscy: 'ц',
      tshcy: 'ћ',
      tstrok: 'ŧ',
      twixt: '≬',
      twoheadleftarrow: '↞',
      twoheadrightarrow: '↠',
      uArr: '⇑',
      uHar: '⥣',
      uacut: 'ú',
      uacute: 'ú',
      uarr: '↑',
      ubrcy: 'ў',
      ubreve: 'ŭ',
      ucir: 'û',
      ucirc: 'û',
      ucy: 'у',
      udarr: '⇅',
      udblac: 'ű',
      udhar: '⥮',
      ufisht: '⥾',
      ufr: '𝔲',
      ugrav: 'ù',
      ugrave: 'ù',
      uharl: '↿',
      uharr: '↾',
      uhblk: '▀',
      ulcorn: '⌜',
      ulcorner: '⌜',
      ulcrop: '⌏',
      ultri: '◸',
      umacr: 'ū',
      um: '¨',
      uml: '¨',
      uogon: 'ų',
      uopf: '𝕦',
      uparrow: '↑',
      updownarrow: '↕',
      upharpoonleft: '↿',
      upharpoonright: '↾',
      uplus: '⊎',
      upsi: 'υ',
      upsih: 'ϒ',
      upsilon: 'υ',
      upuparrows: '⇈',
      urcorn: '⌝',
      urcorner: '⌝',
      urcrop: '⌎',
      uring: 'ů',
      urtri: '◹',
      uscr: '𝓊',
      utdot: '⋰',
      utilde: 'ũ',
      utri: '▵',
      utrif: '▴',
      uuarr: '⇈',
      uum: 'ü',
      uuml: 'ü',
      uwangle: '⦧',
      vArr: '⇕',
      vBar: '⫨',
      vBarv: '⫩',
      vDash: '⊨',
      vangrt: '⦜',
      varepsilon: 'ϵ',
      varkappa: 'ϰ',
      varnothing: '∅',
      varphi: 'ϕ',
      varpi: 'ϖ',
      varpropto: '∝',
      varr: '↕',
      varrho: 'ϱ',
      varsigma: 'ς',
      varsubsetneq: '⊊︀',
      varsubsetneqq: '⫋︀',
      varsupsetneq: '⊋︀',
      varsupsetneqq: '⫌︀',
      vartheta: 'ϑ',
      vartriangleleft: '⊲',
      vartriangleright: '⊳',
      vcy: 'в',
      vdash: '⊢',
      vee: '∨',
      veebar: '⊻',
      veeeq: '≚',
      vellip: '⋮',
      verbar: '|',
      vert: '|',
      vfr: '𝔳',
      vltri: '⊲',
      vnsub: '⊂⃒',
      vnsup: '⊃⃒',
      vopf: '𝕧',
      vprop: '∝',
      vrtri: '⊳',
      vscr: '𝓋',
      vsubnE: '⫋︀',
      vsubne: '⊊︀',
      vsupnE: '⫌︀',
      vsupne: '⊋︀',
      vzigzag: '⦚',
      wcirc: 'ŵ',
      wedbar: '⩟',
      wedge: '∧',
      wedgeq: '≙',
      weierp: '℘',
      wfr: '𝔴',
      wopf: '𝕨',
      wp: '℘',
      wr: '≀',
      wreath: '≀',
      wscr: '𝓌',
      xcap: '⋂',
      xcirc: '◯',
      xcup: '⋃',
      xdtri: '▽',
      xfr: '𝔵',
      xhArr: '⟺',
      xharr: '⟷',
      xi: 'ξ',
      xlArr: '⟸',
      xlarr: '⟵',
      xmap: '⟼',
      xnis: '⋻',
      xodot: '⨀',
      xopf: '𝕩',
      xoplus: '⨁',
      xotime: '⨂',
      xrArr: '⟹',
      xrarr: '⟶',
      xscr: '𝓍',
      xsqcup: '⨆',
      xuplus: '⨄',
      xutri: '△',
      xvee: '⋁',
      xwedge: '⋀',
      yacut: 'ý',
      yacute: 'ý',
      yacy: 'я',
      ycirc: 'ŷ',
      ycy: 'ы',
      ye: '¥',
      yen: '¥',
      yfr: '𝔶',
      yicy: 'ї',
      yopf: '𝕪',
      yscr: '𝓎',
      yucy: 'ю',
      yum: 'ÿ',
      yuml: 'ÿ',
      zacute: 'ź',
      zcaron: 'ž',
      zcy: 'з',
      zdot: 'ż',
      zeetrf: 'ℨ',
      zeta: 'ζ',
      zfr: '𝔷',
      zhcy: 'ж',
      zigrarr: '⇝',
      zopf: '𝕫',
      zscr: '𝓏',
      zwj: '‍',
      zwnj: '‌',
      default: d
    }),
    m = {
      AElig: 'Æ',
      AMP: '&',
      Aacute: 'Á',
      Acirc: 'Â',
      Agrave: 'À',
      Aring: 'Å',
      Atilde: 'Ã',
      Auml: 'Ä',
      COPY: '©',
      Ccedil: 'Ç',
      ETH: 'Ð',
      Eacute: 'É',
      Ecirc: 'Ê',
      Egrave: 'È',
      Euml: 'Ë',
      GT: '>',
      Iacute: 'Í',
      Icirc: 'Î',
      Igrave: 'Ì',
      Iuml: 'Ï',
      LT: '<',
      Ntilde: 'Ñ',
      Oacute: 'Ó',
      Ocirc: 'Ô',
      Ograve: 'Ò',
      Oslash: 'Ø',
      Otilde: 'Õ',
      Ouml: 'Ö',
      QUOT: '"',
      REG: '®',
      THORN: 'Þ',
      Uacute: 'Ú',
      Ucirc: 'Û',
      Ugrave: 'Ù',
      Uuml: 'Ü',
      Yacute: 'Ý',
      aacute: 'á',
      acirc: 'â',
      acute: '´',
      aelig: 'æ',
      agrave: 'à',
      amp: '&',
      aring: 'å',
      atilde: 'ã',
      auml: 'ä',
      brvbar: '¦',
      ccedil: 'ç',
      cedil: '¸',
      cent: '¢',
      copy: '©',
      curren: '¤',
      deg: '°',
      divide: '÷',
      eacute: 'é',
      ecirc: 'ê',
      egrave: 'è',
      eth: 'ð',
      euml: 'ë',
      frac12: '½',
      frac14: '¼',
      frac34: '¾',
      gt: '>',
      iacute: 'í',
      icirc: 'î',
      iexcl: '¡',
      igrave: 'ì',
      iquest: '¿',
      iuml: 'ï',
      laquo: '«',
      lt: '<',
      macr: '¯',
      micro: 'µ',
      middot: '·',
      nbsp: ' ',
      not: '¬',
      ntilde: 'ñ',
      oacute: 'ó',
      ocirc: 'ô',
      ograve: 'ò',
      ordf: 'ª',
      ordm: 'º',
      oslash: 'ø',
      otilde: 'õ',
      ouml: 'ö',
      para: '¶',
      plusmn: '±',
      pound: '£',
      quot: '"',
      raquo: '»',
      reg: '®',
      sect: '§',
      shy: '­',
      sup1: '¹',
      sup2: '²',
      sup3: '³',
      szlig: 'ß',
      thorn: 'þ',
      times: '×',
      uacute: 'ú',
      ucirc: 'û',
      ugrave: 'ù',
      uml: '¨',
      uuml: 'ü',
      yacute: 'ý',
      yen: '¥',
      yuml: 'ÿ'
    },
    b = Object.freeze({
      AElig: 'Æ',
      AMP: '&',
      Aacute: 'Á',
      Acirc: 'Â',
      Agrave: 'À',
      Aring: 'Å',
      Atilde: 'Ã',
      Auml: 'Ä',
      COPY: '©',
      Ccedil: 'Ç',
      ETH: 'Ð',
      Eacute: 'É',
      Ecirc: 'Ê',
      Egrave: 'È',
      Euml: 'Ë',
      GT: '>',
      Iacute: 'Í',
      Icirc: 'Î',
      Igrave: 'Ì',
      Iuml: 'Ï',
      LT: '<',
      Ntilde: 'Ñ',
      Oacute: 'Ó',
      Ocirc: 'Ô',
      Ograve: 'Ò',
      Oslash: 'Ø',
      Otilde: 'Õ',
      Ouml: 'Ö',
      QUOT: '"',
      REG: '®',
      THORN: 'Þ',
      Uacute: 'Ú',
      Ucirc: 'Û',
      Ugrave: 'Ù',
      Uuml: 'Ü',
      Yacute: 'Ý',
      aacute: 'á',
      acirc: 'â',
      acute: '´',
      aelig: 'æ',
      agrave: 'à',
      amp: '&',
      aring: 'å',
      atilde: 'ã',
      auml: 'ä',
      brvbar: '¦',
      ccedil: 'ç',
      cedil: '¸',
      cent: '¢',
      copy: '©',
      curren: '¤',
      deg: '°',
      divide: '÷',
      eacute: 'é',
      ecirc: 'ê',
      egrave: 'è',
      eth: 'ð',
      euml: 'ë',
      frac12: '½',
      frac14: '¼',
      frac34: '¾',
      gt: '>',
      iacute: 'í',
      icirc: 'î',
      iexcl: '¡',
      igrave: 'ì',
      iquest: '¿',
      iuml: 'ï',
      laquo: '«',
      lt: '<',
      macr: '¯',
      micro: 'µ',
      middot: '·',
      nbsp: ' ',
      not: '¬',
      ntilde: 'ñ',
      oacute: 'ó',
      ocirc: 'ô',
      ograve: 'ò',
      ordf: 'ª',
      ordm: 'º',
      oslash: 'ø',
      otilde: 'õ',
      ouml: 'ö',
      para: '¶',
      plusmn: '±',
      pound: '£',
      quot: '"',
      raquo: '»',
      reg: '®',
      sect: '§',
      shy: '­',
      sup1: '¹',
      sup2: '²',
      sup3: '³',
      szlig: 'ß',
      thorn: 'þ',
      times: '×',
      uacute: 'ú',
      ucirc: 'û',
      ugrave: 'ù',
      uml: '¨',
      uuml: 'ü',
      yacute: 'ý',
      yen: '¥',
      yuml: 'ÿ',
      default: m
    }),
    v = {
      0: '�',
      128: '€',
      130: '‚',
      131: 'ƒ',
      132: '„',
      133: '…',
      134: '†',
      135: '‡',
      136: 'ˆ',
      137: '‰',
      138: 'Š',
      139: '‹',
      140: 'Œ',
      142: 'Ž',
      145: '‘',
      146: '’',
      147: '“',
      148: '”',
      149: '•',
      150: '–',
      151: '—',
      152: '˜',
      153: '™',
      154: 'š',
      155: '›',
      156: 'œ',
      158: 'ž',
      159: 'Ÿ'
    },
    E = Object.freeze({ default: v }),
    w = function(r) {
      var e = 'string' == typeof r ? r.charCodeAt(0) : r
      return e >= 48 && e <= 57
    }
  var y = function(r) {
    var e = 'string' == typeof r ? r.charCodeAt(0) : r
    return (e >= 97 && e <= 102) || (e >= 65 && e <= 70) || (e >= 48 && e <= 57)
  }
  var A = function(r) {
    var e = 'string' == typeof r ? r.charCodeAt(0) : r
    return (e >= 97 && e <= 122) || (e >= 65 && e <= 90)
  }
  var C = function(r) {
    return A(r) || w(r)
  }
  var q = (g && d) || g,
    F = (b && m) || b,
    k = (E && v) || E,
    x = function(r, e) {
      var t,
        n,
        u = {}
      e || (e = {})
      for (n in Z) (t = e[n]), (u[n] = null === t || void 0 === t ? Z[n] : t)
      ;(u.position.indent || u.position.start) &&
        ((u.indent = u.position.indent || []), (u.position = u.position.start))
      return (function(r, e) {
        var t,
          n,
          u,
          o,
          a,
          i,
          c,
          s,
          l,
          f,
          p,
          D,
          h,
          d,
          g,
          m,
          b,
          v,
          E = e.additional,
          w = e.nonTerminated,
          y = e.text,
          A = e.reference,
          x = e.warning,
          Z = e.textContext,
          ur = e.referenceContext,
          or = e.warningContext,
          ar = e.position,
          sr = e.indent || [],
          lr = r.length,
          fr = 0,
          pr = -1,
          Dr = ar.column || 1,
          hr = ar.line || 1,
          dr = H,
          gr = []
        ;(g = br()),
          (c = x
            ? function(r, e) {
                var t = br()
                ;(t.column += e), (t.offset += e), x.call(or, ir[r], t, r)
              }
            : B),
          fr--,
          lr++
        for (; ++fr < lr; )
          if ((o === U && (Dr = sr[pr] || 1), (o = vr(fr)) !== R))
            o === U && (hr++, pr++, (Dr = 0)), o ? ((dr += o), Dr++) : Er()
          else {
            if (
              (i = vr(fr + 1)) === M ||
              i === U ||
              i === N ||
              i === j ||
              i === z ||
              i === R ||
              i === H ||
              (E && i === E)
            ) {
              ;(dr += o), Dr++
              continue
            }
            for (
              p = D = fr + 1,
                v = D,
                i !== O
                  ? (h = _)
                  : ((v = ++p), (i = vr(v)) === I || i === V ? ((h = $), (v = ++p)) : (h = Y)),
                t = H,
                f = H,
                u = H,
                d = Q[h],
                v--;
              ++v < lr && ((i = vr(v)), d(i));

            )
              (u += i), h === _ && L.call(F, u) && ((t = u), (f = F[u]))
            ;(n = vr(v) === P) && (v++, h === _ && L.call(q, u) && ((t = u), (f = q[u]))),
              (b = 1 + v - D),
              (n || w) &&
                (u
                  ? h === _
                    ? (n && !f
                        ? c(er, 1)
                        : (t !== u && ((v = p + t.length), (b = 1 + v - p), (n = !1)),
                          n ||
                            ((s = t ? W : X),
                            e.attribute
                              ? (i = vr(v)) === G
                                ? (c(s, b), (f = null))
                                : C(i)
                                  ? (f = null)
                                  : c(s, b)
                              : c(s, b))),
                      (a = f))
                    : (n || c(K, b),
                      (a = parseInt(u, J[h])),
                      ((mr = a) >= 55296 && mr <= 57343) || mr > 1114111
                        ? (c(nr, b), (a = T))
                        : a in k
                          ? (c(tr, b), (a = k[a]))
                          : ((l = H),
                            cr(a) && c(tr, b),
                            a > 65535 &&
                              ((l += S(((a -= 65536) >>> 10) | 55296)), (a = 56320 | (1023 & a))),
                            (a = l + S(a))))
                  : h !== _ && c(rr, b)),
              a
                ? (Er(),
                  (g = br()),
                  (fr = v - 1),
                  (Dr += v - D + 1),
                  gr.push(a),
                  (m = br()).offset++,
                  A && A.call(ur, a, { start: g, end: m }, r.slice(D - 1, v)),
                  (g = m))
                : ((u = r.slice(D - 1, v)), (dr += u), (Dr += u.length), (fr = v - 1))
          }
        var mr
        return gr.join(H)
        function br() {
          return { line: hr, column: Dr, offset: fr + (ar.offset || 0) }
        }
        function vr(e) {
          return r.charAt(e)
        }
        function Er() {
          dr && (gr.push(dr), y && y.call(Z, dr, { start: g, end: br() }), (dr = H))
        }
      })(r, u)
    },
    L = {}.hasOwnProperty,
    S = String.fromCharCode,
    B = Function.prototype,
    T = '�',
    N = '\f',
    R = '&',
    O = '#',
    P = ';',
    U = '\n',
    I = 'x',
    V = 'X',
    j = ' ',
    z = '<',
    G = '=',
    H = '',
    M = '\t',
    Z = {
      warning: null,
      reference: null,
      text: null,
      warningContext: null,
      referenceContext: null,
      textContext: null,
      position: {},
      additional: null,
      attribute: !1,
      nonTerminated: !0
    },
    _ = 'named',
    $ = 'hexadecimal',
    Y = 'decimal',
    J = {}
  ;(J[$] = 16), (J[Y] = 10)
  var Q = {}
  ;(Q[_] = C), (Q[Y] = w), (Q[$] = y)
  var W = 1,
    K = 2,
    X = 3,
    rr = 4,
    er = 5,
    tr = 6,
    nr = 7,
    ur = 'Numeric character references',
    or = ' must be terminated by a semicolon',
    ar = ' cannot be empty',
    ir = {}
  function cr(r) {
    return (
      (r >= 1 && r <= 8) ||
      11 === r ||
      (r >= 13 && r <= 31) ||
      (r >= 127 && r <= 159) ||
      (r >= 64976 && r <= 65007) ||
      65535 == (65535 & r) ||
      65534 == (65535 & r))
  }
  ;(ir[W] = 'Named character references' + or),
    (ir[K] = ur + or),
    (ir[X] = 'Named character references' + ar),
    (ir[rr] = ur + ar),
    (ir[er] = 'Named character references must be known'),
    (ir[tr] = ur + ' cannot be disallowed'),
    (ir[nr] = ur + ' cannot be outside the permissible Unicode range')
  var sr = function(r) {
    return (
      (u.raw = function(r, u, o) {
        return x(r, t(o, { position: e(u), warning: n }))
      }),
      u
    )
    function e(e) {
      for (var t = r.offset, n = e.line, u = []; ++n && n in t; ) u.push((t[n] || 0) + 1)
      return { start: e, indent: u }
    }
    function n(e, t, n) {
      3 !== n && r.file.message(e, t)
    }
    function u(t, u, o) {
      x(t, {
        position: e(u),
        warning: n,
        text: o,
        reference: o,
        textContext: r,
        referenceContext: r
      })
    }
  }
  var lr = function(r) {
      return function(e, t) {
        var n,
          u,
          o,
          a,
          i,
          c,
          s = this,
          l = s.offset,
          f = [],
          p = s[r + 'Methods'],
          D = s[r + 'Tokenizers'],
          h = t.line,
          d = t.column
        if (!e) return f
        ;(v.now = m), (v.file = s.file), g('')
        for (; e; ) {
          for (
            n = -1, u = p.length, i = !1;
            ++n < u &&
            ((a = p[n]),
            !(o = D[a]) ||
              (o.onlyAtStart && !s.atStart) ||
              (o.notInList && s.inList) ||
              (o.notInBlock && s.inBlock) ||
              (o.notInLink && s.inLink) ||
              ((c = e.length), o.apply(s, [v, e]), !(i = c !== e.length)));

          );
          i || s.file.fail(new Error('Infinite loop'), v.now())
        }
        return (s.eof = m()), f
        function g(r) {
          for (var e = -1, t = r.indexOf('\n'); -1 !== t; )
            h++, (e = t), (t = r.indexOf('\n', t + 1))
          ;-1 === e ? (d += r.length) : (d = r.length - e),
            h in l && (-1 !== e ? (d += l[h]) : d <= l[h] && (d = l[h] + 1))
        }
        function m() {
          var r = { line: h, column: d }
          return (r.offset = s.toOffset(r)), r
        }
        function b() {
          var r = m()
          return function(e, t) {
            var n = e.position,
              u = n ? n.start : r,
              o = [],
              a = n && n.end.line,
              i = r.line
            if (
              ((e.position = new function(r) {
                ;(this.start = r), (this.end = m())
              }(u)),
              n && t && n.indent)
            ) {
              if (((o = n.indent), a < i)) {
                for (; ++a < i; ) o.push((l[a] || 0) + 1)
                o.push(r.column)
              }
              t = o.concat(t)
            }
            return (e.position.indent = t || []), e
          }
        }
        function v(r) {
          var t = (function() {
              var r = [],
                e = h + 1
              return function() {
                for (var t = h + 1; e < t; ) r.push((l[e] || 0) + 1), e++
                return r
              }
            })(),
            n = b(),
            u = m()
          return (
            (function(r) {
              e.substring(0, r.length) !== r &&
                s.file.fail(
                  new Error(
                    'Incorrectly eaten value: please report this warning on http://git.io/vg5Ft'
                  ),
                  m())
            })(r),
            (o.reset = a),
            (a.test = i),
            (o.test = i),
            (e = e.substring(r.length)),
            g(r),
            (t = t()),
            o
          )
          function o(r, e) {
            return n(
              (function(r, e) {
                var t = e ? e.children : f,
                  n = t[t.length - 1]
                n &&
                  r.type === n.type &&
                  r.type in fr &&
                  pr(n) &&
                  pr(r) &&
                  (r = fr[r.type].call(s, n, r))
                r !== n && t.push(r)
                s.atStart && 0 !== f.length && s.exitStart()
                return r
              })(n(r), e),
              t
            )
          }
          function a() {
            var t = o.apply(null, arguments)
            return (h = u.line), (d = u.column), (e = r + e), t
          }
          function i() {
            var t = n({})
            return (h = u.line), (d = u.column), (e = r + e), t.position
          }
        }
      }
    },
    fr = {
      text: function(r, e) {
        return (r.value += e.value), r
      },
      blockquote: function(r, e) {
        if (this.options.commonmark) return e
        return (r.children = r.children.concat(e.children)), r
      }
    }
  function pr(r) {
    var e, t
    return (
      'text' !== r.type ||
      !r.position ||
      ((e = r.position.start),
      (t = r.position.end),
      e.line !== t.line || t.column - e.column === r.value.length))
  }
  var Dr = mr,
    hr = ['\\', '`', '*', '{', '}', '[', ']', '(', ')', '#', '+', '-', '.', '!', '_', '>'],
    dr = hr.concat(['~', '|']),
    gr = dr.concat(['\n', '"', '$', '%', '&', "'", ',', '/', ':', ';', '<', '=', '?', '@', '^'])
  function mr(r) {
    var e = r || {}
    return e.commonmark ? gr : e.gfm ? dr : hr
  }
  ;(mr.default = hr), (mr.gfm = dr), (mr.commonmark = gr)
  var br = [
      'address',
      'article',
      'aside',
      'base',
      'basefont',
      'blockquote',
      'body',
      'caption',
      'center',
      'col',
      'colgroup',
      'dd',
      'details',
      'dialog',
      'dir',
      'div',
      'dl',
      'dt',
      'fieldset',
      'figcaption',
      'figure',
      'footer',
      'form',
      'frame',
      'frameset',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'head',
      'header',
      'hgroup',
      'hr',
      'html',
      'iframe',
      'legend',
      'li',
      'link',
      'main',
      'menu',
      'menuitem',
      'meta',
      'nav',
      'noframes',
      'ol',
      'optgroup',
      'option',
      'p',
      'param',
      'pre',
      'section',
      'source',
      'title',
      'summary',
      'table',
      'tbody',
      'td',
      'tfoot',
      'th',
      'thead',
      'title',
      'tr',
      'track',
      'ul'
    ],
    vr = Object.freeze({ default: br }),
    Er = {
      position: !0,
      gfm: !0,
      commonmark: !1,
      footnotes: !1,
      pedantic: !1,
      blocks: (vr && br) || vr
    },
    wr = function(e) {
      var n,
        u,
        o = this.options
      if (null == e) e = {}
      else {
        if ('object' !== r(e)) throw new Error('Invalid value `' + e + '` for setting `options`')
        e = t(e)
      }
      for (n in Er) {
        if (
          (null == (u = e[n]) && (u = o[n]),
          ('blocks' !== n && 'boolean' != typeof u) || ('blocks' === n && 'object' !== r(u))))
          throw new Error('Invalid value `' + u + '` for setting `options.' + n + '`')
        e[n] = u
      }
      return (this.options = e), (this.escape = Dr(e)), this
    }
  var yr = function(r, e, t, n) {
    'function' == typeof e && ((n = t), (t = e), (e = null))
    function u(r, o, a) {
      var i
      return (
        (o = o || (a ? 0 : null)),
        (e && r.type !== e) || (i = t(r, o, a || null)),
        r.children && !1 !== i
          ? (function(r, e) {
              var t,
                o = n ? -1 : 1,
                a = r.length,
                i = (n ? a : -1) + o
              for (; i > -1 && i < a; ) {
                if ((t = r[i]) && !1 === u(t, i, e)) return !1
                i += o
              }
              return !0
            })(r.children, r)
          : i
      )
    }
    u(r)
  }
  var Ar = function(r, e) {
    return yr(r, e ? Cr : qr), r
  }
  function Cr(r) {
    delete r.position
  }
  function qr(r) {
    r.position = void 0
  }
  var Fr = function() {
      var r,
        e = String(this.file),
        n = { line: 1, column: 1, offset: 0 },
        u = t(n)
      65279 === (e = e.replace(xr, kr)).charCodeAt(0) && ((e = e.slice(1)), u.column++, u.offset++)
      ;(r = {
        type: 'root',
        children: this.tokenizeBlock(e, u),
        position: { start: n, end: this.eof || t(n) }
      }),
        this.options.position || Ar(r, !0)
      return r
    },
    kr = '\n',
    xr = /\r\n|\r/g
  var Lr = function(r) {
      return Br.test('number' == typeof r ? Sr(r) : r.charAt(0))
    },
    Sr = String.fromCharCode,
    Br = /\s/
  var Tr = function(r, e, t) {
    var n,
      u,
      o,
      a,
      i = e.charAt(0)
    if ('\n' !== i) return
    if (t) return !0
    ;(a = 1), (n = e.length), (u = i), (o = '')
    for (; a < n && ((i = e.charAt(a)), Lr(i)); ) (o += i), '\n' === i && ((u += o), (o = '')), a++
    r(u)
  }
  var Nr,
    Rr = '',
    Or = function(r, e) {
      if ('string' != typeof r) throw new TypeError('expected a string')
      if (1 === e) return r
      if (2 === e) return r + r
      var t = r.length * e
      if (Nr !== r || void 0 === Nr) (Nr = r), (Rr = '')
      else if (Rr.length >= t) return Rr.substr(0, t)
      for (; t > Rr.length && e > 1; ) 1 & e && (Rr += r), (e >>= 1), (r += r)
      return (Rr = (Rr += r).substr(0, t))
    }
  var Pr = function(r) {
      var e = String(r),
        t = e.length
      for (; e.charAt(--t) === Ur; );
      return e.slice(0, t + 1)
    },
    Ur = '\n'
  var Ir = function(r, e, t) {
      var n,
        u,
        o,
        a = -1,
        i = e.length,
        c = '',
        s = '',
        l = '',
        f = ''
      for (; ++a < i; )
        if (((n = e.charAt(a)), o))
          if (((o = !1), (c += l), (s += f), (l = ''), (f = ''), n === Vr)) (l = n), (f = n)
          else
            for (c += n, s += n; ++a < i; ) {
              if (!(n = e.charAt(a)) || n === Vr) {
                ;(f = n), (l = n)
                break
              }
              ;(c += n), (s += n)
            }
        else if (
          n === zr &&
          e.charAt(a + 1) === n &&
          e.charAt(a + 2) === n &&
          e.charAt(a + 3) === n
        )
          (l += Gr), (a += 3), (o = !0)
        else if (n === jr) (l += n), (o = !0)
        else {
          for (u = ''; n === jr || n === zr; ) (u += n), (n = e.charAt(++a))
          if (n !== Vr) break
          ;(l += u + n), (f += n)
        }
      if (s) return !!t || r(c)({ type: 'code', lang: null, value: Pr(s) })
    },
    Vr = '\n',
    jr = '\t',
    zr = ' ',
    Gr = Or(zr, 4)
  var Hr = function(r, e, t) {
      var n,
        u,
        o,
        a,
        i,
        c,
        s,
        l,
        f,
        p,
        D,
        h = this.options,
        d = e.length + 1,
        g = 0,
        m = ''
      if (!h.gfm) return
      for (; g < d && ((o = e.charAt(g)) === _r || o === Zr); ) (m += o), g++
      if (((p = g), (o = e.charAt(g)) !== $r && o !== Yr)) return
      g++, (u = o), (n = 1), (m += o)
      for (; g < d && (o = e.charAt(g)) === u; ) (m += o), n++, g++
      if (n < Jr) return
      for (; g < d && ((o = e.charAt(g)) === _r || o === Zr); ) (m += o), g++
      ;(a = ''), (i = '')
      for (; g < d && (o = e.charAt(g)) !== Mr && o !== $r && o !== Yr; )
        o === _r || o === Zr ? (i += o) : ((a += i + o), (i = '')), g++
      if ((o = e.charAt(g)) && o !== Mr) return
      if (t) return !0
      ;((D = r.now()).column += m.length),
        (D.offset += m.length),
        (m += a),
        (a = this.decode.raw(this.unescape(a), D)),
        i && (m += i)
      ;(i = ''), (l = ''), (f = ''), (c = ''), (s = '')
      for (; g < d; )
        if (((o = e.charAt(g)), (c += l), (s += f), (l = ''), (f = ''), o === Mr)) {
          for (
            c ? ((l += o), (f += o)) : (m += o), i = '', g++;
            g < d && (o = e.charAt(g)) === _r;

          )
            (i += o), g++
          if (((l += i), (f += i.slice(p)), !(i.length >= Qr))) {
            for (i = ''; g < d && (o = e.charAt(g)) === u; ) (i += o), g++
            if (((l += i), (f += i), !(i.length < n))) {
              for (i = ''; g < d && ((o = e.charAt(g)) === _r || o === Zr); )
                (l += o), (f += o), g++
              if (!o || o === Mr) break
            }
          }
        } else (c += o), (f += o), g++
      return r((m += c + l))({ type: 'code', lang: a || null, value: Pr(s) })
    },
    Mr = '\n',
    Zr = '\t',
    _r = ' ',
    $r = '~',
    Yr = '`',
    Jr = 3,
    Qr = 4
  var Wr = o(function(r, e) {
      ;((e = r.exports = function(r) {
        return r.replace(/^\s*|\s*$/g, '')
      }).left = function(r) {
        return r.replace(/^\s*/, '')
      }),
        (e.right = function(r) {
          return r.replace(/\s*$/, '')
        })
    }),
    Kr = function(r, e, t, n) {
      var u,
        o,
        a,
        i,
        c,
        s,
        l = ['pedantic', 'commonmark'],
        f = l.length,
        p = r.length,
        D = -1
      for (; ++D < p; ) {
        for (u = r[D], o = u[1] || {}, a = u[0], i = -1, s = !1; ++i < f; )
          if (void 0 !== o[(c = l[i])] && o[c] !== t.options[c]) {
            s = !0
            break
          }
        if (!s && e[a].apply(t, n)) return !0
      }
      return !1
    }
  var Xr = function(r, e, t) {
      var n,
        u,
        o,
        a,
        i,
        c,
        s,
        l,
        f,
        p = this.offset,
        D = this.blockTokenizers,
        h = this.interruptBlockquote,
        d = r.now(),
        g = d.line,
        m = e.length,
        b = [],
        v = [],
        E = [],
        w = 0
      for (; w < m && ((u = e.charAt(w)) === te || u === ee); ) w++
      if (e.charAt(w) !== ne) return
      if (t) return !0
      w = 0
      for (; w < m; ) {
        for (
          a = e.indexOf(re, w), s = w, l = !1, -1 === a && (a = m);
          w < m && ((u = e.charAt(w)) === te || u === ee);

        )
          w++
        if (
          (e.charAt(w) === ne ? (w++, (l = !0), e.charAt(w) === te && w++) : (w = s),
          (i = e.slice(w, a)),
          !l && !Wr(i))
        ) {
          w = s
          break
        }
        if (!l && ((o = e.slice(w)), Kr(h, D, this, [r, o, !0]))) break
        ;(c = s === w ? i : e.slice(s, a)), E.push(w - s), b.push(c), v.push(i), (w = a + 1)
      }
      ;(w = -1), (m = E.length), (n = r(b.join(re)))
      for (; ++w < m; ) (p[g] = (p[g] || 0) + E[w]), g++
      return (
        (f = this.enterBlock()),
        (v = this.tokenizeBlock(v.join(re), d)),
        f(),
        n({ type: 'blockquote', children: v }))
    },
    re = '\n',
    ee = '\t',
    te = ' ',
    ne = '>'
  var ue = function(r, e, t) {
      var n,
        u,
        o,
        a = this.options,
        i = e.length + 1,
        c = -1,
        s = r.now(),
        l = '',
        f = ''
      for (; ++c < i; ) {
        if ((n = e.charAt(c)) !== ie && n !== ae) {
          c--
          break
        }
        l += n
      }
      o = 0
      for (; ++c <= i; ) {
        if ((n = e.charAt(c)) !== ce) {
          c--
          break
        }
        ;(l += n), o++
      }
      if (o > se) return
      if (!o || (!a.pedantic && e.charAt(c + 1) === ce)) return
      ;(i = e.length + 1), (u = '')
      for (; ++c < i; ) {
        if ((n = e.charAt(c)) !== ie && n !== ae) {
          c--
          break
        }
        u += n
      }
      if (!a.pedantic && 0 === u.length && n && n !== oe) return
      if (t) return !0
      ;(l += u), (u = ''), (f = '')
      for (; ++c < i && (n = e.charAt(c)) && n !== oe; )
        if (n === ie || n === ae || n === ce) {
          for (; n === ie || n === ae; ) (u += n), (n = e.charAt(++c))
          for (; n === ce; ) (u += n), (n = e.charAt(++c))
          for (; n === ie || n === ae; ) (u += n), (n = e.charAt(++c))
          c--
        } else (f += u + n), (u = '')
      return (
        (s.column += l.length),
        (s.offset += l.length),
        r((l += f + u))({ type: 'heading', depth: o, children: this.tokenizeInline(f, s) }))
    },
    oe = '\n',
    ae = '\t',
    ie = ' ',
    ce = '#',
    se = 6
  var le = function(r, e, t) {
      var n,
        u,
        o,
        a,
        i = -1,
        c = e.length + 1,
        s = ''
      for (; ++i < c && ((n = e.charAt(i)) === pe || n === De); ) s += n
      if (n !== he && n !== ge && n !== de) return
      ;(u = n), (s += n), (o = 1), (a = '')
      for (; ++i < c; )
        if ((n = e.charAt(i)) === u) o++, (s += a + u), (a = '')
        else {
          if (n !== De)
            return o >= me && (!n || n === fe)
              ? ((s += a), !!t || r(s)({ type: 'thematicBreak' }))
              : void 0
          a += n
        }
    },
    fe = '\n',
    pe = '\t',
    De = ' ',
    he = '*',
    de = '_',
    ge = '-',
    me = 3
  var be = function(r) {
      var e,
        t = 0,
        n = 0,
        u = r.charAt(t),
        o = {}
      for (; u in ve; )
        (e = ve[u]), (n += e), e > 1 && (n = Math.floor(n / e) * e), (o[n] = t), (u = r.charAt(++t))
      return { indent: n, stops: o }
    },
    ve = { ' ': 1, '\t': 4 }
  var Ee = function(r, e) {
      var t,
        n,
        u,
        o,
        a = r.split(ye),
        i = a.length + 1,
        c = 1 / 0,
        s = []
      a.unshift(Or(we, e) + '!')
      for (; i--; )
        if (((n = be(a[i])), (s[i] = n.stops), 0 !== Wr(a[i]).length)) {
          if (!n.indent) {
            c = 1 / 0
            break
          }
          n.indent > 0 && n.indent < c && (c = n.indent)
        }
      if (c !== 1 / 0)
        for (i = a.length; i--; ) {
          for (u = s[i], t = c; t && !(t in u); ) t--
          ;(o = 0 !== Wr(a[i]).length && c && t !== c ? Ae : ''),
            (a[i] = o + a[i].slice(t in u ? u[t] + 1 : 0))
        }
      return a.shift(), a.join(ye)
    },
    we = ' ',
    ye = '\n',
    Ae = '\t'
  var Ce = function(r, e, t) {
      var n,
        u,
        o,
        a,
        i,
        c,
        s,
        l,
        f,
        p,
        D,
        h,
        d,
        g,
        m,
        b,
        v,
        E,
        y,
        A,
        C,
        q,
        F,
        k,
        x = this.options.commonmark,
        L = this.options.pedantic,
        S = this.blockTokenizers,
        B = this.interruptList,
        T = 0,
        N = e.length,
        R = null,
        O = 0
      for (; T < N; ) {
        if ((a = e.charAt(T)) === Se) O += Te - (O % Te)
        else {
          if (a !== xe) break
          O++
        }
        T++
      }
      if (O >= Te) return
      if (((a = e.charAt(T)), (n = x ? je : Ve), !0 === Ie[a])) (i = a), (o = !1)
      else {
        for (o = !0, u = ''; T < N && ((a = e.charAt(T)), w(a)); ) (u += a), T++
        if (((a = e.charAt(T)), !u || !0 !== n[a])) return
        ;(R = parseInt(u, 10)), (i = a)
      }
      if ((a = e.charAt(++T)) !== xe && a !== Se) return
      if (t) return !0
      ;(T = 0), (g = []), (m = []), (b = [])
      for (; T < N; ) {
        for (
          c = e.indexOf(Le, T), s = T, l = !1, k = !1, -1 === c && (c = N), F = T + Te, O = 0;
          T < N;

        ) {
          if ((a = e.charAt(T)) === Se) O += Te - (O % Te)
          else {
            if (a !== xe) break
            O++
          }
          T++
        }
        if (
          (O >= Te && (k = !0), v && O >= v.indent && (k = !0), (a = e.charAt(T)), (f = null), !k)
        ) {
          if (!0 === Ie[a]) (f = a), T++, O++
          else {
            for (u = ''; T < N && ((a = e.charAt(T)), w(a)); ) (u += a), T++
            ;(a = e.charAt(T)), T++, u && !0 === n[a] && ((f = a), (O += u.length + 1))
          }
          if (f)
            if ((a = e.charAt(T)) === Se) (O += Te - (O % Te)), T++
            else if (a === xe) {
              for (F = T + Te; T < F && e.charAt(T) === xe; ) T++, O++
              T === F && e.charAt(T) === xe && ((T -= Te - 1), (O -= Te - 1))
            } else a !== Le && '' !== a && (f = null)
        }
        if (f) {
          if (!L && i !== f) break
          l = !0
        } else
          x || k || e.charAt(s) !== xe ? x && v && (k = O >= v.indent || O > Te) : (k = !0),
            (l = !1),
            (T = s)
        if (
          ((D = e.slice(s, c)),
          (p = s === T ? D : e.slice(T, c)),
          (f === qe || f === Fe || f === ke) && S.thematicBreak.call(this, r, D, !0)))
          break
        if (((h = d), (d = !Wr(p).length), k && v))
          (v.value = v.value.concat(b, D)), (m = m.concat(b, D)), (b = [])
        else if (l)
          0 !== b.length && (v.value.push(''), (v.trail = b.concat())),
            (v = { value: [D], indent: O, trail: [] }),
            g.push(v),
            (m = m.concat(b, D)),
            (b = [])
        else if (d) {
          if (h) break
          b.push(D)
        } else {
          if (h) break
          if (Kr(B, S, this, [r, D, !0])) break
          ;(v.value = v.value.concat(b, D)), (m = m.concat(b, D)), (b = [])
        }
        T = c + 1
      }
      ;(C = r(m.join(Le)).reset({ type: 'list', ordered: o, start: R, loose: null, children: [] })),
        (E = this.enterList()),
        (y = this.enterBlock()),
        (A = !1),
        (T = -1),
        (N = g.length)
      for (; ++T < N; )
        (v = g[T].value.join(Le)),
          (q = r.now()),
          (v = r(v)(ze(this, v, q), C)).loose && (A = !0),
          (v = g[T].trail.join(Le)),
          T !== N - 1 && (v += Le),
          r(v)
      return E(), y(), (C.loose = A), C
    },
    qe = '*',
    Fe = '_',
    ke = '-',
    xe = ' ',
    Le = '\n',
    Se = '\t',
    Be = 'x',
    Te = 4,
    Ne = /\n\n(?!\s*$)/,
    Re = /^\[([ \t]|x|X)][ \t]/,
    Oe = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/,
    Pe = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/,
    Ue = /^( {1,4}|\t)?/gm,
    Ie = {}
  ;(Ie[qe] = !0), (Ie['+'] = !0), (Ie[ke] = !0)
  var Ve = { '.': !0 },
    je = {}
  function ze(r, e, t) {
    var n,
      u,
      o = r.offset,
      a = null
    return (
      (e = (r.options.pedantic ? Ge : He).apply(null, arguments)),
      r.options.gfm &&
        (n = e.match(Re)) &&
        ((u = n[0].length), (a = n[1].toLowerCase() === Be), (o[t.line] += u), (e = e.slice(u))),
      {
        type: 'listItem',
        loose: Ne.test(e) || e.charAt(e.length - 1) === Le,
        checked: a,
        children: r.tokenizeBlock(e, t)
      })
  }
  function Ge(r, e, t) {
    var n = r.offset,
      u = t.line
    return (e = e.replace(Pe, o)), (u = t.line), e.replace(Ue, o)
    function o(r) {
      return (n[u] = (n[u] || 0) + r.length), u++, ''
    }
  }
  function He(r, e, t) {
    var n,
      u,
      o,
      a,
      i,
      c,
      s,
      l = r.offset,
      f = t.line
    for (
      a = (e = e.replace(Oe, function(r, e, t, a, i) {
        ;(u = e + t + a), (o = i), Number(t) < 10 && u.length % 2 == 1 && (t = xe + t)
        return (n = e + Or(xe, t.length) + a) + o
      })).split(Le),
        (i = Ee(e, be(n).indent).split(Le))[0] = o,
        l[f] = (l[f] || 0) + u.length,
        f++,
        c = 0,
        s = a.length;
      ++c < s;

    )
      (l[f] = (l[f] || 0) + a[c].length - i[c].length), f++
    return i.join(Le)
  }
  ;(je['.'] = !0), (je[')'] = !0)
  var Me = function(r, e, t) {
      var n,
        u,
        o,
        a,
        i,
        c = r.now(),
        s = e.length,
        l = -1,
        f = ''
      for (; ++l < s; ) {
        if ((o = e.charAt(l)) !== $e || l >= Ye) {
          l--
          break
        }
        f += o
      }
      ;(n = ''), (u = '')
      for (; ++l < s; ) {
        if ((o = e.charAt(l)) === Ze) {
          l--
          break
        }
        o === $e || o === _e ? (u += o) : ((n += u + o), (u = ''))
      }
      if (
        ((c.column += f.length),
        (c.offset += f.length),
        (f += n + u),
        (o = e.charAt(++l)),
        (a = e.charAt(++l)),
        o !== Ze || !Je[a]))
        return
      ;(f += o), (u = a), (i = Je[a])
      for (; ++l < s; ) {
        if ((o = e.charAt(l)) !== a) {
          if (o !== Ze) return
          l--
          break
        }
        u += o
      }
      if (t) return !0
      return r(f + u)({ type: 'heading', depth: i, children: this.tokenizeInline(n, c) })
    },
    Ze = '\n',
    _e = '\t',
    $e = ' ',
    Ye = 3,
    Je = {}
  ;(Je['='] = 1), (Je['-'] = 2)
  var Qe =
      '<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"\'=<>`\\u0000-\\u0020]+|\'[^\']*\'|"[^"]*"))?)*\\s*\\/?>',
    We = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>',
    Ke = {
      openCloseTag: new RegExp('^(?:' + Qe + '|' + We + ')'),
      tag: new RegExp(
        '^(?:' +
          Qe +
          '|' +
          We +
          '|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Za-z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)'
      )
    },
    Xe = Ke.openCloseTag,
    rt = function(r, e, t) {
      var n,
        u,
        o,
        a,
        i,
        c,
        s,
        l = this.options.blocks,
        f = e.length,
        p = 0,
        D = [
          [/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, !0],
          [/^<!--/, /-->/, !0],
          [/^<\?/, /\?>/, !0],
          [/^<![A-Za-z]/, />/, !0],
          [/^<!\[CDATA\[/, /\]\]>/, !0],
          [new RegExp('^</?(' + l.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, !0],
          [new RegExp(Xe.source + '\\s*$'), /^$/, !1]
        ]
      for (; p < f && ((a = e.charAt(p)) === et || a === tt); ) p++
      if (e.charAt(p) !== ut) return
      ;(n = -1 === (n = e.indexOf(nt, p + 1)) ? f : n),
        (u = e.slice(p, n)),
        (o = -1),
        (i = D.length)
      for (; ++o < i; )
        if (D[o][0].test(u)) {
          c = D[o]
          break
        }
      if (!c) return
      if (t) return c[2]
      if (((p = n), !c[1].test(u)))
        for (; p < f; ) {
          if (
            ((n = -1 === (n = e.indexOf(nt, p + 1)) ? f : n), (u = e.slice(p + 1, n)), c[1].test(u))
          ) {
            u && (p = n)
            break
          }
          p = n
        }
      return (s = e.slice(0, p)), r(s)({ type: 'html', value: s })
    },
    et = '\t',
    tt = ' ',
    nt = '\n',
    ut = '<'
  var ot = function(r) {
    return String(r).replace(/\s+/g, ' ')
  }
  var at = function(r) {
    return ot(r).toLowerCase()
  }
  var it = mt
  ;(mt.notInList = !0), (mt.notInBlock = !0)
  var ct = '\\',
    st = '\n',
    lt = '\t',
    ft = ' ',
    pt = '[',
    Dt = ']',
    ht = '^',
    dt = ':',
    gt = /^( {4}|\t)?/gm
  function mt(r, e, t) {
    var n,
      u,
      o,
      a,
      i,
      c,
      s,
      l,
      f,
      p,
      D,
      h,
      d = this.offset
    if (this.options.footnotes) {
      for (
        n = 0, u = e.length, o = '', a = r.now(), i = a.line;
        n < u && ((f = e.charAt(n)), Lr(f));

      )
        (o += f), n++
      if (e.charAt(n) === pt && e.charAt(n + 1) === ht) {
        for (n = (o += pt + ht).length, s = ''; n < u && (f = e.charAt(n)) !== Dt; )
          f === ct && ((s += f), n++, (f = e.charAt(n))), (s += f), n++
        if (s && e.charAt(n) === Dt && e.charAt(n + 1) === dt) {
          if (t) return !0
          for (
            p = at(s), n = (o += s + Dt + dt).length;
            n < u && ((f = e.charAt(n)) === lt || f === ft);

          )
            (o += f), n++
          for (a.column += o.length, a.offset += o.length, s = '', c = '', l = ''; n < u; ) {
            if ((f = e.charAt(n)) === st) {
              for (l = f, n++; n < u && (f = e.charAt(n)) === st; ) (l += f), n++
              for (s += l, l = ''; n < u && (f = e.charAt(n)) === ft; ) (l += f), n++
              if (0 === l.length) break
              s += l
            }
            s && ((c += s), (s = '')), (c += f), n++
          }
          return (
            (o += c),
            (c = c.replace(gt, function(r) {
              return (d[i] = (d[i] || 0) + r.length), i++, ''
            })),
            (D = r(o)),
            (h = this.enterBlock()),
            (c = this.tokenizeBlock(c, a)),
            h(),
            D({ type: 'footnoteDefinition', identifier: p, children: c }))
        }
      }
    }
  }
  var bt = Tt
  ;(Tt.notInList = !0), (Tt.notInBlock = !0)
  var vt = '"',
    Et = "'",
    wt = '\\',
    yt = '\n',
    At = '\t',
    Ct = ' ',
    qt = '[',
    Ft = ']',
    kt = '(',
    xt = ')',
    Lt = ':',
    St = '<',
    Bt = '>'
  function Tt(r, e, t) {
    for (
      var n, u, o, a, i, c, s, l, f = this.options.commonmark, p = 0, D = e.length, h = '';
      p < D && ((a = e.charAt(p)) === Ct || a === At);

    )
      (h += a), p++
    if ((a = e.charAt(p)) === qt) {
      for (p++, h += a, o = ''; p < D && (a = e.charAt(p)) !== Ft; )
        a === wt && ((o += a), p++, (a = e.charAt(p))), (o += a), p++
      if (o && e.charAt(p) === Ft && e.charAt(p + 1) === Lt) {
        for (
          c = o, p = (h += o + Ft + Lt).length, o = '';
          p < D && ((a = e.charAt(p)) === At || a === Ct || a === yt);

        )
          (h += a), p++
        if (((o = ''), (n = h), (a = e.charAt(p)) === St)) {
          for (p++; p < D && Nt((a = e.charAt(p))); ) (o += a), p++
          if ((a = e.charAt(p)) === Nt.delimiter) (h += St + o + a), p++
          else {
            if (f) return
            ;(p -= o.length + 1), (o = '')
          }
        }
        if (!o) {
          for (; p < D && Rt((a = e.charAt(p))); ) (o += a), p++
          h += o
        }
        if (o) {
          for (s = o, o = ''; p < D && ((a = e.charAt(p)) === At || a === Ct || a === yt); )
            (o += a), p++
          if (
            ((i = null),
            (a = e.charAt(p)) === vt ? (i = vt) : a === Et ? (i = Et) : a === kt && (i = xt),
            i)
          ) {
            if (!o) return
            for (p = (h += o + a).length, o = ''; p < D && (a = e.charAt(p)) !== i; ) {
              if (a === yt) {
                if ((p++, (a = e.charAt(p)) === yt || a === i)) return
                o += yt
              }
              ;(o += a), p++
            }
            if ((a = e.charAt(p)) !== i) return
            ;(u = h), (h += o + a), p++, (l = o), (o = '')
          } else (o = ''), (p = h.length)
          for (; p < D && ((a = e.charAt(p)) === At || a === Ct); ) (h += a), p++
          return (a = e.charAt(p)) && a !== yt
            ? void 0
            : !!t ||
                ((n = r(n).test().end),
                (s = this.decode.raw(this.unescape(s), n, { nonTerminated: !1 })),
                l && ((u = r(u).test().end), (l = this.decode.raw(this.unescape(l), u))),
                r(h)({ type: 'definition', identifier: at(c), title: l || null, url: s }))
        }
      }
    }
  }
  function Nt(r) {
    return r !== Bt && r !== qt && r !== Ft
  }
  function Rt(r) {
    return r !== qt && r !== Ft && !Lr(r)
  }
  Nt.delimiter = Bt
  var Ot = function(r, e, t) {
      var n, u, o, a, i, c, s, l, f, p, D, h, d, g, m, b, v, E, w, y, A, C, q, F
      if (!this.options.gfm) return
      ;(n = 0), (E = 0), (c = e.length + 1), (s = [])
      for (; n < c; ) {
        if (
          ((C = e.indexOf(Gt, n)),
          (q = e.indexOf(Vt, n + 1)),
          -1 === C && (C = e.length),
          -1 === q || q > C)
        ) {
          if (E < Zt) return
          break
        }
        s.push(e.slice(n, C)), E++, (n = C + 1)
      }
      ;(a = s.join(Gt)),
        (u = s.splice(1, 1)[0] || []),
        (n = 0),
        (c = u.length),
        E--,
        (o = !1),
        (D = [])
      for (; n < c; ) {
        if ((f = u.charAt(n)) === Vt) {
          if (((p = null), !1 === o)) {
            if (!1 === F) return
          } else D.push(o), (o = !1)
          F = !1
        } else if (f === It) (p = !0), (o = o || Jt)
        else if (f === jt) o = o === _t ? $t : p && o === Jt ? Yt : _t
        else if (!Lr(f)) return
        n++
      }
      !1 !== o && D.push(o)
      if (D.length < Mt) return
      if (t) return !0
      ;(v = -1), (y = []), (A = r(a).reset({ type: 'table', align: D, children: y }))
      for (; ++v < E; ) {
        for (
          w = s[v],
            i = { type: 'tableRow', children: [] },
            v && r(Gt),
            r(w).reset(i, A),
            c = w.length + 1,
            n = 0,
            l = '',
            h = '',
            d = !0,
            g = null,
            m = null;
          n < c;

        )
          if ((f = w.charAt(n)) !== Ht && f !== zt) {
            if ('' === f || f === Vt)
              if (d) r(f)
              else {
                if (f && m) {
                  ;(l += f), n++
                  continue
                }
                ;(!h && !f) ||
                  d ||
                  ((a = h),
                  l.length > 1 &&
                    (f
                      ? ((a += l.slice(0, l.length - 1)), (l = l.charAt(l.length - 1)))
                      : ((a += l), (l = ''))),
                  (b = r.now()),
                  r(a)({ type: 'tableCell', children: this.tokenizeInline(h, b) }, i)),
                  r(l + f),
                  (l = ''),
                  (h = '')
              }
            else if (
              (l && ((h += l), (l = '')),
              (h += f),
              f === Pt && n !== c - 2 && ((h += w.charAt(n + 1)), n++),
              f === Ut)
            ) {
              for (g = 1; w.charAt(n + 1) === f; ) (h += f), n++, g++
              m ? g >= m && (m = 0) : (m = g)
            }
            ;(d = !1), n++
          } else h ? (l += f) : r(f), n++
        v || r(Gt + u)
      }
      return A
    },
    Pt = '\\',
    Ut = '`',
    It = '-',
    Vt = '|',
    jt = ':',
    zt = ' ',
    Gt = '\n',
    Ht = '\t',
    Mt = 1,
    Zt = 2,
    _t = 'left',
    $t = 'center',
    Yt = 'right',
    Jt = null
  var Qt = function(r, e, t) {
      var n,
        u,
        o,
        a,
        i,
        c = this.options,
        s = c.commonmark,
        l = c.gfm,
        f = this.blockTokenizers,
        p = this.interruptParagraph,
        D = e.indexOf(Wt),
        h = e.length
      for (; D < h; ) {
        if (-1 === D) {
          D = h
          break
        }
        if (e.charAt(D + 1) === Wt) break
        if (s) {
          for (a = 0, n = D + 1; n < h; ) {
            if ((o = e.charAt(n)) === Kt) {
              a = rn
              break
            }
            if (o !== Xt) break
            a++, n++
          }
          if (a >= rn) {
            D = e.indexOf(Wt, D + 1)
            continue
          }
        }
        if (((u = e.slice(D + 1)), Kr(p, f, this, [r, u, !0]))) break
        if (f.list.call(this, r, u, !0) && (this.inList || s || (l && !w(Wr.left(u).charAt(0)))))
          break
        if (((n = D), -1 !== (D = e.indexOf(Wt, D + 1)) && '' === Wr(e.slice(n, D)))) {
          D = n
          break
        }
      }
      if (((u = e.slice(0, D)), '' === Wr(u))) return r(u), null
      if (t) return !0
      return (
        (i = r.now()), (u = Pr(u)), r(u)({ type: 'paragraph', children: this.tokenizeInline(u, i) }))
    },
    Wt = '\n',
    Kt = '\t',
    Xt = ' ',
    rn = 4
  var en = function(r, e) {
    return r.indexOf('\\', e)
  }
  var tn = nn
  function nn(r, e, t) {
    var n, u
    if ('\\' === e.charAt(0) && ((n = e.charAt(1)), -1 !== this.escape.indexOf(n)))
      return (
        !!t || ((u = '\n' === n ? { type: 'break' } : { type: 'text', value: n }), r('\\' + n)(u)))
  }
  nn.locator = en
  var un = function(r, e) {
    return r.indexOf('<', e)
  }
  var on = Dn
  ;(Dn.locator = un), (Dn.notInLink = !0)
  var an = '<',
    cn = '>',
    sn = '@',
    ln = '/',
    fn = 'mailto:',
    pn = fn.length
  function Dn(r, e, t) {
    var n, u, o, a, i, c, s, l, f, p, D
    if (e.charAt(0) === an) {
      for (
        this, n = '', u = e.length, o = 0, a = '', c = !1, s = '', o++, n = an;
        o < u &&
        ((i = e.charAt(o)),
        !(Lr(i) || i === cn || i === sn || (':' === i && e.charAt(o + 1) === ln)));

      )
        (a += i), o++
      if (a) {
        if (((s += a), (a = ''), (s += i = e.charAt(o)), o++, i === sn)) c = !0
        else {
          if (':' !== i || e.charAt(o + 1) !== ln) return
          ;(s += ln), o++
        }
        for (; o < u && ((i = e.charAt(o)), !Lr(i) && i !== cn); ) (a += i), o++
        if (((i = e.charAt(o)), a && i === cn))
          return (
            !!t ||
            ((f = s += a),
            (n += s + i),
            (l = r.now()).column++,
            l.offset++,
            c &&
              (s.slice(0, pn).toLowerCase() === fn
                ? ((f = f.substr(pn)), (l.column += pn), (l.offset += pn))
                : (s = fn + s)),
            (p = this.inlineTokenizers),
            (this.inlineTokenizers = { text: p.text }),
            (D = this.enterLink()),
            (f = this.tokenizeInline(f, l)),
            (this.inlineTokenizers = p),
            D(),
            r(n)({ type: 'link', title: null, url: x(s, { nonTerminated: !1 }), children: f })))
      }
    }
  }
  var hn = function(r, e) {
      var t,
        n = dn.length,
        u = -1,
        o = -1
      if (!this.options.gfm) return -1
      for (; ++u < n; ) -1 !== (t = r.indexOf(dn[u], e)) && (t < o || -1 === o) && (o = t)
      return o
    },
    dn = ['https://', 'http://', 'mailto:']
  var gn = Fn
  ;(Fn.locator = hn), (Fn.notInLink = !0)
  var mn = '[',
    bn = ']',
    vn = '(',
    En = ')',
    wn = '<',
    yn = '@',
    An = 'mailto:',
    Cn = ['http://', 'https://', An],
    qn = Cn.length
  function Fn(r, e, t) {
    var n, u, o, a, i, c, s, l, f, p, D, h
    if (this.options.gfm) {
      for (n = '', a = -1, l = qn; ++a < l; )
        if (((c = Cn[a]), (s = e.slice(0, c.length)).toLowerCase() === c)) {
          n = s
          break
        }
      if (n) {
        for (
          a = n.length, l = e.length, f = '', p = 0;
          a < l &&
          ((o = e.charAt(a)), !Lr(o) && o !== wn) &&
          (('.' !== o &&
            ',' !== o &&
            ':' !== o &&
            ';' !== o &&
            '"' !== o &&
            "'" !== o &&
            ')' !== o &&
            ']' !== o) ||
            ((D = e.charAt(a + 1)) && !Lr(D))) &&
          ((o !== vn && o !== mn) || p++, (o !== En && o !== bn) || !(--p < 0));

        )
          (f += o), a++
        if (f) {
          if (((u = n += f), c === An)) {
            if (-1 === (i = f.indexOf(yn)) || i === l - 1) return
            u = u.substr(An.length)
          }
          return (
            !!t ||
            ((h = this.enterLink()),
            (u = this.tokenizeInline(u, r.now())),
            h(),
            r(n)({ type: 'link', title: null, url: x(n, { nonTerminated: !1 }), children: u })))
        }
      }
    }
  }
  var kn = Ke.tag,
    xn = Bn
  Bn.locator = un
  var Ln = /^<a /i,
    Sn = /^<\/a>/i
  function Bn(r, e, t) {
    var n,
      u,
      o = e.length
    if (
      !('<' !== e.charAt(0) || o < 3) &&
      ((n = e.charAt(1)), (A(n) || '?' === n || '!' === n || '/' === n) && (u = e.match(kn))))
      return (
        !!t ||
        ((u = u[0]),
        !this.inLink && Ln.test(u)
          ? (this.inLink = !0)
          : this.inLink && Sn.test(u) && (this.inLink = !1),
        r(u)({ type: 'html', value: u })))
  }
  var Tn = function(r, e) {
    var t = r.indexOf('[', e),
      n = r.indexOf('![', e)
    if (-1 === n) return t
    return t < n ? t : n
  }
  var Nn = Zn
  Zn.locator = Tn
  var Rn = {}.hasOwnProperty,
    On = '\\',
    Pn = '[',
    Un = ']',
    In = '(',
    Vn = ')',
    jn = '<',
    zn = '>',
    Gn = '`',
    Hn = { '"': '"', "'": "'" },
    Mn = {}
  function Zn(r, e, t) {
    var n,
      u,
      o,
      a,
      i,
      c,
      s,
      l,
      f,
      p,
      D,
      h,
      d,
      g,
      m,
      b,
      v,
      E,
      w,
      y = '',
      A = 0,
      C = e.charAt(0),
      q = this.options.pedantic,
      F = this.options.commonmark,
      k = this.options.gfm
    if (('!' === C && ((f = !0), (y = C), (C = e.charAt(++A))), C === Pn && (f || !this.inLink))) {
      for (
        y += C, m = '', A++, h = e.length, g = 0, (v = r.now()).column += A, v.offset += A;
        A < h;

      ) {
        if (((c = C = e.charAt(A)), C === Gn)) {
          for (u = 1; e.charAt(A + 1) === Gn; ) (c += C), A++, u++
          o ? u >= o && (o = 0) : (o = u)
        } else if (C === On) A++, (c += e.charAt(A))
        else if ((o && !k) || C !== Pn) {
          if ((!o || k) && C === Un) {
            if (!g) {
              if (!q) for (; A < h && ((C = e.charAt(A + 1)), Lr(C)); ) (c += C), A++
              if (e.charAt(A + 1) !== In) return
              ;(c += In), (n = !0), A++
              break
            }
            g--
          }
        } else g++
        ;(m += c), (c = ''), A++
      }
      if (n) {
        for (p = m, y += m + c, A++; A < h && ((C = e.charAt(A)), Lr(C)); ) (y += C), A++
        if (((C = e.charAt(A)), (l = F ? Mn : Hn), (m = ''), (a = y), C === jn)) {
          for (A++, a += jn; A < h && (C = e.charAt(A)) !== zn; ) {
            if (F && '\n' === C) return
            ;(m += C), A++
          }
          if (e.charAt(A) !== zn) return
          ;(y += jn + m + zn), (b = m), A++
        } else {
          for (C = null, c = ''; A < h && ((C = e.charAt(A)), !c || !Rn.call(l, C)); ) {
            if (Lr(C)) {
              if (!q) break
              c += C
            } else {
              if (C === In) g++
              else if (C === Vn) {
                if (0 === g) break
                g--
              }
              ;(m += c), (c = ''), C === On && ((m += On), (C = e.charAt(++A))), (m += C)
            }
            A++
          }
          ;(b = m), (A = (y += m).length)
        }
        for (m = ''; A < h && ((C = e.charAt(A)), Lr(C)); ) (m += C), A++
        if (((C = e.charAt(A)), (y += m), m && Rn.call(l, C)))
          if ((A++, (y += C), (m = ''), (D = l[C]), (i = y), F)) {
            for (; A < h && (C = e.charAt(A)) !== D; )
              C === On && ((m += On), (C = e.charAt(++A))), A++, (m += C)
            if ((C = e.charAt(A)) !== D) return
            for (d = m, y += m + C, A++; A < h && ((C = e.charAt(A)), Lr(C)); ) (y += C), A++
          } else
            for (c = ''; A < h; ) {
              if ((C = e.charAt(A)) === D) s && ((m += D + c), (c = '')), (s = !0)
              else if (s) {
                if (C === Vn) {
                  ;(y += m + D + c), (d = m)
                  break
                }
                Lr(C) ? (c += C) : ((m += D + c + C), (c = ''), (s = !1))
              } else m += C
              A++
            }
        if (e.charAt(A) === Vn)
          return (
            !!t ||
            ((y += Vn),
            (b = this.decode.raw(this.unescape(b), r(a).test().end, { nonTerminated: !1 })),
            d && ((i = r(i).test().end), (d = this.decode.raw(this.unescape(d), i))),
            (w = { type: f ? 'image' : 'link', title: d || null, url: b }),
            f
              ? (w.alt = this.decode.raw(this.unescape(p), v) || null)
              : ((E = this.enterLink()), (w.children = this.tokenizeInline(p, v)), E()),
            r(y)(w)))
      }
    }
  }
  ;(Mn['"'] = '"'), (Mn["'"] = "'"), (Mn[In] = Vn)
  var _n = nu
  nu.locator = Tn
  var $n = 'link',
    Yn = 'image',
    Jn = 'footnote',
    Qn = 'shortcut',
    Wn = 'collapsed',
    Kn = 'full',
    Xn = '^',
    ru = '\\',
    eu = '[',
    tu = ']'
  function nu(r, e, t) {
    var n,
      u,
      o,
      a,
      i,
      c,
      s,
      l,
      f = e.charAt(0),
      p = 0,
      D = e.length,
      h = '',
      d = '',
      g = $n,
      m = Qn
    if (('!' === f && ((g = Yn), (d = f), (f = e.charAt(++p))), f === eu)) {
      if ((p++, (d += f), (c = ''), this.options.footnotes && e.charAt(p) === Xn)) {
        if (g === Yn) return
        ;(d += Xn), p++, (g = Jn)
      }
      for (l = 0; p < D; ) {
        if ((f = e.charAt(p)) === eu) (s = !0), l++
        else if (f === tu) {
          if (!l) break
          l--
        }
        f === ru && ((c += ru), (f = e.charAt(++p))), (c += f), p++
      }
      if (((h = c), (n = c), (f = e.charAt(p)) === tu)) {
        for (p++, h += f, c = ''; p < D && ((f = e.charAt(p)), Lr(f)); ) (c += f), p++
        if (((f = e.charAt(p)), g !== Jn && f === eu)) {
          for (u = '', c += f, p++; p < D && (f = e.charAt(p)) !== eu && f !== tu; )
            f === ru && ((u += ru), (f = e.charAt(++p))), (u += f), p++
          ;(f = e.charAt(p)) === tu ? ((m = u ? Kn : Wn), (c += u + f), p++) : (u = ''),
            (h += c),
            (c = '')
        } else {
          if (!n) return
          u = n
        }
        if (m === Kn || !s)
          return (
            (h = d + h),
            g === $n && this.inLink
              ? null
              : !!t ||
                (g === Jn && -1 !== n.indexOf(' ')
                  ? r(h)({ type: 'footnote', children: this.tokenizeInline(n, r.now()) })
                  : (((o = r.now()).column += d.length),
                    (o.offset += d.length),
                    (a = { type: g + 'Reference', identifier: at((u = m === Kn ? u : n)) }),
                    (g !== $n && g !== Yn) || (a.referenceType = m),
                    g === $n
                      ? ((i = this.enterLink()), (a.children = this.tokenizeInline(n, o)), i())
                      : g === Yn && (a.alt = this.decode.raw(this.unescape(n), o) || null),
                    r(h)(a))))
      }
    }
  }
  var uu = function(r, e) {
    var t = r.indexOf('**', e),
      n = r.indexOf('__', e)
    if (-1 === n) return t
    if (-1 === t) return n
    return n < t ? n : t
  }
  var ou = cu
  cu.locator = uu
  var au = '*',
    iu = '_'
  function cu(r, e, t) {
    var n,
      u,
      o,
      a,
      i,
      c,
      s,
      l = 0,
      f = e.charAt(l)
    if (
      !(
        (f !== au && f !== iu) ||
        e.charAt(++l) !== f ||
        ((u = this.options.pedantic),
        (i = (o = f) + o),
        (c = e.length),
        l++,
        (a = ''),
        (f = ''),
        u && Lr(e.charAt(l)))))
      for (; l < c; ) {
        if (
          ((s = f),
          !((f = e.charAt(l)) !== o || e.charAt(l + 1) !== o || (u && Lr(s))) &&
            (f = e.charAt(l + 2)) !== o)
        ) {
          if (!Wr(a)) return
          return (
            !!t ||
            (((n = r.now()).column += 2),
            (n.offset += 2),
            r(i + a + i)({ type: 'strong', children: this.tokenizeInline(a, n) })))
        }
        u || '\\' !== f || ((a += f), (f = e.charAt(++l))), (a += f), l++
      }
  }
  var su = function(r) {
      return fu.test('number' == typeof r ? lu(r) : r.charAt(0))
    },
    lu = String.fromCharCode,
    fu = /\w/
  var pu = function(r, e) {
    var t = r.indexOf('*', e),
      n = r.indexOf('_', e)
    if (-1 === n) return t
    if (-1 === t) return n
    return n < t ? n : t
  }
  var Du = gu
  gu.locator = pu
  var hu = '*',
    du = '_'
  function gu(r, e, t) {
    var n,
      u,
      o,
      a,
      i,
      c,
      s,
      l = 0,
      f = e.charAt(l)
    if (
      !(
        (f !== hu && f !== du) ||
        ((u = this.options.pedantic),
        (i = f),
        (o = f),
        (c = e.length),
        l++,
        (a = ''),
        (f = ''),
        u && Lr(e.charAt(l)))))
      for (; l < c; ) {
        if (((s = f), !((f = e.charAt(l)) !== o || (u && Lr(s))))) {
          if ((f = e.charAt(++l)) !== o) {
            if (!Wr(a) || s === o) return
            if (!u && o === du && su(f)) {
              a += o
              continue
            }
            return (
              !!t ||
              ((n = r.now()).column++,
              n.offset++,
              r(i + a + o)({ type: 'emphasis', children: this.tokenizeInline(a, n) })))
          }
          a += o
        }
        u || '\\' !== f || ((a += f), (f = e.charAt(++l))), (a += f), l++
      }
  }
  var mu = function(r, e) {
    return r.indexOf('~~', e)
  }
  var bu = wu
  wu.locator = mu
  var vu = '~',
    Eu = '~~'
  function wu(r, e, t) {
    var n,
      u,
      o,
      a = '',
      i = '',
      c = '',
      s = ''
    if (this.options.gfm && e.charAt(0) === vu && e.charAt(1) === vu && !Lr(e.charAt(2)))
      for (n = 1, u = e.length, (o = r.now()).column += 2, o.offset += 2; ++n < u; ) {
        if (!((a = e.charAt(n)) !== vu || i !== vu || (c && Lr(c))))
          return !!t || r(Eu + s + Eu)({ type: 'delete', children: this.tokenizeInline(s, o) })
        ;(s += i), (c = i), (i = a)
      }
  }
  var yu = function(r, e) {
    return r.indexOf('`', e)
  }
  var Au = qu
  qu.locator = yu
  var Cu = '`'
  function qu(r, e, t) {
    for (
      var n, u, o, a, i, c, s, l, f = e.length, p = 0, D = '', h = '';
      p < f && e.charAt(p) === Cu;

    )
      (D += Cu), p++
    if (D) {
      for (i = D, a = p, D = '', l = e.charAt(p), o = 0; p < f; ) {
        if (
          ((c = l),
          (l = e.charAt(p + 1)),
          c === Cu ? (o++, (h += c)) : ((o = 0), (D += c)),
          o && l !== Cu)
        ) {
          if (o === a) {
            ;(i += D + h), (s = !0)
            break
          }
          ;(D += h), (h = '')
        }
        p++
      }
      if (!s) {
        if (a % 2 != 0) return
        D = ''
      }
      if (t) return !0
      for (n = '', u = '', f = D.length, p = -1; ++p < f; )
        (c = D.charAt(p)), Lr(c) ? (u += c) : (u && (n && (n += u), (u = '')), (n += c))
      return r(i)({ type: 'inlineCode', value: n })
    }
  }
  var Fu = function(r, e) {
    var t = r.indexOf('\n', e)
    for (; t > e && ' ' === r.charAt(t - 1); ) t--
    return t
  }
  var ku = Lu
  Lu.locator = Fu
  var xu = 2
  function Lu(r, e, t) {
    for (var n, u = e.length, o = -1, a = ''; ++o < u; ) {
      if ('\n' === (n = e.charAt(o))) {
        if (o < xu) return
        return !!t || r((a += n))({ type: 'break' })
      }
      if (' ' !== n) return
      a += n
    }
  }
  var Su = function(r, e, t) {
    var n, u, o, a, i, c, s, l, f, p
    if (t) return !0
    ;(n = this.inlineMethods), (a = n.length), (u = this.inlineTokenizers), (o = -1), (f = e.length)
    for (; ++o < a; )
      'text' !== (l = n[o]) &&
        u[l] &&
        ((s = u[l].locator) || r.file.fail('Missing locator: `' + l + '`'),
        -1 !== (c = s.call(this, e, 1)) && c < f && (f = c))
    ;(i = e.slice(0, f)),
      (p = r.now()),
      this.decode(i, p, function(e, t, n) {
        r(n || e)({ type: 'text', value: e })
      })
  }
  var Bu = Tu
  function Tu(r, e) {
    ;(this.file = e),
      (this.offset = {}),
      (this.options = t(this.options)),
      this.setOptions({}),
      (this.inList = !1),
      (this.inBlock = !1),
      (this.inLink = !1),
      (this.atStart = !0),
      (this.toOffset = D(e).toOffset),
      (this.unescape = h(this, 'escape')),
      (this.decode = sr(this))
  }
  var Nu = Tu.prototype
  function Ru(r) {
    var e,
      t = []
    for (e in r) t.push(e)
    return t
  }
  ;(Nu.setOptions = wr),
    (Nu.parse = Fr),
    (Nu.options = Er),
    (Nu.exitStart = p('atStart', !0)),
    (Nu.enterList = p('inList', !1)),
    (Nu.enterLink = p('inLink', !1)),
    (Nu.enterBlock = p('inBlock', !1)),
    (Nu.interruptParagraph = [
      ['thematicBreak'],
      ['atxHeading'],
      ['fencedCode'],
      ['blockquote'],
      ['html'],
      ['setextHeading', { commonmark: !1 }],
      ['definition', { commonmark: !1 }],
      ['footnote', { commonmark: !1 }]
    ]),
    (Nu.interruptList = [
      ['atxHeading', { pedantic: !1 }],
      ['fencedCode', { pedantic: !1 }],
      ['thematicBreak', { pedantic: !1 }],
      ['definition', { commonmark: !1 }],
      ['footnote', { commonmark: !1 }]
    ]),
    (Nu.interruptBlockquote = [
      ['indentedCode', { commonmark: !0 }],
      ['fencedCode', { commonmark: !0 }],
      ['atxHeading', { commonmark: !0 }],
      ['setextHeading', { commonmark: !0 }],
      ['thematicBreak', { commonmark: !0 }],
      ['html', { commonmark: !0 }],
      ['list', { commonmark: !0 }],
      ['definition', { commonmark: !1 }],
      ['footnote', { commonmark: !1 }]
    ]),
    (Nu.blockTokenizers = {
      newline: Tr,
      indentedCode: Ir,
      fencedCode: Hr,
      blockquote: Xr,
      atxHeading: ue,
      thematicBreak: le,
      list: Ce,
      setextHeading: Me,
      html: rt,
      footnote: it,
      definition: bt,
      table: Ot,
      paragraph: Qt
    }),
    (Nu.inlineTokenizers = {
      escape: tn,
      autoLink: on,
      url: gn,
      html: xn,
      link: Nn,
      reference: _n,
      strong: ou,
      emphasis: Du,
      deletion: bu,
      code: Au,
      break: ku,
      text: Su
    }),
    (Nu.blockMethods = Ru(Nu.blockTokenizers)),
    (Nu.inlineMethods = Ru(Nu.inlineTokenizers)),
    (Nu.tokenizeBlock = lr('block')),
    (Nu.tokenizeInline = lr('inline')),
    (Nu.tokenizeFactory = lr)
  var Ou = Pu
  function Pu(r) {
    var e = f(Bu)
    ;(e.prototype.options = t(e.prototype.options, this.data('settings'), r)), (this.Parser = e)
  }
  Pu.Parser = Bu
  var Uu = Object.prototype.hasOwnProperty,
    Iu = Object.prototype.toString,
    Vu = function(r) {
      return 'function' == typeof Array.isArray ? Array.isArray(r) : '[object Array]' === Iu.call(r)
    },
    ju = function(r) {
      if (!r || '[object Object]' !== Iu.call(r)) return !1
      var e,
        t = Uu.call(r, 'constructor'),
        n =
          r.constructor &&
          r.constructor.prototype &&
          Uu.call(r.constructor.prototype, 'isPrototypeOf')
      if (r.constructor && !t && !n) return !1
      for (e in r);
      return void 0 === e || Uu.call(r, e)
    },
    zu = function e() {
      var t,
        n,
        u,
        o,
        a,
        i,
        c = arguments[0],
        s = 1,
        l = arguments.length,
        f = !1
      for (
        'boolean' == typeof c && ((f = c), (c = arguments[1] || {}), (s = 2)),
          (null == c || ('object' !== r(c) && 'function' != typeof c)) && (c = {});
        s < l;
        ++s
      )
        if (null != (t = arguments[s]))
          for (n in t)
            (u = c[n]),
              c !== (o = t[n]) &&
                (f && o && (ju(o) || (a = Vu(o)))
                  ? (a ? ((a = !1), (i = u && Vu(u) ? u : [])) : (i = u && ju(u) ? u : {}),
                    (c[n] = e(f, i, o)))
                  : void 0 !== o && (c[n] = o))
      return c
    },
    Gu = function(r) {
      if (r) throw r
    }
  var Hu =
    'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
        ? self
        : 'undefined' != typeof window
          ? window
          : {}
  function Mu() {
    throw new Error('setTimeout has not been defined')
  }
  function Zu() {
    throw new Error('clearTimeout has not been defined')
  }
  var _u = Mu,
    $u = Zu
  function Yu(r) {
    if (_u === setTimeout) return setTimeout(r, 0)
    if ((_u === Mu || !_u) && setTimeout) return (_u = setTimeout), setTimeout(r, 0)
    try {
      return _u(r, 0)
    } catch (e) {
      try {
        return _u.call(null, r, 0)
      } catch (e) {
        return _u.call(this, r, 0)
      }
    }
  }
  'function' == typeof Hu.setTimeout && (_u = setTimeout),
    'function' == typeof Hu.clearTimeout && ($u = clearTimeout)
  var Ju,
    Qu = [],
    Wu = !1,
    Ku = -1
  function Xu() {
    Wu && Ju && ((Wu = !1), Ju.length ? (Qu = Ju.concat(Qu)) : (Ku = -1), Qu.length && ro())
  }
  function ro() {
    if (!Wu) {
      var r = Yu(Xu)
      Wu = !0
      for (var e = Qu.length; e; ) {
        for (Ju = Qu, Qu = []; ++Ku < e; ) Ju && Ju[Ku].run()
        ;(Ku = -1), (e = Qu.length)
      }
      ;(Ju = null),
        (Wu = !1),
        (function(r) {
          if ($u === clearTimeout) return clearTimeout(r)
          if (($u === Zu || !$u) && clearTimeout) return ($u = clearTimeout), clearTimeout(r)
          try {
            $u(r)
          } catch (e) {
            try {
              return $u.call(null, r)
            } catch (e) {
              return $u.call(this, r)
            }
          }
        })(r)
    }
  }
  function eo(r, e) {
    ;(this.fun = r), (this.array = e)
  }
  eo.prototype.run = function() {
    this.fun.apply(null, this.array)
  }
  function to() {}
  var no = to,
    uo = to,
    oo = to,
    ao = to,
    io = to,
    co = to,
    so = to
  var lo = Hu.performance || {},
    fo =
      lo.now ||
      lo.mozNow ||
      lo.msNow ||
      lo.oNow ||
      lo.webkitNow ||
      function() {
        return new Date().getTime()
      }
  var po = new Date()
  var Do = {
      nextTick: function(r) {
        var e = new Array(arguments.length - 1)
        if (arguments.length > 1) for (var t = 1; t < arguments.length; t++) e[t - 1] = arguments[t]
        Qu.push(new eo(r, e)), 1 !== Qu.length || Wu || Yu(ro)
      },
      title: 'browser',
      browser: !0,
      env: {},
      argv: [],
      version: '',
      versions: {},
      on: no,
      addListener: uo,
      once: oo,
      off: ao,
      removeListener: io,
      removeAllListeners: co,
      emit: so,
      binding: function(r) {
        throw new Error('process.binding is not supported')
      },
      cwd: function() {
        return '/'
      },
      chdir: function(r) {
        throw new Error('process.chdir is not supported')
      },
      umask: function() {
        return 0
      },
      hrtime: function(r) {
        var e = 0.001 * fo.call(lo),
          t = Math.floor(e),
          n = Math.floor((e % 1) * 1e9)
        return r && ((t -= r[0]), (n -= r[1]) < 0 && (t--, (n += 1e9))), [t, n]
      },
      platform: 'browser',
      release: {},
      config: {},
      uptime: function() {
        return (new Date() - po) / 1e3
      }
    },
    ho = {},
    go = Object.freeze({ default: ho }),
    mo = (go && ho) || go
  var bo = function(r, e) {
      if ('string' != typeof r) return r
      if (0 === r.length) return r
      var t = mo.basename(r, mo.extname(r)) + e
      return mo.join(mo.dirname(r), t)
    },
    vo = {}.hasOwnProperty,
    Eo = function(e) {
      if (!e || 'object' !== r(e)) return null
      if (vo.call(e, 'position') || vo.call(e, 'type')) return yo(e.position)
      if (vo.call(e, 'start') || vo.call(e, 'end')) return yo(e)
      if (vo.call(e, 'line') || vo.call(e, 'column')) return wo(e)
      return null
    }
  function wo(e) {
    return (e && 'object' === r(e)) || (e = {}), Ao(e.line) + ':' + Ao(e.column)
  }
  function yo(e) {
    return (e && 'object' === r(e)) || (e = {}), wo(e.start) + '-' + wo(e.end)
  }
  function Ao(r) {
    return r && 'number' == typeof r ? r : 1
  }
  var Co = function(r) {
    return (
      null != r &&
      (qo(r) ||
        (function(r) {
          return (
            'function' == typeof r.readFloatLE && 'function' == typeof r.slice && qo(r.slice(0, 0)))
        })(r) ||
        !!r._isBuffer))
  }
  function qo(r) {
    return (
      !!r.constructor && 'function' == typeof r.constructor.isBuffer && r.constructor.isBuffer(r))
  }
  var Fo = So,
    ko = {}.hasOwnProperty,
    xo = So.prototype
  ;(xo.toString = function(r) {
    var e = this.contents || ''
    return Co(e) ? e.toString(r) : String(e)
  }),
    (xo.message = Bo),
    (xo.info = function() {
      var r = this.message.apply(this, arguments)
      return (r.fatal = null), r
    }),
    (xo.fail = function() {
      var r = this.message.apply(this, arguments)
      throw ((r.fatal = !0), r)
    }),
    (xo.warn = Bo)
  var Lo = ['history', 'path', 'basename', 'stem', 'extname', 'dirname']
  function So(r) {
    var e, t, n
    if (r) {
      if ('string' == typeof r || Co(r)) r = { contents: r }
      else if ('message' in r && 'messages' in r) return r
    } else r = {}
    if (!(this instanceof So)) return new So(r)
    for (
      this.data = {},
        this.messages = [],
        this.history = [],
        this.cwd = Do.cwd(),
        t = -1,
        n = Lo.length;
      ++t < n;

    )
      (e = Lo[t]), ko.call(r, e) && (this[e] = r[e])
    for (e in r) -1 === Lo.indexOf(e) && (this[e] = r[e])
  }
  function Bo(r, e, t) {
    var n,
      u,
      o = this.path,
      a = Eo(e) || '1:1'
    return (
      (n = { start: { line: null, column: null }, end: { line: null, column: null } }),
      e && e.position && (e = e.position),
      e && (e.start ? ((n = e), (e = e.start)) : (n.start = e)),
      ((u = new No(r.message || r)).name = (o ? o + ':' : '') + a),
      (u.file = o || ''),
      (u.reason = r.message || r),
      (u.line = e ? e.line : null),
      (u.column = e ? e.column : null),
      (u.location = n),
      (u.ruleId = t || null),
      (u.source = null),
      (u.fatal = !1),
      r.stack && (u.stack = r.stack),
      this.messages.push(u),
      u
    )
  }
  function To() {}
  function No(r) {
    this.message = r
  }
  function Ro(r, e) {
    if (-1 !== r.indexOf(mo.sep))
      throw new Error('`' + e + '` cannot be a path: did not expect `' + mo.sep + '`')
  }
  function Oo(r, e) {
    if (!r) throw new Error('`' + e + '` cannot be empty')
  }
  function Po(r, e) {
    if (!r) throw new Error('Setting `' + e + '` requires `path` to be set too')
  }
  Object.defineProperty(xo, 'path', {
    get: function() {
      return this.history[this.history.length - 1]
    },
    set: function(r) {
      Oo(r, 'path'), r !== this.path && this.history.push(r)
    }
  }),
    Object.defineProperty(xo, 'dirname', {
      get: function() {
        return 'string' == typeof this.path ? mo.dirname(this.path) : void 0
      },
      set: function(r) {
        Po(this.path, 'dirname'), (this.path = mo.join(r || '', this.basename))
      }
    }),
    Object.defineProperty(xo, 'basename', {
      get: function() {
        return 'string' == typeof this.path ? mo.basename(this.path) : void 0
      },
      set: function(r) {
        Oo(r, 'basename'), Ro(r, 'basename'), (this.path = mo.join(this.dirname || '', r))
      }
    }),
    Object.defineProperty(xo, 'extname', {
      get: function() {
        return 'string' == typeof this.path ? mo.extname(this.path) : void 0
      },
      set: function(r) {
        var e = r || ''
        if ((Ro(e, 'extname'), Po(this.path, 'extname'), e)) {
          if ('.' !== e.charAt(0)) throw new Error('`extname` must start with `.`')
          if (-1 !== e.indexOf('.', 1)) throw new Error('`extname` cannot contain multiple dots')
        }
        this.path = bo(this.path, e)
      }
    }),
    Object.defineProperty(xo, 'stem', {
      get: function() {
        return 'string' == typeof this.path ? mo.basename(this.path, this.extname) : void 0
      },
      set: function(r) {
        Oo(r, 'stem'),
          Ro(r, 'stem'),
          (this.path = mo.join(this.dirname || '', r + (this.extname || '')))
      }
    }),
    (To.prototype = Error.prototype),
    (No.prototype = new To()),
    ((xo = No.prototype).file = ''),
    (xo.name = ''),
    (xo.reason = ''),
    (xo.message = ''),
    (xo.stack = ''),
    (xo.fatal = null),
    (xo.column = null),
    (xo.line = null)
  var Uo = function() {
      var r = [],
        e = {}
      return (
        (e.run = function() {
          var e = -1,
            t = Io.call(arguments, 0, -1),
            n = arguments[arguments.length - 1]
          if ('function' != typeof n)
            throw new Error('Expected function as last argument, not ' + n)
          ;(function u(o) {
            var a = r[++e],
              i = Io.call(arguments, 0),
              c = i.slice(1),
              s = t.length,
              l = -1
            if (o) n(o)
            else {
              for (; ++l < s; ) (null !== c[l] && void 0 !== c[l]) || (c[l] = t[l])
              ;(t = c),
                a
                  ? (function(r, e) {
                      var t
                      return function() {
                        var e,
                          o = Io.call(arguments, 0),
                          a = r.length > o.length
                        a && o.push(n)
                        try {
                          e = r.apply(null, o)
                        } catch (r) {
                          if (a && t) throw r
                          return n(r)
                        }
                        a ||
                          (e && 'function' == typeof e.then
                            ? e.then(u, n)
                            : e instanceof Error
                              ? n(e)
                              : u(e))
                      }
                      function n() {
                        t || ((t = !0), e.apply(null, arguments))
                      }
                      function u(r) {
                        n(null, r)
                      }
                    })(a, u).apply(null, t)
                  : n.apply(null, [null].concat(t))
            }
          }.apply(null, [null].concat(t)))
        }),
        (e.use = function(t) {
          if ('function' != typeof t) throw new Error('Expected `fn` to be a function, not ' + t)
          return r.push(t), e
        }),
        e
      )
    },
    Io = [].slice
  var Vo = Object.prototype.toString,
    jo = function(r) {
      return '[object String]' === Vo.call(r)
    }
  var zo = function(r) {
      return '[object Function]' === Object.prototype.toString.call(r)
    },
    Go = Object.prototype.toString,
    Ho = function(r) {
      var e
      return (
        '[object Object]' === Go.call(r) &&
        (null === (e = Object.getPrototypeOf(r)) || e === Object.getPrototypeOf({})))
    },
    Mo = (function e() {
      var t = []
      var n = Uo()
      var u = {}
      var o = !1
      var a = -1
      i.data = function(r, e) {
        if (jo(r))
          return 2 === arguments.length
            ? (Wo('data', o), (u[r] = e), i)
            : (_o.call(u, r) && u[r]) || null
        if (r) return Wo('data', o), (u = r), i
        return u
      }
      i.freeze = c
      i.attachers = t
      i.use = function(e) {
        var n
        if ((Wo('use', o), null === e || void 0 === e));
        else if (zo(e)) l.apply(null, arguments)
        else {
          if ('object' !== r(e)) throw new Error('Expected usable value, not `' + e + '`')
          'length' in e ? s(e) : a(e)
        }
        n && (u.settings = zu(u.settings || {}, n))
        return i
        function a(r) {
          s(r.plugins), r.settings && (n = zu(n || {}, r.settings))
        }
        function c(e) {
          if (zo(e)) l(e)
          else {
            if ('object' !== r(e)) throw new Error('Expected usable value, not `' + e + '`')
            'length' in e ? l.apply(null, e) : a(e)
          }
        }
        function s(e) {
          var t, n
          if (null === e || void 0 === e);
          else {
            if (!('object' === r(e) && 'length' in e))
              throw new Error('Expected a list of plugins, not `' + e + '`')
            for (t = e.length, n = -1; ++n < t; ) c(e[n])
          }
        }
        function l(r, e) {
          var n = (function(r) {
            var e,
              n = t.length,
              u = -1
            for (; ++u < n; ) if ((e = t[u])[0] === r) return e
          })(r)
          n ? (Ho(n[1]) && Ho(e) && (e = zu(n[1], e)), (n[1] = e)) : t.push(Zo.call(arguments))
        }
      }
      i.parse = function(r) {
        var e,
          t = Fo(r)
        if ((c(), Jo('parse', (e = i.Parser)), Yo(e))) return new e(String(t), t).parse()
        return e(String(t), t)
      }
      i.stringify = function(r, e) {
        var t,
          n = Fo(e)
        if ((c(), Qo('stringify', (t = i.Compiler)), Ko(r), Yo(t))) return new t(r, n).compile()
        return t(r, n)
      }
      i.run = s
      i.runSync = function(r, e) {
        var t,
          n = !1
        return (
          s(r, e, function(r, e) {
            ;(n = !0), Gu(r), (t = e)
          }),
          Xo('runSync', 'run', n),
          t
        )
      }
      i.process = l
      i.processSync = function(r) {
        var e,
          t = !1
        return (
          c(),
          Jo('processSync', i.Parser),
          Qo('processSync', i.Compiler),
          l((e = Fo(r)), function(r) {
            ;(t = !0), Gu(r)
          }),
          Xo('processSync', 'process', t),
          e
        )
      }
      return i
      function i() {
        for (var r = e(), n = t.length, o = -1; ++o < n; ) r.use.apply(null, t[o])
        return r.data(zu(!0, {}, u)), r
      }
      function c() {
        var r, e, u, c
        if (o) return i
        for (; ++a < t.length; )
          (r = t[a]),
            (e = r[0]),
            (u = r[1]),
            (c = null),
            !1 !== u &&
              (!0 === u && (r[1] = void 0), (c = e.apply(i, r.slice(1))), zo(c) && n.use(c))
        return (o = !0), (a = 1 / 0), i
      }
      function s(r, e, t) {
        if ((Ko(r), c(), !t && zo(e) && ((t = e), (e = null)), !t)) return new Promise(u)
        function u(u, o) {
          n.run(r, Fo(e), function(e, n, a) {
            ;(n = n || r), e ? o(e) : u ? u(n) : t(null, n, a)
          })
        }
        u(null, t)
      }
      function l(r, e) {
        if ((c(), Jo('process', i.Parser), Qo('process', i.Compiler), !e)) return new Promise(t)
        function t(t, n) {
          var u = Fo(r)
          $o.run(i, { file: u }, function(r) {
            r ? n(r) : t ? t(u) : e(null, u)
          })
        }
        t(null, e)
      }
    })().freeze(),
    Zo = [].slice,
    _o = {}.hasOwnProperty,
    $o = Uo()
      .use(function(r, e) {
        e.tree = r.parse(e.file)
      })
      .use(function(r, e, t) {
        r.run(e.tree, e.file, function(r, n, u) {
          r ? t(r) : ((e.tree = n), (e.file = u), t())
        })
      })
      .use(function(r, e) {
        e.file.contents = r.stringify(e.tree, e.file)
      })
  function Yo(r) {
    return (
      zo(r) &&
      (function(r) {
        var e
        for (e in r) return !0
        return !1
      })(r.prototype))
  }
  function Jo(r, e) {
    if (!zo(e)) throw new Error('Cannot `' + r + '` without `Parser`')
  }
  function Qo(r, e) {
    if (!zo(e)) throw new Error('Cannot `' + r + '` without `Compiler`')
  }
  function Wo(r, e) {
    if (e)
      throw new Error(
        'Cannot invoke `' +
          r +
          '` on a frozen processor.\nCreate a new processor first, by invoking it: use `processor()` instead of `processor`.'
      )
  }
  function Ko(r) {
    if (!r || !jo(r.type)) throw new Error('Expected node, got `' + r + '`')
  }
  function Xo(r, e, t) {
    if (!t) throw new Error('`' + r + '` finished async. Use `' + e + '` instead')
  }
  var ra = /[|\\{}()[\]^$+*?.]/g,
    ea = function(r) {
      if ('string' != typeof r) throw new TypeError('Expected a string')
      return r.replace(ra, '\\$&')
    },
    ta = { '---': 'yaml', '+++': 'toml' }
  var na = function(r) {
      var e = Object.keys(ta)
          .map(ea)
          .join('|'),
        t = r.match(new RegExp('^('.concat(e, ')\\n(?:([\\s\\S]*?)\\n)?\\1(\\n|$)')))
      if (null === t) return { frontMatter: null, content: r }
      var n = t[0].trimRight(),
        u = t[1],
        o = t[2]
      return { frontMatter: { type: ta[u], value: o, raw: n }, content: r.slice(n.length) }
    },
    ua = o(function(r) {
      var e = ['format', 'prettier']
      function t(r) {
        var t = '@('.concat(e.join('|'), ')'),
          n = new RegExp(
            [
              '\x3c!--\\s*'.concat(t, '\\s*--\x3e'),
              '\x3c!--.*\n[\\s\\S]*(^|\n)[^\\S\n]*'.concat(t, '[^\\S\n]*($|\n)[\\s\\S]*\n.*--\x3e')
            ].join('|'),
            'm'
          ),
          u = r.match(n)
        return u && 0 === u.index
      }
      r.exports = {
        startWithPragma: t,
        hasPragma: function(r) {
          return t(na(r).content.trimLeft())
        },
        insertPragma: function(r) {
          var t = na(r),
            n = '\x3c!-- @'.concat(e[0], ' --\x3e')
          return t.frontMatter
            ? ''
                .concat(t.frontMatter.raw, '\n\n')
                .concat(n, '\n\n')
                .concat(t.content)
            : ''.concat(n, '\n\n').concat(t.content)
        }
      }
    }),
    oa = o(function(r) {
      r.exports = function() {
        var r = [
          '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[a-zA-Z\\d]*)*)?\\u0007)',
          '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))'
        ].join('|')
        return new RegExp(r, 'g')
      }
    }),
    aa = o(function(r) {
      r.exports = function(r) {
        return (
          !Number.isNaN(r) &&
          (r >= 4352 &&
            (r <= 4447 ||
              9001 === r ||
              9002 === r ||
              (11904 <= r && r <= 12871 && 12351 !== r) ||
              (12880 <= r && r <= 19903) ||
              (19968 <= r && r <= 42182) ||
              (43360 <= r && r <= 43388) ||
              (44032 <= r && r <= 55203) ||
              (63744 <= r && r <= 64255) ||
              (65040 <= r && r <= 65049) ||
              (65072 <= r && r <= 65131) ||
              (65281 <= r && r <= 65376) ||
              (65504 <= r && r <= 65510) ||
              (110592 <= r && r <= 110593) ||
              (127488 <= r && r <= 127569) ||
              (131072 <= r && r <= 262141))))
      }
    }),
    ia = o(function(r) {
      r.exports = function(r) {
        if ('string' != typeof r || 0 === r.length) return 0
        var e
        r = 'string' == typeof (e = r) ? e.replace(oa(), '') : e
        for (var t = 0, n = 0; n < r.length; n++) {
          var u = r.codePointAt(n)
          u <= 31 ||
            (u >= 127 && u <= 159) ||
            ((u >= 768 && u <= 879) || (u > 65535 && n++, (t += aa(u) ? 2 : 1)))
        }
        return t
      }
    }),
    ca = [
      [12288, 12351],
      [44032, 55215],
      [65040, 65055],
      [65072, 65135],
      [65280, 65376],
      [65504, 65519]
    ],
    sa = [
      [4352, 4607],
      [11904, 12255],
      [12352, 12687],
      [12800, 19903],
      [19968, 40959],
      [43360, 43391],
      [63744, 64255]
    ]
  function la() {
    return fa(sa.concat(ca))
  }
  function fa(r) {
    return new RegExp(
      '[' +
        r.map(pa).reduce(function(r, e) {
          return r + e
        }) +
        ']',
      'g'
    )
  }
  function pa(r) {
    return Da(r[0]) + '-' + Da(r[1])
  }
  function Da(r) {
    return '\\u' + r.toString(16)
  }
  !(function(r) {
    ;(r.punctuations = function() {
      return fa(ca)
    }),
      (r.characters = function() {
        return fa(sa)
      })
  })(la || (la = {}))
  var ha = la,
    da = o(function(r, e) {
      ;(e.__esModule = !0),
        (e.get_data = function() {
          return {
            Pc: [
              [95, 95],
              [8255, 8256],
              [8276, 8276],
              [65075, 65076],
              [65101, 65103],
              [65343, 65343]
            ],
            Pe: [
              [41, 41],
              [93, 93],
              [125, 125],
              [3899, 3899],
              [3901, 3901],
              [5788, 5788],
              [8262, 8262],
              [8318, 8318],
              [8334, 8334],
              [8969, 8969],
              [8971, 8971],
              [9002, 9002],
              [10089, 10089],
              [10091, 10091],
              [10093, 10093],
              [10095, 10095],
              [10097, 10097],
              [10099, 10099],
              [10101, 10101],
              [10182, 10182],
              [10215, 10215],
              [10217, 10217],
              [10219, 10219],
              [10221, 10221],
              [10223, 10223],
              [10628, 10628],
              [10630, 10630],
              [10632, 10632],
              [10634, 10634],
              [10636, 10636],
              [10638, 10638],
              [10640, 10640],
              [10642, 10642],
              [10644, 10644],
              [10646, 10646],
              [10648, 10648],
              [10713, 10713],
              [10715, 10715],
              [10749, 10749],
              [11811, 11811],
              [11813, 11813],
              [11815, 11815],
              [11817, 11817],
              [12297, 12297],
              [12299, 12299],
              [12301, 12301],
              [12303, 12303],
              [12305, 12305],
              [12309, 12309],
              [12311, 12311],
              [12313, 12313],
              [12315, 12315],
              [12318, 12319],
              [64830, 64830],
              [65048, 65048],
              [65078, 65078],
              [65080, 65080],
              [65082, 65082],
              [65084, 65084],
              [65086, 65086],
              [65088, 65088],
              [65090, 65090],
              [65092, 65092],
              [65096, 65096],
              [65114, 65114],
              [65116, 65116],
              [65118, 65118],
              [65289, 65289],
              [65341, 65341],
              [65373, 65373],
              [65376, 65376],
              [65379, 65379]
            ],
            Ps: [
              [40, 40],
              [91, 91],
              [123, 123],
              [3898, 3898],
              [3900, 3900],
              [5787, 5787],
              [8218, 8218],
              [8222, 8222],
              [8261, 8261],
              [8317, 8317],
              [8333, 8333],
              [8968, 8968],
              [8970, 8970],
              [9001, 9001],
              [10088, 10088],
              [10090, 10090],
              [10092, 10092],
              [10094, 10094],
              [10096, 10096],
              [10098, 10098],
              [10100, 10100],
              [10181, 10181],
              [10214, 10214],
              [10216, 10216],
              [10218, 10218],
              [10220, 10220],
              [10222, 10222],
              [10627, 10627],
              [10629, 10629],
              [10631, 10631],
              [10633, 10633],
              [10635, 10635],
              [10637, 10637],
              [10639, 10639],
              [10641, 10641],
              [10643, 10643],
              [10645, 10645],
              [10647, 10647],
              [10712, 10712],
              [10714, 10714],
              [10748, 10748],
              [11810, 11810],
              [11812, 11812],
              [11814, 11814],
              [11816, 11816],
              [11842, 11842],
              [12296, 12296],
              [12298, 12298],
              [12300, 12300],
              [12302, 12302],
              [12304, 12304],
              [12308, 12308],
              [12310, 12310],
              [12312, 12312],
              [12314, 12314],
              [12317, 12317],
              [64831, 64831],
              [65047, 65047],
              [65077, 65077],
              [65079, 65079],
              [65081, 65081],
              [65083, 65083],
              [65085, 65085],
              [65087, 65087],
              [65089, 65089],
              [65091, 65091],
              [65095, 65095],
              [65113, 65113],
              [65115, 65115],
              [65117, 65117],
              [65288, 65288],
              [65339, 65339],
              [65371, 65371],
              [65375, 65375],
              [65378, 65378]
            ],
            Lm: [
              [688, 705],
              [710, 721],
              [736, 740],
              [748, 748],
              [750, 750],
              [884, 884],
              [890, 890],
              [1369, 1369],
              [1600, 1600],
              [1765, 1766],
              [2036, 2037],
              [2042, 2042],
              [2074, 2074],
              [2084, 2084],
              [2088, 2088],
              [2417, 2417],
              [3654, 3654],
              [3782, 3782],
              [4348, 4348],
              [6103, 6103],
              [6211, 6211],
              [6823, 6823],
              [7288, 7293],
              [7468, 7530],
              [7544, 7544],
              [7579, 7615],
              [8305, 8305],
              [8319, 8319],
              [8336, 8348],
              [11388, 11389],
              [11631, 11631],
              [11823, 11823],
              [12293, 12293],
              [12337, 12341],
              [12347, 12347],
              [12445, 12446],
              [12540, 12542],
              [40981, 40981],
              [42232, 42237],
              [42508, 42508],
              [42623, 42623],
              [42652, 42653],
              [42775, 42783],
              [42864, 42864],
              [42888, 42888],
              [43e3, 43001],
              [43471, 43471],
              [43494, 43494],
              [43632, 43632],
              [43741, 43741],
              [43763, 43764],
              [43868, 43871],
              [65392, 65392],
              [65438, 65439]
            ],
            Mc: [
              [2307, 2307],
              [2363, 2363],
              [2366, 2368],
              [2377, 2380],
              [2382, 2383],
              [2434, 2435],
              [2494, 2496],
              [2503, 2504],
              [2507, 2508],
              [2519, 2519],
              [2563, 2563],
              [2622, 2624],
              [2691, 2691],
              [2750, 2752],
              [2761, 2761],
              [2763, 2764],
              [2818, 2819],
              [2878, 2878],
              [2880, 2880],
              [2887, 2888],
              [2891, 2892],
              [2903, 2903],
              [3006, 3007],
              [3009, 3010],
              [3014, 3016],
              [3018, 3020],
              [3031, 3031],
              [3073, 3075],
              [3137, 3140],
              [3202, 3203],
              [3262, 3262],
              [3264, 3268],
              [3271, 3272],
              [3274, 3275],
              [3285, 3286],
              [3330, 3331],
              [3390, 3392],
              [3398, 3400],
              [3402, 3404],
              [3415, 3415],
              [3458, 3459],
              [3535, 3537],
              [3544, 3551],
              [3570, 3571],
              [3902, 3903],
              [3967, 3967],
              [4139, 4140],
              [4145, 4145],
              [4152, 4152],
              [4155, 4156],
              [4182, 4183],
              [4194, 4196],
              [4199, 4205],
              [4227, 4228],
              [4231, 4236],
              [4239, 4239],
              [4250, 4252],
              [6070, 6070],
              [6078, 6085],
              [6087, 6088],
              [6435, 6438],
              [6441, 6443],
              [6448, 6449],
              [6451, 6456],
              [6681, 6682],
              [6741, 6741],
              [6743, 6743],
              [6753, 6753],
              [6755, 6756],
              [6765, 6770],
              [6916, 6916],
              [6965, 6965],
              [6971, 6971],
              [6973, 6977],
              [6979, 6980],
              [7042, 7042],
              [7073, 7073],
              [7078, 7079],
              [7082, 7082],
              [7143, 7143],
              [7146, 7148],
              [7150, 7150],
              [7154, 7155],
              [7204, 7211],
              [7220, 7221],
              [7393, 7393],
              [7410, 7411],
              [7415, 7415],
              [12334, 12335],
              [43043, 43044],
              [43047, 43047],
              [43136, 43137],
              [43188, 43203],
              [43346, 43347],
              [43395, 43395],
              [43444, 43445],
              [43450, 43451],
              [43453, 43456],
              [43567, 43568],
              [43571, 43572],
              [43597, 43597],
              [43643, 43643],
              [43645, 43645],
              [43755, 43755],
              [43758, 43759],
              [43765, 43765],
              [44003, 44004],
              [44006, 44007],
              [44009, 44010],
              [44012, 44012]
            ],
            Zp: [[8233, 8233]],
            Sc: [
              [36, 36],
              [162, 165],
              [1423, 1423],
              [1547, 1547],
              [2546, 2547],
              [2555, 2555],
              [2801, 2801],
              [3065, 3065],
              [3647, 3647],
              [6107, 6107],
              [8352, 8383],
              [43064, 43064],
              [65020, 65020],
              [65129, 65129],
              [65284, 65284],
              [65504, 65505],
              [65509, 65510]
            ],
            Me: [[1160, 1161], [6846, 6846], [8413, 8416], [8418, 8420], [42608, 42610]],
            Sk: [
              [94, 94],
              [96, 96],
              [168, 168],
              [175, 175],
              [180, 180],
              [184, 184],
              [706, 709],
              [722, 735],
              [741, 747],
              [749, 749],
              [751, 767],
              [885, 885],
              [900, 901],
              [8125, 8125],
              [8127, 8129],
              [8141, 8143],
              [8157, 8159],
              [8173, 8175],
              [8189, 8190],
              [12443, 12444],
              [42752, 42774],
              [42784, 42785],
              [42889, 42890],
              [43867, 43867],
              [64434, 64449],
              [65342, 65342],
              [65344, 65344],
              [65507, 65507]
            ],
            Cs: [[55296, 55296], [56191, 56192], [56319, 56320], [57343, 57343]],
            Nl: [
              [5870, 5872],
              [8544, 8578],
              [8581, 8584],
              [12295, 12295],
              [12321, 12329],
              [12344, 12346],
              [42726, 42735]
            ],
            So: [
              [166, 166],
              [169, 169],
              [174, 174],
              [176, 176],
              [1154, 1154],
              [1421, 1422],
              [1550, 1551],
              [1758, 1758],
              [1769, 1769],
              [1789, 1790],
              [2038, 2038],
              [2554, 2554],
              [2928, 2928],
              [3059, 3064],
              [3066, 3066],
              [3199, 3199],
              [3407, 3407],
              [3449, 3449],
              [3841, 3843],
              [3859, 3859],
              [3861, 3863],
              [3866, 3871],
              [3892, 3892],
              [3894, 3894],
              [3896, 3896],
              [4030, 4037],
              [4039, 4044],
              [4046, 4047],
              [4053, 4056],
              [4254, 4255],
              [5008, 5017],
              [6464, 6464],
              [6622, 6655],
              [7009, 7018],
              [7028, 7036],
              [8448, 8449],
              [8451, 8454],
              [8456, 8457],
              [8468, 8468],
              [8470, 8471],
              [8478, 8483],
              [8485, 8485],
              [8487, 8487],
              [8489, 8489],
              [8494, 8494],
              [8506, 8507],
              [8522, 8522],
              [8524, 8525],
              [8527, 8527],
              [8586, 8587],
              [8597, 8601],
              [8604, 8607],
              [8609, 8610],
              [8612, 8613],
              [8615, 8621],
              [8623, 8653],
              [8656, 8657],
              [8659, 8659],
              [8661, 8691],
              [8960, 8967],
              [8972, 8991],
              [8994, 9e3],
              [9003, 9083],
              [9085, 9114],
              [9140, 9179],
              [9186, 9254],
              [9280, 9290],
              [9372, 9449],
              [9472, 9654],
              [9656, 9664],
              [9666, 9719],
              [9728, 9838],
              [9840, 10087],
              [10132, 10175],
              [10240, 10495],
              [11008, 11055],
              [11077, 11078],
              [11085, 11123],
              [11126, 11157],
              [11160, 11193],
              [11197, 11208],
              [11210, 11218],
              [11244, 11247],
              [11493, 11498],
              [11904, 11929],
              [11931, 12019],
              [12032, 12245],
              [12272, 12283],
              [12292, 12292],
              [12306, 12307],
              [12320, 12320],
              [12342, 12343],
              [12350, 12351],
              [12688, 12689],
              [12694, 12703],
              [12736, 12771],
              [12800, 12830],
              [12842, 12871],
              [12880, 12880],
              [12896, 12927],
              [12938, 12976],
              [12992, 13054],
              [13056, 13311],
              [19904, 19967],
              [42128, 42182],
              [43048, 43051],
              [43062, 43063],
              [43065, 43065],
              [43639, 43641],
              [65021, 65021],
              [65508, 65508],
              [65512, 65512],
              [65517, 65518],
              [65532, 65533]
            ],
            Lt: [
              [453, 453],
              [456, 456],
              [459, 459],
              [498, 498],
              [8072, 8079],
              [8088, 8095],
              [8104, 8111],
              [8124, 8124],
              [8140, 8140],
              [8188, 8188]
            ],
            Zl: [[8232, 8232]],
            Lo: [
              [170, 170],
              [186, 186],
              [443, 443],
              [448, 451],
              [660, 660],
              [1488, 1514],
              [1520, 1522],
              [1568, 1599],
              [1601, 1610],
              [1646, 1647],
              [1649, 1747],
              [1749, 1749],
              [1774, 1775],
              [1786, 1788],
              [1791, 1791],
              [1808, 1808],
              [1810, 1839],
              [1869, 1957],
              [1969, 1969],
              [1994, 2026],
              [2048, 2069],
              [2112, 2136],
              [2144, 2154],
              [2208, 2228],
              [2230, 2237],
              [2308, 2361],
              [2365, 2365],
              [2384, 2384],
              [2392, 2401],
              [2418, 2432],
              [2437, 2444],
              [2447, 2448],
              [2451, 2472],
              [2474, 2480],
              [2482, 2482],
              [2486, 2489],
              [2493, 2493],
              [2510, 2510],
              [2524, 2525],
              [2527, 2529],
              [2544, 2545],
              [2556, 2556],
              [2565, 2570],
              [2575, 2576],
              [2579, 2600],
              [2602, 2608],
              [2610, 2611],
              [2613, 2614],
              [2616, 2617],
              [2649, 2652],
              [2654, 2654],
              [2674, 2676],
              [2693, 2701],
              [2703, 2705],
              [2707, 2728],
              [2730, 2736],
              [2738, 2739],
              [2741, 2745],
              [2749, 2749],
              [2768, 2768],
              [2784, 2785],
              [2809, 2809],
              [2821, 2828],
              [2831, 2832],
              [2835, 2856],
              [2858, 2864],
              [2866, 2867],
              [2869, 2873],
              [2877, 2877],
              [2908, 2909],
              [2911, 2913],
              [2929, 2929],
              [2947, 2947],
              [2949, 2954],
              [2958, 2960],
              [2962, 2965],
              [2969, 2970],
              [2972, 2972],
              [2974, 2975],
              [2979, 2980],
              [2984, 2986],
              [2990, 3001],
              [3024, 3024],
              [3077, 3084],
              [3086, 3088],
              [3090, 3112],
              [3114, 3129],
              [3133, 3133],
              [3160, 3162],
              [3168, 3169],
              [3200, 3200],
              [3205, 3212],
              [3214, 3216],
              [3218, 3240],
              [3242, 3251],
              [3253, 3257],
              [3261, 3261],
              [3294, 3294],
              [3296, 3297],
              [3313, 3314],
              [3333, 3340],
              [3342, 3344],
              [3346, 3386],
              [3389, 3389],
              [3406, 3406],
              [3412, 3414],
              [3423, 3425],
              [3450, 3455],
              [3461, 3478],
              [3482, 3505],
              [3507, 3515],
              [3517, 3517],
              [3520, 3526],
              [3585, 3632],
              [3634, 3635],
              [3648, 3653],
              [3713, 3714],
              [3716, 3716],
              [3719, 3720],
              [3722, 3722],
              [3725, 3725],
              [3732, 3735],
              [3737, 3743],
              [3745, 3747],
              [3749, 3749],
              [3751, 3751],
              [3754, 3755],
              [3757, 3760],
              [3762, 3763],
              [3773, 3773],
              [3776, 3780],
              [3804, 3807],
              [3840, 3840],
              [3904, 3911],
              [3913, 3948],
              [3976, 3980],
              [4096, 4138],
              [4159, 4159],
              [4176, 4181],
              [4186, 4189],
              [4193, 4193],
              [4197, 4198],
              [4206, 4208],
              [4213, 4225],
              [4238, 4238],
              [4304, 4346],
              [4349, 4680],
              [4682, 4685],
              [4688, 4694],
              [4696, 4696],
              [4698, 4701],
              [4704, 4744],
              [4746, 4749],
              [4752, 4784],
              [4786, 4789],
              [4792, 4798],
              [4800, 4800],
              [4802, 4805],
              [4808, 4822],
              [4824, 4880],
              [4882, 4885],
              [4888, 4954],
              [4992, 5007],
              [5121, 5740],
              [5743, 5759],
              [5761, 5786],
              [5792, 5866],
              [5873, 5880],
              [5888, 5900],
              [5902, 5905],
              [5920, 5937],
              [5952, 5969],
              [5984, 5996],
              [5998, 6e3],
              [6016, 6067],
              [6108, 6108],
              [6176, 6210],
              [6212, 6263],
              [6272, 6276],
              [6279, 6312],
              [6314, 6314],
              [6320, 6389],
              [6400, 6430],
              [6480, 6509],
              [6512, 6516],
              [6528, 6571],
              [6576, 6601],
              [6656, 6678],
              [6688, 6740],
              [6917, 6963],
              [6981, 6987],
              [7043, 7072],
              [7086, 7087],
              [7098, 7141],
              [7168, 7203],
              [7245, 7247],
              [7258, 7287],
              [7401, 7404],
              [7406, 7409],
              [7413, 7414],
              [8501, 8504],
              [11568, 11623],
              [11648, 11670],
              [11680, 11686],
              [11688, 11694],
              [11696, 11702],
              [11704, 11710],
              [11712, 11718],
              [11720, 11726],
              [11728, 11734],
              [11736, 11742],
              [12294, 12294],
              [12348, 12348],
              [12353, 12438],
              [12447, 12447],
              [12449, 12538],
              [12543, 12543],
              [12549, 12590],
              [12593, 12686],
              [12704, 12730],
              [12784, 12799],
              [13312, 13312],
              [19893, 19893],
              [19968, 19968],
              [40938, 40938],
              [40960, 40980],
              [40982, 42124],
              [42192, 42231],
              [42240, 42507],
              [42512, 42527],
              [42538, 42539],
              [42606, 42606],
              [42656, 42725],
              [42895, 42895],
              [42999, 42999],
              [43003, 43009],
              [43011, 43013],
              [43015, 43018],
              [43020, 43042],
              [43072, 43123],
              [43138, 43187],
              [43250, 43255],
              [43259, 43259],
              [43261, 43261],
              [43274, 43301],
              [43312, 43334],
              [43360, 43388],
              [43396, 43442],
              [43488, 43492],
              [43495, 43503],
              [43514, 43518],
              [43520, 43560],
              [43584, 43586],
              [43588, 43595],
              [43616, 43631],
              [43633, 43638],
              [43642, 43642],
              [43646, 43695],
              [43697, 43697],
              [43701, 43702],
              [43705, 43709],
              [43712, 43712],
              [43714, 43714],
              [43739, 43740],
              [43744, 43754],
              [43762, 43762],
              [43777, 43782],
              [43785, 43790],
              [43793, 43798],
              [43808, 43814],
              [43816, 43822],
              [43968, 44002],
              [44032, 44032],
              [55203, 55203],
              [55216, 55238],
              [55243, 55291],
              [63744, 64109],
              [64112, 64217],
              [64285, 64285],
              [64287, 64296],
              [64298, 64310],
              [64312, 64316],
              [64318, 64318],
              [64320, 64321],
              [64323, 64324],
              [64326, 64433],
              [64467, 64829],
              [64848, 64911],
              [64914, 64967],
              [65008, 65019],
              [65136, 65140],
              [65142, 65276],
              [65382, 65391],
              [65393, 65437],
              [65440, 65470],
              [65474, 65479],
              [65482, 65487],
              [65490, 65495],
              [65498, 65500]
            ],
            Mn: [
              [768, 879],
              [1155, 1159],
              [1425, 1469],
              [1471, 1471],
              [1473, 1474],
              [1476, 1477],
              [1479, 1479],
              [1552, 1562],
              [1611, 1631],
              [1648, 1648],
              [1750, 1756],
              [1759, 1764],
              [1767, 1768],
              [1770, 1773],
              [1809, 1809],
              [1840, 1866],
              [1958, 1968],
              [2027, 2035],
              [2070, 2073],
              [2075, 2083],
              [2085, 2087],
              [2089, 2093],
              [2137, 2139],
              [2260, 2273],
              [2275, 2306],
              [2362, 2362],
              [2364, 2364],
              [2369, 2376],
              [2381, 2381],
              [2385, 2391],
              [2402, 2403],
              [2433, 2433],
              [2492, 2492],
              [2497, 2500],
              [2509, 2509],
              [2530, 2531],
              [2561, 2562],
              [2620, 2620],
              [2625, 2626],
              [2631, 2632],
              [2635, 2637],
              [2641, 2641],
              [2672, 2673],
              [2677, 2677],
              [2689, 2690],
              [2748, 2748],
              [2753, 2757],
              [2759, 2760],
              [2765, 2765],
              [2786, 2787],
              [2810, 2815],
              [2817, 2817],
              [2876, 2876],
              [2879, 2879],
              [2881, 2884],
              [2893, 2893],
              [2902, 2902],
              [2914, 2915],
              [2946, 2946],
              [3008, 3008],
              [3021, 3021],
              [3072, 3072],
              [3134, 3136],
              [3142, 3144],
              [3146, 3149],
              [3157, 3158],
              [3170, 3171],
              [3201, 3201],
              [3260, 3260],
              [3263, 3263],
              [3270, 3270],
              [3276, 3277],
              [3298, 3299],
              [3328, 3329],
              [3387, 3388],
              [3393, 3396],
              [3405, 3405],
              [3426, 3427],
              [3530, 3530],
              [3538, 3540],
              [3542, 3542],
              [3633, 3633],
              [3636, 3642],
              [3655, 3662],
              [3761, 3761],
              [3764, 3769],
              [3771, 3772],
              [3784, 3789],
              [3864, 3865],
              [3893, 3893],
              [3895, 3895],
              [3897, 3897],
              [3953, 3966],
              [3968, 3972],
              [3974, 3975],
              [3981, 3991],
              [3993, 4028],
              [4038, 4038],
              [4141, 4144],
              [4146, 4151],
              [4153, 4154],
              [4157, 4158],
              [4184, 4185],
              [4190, 4192],
              [4209, 4212],
              [4226, 4226],
              [4229, 4230],
              [4237, 4237],
              [4253, 4253],
              [4957, 4959],
              [5906, 5908],
              [5938, 5940],
              [5970, 5971],
              [6002, 6003],
              [6068, 6069],
              [6071, 6077],
              [6086, 6086],
              [6089, 6099],
              [6109, 6109],
              [6155, 6157],
              [6277, 6278],
              [6313, 6313],
              [6432, 6434],
              [6439, 6440],
              [6450, 6450],
              [6457, 6459],
              [6679, 6680],
              [6683, 6683],
              [6742, 6742],
              [6744, 6750],
              [6752, 6752],
              [6754, 6754],
              [6757, 6764],
              [6771, 6780],
              [6783, 6783],
              [6832, 6845],
              [6912, 6915],
              [6964, 6964],
              [6966, 6970],
              [6972, 6972],
              [6978, 6978],
              [7019, 7027],
              [7040, 7041],
              [7074, 7077],
              [7080, 7081],
              [7083, 7085],
              [7142, 7142],
              [7144, 7145],
              [7149, 7149],
              [7151, 7153],
              [7212, 7219],
              [7222, 7223],
              [7376, 7378],
              [7380, 7392],
              [7394, 7400],
              [7405, 7405],
              [7412, 7412],
              [7416, 7417],
              [7616, 7673],
              [7675, 7679],
              [8400, 8412],
              [8417, 8417],
              [8421, 8432],
              [11503, 11505],
              [11647, 11647],
              [11744, 11775],
              [12330, 12333],
              [12441, 12442],
              [42607, 42607],
              [42612, 42621],
              [42654, 42655],
              [42736, 42737],
              [43010, 43010],
              [43014, 43014],
              [43019, 43019],
              [43045, 43046],
              [43204, 43205],
              [43232, 43249],
              [43302, 43309],
              [43335, 43345],
              [43392, 43394],
              [43443, 43443],
              [43446, 43449],
              [43452, 43452],
              [43493, 43493],
              [43561, 43566],
              [43569, 43570],
              [43573, 43574],
              [43587, 43587],
              [43596, 43596],
              [43644, 43644],
              [43696, 43696],
              [43698, 43700],
              [43703, 43704],
              [43710, 43711],
              [43713, 43713],
              [43756, 43757],
              [43766, 43766],
              [44005, 44005],
              [44008, 44008],
              [44013, 44013],
              [64286, 64286],
              [65024, 65039],
              [65056, 65071]
            ],
            Po: [
              [33, 35],
              [37, 39],
              [42, 42],
              [44, 44],
              [46, 47],
              [58, 59],
              [63, 64],
              [92, 92],
              [161, 161],
              [167, 167],
              [182, 183],
              [191, 191],
              [894, 894],
              [903, 903],
              [1370, 1375],
              [1417, 1417],
              [1472, 1472],
              [1475, 1475],
              [1478, 1478],
              [1523, 1524],
              [1545, 1546],
              [1548, 1549],
              [1563, 1563],
              [1566, 1567],
              [1642, 1645],
              [1748, 1748],
              [1792, 1805],
              [2039, 2041],
              [2096, 2110],
              [2142, 2142],
              [2404, 2405],
              [2416, 2416],
              [2557, 2557],
              [2800, 2800],
              [3572, 3572],
              [3663, 3663],
              [3674, 3675],
              [3844, 3858],
              [3860, 3860],
              [3973, 3973],
              [4048, 4052],
              [4057, 4058],
              [4170, 4175],
              [4347, 4347],
              [4960, 4968],
              [5741, 5742],
              [5867, 5869],
              [5941, 5942],
              [6100, 6102],
              [6104, 6106],
              [6144, 6149],
              [6151, 6154],
              [6468, 6469],
              [6686, 6687],
              [6816, 6822],
              [6824, 6829],
              [7002, 7008],
              [7164, 7167],
              [7227, 7231],
              [7294, 7295],
              [7360, 7367],
              [7379, 7379],
              [8214, 8215],
              [8224, 8231],
              [8240, 8248],
              [8251, 8254],
              [8257, 8259],
              [8263, 8273],
              [8275, 8275],
              [8277, 8286],
              [11513, 11516],
              [11518, 11519],
              [11632, 11632],
              [11776, 11777],
              [11782, 11784],
              [11787, 11787],
              [11790, 11798],
              [11800, 11801],
              [11803, 11803],
              [11806, 11807],
              [11818, 11822],
              [11824, 11833],
              [11836, 11839],
              [11841, 11841],
              [11843, 11849],
              [12289, 12291],
              [12349, 12349],
              [12539, 12539],
              [42238, 42239],
              [42509, 42511],
              [42611, 42611],
              [42622, 42622],
              [42738, 42743],
              [43124, 43127],
              [43214, 43215],
              [43256, 43258],
              [43260, 43260],
              [43310, 43311],
              [43359, 43359],
              [43457, 43469],
              [43486, 43487],
              [43612, 43615],
              [43742, 43743],
              [43760, 43761],
              [44011, 44011],
              [65040, 65046],
              [65049, 65049],
              [65072, 65072],
              [65093, 65094],
              [65097, 65100],
              [65104, 65106],
              [65108, 65111],
              [65119, 65121],
              [65128, 65128],
              [65130, 65131],
              [65281, 65283],
              [65285, 65287],
              [65290, 65290],
              [65292, 65292],
              [65294, 65295],
              [65306, 65307],
              [65311, 65312],
              [65340, 65340],
              [65377, 65377],
              [65380, 65381]
            ],
            Co: [[57344, 57344], [63743, 63743]],
            Sm: [
              [43, 43],
              [60, 62],
              [124, 124],
              [126, 126],
              [172, 172],
              [177, 177],
              [215, 215],
              [247, 247],
              [1014, 1014],
              [1542, 1544],
              [8260, 8260],
              [8274, 8274],
              [8314, 8316],
              [8330, 8332],
              [8472, 8472],
              [8512, 8516],
              [8523, 8523],
              [8592, 8596],
              [8602, 8603],
              [8608, 8608],
              [8611, 8611],
              [8614, 8614],
              [8622, 8622],
              [8654, 8655],
              [8658, 8658],
              [8660, 8660],
              [8692, 8959],
              [8992, 8993],
              [9084, 9084],
              [9115, 9139],
              [9180, 9185],
              [9655, 9655],
              [9665, 9665],
              [9720, 9727],
              [9839, 9839],
              [10176, 10180],
              [10183, 10213],
              [10224, 10239],
              [10496, 10626],
              [10649, 10711],
              [10716, 10747],
              [10750, 11007],
              [11056, 11076],
              [11079, 11084],
              [64297, 64297],
              [65122, 65122],
              [65124, 65126],
              [65291, 65291],
              [65308, 65310],
              [65372, 65372],
              [65374, 65374],
              [65506, 65506],
              [65513, 65516]
            ],
            Pf: [
              [187, 187],
              [8217, 8217],
              [8221, 8221],
              [8250, 8250],
              [11779, 11779],
              [11781, 11781],
              [11786, 11786],
              [11789, 11789],
              [11805, 11805],
              [11809, 11809]
            ],
            Cc: [[0, 31], [127, 159]],
            Pi: [
              [171, 171],
              [8216, 8216],
              [8219, 8220],
              [8223, 8223],
              [8249, 8249],
              [11778, 11778],
              [11780, 11780],
              [11785, 11785],
              [11788, 11788],
              [11804, 11804],
              [11808, 11808]
            ],
            Lu: [
              [65, 90],
              [192, 214],
              [216, 222],
              [256, 256],
              [258, 258],
              [260, 260],
              [262, 262],
              [264, 264],
              [266, 266],
              [268, 268],
              [270, 270],
              [272, 272],
              [274, 274],
              [276, 276],
              [278, 278],
              [280, 280],
              [282, 282],
              [284, 284],
              [286, 286],
              [288, 288],
              [290, 290],
              [292, 292],
              [294, 294],
              [296, 296],
              [298, 298],
              [300, 300],
              [302, 302],
              [304, 304],
              [306, 306],
              [308, 308],
              [310, 310],
              [313, 313],
              [315, 315],
              [317, 317],
              [319, 319],
              [321, 321],
              [323, 323],
              [325, 325],
              [327, 327],
              [330, 330],
              [332, 332],
              [334, 334],
              [336, 336],
              [338, 338],
              [340, 340],
              [342, 342],
              [344, 344],
              [346, 346],
              [348, 348],
              [350, 350],
              [352, 352],
              [354, 354],
              [356, 356],
              [358, 358],
              [360, 360],
              [362, 362],
              [364, 364],
              [366, 366],
              [368, 368],
              [370, 370],
              [372, 372],
              [374, 374],
              [376, 377],
              [379, 379],
              [381, 381],
              [385, 386],
              [388, 388],
              [390, 391],
              [393, 395],
              [398, 401],
              [403, 404],
              [406, 408],
              [412, 413],
              [415, 416],
              [418, 418],
              [420, 420],
              [422, 423],
              [425, 425],
              [428, 428],
              [430, 431],
              [433, 435],
              [437, 437],
              [439, 440],
              [444, 444],
              [452, 452],
              [455, 455],
              [458, 458],
              [461, 461],
              [463, 463],
              [465, 465],
              [467, 467],
              [469, 469],
              [471, 471],
              [473, 473],
              [475, 475],
              [478, 478],
              [480, 480],
              [482, 482],
              [484, 484],
              [486, 486],
              [488, 488],
              [490, 490],
              [492, 492],
              [494, 494],
              [497, 497],
              [500, 500],
              [502, 504],
              [506, 506],
              [508, 508],
              [510, 510],
              [512, 512],
              [514, 514],
              [516, 516],
              [518, 518],
              [520, 520],
              [522, 522],
              [524, 524],
              [526, 526],
              [528, 528],
              [530, 530],
              [532, 532],
              [534, 534],
              [536, 536],
              [538, 538],
              [540, 540],
              [542, 542],
              [544, 544],
              [546, 546],
              [548, 548],
              [550, 550],
              [552, 552],
              [554, 554],
              [556, 556],
              [558, 558],
              [560, 560],
              [562, 562],
              [570, 571],
              [573, 574],
              [577, 577],
              [579, 582],
              [584, 584],
              [586, 586],
              [588, 588],
              [590, 590],
              [880, 880],
              [882, 882],
              [886, 886],
              [895, 895],
              [902, 902],
              [904, 906],
              [908, 908],
              [910, 911],
              [913, 929],
              [931, 939],
              [975, 975],
              [978, 980],
              [984, 984],
              [986, 986],
              [988, 988],
              [990, 990],
              [992, 992],
              [994, 994],
              [996, 996],
              [998, 998],
              [1e3, 1e3],
              [1002, 1002],
              [1004, 1004],
              [1006, 1006],
              [1012, 1012],
              [1015, 1015],
              [1017, 1018],
              [1021, 1071],
              [1120, 1120],
              [1122, 1122],
              [1124, 1124],
              [1126, 1126],
              [1128, 1128],
              [1130, 1130],
              [1132, 1132],
              [1134, 1134],
              [1136, 1136],
              [1138, 1138],
              [1140, 1140],
              [1142, 1142],
              [1144, 1144],
              [1146, 1146],
              [1148, 1148],
              [1150, 1150],
              [1152, 1152],
              [1162, 1162],
              [1164, 1164],
              [1166, 1166],
              [1168, 1168],
              [1170, 1170],
              [1172, 1172],
              [1174, 1174],
              [1176, 1176],
              [1178, 1178],
              [1180, 1180],
              [1182, 1182],
              [1184, 1184],
              [1186, 1186],
              [1188, 1188],
              [1190, 1190],
              [1192, 1192],
              [1194, 1194],
              [1196, 1196],
              [1198, 1198],
              [1200, 1200],
              [1202, 1202],
              [1204, 1204],
              [1206, 1206],
              [1208, 1208],
              [1210, 1210],
              [1212, 1212],
              [1214, 1214],
              [1216, 1217],
              [1219, 1219],
              [1221, 1221],
              [1223, 1223],
              [1225, 1225],
              [1227, 1227],
              [1229, 1229],
              [1232, 1232],
              [1234, 1234],
              [1236, 1236],
              [1238, 1238],
              [1240, 1240],
              [1242, 1242],
              [1244, 1244],
              [1246, 1246],
              [1248, 1248],
              [1250, 1250],
              [1252, 1252],
              [1254, 1254],
              [1256, 1256],
              [1258, 1258],
              [1260, 1260],
              [1262, 1262],
              [1264, 1264],
              [1266, 1266],
              [1268, 1268],
              [1270, 1270],
              [1272, 1272],
              [1274, 1274],
              [1276, 1276],
              [1278, 1278],
              [1280, 1280],
              [1282, 1282],
              [1284, 1284],
              [1286, 1286],
              [1288, 1288],
              [1290, 1290],
              [1292, 1292],
              [1294, 1294],
              [1296, 1296],
              [1298, 1298],
              [1300, 1300],
              [1302, 1302],
              [1304, 1304],
              [1306, 1306],
              [1308, 1308],
              [1310, 1310],
              [1312, 1312],
              [1314, 1314],
              [1316, 1316],
              [1318, 1318],
              [1320, 1320],
              [1322, 1322],
              [1324, 1324],
              [1326, 1326],
              [1329, 1366],
              [4256, 4293],
              [4295, 4295],
              [4301, 4301],
              [5024, 5109],
              [7680, 7680],
              [7682, 7682],
              [7684, 7684],
              [7686, 7686],
              [7688, 7688],
              [7690, 7690],
              [7692, 7692],
              [7694, 7694],
              [7696, 7696],
              [7698, 7698],
              [7700, 7700],
              [7702, 7702],
              [7704, 7704],
              [7706, 7706],
              [7708, 7708],
              [7710, 7710],
              [7712, 7712],
              [7714, 7714],
              [7716, 7716],
              [7718, 7718],
              [7720, 7720],
              [7722, 7722],
              [7724, 7724],
              [7726, 7726],
              [7728, 7728],
              [7730, 7730],
              [7732, 7732],
              [7734, 7734],
              [7736, 7736],
              [7738, 7738],
              [7740, 7740],
              [7742, 7742],
              [7744, 7744],
              [7746, 7746],
              [7748, 7748],
              [7750, 7750],
              [7752, 7752],
              [7754, 7754],
              [7756, 7756],
              [7758, 7758],
              [7760, 7760],
              [7762, 7762],
              [7764, 7764],
              [7766, 7766],
              [7768, 7768],
              [7770, 7770],
              [7772, 7772],
              [7774, 7774],
              [7776, 7776],
              [7778, 7778],
              [7780, 7780],
              [7782, 7782],
              [7784, 7784],
              [7786, 7786],
              [7788, 7788],
              [7790, 7790],
              [7792, 7792],
              [7794, 7794],
              [7796, 7796],
              [7798, 7798],
              [7800, 7800],
              [7802, 7802],
              [7804, 7804],
              [7806, 7806],
              [7808, 7808],
              [7810, 7810],
              [7812, 7812],
              [7814, 7814],
              [7816, 7816],
              [7818, 7818],
              [7820, 7820],
              [7822, 7822],
              [7824, 7824],
              [7826, 7826],
              [7828, 7828],
              [7838, 7838],
              [7840, 7840],
              [7842, 7842],
              [7844, 7844],
              [7846, 7846],
              [7848, 7848],
              [7850, 7850],
              [7852, 7852],
              [7854, 7854],
              [7856, 7856],
              [7858, 7858],
              [7860, 7860],
              [7862, 7862],
              [7864, 7864],
              [7866, 7866],
              [7868, 7868],
              [7870, 7870],
              [7872, 7872],
              [7874, 7874],
              [7876, 7876],
              [7878, 7878],
              [7880, 7880],
              [7882, 7882],
              [7884, 7884],
              [7886, 7886],
              [7888, 7888],
              [7890, 7890],
              [7892, 7892],
              [7894, 7894],
              [7896, 7896],
              [7898, 7898],
              [7900, 7900],
              [7902, 7902],
              [7904, 7904],
              [7906, 7906],
              [7908, 7908],
              [7910, 7910],
              [7912, 7912],
              [7914, 7914],
              [7916, 7916],
              [7918, 7918],
              [7920, 7920],
              [7922, 7922],
              [7924, 7924],
              [7926, 7926],
              [7928, 7928],
              [7930, 7930],
              [7932, 7932],
              [7934, 7934],
              [7944, 7951],
              [7960, 7965],
              [7976, 7983],
              [7992, 7999],
              [8008, 8013],
              [8025, 8025],
              [8027, 8027],
              [8029, 8029],
              [8031, 8031],
              [8040, 8047],
              [8120, 8123],
              [8136, 8139],
              [8152, 8155],
              [8168, 8172],
              [8184, 8187],
              [8450, 8450],
              [8455, 8455],
              [8459, 8461],
              [8464, 8466],
              [8469, 8469],
              [8473, 8477],
              [8484, 8484],
              [8486, 8486],
              [8488, 8488],
              [8490, 8493],
              [8496, 8499],
              [8510, 8511],
              [8517, 8517],
              [8579, 8579],
              [11264, 11310],
              [11360, 11360],
              [11362, 11364],
              [11367, 11367],
              [11369, 11369],
              [11371, 11371],
              [11373, 11376],
              [11378, 11378],
              [11381, 11381],
              [11390, 11392],
              [11394, 11394],
              [11396, 11396],
              [11398, 11398],
              [11400, 11400],
              [11402, 11402],
              [11404, 11404],
              [11406, 11406],
              [11408, 11408],
              [11410, 11410],
              [11412, 11412],
              [11414, 11414],
              [11416, 11416],
              [11418, 11418],
              [11420, 11420],
              [11422, 11422],
              [11424, 11424],
              [11426, 11426],
              [11428, 11428],
              [11430, 11430],
              [11432, 11432],
              [11434, 11434],
              [11436, 11436],
              [11438, 11438],
              [11440, 11440],
              [11442, 11442],
              [11444, 11444],
              [11446, 11446],
              [11448, 11448],
              [11450, 11450],
              [11452, 11452],
              [11454, 11454],
              [11456, 11456],
              [11458, 11458],
              [11460, 11460],
              [11462, 11462],
              [11464, 11464],
              [11466, 11466],
              [11468, 11468],
              [11470, 11470],
              [11472, 11472],
              [11474, 11474],
              [11476, 11476],
              [11478, 11478],
              [11480, 11480],
              [11482, 11482],
              [11484, 11484],
              [11486, 11486],
              [11488, 11488],
              [11490, 11490],
              [11499, 11499],
              [11501, 11501],
              [11506, 11506],
              [42560, 42560],
              [42562, 42562],
              [42564, 42564],
              [42566, 42566],
              [42568, 42568],
              [42570, 42570],
              [42572, 42572],
              [42574, 42574],
              [42576, 42576],
              [42578, 42578],
              [42580, 42580],
              [42582, 42582],
              [42584, 42584],
              [42586, 42586],
              [42588, 42588],
              [42590, 42590],
              [42592, 42592],
              [42594, 42594],
              [42596, 42596],
              [42598, 42598],
              [42600, 42600],
              [42602, 42602],
              [42604, 42604],
              [42624, 42624],
              [42626, 42626],
              [42628, 42628],
              [42630, 42630],
              [42632, 42632],
              [42634, 42634],
              [42636, 42636],
              [42638, 42638],
              [42640, 42640],
              [42642, 42642],
              [42644, 42644],
              [42646, 42646],
              [42648, 42648],
              [42650, 42650],
              [42786, 42786],
              [42788, 42788],
              [42790, 42790],
              [42792, 42792],
              [42794, 42794],
              [42796, 42796],
              [42798, 42798],
              [42802, 42802],
              [42804, 42804],
              [42806, 42806],
              [42808, 42808],
              [42810, 42810],
              [42812, 42812],
              [42814, 42814],
              [42816, 42816],
              [42818, 42818],
              [42820, 42820],
              [42822, 42822],
              [42824, 42824],
              [42826, 42826],
              [42828, 42828],
              [42830, 42830],
              [42832, 42832],
              [42834, 42834],
              [42836, 42836],
              [42838, 42838],
              [42840, 42840],
              [42842, 42842],
              [42844, 42844],
              [42846, 42846],
              [42848, 42848],
              [42850, 42850],
              [42852, 42852],
              [42854, 42854],
              [42856, 42856],
              [42858, 42858],
              [42860, 42860],
              [42862, 42862],
              [42873, 42873],
              [42875, 42875],
              [42877, 42878],
              [42880, 42880],
              [42882, 42882],
              [42884, 42884],
              [42886, 42886],
              [42891, 42891],
              [42893, 42893],
              [42896, 42896],
              [42898, 42898],
              [42902, 42902],
              [42904, 42904],
              [42906, 42906],
              [42908, 42908],
              [42910, 42910],
              [42912, 42912],
              [42914, 42914],
              [42916, 42916],
              [42918, 42918],
              [42920, 42920],
              [42922, 42926],
              [42928, 42932],
              [42934, 42934],
              [65313, 65338]
            ],
            Pd: [
              [45, 45],
              [1418, 1418],
              [1470, 1470],
              [5120, 5120],
              [6150, 6150],
              [8208, 8213],
              [11799, 11799],
              [11802, 11802],
              [11834, 11835],
              [11840, 11840],
              [12316, 12316],
              [12336, 12336],
              [12448, 12448],
              [65073, 65074],
              [65112, 65112],
              [65123, 65123],
              [65293, 65293]
            ],
            Cf: [
              [173, 173],
              [1536, 1541],
              [1564, 1564],
              [1757, 1757],
              [1807, 1807],
              [2274, 2274],
              [6158, 6158],
              [8203, 8207],
              [8234, 8238],
              [8288, 8292],
              [8294, 8303],
              [65279, 65279],
              [65529, 65531]
            ],
            Nd: [
              [48, 57],
              [1632, 1641],
              [1776, 1785],
              [1984, 1993],
              [2406, 2415],
              [2534, 2543],
              [2662, 2671],
              [2790, 2799],
              [2918, 2927],
              [3046, 3055],
              [3174, 3183],
              [3302, 3311],
              [3430, 3439],
              [3558, 3567],
              [3664, 3673],
              [3792, 3801],
              [3872, 3881],
              [4160, 4169],
              [4240, 4249],
              [6112, 6121],
              [6160, 6169],
              [6470, 6479],
              [6608, 6617],
              [6784, 6793],
              [6800, 6809],
              [6992, 7001],
              [7088, 7097],
              [7232, 7241],
              [7248, 7257],
              [42528, 42537],
              [43216, 43225],
              [43264, 43273],
              [43472, 43481],
              [43504, 43513],
              [43600, 43609],
              [44016, 44025],
              [65296, 65305]
            ],
            Ll: [
              [97, 122],
              [181, 181],
              [223, 246],
              [248, 255],
              [257, 257],
              [259, 259],
              [261, 261],
              [263, 263],
              [265, 265],
              [267, 267],
              [269, 269],
              [271, 271],
              [273, 273],
              [275, 275],
              [277, 277],
              [279, 279],
              [281, 281],
              [283, 283],
              [285, 285],
              [287, 287],
              [289, 289],
              [291, 291],
              [293, 293],
              [295, 295],
              [297, 297],
              [299, 299],
              [301, 301],
              [303, 303],
              [305, 305],
              [307, 307],
              [309, 309],
              [311, 312],
              [314, 314],
              [316, 316],
              [318, 318],
              [320, 320],
              [322, 322],
              [324, 324],
              [326, 326],
              [328, 329],
              [331, 331],
              [333, 333],
              [335, 335],
              [337, 337],
              [339, 339],
              [341, 341],
              [343, 343],
              [345, 345],
              [347, 347],
              [349, 349],
              [351, 351],
              [353, 353],
              [355, 355],
              [357, 357],
              [359, 359],
              [361, 361],
              [363, 363],
              [365, 365],
              [367, 367],
              [369, 369],
              [371, 371],
              [373, 373],
              [375, 375],
              [378, 378],
              [380, 380],
              [382, 384],
              [387, 387],
              [389, 389],
              [392, 392],
              [396, 397],
              [402, 402],
              [405, 405],
              [409, 411],
              [414, 414],
              [417, 417],
              [419, 419],
              [421, 421],
              [424, 424],
              [426, 427],
              [429, 429],
              [432, 432],
              [436, 436],
              [438, 438],
              [441, 442],
              [445, 447],
              [454, 454],
              [457, 457],
              [460, 460],
              [462, 462],
              [464, 464],
              [466, 466],
              [468, 468],
              [470, 470],
              [472, 472],
              [474, 474],
              [476, 477],
              [479, 479],
              [481, 481],
              [483, 483],
              [485, 485],
              [487, 487],
              [489, 489],
              [491, 491],
              [493, 493],
              [495, 496],
              [499, 499],
              [501, 501],
              [505, 505],
              [507, 507],
              [509, 509],
              [511, 511],
              [513, 513],
              [515, 515],
              [517, 517],
              [519, 519],
              [521, 521],
              [523, 523],
              [525, 525],
              [527, 527],
              [529, 529],
              [531, 531],
              [533, 533],
              [535, 535],
              [537, 537],
              [539, 539],
              [541, 541],
              [543, 543],
              [545, 545],
              [547, 547],
              [549, 549],
              [551, 551],
              [553, 553],
              [555, 555],
              [557, 557],
              [559, 559],
              [561, 561],
              [563, 569],
              [572, 572],
              [575, 576],
              [578, 578],
              [583, 583],
              [585, 585],
              [587, 587],
              [589, 589],
              [591, 659],
              [661, 687],
              [881, 881],
              [883, 883],
              [887, 887],
              [891, 893],
              [912, 912],
              [940, 974],
              [976, 977],
              [981, 983],
              [985, 985],
              [987, 987],
              [989, 989],
              [991, 991],
              [993, 993],
              [995, 995],
              [997, 997],
              [999, 999],
              [1001, 1001],
              [1003, 1003],
              [1005, 1005],
              [1007, 1011],
              [1013, 1013],
              [1016, 1016],
              [1019, 1020],
              [1072, 1119],
              [1121, 1121],
              [1123, 1123],
              [1125, 1125],
              [1127, 1127],
              [1129, 1129],
              [1131, 1131],
              [1133, 1133],
              [1135, 1135],
              [1137, 1137],
              [1139, 1139],
              [1141, 1141],
              [1143, 1143],
              [1145, 1145],
              [1147, 1147],
              [1149, 1149],
              [1151, 1151],
              [1153, 1153],
              [1163, 1163],
              [1165, 1165],
              [1167, 1167],
              [1169, 1169],
              [1171, 1171],
              [1173, 1173],
              [1175, 1175],
              [1177, 1177],
              [1179, 1179],
              [1181, 1181],
              [1183, 1183],
              [1185, 1185],
              [1187, 1187],
              [1189, 1189],
              [1191, 1191],
              [1193, 1193],
              [1195, 1195],
              [1197, 1197],
              [1199, 1199],
              [1201, 1201],
              [1203, 1203],
              [1205, 1205],
              [1207, 1207],
              [1209, 1209],
              [1211, 1211],
              [1213, 1213],
              [1215, 1215],
              [1218, 1218],
              [1220, 1220],
              [1222, 1222],
              [1224, 1224],
              [1226, 1226],
              [1228, 1228],
              [1230, 1231],
              [1233, 1233],
              [1235, 1235],
              [1237, 1237],
              [1239, 1239],
              [1241, 1241],
              [1243, 1243],
              [1245, 1245],
              [1247, 1247],
              [1249, 1249],
              [1251, 1251],
              [1253, 1253],
              [1255, 1255],
              [1257, 1257],
              [1259, 1259],
              [1261, 1261],
              [1263, 1263],
              [1265, 1265],
              [1267, 1267],
              [1269, 1269],
              [1271, 1271],
              [1273, 1273],
              [1275, 1275],
              [1277, 1277],
              [1279, 1279],
              [1281, 1281],
              [1283, 1283],
              [1285, 1285],
              [1287, 1287],
              [1289, 1289],
              [1291, 1291],
              [1293, 1293],
              [1295, 1295],
              [1297, 1297],
              [1299, 1299],
              [1301, 1301],
              [1303, 1303],
              [1305, 1305],
              [1307, 1307],
              [1309, 1309],
              [1311, 1311],
              [1313, 1313],
              [1315, 1315],
              [1317, 1317],
              [1319, 1319],
              [1321, 1321],
              [1323, 1323],
              [1325, 1325],
              [1327, 1327],
              [1377, 1415],
              [5112, 5117],
              [7296, 7304],
              [7424, 7467],
              [7531, 7543],
              [7545, 7578],
              [7681, 7681],
              [7683, 7683],
              [7685, 7685],
              [7687, 7687],
              [7689, 7689],
              [7691, 7691],
              [7693, 7693],
              [7695, 7695],
              [7697, 7697],
              [7699, 7699],
              [7701, 7701],
              [7703, 7703],
              [7705, 7705],
              [7707, 7707],
              [7709, 7709],
              [7711, 7711],
              [7713, 7713],
              [7715, 7715],
              [7717, 7717],
              [7719, 7719],
              [7721, 7721],
              [7723, 7723],
              [7725, 7725],
              [7727, 7727],
              [7729, 7729],
              [7731, 7731],
              [7733, 7733],
              [7735, 7735],
              [7737, 7737],
              [7739, 7739],
              [7741, 7741],
              [7743, 7743],
              [7745, 7745],
              [7747, 7747],
              [7749, 7749],
              [7751, 7751],
              [7753, 7753],
              [7755, 7755],
              [7757, 7757],
              [7759, 7759],
              [7761, 7761],
              [7763, 7763],
              [7765, 7765],
              [7767, 7767],
              [7769, 7769],
              [7771, 7771],
              [7773, 7773],
              [7775, 7775],
              [7777, 7777],
              [7779, 7779],
              [7781, 7781],
              [7783, 7783],
              [7785, 7785],
              [7787, 7787],
              [7789, 7789],
              [7791, 7791],
              [7793, 7793],
              [7795, 7795],
              [7797, 7797],
              [7799, 7799],
              [7801, 7801],
              [7803, 7803],
              [7805, 7805],
              [7807, 7807],
              [7809, 7809],
              [7811, 7811],
              [7813, 7813],
              [7815, 7815],
              [7817, 7817],
              [7819, 7819],
              [7821, 7821],
              [7823, 7823],
              [7825, 7825],
              [7827, 7827],
              [7829, 7837],
              [7839, 7839],
              [7841, 7841],
              [7843, 7843],
              [7845, 7845],
              [7847, 7847],
              [7849, 7849],
              [7851, 7851],
              [7853, 7853],
              [7855, 7855],
              [7857, 7857],
              [7859, 7859],
              [7861, 7861],
              [7863, 7863],
              [7865, 7865],
              [7867, 7867],
              [7869, 7869],
              [7871, 7871],
              [7873, 7873],
              [7875, 7875],
              [7877, 7877],
              [7879, 7879],
              [7881, 7881],
              [7883, 7883],
              [7885, 7885],
              [7887, 7887],
              [7889, 7889],
              [7891, 7891],
              [7893, 7893],
              [7895, 7895],
              [7897, 7897],
              [7899, 7899],
              [7901, 7901],
              [7903, 7903],
              [7905, 7905],
              [7907, 7907],
              [7909, 7909],
              [7911, 7911],
              [7913, 7913],
              [7915, 7915],
              [7917, 7917],
              [7919, 7919],
              [7921, 7921],
              [7923, 7923],
              [7925, 7925],
              [7927, 7927],
              [7929, 7929],
              [7931, 7931],
              [7933, 7933],
              [7935, 7943],
              [7952, 7957],
              [7968, 7975],
              [7984, 7991],
              [8e3, 8005],
              [8016, 8023],
              [8032, 8039],
              [8048, 8061],
              [8064, 8071],
              [8080, 8087],
              [8096, 8103],
              [8112, 8116],
              [8118, 8119],
              [8126, 8126],
              [8130, 8132],
              [8134, 8135],
              [8144, 8147],
              [8150, 8151],
              [8160, 8167],
              [8178, 8180],
              [8182, 8183],
              [8458, 8458],
              [8462, 8463],
              [8467, 8467],
              [8495, 8495],
              [8500, 8500],
              [8505, 8505],
              [8508, 8509],
              [8518, 8521],
              [8526, 8526],
              [8580, 8580],
              [11312, 11358],
              [11361, 11361],
              [11365, 11366],
              [11368, 11368],
              [11370, 11370],
              [11372, 11372],
              [11377, 11377],
              [11379, 11380],
              [11382, 11387],
              [11393, 11393],
              [11395, 11395],
              [11397, 11397],
              [11399, 11399],
              [11401, 11401],
              [11403, 11403],
              [11405, 11405],
              [11407, 11407],
              [11409, 11409],
              [11411, 11411],
              [11413, 11413],
              [11415, 11415],
              [11417, 11417],
              [11419, 11419],
              [11421, 11421],
              [11423, 11423],
              [11425, 11425],
              [11427, 11427],
              [11429, 11429],
              [11431, 11431],
              [11433, 11433],
              [11435, 11435],
              [11437, 11437],
              [11439, 11439],
              [11441, 11441],
              [11443, 11443],
              [11445, 11445],
              [11447, 11447],
              [11449, 11449],
              [11451, 11451],
              [11453, 11453],
              [11455, 11455],
              [11457, 11457],
              [11459, 11459],
              [11461, 11461],
              [11463, 11463],
              [11465, 11465],
              [11467, 11467],
              [11469, 11469],
              [11471, 11471],
              [11473, 11473],
              [11475, 11475],
              [11477, 11477],
              [11479, 11479],
              [11481, 11481],
              [11483, 11483],
              [11485, 11485],
              [11487, 11487],
              [11489, 11489],
              [11491, 11492],
              [11500, 11500],
              [11502, 11502],
              [11507, 11507],
              [11520, 11557],
              [11559, 11559],
              [11565, 11565],
              [42561, 42561],
              [42563, 42563],
              [42565, 42565],
              [42567, 42567],
              [42569, 42569],
              [42571, 42571],
              [42573, 42573],
              [42575, 42575],
              [42577, 42577],
              [42579, 42579],
              [42581, 42581],
              [42583, 42583],
              [42585, 42585],
              [42587, 42587],
              [42589, 42589],
              [42591, 42591],
              [42593, 42593],
              [42595, 42595],
              [42597, 42597],
              [42599, 42599],
              [42601, 42601],
              [42603, 42603],
              [42605, 42605],
              [42625, 42625],
              [42627, 42627],
              [42629, 42629],
              [42631, 42631],
              [42633, 42633],
              [42635, 42635],
              [42637, 42637],
              [42639, 42639],
              [42641, 42641],
              [42643, 42643],
              [42645, 42645],
              [42647, 42647],
              [42649, 42649],
              [42651, 42651],
              [42787, 42787],
              [42789, 42789],
              [42791, 42791],
              [42793, 42793],
              [42795, 42795],
              [42797, 42797],
              [42799, 42801],
              [42803, 42803],
              [42805, 42805],
              [42807, 42807],
              [42809, 42809],
              [42811, 42811],
              [42813, 42813],
              [42815, 42815],
              [42817, 42817],
              [42819, 42819],
              [42821, 42821],
              [42823, 42823],
              [42825, 42825],
              [42827, 42827],
              [42829, 42829],
              [42831, 42831],
              [42833, 42833],
              [42835, 42835],
              [42837, 42837],
              [42839, 42839],
              [42841, 42841],
              [42843, 42843],
              [42845, 42845],
              [42847, 42847],
              [42849, 42849],
              [42851, 42851],
              [42853, 42853],
              [42855, 42855],
              [42857, 42857],
              [42859, 42859],
              [42861, 42861],
              [42863, 42863],
              [42865, 42872],
              [42874, 42874],
              [42876, 42876],
              [42879, 42879],
              [42881, 42881],
              [42883, 42883],
              [42885, 42885],
              [42887, 42887],
              [42892, 42892],
              [42894, 42894],
              [42897, 42897],
              [42899, 42901],
              [42903, 42903],
              [42905, 42905],
              [42907, 42907],
              [42909, 42909],
              [42911, 42911],
              [42913, 42913],
              [42915, 42915],
              [42917, 42917],
              [42919, 42919],
              [42921, 42921],
              [42933, 42933],
              [42935, 42935],
              [43002, 43002],
              [43824, 43866],
              [43872, 43877],
              [43888, 43967],
              [64256, 64262],
              [64275, 64279],
              [65345, 65370]
            ],
            No: [
              [178, 179],
              [185, 185],
              [188, 190],
              [2548, 2553],
              [2930, 2935],
              [3056, 3058],
              [3192, 3198],
              [3416, 3422],
              [3440, 3448],
              [3882, 3891],
              [4969, 4988],
              [6128, 6137],
              [6618, 6618],
              [8304, 8304],
              [8308, 8313],
              [8320, 8329],
              [8528, 8543],
              [8585, 8585],
              [9312, 9371],
              [9450, 9471],
              [10102, 10131],
              [11517, 11517],
              [12690, 12693],
              [12832, 12841],
              [12872, 12879],
              [12881, 12895],
              [12928, 12937],
              [12977, 12991],
              [43056, 43061]
            ],
            Zs: [
              [32, 32],
              [160, 160],
              [5760, 5760],
              [8192, 8202],
              [8239, 8239],
              [8287, 8287],
              [12288, 12288]
            ]
          }
        })
    })
  u(da)
  var ga = o(function(r, e) {
    function t(r) {
      for (var e = r.toString(16); e.length < 4; ) e = '0' + e
      return e
    }
    ;(e.__esModule = !0),
      (e.normalize_ranges = function(r) {
        return r
          .sort(function(r, e) {
            return r[0] - e[0]
          })
          .reduce(function(r, e, t) {
            if (0 === t) return [e]
            var n = r[r.length - 1],
              u = n[0],
              o = n[1],
              a = e[0],
              i = e[1]
            return o + 1 === a ? r.slice(0, -1).concat([[u, i]]) : r.concat([e])
          }, [])
      }),
      (e.build_regex = function(r, e) {
        var n = r
          .map(function(r) {
            var e = r[0],
              n = r[1]
            return e === n ? '\\u' + t(e) : '\\u' + t(e) + '-\\u' + t(n)
          })
          .join('')
        return new RegExp('[' + n + ']', e)
      })
  })
  u(ga)
  var ma,
    ba,
    va,
    Ea,
    wa = /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74)\uDB40\uDC7F|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]\uFE0F|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83D\uDC69\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83D\uDC69\u200D[\u2695\u2696\u2708])\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC68(?:\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F/g,
    ya = /[^\x20-\x7F]/,
    Aa = ha().source,
    Ca = ea('!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'),
    qa = ''.concat(Ca).concat(
      ((ma = ['Pc', 'Pd', 'Pe', 'Pf', 'Pi', 'Po', 'Ps']),
      (va = da.get_data()),
      (Ea = ma.reduce(function(r, e) {
        return r.concat(va[e])
      }, [])),
      ga.build_regex(ga.normalize_ranges(Ea), ba)).source.slice(1, -1)),
    Fa = new RegExp('['.concat(qa, ']'))
  function ka(r) {
    if (r)
      switch (r.type) {
        case 'ExportDefaultDeclaration':
        case 'ExportDefaultSpecifier':
        case 'DeclareExportDeclaration':
        case 'ExportNamedDeclaration':
        case 'ExportAllDeclaration':
          return !0
      }
    return !1
  }
  function xa(r) {
    return r.length > 0 ? r[r.length - 1] : null
  }
  function La(r) {
    return function(e, t, n) {
      var u = n && n.backwards
      if (!1 === t) return !1
      for (var o = e.length, a = t; a >= 0 && a < o; ) {
        var i = e.charAt(a)
        if (r instanceof RegExp) {
          if (!r.test(i)) return a
        } else if (-1 === r.indexOf(i)) return a
        u ? a-- : a++
      }
      return (-1 === a || a === o) && a
    }
  }
  var Sa = La(/\s/),
    Ba = La(' \t'),
    Ta = La(',; \t'),
    Na = La(/[^\r\n]/)
  function Ra(r, e) {
    if (!1 === e) return !1
    if ('/' === r.charAt(e) && '*' === r.charAt(e + 1))
      for (var t = e + 2; t < r.length; ++t)
        if ('*' === r.charAt(t) && '/' === r.charAt(t + 1)) return t + 2
    return e
  }
  function Oa(r, e) {
    return !1 !== e && ('/' === r.charAt(e) && '/' === r.charAt(e + 1) ? Na(r, e) : e)
  }
  function Pa(r, e, t) {
    var n = t && t.backwards
    if (!1 === e) return !1
    var u = r.charAt(e)
    if (n) {
      if ('\r' === r.charAt(e - 1) && '\n' === u) return e - 2
      if ('\n' === u || '\r' === u || '\u2028' === u || '\u2029' === u) return e - 1
    } else {
      if ('\r' === u && '\n' === r.charAt(e + 1)) return e + 2
      if ('\n' === u || '\r' === u || '\u2028' === u || '\u2029' === u) return e + 1
    }
    return e
  }
  function Ua(r, e, t) {
    var n = Ba(r, (t = t || {}).backwards ? e - 1 : e, t)
    return n !== Pa(r, n, t)
  }
  function Ia(r, e) {
    for (var t = null, n = e; n !== t; ) (t = n), (n = Ra(r, (n = Ta(r, n)))), (n = Ba(r, n))
    return Ua(r, (n = Pa(r, (n = Oa(r, n)))))
  }
  function Va(r, e, t) {
    for (var n = null, u = t(e); u !== n; )
      (n = u), (u = Pa(r, (u = Oa(r, (u = Ra(r, (u = Ba(r, u))))))))
    return u
  }
  var ja = {}
  function za(r) {
    return ja[r]
  }
  ;[
    ['|>'],
    ['||', '??'],
    ['&&'],
    ['|'],
    ['^'],
    ['&'],
    ['==', '===', '!=', '!=='],
    ['<', '>', '<=', '>=', 'in', 'instanceof'],
    ['>>', '<<', '>>>'],
    ['+', '-'],
    ['*', '/', '%'],
    ['**']
  ].forEach(function(r, e) {
    r.forEach(function(r) {
      ja[r] = e
    })
  })
  var Ga = { '==': !0, '!=': !0, '===': !0, '!==': !0 },
    Ha = { '+': !0, '-': !0 },
    Ma = { '*': !0, '/': !0, '%': !0 },
    Za = { '>>': !0, '>>>': !0, '<<': !0 }
  function _a(r, e, t) {
    for (var n = 0, u = (t = t || 0); u < r.length; ++u) '\t' === r[u] ? (n = n + e - (n % e)) : n++
    return n
  }
  function $a(r, e, t) {
    var n = '"' === e ? "'" : '"',
      u = r.replace(/\\([\s\S])|(['"])/g, function(r, u, o) {
        return u === n
          ? u
          : o === e
            ? '\\' + o
            : o || (t && /^[^\\nrvtbfux\r\n\u2028\u2029"'0-7]$/.test(u) ? u : '\\' + u)
      })
    return e + u + e
  }
  function Ya(r) {
    return (
      r &&
      r.comments &&
      r.comments.length > 0 &&
      r.comments.some(function(r) {
        return 'prettier-ignore' === r.value.trim()
      }))
  }
  function Ja(r, e) {
    ;(r.comments || (r.comments = [])).push(e),
      (e.printed = !1),
      'JSXText' === r.type && (e.printed = !0)
  }
  var Qa = {
    punctuationRegex: Fa,
    punctuationCharRange: qa,
    getStringWidth: function(r) {
      return r ? (ya.test(r) ? ia(r.replace(wa, '  ')) : r.length) : 0
    },
    splitText: function(r, e) {
      var t = 'non-cjk',
        n = 'cjk-character',
        u = 'cjk-punctuation',
        o = []
      return (
        ('preserve' === e.proseWrap
          ? r
          : r.replace(new RegExp('('.concat(Aa, ')\n(').concat(Aa, ')'), 'g'), '$1$2'))
          .split(/([ \t\n]+)/)
          .forEach(function(r, e, i) {
            e % 2 != 1
              ? ((0 !== e && e !== i.length - 1) || '' !== r) &&
                r.split(new RegExp('('.concat(Aa, ')'))).forEach(function(r, e, o) {
                  ;((0 !== e && e !== o.length - 1) || '' !== r) &&
                    (e % 2 != 0
                      ? a(
                          Fa.test(r)
                            ? {
                                type: 'word',
                                value: r,
                                kind: u,
                                hasLeadingPunctuation: !0,
                                hasTrailingPunctuation: !0
                              }
                            : {
                                type: 'word',
                                value: r,
                                kind: n,
                                hasLeadingPunctuation: !1,
                                hasTrailingPunctuation: !1
                              })
                      : '' !== r &&
                        a({
                          type: 'word',
                          value: r,
                          kind: t,
                          hasLeadingPunctuation: Fa.test(r[0]),
                          hasTrailingPunctuation: Fa.test(xa(r))
                        }))
                })
              : o.push({ type: 'whitespace', value: /\n/.test(r) ? '\n' : ' ' })
          }),
        o
      )
      function a(r) {
        var e,
          a,
          i = xa(o)
        i &&
          'word' === i.type &&
          ((i.kind === t && r.kind === n && !i.hasTrailingPunctuation) ||
          (i.kind === n && r.kind === t && !r.hasLeadingPunctuation)
            ? o.push({ type: 'whitespace', value: ' ' })
            : ((e = t),
              (a = u),
              (i.kind === e && r.kind === a) ||
                (i.kind === a && r.kind === e) ||
                [i.value, r.value].some(function(r) {
                  return /\u3000/.test(r)
                }) ||
                o.push({ type: 'whitespace', value: '' }))),
          o.push(r)
      }
    },
    getMaxContinuousCount: function(r, e) {
      var t = r.match(new RegExp('('.concat(ea(e), ')+'), 'g'))
      return null === t
        ? 0
        : t.reduce(function(r, t) {
            return Math.max(r, t.length / e.length)
          }, 0)
    },
    getPrecedence: za,
    shouldFlatten: function(r, e) {
      return za(e) !== za(r)
        ? '%' === e && !Ha[r]
        : !(
            '**' === r ||
            (Ga[r] && Ga[e]) ||
            ('%' === e && Ma[r]) ||
            ('%' === r && Ma[e]) ||
            (e !== r && Ma[e] && Ma[r]) ||
            (Za[r] && Za[e]))
    },
    isBitwiseOperator: function(r) {
      return !!Za[r] || '|' === r || '^' === r || '&' === r
    },
    isExportDeclaration: ka,
    getParentExportDeclaration: function(r) {
      var e = r.getParentNode()
      return 'declaration' === r.getName() && ka(e) ? e : null
    },
    getPenultimate: function(r) {
      return r.length > 1 ? r[r.length - 2] : null
    },
    getLast: xa,
    getNextNonSpaceNonCommentCharacterIndex: Va,
    getNextNonSpaceNonCommentCharacter: function(r, e, t) {
      return r.charAt(Va(r, e, t))
    },
    skipWhitespace: Sa,
    skipSpaces: Ba,
    skipNewline: Pa,
    isNextLineEmptyAfterIndex: Ia,
    isNextLineEmpty: function(r, e, t) {
      return Ia(r, t(e))
    },
    isPreviousLineEmpty: function(r, e, t) {
      var n = t(e) - 1
      return (
        (n = Pa(r, (n = Ba(r, n, { backwards: !0 })), { backwards: !0 })),
        (n = Ba(r, n, { backwards: !0 })) !== Pa(r, n, { backwards: !0 }))
    },
    hasNewline: Ua,
    hasNewlineInRange: function(r, e, t) {
      for (var n = e; n < t; ++n) if ('\n' === r.charAt(n)) return !0
      return !1
    },
    hasSpaces: function(r, e, t) {
      return Ba(r, (t = t || {}).backwards ? e - 1 : e, t) !== e
    },
    setLocStart: function(r, e) {
      r.range ? (r.range[0] = e) : (r.start = e)
    },
    setLocEnd: function(r, e) {
      r.range ? (r.range[1] = e) : (r.end = e)
    },
    startsWithNoLookaheadToken: function r(e, t) {
      switch (
        (e = (function r(e) {
          return e.left ? r(e.left) : e
        })(e)).type
      ) {
        case 'ObjectPattern':
          return !t
        case 'FunctionExpression':
        case 'ClassExpression':
        case 'DoExpression':
          return t
        case 'ObjectExpression':
          return !0
        case 'MemberExpression':
          return r(e.object, t)
        case 'TaggedTemplateExpression':
          return 'FunctionExpression' !== e.tag.type && r(e.tag, t)
        case 'CallExpression':
          return 'FunctionExpression' !== e.callee.type && r(e.callee, t)
        case 'ConditionalExpression':
          return r(e.test, t)
        case 'UpdateExpression':
          return !e.prefix && r(e.argument, t)
        case 'BindExpression':
          return e.object && r(e.object, t)
        case 'SequenceExpression':
          return r(e.expressions[0], t)
        case 'TSAsExpression':
          return r(e.expression, t)
        default:
          return !1
      }
    },
    getAlignmentSize: _a,
    getIndentSize: function(r, e) {
      var t = r.lastIndexOf('\n')
      return -1 === t ? 0 : _a(r.slice(t + 1).match(/^[ \t]*/)[0], e)
    },
    printString: function(r, e, t) {
      var n = r.slice(1, -1),
        u = { quote: '"', regex: /"/g },
        o = { quote: "'", regex: /'/g },
        a = e.singleQuote ? o : u,
        i = a === o ? u : o,
        c = !1,
        s = !1
      n.includes(a.quote) || n.includes(i.quote)
        ? (c = (n.match(a.regex) || []).length > (n.match(i.regex) || []).length)
        : (s = !0)
      var l = 'json' === e.parser ? u.quote : c ? i.quote : a.quote
      return t
        ? s
          ? l + n + l
          : r
        : $a(n, l, !('css' === e.parser || 'less' === e.parser || 'scss' === e.parser))
    },
    printNumber: function(r) {
      return r
        .toLowerCase()
        .replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, '$1$2$3')
        .replace(/^([+-]?[\d.]+)e[+-]?0+$/, '$1')
        .replace(/^([+-])?\./, '$10.')
        .replace(/(\.\d+?)0+(?=e|$)/, '$1')
        .replace(/\.(?=e|$)/, '')
    },
    hasIgnoreComment: function(r) {
      return Ya(r.getValue())
    },
    hasNodeIgnoreComment: Ya,
    makeString: $a,
    matchAncestorTypes: function(r, e, t) {
      for (t = t || 0, e = e.slice(); e.length; ) {
        var n = r.getParentNode(t),
          u = e.shift()
        if (!n || n.type !== u) return !1
        t++
      }
      return !0
    },
    addLeadingComment: function(r, e) {
      ;(e.leading = !0), (e.trailing = !1), Ja(r, e)
    },
    addDanglingComment: function(r, e) {
      ;(e.leading = !1), (e.trailing = !1), Ja(r, e)
    },
    addTrailingComment: function(r, e) {
      ;(e.leading = !1), (e.trailing = !0), Ja(r, e)
    },
    isWithinParentArrayProperty: function(r, e) {
      var t = r.getValue(),
        n = r.getParentNode()
      if (null == n) return !1
      if (!Array.isArray(n[e])) return !1
      var u = r.getName()
      return n[e][u] === t
    }
  }
  var Wa = function(r, t) {
      var n = e(
        t.slice(r.position.start.offset, r.position.end.offset).match(/^\s*(\d+)(\.|\))(\s*)/),
        4
      )
      return { numberText: n[1], marker: n[2], leadingSpaces: n[3] }
    },
    Ka = /^([\u0000-\uffff]|[\ud800-\udbff][\udc00-\udfff])$/
  function Xa(r, e) {
    return (function r(t, n, u) {
      u = u || []
      var o = Object.assign({}, e(t, n, u))
      return (
        o.children &&
          (o.children = o.children.map(function(e, t) {
            return r(e, t, [o].concat(u))
          })),
        o
      )
    })(r, null, null)
  }
  function ri() {
    return function(r) {
      return Xa(r, function(r) {
        return 'inlineCode' !== r.type
          ? r
          : Object.assign({}, r, { value: r.value.replace(/\s+/g, ' ') })
      })
    }
  }
  function ei() {
    return function(r) {
      return Xa(r, function(r) {
        if (!r.children) return r
        var e = r.children.reduce(function(r, e) {
          var t = r[r.length - 1]
          return (
            t && 'text' === t.type && 'text' === e.type
              ? r.splice(-1, 1, {
                  type: 'text',
                  value: t.value + e.value,
                  position: { start: t.position.start, end: e.position.end }
                })
              : r.push(e),
            r
          )
        }, [])
        return Object.assign({}, r, { children: e })
      })
    }
  }
  function ti() {
    var r = this.Parser.prototype
    function e(r, e) {
      var t = na(e)
      if (t.frontMatter) return r(t.frontMatter.raw)(t.frontMatter)
    }
    ;(r.blockMethods = ['frontMatter'].concat(r.blockMethods)),
      (r.blockTokenizers.frontMatter = e),
      (e.onlyAtStart = !0)
  }
  function ni() {
    var r = this.Parser.prototype,
      e = r.inlineMethods
    function t(r, e) {
      var t = e.match(/^({%[\s\S]*?%}|{{[\s\S]*?}})/)
      if (t) return r(t[0])({ type: 'liquidNode', value: t[0] })
    }
    e.splice(e.indexOf('text'), 0, 'liquid'),
      (r.inlineTokenizers.liquid = t),
      (t.locator = function(r, e) {
        return r.indexOf('{', e)
      })
  }
  var ui = {
    parse: function(r, t, n) {
      var u,
        o,
        a = Mo()
          .use(Ou, { footnotes: !0, commonmark: !0 })
          .use(ti)
          .use(ni)
          .use(
            ((o = r),
            function() {
              return function(r) {
                return Xa(r, function(r) {
                  return 'text' !== r.type
                    ? r
                    : Object.assign({}, r, {
                        value:
                          '*' !== r.value &&
                          '_' !== r.value &&
                          Ka.test(r.value) &&
                          r.position.end.offset - r.position.start.offset !== r.value.length
                            ? o.slice(r.position.start.offset, r.position.end.offset)
                            : r.value
                      })
                })
              }
            }))
          .use(ei)
          .use(ri)
          .use(
            (function(r) {
              return function() {
                return function(e) {
                  return Xa(e, function(e, t, n) {
                    if ('code' === e.type) {
                      var u = /^\n?( {4,}|\t)/.test(
                        r.slice(e.position.start.offset, e.position.end.offset))
                      if (((e.isIndented = u), u))
                        for (var o = 0; o < n.length; o++) {
                          var a = n[o]
                          if (a.hasIndentedCodeblock) break
                          'list' === a.type && (a.hasIndentedCodeblock = !0)
                        }
                    }
                    return e
                  })
                }
              }
            })(r))
          .use(
            (function(r, t) {
              return function() {
                return function(u) {
                  return Xa(u, function(u, o, a) {
                    if ('list' === u.type && 0 !== u.children.length) {
                      for (var i = 0; i < a.length; i++) {
                        var c = a[i]
                        if ('list' === c.type && !c.isAligned) return (u.isAligned = !1), u
                      }
                      u.isAligned = (function(u) {
                        if (!u.ordered) return !0
                        var o = e(u.children, 2),
                          a = o[0],
                          i = o[1]
                        if (Wa(a, r).leadingSpaces.length > 1) return !0
                        var c = n(a)
                        if (-1 === c) return !1
                        if (1 === u.children.length) return c % t.tabWidth == 0
                        var s = n(i)
                        return c === s && (c % t.tabWidth == 0 || Wa(i, r).leadingSpaces.length > 1)
                      })(u)
                    }
                    return u
                  })
                }
              }
              function n(r) {
                return 0 === r.children.length ? -1 : r.children[0].position.start.column - 1
              }
            })(r, n))
          .use(
            ((u = n),
            function() {
              return function(r) {
                return Xa(r, function(r, t, n) {
                  var o = e(n, 1),
                    a = o[0]
                  if ('text' !== r.type) return r
                  var i = r.value
                  return (
                    'paragraph' === a.type &&
                      (0 === t && (i = i.trimLeft()),
                      t === a.children.length - 1 && (i = i.trimRight())),
                    { type: 'sentence', position: r.position, children: Qa.splitText(i, u) })
                })
              }
            }))
      return a.runSync(a.parse(r))
    },
    astFormat: 'mdast',
    hasPragma: ua.hasPragma,
    locStart: function(r) {
      return r.position.start.offset
    },
    locEnd: function(r) {
      return r.position.end.offset
    }
  }
  return { parsers: { remark: ui, markdown: ui } }
})
