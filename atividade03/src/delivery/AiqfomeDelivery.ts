import IDrink from "../foods/drink/interfaces/IDrink";
import Hamburguer from "../foods/food/Hamburguer";
import Beer from "../foods/drink/Beer";
import IFood from "../foods/food/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class AiqfomeDelivery implements IDeliveryFactory {
    createDeliveryFood(): IFood {
        return new Hamburguer();
    }
    createDeliveryDrink(): IDrink {
        return new Beer();
    }

}