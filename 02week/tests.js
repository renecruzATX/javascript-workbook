'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

  //3. Compare User1 input to User2 input. (if else) (Combine hand1 and hand 2)
  const combinedHands = hand1.toLowerCase().trim() + hand2.toLowerCase().trim();
  //Create a switch statement that evaluates each case using the combined user inputs
  switch (combinedHands) {
    //If User1 input and User2 input are equal, it's a tie.
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      return `It's a tie.`;
      break;

      //If User1 input is 'rock' and User2 input is 'scissor', User1 wins.
      //If User1 input is 'paper' and User2 input is 'rock', User1 wins.
      //If User1 input is 'scissors' and User2 input is 'paper', User1 wins.
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      return 'Hand 1 wins!';
      break;


      //If User1 input is 'rock' and User2 input is 'paper', User2 wins.
      //If User1 input is 'paper' and User2 input is 'scissors', User2 wins.
      //If User1 input is 'scissors' and User2 input is 'rock', User2 wins.
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      return 'Hand 2 Wins!';
      break;

    default:
      return 'Please check spelling and try again. All lowercase letters please. (rock, paper, or scissors)';

  }

}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log(rockPaperScissors(answer1, answer2));
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
      assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
      assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('ROCK', ' PAPER '), "Hand two wins!");
      assert.equal(rockPaperScissors('roCK', 'PAPER   '), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'PAPER'), "Hand two wins!");
      assert.equal(rockPaperScissors('   ROCK', 'paper    '), "Hand two wins!");
      assert.equal(rockPaperScissors(' PAPER ', ' scissors '), "Hand two wins!");
      assert.equal(rockPaperScissors('PAPer  ', 'sciSSors'), "Hand two wins!");
      assert.equal(rockPaperScissors('pAPER ', 'SCISSoRS   '), "Hand two wins!");
      assert.equal(rockPaperScissors('Scissors  ', 'Rock'), "Hand two wins!");
      assert.equal(rockPaperScissors('SCISSORS', 'ROCK'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'PAPER'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
      assert.equal(rockPaperScissors('ROCK ', 'sCiSsOrs'), "Hand one wins!");
      assert.equal(rockPaperScissors('rock ', 'SCISSORS   '), "Hand one wins!");
      assert.equal(rockPaperScissors('Paper ', 'Rock'), "Hand one wins!");
      assert.equal(rockPaperScissors(' PAper ', 'sCisSors  '), "Hand one wins!");
      assert.equal(rockPaperScissors('Scissors ', 'PAPEr'), "Hand one wins!");
      assert.equal(rockPaperScissors('sciSSORS ', 'paper  '), "Hand one wins!");
    });
    it('should check for correct spelling', () => {
      assert.equal(rockPaperScissors('rcok', 'rokc'), 'Please check spelling and try again. All lowercase letters please. (rock, paper, or scissors)');
      assert.equal(rockPaperScissors('papor', 'papar'), 'Please check spelling and try again. All lowercase letters please. (rock, paper, or scissors)');
      assert.equal(rockPaperScissors('scisors', 'scissor'), 'Please check spelling and try again. All lowercase letters please. (rock, paper, or scissors)');
    });
  });
} else {

  getPrompt();

}