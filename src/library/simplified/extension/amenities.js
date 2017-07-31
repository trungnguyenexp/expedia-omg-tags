var offeredAmenities = '';
if (typeof b.entity.checkout !== "undefined" && typeof b.entity.checkout.hotel !== "undefined"){
    offeredAmenities = b.entity.checkout.hotel.offeredAmenities;
}
else if (typeof b.entity.checkout !== "undefined" && typeof b.entity.checkout.hotels !== "undefined"){
    offeredAmenities = b.entity.checkout.hotels[0].offeredAmenities;
}
else if (utag.isPIS() && typeof b.entity.packageSearch.results !== "undefined"){
    offeredAmenities = b["entity.packageSearch.results.offers.0.packageHotel.hotelDescription.offeredAmenities"];
}
if (offeredAmenities){
    var amenityNames = "";
    for (var amenity = 0; amenity < offeredAmenities.length; amenity++){
        amenityNames = amenityNames + offeredAmenities[amenity] + "|";
    }
    b['offeredAmenities'] = amenityNames;
}