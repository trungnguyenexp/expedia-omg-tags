b['isVacationRental'] = '';

if (utag.isHSR() && b['entity.hotels.results.results.0.vacationRental'] != undefined) {
	b['isVacationRental'] = b['entity.hotels.results.results.0.vacationRental'];
}
else if (utag.isHIS() && b['entity.hotels.listOfHotels.0.vacationRental'] != undefined) {
	b['isVacationRental'] = b['entity.hotels.listOfHotels.0.vacationRental'];
}
else if ((utag.isHPymt() || utag.isHCO()) && b['entity.checkout.hotel.vacationRental' != undefined]) {
	b['isVacationRental'] = b['entity.checkout.hotel.vacationRental'];
}
