import Transport from "./Transport";
import Bycicle from "./vehicles/Bycicle";
import IVehicle from "./vehicles/interfaces/IVehicle";

export default class BycicleTransport extends Transport {
    protected createTransport(): IVehicle {
        return new Bycicle();
    }

}