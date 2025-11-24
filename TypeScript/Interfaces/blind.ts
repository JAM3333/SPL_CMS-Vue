export class Blind implements Controllable {
  constructor(private name: string) {}
  
  start(): void {
    console.log(`${this.name} blind started.`);
  }
  getName(): string {
    return this.name;
  }
}
