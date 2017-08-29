if (utag.isCarSR() && b["entity.carSearch.carOffers.0.carVendor"] != undefined){
    b["carVendor"] = b["entity.carSearch.carOffers.0.carVendor"];
}else if((utag.isCarPymt() || utag.isCarCO()) && b.entity.checkout.car != undefined ){
    b["carVendor"] = b["entity.checkout.car.carVendor"];
}else if(utag.isCarCO() {
    if( b.entity.tripDetails != undefined){
        b["carVendor"] = b["entity.tripDetails.carInfo.carVendor"];
    } else if(b.entity.checkout.cars[0].carVendor != undefined ) {
        b["carVendor"] = b.entity.checkout.cars[0].carVendor;
    }
}

/** old
 if (utag.isCarSR() && utag_data["entity.carSearch.carOffers.0.carVendor"] != undefined){
  utag_data["carVendor"] = utag_data["entity.carSearch.carOffers.0.carVendor"];
}else if((utag.isCarPymt() || utag.isCarCO()) && utag_data.entity.checkout.car != undefined ){
  utag_data["carVendor"] = utag_data["entity.checkout.car.carVendor"];
}
 else if(utag.isCarCO() && utag_data.entity.tripDetails != undefined){
  utag_data["carVendor"] = utag_data["entity.tripDetails.carInfo.carVendor"];
} **/