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
    if(size%2!=0){
        let position = Math.floor(size/2)
        arr[position][position] = value
    }
    return arr
}
console.log(spriralMatrix(1));
console.log(spriralMatrix(3));
console.log(spriralMatrix(4));
console.log(spriralMatrix(5));
console.log(spriralMatrix(6));

function spriralMatrixMIK(size){
    let dir =0, arr = [], value=1
    let top=0,bottom=size-1,left=0,right=size-1
    for(let i=0;i<size;i++) arr.push(new Array(size))
        /* 
        4 directions 
        0  move from left   to right while  top is constant and move    top to the bottom at the end
        1  move from top    to bottom while right is constant and move  right to the left at the end
        2  move from right  to left while   bottom is constant and move bottom to the top at the end
        3  move from bottom to top while    left is constant and move   left to the right at the end
    */
    while(top<=bottom && right>=left) {
        if(dir==0){
            for(let i=left;i<=right;i++){
                arr[top][i] = value++
            }
            top++
        }
        if(dir==1){
            for(let i=top;i<=bottom;i++){
                arr[i][right] = value++
            }
            right--
        }
        if(dir==2){
            for(let i=right;i>=left;i--){
                arr[bottom][i] = value++
            }
            bottom--
        }
        if(dir==3){
            for(let i=bottom;i>=top;i--){
                arr[i][left] = value++
            }
            left++
        }
        dir++
        if(dir==4){
            dir = 0
        }
    }
    return arr

}
console.log(spriralMatrixMIK(1));
console.log(spriralMatrixMIK(3));
console.log(spriralMatrixMIK(4));
console.log(spriralMatrixMIK(5));
console.log(spriralMatrixMIK(6));
