import Location from "./Location";
import Game from "./item/Game";
import IITem from "./item/interfaces/IItem";

export default class GameLocation extends Location {
    protected createItem(): IITem {
        return new Game();
    }
}
