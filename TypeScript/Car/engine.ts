import { Cylinder } from "./cylinder";

export class Engine {
  constructor(
    public fuel: string,
    public horsepower: number,
    private cylinders: Cylinder[]
  ) {
    this.fuel = fuel;
    this.horsepower = horsepower;
    this.cylinders = cylinders;
  }
  public getCylinders(): Cylinder[] {
    return this.cylinders;
  }
  public setCylinders(cylinders: Cylinder[]): void {
    this.cylinders = cylinders;
  }
}
