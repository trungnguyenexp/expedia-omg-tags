b['tripId'] = b['entity.checkout.tripID'] || '';
if(utag.isLXCO() && b.entity.checkout.tripID){
    b['tripId'] = b.entity.checkout.tripID;
}

/** old
 utag_data['tripId'] = utag_data['entity.checkout.tripID'] || '';
 if(utag.isLXCO() && utag_data.entity.checkout.tripID){
  utag_data['tripId'] = utag_data.entity.checkout.tripID;
}
 **/