import SanduicheBuilder from "./builders/SanduicheBuilder";
import IBuilder from "./builders/interfaces/IBuilder";
import Director from "./directors/Director";
import Sanduiche from "./products/Sanduiche";

const builder: IBuilder = new SanduicheBuilder();
const director = new Director(builder);

console.log("\nMontando sanduiche iche...")
director.constructHotDog();
const hotDog: Sanduiche = builder.getSanduiche();
console.log("Tipo:", hotDog.sanduicheType);
console.log("Pão:", hotDog.bread);
console.log("Proteína:\n    - Quantidade: ", hotDog.protein.quantity, "\n    - Ponto da carne:", hotDog.protein.cooking);
console.log("Salada:", hotDog.salad);
console.log("Molhos:", hotDog.sauce);


console.log("\nMontando sanduiche iche...")
director.constructXSalada();
const xSalada: Sanduiche = builder.getSanduiche();
console.log("Tipo:", hotDog.sanduicheType);
console.log("Pão:", hotDog.bread);
console.log("Proteína:\n    - Quantidade: ", hotDog.protein.quantity, "\n    - Ponto da carne:", hotDog.protein.cooking);
console.log("Salada:", hotDog.salad);
console.log("Molhos:", hotDog.sauce);
