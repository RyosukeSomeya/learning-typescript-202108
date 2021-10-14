export {};

// 文字列のリテラル型
// 曜日を管理したい変数
let dayOfTheWeekString: string = '日';
// stringなので曜日以外の文字列も受け入れてしまう状態になっている
dayOfTheWeekString = '月';
dayOfTheWeekString = '31'; // 型的には間違いではない

// ↓
// リテラル型として設定してある文字列しか受け入れなくなる
let dayOfTheWeekLiteral: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';
dayOfTheWeekLiteral = '月';
// dayOfTheWeekLiteral = '31'; // NG リテラルで設定してない型は受け入れない

// 数値のリテラル型
let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;
// month = 13; // リテラルで設定していないので受け入れない

// booleranのリテラル型
let TRUE: true = true; // falseは設定できなくなる
// TRUE = false; // falseは設定できなくなる
