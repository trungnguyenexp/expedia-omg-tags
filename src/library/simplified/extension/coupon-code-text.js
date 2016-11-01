if (b['entity.checkout.coupon.couponCodeText'])
{
    b['checkout.coupon.couponCodeText'] = b['entity.checkout.coupon.couponCodeText'];

    if ('0' == b['entity.checkout.coupon.couponCodeText']
        && b['entity.checkout.coupon.couponName']
        && b['entity.checkout.coupon.couponName'].trim().length > 0)
    {
        b['checkout.coupon.couponCodeText'] = b['entity.checkout.coupon.couponName'];
    }
}


/** old
 if (utag_data['entity.checkout.coupon.couponCodeText'])
 {
     utag_data['checkout.coupon.couponCodeText'] = utag_data['entity.checkout.coupon.couponCodeText'];

     if ('0' == utag_data['entity.checkout.coupon.couponCodeText']
         && utag_data['entity.checkout.coupon.couponName']
         && utag_data['entity.checkout.coupon.couponName'].trim().length > 0)
     {
         utag_data['checkout.coupon.couponCodeText'] = utag_data['entity.checkout.coupon.couponName'];
     }
 }
 **/