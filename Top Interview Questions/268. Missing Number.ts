// Задача 268. "Missing Number" (Недостающее число) заключается в следующем:

// Условие задачи:
// Вам дается массив, содержащий 
// n
// n различных целых чисел в диапазоне от 0 до 
// n
// n. Одно из чисел в этом диапазоне отсутствует в массиве. Ваша задача — найти это отсутствующее число.

function missingNumber(nums: number[]): number {
    let res = nums.length * (nums.length + 1) / 2;
    let sum = nums.reduce((acc, num) => acc + num, 0);
    return res - sum;
};