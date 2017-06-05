b["stateProvinceCode"] = "";

var packageSearchOrInfosite = utag.isPSR_FH_Responsive() || utag.isPIS_FH() || utag.isPSR_FC() || utag.isPSR_FHC() || utag.isPIS_FHC() || utag.isPSR_HC() || utag.isPIS_HotelCar();

if(utag.isFCO() && b['entity.checkout.flightOffer.arrivalAirportCityState'] != undefined )
{
    b["stateProvinceCode"] = b['entity.checkout.flightOffer.arrivalAirportCityState'].split(",")[1].trim();
}
else if(utag.isFRateDetails() && b['entity.tripDetails.flightOffer.arrivalAirportCityState'] != undefined)
{
    b["stateProvinceCode"] = b['entity.tripDetails.flightOffer.arrivalAirportCityState'].split(",")[1].trim();
}
else if(utag.isFSR() && b['entity.flightSearch.searchParameters.arrivalAirportCityState'])
{
    b["stateProvinceCode"] = b['entity.flightSearch.searchParameters.arrivalAirportCityState'].split(",")[1].trim();
}
else if(utag.isHSR() && b['entity.hotels.results.results.0.hotelProvinceCode'] != undefined)
{
    b["stateProvinceCode"] = b['entity.hotels.results.results.0.hotelProvinceCode'];
}
else if(utag.isHIS() && b['entity.hotels.listOfHotels.0.hotelProvinceCode'] != undefined)
{
    b["stateProvinceCode"] = b['entity.hotels.listOfHotels.0.hotelProvinceCode'];
}
else if((utag.isHCO() || utag.isPCO()) && b['entity.checkout.hotel.hotelProvinceName'] != undefined)
{
    b["stateProvinceCode"] = b['entity.checkout.hotel.hotelProvinceName'];
}
else if(utag.isPSR() && b['entity.packageSearch.packageSearchParameters.flightSearchParameters.departureAirportCityState'] != undefined)
{
    b["stateProvinceCode"] = b['entity.packageSearch.packageSearchParameters.flightSearchParameters.departureAirportCityState'].split(",")[1].trim();
    if(b["pageInfo.pageName"] == "page.Package-Search.Mobile,P,20" && b["stateProvinceCode"] != undefined)
    {
        b["stateProvinceCode"] = b["stateProvinceCode"].split("(")[0].trim();
    }
}
else if((packageSearchOrInfosite) && b["entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState"] != undefined)
{
    var dacs = b["entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState"].split(",")
    if (dacs.length == 3)
    {
        b["stateProvinceCode"] = dacs[1].trim();
    }
    else if (dacs.length == 2)
    {
        b["stateProvinceCode"] = dacs[0].trim();
    }
}
else if (utag.isMCO()) {
    if (b["entity.checkout.hotels.0.hotelProvinceName"] != undefined) {
        b["stateProvinceCode"] = b["entity.checkout.hotels.0.hotelProvinceName"];
    }
    else if (b["entity.checkout.flightOffers.0.destinationAirportCityState"] != undefined) {
        b["stateProvinceCode"] = b["entity.checkout.flightOffers.0.destinationAirportCityState"].split(",")[1];
    }
    else if (b["entity.checkout.cars.0.dropOffLocation.address.province"] != undefined) {
        b["stateProvinceCode"] = b["entity.checkout.cars.0.dropOffLocation.address.province"];
    }
}
else if (utag.isDestinationLandingPage() && b['entity.tripDetails.hotelOffer.hotelDescription.destination'] != undefined) {
    b['stateProvinceCode'] = b['entity.tripDetails.hotelOffer.hotelDescription.destination'].split(",")[1];
}