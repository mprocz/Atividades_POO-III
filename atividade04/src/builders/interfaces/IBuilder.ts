import Bread from "../../components/Bread";
import Protein from "../../components/Protein";
import Salad from "../../components/Salad";
import SanduicheType from "../../components/SanduicheType";
import Sauce from "../../components/Sauce";
import Sanduiche from "../../products/Sanduiche";

export default interface IBuilder {
    reset(): void;
    getSanduiche(): Sanduiche;
    setSanduicheType(value: SanduicheType): void;
    setBread(value: Bread): void;
    setProtein(value: Protein): void;
    setSalad(value: Salad): void;
    addSauces(value: Sauce): void;
}