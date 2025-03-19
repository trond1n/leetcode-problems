// 202. Happy Number

function isHappy(n: number): boolean {
    if (n < 1) return false
    if (n === 1) return true

    let hash = new Set();
    let num = n

    while (num > 1) {
        let temp = num.toString()
        if (hash.has(num)) return false
        hash.add(+temp)

        let res = 0
        for (let i = 0; i < temp.length; i++) {

            res += Math.pow(+temp[i], 2);
        }
        num = res
    }
    return true
};