export {};

class Me {
  isProgrammer: boolean = true;
  firstName: string = 'Taro';
  lastName: string = 'Yamada';

  work() {
    return 'Hey, guys!! Are you interested in TypeScript?';
  }
}

let me = new Me();
// インスタンス化しないとアクセスできない
console.log(me.isProgrammer);
console.log(me.work());

// 静的メンバ化
class StaticMe {
  // 静的メンバ変数
  static isProgrammer: boolean = true;
  static firstName: string = 'Taro';
  static lastName: string = 'Yamada';

  // 静的メソッド
  static work() {
    return `Hey, guys!! This is ${this.firstName}! Are you interested in TypeScript?(Static)`;
  }
}

let me2 = new StaticMe();
// インスタンス化すると静的メンバ、メソッドにはアクセスできない
// console.log(me2.isProgrammer); // staticに定義するとインスタンスからはアクセスできない。
console.log(StaticMe.isProgrammer); // staticメンバ変数はインスタンス化しないでアクセスする。
console.log(StaticMe.work()); // staticメンバ変数はインスタンス化しないでアクセスする。
