var isoPickupDate = "";
var isoDropoffDate = "";
if(utag.isCarSR()){
    isoPickupDate = b['entity.carSearch.searchCriteria.isoFormatPickUpDate'];
    isoDropoffDate = b['entity.carSearch.searchCriteria.isoFormatDropOffDate'];
}else{
    isoPickupDate = b['checkInDate'].trim();
    isoDropoffDate = b['checkOutDate'].trim();
}
if(b.checkInDate != "" && b.checkOutDate != ""){
    b['pickUpandDropOffDate'] = b.checkInDate.replace(/-/g, "") + "|" + b.checkOutDate.replace(/-/g, "");
}
if (isoPickupDate !== '')
{
    var pickupDate = formatDate(isoPickupDate);
    b['pickUpandDropOffDate'] = pickupDate + ' | ' + pickupDate;
    if (isoDropoffDate.trim().length > 0)
    {
        b['pickUpandDropOffDate'] = pickupDate + ' | ' + formatDate(isoDropoffDate);
    }
}
function formatDate(strDate)
{
    var date = new Date(strDate);
    return '' + date.getUTCFullYear() + padWithZero(date.getUTCMonth() + 1) + padWithZero(date.getUTCDate());
}

function padWithZero(number)
{
    var padded = '' + number;
    if (number < 10)
    {
        padded = '0' + number;
    }
    return padded;
}

/** old
 var isoPickupDate = "";
 var isoDropoffDate = "";
 if(utag.isCarSR()){
  isoPickupDate = utag_data['entity.carSearch.searchCriteria.isoFormatPickUpDate'];
  isoDropoffDate = utag_data['entity.carSearch.searchCriteria.isoFormatDropOffDate'];
}else{
  isoPickupDate = utag_data['checkInDate'].trim();
  isoDropoffDate = utag_data['checkOutDate'].trim();
}
 if(utag_data.checkInDate != "" && utag_data.checkOutDate != ""){
  utag_data['pickUpandDropOffDate'] = utag_data.checkInDate.replace(/-/g, "") + "|" + utag_data.checkOutDate.replace(/-/g, "");
}
 if (isoPickupDate !== '')
 {
   var pickupDate = formatDate(isoPickupDate);
   utag_data['pickUpandDropOffDate'] = pickupDate + ' | ' + pickupDate;
   if (isoDropoffDate.trim().length > 0)
   {
     utag_data['pickUpandDropOffDate'] = pickupDate + ' | ' + formatDate(isoDropoffDate);
   }
 }
 function formatDate(strDate)
 {
   var date = new Date(strDate);
   return '' + date.getUTCFullYear() + padWithZero(date.getUTCMonth() + 1) + padWithZero(date.getUTCDate());
 }

 function padWithZero(number)
 {
   var padded = '' + number;
   if (number < 10)
   {
     padded = '0' + number;
   }
   return padded;
 }
 **/