import React from "react";
import Grid from "@material-ui/core/Grid";
import CalendarWeek from "../calendarWeek/calendar-week.component";
import CalendarUtils from "../../utils/calendar";
const Calendar = () => {
  let calendar = new CalendarUtils();
  return (
    <div>
      <h1>{calendar.getMonthName()}</h1>
      <CalendarWeek />
      <CalendarWeek />
      <CalendarWeek />
      <CalendarWeek />
      <CalendarWeek />
    </div>
  );
};

export default Calendar;
