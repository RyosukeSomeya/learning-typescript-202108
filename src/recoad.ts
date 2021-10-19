export {};

// Record<K, T>
// Kはユニオン型の型引数
type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori' | 'Shiga';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const covie19Japan = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 249 },
  Tottori: { kanji_name: '鳥取', confirmed_cases: 2 },
  Shiga: { kanji_name: '滋賀', confirmed_cases: 13 }, // 間違えてしまっても、型注釈がないとエラーにならない
};
// ↓ 型注釈すると...
// 一つずつ設定するのは効率が悪い
// const covie19Japan2: {
//   Tokyo: Covid19InfectionInfo;
//   Chiba: Covid19InfectionInfo;
//   Tottori: Covid19InfectionInfo;
//   Shiga: Covid19InfectionInfo;
// } = {
//   Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
//   Chiba: { kanji_name: '千葉', confirmed_cases: 249 },
//   Tottori: { kanji_name: '鳥取', confirmed_cases: 2 },
//   Shiga: { kanji_name: '滋賀', confirmed_cases: true }, // 間違えてしまっても、型注釈がないとエラーにならない
// };

// ↓ Recordを使う

const covie19Japan3: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: '東京', confirmed_cases: 1960 },
  Chiba: { kanji_name: '千葉', confirmed_cases: 249 },
  Tottori: { kanji_name: '鳥取', confirmed_cases: 2 },
  Shiga: { kanji_name: '滋賀', confirmed_cases: 13 }, // ちゃんとエラーを検出できる
};
