import styled from "styled-components";

export const CalendarDay = styled.div`
  text-align: center;
  min-width: 120px;
  min-height: 100px;
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

export const Event = styled.div`
  text-align: center;
  width: 100%;
  background-color: red;
  color: white;
  margin-top: 5%;
`;

export const Event2 = styled.div`
  text-align: center;
  width: 100%;
  background-color: purple;
  color: white;
  margin-top: 5%;
`;
