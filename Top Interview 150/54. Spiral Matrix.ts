// 54. Spiral Matrix

function spiralOrder(matrix: number[][]): number[] {
    let res: number[] = [];
    let top = 0,
        bottom = matrix.length - 1,
        left = 0,
        right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // Движение вправо по верхней границе
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
        top++;

        // Движение вниз по правой границе
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right]);
        }
        right--;

        if (top <= bottom) {
            // Движение влево по нижней границе
            for (let i = right; i >= left; i--) {
                res.push(matrix[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
            // Движение вверх по левой границе
            for (let i = bottom; i >= top; i--) {
                res.push(matrix[i][left]);
            }
            left++;
        }
    }
    return res;
}

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))


// [1,2,3]
// [4,5,6]
// [7,8,9]

