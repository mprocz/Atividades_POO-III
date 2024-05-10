export default class Protein {
    private _quantity: number;
    private _cooking: string;

	constructor(quantity: number, cooking: string) {
		this._quantity = quantity;
		this._cooking = cooking;
	}

    /**
     * Getter quantity
     * @return {number}
     */
	public get quantity(): number {
		return this._quantity;
	}

    /**
     * Getter cooking
     * @return {string}
     */
	public get cooking(): string {
		return this._cooking;
	}

    /**
     * Setter quantity
     * @param {number} value
     */
	public set quantity(value: number) {
		this._quantity = value;
	}

    /**
     * Setter cooking
     * @param {string} value
     */
	public set cooking(value: string) {
		this._cooking = value;
	}
	
}