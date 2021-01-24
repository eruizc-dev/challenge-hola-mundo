import React from 'react';
import { useSelector } from 'react-redux';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import RequestMotorcycleButton from './requestMotorcycleButton';
import useOrders from '../../redux/orders/useOrders'

function MotorcycleTableBody() {
  const motorcicles = useSelector(s => s.availability);

  return (
    <TableBody>
      {Object.entries(motorcicles).map(([k]) => (
        <MotorcycleRow key={k} hour={k} />
      ))}
    </TableBody>
  );
}

function MotorcycleRow({ hour }) {
  const { available } = useOrders(hour);

  return (
    <TableRow>
      <TableCell>{hour}</TableCell>
      <TableCell align="right">{available}</TableCell>
      <TableCell align="right">
        <RequestMotorcycleButton hour={hour} />
      </TableCell>
    </TableRow>
  );
}

export default function AvailableMotorciclesGrid() {
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
        <MotorcycleTableBody />
      </Table>
    </TableContainer>
  );
}

