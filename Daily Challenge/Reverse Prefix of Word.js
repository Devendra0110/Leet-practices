// Problem link - https://leetcode.com/problems/reverse-prefix-of-word/?envType=daily-question&envId=2024-05-01

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    if(word.includes(ch)){
        const firstIndex = word.indexOf(ch)
        const prefix = word.substring(0, firstIndex+1)
        const lastword = word.substring(firstIndex+1)
        const reversePrefix = prefix.split("").reverse().join("")
        return reversePrefix + lastword
    }else{
        return word
    }
};