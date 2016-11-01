try {
    var c, d, e, f, g;
    d = b['utagPageName'];
    if (typeof d == 'undefined')
        return;
    c = [{
        'flight': b.numberOfGuests
    }, {
        'hotel': b.roomNights
    }, {
        'car': b.lengthOfStay
    }, {
        'cruise': b.numberOfGuests
    }, {
        'lx': b.numberOfGuests
    }, {
        'package': b.numberOfGuests
    }];
    var m = false;
    for (e = 0; e < c.length; e++) {
        for (f in c[e]) {
            g = new RegExp(f, 'i');
            if (g.test(d)) {
                b['krux_quantity'] = c[e][f];
                m = true
            };
        };
        if (m)
            break
    };
} catch (e) {
    utag.DB("Custom lookup table exception thrown: " + e);
}