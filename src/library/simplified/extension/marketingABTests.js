var abTests = utag_data.context.tests;
var marketingABTests = "";

if (typeof abTests !== "undefined") {
    for (var abTest=0; abTest<abTests.length; abTest++) {
            var experimentId = utag_data.context.tests[abTest].experimentId;
            var bucketValue = utag_data.context.tests[abTest].bucketValue;
            marketingABTests += experimentId + "." + bucketValue + "|";
    }
}

utag_data['marketingABTests'] = marketingABTests;