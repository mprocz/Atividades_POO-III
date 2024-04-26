import GameLocation from "./location/GameLocation";
import Location from "./location/Location";
import MovieLocation from "./location/MovieLocation";

declare var process;

let item: Location;

if (process.argv.includes("movie")){
    item = new MovieLocation();
} else if (process.argv.includes("game")){
    item = new GameLocation();
} else {
    console.log("Selecione a sua opção...");
}

if (item) item.startItem();
