// 3. Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s: string): number {
    let map = new Map();
    let start = 0;
    let maxLenght = 0;

    for (let end = 0; end < s.length; end++) {
        let char = s[end]
        if (map.has(char) && map.get(char) >= start) {
            start = map.get(char) + 1
        }
        map.set(char, end)
        maxLenght = Math.max(maxLenght, end - start + 1)
    }
    return maxLenght
};