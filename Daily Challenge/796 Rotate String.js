/**
 * First Approach Brute Force
 * itetrate array from 0 to length of string
 * and rotate string by breaking joining the string as substring
 * if rotatedString mathes to goal return false
 * loop ends
 *
 * return false
 *
 */

var rotateString = function(s, goal) {
    let n = s.length, rotatedString = s
    for(let i=0;i<n;i++){
        rotatedString = rotatedString.substring(1) + rotatedString.substring(0,1)
        if(goal==rotatedString) return true
    }
    return false
};

/**
 * Another approach from CodeStoryWithMIK
 *
 * Point - If you concatenate two same string then all the possible rotation will present in the concatenated string
 *
 * e.g. s = 'abcde', concatenated = 'abcdeabcde'
 * contains all roations i.e. 'abcde', 'bcdea', 'cdeab', 'deabc', 'eabcd'
 *
 */



var rotateString = function(s, goal) {
    return  (s+s).includes(goal)
};
