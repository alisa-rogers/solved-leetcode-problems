# Repeated Substring Pattern
Task: [Repeated Substring Pattern](https://leetcode.com/problems/repeated-substring-pattern). Given a non-empty string 
check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.
## Algorithm of solving and code explanation
The approach is pretty simple. It is based on the idea that if we split a string 
that can be constructed by taking a substring of it and appending multiple copies of the substring together by this substring,
we will get an array of empty strings.
1. If the string is empty or its length equals 1, there is no pattern to repeat, and the function should return "false".
```javascript
if (s.length === 1) {
    return false;
    };
```
2. The length of the longest substring we will split the string by will be equal to the half of string's length. 
It is obvious, that if there will be no positive result in all of this cases, "false" should be returned.
Also we create a variable that will be returned.
```javascript
let length = s.length/2;
let result;
```
3. Make a loop, that will make all the possible substrings and split the string by all of them consequently:
```javascript
for (let i = 1; i <= length; i++) {
        let substring = s.substring(0, i);
        let array = s.split(substring);
```
4. Still inside of this loop, create a filtered array, to which only the non-empty strings will be included, 
for each of the arrays created earlier.
```javascript
let filtered = array.filter(function(value, index, arr) {return value !== ""});
```
5. If some of the filtered arrays is empty, it is possible to construct the string from the repeated pattern. Let the result equal "true".
```javascript
if (filtered.length === 0) {
            result = true;
            break;
```
6. If there is no empty array, let the result equal "false".
```javascript
else {
            result = false;
        }
    };
```
7. Return the result.
```javascript
return result;
```
The problem is solved.
## Full tests
![full tests](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/repeated%20substring%20pattern/full.PNG)
## Sample tests
![sample tests 1](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/repeated%20substring%20pattern/sample%201.PNG)
![sample tests 2](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/repeated%20substring%20pattern/sample%202.PNG)
