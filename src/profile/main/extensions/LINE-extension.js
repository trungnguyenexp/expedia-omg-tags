 if ( window.alertMenuRequestIds['SITEID'] == 28 && window.devicePixelRatio == 3)
 {
     if (document.URL.indexOf("/createaccount") > -1 || window.s_PPVid.indexOf("page.Account.CreateAccount") > -1)
     {
        function getParamsObj() {
            var query = location.search.substr(1);
            var params = query.split('&');
            var paramsObj = {};
            for ( i = 0; i < params.length; i++ ) {
                var neet = params[i].split("=");
                paramsObj[neet[0].trim()] = neet[1];
            }
            return paramsObj;
        }

        var paramsObj = getParamsObj();
        var ls_cc = paramsObj['line_cc'];
        if (ls_cc !== undefined) {
            if(('localStorage' in window) && (window.localStorage !== null)) {
              localStorage.setItem("line_cc",ls_cc);
            }
        }
    }

    if (typeof(window.utag_data) !== "undefined" && window.utag_data['pageName'].indexOf("page.mobilehotellandingpage") > -1 && window.utag_data['expUser'] !== "undefined")
    {
        var expUserParts = window.utag_data['expUser'].split(',');
        var expUserProperties = {};
        for (var i = 0; i < expUserParts.length; i++) {
            var propAndVal = expUserParts[i].split('=');
            expUserProperties[propAndVal[0].trim()] = propAndVal[1];
        }

        if (expUserProperties['expUserState'].toLowerCase() == "indentified" || expUserProperties['expUserState'].toLowerCase() == "authenticated")
        {
            var _tsu_url = "https://tsunagaru019.linebc.jp/join/line_cc/v1/";
            var _tg_client_id = "19";
            var _tg_test_env_flg = "0";

            if(('localStorage' in window) && (window.localStorage !== null)) {
              var ls_cc = localStorage.getItem("line_cc");
            }
            
            var _uid = expUserProperties['expUserId'];

            if (ls_cc != false && ls_cc !== "undefined" && _uid !== "undefined" && _uid !== -1) {
                var script = document.createElement('script');
                script.src = _tsu_url + _tg_client_id + "/" + _tg_test_env_flg + 
                        "/tg_connect_key.js?line_cc=" + ls_cc + "&uid=" + _uid +
                        "&_yt=" + (new Date().getTime());
                script.setAttribute('defer', true);
                document.body.appendChild(script);
                
                localStorage.removeItem("line_cc");
            }
        }
    }
    else
    {
        if(('localStorage' in window) && (window.localStorage !== null)) 
        {
          localStorage.removeItem("line_cc");
        }
    }
}
