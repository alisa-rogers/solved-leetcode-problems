/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let array = sentence.split(" ");
    let answer = -1;
    let i = 0;
    while (i < array.length){
        if (array[i].startsWith(searchWord)) {
            answer = i+1;
            break;
    };
        i++;
    };
    return answer;
};
