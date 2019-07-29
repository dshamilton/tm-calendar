import React from 'react';
import CalendarEventUI from "./CalendarEventUI";
import Calendar from "../model/Calendar";

import './CalendarUI.css';

class CalendarUI extends React.Component { 
  render() {
    let calendar = new Calendar();
    return (
      <div className="calendar">
        {
          /* Implement some kind of map to convery calendar events to DOM elements */
          calendar.events.map((event) =>
            <CalendarEventUI event={event} />
          )
        }
      </div>
    );
  }
}

export default CalendarUI;
