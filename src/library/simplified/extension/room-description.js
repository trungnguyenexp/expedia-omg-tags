if ((utag.isHCO() || utag.isPCO()) && b['entity.checkout.hotel.rooms.0.roomRatePlanDescription'])
{
    b['roomDescription'] = b['entity.checkout.hotel.rooms.0.roomRatePlanDescription'];
}
else if (utag.isMCO() && b['entity.checkout.hotels.0.rooms.0.roomRatePlanDescription'])
{
    b['roomDescription'] = b['entity.checkout.hotels.0.rooms.0.roomRatePlanDescription'];
}

/** old
 if ((utag.isHCO() || utag.isPCO()) && utag_data['entity.checkout.hotel.rooms.0.roomRatePlanDescription'])
 {
   utag_data['roomDescription'] = utag_data['entity.checkout.hotel.rooms.0.roomRatePlanDescription'];
 }
 else if (utag.isMCO() && utag_data['entity.checkout.hotels.0.rooms.0.roomRatePlanDescription'])
 {
   utag_data['roomDescription'] = utag_data['entity.checkout.hotels.0.rooms.0.roomRatePlanDescription'];
 }
 **/