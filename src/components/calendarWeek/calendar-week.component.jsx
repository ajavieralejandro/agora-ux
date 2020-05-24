import React from "react";
import Grid from "@material-ui/core/Grid";
import CalendarCard from "../calendarCard/calendar-card.component";

const CalendarWeek = ({ first }) => {
  console.log("Estoy recibiendo de calendario general : ", first);
  return (
    <div>
      <Grid
        container
        xs={12}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <CalendarCard day={first ? "Lunes" : null}>1</CalendarCard>
        </Grid>
        <Grid item>
          <CalendarCard day={first ? "Martes" : null} />
        </Grid>
        <Grid item>
          <CalendarCard day={first ? "Miercoles" : null} />
        </Grid>

        <Grid item>
          <CalendarCard day={first ? "Jueves" : null} />
        </Grid>

        <Grid item>
          <CalendarCard day={first ? "Viernes" : null} />
        </Grid>

        <Grid item>
          <CalendarCard day={first ? "Sabado" : null} />
        </Grid>

        <Grid item>
          <CalendarCard day={first ? "Domingo" : null} />
        </Grid>
      </Grid>
    </div>
  );
};

export default CalendarWeek;
