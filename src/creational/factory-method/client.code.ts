import { randomCarAlgorithm } from "./main/random.vehicle.algorithmos";
import { randomNumers } from "./utils/random.numbers";
import { CarFactory } from "./vehicle/car.factory";
import { VehicleFactory } from "./vehicle/vehicle.factoriy";

const carFactory = new CarFactory();
const customerName = ['Ana', 'Joana','Helena','João'];

for (let i=0 ; i<10 ; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerName[randomNumers(customerName.length)]
  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = carFactory.pickUp(name,'Avião');
  newCar.stop();
  console.log('---');
}