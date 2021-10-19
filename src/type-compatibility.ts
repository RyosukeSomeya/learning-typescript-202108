export {};

// =================
// 型の互換性がある場合
// =================
let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible); // undefined

// any <= stringの代入はエラーは発生しない
fooCompatible = barCompatible;

console.log(typeof fooCompatible); // string型の代入でstring型になった

// =================
// 型の互換性がない場合
// =================
// ### 型が違う場合 ###
let fooIncompatible: string;
let barIncompatible: number = 1;

// numberにstringは代入できない
// fooIncompatible = barIncompatible;

// ### 型が同じ場合 ###
let fooString: string;
let barString: string = 'string';

// 同じstring型同士は問題なく代入できる
fooString = barString;

// ### リテラル型の場合 ###
// stringリテラル型の場合
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';

// string型にstringリテラル型は代入可能
// string型の一部としてstringリテラル型が存在している
fooString = fooStringLiteral;

// numberリテラル型の場合
let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;

// number型にnumberリテラル型は代入可能
// number型の一部としてnumberリテラル型が存在している
fooNumber = fooNumberLiteral;

// ### interfaceの場合 ###
interface Animal {
  age: number;
  name: string;
}
// Animalとは関係ない
// age: numberを持っている
class Person {
  // constructor(public age: number) {}
  // meに代入するためname
  constructor(public age: number, public name: string) {}
}

let me: Animal;
// PersonはAnimalと関係無いが代入できる
// オブジェクトの型の一致は関係ないということ
// オブジェクトの内部でもつメンバの型が一致しているかを見られる(構造的部分型)
me = new Person(34, 'Taro');
