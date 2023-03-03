class NewYearBonus {
    visitDev(visitor) {
        visitor.setSalary(visitor.getSalary() * 2);
    }
    visitDesigner(visitor) {
        visitor.setSalary(visitor.getSalary() * 1.3);
    }
}
class Tutorial {
    constructor() {
        this.skillsArr = ['Junior', 'Middle', 'Senior'];
    }
    visitDev(visitor) {
        let nextSkill = this.upSkill(visitor.getSkill());
        visitor.setSkill(this.upSkill(nextSkill));
    }
    visitDesigner(visitor) {
        let nextSkill = this.upSkill(visitor.getSkill());
        visitor.setSkill(this.upSkill(nextSkill));
    }
    upSkill(skill) {
        let index = this.skillsArr.indexOf(skill);
        if (index < this.skillsArr.length - 2) {
            return this.skillsArr[index + 1];
        }
        else {
            return 'Senior';
        }
    }
}
class Employee {
    constructor(name, skill, salary) {
        this.name = name;
        this.skill = skill;
        this.salary = salary;
        this.setName = (name) => { this.name = name; };
        this.getName = () => this.name;
        this.setSkill = (skill) => { this.skill = skill; };
        this.getSkill = () => this.skill;
        this.setSalary = (salary) => { this.salary = salary; };
        this.getSalary = () => this.salary;
    }
}
class Developer extends Employee {
    constructor() {
        super(...arguments);
        this.position = 'Developer';
    }
    accept(visitor) {
        visitor.visitDev(this);
    }
}
class Designer extends Employee {
    constructor() {
        super(...arguments);
        this.position = 'Designer';
    }
    accept(visitor) {
        visitor.visitDesigner(this);
    }
}
const dev = new Developer('Ivan', 'Junior', 500);
const designer = new Developer('John', 'Middle', 1500);
const bonus = new NewYearBonus();
const tutorial = new Tutorial();
console.log(designer.getName(), designer.getSkill(), designer.getSalary());
console.log(dev.getName(), dev.getSkill(), dev.getSalary());
console.log('===========');
dev.accept(bonus);
designer.accept(tutorial);
designer.accept(bonus);
console.log(designer.getName(), designer.getSkill(), designer.getSalary());
console.log(dev.getName(), dev.getSkill(), dev.getSalary());
//# sourceMappingURL=app.js.map