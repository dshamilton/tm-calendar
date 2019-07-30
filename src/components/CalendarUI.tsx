import React from 'react';
import ReactDOM from 'react-dom'
import CalendarEventUI from "./CalendarEventUI";
import Calendar from "../model/Calendar";

import './CalendarUI.css';

class CalendarUI extends React.Component { 
  private calendar = new Calendar();
  render() {

    return (
      <div className="calendar">
        {
          /* Implement some kind of map to convery calendar events to DOM elements */
          this.calendar.events.map((event) =>
            <CalendarEventUI event={event} />
          )
        }
      </div>
    );
  }

  componentDidMount() {
    // Using any because of findDOMNode union type
    let calendarDOMElement: any = ReactDOM.findDOMNode(this);
    this.setEventPositions(calendarDOMElement.clientWidth);
    console.log("Calendar: ", calendarDOMElement, calendarDOMElement.clientWidth);
  }

  setEventPositions(calendarWidth: number) { 
    this.calendar.events.forEach(event => event.setPosition(calendarWidth))
  }
}

export default CalendarUI;
