if(utag.isCarCO() && b["checkout.cartTotal.amount"] == "" && jQuery("#price_total") != undefined)
{
    var priceTotal = jQuery("#price_total").text();
    if(priceTotal.indexOf("$") > -1){
        b["checkout.cartTotal.amount"] = priceTotal.split("$")[1].trim();
        b["entity.checkout.cartTotal.amount"] = priceTotal.split("$")[1].trim();
    }
}
if(utag.isCarCO() && b["checkout.cartTotal.netValue"] == undefined && jQuery("#base_price") != undefined)
{
    var netValue = jQuery("#base_price").text();
    if(netValue.indexOf("$") > -1){
        b["checkout.cartTotal.netValue"] = netValue.split("$")[1].trim();
        b["entity.checkout.cartTotal.netValue"] = netValue.split("$")[1].trim();
    }
}
if(utag.isCarCO() && b["checkout.cartTotal.taxesAndFees"] == undefined && jQuery("#taxes_value") != undefined)
{
    var taxesAndFees = jQuery("#taxes_value").text();
    if(taxesAndFees.indexOf("$") > -1){
        b["checkout.cartTotal.taxesAndFees"] = taxesAndFees.split("$")[1].trim();
        b["entity.checkout.cartTotal.taxesAndFees"] = taxesAndFees.split("$")[1].trim();
    }
}
if((utag.isCarCO() || utag.isLXCO()) && b["entity.checkout.cartTotal.currency"] == undefined )
{
    b["entity.checkout.cartTotal.currency"] = b["entity.checkout.currency"];
}
if((utag.isCarCO() || utag.isLXCO()) && b["pageInfo.authInfo.rewardsStatus.membershipTier"] == undefined){
    b["pageInfo.authInfo.rewardsStatus.membershipTier"] = b["rewardsStatus.membershipTier"];
}

/** old
 if(utag.isCarCO() && utag_data["checkout.cartTotal.amount"] == "" && jQuery("#price_total") != undefined)
 {
   var priceTotal = jQuery("#price_total").text();
   if(priceTotal.indexOf("$") > -1){
     utag_data["checkout.cartTotal.amount"] = priceTotal.split("$")[1].trim();
     utag_data["entity.checkout.cartTotal.amount"] = priceTotal.split("$")[1].trim();
   }
 }
 if(utag.isCarCO() && utag_data["checkout.cartTotal.netValue"] == undefined && jQuery("#base_price") != undefined)
 {
   var netValue = jQuery("#base_price").text();
   if(netValue.indexOf("$") > -1){
     utag_data["checkout.cartTotal.netValue"] = netValue.split("$")[1].trim();
     utag_data["entity.checkout.cartTotal.netValue"] = netValue.split("$")[1].trim();
   }
 }
 if(utag.isCarCO() && utag_data["checkout.cartTotal.taxesAndFees"] == undefined && jQuery("#taxes_value") != undefined)
 {
   var taxesAndFees = jQuery("#taxes_value").text();
   if(taxesAndFees.indexOf("$") > -1){
     utag_data["checkout.cartTotal.taxesAndFees"] = taxesAndFees.split("$")[1].trim();
     utag_data["entity.checkout.cartTotal.taxesAndFees"] = taxesAndFees.split("$")[1].trim();
   }
 }
 if((utag.isCarCO() || utag.isLXCO()) && utag_data["entity.checkout.cartTotal.currency"] == undefined )
 {
   utag_data["entity.checkout.cartTotal.currency"] = utag_data["entity.checkout.currency"];
 }
 if((utag.isCarCO() || utag.isLXCO()) && utag_data["pageInfo.authInfo.rewardsStatus.membershipTier"] == undefined){
 utag_data["pageInfo.authInfo.rewardsStatus.membershipTier"] = utag_data["rewardsStatus.membershipTier"]; 
}
 **/