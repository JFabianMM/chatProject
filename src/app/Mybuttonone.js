import * as React from 'react';
import Button from '@mui/material/Button';

export function Mybuttonone(props) {
  return (
    <div>
      <Button onClick={() => props.example('second')} variant="contained">Hello World Fabian 1</Button>
    </div>
  );
}