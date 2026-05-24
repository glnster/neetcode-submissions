class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const t = s.toLowerCase().replace(/[^a-z0-9]/gi, '');

        let left = 0;
        let right = t.length - 1;

        while (left < right) {
            if (t[left] !== t[right]) return false;
            left++;
            right--;
        }

        return true;
    }
}
