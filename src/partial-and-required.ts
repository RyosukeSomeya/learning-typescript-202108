export {};

// プロパティをすべてオプショナルまたは必須にしたい
type Profile = {
    name: string;
    age?: number;
    zipCode: number;
};
// ↓
type PartialType = Partial<Profile>; // すべてオプショナル
type RequiredType = Required<Profile>; // すべて必須
