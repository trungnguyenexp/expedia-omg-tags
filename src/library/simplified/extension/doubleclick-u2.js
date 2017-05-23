b['u2'] = '';
if (utag.isHSR() && b['entity.hotels.search.hotelParameters.regionId']) {
	b['u2'] = b['entity.hotels.search.hotelParameters.regionId'];
}
else if (utag.isPSR() && b['entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirport']) {
	b['u2'] = b['entity.packageSearch.packageSearchParameters.flightSearchParameters.arrivalAirport']
}