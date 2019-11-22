const setSnakeMoves = (prevState, props) => {
  const offSetX =
    prevState.lastDirection === 'ArrowRight'
      ? 1
      : prevState.lastDirection === 'ArrowLeft'
      ? -1
      : 0;
  const offSetY =
    prevState.lastDirection === 'ArrowUp'
      ? -1
      : prevState.lastDirection === 'ArrowDown'
      ? 1
      : 0;

  const newSnakePosition = {
    x: prevState.snakePosition.x + offSetX,
    y: prevState.snakePosition.y + offSetY,
  };

  // Size of the body is modified here according to the difference between its length and its position. He grows only when an apple is eaten, until then, the last position is deleted

  const howMuchTheSnakeBodyMustBeReduced =
    prevState.bodyPosition.length === prevState.snakeSize ? 0 : 1;

  const newBodyPosition = [
    prevState.snakePosition,
    ...prevState.bodyPosition.slice(
      0,
      prevState.bodyPosition.length - howMuchTheSnakeBodyMustBeReduced
    ),
  ];

  return {
    snakePosition: newSnakePosition,
    bodyPosition: newBodyPosition,
  };
};

export { setSnakeMoves };
