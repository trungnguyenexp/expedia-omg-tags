//~~tv:1153.201400916
//~~tc: Update to latest template
//      Domain Prefix functionality

//tealium universal tag - utag.sender.template ut4.0.##UTVERSION##, Copyright ##UTYEAR## Tealium.com Inc. All Rights Reserved.
try {
    (function (id, loader) {
        var u = {};
        utag.o[loader].sender[id] = u;

        // Start Tealium loader 4.32
        // Please do not modify
        if (utag === undefined) { utag = {}; } if (utag.ut === undefined) { utag.ut = {}; } if (utag.ut.loader === undefined) { u.loader = function (o) { var a, b, c, l; a = document; if (o.type === "iframe") { b = a.createElement("iframe"); b.setAttribute("height", "1"); b.setAttribute("width", "1"); b.setAttribute("style", "display:none"); b.setAttribute("src", o.src); } else if (o.type === "img") { utag.DB("Attach img: " + o.src); b = new Image(); b.src = o.src; return; } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.charset = "utf-8"; b.src = o.src; } if (o.id) { b.id = o.id; } if (typeof o.cb === "function") { if (b.addEventListener) { b.addEventListener("load", function () { o.cb(); }, false); } else { b.onreadystatechange = function () { if (this.readyState === "complete" || this.readyState === "loaded") { this.onreadystatechange = null; o.cb(); } }; } } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l === "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } }; } else { u.loader = utag.ut.loader; }
        // End Tealium loader

        u.ev = {"view" : 1};

        u.initialized = false;

    ##UTGEN##

    u.send = function (a, b) {
        if (u.ev[a] || u.ev.all !== undefined) {
            //##UTENABLEDEBUG##utag.DB("send:##UTID##");

            var c, d, e, f;

            u.data = {
                "qsp_delim" : "&",
                "kvp_delim" : "=",
                "base_url" : "https://www.tagserve.",
                "dom_suffix" : "##UTVARconfig_dom_suffix##" || "asia",
                "MID" : "##UTVARconfig_mid##",
                "PID" : "##UTVARconfig_pid##",
                // E-Commerce Vars
                "NUMOFITEMS" : "",
                "SUBID" : "",
                "CAT": "", // custom - added CAT per vendor request
                "order_id" : "",
                "order_total" : "",
                "order_currency" : "",
                "customer_id" : "",
                "product_quantity" : []
            };

            // Start tag-scoped extensions
        ##UTEXTEND##
            // End tag-scoped extensions

            c = [];

            // Start Mapping
            for (d in utag.loader.GV(u.map)) {
                if (b[d] !== undefined && b[d] !== "") {
                    e = u.map[d].split(",");
                    for (f = 0; f < e.length; f++) {
                        if (e[f] == "base_url") {
                            u.data[e[f]] = b[d];
                        } else {
                            u.data[e[f]] = encodeURIComponent(b[d]);
                        }
                    }
                }
            }
            // End Mapping

            // Pull E-Commerce extension values
            // Mappings override E-Commerce extension values
            u.data.order_id = (u.data['ORDERID'] || u.data.order_id || b._corder || "");

            if (u.data.order_id) {
                u.data.customer_id = (u.data['CRID'] || u.data.customer_id || b._ccustid || "1");
                u.data.order_total = (u.data['ORDERAMNT'] || u.data.order_total || b._ctotal || b._csubtoal || "");
                u.data.order_currency = (u.data['CUR'] || u.data.order_currency || b._ccurrency || "");

                c.push("MID" + u.data.kvp_delim + u.data['MID']);
                c.push("PID" + u.data.kvp_delim + u.data['PID']);
                c.push("CRID" + u.data.kvp_delim + u.data.customer_id);
                c.push("ORDERID" + u.data.kvp_delim + u.data.order_id);
                c.push("ORDERAMNT" + u.data.kvp_delim + u.data.order_total);

                if (u.data['NUMOFITEMS'] === "") {
                    if (u.data.product_quantity.length === 0 && b._cquan !== undefined) { u.data.product_quantity = b._cquan.slice(0); }
                    u.data['NUMOFITEMS'] = 0;
                    for (var i = 0; i < u.data.product_quantity.length; i++) {
                        u.data['NUMOFITEMS'] += parseInt(u.data.product_quantity[i]);
                    }
                }
                c.push("NUMOFITEMS" + u.data.kvp_delim + u.data['NUMOFITEMS']);
                c.push("CUR" + u.data.kvp_delim + u.data.order_currency);
                c.push("SUBID" + u.data.kvp_delim + u.data['SUBID']);
                c.push("CAT" + u.data.kvp_delim + u.data['CAT']); // custom - added CAT per vendor request
                u.data.base_url = u.data.base_url + u.data.dom_suffix;

                u.loader({ "type": "img", "src": u.data.base_url + '/saleServlet?' + c.join(u.data.qsp_delim) });
            }

            //##UTENABLEDEBUG##utag.DB("send:##UTID##:COMPLETE");
        }
    };
        utag.o[loader].loader.LOAD(id);
    }("##UTID##", "##UTLOADERID##"));
} catch (error) {
    utag.DB(error);
}
//end tealium universal tag

