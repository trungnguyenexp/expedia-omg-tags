if(utag.isFCO() || utag.isPCO()){
    b["splitTicket"] = b["entity.checkout.flightOffer.splitTicket"];
}
else if(utag.isFRateDetails()){
    if(b["entity.tripDetails.flightOffer.splitTicket"] != null){
        b["splitTicket"] = b["entity.tripDetails.flightOffer.splitTicket"];
    }
    else if(typeof b["entity.flight"] != "undefined" && typeof b["entity.flight.flight"] != "undefined"){
        b["splitTicket"] = b["entity.flight.flight.splitTicket"];
    }
}
/** old
 if(utag.isFCO() || utag.isPCO()){
  utag_data["splitTicket"] = utag_data["entity.checkout.flightOffer.splitTicket"];
}
 else if(utag.isFRateDetails()){
  if(utag_data["entity.tripDetails.flightOffer.splitTicket"] != null){
    utag_data["splitTicket"] = utag_data["entity.tripDetails.flightOffer.splitTicket"];
  }
  else if(typeof utag_data["entity.flight"] != "undefined" && typeof utag_data["entity.flight.flight"] != "undefined"){
    utag_data["splitTicket"] = utag_data["entity.flight.flight.splitTicket"];
  }
}
 **/