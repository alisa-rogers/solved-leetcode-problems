# Bulls and Cows
Task: [Bulls and Cows](https://leetcode.com/problems/bulls-and-cows/).
We have two strings of equal length, that consist of numbers. Our task is to check how similar are they. 
The answer string should look like "[number A]A[numberB]B", where

[number A] is a quantity of numbers that both the first and the second string includes 
and that are located at the same position in the second string as they are in the first (bulls).

[numberB] is a quantity of numbers that both the first and the second string includes 
and that are located NOT at the same position in the second string as they are in the first (cows).


## Algorithm of solving

Let's find number A, and than find number B.

First, we make both strings into arrays.

To find number A we use a loop that will check for a correspondence between each pair of numbers at the arrays.

To find number B we use a loop too. That loop checks if every number from the second array is present in the first. 
If we have only one "7" in the first array and two "7"s in the second, we only consider one of these "7"s as a matching.
In order to do that, each time we find the matching number we remove the appropriate number from the first string. 

*The second loop increases the number B by 1 for all the numbers that both array include, no matter where they are located, 
that's why we should also substract the first number from the second.

Finally, we make up the final string. The problem is solved.


## Code explanation

Make strings into arrays:
```javascript
    let arrayS = secret.split ("");
    let arrayG = guess.split ("");
```

Set the necessary variables and the limiting variable for both of the loops:
```javascript
    let bulls = 0;
    let cows = 0;
    let length = arrayS.length; 
```

The first loop to find a number A:
```javascript
 for (let i = 0; i < length; i++) {
        if (arrayS[i] === arrayG[i]) {
            bulls++;
            cows--; //see the *paragraph
        };
```
The second loop to find a number B:
```javascript
for (let n = 0; n < length; n++) {
            if (arrayS.includes (arrayG[n])) {
                cows++;
                arrayS.splice (arrayS.indexOf(arrayG[n]), 1);
                };
        };
```
The final string:

```javascript
let string = bulls + "A" + cows + "B";
    return string;
```

## Test
![Bulls and Cows test](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/bulls%20and%20cows/bulls%20and%20cows%20test.PNG)
## Input/output
![Bulls and Cows output 1](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/bulls%20and%20cows/bulls%20and%20cows%20output%201.PNG)
![Bulls and Cows output 2](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/bulls%20and%20cows/bulls%20and%20cows%20output%202.PNG)
