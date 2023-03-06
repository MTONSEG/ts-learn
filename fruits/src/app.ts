interface IFruit {
	getName(): string,
	getWeight(): number,
	getColor(): string
}

abstract class Fruit implements IFruit {
	constructor(
		private name: string,
		private weight: number,
		private color: string,
	) { }

	static randomInt(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	static createGroup(...rest: IFruit[]): IFruit[] {
		return rest;
	}

	static sort(arr: IFruit[], rank: string): void {
		for (let i: number = 0; i < arr.length; i++) {

			for (let k: number = 0; k < arr.length - 1; k++) {
				let first: number = arr[k][rank];
				let second: number = arr[k + 1][rank];

				if (first > second) {
					let save: IFruit = arr[k];

					arr[k] = arr[k + 1];
					arr[k + 1] = save;
				}

			}

		}
	}

	static mix(...rest: IFruit[]): IFruit {
		let newName: string = '';
		let weight: number = 0;
		let randomNum = Fruit.randomInt(0, rest.length - 1);
		let color: string = rest[randomNum].getColor();

		for (let item of rest) {
			newName += item.getColor().slice(0, 4).toLowerCase();
			weight += item.getWeight();
		}

		weight = Number((weight / rest.length).toFixed(2));
		newName = newName[0].toUpperCase() + newName.slice(1);

		return new Apple(newName, weight, color);
	}

	abstract getFullInfo(): string;

	getName(): string {
		return this.name;
	}

	setName(name: string): void {
		this.name = name;
	}

	getColor(): string {
		return this.color;
	}

	setColor(color: string): void {
		this.color = color;
	}
	getWeight(): number {
		return this.weight;
	}

	setWeight(weight: number): void {
		this.weight = weight;
	}
}


class Apple extends Fruit {
	getFullInfo(): string {
		let name: string = this.getName();
		let color: string = this.getColor();

		return `${name} ${color}`;
	}
}

class Banana extends Fruit {
	getFullInfo(): string {
		let name: string = this.getName();
		let color: string = this.getColor();

		return `${name} ${color}`;
	}
}

class Cherry extends Fruit {
	getFullInfo(): string {
		let name: string = this.getName();
		let color: string = this.getColor();

		return `${name} ${color}`;
	}
}


let apple = new Apple('Apple', 23, 'green');
let banana = new Banana('Banana', 40, 'yellow');
let cherry = new Cherry('Cherry', 10, 'red');

let result: IFruit = Fruit.mix(apple, cherry);

let groupFruits = Fruit.createGroup(apple, banana, cherry);

Fruit.sort(groupFruits, 'weight');


