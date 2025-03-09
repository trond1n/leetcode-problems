// 2379. Minimum Recolors to Get K Consecutive Black Blocks
// У тебя есть строка blocks, состоящая из символов 'B' (чёрный) и 'W' (белый).

// Тебе дано число k, и нужно найти минимальное количество перекрасок белых ('W' → 'B'), чтобы получить ровно k подряд идущих чёрных блоков ('B').

// Пример 1:

// ts
// Копировать
// Редактировать
// Input: blocks = "WBBWWBBWBW", k = 7
// Output: 3
// Explanation:
// - Один из оптимальных способов: перекрасить `"WBBWWBBWBW"` → `"WBBBBBBBW"`.  
// - Минимальное количество перекрасок: `3`.
// Пример 2:

// ts
// Копировать
// Редактировать
// Input: blocks = "WBWBBBW", k = 2
// Output: 0
// Explanation:
// - В строке уже есть `k = 2` подряд чёрных блока (`BB`), перекраска не нужна.

function minimumRecolors(blocks: string, k: number): number {
    let windowSum = 0;

    // 1. Считаем количество 'W' в первом окне длины k
    for (let i = 0; i < k; i++) {
        windowSum += blocks[i] === 'W' ? 1 : 0;
    }

    // 2. Минимальное количество перекрасок пока что равно первому окну
    let minRecolors = windowSum;

    // 3. Двигаем окно по строке
    for (let i = k; i < blocks.length; i++) {
        windowSum += blocks[i] === 'W' ? 1 : 0;   // Добавляем новый символ
        windowSum -= blocks[i - k] === 'W' ? 1 : 0; // Убираем старый символ
        minRecolors = Math.min(minRecolors, windowSum);
    }

    return minRecolors;
};
