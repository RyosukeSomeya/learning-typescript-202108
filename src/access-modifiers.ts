export {};

// アクセス修飾子
class Person {
  // 属性値の型定義
  public name: string;
  // private age: number;
  protected age: number; // Androidクラス（継承先から使えるようにprotectedに変更）
  protected nationality: string;

  // コンストラクターの戻り値の型は書かない
  constructor(name: string, age: number, nationality: string) {
    // インスタンスの属性を設定
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  // メソッドは戻り値を定義
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

// Personクラスを継承
class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    // Personクラス（親）のコンストラクターで初期化
    super(name, age, nationality);
  }

  profile(): string {
    // this.ageは親クラスでprivateになっているので、継承先からは使えない
    // this.nationalityは親クラスでprotectedになっているので、継承先からでも呼べる
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let taro = new Person('Taro', 30, 'Japan');
console.log(taro.name); // nameプロパティがpublicなので外部からnameに直接アクセスできる
// console.log(taro.age); // ageプロパティがprivateなので外部からageに直接アクセスできない
console.log(taro.profile()); // インスタンス内でageにアクセスしているのでprivateのアクセス可能

let android = new Android('John', 35, 'US');
console.log(android.profile());
