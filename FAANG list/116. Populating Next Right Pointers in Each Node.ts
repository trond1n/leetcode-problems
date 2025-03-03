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

    // Если есть левый дочерний узел, установите его next на правый дочерний узел
    if (root.left) {
        root.left.next = root.right ? root.right : null;
    }

    // Если есть правый дочерний узел, установите его next на левый дочерний узел следующего узла
    if (root.right) {
        root.right.next = root.next ? root.next.left : null;
    }

    // Рекурсивно вызовите функцию для правого поддерева, так как оно будет обрабатываться после левого
    connect(root.right);

    // Рекурсивно вызовите функцию для левого поддерева
    connect(root.left);

    return root;
};