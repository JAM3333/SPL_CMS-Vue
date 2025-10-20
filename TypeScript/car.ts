export class Car {
  public brand: string;
  public model: string;
  public weight: number;
  private price: number;
  private year: number;

  constructor(brand: string, model: string, weight: number, price?: number, year: number) {
    this.brand = brand;
    this.model = model;
    this.weight = weight;
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
}

