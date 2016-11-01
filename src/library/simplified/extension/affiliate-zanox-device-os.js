utag_data['affiliateCustomDeviceOS'] = '';

if(b['device_details'] != undefined){
    var deviceOSForAwinZanox = b['device_details'];
    b['affiliateCustomDeviceOS'] = deviceOSForAwinZanox.replace(/;/g , ":");
}

/** old
 utag_data['affiliateCustomDeviceOS'] = '';

 if(utag_data['device_details'] != undefined){
  var deviceOSForAwinZanox = utag_data['device_details'];
  utag_data['affiliateCustomDeviceOS'] = deviceOSForAwinZanox.replace(/;/g , ":");
}
 **/