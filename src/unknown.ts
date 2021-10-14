export {};

// unknown型 -> 型安全なany型
const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

// anyは何でもOKなので通る
let sumAny = numberAny + 10;

// unknownだと'+'できないかもしれないのでコンパイルエラー
// let sumUnknown = numberUnknown + 10;
// 回避するには? → type guardする
console.log(typeof numberUnknown); // numberが返ってくる
// 型をチェックしてnumberなら足し算する
if (typeof numberUnknown === 'number') {
  // number型が保証されたので実行できる
  let sumUnknown = numberUnknown + 10;
}
