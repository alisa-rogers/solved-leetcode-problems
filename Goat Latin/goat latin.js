/**
 * @param {string} S
 * @return {string}
 */

var toGoatLatin = function(S) {
    let arr = S.split(" ");
    let newarr = [];
    for (let a = 0; a < arr.length; a++) {
        let word = arr[a];
        if (word.startsWith("a") || word.startsWith("A") 
         || word.startsWith("e") || word.startsWith("E")
         || word.startsWith("i") || word.startsWith("I")
         || word.startsWith("o") || word.startsWith("O")
         || word.startsWith("u") || word.startsWith("U")) 
         {
            newarr.push(word); 
         }
         else {
            let wordarr = word.split ("");
            let first = wordarr.shift();
            word = wordarr.join("");
            word = word + first;
            newarr.push(word);
         };
    };

    let arrma = [];
    for (let b = 0; b < newarr.length; b++) {
        let maword = newarr[b] + "ma";
        arrma.push(maword);
    };
    let arrmaa = [];
    for (let c = 0; c < arrma.length; c++) {
        let maaword = arrma[c];
        let d = 0;
        while (d < c + 1) {
           maaword = maaword + "a"; 
           d++;
        };
        arrmaa.push(maaword);
    };
let strmaa = arrmaa.join(" ");
return strmaa;
};
