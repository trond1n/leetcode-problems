
// 222. Count Complete Tree Nodes

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


function countNodes(root: TreeNode | null): number {
    if (!root) return 0;
    let result = 0
    const queue = [root];
    while (queue.length > 0) {
        const currentNode = queue.shift();
        result++;

        if (currentNode?.left) {
            queue.push(currentNode.left);
        }

        if (currentNode?.right) {
            queue.push(currentNode?.right);
        }
    }

    return result;
};