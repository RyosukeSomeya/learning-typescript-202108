export {};

// object全般を扱える (objectに対してanyのようなもの)
let profile1: object = { name: 'Taro' };
// objectなら何でもいいのでbirthYearというプロパティで上書きができる。(制約が甘い)
profile1 = { birthYear: 1974 };
console.log({ profile1 });

// object全般を扱える(objectと記述した場合と同じ状態)
let profile2: {} = { name: 'Taro' };
profile2 = { birthYear: 1974 };
console.log({ profile2 });

// プロパティに型制約をすることができる
let profile3: {
  name: string;
} = { name: 'Taro' };
// 違うプロパティはNGになる
// profile3 = { birthYear: 1974 };
// 値の型が違うのでNG
// profile3 = { name: 1974 };
// 代入可能
profile3 = { name: 'Jiro' };
console.log({ profile3 });
