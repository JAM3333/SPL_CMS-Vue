export class Chancellor implements Notify {
  private notified: boolean = false;
  constructor(private name: string) {}

  notify(): void {
    this.notified = true;
    console.log(`Chancellor ${this.name} has been notified.`);
  }
  getNotifiedStatus(): boolean {
    return this.notified;
  }
  getName(): string {
    return this.name;
  }
}
