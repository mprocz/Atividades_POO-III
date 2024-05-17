import TrackingCode from "../utils/TrackingCode";
import ITransportadora from "./interfaces/ITransportadora";

export default class Transportadora implements ITransportadora {
    private _code: string;
    constructor(){
        let generateCode = new TrackingCode();
        this._code = generateCode.getCode();
    }

    getCode(): string {
        return this._code;
    }
    send(): void {
        console.log("TRANSPORTADORA: enviando mercadoria...")
    }
    receive(): void {
        console.log("TRANSPORTADORA: recebendo mercadoria...")
    }
}