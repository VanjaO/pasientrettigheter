$(document).ready (function() {


function card (name, suit, value) {
this.name = name;
this.suit = suit;
this.vaue = value; }

var card = [
new card ('Ace', 'Hearts', 11),
new card ('Two', 'Hearts', 2),
new card ('Three', 'Hearts', 3),
new card ('Four', 'Hearts', 4),
new card ('Five', 'Hearts', 5),
new card ('Six', 'Hearts', 6),
new card ('Seven', 'Hearts', 7),
new card ('Eight', 'Hearts', 8),
new card ('Nine', 'Hearts', 9),
new card ('Ten', 'Hearts', 10),
new card ('Jack', 'Hearts', 11),
new card ('Queen', 'Hearts', 10),
new card ('King', 'Hearts', 10),

new card ('Ace', 'Spades', 11),
new card ('Two', 'Spades', 2),
new card ('Three', 'Spades', 3),
new card ('Four', 'Spades', 4),
new card ('Five', 'Spades', 5),
new card ('Six', 'Spades', 6),
new card ('Seven', 'Spades', 7),
new card ('Eight', 'Spades', 8),
new card ('Nine', 'Spades', 9),
new card ('Ten', 'Spades', 10),
new card ('Jack', 'Spades', 11),
new card ('Queen', 'Spades', 10),
new card ('King', 'Spades', 10),

new card ('Ace', 'Clubs', 11),
new card ('Two', 'Clubs', 2),
new card ('Three', 'Clubs', 3),
new card ('Four', 'Clubs', 4),
new card ('Five', 'Clubs', 5),
new card ('Six', 'Clubs', 6),
new card ('Seven', 'Clubs', 7),
new card ('Eight', 'Clubs', 8),
new card ('Nine', 'Clubs', 9),
new card ('Ten', 'Clubs', 10),
new card ('Jack', 'Clubs', 11),
new card ('Queen', 'Clubs', 10),
new card ('King', 'Clubs', 10),

new card ('Ace', 'Diamonds', 11),
new card ('Two', 'Diamonds', 2),
new card ('Three', 'Diamonds', 3),
new card ('Four', 'Diamonds', 4),
new card ('Five', 'Diamonds', 5),
new card ('Six', 'Diamonds', 6),
new card ('Seven', 'Diamonds', 7),
new card ('Eight', 'Diamonds', 8),
new card ('Nine', 'Diamonds', 9),
new card ('Ten', 'Diamonds', 10),
new card ('Jack', 'Diamonds', 11),
new card ('Queen', 'Diamonds', 10),
new card ('King', 'Diamonds', 10)];



var usedCards = new Array ();


functionDeal() {
for (var i=0; i <2; i++) {
hit();
}
}

function getRandom(num) {
var myNum = Math.floor(Math.random()*num);
return myNum;
}

function hit() {
var goodCard = false;
do {
var index = getRandom (52);
if (!$.inArray(index, usedCards) > -1) {
goodCard = true;
var c = deck [index];
usedCards [usedCards.length] = c;
var $d = $("<div>");
$d.addClass ("currentHand").appendeTo("#myHand");
$("<img>").appendTo ("#myHand");
$("<img>").appendTo ($d).attr('src', 'BILDER/cards/' + c.suit + '/' + c.name +
'.jpg') .fadeOut('slow') .fadeIn('slow');

}
}
while (!goodCard);
goodCard = false;
}
$("#btnDeal").click(function() {
deal ();
$(this).toggle();

});

var hand = {  cards : new Array();
currentTotal= 0;


sumCardTotal: function () {

this.currentTotal=0;
for (var i = =; i < this.cards.length; i++) {
var c = this.cards [i];
this.currentTotal += c.value;
}

$("#hdrTotal").html("Total: " + this.currentTotal);
}

});