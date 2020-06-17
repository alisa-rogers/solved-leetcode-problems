# Valid Anagram
Task: [Valid Anagram](https://leetcode.com/problems/valid-anagram/). Two strings consisting of lowercase letters are given. 
We have to check if the second string is an anagram of the first.

## Algorithm of solving and code explanation.
1. If the strings' lengths are different,the second string can't be an anagram of the first.
```javascript
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
```
2. If the lengths are equal, sort the strings in alphabetical order and compare them. 
If they are identical, the original second string surely is an anagram of the first/
```javascript
    let sarr = s.split(""); //turn the strings into arrays to sort them
    let tarr = t.split ("");
    let sortedsarr = sarr.sort(); 
    let sortedtarr = tarr.sort();
    let sarrstr = sortedsarr.join(""); //turn the arrays backwards into the strings
    let tarrstr = sortedtarr.join("");
    return (sarrstr === tarrstr);
```
The problem is solved.

## Full tests
![full tests](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/valid%20anagram/full.PNG)
## Sample tests
![sample tests1](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/valid%20anagram/sample1.PNG)
![sample tests2](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/valid%20anagram/sample2.PNG)
