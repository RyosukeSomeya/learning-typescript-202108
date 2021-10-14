export {};

// オブジェクトに直接型を指定
let object: { name: string; age: number } = {
  name: 'Taro',
  age: 39,
};

// タイプエイリアスで型を指定
type ObjectType = {
  name: string;
  age: number;
};

let object2: ObjectType = {
  name: 'Jiro',
  age: 30,
};

// interface
interface ObjectInterface {
  name: string;
  age: number;
}

let object3: ObjectInterface = {
  name: 'Saburo',
  age: 20,
};
