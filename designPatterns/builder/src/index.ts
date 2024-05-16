import VehicleBuilder from "./builders/VehicleBuilder";
import IBuilder from "./builders/interfaces/IBuilder";
import Director from "./director/Director";
import Vehicle from "./products/Vehicle";

const builder : IBuilder = new VehicleBuilder();
const director : Director = new Director(builder);
director.constructSedanCar();
const sedan : Vehicle = builder.getVehicle();
console.log("construindo veículo...")
console.log(sedan.vehicleType);
console.log(sedan.engine.power);

director.constructTruck();
const truck : Vehicle = builder.getVehicle();
console.log("construindo veículo...")
console.log(truck)
console.log(truck.vehicleType);
console.log(truck.engine.power);


/**
 *  detalhes
 *  novos vehicles
 *  novo tipo moto
 */