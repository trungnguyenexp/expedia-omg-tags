b['hotelId'] = '';
b['hotelId_array'] = [];

if(utag.isHSR()){
    var hotelIds = "";
    for(var i=0;i<6;i++){
        if(b["entity.hotels.results.results."+i+".hotelId"] != undefined ){
            hotelIds =  hotelIds + b["entity.hotels.results.results."+i+".hotelId"] + "|"
        }
    }
    b["hotelId"] = hotelIds.slice(0,-1);
}
if (utag.isHIS() && b['entity.hotels.listOfHotels.0.hotelId'] != undefined)
{
    b['hotelId'] = b['entity.hotels.listOfHotels.0.hotelId'];
}
else if (utag.isPIS() && b['qp.hotelId'] != undefined)
{
    b['hotelId'] = b['qp.hotelId'];
}
else if ((utag.isHCO() || utag.isPCO()) && b['entity.checkout.hotel.hotelId'] != undefined)
{
    b['hotelId'] = b['entity.checkout.hotel.hotelId'].toString();
}
else if (utag.isPRateDetails() && b['entity.tripDetails.hotelOffer.hotelId'])
{
    b['hotelId'] = b['entity.tripDetails.hotelOffer.hotelId'];
}
else if(utag.isPIS_FH() && b["entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.selectedHotelId"] != undefined)
{
    b['hotelId'] = b["entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.selectedHotelId"];
}
else if(utag.isPSR_FH_Responsive() && b["entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.topTenHotelIds"] != undefined)
{
    b['hotelId'] = b["entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.topTenHotelIds"];
}
else if (b['entity.tripDetails.hotelOffer.hotelId'])
{
    b['hotelId'] = b['entity.tripDetails.hotelOffer.hotelId'];
}
else if (utag.is3pp() && b['entity.checkout.hotel.hotelId'])
{
    b['hotelId'] = b['entity.checkout.hotel.hotelId'];
}
else if (utag.isMCO() && b['entity.checkout.hotels.0.hotelId']) {
    b['hotelId'] = b['entity.checkout.hotels.0.hotelId'].toString();
}
b['hotelId_array'].push(b['hotelId']);

/** old
 utag_data['hotelId'] = '';
 utag_data['hotelId_array'] = [];

 if(utag.isHSR()){
    var hotelIds = "";
    for(var i=0;i<6;i++){
        if(utag_data["entity.hotels.results.results."+i+".hotelId"] != undefined ){
            hotelIds =  hotelIds + utag_data["entity.hotels.results.results."+i+".hotelId"] + "|"
        }
    }
    utag_data["hotelId"] = hotelIds.slice(0,-1);
}
 if (utag.isHIS() && utag_data['entity.hotels.listOfHotels.0.hotelId'] != undefined)
 {
     utag_data['hotelId'] = utag_data['entity.hotels.listOfHotels.0.hotelId'];
 }
 else if (utag.isPIS() && utag_data['qp.hotelId'] != undefined)
 {
     utag_data['hotelId'] = utag_data['qp.hotelId'];
 }
 else if ((utag.isHCO() || utag.isPCO()) && utag_data['entity.checkout.hotel.hotelId'] != undefined)
 {
     utag_data['hotelId'] = utag_data['entity.checkout.hotel.hotelId'].toString();
 }
 else if (utag.isPRateDetails() && utag_data['entity.tripDetails.hotelOffer.hotelId'])
 {
     utag_data['hotelId'] = utag_data['entity.tripDetails.hotelOffer.hotelId'];
 }
 else if(utag.isPIS_FH() && utag_data["entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.selectedHotelId"] != undefined)
 {
     utag_data['hotelId'] = utag_data["entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.selectedHotelId"];
 }
 else if(utag.isPSR_FH_Responsive() && utag_data["entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.topTenHotelIds"] != undefined)
 {
     utag_data['hotelId'] = utag_data["entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.topTenHotelIds"];
 }
 else if (utag_data['entity.tripDetails.hotelOffer.hotelId'])
 {
     utag_data['hotelId'] = utag_data['entity.tripDetails.hotelOffer.hotelId'];
 }
 else if (utag.is3pp() && utag_data['entity.checkout.hotel.hotelId'])
 {
     utag_data['hotelId'] = utag_data['entity.checkout.hotel.hotelId'];
 }
 else if (utag.isMCO() && utag_data['entity.checkout.hotels.0.hotelId']) {
    utag_data['hotelId'] = utag_data['entity.checkout.hotels.0.hotelId'];
}
 utag_data['hotelId_array'].push(utag_data['hotelId']);
 **/