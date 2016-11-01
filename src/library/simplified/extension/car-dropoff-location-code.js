if(utag.isCarSR() && typeof b["entity.carSearch.searchCriteria.dropOffLocation.locationCode"] != "undefined"){
    b["carDropOffLocationCode"] = b["entity.carSearch.searchCriteria.dropOffLocation.locationCode"];
}else if((utag.isCarPymt() || utag.isCarCO()) && typeof b["entity.checkout.car.dropOffLocation.locationCode"] != "undefined" ){
    b["carDropOffLocationCode"] = b["entity.checkout.car.dropOffLocation.locationCode"];
}
else if(utag.isCarCO() && typeof b.entity.tripDetails!= "undefined"){
    b["carDropOffLocationCode"] = b["entity.tripDetails.carInfo.dropOffLocation.locationCode"];
}

/** old
 if(utag.isCarSR() && typeof utag_data["entity.carSearch.searchCriteria.dropOffLocation.locationCode"] != "undefined"){
  utag_data["carDropOffLocationCode"] = utag_data["entity.carSearch.searchCriteria.dropOffLocation.locationCode"];
}else if((utag.isCarPymt() || utag.isCarCO()) && typeof utag_data["entity.checkout.car.dropOffLocation.locationCode"] != "undefined" ){
  utag_data["carDropOffLocationCode"] = utag_data["entity.checkout.car.dropOffLocation.locationCode"];
}
 else if(utag.isCarCO() && typeof utag_data.entity.tripDetails!= "undefined"){
  utag_data["carDropOffLocationCode"] = b["entity.tripDetails.carInfo.dropOffLocation.locationCode"];
}
 **/