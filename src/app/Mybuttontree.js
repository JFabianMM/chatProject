import * as React from 'react';
import Button from '@mui/material/Button';

export function Mybuttontree(props) {
  return (
    <div>
      <Button onClick={() => props.example('first')} variant="contained">Hello World Fabian 3</Button>
    </div>
  );
}