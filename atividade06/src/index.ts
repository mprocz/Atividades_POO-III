import PlayStation from "./consoles/PlayStation";
import XBox from "./consoles/XBox";
import IConsole from "./consoles/interfaces/IConsole";
import AdvancedPlay from "./games/AdvancedPlay";
import Play from "./games/Play";

class PlayGame{
    static startPlay(console1: IConsole): void{
        console.log("\n... START ...");
        const play: Play = new Play(console1)
        play.playing();
        play.result();
    }

    static startAdvancedPlay(console1: IConsole): void{
        console.log("\n... START: MODO AVANÇADO ...");
        const play: AdvancedPlay = new AdvancedPlay(console1)
        play.playing();
        play.challenge();
        play.result();
    }
}

PlayGame.startPlay(new XBox());
console.log("\n...\n");
PlayGame.startAdvancedPlay(new PlayStation());