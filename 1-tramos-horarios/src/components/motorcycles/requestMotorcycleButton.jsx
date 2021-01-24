import React from 'react';
import { Button } from '@material-ui/core';
import useOrders from '../../redux/orders/useOrders';

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

export default function RequestMotorcycleButton({ hour }) {
  const { requestMotorcycle, cancelMotorcycle, isRequested } = useOrders();

  return isRequested(hour)
    ? <CancelMotorcycle onClick={() => cancelMotorcycle(hour)} />
    : <RequestMotorcycle onClick={() => requestMotorcycle(hour)} />
}
