class Employee {
    constructor(name, salary) {
        this.getName = () => this.name;
        this.setName = (name) => { this.name = name; };
        this.setPosition = (position) => { this.position = position; };
        this.getSalary = () => this.salary;
        this.work = () => console.log('I Working Now');
        this.name = name;
        this.salary = salary;
    }
}
class Designer extends Employee {
    constructor(name, salary) {
        super(name, salary);
        this.work = () => console.log('Open Figma');
        this.setPosition('designer');
    }
}
class JavaDeveloper extends Employee {
    constructor(name, salary) {
        super(name, salary);
        this.work = () => console.log('Write Java Code');
        this.setPosition('developer');
    }
}
class JsDeveloper extends Employee {
    constructor(name, salary) {
        super(name, salary);
        this.work = () => console.log('Write JS Code');
        this.setPosition('developer');
    }
}
class Company {
    constructor() {
        this.empList = [];
    }
    add(...employees) {
        for (let emp of employees) {
            this.empList.push(emp);
        }
    }
    remove(emp) {
        let indexEmp = this.empList.indexOf(emp);
        this.empList.splice(indexEmp, 1);
    }
    getSalary() {
        let sum = 0;
        this.empList.forEach(emp => { sum += emp.getSalary(); });
        console.log(`Salary fund: $${sum}`);
        return sum;
    }
    work() {
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
//# sourceMappingURL=app.js.map