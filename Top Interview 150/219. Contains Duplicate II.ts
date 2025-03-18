// 219. Contains Duplicate II
// Задача "Contains Duplicate II" требует определить, существуют ли в массиве nums два различных индекса i и j, 
// для которых выполняются следующие условия: Значения в этих индексах равны: nums[i]==nums[j]. 
// Абсолютная разница между индексами i и j меньше или равна k: ∣ i − j ∣ ≤ k ∣i−j∣≤k. 
// Другими словами, нужно проверить, есть ли в массиве дублирующиеся элементы, которые находятся на расстоянии не более k k друг от друга.

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const hashMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (hashMap.has(nums[i]) && (Math.abs(hashMap.get(nums[i]) - i) <= k)) {
            return true
        } else {
            hashMap.set(nums[i], i)
        }
    }
    return false
};