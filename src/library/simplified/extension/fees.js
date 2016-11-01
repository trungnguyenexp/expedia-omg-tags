if(utag.isFCO()){
    b["fees"] =  b["entity.checkout.flightOffer.totalPrice.fees"];
}
else if(b["entity.checkout.cartTotal.fees"] != undefined){
    b["fees"] =  b["entity.checkout.cartTotal.fees"];
}

/** old
 if(utag.isFCO()){
  utag_data["fees"] =  utag_data["entity.checkout.flightOffer.totalPrice.fees"];
}
 else if(utag_data["entity.checkout.cartTotal.fees"] != undefined){
  utag_data["fees"] =  utag_data["entity.checkout.cartTotal.fees"];
}
 **/