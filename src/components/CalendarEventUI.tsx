import React from 'react';
import CalendarEvent from "../model/CalendarEvent";

import './CalendarEventUI.css';
import { isProperty } from '@babel/types';
import { runInThisContext } from 'vm';

// Typescript props definition
export interface Props {
  event: CalendarEvent,
  width: number
 };

 export interface State {}

// Create random colours to easily identify components in the UI
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
     width:  `${event.getWidth()}px`
   }
};

// Building the react style object in component props
const buildEventUI = (event: CalendarEvent): React.CSSProperties => {
  return {
    ...getBackgroundColour(),
    ...buildEventSize(event)
  }
}

export class CalendarEventUI extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    // window.renderDay = this.createEvents || {};

  }

  render() {
    return (
      <div className="calendar-event" style={buildEventUI(this.props.event)}>
        {this.props.event.name}
        <div>{this.props.event.getWidth()}</div>
      </div>
    );
  }
}

export default CalendarEventUI;
