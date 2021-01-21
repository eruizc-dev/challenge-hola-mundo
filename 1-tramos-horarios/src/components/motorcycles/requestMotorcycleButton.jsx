import React, { useState } from 'react';
import { Button } from '@material-ui/core';

function RequestMotorcycle({ onClick }) {
  return (
    <Button variant='contained' color='primary' onClick={onClick}>
      SOLICITAR
    </Button>
  )
}

function CancelMotorcycle({ onClick }) {
  return (
    <Button variant='contained' color='secondary' onClick={onClick}>
      CANCELAR
    </Button>
  )
}

export default function RequestMotorcycleButton() {

  const [available, setAvailable] = useState(true);

  return available
    ? <RequestMotorcycle onClick={() => setAvailable(false)} />
    : <CancelMotorcycle onClick={() => setAvailable(true)} />
}
