export {};

// 抽象メソッドは抽象クラスの中で定義する
abstract class Animal {
  abstract cry(): string;
}

// 抽象クラスを継承して実態を定義
class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

// 抽象クラスで定義されているメソッドが実装されていないと
// コンパイルエラーがでるので、実装漏れがない。
// class Tiger extends Animal {}

class Tiger extends Animal {
  cry() {
    return 'grrrrr';
  }
}
