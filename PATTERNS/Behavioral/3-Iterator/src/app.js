//* Database =)
let listStr = ['audi', 'bmw', 'honda', 'hyundai'];
let listNum = [19000, 25000, 17000, 7500];
let listCars = {
    audi: { model: 'A3', color: 'black', price: 19000 },
    bmw: { model: 'X3', color: 'black', price: 25000 },
    honda: { model: 'Civic', color: 'black', price: 17000 },
    hyundai: { model: 'Accent', color: 'white', price: 7500 },
};
class CarIterator {
    constructor(list) {
        this.nextEl = () => this.collection[this.keys[this.index++]];
        this.hasNext = () => this.keys.length > this.index;
        this.index = 0;
        this.keys = Object.keys(list);
        this.collection = list;
    }
}
class CarAggregator {
    constructor(collection) {
        this.collection = collection;
    }
    createCarIterator() {
        return new CarIterator(this.collection);
    }
}
const carFactory = new CarAggregator(listCars);
const carIterator = carFactory.createCarIterator();
while (carIterator.hasNext())
    console.log(carIterator.nextEl());
//# sourceMappingURL=app.js.map