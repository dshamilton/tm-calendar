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
    let tempCollisions = this._collisions;
    tempCollisions.push(this.name);
    tempCollisions.sort();
    let postion = tempCollisions.indexOf(this.name);
    console.log("POSITIONS: ", postion, calendarWidth);
  }
}
