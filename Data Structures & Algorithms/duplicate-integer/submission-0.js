class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hasDupe = false;

        nums = nums.sort((a,b) => a-b);

        while (!hasDupe) {
            nums.forEach((num, index, arr) => {
                if (num === arr[index-1]) {
                    hasDupe = true;
                }           
            })
            break;
        }

        return hasDupe;
    }
}
