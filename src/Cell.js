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
  apple,
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

  const isApplePosition = isPosition(apple, {
    x: rowIndex,
    y: colIndex,
  });

  const headColor = isSnakePosition && 'black';
  const bodyColor = isBodyPosition && 'blue';
  const appleColor = isApplePosition && 'red';
  const otherColor = '#C2C5CC';

  return (
    <div
      style={{
        flex: '1 1 5%',

        backgroundColor: headColor || bodyColor || appleColor || otherColor,
      }}
    ></div>
  );
};
