import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/AddRounded';

import {
  StyledSearchContainer,
  StyledIconButton,
  StyledAutoComplete,
  StyledTextField,
  StyledPaper,
} from './styles';

export default function Search({
  autocomplete,
  searchHandler,
  options,
  placeholder,
}) {
  const [searchText, setSearchText] = useState('');

  const handleEnter = (event, key) => {
    if (key === 'Enter') {
      searchHandler(event, searchText);
    }
  };

  return (
    <StyledSearchContainer>
      <StyledPaper>
        {autocomplete ? (
          <StyledAutoComplete
            freeSolo
            disableClearable
            options={options}
            value={searchText}
            onChange={(e, value) => setSearchText(value)}
            onKeyDown={(e) => handleEnter(e, e.key)}
            renderInput={(params) => (
              <TextField {...params} placeholder={placeholder} />
            )}
          />
        ) : (
          <StyledTextField
            value={searchText}
            placeholder={placeholder}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => handleEnter(e, e.key)}
          />
        )}
        <StyledIconButton>
          <AddIcon />
        </StyledIconButton>
      </StyledPaper>
    </StyledSearchContainer>
  );
}
