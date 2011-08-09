$('script.gpcconverter').append('<div id="converter-field" ><textarea rows="20" cols="70" id="profile"></textarea><textarea rows="20" cols="70" id="converted_profile"></textarea></div>;');
$('#converter-field').append('<button id="convert">Convert</button>');
$('#convert').live('click', convert);
function convert(){
	str = $('#profile').val();
	str.replace(/gatherprofil/,"Gatherprofile");
	str.replace(/waypoints/,"Waypoints_Normal");
	str.replace(/townwaypoints/,"Waypoints_Vendor");
	str.replace(/blacklistednodes/,"BadNodes");
	$('#converted_profile').val(str);
}