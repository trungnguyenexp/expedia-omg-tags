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
b["sku"] = encodeURI(sku);

/** old
 var sku = '';
 if ((utag.isFCO() || utag.isPCO()) &&
 typeof utag_data["entity.checkout.flightOffer.flight.legs.0.segments.0.carrierCode"] != "undefined")
 {
   sku = utag_data["entity.checkout.flightOffer.flight.legs.0.segments.0.carrierCode"];
 }
 else if (utag.isHCO() && typeof utag_data["entity.checkout.hotel.hotelName"] != "undefined")
 {
   sku = utag_data["entity.checkout.hotel.hotelName"];
 }
 else if(utag.isLXCO() && typeof utag_data["entity.checkout.activity.activityDetail.title"] != "undefined"){
  sku = utag_data["entity.checkout.activity.activityDetail.title"];
}
 else if(utag.isCarCO() && typeof utag_data["entity.checkout.car.carVendor"] != "undefined"){
  sku = utag_data["entity.checkout.car.carVendor"];
}
 else if(utag.isCarCO() && utag_data.entity.tripDetails != undefined){
  sku = utag_data["entity.tripDetails.carInfo.carVendor"];
}
 utag_data["sku"] = encodeURI(sku);
 **/