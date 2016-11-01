if(utag.isLXS() && b["entity.activities.activitySearchResults.activityIds"] != undefined){
    b["firstThreeActivitiyIds"] = b["entity.activities.activitySearchResults.activityIds"];
} else if (utag.isLXS() && b.entity.activities.activitySearchResults.activityIds != undefined) {
    b["firstThreeActivitiyIds"] = b.entity.activities.activitySearchResults.activityIds;
}
/** old
 if(utag.isLXS() && utag_data["entity.activities.activitySearchResults.activityIds"] != undefined){
  utag_data["firstThreeActivitiyIds"] = utag_data["entity.activities.activitySearchResults.activityIds"];
}
 **/