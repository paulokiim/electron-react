import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: black;
`;

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  width: 25em;
  padding: 0.5em;
  margin: 0.5em;
`;

const StyledTextField = styled(TextField)`
  padding: 1.5em;
  margin: 0.5em;
`;

const StyledIconButton = styled(IconButton)`
  padding: 1em;
`;

const StyledButton = styled(Button)`
  margin: 1em;
  padding: 1em;
`;

const StyledTypography = styled(Typography)`
  padding: 1em;
`;

export {
  StyledContainer,
  StyledTextField,
  StyledIconButton,
  StyledPaper,
  StyledButton,
  StyledTypography,
};
