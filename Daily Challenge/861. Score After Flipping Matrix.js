/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {

    /**
     * to maximize the binary sum flip row if it starts with 0
     */
    for(let i=0;i<grid.length;i++){
      let row = grid[i]
        if(row[0]==0){
            grid[i] = row.map((val) => val ? 0:1)
        }
    }
    /**
     * check if the 0's are more than 1's in a column if it's then flip the column
     */
     for(let j=0;j<grid[0].length;j++){
       let flip = 0
      for(let i=0;i<grid.length;i++){
         flip  += grid[i][j] ? -1 : 1
      }
        if(flip>0){
        for(let i=0;i<grid.length;i++){
            grid[i][j] = grid[i][j] ?0 :1
        } 
      }
     
   }

   // calculate the binary value of grid and return
   let total=0
   for(let row of grid){
     total += parseInt(row.join(""),2)
   }
   return total
};