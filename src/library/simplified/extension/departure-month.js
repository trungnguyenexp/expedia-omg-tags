(function () {
    b['departureMonth'] = '';

    if (utag.isCruiseCO() && b['entity.checkout.cruise.isoFormatDepartureDate']) {
        b['departureMonth'] = getDepartureMonth('entity.checkout.cruise.isoFormatDepartureDate');
    }
    else if (utag.isCruiseSR() && b['entity.cruiseSearch.cruiseSearchCriteria.isoFormatEarliestDepartureDate']) {
        b['departureMonth'] = getDepartureMonth('entity.cruiseSearch.cruiseSearchCriteria.isoFormatEarliestDepartureDate');
    }
    else if ((utag.isCruiseIS() || utag.isCruiseTP() || utag.isCruiseCabinN()) && b['entity.cruise.isoFormatDepartureDate']) {
        b['departureMonth'] = getDepartureMonth('entity.cruise.isoFormatDepartureDate');
    }
    else if (utag.isRailSearchResults() && b["entity.railSearch.searchResults.isoFormatDepartureDate"] ) {
        b['departureMonth'] = getDepartureMonth('entity.railSearch.searchResults.isoFormatDepartureDate');
    }
    else if (utag.isRailRateDetails() && b["entity.railSearch.railDetail.isoFormatDepartureDate"] ) {
        b['departureMonth'] = getDepartureMonth('entity.railSearch.railDetail.isoFormatDepartureDate');
    }

    function getDepartureMonth(utagKey) {
        if (utagKey) {
            return new Date(b[utagKey]).getMonth() + 1
        }
        return '';
    }
})();
