import React, { Component } from 'react';
import { GridSnakeGame } from './GridSnakeGame';

const gridSize = 10;
const gameSpeed = 1000;

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
      console.log(bodyPosition);
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

  render() {
    const {
      state: { playGroundGrid, snakePosition, bodyPosition, gameState },
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
        />
      </div>
    );
  }
}
