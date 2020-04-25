/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let arrayS = secret.split ("");
    let arrayG = guess.split ("");
    let bulls = 0;
    let cows = 0;
    let length = arrayS.length; 
    for (let i = 0; i < length; i++) {
        if (arrayS[i] === arrayG[i]) {
            bulls++;
            cows--;
        };
    }; 
        for (let n = 0; n < length; n++) {
            if (arrayS.indexOf (arrayG[n]) !== -1) {
                cows++;
                };
        };
        
    let string = bulls + "A" + cows + "B";
    return string;
};