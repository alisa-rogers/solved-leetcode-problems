var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    else {
    let sarr = s.split("");
    let tarr = t.split ("");
    let sortedsarr = sarr.sort();
    let sortedtarr = tarr.sort();
    let sarrstr = sortedsarr.join("");
    let tarrstr = sortedtarr.join("");
    return (sarrstr === tarrstr);
        };
    };

console.log(isAnagram("anagram", "nagara"));
