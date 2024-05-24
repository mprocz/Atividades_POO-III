import IConsole from "./interfaces/IConsole";

export default class PlayStation implements IConsole {
    constructor(){
        this.configureGame();
        console.log("Play Station: console pronto.")
    }

    configureGame(): void {
        if (this.authToken()){
            console.log("Play Station: Iniciando configurações.");
        }
    }
    authToken(): boolean {
        console.log("Play Station: Criando sessão.");
        return true;    
    }

}