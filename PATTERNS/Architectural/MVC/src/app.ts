type nullString = null | string;

class View {
	getMessage(msg: string): void {
		let message: HTMLDivElement = document.querySelector('.field__mess');
		message.textContent = msg;
	}

	setMiss(location: string): void {
		let cell: HTMLElement = document.getElementById(location);
		cell.classList.add('miss');
	}

	setHit(location: string): void {
		let cell = document.getElementById(location);
		cell.classList.add('hit');
	}
}


class Model {
	private ships: string[] = ['1', '2', '3', '10'];
	private amountHit: number = 0;

	constructor(private view: View) { }

	fire(cell: string): void {
		let isHit: boolean = this.ships.includes(cell);

		if (isHit) {
			this.view.setHit(cell);
			this.view.getMessage('WOW!!! You HIT');

			this.amountHit++;

			if (this.amountHit == this.ships.length) {
				this.view.getMessage('You Win');
			}

		} else {
			this.view.setMiss(cell);
			this.view.getMessage('Miss =(');
		}
	}

	getShips(): string[] {
		return this.ships;
	}

	setShips(): void {

		for (let i: number = 0; i < this.ships.length; i++) {
			let random: string = String(Math.floor((Math.random() * (16 - 1)) + 1));

			if (!this.ships.includes(random)) {
				this.ships[i] = random;
			} else {
				i--;
			}
		}

	}
}

class Controller {
	constructor(
		private model: Model,
		private view: View
	) { }

	processShoot(shoot: string): void {
		let location: nullString = this.parseShoot(shoot);

		if (location) {
			this.model.fire(location);
		} else {
			this.view.getMessage('This cell is not defined');
		}
	}

	newGame(): void {
		this.model.setShips();
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

const view = new View();
const model = new Model(view);
const controller = new Controller(model, view);

const form: HTMLElement = document.querySelector('.form');

if (form) {
	let input: HTMLInputElement = form.querySelector('.form__input');
	let btn: HTMLButtonElement = form.querySelector('.form__btn');

	btn.addEventListener('click', (): void => {
		let value: string = input.value;

		controller.processShoot(value);

		input.value = '';
	})
}
