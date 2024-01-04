function isValidPlacement(grid, row, col, num) {
	for (let i = 0; i < 9; i++) {
		if (grid[row][i] === num || grid[i][col] === num) {
			return false;
		}
	}
	let startRow = Math.floor(row / 3) * 3;
	let startCol = Math.floor(col / 3) * 3;
	for (let r = startRow; r < startRow + 3; r++) {
		for (let c = startCol; c < startCol + 3; c++) {
			if (grid[r][c] === num) {
				return false;
			}
		}
	}
	return true;
}

function shuffleNumbers(numbers) {
	for (let i = numbers.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[numbers[i], numbers[j]] = [numbers[j], numbers[i]];
	}
	return numbers;
}

export default function fillSudokuSolution(grid) {
	for (let r = 0; r < 9; r++) {
		for (let c = 0; c < 9; c++) {
			if (grid[r][c] == 0) {
				let numbers = shuffleNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
				for (let num of numbers) {
					if (isValidPlacement(grid, r, c, num)) {
						grid[r][c] = num;
						if (fillSudokuSolution(grid)) {
							return true;
						}
						grid[r][c] = 0;
					}
				}
				return false;
			}
		}
	}
	return true;
}
