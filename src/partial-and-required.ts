export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

// すべての型がoptionalになるとする場合...
// ↓ 新たなプロパティの追加などに追従が難しい...
type Profile2 = {
  name?: string;
  age?: number;
};

// Partial型
// 自動的にoptionalな属性として型が定義される
type PartialType = Partial<Profile>;
// ↓
// type PartialType = {
//   name?: string | undefined;
//   age?: number | undefined;
// }

// Require型
type RequiredType = Required<Profile>;
// ↓
// すべてが必須の属性として型が定義される
// type RequiredType = {
//     name: string;
//     age: number;
//     zipCode: number;
// }
