export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const OchiaiHiromitsu: Batter1 = {
  // throwingSpeed: 154, // typeエイリアスで定義されていない型は設定できない
  battingAverage: 0.367,
};

// 両方の型を持っている型を作るには...
// 改めて型を作ることもできるが...
// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

// intersection型で効率良く作成する
type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShowhei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
