import styled from "styled-components";
import { Link } from "react-router-dom";

export const CourseCardContainer = styled.div`
  max-height: 120px; /* length values */
`;

export const ButtonDiv = styled.div`
  float: right;
`;

export const StyledLink = styled(Link)`
  color: #009999
  display: block;
  &:hover {
    color: #005580;
  }
  font-family: "Nunito", sans-serif;
`;
