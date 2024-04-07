# Tic Tac Toe

A classic Tic Tac Toe game built using TypeScript, React, and Parcel.

## Table of Contents
- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Tic Tac Toe is a timeless two-player strategy game where players take turns placing their marks (usually X and O) on a 3x3 grid, trying to get three of their marks in a row, either horizontally, vertically, or diagonally. This project aims to recreate the classic game using modern web development technologies, providing an engaging and responsive user experience.

## Technologies Used

1. **TypeScript**: A superset of JavaScript that adds optional static typing, enabling better code organization, maintainability, and scalability.
2. **React**: A popular JavaScript library for building user interfaces, providing a component-based architecture and efficient rendering.
3. **Parcel**: A fast and zero-configuration web application bundler, simplifying the development and build process.
4. **pnpm**: A very fast and low disk size package manager as compared to yann and npm.

## Features

- **Interactive Game Board**: Users can click on the game board to place their marks, with the game automatically detecting and displaying the winner or a draw.
- **Player Turn Tracking**: The game keeps track of the current player's turn, ensuring a smooth and intuitive gameplay experience.
- **Game Restart**: Users can restart the game at any time, resetting the board and starting a new match.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vbvsingh29/tic-tac-toe.git
   ```
2. Navigate to your project:
   ```bash 
   cd tic-tac-toe
   ```
3. Install Dependencies:
   ```bash
   pnpm install 
   ```

## Usage

1. Strat the development server:
   ```
   pnpm start
   ```
2. Open your web browser and navigate to http://localhost:1234 to access the Tic Tac Toe game.


## Disclaimer

For learning purposes, I have used `pnpm` as the package manager for this project, which has resulted in a `pnpm-lock.yaml` file. If you want to install the dependencies using `yarn` or `npm`, you can still do so, but the installation process may take longer.

When using `yarn` or `npm`, there is only a `package.json` file present, and no lock file. This means that the package manager needs to resolve the dependency tree and generate a new lockfile from scratch, which can be a slower process.

Additionally, there is a potential risk of dependency version mismatch since the lock file is not present. This could lead to compatibility issues or unexpected behavior in the project.

**Happy Coding!**
