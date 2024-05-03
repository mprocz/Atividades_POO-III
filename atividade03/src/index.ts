import Client from "./clients/Client";
import AiqfomeDelivery from "./delivery/AiqfomeDelivery";
import IFoodDelivery from "./delivery/IFoodDelivery";
import IDeliveryFactory from "./delivery/interfaces/IDeliveryFactory";

const currentCompany: string = "AIQFOME";
let factory: IDeliveryFactory;

switch(currentCompany) {
    case  "AIQFOME":
        factory = new AiqfomeDelivery();
        break;
    case "IFOOD":
        factory = new IFoodDelivery();
        break;
    default:
        console.log("Companhia não definida");
        break;
}

const client = new Client(factory);
client.startDelivery();

