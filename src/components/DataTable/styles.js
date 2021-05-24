import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  max-height: 100%;
  margin: 1em;
`;

const StyledTableContainer = styled(TableContainer)`
  max-height: 440px;
`;

export { StyledPaper, StyledTableContainer };
