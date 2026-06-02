class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        if (digits.length <= 0) return [];

        let total = 0; // 9, 99, 999
        let result = [];

        // 9, 9, 9
        for (let digit of digits) {
            // 990 + 9
            total = (total * 10) + digit;
        }

        total++; // 1000
        total.toString().split('').forEach((char) => result.push(Number(char)))

        return result;
    }
}
