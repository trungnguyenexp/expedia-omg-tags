if(b.checkInDate != undefined){
    b["departureTimestamp"] = convertToTimestamp(b.checkInDate);
}

if(b.checkOutDate != undefined){
    b["arrivalTimestamp"] = convertToTimestamp(b.checkOutDate);
}

function convertToTimestamp(isoDate){
    var timestamp = "";
    if(isoDate.split("-").length == 3){
        var splitDate = isoDate.split("-");
        var newDate = splitDate[1]+","+splitDate[2]+","+splitDate[0];
        timestamp = new Date(newDate).getTime();
    }
    return timestamp;
}

/** old
 if(utag_data.checkInDate != undefined){
  utag_data["departureTimestamp"] = convertToTimestamp(utag_data.checkInDate); 
}

 if(utag_data.checkOutDate != undefined){
  utag_data["arrivalTimestamp"] = convertToTimestamp(utag_data.checkOutDate); 
}

 function convertToTimestamp(isoDate){
  var timestamp = "";
  if(isoDate.split("-").length == 3){
    var splitDate = isoDate.split("-");
    var newDate = splitDate[1]+","+splitDate[2]+","+splitDate[0];
    timestamp = new Date(newDate).getTime(); 
  }
  return timestamp;
}
 **/