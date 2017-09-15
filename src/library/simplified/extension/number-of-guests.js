    b['numberOfGuests'] = '';
    if (utag.isHSR() && b['entity.hotels.search.hotelParameters.numberOfGuests'])
    {
        b['numberOfGuests'] = b['entity.hotels.search.hotelParameters.numberOfGuests'];
    }
    if (utag.isRailSearchResults() && (b.entity.railSearch.searchResults.railLegs[0].railOfferItems[0].travelers.length != undefined))
    {
        b['numberOfGuests']  = b.entity.railSearch.searchResults.railLegs[0].railOfferItems[0].travelers.length;
    }
    else if (utag.isHIS() && b['entity.hotels.listOfHotels.0.numberOfGuests'])
    {
        b['numberOfGuests'] = b['entity.hotels.listOfHotels.0.numberOfGuests'];
    }
    else if ((utag.isHCO() || utag.isPCO()) && b['entity.checkout.hotel.numberOfGuests'])
    {
        b['numberOfGuests'] = b['entity.checkout.hotel.numberOfGuests'];
    }
    else if (utag.isPPymt() && b['entity.checkout.hotels.0.numberOfGuests'])
    {
        b['numberOfGuests'] = b['entity.checkout.hotels.0.numberOfGuests'];
    }
    else if (utag.isPTP() && b['entity.checkout.hotel.numberOfGuests'])
    {
        b['numberOfGuests'] = b['entity.checkout.hotel.numberOfGuests'];
    }
    else if (utag.isPSR() || utag.isPSR_FH_Responsive() || utag.isPIS_FH() || utag.isPSR_F_Responsive())
    {
        if (b['entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms.0.adultsCount']
            || b['entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms.0.seniorsCount']
            || b['entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms.0.childrenCount'])
        {
            b['numberOfGuests'] = getTotal(
                'entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms.0.adultsCount',
                'entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms.0.seniorsCount',
                'entity.packageFHSearch.packageFHSearchParameters.packageTravelersPerRooms.0.childrenCount');
        }
        else if (b.entity.packageSearch && b.entity.packageSearch.packageSearchParameters
            && Array.isArray(b.entity.packageSearch.packageSearchParameters.travelers)
            && b.entity.packageSearch.packageSearchParameters.travelers.length > 0)
        {
            var hotelCount = b.entity.packageSearch.packageSearchParameters.travelers.length;
            var totalGuest = 0;
            for (var i = 0; i < hotelCount; i++)
            {

                totalGuest = totalGuest + getTotal(
                        'entity.packageSearch.packageSearchParameters.travelers.' + i + '.numberOfAdults',
                        'entity.packageSearch.packageSearchParameters.travelers.' + i + '.numberOfSeniors',
                        'entity.packageSearch.packageSearchParameters.travelers.' + i + '.numberOfChildren');
            }
            b['numberOfGuests'] = totalGuest;
        }
    }
    else if (utag.isPIS())
    {
        // FH / FHC
        if (b['entity.hotels.listOfHotels.0.numberOfGuests'])
        {
            b['numberOfGuests'] = b['entity.hotels.listOfHotels.0.numberOfGuests'];
        }
        else if (b['entity.packageSearch.packageSearchParameters.travelers.0.numberOfAdults']
            && b['entity.packageSearch.packageSearchParameters.travelers.0.numberOfSeniors']
            && b['entity.packageSearch.packageSearchParameters.travelers.0.numberOfChildren'])
        {
            // FHC (Experiment?)
            b['numberOfGuests'] = getTotal(
                'entity.packageSearch.packageSearchParameters.travelers.0.numberOfAdults',
                'entity.packageSearch.packageSearchParameters.travelers.0.numberOfSeniors',
                'entity.packageSearch.packageSearchParameters.travelers.0.numberOfChildren');
        }
    }
    else if (utag.isFSR())
    {
        if (b['entity.flightSearch.travelers.numberOfAdults']
            || b['entity.flightSearch.travelers.numberOfChildren']
            || b['entity.flightSearch.travelers.numberOfInfantsInLap']
            || b['entity.flightSearch.travelers.numberOfSeniors']
            || b['entity.flightSearch.travelers.numberOfInfantsInSeat'])
        {
            b['numberOfGuests'] = getTotal(
                'entity.flightSearch.travelers.numberOfAdults',
                'entity.flightSearch.travelers.numberOfChildren',
                'entity.flightSearch.travelers.numberOfInfantsInLap',
                'entity.flightSearch.travelers.numberOfSeniors',
                'entity.flightSearch.travelers.numberOfInfantsInSeat');
        }
    }
    else if (utag.isFRateDetails())
    {
        if (b['entity.flight.travelerInfo.numberOfAdults']
            || b['entity.flight.travelerInfo.numberOfSeniors']
            || b['entity.flight.travelerInfo.numberOfChildren'])
        {
            b['numberOfGuests'] = getTotal(
                'entity.flight.travelerInfo.numberOfAdults',
                'entity.flight.travelerInfo.numberOfSeniors',
                'entity.flight.travelerInfo.numberOfChildren');
        }
    } else if (utag.isPRateDetails() && b['entity.tripDetails.travelersInfo.totalNumberOfTravelers'])
    {
        b['numberOfGuests'] = b['entity.tripDetails.travelersInfo.totalNumberOfTravelers'];
    }
    else if (utag.isRailRateDetails() && b['entity.railSearch.railDetail.railLegs.0.railOfferItems.0.travelers.0.count'])
    {
        var numberOfGuests = 0;
        for(var guest = 0 ; guest < b.entity.railSearch.railDetail.railLegs.get(0).railOfferItems.get(0).travelers.length; guest++){
            numberOfGuests += b.entity.railSearch.railDetail.railLegs.get(0).railOfferItems.get(0).travelers.get(guest).count ;
        }
        b['numberOfGuests'] = numberOfGuests;
    }
    else if (utag.isFCO())
    {
        if (b['entity.checkout.flightOffer.travelersInfo.numberOfAdults']
            || b['entity.checkout.flightOffer.travelersInfo.numberOfChildren']
            || b['entity.checkout.flightOffer.travelersInfo.numberOfInfantsInLap']
            || b['entity.checkout.flightOffer.travelersInfo.numberOfInfantsInSeat']
            || b['entity.checkout.flightOffer.travelersInfo.numberOfSeniors'])
        {
            b['numberOfGuests'] = getTotal(
                'entity.checkout.flightOffer.travelersInfo.numberOfAdults',
                'entity.checkout.flightOffer.travelersInfo.numberOfChildren',
                'entity.checkout.flightOffer.travelersInfo.numberOfInfantsInLap',
                'entity.checkout.flightOffer.travelersInfo.numberOfInfantsInSeat',
                'entity.checkout.flightOffer.travelersInfo.numberOfSeniors');
        }
    }
    else if ((utag.isLXPymt() || utag.isLXCO()) && b.entity.checkout && b.entity.checkout.activities.length > 0) {
        var totalGuest = 0;
        for (var i = 0; i < b.entity.checkout.activities.length; i++) {
            if (b.entity.checkout.activities[i].travelerInfo.totalNumberOfTravelers) {
                totalGuest += b.entity.checkout.activities[i].travelerInfo.totalNumberOfTravelers;
            }
        }
        b['numberOfGuests'] = totalGuest;
    }
	else if (utag.isCruiseCabinN() && b['entity.cruise.traveler.totalNumberOfTravelers'])
    {
        b['numberOfGuests'] = b['entity.cruise.traveler.totalNumberOfTravelers'];
    }
	else if (utag.isCruisePymt())
	{
        if (b['entity.checkout.cruise.traveler.numberOfAdults']
            || b['entity.checkout.cruise.traveler.numberOfSeniors']
            || b['entity.checkout.cruise.traveler.numberOfChildren'])
        {
            b['numberOfGuests'] = getTotal(
                'entity.checkout.cruise.traveler.numberOfAdults',
                'entity.checkout.cruise.traveler.numberOfSeniors',
                'entity.checkout.cruise.traveler.numberOfChildren');
            b['numberOfGuestsForCruise'] = b['numberOfGuests'];
        }
    }
    else if (utag.isCruiseCO())
    {
        if (b['entity.checkout.cruise.traveler.numberOfAdults']
            || b['entity.checkout.cruise.traveler.numberOfSeniors']
            || b['entity.checkout.cruise.traveler.numberOfChildren'])
        {
            b['numberOfGuests'] = getTotal(
                'entity.checkout.cruise.traveler.numberOfAdults',
                'entity.checkout.cruise.traveler.numberOfSeniors',
                'entity.checkout.cruise.traveler.numberOfChildren');
            b['numberOfGuestsForCruise'] = b['numberOfGuests'];
        }
    }
    else if (utag.isMCO()) {
        if (b['entity.checkout.hotels.0.numberOfGuests'] != undefined) {
            b['numberOfGuests'] = b['entity.checkout.hotels.0.numberOfGuests'];
        } else if (b['entity.checkout.flightOffers.0.travelersInfo.numberOfAdults']
            || b['entity.checkout.flightOffers.0.travelersInfo.numberOfChildren']
            || b['entity.checkout.flightOffers.0.travelersInfo.numberOfInfantsInLap']
            || b['entity.checkout.flightOffers.0.travelersInfo.numberOfInfantsInSeat']
            || b['entity.checkout.flightOffers.0.travelersInfo.numberOfSeniors'])
        {
            b['numberOfGuests'] = getTotal(
                'entity.checkout.flightOffers.0.travelersInfo.numberOfAdults',
                'entity.checkout.flightOffers.0.travelersInfo.numberOfChildren',
                'entity.checkout.flightOffers.0.travelersInfo.numberOfInfantsInLap',
                'entity.checkout.flightOffers.0.travelersInfo.numberOfInfantsInSeat',
                'entity.checkout.flightOffers.0.travelersInfo.numberOfSeniors');
        }
    }
    else if (utag.isPCF()) {
            if (typeof b['entity.multiItemSearch.multiItemSearchParameters.travelers.0.numberOfAdults'] !== undefined
             && typeof b['entity.multiItemSearch.multiItemSearchParameters.travelers.0.numberOfChildren'] !== undefined
             && typeof b['entity.multiItemSearch.multiItemSearchParameters.travelers.0.numberOfInfantsInLap'] !== undefined
             && typeof b['entity.multiItemSearch.multiItemSearchParameters.travelers.0.numberOfInfantsInSeat'] !== undefined) {
                b['numberOfGuests'] = getTotal(
                    'entity.multiItemSearch.multiItemSearchParameters.travelers.0.numberOfAdults',
                    'entity.multiItemSearch.multiItemSearchParameters.travelers.0.numberOfChildren',
                    'entity.multiItemSearch.multiItemSearchParameters.travelers.0.numberOfInfantsInLap',
                    'entity.multiItemSearch.multiItemSearchParameters.travelers.0.numberOfInfantsInSeat');
            }
    }

    function getTotal()
    {
        var total = 0;
        for (var i = 0; i < arguments.length; i++)
        {
            var key = arguments[i];
            if (key && !isNaN(b[key]))
            {
                total += parseInt(b[key]);
            }
        }
        return total;
    }
