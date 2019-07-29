import React from 'react';

import './CalendarEventUI.css';

const randomColour = (): string => {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  return `rgb(${x},${y},${z})`;
}

const getBackgroundColour = (): React.CSSProperties  => {
  return {
    backgroundColor: randomColour()
  }
}

const CalendarEventUI: React.FC = (props) => {
  return (
    <div className="calendar-event" style={getBackgroundColour()}>

    </div>
  );
}

export default CalendarEventUI;
