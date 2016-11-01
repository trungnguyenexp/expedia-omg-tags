b["campaignId"] = "";

if(b["context.site.siteId"] == 70201 && (utag.isCO() || utag.is3pp()) && (b["cescNetwork"].toLowerCase().indexOf("phg") > -1 || b["cescLastTouchMarketingCode"].toLowerCase().indexOf("phg") > -1))
{
    if(b["cescCountry"].toLowerCase().indexOf("direct") > -1 || b["cescLastTouchMarketingCode"].toLowerCase().indexOf("direct") > -1 )
    {
        b["campaignId"] = "1011l96";
    }
    else if(b["cescCountry"].toLowerCase().indexOf("srcomp") > -1 || b["cescLastTouchMarketingCode"].toLowerCase().indexOf("srcomp") > -1)
    {
        b["campaignId"] = "1100l89";
    }
    else if(b["cescCountry"].toLowerCase().indexOf("meta") > -1 || b["cescLastTouchMarketingCode"].toLowerCase().indexOf("meta") > -1)
    {
        b["campaignId"] = "1011l98";
    }
}
else if(b["context.site.siteId"] == 70301 && (utag.isCO() || utag.is3pp()) && (b["cescNetwork"].toLowerCase().indexOf("phg") > -1 || b["cescLastTouchMarketingCode"].toLowerCase().indexOf("phg") > -1))
{
    if(b["cescCountry"].toLowerCase().indexOf("direct") > -1 || b["cescLastTouchMarketingCode"].toLowerCase().indexOf("direct") > -1)
    {
        b["campaignId"] = "1011l100";
    }
    else if(b["cescCountry"].toLowerCase().indexOf("srcomp") > -1 || b["cescLastTouchMarketingCode"].toLowerCase().indexOf("srcomp") > -1)
    {
        b["campaignId"] = "1101l80";
    }
    else if(b["cescCountry"].toLowerCase().indexOf("meta") > -1 || b["cescLastTouchMarketingCode"].toLowerCase().indexOf("meta") > -1)
    {
        b["campaignId"] = "1100l92";
    }
}


/** old
 utag_data["campaignId"] = "";

 if(utag_data["context.site.siteId"] == 70201 && (utag.isCO() || utag.is3pp()) && (utag_data["cescNetwork"].toLowerCase().indexOf("phg") > -1 || utag_data["cescLastTouchMarketingCode"].toLowerCase().indexOf("phg") > -1))
 {
   if(utag_data["cescCountry"].toLowerCase().indexOf("direct") > -1 || utag_data["cescLastTouchMarketingCode"].toLowerCase().indexOf("direct") > -1 )
   {
     utag_data["campaignId"] = "1011l96";
   }
   else if(utag_data["cescCountry"].toLowerCase().indexOf("srcomp") > -1 || utag_data["cescLastTouchMarketingCode"].toLowerCase().indexOf("srcomp") > -1)
   {
     utag_data["campaignId"] = "1100l89";
   }
   else if(utag_data["cescCountry"].toLowerCase().indexOf("meta") > -1 || utag_data["cescLastTouchMarketingCode"].toLowerCase().indexOf("meta") > -1)
   {
     utag_data["campaignId"] = "1011l98";
   }
 }
 else if(utag_data["context.site.siteId"] == 70301 && (utag.isCO() || utag.is3pp()) && (utag_data["cescNetwork"].toLowerCase().indexOf("phg") > -1 || utag_data["cescLastTouchMarketingCode"].toLowerCase().indexOf("phg") > -1))
 {
   if(utag_data["cescCountry"].toLowerCase().indexOf("direct") > -1 || utag_data["cescLastTouchMarketingCode"].toLowerCase().indexOf("direct") > -1)
   {
     utag_data["campaignId"] = "1011l100";
   }
   else if(utag_data["cescCountry"].toLowerCase().indexOf("srcomp") > -1 || utag_data["cescLastTouchMarketingCode"].toLowerCase().indexOf("srcomp") > -1)
   {
     utag_data["campaignId"] = "1101l80";
   }
   else if(utag_data["cescCountry"].toLowerCase().indexOf("meta") > -1 || utag_data["cescLastTouchMarketingCode"].toLowerCase().indexOf("meta") > -1)
   {
     utag_data["campaignId"] = "1100l92";
   }
 }
 **/