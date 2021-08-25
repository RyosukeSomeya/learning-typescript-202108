export {};

class Person {
    public name: string; // publicの場合は、通常は特にpublicを宣言しない
    // private age: number; // Personクラスからのみアクセス可能
    protected age: number; // Personクラスを継承したクラスからもアクセス可能
    protected nationality: string;

    // constructorには戻り値の型（voidなど）は書かない
    constructor(name: string, age: number, nationality: string) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }

    profile(): string {
        return `name: ${this.name}, age: ${this.age}`;
    }
}

class Android extends Person {
    constructor(name: string, age: number, nationality: string) {
        // 親クラスのconstructorに引数を渡す
        super(name, age, nationality);
    }

    profile(): string {
        // private なageはPersonクラスからのみアクセス可能、protectedに変更すると継承先からもアクセス可能
        return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
    }
}

let taro = new Person('taro', 30, 'Japan');
// console.log(taro.profile());
console.log(taro.name);
// console.log(taro.age);
// let hanako = new Person();
