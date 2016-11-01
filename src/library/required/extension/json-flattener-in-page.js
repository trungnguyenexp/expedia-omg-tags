if (document.URL.indexOf('wwwmrjetse.trunk') > -1) {
    if ('/carsearch' == document.location.pathname.toLowerCase() && navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        //do nothing. Remove this check once the new flattener is fixed.
    }
    else {
        if (!b.preload_flag && document.location.pathname.toLowerCase().indexOf('carsearch'.toLowerCase()) > -1) {
            var flattenObj_p = function (h, n) {
                var max_arr_len = 10;
                for (var x in h) {
                    if (typeof h[x] == "string" || typeof h[x] == "number" || typeof h[x] == "boolean") {
                        b[n + "." + x] = h[x];
                    }
                    else if (h[x] instanceof Array) {
                        if (h[x].length > max_arr_len) {
                            //console.log("old array length: "+h[x].length)
                            h[x] = h[x].slice(0, max_arr_len)
                            //console.log("new array length: "+h[x].length)
                        }
                        for (var idx = 0; idx < h[x].length; idx++) {
                            b[n + "." + x + "." + idx] = h[x][idx];
                            for (e in h[x][idx]) {
                                if (typeof h[x][idx] == "object") {
                                    flattenObj_p(h[x][idx], n + "." + x + "." + idx);
                                }
                            }
                        }
                    }
                    else if (typeof h[x] == "object") {
                        for (e in h[x]) {
                            flattenObj_p(h[x], n + "." + x);
                        }
                    }
                }
            }

            for (var item in b) {
                if (b[item] instanceof Array) {
                }
                else if (typeof b[item] == "object") {
                    flattenObj_p(b[item], item)
                }
            }
        }
    }
}