export class Transmission {
  constructor(
    public type: "manual" | "automatic" | "CVT" | "dual-clutch",
    public gears: number
  ) {
    this.type = type;
    this.gears = gears;
  }
}