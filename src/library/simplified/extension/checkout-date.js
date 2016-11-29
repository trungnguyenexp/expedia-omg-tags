
b['checkOutDate'] = '';
if (utag.isHSR() && b['entity.hotels.search.hotelParameters.checkOutDate'])
{
    b['checkOutDate'] = b['entity.hotels.search.hotelParameters.checkOutDate'];
}
else if (utag.isHIS() && b['entity.hotels.listOfHotels.0.checkOutDate'])
{
    b['checkOutDate'] = b['entity.hotels.listOfHotels.0.checkOutDate'];
}
else if (utag.isHCO() && b['entity.checkout.hotel.isoCheckOutDate'])
{
    b['checkOutDate'] = b['entity.checkout.hotel.isoCheckOutDate'];
}
else if (utag.isPSR() || utag.isPIS_FH())
{
    if (true == b['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.partialStay'])
    {
        // FH/FHC (Partial Stay)
        b['checkOutDate'] = b['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.checkOutDateForPartialStay'];
    }
    else if (b['entity.packageFHSearch.packageFHSearchParameters.departureDate']
        && b['entity.packageFHSearch.packageFHSearchParameters.returnDate'])
    {
        // FH/FHC
        b['checkOutDate'] = b['entity.packageFHSearch.packageFHSearchParameters.returnDate'];
    }
    else if (b['entity.hotels.listOfHotels.0.checkOutDate'])
    {
        b['checkOutDate'] = b['entity.hotels.listOfHotels.0.checkOutDate'];
    }
    else if (b['entity.packageSearch.packageSearchParameters.isoFormatReturnDate'])
    {
        // FC/HC
        b['checkOutDate'] = b['entity.packageSearch.packageSearchParameters.isoFormatReturnDate'];
    }
}
else if (utag.isPIS())
{
    if (b['entity.hotels.listOfHotels.0.checkOutDate'])
    {
        b['checkOutDate'] = b['entity.hotels.listOfHotels.0.checkOutDate'];
    }
    else if (b['entity.packageSearch.packageSearchParameters.isoFormatReturnDate'])
    {
        b['checkOutDate'] = b['entity.packageSearch.packageSearchParameters.isoFormatReturnDate'];
    }
}
else if (utag.isPRateDetails())
{
    if (b['entity.tripDetails.hotelOffer.isoFormatCheckOutDate'])
    {
        b['checkOutDate'] = b['entity.tripDetails.hotelOffer.isoFormatCheckOutDate']
    }
    else if (b['entity.tripDetails.utcTripEndDate'])
    {
        var toIsoDate = function (jsDate)
        {
            return jsDate.getFullYear()
                + '-' + ('0' + (jsDate.getMonth() + 1)).slice(-2)
                + '-' + ('0' + jsDate.getDate()).slice(-2)
        };

        var tripEndDate = b['entity.tripDetails.utcTripEndDate'];
        if (!isNaN(tripEndDate))
        {
            b['checkOutDate'] = toIsoDate(new Date(tripEndDate));
        }
    }
}
else if (utag.isPCO() && b['entity.checkout.hotel.isoCheckOutDate'])
{
    b['checkOutDate'] = b['entity.checkout.hotel.isoCheckOutDate'];
}
else if (utag.isCarSR() && typeof b["entity.carSearch.searchCriteria.isoFormatDropOffDate"])
{
    b['checkOutDate'] = b.entity.carSearch.searchCriteria.isoFormatDropOffDate.split('T')[0];
}
else if ((utag.isCarCO() || utag.isCarPymt()) && b["entity.checkout.car.isoFormatDropOffDate"])
{
    b["checkOutDate"] = b["entity.checkout.car.isoFormatDropOffDate"]
}
else if (utag.isCarCO() && b.entity.tripDetails != undefined)
{
    b["checkOutDate"] = b.entity.tripDetails.carInfo.isoFormatDropOffDate;
}
else if (utag.isLXCO() && b['entity.checkout.activities.0.isoFormatEndDate'])
{
    b['checkOutDate'] = b['entity.checkout.activities.0.isoFormatEndDate']
}
else if (utag.isLXCO() && b['entity.checkout.activity.activityDetail.isoFormatEndDate'])
{
    b['checkOutDate'] = b['entity.checkout.activity.activityDetail.isoFormatEndDate']
}
else if(utag.isLXCO() && b.entity.checkout.activity.isoFormatEndDate != undefined){
    b['checkOutDate'] = b.entity.checkout.activity.isoFormatEndDate;
}
else if((utag.isFSR() || utag.isPSR_F_Responsive()) && b['entity.flightSearch.searchParameters.isoFormatReturnDate'])
{
    b['checkOutDate'] = b['entity.flightSearch.searchParameters.isoFormatReturnDate'];
}
else if (utag.isFRateDetails() && b.entity.tripDetails.flightOffer.flight.legs != undefined )
{
    var indexOfLastLeg = b.entity.tripDetails.flightOffer.flight.legs.length - 1;
    var indexOfLastSegment = b.entity.tripDetails.flightOffer.flight.legs[indexOfLastLeg].segments.length - 1;

    if( indexOfLastLeg >= 0 && indexOfLastSegment >= 0)
    {
        b["checkOutDate"] = b["entity.tripDetails.flightOffer.flight.legs."+indexOfLastLeg+".segments."+indexOfLastSegment+".isoFormatArrivalTimestamp"];
    }
}
else if (utag.isFCO() && b.entity.checkout.flightOffer.flight.legs != undefined )
{
    var indexOfLastLeg = b.entity.checkout.flightOffer.flight.legs.length - 1;
    var indexOfLastSegment = b.entity.checkout.flightOffer.flight.legs[indexOfLastLeg].segments.length - 1;

    if( indexOfLastLeg >= 0 && indexOfLastSegment >= 0)
    {
        b["checkOutDate"] = b["entity.checkout.flightOffer.flight.legs."+indexOfLastLeg+".segments."+indexOfLastSegment+".isoFormatArrivalTimestamp"];
    }
}
else if (utag.isCarCO() && b['entity.checkout.car.isoFormatDropOffDate'])
{
    b['checkOutDate'] = b['entity.checkout.car.isoFormatDropOffDate'];
}
else if ((utag.isCruiseIS() || utag.isCruiseTP() || utag.isCruiseCabinN()) && b['entity.cruise.isoFormatReturnDate'])
{
    b['checkOutDate'] = b['entity.cruise.isoFormatReturnDate'];
}
else if (utag.isCruiseCO() && b['entity.checkout.cruise.isoFormatReturnDate'])
{
    b['checkOutDate'] = b['entity.checkout.cruise.isoFormatReturnDate'];
}
else if (b['entity.tripDetails.hotelOffer.isoFormatCheckOutDate'])
{
    b['checkOutDate'] = b['entity.tripDetails.hotelOffer.isoFormatCheckOutDate'];
}
else if(utag.is3pp() && b['entity.checkout.hotel.checkOutDate']){
    b['checkOutDate'] = b['entity.checkout.hotel.checkOutDate'];
}
else if (utag.isLXS() && b["entity.activities.activitySearchParameters.isoFormatEndDate"] != undefined){
    b['checkOutDate'] = b["entity.activities.activitySearchParameters.isoFormatEndDate"];
}
else if (utag.isLXI() && b["entity.activities.activityInfo.activityDetail.isoFormatEndDate"] != undefined){
    b['checkOutDate'] = b["entity.activities.activityInfo.activityDetail.isoFormatEndDate"];
}
else if (utag.isMCO()) {
    if (b['entity.checkout.hotels.0.isoCheckOutDate'] != undefined) {
        var numberOfHotel = b.entity.checkout.hotels.length ;
        var hotelIndex = numberOfHotel - 1;

        if(numberOfHotel > 1) {
            var checkout = 'entity.checkout.hotels.' + hotelIndex + '.isoCheckOutDate';
            b['checkOutDate'] = b[checkout];
        }
        else {
            b['checkOutDate'] = b['entity.checkout.hotels.0.isoCheckOutDate'];
        }
    }
    else if (b['entity.checkout.flightOffers.0.flight.legs.0'] != undefined )
    {
        var indexOfLastLeg = b.entity.checkout.flightOffers[0].flight.legs.length - 1;
        var indexOfLastSegment = b.entity.checkout.flightOffers[0].flight.legs[indexOfLastLeg].segments.length - 1;

        if (indexOfLastLeg >= 0 && indexOfLastSegment >= 0)
        {
            b['checkOutDate'] = b["entity.checkout.flightOffers.0.flight.legs."+indexOfLastLeg+".segments."+indexOfLastSegment+".isoFormatArrivalTimestamp"];
        }
    }
    else if (b['entity.checkout.cars.0.isoFormatDropOffDate'] != undefined) {
        b['checkOutDate'] = b['entity.checkout.cars.0.isoFormatDropOffDate'];
    }
}

if(b["checkOutDate"] != '')
{
    b["checkOutDate"] = b["checkOutDate"].split("T")[0];
}

/** old
 utag_data['checkOutDate'] = '';
 if (utag.isHSR() && utag_data['entity.hotels.search.hotelParameters.checkOutDate'])
 {
     utag_data['checkOutDate'] = utag_data['entity.hotels.search.hotelParameters.checkOutDate'];
 }
 else if (utag.isHIS() && utag_data['entity.hotels.listOfHotels.0.checkOutDate'])
 {
     utag_data['checkOutDate'] = utag_data['entity.hotels.listOfHotels.0.checkOutDate'];
 }
 else if (utag.isHCO() && utag_data['entity.checkout.hotel.isoCheckOutDate'])
 {
     utag_data['checkOutDate'] = utag_data['entity.checkout.hotel.isoCheckOutDate'];
 }
 else if (utag.isPSR() || utag.isPIS_FH())
 {
     if (true == utag_data['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.partialStay'])
     {
         // FH/FHC (Partial Stay)
         utag_data['checkOutDate'] = utag_data['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.checkOutDateForPartialStay'];
     }
     else if (utag_data['entity.packageFHSearch.packageFHSearchParameters.departureDate']
         && utag_data['entity.packageFHSearch.packageFHSearchParameters.returnDate'])
     {
         // FH/FHC
         utag_data['checkOutDate'] = utag_data['entity.packageFHSearch.packageFHSearchParameters.returnDate'];
     }
     else if (utag_data['entity.hotels.listOfHotels.0.checkOutDate'])
     {
         utag_data['checkOutDate'] = utag_data['entity.hotels.listOfHotels.0.checkOutDate'];
     }
     else if (utag_data['entity.packageSearch.packageSearchParameters.isoFormatReturnDate'])
     {
         // FC/HC
         utag_data['checkOutDate'] = utag_data['entity.packageSearch.packageSearchParameters.isoFormatReturnDate'];
     }
 }
 else if (utag.isPIS())
 {
     if (utag_data['entity.hotels.listOfHotels.0.checkOutDate'])
     {
         utag_data['checkOutDate'] = utag_data['entity.hotels.listOfHotels.0.checkOutDate'];
     }
     else if (utag_data['entity.packageSearch.packageSearchParameters.isoFormatReturnDate'])
     {
         utag_data['checkOutDate'] = utag_data['entity.packageSearch.packageSearchParameters.isoFormatReturnDate'];
     }
 }
 else if (utag.isPRateDetails())
 {
     if (utag_data['entity.tripDetails.hotelOffer.isoFormatCheckOutDate'])
     {
         utag_data['checkOutDate'] = utag_data['entity.tripDetails.hotelOffer.isoFormatCheckOutDate']
     }
     else if (utag_data['entity.tripDetails.utcTripEndDate'])
     {
         var toIsoDate = function (jsDate)
         {
             return jsDate.getFullYear()
                 + '-' + ('0' + (jsDate.getMonth() + 1)).slice(-2)
                 + '-' + ('0' + jsDate.getDate()).slice(-2)
         };

         var tripEndDate = utag_data['entity.tripDetails.utcTripEndDate'];
         if (!isNaN(tripEndDate))
         {
             utag_data['checkOutDate'] = toIsoDate(new Date(tripEndDate));
         }
     }
 }
 else if (utag.isPCO() && utag_data['entity.checkout.hotel.isoCheckOutDate'])
 {
     utag_data['checkOutDate'] = utag_data['entity.checkout.hotel.isoCheckOutDate'];
 }
 else if (utag.isCarSR() && typeof utag_data["entity.carSearch.searchCriteria.isoFormatDropOffDate"])
 {
     utag_data['checkOutDate'] = b.entity.carSearch.searchCriteria.isoFormatDropOffDate.split('T')[0];
 }
 else if ((utag.isCarCO() || utag.isCarPymt()) && utag_data["entity.checkout.car.isoFormatDropOffDate"])
 {
     utag_data["checkOutDate"] = utag_data["entity.checkout.car.isoFormatDropOffDate"]
 }
 else if (utag.isCarCO() && utag_data.entity.tripDetails != undefined)
 {
     utag_data["checkOutDate"] = b.entity.tripDetails.carInfo.isoFormatDropOffDate;
 }
 else if (utag.isLXCO() && utag_data['entity.checkout.activities.0.isoFormatEndDate'])
 {
     utag_data['checkOutDate'] = utag_data['entity.checkout.activities.0.isoFormatEndDate']
 }
 else if (utag.isLXCO() && utag_data['entity.checkout.activity.activityDetail.isoFormatEndDate'])
 {
     utag_data['checkOutDate'] = utag_data['entity.checkout.activity.activityDetail.isoFormatEndDate']
 }
 else if(utag.isLXCO() && utag_data.entity.checkout.activity.isoFormatEndDate != undefined){
      utag_data['checkOutDate'] = utag_data.entity.checkout.activity.isoFormatEndDate;
}
 else if((utag.isFSR() || utag.isPSR_F_Responsive()) && utag_data['entity.flightSearch.searchParameters.isoFormatReturnDate'])
 {
     utag_data['checkOutDate'] = utag_data['entity.flightSearch.searchParameters.isoFormatReturnDate'];
 }
 else if (utag.isFRateDetails() && utag_data.entity.tripDetails.flightOffer.flight.legs != undefined )
 {
     var indexOfLastLeg = utag_data.entity.tripDetails.flightOffer.flight.legs.length - 1;
     var indexOfLastSegment = utag_data.entity.tripDetails.flightOffer.flight.legs[indexOfLastLeg].segments.length - 1;

     if( indexOfLastLeg >= 0 && indexOfLastSegment >= 0)
     {
         utag_data["checkOutDate"] = utag_data["entity.tripDetails.flightOffer.flight.legs."+indexOfLastLeg+".segments."+indexOfLastSegment+".isoFormatArrivalTimestamp"];
     }
 }
 else if (utag.isFCO() && utag_data.entity.checkout.flightOffer.flight.legs != undefined )
 {
     var indexOfLastLeg = utag_data.entity.checkout.flightOffer.flight.legs.length - 1;
     var indexOfLastSegment = utag_data.entity.checkout.flightOffer.flight.legs[indexOfLastLeg].segments.length - 1;

     if( indexOfLastLeg >= 0 && indexOfLastSegment >= 0)
     {
         utag_data["checkOutDate"] = utag_data["entity.checkout.flightOffer.flight.legs."+indexOfLastLeg+".segments."+indexOfLastSegment+".isoFormatArrivalTimestamp"];
     }
 }
 else if (utag.isCarCO() && utag_data['entity.checkout.car.isoFormatDropOffDate'])
 {
     utag_data['checkOutDate'] = utag_data['entity.checkout.car.isoFormatDropOffDate'];
 }
 else if ((utag.isCruiseIS() || utag.isCruiseTP() || utag.isCruiseCabinN()) && utag_data['entity.cruise.isoFormatReturnDate'])
 {
     utag_data['checkOutDate'] = utag_data['entity.cruise.isoFormatReturnDate'];
 }
 else if (utag.isCruiseCO() && utag_data['entity.checkout.cruise.isoFormatReturnDate'])
 {
     utag_data['checkOutDate'] = utag_data['entity.checkout.cruise.isoFormatReturnDate'];
 }
 else if (utag_data['entity.tripDetails.hotelOffer.isoFormatCheckOutDate'])
 {
     utag_data['checkOutDate'] = utag_data['entity.tripDetails.hotelOffer.isoFormatCheckOutDate'];
 }
 else if(utag.is3pp() && utag_data['entity.checkout.hotel.checkOutDate']){
    utag_data['checkOutDate'] = utag_data['entity.checkout.hotel.checkOutDate'];
}
 else if (utag.isLXS() && utag_data["entity.activities.activitySearchParameters.isoFormatEndDate"] != undefined){
    utag_data['checkOutDate'] = utag_data["entity.activities.activitySearchParameters.isoFormatEndDate"];
}
 else if (utag.isMCO()) {
    if (utag_data['entity.checkout.hotels.0.isoCheckOutDate'] != undefined) {
        utag_data['checkOutDate'] = utag_data['entity.checkout.hotels.0.isoCheckOutDate'];
    }
    else if (utag_data['entity.checkout.flightOffers.0.flight.legs.0'] != undefined )
    {
        var indexOfLastLeg = utag_data.entity.checkout.flightOffers[0].flight.legs.length - 1;
        var indexOfLastSegment = utag_data.entity.checkout.flightOffers[0].flight.legs[indexOfLastLeg].segments.length - 1;

        if (indexOfLastLeg >= 0 && indexOfLastSegment >= 0)
        {
            utag_data['checkOutDate'] = utag_data["entity.checkout.flightOffers.0.flight.legs."+indexOfLastLeg+".segments."+indexOfLastSegment+".isoFormatArrivalTimestamp"];
        }
    }
    else if (utag_data['entity.checkout.cars.0.isoFormatDropOffDate'] != undefined) {
        utag_data['checkOutDate'] = utag_data['entity.checkout.cars.0.isoFormatDropOffDate'];
    }
}

 if(utag_data["checkOutDate"] != '')
 {
     utag_data["checkOutDate"] = utag_data["checkOutDate"].split("T")[0];
 }
 **/