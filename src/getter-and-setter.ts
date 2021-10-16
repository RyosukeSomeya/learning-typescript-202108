export {};
// * owner
//  * 所有者
//  * 初期化時に設定できる
//  * 途中で変更できない
//  * 参照できる
// * secretNumber
//  * 個人番号
//  * 初期化時に設定できる
//  * 途中で変更可能
//  * 参照できない

class MyNumberCard {
  private _owner: string; // getterを使う場合は、getterの名称と重複しないようにする（_をつけるなど）
  private _secretNumber: number; // setterを使う場合は、getterの名称と重複しないようにする（_をつけるなど）

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }
  // getterの名前とメンバー変数はか重複してはいけない。
  get owner(): string {
    return this._owner;
  }

  // setterの名前とメンバー変数はか重複してはいけない。
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('太郎', 1234567890);
console.log(card.debugPrint());
// card.owner = '次郎'; // 外部からの変更はできない
console.log(card.owner);
card.secretNumber = 1987654321; // setterによる変更
console.log(card.debugPrint());
