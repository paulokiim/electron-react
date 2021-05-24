import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { StyledPaper, StyledTableContainer } from './styles';

export default function DataTable({ rowData, columnData }) {
  const formatPrice = (price) => {
    return `R$${Number(price).toFixed(2)}`;
  };

  const getSubtotal = () => {
    return rowData.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  };

  const getTotal = () => {
    return rowData.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  };

  return (
    <>
      <StyledPaper>
        <StyledTableContainer>
          <Table stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {columnData.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rowData.map((row) => (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                  {columnData.map((column) => (
                    <TableCell key={column.id} align={column.align}>
                      {column.id === 'price'
                        ? `R$${row[column.id]}`
                        : row[column.id]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}

              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align='right'>
                  {formatPrice(getSubtotal())}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align='right'>{formatPrice(getTotal())}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </StyledTableContainer>
      </StyledPaper>
    </>
  );
}
