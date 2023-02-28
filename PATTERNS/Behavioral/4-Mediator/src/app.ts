interface IChat {
	sendMess(mess: string, user: IUser): void,
}

interface IUser {
	sendMess(mess: string): void,
	getMess(mess: string): void,
}

class TextChat implements IChat {

	private users: IUser[] = [];

	addUser = (user: IUser) => { this.users.push(user) }

	sendMess(mess: string, user: IUser): void {
		if (!this.users.includes(user)) {
			console.log(`You can't send message in this chat`);
		} else {
			for (let u of this.users) {

				if (u != user) {
					u.getMess(mess);
				}

			}
		}
	}
}

class User implements IUser {
	constructor(
		private name: string,
		private chat: IChat,
	) { }

	setChat = (chat: IChat) => { this.chat = chat };

	setName = (name: string): void => { this.name = name };

	getName = (): string => this.name;

	sendMess = (mess: string): void => { this.chat.sendMess(mess, this) };

	getMess = (mess: string): void => { console.log(`${this.name}: ${mess}`) };

}

const textChat = new TextChat();

const ivan = new User('Ivan', textChat);
const vlad = new User('Vlad', textChat);
const max = new User('Max', textChat);

textChat.addUser(max);
textChat.addUser(vlad);
textChat.addUser(ivan);

max.sendMess('I am first!');
vlad.sendMess('I am second!');