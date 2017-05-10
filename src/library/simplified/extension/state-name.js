utag_data["state"] = '';

var packageSearchOrInfosite = utag.isPSR_FH_Responsive() || utag.isPIS_FH() || utag.isPSR_FC() || utag.isPSR_FHC() || utag.isPIS_FHC() || utag.isPSR_HC() || utag.isPIS_HotelCar();

if(utag.isHSR() && typeof b.entity.hotels.search.province != "undefined"){
    utag_data["state"] = b.entity.hotels.search.province.split(",")[1].trim();
}
else if((utag.isRailSearchResults) && b["entity.railSearch.searchParameters.arrivalStation.name"] != undefined) {
    utag_data["state"] = b["entity.railSearch.searchParameters.arrivalStation.name"].split(",")[1];
}
else if((utag.isHIS() || utag.isPIS()) && typeof b.entity.hotels.listOfHotels[0].hotelProvinceName != "undefined"){
    utag_data["state"] = b.entity.hotels.listOfHotels[0].hotelProvinceName;
}
else if((utag.isHCO() || utag.isHPymt() || utag.isPPymt() || utag.isPCO()) && typeof utag_data["entity.checkout.hotel.hotelRegion"] != "undefined"){
    utag_data["state"] = utag_data["entity.checkout.hotel.hotelRegion"].split(",")[1].trim();
}
else if((utag.isCarSR() || utag.isPCarSearch()) && typeof utag_data["entity.carSearch.searchCriteria.pickUpLocation"]) {
    var stateSplit = b.entity.carSearch.searchCriteria.pickUpLocation.regionName.split(",").length;
    if(stateSplit >= 2){
        utag_data["state"]  = b.entity.carSearch.searchCriteria.pickUpLocation.regionName.split(",")[stateSplit - 2];
    }
}
else if((utag.isCarCO() || utag.isCarPymt()) && utag_data["entity.checkout.car.pickUpLocation.address.province"])
{
    utag_data["state"] = utag_data["entity.checkout.car.pickUpLocation.address.province"]
}
else if(utag_data["pageInfo.pageName"] == "page.Package-Search.Mobile,P,20" && utag_data['entity.packageSearch.packageSearchParameters.flightSearchParameters.departureAirportCityState'] != undefined)
{
    var cityState = utag_data['entity.packageSearch.packageSearchParameters.flightSearchParameters.departureAirportCityState'].split(",")[1].trim();
    if(cityState != undefined && cityState != ""){
        utag_data["state"] = cityState.split("(")[0].trim();
    }
}
else if(packageSearchOrInfosite) 
	&& (typeof b.entity.packageSearch.packageSearchParameters != "undefined" && typeof b.entity.packageSearch.packageSearchParameters.flightSearchParameters != "undefined")){
	var stateSplit = b.entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState.split(",").length;
	if(stateSplit >= 2){
		utag_data["state"] = b.entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState.split(",")[stateSplit - 2];
	}
}
else if (utag.isFCO() && utag_data['entity.checkout.flightOffer.destinationAirportCityState'] != undefined && utag_data['entity.checkout.flightOffer.destinationAirportCityState'] != ""){
    utag_data["state"] = utag_data['entity.checkout.flightOffer.destinationAirportCityState'].split(",")[1].trim();
}
else if (utag.isFSR() && utag_data['entity.flightSearch.searchParameters.arrivalAirportCityState'] != undefined && utag_data['entity.flightSearch.searchParameters.arrivalAirportCityState'] != ""){
    utag_data["state"] = utag_data['entity.flightSearch.searchParameters.arrivalAirportCityState'].split(",")[1].trim();
}
else if (utag.isLXS() && utag_data['entity.activities.activitySearchParameters.destination'] != undefined && utag_data['entity.activities.activitySearchParameters.destination'] != ""){
    utag_data["state"] = utag_data['entity.activities.activitySearchParameters.destination'].split(",")[1].trim();
}
else if (utag.isMCO()) {
    if (utag_data["entity.checkout.hotels.0.hotelRegion"] != undefined) {
        utag_data["state"] = utag_data["entity.checkout.hotels.0.hotelRegion"].split(",")[1].trim();
    } else if (utag_data["entity.checkout.cars.0.pickUpLocation.address.province"] != undefined) {
        utag_data["state"] = utag_data["entity.checkout.cars.0.pickUpLocation.address.province"]
    } else if (utag_data['entity.checkout.flightOffers.0.destinationAirportCityState'] != undefined) {
        utag_data["state"] = utag_data['entity.checkout.flightOffers.0.destinationAirportCityState'].split(",")[1].trim();
    }
}

if(utag_data["state"] != '')
{
    utag_data["state"] = utag_data["state"].trim();

}
