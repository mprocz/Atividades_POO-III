import IDrink from "./interfaces/IDrink";

export default class SoftDrink implements IDrink {
    startProduction(): void {
        this.getIce();
        console.log("Beer: Bebida embalada.")
    }
    getIce(): void {
        console.log("Beer: gelo reservado...")
    }
}