# First Unique Character in a String
Task: [First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/).
There is a string, that consists of lowercase letters. 
We should write a function, that finds the first unique character in it and returns its index. 
If there are no unique characters in the string, the function should return "-1".
A unique character is a character that appears in the string only once.

## Algorithm of solving &  code explanation
Firstly, we make the function return "-1", if the string is empty. 
```javascript
var firstUniqChar = function(s) {
    if (s.length === 0) {
        return -1;
    };
    
```
Secondly, we declare a variable "result" and create a loop.
At each iteration, the loop creates a new string, that includes all the characters except the one it iterates through at the moment.
```javascript
 let result;
 for (let i = 0; i < s.length; i++) {
        let substring = s.substring (0, i) + s.substring (i+1);
        if (substring.includes(s[i]) === true) {
            result = -1;
```
Then it searches for this character in a new string. If this character exists, the variable "result" becomes equal to "-1". 
When a unique character is found, the variable "result" becomes equal to its index, and the loop stops executing.
```javascript
else {
       result = i;
       break;
        };
     };
```
The variable "result" is returned, and the problem is solved.
```javascript
  return result;
};
```
## Full tests

![full tests](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/first%20unique%20character%20in%20a%20string/full%20tests.PNG)

## Sample tests

![sample tests](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/first%20unique%20character%20in%20a%20string/sample%20tests.PNG)
