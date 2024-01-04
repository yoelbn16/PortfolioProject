export default function createBoard(grid) {
	let innerCells = '';
	for (let i = 0; i < Math.pow(9, 2); i++) {
		innerCells += `<div class="cell fw-bold" id="${i}"" onclick="fillCell(${i})"></div>`;
	}
	document.getElementById('sudoku-grid').innerHTML = innerCells;
	for (let row in grid) {
		let reavealedNum = new Set();
		for (let i = 0; i < 4; i++) {
			let revealNum = Math.floor(Math.random() * 9);
			if (!reavealedNum.has(revealNum)) {
				reavealedNum.add(revealNum);
				document.getElementById(`${row * 9 + revealNum}`).innerText = grid[row][revealNum];
				document.getElementById(`${row * 9 + revealNum}`).classList.add('base');
				document.getElementById(`${row * 9 + revealNum}`).classList.add('fw-bold');
			} else {
				i--;
			}
		}
	}
}
