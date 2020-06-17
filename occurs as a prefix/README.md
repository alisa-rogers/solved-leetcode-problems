# Check If a Word Occurs As a Prefix of Any Word in a Sentence
Task: [Check If a Word Occurs As a Prefix of Any Word in a Sentence](https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/).
A sentence and a word, both consist of lowercase letters, are given. A function should determine 
whether the given word is a prefix of any word in the sentence and return its number (1-indexed).
If there is no such word, a function should return "-1". If there are multiple suitable words, a function should return the minimum index.

## Algorithm of solving & code explanation
1. Make the string into an array:
```javascript
var isPrefixOfWord = function(sentence, searchWord) {
    let array = sentence.split(" ");
```
2. Create the variable "answer" and set the value "-1" to it. 
```javascript
    let answer = -1; //the function should return "-1", if it doesn't find any suitable words
```
3. Create a loop to search for the words using startsWith method. The function should return only the first suitable index, 
  so, as soon as it is found, we stop it and return the answer.
```javascript
    let i = 0;
    while (i < array.length){
        if (array[i].startsWith(searchWord)) {
            answer = i+1; //add 1, because the answer should be 1-indexed.
            break;
    };
        i++;
    };
    return answer;
};
```
The problem is solved.
## Full tests
![full tests](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/occurs%20as%20a%20prefix/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA.PNG)
## Sample tests
![sample tests](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/occurs%20as%20a%20prefix/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA2.PNG)
