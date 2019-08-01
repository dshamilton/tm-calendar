import { cpus } from "os";

export default class CalendarEvent {
  // Stores collisions with other events local to each event
  private _collisions: string[] = [];
  private _position: number = 0;
  private _width: number = 0;

  constructor(
    public start: number,
    public end: number,
    public name: string
  ) {
    
  }

  addCollision(name: string) {
    this._collisions.push(name);
  }

  // Sets the position and width of the event in the UI
  setPosition(calendarWidth: number) { 
    let tempCollisions = [...this._collisions];
    tempCollisions.push(this.name);
    tempCollisions.sort();
    this._position = tempCollisions.indexOf(this.name);
    this._width = calendarWidth / tempCollisions.length;
  }

  getWidth(): number { 
    return this._width;
  }

  getCollisions(): string[] { 
    return this._collisions;
  }
}
