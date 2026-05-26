// objects for Game Board, players, gameState

function Cell() {
    let value = 0;

    const getValue = () => {
        return value;
    };
    const setToken = (token) => {
        value = token;
    };

    return { getValue, setToken }
}

const gameBoard = (() => {
    let board = [];

    const createBoard = (rows, columns) => {
        board = [];
        for (let i = 0; i < rows; i++) {
            board[i] = [];
            for (let j = 0; j < columns; j++) {
                board[i].push(Cell())
                // console.log(`cell added at row ${i}, column ${j}`);
            }
        }
        return board;
    };

    const getBoard = () => {
        return board;
    };

    return { createBoard, getBoard }
})();

function createPlayer(initialName = "Guest", playerToken) {
    let name = initialName;
    const tokenValue = (playerToken === "X") ? 1 : 2;

    const setName = (newName) => {
        name = newName
    };

    const getName = () => {
        return name;
    };

    const getToken = () => {
        return tokenValue;
    };

    return { getName, setName, getToken }
}

const gameState = (() => {
    /*
    This is used to control the state of the game, and handles the game's logic.
    Inside the state, we manipulate the board, place down tokens and switch turns.
    */

    //First we create a game board. By default we create a 3x3 grid.
    gameBoard.createBoard(3, 3);

    //Add some players
    const player1 = createPlayer("Dec", "X");
    const player2 = createPlayer("John Toe", "O");

    //Set the current player. This changes every time a move is made.
    let currentPlayer = player1;

    //Updates the board with played token.
    function placeToken(row, column) {
        const board = gameBoard.getBoard()
        const target = board[row][column];
        if (target.getValue() === 0) {
            console.log(`Setting ${currentPlayer.getName()}'s token.`)
            target.setToken(currentPlayer.getToken());
        }
        else {
            console.log("Space Occupied");
            return;
        }
    }

    //re-print board
    //debugging: print board with values
    function printBoard() {
        const board = gameBoard.getBoard();
        const boardWithValues = board.map((row) => row.map((cell) => cell.getValue()));

        console.table(boardWithValues);
    }

    //check if there's a winner
    function checkWinner() {
        //get board
        const board = gameBoard.getBoard();

        //turn rows, columns and diagonals into arrays

        let row1 = [], row2 = [], row3 = [];
        row1 = board[0].map((cell => cell.getValue())),
            row2 = board[1].map((cell => cell.getValue())),
            row3 = board[2].map((cell => cell.getValue()));
        console.log(row1, row2, row3);

        let column1 = [], column2 = [], column3 = [];
        for (let i = 0; i < 3; i++) {
            column1.push(board[i][0].getValue());
            column2.push(board[i][1].getValue());
            column3.push(board[i][2].getValue());
        }
        console.log(column1, column2, column3);


        // //check all rows match
        // if (board[0][0].getValue() === 1 && board[0][1].getValue() === 1 && board[0][2].getValue() === 1) {
        //     return console.log(`${player1.getName()} is the winner!`);
        // }
        // else if (board[1][0].getValue() === 1 && board[1][1].getValue() === 1 && board[1][2].getValue() === 1) {
        //     return console.log(`${player1.getName()} is the winner!`);
        // }
        // else if (board[2][0].getValue() === 1 && board[2][1].getValue() === 1 && board[2][2].getValue() === 1) {
        //     return console.log(`${player1.getName()} is the winner!`);
        // }
    }

    //swap player
    //Handles switching between player.
    function switchPlayer() {
        currentPlayer = (currentPlayer === player1) ? player2 : player1;
        console.log(`It's now ${currentPlayer.getName()}'s turn.`);
    }
    // (repeat until winner)

    placeToken(0, 1);
    placeToken(1, 0);
    placeToken(1, 1);
    placeToken(1, 2);
    placeToken(2, 2);
    printBoard();
    checkWinner();

    //return { player1, player2 }
})();

// 

/*
Current Task:
Focus on getting a working game in the console first. Make sure you include logic that checks for when the game is over! You should be checking for all winning 3-in-a-rows and ties.

Call functions and pass arguments to them to play the game yourself and check if everything is working as intended.
*/