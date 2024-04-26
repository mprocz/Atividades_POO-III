import Location from "./Location";
import Movie from "./item/Movie";
import IITem from "./item/interfaces/IItem";

export default class MovieLocation extends Location {
    protected createItem(): IITem {
        return new Movie();
    
    }
}