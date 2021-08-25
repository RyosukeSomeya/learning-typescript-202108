export {};

class Person {
    name: string;
    age: number;
    // constructorには戻り値の型（voidなど）は書かない
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    profile(): string {
        return `name: ${this.name}, age: ${this.age}`;
    }
}

let taro = new Person('taro', 30);
console.log(taro.profile());
// let hanako = new Person();
