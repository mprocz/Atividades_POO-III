import ILandVehicle from "../land/interfaces/ILandVehicle";
import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft {
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Drone: Iniciando a vôo...")
    }
    checkWind() {
        console.log("Drone: ventos a 44KM/h. Direção: Sul (S)")
    }
    getCargo(): void {
        console.log("Drone: Buscando encomenda...")
    }
}