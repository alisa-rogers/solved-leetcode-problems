# Reverse String
Task: [Reversed String](https://leetcode.com/problems/reverse-string).

We need to write a function that reverses a string. The input string is given as an array of characters. 
We must do it by modifying the input array in-place.

## Algorithm of solving
Consider the number of elements in an array.

If it's even, we should swap places the first and the last array element, 
than the second element counting from the beginning and the second element counting from the end, and so on, 
till all of the elements will be swapped places.
If it's odd, we should do the same, but leave the center element of an array unchanged, because it should stay the same anyway.

To do it, we create two variables and the third variable that keeps the value of the first variable 
while we make the first variable equal to the second. Then we make the second variable equal to the third, 
so that the variables become swapped.
We use the "while" loop to handle each pair of variables.

## Code explanation
Firstly, we declare variables:
```javascript
 let left = 0, right = s.length - 1;  
```
Than we create the loop:
```javascript
 while (left < right) { //iterates through each pair of elements leaving the center element unchanged
            let temp = s[left]; //declares the third variable and makes it equal the first;
            s[left] = s[right]; //changes the value of the first variable
            s[right] = temp; //makes the second variable equal the third (which is now the same as the first before the change)
            //makes the loop iterate through the next pair of variables moving from the sides to the center of an array:
            left++;
            right--;
         };
```
## Test
![Reverse String test](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/reverse%20string/reverse-string-test.PNG)
## Input/output
![Reverse String output](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/reverse%20string/reverse-string-output.PNG)
