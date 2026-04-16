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
                console.log(`cell added at row ${i}, column ${j}`);
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
    const token = playerToken;

    const setName = (newName) => {
        name = newName
    };

    const getName = () => {
        return name;
    };

    const getToken = () => {
        return token;
    };

    return { getName, setName, getToken }
}

const gameState = (() => {
    /*
    This is used to control the state of the game, and handles the game's logic.
    Inside the state, we manipulate the board, place down tokens and switch turns.
    */

    //First we create a gameboard, by default I'm creating a 3x3 grid.
    gameBoard.createBoard(3, 3);

    //Add some players
    const player1 = createPlayer("Dec", "X");
    const player2 = createPlayer("John Toe", "O");
    
    
    //place a counter down (current player)
    
    //re-print board

    //check if there's a winner
    
    //swap player
    let currentPlayer = player1;
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

    //return { player1, player2 }
})();

// 

/*
Current Task:
Focus on getting a working game in the console first. Make sure you include logic that checks for when the game is over! You should be checking for all winning 3-in-a-rows and ties.

Call functions and pass arguments to them to play the game yourself and check if everything is working as intended.
*/