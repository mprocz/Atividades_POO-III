import IConsole from "../consoles/interfaces/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{
    constructor(console1: IConsole){
        super(console1);
        console.log("Iniciando game play avançada.")
    }

    challenge(): void{
        console.log("Desafio aceito.")
    }
}