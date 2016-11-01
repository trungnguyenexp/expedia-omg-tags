b['cruiseLine'] = '';
if (utag.isCruiseCO() && b['entity.checkout.cruise.cruiseLine']) {
    b['cruiseLine'] = b['entity.checkout.cruise.cruiseLine'];
}
else if (utag.isCruiseSR() && b.entity && b.entity.cruiseSearch && Array.isArray(b.entity.cruiseSearch.cruiseLines)) {
    b['cruiseLine'] = b.entity.cruiseSearch.cruiseLines.join('|');
} else if (b['entity.cruise.cruiseLine']) {
    b['cruiseLine'] = b['entity.cruise.cruiseLine'];
}

/** old
 utag_data['cruiseLine'] = '';
 if (utag.isCruiseCO() && utag_data['entity.checkout.cruise.cruiseLine']) {
    utag_data['cruiseLine'] = utag_data['entity.checkout.cruise.cruiseLine'];
}
 else if (utag.isCruiseSR() && utag_data.entity && utag_data.entity.cruiseSearch && Array.isArray(utag_data.entity.cruiseSearch.cruiseLines)) {
    utag_data['cruiseLine'] = utag_data.entity.cruiseSearch.cruiseLines.join('|');
} else if (utag_data['entity.cruise.cruiseLine']) {
    utag_data['cruiseLine'] = utag_data['entity.cruise.cruiseLine'];
}
 **/