import BycicleTransport from "./transport/BycicleTransport";
import CarTransport from "./transport/CarTransport";
import MotorcylceTransport from "./transport/MotorcycleTransport";
import Transport from "./transport/Transport";

declare var process;

let transport: Transport;

if(process.argv.includes("uber")){
    transport = new CarTransport();
}else if(process.argv.includes("eats")){
    transport = new MotorcylceTransport();
}else if (process.argv.includes("bike")){
    transport = new BycicleTransport();
}else{
    console.log("selecione o tipo de transporte!");
}

if (transport) transport.startTransport();
