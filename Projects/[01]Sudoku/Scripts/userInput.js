let selectedNum;
import { sudokuGrid } from './sudoku.js';

export function select(num) {
	selectedNum = num;
	for (let i = 1; i < 10; i++) {
		if (i == selectedNum) {
			document.getElementById(`digit-${i}`).style.backgroundColor = '#219ebc';
		} else {
			document.getElementById(`digit-${i}`).style.backgroundColor = '#ffb703';
		}
	}
}
export function fillCell(cell) {
	if (!document.getElementById(`${cell}`).classList.contains('base')) {
		if (selectedNum == undefined) {
			alert('Please choose a number first!');
		} else {
			document.getElementById(`${cell}`).innerHTML = `${selectedNum}`;
			checkAnswer(cell, selectedNum);
		}
	}
}

function checkAnswer(cell, num) {
	let row = Math.floor(cell / 9);
	let column = cell % 9;
	if (sudokuGrid[row][column] != num) {
		document.getElementById(`${cell}`).style.border = 'solid 2px red';
		document.getElementById(`${cell}`).style.color = 'red';
	} else {
		document.getElementById(`${cell}`).style.border = '';
		document.getElementById(`${cell}`).style.color = '#000';
	}
}
