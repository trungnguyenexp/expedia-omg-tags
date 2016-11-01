b["isRewardsMember"] = false;
if(typeof b["rewardsStatus.membershipTier"] != "undefined" && b["rewardsStatus.membershipTier"].length > 2 ){
    b["isRewardsMember"] = true;
}

/** old
 utag_data["isRewardsMember"] = false;
 if(typeof utag_data["rewardsStatus.membershipTier"] != "undefined" && utag_data["rewardsStatus.membershipTier"].length > 2 ){
  utag_data["isRewardsMember"] = true;
}
 **/