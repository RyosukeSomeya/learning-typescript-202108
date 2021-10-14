export {};

// 文字列 -> 数値の順序だけ許可したい
['Taro', 30];
// Union型 → 要素の型は見るが、順番までは見ない
// 以下はどちらでもOK
let profileUnion1: (string | number)[] = [30, 'Taro'];
let profileUnion2: (string | number)[] = ['Taro', 30];

// Tubple型
// 型注釈通りの順番でないといけない
let profileTuple: [string, number] = ['Taro', 30];
// エラーになる
// let profileTupleNG: [string, number] = [30, 'Taro'];
