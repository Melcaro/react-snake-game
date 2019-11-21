import React from 'react';
import { Row } from './Row';

export const GridSnakeGame = ({ grid, snakePosition }) => {
  console.log(snakePosition);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: '5%',
      }}
    >
      {grid.map((row, i) => (
        <Row row={row} snakePosition={snakePosition} colIndex={i} />
      ))}
    </div>
  );
};
