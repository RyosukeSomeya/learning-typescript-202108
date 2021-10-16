export {};

class Mahoutsukai {}
class Souryo {}

// Typescriptは一つしか継承できない（単一継承）
// class Taro extends Mahoutsukai, Souryo {}

// 複数のクラスを継承できないが、複数のinterfaceを継承（正確には実装）することができる
class Taro extends Mahoutsukai {}

interface Kenja {
  ionazun(): void; // シグネチャ(処理の実態がわからないメソッドの宣言)
}

interface Senshi {
  kougeki(): void; // シグネチャ(処理の実態がわからないメソッドの宣言)
}

// 2つのinterfaceを実装している
class Jiro implements Kenja, Senshi {
  // interfaceで定義しているメソッドが実装されていないとコンパイルエラー
  ionazun(): void {
    console.log('ionazun');
  }
  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
