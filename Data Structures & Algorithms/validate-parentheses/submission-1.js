class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const hash = {
            ']': '[',
            ')': '(',
            '}': '{'
        };
        const stack = []; // (, [, {

        for (let char of s) {
            if (char in hash) { // check if closing char
                if (stack.length && stack[stack.length - 1] === hash[char]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(char); // push opening chars
            }
        }

        return stack.length === 0;
    }
}
