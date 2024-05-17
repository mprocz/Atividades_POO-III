export default class TrackingCode{
    private _code: string;
    constructor(){
        this._code = this.generateCode();
    }
    private generateCode(): string{
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let code = '';
        for (let i = 0; i < 10; i++) {
            const newIndex = Math.floor(Math.random() * characters.length);
            code += characters.charAt(newIndex);
        }
        return code;
    }

    public getCode(): string{
        return this._code;
    }
}