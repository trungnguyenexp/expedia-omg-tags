if (b["cescDTL"]) {
    var dtlParameter = b["cescDTL"].split(".");
    if ('main' == b['ut.profile'] && b["cescChannel"].toLowerCase() == "icm" && dtlParameter.length > 9) {
        b["tripAdvisorClickId"] = dtlParameter[9];
    } else if (b["cescChannel"].toLowerCase() == "mdp" && dtlParameter.length > 4) {
        b["tripAdvisorClickId"] = dtlParameter[4];
    }
}

/** old
 if (utag_data["cescDTL"]) {
    var dtlParameter = utag_data["cescDTL"].split(".");
    if ('main' == utag_data['ut.profile'] && utag_data["cescChannel"].toLowerCase() == "icm" && dtlParameter.length > 9) {
        utag_data["tripAdvisorClickId"] = dtlParameter[9];
    } else if (utag_data["cescChannel"].toLowerCase() == "mdp" && dtlParameter.length > 4) {
        utag_data["tripAdvisorClickId"] = dtlParameter[4];
    }
}
 **/
