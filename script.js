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
    gameBoard.createBoard(3, 3);
    const player1 = createPlayer("Dec", "X");
    const player2 = createPlayer("John Toe", "O");

    //who's go is it?
    //place a counter down (current player)
    //check if there's a winner
    
    //repeat until winner

    //return { player1, player2 }
})();

// 

/*
Current Task:
Focus on getting a working game in the console first. Make sure you include logic that checks for when the game is over! You should be checking for all winning 3-in-a-rows and ties.

Call functions and pass arguments to them to play the game yourself and check if everything is working as intended.
*/