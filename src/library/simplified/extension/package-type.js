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