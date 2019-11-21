import React from 'react';

export const Cell = ({ cell, snakePosition, colIndex, rowIndex }) => {
  return (
    <div
      style={{
        flex: '1 1 10%',
        border: '1px solid black',
        backgroundColor:
          snakePosition.y === colIndex && snakePosition.x === rowIndex
            ? 'black'
            : 'blue',
      }}
    >
      0
    </div>
  );
};
