
b['loggedUser'] = 'Guest';
if (b['context.user.tuid'] && 0 !== b['context.user.tuid'].length && "-1" != b['context.user.tuid'])
{
    b['loggedUser'] = 'Logged User';
}
/** old
 utag_data['loggedUser'] = 'Guest';
 if (utag_data['context.user.tuid'] && 0 !== utag_data['context.user.tuid'].length && "-1" != utag_data['context.user.tuid'])
 {
   utag_data['loggedUser'] = 'Logged User';
 }
 **/