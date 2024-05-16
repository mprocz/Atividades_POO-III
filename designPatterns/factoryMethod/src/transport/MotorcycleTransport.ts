import Transport from "./Transport";
import Motorcycle from "./vehicles/Motorcycle";
import IVehicle from "./vehicles/interfaces/IVehicle";

export default class MotorcylceTransport extends Transport {

    protected createTransport(): IVehicle {
        return new Motorcycle();
    }

}