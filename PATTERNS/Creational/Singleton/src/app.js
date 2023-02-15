class User {
    constructor() { }
    ;
    static getInstance() {
        if (!User.instance) {
            User.instance = new User();
        }
        return User.instance;
    }
    setName(name) {
        this.name = name;
        return this;
    }
    setLastName(lastName) {
        this.lastName = lastName;
        return this;
    }
    getFullName() {
        return this.name + ' ' + this.lastName;
    }
}
let employee1 = User.getInstance();
let employee2 = User.getInstance();
employee1.setName('Max').setLastName('Puzanov');
//# sourceMappingURL=app.js.map