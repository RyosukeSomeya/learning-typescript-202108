export {};

let name = 'Taro';


name = 'Ichiro';

let nickname = 'ichi' as const; // 'ichi'で文字列リテラル型になっている
nickname = 'ichi'; // ichiの再代入はOKだが、書き換えられない

let profile = {
    name: 'Ichiro',
    height: 180
} as const;

// プロパティの書き換えは不可になっている（readonly）
// profile.name = "Jiro";
// profile.height = 185;
