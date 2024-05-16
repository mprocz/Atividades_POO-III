import ITransportFactory from "../transport/interfaces/ITransportFactory";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";

export default class Client {
    private vehicle: ILandVehicle;
    private aircraft: IAircraft;
    private _type: string;
    
    constructor(factory: ITransportFactory, type: string){
        this.vehicle = factory.createTransportVehicle();
        this.aircraft = factory.createTransportAircraft();
    }

    public get type(): string {
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
    }

    startRoute(): void{
        if (this._type == "terrestre") {
            this.vehicle.startRoute();
        } else if (this._type == "aereo") {
            this.aircraft.startRoute();
        }
    }
}