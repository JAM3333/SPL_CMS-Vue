export interface Notify {
  notified: boolean;
  notify(): void;
  getNotifiedStatus(): boolean;
  getName(): string;
}
