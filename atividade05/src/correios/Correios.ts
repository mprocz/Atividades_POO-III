import TrackingCode from "../utils/TrackingCode";
import ICorreios from "./interfaces/ICorreios";

export default class Correios implements ICorreios {
    private _code: string;
    constructor(){
        let generateCode = new TrackingCode();
        this._code = generateCode.getCode();
    }

    getCode(): string {
        return this._code;
    }
    sendCorreios(): void {
        console.log("CORREIOS: Enviando mercadoria...")
    }
    receiveCorreios(): void {
        console.log("CORREIOS: Recebendo mercadoria...")
    }
}