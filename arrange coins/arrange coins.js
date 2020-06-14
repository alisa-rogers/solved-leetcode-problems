/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let answer = 0;
    for (let start = 1; n >= start; start++) {
        n = n - start;
        answer++;
    };
    return answer;
};
