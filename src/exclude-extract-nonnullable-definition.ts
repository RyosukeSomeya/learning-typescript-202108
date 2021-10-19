export {};

// extends => 互換性があるか
type MyExclude<T, U> = T extends U ? never : T;
type DebugType = () => void;
type SomeTypes = string | number | DebugType;

type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude<SomeTypes, string | number>;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
// 関数型だけを取り出す※この場合はDebugTypeが該当
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

type NullableTypes = string | number | null | undefined;

// nullとundefinedを除いた型をNullableTypeから作る
type NonNullableTypes = NonNullable<NullableTypes>;
