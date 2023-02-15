class BmwFactory {
}
class BmwElectricCarsCreator extends BmwFactory {
    createCar(model) {
        let regex = new RegExp('[i|I][3|8]', 'g');
        if (regex.test(model)) {
            return new BmwElectric(model);
        }
        else {
            console.log('This model is not electric');
        }
    }
}
class BmwFuelCarsCreator extends BmwFactory {
    createCar(model) {
        let regex = new RegExp('[x|X][1-7]', 'g');
        if (regex.test(model)) {
            return new BmwFuel(model);
        }
        else {
            console.log('This model is not electric');
        }
    }
}
class BmwCar {
    constructor(model) {
        this.brand = 'BMW';
        this.engineRunning = false;
        this.model = model;
    }
    clickPowerButton() {
    }
    moveTransmissionSelector(item) {
        console.log(`Enabled ${item}`);
    }
}
class BmwElectric extends BmwCar {
    constructor() {
        super(...arguments);
        this.engineType = 'electric';
    }
}
class BmwFuel extends BmwCar {
    constructor() {
        super(...arguments);
        this.engineType = 'fuel';
    }
}
const bmwElectroFactory = new BmwElectricCarsCreator();
const bmwFuelFactory = new BmwFuelCarsCreator();
let x2 = bmwElectroFactory.createCar('i3');
let x5 = bmwFuelFactory.createCar('x5');
console.log(x5);
console.log(x2);
//# sourceMappingURL=app.js.map