import IAircraft from "./interfaces/IAircraft";

export default class Airplane implements IAircraft {
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Avião: Iniciando a decolagem...");
    }
    getCargo(): void {
        console.log("Avião: Passageiros embarcados.");
    }
    checkWind() {
        console.log("Avião: vento a 25km!");
    }

}