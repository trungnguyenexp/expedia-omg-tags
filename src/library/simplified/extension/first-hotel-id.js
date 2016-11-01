if (b['entity.hotels.results.results.0.hotelId'] != undefined)
{
    b['hotels.results.results.0.hotelId'] = b['entity.hotels.results.results.0.hotelId'];
}
else if (b['entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.topTenHotelIds']
    && b['entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.topTenHotelIds'])
{
    b['hotels.results.results.0.hotelId'] = b['entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.topTenHotelIds'].split('|')[0];
}

/* christina added to temporarily fix missing hotelId on package pages */
if (b.entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.topTenHotelIds && utag.isPSR()) {
    b['hotelId'] = b.entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.topTenHotelIds.split('|');
} else if (b.entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.selectedHotelId && utag.isPIS()) {
    b['hotelId'] = b.entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.selectedHotelId
}

/** old
 if (utag_data['entity.hotels.results.results.0.hotelId'] != undefined)
 {
     utag_data['hotels.results.results.0.hotelId'] = utag_data['entity.hotels.results.results.0.hotelId'];
 }
 else if (utag_data['entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.topTenHotelIds']
 && utag_data['entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.topTenHotelIds'])
 {
     utag_data['hotels.results.results.0.hotelId'] = utag_data['entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.topTenHotelIds'].split('|')[0];
 }

 /* christina added to temporarily fix missing hotelId on package pages
 if (utag_data.entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.topTenHotelIds && utag.isPSR()) {
  b['hotelId'] = utag_data.entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.topTenHotelIds.split('|');
} else if (utag_data.entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.selectedHotelId && utag.isPIS()) {
  b['hotelId'] = utag_data.entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.selectedHotelId
}

 **/