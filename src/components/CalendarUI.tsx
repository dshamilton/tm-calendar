import React from 'react';
import ReactDOM from 'react-dom'
import CalendarEventUI from "./CalendarEventUI";
import CalendarEvent from "../model/CalendarEvent";
import Calendar from "../model/Calendar";

import './CalendarUI.css';

export interface CalendarUIState {
  calendar: Calendar,
  calendarWidth: number
}

interface InputEvent { 
  start: number;
  end: number;
  name: string;
}

class CalendarUI extends React.Component<{}, CalendarUIState> { 
  private _calendar = new Calendar();
  private _eventIndex = 0;
  constructor(props: any) {
    super(props);
    window.renderDay = this.createEvents.bind(this) || {};

    this.state = { 
      calendar: this._calendar,
      calendarWidth: 0
    };
  }

  createEvents(eventsInput: InputEvent[]): void { 
    const { calendar } = this.state;
    let calendarEvents = eventsInput.map((event, i) =>  {
      this._eventIndex += 1;
      return new CalendarEvent(event.start, event.end, `Event-${this._eventIndex}`)
    });

    calendar.events = calendar.events.concat(calendarEvents); 
    this.setEventPositions();
    this.setState({calendar})
  }

  render() {
    return (
      <div className="calendar">
        {
          /* Implement some kind of map to convery calendar events to DOM elements */
          this.state.calendar.events.map((event) =>
            <CalendarEventUI key={event.name} event={event} width={event.getWidth()} />
          )
        }
      </div>
    );
  }

  // Getting DOM node once component has been mounted
  componentDidMount() {
    this.setEventPositions();
  }

  // Set the position of the element using the width of the calendar UI element passed
  // down as a basis
  // TODO: Make this reponsive by calling this function using the Window.resize event
  setEventPositions() { 
    // Using any because of findDOMNode union type
    let calendarDOMElement: any = ReactDOM.findDOMNode(this);
    const { calendar, calendarWidth } = this.state;
    console.log('cal-width: ', calendarWidth)
    this.setState({ calendar, calendarWidth: calendarDOMElement.clientWidth });
    calendar.events.forEach(event => event.setPosition(calendarWidth));

  }
}

export default CalendarUI;
