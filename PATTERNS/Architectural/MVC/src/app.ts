type nullString = null | string;

interface IView {
	getMessage(msg: string): void;
	setMiss(location: string): void;
	setHit(location: string): void;
}

interface IModel {
	fire(shoot: string): void;
	getShips(): string[];
}

interface IController {
	processShoot(shoot: string): void
}

class UI implements IView {
	getMessage(msg: string): void {
		let message: HTMLDivElement = document.querySelector('.field__mess');
		message.textContent = msg;
	}

	setMiss(location: string): void {
		let cell: HTMLElement = document.getElementById(location);
		cell.classList.add('miss');
		this.getMessage('Miss =(');
	}

	setHit(location: string): void {
		let cell = document.getElementById(location);
		cell.classList.add('hit');
		this.getMessage('WOW!!! You HIT');
	}
}


class Model implements IModel {
	private ships: string[] = ['1', '2', '3', '10'];
	private amountHit: number = 0;

	constructor(private view: IView) { }

	fire(cell: string): void {
		let isHit: boolean = this.ships.includes(cell);

		if (isHit) {
			this.view.setHit(cell);

			this.amountHit++;

			if (this.amountHit == this.ships.length) {
				this.view.getMessage('You Win');
			}

		} else {
			this.view.setMiss(cell);
		}
	}

	getShips(): string[] {
		return this.ships;
	}
}

class Controller implements IController {
	private amountHits: number = 0;

	constructor(
		private model: IModel,
		private view: IView
	) { }

	processShoot(shoot: string): void {
		let location: nullString = this.parseShoot(shoot);

		if (location) {
			this.model.fire(location);
		} else {
			this.view.getMessage('This cell is not defined');
		}
	}

	private parseShoot(shoot: string): nullString {
		let regex: RegExp = /[aA-dD][0-3]/g;

		if (regex.test(shoot)) {
			let rowTitle: string = shoot.charAt(0).toLowerCase();
			let columnTitle: number = Number(shoot.charAt(1));

			let row: HTMLElement = document.getElementById(rowTitle);

			let currentItemId: string =
				Array.from(row.querySelectorAll('.field__cell'))[columnTitle].getAttribute('id');

			return currentItemId;
		}

		return null;
	}
}

const view = new UI();
const model = new Model(view);
const controller = new Controller(model, view);


const form: HTMLElement = document.querySelector('.form');

if (form) {
	let input: HTMLInputElement = form.querySelector('.form__input');
	let btn: HTMLButtonElement = form.querySelector('.form__btn');

	btn.addEventListener('click', (): void => {
		let value: string = input.value;

		controller.processShoot(value);
	})
}
