import styled from "styled-components";

export const CalendarDay = styled.div`
  text-align: center;
  min-width: 90px;
  min-height: 110px;
  background-color: white;
  color: black;
  border-style: solid;

  border-color: grey;
  border-width: thin;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`;
