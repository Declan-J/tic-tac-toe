// objects for Game Board, players, gameState

function Cell() {
    let value = 0;

    const getValue = () => value;
    const setToken = (token) => { value = token};
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

    const getBoard = () => board;

    return { createBoard, getBoard }
})();

function createPlayer(playerName = String, playerToken) {
    const name = playerName, token = playerToken;
    return { name, token }
}

const gameState = (() => {
    const myGame = gameBoard.createBoard(3, 3);
    const player1 = createPlayer("Dec", "X");
    const player2 = createPlayer("John Toe", "O");

    console.log(`Welcome to Tic Tac Toe!\n You're going first ${player1.name}, using the ${player1.token} token! \n And ${player2.name} is up next, with the ${player2.token} token.`)

    return { myGame, player1, player2 }
})();