if(b['channelTracking.hwTmpId'] != undefined){
    b["tmpid"] = b['channelTracking.hwTmpId'];
}

//This is a work around for cloud pages.
if(b['cp.tmpid'] != undefined){
    b["tmpid"] = b['cp.tmpid'];
}

/** old
 if(utag_data['channelTracking.hwTmpId'] != undefined){
  utag_data["tmpid"] = utag_data['channelTracking.hwTmpId'];
}

 //This is a work around for cloud pages.
 if(utag_data['cp.tmpid'] != undefined){
  utag_data["tmpid"] = utag_data['cp.tmpid'];
}
 **/