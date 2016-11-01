//TO-DO: add for packages
if(utag.isHSR()){
    var hotelIds = "";
    var hotelArray = [];
    for(var i=0;i<3;i++){
        if(b["entity.hotels.results.results."+i+".hotelId"] != undefined ){
            hotelIds =  hotelIds + b["entity.hotels.results.results."+i+".hotelId"] + "|"
            hotelArray.push(b["entity.hotels.results.results."+i+".hotelId"]);
        }
    }

    b['firstThreeHotels.array'] = hotelArray;
    b["firstThreeHotels"] = hotelIds.slice(0,-1);
}
else if (utag.isPSR_Mobile() && b['entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.topTenHotelIds'])
{
    b["firstThreeHotels"] = b['entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.topTenHotelIds'].split('|').slice(0, 3);
}

/** old
 //TO-DO: add for packages
 if(utag.isHSR()){
    var hotelIds = "";
    var hotelArray = [];
    for(var i=0;i<3;i++){
        if(utag_data["entity.hotels.results.results."+i+".hotelId"] != undefined ){
            hotelIds =  hotelIds + utag_data["entity.hotels.results.results."+i+".hotelId"] + "|"
            hotelArray.push(utag_data["entity.hotels.results.results."+i+".hotelId"]);
        }
    }

    utag_data['firstThreeHotels.array'] = hotelArray;
    utag_data["firstThreeHotels"] = hotelIds.slice(0,-1);
}
 else if (utag.isPSR_Mobile() && utag_data['entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.topTenHotelIds'])
 {
     utag_data["firstThreeHotels"] = utag_data['entity.packageSearch.packageSearchParameters.packageHotelSearchParameters.topTenHotelIds'].split('|').slice(0, 3);
 }
 **/