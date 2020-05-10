import React from "react";
import Grid from "@material-ui/core/Grid";
import CalendarCard from "../calendarCard/calendar-card.component";

const CalendarWeek = () => {
  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <CalendarCard />
        <CalendarCard />
        <CalendarCard />
        <CalendarCard />
        <CalendarCard />
        <CalendarCard />
        <CalendarCard />
      </Grid>
    </div>
  );
};

export default CalendarWeek;
