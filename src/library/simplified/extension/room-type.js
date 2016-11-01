b['roomType'] = '';
if (utag.isHCO() && b['entity.checkout.hotel.hotelBusinessType'] != undefined)
{
    b['roomType'] = b['entity.checkout.hotel.hotelBusinessType'];
}
else if (utag.isPCO())
{
    // TODO: FH/FHC/HC - not available (+Car - emain route)
}
else if (utag.isMCO() && b['entity.checkout.hotels.0.hotelBusinessType'] != undefined)
{
    b['roomType'] = b['entity.checkout.hotels.0.hotelBusinessType'];
}

/** old
 utag_data['roomType'] = '';
 if (utag.isHCO() && utag_data['entity.checkout.hotel.hotelBusinessType'] != undefined)
 {
     utag_data['roomType'] = utag_data['entity.checkout.hotel.hotelBusinessType'];
 }
 else if (utag.isPCO())
 {
     // TODO: FH/FHC/HC - not available (+Car - emain route)
 }
 **/