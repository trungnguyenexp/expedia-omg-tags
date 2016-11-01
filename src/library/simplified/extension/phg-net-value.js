b['phgNetValue'] = '';
if(b['checkout.cartTotal.amount'] != undefined) {
    b['phgNetValue'] = b['checkout.cartTotal.amount'];
}
if(b['checkout.cartTotal.netValue'] != undefined) {
    if(b['checkout.cartTotal.netValue'] != "0.00" && b['checkout.cartTotal.netValue'].length != 0
        && parseFloat(b['checkout.cartTotal.netValue']) > 0) {
        b['phgNetValue'] = b['checkout.cartTotal.netValue'];
    }
}
/** old
 utag_data['phgNetValue'] = '';
 if(utag_data['checkout.cartTotal.amount'] != undefined) {
  utag_data['phgNetValue'] = utag_data['checkout.cartTotal.amount'];
}
 if(utag_data['checkout.cartTotal.netValue'] != undefined) {
  if(utag_data['checkout.cartTotal.netValue'] != "0.00" && utag_data['checkout.cartTotal.netValue'].length != 0 
     && parseFloat(utag_data['checkout.cartTotal.netValue']) > 0) {
    utag_data['phgNetValue'] = utag_data['checkout.cartTotal.netValue'];
  }
}
 **/