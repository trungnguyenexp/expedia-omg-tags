if(utag.isHSR() && typeof b["entity.hotels.search.city"] != "undefined"){
    b["city"] = b["entity.hotels.search.city"].split(",")[0];
}
else if((utag.isHIS() || utag.isPIS()) && typeof b["entity.hotels.listOfHotels.0.hotelCityName"] != "undefined"){
    b["city"] = b["entity.hotels.listOfHotels.0.hotelCityName"];
}
else if((utag.isHCO() || utag.isHPymt() || utag.isPPymt() || utag.isPCO()) && typeof b["entity.checkout.hotel.hotelCityName"] != "undefined"){
    b["city"] = b["entity.checkout.hotel.hotelCityName"];
}
else if((utag.isFSR() || utag.isPSR_F_Responsive()) && b["entity.flightSearch.searchParameters.arrivalAirportCityState"]){
    b["city"] = b["entity.flightSearch.searchParameters.arrivalAirportCityState"].split(",")[0];
}
else if(utag.isFRateDetails() && typeof b["entity.tripDetails.flightOffer.destinationAirportCityState"] != "undefined"){
    b["city"] = b["entity.tripDetails.flightOffer.destinationAirportCityState"].split(",")[0];
}
else if(utag.isFCO()){
    b["city"] = b["entity.checkout.flightOffer.destinationAirportCityState"].split(",")[0];
}
else if(utag.isPSR() && b['entity.packageFHSearch.packageFHSearchParameters.arrivalCityName']){
    b["city"] = b['entity.packageFHSearch.packageFHSearchParameters.arrivalCityName'];
}
else if(utag.isPSR_Mobile() && b['entity.packageFHSearch.packageFHSearchParameters.arrivalCityName']){
    b["city"] = b['entity.packageFHSearch.packageFHSearchParameters.arrivalCityName'].split("(")[0].trim();
}
else if((utag.isPSR_HC() || utag.isPIS_HC() || utag.isPSR_FC() || utag.isPSR_FH_Responsive() || utag.isPIS_FH()) && b["entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState"]){
    b["city"] = b["entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState"].split(",")[0];
}
else if(utag.isPRateDetails() && typeof b["entity.tripDetails.flightOffer.destinationAirportCityState"]) {
    b["city"] = b["entity.tripDetails.flightOffer.destinationAirportCityState"];
}
else if(utag.isCarSR() && b["entity.carSearch.searchCriteria.pickUpLocation.regionName"]) {
    b["city"] = b["entity.carSearch.searchCriteria.pickUpLocation.regionName"].split(",")[0];
    if(b["entity.carSearch.searchCriteria.dropOffLocation.regionName"] != undefined)
    {
        b["city"] = b["entity.carSearch.searchCriteria.dropOffLocation.regionName"].split(",")[0];
    }
}
else if((utag.isCarCO() || utag.isCarPymt()) && b["entity.checkout.car.dropOffLocation.address.city"])
{
    b["city"] = b["entity.checkout.car.dropOffLocation.address.city"]
}
else if(utag.isFSR() && b["entity.flightSearch.searchParameters.arrivalAirportCityState"])
{
    var cityState = b['entity.flightSearch.searchParameters.arrivalAirportCityState'].split(',');
    if(cityState.length > 1)
    {
        b["city"] = cityState[0];
    }
}
else if(utag.isLXCO() && b["entity.checkout.activities.0.activityDetail.destination"]){
    b["city"] = b["entity.checkout.activities.0.activityDetail.destination"];
}
else if(utag.isLXS() && b["entity.activities.activitySearchParameters.destination"]){
    b["city"] = b["entity.activities.activitySearchParameters.destination"].split(",")[0];
}
else if(utag.isLXI() && b["entity.activities.activityInfo.activityDetail.destination"]){
    b["city"] = b["entity.activities.activityInfo.activityDetail.destination"].split(",")[0];
}
else if( (utag.isPSR_HC() || utag.isPIS_HotelCar() ) &&
    b["entity.packageSearch.packageSearchParameters.flightSearchParameters.departureAirportCityState"] != undefined){
    b["city"] = b["entity.packageSearch.packageSearchParameters.flightSearchParameters.departureAirportCityState"].split(",")[0];
}
else if( (utag.isPSR_FC() || utag.isPIS_FlightHotel() ) &&
    b["entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState"] != undefined ){
    b["city"] = b["entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState"].split(",")[0];
}
else if (utag.isMCO()) {
    if (b["entity.checkout.cars.0.dropOffLocation.address.city"] != undefined) {
        b["city"] = b["entity.checkout.cars.0.dropOffLocation.address.city"];
    }
    else if (b["entity.checkout.flightOffers.0.destinationAirportCityState"] != undefined) {
        b["city"] = b["entity.checkout.flightOffers.0.destinationAirportCityState"].split(",")[0];
    }
    else if (b["entity.checkout.hotels.0.hotelCityName"] != undefined) {
        b["city"] = b["entity.checkout.hotels.0.hotelCityName"];
    }
}

/** old
 if(utag.isHSR() && typeof utag_data["entity.hotels.search.city"] != "undefined"){
    utag_data["city"] = utag_data["entity.hotels.search.city"].split(",")[0];
}
 else if((utag.isHIS() || utag.isPIS()) && typeof utag_data["entity.hotels.listOfHotels.0.hotelCityName"] != "undefined"){
    utag_data["city"] = utag_data["entity.hotels.listOfHotels.0.hotelCityName"];
}
 else if((utag.isHCO() || utag.isHPymt() || utag.isPPymt() || utag.isPCO()) && typeof utag_data["entity.checkout.hotel.hotelCityName"] != "undefined"){
    utag_data["city"] = utag_data["entity.checkout.hotel.hotelCityName"];
}
 else if((utag.isFSR() || utag.isPSR_F_Responsive()) && utag_data["entity.flightSearch.searchParameters.arrivalAirportCityState"]){
    utag_data["city"] = utag_data["entity.flightSearch.searchParameters.arrivalAirportCityState"].split(",")[0];
}
 else if(utag.isFRateDetails() && typeof utag_data["entity.tripDetails.flightOffer.destinationAirportCityState"] != "undefined"){
    utag_data["city"] = utag_data["entity.tripDetails.flightOffer.destinationAirportCityState"].split(",")[0];
}
 else if(utag.isFCO()){
    utag_data["city"] = utag_data["entity.checkout.flightOffer.destinationAirportCityState"].split(",")[0];
}
 else if(utag.isPSR() && utag_data['entity.packageFHSearch.packageFHSearchParameters.arrivalCityName']){
    utag_data["city"] = utag_data['entity.packageFHSearch.packageFHSearchParameters.arrivalCityName'];
}
 else if(utag.isPSR_Mobile() && utag_data['entity.packageFHSearch.packageFHSearchParameters.arrivalCityName']){
   utag_data["city"] = utag_data['entity.packageFHSearch.packageFHSearchParameters.arrivalCityName'].split("(")[0].trim();
}
 else if((utag.isPSR_HC() || utag.isPIS_HC() || utag.isPSR_FC() || utag.isPSR_FH_Responsive() || utag.isPIS_FH()) && utag_data["entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState"]){
    utag_data["city"] = utag_data["entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState"].split(",")[0];
}
 else if(utag.isPRateDetails() && typeof utag_data["entity.tripDetails.flightOffer.destinationAirportCityState"]) {
    utag_data["city"] = utag_data["entity.tripDetails.flightOffer.destinationAirportCityState"];
}
 else if(utag.isCarSR() && utag_data["entity.carSearch.searchCriteria.pickUpLocation.regionName"]) {
    utag_data["city"] = utag_data["entity.carSearch.searchCriteria.pickUpLocation.regionName"].split(",")[0];
  if(utag_data["entity.carSearch.searchCriteria.dropOffLocation.regionName"] != undefined)
  {
    utag_data["city"] = utag_data["entity.carSearch.searchCriteria.dropOffLocation.regionName"].split(",")[0];
  }
}
 else if((utag.isCarCO() || utag.isCarPymt()) && utag_data["entity.checkout.car.dropOffLocation.address.city"])
 {
     utag_data["city"] = utag_data["entity.checkout.car.dropOffLocation.address.city"]
 }
 else if(utag.isFSR() && utag_data["entity.flightSearch.searchParameters.arrivalAirportCityState"])
 {
     var cityState = utag_data['entity.flightSearch.searchParameters.arrivalAirportCityState'].split(',');
     if(cityState.length > 1)
     {
         utag_data["city"] = cityState[0];
     }
 }
 else if(utag.isLXCO() && utag_data["entity.checkout.activities.0.activityDetail.destination"]){
  utag_data["city"] = utag_data["entity.checkout.activities.0.activityDetail.destination"];
}
 else if(utag.isLXS() && utag_data["entity.activities.activitySearchParameters.destination"]){
  utag_data["city"] = utag_data["entity.activities.activitySearchParameters.destination"].split(",")[0];
}
 else if(utag.isLXI() && utag_data["entity.activities.activityInfo.activityDetail.destination"]){
  utag_data["city"] = utag_data["entity.activities.activityInfo.activityDetail.destination"].split(",")[0];
}
 else if( (utag.isPSR_HC() || utag.isPIS_HotelCar() ) &&
 utag_data["entity.packageSearch.packageSearchParameters.flightSearchParameters.departureAirportCityState"] != undefined){
    utag_data["city"] = utag_data["entity.packageSearch.packageSearchParameters.flightSearchParameters.departureAirportCityState"].split(",")[0];
}
 else if( (utag.isPSR_FC() || utag.isPIS_FlightHotel() ) &&
 utag_data["entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState"] != undefined ){
    utag_data["city"] = utag_data["entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirportCityState"].split(",")[0];
}
 else if (utag.isMCO()) {
  if (utag_data["entity.checkout.cars.0.dropOffLocation.address.city"] != undefined) {
    utag_data["city"] = utag_data["entity.checkout.cars.0.dropOffLocation.address.city"];
  }
  else if (utag_data["entity.checkout.flightOffers.0.destinationAirportCityState"] != undefined) {
    utag_data["city"] = utag_data["entity.checkout.flightOffers.0.destinationAirportCityState"].split(",")[0];
  }
  else if (utag_data["entity.checkout.hotels.0.hotelCityName"] != undefined) {
    utag_data["city"] = utag_data["entity.checkout.hotels.0.hotelCityName"];
  }    
}
 **/