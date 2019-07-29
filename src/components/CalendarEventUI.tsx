import React from 'react';
import CalendarEvent from "../model/CalendarEvent";

import './CalendarEventUI.css';
import { isProperty } from '@babel/types';

interface CalendarProps {
  event: CalendarEvent, // Change the required prop to an optional prop.
 };

const randomColour = (): string => {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  return `rgb(${x},${y},${z})`;
};

const getBackgroundColour = (): any  => {
  return {
    backgroundColor: randomColour()
  }
};

// Builds the size and position of a CalendarEvent
const buildEventSize = (event: CalendarEvent): any => { 
   return { 
     top: `${event.start}px`,
     height: `${event.end - event.start}px`,
   }
};

const buildEventUI = (event: CalendarEvent): React.CSSProperties => {
  return {
    ...getBackgroundColour(),
    ...buildEventSize(event)
  }
}

const CalendarEventUI: React.SFC<CalendarProps> = (props) => {
  return (
    <div className="calendar-event" style={buildEventUI(props.event)}>
      {props.event.name}
    </div>
  );
};

export default CalendarEventUI;
