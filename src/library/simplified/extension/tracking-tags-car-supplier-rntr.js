if(utag.isCarCO() && b["entity.checkout.car.carVendor"] != undefined){
    if(b["entity.checkout.car.carVendor"].indexOf(';') > -1){
        b["trackingTags.carSupplier"] = b["entity.checkout.car.carVendor"].split(';')[0];
    }else{
        b["trackingTags.carSupplier"] = b["entity.checkout.car.carVendor"];
    }
}

/** old
 if(utag.isCarCO() && utag_data["entity.checkout.car.carVendor"] != undefined){
  if(utag_data["entity.checkout.car.carVendor"].indexOf(';') > -1){
    utag_data["trackingTags.carSupplier"] = utag_data["entity.checkout.car.carVendor"].split(';')[0];
  }else{
    utag_data["trackingTags.carSupplier"] = utag_data["entity.checkout.car.carVendor"];
  }
}
 **/