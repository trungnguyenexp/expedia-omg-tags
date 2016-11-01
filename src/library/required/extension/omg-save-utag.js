(function (omg) {
    // The purpose of this extension is to save the 'b' value so we can use it for debugging purpose
    // and by the omg-developer chrome extensions to display utag data.
    // The execution of this extension should be "after tags".
    if ('undefined' === typeof omg) {
        console.debug('omg-save-utag: omg is not available:', omg);
        return;
    }

    try {
        saveUtag();
    } catch (e) {
        console.warn('omg-save-utag: Unexpected exception:', e);
    }

    function saveUtag() {
        if ('object' === typeof omg.utag && 'string' === typeof b.dataLayer) {
            // skip utag fired by the tag collector code
            return;
        }
        var log = omg.LogFactory.createLogger('omg-save-utag');
        omg.utag = b;
        log.debug('omg.utag:', omg.utag);
    }
})(omg);