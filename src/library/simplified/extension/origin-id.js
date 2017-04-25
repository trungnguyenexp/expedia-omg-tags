b['originId'] = '';
if (utag.isPSR() && b['entity.packageSearch.packageSearchParameters.originRegionId'] != undefined)
{
	b['originId'] = b['entity.packageSearch.packageSearchParameters.originRegionId'];
}
