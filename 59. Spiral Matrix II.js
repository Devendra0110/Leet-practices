function spriralMatrix(size){
    let p1 = size-1, p2 = size-1, p3 = 0 , p4=0
    let i =0, j=0, arr = [], value=1
    for(let i=0;i<size;i++) arr.push(new Array(size))
    while(value< Math.pow(size,2)) {
        while(j<p1){
            arr[i][j] = value++
            j++
        }
        p1--
        while(i<p2){
            arr[i][j] = value++
            i++
        }
        p2--
        while(j>p3){
            arr[i][j] = value++
            j--
        }
        p3++
        while(i>p4){
            arr[i][j] = value++
            i--
        }
        p4++
        i++
        j++
    }
    // if(size%2!=0){
    //     let position = Math.floor(size/2)
    //     arr[position][position] = value
    // }
    return arr
}
console.log(spriralMatrix(1));
console.log(spriralMatrix(3));
console.log(spriralMatrix(4));
console.log(spriralMatrix(5));
console.log(spriralMatrix(6));
