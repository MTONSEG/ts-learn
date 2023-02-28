class TextChat {
    constructor() {
        this.users = [];
        this.addUser = (user) => { this.users.push(user); };
    }
    sendMess(mess, user) {
        if (!this.users.includes(user)) {
            console.log(`You can't send message in this chat`);
        }
        else {
            for (let u of this.users) {
                if (u != user) {
                    u.getMess(mess);
                }
            }
        }
    }
}
class User {
    constructor(name, chat) {
        this.name = name;
        this.chat = chat;
        this.setChat = (chat) => { this.chat = chat; };
        this.setName = (name) => { this.name = name; };
        this.getName = () => this.name;
        this.sendMess = (mess) => { this.chat.sendMess(mess, this); };
        this.getMess = (mess) => { console.log(`${this.name}: ${mess}`); };
    }
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
//# sourceMappingURL=app.js.map