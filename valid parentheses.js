/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.indexOf("(]") !== - 1) {
        return false;
    }
    else if (s.indexOf("(}") !== - 1) {
        return false;
    }
    else if (s.indexOf("[)") !== - 1) {
        return false;
    }
    else if (s.indexOf("[}") !== - 1) {
        return false;
    }
    else if (s.indexOf("{)") !== -1) {
        return false;
    }
     else if (s.indexOf("{]") !== -1) {
        return false;
    }
    else if (s.startsWith("}" || ")" || "]")) {
        return false;
    }
    else if (s.endsWith("{" || "(" || "[")) {
        return false;
    }
    else {
        return true;
    };
};
