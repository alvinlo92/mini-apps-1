let board = [['', '', ''],
             ['', '', ''],
             ['', '', '']]

let turn = [];

const placePiece = () => {
  let row = Math.floor(event.target.id / 3);
  let column = Math.floor(event.target.id % 3)

  if (event.target.innerHTML === '') {
    if (turn.length < 9) {
      if (turn.length % 2 === 0) {
        event.target.innerHTML = 'X';
        turn.push('X');
        board[row][column] = 'X';
      } else {
        event.target.innerHTML = 'O';
        turn.push('O');
        board[row][column] = 'O';
      }
    }
  }
}

const winCheck = () => {
  if (turn.length < 9) {
    rowWinCheck();
    columnWinCheck();
    backDiagonalWinCheck();
    forwardDiagonalWinCheck();
  }
}

const rowWinCheck = () => {
  for (var i = 0; i < board.length; i++) {
    let xCounter = 0;
    let oCounter = 0;

    for (var j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'X') {
        xCounter++;
      } else if (board[i][j] === 'O') {
        oCounter++;
      }
    }

    if (xCounter === 3) {
      changeWinMessage('X');
      turn.length = 9;
      break;
    }
    if (oCounter === 3) {
      changeWinMessage('O');
      turn.length = 9;
      break;
    }
  }
}

const columnWinCheck = () => {
  for (var i = 0; i < board.length; i++) {
    let xCounter = 0;
    let oCounter = 0;

    for (var j = 0; j < board[i].length; j++) {
      if (board[j][i] === 'X') {
        xCounter++;
      } else if (board[j][i] === 'O') {
        oCounter++;
      }
    }

    if (xCounter === 3) {
      changeWinMessage('X');
      turn.length = 9;
      break;
    }
    if (oCounter === 3) {
      changeWinMessage('O');
      turn.length = 9;
      break;
    }
  }
}

const backDiagonalWinCheck = () => {
  let xCounter = 0;
  let oCounter = 0;
  for (var i = 0; i < board.length; i++) {
    if (board[i][i] === 'X') {
      xCounter++;
    } else if (board[i][i] === 'O') {
      oCounter++;
    }
  }

  if (xCounter === 3) {
    changeWinMessage('X');
    turn.length = 9;
  }
  if (oCounter === 3) {
    changeWinMessage('O');
    turn.length = 9;
  }
}

const forwardDiagonalWinCheck = () => {
  let xCounter = 0;
  let oCounter = 0;

  for (var i = 0; i < board.length; i++) {
    if (board[(board.length - 1) - i][i] === 'X') {
      xCounter++;
    } else if (board[(board.length - 1) - i][i] === 'O') {
      oCounter++;
    }
  }

  if (xCounter === 3) {
    changeWinMessage('X');
    turn.length = 9;
  }
  if (oCounter === 3) {
    changeWinMessage('O');
    turn.length = 9;
  }
}

const changeWinMessage = (value) => {
  document.getElementsByClassName('winning-message')[0].innerHTML = `Congratulations!<br>${value} won!`;
}

const resetBoard = () => {
  board = [['', '', ''],
           ['', '', ''],
           ['', '', '']];

  turn = [];

  var gameBoard = document.getElementsByClassName('game-square');
  for (var i = 0; i < gameBoard.length; i++) {
    gameBoard[i].textContent = '';
  }

  document.getElementsByClassName('winning-message')[0].innerHTML = '';
}

document.addEventListener('click', (event) => {
  if (event.target.matches('.game-square')) {
    placePiece();
    winCheck();
  }

  if (event.target.matches('.reset-board')) {
    resetBoard();
  }
})