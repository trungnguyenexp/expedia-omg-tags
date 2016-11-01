(function ()
{
    b['starRating'] = '';
    if(utag.isHSR() && b['entity.hotels.search.starRating']){
        b['starRating'] = b['entity.hotels.search.starRating'];
    }
    if ((utag.isHIS() || utag.isPIS()) && b['entity.hotels.listOfHotels.0.starRating'])
    {
        b['starRating'] = b['entity.hotels.listOfHotels.0.starRating']
    }
    else if ((utag.isHCO() || utag.isPCO()) && b['entity.checkout.hotel.starRating'])
    {
        b['starRating'] = convertToStarRating(b['entity.checkout.hotel.starRating'])
    }
    else if (utag.isPRateDetails() && b['entity.hotels.listOfHotels.0.starRating'])
    {
        // FH Only (others are still emain)
        b['starRating'] = convertToStarRating(b['entity.hotels.listOfHotels.0.starRating'])
    }
    else if (utag.isMCO() && b['entity.checkout.hotels.0.starRating']) {
        b['starRating'] = convertToStarRating(b['entity.checkout.hotels.0.starRating']);
    }
    else if(utag.isPIS_FH() && b["entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.starRating"] != undefined){
        b['starRating'] = b["entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.starRating"];
    }
    function convertToStarRating(multipliedStarRatingValue)
    {
        if (!isNaN(multipliedStarRatingValue))
        {
            var starRating = parseFloat(multipliedStarRatingValue);
            if (!isNaN(starRating))
            {
                return (starRating / 10).toFixed(1);
            }
        }

        return '';
    }
})();

/** old
 (function ()
 {
     utag_data['starRating'] = '';
     if(utag.isHSR() && utag_data['entity.hotels.search.starRating']){
        utag_data['starRating'] = utag_data['entity.hotels.search.starRating'];
     }
     if ((utag.isHIS() || utag.isPIS()) && utag_data['entity.hotels.listOfHotels.0.starRating'])
     {
         utag_data['starRating'] = utag_data['entity.hotels.listOfHotels.0.starRating']
     }
     else if ((utag.isHCO() || utag.isPCO()) && utag_data['entity.checkout.hotel.starRating'])
     {
         utag_data['starRating'] = convertToStarRating(utag_data['entity.checkout.hotel.starRating'])
     }
     else if (utag.isPRateDetails() && utag_data['entity.hotels.listOfHotels.0.starRating'])
     {
         // FH Only (others are still emain)
         utag_data['starRating'] = convertToStarRating(utag_data['entity.hotels.listOfHotels.0.starRating'])
     }
   else if (utag.isMCO() && utag_data['entity.checkout.hotels.0.starRating']) {
     utag_data['starRating'] = convertToStarRating(utag_data['entity.checkout.hotels.0.starRating']);
   }
   else if(utag.isPIS_FH() && utag_data["entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.starRating"] != undefined){
     utag_data['starRating'] = utag_data["entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.starRating"];
   }
     function convertToStarRating(multipliedStarRatingValue)
     {
         if (!isNaN(multipliedStarRatingValue))
         {
             var starRating = parseFloat(multipliedStarRatingValue);
             if (!isNaN(starRating))
             {
                 return (starRating / 10).toFixed(1);
             }
         }

         return '';
     }
 })();

 **/