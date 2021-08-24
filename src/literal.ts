export {};

// 曜日を格納する変数
// let dayOfTheWeek: string = '日'; // 文字列というだけでは範囲が広すぎる場合
// dayOfTheWeek = '月'; // これは良い
// dayOfTheWeek = '31'; // 文字列だが、これは困る

// 文字列のリテラル型でさらに制限する
let dayOfTheWeek: '日'|'月'|'火'|'水'|'木'|'金'|'土' = '日';

// 数値のリテラル型で制限する
let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;
// month = 13; これは弾かれる

// booleanのリテラル型もある
let TRUE: true = true;
// TRUE = false; NG
