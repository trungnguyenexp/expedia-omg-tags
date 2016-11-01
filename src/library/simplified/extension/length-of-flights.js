if (utag.isFRateDetails() || utag.isPRateDetails())
{
    if (b.entity.tripDetails.flightOffer.flight.legs != undefined)
    {
        var numLegs = '0';
        var lengthOfFlights = "";
        var lengthOfHourInMilis = 60 * 60 * 1000;
        numLegs = b.entity.tripDetails.flightOffer.flight.legs.length;

        for (var i = 0; i < numLegs; i++)
        {
            var isoFormatArrivalTimestamp = b.entity.tripDetails.flightOffer.flight.legs[i].isoFormatArrivalTimestamp;
            var isoFormatDepartureTimestamp = b.entity.tripDetails.flightOffer.flight.legs[i].isoFormatDepartureTimestamp;
            var lengthOfFlight = (new Date(isoFormatArrivalTimestamp) - new Date(isoFormatDepartureTimestamp)) / lengthOfHourInMilis;
            lengthOfFlights = lengthOfFlights + lengthOfFlight.toFixed(2) + '|';
        }

        b["lengthOfFlight"] = lengthOfFlights.slice(0, -1);
    }
}
else if (utag.isFPymt() || utag.isFCO() || utag.isPPymt() || utag.isPCO() || utag.isMCO())
{
    var flightObject;

    if (b['entity.checkout.flightOffer.flight.legs.0.isoFormatArrivalTimestamp']) {
        flightObject = b.entity.checkout.flightOffer.flight;
    }
    else if (b['entity.checkout.flightOffers.0.flight.legs.0.isoFormatArrivalTimestamp']) {
        flightObject = b.entity.checkout.flightOffers[0].flight;
    }

    if (flightObject.legs != undefined)
    {
        var numLegs = '0';
        var lengthOfFlights = "";
        var lengthOfHourInMilis = 60 * 60 * 1000;
        numLegs = flightObject.legs.length;

        for (var i = 0; i < numLegs; i++)
        {
            var isoFormatArrivalTimestamp = flightObject.legs[i].isoFormatArrivalTimestamp;
            var isoFormatDepartureTimestamp = flightObject.legs[i].isoFormatDepartureTimestamp;
            var lengthOfFlight = (new Date(isoFormatArrivalTimestamp) - new Date(isoFormatDepartureTimestamp)) / lengthOfHourInMilis;
            lengthOfFlights = lengthOfFlights + lengthOfFlight.toFixed(2) + '|';
        }

        b["lengthOfFlight"] = lengthOfFlights.slice(0, -1);
    }
}


/** old
 if (utag.isFRateDetails() || utag.isPRateDetails())
 {
     if (utag_data.entity.tripDetails.flightOffer.flight.legs != undefined)
     {
         var numLegs = '0';
         var lengthOfFlights = "";
         var lengthOfHourInMilis = 60 * 60 * 1000;
         numLegs = utag_data.entity.tripDetails.flightOffer.flight.legs.length;

         for (var i = 0; i < numLegs; i++)
         {
             var isoFormatArrivalTimestamp = utag_data.entity.tripDetails.flightOffer.flight.legs[i].isoFormatArrivalTimestamp;
             var isoFormatDepartureTimestamp = utag_data.entity.tripDetails.flightOffer.flight.legs[i].isoFormatDepartureTimestamp;
             var lengthOfFlight = (new Date(isoFormatArrivalTimestamp) - new Date(isoFormatDepartureTimestamp)) / lengthOfHourInMilis;
             lengthOfFlights = lengthOfFlights + lengthOfFlight.toFixed(2) + '|';
         }

         utag_data["lengthOfFlight"] = lengthOfFlights.slice(0, -1);
     }
 }
 else if (utag.isFPymt() || utag.isFCO() || utag.isPPymt() || utag.isPCO())
 {
     if (utag_data.entity.checkout.flightOffer.flight.legs != undefined)
     {
         var numLegs = '0';
         var lengthOfFlights = "";
         var lengthOfHourInMilis = 60 * 60 * 1000;
         numLegs = utag_data.entity.checkout.flightOffer.flight.legs.length;

         for (var i = 0; i < numLegs; i++)
         {
             var isoFormatArrivalTimestamp = utag_data.entity.checkout.flightOffer.flight.legs[i].isoFormatArrivalTimestamp;
             var isoFormatDepartureTimestamp = utag_data.entity.checkout.flightOffer.flight.legs[i].isoFormatDepartureTimestamp;
             var lengthOfFlight = (new Date(isoFormatArrivalTimestamp) - new Date(isoFormatDepartureTimestamp)) / lengthOfHourInMilis;
             lengthOfFlights = lengthOfFlights + lengthOfFlight.toFixed(2) + '|';
         }

         utag_data["lengthOfFlight"] = lengthOfFlights.slice(0, -1);
     }
 }
 **/