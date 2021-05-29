import { Bicycle } from "../bicyle";
import { Vehicle } from "../vehicle";
import { VehicleFactory } from "./vehicle.factoriy";

export class BicycleFactory extends VehicleFactory{
  getVehicle(vehicleName:string):Vehicle{
    return new Bicycle(vehicleName);
  }
}