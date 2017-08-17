/**
 * Created by trunguyen on 8/17/17.
 */

Q.Callbacks = function(e) {
    e = "string" == typeof e ? de[e] || n(e) : Q.extend({}, e);
    var a, r, i, l, s, o, u = [], c = !e.once && [], p = function(t) {
        for (a = e.memory && t,
                 r = !0,
                 o = l || 0,
                 l = 0,
                 s = u.length,
                 i = !0; u && o < s; o++)
            if (u[o].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                a = !1;
                break
            }
        i = !1,
        u && (c ? c.length && p(c.shift()) : a ? u = [] : h.disable())
    }, h = {
        add: function() {
            if (u) {
                var t = u.length;
                !function n(t) {
                    Q.each(t, function(t, a) {
                        var r = Q.type(a);
                        "function" !== r || e.unique && h.has(a) ? a && a.length && "string" !== r && n(a) : u.push(a)
                    })
                }(arguments),
                    i ? s = u.length : a && (l = t,
                            p(a))
            }
            return this
        },
        fire: function() {
            return h.fireWith(this, arguments),
                this
        }
    };
    return h
}