let board;
let context;
let blockSize = 20;
let cols = 30;
let rows = 20;

let appleAudio;
let gameOverAudio;

let snakeX = 0;
let snakeY = 0;
let tail = [];

let foodX = 0;
let foodY = 0;

let score = 0;

let velocityX = 1;
let velocityY = 0;

let gameOver = false;

window.onload = () => {
    board = document.getElementById('board');
    context = board.getContext('2d');

    board.width = cols * blockSize;
    board.height = rows * blockSize;

    document.addEventListener('keyup', changeDirection)

    board.addEventListener('click', ()=> {
        gameOver = false;
        score = 0;
    })

    foodPlace();

    setInterval(update, 1000/10)
}

function update (){

    //чистим экран

    createRect(0, 0, board.width, board.height);

    if (gameOver){
        createText('Game over', board.width / 2, board.height / 2 - 25, 'center', 50);
        createText(`Score : ${score}`, board.width / 2, board.height / 2 + 25, 'center');
        createText('Click to start new game', (cols * blockSize) / 2, board.height - 50, 'center');
        return;
    }

    createText(`Score: ${score}`, 30, 40)

    createRect(foodX, foodY, blockSize, 'lime');

    if (snakeX == foodX && snakeY == foodY){
        tail.push([foodX, foodY]);
        score += 10;

        foodPlace();
    }

        for(let i = tail.length - 1; i>0; i--){
            tail[i] = tail[i-1];
        }

        if (tail.length){
            tail[0] = [snakeX, snakeY]
        }

        snakeX += velocityX * blockSize;
        snakeY += velocityY * blockSize;

        createRect(snakeX, snakeY, blockSize, 'orange');

        for (let i = 0; i < tail.length; i++){
           createRect(tail[i][0], tail[i][1], blockSize, 'lime');
        }

        // удар об стену
        if (snakeX<0 || snakeX > cols * blockSize || snakeY < 0 || snakeY > rows * blockSize){
            gameOverEvent();
        }


        //удар об себя
        for (let i = 0; i < tail.length; i++){
            if (snakeX == tail[i][0] && snakeY == tail[i][1]){
                gameOverEvent();
            }
        }


}

function foodPlace (){}

function changeDirection(){}

function gameOverEvent(){}

function createRect(){}

function createText(){}
