b["dest"] = "";
if(utag.isFCO() || utag.isPCO()){
    b["dest"] = b["destinationAirportCode"] ? b["destinationAirportCode"] : "";
}
else if(utag.isHCO()){
    b["dest"] = b["entity.checkout.hotel.hotelCityName"] ? b["entity.checkout.hotel.hotelCityName"] : "";
}
else if (utag.isHSR()) {
    b["dest"] = b["entity.hotels.search.hotelParameters.regionId"] ? b["entity.hotels.search.hotelParameters.regionId"] : "";
}
else if(utag.isCarCO() && typeof b["entity.checkout.car.dropOffLocation.locationCode"] != "undefined"){
    b["dest"] = b["entity.checkout.car.dropOffLocation.locationCode"];
}
else if(utag.isCarCO() && b.entity.tripDetails != undefined){
    b["dest"] = b["entity.tripDetails.carInfo.dropOffLocation.locationCode"] ? b["entity.checkout.hotel.hotelCityName"] : "";;
}
else if(utag.isLXCO()){
    b["dest"] = b["entity.checkout.activity.activityDetail.destination"] ? b["entity.checkout.activity.activityDetail.destination"] : "";
}
else if(utag.isMCO()) {
    if (b["destinationAirportCode"]) {
        b["dest"] = b["destinationAirportCode"];
    } else if (b["entity.checkout.hotels.0.hotelCityName"]) {
        b["dest"] = b["entity.checkout.hotels.0.hotelCityName"];
    } else if (b["entity.checkout.cars.0.dropOffLocation.locationCode"]) {
        b["dest"] = b["entity.checkout.cars.0.dropOffLocation.locationCode"];
    }
}

/** old
 utag_data["dest"] = "";
 if(utag.isFCO() || utag.isPCO()){
  utag_data["dest"] = utag_data["destinationAirportCode"] ? utag_data["destinationAirportCode"] : "";
}
 else if(utag.isHCO()){
  utag_data["dest"] = utag_data["entity.checkout.hotel.hotelCityName"] ? utag_data["entity.checkout.hotel.hotelCityName"] : "";
}
 else if (utag.isHSR()) {
  utag_data["dest"] = utag_data["entity.hotels.search.hotelParameters.regionId"] ? utag_data["entity.hotels.search.hotelParameters.regionId"] : "";
}
 else if(utag.isCarCO() && typeof utag_data["entity.checkout.car.dropOffLocation.locationCode"] != "undefined"){
  utag_data["dest"] = utag_data["entity.checkout.car.dropOffLocation.locationCode"];
}
 else if(utag.isCarCO() && utag_data.entity.tripDetails != undefined){
  utag_data["dest"] = utag_data["entity.tripDetails.carInfo.dropOffLocation.locationCode"] ? utag_data["entity.checkout.hotel.hotelCityName"] : "";;
}
 else if(utag.isLXCO()){
  utag_data["dest"] = utag_data["entity.checkout.activity.activityDetail.destination"] ? utag_data["entity.checkout.activity.activityDetail.destination"] : "";
}
 **/