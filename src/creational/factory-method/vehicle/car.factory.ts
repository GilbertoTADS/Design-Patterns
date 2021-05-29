import { Car } from "../car";
import { Vehicle } from "../vehicle";
import { VehicleFactory } from "./vehicle.factoriy";

export class CarFactory extends VehicleFactory{
  getVehicle(vehicleName:string):Vehicle{
    return new Car(vehicleName)
  }
}