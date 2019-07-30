import { cpus } from "os";

export default class CalendarEvent {

  private _collisions: string[] = [];
  private _position: number = 0;
  private _width: number = 0;

  constructor(
    public start: number,
    public end: number,
    public name: string
  ) {
    // No implementation yet
  }

  addCollision(name: string) {
    this._collisions.push(name);
  }

  setPosition(calendarWidth: number) { 
    let tempCollisions = [...this._collisions];
    tempCollisions.push(this.name);
    tempCollisions.sort();
    this._position = tempCollisions.indexOf(this.name);
    this._width = calendarWidth / tempCollisions.length;
    // this._left = this._width  
    console.log("temp-collisions: ", this.name, tempCollisions);
    console.log("POSITIONS: ", this._position, calendarWidth, this._width);
  }

  getWidth(): number { 
    console.log("getWidth");
    return this._width;
  }

  getCollisions(): string[] { 
    return this._collisions;
  }
}
