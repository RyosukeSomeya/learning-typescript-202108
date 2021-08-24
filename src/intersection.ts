export {};

type Pitcher1 = {
    throwingSpeed: number;
};

type Batter1 = {
    battingAverage: number;
}

const DaimajinSasaki: Pitcher1 = {
    throwingSpeed: 154
};

const OchiaiHiromitsu: Batter1 = {
    battingAverage: 0.367
};

// type TwoWayPlayer = {
//     throwingSpeed: number;
//     battingAverage: number;
// };

// intersection型
// 既存の型を組み合わせて作る
type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShouhei: TwoWayPlayer = {
    throwingSpeed: 165,
    battingAverage: 0.268
}
