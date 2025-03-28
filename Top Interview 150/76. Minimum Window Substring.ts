// 76. Minimum Window Substring

function minWindow(s: string, t: string): string {
    if (s.length === 0 || t.length === 0) {
        return "";
    }

    let dictT = new Map();
    for (let char of t) {
        dictT.set(char, (dictT.get(char) || 0) + 1);
    }

    let required = dictT.size;
    let l = 0, r = 0;
    let formed = 0;
    let windowCounts = new Map();

    let ans = [Number.MAX_SAFE_INTEGER, 0, 0];

    while (r < s.length) {
        let char = s[r];
        windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

        if (dictT.has(char) && windowCounts.get(char) === dictT.get(char)) {
            formed++;
        }

        while (l <= r && formed === required) {
            char = s[l];

            if (r - l + 1 < ans[0]) {
                ans = [r - l + 1, l, r];
            }

            windowCounts.set(char, windowCounts.get(char) - 1);
            if (dictT.has(char) && windowCounts.get(char) < dictT.get(char)) {
                formed--;
            }
            l++;
        }

        r++;
    }

    return ans[0] === Number.MAX_SAFE_INTEGER ? "" : s.slice(ans[1], ans[2] + 1);
}
