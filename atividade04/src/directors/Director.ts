import IBuilder from "../builders/interfaces/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Director {
    constructor (private builder : IBuilder) {}

    constructHotDog(){
        this.builder.setSanduicheType(SanduicheType.HOTDOG);
        this.builder.setBread(Bread.PAO_DE_LEITE);
        this.builder.setProtein(new Protein(2, "Default"));
        this.builder.setSalad(Salad.TOMATO);
        this.builder.addSauces(Sauce.CATCHUP);
        this.builder.addSauces(Sauce.MUSTARD);
        this.builder.addSauces(Sauce.MAYONNAISE);
    }
    constructXSalada(){
        this.builder.setSanduicheType(SanduicheType.XSALADA);
        this.builder.setBread(Bread.PAO_DE_HAMBURGUER);
        this.builder.setProtein(new Protein(3, "Medium Rare"));
        this.builder.setSalad(Salad.LETTUCE_TOMATO);
        this.builder.addSauces(Sauce.CATCHUP);
        this.builder.addSauces(Sauce.MAYONNAISE);
    }
}