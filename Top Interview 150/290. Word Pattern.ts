// 290. Word Pattern
// Даны шаблон и строка s, определите, следует ли s тому же шаблону.

// Здесь "следует" означает полное совпадение, такое, что существует биекция между буквой в шаблоне и непустым словом в s. В частности:

// Каждая буква в шаблоне соответствует ровно одному уникальному слову в s.
// Каждое уникальное слово в s соответствует ровно одной букве в шаблоне.
// Никакие две буквы не соответствуют одному и тому же слову, и никакие два слова не соответствуют одной и той же букве.

function wordPattern(pattern: string, s: string): boolean {
    const hash = new Map();
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;
    for (let i = 0; i < pattern.length; i++) {

        const patternChar = pattern[i]; 
        const word = words[i];
        if (!hash.has(patternChar)) 
        {
            if (Array.from(hash.values()).includes(word)) return false
            hash.set(patternChar, word);

        } else {

            let hashChar = hash.get(patternChar);
            if (hashChar !== word) return false;
        }
    }
    return true;
};