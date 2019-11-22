import React from 'react';

import { Cell } from './Cell.js';
export const Row = ({
  row,
  snakePosition,
  bodyPosition,
  colIndex,
  gameState,
  apple,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {row.map((cell, i) => (
        <Cell
          cell={cell}
          snakePosition={snakePosition}
          bodyPosition={bodyPosition}
          colIndex={colIndex}
          rowIndex={i}
          gameState={gameState}
          apple={apple}
        />
      ))}
    </div>
  );
};
