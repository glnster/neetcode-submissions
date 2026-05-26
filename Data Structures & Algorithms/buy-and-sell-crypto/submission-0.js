class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let smallest = prices[0];

        for (let i = 1; i < prices.length; i++) {
            let currentProfit = prices[i] - smallest;
            maxProfit = Math.max(maxProfit, currentProfit);
            smallest = Math.min(smallest, prices[i]);
        }

        return maxProfit;
    }
}
