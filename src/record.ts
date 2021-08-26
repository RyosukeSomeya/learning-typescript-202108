export {};

// Record<K, T>
type Prefectures = 'Tokyo'|'Chiba'|'Tottori';

type Covid19InfectionInfo = {
    kanji_name: string;
    confirmed_cases: number;
};

// const covid19Japan: {
//     Tokyo: Covid19InfectionInfo; // 同じことのくりかえしになっっている
//     Chiba: Covid19InfectionInfo;
//     Tottori: Covid19InfectionInfo;
// } = { ↓
const covid19Japan: Record<Prefectures, Covid19InfectionInfo>= {
    Tokyo: { kanji_name: '東京', confirmed_cases: 1960},
    Chiba: { kanji_name: '千葉', confirmed_cases: 249},
    Tottori: { kanji_name: '鳥取', confirmed_cases: 2},
};

