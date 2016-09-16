console.log("JS file is connected to HTML! Woo!")
var cardOne = "king";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "queen";

if(cardOne === cardTwo){
  alert("You have a match!");
} else{
  alert('Sorry, try again');
};

var game = document.getElementById('game-board');

function createBoard () {

  for(var i = 0; i < cards.length; i++){
  // create div element
  var cardEl = document.createElement('div');
  //add a class to the card element
  cardEl.className = 'card';
  //append the card to the board
  board.appendChild(cardElement);
  }
};
