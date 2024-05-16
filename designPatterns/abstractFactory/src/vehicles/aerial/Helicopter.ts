import IAircraft from "./interfaces/IAircraft";

export default class Helicopter implements IAircraft {
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Helicóptero: Hélices ligadas, iniciando decolagem...");
    }
    getCargo(): void {
        console.log("Helicóptero: Passageiro embarcado.");
    }
    checkWind() {
        console.log("Helicópter: ventos a 27km. Direção: Noroeste (NO)");
    }

}