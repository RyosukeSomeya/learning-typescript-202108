export {};

// ユニオン型でnullも許容する
let profile: { name: string, age: number | null } = {
    name: 'Ichiro',
    age: null
}
