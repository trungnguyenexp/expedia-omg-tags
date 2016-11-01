b['outboundOperatingAirline'] = '';
b['inboundOperatingAirline'] = '';
if (utag.isFCO() || utag.isPCO())
{
    if (b['entity.checkout.flightOffer.flight.legs.0.segments.0.operatingCarrierName'] != undefined)
    {
        b['outboundOperatingAirline'] = b['entity.checkout.flightOffer.flight.legs.0.segments.0.operatingCarrierName'];
    }
    if (b['entity.checkout.flightOffer.flight.legs.1.segments.0.operatingCarrierName'] != undefined
        && 'RT' == b['entity.checkout.flightOffer.tripType'])
    {
        b['inboundOperatingAirline'] = b['entity.checkout.flightOffer.flight.legs.1.segments.0.operatingCarrierName'];
    }
}


/** old
 utag_data['outboundOperatingAirline'] = '';
 utag_data['inboundOperatingAirline'] = '';
 if (utag.isFCO() || utag.isPCO())
 {
     if (utag_data['entity.checkout.flightOffer.flight.legs.0.segments.0.operatingCarrierName'] != undefined)
     {
         utag_data['outboundOperatingAirline'] = utag_data['entity.checkout.flightOffer.flight.legs.0.segments.0.operatingCarrierName'];
     }
     if (utag_data['entity.checkout.flightOffer.flight.legs.1.segments.0.operatingCarrierName'] != undefined
         && 'RT' == utag_data['entity.checkout.flightOffer.tripType'])
     {
         utag_data['inboundOperatingAirline'] = utag_data['entity.checkout.flightOffer.flight.legs.1.segments.0.operatingCarrierName'];
     }
 }
 **/