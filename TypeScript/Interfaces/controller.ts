import { Controllable } from "./controllable.ts";
import { Light } from "./light.ts";
import { Heater } from "./heater.ts";
import { Blind } from "./blind.ts";

class Controller {
  constructor(private devices: Controllable[]) {}

  addDevice(device: Controllable): void {
    this.devices.push(device);
  }

  startDevice(index: number): void {
    this.devices[index].start();
  }

  getDevices(): Controllable[] {
    for (const device of this.devices) {
      console.log(`Device: ${device.getName()}`);
    }
  }
}

const h1: Heater = new Heater("Living Room");
const l1: Light = new Light("Kitchen");
const ctrl: Controller = new Controller([h1]);
ctrl.addDevice(l1);
ctrl.addDevice(new Blind("Bedroom"));
ctrl.startDevice(0);
ctrl.startDevice(1);
ctrl.getDevices();
