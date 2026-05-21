class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let l = 0; l < nums.length; l++) {
            for (let r = l + 1; r < nums.length; r++) {
                let currentSum = nums[l] + nums[r];

                if (currentSum === target) {
                    return [l, r];
                }
            }
        }

        return [];
    }
}
