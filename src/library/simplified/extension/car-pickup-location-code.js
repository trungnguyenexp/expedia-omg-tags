if(utag.isCarSR() && typeof utag.data.entity.carSearch.searchCriteria.pickUpLocation.locationCode != "undefined"){
    b.carPickUpLocationCode = utag.data.entity.carSearch.searchCriteria.pickUpLocation.locationCode;
}
else if(utag.isCarUDP() && typeof b["entity.carDetails.pickUpLocation.locationCode"] !== undefined) {
	b["carPickUpLocationCode"] = b["entity.carDetails.pickUpLocation.locationCode"];
}
if((utag.isCarPymt() || utag.isCarCO()) && typeof utag.data.entity.checkout.car != "undefined" ){
    b.carPickUpLocationCode = utag.data.entity.checkout.car.pickUpLocation.locationCode;
}
else if(utag.isCarCO() && typeof utag_data.entity.tripDetails != "undefined"){
    b.carPickUpLocationCode = b.entity.tripDetails.carInfo.pickUpLocation.locationCode;
}