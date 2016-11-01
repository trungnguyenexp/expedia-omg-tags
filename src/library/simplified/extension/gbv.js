b['checkout.cartTotal.amount'] = '';
b['checkout.cartTotal.amount.array'] = [];
if (b['entity.checkout.cartTotal.amount'] != undefined)
{
    b['checkout.cartTotal.amount'] = b['entity.checkout.cartTotal.amount'];
}
else if(b['entity.tripDetails.totalPrice.amount'] != undefined){
    b["checkout.cartTotal.amount"] = b["entity.tripDetails.totalPrice.amount"];
    if(b.entity.checkout.carTotal == undefined){
        var cartTotal = {amount:b['entity.tripDetails.totalPrice.amount']};
        b.entity.checkout.cartTotal = cartTotal;
    }
}
else if(b["entity.checkout.flightOffer.totalPrice.amount"] != undefined){
    b['checkout.cartTotal.amount'] = b['entity.checkout.flightOffer.totalPrice.amount'];
}
b['checkout.cartTotal.amount.array'].push(b['checkout.cartTotal.amount']);

/** old
 utag_data['checkout.cartTotal.amount'] = '';
 utag_data['checkout.cartTotal.amount.array'] = [];
 if (utag_data['entity.checkout.cartTotal.amount'] != undefined)
 {
   utag_data['checkout.cartTotal.amount'] = utag_data['entity.checkout.cartTotal.amount'];
 }
 else if(utag_data['entity.tripDetails.totalPrice.amount'] != undefined){
    utag_data["checkout.cartTotal.amount"] = utag_data["entity.tripDetails.totalPrice.amount"];
  if(utag_data.entity.checkout.carTotal == undefined){
    var cartTotal = {amount:utag_data['entity.tripDetails.totalPrice.amount']};
    utag_data.entity.checkout.cartTotal = cartTotal;
  }
}
 else if(utag_data["entity.checkout.flightOffer.totalPrice.amount"] != undefined){
  utag_data['checkout.cartTotal.amount'] = utag_data['entity.checkout.flightOffer.totalPrice.amount'];
}
 utag_data['checkout.cartTotal.amount.array'].push(utag_data['checkout.cartTotal.amount']);

 **/