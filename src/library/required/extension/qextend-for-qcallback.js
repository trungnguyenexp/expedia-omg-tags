/**
 * Created by trunguyen on 8/17/17.
 */

Q.extend = Q.fn.extend = function() {
    var e, n, a, r, i, l, s = arguments[0] || {}, o = 1, u = arguments.length, c = !1;
    for ("boolean" == typeof s && (c = s,
        s = arguments[1] || {},
        o = 2),
         "object" != typeof s && !Q.isFunction(s) && (s = {}),
         u === o && (s = this,
             --o); o < u; o++)
        if (null != (e = arguments[o]))
            for (n in e)
                a = s[n],
                    r = e[n],
                s !== r && (c && r && (Q.isPlainObject(r) || (i = Q.isArray(r))) ? (i ? (i = !1,
                    l = a && Q.isArray(a) ? a : []) : l = a && Q.isPlainObject(a) ? a : {},
                    s[n] = Q.extend(c, l, r)) : r !== t && (s[n] = r));
    return s
}