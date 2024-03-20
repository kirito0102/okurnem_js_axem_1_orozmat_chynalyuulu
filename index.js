const chessboard = document.querySelector('.chessboard');
let size = 10;

function createBoard(size) {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        if ((Math.floor(i / size) + i) % 2 === 0) {
            square.classList.add('black');
        }
        chessboard.appendChild(square);
    }
}

createBoard(size);


