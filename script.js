$(document).ready (function () {
	$("span.flip-back").hide ();
	$("span.flip-front").show ();

$('div').click(function () {
		
	$("span.flip-back").toggle ();
	$("span.flip-front").toggle ();	
});

});
