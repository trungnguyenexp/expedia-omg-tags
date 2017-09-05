b['pricePerDay'] = '';
var pricePerDay = '';
if (utag.isCarCO()) {
    if(typeof b['entity.tripDetails.carInfo.pricePerDay'] !== "undefined") {
        pricePerDay = b['entity.tripDetails.carInfo.pricePerDay'];
    } else if(typeof b['entity.checkout.car.pricePerDay'] !== "undefined") {
        pricePerDay = typeof b['entity.checkout.car.pricePerDay'] 
    }else if(typeof b.entity.checkout.cars[0].pricePerDay !== "undefined") {
        pricePerDay = b.entity.checkout.cars[0].pricePerDay;
    }
    if (!('string' == typeof pricePerDay && pricePerDay.trim().length > 0)) {
        pricePerDay = b['entity.checkout.car.pricePerDay'];
    } 
    b['pricePerDay'] = pricePerDay;
}
if (utag.isCarUDP() && typeof utag_data["entity.carDetails.pricePerDay"] !== undefined) {
    utag_data['pricePerDay'] = utag_data["entity.carDetails.pricePerDay"];
}