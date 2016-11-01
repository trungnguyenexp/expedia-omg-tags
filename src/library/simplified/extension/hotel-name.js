b['hotelName'] = '';
if(utag.isHSR() && b['entity.hotels.search.hotelName']){
    b['hotelName'] = b['entity.hotels.search.hotelName'];
}
if (utag.isHIS() && b['entity.hotels.listOfHotels.0.hotelName'])
{
    b['hotelName'] = b['entity.hotels.listOfHotels.0.hotelName'];
}
else if ((utag.isHCO() || utag.isPCO()) && b['entity.checkout.hotel.hotelName'])
{
    b['hotelName'] = b['entity.checkout.hotel.hotelName'];
}
else if (utag.isPCO() && b['entity.tripDetails.hotelOffer.hotelDescription.hotelName'])
{
    b['hotelName'] = b['entity.tripDetails.hotelOffer.hotelDescription.hotelName'];
}
else if (utag.isPRateDetails() && b['entity.tripDetails.hotelOffer.hotelDescription.hotelName'])
{
    b['hotelName'] = b['entity.tripDetails.hotelOffer.hotelDescription.hotelName'];
}
else if (utag.isMCO() && b['entity.checkout.hotels.0.hotelName']) {
    b['hotelName'] = b['entity.checkout.hotels.0.hotelName'];
}


/** old
 utag_data['hotelName'] = '';
 if(utag.isHSR() && utag_data['entity.hotels.search.hotelName']){
  utag_data['hotelName'] = utag_data['entity.hotels.search.hotelName'];
}
 if (utag.isHIS() && utag_data['entity.hotels.listOfHotels.0.hotelName'])
 {
     utag_data['hotelName'] = utag_data['entity.hotels.listOfHotels.0.hotelName'];
 }
 else if ((utag.isHCO() || utag.isPCO()) && utag_data['entity.checkout.hotel.hotelName'])
 {
     utag_data['hotelName'] = utag_data['entity.checkout.hotel.hotelName'];
 }
 else if (utag.isPCO() && utag_data['entity.tripDetails.hotelOffer.hotelDescription.hotelName'])
 {
     utag_data['hotelName'] = utag_data['entity.tripDetails.hotelOffer.hotelDescription.hotelName'];
 }
 else if (utag.isPRateDetails() && utag_data['entity.tripDetails.hotelOffer.hotelDescription.hotelName'])
 {
     utag_data['hotelName'] = utag_data['entity.tripDetails.hotelOffer.hotelDescription.hotelName'];
 }
 else if (utag.isMCO() && utag_data['entity.checkout.hotels.0.hotelName']) {
    utag_data['hotelName'] = utag_data['entity.checkout.hotels.0.hotelName'];
}
 **/