function generateBoundaries() {
	const map = [
		['1', '-', '-', '-', '-', '-', '-', '-', '-', '7', '-', '-', '-', '-', '-', '-', '-', '-', '2'],
		['|', '.', '.', '.', '.', '.', '.', '.', '.', '|', '.', '.', '.', '.', '.', '.', '.', '.', '|'],
		['|', '.', '^', '.', '[', '7', '-', ']', '.', '|', '.', '[', '-', '7', '-', '-', ']', '.', '|'],
		['|', '.', '|', '.', '.', '|', '.', '.', '.', '|', '.', '.', '.', '|', 'p', '.', '.', '.', '|'],
		['|', '.', '4', ']', '.', '_', '.', '[', '-', '5', '-', ']', '.', '_', '.', '[', '2', '.', '|'],
		['|', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '|', '.', '|'],
		['|', '.', '^', '.', '^', '.', '1', '-', '2', '.', '1', '-', ']', '.', '^', '.', '_', '.', '|'],
		['|', '.', '|', 'p', '|', '.', '|', ' ', '|', '.', '|', '.', '.', '.', '|', '.', '.', '.', '|'],
		['|', '.', '4', '-', '8', '.', '|', ' ', '|', '.', '6', '-', ']', '.', '|', '.', 'b', '.', '|'],
		['|', '.', '.', '.', '|', '.', '|', ' ', '|', '.', '|', '.', '.', '.', '|', '.', '.', '.', '|'],
		['|', '.', '[', '-', '3', '.', '4', '-', '3', '.', '4', '-', ']', '.', '4', '-', ']', '.', '|'],
		['|', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '|'],
		['|', '.', '[', '-', '-', '2', '.', '1', '-', '-', '-', '2', '.', '1', '-', '-', ']', '.', '|'],
		['|', '.', '.', '.', '.', '|', '.', '|', '.', 'p', '.', '|', '.', '|', '.', '.', '.', '.', '|'],
		['|', '.', '[', ']', '.', '_', '.', '_', '.', '^', '.', '_', '.', '_', '.', '[', ']', '.', '|'],
		['|', '.', '.', '.', '.', '.', '.', '.', '.', '|', '.', '.', '.', '.', '.', '.', '.', '.', '|'],
		['4', '-', '-', '-', '-', '-', '-', '-', '-', '5', '-', '-', '-', '-', '-', '-', '-', '-', '3'],
	];
	const boundaries = [];

	map.forEach((row, i) => {
		row.forEach((symbol, j) => {
			switch (symbol) {
				case '-':
					boundaries.push(
						new Boundary({
							position: {
								x: Boundary.width * j,
								y: Boundary.height * i,
							},
							image: createImage('./Images/pipeHorizontal.png'),
						})
					);
					break;
				case '|':
					boundaries.push(
						new Boundary({
							position: {
								x: Boundary.width * j,
								y: Boundary.height * i,
							},
							image: createImage('./Images/pipeVertical.png'),
						})
					);
					break;
				case '1':
					boundaries.push(
						new Boundary({
							position: {
								x: Boundary.width * j,
								y: Boundary.height * i,
							},
							image: createImage('./Images/pipeCorner1.png'),
						})
					);
					break;
				case '2':
					boundaries.push(
						new Boundary({
							position: {
								x: Boundary.width * j,
								y: Boundary.height * i,
							},
							image: createImage('./Images/pipeCorner2.png'),
						})
					);
					break;
				case '3':
					boundaries.push(
						new Boundary({
							position: {
								x: Boundary.width * j,
								y: Boundary.height * i,
							},
							image: createImage('./Images/pipeCorner3.png'),
						})
					);
					break;
				case '4':
					boundaries.push(
						new Boundary({
							position: {
								x: Boundary.width * j,
								y: Boundary.height * i,
							},
							image: createImage('./Images/pipeCorner4.png'),
						})
					);
					break;
				case 'b':
					boundaries.push(
						new Boundary({
							position: {
								x: Boundary.width * j,
								y: Boundary.height * i,
							},
							image: createImage('./Images/block.png'),
						})
					);
					break;
				case '[':
					boundaries.push(
						new Boundary({
							position: {
								x: j * Boundary.width,
								y: i * Boundary.height,
							},
							image: createImage('./Images/capLeft.png'),
						})
					);
					break;
				case ']':
					boundaries.push(
						new Boundary({
							position: {
								x: j * Boundary.width,
								y: i * Boundary.height,
							},
							image: createImage('./Images/capRight.png'),
						})
					);
					break;
				case '_':
					boundaries.push(
						new Boundary({
							position: {
								x: j * Boundary.width,
								y: i * Boundary.height,
							},
							image: createImage('./Images/capBottom.png'),
						})
					);
					break;
				case '^':
					boundaries.push(
						new Boundary({
							position: {
								x: j * Boundary.width,
								y: i * Boundary.height,
							},
							image: createImage('./Images/capTop.png'),
						})
					);
					break;
				case '+':
					boundaries.push(
						new Boundary({
							position: {
								x: j * Boundary.width,
								y: i * Boundary.height,
							},
							image: createImage('./Images/pipeCross.png'),
						})
					);
					break;
				case '5':
					boundaries.push(
						new Boundary({
							position: {
								x: j * Boundary.width,
								y: i * Boundary.height,
							},
							color: 'blue',
							image: createImage('./Images/pipeConnectorTop.png'),
						})
					);
					break;
				case '6':
					boundaries.push(
						new Boundary({
							position: {
								x: j * Boundary.width,
								y: i * Boundary.height,
							},
							color: 'blue',
							image: createImage('./Images/pipeConnectorRight.png'),
						})
					);
					break;
				case '7':
					boundaries.push(
						new Boundary({
							position: {
								x: j * Boundary.width,
								y: i * Boundary.height,
							},
							color: 'blue',
							image: createImage('./Images/pipeConnectorBottom.png'),
						})
					);
					break;
				case '8':
					boundaries.push(
						new Boundary({
							position: {
								x: j * Boundary.width,
								y: i * Boundary.height,
							},
							image: createImage('./Images/pipeConnectorLeft.png'),
						})
					);
					break;
				case 'v':
					boundaries.push(
						new Boundary({
							position: {
								x: j * Boundary.width,
								y: i * Boundary.height,
							},
							image: createImage('./Images/pipeConnectorLeft.png'),
						})
					);
					break;
				case '.':
					pellets.push(
						new Pellet({
							position: {
								x: j * Boundary.width + Boundary.width / 2,
								y: i * Boundary.height + Boundary.height / 2,
							},
						})
					);
					break;
				case 'p':
					powerUps.push(
						new PowerUp({
							position: {
								x: j * Boundary.width + Boundary.width / 2,
								y: i * Boundary.height + Boundary.height / 2,
							},
						})
					);
					break;
			}
		});
	});
	return boundaries;
}
