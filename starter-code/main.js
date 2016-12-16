console.log("JS file is connected to HTML! Woo!");


var cards = ["queen", "queen","king","king"];
var cardsInPlay = [];

var isMatch = function(cardA, cardB) {
  if(cardA === cardB) {
    return alert("You've found a match!");
  } else {
    return alert("Try Again");
  }
};

var isTwoCards = function(){
  cardsInPlay.push(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = "<img src='king.png' alt='king'>";
  } else {
    this.innerHTML = "<img src='queen.png' alt='queen'>";
  }
  if (cardsInPlay.length === 2){
    isMatch(cardsInPlay[0],cardsInPlay[1]);
    cardsInPlay = [];
  }
};


var createCards = function () {
  var currentCard = document.createElement('div');
  currentCard.className = 'card';
  return currentCard;
};

var createBoard = function(){
  var myBoard = document.getElementById('game-board');
  for (var i =0; i < cards.length; i++){
    var cardElement = createCards();
    cardElement.setAttribute('data-card',cards[i]);
    cardElement.addEventListener("click",isTwoCards);
    myBoard.appendChild(cardElement);
  }
};
var removeCards = function(){
  var allCards = document.getElementsByClassName('card');
  if (cardsInPlay.length === 0){
    for (var i =0; i < allCards.length; i++) {
      allCards[i].innerHTML = "";
  }
}
};
createBoard();
setInterval( removeCards,1000);

// var myBoard = document.getElementById('game-board');
// for (var i = 0; i < cards.length; i++) {
//   var thisCard = createCards();
//   myBoard.appendChild(thisCard);
// }
