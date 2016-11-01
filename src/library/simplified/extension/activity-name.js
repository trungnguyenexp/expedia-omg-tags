if (utag.isLXCO() && (b['entity.checkout.activity.activityDetail.title']))
{
    b['activityName'] = b['entity.checkout.activity.activityDetail.title'];
} else if (b['entity.activities.activityInfo.activityDetail.title']) {
    b['activityName'] = b['entity.activities.activityInfo.activityDetail.title'];
}

/** old
 if (utag.isLXCO() && (utag_data['entity.checkout.activity.activityDetail.title']))
 {
     utag_data['activityName'] = utag_data['entity.checkout.activity.activityDetail.title'];
 } else if (utag_data['entity.activities.activityInfo.activityDetail.title']) {
    utag_data['activityName'] = utag_data['entity.activities.activityInfo.activityDetail.title'];
}
 **/