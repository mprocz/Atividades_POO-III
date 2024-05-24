import IConsole from "../consoles/interfaces/IConsole";
import IGame from "./interfaces/IGame";

export default class Play implements IGame {
    constructor(console1: IConsole){
        console.log("Iniciando jogos...");
    }

    playing(): void {
        console.log("Jogando...")
    }
    result(): void {
        console.log("Exibindo resultados.")
    }
}
