// console.log("JS file is connected to HTML! Woo!")


// var cardOne = "queen";
// var	cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

// if (cardTwo === cardFour){
// 	alert("You found a match!");
// } else {
// 	alert("Sorry, try again");
// // }
var number_of_cards = 4
var board = document.getElementById('game-board');

function createCards() {
for (var i=0; i < number_of_cards; i++) { 
	var cardElement = document.createElement('div');
	cardElement.className = 'card';
	board.appendChild(cardElement);
}
};

createCards();