export {};

/**
 * owner
    * 所有者
    * 初期化時に設定できる
    * 途中で変更で不可能。
    * 参照可能。
 * secretNumber
    * 個人番号
    * 初期化時に設定可能
    * 途中変更可能
    * 参照できない
 */


class MyNumberCard {
    private _owner: string;
    private _secretNumber: number;

    constructor(owner: string, secretNumber: number) {
        this._owner = owner;
        this._secretNumber = secretNumber;
    }
    // getter
    get owner() {
        return this._owner;
    }
    // setter
    set secretNumber(secretNumber: number) {
        this._secretNumber = secretNumber;
    }

    debugPrint() {
        return `secretNumber: ${this._secretNumber}`;
    }
}

let card = new MyNumberCard('taro', 1234567890);
console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.debugPrint());


