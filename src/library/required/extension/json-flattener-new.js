try {
    //if (b['ut.env'] === "dev") {
    //Ignore keys in the data layer that start with the following text.
    //Expecting an array of strings
    //["event","ac"]
    var ignore_keys = [];

    //Specify a prefix for data layer elements being sent to the utag_data object.
    //Instead of utag_data.productID, it could be utag_data.dl_productID
    var prefix = "";

    //In cases of a nested object, what should join the parent key and child key
    var nested_delimiter = ".";

    //*****************DO NOT MODIFY BELOW***********************

    // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    // Add the Object.keys method for older versions of IE
    if (!Object.keys) {
        Object.keys = (function () {
            'use strict';
            var hasOwnProperty = Object.prototype.hasOwnProperty,
                hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
                dontEnums = [
                    'toString',
                    'toLocaleString',
                    'valueOf',
                    'hasOwnProperty',
                    'isPrototypeOf',
                    'propertyIsEnumerable',
                    'constructor'
                ],
                dontEnumsLength = dontEnums.length;
            return function (obj) {
                if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
                    throw new TypeError('Object.keys called on non-object');
                }
                var result = [], prop, i;
                for (prop in obj) {
                    if (hasOwnProperty.call(obj, prop)) {
                        result.push(prop);
                    }
                }
                if (hasDontEnumBug) {
                    for (i = 0; i < dontEnumsLength; i++) {
                        if (hasOwnProperty.call(obj, dontEnums[i])) {
                            result.push(dontEnums[i]);
                        }
                    }
                }
                return result;
            };
        }());
    }

    function ignoreKey(key) {
        var should_ignore_key = 0;
        //Loop through the ignore_keys array to see if we should ignore this key
        for (var k = 0; k < ignore_keys.length; k++) {
            var re = new RegExp("^" + ignore_keys[k]);
            if (key.match(re)) {
                should_ignore_key = 1;
                try {
                    console.log('Ignoring key: ' + key);
                } catch (e) {
                }
            }
        }
        return should_ignore_key;
    }

    function processDataObject(obj, parent_key, create_array) {
        if (typeof parent_key === "undefined") {
            parent_key = "";
        } else {
            parent_key += "" + nested_delimiter;
        }
        Object.keys(obj).forEach(function(key) {
            var nested_key_name = parent_key + key;
            var new_key_name = (prefix + parent_key + key).replace(/\s/g, '');
            if (typeof obj[key] !== 'undefined' && obj[key] != null ) {
                if ((typeof obj[key]).match(/boolean|string|number/) && !ignoreKey(key)) {
                    if (create_array) {
                        if (typeof b[new_key_name] === "undefined") {
                            b[new_key_name] = [];
                        }
                        b[new_key_name].push(obj[key]);
                    } else {
                        b[new_key_name] = obj[key];
                    }
                    b[new_key_name] = obj[key];
                } else if (typeOf(obj[key]) === 'object' && !ignoreKey(key)) {
                    processDataObject(obj[key], nested_key_name, create_array);
                } else if (typeOf(obj[key]) === 'array') {
                    processDataArray(obj[key], nested_key_name);
                }
            }
        });
    }

    function processDataArray(obj, parent_key) {
        if (typeof parent_key === "undefined") {
            parent_key = "";
        } else {
            parent_key += "" + nested_delimiter;
        }
        var new_key_name = (prefix + parent_key).replace(/\s/g, '');
        for (var n = 0; n <= 10; n++) {
            if (typeOf(obj) === "array" && (typeof obj[n]).match(/boolean|string|number/)) {
                new_key_name = new_key_name.replace(/\.+$/, "");
                b[new_key_name] = obj;
                b[new_key_name + nested_delimiter + n] = obj[n];
            } else if ((typeof obj[n]).match(/boolean|string|number/)) {
                b[new_key_name + nested_delimiter + n] = obj[n];
            } else if (typeOf(obj[n]) === 'object') {
                Object.keys(obj[n]).forEach(function(array_key) {
                    var new_obj = obj[n];
                    array_key_name = (new_key_name + n + nested_delimiter + array_key).replace(/\s/g, '');
                    array_key_name_multiple_objects = (new_key_name + n).replace(/\s/g, '');
                    if (typeof new_obj[array_key] !== 'undefined' && new_obj[array_key] != null ) {
                        if ((typeof new_obj[array_key]).match(/boolean|string|number/) && !ignoreKey(array_key)) {
                            b[array_key_name] = new_obj[array_key];
                            b[array_key_name_multiple_objects] = obj[n];
                        } else if (typeOf(new_obj[array_key]) === 'object') {
                            processDataObject(new_obj[array_key], array_key_name, 1);
                        } else if (typeOf(new_obj[array_key]) === 'array') {
                            processDataArray(obj[n][array_key], array_key_name);
                        } else if (typeOf(new_obj[array_key]) === 'object') {
                            processDataObject(obj[n][array_key], array_key_name, 1);
                        } else if (typeOf(new_obj[array_key]) === 'array') {
                            processDataArray(new_obj[array_key], array_key_name);
                        }
                    }
                });
            }
        }
    }

    function typeOf(e) {
        return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    }

    //Go through the data layer
    if (typeOf(b) === 'array') {
        //Need to store a copy of b someplace else so that we can clean it up
        var temp_array = JSON.parse(JSON.stringify(b));
        //Clean up the b object
        b = {};
        //Add the automatic utag data points
        utag.loader.RDqp(b);
        utag.loader.RDmeta(b);
        utag.loader.RDdom(b);
        utag.loader.RDut(b, a || "view");
        utag.loader.RDpv(b);
        utag.loader.RDva(b);
        for (var i = 0; i < temp_array.length; i++) {
            processDataObject(temp_array[i]);
        }
    } else {
        processDataObject(b);
    }
    //}
} catch (e) {
    try {
        console.log('Error trying to convert data layer: ' + e);
    } catch (e) {
    }
}