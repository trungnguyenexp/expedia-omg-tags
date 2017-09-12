if(utag.isCarSR() && typeof b["entity.carSearch.searchCriteria.dropOffLocation.locationCode"] != "undefined"){
    b["carDropOffLocationCode"] = b["entity.carSearch.searchCriteria.dropOffLocation.locationCode"];
}else if((utag.isCarPymt() || utag.isCarCO()) && typeof b["entity.checkout.car.dropOffLocation.locationCode"] != "undefined" ){
    b["carDropOffLocationCode"] = b["entity.checkout.car.dropOffLocation.locationCode"];
}
else if(utag.isCarCO() && typeof b.entity.tripDetails!= "undefined"){
    b["carDropOffLocationCode"] = b["entity.tripDetails.carInfo.dropOffLocation.locationCode"];
}
else if(utag.isCarUDP() && typeof b["entity.carDetails.dropOffLocation.locationCode"] !== undefined) {
	b["carDropOffLocationCode"] = b["entity.carDetails.dropOffLocation.locationCode"];
}