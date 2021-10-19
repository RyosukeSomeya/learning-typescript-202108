export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};

//==============
// Pick
//==============
// 必要なものを取り出して使いたい時
// type Pick<T, K extends keyof T>
// KはTのkeyとして互換性のあるものでないとならない
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;
// ↓
// type SimpleProfile = {
//   name: string;
//   weight: number;
// }
// となる

//==============
// Omit
//==============
// 不要なものを除外して使いたい時

type SmallProfile = Omit<DetailedProfile, 'height'>;
