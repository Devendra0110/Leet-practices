var minimumLength = function(str) {
    let map = new Map()
    for(let i=0;i<str.length;i++){
        if(!map.get(str[i])){
            map.set(str[i], 1)
        }else{
            map.set(str[i], map.get(str[i])+1)
        }
    }
   let total=0

map.forEach((val, key) => {
    if(val<2 || val%2!==0) total++;
    else total+=2
})
return total
};
