
if(typeof b["channelTracking.rawCookie"] != "undefined"){
    var asppCookie =  b["channelTracking.rawCookie"].split("|");
    if(asppCookie.length > 12){
        b["ASPPChannelSpecificCode"] = asppCookie[12];
    }
}

/** old

 if(typeof utag_data["channelTracking.rawCookie"] != "undefined"){
  var asppCookie =  utag_data["channelTracking.rawCookie"].split("|");
  if(asppCookie.length > 12){
    utag_data["ASPPChannelSpecificCode"] = asppCookie[12];
  }
}

 **/