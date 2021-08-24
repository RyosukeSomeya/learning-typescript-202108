export {};

function error(message: string): never {
    throw new Error(message);
}

try {
    let result = error('test');
    console.log({ result })
} catch(error) {
    console.log({ error })
}

// voidとneverの違い
// voidは呼び元に戻るreturnがないだけ。
let foo: void = undefined;
// neverは呼び元に戻らない
let bar: never = error('only me');
