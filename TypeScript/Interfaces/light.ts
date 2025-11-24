export class Light implements controllable {
  constructor(private name: string) {}

  start(): void {
    console.log(`${this.name} light started.`);
  }
  getName(): string {
    return this.name;
  }
}
