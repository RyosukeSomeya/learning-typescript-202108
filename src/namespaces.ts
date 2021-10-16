export {};

// 名前空間のネスト
// 名前空間の定義
namespace Japanese {
  // 名前空間もexportが必要
  export namespace Tokyo {
    // exportしないとアクセスできない
    export class Person {
      constructor(public name: string) {}
    }
  }
  // 名前空間もexportが必要
  export namespace Osaka {
    // exportしないとアクセスできない
    export class Person {
      constructor(public name: string) {}
    }
  }
}

// 名前空間の定義
namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public MiddleName: string,
      public lastName: string
    ) {}
  }
}

// 名前空間を含めた呼び出し
const me = new Japanese.Tokyo.Person('山田太郎');
const ware = new Japanese.Osaka.Person('山田次郎');

console.log(me);
console.log(ware);

// 名前空間を含めた呼び出し
const mj = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(mj);
