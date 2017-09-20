b['lob.domain'] = '';
if (typeof b['domain'] != "undefined") {
    if (b['domain'].indexOf("MULTIITEM") !== -1) {
        if (b.entity.productTypes.length > 1) {
            b['lob.domain'] = "PACKAGE";
            b['lobDomain'] = "PACKAGE";
        } else if (b.entity.productTypes.length == 1) {
            switch (b.entity.productTypes[0]) {
                case "CAR":
                    b['lob.domain'] = "CAR";
                    b['lobDomain'] = "CAR";
                    break;
                case "LX":
                    b['lob.domain'] = "LX";
                    b['lobDomain'] = "LX";
                    break;
            }
        }
    } else {
        b['lob.domain'] = b['domain'];
        b['lobDomain'] = b['domain'];
    }
} else if (utag.is3pp()) {
    if (b['entity.checkout.lobType'].indexOf("3p") !== -1) {
        b['lob.domain'] = "3pp";
    } else {
        b['lob.domain'] = b['entity.checkout.lobType'];
    }
}