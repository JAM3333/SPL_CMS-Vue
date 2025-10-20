import {Car} from './Car/car';
import {Engine} from './Car/engine';
import {Cylinder} from './Car/cylinder';
import {Transmission} from './Car/transmission';
import {FuelTank} from './Car/fueltank';

let e = new Engine("Diesel",450,[new Cylinder(1,6), new Cylinder(1,8),new Cylinder(1,6), new Cylinder(1,8)]);
let t = new Transmission("manual",6);
let fuelTank = new FuelTank(60,40);
console.log(fuelTank.getCurrentLevel());
let a = new Car("Audi","Quattro", 1500, e,t, fuelTank, 1990, 50000);

console.log(a.getEngine());
console.log(a.getYear());
console.log(a.getTransmission());
console.log(a.getFueltank().getCurrentLevel());
console.log(a.getPrice());
