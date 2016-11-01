if (/iPad|Transformer|ME173X|KOOF|Nook|IMM76D|Nexus 10|Nexus 7|Tablet|HP Slate|PG09410|PG41200|Mediapad|Kindle|Tab|Xoom|TegraNote|SCH-I800/i.test(navigator.userAgent))
{
    utag_data['device_type'] = "Tablet";
}
else if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
{
    utag_data['device_type'] = "Mobile";
}
else
{
    utag_data['device_type'] = "Desktop";
}
utag_data['device_details'] = new RegExp(/\(([^)]+)\)/).exec(navigator.userAgent)[1];