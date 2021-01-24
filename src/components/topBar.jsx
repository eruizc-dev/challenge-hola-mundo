import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';
import DisplayUsername from '../components/displayUsername';
import LoginLogoutButton from './auth/loginLogoutButton';

export default function TopBar() {
  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: 'space-between'}}>
        <Typography variant="h6">
          Tramos horarios
        </Typography>
        <DisplayUsername />
        <LoginLogoutButton />
      </Toolbar>
    </AppBar>
  );
}
