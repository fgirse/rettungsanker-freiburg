/*!
 * jQuery UI 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */ ;(function (a, b) {
  function d(b) {
    return !a(b)
      .parents()
      .andSelf()
      .filter(function () {
        return a.curCSS(this, 'visibility') === 'hidden' || a.expr.filters.hidden(this)
      }).length
  }
  function c(b, c) {
    var e = b.nodeName.toLowerCase()
    if ('area' === e) {
      var f = b.parentNode,
        g = f.name,
        h
      if (!b.href || !g || f.nodeName.toLowerCase() !== 'map') return !1
      h = a('img[usemap=#' + g + ']')[0]
      return !!h && d(h)
    }
    return (
      (/input|select|textarea|button|object/.test(e) ? !b.disabled : 'a' == e ? b.href || c : c) &&
      d(b)
    )
  }
  a.ui = a.ui || {}
  a.ui.version ||
    (a.extend(a.ui, {
      version: '1.8.18',
      keyCode: {
        ALT: 18,
        BACKSPACE: 8,
        CAPS_LOCK: 20,
        COMMA: 188,
        COMMAND: 91,
        COMMAND_LEFT: 91,
        COMMAND_RIGHT: 93,
        CONTROL: 17,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        INSERT: 45,
        LEFT: 37,
        MENU: 93,
        NUMPAD_ADD: 107,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        NUMPAD_ENTER: 108,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_SUBTRACT: 109,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SHIFT: 16,
        SPACE: 32,
        TAB: 9,
        UP: 38,
        WINDOWS: 91,
      },
    }),
    a.fn.extend({
      propAttr: a.fn.prop || a.fn.attr,
      _focus: a.fn.focus,
      focus: function (b, c) {
        return typeof b == 'number'
          ? this.each(function () {
              var d = this
              setTimeout(function () {
                a(d).focus(), c && c.call(d)
              }, b)
            })
          : this._focus.apply(this, arguments)
      },
      scrollParent: function () {
        var b
        ;(a.browser.msie && /(static|relative)/.test(this.css('position'))) ||
        /absolute/.test(this.css('position'))
          ? (b = this.parents()
              .filter(function () {
                return (
                  /(relative|absolute|fixed)/.test(a.curCSS(this, 'position', 1)) &&
                  /(auto|scroll)/.test(
                    a.curCSS(this, 'overflow', 1) +
                      a.curCSS(this, 'overflow-y', 1) +
                      a.curCSS(this, 'overflow-x', 1)
                  )
                )
              })
              .eq(0))
          : (b = this.parents()
              .filter(function () {
                return /(auto|scroll)/.test(
                  a.curCSS(this, 'overflow', 1) +
                    a.curCSS(this, 'overflow-y', 1) +
                    a.curCSS(this, 'overflow-x', 1)
                )
              })
              .eq(0))
        return /fixed/.test(this.css('position')) || !b.length ? a(document) : b
      },
      zIndex: function (c) {
        if (c !== b) return this.css('zIndex', c)
        if (this.length) {
          var d = a(this[0]),
            e,
            f
          while (d.length && d[0] !== document) {
            e = d.css('position')
            if (e === 'absolute' || e === 'relative' || e === 'fixed') {
              f = parseInt(d.css('zIndex'), 10)
              if (!isNaN(f) && f !== 0) return f
            }
            d = d.parent()
          }
        }
        return 0
      },
      disableSelection: function () {
        return this.bind(
          (a.support.selectstart ? 'selectstart' : 'mousedown') + '.ui-disableSelection',
          function (a) {
            a.preventDefault()
          }
        )
      },
      enableSelection: function () {
        return this.unbind('.ui-disableSelection')
      },
    }),
    a.each(['Width', 'Height'], function (c, d) {
      function h(b, c, d, f) {
        a.each(e, function () {
          ;(c -= parseFloat(a.curCSS(b, 'padding' + this, !0)) || 0),
            d && (c -= parseFloat(a.curCSS(b, 'border' + this + 'Width', !0)) || 0),
            f && (c -= parseFloat(a.curCSS(b, 'margin' + this, !0)) || 0)
        })
        return c
      }
      var e = d === 'Width' ? ['Left', 'Right'] : ['Top', 'Bottom'],
        f = d.toLowerCase(),
        g = {
          innerWidth: a.fn.innerWidth,
          innerHeight: a.fn.innerHeight,
          outerWidth: a.fn.outerWidth,
          outerHeight: a.fn.outerHeight,
        }
      ;(a.fn['inner' + d] = function (c) {
        if (c === b) return g['inner' + d].call(this)
        return this.each(function () {
          a(this).css(f, h(this, c) + 'px')
        })
      }),
        (a.fn['outer' + d] = function (b, c) {
          if (typeof b != 'number') return g['outer' + d].call(this, b)
          return this.each(function () {
            a(this).css(f, h(this, b, !0, c) + 'px')
          })
        })
    }),
    a.extend(a.expr[':'], {
      data: function (b, c, d) {
        return !!a.data(b, d[3])
      },
      focusable: function (b) {
        return c(b, !isNaN(a.attr(b, 'tabindex')))
      },
      tabbable: function (b) {
        var d = a.attr(b, 'tabindex'),
          e = isNaN(d)
        return (e || d >= 0) && c(b, !e)
      },
    }),
    a(function () {
      var b = document.body,
        c = b.appendChild((c = document.createElement('div')))
      c.offsetHeight,
        a.extend(c.style, { minHeight: '100px', height: 'auto', padding: 0, borderWidth: 0 }),
        (a.support.minHeight = c.offsetHeight === 100),
        (a.support.selectstart = 'onselectstart' in c),
        (b.removeChild(c).style.display = 'none')
    }),
    a.extend(a.ui, {
      plugin: {
        add: function (b, c, d) {
          var e = a.ui[b].prototype
          for (var f in d) (e.plugins[f] = e.plugins[f] || []), e.plugins[f].push([c, d[f]])
        },
        call: function (a, b, c) {
          var d = a.plugins[b]
          if (!!d && !!a.element[0].parentNode)
            for (var e = 0; e < d.length; e++) a.options[d[e][0]] && d[e][1].apply(a.element, c)
        },
      },
      contains: function (a, b) {
        return document.compareDocumentPosition
          ? a.compareDocumentPosition(b) & 16
          : a !== b && a.contains(b)
      },
      hasScroll: function (b, c) {
        if (a(b).css('overflow') === 'hidden') return !1
        var d = c && c === 'left' ? 'scrollLeft' : 'scrollTop',
          e = !1
        if (b[d] > 0) return !0
        ;(b[d] = 1), (e = b[d] > 0), (b[d] = 0)
        return e
      },
      isOverAxis: function (a, b, c) {
        return a > b && a < b + c
      },
      isOver: function (b, c, d, e, f, g) {
        return a.ui.isOverAxis(b, d, f) && a.ui.isOverAxis(c, e, g)
      },
    }))
})(jQuery)
/*!
 * jQuery UI Widget 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */ ;(function (a, b) {
  if (a.cleanData) {
    var c = a.cleanData
    a.cleanData = function (b) {
      for (var d = 0, e; (e = b[d]) != null; d++)
        try {
          a(e).triggerHandler('remove')
        } catch (f) {}
      c(b)
    }
  } else {
    var d = a.fn.remove
    a.fn.remove = function (b, c) {
      return this.each(function () {
        c ||
          ((!b || a.filter(b, [this]).length) &&
            a('*', this)
              .add([this])
              .each(function () {
                try {
                  a(this).triggerHandler('remove')
                } catch (b) {}
              }))
        return d.call(a(this), b, c)
      })
    }
  }
  ;(a.widget = function (b, c, d) {
    var e = b.split('.')[0],
      f
    ;(b = b.split('.')[1]),
      (f = e + '-' + b),
      d || ((d = c), (c = a.Widget)),
      (a.expr[':'][f] = function (c) {
        return !!a.data(c, b)
      }),
      (a[e] = a[e] || {}),
      (a[e][b] = function (a, b) {
        arguments.length && this._createWidget(a, b)
      })
    var g = new c()
    ;(g.options = a.extend(!0, {}, g.options)),
      (a[e][b].prototype = a.extend(
        !0,
        g,
        {
          namespace: e,
          widgetName: b,
          widgetEventPrefix: a[e][b].prototype.widgetEventPrefix || b,
          widgetBaseClass: f,
        },
        d
      )),
      a.widget.bridge(b, a[e][b])
  }),
    (a.widget.bridge = function (c, d) {
      a.fn[c] = function (e) {
        var f = typeof e == 'string',
          g = Array.prototype.slice.call(arguments, 1),
          h = this
        e = !f && g.length ? a.extend.apply(null, [!0, e].concat(g)) : e
        if (f && e.charAt(0) === '_') return h
        f
          ? this.each(function () {
              var d = a.data(this, c),
                f = d && a.isFunction(d[e]) ? d[e].apply(d, g) : d
              if (f !== d && f !== b) {
                h = f
                return !1
              }
            })
          : this.each(function () {
              var b = a.data(this, c)
              b ? b.option(e || {})._init() : a.data(this, c, new d(e, this))
            })
        return h
      }
    }),
    (a.Widget = function (a, b) {
      arguments.length && this._createWidget(a, b)
    }),
    (a.Widget.prototype = {
      widgetName: 'widget',
      widgetEventPrefix: '',
      options: { disabled: !1 },
      _createWidget: function (b, c) {
        a.data(c, this.widgetName, this),
          (this.element = a(c)),
          (this.options = a.extend(!0, {}, this.options, this._getCreateOptions(), b))
        var d = this
        this.element.bind('remove.' + this.widgetName, function () {
          d.destroy()
        }),
          this._create(),
          this._trigger('create'),
          this._init()
      },
      _getCreateOptions: function () {
        return a.metadata && a.metadata.get(this.element[0])[this.widgetName]
      },
      _create: function () {},
      _init: function () {},
      destroy: function () {
        this.element.unbind('.' + this.widgetName).removeData(this.widgetName),
          this.widget()
            .unbind('.' + this.widgetName)
            .removeAttr('aria-disabled')
            .removeClass(this.widgetBaseClass + '-disabled ' + 'ui-state-disabled')
      },
      widget: function () {
        return this.element
      },
      option: function (c, d) {
        var e = c
        if (arguments.length === 0) return a.extend({}, this.options)
        if (typeof c == 'string') {
          if (d === b) return this.options[c]
          ;(e = {}), (e[c] = d)
        }
        this._setOptions(e)
        return this
      },
      _setOptions: function (b) {
        var c = this
        a.each(b, function (a, b) {
          c._setOption(a, b)
        })
        return this
      },
      _setOption: function (a, b) {
        ;(this.options[a] = b),
          a === 'disabled' &&
            this.widget()
              [b ? 'addClass' : 'removeClass'](
                this.widgetBaseClass + '-disabled' + ' ' + 'ui-state-disabled'
              )
              .attr('aria-disabled', b)
        return this
      },
      enable: function () {
        return this._setOption('disabled', !1)
      },
      disable: function () {
        return this._setOption('disabled', !0)
      },
      _trigger: function (b, c, d) {
        var e,
          f,
          g = this.options[b]
        ;(d = d || {}),
          (c = a.Event(c)),
          (c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase()),
          (c.target = this.element[0]),
          (f = c.originalEvent)
        if (f) for (e in f) e in c || (c[e] = f[e])
        this.element.trigger(c, d)
        return !(
          (a.isFunction(g) && g.call(this.element[0], c, d) === !1) ||
          c.isDefaultPrevented()
        )
      },
    })
})(jQuery)
/*!
 * jQuery UI Mouse 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */ ;(function (a, b) {
  var c = !1
  a(document).mouseup(function (a) {
    c = !1
  }),
    a.widget('ui.mouse', {
      options: { cancel: ':input,option', distance: 1, delay: 0 },
      _mouseInit: function () {
        var b = this
        this.element
          .bind('mousedown.' + this.widgetName, function (a) {
            return b._mouseDown(a)
          })
          .bind('click.' + this.widgetName, function (c) {
            if (!0 === a.data(c.target, b.widgetName + '.preventClickEvent')) {
              a.removeData(c.target, b.widgetName + '.preventClickEvent'),
                c.stopImmediatePropagation()
              return !1
            }
          }),
          (this.started = !1)
      },
      _mouseDestroy: function () {
        this.element.unbind('.' + this.widgetName)
      },
      _mouseDown: function (b) {
        if (!c) {
          this._mouseStarted && this._mouseUp(b), (this._mouseDownEvent = b)
          var d = this,
            e = b.which == 1,
            f =
              typeof this.options.cancel == 'string' && b.target.nodeName
                ? a(b.target).closest(this.options.cancel).length
                : !1
          if (!e || f || !this._mouseCapture(b)) return !0
          ;(this.mouseDelayMet = !this.options.delay),
            this.mouseDelayMet ||
              (this._mouseDelayTimer = setTimeout(function () {
                d.mouseDelayMet = !0
              }, this.options.delay))
          if (this._mouseDistanceMet(b) && this._mouseDelayMet(b)) {
            this._mouseStarted = this._mouseStart(b) !== !1
            if (!this._mouseStarted) {
              b.preventDefault()
              return !0
            }
          }
          !0 === a.data(b.target, this.widgetName + '.preventClickEvent') &&
            a.removeData(b.target, this.widgetName + '.preventClickEvent'),
            (this._mouseMoveDelegate = function (a) {
              return d._mouseMove(a)
            }),
            (this._mouseUpDelegate = function (a) {
              return d._mouseUp(a)
            }),
            a(document)
              .bind('mousemove.' + this.widgetName, this._mouseMoveDelegate)
              .bind('mouseup.' + this.widgetName, this._mouseUpDelegate),
            b.preventDefault(),
            (c = !0)
          return !0
        }
      },
      _mouseMove: function (b) {
        if (a.browser.msie && !(document.documentMode >= 9) && !b.button) return this._mouseUp(b)
        if (this._mouseStarted) {
          this._mouseDrag(b)
          return b.preventDefault()
        }
        this._mouseDistanceMet(b) &&
          this._mouseDelayMet(b) &&
          ((this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1),
          this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b))
        return !this._mouseStarted
      },
      _mouseUp: function (b) {
        a(document)
          .unbind('mousemove.' + this.widgetName, this._mouseMoveDelegate)
          .unbind('mouseup.' + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted &&
            ((this._mouseStarted = !1),
            b.target == this._mouseDownEvent.target &&
              a.data(b.target, this.widgetName + '.preventClickEvent', !0),
            this._mouseStop(b))
        return !1
      },
      _mouseDistanceMet: function (a) {
        return (
          Math.max(
            Math.abs(this._mouseDownEvent.pageX - a.pageX),
            Math.abs(this._mouseDownEvent.pageY - a.pageY)
          ) >= this.options.distance
        )
      },
      _mouseDelayMet: function (a) {
        return this.mouseDelayMet
      },
      _mouseStart: function (a) {},
      _mouseDrag: function (a) {},
      _mouseStop: function (a) {},
      _mouseCapture: function (a) {
        return !0
      },
    })
})(jQuery)
/*
 * jQuery UI Position 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */ ;(function (a, b) {
  a.ui = a.ui || {}
  var c = /left|center|right/,
    d = /top|center|bottom/,
    e = 'center',
    f = {},
    g = a.fn.position,
    h = a.fn.offset
  ;(a.fn.position = function (b) {
    if (!b || !b.of) return g.apply(this, arguments)
    b = a.extend({}, b)
    var h = a(b.of),
      i = h[0],
      j = (b.collision || 'flip').split(' '),
      k = b.offset ? b.offset.split(' ') : [0, 0],
      l,
      m,
      n
    i.nodeType === 9
      ? ((l = h.width()), (m = h.height()), (n = { top: 0, left: 0 }))
      : i.setTimeout
      ? ((l = h.width()), (m = h.height()), (n = { top: h.scrollTop(), left: h.scrollLeft() }))
      : i.preventDefault
      ? ((b.at = 'left top'), (l = m = 0), (n = { top: b.of.pageY, left: b.of.pageX }))
      : ((l = h.outerWidth()), (m = h.outerHeight()), (n = h.offset())),
      a.each(['my', 'at'], function () {
        var a = (b[this] || '').split(' ')
        a.length === 1 &&
          (a = c.test(a[0]) ? a.concat([e]) : d.test(a[0]) ? [e].concat(a) : [e, e]),
          (a[0] = c.test(a[0]) ? a[0] : e),
          (a[1] = d.test(a[1]) ? a[1] : e),
          (b[this] = a)
      }),
      j.length === 1 && (j[1] = j[0]),
      (k[0] = parseInt(k[0], 10) || 0),
      k.length === 1 && (k[1] = k[0]),
      (k[1] = parseInt(k[1], 10) || 0),
      b.at[0] === 'right' ? (n.left += l) : b.at[0] === e && (n.left += l / 2),
      b.at[1] === 'bottom' ? (n.top += m) : b.at[1] === e && (n.top += m / 2),
      (n.left += k[0]),
      (n.top += k[1])
    return this.each(function () {
      var c = a(this),
        d = c.outerWidth(),
        g = c.outerHeight(),
        h = parseInt(a.curCSS(this, 'marginLeft', !0)) || 0,
        i = parseInt(a.curCSS(this, 'marginTop', !0)) || 0,
        o = d + h + (parseInt(a.curCSS(this, 'marginRight', !0)) || 0),
        p = g + i + (parseInt(a.curCSS(this, 'marginBottom', !0)) || 0),
        q = a.extend({}, n),
        r
      b.my[0] === 'right' ? (q.left -= d) : b.my[0] === e && (q.left -= d / 2),
        b.my[1] === 'bottom' ? (q.top -= g) : b.my[1] === e && (q.top -= g / 2),
        f.fractions || ((q.left = Math.round(q.left)), (q.top = Math.round(q.top))),
        (r = { left: q.left - h, top: q.top - i }),
        a.each(['left', 'top'], function (c, e) {
          a.ui.position[j[c]] &&
            a.ui.position[j[c]][e](q, {
              targetWidth: l,
              targetHeight: m,
              elemWidth: d,
              elemHeight: g,
              collisionPosition: r,
              collisionWidth: o,
              collisionHeight: p,
              offset: k,
              my: b.my,
              at: b.at,
            })
        }),
        a.fn.bgiframe && c.bgiframe(),
        c.offset(a.extend(q, { using: b.using }))
    })
  }),
    (a.ui.position = {
      fit: {
        left: function (b, c) {
          var d = a(window),
            e = c.collisionPosition.left + c.collisionWidth - d.width() - d.scrollLeft()
          b.left = e > 0 ? b.left - e : Math.max(b.left - c.collisionPosition.left, b.left)
        },
        top: function (b, c) {
          var d = a(window),
            e = c.collisionPosition.top + c.collisionHeight - d.height() - d.scrollTop()
          b.top = e > 0 ? b.top - e : Math.max(b.top - c.collisionPosition.top, b.top)
        },
      },
      flip: {
        left: function (b, c) {
          if (c.at[0] !== e) {
            var d = a(window),
              f = c.collisionPosition.left + c.collisionWidth - d.width() - d.scrollLeft(),
              g = c.my[0] === 'left' ? -c.elemWidth : c.my[0] === 'right' ? c.elemWidth : 0,
              h = c.at[0] === 'left' ? c.targetWidth : -c.targetWidth,
              i = -2 * c.offset[0]
            b.left += c.collisionPosition.left < 0 ? g + h + i : f > 0 ? g + h + i : 0
          }
        },
        top: function (b, c) {
          if (c.at[1] !== e) {
            var d = a(window),
              f = c.collisionPosition.top + c.collisionHeight - d.height() - d.scrollTop(),
              g = c.my[1] === 'top' ? -c.elemHeight : c.my[1] === 'bottom' ? c.elemHeight : 0,
              h = c.at[1] === 'top' ? c.targetHeight : -c.targetHeight,
              i = -2 * c.offset[1]
            b.top += c.collisionPosition.top < 0 ? g + h + i : f > 0 ? g + h + i : 0
          }
        },
      },
    }),
    a.offset.setOffset ||
      ((a.offset.setOffset = function (b, c) {
        ;/static/.test(a.curCSS(b, 'position')) && (b.style.position = 'relative')
        var d = a(b),
          e = d.offset(),
          f = parseInt(a.curCSS(b, 'top', !0), 10) || 0,
          g = parseInt(a.curCSS(b, 'left', !0), 10) || 0,
          h = { top: c.top - e.top + f, left: c.left - e.left + g }
        'using' in c ? c.using.call(b, h) : d.css(h)
      }),
      (a.fn.offset = function (b) {
        var c = this[0]
        if (!c || !c.ownerDocument) return null
        if (b)
          return this.each(function () {
            a.offset.setOffset(this, b)
          })
        return h.call(this)
      })),
    (function () {
      var b = document.getElementsByTagName('body')[0],
        c = document.createElement('div'),
        d,
        e,
        g,
        h,
        i
      ;(d = document.createElement(b ? 'div' : 'body')),
        (g = {
          visibility: 'hidden',
          width: 0,
          height: 0,
          border: 0,
          margin: 0,
          background: 'none',
        }),
        b && a.extend(g, { position: 'absolute', left: '-1000px', top: '-1000px' })
      for (var j in g) d.style[j] = g[j]
      d.appendChild(c),
        (e = b || document.documentElement),
        e.insertBefore(d, e.firstChild),
        (c.style.cssText =
          'position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;'),
        (h = a(c)
          .offset(function (a, b) {
            return b
          })
          .offset()),
        (d.innerHTML = ''),
        e.removeChild(d),
        (i = h.top + h.left + (b ? 2e3 : 0)),
        (f.fractions = i > 21 && i < 22)
    })()
})(jQuery)
/*
 * jQuery UI Draggable 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */ ;(function (a, b) {
  a.widget('ui.draggable', a.ui.mouse, {
    widgetEventPrefix: 'drag',
    options: {
      addClasses: !0,
      appendTo: 'parent',
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: 'auto',
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: 'original',
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: 'default',
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: 'both',
      snapTolerance: 20,
      stack: !1,
      zIndex: !1,
    },
    _create: function () {
      this.options.helper == 'original' &&
        !/^(?:r|a|f)/.test(this.element.css('position')) &&
        (this.element[0].style.position = 'relative'),
        this.options.addClasses && this.element.addClass('ui-draggable'),
        this.options.disabled && this.element.addClass('ui-draggable-disabled'),
        this._mouseInit()
    },
    destroy: function () {
      if (!!this.element.data('draggable')) {
        this.element
          .removeData('draggable')
          .unbind('.draggable')
          .removeClass('ui-draggable ui-draggable-dragging ui-draggable-disabled'),
          this._mouseDestroy()
        return this
      }
    },
    _mouseCapture: function (b) {
      var c = this.options
      if (this.helper || c.disabled || a(b.target).is('.ui-resizable-handle')) return !1
      this.handle = this._getHandle(b)
      if (!this.handle) return !1
      c.iframeFix &&
        a(c.iframeFix === !0 ? 'iframe' : c.iframeFix).each(function () {
          a('<div className="ui-draggable-iframeFix" style="background: #fff;"></div>')
            .css({
              width: this.offsetWidth + 'px',
              height: this.offsetHeight + 'px',
              position: 'absolute',
              opacity: '0.001',
              zIndex: 1e3,
            })
            .css(a(this).offset())
            .appendTo('body')
        })
      return !0
    },
    _mouseStart: function (b) {
      var c = this.options
      ;(this.helper = this._createHelper(b)),
        this._cacheHelperProportions(),
        a.ui.ddmanager && (a.ui.ddmanager.current = this),
        this._cacheMargins(),
        (this.cssPosition = this.helper.css('position')),
        (this.scrollParent = this.helper.scrollParent()),
        (this.offset = this.positionAbs = this.element.offset()),
        (this.offset = {
          top: this.offset.top - this.margins.top,
          left: this.offset.left - this.margins.left,
        }),
        a.extend(this.offset, {
          click: { left: b.pageX - this.offset.left, top: b.pageY - this.offset.top },
          parent: this._getParentOffset(),
          relative: this._getRelativeOffset(),
        }),
        (this.originalPosition = this.position = this._generatePosition(b)),
        (this.originalPageX = b.pageX),
        (this.originalPageY = b.pageY),
        c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt),
        c.containment && this._setContainment()
      if (this._trigger('start', b) === !1) {
        this._clear()
        return !1
      }
      this._cacheHelperProportions(),
        a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b),
        this.helper.addClass('ui-draggable-dragging'),
        this._mouseDrag(b, !0),
        a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b)
      return !0
    },
    _mouseDrag: function (b, c) {
      ;(this.position = this._generatePosition(b)),
        (this.positionAbs = this._convertPositionTo('absolute'))
      if (!c) {
        var d = this._uiHash()
        if (this._trigger('drag', b, d) === !1) {
          this._mouseUp({})
          return !1
        }
        this.position = d.position
      }
      if (!this.options.axis || this.options.axis != 'y')
        this.helper[0].style.left = this.position.left + 'px'
      if (!this.options.axis || this.options.axis != 'x')
        this.helper[0].style.top = this.position.top + 'px'
      a.ui.ddmanager && a.ui.ddmanager.drag(this, b)
      return !1
    },
    _mouseStop: function (b) {
      var c = !1
      a.ui.ddmanager && !this.options.dropBehaviour && (c = a.ui.ddmanager.drop(this, b)),
        this.dropped && ((c = this.dropped), (this.dropped = !1))
      if ((!this.element[0] || !this.element[0].parentNode) && this.options.helper == 'original')
        return !1
      if (
        (this.options.revert == 'invalid' && !c) ||
        (this.options.revert == 'valid' && c) ||
        this.options.revert === !0 ||
        (a.isFunction(this.options.revert) && this.options.revert.call(this.element, c))
      ) {
        var d = this
        a(this.helper).animate(
          this.originalPosition,
          parseInt(this.options.revertDuration, 10),
          function () {
            d._trigger('stop', b) !== !1 && d._clear()
          }
        )
      } else this._trigger('stop', b) !== !1 && this._clear()
      return !1
    },
    _mouseUp: function (b) {
      this.options.iframeFix === !0 &&
        a('div.ui-draggable-iframeFix').each(function () {
          this.parentNode.removeChild(this)
        }),
        a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b)
      return a.ui.mouse.prototype._mouseUp.call(this, b)
    },
    cancel: function () {
      this.helper.is('.ui-draggable-dragging') ? this._mouseUp({}) : this._clear()
      return this
    },
    _getHandle: function (b) {
      var c = !this.options.handle || !a(this.options.handle, this.element).length ? !0 : !1
      a(this.options.handle, this.element)
        .find('*')
        .andSelf()
        .each(function () {
          this == b.target && (c = !0)
        })
      return c
    },
    _createHelper: function (b) {
      var c = this.options,
        d = a.isFunction(c.helper)
          ? a(c.helper.apply(this.element[0], [b]))
          : c.helper == 'clone'
          ? this.element.clone().removeAttr('id')
          : this.element
      d.parents('body').length ||
        d.appendTo(c.appendTo == 'parent' ? this.element[0].parentNode : c.appendTo),
        d[0] != this.element[0] &&
          !/(fixed|absolute)/.test(d.css('position')) &&
          d.css('position', 'absolute')
      return d
    },
    _adjustOffsetFromHelper: function (b) {
      typeof b == 'string' && (b = b.split(' ')),
        a.isArray(b) && (b = { left: +b[0], top: +b[1] || 0 }),
        'left' in b && (this.offset.click.left = b.left + this.margins.left),
        'right' in b &&
          (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left),
        'top' in b && (this.offset.click.top = b.top + this.margins.top),
        'bottom' in b &&
          (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
    },
    _getParentOffset: function () {
      this.offsetParent = this.helper.offsetParent()
      var b = this.offsetParent.offset()
      this.cssPosition == 'absolute' &&
        this.scrollParent[0] != document &&
        a.ui.contains(this.scrollParent[0], this.offsetParent[0]) &&
        ((b.left += this.scrollParent.scrollLeft()), (b.top += this.scrollParent.scrollTop()))
      if (
        this.offsetParent[0] == document.body ||
        (this.offsetParent[0].tagName &&
          this.offsetParent[0].tagName.toLowerCase() == 'html' &&
          a.browser.msie)
      )
        b = { top: 0, left: 0 }
      return {
        top: b.top + (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0),
        left: b.left + (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0),
      }
    },
    _getRelativeOffset: function () {
      if (this.cssPosition == 'relative') {
        var a = this.element.position()
        return {
          top: a.top - (parseInt(this.helper.css('top'), 10) || 0) + this.scrollParent.scrollTop(),
          left:
            a.left - (parseInt(this.helper.css('left'), 10) || 0) + this.scrollParent.scrollLeft(),
        }
      }
      return { top: 0, left: 0 }
    },
    _cacheMargins: function () {
      this.margins = {
        left: parseInt(this.element.css('marginLeft'), 10) || 0,
        top: parseInt(this.element.css('marginTop'), 10) || 0,
        right: parseInt(this.element.css('marginRight'), 10) || 0,
        bottom: parseInt(this.element.css('marginBottom'), 10) || 0,
      }
    },
    _cacheHelperProportions: function () {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight(),
      }
    },
    _setContainment: function () {
      var b = this.options
      b.containment == 'parent' && (b.containment = this.helper[0].parentNode)
      if (b.containment == 'document' || b.containment == 'window')
        this.containment = [
          b.containment == 'document'
            ? 0
            : a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
          b.containment == 'document'
            ? 0
            : a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,
          (b.containment == 'document' ? 0 : a(window).scrollLeft()) +
            a(b.containment == 'document' ? document : window).width() -
            this.helperProportions.width -
            this.margins.left,
          (b.containment == 'document' ? 0 : a(window).scrollTop()) +
            (a(b.containment == 'document' ? document : window).height() ||
              document.body.parentNode.scrollHeight) -
            this.helperProportions.height -
            this.margins.top,
        ]
      if (!/^(document|window|parent)$/.test(b.containment) && b.containment.constructor != Array) {
        var c = a(b.containment),
          d = c[0]
        if (!d) return
        var e = c.offset(),
          f = a(d).css('overflow') != 'hidden'
        ;(this.containment = [
          (parseInt(a(d).css('borderLeftWidth'), 10) || 0) +
            (parseInt(a(d).css('paddingLeft'), 10) || 0),
          (parseInt(a(d).css('borderTopWidth'), 10) || 0) +
            (parseInt(a(d).css('paddingTop'), 10) || 0),
          (f ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) -
            (parseInt(a(d).css('borderLeftWidth'), 10) || 0) -
            (parseInt(a(d).css('paddingRight'), 10) || 0) -
            this.helperProportions.width -
            this.margins.left -
            this.margins.right,
          (f ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) -
            (parseInt(a(d).css('borderTopWidth'), 10) || 0) -
            (parseInt(a(d).css('paddingBottom'), 10) || 0) -
            this.helperProportions.height -
            this.margins.top -
            this.margins.bottom,
        ]),
          (this.relative_container = c)
      } else b.containment.constructor == Array && (this.containment = b.containment)
    },
    _convertPositionTo: function (b, c) {
      c || (c = this.position)
      var d = b == 'absolute' ? 1 : -1,
        e = this.options,
        f =
          this.cssPosition == 'absolute' &&
          (this.scrollParent[0] == document ||
            !a.ui.contains(this.scrollParent[0], this.offsetParent[0]))
            ? this.offsetParent
            : this.scrollParent,
        g = /(html|body)/i.test(f[0].tagName)
      return {
        top:
          c.top +
          this.offset.relative.top * d +
          this.offset.parent.top * d -
          (a.browser.safari && a.browser.version < 526 && this.cssPosition == 'fixed'
            ? 0
            : (this.cssPosition == 'fixed'
                ? -this.scrollParent.scrollTop()
                : g
                ? 0
                : f.scrollTop()) * d),
        left:
          c.left +
          this.offset.relative.left * d +
          this.offset.parent.left * d -
          (a.browser.safari && a.browser.version < 526 && this.cssPosition == 'fixed'
            ? 0
            : (this.cssPosition == 'fixed'
                ? -this.scrollParent.scrollLeft()
                : g
                ? 0
                : f.scrollLeft()) * d),
      }
    },
    _generatePosition: function (b) {
      var c = this.options,
        d =
          this.cssPosition == 'absolute' &&
          (this.scrollParent[0] == document ||
            !a.ui.contains(this.scrollParent[0], this.offsetParent[0]))
            ? this.offsetParent
            : this.scrollParent,
        e = /(html|body)/i.test(d[0].tagName),
        f = b.pageX,
        g = b.pageY
      if (this.originalPosition) {
        var h
        if (this.containment) {
          if (this.relative_container) {
            var i = this.relative_container.offset()
            h = [
              this.containment[0] + i.left,
              this.containment[1] + i.top,
              this.containment[2] + i.left,
              this.containment[3] + i.top,
            ]
          } else h = this.containment
          b.pageX - this.offset.click.left < h[0] && (f = h[0] + this.offset.click.left),
            b.pageY - this.offset.click.top < h[1] && (g = h[1] + this.offset.click.top),
            b.pageX - this.offset.click.left > h[2] && (f = h[2] + this.offset.click.left),
            b.pageY - this.offset.click.top > h[3] && (g = h[3] + this.offset.click.top)
        }
        if (c.grid) {
          var j = c.grid[1]
            ? this.originalPageY + Math.round((g - this.originalPageY) / c.grid[1]) * c.grid[1]
            : this.originalPageY
          g = h
            ? j - this.offset.click.top < h[1] || j - this.offset.click.top > h[3]
              ? j - this.offset.click.top < h[1]
                ? j + c.grid[1]
                : j - c.grid[1]
              : j
            : j
          var k = c.grid[0]
            ? this.originalPageX + Math.round((f - this.originalPageX) / c.grid[0]) * c.grid[0]
            : this.originalPageX
          f = h
            ? k - this.offset.click.left < h[0] || k - this.offset.click.left > h[2]
              ? k - this.offset.click.left < h[0]
                ? k + c.grid[0]
                : k - c.grid[0]
              : k
            : k
        }
      }
      return {
        top:
          g -
          this.offset.click.top -
          this.offset.relative.top -
          this.offset.parent.top +
          (a.browser.safari && a.browser.version < 526 && this.cssPosition == 'fixed'
            ? 0
            : this.cssPosition == 'fixed'
            ? -this.scrollParent.scrollTop()
            : e
            ? 0
            : d.scrollTop()),
        left:
          f -
          this.offset.click.left -
          this.offset.relative.left -
          this.offset.parent.left +
          (a.browser.safari && a.browser.version < 526 && this.cssPosition == 'fixed'
            ? 0
            : this.cssPosition == 'fixed'
            ? -this.scrollParent.scrollLeft()
            : e
            ? 0
            : d.scrollLeft()),
      }
    },
    _clear: function () {
      this.helper.removeClass('ui-draggable-dragging'),
        this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove(),
        (this.helper = null),
        (this.cancelHelperRemoval = !1)
    },
    _trigger: function (b, c, d) {
      ;(d = d || this._uiHash()),
        a.ui.plugin.call(this, b, [c, d]),
        b == 'drag' && (this.positionAbs = this._convertPositionTo('absolute'))
      return a.Widget.prototype._trigger.call(this, b, c, d)
    },
    plugins: {},
    _uiHash: function (a) {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs,
      }
    },
  }),
    a.extend(a.ui.draggable, { version: '1.8.18' }),
    a.ui.plugin.add('draggable', 'connectToSortable', {
      start: function (b, c) {
        var d = a(this).data('draggable'),
          e = d.options,
          f = a.extend({}, c, { item: d.element })
        ;(d.sortables = []),
          a(e.connectToSortable).each(function () {
            var c = a.data(this, 'sortable')
            c &&
              !c.options.disabled &&
              (d.sortables.push({ instance: c, shouldRevert: c.options.revert }),
              c.refreshPositions(),
              c._trigger('activate', b, f))
          })
      },
      stop: function (b, c) {
        var d = a(this).data('draggable'),
          e = a.extend({}, c, { item: d.element })
        a.each(d.sortables, function () {
          this.instance.isOver
            ? ((this.instance.isOver = 0),
              (d.cancelHelperRemoval = !0),
              (this.instance.cancelHelperRemoval = !1),
              this.shouldRevert && (this.instance.options.revert = !0),
              this.instance._mouseStop(b),
              (this.instance.options.helper = this.instance.options._helper),
              d.options.helper == 'original' &&
                this.instance.currentItem.css({ top: 'auto', left: 'auto' }))
            : ((this.instance.cancelHelperRemoval = !1), this.instance._trigger('deactivate', b, e))
        })
      },
      drag: function (b, c) {
        var d = a(this).data('draggable'),
          e = this,
          f = function (b) {
            var c = this.offset.click.top,
              d = this.offset.click.left,
              e = this.positionAbs.top,
              f = this.positionAbs.left,
              g = b.height,
              h = b.width,
              i = b.top,
              j = b.left
            return a.ui.isOver(e + c, f + d, i, j, g, h)
          }
        a.each(d.sortables, function (f) {
          ;(this.instance.positionAbs = d.positionAbs),
            (this.instance.helperProportions = d.helperProportions),
            (this.instance.offset.click = d.offset.click),
            this.instance._intersectsWith(this.instance.containerCache)
              ? (this.instance.isOver ||
                  ((this.instance.isOver = 1),
                  (this.instance.currentItem = a(e)
                    .clone()
                    .removeAttr('id')
                    .appendTo(this.instance.element)
                    .data('sortable-item', !0)),
                  (this.instance.options._helper = this.instance.options.helper),
                  (this.instance.options.helper = function () {
                    return c.helper[0]
                  }),
                  (b.target = this.instance.currentItem[0]),
                  this.instance._mouseCapture(b, !0),
                  this.instance._mouseStart(b, !0, !0),
                  (this.instance.offset.click.top = d.offset.click.top),
                  (this.instance.offset.click.left = d.offset.click.left),
                  (this.instance.offset.parent.left -=
                    d.offset.parent.left - this.instance.offset.parent.left),
                  (this.instance.offset.parent.top -=
                    d.offset.parent.top - this.instance.offset.parent.top),
                  d._trigger('toSortable', b),
                  (d.dropped = this.instance.element),
                  (d.currentItem = d.element),
                  (this.instance.fromOutside = d)),
                this.instance.currentItem && this.instance._mouseDrag(b))
              : this.instance.isOver &&
                ((this.instance.isOver = 0),
                (this.instance.cancelHelperRemoval = !0),
                (this.instance.options.revert = !1),
                this.instance._trigger('out', b, this.instance._uiHash(this.instance)),
                this.instance._mouseStop(b, !0),
                (this.instance.options.helper = this.instance.options._helper),
                this.instance.currentItem.remove(),
                this.instance.placeholder && this.instance.placeholder.remove(),
                d._trigger('fromSortable', b),
                (d.dropped = !1))
        })
      },
    }),
    a.ui.plugin.add('draggable', 'cursor', {
      start: function (b, c) {
        var d = a('body'),
          e = a(this).data('draggable').options
        d.css('cursor') && (e._cursor = d.css('cursor')), d.css('cursor', e.cursor)
      },
      stop: function (b, c) {
        var d = a(this).data('draggable').options
        d._cursor && a('body').css('cursor', d._cursor)
      },
    }),
    a.ui.plugin.add('draggable', 'opacity', {
      start: function (b, c) {
        var d = a(c.helper),
          e = a(this).data('draggable').options
        d.css('opacity') && (e._opacity = d.css('opacity')), d.css('opacity', e.opacity)
      },
      stop: function (b, c) {
        var d = a(this).data('draggable').options
        d._opacity && a(c.helper).css('opacity', d._opacity)
      },
    }),
    a.ui.plugin.add('draggable', 'scroll', {
      start: function (b, c) {
        var d = a(this).data('draggable')
        d.scrollParent[0] != document &&
          d.scrollParent[0].tagName != 'HTML' &&
          (d.overflowOffset = d.scrollParent.offset())
      },
      drag: function (b, c) {
        var d = a(this).data('draggable'),
          e = d.options,
          f = !1
        if (d.scrollParent[0] != document && d.scrollParent[0].tagName != 'HTML') {
          if (!e.axis || e.axis != 'x')
            d.overflowOffset.top + d.scrollParent[0].offsetHeight - b.pageY < e.scrollSensitivity
              ? (d.scrollParent[0].scrollTop = f = d.scrollParent[0].scrollTop + e.scrollSpeed)
              : b.pageY - d.overflowOffset.top < e.scrollSensitivity &&
                (d.scrollParent[0].scrollTop = f = d.scrollParent[0].scrollTop - e.scrollSpeed)
          if (!e.axis || e.axis != 'y')
            d.overflowOffset.left + d.scrollParent[0].offsetWidth - b.pageX < e.scrollSensitivity
              ? (d.scrollParent[0].scrollLeft = f = d.scrollParent[0].scrollLeft + e.scrollSpeed)
              : b.pageX - d.overflowOffset.left < e.scrollSensitivity &&
                (d.scrollParent[0].scrollLeft = f = d.scrollParent[0].scrollLeft - e.scrollSpeed)
        } else {
          if (!e.axis || e.axis != 'x')
            b.pageY - a(document).scrollTop() < e.scrollSensitivity
              ? (f = a(document).scrollTop(a(document).scrollTop() - e.scrollSpeed))
              : a(window).height() - (b.pageY - a(document).scrollTop()) < e.scrollSensitivity &&
                (f = a(document).scrollTop(a(document).scrollTop() + e.scrollSpeed))
          if (!e.axis || e.axis != 'y')
            b.pageX - a(document).scrollLeft() < e.scrollSensitivity
              ? (f = a(document).scrollLeft(a(document).scrollLeft() - e.scrollSpeed))
              : a(window).width() - (b.pageX - a(document).scrollLeft()) < e.scrollSensitivity &&
                (f = a(document).scrollLeft(a(document).scrollLeft() + e.scrollSpeed))
        }
        f !== !1 && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b)
      },
    }),
    a.ui.plugin.add('draggable', 'snap', {
      start: function (b, c) {
        var d = a(this).data('draggable'),
          e = d.options
        ;(d.snapElements = []),
          a(e.snap.constructor != String ? e.snap.items || ':data(draggable)' : e.snap).each(
            function () {
              var b = a(this),
                c = b.offset()
              this != d.element[0] &&
                d.snapElements.push({
                  item: this,
                  width: b.outerWidth(),
                  height: b.outerHeight(),
                  top: c.top,
                  left: c.left,
                })
            }
          )
      },
      drag: function (b, c) {
        var d = a(this).data('draggable'),
          e = d.options,
          f = e.snapTolerance,
          g = c.offset.left,
          h = g + d.helperProportions.width,
          i = c.offset.top,
          j = i + d.helperProportions.height
        for (var k = d.snapElements.length - 1; k >= 0; k--) {
          var l = d.snapElements[k].left,
            m = l + d.snapElements[k].width,
            n = d.snapElements[k].top,
            o = n + d.snapElements[k].height
          if (
            !(
              (l - f < g && g < m + f && n - f < i && i < o + f) ||
              (l - f < g && g < m + f && n - f < j && j < o + f) ||
              (l - f < h && h < m + f && n - f < i && i < o + f) ||
              (l - f < h && h < m + f && n - f < j && j < o + f)
            )
          ) {
            d.snapElements[k].snapping &&
              d.options.snap.release &&
              d.options.snap.release.call(
                d.element,
                b,
                a.extend(d._uiHash(), { snapItem: d.snapElements[k].item })
              ),
              (d.snapElements[k].snapping = !1)
            continue
          }
          if (e.snapMode != 'inner') {
            var p = Math.abs(n - j) <= f,
              q = Math.abs(o - i) <= f,
              r = Math.abs(l - h) <= f,
              s = Math.abs(m - g) <= f
            p &&
              (c.position.top =
                d._convertPositionTo('relative', { top: n - d.helperProportions.height, left: 0 })
                  .top - d.margins.top),
              q &&
                (c.position.top =
                  d._convertPositionTo('relative', { top: o, left: 0 }).top - d.margins.top),
              r &&
                (c.position.left =
                  d._convertPositionTo('relative', { top: 0, left: l - d.helperProportions.width })
                    .left - d.margins.left),
              s &&
                (c.position.left =
                  d._convertPositionTo('relative', { top: 0, left: m }).left - d.margins.left)
          }
          var t = p || q || r || s
          if (e.snapMode != 'outer') {
            var p = Math.abs(n - i) <= f,
              q = Math.abs(o - j) <= f,
              r = Math.abs(l - g) <= f,
              s = Math.abs(m - h) <= f
            p &&
              (c.position.top =
                d._convertPositionTo('relative', { top: n, left: 0 }).top - d.margins.top),
              q &&
                (c.position.top =
                  d._convertPositionTo('relative', { top: o - d.helperProportions.height, left: 0 })
                    .top - d.margins.top),
              r &&
                (c.position.left =
                  d._convertPositionTo('relative', { top: 0, left: l }).left - d.margins.left),
              s &&
                (c.position.left =
                  d._convertPositionTo('relative', { top: 0, left: m - d.helperProportions.width })
                    .left - d.margins.left)
          }
          !d.snapElements[k].snapping &&
            (p || q || r || s || t) &&
            d.options.snap.snap &&
            d.options.snap.snap.call(
              d.element,
              b,
              a.extend(d._uiHash(), { snapItem: d.snapElements[k].item })
            ),
            (d.snapElements[k].snapping = p || q || r || s || t)
        }
      },
    }),
    a.ui.plugin.add('draggable', 'stack', {
      start: function (b, c) {
        var d = a(this).data('draggable').options,
          e = a.makeArray(a(d.stack)).sort(function (b, c) {
            return (parseInt(a(b).css('zIndex'), 10) || 0) - (parseInt(a(c).css('zIndex'), 10) || 0)
          })
        if (!!e.length) {
          var f = parseInt(e[0].style.zIndex) || 0
          a(e).each(function (a) {
            this.style.zIndex = f + a
          }),
            (this[0].style.zIndex = f + e.length)
        }
      },
    }),
    a.ui.plugin.add('draggable', 'zIndex', {
      start: function (b, c) {
        var d = a(c.helper),
          e = a(this).data('draggable').options
        d.css('zIndex') && (e._zIndex = d.css('zIndex')), d.css('zIndex', e.zIndex)
      },
      stop: function (b, c) {
        var d = a(this).data('draggable').options
        d._zIndex && a(c.helper).css('zIndex', d._zIndex)
      },
    })
})(jQuery)
/*
 * jQuery UI Effects 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */ jQuery.effects ||
  (function (a, b) {
    function l(b) {
      if (!b || typeof b == 'number' || a.fx.speeds[b]) return !0
      if (typeof b == 'string' && !a.effects[b]) return !0
      return !1
    }
    function k(b, c, d, e) {
      typeof b == 'object' && ((e = c), (d = null), (c = b), (b = c.effect)),
        a.isFunction(c) && ((e = c), (d = null), (c = {}))
      if (typeof c == 'number' || a.fx.speeds[c]) (e = d), (d = c), (c = {})
      a.isFunction(d) && ((e = d), (d = null)),
        (c = c || {}),
        (d = d || c.duration),
        (d = a.fx.off
          ? 0
          : typeof d == 'number'
          ? d
          : d in a.fx.speeds
          ? a.fx.speeds[d]
          : a.fx.speeds._default),
        (e = e || c.complete)
      return [b, c, d, e]
    }
    function j(a, b) {
      var c = { _: 0 },
        d
      for (d in b) a[d] != b[d] && (c[d] = b[d])
      return c
    }
    function i(b) {
      var c, d
      for (c in b)
        (d = b[c]),
          (d == null ||
            a.isFunction(d) ||
            c in g ||
            /scrollbar/.test(c) ||
            (!/color/i.test(c) && isNaN(parseFloat(d)))) &&
            delete b[c]
      return b
    }
    function h() {
      var a = document.defaultView
          ? document.defaultView.getComputedStyle(this, null)
          : this.currentStyle,
        b = {},
        c,
        d
      if (a && a.length && a[0] && a[a[0]]) {
        var e = a.length
        while (e--)
          (c = a[e]),
            typeof a[c] == 'string' &&
              ((d = c.replace(/\-(\w)/g, function (a, b) {
                return b.toUpperCase()
              })),
              (b[d] = a[c]))
      } else for (c in a) typeof a[c] == 'string' && (b[c] = a[c])
      return b
    }
    function d(b, d) {
      var e
      do {
        e = a.curCSS(b, d)
        if ((e != '' && e != 'transparent') || a.nodeName(b, 'body')) break
        d = 'backgroundColor'
      } while ((b = b.parentNode))
      return c(e)
    }
    function c(b) {
      var c
      if (b && b.constructor == Array && b.length == 3) return b
      if ((c = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b)))
        return [parseInt(c[1], 10), parseInt(c[2], 10), parseInt(c[3], 10)]
      if (
        (c =
          /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(
            b
          ))
      )
        return [parseFloat(c[1]) * 2.55, parseFloat(c[2]) * 2.55, parseFloat(c[3]) * 2.55]
      if ((c = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b)))
        return [parseInt(c[1], 16), parseInt(c[2], 16), parseInt(c[3], 16)]
      if ((c = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b)))
        return [parseInt(c[1] + c[1], 16), parseInt(c[2] + c[2], 16), parseInt(c[3] + c[3], 16)]
      if ((c = /rgba\(0, 0, 0, 0\)/.exec(b))) return e.transparent
      return e[a.trim(b).toLowerCase()]
    }
    ;(a.effects = {}),
      a.each(
        [
          'backgroundColor',
          'borderBottomColor',
          'borderLeftColor',
          'borderRightColor',
          'borderTopColor',
          'borderColor',
          'color',
          'outlineColor',
        ],
        function (b, e) {
          a.fx.step[e] = function (a) {
            a.colorInit || ((a.start = d(a.elem, e)), (a.end = c(a.end)), (a.colorInit = !0)),
              (a.elem.style[e] =
                'rgb(' +
                Math.max(
                  Math.min(parseInt(a.pos * (a.end[0] - a.start[0]) + a.start[0], 10), 255),
                  0
                ) +
                ',' +
                Math.max(
                  Math.min(parseInt(a.pos * (a.end[1] - a.start[1]) + a.start[1], 10), 255),
                  0
                ) +
                ',' +
                Math.max(
                  Math.min(parseInt(a.pos * (a.end[2] - a.start[2]) + a.start[2], 10), 255),
                  0
                ) +
                ')')
          }
        }
      )
    var e = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0],
        transparent: [255, 255, 255],
      },
      f = ['add', 'remove', 'toggle'],
      g = {
        border: 1,
        borderBottom: 1,
        borderColor: 1,
        borderLeft: 1,
        borderRight: 1,
        borderTop: 1,
        borderWidth: 1,
        margin: 1,
        padding: 1,
      }
    ;(a.effects.animateClass = function (b, c, d, e) {
      a.isFunction(d) && ((e = d), (d = null))
      return this.queue(function () {
        var g = a(this),
          k = g.attr('style') || ' ',
          l = i(h.call(this)),
          m,
          n = g.attr('className')
        a.each(f, function (a, c) {
          b[c] && g[c + 'Class'](b[c])
        }),
          (m = i(h.call(this))),
          g.attr('className', n),
          g.animate(j(l, m), {
            queue: !1,
            duration: c,
            easing: d,
            complete: function () {
              a.each(f, function (a, c) {
                b[c] && g[c + 'Class'](b[c])
              }),
                typeof g.attr('style') == 'object'
                  ? ((g.attr('style').cssText = ''), (g.attr('style').cssText = k))
                  : g.attr('style', k),
                e && e.apply(this, arguments),
                a.dequeue(this)
            },
          })
      })
    }),
      a.fn.extend({
        _addClass: a.fn.addClass,
        addClass: function (b, c, d, e) {
          return c ? a.effects.animateClass.apply(this, [{ add: b }, c, d, e]) : this._addClass(b)
        },
        _removeClass: a.fn.removeClass,
        removeClass: function (b, c, d, e) {
          return c
            ? a.effects.animateClass.apply(this, [{ remove: b }, c, d, e])
            : this._removeClass(b)
        },
        _toggleClass: a.fn.toggleClass,
        toggleClass: function (c, d, e, f, g) {
          return typeof d == 'boolean' || d === b
            ? e
              ? a.effects.animateClass.apply(this, [d ? { add: c } : { remove: c }, e, f, g])
              : this._toggleClass(c, d)
            : a.effects.animateClass.apply(this, [{ toggle: c }, d, e, f])
        },
        switchClass: function (b, c, d, e, f) {
          return a.effects.animateClass.apply(this, [{ add: c, remove: b }, d, e, f])
        },
      }),
      a.extend(a.effects, {
        version: '1.8.18',
        save: function (a, b) {
          for (var c = 0; c < b.length; c++)
            b[c] !== null && a.data('ec.storage.' + b[c], a[0].style[b[c]])
        },
        restore: function (a, b) {
          for (var c = 0; c < b.length; c++)
            b[c] !== null && a.css(b[c], a.data('ec.storage.' + b[c]))
        },
        setMode: function (a, b) {
          b == 'toggle' && (b = a.is(':hidden') ? 'show' : 'hide')
          return b
        },
        getBaseline: function (a, b) {
          var c, d
          switch (a[0]) {
            case 'top':
              c = 0
              break
            case 'middle':
              c = 0.5
              break
            case 'bottom':
              c = 1
              break
            default:
              c = a[0] / b.height
          }
          switch (a[1]) {
            case 'left':
              d = 0
              break
            case 'center':
              d = 0.5
              break
            case 'right':
              d = 1
              break
            default:
              d = a[1] / b.width
          }
          return { x: d, y: c }
        },
        createWrapper: function (b) {
          if (b.parent().is('.ui-effects-wrapper')) return b.parent()
          var c = { width: b.outerWidth(!0), height: b.outerHeight(!0), float: b.css('float') },
            d = a('<div></div>')
              .addClass('ui-effects-wrapper')
              .css({
                fontSize: '100%',
                background: 'transparent',
                border: 'none',
                margin: 0,
                padding: 0,
              }),
            e = document.activeElement
          b.wrap(d),
            (b[0] === e || a.contains(b[0], e)) && a(e).focus(),
            (d = b.parent()),
            b.css('position') == 'static'
              ? (d.css({ position: 'relative' }), b.css({ position: 'relative' }))
              : (a.extend(c, { position: b.css('position'), zIndex: b.css('z-index') }),
                a.each(['top', 'left', 'bottom', 'right'], function (a, d) {
                  ;(c[d] = b.css(d)), isNaN(parseInt(c[d], 10)) && (c[d] = 'auto')
                }),
                b.css({ position: 'relative', top: 0, left: 0, right: 'auto', bottom: 'auto' }))
          return d.css(c).show()
        },
        removeWrapper: function (b) {
          var c,
            d = document.activeElement
          if (b.parent().is('.ui-effects-wrapper')) {
            ;(c = b.parent().replaceWith(b)), (b[0] === d || a.contains(b[0], d)) && a(d).focus()
            return c
          }
          return b
        },
        setTransition: function (b, c, d, e) {
          ;(e = e || {}),
            a.each(c, function (a, c) {
              ;(unit = b.cssUnit(c)), unit[0] > 0 && (e[c] = unit[0] * d + unit[1])
            })
          return e
        },
      }),
      a.fn.extend({
        effect: function (b, c, d, e) {
          var f = k.apply(this, arguments),
            g = { options: f[1], duration: f[2], callback: f[3] },
            h = g.options.mode,
            i = a.effects[b]
          if (a.fx.off || !i)
            return h
              ? this[h](g.duration, g.callback)
              : this.each(function () {
                  g.callback && g.callback.call(this)
                })
          return i.call(this, g)
        },
        _show: a.fn.show,
        show: function (a) {
          if (l(a)) return this._show.apply(this, arguments)
          var b = k.apply(this, arguments)
          b[1].mode = 'show'
          return this.effect.apply(this, b)
        },
        _hide: a.fn.hide,
        hide: function (a) {
          if (l(a)) return this._hide.apply(this, arguments)
          var b = k.apply(this, arguments)
          b[1].mode = 'hide'
          return this.effect.apply(this, b)
        },
        __toggle: a.fn.toggle,
        toggle: function (b) {
          if (l(b) || typeof b == 'boolean' || a.isFunction(b))
            return this.__toggle.apply(this, arguments)
          var c = k.apply(this, arguments)
          c[1].mode = 'toggle'
          return this.effect.apply(this, c)
        },
        cssUnit: function (b) {
          var c = this.css(b),
            d = []
          a.each(['em', 'px', '%', 'pt'], function (a, b) {
            c.indexOf(b) > 0 && (d = [parseFloat(c), b])
          })
          return d
        },
      }),
      (a.easing.jswing = a.easing.swing),
      a.extend(a.easing, {
        def: 'easeOutQuad',
        swing: function (b, c, d, e, f) {
          return a.easing[a.easing.def](b, c, d, e, f)
        },
        easeInQuad: function (a, b, c, d, e) {
          return d * (b /= e) * b + c
        },
        easeOutQuad: function (a, b, c, d, e) {
          return -d * (b /= e) * (b - 2) + c
        },
        easeInOutQuad: function (a, b, c, d, e) {
          if ((b /= e / 2) < 1) return (d / 2) * b * b + c
          return (-d / 2) * (--b * (b - 2) - 1) + c
        },
        easeInCubic: function (a, b, c, d, e) {
          return d * (b /= e) * b * b + c
        },
        easeOutCubic: function (a, b, c, d, e) {
          return d * ((b = b / e - 1) * b * b + 1) + c
        },
        easeInOutCubic: function (a, b, c, d, e) {
          if ((b /= e / 2) < 1) return (d / 2) * b * b * b + c
          return (d / 2) * ((b -= 2) * b * b + 2) + c
        },
        easeInQuart: function (a, b, c, d, e) {
          return d * (b /= e) * b * b * b + c
        },
        easeOutQuart: function (a, b, c, d, e) {
          return -d * ((b = b / e - 1) * b * b * b - 1) + c
        },
        easeInOutQuart: function (a, b, c, d, e) {
          if ((b /= e / 2) < 1) return (d / 2) * b * b * b * b + c
          return (-d / 2) * ((b -= 2) * b * b * b - 2) + c
        },
        easeInQuint: function (a, b, c, d, e) {
          return d * (b /= e) * b * b * b * b + c
        },
        easeOutQuint: function (a, b, c, d, e) {
          return d * ((b = b / e - 1) * b * b * b * b + 1) + c
        },
        easeInOutQuint: function (a, b, c, d, e) {
          if ((b /= e / 2) < 1) return (d / 2) * b * b * b * b * b + c
          return (d / 2) * ((b -= 2) * b * b * b * b + 2) + c
        },
        easeInSine: function (a, b, c, d, e) {
          return -d * Math.cos((b / e) * (Math.PI / 2)) + d + c
        },
        easeOutSine: function (a, b, c, d, e) {
          return d * Math.sin((b / e) * (Math.PI / 2)) + c
        },
        easeInOutSine: function (a, b, c, d, e) {
          return (-d / 2) * (Math.cos((Math.PI * b) / e) - 1) + c
        },
        easeInExpo: function (a, b, c, d, e) {
          return b == 0 ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
        },
        easeOutExpo: function (a, b, c, d, e) {
          return b == e ? c + d : d * (-Math.pow(2, (-10 * b) / e) + 1) + c
        },
        easeInOutExpo: function (a, b, c, d, e) {
          if (b == 0) return c
          if (b == e) return c + d
          if ((b /= e / 2) < 1) return (d / 2) * Math.pow(2, 10 * (b - 1)) + c
          return (d / 2) * (-Math.pow(2, -10 * --b) + 2) + c
        },
        easeInCirc: function (a, b, c, d, e) {
          return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
        },
        easeOutCirc: function (a, b, c, d, e) {
          return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
        },
        easeInOutCirc: function (a, b, c, d, e) {
          if ((b /= e / 2) < 1) return (-d / 2) * (Math.sqrt(1 - b * b) - 1) + c
          return (d / 2) * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
        },
        easeInElastic: function (a, b, c, d, e) {
          var f = 1.70158,
            g = 0,
            h = d
          if (b == 0) return c
          if ((b /= e) == 1) return c + d
          g || (g = e * 0.3)
          if (h < Math.abs(d)) {
            h = d
            var f = g / 4
          } else var f = (g / (2 * Math.PI)) * Math.asin(d / h)
          return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin(((b * e - f) * 2 * Math.PI) / g)) + c
        },
        easeOutElastic: function (a, b, c, d, e) {
          var f = 1.70158,
            g = 0,
            h = d
          if (b == 0) return c
          if ((b /= e) == 1) return c + d
          g || (g = e * 0.3)
          if (h < Math.abs(d)) {
            h = d
            var f = g / 4
          } else var f = (g / (2 * Math.PI)) * Math.asin(d / h)
          return h * Math.pow(2, -10 * b) * Math.sin(((b * e - f) * 2 * Math.PI) / g) + d + c
        },
        easeInOutElastic: function (a, b, c, d, e) {
          var f = 1.70158,
            g = 0,
            h = d
          if (b == 0) return c
          if ((b /= e / 2) == 2) return c + d
          g || (g = e * 0.3 * 1.5)
          if (h < Math.abs(d)) {
            h = d
            var f = g / 4
          } else var f = (g / (2 * Math.PI)) * Math.asin(d / h)
          if (b < 1)
            return (
              -0.5 * h * Math.pow(2, 10 * (b -= 1)) * Math.sin(((b * e - f) * 2 * Math.PI) / g) + c
            )
          return (
            h * Math.pow(2, -10 * (b -= 1)) * Math.sin(((b * e - f) * 2 * Math.PI) / g) * 0.5 +
            d +
            c
          )
        },
        easeInBack: function (a, c, d, e, f, g) {
          g == b && (g = 1.70158)
          return e * (c /= f) * c * ((g + 1) * c - g) + d
        },
        easeOutBack: function (a, c, d, e, f, g) {
          g == b && (g = 1.70158)
          return e * ((c = c / f - 1) * c * ((g + 1) * c + g) + 1) + d
        },
        easeInOutBack: function (a, c, d, e, f, g) {
          g == b && (g = 1.70158)
          if ((c /= f / 2) < 1) return (e / 2) * c * c * (((g *= 1.525) + 1) * c - g) + d
          return (e / 2) * ((c -= 2) * c * (((g *= 1.525) + 1) * c + g) + 2) + d
        },
        easeInBounce: function (b, c, d, e, f) {
          return e - a.easing.easeOutBounce(b, f - c, 0, e, f) + d
        },
        easeOutBounce: function (a, b, c, d, e) {
          return (b /= e) < 1 / 2.75
            ? d * 7.5625 * b * b + c
            : b < 2 / 2.75
            ? d * (7.5625 * (b -= 1.5 / 2.75) * b + 0.75) + c
            : b < 2.5 / 2.75
            ? d * (7.5625 * (b -= 2.25 / 2.75) * b + 0.9375) + c
            : d * (7.5625 * (b -= 2.625 / 2.75) * b + 0.984375) + c
        },
        easeInOutBounce: function (b, c, d, e, f) {
          if (c < f / 2) return a.easing.easeInBounce(b, c * 2, 0, e, f) * 0.5 + d
          return a.easing.easeOutBounce(b, c * 2 - f, 0, e, f) * 0.5 + e * 0.5 + d
        },
      })
  })(jQuery)
