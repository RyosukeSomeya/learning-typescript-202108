export {};

// 継承のベースになるクラス
class Animal {
  constructor(public name: string) {}
  run(): string {
    return 'I can run.';
  }
}

// Animalを継承したLionクラス
class Lion extends Animal {
  public speed: number;
  // オーバーライド
  constructor(name: string, speed: number) {
    // super = 親のコンストラクター
    super(name);
    this.speed = speed;
  }

  run(): string {
    // 親クラスの同名メソッド（run）を実行
    return `${super.run()} ${this.speed}km/h.`;
  }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());
// console.log(new Animal('Mickey').run());
console.log(new Lion('Simba', 80).run());
