if (b['entity.hotels.results.results.0.hotelId'] != undefined)
{
    b['hotels.results.results.0.hotelId'] = b['entity.hotels.results.results.0.hotelId'];
}
else if (b['entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.topTenHotelIds']
    && b['entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.topTenHotelIds'])
{
    b['hotels.results.results.0.hotelId'] = b['entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.topTenHotelIds'].split('|')[0];
}

