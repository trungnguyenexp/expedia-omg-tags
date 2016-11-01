b['destinationAirportCode'] = '';
if (utag.isFRateDetails() && b['entity.flight.flight.flight.legs.0.arrivalAirportCode'])
{
    b['destinationAirportCode'] = b['entity.flight.flight.flight.legs.0.arrivalAirportCode'];
}
else if (utag.isPRateDetails() && b['entity.tripDetails.flightOffer.destinationAirportCode'])
{
    b['destinationAirportCode'] = b['entity.tripDetails.flightOffer.destinationAirportCode'];
}
else if ((utag.isFSR() || utag.isPSR_F_Responsive()) && b['entity.flightSearch.searchParameters.arrivalAirport'])
{
    b['destinationAirportCode'] = b['entity.flightSearch.searchParameters.arrivalAirport'];
}
else if (utag.isPSR())
{
    if (b['entity.packageFHSearch.packageFHSearchParameters.packageFlightSearchParameters.arrivalAirportTLA'])
    {
        // FH/FHC
        b['destinationAirportCode'] = b['entity.packageFHSearch.packageFHSearchParameters.packageFlightSearchParameters.arrivalAirportTLA'];
    }
    else if (b['entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirport'])
    {
        // FC/HC
        b['destinationAirportCode'] = b['entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirport'];
    }
}
else if ((utag.isFCO() || utag.isPCO()) && b['entity.checkout.flightOffer.flight.legs.0.arrivalAirportCode'])
{
    b['destinationAirportCode'] = b['entity.checkout.flightOffer.flight.legs.0.arrivalAirportCode'];
}
else if (utag.isCarSR() && b['entity.carSearch.carOffers.0.pickUpLocation.locationCode'] != undefined){
    b['destinationAirportCode'] = b['entity.carSearch.carOffers.0.pickUpLocation.locationCode'];
}
else if (utag.isMCO() && b['entity.checkout.flightOffers.0.flight.legs.0.arrivalAirportCode']) {
    b['destinationAirportCode'] = b['entity.checkout.flightOffers.0.flight.legs.0.arrivalAirportCode'];
}

/** old
 utag_data['destinationAirportCode'] = '';
 if (utag.isFRateDetails() && utag_data['entity.flight.flight.flight.legs.0.arrivalAirportCode'])
 {
     utag_data['destinationAirportCode'] = utag_data['entity.flight.flight.flight.legs.0.arrivalAirportCode'];
 }
 else if (utag.isPRateDetails() && utag_data['entity.tripDetails.flightOffer.destinationAirportCode'])
 {
     utag_data['destinationAirportCode'] = utag_data['entity.tripDetails.flightOffer.destinationAirportCode'];
 }
 else if ((utag.isFSR() || utag.isPSR_F_Responsive()) && utag_data['entity.flightSearch.searchParameters.arrivalAirport'])
 {
     utag_data['destinationAirportCode'] = utag_data['entity.flightSearch.searchParameters.arrivalAirport'];
 }
 else if (utag.isPSR())
 {
     if (utag_data['entity.packageFHSearch.packageFHSearchParameters.packageFlightSearchParameters.arrivalAirportTLA'])
     {
         // FH/FHC
         utag_data['destinationAirportCode'] = utag_data['entity.packageFHSearch.packageFHSearchParameters.packageFlightSearchParameters.arrivalAirportTLA'];
     }
     else if (utag_data['entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirport'])
     {
         // FC/HC
         utag_data['destinationAirportCode'] = utag_data['entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirport'];
     }
 }
 else if ((utag.isFCO() || utag.isPCO()) && utag_data['entity.checkout.flightOffer.flight.legs.0.arrivalAirportCode'])
 {
     utag_data['destinationAirportCode'] = utag_data['entity.checkout.flightOffer.flight.legs.0.arrivalAirportCode'];
 }
 else if (utag.isCarSR() && utag_data['entity.carSearch.carOffers.0.pickUpLocation.locationCode'] != undefined){
  utag_data['destinationAirportCode'] = utag_data['entity.carSearch.carOffers.0.pickUpLocation.locationCode'];
}
 else if (utag.isMCO() && utag_data['entity.checkout.flightOffers.0.flight.legs.0.arrivalAirportCode']) {
  utag_data['destinationAirportCode'] = utag_data['entity.checkout.flightOffers.0.flight.legs.0.arrivalAirportCode'];
}
 **/