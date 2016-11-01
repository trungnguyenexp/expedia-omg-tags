b["isInternationalBooking"] = false;

if (b["countryCode"] != undefined &&
    b["context.site.jurisdictionCode"] != undefined &&
    b["countryCode"] != b["context.site.jurisdictionCode"])
{
    b["isInternationalBooking"] = true;
}

/** old
 utag_data["isInternationalBooking"] = false;

 if (utag_data["countryCode"] != undefined &&
 utag_data["context.site.jurisdictionCode"] != undefined &&
 utag_data["countryCode"] != utag_data["context.site.jurisdictionCode"])
 {
   utag_data["isInternationalBooking"] = true;
 }
 **/