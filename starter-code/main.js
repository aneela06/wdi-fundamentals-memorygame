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
// var number_of_cards = 4
// var board = document.getElementById('game-board');

// function createCards() {
// for (var i=0; i < number_of_cards; i++) { 
// 	var cardElement = document.createElement('div');
// 	cardElement.className = 'card';
// 	board.appendChild(cardElement);
// }
// };

// createCards();



var board = document.getElementById('game-board');
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var createBoard = function(){
 for (var i=0; i < cards.length; i++){
 	var cardElement = document.createElement('div');
 	cardElement.className = 'card';
 	cardElement.setAttribute('data-card', cards[i]);
 	cardElement.addEventListener('click',isTwoCards);
 	board.appendChild(cardElement);
 }
};

var isTwoCards = function(){
	cardsInPlay.push(this.getAttribute('data-card'));

	if (this.getAttribute('data-card') === 'king'){
		this.innerHTML = '<img src="./king.png">';
	} else {
		this.innerHTML = '<img src="./queen.png">';
	}

	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
};
var isMatch = function(cardsInPlay){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert('You found a match!');
	} else {
		alert('Sorry, try again.');
	}
	allCards = document.querySelectorAll('.card');
	for (var i = 0; i < allCards.length; i++) {
		allCards[i].innerHTML = '';
	}
};
	
createBoard();