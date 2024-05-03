import IFood from "./interfaces/IFood";

export default class HotDog implements IFood {
    startProduction(): void {
        this.checkIngredients();
        this.setTime();
        console.log("Hot Dog: Iniciando o preparo...")
    }
    checkIngredients(): void {
        console.log("Hot Dog: Todos ingredientes disponíveis.")
    }
    setTime(): void {
        console.log("Hot Dog: O pedido ficará pronto em 15 minutos.")
    }
}
