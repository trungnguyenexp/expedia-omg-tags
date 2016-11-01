b['cruiseTitle'] = '';
if (utag.isCruiseCO() && b['entity.checkout.cruise.cruiseTitle']) {
    b['cruiseTitle'] = b['entity.checkout.cruise.cruiseTitle'];
} else if (b['entity.cruise.cruiseTitle']) {
    b['cruiseTitle'] = b['entity.cruise.cruiseTitle'];
}

/** old
 utag_data['cruiseTitle'] = '';
 if (utag.isCruiseCO() && utag_data['entity.checkout.cruise.cruiseTitle']) {
    utag_data['cruiseTitle'] = utag_data['entity.checkout.cruise.cruiseTitle'];
} else if (utag_data['entity.cruise.cruiseTitle']) {
    utag_data['cruiseTitle'] = utag_data['entity.cruise.cruiseTitle'];
}
 **/