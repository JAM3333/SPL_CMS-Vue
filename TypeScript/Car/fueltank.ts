export class FuelTank {
  constructor(public capacity: number, private currentLevel: number) {
    this.capacity = capacity;
    this.setCurrentLevel(currentLevel);
  }
  public setCurrentLevel(level: number): void {
    this.currentLevel = Math.min(level, this.capacity);
  }
  public getCurrentLevel(): number {
    return this.currentLevel;
  }
}
