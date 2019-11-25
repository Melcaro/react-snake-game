import React, { Component } from 'react';
import { GridSnakeGame } from './GridSnakeGame';

import { DefaultState } from './utils/DefaultState';
import { gameSpeed, defeatConditions } from './Constantes';
import { generateRandomApplePosition } from './utils/Apple';
import { setSnakeMoves } from './utils/Snake';

import {
  GameOverContainer,
  PlayContainer,
  PlayButton,
  GameOverTitle,
  PlayAgainButton,
  AppTitle,
} from './Styles';

export class SnakeGame extends Component {
  state = DefaultState;
  gridRef = null;
  intervalId = null;

  componentDidMount() {
    this.gridRef.focus();
  }

  startTheGame = () => {
    this.intervalId = setInterval(this.loop, gameSpeed);
  };

  componentDidUpdate = prevState => {
    if (this.state.gameState === 'Defeat') {
      clearInterval(this.componentDidMount);
    }
  };

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
    this.setState(defeatConditions, () => {
      this.state.gameState === 'Defeat' && clearInterval(this.intervalId);
    });
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
    console.log(this.state.gameState);

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
        <PlayContainer
          tabIndex="0"
          ref={el => (this.gridRef = el)}
          onKeyDown={this.changeSnakeDirection}
        >
          <AppTitle>SNAKE GAME</AppTitle>
          <PlayButton onClick={this.startTheGame}>PLAY</PlayButton>
          <GridSnakeGame
            grid={playGroundGrid}
            snakePosition={snakePosition}
            bodyPosition={bodyPosition}
            gameState={gameState}
            apple={apple}
            score={score}
          />
        </PlayContainer>
      );
    } else if (gameState === 'Defeat') {
      return (
        <GameOverContainer
          style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: 'black',
            color: 'white',
            fontSize: '100px',
          }}
        >
          <GameOverTitle>GAME OVER</GameOverTitle>
          <div>Score : {score}</div>
          <PlayAgainButton onClick={this.restartTheGame}>
            PLAY AGAIN
          </PlayAgainButton>
        </GameOverContainer>
      );
    }
  }
}
