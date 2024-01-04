# Sudoku

This project is a web-based implementation of the popular puzzle game Sudoku. It features an interactive interface for users to play Sudoku directly in their web browser, with a focus on responsive design and user-friendly experience.

## Features

- **Dynamic Sudoku Grid**: Automatically generates a new Sudoku puzzle for each session.
- **Interactive Gameplay**: Users can click on cells to fill in numbers and select numbers easily from a dedicated area.
- **Validation and Feedback**: Immediate feedback is provided for incorrect entries.
- **Responsive Design**: The layout adjusts to various screen sizes for optimal user experience.

## Usage

1. **Open the Game**: Load the `index.html` file in a modern web browser using a live server.
2. **Select a Number**: Click on a number at the bottom of the grid.
3. **Fill in the Grid**: Click on an empty cell in the Sudoku grid to fill it with the selected number.
4. **Check for Errors**: The game highlights incorrect numbers in red.

## Design and Styling

### HTML

The `index.html` file structures the Sudoku game, including the Sudoku grid and number selection area. Bootstrap is used for styling, along with Google Fonts for typography and local CSS for custom styling.

### CSS

The `style.css` file contains custom styles for the Sudoku game. Key features include:

- **Sudoku Grid**: Defined as a 9x9 grid with responsive sizing.
- **Responsive Cells**: Each cell adjusts size based on the screen width, enhancing readability on different devices.
- **Hover Effects**: Visual feedback when hovering over cells.
- **Number Selection Area**: Styled for clear visibility and easy interaction.
- **Media Queries**: Ensures the game is responsive and accessible on devices with different screen sizes.

### JavaScript

- `sudoku.js`: Manages the primary game logic, including creating the board and handling user inputs.
- `board.js`: Contains the `createBoard` function to initialize the Sudoku grid.
- `solution.js`: Includes the `fillSudokuSolution` function for generating the puzzle solution.
- `userInput.js`: Handles user interactions like number selection and cell filling.

## Dependencies

- [Bootstrap](https://getbootstrap.com/): For responsive design and styling.
- [Google Fonts](https://fonts.google.com/): For typography.
