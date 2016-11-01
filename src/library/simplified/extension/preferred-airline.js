if (b.isFlightSearchResults && b["entity.flightSearch.searchParameters.preferredAirline"] != undefined){
    b["preferredAirline"] = b["entity.flightSearch.searchParameters.preferredAirline"];
}
else if (b.isPackageHotelSeachResult && b["entity.packageSearch.packageSearchParameters.flightSearchParameters.preferredAirline"] != undefined){
    b["preferredAirline"] = b["entity.packageSearch.packageSearchParameters.flightSearchParameters.preferredAirline"];
}

/** old
 if (utag_data.isFlightSearchResults && utag_data["entity.flightSearch.searchParameters.preferredAirline"] != undefined){
  utag_data["preferredAirline"] = utag_data["entity.flightSearch.searchParameters.preferredAirline"];
}
 else if (utag_data.isPackageHotelSeachResult && utag_data["entity.packageSearch.packageSearchParameters.flightSearchParameters.preferredAirline"] != undefined){
  utag_data["preferredAirline"] = utag_data["entity.packageSearch.packageSearchParameters.flightSearchParameters.preferredAirline"];
}
 **/