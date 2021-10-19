export {};

// ================
// 関数のジェネリクス
// ================

// やっていることが同じような関数（argの型が違う程度）
const echoNum = (arg: number): number => {
  return arg;
};

const echoStr = (arg: string): string => {
  return arg;
};

// ↓　この2つの関数をまとめるには

// Tは抽象的な型（型引数）
// <T>はジェネリクスの宣言
const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(100));
console.log(echo<string>('Hello'));
console.log(echo<boolean>(true));

// ================
// クラスのジェネリクス
// ================

// 初期化したnumberの値を返すクラス
class MirrorNum {
  constructor(public value: number) {}

  echo(): number {
    return this.value;
  }
}

console.log(new MirrorNum(123).echo());

// どんな型でも初期化した値を返すクラスにする
// ↓
class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

// number型
console.log(new Mirror<number>(123).echo());
// string型
console.log(new Mirror<string>('Hello！').echo());
// boolean
console.log(new Mirror<boolean>(true).echo());
