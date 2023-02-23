interface IPerson {
	getName(): string;
	getLastName(): string,
}

class Person implements IPerson {
	constructor(
		private name: string,
		private lastName: string,
	) { }

	getName = (): string => this.name;
	getLastName = (): string => this.lastName;
}

class Company {
	private allPersons: { [key: string]: Person } = {};

	addPerson(name: string, lastName: string): IPerson {
		let concat: string = name + '_' + lastName;
		let item = this.allPersons[concat];

		if (item) {
			return item;
			console.log('This employee is already employed by the company');
		}

		this.allPersons[concat] = new Person(name, lastName);

		return this.addPerson[concat];
	}

	getStaff = (): string[] => Object.keys(this.allPersons);
}

let company = new Company();

company.addPerson('Max', 'Lorry');
company.addPerson('Alex', 'Smith');
company.addPerson('Max', 'Lorry');
company.addPerson('Alex', 'Smith');
company.addPerson('Max', 'Smile');


