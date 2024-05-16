import ILandVehicle from "./interfaces/ILandVehicle";

export default class Scooter implements ILandVehicle {
    startRoute(): void {
        this.getCargo();
        console.log("Scooter: Iniciando a corrida...")
    }
    getCargo(): void {
        console.log("Scooter: Buscando passageiro...")
    }
}