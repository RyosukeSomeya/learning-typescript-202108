export {};

type Profile = {
    name: string;
    age: number;
};

const me: Profile = {
    name: 'Ichiro',
    age: 45
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
    name: 'Taro',
    age: 40
};

// プロパティの変更はできなくなる
// friend.age++;

console.log(friend);

