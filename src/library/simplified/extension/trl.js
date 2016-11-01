if (b['entity.checkout.trl'] != undefined) {
    b['checkout.trl'] = b['entity.checkout.trl'];
    b['checkoutTRL'] = b['entity.checkout.trl'];
}
else if (b['entity.checkout.trl'] == "" || b['entity.checkout.trl'] == undefined) {
    b['entity.checkout.trl'] = b['entity.checkout.orderNumber'];
    b['checkout.trl'] = b['entity.checkout.orderNumber'];
    b['checkoutTRL'] = b['entity.checkout.orderNumber'];
}

/** old
 if (utag_data['entity.checkout.trl'] != undefined) {
  utag_data['checkout.trl'] = utag_data['entity.checkout.trl'];
}
 else if (utag_data['entity.checkout.trl'] == "" || utag_data['entity.checkout.trl'] == undefined) {
  utag_data['entity.checkout.trl'] = utag_data['entity.checkout.orderNumber'];
  utag_data['checkout.trl'] = utag_data['entity.checkout.orderNumber'];
}
 **/