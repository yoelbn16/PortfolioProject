const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

const scoreEl = document.getElementById('scoreEl');

canvas.width = 760;
canvas.height = 680;

const pellets = [];
const powerUps = [];
const ghosts = [
	new Ghost({
		position: {
			x: Boundary.width * 9.5,
			y: Boundary.height * 5.5,
		},
		velocity: {
			x: 0,
			y: Ghost.speed,
		},
	}),
	new Ghost({
		position: {
			x: Boundary.width * 9.5,
			y: Boundary.height * 6.5,
		},
		velocity: {
			x: 0,
			y: -Ghost.speed,
		},
		color: 'cyan',
	}),
	new Ghost({
		position: {
			x: Boundary.width * 10.5,
			y: Boundary.height * 5.5,
		},
		velocity: {
			x: Ghost.speed,
			y: 0,
		},
		color: 'orange',
	}),
	new Ghost({
		position: {
			x: Boundary.width * 8.5,
			y: Boundary.height * 5.5,
		},
		velocity: {
			x: -Ghost.speed,
			y: 0,
		},
		color: 'pink',
	}),
];
const player = new Player({
	position: {
		x: Boundary.width * 1.5,
		y: Boundary.height * 1.5,
	},
	velocity: {
		x: 0,
		y: 0,
	},
});

const keys = {
	w: {
		pressed: false,
	},
	a: {
		pressed: false,
	},
	s: {
		pressed: false,
	},
	d: {
		pressed: false,
	},
};

let lastKey = '';
let score = 0;

const boundaries = generateBoundaries();

let animationId;
function animate() {
	animationId = requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);

	if (keys.w.pressed && lastKey === 'w') player.moveUp(boundaries);
	else if (keys.a.pressed && lastKey === 'a') player.moveLeft(boundaries);
	else if (keys.s.pressed && lastKey === 's') player.moveDown(boundaries);
	else if (keys.d.pressed && lastKey === 'd') player.moveRight(boundaries);

	if (pellets.length === 0) {
		cancelAnimationFrame(animationId);
		alert('Congrats! You Won!');
	}

	for (let i = ghosts.length - 1; 0 <= i; i--) {
		const ghost = ghosts[i];
		if (Math.hypot(ghost.position.x - player.position.x, ghost.position.y - player.position.y) < ghost.radius + player.radius) {
			if (ghost.scared) {
				ghosts.splice(i, 1);
			} else {
				cancelAnimationFrame(animationId);
				alert('You Lost!');
			}
		}
	}
	for (let i = powerUps.length - 1; 0 <= i; i--) {
		const powerUp = powerUps[i];
		powerUp.draw();

		if (Math.hypot(powerUp.position.x - player.position.x, powerUp.position.y - player.position.y) < powerUp.radius + player.radius) {
			powerUps.splice(i, 1);
			ghosts.forEach((ghost) => {
				ghost.scared = true;
				ghost.velocity.x = -ghost.velocity.x;
				ghost.velocity.y = -ghost.velocity.y;

				setTimeout(() => {
					ghost.scared = false;
				}, 5000);
			});
		}
	}
	for (let i = pellets.length - 1; 0 <= i; i--) {
		const pellet = pellets[i];
		pellet.draw();

		if (Math.hypot(pellet.position.x - player.position.x, pellet.position.y - player.position.y) < pellet.radius + player.radius) {
			pellets.splice(i, 1);
			score += 100;
			scoreEl.innerHTML = score;
		}
	}

	boundaries.forEach((boundary) => {
		boundary.draw();

		if (circleCollidesWithRectangle({circle: player, rectangle: boundary})) {
			player.velocity.x = 0;
			player.velocity.y = 0;
		}
	});

	player.update();
	ghosts.forEach((ghost) => {
		ghost.update();

		const collisions = [];
		boundaries.forEach((boundary) => {
			if (
				!collisions.includes('right') &&
				circleCollidesWithRectangle({
					circle: {
						...ghost,
						velocity: {
							x: ghost.speed,
							y: 0,
						},
					},
					rectangle: boundary,
				})
			) {
				collisions.push('right');
			}
			if (
				!collisions.includes('left') &&
				circleCollidesWithRectangle({
					circle: {
						...ghost,
						velocity: {
							x: -ghost.speed,
							y: 0,
						},
					},
					rectangle: boundary,
				})
			) {
				collisions.push('left');
			}
			if (
				!collisions.includes('up') &&
				circleCollidesWithRectangle({
					circle: {
						...ghost,
						velocity: {
							x: 0,
							y: -ghost.speed,
						},
					},
					rectangle: boundary,
				})
			) {
				collisions.push('up');
			}
			if (
				!collisions.includes('down') &&
				circleCollidesWithRectangle({
					circle: {
						...ghost,
						velocity: {
							x: 0,
							y: ghost.speed,
						},
					},
					rectangle: boundary,
				})
			) {
				collisions.push('down');
			}
		});

		if (collisions.length > ghost.prevCollisons.length) {
			collisions.forEach((collision) => ghost.prevCollisons.push(collision));
		}
		if (JSON.stringify(collisions) !== JSON.stringify(ghost.prevCollisons)) {
			if (ghost.velocity.x > 0 && !ghost.prevCollisons.includes('right')) ghost.prevCollisons.push('right');
			else if (ghost.velocity.x < 0 && !ghost.prevCollisons.includes('left')) ghost.prevCollisons.push('left');
			else if (ghost.velocity.y < 0 && !ghost.prevCollisons.includes('up')) ghost.prevCollisons.push('up');
			else if (ghost.velocity.y > 0 && !ghost.prevCollisons.includes('down')) ghost.prevCollisons.push('down');

			console.log(collisions);
			console.log(ghost.prevCollisons);

			const pathways = ghost.prevCollisons.filter((collision) => {
				return !collisions.includes(collision);
			});
			console.log({pathways});

			const direction = pathways[Math.floor(Math.random() * pathways.length)];
			console.log(direction);

			switch (direction) {
				case 'right':
					ghost.velocity.y = 0;
					ghost.velocity.x = ghost.speed;
					break;
				case 'left':
					ghost.velocity.y = 0;
					ghost.velocity.x = -ghost.speed;
					break;
				case 'up':
					ghost.velocity.y = -ghost.speed;
					ghost.velocity.x = 0;
					break;
				case 'down':
					ghost.velocity.y = ghost.speed;
					ghost.velocity.x = 0;
					break;
				default:
					ghost.velocity.x = -ghost.velocity.x;
					ghost.velocity.y = -ghost.velocity.y;
			}

			ghost.prevCollisons.length = 0;
		}
	});

	if (player.velocity.x > 0) player.rotation = 0;
	else if (player.velocity.x < 0) player.rotation = Math.PI;
	else if (player.velocity.y < 0) player.rotation = Math.PI * 1.5;
	else if (player.velocity.y > 0) player.rotation = Math.PI / 2;
}

animate();
