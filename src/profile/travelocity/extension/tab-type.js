(function() {
    if (localStorage.getItem(window.location.href)) {
        utag_data["tabType"] = "old";
    } else {
        localStorage.setItem(window.location.href, window.location.href);
        utag_data["tabType"] = "new";
        window.onbeforeunload = function() {
            localStorage.removeItem(window.location.href);
        };
    }
})();