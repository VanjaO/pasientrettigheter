$(document).ready (function () {
	$(".flip.back").hide();
$(".flip-front").click(function () {
$(".flip-front").replaceWith(.flip-back);



});


});

clix += 1;
if (clix%2 == 0) {
var melding ="<p>Svaret er riktig!</p>";
$("p").replaceWith (melding);
}

function flipH () {
	$("div").hide();
	}
	
	function flipS () {
	$("div").show();
	}
	
	function quiz (q,a) {
this.question = q;
this.answer = a;
}
var question = new Array();
var answer = new Array ();


var quest1 = new quizQ (question, answer);
alert (quest1.q);
alert (quest2.a);
