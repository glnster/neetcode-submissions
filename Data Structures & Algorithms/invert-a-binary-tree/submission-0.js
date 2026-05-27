/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) return root;

        // BFS traverse, do level by level swap
        const queue = [root];

        while (queue.length > 0) {
            const levelSize = queue.length;

            for (let i = 1; i <= levelSize; i++) {
                const node = queue.shift();
                
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);

                const temp = node.left;
                node.left = node.right;
                node.right = temp;
            }
        }

        return root;
    }
}
