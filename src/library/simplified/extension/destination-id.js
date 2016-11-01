b['destinationId'] = '';
if (utag.isLXCO() && b['entity.checkout.activities.0.activityDetail.destinationId'] != undefined)
{
    b['destinationId'] = b['entity.checkout.activities.0.activityDetail.destinationId'];
}
else if(utag.isLXCO() && b['entity.checkout.activity.activityDetail.destinationId'] != undefined && b['destinationId'] == '')
{
    b['destinationId'] = b['entity.checkout.activity.activityDetail.destinationId'];
}
else if(utag.isCO() && b['entity.checkout.car.dropOffLocation.regionId'] != undefined && b['destinationId'] == '')
{
    b['destinationId'] = b['entity.checkout.car.pickUpLocation.regionId'];
}
else if (utag.isMCO() && b['destinationId'] == '')
{
    if (b['entity.checkout.cars.0.dropOffLocation.regionId'] != undefined) {
        b['destinationId'] = b['entity.checkout.cars.0.dropOffLocation.regionId'];
    }
    else if (b['entity.checkout.hotels.0.regionId'] != undefined) {
        b['destinationId'] = b['entity.checkout.hotels.0.regionId'];
    }
}
else if (b['regionId'] != undefined && b['destinationId'] == '')
{
    b['destinationId'] = b['regionId'];
}

/** old
 utag_data['destinationId'] = '';
 if (utag.isLXCO() && utag_data['entity.checkout.activities.0.activityDetail.destinationId'] != undefined)
 {
     utag_data['destinationId'] = utag_data['entity.checkout.activities.0.activityDetail.destinationId'];
 }
 else if(utag.isLXCO() && utag_data['entity.checkout.activity.activityDetail.destinationId'] != undefined && utag_data['destinationId'] == '')
 {
   utag_data['destinationId'] = utag_data['entity.checkout.activity.activityDetail.destinationId'];
 }
 else if(utag.isCO() && utag_data['entity.checkout.car.dropOffLocation.regionId'] != undefined && utag_data['destinationId'] == '')
 {
   utag_data['destinationId'] = utag_data['entity.checkout.car.pickUpLocation.regionId'];
 }
 else if (utag.isMCO() && utag_data['destinationId'] == '')
 {
   if (utag_data['entity.checkout.cars.0.dropOffLocation.regionId'] != undefined) {
     utag_data['destinationId'] = utag_data['entity.checkout.cars.0.dropOffLocation.regionId'];
   }
   else if (utag_data['entity.checkout.hotels.0.regionId'] != undefined) {
     utag_data['destinationId'] = utag_data['entity.checkout.hotels.0.regionId'];
   }
 }
 else if (utag_data['regionId'] != undefined && utag_data['destinationId'] == '')
 {
   utag_data['destinationId'] = utag_data['regionId'];
 }
 **/