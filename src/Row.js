import React from 'react';

import { Cell } from './Cell.js';
export const Row = ({ row }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      {row.map(cell => (
        <Cell cell={cell} />
      ))}
    </div>
  );
};
