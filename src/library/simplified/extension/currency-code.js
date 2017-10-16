
//All confirmation pages including slim.
if(b.pageInfo.pageName && b.pageInfo.pageName.indexOf("Checkout.Confirmation") > -1 && b.entity.checkout.currency){
    b['currencyCode'] = b.entity.checkout.currency;
}

