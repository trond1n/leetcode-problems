// 107. Binary Tree Level Order Traversal II
// Вам дано двоичное дерево. Ваша задача — выполнить обход уровней дерева и вернуть значения узлов в обратном порядке уровней. 
// Это означает, что сначала должны быть возвращены значения узлов самого нижнего уровня, затем предпоследнего и так далее, до корня.

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function levelOrderBottom(root: TreeNode | null): number[][] {
// Если дерево пустое (корень равен null), возвращаем пустой массив
if (!root) return [];

// Инициализируем очередь и добавляем в неё корень дерева
const queue: TreeNode[] = [root];

// Массив для хранения результатов обхода каждого уровня
const res: number[][] = [];

// Основной цикл: продолжаем, пока в очереди есть узлы
while (queue.length > 0) {
    // Определяем количество узлов на текущем уровне
    const queueLength = queue.length;

    // Массив для хранения значений узлов текущего уровня
    const level: number[] = [];

    // Цикл по узлам текущего уровня
    for (let i = 0; i < queueLength; i++) {
        // Извлекаем первый узел из очереди
        const currentNode = queue.shift();

        // Проверяем, что currentNode не является undefined
        if (currentNode) {
            // Добавляем значение узла в массив текущего уровня
            level.push(currentNode.val);

            // Если у узла есть левый потомок, добавляем его в очередь
            if (currentNode.left) queue.push(currentNode.left);

            // Если у узла есть правый потомок, добавляем его в очередь
            if (currentNode.right) queue.push(currentNode.right);
        }
    }

    // Добавляем массив значений текущего уровня в начало результата
    res.unshift(level);
}

// Возвращаем массив, содержащий уровни в обратном порядке
return res;

};