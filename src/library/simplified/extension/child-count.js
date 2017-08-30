if(utag.isHSR() && typeof b.entity.hotels.search.hotelParameters.rooms != "undefined"){
    var roomsCount = b.entity.hotels.search.hotelParameters.rooms.length;
    var children = 0;
    var childAllowed = 6;
    for(var i = 0; i < roomsCount; i++){
        for(var a = 0; a  < childAllowed; a++){
            var childAgeObject = "entity.hotels.search.hotelParameters.rooms." + i +".childAges."+a;
            if(typeof b[childAgeObject] == "undefined"){
                a = childAllowed;
            }
            if(typeof b[childAgeObject] != "undefined"){
                children++;
            }
        }
    }

    b["childrenCount"] = children;

}
else if((utag.isHIS() || utag.isPIS()) && typeof b["entity.hotels.listOfHotels.0"] != "undefined"){
    var roomsCount = b.entity.hotels.listOfHotels[0].rooms.length;
    var children = 0;
    for(var i = 0; i < roomsCount; i++){
        var roomObject = "entity.hotels.listOfHotels.0.rooms." + i +".numChildren";
        children = children + parseInt(b[roomObject]);
    }

    b["childrenCount"] = children;
}
else if (utag.isPIS() && b['entity.packageSearch.packageSearchParameters.travelers.0']) {
    var children = 0;
    var roomsCount = b.entity.packageSearch.packageSearchParameters.travelers.length;
    for (var i = 0; i < roomsCount; i++) {
        var roomObject = 'entity.packageSearch.packageSearchParameters.travelers.' + i + '.numberOfChildren';
        children += parseInt(b[roomObject]);
    }
    b['childrenCount'] = children;
}
else if(utag.isHCO() && typeof b.entity.checkout.hotel.rooms != "undefined"){
    var roomsCount = b.entity.checkout.hotel.rooms.length;
    var childrenCount = 0;
    for(var i = 0; i < roomsCount; i++){
        var roomObject = "entity.checkout.hotel.rooms." + i +".numChildren";
        childrenCount = childrenCount + parseInt(b[roomObject]);
    }

    b["childrenCount"] = childrenCount;
}
else if(utag.isFSR() || utag.isPSR_F_Responsive()){
    b["childrenCount"] = b["entity.flightSearch.travelers.numberOfChildren"];
}
else if(utag.isFRateDetails()){
    b["childrenCount"] = b["entity.flight.travelerInfo.numberOfChildren"];
}
else if (utag.isPRateDetails() && typeof b['entity.tripDetails.travelersInfo.numberOfChildren'] !== "undefined") {
    b["childrenCount"] = b['entity.tripDetails.travelersInfo.numberOfChildren'];
}
else if(utag.isFPymt() || utag.isFCO() || utag.isPPymt() || utag.isPCO()){
    b["childrenCount"] = b["entity.checkout.flightOffer.travelersInfo.numberOfChildren"];
}
else if(utag.isPSR())
{
    if (b.entity && b.entity.packageFHSearch && b.entity.packageFHSearch.packageFHSearchParameters
        && Array.isArray(b.entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms)
        && b.entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms.length > 0)
    {
        var roomsCount = b.entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms.length;
        var children = 0;
        for(var i = 0; i < roomsCount; i++){
            var roomObject = "entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms." + i +".childrenCount";
            children = children + parseInt(b[roomObject]);
        }
        b["childrenCount"] = children;
    }
    else if (b.entity && b.entity.packageSearch && b.entity.packageSearch.packageSearchParameters
        && Array.isArray(b.entity.packageSearch.packageSearchParameters.travelers)
        && b.entity.packageSearch.packageSearchParameters.travelers.length > 0)
    {
        var roomsCount = b.entity.packageSearch.packageSearchParameters.travelers.length;
        var children = 0;
        var childAllowed = 6;
        for(var i = 0; i < roomsCount; i++){
            for(var a = 0; a  < childAllowed; a++){
                var childAgeObject = "entity.packageSearch.packageSearchParameters.travelers." + i +".childAges."+a;
                if(typeof b[childAgeObject] == "undefined"){
                    a = childAllowed;
                }
                if(typeof b[childAgeObject] != "undefined"){
                    children++;
                }
            }
        }
        b["childrenCount"] = children;
    }
}
else if (utag.isLXCO() && !isNaN(b['entity.checkout.activity.travelerInfo.numberOfChildren']))
{
    b['childrenCount'] = b['entity.checkout.activity.travelerInfo.numberOfChildren'];
}
else if (utag.isCruiseCO() && !isNaN(b['entity.checkout.cruise.traveler.numberOfChildren']))
{
    b['childrenCount'] = b['entity.checkout.cruise.traveler.numberOfChildren'];
}
else if (utag.isMCO()) {
    if (b["entity.checkout.flightOffers.0.travelersInfo.numberOfChildren"] != undefined) {
        b["childrenCount"] = b["entity.checkout.flightOffers.0.travelersInfo.numberOfChildren"];
    }
    else if (b["entity.checkout.hotels.0.rooms.0.numChildren"] != undefined) {
        var roomsCount = b.entity.checkout.hotels[0].rooms.length;
        var children = 0;
        for(var i = 0; i < roomsCount; i++) {
            var roomObject = "entity.checkout.hotels.0.rooms." + i +".numChildren";
            children = children + parseInt(b[roomObject]);
        }

        b["childrenCount"] = children;
    }
}

/** old
 if(utag.isHSR() && typeof b.entity.hotels.search.hotelParameters.rooms != "undefined"){
    var roomsCount = b.entity.hotels.search.hotelParameters.rooms.length;
    var children = 0;
    var childAllowed = 6;
    for(var i = 0; i < roomsCount; i++){
        for(var a = 0; a  < childAllowed; a++){
            var childAgeObject = "entity.hotels.search.hotelParameters.rooms." + i +".childAges."+a;
            if(typeof utag_data[childAgeObject] == "undefined"){
                a = childAllowed;
            }
            if(typeof utag_data[childAgeObject] != "undefined"){
                children++;
            }
        }
    }

    utag_data["childrenCount"] = children;

}
 else if((utag.isHIS() || utag.isPIS()) && typeof utag_data["entity.hotels.listOfHotels.0"] != "undefined"){
    var roomsCount = b.entity.hotels.listOfHotels[0].rooms.length;
    var children = 0;
    for(var i = 0; i < roomsCount; i++){
        var roomObject = "entity.hotels.listOfHotels.0.rooms." + i +".numChildren";
        children = children + parseInt(utag_data[roomObject]);
    }

    utag_data["childrenCount"] = children;
}
 else if (utag.isPIS() && utag_data['entity.packageSearch.packageSearchParameters.travelers.0']) {
    var children = 0;
    var roomsCount = b.entity.packageSearch.packageSearchParameters.travelers.length;
    for (var i = 0; i < roomsCount; i++) {
        var roomObject = 'entity.packageSearch.packageSearchParameters.travelers.' + i + '.numberOfChildren';
        children += parseInt(utag_data[roomObject]);
    }
    utag_data['childrenCount'] = children;
}
 else if(utag.isHCO() && typeof b.entity.checkout.hotel.rooms != "undefined"){
    var roomsCount = b.entity.checkout.hotel.rooms.length;
    var childrenCount = 0;
    for(var i = 0; i < roomsCount; i++){
        var roomObject = "entity.checkout.hotel.rooms." + i +".numChildren";
        childrenCount = childrenCount + parseInt(utag_data[roomObject]);
    }

    utag_data["childrenCount"] = childrenCount;
}
 else if(utag.isFSR() || utag.isPSR_F_Responsive()){
    utag_data["childrenCount"] = utag_data["entity.flightSearch.travelers.numberOfChildren"];
}
 else if(utag.isFRateDetails()){
    utag_data["childrenCount"] = utag_data["entity.flight.travelerInfo.numberOfChildren"];
}
 else if (utag.isPRateDetails() && utag_data['entity.tripDetails.travelersInfo.numberOfChildren'])
 {
     utag_data["childrenCount"] = utag_data['entity.tripDetails.travelersInfo.numberOfChildren'];
 }
 else if(utag.isFPymt() || utag.isFCO() || utag.isPPymt() || utag.isPCO()){
    utag_data["childrenCount"] = utag_data["entity.checkout.flightOffer.travelersInfo.numberOfChildren"];
}
 else if(utag.isPSR())
 {
     if (b.entity && b.entity.packageFHSearch && b.entity.packageFHSearch.packageFHSearchParameters
         && Array.isArray(b.entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms)
         && b.entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms.length > 0)
     {
         var roomsCount = b.entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms.length;
         var children = 0;
         for(var i = 0; i < roomsCount; i++){
             var roomObject = "entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms." + i +".childrenCount";
             children = children + parseInt(utag_data[roomObject]);
         }
         utag_data["childrenCount"] = children;
     }
     else if (b.entity && b.entity.packageSearch && b.entity.packageSearch.packageSearchParameters
         && Array.isArray(b.entity.packageSearch.packageSearchParameters.travelers)
         && b.entity.packageSearch.packageSearchParameters.travelers.length > 0)
     {
         var roomsCount = b.entity.packageSearch.packageSearchParameters.travelers.length;
         var children = 0;
         var childAllowed = 6;
         for(var i = 0; i < roomsCount; i++){
             for(var a = 0; a  < childAllowed; a++){
                 var childAgeObject = "entity.packageSearch.packageSearchParameters.travelers." + i +".childAges."+a;
                 if(typeof utag_data[childAgeObject] == "undefined"){
                     a = childAllowed;
                 }
                 if(typeof utag_data[childAgeObject] != "undefined"){
                     children++;
                 }
             }
         }
         utag_data["childrenCount"] = children;
     }
 }
 else if (utag.isLXCO() && !isNaN(utag_data['entity.checkout.activity.travelerInfo.numberOfChildren']))
 {
     utag_data['childrenCount'] = utag_data['entity.checkout.activity.travelerInfo.numberOfChildren'];
 }
 else if (utag.isCruiseCO() && !isNaN(utag_data['entity.checkout.cruise.traveler.numberOfChildren']))
 {
     utag_data['childrenCount'] = utag_data['entity.checkout.cruise.traveler.numberOfChildren'];
 }
 else if (utag.isMCO()) {
  if (utag_data["entity.checkout.flightOffers.0.travelersInfo.numberOfChildren"] != undefined) {
    utag_data["childrenCount"] = utag_data["entity.checkout.flightOffers.0.travelersInfo.numberOfChildren"];
  }
  else if (b["entity.checkout.hotels.0"] != undefined) {
    var roomsCount = b.entity.checkout.hotels[0].rooms.length;
    var children = 0;
    for(var i = 0; i < roomsCount; i++) {
        var roomObject = "entity.checkout.hotels.0.rooms." + i +".numChildren";
        children = children + parseInt(utag_data[roomObject]);
    }

    utag_data["childrenCount"] = children;
  }
}
 **/