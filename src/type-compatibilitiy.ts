export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';

// stringのリテラル型はstring型に含まれるのでOK
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1975 = 1975;

// numberのリテラル型はnumber型に含まれるのでOK
fooNumber = fooNumberLiteral;

interface Animal {
    age: number;
    name: string;
}

class Person {
    constructor(public age: number, public name: string) {}
}

// PersonとAnimalは関係がない...
let me: Animal;
// オブジェクトの型ではなく、メンバーの型が一致しているかどうかを見る
me = new Person(43, 'taro'); // 代入できてしまう
console.log({ me })
