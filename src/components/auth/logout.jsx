import React from 'react';
import Alert from '../alert';
import useAuth from "../../redux/auth/useAuth";
import { Snackbar, Button } from '@material-ui/core';

export function LogOutButton({ onClick = () => {} }) {
  const { logout } = useAuth();

  return (
    <Button
      onClick={() => { logout(); onClick(); }}
      color="inherit"
    >
      Salir
    </Button>
  );
}

export function LogoutAlert({ open, onClose }) {
  return (
    <Snackbar open={open} autoHideDuration={2500} onClose={onClose}>
      <Alert onClose={onClose} severity="success">
        ¡Hasta pronto!
      </Alert>
    </Snackbar>
  );
}
