import SoftDrink from "../foods/drink/Beer";
import IDrink from "../foods/drink/interfaces/IDrink";
import HotDog from "../foods/food/HotDog";
import IFood from "../foods/food/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class IFoodDelivery implements IDeliveryFactory {
    createDeliveryDrink(): IDrink {
        return new SoftDrink();
    }
    creatDeliveryFood(): IFood {
        return new HotDog();
    }
}
