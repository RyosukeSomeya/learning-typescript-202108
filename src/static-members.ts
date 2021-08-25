export {};

class Me {
    static isProgrammer: boolean = true;
    static firstName: string = 'Taro';
    static lastName: string = 'Yamada';

    static work() {
        return `Hey, guys! This is ${this.firstName}! Are you intersted in TypeScript?`
    }
}

// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer);
console.log(Me.work());
