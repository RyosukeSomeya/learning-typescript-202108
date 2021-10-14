export {};

// type 別名 = 型;
type Mojiretsu = string;

// 普通にstring型を使う
const fooString: string = 'Hello';
// Aliasを使う
const fooMojiretu: Mojiretsu = 'Hello';

const example1 = {
  name: 'Taro',
  age: 43,
};

// object型のエイリアス
type Profile = {
  name: string;
  age: number;
};

// オブジェクトの型を設定
const example2: Profile = {
  name: 'Jiro',
  age: 33,
};

// もともとあるデータの型を設定する
// example1の内容が変わっても追従できる
type Profile2 = typeof example1;
