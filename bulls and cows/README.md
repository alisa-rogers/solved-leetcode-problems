# Bulls and Cows
Task: [Bulls and Cows](https://leetcode.com/problems/bulls-and-cows/).
We have two strings of equal length, that consist of numbers. Our task is to check how similar are they. 
The answer string should look like "[number of bulls]A[number of cows]B", where

Bulls are digits present in both strings in the same positions.  E.g. for strings “123” and “213”, the digit 3 is a bull.
Cows are digits present in both strings, but in different positions. E.g. for strings “123” and “213”, the digits 1 and 2 are cows.
Both strings may contain duplicate digits. For the strings "0123" and "3345", the answer will be "0A1B", because there is only one "3" in the first string.

## Algorithm of solving

Let's count the bulls, and then count cows.  

First, we make both strings into arrays.

To count the bulls we use a loop that will check for a correspondence between each pair of digits in the arrays. That loop checks if every digit in the second array is present in the first.

To find number B we use a loop too. That loop checks if every number from the second array is present in the first. 
In order to do that, each time we find the matching digit, we remove the first occurrence of this digit from the first array.

Note that the second loop counts all the digits present in both arrays regardless of their positions, therefore it counts both cows and bulls. That's why we should subtract the number of bulls after the loop to get the number of cows.

Then we make up the final string and the problem is solved.


## Code explanation

Make strings into arrays:
```javascript
    let secret = secretStr.split ("");
    let guess = guessStr.split ("");
```

Set the necessary variables and the limiting variable for both of the loops:
```javascript
    let bulls = 0;
    let cows = 0;
    let length = secret.length; 
```

The first loop to count the bulls:
```javascript
 for (let i = 0; i < length; i++) {
        if (secret[i] === guess[i]) {
            bulls++;
        };
    }; 
```
The second loop to count the cows:
```javascript
    for (let n = 0; n < length; n++) {
            if (secret.includes (guess[n])) {
                cows++;
                secret.splice (secret.indexOf(guess[n]), /* deleteCount= */ 1);
                };
        };
```
The second loop counts all the digits present in both arrays regardless of their positions, 
therefore it counts both cows and bulls. That's why we should subtract the number of bulls after the loop 
to get the number of cows.

```javascript
    cows -= bulls;
```
Make the final string:
```javascript
return bulls + "A" + cows + "B";
```
## Test
![Bulls and Cows test](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/bulls%20and%20cows/bulls%20and%20cows%20test.PNG)
## Input/output
![Bulls and Cows output 1](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/bulls%20and%20cows/bulls%20and%20cows%20output%201.PNG)
![Bulls and Cows output 2](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/bulls%20and%20cows/bulls%20and%20cows%20output%202.PNG)
