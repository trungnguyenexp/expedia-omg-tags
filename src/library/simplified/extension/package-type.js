b['packageType'] = '';
if (utag.isPSR() || utag.isPCF()) {
    if (b['entity.packageSearch.packageSearchParameters.packageType']) {
        b['packageType'] = b['entity.packageSearch.packageSearchParameters.packageType'];

    } else if (b['qp.packageType']) {
        b['packageType'] = b['qp.packageType'];
    }
} else if (utag.isPIS()) {
    if (b['qp.packageType']) {
        b['packageType'] = b['qp.packageType'];
    }
} else if (utag.isPRateDetails() && typeof b['entity.packageSearch.packageSearchParameters.packageType'] !== "undefined") {
    b['packageType'] = b['entity.packageSearch.packageSearchParameters.packageType'];
} else if (utag.isPCO() && b['entity.packageSearch.packageSearchParameters.packageType']) {
    b['packageType'] = b['entity.packageSearch.packageSearchParameters.packageType'];
} else if (utag.isPCarSearch()) {
    b['packageType'] = b['entity.carSearch.searchCriteria.packageType'];
} else if (utag.isMCO() && b['entity.checkout.mickoTypeString']) {
    b['packageType'] = b['entity.checkout.mickoTypeString'].toUpperCase();
}