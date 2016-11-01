b['lob.domain'] = '';
if (typeof b['domain'] != "undefined")
{
    if (b['domain'].indexOf("MULTIITEM") !== -1) {
        b['lob.domain'] = "PACKAGE";
        b['lobDomain'] = "PACKAGE";
    } else {
        b['lob.domain'] = b['domain'];
        b['lobDomain'] = b['domain'];
    }
}
else if (utag.is3pp())
{
    if(b['entity.checkout.lobType'].indexOf("3p") !== -1){
        b['lob.domain'] = "3pp";
    }else{
        b['lob.domain'] = b['entity.checkout.lobType'];
    }
}

/** old
 utag_data['lob.domain'] = '';
 if (typeof utag_data['domain'] != "undefined")
 {
   if (utag_data['domain'].indexOf("MULTIITEM") !== -1) {
     utag_data['lob.domain'] = "PACKAGE";
   } else {
     utag_data['lob.domain'] = utag_data['domain'];
   }
 }
 else if (utag.is3pp())
 {
     if(utag_data['entity.checkout.lobType'].indexOf("3p") !== -1){
         utag_data['lob.domain'] = "3pp";
     }else{
         utag_data['lob.domain'] = utag_data['entity.checkout.lobType'];
     }
 }
 **/