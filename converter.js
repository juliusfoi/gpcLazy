str = $('profile').val();
str.replace(/gatherprofil/,"Gatherprofile");
str.replace(/waypoints/,"Waypoints_Normal");
str.replace(/townwaypoints/,"Waypoints_Vendor");
str.replace(/blacklistednodes/,"BadNodes");
$('converted_profile').val(str);