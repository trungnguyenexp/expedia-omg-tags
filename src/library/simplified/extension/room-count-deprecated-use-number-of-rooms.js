b['roomCount'] = '';
if (utag.isHCO() && b.entity != undefined
    && b.entity.checkout != undefined
    && b.entity.checkout.hotel != undefined
    && b.entity.checkout.hotel.rooms != undefined
    && Array.isArray(b.entity.checkout.hotel.rooms))
{
    b['roomCount'] = b.entity.checkout.hotel.rooms.length;
}
else if((utag.isPSR_FH_Responsive() || utag.isPIS_FH()) && b.entity.packageSearch != undefined
    && b.entity.packageSearch.packageSearchParameters != undefined){
    b['roomCount'] = b.entity.packageSearch.packageSearchParameters.travelers.length;
}
else if (utag.isPCO())
{
    // TODO: FH/FHC/HC - not available (+Car - emain route)
}


/** old
 utag_data['roomCount'] = '';
 if (utag.isHCO() && utag_data.entity != undefined
 && utag_data.entity.checkout != undefined
 && utag_data.entity.checkout.hotel != undefined
 && utag_data.entity.checkout.hotel.rooms != undefined
 && Array.isArray(utag_data.entity.checkout.hotel.rooms))
 {
     utag_data['roomCount'] = utag_data.entity.checkout.hotel.rooms.length;
 }
 else if((utag.isPSR_FH_Responsive() || utag.isPIS_FH()) && utag_data.entity.packageSearch != undefined
 && utag_data.entity.packageSearch.packageSearchParameters != undefined){
  utag_data['roomCount'] = b.entity.packageSearch.packageSearchParameters.travelers.length;
}
 else if (utag.isPCO())
 {
     // TODO: FH/FHC/HC - not available (+Car - emain route)
 }
 **/