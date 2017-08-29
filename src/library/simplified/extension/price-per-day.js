b['pricePerDay'] = '';
if (utag.isCarCO()) {
    if(typeof b['entity.checkout.car.carCategoryNameLocalized'] !== "undefined" || typeof b.entity.checkout.cars[0].carCategoryNameLocalized !== "undefined") {
        var pricePerDay = typeof b['entity.checkout.car.carCategoryNameLocalized'] ? b['entity.checkout.car.carCategoryNameLocalized'] : b.entity.checkout.cars[0].carCategoryNameLocalized;
            if (!('string' == typeof pricePerDay && pricePerDay.trim().length > 0)) {
                pricePerDay = b['entity.checkout.car.pricePerDay'];
        }
    b['pricePerDay'] = pricePerDay;
} 
}