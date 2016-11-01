if(utag.isPSR_FH_Responsive() || utag.isFSR() || utag.isFRateDetails() || utag.isFCO() || utag.isPSR_F_Responsive() || utag.isPSR_FH_Responsive() || utag.isPCO() || utag.isMCO()){
    b["totalAirTicketQuantity"] = b["numberOfGuests"];
}

/** old
 if(utag.isPSR_FH_Responsive() || utag.isFSR() || utag.isFRateDetails() || utag.isFCO() || utag.isPSR_F_Responsive() || utag.isPSR_FH_Responsive() || utag.isPCO()){
  utag_data["totalAirTicketQuantity"] = utag_data["numberOfGuests"];
}
 **/