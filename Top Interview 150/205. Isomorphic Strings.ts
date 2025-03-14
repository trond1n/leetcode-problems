// 205. Isomorphic Strings

function isIsomorphic(s: string, t: string): boolean {
    let hashMap = new Map();
    if (s.length !== t.length) {
        return false
    } else {
        for (let i = 0; i < s.length; i++) {
            if (!hashMap.has(s[i])) {
                if (Array.from(hashMap.values()).includes(t[i])) return false
                hashMap.set(s[i], t[i])
            } else {
                if (hashMap.get(s[i]) !== t[i]) {
                    return false
                }
            }
        }
    }
    return true
};