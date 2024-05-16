import IBuilder from "../builders/interfaces/IBuilder";
import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Director {
    constructor (private builder : IBuilder) {}

    constructSedanCar() {
        this.builder.setVehicleType(VehicleType.SEDAN);
        this.builder.setSeat(5);
        this.builder.setEngine(new Engine(1600));
        this.builder.setTransmission(Transmission.AUTOMATIC);
        this.builder.addWheel(new Wheel(15));
        this.builder.addWheel(new Wheel(15));
        this.builder.addWheel(new Wheel(15));
        this.builder.addWheel(new Wheel(15));
    }

    constructTruck() {
        this.builder.setVehicleType(VehicleType.TRUCK);
        this.builder.setSeat(3);
        this.builder.setEngine(new Engine(15000));
        this.builder.setTransmission(Transmission.MANUAL);
        this.builder.addWheel(new Wheel(21));
        this.builder.addWheel(new Wheel(21));
        this.builder.addWheel(new Wheel(21));
        this.builder.addWheel(new Wheel(21));
        this.builder.addWheel(new Wheel(21));
        this.builder.addWheel(new Wheel(21));
    }
}