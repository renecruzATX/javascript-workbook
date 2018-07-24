'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

  //3. Compare User1 input to User2 input. (if else) (Combine hand1 and hand 2)
  const combinedHands = hand1 + hand2;
  //Create a switch statement that evaluates each case using the combined user inputs
  switch (combinedHands) {
    //If User1 input and User2 input are equal, it's a tie.
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      console.log(`It's a tie.`);
      break;

      //If User1 input is 'rock' and User2 input is 'scissor', User1 wins.
      //If User1 input is 'paper' and User2 input is 'rock', User1 wins.
      //If User1 input is 'scissors' and User2 input is 'paper', User1 wins.
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      console.log('Hand 1 wins!');
      break;


      //If User1 input is 'rock' and User2 input is 'paper', User2 wins.
      //If User1 input is 'paper' and User2 input is 'scissors', User2 wins.
      //If User1 input is 'scissors' and User2 input is 'rock', User2 wins.
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      console.log('Hand 2 Wins');
      break;

    default:
      console.log('Please check spelling and try again. All lowercase letters please. (rock, paper, or scissors)');

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
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}