

function clearDigit(s="Hello"){
    let letters=[], digitCount =0,breakIndex =-1
    for(let i=s.length-1;i>=0;i--){
        if(!isNaN(s[i])){
            digitCount++
        }else{
            digitCount==0 ? letters.unshift(s[i]) : digitCount--
        }
    }
    return letters.join("")
}
console.log(clearDigit('aa33aa22cb34dv0'));

