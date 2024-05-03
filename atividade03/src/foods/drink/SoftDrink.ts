import IDrink from "./interfaces/IDrink";

export default class SoftDrink implements IDrink {
    startProduction(): void {
        console.log("SoftDrink: Bebida embalada")
    }
    getIce(): void {
        console.log("SoftDrink: gelo reservado...")
    }
}