import React from 'react';

function isPosition(position1, position2) {
  return position1.y === position2.y && position1.x === position2.x;
}
export const Cell = ({
  cell,
  snakePosition,
  colIndex,
  rowIndex,
  bodyPosition,
  gameState,
}) => {
  const isSnakePosition = isPosition(snakePosition, {
    x: rowIndex,
    y: colIndex,
  });

  const isBodyPosition = bodyPosition.some(position =>
    isPosition(position, {
      x: rowIndex,
      y: colIndex,
    })
  );

  const headColor = isSnakePosition && 'black';
  const bodyColor = isBodyPosition && 'blue';
  const otherColor = 'green';

  return (
    <div
      style={{
        flex: '1 1 15%',

        backgroundColor: headColor || bodyColor || otherColor,
      }}
    >
      0
    </div>
  );
};
