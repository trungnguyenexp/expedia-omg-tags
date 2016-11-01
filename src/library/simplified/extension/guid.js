if (b['context.user.guid'] != undefined)
{
    b['guid'] = b['context.user.guid'];
}
else if(b.context && b.context.user){
    b['guid'] = b.context.user.guid;
}

/** old
 if (utag_data['context.user.guid'] != undefined)
 {
   utag_data['guid'] = utag_data['context.user.guid'];
 }
 **/