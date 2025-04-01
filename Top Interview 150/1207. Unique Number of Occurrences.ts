// 1207. Unique Number of Occurrences

function uniqueOccurrences(arr: number[]): boolean {
    const hash = new Map();

    arr.forEach(num => {
        hash.set(num, (hash.get(num) || 0) + 1);
    });

    const occurrencesSet = new Set(hash.values());
    return hash.size === occurrencesSet.size;
}
