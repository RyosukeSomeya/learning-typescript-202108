export {};

// ①objectで指定 => object全般
let profile1: object = { name: 'Taro' };
profile1 = { birthYear: 1982 }; // プロパティを変えられる

// ②{}で指定 => プロパティの型指定ができる
let profile2: {
    name: string
} = { name: 'Taro' };
// アノテーションで宣言されていないプロパティは代入できない
// profile2 = { birthYear: 1982 };
