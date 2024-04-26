import IITem from "./interfaces/IItem";

export default class Movie implements IITem {
    start(): void {
        this.getDescription();
        console.log("   Iniciando locação do filme.")
    }
    getDescription(): void {
        console.log("\nOs Suspeitos é um filme dirigido por Denis Villeneuve com Hugh Jackman, e Jake Gyllenhaal.")
    }
}
