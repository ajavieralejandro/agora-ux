import React from 'react';
import Paper from '@material-ui/core/Paper';

import { FaSearch} from "react-icons/fa";

import {SearchContainer,Search,SearchIcon} from  './search.styles';
import TextField from '@material-ui/core/TextField';


const SearchButton = () => {
    let icon = <FaSearch />;
    return(
        <Paper>
        <SearchContainer>
        <Search id="filled-basic" label="Encontra tu curso" variant="filled" 

        InputProps={{
            endAdornment: icon
          }} />

        </SearchContainer>
        </Paper>

    )
}

export default SearchButton;