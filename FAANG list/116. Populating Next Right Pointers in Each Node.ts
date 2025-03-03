// 116. Populating Next Right Pointers in Each Node
// Вам дано полное бинарное дерево, где каждый узел имеет следующие свойства:

// val: значение узла.
// left: указатель на левый дочерний узел.
// right: указатель на правый дочерний узел.
// next: указатель на следующий узел на том же уровне.
// Задача заключается в том, чтобы заполнить указатели next для всех узлов дерева таким образом, 
// чтобы каждый узел указывал на следующий узел на том же уровне. Указатель next последнего узла на каждом уровне должен быть null.


// Definition for _Node.
class _Node {
    val: number
    left: _Node | null
    right: _Node | null
    next: _Node | null
    constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
        this.next = (next === undefined ? null : next)
    }
}


function connect(root: _Node | null): _Node | null {
    if (!root) return null;

    const queue: _Node[] = [root];
    let lastNode = queue[queue.length - 1];
   
    while (queue.length > 0) {
        const currentNode = queue.shift()!;
        let count = 0;

            if (lastNode) {
                lastNode.next = null;
            }
            currentNode.next = queue[0];
            if (currentNode.left) {
                count++;
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                count++;
                queue.push(currentNode.right);
            }
           if (count === 0) {
                lastNode = queue[queue.length - 1];
            }
    }

    return root;
};