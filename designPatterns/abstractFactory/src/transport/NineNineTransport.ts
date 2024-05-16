import Helicopter from "../vehicles/aerial/Helicopter";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import Motorcylce from "../vehicles/land/Motorcycle";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";
import ITransportFactory from "./interfaces/ITransportFactory";

export default class NineNineTransport implements ITransportFactory {
    createTransportVehicle(): ILandVehicle {
        return new Motorcylce();
    }
    createTransportAircraft(): IAircraft {
        return new Helicopter();
    }
}