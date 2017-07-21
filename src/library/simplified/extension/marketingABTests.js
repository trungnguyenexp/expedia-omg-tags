var ABTestExpVals='';
var expIds = '';
var tpid = utag_data['context.site.tpid'];
var eapid = utag_data['context.site.eapid'];
var guid = utag_data['guid'];
var siteName = utag_data['context.site.siteName'];
if (typeof utag_data['marketingABTests'] !== "undefined") {
    expIds = utag_data['marketingABTests'].split(",");
}
var counter=expIds.length;
for(var index=0; index<counter; index++) {
  (function(getId) {
   var xhttp = new XMLHttpRequest();
   xhttp.open('GET', 'https://'+siteName+'/api/bucketing/v1/evaluateExperimentsAndLog?guid='+guid+'&tpid='+tpid+'&eapid='+eapid+'&id='+getId+'', true);
   xhttp.timeout = 2000;
   xhttp.onload = function () {
    var status = xhttp.status;
    if (status === 200) {
      var data = JSON.parse(xhttp.responseText);
      if (data.evaluatedExperiments.length > 0) {
        ABTestExpVals += data.evaluatedExperiments[0].id + "." + data.evaluatedExperiments[0].value + "|" ;
      }
    }
    counter--;
    if(counter == 0){
        finalABTestsVals(ABTestExpVals);
    }
   };
   xhttp.send();
   xhttp.ontimeout = function (e) {
     counter--;
     if(counter == 0){
        finalABTestsVals(ABTestExpVals);
     }
   };
   })(expIds[index])
}
function finalABTestsVals(ABTestExpVals){
   utag_data['ABTestsExpValues']=ABTestExpVals;
}