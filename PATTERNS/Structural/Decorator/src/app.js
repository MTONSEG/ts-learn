class Data {
}
Data.storage = [];
class DataSource {
    write(data) {
        Data.storage.push(data);
    }
    read(index) {
        let item = Data.storage[index];
        if (item == undefined)
            console.log(`Enter an index from 0 to ${Data.storage.length - 1}`);
        return Data.storage[index];
    }
}
let source = new DataSource();
source.write('Hello');
source.write('world');
class WordDecorator {
    constructor(component) {
        this.component = component;
    }
    write(data) {
        this.component.write(data);
    }
    read(index) {
        return this.component.read(index);
    }
}
class BigWord extends WordDecorator {
    write(data) {
        let result = data.toUpperCase();
        this.component.write(result);
    }
}
class ReverseWords extends WordDecorator {
    write(data) {
        let result = data.split(' ').reverse().join(' ');
        this.component.write(result);
    }
}
let bigWord = new BigWord(source);
let reverseWords = new ReverseWords(source);
bigWord.write('hello');
reverseWords.write('this is a magic');
source.read(3);
//# sourceMappingURL=app.js.map