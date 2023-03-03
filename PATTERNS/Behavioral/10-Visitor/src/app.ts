interface Visitor {
	visitDev(visitor: Developer): void;
	visitDesigner(visitor: Designer): void;
}

class NewYearBonus implements Visitor {
	visitDev(visitor: Developer): void {
		visitor.setSalary(visitor.getSalary() * 2);
	}
	visitDesigner(visitor: Designer): void {
		visitor.setSalary(visitor.getSalary() * 1.3);
	}
}

class Education implements Visitor {
	private skillsArr: string[] = ['Junior', 'Middle', 'Senior'];

	visitDev(visitor: Developer): void {
		let nextSkill: string = this.upSkill(visitor.getSkill());

		visitor.setSkill(this.upSkill(nextSkill));
	}

	visitDesigner(visitor: Designer): void {
		let nextSkill: string = this.upSkill(visitor.getSkill());

		visitor.setSkill(this.upSkill(nextSkill));
	}

	private upSkill(skill: string): string {
		let index: number = this.skillsArr.indexOf(skill);

		if (index < this.skillsArr.length - 2) {
			return this.skillsArr[index + 1];
		} else {
			return 'Senior';
		}
	}
}

abstract class Employee {
	constructor(
		private name: string,
		private skill: string,
		private salary: number
	) { }

	setName = (name: string): void => { this.name = name };
	getName = (): string => this.name;

	setSkill = (skill: string): void => { this.skill = skill };
	getSkill = (): string => this.skill;

	setSalary = (salary: number): void => { this.salary = salary };
	getSalary = (): number => this.salary;

	abstract accept(visitor: Visitor): void;
}

class Developer extends Employee {
	private position: string = 'Developer';

	accept(visitor: Visitor): void {
		visitor.visitDev(this)
	}
}

class Designer extends Employee {
	private position: string = 'Designer';

	accept(visitor: Visitor): void {
		visitor.visitDesigner(this);
	}
}

const dev = new Developer('Ivan', 'Junior', 500);
const designer = new Developer('John', 'Middle', 1500);
const bonus = new NewYearBonus();
const education = new Education();


console.log(designer.getName(), designer.getSkill(), designer.getSalary());
console.log(dev.getName(), dev.getSkill(), dev.getSalary());
console.log('===========');

dev.accept(bonus);
designer.accept(education);
designer.accept(bonus);


console.log(designer.getName(), designer.getSkill(), designer.getSalary());
console.log(dev.getName(), dev.getSkill(), dev.getSalary());
