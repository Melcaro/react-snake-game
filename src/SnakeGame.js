import React, { Component } from 'react';
import { GridSnakeGame } from './GridSnakeGame';

const gridSize = 10;
const gameSpeed = 500;

const generateRandomApplePosition = () => ({
  x: Math.floor(Math.random() * gridSize),
  y: Math.floor(Math.random() * gridSize),
});

export class SnakeGame extends Component {
  state = {
    playGroundGrid: Array(gridSize).fill(Array(gridSize).fill(0)),
    snakePosition: { x: 0, y: 0 },
    lastDirection: 'ArrowDown',
    bodyPosition: [
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ],
    gameState: 'playing',
    apple: generateRandomApplePosition(),
  };

  gridRef = null;

  componentDidMount() {
    this.gridRef.focus();
    setInterval(this.loop, gameSpeed);
  }

  changeSnakeDirection = e => {
    console.log(e.key);
    this.setState({
      lastDirection: e.key,
    });
  };

  snakeMove = () => {
    this.setState(({ lastDirection, snakePosition, bodyPosition }) => {
      const offSetX =
        lastDirection === 'ArrowRight'
          ? 1
          : lastDirection === 'ArrowLeft'
          ? -1
          : 0;
      const offSetY =
        lastDirection === 'ArrowUp'
          ? -1
          : lastDirection === 'ArrowDown'
          ? 1
          : 0;

      const newSnakePosition = {
        x: snakePosition.x + offSetX,
        y: snakePosition.y + offSetY,
      };
      const newBodyPosition = [
        snakePosition,
        ...bodyPosition.slice(0, bodyPosition.length - 1),
      ];
      return {
        snakePosition: newSnakePosition,
        bodyPosition: newBodyPosition,
      };
    });
  };

  loop = () => {
    this.snakeMove();
    this.hasDefeat();
    this.hasSnakeAteApple();
  };

  isWallCollision = position => {
    return position >= gridSize || position < 0;
  };

  hasDefeat = () => {
    this.setState(({ snakePosition, bodyPosition, gameState }) => {
      const isSnakeOffGrid =
        this.isWallCollision(snakePosition.x) ||
        this.isWallCollision(snakePosition.y);

      const snakeHasBeatenHimself = bodyPosition.some(
        position =>
          position.y === snakePosition.y && position.x === snakePosition.x
      );
      return {
        gameState:
          isSnakeOffGrid || snakeHasBeatenHimself ? 'Defeat' : 'Playing',
      };
    });
    console.log(this.state.gameState);
  };

  hasSnakeAteApple = () => {
    this.setState(({ apple, snakePosition }) => {
      const appleIsEaten =
        apple.x === snakePosition.x && apple.y === snakePosition.y;
      if (appleIsEaten) {
        return { apple: generateRandomApplePosition() };
      }
      console.log(apple);
    });
  };

  render() {
    const {
      state: { playGroundGrid, snakePosition, bodyPosition, gameState, apple },
    } = this;
    return (
      <div
        tabIndex="0"
        ref={el => (this.gridRef = el)}
        onKeyDown={this.changeSnakeDirection}
      >
        <GridSnakeGame
          grid={playGroundGrid}
          snakePosition={snakePosition}
          bodyPosition={bodyPosition}
          gameState={gameState}
          apple={apple}
        />
      </div>
    );
  }
}
