if (b['entity.checkout.cartTotal.netValue'] != undefined)
{
    b['checkout.cartTotal.netValue'] = b['entity.checkout.cartTotal.netValue'];
}
else if(b["entity.checkout.flightOffer.totalPrice.netValue"] != undefined){
    b['checkout.cartTotal.netValue'] = b['entity.checkout.flightOffer.totalPrice.netValue'];
}
if(utag.isLXCO() && b.entity.checkout.cartTotal){
    b['checkout.cartTotal.netValue'] = b.entity.checkout.cartTotal.netValue;
}
/** old
 if (utag_data['entity.checkout.cartTotal.netValue'] != undefined)
 {
   utag_data['checkout.cartTotal.netValue'] = utag_data['entity.checkout.cartTotal.netValue'];
 }
 else if(utag_data["entity.checkout.flightOffer.totalPrice.netValue"] != undefined){
  utag_data['checkout.cartTotal.netValue'] = utag_data['entity.checkout.flightOffer.totalPrice.netValue'];
}
 if(utag.isLXCO() && utag_data.entity.checkout.cartTotal){
  utag_data['checkout.cartTotal.netValue'] = utag_data.entity.checkout.cartTotal.netValue;
}
 **/