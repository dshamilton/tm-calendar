import CalendarEvent from "./CalendarEvent";

interface InputEvent { 
  start: number;
  end: number;
  name: string;
}

export default class Calendar {
  public events: CalendarEvent[];
  constructor(
    private _events?: CalendarEvent[]
  ) { 
    // Example events
    _events = [];
    _events.push(new CalendarEvent(30, 90, "Event-1"));
    _events.push(new CalendarEvent(60, 150, "Event-2"));
    _events.push(new CalendarEvent(120, 280, "Event-3"));
    this.events = _events;
  }

  createEvents(eventsInput: InputEvent[]): void { 
    let calendarEvents = eventsInput.map((event, i) =>  
      new CalendarEvent(event.start, event.end, `Event-${i}`)
    );
  }

  getEvents() { 

  }
}
