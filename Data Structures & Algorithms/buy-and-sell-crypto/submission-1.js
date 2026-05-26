class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let smallest = prices[0];

        for (let i = 1; i < prices.length; i++) {
            maxProfit = Math.max(maxProfit, prices[i] - smallest);
            smallest = Math.min(smallest, prices[i]);
        }

        return maxProfit;
    }
}
