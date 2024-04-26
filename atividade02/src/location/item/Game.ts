import IITem from "./interfaces/IItem";

export default class Game implements IITem {
    start(): void {
        this.getDescription();
        console.log("   Iniciando a locação do jogo.");
    }
    getDescription(): void {
        console.log("\nPlants vs. Zombies é um jogo eletrônico de tower defense e estratégia.");
    }
}
