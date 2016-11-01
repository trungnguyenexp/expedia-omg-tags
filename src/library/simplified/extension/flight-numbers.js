if (utag.isFRateDetails() || utag.isPRateDetails())
{
    if (typeof b.entity.tripDetails.flightOffer.flight.legs != "undefined" && typeof b.entity.tripDetails.flightOffer.flight.legs[0].segments != "undefined")
    {
        var numLegs = '0';
        var numSegments = '0';
        var flightNumbers = "";
        numLegs = b.entity.tripDetails.flightOffer.flight.legs.length;

        for (var i = 0; i < numLegs; i++)
        {
            numSegments = b.entity.tripDetails.flightOffer.flight.legs[i].segments.length;
            for (var j = 0; j < numSegments; j++)
            {
                flightNumbers = flightNumbers + b.entity.tripDetails.flightOffer.flight.legs[i].segments[j].flightNumber + "|";
            }
        }

        b["flightNumbers"] = flightNumbers.slice(0, -1);
    }
}
else if (utag.isFPymt() || utag.isFCO() || utag.isPPymt() || utag.isPCO() || utag.isMCO())
{
    var flightObject;

    if (b['entity.checkout.flightOffer.flight.legs.0.segments.0.flightNumber']) {
        flightObject = b.entity.checkout.flightOffer.flight;
    }
    else if (b['entity.checkout.flightOffers.0.flight.legs.0.segments.0.flightNumber']) {
        flightObject = b.entity.checkout.flightOffers[0].flight;
    }

    if (typeof flightObject.legs != "undefined" && typeof flightObject.legs[0].segments != "undefined")
    {
        var numLegs = '0';
        var numSegments = '0';
        var flightNumbers = "";
        numLegs = flightObject.legs.length;

        for (var i = 0; i < numLegs; i++)
        {
            numSegments = flightObject.legs[i].segments.length;
            for (var j = 0; j < numSegments; j++)
            {
                flightNumbers = flightNumbers + flightObject.legs[i].segments[j].flightNumber + "|";
            }
        }

        b["flightNumbers"] = flightNumbers.slice(0, -1);
    }
}


/** old
 if (utag.isFRateDetails() || utag.isPRateDetails())
 {
     if (typeof utag_data.entity.tripDetails.flightOffer.flight.legs != "undefined" && typeof utag_data.entity.tripDetails.flightOffer.flight.legs[0].segments != "undefined")
     {
         var numLegs = '0';
         var numSegments = '0';
         var flightNumbers = "";
         numLegs = utag_data.entity.tripDetails.flightOffer.flight.legs.length;

         for (var i = 0; i < numLegs; i++)
         {
             numSegments = utag_data.entity.tripDetails.flightOffer.flight.legs[i].segments.length;
             for (var j = 0; j < numSegments; j++)
             {
                 flightNumbers = flightNumbers + utag_data.entity.tripDetails.flightOffer.flight.legs[i].segments[j].flightNumber + "|";
             }
         }

         utag_data["flightNumbers"] = flightNumbers.slice(0, -1);
     }
 }
 else if (utag.isFPymt() || utag.isFCO() || utag.isPPymt() || utag.isPCO())
 {
     if (typeof utag_data.entity.checkout.flightOffer.flight.legs != "undefined" && typeof utag_data.entity.checkout.flightOffer.flight.legs[0].segments != "undefined")
     {
         var numLegs = '0';
         var numSegments = '0';
         var flightNumbers = "";
         numLegs = utag_data.entity.checkout.flightOffer.flight.legs.length;

         for (var i = 0; i < numLegs; i++)
         {
             numSegments = utag_data.entity.checkout.flightOffer.flight.legs[i].segments.length;
             for (var j = 0; j < numSegments; j++)
             {
                 flightNumbers = flightNumbers + utag_data.entity.checkout.flightOffer.flight.legs[i].segments[j].flightNumber + "|";
             }
         }

         utag_data["flightNumbers"] = flightNumbers.slice(0, -1);
     }
 }
 **/