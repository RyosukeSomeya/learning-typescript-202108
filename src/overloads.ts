export {};

// 2つの関数を引数の型に応じて処理をオーバーロードしたい
// 引数(数値)を倍にして返す関数
// function double(value: number): number {
//   return value * 2;
// }

// 引数(文字列)を倍にして返す関数
// function double(value: string): string {
//   return value + value;
// }

// シグネチャー 引数と戻り値の型を定義する
function double(value: number): number;
function double(value: string): string;
function double(value: any): any {
  // 関数の実体 型制約は行わない(シグネチャーが行うから)
  // 型を判定
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('Go '));
