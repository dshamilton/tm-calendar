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
    _events.push(new CalendarEvent(300, 280, "Event-4"));

    this.events = _events;
    this.events.forEach(event => this.detectCollisions(event));
    // this.events.forEach(event => this.setEventPositions(event, calendarWidth;))
    
    console.log("Events: ", this.events);
  }

  createEvents(eventsInput: InputEvent[]): void { 
    let calendarEvents = eventsInput.map((event, i) =>  
      new CalendarEvent(event.start, event.end, `Event-${i}`)
    );
  }

  detectCollisions(currentEvent: CalendarEvent) {
    this.events.forEach((event, i) => {
      // Check the start date of a given task is colliding within another
      if (
        (currentEvent.start > event.start && currentEvent.start < event.end) ||
        (currentEvent.end > event.start && currentEvent.end < event.end) || 
        (currentEvent.start < event.start && currentEvent.end > event.end)
      ) {
        currentEvent.addCollision(event.name);
      }
    });
  }
}
