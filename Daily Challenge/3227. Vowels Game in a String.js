/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function(s) {
    let vowels = 'aeiouAEIOU'
    for(let i=0;i<s.length;i++){
        if(vowels.includes(s[i])){
          return true
        }
    }
    return false

};
