import React from 'react';
import { Row } from './Row';

export const GridSnakeGame = ({
  grid,
  snakePosition,
  bodyPosition,
  gameState,
  apple,
  score,
}) => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          margin: '5%',
        }}
      >
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
      </div>
      <div style={{ marginLeft: '10%', fontSize: '15px', fontWeight: 'bold' }}>
        SCORE : {score}
      </div>
    </div>
  );
};
