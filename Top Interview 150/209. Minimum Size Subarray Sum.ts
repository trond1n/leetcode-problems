// 209. Minimum Size Subarray Sum
function minSubArrayLength(target: number, nums: number[]): number {
    let left = 0;
    let sum = 0;

    let min_length = nums.length + 1;

    for (let right = 0; right < nums.length;right++) {

        sum += nums[right]
        while (sum >= target) {
            if ((right - left + 1) < min_length) {
                min_length = right - left + 1
            }
            left++
            sum -= nums[left-1];
            
        }

        
    }
  if (min_length < nums.length + 1) { return min_length } else { return 0 }
}

// Тест-кейсы
console.log(minSubArrayLength(7, [2, 3, 1, 2, 4, 3]));  // Ожидаемый вывод: 2
console.log(minSubArrayLength(4, [1, 4, 4]));          // Ожидаемый вывод: 1
console.log(minSubArrayLength(11, [1, 1, 1, 1, 1, 1, 1, 1]));  // Ожидаемый вывод: 0
