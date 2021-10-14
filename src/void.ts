export {};

// 何も返さない関数
function returnNothing(): undefined {
  console.log("I don't return anything!");
  return; // undefinedを戻り値とすると、明示的にreturnが必須になる;
  // または
  return undefined;
}

function returnVoid(): void {
  console.log("I don't return anything!");
}

console.log(returnNothing()); // => 何もreturnしなくてもundefinedが返る
