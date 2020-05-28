# Number of Segments in a String
Task: [Number of Segments in a String](https://leetcode.com/problems/number-of-segments-in-a-string/).
We should count the number of segments in a string. A segment is defined to be a contiguous sequence of non-space characters.

## Algorithm of solving & code explanation
Firstly, we split the string to the segments and form an array out of them. We use a space symbol as a separator.
```javascript
var countSegments = function(s) {
    let array = s.split (" ");
```
However, the string might include a sequence of spaces, that will convert to the empty segments of the array, which we don't need to count.
Let's filter them.
```javascript
let actualarray = array.filter(function(value, index, arr) {return value !== ""});
```
Now, let's make the function count the length of this filtered array and return it as a result.
```javascript
let num = actarr.length;
return num;
```
The problem is solved.
## Full tests
![full tests](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/number%20of%20segments%20in%20a%20string/full%20tests.PNG)
## Sample tests
![sample tests](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/number%20of%20segments%20in%20a%20string/sample%20tests.PNG)
