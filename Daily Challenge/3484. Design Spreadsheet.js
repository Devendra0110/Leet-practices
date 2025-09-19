/**
 * @param {number} rows
 */
var Spreadsheet = function(rows) {
    let cells = ['A', 'B', 'C', 'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    this.map = new Map()
    for(let j=0;j<cells.length;j++ ){
        const cell = cells[j]
        for(let i=1;i<=rows;i++){
            this.map.set(cell+i, 0)
        }
    }
    console.log(this.map)
};

/**
 * @param {string} cell
 * @param {number} value
 * @return {void}
 */
Spreadsheet.prototype.setCell = function(cell, value) {
    this.map.set(cell, value)
};

/**
 * @param {string} cell
 * @return {void}
 */
Spreadsheet.prototype.resetCell = function(cell) {
    this.map.set(cell, 0)
};

/**
 * @param {string} formula
 * @return {number}
 */
Spreadsheet.prototype.getValue = function(formula) {
    const tokens = formula.replace('=','+').split('+')
    let total = 0
    for(let i=1;i<tokens.length;i++){
        const token = tokens[i]
       total  +=  this.map.get(token) ?? +token
    }
    return total || 0
};

/**
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */
