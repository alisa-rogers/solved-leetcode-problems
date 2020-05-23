/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secretStr, guessStr) {
    let secret = secretStr.split ("");
    let guess = guessStr.split ("");
    let bulls = 0;
    let cows = 0;
    let length = secret.length; 
    for (let i = 0; i < length; i++) {
        if (secret[i] === guess[i]) {
            bulls++;
           // cows--;
        };
    }; 
        for (let n = 0; n < length; n++) {
            if (secret.includes (guess[n])) {
                cows++;
                secret.splice (secret.indexOf(guess[n]), /* deleteCount= */ 1);
                };
        };
    
    /*Note that the second loop counts all the digits present in both arrays regardless of their positions, 
    therefore it counts both cows and bulls. That's why we should subtract the number of bulls after the loop 
    to get the number of cows.*/
    cows -= bulls;
    return bulls + "A" + cows + "B";
};
