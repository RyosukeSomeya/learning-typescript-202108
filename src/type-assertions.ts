export {};

let name: any = 'Taro';

// nameの文字列の長さを格納
let length = name.length;

// nameの長さが数値で入っているので、文字列を再代入することはしたくない...
length = 'foo';

// ↓ 手動で型注釈をつける

// 変数に型注釈をつける
let length2: number = name.length;

// 文字列は受け付けない
// length2 = 'foo';

// ↓ 型アサーションを使う1
// number型になる
let length3 = name.length as number;

// ↓ 型アサーションを使う2
// number型になる
// nameをstringと確定させることで、lengthの戻りがnumberと確定できる確定できるので
// length4の型はnumberになる
let length4 = (name as string).length;
// 非推奨 (JSXに似ているので)
let length5 = (<string>name).length;
