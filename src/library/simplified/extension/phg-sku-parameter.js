var sku = '';
if ((utag.isFCO() || utag.isPCO()) &&
    typeof b["entity.checkout.flightOffer.flight.legs.0.segments.0.carrierCode"] != "undefined")
{
    sku = b["entity.checkout.flightOffer.flight.legs.0.segments.0.carrierCode"];
}
else if (utag.isHCO() && typeof b["entity.checkout.hotel.hotelName"] != "undefined")
{
    sku = b["entity.checkout.hotel.hotelName"];
}
else if(utag.isLXCO() && typeof b["entity.checkout.activity.activityDetail.title"] != "undefined"){
    sku = b["entity.checkout.activity.activityDetail.title"];
}
else if(utag.isCarCO() && typeof b["entity.checkout.car.carVendor"] != "undefined"){
    sku = b["entity.checkout.car.carVendor"];
}
else if(utag.isCarCO() && b.entity.tripDetails != undefined){
    sku = b["entity.tripDetails.carInfo.carVendor"];
}
else if(utag.isLXGT_CO() && b.entity.checkout.activities && b.entity.checkout.activities.length==1 && b['entity.checkout.activities.0.activityDetail.title']){
    sku = b['entity.checkout.activities.0.activityDetail.title'];
}
b["sku"] = encodeURI(sku);
