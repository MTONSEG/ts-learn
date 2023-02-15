interface ICarTemplate {
	clone(): ICarTemplate
}

class MazdaCar implements ICarTemplate {
	private brand: string = 'Mazda';
	private model: string;
	private color: string = 'white'
	private gps: boolean = false;

	constructor(
		model:string
	) {
		this.model = model;
	}

	getFullName(): string {
		return `${this.brand} ${this.model}`;
	}

	setColor(color: string): void {
		this.color = color;
	}

	setGps(): void {
		this.gps = true;
	}

	clone(): this {
		let copy = Object.create(this);

		copy.brand = this.brand;
		copy.model = this.model;
		copy.color = this.color;
		copy.gps = this.gps;

		return copy;
	}
}

const mazda3 = new MazdaCar('3');
const mazda6 = new MazdaCar('6');

const mazda3WithGps = mazda3.clone();
const mazda6Black = mazda6.clone();

mazda3WithGps.setGps();
mazda6Black.setColor('black');

console.log(mazda3WithGps.getFullName());


