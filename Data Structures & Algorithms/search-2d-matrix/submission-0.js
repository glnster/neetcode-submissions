class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROW_END = matrix.length;
        const COL_END = matrix[0].length;
        
        // find target
        for (let row = 0; row < ROW_END; row++) {
            if (row[COL_END - 1] < target) continue;

            for (let col = 0; col < COL_END; col++) {
                if (matrix[row][col] === target) {
                    return true;
                }
            }
        }

        return false;
    }
}
