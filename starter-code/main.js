console.log("JS file is connected to HTML! Woo!");


var cardOne = "queen";
var	cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// var isMatch = function(cardA, cardB) {
//   if(cardA === cardB) {
//     return alert("You've found a match!");
//   } else {
//     return alert("Try Again");
//   }
// };
var createCards = function () {
  var currentCard = document.createElement('div');
  currentCard.className = 'card';
  return currentCard;
}

var numCards = 4;
var myBoard = document.getElementById('game-board');
for (var i = 0; i < numCards; i++){
 var thisCard = createCards();
  myBoard.appendChild(thisCard);
}
