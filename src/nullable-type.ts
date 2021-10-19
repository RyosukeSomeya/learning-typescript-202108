export {};

let profile: {
  name: string;
  age: number | null; // union型を使用することで、局地的にnullableに対応できる
} = {
  name: 'Taro',
  // strictNullChecksがTrueだとエラーになってしまう
  age: null, // 型は決まっているが、この時点ではまだ不明
};
