import React from "react";
import Grid from "@material-ui/core/Grid";
import CalendarWeek from "../calendarWeek/calendar-week.component";
import CalendarUtils from "../../utils/calendar";
import { Hidden } from "@material-ui/core";
import WebinarCard from "../webinarCard/webinar-card.component";
import { StyledH1, Center } from "./calendar.styles";
import Container from "@material-ui/core/Container";

const Calendar = () => {
  let calendar = new CalendarUtils();
  let numberDays = calendar.getMonthDays();
  let todayDay = calendar.getTodayDayString();
  let todayDayNumber = calendar.getTodayDayNumber();

  console.log("El numero de días del calendario es : ", numberDays);
  console.log("Hoy es : ", todayDay);
  console.log("Hoy es : ", todayDayNumber);
  console.log("El primer día del mes es : ", calendar.getFirstDay());
  const ContContext = React.createContext();

  return (
    <div>
      <Container>
        <StyledH1>{calendar.getMonthName()}</StyledH1>
      </Container>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Center>
            <WebinarCard />
          </Center>
        </Grid>
        <Hidden mdDown>
          <ContContext.Provider value={1}>
            <Grid item xs={12} md={8}>
              <CalendarWeek first={true} firstDay={calendar.getFirstDay} />
              <CalendarWeek />
              <CalendarWeek />
              <CalendarWeek />
              <CalendarWeek />
            </Grid>
          </ContContext.Provider>
        </Hidden>
      </Grid>
    </div>
  );
};

export default Calendar;
