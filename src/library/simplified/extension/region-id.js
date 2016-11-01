if(utag.isHSR() && typeof b["entity.hotels.search.hotelParameters.regionId"] != "undefined"){
    b["regionId"] = b["entity.hotels.search.hotelParameters.regionId"];
}
else if((utag.isHIS() || utag.isPIS()) && typeof b["entity.hotels.listOfHotels.0.regionId"] != "undefined"){
    b["regionId"] = b["entity.hotels.listOfHotels.0.regionId"];
}
else if((utag.isHCO() || utag.isPCO()) && b["entity.checkout.hotel.regionId"] != "undefined"){
    b["regionId"] = b["entity.checkout.hotel.regionId"];
}
else if(utag.isCarSR() && typeof b["entity.carSearch.searchCriteria.pickUpLocation.regionId"] != "undefined"){
    b["regionId"] = b["entity.carSearch.searchCriteria.pickUpLocation.regionId"];
}
else if(utag.isCarCO()){
    if (b['entity.checkout.car.pickUpLocation.regionId'])
    {
        b["regionId"] = b["entity.checkout.car.pickUpLocation.regionId"];

    } else if (b["entity.tripDetails.carInfo.pickUpLocation.regionId"])
    {
        // OLD Confirmation page
        b["regionId"] = b["entity.tripDetails.carInfo.pickUpLocation.regionId"];
    }
}
else if (utag.isPSR() && b.entity.packageFHSearch != undefined && b.entity.packageFHSearch.packageFHSearchParameters.destinationRegionId != undefined) {
    b['regionId'] = b['entity.packageFHSearch.packageFHSearchParameters.destinationRegionId'];
}
else if((utag.isPSR_HC() || utag.isPSR_FC() || utag.isPSR_FH_Responsive() || utag.isPIS_FH() || utag.isPRateDetails()) && b["entity.packageSearch.packageSearchParameters.destinationRegionId"] != undefined){
    b["regionId"] = b["entity.packageSearch.packageSearchParameters.destinationRegionId"];
}
else if (utag.isMCO())
{
    if (b["entity.checkout.cars.0.dropOffLocation.regionId"] != undefined) {
        b["regionId"] = b["entity.checkout.cars.0.dropOffLocation.regionId"];
    }
    else if (b["entity.checkout.hotels.0.regionId"] != undefined) {
        b["regionId"] = b["entity.checkout.hotels.0.regionId"];
    }
}

/** old

 if(utag.isHSR() && typeof utag_data["entity.hotels.search.hotelParameters.regionId"] != "undefined"){
    utag_data["regionId"] = utag_data["entity.hotels.search.hotelParameters.regionId"];
}
 else if((utag.isHIS() || utag.isPIS()) && typeof utag_data["entity.hotels.listOfHotels.0.regionId"] != "undefined"){
    utag_data["regionId"] = utag_data["entity.hotels.listOfHotels.0.regionId"];
}
 else if((utag.isHCO() || utag.isPCO()) && utag_data["entity.checkout.hotel.regionId"] != "undefined"){
    utag_data["regionId"] = utag_data["entity.checkout.hotel.regionId"];
}
 else if(utag.isCarSR() && typeof utag_data["entity.carSearch.searchCriteria.pickUpLocation.regionId"] != "undefined"){
    utag_data["regionId"] = utag_data["entity.carSearch.searchCriteria.pickUpLocation.regionId"];
}
 else if(utag.isCarCO()){
    if (utag_data['entity.checkout.car.pickUpLocation.regionId'])
    {
        utag_data["regionId"] = utag_data["entity.checkout.car.pickUpLocation.regionId"];

    } else if (utag_data["entity.tripDetails.carInfo.pickUpLocation.regionId"])
    {
        // OLD Confirmation page
        utag_data["regionId"] = utag_data["entity.tripDetails.carInfo.pickUpLocation.regionId"];
    }
}
 else if (utag.isPSR() && utag_data.entity.packageFHSearch != undefined && utag_data.entity.packageFHSearch.packageFHSearchParameters.destinationRegionId != undefined) {
          utag_data['regionId'] = utag_data['entity.packageFHSearch.packageFHSearchParameters.destinationRegionId'];
}
 else if((utag.isPSR_HC() || utag.isPSR_FC() || utag.isPSR_FH_Responsive() || utag.isPIS_FH() || utag.isPRateDetails()) && utag_data["entity.packageSearch.packageSearchParameters.destinationRegionId"] != undefined){
    utag_data["regionId"] = utag_data["entity.packageSearch.packageSearchParameters.destinationRegionId"];
}
 else if (utag.isMCO())
 {
   if (utag_data["entity.checkout.cars.0.dropOffLocation.regionId"] != undefined) {
     utag_data["regionId"] = utag_data["entity.checkout.cars.0.dropOffLocation.regionId"];
   }
   else if (utag_data["entity.checkout.hotels.0.regionId"] != undefined) {
     utag_data["regionId"] = utag_data["entity.checkout.hotels.0.regionId"];
   }
 }

 **/