if (utag.isCarSR() && b["entity.carSearch.carOffers.0.carVendor"] != undefined){
  b["carVendor"] = b["entity.carSearch.carOffers.0.carVendor"];
}else if(utag.isCarCO() || utag.isCarPymt()) {
    if(b.entity.tripDetails != undefined) {
        b["carVendor"] = b["entity.tripDetails.carInfo.carVendor"];
    } else if(b.entity.checkout.cars[0].carVendor != undefined) {
        b["carVendor"] = b.entity.checkout.cars[0].carVendor;
    } else if(b.entity.checkout.car != undefined) {
        b["carVendor"] = b["entity.checkout.car.carVendor"];
    }
}

