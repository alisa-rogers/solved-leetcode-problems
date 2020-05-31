/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    let array = s.split ("");
    let refarray = [];
    let letters = [];
    let digits = [];
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

    if (digits.length !== letters.length - 1 
    && letters.length !== digits.length - 1
    && digits.length !== letters.length) {
        return "";
    }
    else {
        for (let p = 0; p < letters.length, p < digits.length; p++) {
       refarray.push (digits[p]);
       refarray.push (letters[p]);
    };
    if (digits.length > letters.length) {
        
        return (refarray.join(""));
    }
    else if (letters.length > digits.length){
        refarray.unshift (letters[letters.length - 1]);
        return (refarray.join(""));
    }
    else {
        return (refarray.join(""));
    };
};
};
