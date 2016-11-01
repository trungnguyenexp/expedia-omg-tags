
b['checkInDate'] = '';
if (utag.isHSR() && b['entity.hotels.search.hotelParameters.checkInDate'] != undefined)
{
    b['checkInDate'] = b['entity.hotels.search.hotelParameters.checkInDate'];
}
else if (utag.isHIS() && b['entity.hotels.listOfHotels.0.checkInDate'] != undefined)
{
    b['checkInDate'] = b['entity.hotels.listOfHotels.0.checkInDate'];
}
else if ((utag.isHCO() || utag.isHPymt()) && b['entity.checkout.hotel.isoCheckInDate'] != undefined)
{
    b['checkInDate'] = b['entity.checkout.hotel.isoCheckInDate'];
}
else if (utag.isPSR() || utag.isPIS_FH())
{
    if (true == b['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.partialStay'])
    {
        // FH/FHC (Partial Stay)
        b['checkInDate'] = b['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.checkInDateForPartialStay'];
    }
    else if (b['entity.packageFHSearch.packageFHSearchParameters.departureDate'])
    {
        // FH/FHC
        b['checkInDate'] = b['entity.packageFHSearch.packageFHSearchParameters.departureDate'];
    }
    else if (b['entity.packageSearch.packageSearchParameters.isoFormatDepartureDate'])
    {
        // FC/HC
        b['checkInDate'] = b['entity.packageSearch.packageSearchParameters.isoFormatDepartureDate'];
    }
}
else if (utag.isPIS())
{
    if (b['entity.hotels.listOfHotels.0.checkInDate']) {
        b['checkInDate'] = b['entity.hotels.listOfHotels.0.checkInDate'];
    }
    else if (b['entity.packageSearch.packageSearchParameters.isoFormatDepartureDate'])
    {
        b['checkInDate'] = b['entity.packageSearch.packageSearchParameters.isoFormatDepartureDate'];
    }
}
else if (utag.isPRateDetails())
{
    if (b['entity.tripDetails.hotelOffer.isoFormatCheckInDate'])
    {
        b['checkInDate'] = b['entity.tripDetails.hotelOffer.isoFormatCheckInDate'];
    }
    else if (b['entity.tripDetails.utcTripStartDate'])
    {
        var toIsoDate = function (jsDate)
        {
            return jsDate.getFullYear()
                + '-' + ('0' + (jsDate.getMonth() + 1)).slice(-2)
                + '-' + ('0' + jsDate.getDate()).slice(-2)
        };

        var tripStartDate = b['entity.tripDetails.utcTripStartDate'];
        if (!isNaN(tripStartDate))
        {
            b['checkInDate'] = toIsoDate(new Date(tripStartDate));
        }
    }
}
else if (utag.isPCO() && b['entity.checkout.hotel.isoCheckInDate'])
{
    b["checkInDate"] = b['entity.checkout.hotel.isoCheckInDate'];
}
else if ((utag.isCarCO() || utag.isCarPymt()) && b["entity.checkout.car.isoFormatPickUpDate"] != undefined)
{
    b["checkInDate"] = b.entity.checkout.car.isoFormatPickUpDate;
}
else if (utag.isCarCO() && b.entity.tripDetails != undefined)
{
    b["checkInDate"] = b.entity.tripDetails.carInfo.isoFormatPickUpDate;
}
else if (utag.isLXCO() && b['entity.checkout.activities.0.isoFormatStartDate'] != undefined)
{
    b['checkInDate'] = b['entity.checkout.activities.0.isoFormatStartDate'];
}
else if(utag.isLXCO() && b['entity.checkout.activity.activityDetail.isoFormatStartDate'] != undefined)
{
    b['checkInDate'] = b['entity.checkout.activity.activityDetail.isoFormatStartDate'];
}
else if(utag.isLXCO() && b.entity.checkout.activity.isoFormatStartDate != undefined){
    b['checkInDate'] = b.entity.checkout.activity.isoFormatStartDate;
}
else if((utag.isFSR() || utag.isPSR_F_Responsive()) && b['entity.flightSearch.searchParameters.isoFormatDepartureDate'])
{
    b['checkInDate'] = b['entity.flightSearch.searchParameters.isoFormatDepartureDate'];
}
else if (utag.isFRateDetails() && b.entity.tripDetails.flightOffer.flight.legs != undefined )
{
    b["checkInDate"] = b["entity.tripDetails.flightOffer.flight.legs.0.isoFormatDepartureTimestamp"];
}
else if(utag.isCarSR() && b['entity.carSearch.searchCriteria.isoFormatPickUpDate'] != undefined){
    b['checkInDate'] =  b['entity.carSearch.searchCriteria.isoFormatPickUpDate'];
}
else if(utag.isFCO() && b['entity.checkout.flightOffer.flight.legs.0.isoFormatDepartureTimestamp'] != undefined)
{
    b['checkInDate'] = b['entity.checkout.flightOffer.flight.legs.0.isoFormatDepartureTimestamp'];
}
else if (utag.isCarCO() && b['entity.checkout.car.isoFormatPickUpDate'])
{
    b['checkInDate'] = b['entity.checkout.car.isoFormatPickUpDate'];
}
else if (utag.isCruiseCO() && b['entity.checkout.cruise.isoFormatDepartureDate'])
{
    b['checkInDate'] = b['entity.checkout.cruise.isoFormatDepartureDate'];
}
else if (utag.isCruiseSR() && b['entity.cruiseSearch.cruiseSearchCriteria.isoFormatEarliestDepartureDate'])
{
    b['checkInDate'] = b['entity.cruiseSearch.cruiseSearchCriteria.isoFormatEarliestDepartureDate'];
}
else if ((utag.isCruiseIS() || utag.isCruiseTP() || utag.isCruiseCabinN()) && b['entity.cruise.isoFormatDepartureDate'])
{
    b['checkInDate'] = b['entity.cruise.isoFormatDepartureDate'];
}
else if (b['entity.tripDetails.hotelOffer.isoFormatCheckInDate'])
{
    b['checkInDate'] = b['entity.tripDetails.hotelOffer.isoFormatCheckInDate'];
}
else if(utag.is3pp() && b['entity.checkout.hotel.checkInDate']){
    b['checkInDate'] = b['entity.checkout.hotel.checkInDate'];
}
else if (utag.isLXS() && b["entity.activities.activitySearchParameters.isoFormatStartDate"] != undefined){
    b['checkInDate'] = b["entity.activities.activitySearchParameters.isoFormatStartDate"];
}
else if (utag.isMCO()) {
    if (b['entity.checkout.hotels.0.isoCheckInDate'] != undefined) {
        b['checkInDate'] = b['entity.checkout.hotels.0.isoCheckInDate'];
    }
    else if (b['entity.checkout.flightOffers.0.flight.legs.0.isoFormatDepartureTimestamp'] != undefined) {
        b['checkInDate'] = b['entity.checkout.flightOffers.0.flight.legs.0.isoFormatDepartureTimestamp'];
    }
    else if (b['entity.checkout.cars.0.isoFormatPickUpDate'] != undefined) {
        b['checkInDate'] = b['entity.checkout.cars.0.isoFormatPickUpDate'];
    }
}

if(b["checkInDate"] != '')
{
    b["checkInDate"] = b["checkInDate"].split("T")[0];
}

/** old
 utag_data['checkInDate'] = '';
 if (utag.isHSR() && utag_data['entity.hotels.search.hotelParameters.checkInDate'] != undefined)
 {
     utag_data['checkInDate'] = utag_data['entity.hotels.search.hotelParameters.checkInDate'];
 }
 else if (utag.isHIS() && utag_data['entity.hotels.listOfHotels.0.checkInDate'] != undefined)
 {
     utag_data['checkInDate'] = utag_data['entity.hotels.listOfHotels.0.checkInDate'];
 }
 else if ((utag.isHCO() || utag.isHPymt()) && utag_data['entity.checkout.hotel.isoCheckInDate'] != undefined)
 {
     utag_data['checkInDate'] = utag_data['entity.checkout.hotel.isoCheckInDate'];
 }
 else if (utag.isPSR() || utag.isPIS_FH())
 {
     if (true == utag_data['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.partialStay'])
     {
         // FH/FHC (Partial Stay)
         utag_data['checkInDate'] = utag_data['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.checkInDateForPartialStay'];
     }
     else if (utag_data['entity.packageFHSearch.packageFHSearchParameters.departureDate'])
     {
         // FH/FHC
         utag_data['checkInDate'] = utag_data['entity.packageFHSearch.packageFHSearchParameters.departureDate'];
     }
     else if (utag_data['entity.packageSearch.packageSearchParameters.isoFormatDepartureDate'])
     {
         // FC/HC
         utag_data['checkInDate'] = utag_data['entity.packageSearch.packageSearchParameters.isoFormatDepartureDate'];
     }
 }
 else if (utag.isPIS())
 {
     if (utag_data['entity.hotels.listOfHotels.0.checkInDate']) {
         utag_data['checkInDate'] = utag_data['entity.hotels.listOfHotels.0.checkInDate'];
     }
     else if (utag_data['entity.packageSearch.packageSearchParameters.isoFormatDepartureDate'])
     {
         utag_data['checkInDate'] = utag_data['entity.packageSearch.packageSearchParameters.isoFormatDepartureDate'];
     }
 }
 else if (utag.isPRateDetails())
 {
     if (utag_data['entity.tripDetails.hotelOffer.isoFormatCheckInDate'])
     {
         utag_data['checkInDate'] = utag_data['entity.tripDetails.hotelOffer.isoFormatCheckInDate'];
     }
     else if (utag_data['entity.tripDetails.utcTripStartDate'])
     {
         var toIsoDate = function (jsDate)
         {
             return jsDate.getFullYear()
                 + '-' + ('0' + (jsDate.getMonth() + 1)).slice(-2)
                 + '-' + ('0' + jsDate.getDate()).slice(-2)
         };

         var tripStartDate = utag_data['entity.tripDetails.utcTripStartDate'];
         if (!isNaN(tripStartDate))
         {
             utag_data['checkInDate'] = toIsoDate(new Date(tripStartDate));
         }
     }
 }
 else if (utag.isPCO() && utag_data['entity.checkout.hotel.isoCheckInDate'])
 {
     utag_data["checkInDate"] = utag_data['entity.checkout.hotel.isoCheckInDate'];
 }
 else if ((utag.isCarCO() || utag.isCarPymt()) && utag_data["entity.checkout.car.isoFormatPickUpDate"] != undefined)
 {
     utag_data["checkInDate"] = b.entity.checkout.car.isoFormatPickUpDate;
 }
 else if (utag.isCarCO() && utag_data.entity.tripDetails != undefined)
 {
     utag_data["checkInDate"] = b.entity.tripDetails.carInfo.isoFormatPickUpDate;
 }
 else if (utag.isLXCO() && utag_data['entity.checkout.activities.0.isoFormatStartDate'] != undefined)
 {
     utag_data['checkInDate'] = utag_data['entity.checkout.activities.0.isoFormatStartDate'];
 }
 else if(utag.isLXCO() && utag_data['entity.checkout.activity.activityDetail.isoFormatStartDate'] != undefined)
 {
     utag_data['checkInDate'] = utag_data['entity.checkout.activity.activityDetail.isoFormatStartDate'];
 }
 else if(utag.isLXCO() && utag_data.entity.checkout.activity.isoFormatStartDate != undefined){
    utag_data['checkInDate'] = utag_data.entity.checkout.activity.isoFormatStartDate;
}
 else if((utag.isFSR() || utag.isPSR_F_Responsive()) && utag_data['entity.flightSearch.searchParameters.isoFormatDepartureDate'])
 {
     utag_data['checkInDate'] = utag_data['entity.flightSearch.searchParameters.isoFormatDepartureDate'];
 }
 else if (utag.isFRateDetails() && utag_data.entity.tripDetails.flightOffer.flight.legs != undefined )
 {
     utag_data["checkInDate"] = utag_data["entity.tripDetails.flightOffer.flight.legs.0.isoFormatDepartureTimestamp"];
 }
 else if(utag.isCarSR() && utag_data['entity.carSearch.searchCriteria.isoFormatPickUpDate'] != undefined){
    utag_data['checkInDate'] =  utag_data['entity.carSearch.searchCriteria.isoFormatPickUpDate'];
}
 else if(utag.isFCO() && utag_data['entity.checkout.flightOffer.flight.legs.0.isoFormatDepartureTimestamp'] != undefined)
 {
     utag_data['checkInDate'] = utag_data['entity.checkout.flightOffer.flight.legs.0.isoFormatDepartureTimestamp'];
 }
 else if (utag.isCarCO() && utag_data['entity.checkout.car.isoFormatPickUpDate'])
 {
     utag_data['checkInDate'] = utag_data['entity.checkout.car.isoFormatPickUpDate'];
 }
 else if (utag.isCruiseCO() && utag_data['entity.checkout.cruise.isoFormatDepartureDate'])
 {
     utag_data['checkInDate'] = utag_data['entity.checkout.cruise.isoFormatDepartureDate'];
 }
 else if (utag.isCruiseSR() && utag_data['entity.cruiseSearch.cruiseSearchCriteria.isoFormatEarliestDepartureDate'])
 {
     utag_data['checkInDate'] = utag_data['entity.cruiseSearch.cruiseSearchCriteria.isoFormatEarliestDepartureDate'];
 }
 else if ((utag.isCruiseIS() || utag.isCruiseTP() || utag.isCruiseCabinN()) && utag_data['entity.cruise.isoFormatDepartureDate'])
 {
     utag_data['checkInDate'] = utag_data['entity.cruise.isoFormatDepartureDate'];
 }
 else if (utag_data['entity.tripDetails.hotelOffer.isoFormatCheckInDate'])
 {
     utag_data['checkInDate'] = utag_data['entity.tripDetails.hotelOffer.isoFormatCheckInDate'];
 }
 else if(utag.is3pp() && utag_data['entity.checkout.hotel.checkInDate']){
    utag_data['checkInDate'] = utag_data['entity.checkout.hotel.checkInDate'];
}
 else if (utag.isLXS() && utag_data["entity.activities.activitySearchParameters.isoFormatStartDate"] != undefined){
    utag_data['checkInDate'] = utag_data["entity.activities.activitySearchParameters.isoFormatStartDate"];
}
 else if (utag.isMCO()) {
    if (utag_data['entity.checkout.hotels.0.isoCheckInDate'] != undefined) {
        utag_data['checkInDate'] = utag_data['entity.checkout.hotels.0.isoCheckInDate'];
    }
    else if (utag_data['entity.checkout.flightOffers.0.flight.legs.0.isoFormatDepartureTimestamp'] != undefined) {
        utag_data['checkInDate'] = utag_data['entity.checkout.flightOffers.0.flight.legs.0.isoFormatDepartureTimestamp'];
    }
    else if (utag_data['entity.checkout.cars.0.isoFormatPickUpDate'] != undefined) {
        utag_data['checkInDate'] = utag_data['entity.checkout.cars.0.isoFormatPickUpDate'];
    }
}

 if(utag_data["checkInDate"] != '')
 {
     utag_data["checkInDate"] = utag_data["checkInDate"].split("T")[0];
 }
 **/