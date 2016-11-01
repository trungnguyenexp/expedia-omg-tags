b['packageType'] = '';
if (utag.isPSR())
{
    if (b['entity.packageSearch.packageSearchParameters.packageType'])
    {
        b['packageType'] = b['entity.packageSearch.packageSearchParameters.packageType']

    }
    else if (b['qp.packageType'])
    {
        b['packageType'] = b['qp.packageType']
    }
}
else if (utag.isPIS() || utag.isPRateDetails())
{
    if (b['qp.packageType'])
    {
        b['packageType'] = b['qp.packageType']
    }
}
else if (utag.isPCO() && b['entity.packageSearch.packageSearchParameters.packageType'])
{
    b['packageType'] = b['entity.packageSearch.packageSearchParameters.packageType'];
}

/** old
 utag_data['packageType'] = '';
 if (utag.isPSR())
 {
     if (utag_data['entity.packageSearch.packageSearchParameters.packageType'])
     {
         utag_data['packageType'] = utag_data['entity.packageSearch.packageSearchParameters.packageType']

     }
     else if (utag_data['qp.packageType'])
     {
         utag_data['packageType'] = utag_data['qp.packageType']
     }
 }
 else if (utag.isPIS() || utag.isPRateDetails())
 {
     if (utag_data['qp.packageType'])
     {
         utag_data['packageType'] = utag_data['qp.packageType']
     }
 }
 else if (utag.isPCO() && utag_data['entity.packageSearch.packageSearchParameters.packageType'])
 {
     utag_data['packageType'] = utag_data['entity.packageSearch.packageSearchParameters.packageType'];
 }
 **/