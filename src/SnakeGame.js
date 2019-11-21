import React, { Component } from 'react';
import { GridSnakeGame } from './GridSnakeGame';

const gridSize = 10;

export class SnakeGame extends Component {
  state = {
    playGroundGrid: Array(gridSize).fill(Array(gridSize).fill(0)),
  };

  render() {
    return (
      <div>
        <GridSnakeGame grid={this.state.playGroundGrid} />
      </div>
    );
  }
}
