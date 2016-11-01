if (b['pageInfo.authInfo.rewardsStatus.confirmedPoints'] != undefined)
{
    b['authInfo.rewardsStatus.confirmedPoints'] = b['pageInfo.authInfo.rewardsStatus.confirmedPoints'];
}
else if(utag.isCarCO() && b['rewardsStatus.confirmedPoints'] != undefined && b['pageInfo.authInfo.rewardsStatus.confirmedPoints'] == undefined)
{
    b['pageInfo.authInfo.rewardsStatus.confirmedPoints'] = b['rewardsStatus.confirmedPoints'];
    b['authInfo.rewardsStatus.confirmedPoints'] = b['rewardsStatus.confirmedPoints'];
}
else if((utag.isLXCO() || utag.isCruiseSR()) && b['authInfo.rewardsStatus.confirmedPoints'] == undefined && b['rewardsStatus.confirmedPoints'] != undefined)
{
    b['pageInfo.authInfo.rewardsStatus.confirmedPoints'] = b['rewardsStatus.confirmedPoints'];
    b['authInfo.rewardsStatus.confirmedPoints'] = b['rewardsStatus.confirmedPoints'];
}


/** old
 if (utag_data['pageInfo.authInfo.rewardsStatus.confirmedPoints'] != undefined)
 {
     utag_data['authInfo.rewardsStatus.confirmedPoints'] = utag_data['pageInfo.authInfo.rewardsStatus.confirmedPoints'];
 }
 else if(utag.isCarCO() && utag_data['rewardsStatus.confirmedPoints'] != undefined && utag_data['pageInfo.authInfo.rewardsStatus.confirmedPoints'] == undefined)
 {
     utag_data['pageInfo.authInfo.rewardsStatus.confirmedPoints'] = utag_data['rewardsStatus.confirmedPoints'];
     utag_data['authInfo.rewardsStatus.confirmedPoints'] = utag_data['rewardsStatus.confirmedPoints'];
 }
 else if((utag.isLXCO() || utag.isCruiseSR()) && utag_data['authInfo.rewardsStatus.confirmedPoints'] == undefined && utag_data['rewardsStatus.confirmedPoints'] != undefined)
 {
     utag_data['pageInfo.authInfo.rewardsStatus.confirmedPoints'] = utag_data['rewardsStatus.confirmedPoints'];
     utag_data['authInfo.rewardsStatus.confirmedPoints'] = utag_data['rewardsStatus.confirmedPoints'];
 }
 **/