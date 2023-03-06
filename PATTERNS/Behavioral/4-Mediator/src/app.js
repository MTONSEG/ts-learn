class Chatroom {
    constructor() {
        this.members = [];
    }
    addToChat(member) {
        if (this.members.includes(member)) {
            console.log(`${member.getName()} already added to this chat`);
        }
        else {
            this.members.push(member);
            if (member instanceof Admin)
                console.log('Added new Admin');
            else
                console.log(`${member.getName()} has been added to this chatroom`);
        }
    }
    removeMember(member) {
        let index = this.members.indexOf(member);
        if (index < 0)
            console.log('This member is not defined');
        else {
            this.members.splice(index, 1);
            console.log(`${member.getName()} has been removed from this chatroom`);
        }
    }
    sendMess(member, msg) {
        if (member instanceof Admin)
            console.log('\nImportant!!!\n');
        for (let current of this.members) {
            if (current != member) {
                current.getMess(msg);
            }
        }
        console.log('\n=====\n');
    }
}
class Member {
    constructor(name, chatroom) {
        this.name = name;
        this.chatroom = chatroom;
    }
    sendMess(msg) {
        this.chatroom.sendMess(this, msg);
    }
    getMess(msg) {
        console.log(`${this.name} received message: \n - ${msg}\n---------`);
    }
    getName() {
        return this.name;
    }
}
class Admin extends Member {
    constructor(chat) {
        super('Admin', chat);
        this.chat = chat;
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
//# sourceMappingURL=app.js.map