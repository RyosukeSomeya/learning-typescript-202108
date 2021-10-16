export {};

class Person {
  // メンバー宣言の削除
  // public name: string;
  // protected age: number;
  // ↓
  // コンストラクタの引数に詰め込める
  // publicはこの場合は省略できない
  constructor(public name: string, protected age: number) {}
  // 初期化もやってくれている
  // this.name = name;
  // this.age = age;
  // }
}

const me = new Person('Taro', 39);
console.log(me);
