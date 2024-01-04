const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const snakeSize = 20;
let snake;
let food;
let dx;
let dy;
let speed = 100;
let score;

function resetGame() {
	snake = [{ x: 200, y: 200 }];
	food = { x: 300, y: 300 };
	dx = snakeSize;
	dy = 0;
	score = 0;
	document.getElementById('score').innerHTML = `Score: ${score}`;
	placeFood();
	gameLoop();
}

function drawSnakePart(snakePart) {
	ctx.fillStyle = 'green';
	ctx.fillRect(snakePart.x, snakePart.y, snakeSize, snakeSize);
}

function drawSnake() {
	snake.forEach(drawSnakePart);
}

function didGameEnd() {
	for (let i = 4; i < snake.length; i++) {
		const didCollide = snake[i].x === snake[0].x && snake[i].y === snake[0].y;
		if (didCollide) return true;
	}

	const hitLeftWall = snake[0].x < 0;
	const hitRightWall = snake[0].x > canvas.width - snakeSize;
	const hitTopWall = snake[0].y < 0;
	const hitBottomWall = snake[0].y > canvas.height - snakeSize;

	return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall;
}

function advanceSnake() {
	const head = { x: snake[0].x + dx, y: snake[0].y + dy };
	snake.unshift(head);

	if (head.x === food.x && head.y === food.y) {
		score += 10;
		document.getElementById('score').innerHTML = `Score: ${score}`;
		placeFood();
	} else {
		snake.pop();
	}
}

function clearCanvas() {
	ctx.fillStyle = '#000';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawFood() {
	ctx.fillStyle = 'red';
	ctx.fillRect(food.x, food.y, snakeSize, snakeSize);
}

function placeFood() {
	food = {
		x: Math.floor(Math.random() * (canvas.width / snakeSize)) * snakeSize,
		y: Math.floor(Math.random() * (canvas.height / snakeSize)) * snakeSize,
	};
}

document.addEventListener('keydown', (e) => {
	const goingUp = dy === -snakeSize;
	const goingDown = dy === snakeSize;
	const goingRight = dx === snakeSize;
	const goingLeft = dx === -snakeSize;

	switch (e.key) {
		case 'ArrowUp':
		case 'W':
		case 'w':
			if (!goingDown) {
				dx = 0;
				dy = -snakeSize;
			}
			break;
		case 'ArrowDown':
		case 'S':
		case 's':
			if (!goingUp) {
				dx = 0;
				dy = snakeSize;
			}
			break;
		case 'ArrowLeft':
		case 'A':
		case 'a':
			if (!goingRight) {
				dx = -snakeSize;
				dy = 0;
			}
			break;
		case 'ArrowRight':
		case 'D':
		case 'd':
			if (!goingLeft) {
				dx = snakeSize;
				dy = 0;
			}
			break;
	}
});

function gameLoop() {
	if (didGameEnd()) {
		alert(`Game over! Your score was ${score}.`);
		resetGame();
		return;
	}

	setTimeout(() => {
		clearCanvas();
		drawFood();
		advanceSnake();
		drawSnake();
		gameLoop();
	}, speed);
}

resetGame();
