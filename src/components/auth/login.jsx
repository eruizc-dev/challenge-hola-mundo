import React, { useEffect, useRef } from 'react';
import Alert from '../alert';
import useAuth from "../../redux/auth/useAuth";
import { Modal, Button, TextField, Snackbar } from '@material-ui/core';
import { useForm } from "react-hook-form";

export function LoginForm({ onSubmit = () => {} }) {
  const usernameInput = useRef();
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();

  useEffect(() => {
    if (usernameInput.current) {
      register(usernameInput.current);
      usernameInput.current.focus();
    }
  }, [register]);

  return (
    <form
      onSubmit={handleSubmit(d => { login(d.username); onSubmit(d); })}
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <TextField
        required
        helperText="No puede ser vacío"
        type='input'
        label='Usuario'
        name="username"
        variant='outlined'
        style={{ margin: '10px' }}
        inputProps={{ ref: usernameInput }}
      />
      <Button
        type='submit'
        variant="contained"
        color="primary"
        style={{ margin: '10px' }}
      >
        Confirmar
      </Button>
    </form>
  );
}

export function LoginModal({ open, onClose, onSubmit }) {

  function handleSubmit() {
    onSubmit && onSubmit();
    onClose && onClose();
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{
        backgroundColor: '#fff',
        padding: '25px',
        borderRadius: '4px'
      }}>
        <h1 style={{ textAlign: 'center' }}>¡Bienvenido!</h1>
        <LoginForm onSubmit={handleSubmit} />
      </div>
    </Modal>
  );
}

export function LogInButton({ onClick }) {
  return (
    <Button
      onClick={onClick}
      color="inherit"
    >
      Ingresar
    </Button>
  );
}

export function LoginAlert({ open, onClose }) {
  return (
    <Snackbar open={open} autoHideDuration={2500} onClose={onClose}>
      <Alert onClose={onClose} severity="success">
        ¡Bienvenido al sistema!
      </Alert>
    </Snackbar>
  );
}
