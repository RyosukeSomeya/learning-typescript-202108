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
// ↓ type Profile = [string, number] constructorメソッドの引数の型が取得できる
type Profile = ConstructorParameters<PersonType>;
