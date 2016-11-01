(function () {
    var Log = function (loggerName) {
        this.loggerName = '[' + loggerName + ']:';
    };

    Log.prototype = {
        info: function () {
            if (!isLogEnabled()) {
                return;
            }
            var args = [this.loggerName].concat(Array.prototype.slice.call(arguments));
            console.info.apply(console, args);
        },
        warn: function () {
            if (!isLogEnabled()) {
                return;
            }
            var args = [this.loggerName].concat(Array.prototype.slice.call(arguments));
            console.warn.apply(console, args);
        },
        error: function () {
            if (!isLogEnabled()) {
                return;
            }
            var args = [this.loggerName].concat(Array.prototype.slice.call(arguments));
            console.error.apply(console, args);
        },
        debug: function () {
            if (!isLogEnabled()) {
                return;
            }
            var args = [this.loggerName].concat(Array.prototype.slice.call(arguments));
            if (console.debug) {
                console.debug.apply(console, args);
            } else {
                console.log.apply(console, args);
            }
        },
        log: function () {
            if (!isLogEnabled()) {
                return;
            }
            var args = [this.loggerName].concat(Array.prototype.slice.call(arguments));
            console.log.apply(console, args);
        }
    };

    var OMG = {
        LogFactory: {
            createLogger: function (loggerName) {
                return new Log(loggerName);
            },
            isLogEnabled: isLogEnabled
        },
        isProfileEnabled: function (enabledList) {
            if (Array.isArray(enabledList)) {
                return enabledList.indexOf(this.getProfileName()) != -1;
            }
            return false;
        },
        getProfileName: function () {
            if ('undefined' != typeof utag && 'string' == typeof utag.id) {
                return utag.id.split('.')[1];
            }
            return '';
        },
        getEnv: function () {
            if ('undefined' != typeof utag && 'undefined' != typeof utag.cfg && utag.cfg.path) {
                return utag.cfg.path.split('/')[6];
            }
            return '';
        },
        isDev: function () {
            return 'dev' == this.getEnv();
        },
        isProd: function () {
            return 'prod' == this.getEnv();
        },
        isJQueryPresent: function () {
            try {
                return 'string' === typeof $.fn.jquery;
            } catch (ignoredException) {
            }
            return false;
        }
    };

    function isLogEnabled() {
        return (document.cookie + '').indexOf('omgdb=true') >= 0;
    }

    omg = OMG;
})();