interface IChat {
	sendMess(member: IMember, msg: string): void;
	addToChat(member: IMember): void;
	removeMember(member: IMember): void;
}

interface IMember {
	sendMess(msg: string): void;
	getMess(msg: string): void;
	getName(): string;

}

class Chatroom implements IChat {
	private members: IMember[] = [];

	addToChat(member: IMember): void {
		if (this.members.includes(member)) {

			console.log(`${member.getName()} already added to this chat`);

		} else {

			this.members.push(member);

			if (member instanceof Admin) console.log('Added new Admin');

			else console.log(`${member.getName()} has been added to this chatroom`);

		}
	}

	removeMember(member: IMember): void {
		let index: number = this.members.indexOf(member);

		if (index < 0) console.log('This member is not defined');
		else {
			this.members.splice(index, 1);

			console.log(`${member.getName()} has been removed from this chatroom`);
		}

	}

	sendMess(member: IMember, msg: string) {
		if (member instanceof Admin) console.log('\nImportant!!!\n');

		for (let current of this.members) {

			if (current != member) {
				current.getMess(msg);
			}

		}
		console.log('\n=====\n')
	}
}


class Member implements IMember {
	constructor(
		private name: string,
		private chatroom: IChat
	) { }

	sendMess(msg: string): void {
		this.chatroom.sendMess(this, msg);
	}

	getMess(msg: string): void {
		console.log(`${this.name} received message: \n - ${msg}\n---------`);
	}

	getName(): string {
		return this.name;
	}
}

class Admin extends Member {
	constructor(
		private chat: IChat
	) {
		super('Admin', chat);
	}
}

const chatroom = new Chatroom();

const john = new Member('John', chatroom);
const jack = new Member('Jack', chatroom);
const ron = new Member('Ron', chatroom);
const admin = new Admin(chatroom);

chatroom.addToChat(john);
chatroom.addToChat(jack);
chatroom.addToChat(ron);
chatroom.addToChat(admin);

jack.sendMess('Hi all');
john.sendMess('Hi, Jack!');
ron.sendMess('Hi, Jack!');
admin.sendMess('Update chatroom');

chatroom.removeMember(jack);
chatroom.removeMember(jack);
chatroom.addToChat(jack);
chatroom.addToChat(jack);