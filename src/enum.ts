export {};

// 複数名にするのが常識（必ず複数有るものなので）
enum Months {
  January,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January); // 0が割り当てられている
console.log(Months.February); // 1が割り当てられている
console.log(Months.December); // 11が割り当てられている

enum Months2 {
  January = 1, // 値を設定すると、以降の要素はインクリメントされる
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

// 値をすべてに設定するパターン
enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000',
}

let green = COLORS.GREEN;
console.log({ green });

// 存在しないキーのアクセスはエラーになる
// COLORS.YELLOW;

// 後から単体で追加も可能
enum COLORS {
  YELLOW = '#FFFF00',
  // GRAY, // エラ- → 文字列の場合はすべてに初期化が必要
  GRAY = '#CCCCC',
}
