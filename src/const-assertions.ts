export {};

let name = 'Taro';
name = 'Jiro';

// constアサーション
// 文字列リテラル型になる
let nickname = 'Ichi' as const;
// Ichi以外で再代入できなくなる
// nickname = 'Ichiro';

// おbジェクトのconstアサーション
// 通常
let profile = {
  name: 'Ichi',
  height: 178,
};

profile.name = 'Taro';
profile.height = 180;

// プロパティがreadonlyになる
let profile2 = {
  name: 'Ichi',
  height: 178,
} as const; // ネストしているすべての要素をreadonlyにする

// 変更不可
// profile2.name = 'Taro';
// profile2.height = 180;
