# Valid Palindrome

Task: [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/).
We should check if the string is palindromic (ignoring cases and punctuation marks). 
If it is, the function should return "true", otherwise it should return "false".
The empty string should also be defined as a valid palindrome.

## Algorithm of solving & code explanation
1. Declare a function: 
```javascript
var isPalindrome = function(s) {
```

2. Replace all the punctuation marks and make our script case insensitive:
```javascript
let newS = s.replace(/[.,\'/#!$%\^"&\*;@:{}=\-_`?~() ]/g,"");
    let finalS = newS.toLowerCase();
```

3. Set that the string that is empty or consists of 1 character is palindromic:
```javascript
if (finalS.length === 0 || finalS.length === 1) {
        return true;
    };
```    
4. Here's the main part of our solution. We should check if the first and the last character of  astring are the same.
If they are equal, we continue to compare symbols, 
this time the second counting from the beginning and the second counting from the end of the string. 
In other words, we check if the left half of string is equal to the reversed right half of it.
Once it isn't equal, we return "false". If it is, we return "true".
If the number of characters in a string is odd, we simply ignore the center character, because it doesn't affect anything.
```javascript
let left = 0, right = finalS.length - 1;
    
     while (left < right) {
        let l = finalS[left];
        let r = finalS[right];
        left++, right--;
        if (left >= right || l !== r) { //the boolean "true" is returned when all the characters are checked
            return (l === r);
            break; //if two characters are not the same, the loop breaks and the boolean "false" is returned.
        };
     };
};
```
The problem is solved.

## Full tests
![full tests](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/valid%20palindrome/valid%20palindrome%20test.PNG)

## Sample tests
![sample tests1](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/valid%20palindrome/valid%20palindrome%20output.PNG)
