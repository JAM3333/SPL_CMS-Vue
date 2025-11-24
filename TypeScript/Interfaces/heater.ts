export class Heater implements controllable {
  constructor(private name: string) {}

  start(): void {
    console.log(`${this.name} heater started.`);
  }
  getName(): string {
    return this.name;
  }
}
