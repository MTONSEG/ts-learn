class Person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
        this.getName = () => this.name;
        this.getLastName = () => this.lastName;
    }
}
class Company {
    constructor() {
        this.allPersons = {};
        this.getStaff = () => Object.keys(this.allPersons);
    }
    addPerson(name, lastName) {
        let concat = name + '_' + lastName;
        let item = this.allPersons[concat];
        if (item) {
            return item;
            console.log('This employee is already employed by the company');
        }
        this.allPersons[concat] = new Person(name, lastName);
        return this.addPerson[concat];
    }
}
let company = new Company();
company.addPerson('Max', 'Lorry');
company.addPerson('Alex', 'Smith');
company.addPerson('Max', 'Lorry');
company.addPerson('Alex', 'Smith');
company.addPerson('Max', 'Smile');
//# sourceMappingURL=app.js.map