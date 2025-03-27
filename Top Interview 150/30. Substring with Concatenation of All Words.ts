// 30. Substring with Concatenation of All Words
function findSubstring(s: string, words: string[]): number[] {
    if (words.length === 0) return [];

    const wordCount = words.length;
    const wordLength = words[0].length;
    const totalLength = wordCount * wordLength;
    const result: number[] = [];
    const wordsCountMap = new Map<string, number>();

    for (const word of words) {
        wordsCountMap.set(word, (wordsCountMap.get(word) || 0) + 1);
    }

    for (let i = 0; i <= s.length - totalLength; i++) {
        const currentWordsCountMap = new Map<string, number>();
        let j = 0;

        while (j < wordCount) {
            const word = s.substring(i + j * wordLength, i + (j + 1) * wordLength);
            currentWordsCountMap.set(word, (currentWordsCountMap.get(word) || 0) + 1);

            if (currentWordsCountMap.get(word)! > (wordsCountMap.get(word) || 0)) {
                break;
            }
            if (!wordsCountMap.has(word)) {
                i += j * wordLength;
                break;
            }
            j++;
        }

        if (j === wordCount) {
            result.push(i);
        }
    }

    return result;
}