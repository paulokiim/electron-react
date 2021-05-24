import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Autocomplete from '@material-ui/lab/Autocomplete';

const StyledSearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledAutoComplete = styled(Autocomplete)`
  flex: 1;
  padding: 0.5em;
`;

const StyledTextField = styled(TextField)`
  flex: 1;
  padding: 0.5em;
`;

const StyledIconButton = styled(IconButton)`
  flex: 1;
  padding: 1em;
`;

const StyledPaper = styled(Paper)`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: row;
  margin: 1em;
  width: 40em;
  height: 3em;
`;

export {
  StyledSearchContainer,
  StyledAutoComplete,
  StyledTextField,
  StyledIconButton,
  StyledPaper,
};
