/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let count = 0, words= text.split(" ")
    for(let i=0;i<words.length;i++){
        let word = words[i]
        count++
        for(let j=0;j<word.length;j++){
            if(brokenLetters.includes(word[j])){
                count--
                break;
            }
        }
    }
    return count
};
