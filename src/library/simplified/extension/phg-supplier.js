b['phgSupplier'] = '';
if ('string' == typeof b['lob.domain'])
{
    if ('hotel' == b['lob.domain'].toLowerCase())
    {
        b['phgSupplier'] = encodeURIComponent(b['hotelName']);
    }
    else if ('string' == typeof b['carrierCodes'])
    {
        b['phgSupplier'] = encodeURIComponent(b['carrierCodes']);
    }
}
/** old
 utag_data['phgSupplier'] = '';
 if ('string' == typeof utag_data['lob.domain'])
 {
     if ('hotel' == utag_data['lob.domain'].toLowerCase())
     {
         utag_data['phgSupplier'] = encodeURIComponent(utag_data['hotelName']);
     }
     else if ('string' == typeof utag_data['carrierCodes'])
     {
         utag_data['phgSupplier'] = encodeURIComponent(utag_data['carrierCodes']);
     }
 }
 **/