import { gridSize } from './../Constantes';

const generateRandomApplePosition = () => ({
  x: Math.floor(Math.random() * gridSize),
  y: Math.floor(Math.random() * gridSize),
});

export { generateRandomApplePosition };
