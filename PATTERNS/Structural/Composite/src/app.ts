interface IEmployee {
	work(): void,
	getSalary(): number,
}

class Employee implements IEmployee {
	private name: string;
	private position: string;
	private salary: number;

	constructor(name: string, salary: number) {
		this.name = name;
		this.salary = salary;
	}

	getName = (): string => this.name;

	setName = (name: string): void => { this.name = name };

	setPosition = (position: string): void => { this.position = position };

	getSalary = (): number => this.salary;

	work = (): void => console.log('I Working Now');
}

class Designer extends Employee {
	constructor(name: string, salary: number) {
		super(name, salary);
		this.setPosition('designer');
	}

	work = (): void => console.log('Open Figma');
}

class JavaDeveloper extends Employee {
	constructor(name: string, salary: number) {
		super(name, salary);
		this.setPosition('developer');
	}

	work = (): void => console.log('Write Java Code');
}

class JsDeveloper extends Employee {
	constructor(name: string, salary: number) {
		super(name, salary);
		this.setPosition('developer');
	}

	work = (): void => console.log('Write JS Code');
}


class Company implements IEmployee {
	private empList: IEmployee[] = [];

	add(...employees: IEmployee[]): void {
		for (let emp of employees) {
			this.empList.push(emp);
		}
	}

	remove(emp: IEmployee): void {
		let indexEmp = this.empList.indexOf(emp);
		this.empList.splice(indexEmp, 1);
	}

	getSalary(): number {
		let sum = 0;

		this.empList.forEach(emp => { sum += emp.getSalary() });

		console.log(`Salary fund: $${sum}`);

		return sum;
	}

	work(): void {
		this.empList.forEach(elem => elem.work());
	}
}

let company = new Company();
let designer = new Designer('Sarah', 2380);
let jsDev = new JsDeveloper('Mark', 2500);
let javaDev = new JavaDeveloper('Simon', 4000);

company.add(designer, jsDev, javaDev);

company.work();
company.getSalary();
