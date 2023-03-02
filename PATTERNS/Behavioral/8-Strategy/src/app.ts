type Employee = {
	name: string,
	age: number,
	salary: number,
}

let stringData: string[] = ['Audi', 'Volvo', 'Mercedes', 'Honda', 'Genesis', 'Hyundai', 'Mazda', 'BMW'];

let employees: Employee[] = [
	{
		name: 'Ivan',
		age: 32,
		salary: 300
	},
	{
		name: 'John',
		age: 22,
		salary: 230
	},
	{
		name: 'Abram',
		age: 45,
		salary: 1467
	},
	{
		name: 'Silver',
		age: 35,
		salary: 467
	}
]

let upBtn: string = 'up';
let downBtn: string = 'down';

interface ISortStrategy {
	execute(data: string[] | Employee[], btn: string): void
}

class BaseSort implements ISortStrategy {

	execute(data: string[], btn: string): void {
		for (let i: number = 0; i < data.length; i++) {
			for (let k: number = 0; k < data.length - 1; k++) {
				let currentEl: string = data[k];
				let nextEl: string = data[k + 1];

				if (btn === 'down') {
					if (currentEl < nextEl) {
						let current: string = data[k];

						data[k] = data[k + 1];
						data[k + 1] = current;
					}
				} else {
					if (currentEl > nextEl) {
						let current: string = data[k];

						data[k] = data[k + 1];
						data[k + 1] = current;
					}
				}

			}
		}
	}
}

class EmployeeSort implements ISortStrategy {

	execute(data: Employee[], btn: string): void {
		for (let i: number = 0; i < data.length; i++) {
			for (let k: number = 0; k < data.length - 1; k++) {
				let currentObjRank: Employee = data[k];
				let nextObjRank: Employee = data[k + 1];

				if (btn === 'down') {
					if (currentObjRank.name < nextObjRank.name) {
						let current: Employee = data[k];

						data[k] = data[k + 1];
						data[k + 1] = current;
					}
				} else {
					if (currentObjRank.name > nextObjRank.name) {
						let current: Employee = data[k];

						data[k] = data[k + 1];
						data[k + 1] = current;
					}
				}

			}
		}

	}
}

class Sort {
	private sort: ISortStrategy;

	setSort = (sort: ISortStrategy) => { this.sort = sort }

	execute = (data: string[] | Employee[], btn: string) => { this.sort.execute(data, btn) };
}



const sort = new Sort();

sort.setSort(new BaseSort());
sort.execute(stringData, downBtn);
console.log(stringData);

sort.setSort(new EmployeeSort());
sort.execute(employees, upBtn);
console.log(employees);