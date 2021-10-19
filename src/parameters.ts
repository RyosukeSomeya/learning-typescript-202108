export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('Taro', 21);

// ↓ type Profile = [string, number] タプル型の型になっている
// Parameters関数の引数の型を取得する
type Profile = Parameters<typeof debugProfile>;

// 型に対応した配列しか受け付けない
const profile: Profile = ['Gloria', 76];

debugProfile(...profile);
