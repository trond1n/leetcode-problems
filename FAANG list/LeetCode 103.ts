// LeetCode 103
// Вам дано двоичное дерево. Ваша задача — выполнить обход уровней дерева в зигзагообразном порядке. 
// Это означает, что элементы на четных уровнях (начиная с корня, который считается нулевым уровнем) 
// должны быть записаны слева направо, а элементы на нечетных уровнях — справа налево.
//  Definition for a binary tree node.

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


function zigzagLevelOrder(root: TreeNode | null): number[][] {
    //  Если дерево пустое (корень равен null), возвращаем пустой массив
    if (!root) return [];

    // Инициализируем очередь и добавляем в неё корень дерева
    const queue: TreeNode[] = [root];

    // Массив для хранения результатов обхода каждого уровня
    let res: number[][] = [];

    // Индекс уровня, начинаем с 0
    let levelIndex = 0;

    // Основной цикл: продолжаем, пока в очереди есть узлы
    while (queue.length > 0) {
        // Массив для хранения значений узлов текущего уровня
        const level: number[] = [];

        // Определяем количество узлов на текущем уровне
        const queueLength = queue.length;

        // Цикл по узлам текущего уровня
        for (let i = 0; i < queueLength; i++) {
            // Извлекаем первый узел из очереди
            const currentNode = queue.shift();

            // Проверяем, что currentNode не является undefined
            if (currentNode) {
                // Добавляем значение узла в массив текущего уровня
                level.push(currentNode.val);

                // Если у узла есть левый потомок, добавляем его в очередь
                if (currentNode.left) {
                    queue.push(currentNode.left);
                }

                // Если у узла есть правый потомок, добавляем его в очередь
                if (currentNode.right) {
                    queue.push(currentNode.right);
                }
            }
        }

        // Если индекс уровня нечетный, разворачиваем массив значений узлов
        if (levelIndex % 2 === 1) {
            level.reverse();
        }

        // Добавляем массив значений текущего уровня в результат
        res.push(level);

        // Увеличиваем индекс уровня после обработки уровня
        levelIndex++;
    }

    // Возвращаем массив, содержащий зигзагообразные обходы каждого уровня дерева
    return res;
};