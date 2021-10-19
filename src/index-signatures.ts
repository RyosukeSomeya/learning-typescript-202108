export {};

// 動的にデータを入れていく想定
let profile: {} = {};

// 宣言していないプロパティなのでエラーになる
// 型注釈側で宣言すれば解決するが...
// profile.name = 'Taro';
// ↓
// インデックスシグネチャで解決する
// { [ index(仮の名前): インデックスの型 ]: 値の型}
// ↓
let profile2: { [index: string]: string | number } = {};
// 未知のプロパティにも対応できる様になった
profile2.name = 'Taro';
profile2.age = 20;
profile2.nationality = 'Japan';

// interfaceでも定義できる
// interface Profile {
//   underTwenty: boolean; // indexシグネチャとの互換性を持たせないといけない
//   [index: string]: string | number;
// }
// ↓
interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean; // underTwentyと互換性をもたせた状態
}

let newProfile: Profile = { name: 'Taro', underTwenty: false };
