import React from 'react';
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
        <TableBody>
          <TableRow>
            <TableCell>8:00am</TableCell>
            <TableCell align="right">8</TableCell>
            <TableCell align="right">
              <RequestMotorcycleButton />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

