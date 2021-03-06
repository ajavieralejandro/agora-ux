import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { FaSearch } from "react-icons/fa";

import { SearchContainer, Search, SearchIcon } from "./search.styles";
import TextField from "@material-ui/core/TextField";

const SearchButton = () => {
  let icon = <FaSearch />;
  return (
    <SearchContainer>
      <Search
        id="filled-secondary"
        label="Encontra tu curso"
        variant="filled"
        color="secondary"
        InputProps={{
          endAdornment: icon
        }}
      />
    </SearchContainer>
  );
};

export default SearchButton;
