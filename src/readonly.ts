export {};

class VisaCard {
    // 通常の設定
    // readonly owner: string;
    // constructor(owner: string) {
    //     this.owner = owner;
    // }
    // 一行で設定
    constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('taro');
console.log(myVisaCard.owner);

// myVisaCard.owner = 'jiro';
