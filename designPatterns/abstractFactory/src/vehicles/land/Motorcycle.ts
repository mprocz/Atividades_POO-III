import ILandVehicle from "./interfaces/ILandVehicle";

export default class Motorcylce implements ILandVehicle {
    startRoute(): void {
        this.getCargo();
        console.log("Moto: Iniciando a corrida...")
    }
    getCargo(): void {
        console.log("Moto: Buscando carga...")
    }

}