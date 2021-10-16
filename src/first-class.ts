export {};

class Person {
  // 属性値の型定義
  name: string;
  age: number;

  // コンストラクターの戻り値の型は書かない
  constructor(name: string, age: number) {
    // インスタンスの属性を設定
    this.name = name;
    this.age = age;
  }

  // メソッドは戻り値を定義
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

let taro = new Person('Taro', 30);
// let hanako = new Person();
console.log(taro);
console.log(taro.profile());
