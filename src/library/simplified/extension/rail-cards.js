if(utag.isRailSearchResults()) {
 var cards = "";
 if(b.entity.railSearch.searchParameters.cardOptions.length != undefined) 
 {
 	var count = b.entity.railSearch.searchParameters.cardOptions.length;
	for (var i =0;i<count;i++) {
	   cards = cards + b.entity.railSearch.searchParameters.cardOptions[i].type + "|";
    }
 }
}
b['railCards'] = cards;