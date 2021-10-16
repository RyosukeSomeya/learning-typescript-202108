export {};

// デフォルト引数
const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

// 第2引数がない場合は、デフォルト引数が採用される
console.log(nextYearSalary(1000, 1.05));
