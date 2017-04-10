b['bookingWindow'] = '';

function bw_daydiff(first, second) {
    //This condition is to handle the same day booking
    if (Math.round((second-first)/(1000*60*60*24)) == -1)
    {
        return 0;
    }
    return Math.round((second-first)/(1000*60*60*24));
};

if (utag.isCruiseCO() && b['entity.checkout.cruise.advancePurchaseWindow'])
{
    b['bookingWindow'] = b['entity.checkout.cruise.advancePurchaseWindow'];
}
else if ( (utag.isHCO() || utag.isLXCO() || utag.isPCO() || utag.isFCO() || utag.isCarCO()) && b.checkInDate)
{
    b['bookingWindow'] = bw_daydiff( new Date(), new Date(b.checkInDate) );
}
else if (utag.isCarItinPage() && b['entity.tripDetails.utcTripStartDate'])
{
    b['bookingWindow'] = bw_daydiff( new Date(), new Date(b['entity.tripDetails.utcTripStartDate']) );
}
else if(b.checkInDate != undefined && b.checkInDate != ""){
    b['bookingWindow'] = bw_daydiff( new Date(), new Date(b.checkInDate) );
}
else if (utag.isRailRateDetails() && b.checkInDate) {
    b['bookingWindow'] = bw_daydiff(new Date() , new Date(b.checkInDate));
}