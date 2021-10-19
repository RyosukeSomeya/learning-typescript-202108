export {};

type Profile = {
  name: string;
  age: number;
};

// type PartialProfile = Partial<Profile>;

// // keyof オブジェクトのプロパティ名を文字列リテラル型のUnion型として受け取れる
// type PropertyTypes = keyof Profile;

const me: Profile = {
  name: 'Taro',
  age: 30,
};

// ageをインクリメント
me.age++;

console.log(me); // => { name: 'Taro', age: 31 }

type PersonalDataType = Readonly<Profile>;
const friend: PersonalDataType = {
  name: 'jiro',
  age: 40,
};

console.log(friend); // { name: 'jiro', age: 40 }
// friend.age++; //すべてのプロパティがReadonlyなのでインクリメントできない
