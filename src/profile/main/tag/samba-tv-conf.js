//~~tv:19101.20160405
//~~tc: Adding tag Samba TV

/* Start Tag Library Code */
var SambaTV = SambaTV || [];
! function(t) {
  if (!t.track) {
    if (t.invoked) return void(window.console && window.console.error && window.console.error("Samba Metrics snippet included twice."));
    t.invoked = !0, t.methods = ["track", "Impression", "Purchase", "Click", "Login", "Register"], t.factory = function(e) {
      return function() {
        var r = Array.prototype.slice.call(arguments);
        return r.unshift(e), t.push(r), t;
      };
    };
    for (var e = 0; e < t.methods.length; e++) {
      var r = t.methods[e];
      t[r] = t.factory(r);
    }
    t.attrs || (t.attrs = {});
    t.SNIPPET_VERSION = "1.0.1";
  }
}(SambaTV);
/* End Tag Library Code */

//tealium universal tag - utag.sender.19101 ut4.0.##UTVERSION##, Copyright ##UTYEAR## Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {"id" : id};
    utag.o[loader].sender[id] = u;
    // Please do not modify
    if (utag.ut === undefined) { utag.ut = {}; }
    // Start Tealium loader 4.35
    var match = /ut\d\.(\d*)\..*/.exec(utag.cfg.v);
    if (utag.ut.loader === undefined || !match || parseInt(match[1]) < 35) { u.loader = function (o) { var b, c, l, a = document; if (o.type === "iframe") { b = a.createElement("iframe"); o.attrs = o.attrs || { "height" : "1", "width" : "1", "style" : "display:none" }; for( l in utag.loader.GV(o.attrs) ){ b.setAttribute( l, o.attrs[l] ); } b.setAttribute("src", o.src); }else if (o.type=="img"){ utag.DB("Attach img: "+o.src); b=new Image();b.src=o.src; return; }else{ b = a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8"; for( l in utag.loader.GV(o.attrs) ){ b[l] = o.attrs[l]; } b.src = o.src; } if(o.id){b.id=o.id}; if (typeof o.cb=="function") { if(b.addEventListener) { b.addEventListener("load",function(){o.cb()},false); }else { /* old IE support */ b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}}; } } l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to "+l+": "+o.src); if (l == "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b) } } } } else { u.loader = utag.ut.loader; }
    // End Tealium loader

    u.ev = {"view" : 1};
    u.initialized = false;

    ##UTGEN##

    u.send = function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        utag.DB("send:##UTID##");
        utag.DB(b);

        var c, d, e, f;

        u.data = {
          "account_id" : "##UTVARconfig_account_id##",
          "qsp_delim" : "&",
          "kvp_delim" : "=",
          "base_url" : "//tag.mtrcs.samba.tv/v3/tag/##utag_account_id##/sambaTag.js"
        };

        // Start tag-scoped extensions
        ##UTEXTEND##
        // End tag-scoped extensions
        utag.DB("send:##UTID##:EXTENSIONS");
        utag.DB(b);
        c = [];

        // Start Mapping
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              if (u.data.hasOwnProperty(e[f])) {
                u.data[e[f]] = b[d];
              }
            }
          }
        }
        utag.DB("send:##UTID##:MAPPINGS");
        utag.DB(u.data);
        // End Mapping

        //Example code to report required config is missing, and stop tag from firing.
        if (!u.data.account_id) {
          utag.DB(u.id + ": Tag not fired: Required attribute not populated");
          return;
        }

        // Start Loader Callback
        u.loader_cb = function () {
          u.initialized = true;
        };
        // End Loader Callback

        if (u.initialized) {
          // If the script is already loaded, call impression
          SambaTV.Impression();
        } else {
          u.loader({
            "type": "script",
            "src": u.data.base_url.replace("##utag_account_id##", u.data.account_id),
            "cb": u.loader_cb,
            "loc": "script",
            "id": "utag_##UTID##"
          });
        }

        utag.DB("send:##UTID##:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  }("##UTID##", "##UTLOADERID##"));
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag
