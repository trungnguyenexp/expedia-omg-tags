b['pricePerDay'] = '';
if (utag.isCarCO())
{
    var pricePerDay = b['entity.tripDetails.carInfo.pricePerDay'];
    if (!('string' == typeof pricePerDay && pricePerDay.trim().length > 0))
    {
        pricePerDay = b['entity.checkout.car.pricePerDay'];
    }
    b['pricePerDay'] = pricePerDay;
}

/** old
 utag_data['pricePerDay'] = '';
 if (utag.isCarCO())
 {
     var pricePerDay = utag_data['entity.tripDetails.carInfo.pricePerDay'];
     if (!('string' == typeof pricePerDay && pricePerDay.trim().length > 0))
     {
         pricePerDay = utag_data['entity.checkout.car.pricePerDay'];
     }
     utag_data['pricePerDay'] = pricePerDay;
 }
 **/