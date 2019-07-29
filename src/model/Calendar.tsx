import CalendarEvent from "./CalendarEvent";

interface InputEvent { 
  start: number;
  end: number;
  name: string;
}

export class Calendar {
  constructor(
    private _events: CalendarEvent[]
  ) { 
    _events.push(new CalendarEvent(30, 90, "Event1"));
    _events.push(new CalendarEvent(30, 90, "Event2"));
    _events.push(new CalendarEvent(30, 90, "Event3"));
  }

  createEvents(events: InputEvent[]): void { 
    
  }
}
