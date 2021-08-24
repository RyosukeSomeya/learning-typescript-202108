export {};

enum Months { 
    January, // 0スタートで以下連番が振られる
    // January = 1, Januaryを1にしたいとき
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
    December
}

console.log(Months.January); // #=> 0
console.log(Months.February); // #=> 1
console.log(Months.December); // #=> 11

enum COLORS {
    RED = '#FF0000',
    WHITE = '#FFFFFF',
    GREEN = '#008000',
    BLUE = '#0000FF',
    BLACK = '#000000',
};

let green = COLORS.GREEN;
console.log({ green });

// 後から追加できる
enum COLORS {
    YELLOW = '#FFFF00'
}

let yellow = COLORS.YELLOW;
console.log({ yellow });
