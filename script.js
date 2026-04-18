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

function createPlayer(initialName = String, playerToken) {
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

    //swap player
    //Handles switching between player.
    function switchPlayer(player) {
        if (player === player1) {
            currentPlayer = player2;
            console.log("It's player 2's turn next.")
        }
        else if (player === player2) {
            currentPlayer = player1;
            console.log("Time to go, player 1.")
        }
    }
    // (repeat until winner)

    placeToken(0, 0);
    printBoard();
    switchPlayer(currentPlayer);
    placeToken(0, 0);
    printBoard();
    placeToken(1, 0);
    printBoard();

    //return { player1, player2 }
})();

// 

/*
Current Task:
Focus on getting a working game in the console first. Make sure you include logic that checks for when the game is over! You should be checking for all winning 3-in-a-rows and ties.

Call functions and pass arguments to them to play the game yourself and check if everything is working as intended.
*/