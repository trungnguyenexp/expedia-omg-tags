if(b["context.marketingAttribution.restrictedLastTouchTimestamp"] != undefined)
{
    var date = new Date(b["context.marketingAttribution.restrictedLastTouchTimestamp"]);
    b["cescRestrictedLastTouchIsoDateFormat"] = date.toISOString();
}

/** old
 if(utag_data["context.marketingAttribution.restrictedLastTouchTimestamp"] != undefined)
 {
   var date = new Date(utag_data["context.marketingAttribution.restrictedLastTouchTimestamp"]);
   utag_data["cescRestrictedLastTouchIsoDateFormat"] = date.toISOString();
 }
 **/