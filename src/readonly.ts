export {};

class VisaCard {
  readonly owner: string;

  constructor(owner: string) {
    this.owner = owner;
  }
}

let myVisaCard = new VisaCard('山田太郎');
console.log(myVisaCard.owner);

// コンストラクターの簡略化
class VisaCard2 {
  // readonlyに関してのみ、publicを省略することも可能では有る
  constructor(public readonly owner: string) {}
}

let myVisaCard2 = new VisaCard2('山田次郎');
console.log(myVisaCard2.owner);
// myVisaCard.owner = '山田次郎'; // readonlyなので書き換えは不可
