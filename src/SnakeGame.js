import React, { Component } from 'react';
import { GridSnakeGame } from './GridSnakeGame';

import { DefaultState } from './utils/DefaultState';
import {
  gridSize,
  gameSpeed,
  isWallCollision,
  defeatConditions,
} from './Constantes';
import { generateRandomApplePosition } from './utils/Apple';
import { setSnakeMoves } from './utils/Snake';

export class SnakeGame extends Component {
  state = DefaultState;

  gridRef = null;

  componentDidMount() {
    this.gridRef.focus();
    setInterval(this.loop, gameSpeed);
  }

  changeSnakeDirection = e => {
    // pas déplaçable à cause du this.setState
    this.setState({
      lastDirection: e.key,
    });
  };

  snakeMove = () => {
    this.setState(setSnakeMoves);
  };

  loop = () => {
    this.snakeMove();
    this.hasDefeat();
    this.hasSnakeAteApple();
  };

  hasDefeat = () => {
    this.setState(this.defeatConditions);
  };

  whenSnakeEatsAnApple = (prevState, props) => {
    //pas déplaçable
    const appleIsEaten =
      prevState.apple.x === prevState.snakePosition.x &&
      prevState.apple.y === prevState.snakePosition.y;
    if (appleIsEaten) {
      return {
        snakeSize: this.state.snakeSize + 1,
        apple: generateRandomApplePosition(),
      };
    }
  };

  hasSnakeAteApple = () => {
    this.setState(this.whenSnakeEatsAnApple);
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
