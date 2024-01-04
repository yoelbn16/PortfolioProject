addEventListener('keydown', ({key}) => {
	switch (key) {
		case 'w':
		case 'W':
		case 'ArrowUp':
			keys.w.pressed = true;
			lastKey = 'w';
			break;
		case 'a':
		case 'A':
		case 'ArrowLeft':
			keys.a.pressed = true;
			lastKey = 'a';
			break;
		case 's':
		case 'S':
		case 'ArrowDown':
			keys.s.pressed = true;
			lastKey = 's';
			break;
		case 'd':
		case 'D':
		case 'ArrowRight':
			keys.d.pressed = true;
			lastKey = 'd';
			break;
	}
});

addEventListener('keyup', ({key}) => {
	switch (key) {
		case 'w':
		case 'W':
		case 'ArrowUp':
			keys.w.pressed = false;
			break;
		case 'a':
		case 'A':
		case 'ArrowLeft':
			keys.a.pressed = false;
			break;
		case 's':
		case 'S':
		case 'ArrowDown':
			keys.s.pressed = false;
			break;
		case 'd':
		case 'D':
		case 'ArrowRight':
			keys.d.pressed = false;
			break;
	}
});
