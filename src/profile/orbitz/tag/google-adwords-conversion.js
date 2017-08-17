//~~tv:7117.20141231
//~~tc: Update to fix mapping logic

if(typeof utag.ut=="undefined"){
  utag.ut={};
}

utag.ut.libloader2=function(o, a, b, c, l) {
  a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=o.src;if(o.id){b.id=o.id};
  if (typeof o.cb=='function') {
    b.hFlag=0;b.onreadystatechange=function(){if((this.readyState=='complete'||this.readyState=='loaded')&&!b.hFlag){b.hFlag=1;o.cb()}};
    b.onload=function(){if(!b.hFlag){b.hFlag=1;o.cb()}}
  }
  l = o.loc || 'head';
  c = a.getElementsByTagName(l)[0];
  if (c) {
    if (l == 'script') {
      c.parentNode.insertBefore(b, c);
    } else {
      c.appendChild(b)
    }
    utag.DB("Attach to "+l+": "+o.src)
  }
}

//tealium universal tag - utag.sender.7117 ut4.0.##UTVERSION##, Copyright ##UTYEAR## Tealium.com Inc. All Rights Reserved.
try{
(function(id,loader,u){
  u=utag.o[loader].sender[id]={};
  u.ev={'view':1};
  u.initialized = false;
  u.data={};
  u.data.google_conversion_id = ##UTVARconfig_id##;
  u.data.google_conversion_language = "en";
  u.data.google_conversion_format = "3";
  u.data.google_conversion_color = "ffffff";
  u.data.google_conversion_label = "##UTVARconfig_label##";
  u.data.google_conversion_value = "##UTVARconfig_value##";
  u.data.base_url="//www.googleadservices.com/pagead/conversion_async.js";
##UTGEN##
  u.send=function(a,b){
    if(u.ev[a]||typeof u.ev.all!="undefined"){
      ##UTEXTEND##
      var c,d,e,f;
      for(d in utag.loader.GV(u.map)){if(typeof b[d]!=="undefined"&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){
        u.data[e[f]]=b[d];
      }}}
      u.data.google_conversion_id = parseInt(u.data.google_conversion_id);
      u.data.google_conversion_value = u.data.google_conversion_value || b._csubtotal;
      u.gac_callback=function(){
        window.google_trackConversion({
          google_conversion_id: u.data.google_conversion_id,
          google_conversion_language: u.data.google_conversion_language,
          google_conversion_format: u.data.google_conversion_format,
          google_conversion_color: u.data.google_conversion_color,
          google_conversion_label: u.data.google_conversion_label,
          google_conversion_value: u.data.google_conversion_value
        });
      }
      if (!u.initialized) {
        u.initialized = true;
        utag.ut.libloader2({src:u.data.base_url, cb:u.gac_callback});
      } else {
        u.gac_callback();
      }
      omg.pixel.fireTagPixel({id: id, name: 'google_adwords', label: 'GoogleAdwords', context: {u: u, b: b}});
    }
  }
  utag.o[loader].loader.LOAD(id);
})('##UTID##','##UTLOADERID##');
}catch(e){}
//end tealium universal tag

