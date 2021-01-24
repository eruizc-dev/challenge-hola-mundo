import React, { useState } from 'react';
import { Button, Snackbar } from '@material-ui/core';
import Alert from '../../components/alert';
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

function Disabled() {
  return (
    <Button variant='contained' disabled>
      AGOTADO
    </Button>
  )
}

function RequestCancelMotorcycle({ hour, onRequestMotorcycle, onCancelMotorcycle }) {
  const { isRequested, available } = useOrders(hour);

  return isRequested(hour)
    ? <CancelMotorcycle onClick={onCancelMotorcycle} />
    : (available > 0
      ? <RequestMotorcycle onClick={onRequestMotorcycle} />
      : <Disabled />
    );
}

export default function RequestMotorcycleButton({ hour }) {
  const [error, setError] = useState(false);
  const { requestMotorcycle, cancelMotorcycle } = useOrders();

  function onCancelMotorcycle(hour) {
    try {
      cancelMotorcycle(hour);
    } catch (err) {
      console.error(err);
      setError(err);
    }
  }

  function onRequestMotorcycle(hour) {
    try {
      requestMotorcycle(hour);
    } catch (err) {
      console.error(err);
      setError(err);
    }
  }

  return (
    <>
      <RequestCancelMotorcycle
        hour={hour}
        onRequestMotorcycle={() => onRequestMotorcycle(hour)}
        onCancelMotorcycle={() => onCancelMotorcycle(hour)}
      />
      <ErrorHandler open={error} message={error?.message} onClose={() => setError(false)}/>
    </>
  );
}

function ErrorHandler({ open, message, onClose }) {
  return open && (
    <Snackbar open={true} autoHideDuration={2500} onClose={onClose}>
      <Alert onClose={onClose} severity="error">
        {message || "Error desconocido"}
      </Alert>
    </Snackbar>
  );
}
