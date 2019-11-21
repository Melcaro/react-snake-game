import React, { Component } from 'react';
import { GridSnakeGame } from './GridSnakeGame';

const gridSize = 10;
const gameSpeed = 1000;

export class SnakeGame extends Component {
  state = {
    playGroundGrid: Array(gridSize).fill(Array(gridSize).fill(0)),
    snakePosition: { x: 0, y: 0 },
  };

  componentDidMount() {
    setInterval(this.loop, gameSpeed);
  }

  snakeMove = () => {
    this.setState(prevState => {
      return {
        snakePosition: {
          x: prevState.snakePosition.x + 1,
          y: prevState.snakePosition.y,
        },
      };
    });
  };

  loop = () => {
    this.snakeMove();
  };

  render() {
    const {
      state: { playGroundGrid, snakePosition },
    } = this;
    return (
      <div>
        <GridSnakeGame grid={playGroundGrid} snakePosition={snakePosition} />
      </div>
    );
  }
}
