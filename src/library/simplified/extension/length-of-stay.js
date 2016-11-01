(function ()
{
    b['lengthOfStay'] = '';
    if (utag.isHSR() && b['entity.hotels.search.hotelParameters.lengthOfStay'] != undefined)
    {
        b['lengthOfStay'] = b['entity.hotels.search.hotelParameters.lengthOfStay'];
    }
    else if (utag.isHIS() && b['entity.hotels.listOfHotels.0.lengthOfStay'] != undefined)
    {
        b['lengthOfStay'] = b['entity.hotels.listOfHotels.0.lengthOfStay'];
    }
    else if (utag.isHCO() && b['entity.checkout.hotel.lengthOfStay'] != undefined)
    {
        b['lengthOfStay'] = b['entity.checkout.hotel.lengthOfStay'];
    }
    else if (utag.isPSR() || utag.isPIS_FH())
    {
        var checkInISOText = '';
        var checkOutISOText = '';
        if (true == b['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.partialStay'])
        {
            // FH/FHC (Partial Stay)
            checkInISOText = b['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.checkInDateForPartialStay'];
            checkOutISOText = b['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.checkOutDateForPartialStay'];
        }
        else if (b['entity.packageFHSearch.packageFHSearchParameters.departureDate']
            && b['entity.packageFHSearch.packageFHSearchParameters.returnDate'])
        {
            // FH/FHC
            checkInISOText = b['entity.packageFHSearch.packageFHSearchParameters.departureDate'];
            checkOutISOText = b['entity.packageFHSearch.packageFHSearchParameters.returnDate'];
        }
        else if (b['entity.packageSearch.packageSearchParameters.isoFormatDepartureDate']
            && b['entity.packageSearch.packageSearchParameters.isoFormatReturnDate'])
        {
            // FC/HC
            checkInISOText = b['entity.packageSearch.packageSearchParameters.isoFormatDepartureDate'];
            checkOutISOText = b['entity.packageSearch.packageSearchParameters.isoFormatReturnDate'];
        }
        b['lengthOfStay'] = getLengthOfStayFromIsoDates(checkInISOText, checkOutISOText);
    }
    else if (utag.isPIS())
    {
        if (b['entity.hotels.listOfHotels.0.lengthOfStay'] != undefined)
        {
            // Package FH
            b['lengthOfStay'] = b['entity.hotels.listOfHotels.0.lengthOfStay'];
        }
        else if ('boolean' == typeof b['entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.partialStay'])
        {
            var checkInISOText = '';
            var checkOutISOText = '';
            // Package FHC  - Hotel Info Site (contains partial Stay)
            // Package HC   - No option for partial stay
            if (true === b['entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.partialStay'])
            {
                checkInISOText = b['entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.isoFormatCheckInDateForPartialStay'];
                checkOutISOText = b['entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.isoFormatCheckOutDateForPartialStay'];
            }
            else
            {
                checkInISOText = b['entity.packageSearch.packageSearchParameters.isoFormatDepartureDate'];
                checkOutISOText = b['entity.packageSearch.packageSearchParameters.isoFormatReturnDate'];
            }
            b['lengthOfStay'] = getLengthOfStayFromIsoDates(checkInISOText, checkOutISOText);
        }
    }
    else if (utag.isPCO() && b['entity.checkout.hotel.lengthOfStay'])
    {
        if (b['entity.checkout.hotel.lengthOfStay'])
        {
            b['lengthOfStay'] = b['entity.checkout.hotel.lengthOfStay'];
        }
    }
    else if(utag.isLXS() && b['entity.activities.activitySearchParameters.isoFormatStartDate'] && b['entity.activities.activitySearchParameters.isoFormatEndDate'] ){
        checkInISOText = b['entity.activities.activitySearchParameters.isoFormatStartDate'];
        checkOutISOText = b['entity.activities.activitySearchParameters.isoFormatEndDate'];
        b['lengthOfStay'] = getLengthOfStayFromIsoDates(checkInISOText, checkOutISOText);
    }
    else if(utag.isLXCO() && b['entity.checkout.activities.0.activityDetail.isoFormatStartDate'] && b['entity.checkout.activities.0.activityDetail.isoFormatEndDate'] ){
        checkInISOText = b['entity.checkout.activities.0.activityDetail.isoFormatStartDate'];
        checkOutISOText = b['entity.checkout.activities.0.activityDetail.isoFormatEndDate'];
        b['lengthOfStay'] = parseInt(getLengthOfStayFromIsoDates(checkInISOText, checkOutISOText));
    }
    else if(utag.isFSR() && b['entity.flightSearch.searchParameters.isoFormatDepartureDate'] && b['entity.flightSearch.searchParameters.isoFormatReturnDate'] ){
        checkInISOText = b['entity.flightSearch.searchParameters.isoFormatDepartureDate'];
        checkOutISOText = b['entity.flightSearch.searchParameters.isoFormatReturnDate'];
        b['lengthOfStay'] = getLengthOfStayFromIsoDates(checkInISOText, checkOutISOText);
    }
    else if(utag.isFCO() && b['entity.checkout.flightOffer.flight.legs.0.isoFormatDepartureTimestamp'] != undefined && b['entity.checkout.flightOffer.flight.legs.0.isoFormatArrivalTimestamp'] != undefined){
        checkInISOText = b['entity.checkout.flightOffer.flight.legs.0.isoFormatDepartureTimestamp'];
        checkOutISOText = b['entity.checkout.flightOffer.flight.legs.0.isoFormatArrivalTimestamp'];
        b['lengthOfStay'] = getLengthOfStayFromIsoDates(checkInISOText, checkOutISOText);
    }
    else if(utag.isCarSR() && b['entity.carSearch.searchCriteria.isoFormatPickUpDate'] && b['entity.carSearch.searchCriteria.isoFormatDropOffDate'] ){
        checkInISOText = b['entity.carSearch.searchCriteria.isoFormatPickUpDate'];
        checkOutISOText = b['entity.carSearch.searchCriteria.isoFormatDropOffDate'];
        b['lengthOfStay'] = getLengthOfStayFromIsoDates(checkInISOText, checkOutISOText);
    }
    else if (utag.isCarCO() || utag.isCarPymt())
    {
        var checkInISOText = b['entity.checkout.car.isoFormatPickUpDate'];
        var checkOutISOText = b['entity.checkout.car.isoFormatDropOffDate'];
        b['lengthOfStay'] = getLengthOfStayFromIsoDates(checkInISOText, checkOutISOText);
    }
    else if (utag.isPRateDetails())
    {
        var numHotelNights = b['entity.tripDetails.hotelOffer.numHotelNights'];
        if (!isNaN(numHotelNights) && numHotelNights > 0)
        {
            b['lengthOfStay'] = numHotelNights + 1;
        }
    }
    else if (utag.isCruiseCO() && b['entity.checkout.cruise.duration'])
    {
        b['lengthOfStay'] = b['entity.checkout.cruise.duration'];
    }
    else if (utag.isCruiseSR() && !isNaN(b['qp.min-length']))
    {
        b['lengthOfStay'] = b['qp.min-length'];
        if (!isNaN(b['qp.max-length']))
        {
            b['lengthOfStay'] = b['lengthOfStay'] + '|' + b['qp.max-length'];
        }
    }
    else if (utag.isMCO()) {
        if (b["entity.checkout.hotels.0.lengthOfStay"] != undefined) {
            b["lengthOfStay"] = b["entity.checkout.hotels.0.lengthOfStay"];
        }
        else if (b["entity.checkout.cars.0.isoFormatPickUpDate"] != undefined) {
            var checkInISOText = b["entity.checkout.cars.0.isoFormatPickUpDate"];
            var checkOutISOText = b["entity.checkout.cars.0.isoFormatDropOffDate"];
            b["lengthOfStay"] = getLengthOfStayFromIsoDates(checkInISOText, checkOutISOText);
        }
        else if (b["entity.checkout.flightOffers.0.flight.legs.0.isoFormatDepartureTimestamp"] != undefined) {
            var checkInISOText = b["entity.checkout.flightOffers.0.flight.legs.0.isoFormatDepartureTimestamp"];
            var checkOutISOText = b["entity.checkout.flightOffers.0.flight.legs.0.isoFormatArrivalTimestamp"];
            b["lengthOfStay"] = getLengthOfStayFromIsoDates(checkInISOText, checkOutISOText);
        }
    }


    function getLengthOfStayFromIsoDates(checkInISOText, checkOutISOText)
    {
        if ('string' == typeof checkInISOText && 'string' == typeof checkOutISOText
            && checkInISOText.trim().length > 0 && checkOutISOText.trim().length > 0)
        {
            return getLengthOfStay(new Date(checkInISOText), new Date(checkOutISOText));
        }
    }

    function getLengthOfStay(fromDate, toDate)
    {
        if (fromDate && fromDate.getTime && toDate && toDate.getTime)
        {
            var diff = toDate.getTime() - fromDate.getTime()
            var lengthOfStay = diff / (1000 * 60 * 60 * 24);
            if (lengthOfStay > 0)
            {
                // utag.DB('[lengthOfStay]: checkIn=' + fromDate.toISOString() + ' checkOut=' + toDate.toISOString() + ' lengthOfStay=' + lengthOfStay + ' lengthOfStay(fixed)=' + lengthOfStay.toFixed(0));
                return lengthOfStay.toFixed(0);
            }
        }

        return '';
    }
})();

/** old
 (function ()
 {
     utag_data['lengthOfStay'] = '';
     if (utag.isHSR() && utag_data['entity.hotels.search.hotelParameters.lengthOfStay'] != undefined)
     {
         utag_data['lengthOfStay'] = utag_data['entity.hotels.search.hotelParameters.lengthOfStay'];
     }
     else if (utag.isHIS() && utag_data['entity.hotels.listOfHotels.0.lengthOfStay'] != undefined)
     {
         utag_data['lengthOfStay'] = utag_data['entity.hotels.listOfHotels.0.lengthOfStay'];
     }
     else if (utag.isHCO() && utag_data['entity.checkout.hotel.lengthOfStay'] != undefined)
     {
         utag_data['lengthOfStay'] = utag_data['entity.checkout.hotel.lengthOfStay'];
     }
     else if (utag.isPSR() || utag.isPIS_FH())
     {
         var checkInISOText = '';
         var checkOutISOText = '';
         if (true == utag_data['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.partialStay'])
         {
             // FH/FHC (Partial Stay)
             checkInISOText = utag_data['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.checkInDateForPartialStay'];
             checkOutISOText = utag_data['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.checkOutDateForPartialStay'];
         }
         else if (utag_data['entity.packageFHSearch.packageFHSearchParameters.departureDate']
             && utag_data['entity.packageFHSearch.packageFHSearchParameters.returnDate'])
         {
             // FH/FHC
             checkInISOText = utag_data['entity.packageFHSearch.packageFHSearchParameters.departureDate'];
             checkOutISOText = utag_data['entity.packageFHSearch.packageFHSearchParameters.returnDate'];
         }
         else if (utag_data['entity.packageSearch.packageSearchParameters.isoFormatDepartureDate']
             && utag_data['entity.packageSearch.packageSearchParameters.isoFormatReturnDate'])
         {
             // FC/HC
             checkInISOText = utag_data['entity.packageSearch.packageSearchParameters.isoFormatDepartureDate'];
             checkOutISOText = utag_data['entity.packageSearch.packageSearchParameters.isoFormatReturnDate'];
         }
         utag_data['lengthOfStay'] = getLengthOfStayFromIsoDates(checkInISOText, checkOutISOText);
     }
     else if (utag.isPIS())
     {
         if (utag_data['entity.hotels.listOfHotels.0.lengthOfStay'] != undefined)
         {
             // Package FH
             utag_data['lengthOfStay'] = utag_data['entity.hotels.listOfHotels.0.lengthOfStay'];
         }
         else if ('boolean' == typeof utag_data['entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.partialStay'])
         {
             var checkInISOText = '';
             var checkOutISOText = '';
             // Package FHC  - Hotel Info Site (contains partial Stay)
             // Package HC   - No option for partial stay
             if (true === utag_data['entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.partialStay'])
             {
                 checkInISOText = utag_data['entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.isoFormatCheckInDateForPartialStay'];
                 checkOutISOText = utag_data['entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.isoFormatCheckOutDateForPartialStay'];
             }
             else
             {
                 checkInISOText = utag_data['entity.packageSearch.packageSearchParameters.isoFormatDepartureDate'];
                 checkOutISOText = utag_data['entity.packageSearch.packageSearchParameters.isoFormatReturnDate'];
             }
             utag_data['lengthOfStay'] = getLengthOfStayFromIsoDates(checkInISOText, checkOutISOText);
         }
     }
     else if (utag.isPCO() && utag_data['entity.checkout.hotel.lengthOfStay'])
     {
         if (utag_data['entity.checkout.hotel.lengthOfStay'])
         {
             utag_data['lengthOfStay'] = utag_data['entity.checkout.hotel.lengthOfStay'];
         }
     }
   else if(utag.isLXS() && utag_data['entity.activities.activitySearchParameters.isoFormatStartDate'] && utag_data['entity.activities.activitySearchParameters.isoFormatEndDate'] ){
     checkInISOText = utag_data['entity.activities.activitySearchParameters.isoFormatStartDate'];
     checkOutISOText = utag_data['entity.activities.activitySearchParameters.isoFormatEndDate'];
     utag_data['lengthOfStay'] = getLengthOfStayFromIsoDates(checkInISOText, checkOutISOText);
   }
   else if(utag.isLXCO() && utag_data['entity.checkout.activities.0.activityDetail.isoFormatStartDate'] && utag_data['entity.checkout.activities.0.activityDetail.isoFormatEndDate'] ){
     checkInISOText = utag_data['entity.checkout.activities.0.activityDetail.isoFormatStartDate'];
     checkOutISOText = utag_data['entity.checkout.activities.0.activityDetail.isoFormatEndDate'];
     utag_data['lengthOfStay'] = parseInt(getLengthOfStayFromIsoDates(checkInISOText, checkOutISOText));
   }
   else if(utag.isFSR() && utag_data['entity.flightSearch.searchParameters.isoFormatDepartureDate'] && utag_data['entity.flightSearch.searchParameters.isoFormatReturnDate'] ){
     checkInISOText = utag_data['entity.flightSearch.searchParameters.isoFormatDepartureDate'];
     checkOutISOText = utag_data['entity.flightSearch.searchParameters.isoFormatReturnDate'];
     utag_data['lengthOfStay'] = getLengthOfStayFromIsoDates(checkInISOText, checkOutISOText);
   }
   else if(utag.isFCO() && utag_data['entity.checkout.flightOffer.flight.legs.0.isoFormatDepartureTimestamp'] != undefined && utag_data['entity.checkout.flightOffer.flight.legs.0.isoFormatArrivalTimestamp'] != undefined){
     checkInISOText = utag_data['entity.checkout.flightOffer.flight.legs.0.isoFormatDepartureTimestamp'];
     checkOutISOText = utag_data['entity.checkout.flightOffer.flight.legs.0.isoFormatArrivalTimestamp'];
     utag_data['lengthOfStay'] = getLengthOfStayFromIsoDates(checkInISOText, checkOutISOText);
   }
   else if(utag.isCarSR() && utag_data['entity.carSearch.searchCriteria.isoFormatPickUpDate'] && utag_data['entity.carSearch.searchCriteria.isoFormatDropOffDate'] ){
     checkInISOText = utag_data['entity.carSearch.searchCriteria.isoFormatPickUpDate'];
     checkOutISOText = utag_data['entity.carSearch.searchCriteria.isoFormatDropOffDate'];
     utag_data['lengthOfStay'] = getLengthOfStayFromIsoDates(checkInISOText, checkOutISOText);
   }
     else if (utag.isCarCO() || utag.isCarPymt())
     {
         var checkInISOText = utag_data['entity.checkout.car.isoFormatPickUpDate'];
         var checkOutISOText = utag_data['entity.checkout.car.isoFormatDropOffDate'];
         utag_data['lengthOfStay'] = getLengthOfStayFromIsoDates(checkInISOText, checkOutISOText);
     }
     else if (utag.isPRateDetails())
     {
         var numHotelNights = utag_data['entity.tripDetails.hotelOffer.numHotelNights'];
         if (!isNaN(numHotelNights) && numHotelNights > 0)
         {
             utag_data['lengthOfStay'] = numHotelNights + 1;
         }
     }
     else if (utag.isCruiseCO() && utag_data['entity.checkout.cruise.duration'])
     {
         utag_data['lengthOfStay'] = utag_data['entity.checkout.cruise.duration'];
     }
     else if (utag.isCruiseSR() && !isNaN(utag_data['qp.min-length']))
     {
         utag_data['lengthOfStay'] = utag_data['qp.min-length'];
         if (!isNaN(utag_data['qp.max-length']))
         {
             utag_data['lengthOfStay'] = utag_data['lengthOfStay'] + '|' + utag_data['qp.max-length'];
         }
     }
   else if (utag.isMCO()) {
     if (utag_data["entity.checkout.hotels.0.lengthOfStay"] != undefined) {
       utag_data["lengthOfStay"] = utag_data["entity.checkout.hotels.0.lengthOfStay"];
     }
     else if (utag_data["entity.checkout.cars.0.isoFormatPickUpDate"] != undefined) {
       var checkInISOText = utag_data["entity.checkout.cars.0.isoFormatPickUpDate"];
       var checkOutISOText = utag_data["entity.checkout.cars.0.isoFormatDropOffDate"];
       utag_data["lengthOfStay"] = getLengthOfStayFromIsoDates(checkInISOText, checkOutISOText);
     }
     else if (utag_data["entity.checkout.flightOffers.0.flight.legs.0.isoFormatDepartureTimestamp"] != undefined) {
       var checkInISOText = utag_data["entity.checkout.flightOffers.0.flight.legs.0.isoFormatDepartureTimestamp"];
       var checkOutISOText = utag_data["entity.checkout.flightOffers.0.flight.legs.0.isoFormatArrivalTimestamp"];
       utag_data["lengthOfStay"] = getLengthOfStayFromIsoDates(checkInISOText, checkOutISOText);
     }
   }


     function getLengthOfStayFromIsoDates(checkInISOText, checkOutISOText)
     {
         if ('string' == typeof checkInISOText && 'string' == typeof checkOutISOText
             && checkInISOText.trim().length > 0 && checkOutISOText.trim().length > 0)
         {
             return getLengthOfStay(new Date(checkInISOText), new Date(checkOutISOText));
         }
     }

     function getLengthOfStay(fromDate, toDate)
     {
         if (fromDate && fromDate.getTime && toDate && toDate.getTime)
         {
             var diff = toDate.getTime() - fromDate.getTime()
             var lengthOfStay = diff / (1000 * 60 * 60 * 24);
             if (lengthOfStay > 0)
             {
                 // utag.DB('[lengthOfStay]: checkIn=' + fromDate.toISOString() + ' checkOut=' + toDate.toISOString() + ' lengthOfStay=' + lengthOfStay + ' lengthOfStay(fixed)=' + lengthOfStay.toFixed(0));
                 return lengthOfStay.toFixed(0);
             }
         }

         return '';
     }
 })();
 **/