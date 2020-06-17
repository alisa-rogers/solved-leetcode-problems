## Last Stone Weight
Task: [Last Stone Weight](https://leetcode.com/problems/last-stone-weight). 
We have a collection of stones, each stone has a positive integer weight.

Each turn, we choose the two heaviest stones and smash them together.  
Suppose the stones have weights x and y with x <= y.  The result of this smash is:

1. If x == y, both stones are totally destroyed;
2. If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

## Algorithm of solving & code explanation
If we sort stones in descending order, two heaviest stones will always be stones[0] and stones[1].
Let's use the "while"-loop to smash them till the array length will be 0 or 1.
1. Sort the stones in a descending order.
```javascript
var lastStoneWeight = function(stones) {
    stones.sort(function(a, b){return b-a});
```
2. Use the "while"-loop to smash the stones till the array length will be 0 or 1.
If stones have equal weight, remove them from the array.
```javascript
    while (stones.length > 1) {
    if (stones[0] === stones[1]) {
        stones.splice (0, 2); //remove 2 stones starting from the index 0
    }
```
4. If the first stone is heavier, substract the weight of the second stone from it and remove the second stone from the array. 
If the second stone is heavier, do the opposite. Sort the stones again.
```javascript
    else if (stones[0] > stones[1]) {
         stones[0] -= stones[1];
        stones.splice (1, 1);
        stones.sort(function(a, b){return b-a}); 
    }
    else if (stones[0] < stones[1]){
         stones[1] -= stones[0];
        stones.splice (0, 1);
        stones.sort(function(a, b){return b-a});
    };
};
```
5. Return 0 or the weight of the last stone left.
```javascript
    if (stones.length === 0) {
        return 0;
}
    else {
        return stones[0];
    }
};
```
The problem is solved.
## Full tests
![full tests](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/last%20stone%20weight/full.PNG)
## Sample tests
![sample tests]()https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/last%20stone%20weight/sample.PNG
