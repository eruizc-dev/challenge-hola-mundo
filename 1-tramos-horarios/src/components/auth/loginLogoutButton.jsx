import React, { useState } from 'react';
import { Button } from '@material-ui/core';

function LogInButton({ onLogIn }) {
  return (
    <Button
      onClick={onLogIn}
      color="inherit"
      style={{ marginLeft: 'auto'}}
    >
      Ingresar
    </Button>
  );
}

function LogOutButton({ onLogOut }) {
  return (
    <Button
      onClick={onLogOut}
      color="inherit"
      style={{ marginLeft: 'auto'}}
    >
      Salir
    </Button>
  );
}

export default function LoginLogoutButton() {
  const [loggedIn, setLoggedIn] = useState(false);

  return loggedIn
    ? <LogOutButton onLogOut={() => setLoggedIn(false)} />
    : <LogInButton onLogIn={() => setLoggedIn(true)} />
}
