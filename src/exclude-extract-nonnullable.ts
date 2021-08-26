export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

type FunctionType = Exclude<SomeTypes, string | number>;
type NonFunctionType = Exclude<SomeTypes, DebugType>;
type ExcludingFunction = Exclude<SomeTypes, Function>

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeByExtractingFunction = Extract<SomeTypes, Function>;

type  NullableTypes = string | number | null | undefined;
type  NonNullableTypes = NonNullable<NullableTypes>
