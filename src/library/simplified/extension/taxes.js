if(utag.isFCO()){
    b["taxes"] =  b["entity.checkout.flightOffer.totalPrice.taxes"];
}
else if(utag.isCarCO() && b.entity.tripDetails != undefined) {
    b["taxes"] =  b["entity.tripDetails.totalPrice.taxes"];
}
else if(b["entity.checkout.cartTotal.taxes"] != undefined) {
    b["taxes"] =  b["entity.checkout.cartTotal.taxes"];
}

/** old
 if(utag.isFCO()){
  utag_data["taxes"] =  utag_data["entity.checkout.flightOffer.totalPrice.taxes"];
}
 else if(utag.isCarCO() && utag_data.entity.tripDetails != undefined) {
  utag_data["taxes"] =  utag_data["entity.tripDetails.totalPrice.taxes"];
}
 else if(utag_data["entity.checkout.cartTotal.taxes"] != undefined) {
  utag_data["taxes"] =  utag_data["entity.checkout.cartTotal.taxes"];
}
 **/