try {// Hotel ID to string
    if (typeof b['hotelId'] != 'undefined') {
        b['hotelId'] = b["hotelId"].toString();
    }

    // Create variables to save space
    var lob = typeof b['lob.domain'] != "undefined";

    b['lob.domain'] = b['lob.domain'] || "";
    var lob_s = b['lob.domain'].toString().toLowerCase();

    var pn = typeof b['utagPageName'] != "undefined";

    b['utagPageName'] = b['utagPageName'] || "";
    var pn_s = b['utagPageName'].toString().toLowerCase();

// Content ids, content types, checkin/checkout dates
// and departing/returning dates based on lob
// add old destination & origin to hotel/flight infosite page
    if (lob && lob_s.indexOf('hotel'.toLowerCase()) > -1) {
        u.map['hotelId'] = "vc.content_ids,cout.content_ids, purch.content_ids";
        u.map['checkInDate'] = "vc.checkin_date,search.checkin_date,cout.checkin_date,purch.checkin_date";
        u.map['checkOutDate'] = "vc.checkout_date,search.checkout_date,cout.checkout_date,purch.checkout_date";
        b['fb_content_type'] = ['product', 'hotel'];
        if (pn && pn_s.indexOf('search') > -1) {
            b['destination'] = b['entity.hotels.search.region']
        } else if (pn && pn_s.indexOf('infosite') > -1) {
            b['destination'] = b['entity.hotels.listOfHotels.0.hotelRegion']
        } else if (pn && pn_s.indexOf('checkout') > -1) {
            b['destination'] = b['entity.checkout.hotel.hotelRegion']
        }
    } else if (lob && lob_s.indexOf('air'.toLowerCase()) > -1) {
        u.map['city'] = "vc.destination_city,search.destination_city,purch.destination_city";
        u.map['stateProvinceCode'] = "vc.destination_region,search.destination_region,purch.destination_region";
        u.map['origin'] = "vc.origin,search.origin,purch.origin"
        b['fb_content_type'] = ['flight'];
        if(pn && pn_s.indexOf('ratedetails') > -1) {
            b['destination'] = b["entity.tripDetails.flightOffer.destinationAirportCityState"]
            b['origin'] = b["entity.tripDetails.flightOffer.originAirportCityState"]
        } else {
            b['destination'] = b['destination'];
            b['origin'] = b['entity.flightSearch.searchParameters.departureAirportCityState'];
        }
        if (pn && pn_s.indexOf('checkout') > -1) {
            b['destination'] = b["entity"]["checkout"]["flightOffer"]["destinationAirportCityState"] ? b["entity"]["checkout"]["flightOffer"]["destinationAirportCityState"] : b["entity.checkout.flightOffer.destinationAirportCityState"]
            b['origin'] = b["entity"]["checkout"]["flightOffer"]["originAirportCityState"] ? b["entity"]["checkout"]["flightOffer"]["originAirportCityState"] : b["entity.checkout.flightOffer.originAirportCityState"]
        }
    } else if (lob && lob_s.indexOf('car'.toLowerCase()) > -1) {
        u.map['city'] = "vc.destination,search.destination,cout.destination,purch.destination";
        b['fb_content_type'] = ['route'];
    } else if (lob && lob_s.indexOf('lx'.toLowerCase()) > -1) {
        u.map['activityStartDate'] = "vc.departing_departure_date,search.departing_departure_date,cout.departing_departure_date,purch.departing_departure_date";
        if (pn && pn_s.indexOf('search'.toLowerCase()) > -1) {
            u.map['firstThreeActivityIds'] = "search.content_ids"
            b['destination'] = b["entity.activities.activitySearchParameters.destination"]
        } else {
            u.map['activityId'] = "vc.content_ids,cout.content_ids,purch.content_ids"
        }
        if (pn && pn_s.indexOf('infosite') > -1) {
            b['destination'] = b["entity.activities.activityInfo.activityDetail.destination"]
        }
        b['fb_content_type'] = ['product', 'route'];
    }
    else if (pn && pn_s.indexOf('page.Packages.Infosite.Information'.toLowerCase()) > -1) {
        u.map['hotelId'] = "vc.content_ids"
    }
	else if(utag.isDestinationLandingPage()) {
        b['fb_content_type'] = ['destination'];
        u.map['regionId'] = "search.content_ids";
        u.map['state'] = "search.region";
	}

// If destination / origin are not available, send blank parameter
    b['destination'] = typeof b['destination'] != "undefined" && b['destination'] == "" ? " " : b['destination'];
    b['origin'] = typeof b['origin'] != "undefined" && b['origin'] == "" ? " " : b['origin'];

// Split hotel id for search pages
    if (pn && pn_s.indexOf('Hotel-Search'.toLowerCase()) > -1) {
        b['hotelId_array'] = b.hotelId.split("|");
    }


// Package pages

// flight + car
    if (pn && pn_s.indexOf('fc'.toLowerCase()) > -1 && pn_s.indexOf('package'.toLowerCase()) > -1) {
        b['fb_content_type'] = ['product', 'flight'];
    }

// flight + hotel
    else if (pn && (pn_s.indexOf('page.Package-Search'.toLowerCase()) > -1) || (pn_s.indexOf('fh'.toLowerCase()) > -1 && pn_s.indexOf('package'.toLowerCase()) > -1)  || (pn_s.indexOf('page.Packages.Infosite.Information'.toLowerCase()) > -1) || (pn_s.indexOf('page.Package.Checkout.Info'.toLowerCase()) > -1) || (pn_s.indexOf('page.Package.Checkout.Confirmation'.toLowerCase()) > -1)) {
        u.map['hotelId'] = "vc.content_ids,cout.content_ids, purch.content_ids";
        b['fb_content_type'] = ['product', 'hotel', 'flight'];
    }
// flight + hotel + car
    else if (pn && pn_s.indexOf('fhc'.toLowerCase()) > -1 && pn_s.indexOf('package'.toLowerCase()) > -1) {
        u.map['hotelId'] = "vc.content_ids,cout.content_ids, purch.content_ids";
        b['fb_content_type'] = ['product', 'hotel', 'flight', 'route'];
    }
// hotel + car
    else if (pn && pn_s.indexOf('hc'.toLowerCase()) > -1 && pn_s.toLowerCase().indexOf('package'.toLowerCase()) > -1) {
        u.map['hotelId'] = "vc.content_ids,cout.content_ids, purch.content_ids";
        b['fb_content_type'] = ['product', 'hotel'];
    }
    else if (utag.isMCO()) {
        b['fb_content_type'] = ['product'];

        if (b['entity.checkout.hotels.0'] != undefined) {
            b['fb_content_type'].push('hotel');
        }

        if (b['entity.checkout.cars.0'] != undefined) {
            b['fb_content_type'].push('route');
        }

        if (b['entity.checkout.flightOffers.0'] != undefined) {
            b['fb_content_type'].push('flight');
        }
    }

} catch (e) {
    utag.DB("Facebook JS Extension: "+e);
}