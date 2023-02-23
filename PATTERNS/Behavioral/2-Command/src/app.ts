class Database {
	private storage: string[] = [];

	insert = (data: string): void => { this.storage.push(data) };

	update = (data: string, update: string): void => {
		
		let indexData: number = this.storage.indexOf(data);

		if (indexData >= 0) {
			this.storage[indexData] = update;
		} else {
			console.log('data is not defined');
		}
	}

	remove = (data: string): void => {
		let indexData: number = this.storage.indexOf(data);

		(indexData >= 0) ? this.storage.splice(indexData, 1) : console.log('data is not defined');
	}

	getStorage = (): string[] => this.storage;
}


interface ICommand {
	execute(data?: string, update?: string): void,
}


class InsertCommand implements ICommand {
	constructor(
		private database: Database,
	) { }

	execute(data: string): void {
		this.database.insert(data);
	}
}

class UpdateCommand implements ICommand {
	constructor(
		private database: Database,
	) { }

	execute(data: string, update: string): void {
		this.database.update(data, update);
	}
}

class RemoveCommand implements ICommand {
	constructor(
		private database: Database,
	) { }

	execute(data: string): void {
		this.database.remove(data);
	}
}

class Developer {
	constructor(
		private insert: ICommand,
		private update: ICommand,
		private remove: ICommand,
	) { }

	insertData = (data: string): void => { this.insert.execute(data) };
	updateData = (data: string, update: string) => { this.update.execute(data, update) };
	removeData = (data: string) => { this.remove.execute(data) };
}

let database = new Database();

let developer = new Developer(
	new InsertCommand(database),
	new UpdateCommand(database),
	new RemoveCommand(database)
);

developer.insertData('Hello');
developer.insertData('World');
developer.insertData('Quiz');

console.log(database.getStorage());

developer.updateData('Hello', 'hello');
developer.removeData('Quiz');

console.log(database.getStorage());