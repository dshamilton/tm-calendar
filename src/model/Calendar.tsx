import CalendarEvent from "./CalendarEvent";

interface InputEvent { 
  start: number;
  end: number;
  name: string;
}

declare global {
  interface Window { renderDay: any; }
}


export default class Calendar {
  public events: CalendarEvent[] = [];
  private _collisionChain: string[] = [];

  constructor(
    private _events?: CalendarEvent[]
    ) { 
    
    // Usnig bind(this) to transfer context

    this.events.forEach(event => this.detectCollisions(event));
  }

  detectCollisions(currentEvent: CalendarEvent) {
    this.events.forEach((event, i) => {
      // Check the start date of a given task is colliding within another
      if (
        (currentEvent.start > event.start && currentEvent.start < event.end) ||
        (currentEvent.end > event.start && currentEvent.end < event.end) || 
        (currentEvent.start < event.start && currentEvent.end > event.end)
      ) {
        // Add collisions for current event item to array
        currentEvent.addCollision(event.name);

        // Build a collision chain to later position components that do not directly collide
        // but form part of a chain of events that shouldn't overlap
        this._collisionChain.push(currentEvent.name);
        this._collisionChain.push(event.name);
      }
    });
    // Reduce the array to unique elements after initial build
    this._collisionChain = Array.from(new Set(this._collisionChain));
    console.log("collision-chain: ", this._collisionChain);
  }
}
