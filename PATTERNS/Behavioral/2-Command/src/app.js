class Database {
    constructor() {
        this.storage = [];
        this.insert = (data) => { this.storage.push(data); };
        this.update = (data, update) => {
            let indexData = this.storage.indexOf(data);
            if (indexData >= 0) {
                this.storage[indexData] = update;
            }
            else {
                console.log('data is not defined');
            }
        };
        this.remove = (data) => {
            let indexData = this.storage.indexOf(data);
            (indexData >= 0) ? this.storage.splice(indexData, 1) : console.log('data is not defined');
        };
        this.getStorage = () => this.storage;
    }
}
class InsertCommand {
    constructor(database) {
        this.database = database;
    }
    execute(data) {
        this.database.insert(data);
    }
}
class UpdateCommand {
    constructor(database) {
        this.database = database;
    }
    execute(data, update) {
        this.database.update(data, update);
    }
}
class DeleteCommand {
    constructor(database) {
        this.database = database;
    }
    execute(data) {
        this.database.remove(data);
    }
}
class Developer {
    constructor(insert, update, remove) {
        this.insert = insert;
        this.update = update;
        this.remove = remove;
        this.insertData = (data) => { this.insert.execute(data); };
        this.updateData = (data, update) => { this.update.execute(data, update); };
        this.removeData = (data) => { this.remove.execute(data); };
    }
}
let database = new Database();
let developer = new Developer(new InsertCommand(database), new UpdateCommand(database), new DeleteCommand(database));
developer.insertData('Hello');
developer.insertData('World');
developer.insertData('Quiz');
console.log(database.getStorage());
developer.updateData('Hello', 'hello');
developer.removeData('Quiz');
console.log(database.getStorage());
//# sourceMappingURL=app.js.map