// TODO: Depends on device-type.js (merge this)
if(b['device_type'] != undefined)
{
    b['firstLetterOfDeviceType'] = b['device_type'].toLowerCase().slice(0,1);
}

/** old
 if(utag_data['device_type'] != undefined)
 {
   utag_data['firstLetterOfDeviceType'] = utag_data['device_type'].toLowerCase().slice(0,1);
 }
 **/