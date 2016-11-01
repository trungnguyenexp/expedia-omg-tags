if(utag.isCarCO() && b.entity.checkout.itineraryNumber != undefined){
    b['u19'] = b.entity.checkout.itineraryNumber + ":" + b.siteId;
}

/** old
 if(utag.isCarCO() && utag_data.entity.checkout.itineraryNumber != undefined){
  utag_data['u19'] = utag_data.entity.checkout.itineraryNumber + ":" + utag_data.siteId;
}
 **/