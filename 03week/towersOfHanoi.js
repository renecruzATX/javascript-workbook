'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

const movePiece = (startStack, endStack) => {
  //use push and pop to move the pieces from stack to stack
  return stacks[endStack.toString()].push(stacks[startStack.toString()].pop());
}

//a legal move in towersOfHanoi can only be made if there is an empty stack or if
//the destPiece is larger than the startPiece
const isLegal = (startStack, endStack) => {
  // Use length to find the end element in each array to compare against and check if legal move
  const startPiece = stacks[startStack.toString()][stacks[startStack.toString()].length-1];
  const destPiece = stacks[endStack.toString()][stacks[endStack.toString()].length-1];

  //The startPiece can move to an empty stack or on top of a destPiece that is larger
  return stacks[endStack.toString()].length === 0 || startPiece < destPiece;

}

//Win state for towersOfHanoi means stack b = [4,3,2,1]
const checkForWin = () => {
  //We will join stack b and check if it's equal to the winning joined string
  return stacks['b'].join('') === '4321';
}

//resets the stacks to the beginning state to start over
const resetGame = () => {
  stacks = {a: [4, 3, 2, 1], b: [],c: []};
}

const towersOfHanoi = (startStack, endStack) => {
  if (startStack === 'reset') {
    resetGame();
  }else {
    //check if move is legal before moving on
    if (isLegal(startStack, endStack)) {
      //If the move is legal go ahead and run movePiece function
      movePiece(startStack, endStack);
    }else {
      //Let the user know to make only legal moves and do nothing else
      console.log('Moves can only be made to an empty stack or on top of a larger piece');
    }

    if (checkForWin()) {
      console.log('YOU WIN!!!!!!  Please type "reset" into start stack: if you want to play again');
    }
  }
};

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });
  describe('#resetGame()', () => {
    it('should reset the stacks', () => {
      stacks = {a: [4, 3, 2, 1], b: [],c: []};
      assert.equal(resetGame(), true);
    });
  });
} else {

  getPrompt();

}
