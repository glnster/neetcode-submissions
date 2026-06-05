class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // shape will be e.g.
        // key: "1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0"
        // value: [tan, nat]
        const result = {};

        for (let word of strs) {
            // initialize a char count hash
            const count = new Array(26).fill(0);

            // tally up the chars
            for (let char of word) {
                count[char.charCodeAt(0) - 'a'.charCodeAt((0))] += 1;
            }

            // create the key
            const key = count.join(',');

            // add key:word to result
            if (!result[key]) {
                result[key] = [];
            }
            result[key].push(word);
        }

        // return array of result values
        return Object.values(result);
    }
}
