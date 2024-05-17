import ICorreios from "../correios/interfaces/ICorreios";
import Transportadora from "../transportadora/Transportadora";

export default class TransportadoraAdapter implements ICorreios {
    constructor(private _transportadora: Transportadora){
        console.log("\niniciando adaptador de transportadora...")
    }
    
    getCode(): string {
        return this._transportadora.getCode();
    }
    sendCorreios(): void {
        this._transportadora.send();
    }
    receiveCorreios(): void {
        this._transportadora.receive();
    }
}