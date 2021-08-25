export {};

let name: any = 'Taro';

// アサーションはasを使うことを推奨
// let length = (name as string).length;
let length = name.length as number;
// let length = (<string>name).length;

console.log(length)
