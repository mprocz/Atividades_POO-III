import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";
import Sanduiche from "../products/Sanduiche";
import IBuilder from "./interfaces/IBuilder";

export default class SanduicheBuilder implements IBuilder {
    private sanduiche = new Sanduiche();

      reset(): void {
        this.sanduiche = new Sanduiche();
    }
    getSanduiche(): Sanduiche {
        const final = this.sanduiche;
        this.reset();
        return final;
    }
    setSanduicheType(value: SanduicheType): void {
        this.sanduiche.sanduicheType = value;
    }
    setBread(value: Bread): void {
        this.sanduiche.bread = value;
    }
    setProtein(value: Protein): void {
        this.sanduiche.protein = value;
    }
    setSalad(value: Salad): void {
        this.sanduiche.salad = value;
    }
    addSauces(value: Sauce): void {
        this.sanduiche.sauce = value;
    }
}