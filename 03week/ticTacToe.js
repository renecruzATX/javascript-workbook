'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

const printBoard = () => {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

//Create variables for the win states to check against
const xWin = 'XXX';
const oWin = 'OOO';

//Checks for all the horizontal combinations for a win. returns true or false
const horizontalWin = () => {
  const horizontal1 = board[0].join('');
  const horizontal2 = board[1].join('');
  const horizontal3 = board[2].join('');

  return ((xWin == horizontal1) || (xWin == horizontal2) || (xWin == horizontal3) ||
          (oWin == horizontal1) || (oWin == horizontal2) || (oWin == horizontal3));
}

//checks for all the vertical combinations for a win. returns true or false
const verticalWin = () => {
  const vertical1 = [board[0][0], board[1][0], board[2][0]].join('');
  const vertical2 = [board[0][1], board[1][1], board[2][1]].join('');
  const vertical3 = [board[0][2], board[1][2], board[2][2]].join('');

  return ((xWin == vertical1) || (xWin == vertical2) || (xWin == vertical3) ||
          (oWin == vertical1) || (oWin == vertical2) || (oWin == vertical3));
}

//checks for both diagonal combinations for a win. returns true or false.
const diagonalWin = () => {
  const diagonal1 = [board[0][0], board[1][1], board[2][2]].join('');
  const diagonal2 = [board[0][2], board[1][1], board[2][0]].join('');

  return ((xWin == diagonal1) || (xWin == diagonal2) ||
          (oWin == diagonal1) || (oWin == diagonal2)) ;
}

//checks all win states and returns a true or false
const checkForWin = () => {
  return horizontalWin() || verticalWin() || diagonalWin();
}

const ticTacToe = (row, column) => {
  //place an X or O in the board array according to the coordinates given by the user(row, column)
  board[row][column] = playerTurn;

  //check for win state with checkForWin
  if (checkForWin()) {
    console.log(playerTurn + ' wins!');
    printBoard();
    process.exit(0);
    //switch player if checkForWin returns false
  }else if  (playerTurn === 'X') {
    playerTurn = 'O';
  }else {
    playerTurn = 'X';
  }




}

const getPrompt = () => {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [
        [' ', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [
        ['O', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });
    it('should check for vertical wins', () => {
      board = [
        [' ', 'X', ' '],
        [' ', 'X', ' '],
        [' ', 'X', ' ']
      ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [
        ['X', 'X', 'X'],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [
        ['X', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', 'X']
      ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
