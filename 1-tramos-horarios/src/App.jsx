import React, { useState } from 'react';
import {
  AppBar,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from '@material-ui/core';

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

function LoginLogoutButton() {
  const [loggedIn, setLoggedIn] = useState(false);

  return loggedIn
    ? <LogOutButton onLogOut={() => setLoggedIn(false)} />
    : <LogInButton onLogIn={() => setLoggedIn(true)} />
}

function TopBar() {
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

function SolicitarButton({ onClick }) {
  return (
    <Button variant='contained' color='primary' onClick={onClick}>
      SOLICITAR
    </Button>
  )
}

function CancelarButton({ onClick }) {
  return (
    <Button variant='contained' color='secondary' onClick={onClick}>
      CANCELAR
    </Button>
  )
}

function SomeButton() {

  const [available, setAvailable] = useState(true);

  return available
    ? <SolicitarButton onClick={() => setAvailable(false)} />
    : <CancelarButton onClick={() => setAvailable(true)} />
}

function MotorciclesGrid() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Horario</TableCell>
            <TableCell align="right">Disponibles</TableCell>
            <TableCell align="right">Solicitar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>8:00am</TableCell>
            <TableCell align="right">8</TableCell>
            <TableCell align="right">
              <SomeButton />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function HomePage({ children }) {
  return (
    <div style={{
      padding: '50px 25px 25px 25px'
    }}>
      {children}
    </div>
  );
}

function Title() {
  return (
    <h1>Selección de motocicleta</h1>
  );
}

function App() {
  return (
    <>
      <TopBar />
      <HomePage>
        <Title />
        <MotorciclesGrid />
      </HomePage>
    </>
  );
}

export default App;
