'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const checker = () => {

}
//this class creates Player 1 & 2 and their symbols
class Checker {
  constructor(player, symbol) {
    this.player = player;
    this.symbol = symbol;
  }
}
//new instances of Checker
const player1 = new Checker('Black', 'B');
const player2 = new Checker('Red', 'R');
//we will use playerTurn to decide who goes next
let playerTurn = player1.player;

class Board {
  constructor() {
    this.grid = []
    this.checkers = [];
  }
  // method that creates an 8x8 array, filled with null values, this is where the player pieces will be added
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  //This method is essentially the face of the grid. It joins all the arrays that are created prints out a big string
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column]);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }
  //this method loads up the board with the players pieces. It is called in the game.start() method under the Game class
  startGrid() {
    //Player 1 positions
    for (let blackRow = 0; blackRow < 8; blackRow++) {
      //If the row is even and less than 3 then a B is added to the odd index of that array
      if (blackRow % 2 === 0 && blackRow < 3) {
        for (let blackColumn = 0; blackColumn < 8; blackColumn++) {
          if (blackColumn % 2 !== 0) {
            this.grid[blackRow][blackColumn] = player1.symbol;
            this.checkers.push(player1);
          }
        }
        //If the row is odd and less than 3 then a B is added to the even index of that array
      } else if (blackRow % 2 !== 0 && blackRow < 3) {
        for (let blackColumn = 0; blackColumn < 8; blackColumn++) {
          if (blackColumn % 2 == 0) {
            this.grid[blackRow][blackColumn] = player1.symbol;
            this.checkers.push(player1);
          }
        }
      }
    }
    //Player 2 positions
    for (let redRow = 0; redRow < 8; redRow++) {
      //If the row is even and greater than 4 place an R in the odd index of that array
      if (redRow % 2 === 0 && redRow > 4) {
        for (let redColumn = 0; redColumn < 8; redColumn++) {
          if (redColumn % 2 !== 0) {
            this.grid[redRow][redColumn] = player2.symbol;
            this.checkers.push(player2);
          }
        }
        //if the row is odd and greater than 4 place an r in the even index of that array
      } else if (redRow % 2 !== 0 && redRow > 4) {
        for (let redColumn = 0; redColumn < 8; redColumn++) {
          if (redColumn % 2 == 0) {
            this.grid[redRow][redColumn] = player2.symbol;
            this.checkers.push(player2);
          }
        }
      }
    }
  }
}

class Game {
  constructor() {
    this.board = new Board;
  }

  start() {
    this.board.createGrid();
    this.board.startGrid();

  }

  //this method takes in the coordinates of the start piece and the destination of that piece
  moveChecker(whichPiece, toWhere) {
    //keeping track of the score
    const redPieces = this.board.checkers.filter((red) => {
      return red['symbol'] === 'R';
    });
    const blackPieces = this.board.checkers.filter((black) => {
      return black['symbol'] === 'B';
    });
    //splitting whichPiece and toWhere to arrays so I can use the coordinates easier.
    //first coordinate in the arrays is row and second is column.
    const startPiece = whichPiece.toString().split('');
    const destination = toWhere.toString().split('');
    //checks if the piece and the destination are somewhere on the board
    const legalPiece = (startPiece, destination) => {
      const legalStart = startPiece.every((item) => item >= 0 && item <= 7);
      const legalDest = destination.every((item) => item >= 0 && item <= 7);
      return legalStart && legalDest;
    };
    // this checks if there is a legal move or jump. Each move is a multiple of 9 or 11 with original inputs from user.
    const legalMove = (whichPiece, toWhere) => {
      //checks if a normal move is legal and if the current player is moving the right way
      if (playerTurn = player1.player) {
        return (toWhere - whichPiece) === 11 || (toWhere - whichPiece) === 9;
      } else if (playerTurn = player2.player) {
        return (toWhere - whichPiece) === -11 || (toWhere - whichPiece) === -9;
        //checks if there is a legal jump, current player is moving the right way, and if there is a piece to jump
      } else if (playerTurn = player1.player) {
        return ((toWhere - whichPiece) === 22 || (toWhere - whichPiece) === 18) &&
          (this.board.grid[destination[0] - 1][destination[1] - 1] || this.board.grid[destination[0] - 1][destination[1] + 1]);
      } else if (playerTurn = player2.player) {
        return ((toWhere - whichPiece) === -22 || (toWhere - whichPiece) === -18) &&
          (this.board.grid[destination[0] + 1][destination[1] - 1] || this.board.grid[destination[0] + 1][destination[1] + 1]);
      }

    };
    const checkForWin = () => blackPieces === 0 || redPieces === 0;

    if (legalPiece(startPiece, destination) && legalMove(whichPiece, toWhere)) {
      //0=row 1=column
      this.board.grid[destination[0]][destination[1]] = this.board.grid[startPiece[0]][startPiece[1]];
      this.board.grid[startPiece[0]][startPiece[1]] = null;
      if (playerTurn = player1.player) {
        playerTurn = player2.player
      } else if (playerTurn = player2.player) {
        playerTurn = player1.player
      }
    } else {
      console.log('Illegal Move! Try again.')
    }

    if (checkForWin()) {
      console.log(playerTurn + ' wins!')
      game.board.viewGrid();
      process.exit(0);
    }
  }
}



function getPrompt() {
  game.board.viewGrid();
  console.log(playerTurn + "'s Turn");
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();

// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}