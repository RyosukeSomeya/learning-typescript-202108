export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
    height: number,
    weight: number,
    printable?: boolean
): number => {
    const bmi: number = weight / (height * height);

    if (printable) {
        console.log({ bmi })
    }
    return bmi;
}

bmi(1.78, 86, false);

// bmi(身長、体重、console.logdで出力するかどうか)
// bmi(1.78, 86, true); # => 出力する
// bmi(1.78, 86, false); # => 出力しない
// bmi(1.78, 86); # => 出力しない
