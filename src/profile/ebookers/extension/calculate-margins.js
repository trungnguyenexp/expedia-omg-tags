/*
 Outputs the following variables on the confirmation page:
 1. insurance - The amount spent on insurance
 2. insurance_margin
 3. product_margin - the margin on the product purchased
 4. main_margin - insurance_margin + main_margin
 */

if (b["pageInfo.pageName"].indexOf("Checkout.Confirmation") > -1 || b["pageInfo.pageName"].indexOf('page.Itin.Details.Booked') > -1  ) {

    if (b["entity.checkout.flightOffer.totalPrice.taxesAndFees"]) {
        b["entity.checkout.cartTotal.taxesAndFees"] = b["entity.checkout.flightOffer.totalPrice.taxesAndFees"];
    }

    //FROM DATA LAYER
    var taxes = Number(b["entity.checkout.cartTotal.taxesAndFees"]);
    var ord_tot = Number(b["entity.checkout.cartTotal.amount"]);

    if (b["entity.checkout.flightOffer.totalPrice.netValue"]) {
        b["entity.checkout.cartTotal.netValue"] = b["entity.checkout.flightOffer.totalPrice.netValue"];
    }

    var prod_val = Number(b["entity.checkout.cartTotal.netValue"]);//= total - taxes - insurance

    //CALC INSURANCE
    var insurance = ord_tot - prod_val - taxes;

    //CALC MARGIN RATES
    var insurance_margin = 0;
    var main_margin = 0;
    var margin_rate = 1;
    var lob = b["domain"] //Domain contains realm info about the product type

    switch(lob) {
        case "HOTEL":
            margin_rate = .153;
            break;
        case "AIR":
            margin_rate = .081;
            break;
        case "PACKAGE":
            margin_rate = .07;
            break;
        case "LX":
            margin_rate = .1119;
            break;
        case "CAR":
            margin_rate = .1063;
            break;
        //case "tshop":
        //    margin_rate = .1119;
        //    break;
        case "CRUISE":
            margin_rate = .0827;
            break;
    }

    //CALC INSURANCE MARGIN
    if (insurance) {
        //console.log(insurance)
        insurance_margin = insurance * .5904;
        b.insurance = insurance.toFixed(2).toString();
        b.insurance_margin = insurance_margin.toFixed(2).toString();
    }

    //CALC SUMMED MARGINS (INSURANCE + SERVICE)
    b.product_margin = (margin_rate * prod_val).toFixed(2).toString();
    b.main_margin = ((margin_rate * prod_val) + insurance_margin).toFixed(2).toString();

    if(b.product_margin == "NaN")
    {
        b.product_margin = 0;
    }
    if(b.main_margin == "NaN")
    {
        b.main_margin = 0;
    }
}