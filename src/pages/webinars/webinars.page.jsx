import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import Calendar from "../../components/Calendar/calendar.component";
import { Black, MarginDiv, Unusefulldiv } from "./webinars.styles";

const WebinarsPage = () => {
  return (
    <Black>
      <Unusefulldiv />
      <MarginDiv>
        <Calendar />
      </MarginDiv>
    </Black>
  );
};

export default WebinarsPage;
