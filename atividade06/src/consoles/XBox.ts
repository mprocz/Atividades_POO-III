import IConsole from "./interfaces/IConsole";

export default class XBox implements IConsole {
    constructor(){
        this.configureGame();
        console.log("XBOX: console pronto.")
    }

    configureGame(): void {
        if (this.authToken()){
            console.log("XBOX: Iniciando configurações.");
        }
    }
    authToken(): boolean {
        console.log("XBOX: Criando sessão.");
        return true;    
    }
}