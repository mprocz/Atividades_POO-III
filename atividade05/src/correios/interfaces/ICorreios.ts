export default interface ICorreios {
    sendCorreios(): void;
    receiveCorreios(): void;
    getCode(): string;
}