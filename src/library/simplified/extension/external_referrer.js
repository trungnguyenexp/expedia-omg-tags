(function() {
    if (typeof b["dom.domain"] !== "undefined" && typeof b["dom.referrer"] !== "undefined") {
        if (b["dom.referrer"].indexOf(b["dom.domain"]) > -1) {
            b["external_referrer"] = false;
        } else {
	    b["external_referrer"] = true;
	}
    }
})();
