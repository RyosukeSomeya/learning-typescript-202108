export {};

// string型にMojiretsuというエイリアスをつける
type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
    name: 'Taro',
    age: 43
};

type Profile = {
    name: string;
    age: number;
}

const example2: Profile = {
    name: 'Taro',
    age: 43
};

type Profile2 = typeof example1; // example1の構造が変わっても対応できる。
