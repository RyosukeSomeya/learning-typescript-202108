export {};

interface Proflie {
    underTwenty: boolean;
    [index: string]: string | number | boolean;
}

let profile: Proflie = { name: 'taro', underTwenty: false };

// index signaturesの書き方
// { [index: typeForIndex]: typeForVlue }
profile.name = 'Taro';
profile.age = 43;
profile.nationality = "Japan";


