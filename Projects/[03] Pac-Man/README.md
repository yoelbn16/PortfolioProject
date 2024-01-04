# Pac-Man Game

This is a simple Pac-Man game implemented in JavaScript using HTML5 Canvas. The game features Pac-Man as the player character who must collect pellets and power-ups while avoiding ghosts.

## Features

- Pac-Man character with directional mouth animation.
- Ghost characters with different colors.
- Scare mode for Pac-Man when collecting power-ups.
- Boundary walls and obstacles.
- Score tracking.

## How to Play

1. Use the arrow keys (Up, Down, Left, Right) or the 'W', 'A', 'S', 'D' keys to control Pac-Man's movement.
2. Collect all the white pellets to score points.
3. Collect the power-ups to temporarily scare away the ghosts.
4. Avoid colliding with the ghosts. If you touch them while not in power-up mode, you lose the game.
5. The game ends when you either collect all the pellets or collide with a ghost.

## Installation

1. Clone the repository:
2. Open the `index.html` file in a modern web browser.

## Code Structure

- `Classes/`: Contains classes for game entities like Player, Ghost, Pellet, etc.
- `Scripts/`: Includes the game logic and event listeners.
- `style.css`: Basic styles for the game interface.
- `index.html`: Main HTML file to run the game.
