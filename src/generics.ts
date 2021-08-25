export {};

// 以下のechoは型が違うだけで、やっていることは同じ
// const echo = (arg: number): number => {
//     return arg;
// }

// const echo = (arg: string): string => {
//     return arg;
// }

// 共通化したい => genericsでリファクタリング
const echo = <T>(arg: T): T => { // T → 抽象的な型（型引数）
    return arg;
};

// 実行時に型を設定できる
console.log(echo<number>(100));
console.log(echo<string>('Hello!'));
console.log(echo<boolean>(true));

class Mirror<T> {
    constructor(public value: T) {}

    echo(): T {
        return this.value;
    }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('Hello, generics').echo());
console.log(new Mirror<boolean>(true).echo());



