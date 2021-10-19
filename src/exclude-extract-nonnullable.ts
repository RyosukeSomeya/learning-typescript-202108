export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// ===============
// exlude 除外
// ===============
// SomeTypes(ユニオン型)から指定した方を型を除外する
// stringとnumberを除外する
type FunctionType = Exclude<SomeTypes, string | number>;
// DebugTypeを除外する
type NonFunctionType = Exclude<SomeTypes, DebugType>;

// 関数型全般(DebugType)を除外する
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

// ===============
// extract 抽出
// ===============
// DebugTypeだけを取り出す
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
// 関数型だけを取り出す※この場合はDebugTypeが該当
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;
// stringとnumberを取り出す
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;

// ==========================
// NonNullable nullを排除する
// ==========================
type NullableTypes = string | number | null | undefined;

// nullとundefinedを除いた型をNullableTypeから作る
type NonNullableTypes = NonNullable<NullableTypes>;
