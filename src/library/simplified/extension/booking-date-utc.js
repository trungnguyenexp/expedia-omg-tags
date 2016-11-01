(function ()
{
    b['bookingDateInUTC'] = '';

    if (utag.isCO())
    {
        var dateToday = new Date();

        // Handles zero padding for single digit dates
        var utcDate = dateToday.getUTCFullYear()
            + '-' + ('0' + (dateToday.getUTCMonth() + 1)).slice(-2)
            + '-' + ('0' + dateToday.getUTCDate()).slice(-2)

        b['bookingDateInUTC'] = utcDate;
    }
})();

/** old
 (function ()
 {
     utag_data['bookingDateInUTC'] = '';

     if (utag.isCO())
     {
         var dateToday = new Date();

         // Handles zero padding for single digit dates
         var utcDate = dateToday.getUTCFullYear()
             + '-' + ('0' + (dateToday.getUTCMonth() + 1)).slice(-2)
             + '-' + ('0' + dateToday.getUTCDate()).slice(-2)

         utag_data['bookingDateInUTC'] = utcDate;
     }
 })();

 **/