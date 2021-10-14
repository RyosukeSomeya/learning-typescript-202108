export {};

// 数値の配列
let numbers: number[] = [1, 2, 3];

// 別の書き方(非推奨)
let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

let nijigenHairetsu = [
  ['50', '100'],
  ['150', '300'],
];

// 型が混ざっている場合（Union型(共用型)の配列）
// string, number, booleanのどれかにマッチすればOK
let hairetsu: (string | number | boolean)[] = [1, false, 'Japan'];
