import React from 'react';
import { Row } from './Row';

export const GridSnakeGame = ({ grid }) => {
  console.log(grid);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {grid.map(row => (
        <Row row={row} />
      ))}
    </div>
  );
};
