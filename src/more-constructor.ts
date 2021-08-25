export {};

class Person {
    // コンストラクターにアクセス修飾子を設定した引数を渡すと初期化時できる
    constructor(public name: string, protected age: number) {}
}

const me = new Person('ICHIRO', 51);
console.log(me) // # => Person { name: 'ICHIRO', age: 51 }
