import * as React from 'react';
import Button from '@mui/material/Button';

export function Mybuttontwo(props) {
  return (
    <div>
      <Button onClick={() => props.example('third')} variant="contained">Hello World Fabian 2</Button>
    </div>
  );
}