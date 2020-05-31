## Reformat the String
Task : [Reformat the String](https://leetcode.com/problems/reformat-the-string). 
A string consisting of lowercase English letters and digits is given. We should rearrange the characters. 
No letter should followed by another letter and no digit is followed by another digit in the returned string.
If it is impossible to reformat the string this way, the function should return an empty string.

# Algorithm of solving & code explanation.
1. Split the string into an array of separate characters:
```javascript
let array = s.split ("");
```
2. Create three arrays: the first for the characters of the reformatted string, the second to put there all the letters, 
and the third to put there all the digits:
```javascript
let refarray = [];
let letters = [];
let digits = [];
```
3. Create a loop counter and a loop to sort out the characters:
```javascript
let i = 0;
while (i < array.length) {
        if (array[i] === "0" || array[i] === "1" 
            || array[i] === "2" || array[i] === "3" 
            || array[i] === "4" || array[i] === "5" 
            || array[i] === "6" || array[i] === "7" 
            || array[i] === "8" || array[i] === "9") {    
            digits.push(array[i]);
        }
        else {
            letters.push(array[i]);
        };
    i++;
    };
```
4. Obviously, it is impossible to reformat the string, if the difference between the length of these two arrays is more than 1, 
and the function should return an empty string in such cases:
```javascript
 if (digits.length !== letters.length - 1 
    && letters.length !== digits.length - 1
    && digits.length !== letters.length) {
        return "";
    }
```
OK, now we get to the key points of my solution.
5. Create a loop to actually put the rearranged characters into an array:
```javascript
 for (let p = 0; p < letters.length, p < digits.length; p++) {
       refarray.push (digits[p]);
       refarray.push (letters[p]);
    };
```
This loop however works with two arrays at the same times and has the same limiter for two of them,
while there can be a difference of one character in their length and we might have to add one more character from the longer array. 
That's why we need the step №7.
If the lengths of arrays are equal or the digits' array is longer, the problem will be solved right after the next step.
6. Join an array into a string and return it:
```javascript
if (digits.length > letters.length || digits.length === letters.length) {
        return (refarray.join(""));
    }
```
7. If the letter's array is longer, we must add the last character that isn't included to the final array yet to the beginning of it 
(and not to the end of it - because the final array already ends with a letter now). Then join the array into a string and return it:
```javascript
else if (letters.length > digits.length){
        refarray.unshift (letters[letters.length - 1]);
        return (refarray.join(""));
    };
```
The problem is solved.

# Full tests
![full tests](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/reformat%20the%20string/full%20tests.PNG)

# Sample tests
![sample tests](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/reformat%20the%20string/sample%20tests.PNG)
