if(b["isRewardsMember"] != undefined && b["rewardsStatus.membershipTier"] != undefined){
    b["u5"] = b["isRewardsMember"].toString().charAt(0) + "|" + b["rewardsStatus.membershipTier"]
}

/** old
 if(utag_data["isRewardsMember"] != undefined && utag_data["rewardsStatus.membershipTier"] != undefined){
  utag_data["u5"] = utag_data["isRewardsMember"].toString().charAt(0) + "|" + utag_data["rewardsStatus.membershipTier"]
}
 **/