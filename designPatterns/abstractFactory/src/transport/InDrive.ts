import Drone from "../vehicles/aerial/Drone";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import Scooter from "../vehicles/land/Scooter";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class InDrive implements ITransportFactory {
    createTransportVehicle(): ILandVehicle {
        return new Scooter();
    }
    createTransportAircraft(): IAircraft {
        return new Drone();
    }
}