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

    //Set the current player. Use the switchPlayer function to change this every time a move is made.
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
        const board = gameBoard.getBoard();

        //turn rows, columns and diagonals into arrays
        let row1 = [], row2 = [], row3 = [];
        row1 = board[0].map((cell => cell.getValue())),
            row2 = board[1].map((cell => cell.getValue())),
            row3 = board[2].map((cell => cell.getValue()));

        const allRows = [row1, row2, row3];
        console.log("rows")
        console.log(row1, row2, row3);

        let column1 = [], column2 = [], column3 = [];
        for (let i = 0; i < 3; i++) {
            column1.push(board[i][0].getValue());
            column2.push(board[i][1].getValue());
            column3.push(board[i][2].getValue());
        }
        console.log("columns")
        console.log(column1, column2, column3);

        let diagonals1 = [], diagonals2 = [];
        diagonals1.push(board[0][0].getValue(), board[1][1].getValue(), board[2][2].getValue())
        diagonals2.push(board[2][0].getValue(), board[1][1].getValue(), board[0][2].getValue())
        console.log("diag")
        console.log(diagonals1, diagonals2)

        //put all lines into an array to check for win/draw.
        const allLines = [row1, row2, row3, column1, column2, column3, diagonals1, diagonals2];

        //check all lines to see if all 3 values match the current player's token.
        const hasWon = allLines.some(line => (line.every(value => value === currentPlayer.getToken())));

        //If a player has won...
        if (hasWon) {
            console.log(`${currentPlayer.getName()} wins the game!`);
            return;
        }

        //Draw
        const isDraw = allLines.every(line => !line.includes(0));
        if (isDraw) {
            console.log(`It's a draw!`)
            return;
        }
    }

    //Handles switching between player.
    function switchPlayer() {
        currentPlayer = (currentPlayer === player1) ? player2 : player1;
        console.log(`It's now ${currentPlayer.getName()}'s turn.`);
    }

    placeToken(0, 1);
    placeToken(1, 0);
    placeToken(1, 1);
    switchPlayer();
    placeToken(1, 2);
    placeToken(2, 2);
    placeToken(0, 2);
    printBoard();

})();

// 

/*
Current Task:
Focus on getting a working game in the console first. Make sure you include logic that checks for when the game is over! You should be checking for all winning 3-in-a-rows and ties.

Call functions and pass arguments to them to play the game yourself and check if everything is working as intended.
*/