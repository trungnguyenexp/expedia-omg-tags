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
else if (utag.isCarUDP() && typeof b["entity.carDetails.carCategoryNameLocalized"] !== undefined) {
    b['carType'] = b["entity.carDetails.carCategoryNameLocalized"];
}
