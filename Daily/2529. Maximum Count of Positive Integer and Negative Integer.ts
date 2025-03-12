function maximumCount(nums: number[]): number {
    let pos = 0;
    let neg = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            neg = neg + 1
        } else if (nums[i] > 0) {
            pos = pos + 1
        }
    }
    return Math.max(pos, neg)
};