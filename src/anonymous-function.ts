export {};

// 無名関数
let bmi = function (height: number, weight: number): number {
  return weight / (height * height);
};

// 変数に対してアノテーション
let bmi2: (height: number, weight: number) => number = function (
  height: number,
  weight: number
): number {
  return weight / (height * height);
};

console.log(bmi(1.75, 70));
