export {};

namespace Japanese {
    export namespace Tokyo { // 名前空間のネスト
        export class Person { // exportしないとアクセスできない
            constructor(public name: string) {}
        }
    }
    export namespace Osaka {
        export class Person {
            constructor(public name: string) {}
        }
    }
}

namespace English {
    export class Person {
        constructor(
            public firstName: string,
            public middleName: string,
            public lastName: string
        ) {}
    }
}

const me = new Japanese.Tokyo.Person('taro');
const meOsaka = new Japanese.Osaka.Person('Jiro');
const mj = new English.Person('michael', 'Joseph', 'Jackson');
console.log(me.name);
console.log(meOsaka.name);
console.log(mj.firstName);
console.log(mj.middleName);
console.log(mj.lastName);
