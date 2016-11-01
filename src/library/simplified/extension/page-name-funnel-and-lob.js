var pageName = '';

if(b["pageInfo.pageName"] != undefined){
    pageName = b["pageInfo.pageName"];
}else if( b.pageInfo.pageName !=undefined){
    pageName = b.pageInfo.pageName;
}

if(pageName.indexOf(',') > -1){
    var pageNameSplit = pageName.split(',');
    if(pageNameSplit.length >= 3){
        b["pageName.funnel"] = pageNameSplit[pageNameSplit.length -1];
        b["pageName.lob"] = pageNameSplit[pageNameSplit.length - 2];
    }
}

/** old
 var pageName = '';

 if(utag_data["pageInfo.pageName"] != undefined){
  pageName = utag_data["pageInfo.pageName"];
}else if( utag_data.pageInfo.pageName !=undefined){
  pageName = utag_data.pageInfo.pageName;
}

 if(pageName.indexOf(',') > -1){
  var pageNameSplit = pageName.split(',');
  if(pageNameSplit.length >= 3){
    utag_data["pageName.funnel"] = pageNameSplit[pageNameSplit.length -1];
    utag_data["pageName.lob"] = pageNameSplit[pageNameSplit.length - 2];
  }
}
 **/