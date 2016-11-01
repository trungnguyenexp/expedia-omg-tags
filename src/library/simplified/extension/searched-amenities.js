if(utag.isHSR() && b.entity.hotels.search.searchedAmenities != undefined){
    var searchedAmenitiesNumber = b.entity.hotels.search.searchedAmenities.length;
    var amenityNames = "";
    for(var i = 0; i < searchedAmenitiesNumber; i++){
        var amenity = "entity.hotels.search.amenities." + i;
        amenityNames = amenityNames + b[amenity] + "|";
    }
    b["searchedAmenities"] = amenityNames;
}
else if(utag.isHIS() && b["entity.hotels.listOfHotels.0.amenities"] != undefined){
    b["searchedAmenities"] = b["entity.hotels.listOfHotels.0.amenities"];
}

/** old
 if(utag.isHSR() && utag_data.entity.hotels.search.searchedAmenities != undefined){
  var searchedAmenitiesNumber = utag_data.entity.hotels.search.searchedAmenities.length;
  var amenityNames = "";
  for(var i = 0; i < searchedAmenitiesNumber; i++){
        var amenity = "entity.hotels.search.amenities." + i;
        amenityNames = amenityNames + utag_data[amenity] + "|";
    }
  utag_data["searchedAmenities"] = amenityNames;
}
 else if(utag.isHIS() && utag_data["entity.hotels.listOfHotels.0.amenities"] != undefined){
  utag_data["searchedAmenities"] = utag_data["entity.hotels.listOfHotels.0.amenities"]; 
}
 **/