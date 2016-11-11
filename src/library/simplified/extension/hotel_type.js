b['hotelType'] = '';
if (utag.isHCO() && b['entity.checkout.hotel.hotelBusinessType'] != undefined)
{
    b['hotelType'] = b['entity.checkout.hotel.hotelBusinessType'];
}
else if (utag.isPCO())
{
    // TODO: FH/FHC/HC - not available (+Car - emain route)
}
else if (utag.isMCO() && b['entity.checkout.hotels.0.hotelBusinessType'] != undefined)
{
    b['hotelType'] = b['entity.checkout.hotels.0.hotelBusinessType'];
}
