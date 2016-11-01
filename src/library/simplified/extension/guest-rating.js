/**
 * Guest Rating
 * 2-1
 * InfoSite:        Package, Hotel
 */

b['guestRating'] = '';
if ((utag.isHIS() || utag.isPRateDetails()) && b['entity.hotels.listOfHotels.0.reviewSummary.guestRating'])
{
    var guestRating = b['entity.hotels.listOfHotels.0.reviewSummary.guestRating'];
    if (!isNaN(guestRating))
    {
        // dd.d (i.e. 3.1)
        b['guestRating'] = guestRating.toFixed(1);
    }
    else
    {
        b['guestRating'] = guestRating;
    }
}
if((utag.isHCO() || utag.isPCO()) && b["entity.checkout.hotel.reviewSummary.guestRating"] != undefined)
{
    var guestRating = b["entity.checkout.hotel.reviewSummary.guestRating"];
    if(!isNaN(guestRating)){
        b['guestRating'] = guestRating.toFixed(1);
    }
}
if (utag.isHSR() && b["entity.hotels.results.results.0.reviewSummary.guestRating"] != undefined){
    var guestRating = b["entity.hotels.results.results.0.reviewSummary.guestRating"];
    if(!isNaN(guestRating)){
        b['guestRating'] = guestRating.toFixed(1);
    }
}
if (utag.isMCO() && b["entity.checkout.hotels.0.reviewSummary.guestRating"] != undefined) {
    var guestRating = b["entity.checkout.hotels.0.reviewSummary.guestRating"];
    if(!isNaN(guestRating)){
        b['guestRating'] = guestRating.toFixed(1);
    }
}

/** old
 utag_data['guestRating'] = '';
 if ((utag.isHIS() || utag.isPRateDetails()) && utag_data['entity.hotels.listOfHotels.0.reviewSummary.guestRating'])
 {
     var guestRating = utag_data['entity.hotels.listOfHotels.0.reviewSummary.guestRating'];
     if (!isNaN(guestRating))
     {
         // dd.d (i.e. 3.1)
         utag_data['guestRating'] = guestRating.toFixed(1);
     }
     else
     {
         utag_data['guestRating'] = guestRating;
     }
 }
 if((utag.isHCO() || utag.isPCO()) && utag_data["entity.checkout.hotel.reviewSummary.guestRating"] != undefined)
 {
   var guestRating = utag_data["entity.checkout.hotel.reviewSummary.guestRating"];
   if(!isNaN(guestRating)){
     utag_data['guestRating'] = guestRating.toFixed(1);
   }
 }
 if (utag.isHSR() && utag_data["entity.hotels.results.results.0.reviewSummary.guestRating"] != undefined){
    var guestRating = utag_data["entity.hotels.results.results.0.reviewSummary.guestRating"];
    if(!isNaN(guestRating)){
    utag_data['guestRating'] = guestRating.toFixed(1);
  }
}
 **/