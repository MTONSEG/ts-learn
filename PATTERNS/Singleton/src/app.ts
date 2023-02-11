class User {
	private static instance: User;

	private name: string;
	private lastName: string;

	private constructor() { };

	static getInstance(): User {
		if (!User.instance) {
			User.instance = new User();
		}

		return User.instance;
	}

	setName(name:string): this {
		this.name = name;
		return this;
	}
	setLastName(lastName:string): this {
		this.lastName = lastName;
		return this;
	}
	getFullName(): string {
		return this.name + ' ' + this.lastName;
	}
}


let employee1 = User.getInstance();
let employee2 = User.getInstance();

employee1.setName('Max').setLastName('Puzanov');

console.log(employee1);
