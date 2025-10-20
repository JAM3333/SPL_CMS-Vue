import { Engine } from "./engine";
import { Transmission } from "./transmission";
import { Fueltank } from "./fueltank";

export class Car {
  constructor(
    public brand: string,
    public model: string,
    public weight: number,
    private engine: Engine,
    private transmission: Transmission,
    private fueltank: FuelTank,
    private price?: number,
    private year: number
  ) {
    this.brand = brand;
    this.model = model;
    this.weight = weight;

    this.setEngine(engine);
    this.setTransmission(transmission);
    this.setFueltank(fueltank);
    
    this.setPrice(price);
    this.setYear(year);
  }
  public getPrice(): number {
    return this.price;
  }
  public setPrice(price?: number): void {
    this.price = price ? Math.max(price, 0) : 0;
  }
  public getYear(): number {
    return this.year;
  }
  public setYear(year: number): void {
    this.year =
      year < new Date().getFullYear() ? year : new Date().getFullYear();
  }

  public getEngine(): Engine {
    return this.engine;
  }
  public setEngine(engine: Engine): void {
    this.engine = engine;
  }

  public getTransmission(): Transmission {
    return this.transmission;
  }
  public setTransmission(transmission: Transmission): void {
    this.transmission = transmission;
  }

  public getFueltank(): FuelTank {
    return this.fueltank;
  }
  public setFueltank(fueltank: FuelTank): void {
    this.fueltank = fueltank;
  }
}
