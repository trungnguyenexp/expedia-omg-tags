// TO-DO: Add roomnights for packages HSR HIS.
(function ()
{
    if (utag.isHSR() && typeof b["entity.hotels.search.hotelParameters.lengthOfStay"] != "undefined" && typeof b["entity.hotels.search.numberOfRooms"] != "undefined")
    {
        var roomNights = '0';
        roomNights = parseInt(b["entity.hotels.search.hotelParameters.lengthOfStay"]) * parseInt(b["entity.hotels.search.numberOfRooms"]);
        b["roomNights"] = roomNights;
    }
    else if (utag.isPSR() || utag.isPIS_FH())
    {
        var entity = b['entity'];
        if (entity && entity.packageSearch
            && entity.packageSearch.packageSearchParameters
            && entity.packageSearch.packageSearchParameters.travelers)
        {
            // HC (No Partial Stay Option)
            b["roomNights"] = calculateRoomNights(entity.packageSearch.packageSearchParameters.travelers,
                b['entity.packageSearch.packageSearchParameters.isoFormatDepartureDate'],
                b['entity.packageSearch.packageSearchParameters.isoFormatReturnDate']);
        }
        else if (entity && entity.packageFHSearch
            && entity.packageFHSearch.packageFHSearchParameters
            && entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms)
        {
            // FH/FHC: entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms
            if (true == b['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.partialStay']
                && b['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.checkInDateForPartialStay']
                && b['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.checkOutDateForPartialStay'])
            {
                b["roomNights"] = calculateRoomNights(entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms,
                    b['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.checkInDateForPartialStay'],
                    b['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.checkOutDateForPartialStay']);
            }
            else if (b['entity.packageFHSearch.packageFHSearchParameters.departureDate']
                && b['entity.packageFHSearch.packageFHSearchParameters.returnDate'])
            {
                b["roomNights"] = calculateRoomNights(entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms,
                    b['entity.packageFHSearch.packageFHSearchParameters.departureDate'],
                    b['entity.packageFHSearch.packageFHSearchParameters.returnDate']);
            }
        }

    }
    else if (utag.isHIS() && typeof b["entity.hotels.listOfHotels.0.lengthOfStay"] != "undefined" && typeof b.entity.hotels.listOfHotels[0].rooms != "undefined")
    {
        var roomNights = '0';
        roomNights = parseInt(b["entity.hotels.listOfHotels.0.lengthOfStay"]) * b.entity.hotels.listOfHotels[0].rooms.length;
        b["roomNights"] = roomNights;
    }
    else if ((utag.isHCO() || utag.isHPymt() || utag.isPPymt() || utag.isPCO()) && typeof b["entity.checkout.hotel.countOfRoomNights"] != "undefined")
    {
        var roomNights = '0';
        roomNights = b["entity.checkout.hotel.countOfRoomNights"].toString();
        b["roomNights"] = roomNights;
    }
    else if (utag.isMCO() && typeof b["entity.checkout.hotels.0.countOfRoomNights"] != "undefined")
    {
        var roomNights = '0';
        roomNights = b["entity.checkout.hotels.0.countOfRoomNights"].toString();
        b["roomNights"] = roomNights;
    }
    else if (utag.isFRateDetails() && typeof b["entity.tripDetails.hotelOffer.numHotelNights"] != "undefined" && typeof b["entity.tripDetails.hotelOffer.numRooms"] != "undefined")
    {
        var roomNights = '0';
        roomNights = parseInt(b["entity.tripDetails.hotelOffer.numHotelNights"]) * parseInt(b["entity.tripDetails.hotelOffer.numRooms"])
        b["roomNights"] = roomNights;
    }

    function calculateRoomNights(travelersArr, isoDepartureDate, isoReturnDate)
    {
        if (Array.isArray(travelersArr) && travelersArr.length > 0)
        {
            var numberOfRooms = travelersArr.length;
            var lengthOfStay = getLengthOfStayFromIsoDates(isoDepartureDate, isoReturnDate)
            if (lengthOfStay > 0)
            {
                return lengthOfStay * numberOfRooms;
            }
        }
        return '';
    }

    function getLengthOfStayFromIsoDates(checkInISOText, checkOutISOText)
    {
        if ('string' == typeof checkInISOText && 'string' == typeof checkOutISOText
            && checkInISOText.trim().length > 0 && checkOutISOText.trim().length > 0)
        {
            return getLengthOfStay(new Date(checkInISOText), new Date(checkOutISOText));
        }
    }

    /**
     * @param fromDate js date object
     * @param toDate js date object
     */
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

        return 0;
    }

})();

/** old
 // TO-DO: Add roomnights for packages HSR HIS.
 (function ()
 {
     if (utag.isHSR() && typeof utag_data["entity.hotels.search.hotelParameters.lengthOfStay"] != "undefined" && typeof utag_data["entity.hotels.search.numberOfRooms"] != "undefined")
     {
         var roomNights = '0';
         roomNights = parseInt(utag_data["entity.hotels.search.hotelParameters.lengthOfStay"]) * parseInt(utag_data["entity.hotels.search.numberOfRooms"]);
         utag_data["roomNights"] = roomNights;
     }
     else if (utag.isPSR() || utag.isPIS_FH())
     {
         var entity = utag_data['entity'];
         if (entity && entity.packageSearch
             && entity.packageSearch.packageSearchParameters
             && entity.packageSearch.packageSearchParameters.travelers)
         {
             // HC (No Partial Stay Option)
             utag_data["roomNights"] = calculateRoomNights(entity.packageSearch.packageSearchParameters.travelers,
                 utag_data['entity.packageSearch.packageSearchParameters.isoFormatDepartureDate'],
                 utag_data['entity.packageSearch.packageSearchParameters.isoFormatReturnDate']);
         }
         else if (entity && entity.packageFHSearch
             && entity.packageFHSearch.packageFHSearchParameters
             && entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms)
         {
             // FH/FHC: entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms
             if (true == utag_data['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.partialStay']
                 && utag_data['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.checkInDateForPartialStay']
                 && utag_data['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.checkOutDateForPartialStay'])
             {
                 utag_data["roomNights"] = calculateRoomNights(entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms,
                     utag_data['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.checkInDateForPartialStay'],
                     utag_data['entity.packageFHSearch.packageFHSearchParameters.packageHotelSearchParameters.checkOutDateForPartialStay']);
             }
             else if (utag_data['entity.packageFHSearch.packageFHSearchParameters.departureDate']
                 && utag_data['entity.packageFHSearch.packageFHSearchParameters.returnDate'])
             {
                 utag_data["roomNights"] = calculateRoomNights(entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms,
                     utag_data['entity.packageFHSearch.packageFHSearchParameters.departureDate'],
                     utag_data['entity.packageFHSearch.packageFHSearchParameters.returnDate']);
             }
         }

     }
     else if (utag.isHIS() && typeof utag_data["entity.hotels.listOfHotels.0.lengthOfStay"] != "undefined" && typeof utag_data.entity.hotels.listOfHotels[0].rooms != "undefined")
     {
         var roomNights = '0';
         roomNights = parseInt(utag_data["entity.hotels.listOfHotels.0.lengthOfStay"]) * utag_data.entity.hotels.listOfHotels[0].rooms.length;
         utag_data["roomNights"] = roomNights;
     }
     else if ((utag.isHCO() || utag.isHPymt() || utag.isPPymt() || utag.isPCO()) && typeof utag_data["entity.checkout.hotel.countOfRoomNights"] != "undefined")
     {
         var roomNights = '0';
         roomNights = utag_data["entity.checkout.hotel.countOfRoomNights"].toString();
         utag_data["roomNights"] = roomNights;
     }
     else if (utag.isFRateDetails() && typeof utag_data["entity.tripDetails.hotelOffer.numHotelNights"] != "undefined" && typeof utag_data["entity.tripDetails.hotelOffer.numRooms"] != "undefined")
     {
         var roomNights = '0';
         roomNights = parseInt(utag_data["entity.tripDetails.hotelOffer.numHotelNights"]) * parseInt(utag_data["entity.tripDetails.hotelOffer.numRooms"])
         utag_data["roomNights"] = roomNights;
     }

     function calculateRoomNights(travelersArr, isoDepartureDate, isoReturnDate)
     {
         if (Array.isArray(travelersArr) && travelersArr.length > 0)
         {
             var numberOfRooms = travelersArr.length;
             var lengthOfStay = getLengthOfStayFromIsoDates(isoDepartureDate, isoReturnDate)
             if (lengthOfStay > 0)
             {
                 return lengthOfStay * numberOfRooms;
             }
         }
         return '';
     }

     function getLengthOfStayFromIsoDates(checkInISOText, checkOutISOText)
     {
         if ('string' == typeof checkInISOText && 'string' == typeof checkOutISOText
             && checkInISOText.trim().length > 0 && checkOutISOText.trim().length > 0)
         {
             return getLengthOfStay(new Date(checkInISOText), new Date(checkOutISOText));
         }
     }

     /**
 * @param fromDate js date object
 * @param toDate js date object
 */
/** old
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

     return 0;
 }

 })();
 **/