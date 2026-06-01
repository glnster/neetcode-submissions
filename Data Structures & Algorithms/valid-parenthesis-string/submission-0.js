class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        // leftMin = minimum possible number of unmatched '('
        // leftMax = maximum possible number of unmatched '('
        let leftMin = 0;
        let leftMax = 0;

        for (let char of s) {
            if (char === '(') {
                // Must increase both bounds by 1
                leftMin++;
                leftMax++;
            } else if (char === ')') {
                // Must decrease both bounds by 1
                leftMin--;
                leftMax--;
            } else { // handle '*'
                // Treat as ')' → leftMin-- (worst case for min)
                // Treat as '(' → leftMax++ (best case for max)
                // Treat as empty → unchanged for both
                leftMin--;
                leftMax++;
            }

            // If even the maximum possible '(' count is negative,
            // we have too many ')' — impossible to fix
            if (leftMax < 0) {
                return false;
            }

            // The minimum possible '(' count can't be negative
            // because we can always choose to treat some '*' as empty
            // to bring the count back to 0
            if (leftMin < 0) {
                leftMin = 0;
            }
        }

        // At the end, the range must include 0 (balanced parentheses)
        // leftMin is the fewest possible '(' left → must be exactly 0
        return leftMin === 0;
    }
}
