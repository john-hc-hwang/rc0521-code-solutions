console.log('Lodash is loaded:', typeof _ !== 'undefined');

function Players(name) {
  this.name = name;
  this.hand = [];
}

function Cards(rank, suit) {
  this.rank = rank;
  this.suit = suit;
}

var playerNames = ['John', 'Brett', 'Scott', 'TJ'];
var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
var ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
var playerNamesArr = [];
var cardsArr = [];

for (var i = 0; i < playerNames.length; i++) {
  playerNamesArr.push(new Players(playerNames[i]));
}

// Constructor function names must start with CAPITAL LETTER !

for (var x = 0; x < suits.length; x++) {
  for (var y = 0; y < ranks.length; y++) {
    cardsArr.push(new Cards(ranks[y], suits[x]));
  }
}

cardsArr = _.shuffle(cardsArr);
console.log(cardsArr);

for (var a = 0; a < 2; a++) {
  playerNamesArr[0].hand.push(cardsArr[a]);
}

for (var b = 2; b < 4; b++) {
  playerNamesArr[1].hand.push(cardsArr[b]);
}

for (var c = 4; c < 6; c++) {
  playerNamesArr[2].hand.push(cardsArr[c]);
}

for (var d = 6; d < 8; d++) {
  playerNamesArr[3].hand.push(cardsArr[d]);
}

var score = 0;

for (var z = 0; z < playerNamesArr.length; z++) {
  for (var s = 0; s < 2; s++) {
    if (playerNamesArr[z].hand[s].rank === 'Ace') {
      score += 11;
    } else if (playerNamesArr[z].hand[s].rank === 'Jack' || playerNamesArr[z].hand[s].rank === 'Queen' ||
      playerNamesArr[z].hand[s].rank === 'King' || playerNamesArr[z].hand[s].rank === 10) {
      score += 10;
    } else {
      score += playerNamesArr[z].hand[s].rank;
    }
  }
  playerNamesArr[z].score = score;
  score = 0;
}

console.log(playerNamesArr);

var winnerScore = 0;
var winnerIndex;
for (var omg = 0; omg < playerNamesArr.length; omg++) {
  if (playerNamesArr[omg].score > winnerScore) {
    winnerScore = playerNamesArr[omg].score;
    winnerIndex = omg;
  }
}

console.log('Winner Winner Chicken Dinner:', playerNamesArr[winnerIndex].name, '!!!!!!');
