if (b['entity.checkout.cartTotal.taxesAndFees'] != undefined)
{
    b['checkout.cartTotal.taxesAndFees'] = b['entity.checkout.cartTotal.taxesAndFees'];
}
else if(b["entity.checkout.flightOffer.totalPrice.taxesAndFees"] != undefined){
    b['checkout.cartTotal.taxesAndFees'] = b['entity.checkout.flightOffer.totalPrice.taxesAndFees'];
}

/** old
 if (utag_data['entity.checkout.cartTotal.taxesAndFees'] != undefined)
 {
   utag_data['checkout.cartTotal.taxesAndFees'] = utag_data['entity.checkout.cartTotal.taxesAndFees'];
 }
 else if(utag_data["entity.checkout.flightOffer.totalPrice.taxesAndFees"] != undefined){
  utag_data['checkout.cartTotal.taxesAndFees'] = utag_data['entity.checkout.flightOffer.totalPrice.taxesAndFees'];
}
 **/