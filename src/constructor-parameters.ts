export {};

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let taro = new Person('taro', 30);

console.log(taro);

type PersonType = typeof Person;
type Profile = ConstructorParameters<PersonType>;
const profile: Profile = ['jiro', 44];
const jiro = new Person(...profile);
console.log(jiro)
