// Описание задачи:
// Задача: Определить, является ли данная строка панграммой. Панграмма — это предложение, содержащее каждую букву английского алфавита хотя бы один раз.
// Входные данные: Строка s, содержащая только строчные латинские буквы.
// Выходные данные: Логическое значение (true или false), указывающее, является ли строка панграммой.


const alphabet = "abcdefghijklmnopqrstuvwxyz";

const solution = (sentence: string) => {
    if (sentence.length < alphabet.length) { return false } else {
        const hash = new Map();
        for (let i = 0; i < sentence.length; i++) {
            hash.set(sentence[i], i);
        }
        for (let i = 0; i < alphabet.length; i++) {
            if (!hash.has(alphabet[i])) {
                return false;
            }
        }
        return true
    }
}
console.log(solution('aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyyzz'))