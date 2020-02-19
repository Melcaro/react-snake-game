import { generateRandomApplePosition } from './Apple';
import { gridSize } from './../Constantes';

export const DefaultState = {
  playGroundGrid: Array(gridSize).fill(Array(gridSize).fill(0)),
  snakePosition: { x: 0, y: 0 },
  bodyPosition: [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ],
  snakeSize: 2,
  lastDirection: 'ArrowDown',
  wantedDirection: 'ArrowDown',
  gameState: 'Playing',
  apple: generateRandomApplePosition(),
  score: 0,
};
