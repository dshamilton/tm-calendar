import React from 'react';
import ReactDOM from 'react-dom'
import CalendarEventUI from "./CalendarEventUI";
import Calendar from "../model/Calendar";

import './CalendarUI.css';

export interface CalendarUIState {
  calendar: Calendar
}

class CalendarUI extends React.Component<{}, CalendarUIState> { 
  private _calendar = new Calendar();
  constructor(props: any) {
    super(props);
    this.state = { 
      calendar: this._calendar
    };
  }

  render() {
    // const { calendar } = this.state;
    return (
      <div className="calendar">
        {
          /* Implement some kind of map to convery calendar events to DOM elements */
          this.state.calendar.events.map((event) =>
            <CalendarEventUI event={event} width={event.getWidth()} />
          )
        }
      </div>
    );
  }

  componentDidMount() {
    // Using any because of findDOMNode union type
    const { calendar } = this.state;
    let calendarDOMElement: any = ReactDOM.findDOMNode(this);
    this.setEventPositions(calendarDOMElement.clientWidth);
    console.log("Calendar: ", calendarDOMElement, calendarDOMElement.clientWidth);
    console.log("calendar-events: ", calendar.events);
    this.setState({calendar});
  }

  setEventPositions(calendarWidth: number) { 
    const { calendar } = this.state;
    calendar.events.forEach(event => event.setPosition(calendarWidth));
  }
}

export default CalendarUI;
