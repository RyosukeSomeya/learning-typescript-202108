export {};

const kansu = (): number => 51;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
console.log(typeof numberUnknown);

// if文で型がnumberかを判定
if (typeof numberUnknown === 'number') {
    let sumUnknown = numberUnknown + 10; // unknown（不明）なので数値を足せない可能性
}
