function convert() {
    str = $('#profile').val();
    str = str.replace(/gatherprofil/gi, "Gatherprofile");
    str = str.replace(/waypoints/gi, "Waypoints_Normal");
    str = str.replace(/townwaypoints/gi, "Waypoints_Vendor");
    str = str.replace(/blacklistednodes/gi, "BadNodes");
    $('#converted_profile').val(str);
}
$('#gpcconverter').html('<div id="converter-field" ><textarea rows="20" cols="70" id="profile"></textarea><textarea rows="20" cols="70" id="converted_profile"></textarea></div>;');
$('#converter-field').append('<button id="convert">Convert</button>');
$('#convert').live('click', convert);