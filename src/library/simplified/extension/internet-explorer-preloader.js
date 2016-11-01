function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}

if (isIE()) {
    utag_data.ie_version = isIE();
    utag_data.is_internet_explorer = "true";
}