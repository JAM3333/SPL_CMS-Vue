import { Notify } from "./Notify.ts";
import { Child } from "./Child.ts";
import { God } from "./God.ts";
import { Chancellor } from "./Chancellor.ts";

class Santa {
  constructor(private notifiable: Notify[]) {}

  addNotifiable(notify: Notify): void {
    this.notifiable.push(notify);
  }

  notify(index: number): void {
    this.notifiable[index].notify();
  }
  notifyAll(): void {
    for (const notify of this.notifiable) {
      notify.notify();
    }
  }
  getNotifiedStatus(index: number): boolean {
    return this.notifiable[index].getNotifiedStatus();
  }
  getAllNotifiedStatus(): void {
    for (const notify of this.notifiable) {
      console.log(
        `${notify.getName()} notified status: ${notify.getNotifiedStatus()}`
      );
    }
  }

  getNotifiables(): Notify[] {
    for (const notify of this.notifiable) {
      console.log(`Notifiable: ${notify.getName()}`);
    }
  }
}

const c1: Child = new Child("Nils");
const g1: God = new God("Holy God");
const santa: Santa = new Santa([c1]);

santa.addNotifiable(g1);
santa.addNotifiable(new Chancellor("David"));
santa.notify(0);
santa.getNotifiedStatus(0);

console.log(" ");
santa.getAllNotifiedStatus();
console.log(" ");

santa.notify(1);
santa.getNotifiables();
santa.notifyAll();

console.log(" ");
santa.getAllNotifiedStatus();
