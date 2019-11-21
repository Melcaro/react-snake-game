import React from 'react';

import { Cell } from './Cell.js';
export const Row = ({ row, snakePosition, colIndex }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {row.map((cell, i) => (
        <Cell cell={cell} snakePosition={snakePosition} colIndex={colIndex} rowIndex={i} />
      ))}
    </div>
  );
};
