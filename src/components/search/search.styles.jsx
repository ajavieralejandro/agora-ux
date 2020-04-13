import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import { FaSearch } from "react-icons/fa";
import TextField from "@material-ui/core/TextField";

export const SearchContainer = styled(Paper)`
  width: 100;
`;

export const Search = styled(TextField)`
  width: 100%;
  height: 40%;
  color: white;
`;
