b['conversionId']  = '';
if(utag.isHCO() && typeof b.channelTracking.conversionId !== "undefined") {
	var conversionDetails = b.channelTracking.conversionId.split(".");  
	if(conversionDetails.length == 3) {
		b['conversionId'] =  conversionDetails[2];
	}
}