import React from "react";
import { CalendarDay, Event, Event2 } from "./calendar-card.styles";

const CalendarCard = ({ day, event }) => {
  console.log("Estoy recibiendo de semana calendario : ", day);
  return (
    <div>
      <CalendarDay>
        <p>{day}</p>
        {event ? <Event>Webinar de Testeo</Event> : null}
        {event ? <Event2>Webinar de Testeo 2</Event2> : null}
      </CalendarDay>
    </div>
  );
};

export default CalendarCard;
