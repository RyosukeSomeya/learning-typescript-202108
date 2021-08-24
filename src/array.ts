export { };

let numbers: number[] = [1, 2, 3];

// 非推奨
let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

let strings: string[] = ['TypeScript', 'Javascript', 'CoffeScript'];

let nijigenHairetsu: number[][] = [
    [50, 100],
    [150, 300]
];

// 複数の型があるとき（どれかに該当すればいい）
let mixArray: (string | number | boolean)[]= [1, false, 'Japan'];
