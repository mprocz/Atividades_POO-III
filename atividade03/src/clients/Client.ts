import IDeliveryFactory from "../delivery/interfaces/IDeliveryFactory";
import IDrink from "../foods/drink/interfaces/IDrink";
import IFood from "../foods/food/interfaces/IFood";

export default class Client {
    private food : IFood;
    private drink : IDrink;

    constructor(factory: IDeliveryFactory) {
        this.food = factory.creatDeliveryFood();
        this.drink = factory.createDeliveryDrink();
    }

    startDelivery(): void{
        this.food.startProduction();
        this.drink.startProduction();
    }
}