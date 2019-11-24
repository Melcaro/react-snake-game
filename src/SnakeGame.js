import React, { Component } from 'react';
import { GridSnakeGame } from './GridSnakeGame';

import { DefaultState } from './utils/DefaultState';
import { gameSpeed, defeatConditions } from './Constantes';
import { generateRandomApplePosition } from './utils/Apple';
import { setSnakeMoves } from './utils/Snake';
import { runInThisContext } from 'vm';

export class SnakeGame extends Component {
  state = DefaultState;

  gridRef = null;

  componentDidMount() {
    this.gridRef.focus();
    setInterval(this.loop, gameSpeed);
  }

  restartTheGame = () => {
    this.setState(DefaultState);
  };

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
    this.setState(defeatConditions);
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
        score: this.state.score + 1,
      };
    }
  };

  hasSnakeAteApple = () => {
    this.setState(this.whenSnakeEatsAnApple);
  };

  render() {
    //console.log(this.state.gameState);

    const {
      state: {
        playGroundGrid,
        snakePosition,
        bodyPosition,
        gameState,
        apple,
        score,
      },
    } = this;

    if (gameState === 'Playing') {
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
            score={score}
          />
        </div>
      );
    } else if (gameState === 'Defeat') {
      return (
        <div
          style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: 'black',
            color: 'white',
            fontSize: '100px',
          }}
        >
          <div style={{ color: 'white', fontSize: '100px' }}>GAME OVER</div>
          <button
            style={{ BackgroundColor: 'white', fontSize: '40px' }}
            onClick={this.restartTheGame}
          >
            PLAY AGAIN
          </button>
        </div>
      );
    }
  }
}
