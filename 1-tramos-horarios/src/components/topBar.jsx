import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import LoginLogoutButton from './auth/loginLogoutButton';

export default function TopBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Tramos horarios
        </Typography>
        <LoginLogoutButton />
      </Toolbar>
    </AppBar>
  );
}
