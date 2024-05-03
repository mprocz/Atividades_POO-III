import IFood from "./interfaces/IFood";

export default class Hamburguer implements IFood {
    startProduction(): void {
        this.checkIngredients();
        this.setTime();
        console.log("Hamburguer: Iniciando o preparo...")
    }
    checkIngredients(): void {
        console.log("Hamburguer: Todos ingredientes disponíveis.")
    }
    setTime(): void {
        console.log("Hamburguer: O pedido ficará pronto em 20 minutos.")
    }
}