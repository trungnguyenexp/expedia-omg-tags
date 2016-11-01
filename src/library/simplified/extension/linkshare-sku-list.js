

if(utag.isCO()){
    var skulist = "";
    var product = b["domain"].toLowerCase();
    switch(product) {
        case "air":
            skulist = "AIR";
            break;
        case "cruise":
            skulist = "CRUISE";
            break;
        case "car":
            skulist = "CAR";
            break;
        case "hotel":
            if(b['roomType'].toLowerCase() == "merchant")  {
                var roomsCount = b.entity.checkout.hotel.rooms.length;
                for(var i = 0; i < roomsCount; i++){
                    skulist = skulist + "HOT-MERCH"+ i + promoCode() + "|";
                }
            }
            else{
                skulist = "HOT-RETAIL|";
            }
            break;
        case "package":
            if(typeof b["entity.checkout.flightOffer"] != "undefined"){
                skulist = skulist + "PKG-AIR|";
            }
            if(typeof b["entity.checkout.car"] != "undefined")  {
                skulist = skulist + "PKG-CAR|";
            }
            if(typeof b["entity.checkout.hotel"] != "undefined" && b['roomType'].toLowerCase() == "merchant")  {
                var roomsCount = b.entity.checkout.hotel.rooms.length;
                for(var i = 0; i < roomsCount; i++){
                    skulist = skulist + "PKG-HOT-MERCH"+ i + promoCode() + "|";
                }
            }
            break;
        case "lx":
            skulist = "OAS";
        default:
            break;
    }
    b["skulist"] = skulist;
}

function promoCode(){
    if(b["entity.checkout.coupon.couponCodeText"] != ""){
        return "-PROMO" ;
    }
}
/** old
 if(utag.isCO()){
    var skulist = "";
    var product = utag_data["domain"].toLowerCase();
    switch(product) {
        case "air":
            skulist = "AIR";
            break;
        case "cruise":
            skulist = "CRUISE";
            break;
        case "car":
            skulist = "CAR";
            break;
        case "hotel":
            if(utag_data['roomType'].toLowerCase() == "merchant")  {
                var roomsCount = b.entity.checkout.hotel.rooms.length;
                for(var i = 0; i < roomsCount; i++){
                    skulist = skulist + "HOT-MERCH"+ i + promoCode() + "|";
                }
            }
            else{
                skulist = "HOT-RETAIL|";
            }
            break;
        case "package":
            if(typeof utag_data["entity.checkout.flightOffer"] != "undefined"){
                skulist = skulist + "PKG-AIR|";
            }
            if(typeof utag_data["entity.checkout.car"] != "undefined")  {
                skulist = skulist + "PKG-CAR|";
            }
            if(typeof utag_data["entity.checkout.hotel"] != "undefined" && utag_data['roomType'].toLowerCase() == "merchant")  {
                var roomsCount = b.entity.checkout.hotel.rooms.length;
                for(var i = 0; i < roomsCount; i++){
                    skulist = skulist + "PKG-HOT-MERCH"+ i + promoCode() + "|";
                }
            }
            break;
        case "lx":
            skulist = "OAS";
        default:
            break;
    }
       utag_data["skulist"] = skulist;
}

 function promoCode(){
   if(utag_data["entity.checkout.coupon.couponCodeText"] != ""){
       return "-PROMO" ;
   }
}
 **/