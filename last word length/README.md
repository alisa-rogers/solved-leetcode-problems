# Length of Last Word
Task: Given a string s consists of upper/lower-case alphabets and empty space characters ' ', 
return the length of last word (last word means the last appearing word 
if we loop from left to right) in the string.
If the last word does not exist, return 0.

## Algorithm of solving and code explanation
1. Declare a function:
```javascript
var lengthOfLastWord = function(s) {
};
```
2. Split an array using empty space characters as a separator. 
This will make each appearing word into a separate point of an array,
so that the resultant array will consist of words and strings of zero length.
```javascript
let array = s.split (" ");
```
3. Create another array that will include all the words from the previous array,
leaving behind the strings of zero length.
```javascript
let filtered = array.filter (function (e) {
        return e.length !== 0;
    });
```
4. If length of the array "filtered" equals 0, the last word doesn't exist 
and the function should return 0.
```javascript
 if (filtered.length === 0) {
        return 0;
```
5. If there are some strings in an array, 
we return the length of the last word appearing from left to right. 
Its number is equal to the string length minus one.
```
else {
        let last = filtered[filtered.length - 1];
        return last.length;
    };
```
The problem is solved.

## Full tests
![full tests](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/last%20word%20length/last%20word%20length%20test.PNG)
## Sample tests
![full tests](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/last%20word%20length/last%20word%20length%20output.PNG)
