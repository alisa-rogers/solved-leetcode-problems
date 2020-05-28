## Goat Latin
Task: [Goat Latin](https://leetcode.com/problems/goat-latin).
A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.
We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)
The rules of Goat Latin are as follows:
- If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
For example, the word 'apple' becomes 'applema'.
 - If a word begins with a consonant, remove the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".
 - Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.


Return the final sentence representing the conversion from S to Goat Latin. 

## Algorithm of solving & code explanation
Let's convert the string into an array. 
Each element of the first array is a separate word.
We also create an empty array, which we will need later.
```javascript
 let arr = S.split(" ");
    let newarr = [];
```
In order to transform the words, we create a loop that iterates through each word:
```javascript
for (let a = 0; a < arr.length; a++) {
        let word = arr[a];
```
There are three essential transformations.
1. At the words that begin with a consonant, move the first letter to the end of the word. 
The words that begin with a vowel remain unchanged at this stage.
2. Add "ma".
3. Add one letter "a" to the first word, two letters "a" to the second, and so on.
So, it's obvious, that first of all we should make the function see the difference between the words 
that begin with vowel, and other that start with a consonant.

If the word starts with a vowel, we add it to the array we've created earlier to continue the change at the next stage.
```javascript
if (word.startsWith("a") || word.startsWith("A") 
         || word.startsWith("e") || word.startsWith("E")
         || word.startsWith("i") || word.startsWith("I")
         || word.startsWith("o") || word.startsWith("O")
         || word.startsWith("u") || word.startsWith("U")) 
         {
            newarr.push(word); 
         }
   else {
```
In the rest of the words, we move the first letter to the end of the word and add it to this array too.

To move the letter, we split the word into separate letters and shift the first letter. Then we join the array into the word again and add the shifted letter to the end.
```javascript
 else {
            let wordarr = word.split ("");
            let first = wordarr.shift();
            word = wordarr.join("");
            word = word + first;
            newarr.push(word);
         };
    };
```
At the next stage, we add the syllable "ma" to each word. We will use a similar approach: create an array and add the changed words to it.
```javascript
 let arrma = [];
    for (let b = 0; b < newarr.length; b++) {
        let maword = newarr[b] + "ma";
        arrma.push(maword);
    };
```
The last stage, at which should add the letter "a" according to the number of word in the string.
To do that, we create a loop that iterates through every single word. Inside it, we create another loop, that adds to the word the letter "a" for amount of times that equals to the word number in a string.
```javascript
let arrmaa = [];
    for (let c = 0; c < arrma.length; c++) {
        let maaword = arrma[c];
        let d = 0;
        while (d < c + 1) { 
        /*as the index of the first word equals 0 and 
        the variable "d" equals "0" too, 
        we must add 1 to "c" in this condition. */
           maaword = maaword + "a"; 
           d++;
        };
        arrmaa.push(maaword);
    };
```

Finally, we join the words together to form the final string. 
```javascript
let strmaa = arrmaa.join(" ");
return strmaa;
};
```
The problem is solved.

## Full tests
![full tests](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/Goat%20Latin/full%20tests.png)

## Sample tests
![sample tests](https://github.com/alisa-rogers/solved-leetcode-problems/blob/master/Goat%20Latin/sample%20tests.PNG)
