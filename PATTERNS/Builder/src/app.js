class Car {
    constructor() {
        this.signaling = false;
        this.climateSys = false;
        this.gps = false;
    }
    go() {
        for (let i = 1; i <= this.wheels; i++) {
            console.log(`Коллесо ${i} крутится вперед`);
        }
    }
    stop() {
        for (let i = 1; i <= this.wheels; i++) {
            console.log(`Коллесо ${i} остановилось`);
        }
    }
    toggleEngine() {
        if (this.runEngine) {
            this.runEngine = false;
        }
        else {
            this.runEngine = true;
        }
    }
    openDoor(door) {
        console.log(`Открыть ${door} `);
    }
    setBrand(brand) {
        this.brand = brand;
    }
    setModel(model) {
        this.model = model;
    }
    setEngine(engine) {
        this.engine = engine;
    }
    setTransmission(gearbox) {
        this.transmission = gearbox;
    }
    setWheels(num) {
        this.wheels = num;
    }
    setSignal(value) {
        this.signaling = value;
    }
    setClimateSys(value) {
        this.climateSys = value;
    }
    setGps(value) {
        this.gps = value;
    }
    setDoors(num) {
        this.doors = num;
    }
}
class CarBuilder {
    constructor() {
        this.product = new Car();
    }
    setBrand(brand) {
        this.product.setBrand(brand);
        return this;
    }
    setModel(model) {
        this.product.setModel(model);
        return this;
    }
    setEngine(engine) {
        this.product.setEngine(engine);
        return this;
    }
    setTransmission(gearbox) {
        this.product.setTransmission(gearbox);
        return this;
    }
    setWheels(num) {
        this.product.setWheels(num);
        return this;
    }
    setSignal() {
        this.product.setSignal(true);
        return this;
    }
    setClimateSystem() {
        this.product.setClimateSys(true);
        return this;
    }
    setGPS() {
        this.product.setGps(true);
        return this;
    }
    setDoors(num) {
        this.product.setDoors(num);
        return this;
    }
    build() {
        return this.product;
    }
}
class HondaManager {
    constructor(builder) {
        this.builder = builder;
    }
    buildHondaCivic() {
        return this.builder
            .setBrand('Honda')
            .setModel('Civic')
            .setEngine('2.0 MPI')
            .setTransmission('CVT')
            .setDoors(4)
            .setWheels(4)
            .setClimateSystem()
            .build();
    }
    buildHondaAccord() {
        return this.builder
            .setBrand('Honda')
            .setModel('Accord')
            .setEngine('2.0 Turbocharged')
            .setTransmission('CVT')
            .setDoors(4)
            .setWheels(4)
            .setClimateSystem()
            .setGPS()
            .build();
    }
}
class MazdaManager {
    constructor(builder) {
        this.builder = builder;
    }
    buildMazda3() {
        return this.builder
            .setBrand('Mazda')
            .setModel('3')
            .setEngine('2.0 SkyActive')
            .setTransmission('Aisin')
            .setDoors(2)
            .setWheels(4)
            .setClimateSystem()
            .build();
    }
    buildMazda6() {
        return this.builder
            .setBrand('Mazda')
            .setModel('6')
            .setEngine('2.5 SkyActive')
            .setTransmission('Aisin')
            .setDoors(4)
            .setWheels(4)
            .setClimateSystem()
            .setGPS()
            .build();
    }
}
const carBuilder = new CarBuilder();
const hondaCivic = new HondaManager(carBuilder);
const mazdaManager = new MazdaManager(carBuilder);
let civic = hondaCivic.buildHondaAccord();
let mazda3 = mazdaManager.buildMazda3();
console.log(civic);
console.log(mazda3);
//# sourceMappingURL=app.js.map