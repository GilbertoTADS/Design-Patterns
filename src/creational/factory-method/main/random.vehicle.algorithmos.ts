import { randomNumers } from "../utils/random.numbers";
import { Vehicle } from "../vehicle";
import { BicycleFactory } from "../vehicle/bicycle.factory";
import { CarFactory } from "../vehicle/car.factory";

export function randomCarAlgorithm():Vehicle{
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();

  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('Fusca');

  const bicycle1 = bicycleFactory.getVehicle('Monark');
  const bicycle2 = bicycleFactory.getVehicle('Monark');

  const cars = [car1, car2, bicycle1, bicycle2];
  return cars[randomNumers(cars.length)];
}