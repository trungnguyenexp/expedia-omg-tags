if(utag.isCarSR() && b["entity.carSearch.searchCriteria.carType"] != undefined){
    b["carType"] = b["entity.carSearch.searchCriteria.carType"];
}else if((utag.isCarPymt() || utag.isCarCO()) && b["entity.checkout.car.carType"] != undefined ){
    b["carType"] = b["entity.checkout.car.carType"];
}
else if(utag.isCarCO() && b.entity.tripDetails.carInfo.carType != undefined){
    b["carType"] = b["entity.tripDetails.carInfo.carType"];
}
else if (utag.isMCO() && b["entity.checkout.cars.0.carType"] != undefined) {
    b["carType"] = b["entity.checkout.cars.0.carType"];
}

/** old
 if(utag.isCarSR() && utag_data["entity.carSearch.searchCriteria.carType"] != undefined){
  utag_data["carType"] = utag_data["entity.carSearch.searchCriteria.carType"];
}else if((utag.isCarPymt() || utag.isCarCO()) && utag_data["entity.checkout.car.carType"] != undefined ){
  utag_data["carType"] = utag_data["entity.checkout.car.carType"];
}
 else if(utag.isCarCO() && utag_data.entity.tripDetails.carInfo.carType != undefined){
  utag_data["carType"] = utag_data["entity.tripDetails.carInfo.carType"];
}
 else if (utag.isMCO() && utag_data["entity.checkout.cars.0.carType"] != undefined) {
  utag_data["carType"] = utag_data["entity.checkout.cars.0.carType"];
}
 **/