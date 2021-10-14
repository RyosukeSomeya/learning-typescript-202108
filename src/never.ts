export {};

function error(message: string): never {
  throw new Error(message); // 例外で終わるので呼び元への戻り値がなにもない(undefinedも返らない)
}

try {
  let result = error('test');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

/*
let foo: void = undefined; // void型にはundefinedが含まれるので代入できる
let bar1: never = undefined; // never型には値という概念が無いので、代入できない
let bar2: never = null; // never型には値という概念が無いので、代入できない
let bar3: never = error('only me'); // error関数はneverを返すという定義なので代入可能
 */
