export default interface ITransportadora {
    send(): void;
    receive(): void;
    getCode(): string;
}