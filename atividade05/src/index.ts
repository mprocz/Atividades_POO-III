import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import Correios from "./correios/Correios";
import ICorreios from "./correios/interfaces/ICorreios";
import Transportadora from "./transportadora/Transportadora";

let envio: ICorreios;

let empresa: string = "transportadora";
if (empresa.match("correios")){
    envio = new Correios();
}else if (empresa.match("transportadora")){
    envio = new TransportadoraAdapter(new Transportadora());
}

console.log("\nCódigo de rastreio: "+envio.getCode());
envio.receiveCorreios();
envio.sendCorreios();
