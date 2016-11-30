var marketingChannels = ["affiliateMarketingCode","distributionPartners","emailId", "intraCompanyMarketingCode","onlineAdvertisingCode","searchEngineMarketingCode","searchEngineOrganicCode"];
var lastTouchTimeStamp = '0';
var lastTouchMarketingCode = "";
var priorTimeStamp = '0';
var priorMarketingCode = "";
var length = marketingChannels.length;

for(var i=0; i < length; i++){
    var currentTimeStamp = b["context.marketingAttribution."+marketingChannels[i]+"Timestamp"];
    var currentMarketingCode = b["context.marketingAttribution."+marketingChannels[i]];

    if(currentTimeStamp > lastTouchTimeStamp){
        priorTimeStamp = lastTouchTimeStamp;
        priorMarketingCode = lastTouchMarketingCode;
        lastTouchTimeStamp = currentTimeStamp;
        lastTouchMarketingCode = currentMarketingCode;
    }
}

b["cescLastTouchTimeStamp"] = lastTouchTimeStamp;
b["cescLastTouchMarketingCode"] = lastTouchMarketingCode;
b["cescPriorTouchTimeStamp"] = priorTimeStamp;
b["cescPriorTouchMarketingCode"] = priorMarketingCode;


var dateDifference = parseInt((new Date() - new Date(lastTouchTimeStamp))/(1000*60*60*24));
if(dateDifference <= 30 && dateDifference >= 0) {
    b['cescLastTouch_isexpired'] = false;
}else {
    b['cescLastTouch_isexpired'] = true;
}

if(lastTouchMarketingCode.split(".").length >= 4){
    b["cescChannel"] = lastTouchMarketingCode.split(".")[0];
    b["cescCompany"] = lastTouchMarketingCode.split(".")[1];
    b["cescCountry"] = lastTouchMarketingCode.split(".")[2];
    b["cescNetwork"] = lastTouchMarketingCode.split(".")[3];
}


var fullMarketingCode = lastTouchMarketingCode;
var patrialMarketingCode = b["context.marketingAttribution.campaignId"];

if(fullMarketingCode != undefined && patrialMarketingCode != undefined && fullMarketingCode.indexOf(patrialMarketingCode) > -1 ){
    var marketingCodeAndDTL = fullMarketingCode.split(patrialMarketingCode + ".");
    if( marketingCodeAndDTL.length >= 2 ){
        b["cescLastTouchMarketingCode"] = marketingCodeAndDTL[0].split(".")[0];  //Take out the DTL if exists.
        b["cescDTL"]  = marketingCodeAndDTL[1];
    }
}