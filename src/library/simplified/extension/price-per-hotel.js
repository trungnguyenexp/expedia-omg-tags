if(utag.isHCO() && b.entity.checkout.cartTotal.amount != undefined
    && b.numberOfRooms != undefined && b.numberOfRooms > 0){
    b["pricePerHotel"] = b.entity.checkout.cartTotal.amount/b.numberOfRooms;
}
else if (utag.isMCO() && b["entity.checkout.hotels.0"] != undefined)
{
    var hotel = b.entity.checkout.hotels[0];
    var numberOfRooms = hotel.rooms.length;
    var totalHotelCost = 0.0;

    for (var i = 0; i < numberOfRooms; i++) {
        totalHotelCost += hotel.rooms[i].totalPrice.amount;
    }

    b["pricePerHotel"] = Math.round(totalHotelCost/numberOfRooms*100)/100;
}

/** old
 if(utag.isHCO() && utag_data.entity.checkout.cartTotal.amount != undefined
 && utag_data.numberOfRooms != undefined && utag_data.numberOfRooms > 0){
  utag_data["pricePerHotel"] = utag_data.entity.checkout.cartTotal.amount/utag_data.numberOfRooms;
}
 else if (utag.isMCO() && utag_data["entity.checkout.hotels.0"] != undefined)
 {
   var hotel = utag_data.entity.checkout.hotels[0];
   var numberOfRooms = hotel.rooms.length;
   var totalHotelCost = 0.0;

   for (var i = 0; i < numberOfRooms; i++) {
     totalHotelCost += hotel.rooms[i].totalPrice.amount;
   }

   utag_data["pricePerHotel"] = Math.round(totalHotelCost/numberOfRooms*100)/100;
 }
 **/