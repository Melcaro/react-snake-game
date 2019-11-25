import React from 'react';

import { Cell } from './Cell.js';

import { RowStyle } from './Styles';
export const Row = ({
  row,
  snakePosition,
  bodyPosition,
  colIndex,
  gameState,
  apple,
}) => {
  return (
    <RowStyle>
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
    </RowStyle>
  );
};
