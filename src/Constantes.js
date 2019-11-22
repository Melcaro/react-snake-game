const gridSize = 10;
const gameSpeed = 500;

const isWallCollision = position => {
  return position >= gridSize || position < 0;
};

const defeatConditions = (prevState, props) => {
  const isSnakeOffGrid =
    isWallCollision(prevState.snakePosition.x) ||
    isWallCollision(prevState.snakePosition.y);

  const snakeHasBeatenHimself = prevState.bodyPosition.some(
    position =>
      position.y === prevState.snakePosition.y &&
      position.x === prevState.snakePosition.x
  );
  return {
    gameState: isSnakeOffGrid || snakeHasBeatenHimself ? 'Defeat' : 'Playing',
  };
};

export { gridSize, gameSpeed, isWallCollision, defeatConditions };
