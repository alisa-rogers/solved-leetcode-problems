/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort(function(a, b){return b-a});
    let newstone;
    while (stones.length > 1)
    if (stones[0] === stones[1]) {
        stones.splice (0, 2);
    }
    else if (stones[0] > stones[1]) {
        newstone = stones[0] - stones[1];
        stones.splice (0, 2);
        stones.push (newstone);
        stones.sort(function(a, b){return b-a}); 
    }
    else if (stones[0] < stones[1]){
        newstone = stones[1] - stones[0];
        stones.splice (0, 2);
        stones.push (newstone);
        stones.sort(function(a, b){return b-a});
    };
    if (stones.length === 0) {
        return 0;
}
    else {
        return stones[0];
    };
};
