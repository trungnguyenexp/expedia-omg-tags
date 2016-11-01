if((utag.isFRateDetails() || utag.isPRateDetails())  && typeof b["entity.tripDetails.flightOffer.arrivalCountryName"] != "undefined"){
    b["countryCode"] = b["entity.tripDetails.flightOffer.arrivalCountryName"];
}
else if(utag.isFCO() && typeof b["entity.checkout.flightOffer.arrivalCountryName"] != "undefined"){
    b["countryCode"] = b["entity.checkout.flightOffer.arrivalCountryName"];
}
else if(utag.isCarSR()){
    b["countryCode"] = b["entity.carSearch.searchCriteria.dropOffRegion.countryCode"];
}
else if((utag.isCarCO() || utag.isCarPymt()) && b["entity.checkout.car.dropOffLocation.address.country"])
{
    b["countryCode"] = b["entity.checkout.car.dropOffLocation.address.country"]
}
else if((utag.isHCO() || utag.isPCO()) && b["entity.checkout.hotel.hotelCountryCode"])
{
    b["countryCode"] = b["entity.checkout.hotel.hotelCountryCode"];
}
else if(utag.isHSR() && b["entity.hotels.results.results.0.hotelCountryCode"])
{
    b["countryCode"] = b["entity.hotels.results.results.0.hotelCountryCode"];
}
else if(utag.isHIS() && b["entity.hotels.listOfHotels.0.hotelCountryCode"])
{
    b["countryCode"] = b["entity.hotels.listOfHotels.0.hotelCountryCode"];
}
else if((utag.isFSR() || utag.isPSR_F_Responsive()) && b["entity.flightSearch.searchParameters.arrivalCountry"])
{
    b["countryCode"] = b["entity.flightSearch.searchParameters.arrivalCountry"];
}
else if (utag.isPSR() && b['entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalCountry'])
{
    b["countryCode"] = b['entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalCountry'];
}
else if (utag.isMCO())
{
    if (b["entity.checkout.hotels.0.hotelCountryCode"] != undefined)
    {
        b["countryCode"] = b["entity.checkout.hotels.0.hotelCountryCode"];
    }
    else if (b["entity.checkout.flightOffers.0.arrivalCountryName"] != undefined)
    {
        b["countryCode"] = b["entity.checkout.flightOffers.0.arrivalCountryName"];
    }
    else if (b["entity.checkout.cars.0.dropOffLocation.address.country"] != undefined)
    {
        b["countryCode"] = b["entity.checkout.cars.0.dropOffLocation.address.country"];
    }
}

/** old
 if((utag.isFRateDetails() || utag.isPRateDetails())  && typeof utag_data["entity.tripDetails.flightOffer.arrivalCountryName"] != "undefined"){
    utag_data["countryCode"] = utag_data["entity.tripDetails.flightOffer.arrivalCountryName"];
}
 else if(utag.isFCO() && typeof utag_data["entity.checkout.flightOffer.arrivalCountryName"] != "undefined"){
    utag_data["countryCode"] = utag_data["entity.checkout.flightOffer.arrivalCountryName"];
}
 else if(utag.isCarSR()){
    utag_data["countryCode"] = utag_data["entity.carSearch.searchCriteria.dropOffRegion.countryCode"];
}
 else if((utag.isCarCO() || utag.isCarPymt()) && utag_data["entity.checkout.car.dropOffLocation.address.country"])
 {
     utag_data["countryCode"] = utag_data["entity.checkout.car.dropOffLocation.address.country"]
 }
 else if((utag.isHCO() || utag.isPCO()) && utag_data["entity.checkout.hotel.hotelCountryCode"])
 {
     utag_data["countryCode"] = utag_data["entity.checkout.hotel.hotelCountryCode"];
 }
 else if(utag.isHSR() && utag_data["entity.hotels.results.results.0.hotelCountryCode"])
 {
     utag_data["countryCode"] = utag_data["entity.hotels.results.results.0.hotelCountryCode"];
 }
 else if(utag.isHIS() && utag_data["entity.hotels.listOfHotels.0.hotelCountryCode"])
 {
     utag_data["countryCode"] = utag_data["entity.hotels.listOfHotels.0.hotelCountryCode"];
 }
 else if((utag.isFSR() || utag.isPSR_F_Responsive()) && utag_data["entity.flightSearch.searchParameters.arrivalCountry"])
 {
     utag_data["countryCode"] = utag_data["entity.flightSearch.searchParameters.arrivalCountry"];
 }
 else if (utag.isPSR() && utag_data['entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalCountry'])
 {
     utag_data["countryCode"] = utag_data['entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalCountry'];
 }
 else if (utag.isMCO())
 {
     if (utag_data["entity.checkout.hotels.0.hotelCountryCode"] != undefined)
     {
         utag_data["countryCode"] = utag_data["entity.checkout.hotels.0.hotelCountryCode"];
     }
     else if (utag_data["entity.checkout.flightOffers.0.arrivalCountryName"] != undefined)
     {
         utag_data["countryCode"] = utag_data["entity.checkout.flightOffers.0.arrivalCountryName"];
     }
     else if (utag_data["entity.checkout.cars.0.dropOffLocation.address.country"] != undefined)
     {
         utag_data["countryCode"] = utag_data["entity.checkout.cars.0.dropOffLocation.address.country"];
     }
 }
 **/