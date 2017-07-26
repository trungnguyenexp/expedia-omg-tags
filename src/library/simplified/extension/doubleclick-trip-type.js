b['flightTripType'] = '';
if (utag.isFRateDetails() && b['entity.tripDetails.flightOffer.tripType'] != undefined){
    b['flightTripType'] = b['entity.tripDetails.flightOffer.tripType']
}
else if (utag.isFCO() && b['entity.checkout.flightOffer.tripType'] != undefined){
    b['flightTripType'] = b['entity.checkout.flightOffer.tripType']
}
else if (utag.isFSR() && typeof utag_data['entity.flightSearch.searchParameters.flightType'] != undefined) {
    utag_data['flightTripType'] = utag_data['entity.flightSearch.searchParameters.flightType'].match(/[A-Z]+/g).join('');
}