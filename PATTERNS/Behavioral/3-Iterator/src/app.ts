type CarInfo = {
	model: string,
	color: string,
	price: number
}

type CarList = {
	[key: string]: CarInfo
}

let listCars: CarList = {
	audi: { model: 'A3', color: 'black', price: 19000 },
	bmw: { model: 'X3', color: 'black', price: 25000 },
	honda: { model: 'Civic', color: 'black', price: 17000 },
	hyundai: { model: 'Accent', color: 'white', price: 7500 },
};

interface IIterator<T> {
	nextEl(): T,
	hasNext(): boolean
}

interface ICarAggregator {
	createCarIterator(): IIterator<CarInfo>
}

class CarIterator implements IIterator<CarInfo> {

	private index: number;
	private collection: CarList;
	private keys: string[];

	constructor(list: CarList) {
		this.index = 0;
		this.keys = Object.keys(list);
		this.collection = list;
	}

	nextEl = (): CarInfo => this.collection[this.keys[this.index++]];

	hasNext = (): boolean => this.keys.length > this.index;
}


class CarAggregator implements ICarAggregator {

	constructor(
		private collection: CarList
	) { }

	createCarIterator(): IIterator<CarInfo> {
		return new CarIterator(this.collection);
	}

}

const carFactory = new CarAggregator(listCars);
const carIterator = carFactory.createCarIterator();

while (carIterator.hasNext()) console.log(carIterator.nextEl());


