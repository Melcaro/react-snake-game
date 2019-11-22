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
    bodyPosition: [
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ],
    snakeSize: 2,
    lastDirection: 'ArrowDown',
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
    this.setState(
      ({ lastDirection, snakePosition, bodyPosition, snakeSize }) => {
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

        // Size of the body is modified here according to the difference between its length and its position. He grows only when an apple is eaten, until then, the last position is deleted

        const howMuchTheSnakeBodyMustBeReduced =
          bodyPosition.length === snakeSize ? 0 : 1;

        const newBodyPosition = [
          snakePosition,
          ...bodyPosition.slice(
            0,
            bodyPosition.length - howMuchTheSnakeBodyMustBeReduced
          ),
        ];

        return {
          snakePosition: newSnakePosition,
          bodyPosition: newBodyPosition,
        };
      }
    );
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
    this.setState(({ apple, snakePosition, snakeSize }) => {
      const appleIsEaten =
        apple.x === snakePosition.x && apple.y === snakePosition.y;
      if (appleIsEaten) {
        return {
          snakeSize: this.state.snakeSize + 1,
          apple: generateRandomApplePosition(),
        };
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
