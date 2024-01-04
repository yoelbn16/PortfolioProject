import createBoard from './board.js';
import fillSudokuSolution from './solution.js';
import { fillCell, select } from './userInput.js';

let sudokuGrid = Array.from({ length: 9 }, () => Array(9).fill(0));
fillSudokuSolution(sudokuGrid);
console.table(sudokuGrid);

createBoard(sudokuGrid);
export { sudokuGrid };
window.fillCell = fillCell;
window.select = select;
