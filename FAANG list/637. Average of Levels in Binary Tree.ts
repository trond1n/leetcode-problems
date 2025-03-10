// Задача 637. "Average of Levels in Binary Tree" (Среднее значение уровней в двоичном дереве) заключается в следующем:

// Условие задачи:
// Вам дано двоичное дерево, и ваша задача — вычислить среднее значение для каждого уровня дерева. Уровень дерева определяется как набор всех узлов, находящихся на одинаковом расстоянии от корня.



//   Definition for a binary tree node.
  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }


//Решение
function averageOfLevels(root: TreeNode | null): number[] {
    
    // - Проверка на `null`: Если `root` равен `null`, это означает, что дерево пустое. В этом случае функция возвращает пустой массив.
    if (!root) return [];

    // - Инициализация очереди: Создаём очередь `q` и добавляем в неё корень дерева. Очередь будет использоваться для обхода узлов уровень за уровнем.
    let q: (TreeNode | null)[] = [root];

    // - Инициализация результата: Создаём массив `res`, который будет хранить значения узлов для каждого уровня.
    let res: number[] = [];

    // - Основной цикл: Пока очередь не пуста, продолжаем обработку.
    while (q.length > 0) {
        // - Определение размера уровня: `levelSize` хранит количество узлов на текущем уровне. Это позволяет обработать все узлы текущего уровня до перехода к следующему.
        let levelSize = q.length;

        // - Инициализация текущего уровня: Создаём массив `currentLevel` для хранения значений узлов текущего уровня.
        let currentLevel: number[] = [];

        // - Цикл по узлам текущего уровня: Проходим по всем узлам текущего уровня.
        for (let i = 0; i < levelSize; i++) {
            // - Извлечение узла: Извлекаем первый узел из очереди.
            let node = q.shift();

            // - Проверка на `null`: Убедимся, что `node` не равен `null`.
            if (node) {
                // - Добавление значения узла: Добавляем значение узла в `currentLevel`.
                currentLevel.push(node.val);
                // - Добавление потомков в очередь: Если у узла есть левый или правый потомок, добавляем их в очередь для обработки на следующем уровне.
                node.left && q.push(node.left);
                node.right && q.push(node.right);
            }
        }
        // - Добавление уровня в результат: После обработки всех узлов текущего уровня добавляем их среднее значение в `res`.
        let average = currentLevel.reduce((acc, num) => acc + num, 0) / currentLevel.length;
        res.push(average);
    }
    // - Возврат результата: Возвращаем `res`, который содержит средние значения для каждого уровня дерева.
    return res;
};
