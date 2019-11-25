import React from 'react';
import { Row } from './Row';

import { GridContainer, GridStyle, Score } from './Styles';
export const GridSnakeGame = ({
  grid,
  snakePosition,
  bodyPosition,
  gameState,
  apple,
  score,
}) => {
  return (
    <GridContainer>
      <Score>SCORE : {score}</Score>
      <GridStyle>
        {grid.map((row, i) => (
          <Row
            row={row}
            snakePosition={snakePosition}
            bodyPosition={bodyPosition}
            colIndex={i}
            gameState={gameState}
            apple={apple}
          />
        ))}
      </GridStyle>
    </GridContainer>
  );
};
