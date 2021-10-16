export {};

// 引数（身長・体重）はすべて必要なパターン
let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
) => weight / (height * height);

bmi(1.75, 70);

// 引数にあってもなくても良いものがある場合
// 引数を身長→必須、体重→必須、console.logするかどうか→任意としたい

let bmiPrint: (height: number, weight: number, printable?: boolean) => number =
  (height: number, weight: number, printable?: boolean) => {
    const bmi: number = weight / (height * height);
    if (printable) {
      console.log({ bmi });
    }
    return bmi;
  };

// 明示的にtrueを与える
bmiPrint(1.75, 70, true); // 出力される
// 明示的にfalseを与える
bmiPrint(1.75, 70, false); // 出力されない
// 三番目の引数を与えない(falseと同じ)
bmiPrint(1.75, 70); // 出力されない
