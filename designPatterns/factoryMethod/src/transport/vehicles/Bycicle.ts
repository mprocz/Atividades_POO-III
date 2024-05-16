import IVehicle from "./interfaces/IVehicle";

export default class Bycicle implements IVehicle {
    startRoute(): void {
        this.getCargo();
        console.log("Bike: iniciando trajeto...");
    }
    getCargo(): void {
        console.log("Bike: encomenda pronta para entrega.");
    }

}