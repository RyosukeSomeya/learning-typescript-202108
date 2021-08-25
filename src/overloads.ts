export {};

// シグネチャ
function double(value: number): number;
function double(value: string): string;

// オーバーロードでは、実態の関数では型成約を行わない => シグネチャでやっているから
function double(value: any): any {
    if (typeof value === 'number') {
        return value * 2;
    } else {
        return value + value;
    }
}

console.log(double(100));
console.log(double('Go '));
