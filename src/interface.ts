export {};

// typeキーワードで型を指定する
type ObjectType = {
    name: string;
    age: number;
};

// interface
interface ObjectInterface {
    name: string;
    age: number;
}

// let object: { name: string; age: number } = { //インラインで書く場合
// let object: ObjectType = { // typeキーワードを使う場合
let object: ObjectInterface = { // interfaceを使う場合
    name: 'Ichiro Suzuki',
    age: 43
};


