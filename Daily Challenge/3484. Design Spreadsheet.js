/**
 * @param {number} rows
 */
var Spreadsheet = function(rows) {
    this.map = new Map()
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
    const [sp, token1, token2] = formula.replace('=','+').split('+')
    const val1 = isNaN(token1) ? (this.map.get(token1) ?? 0) : +token1
    const val2 = isNaN(token2) ? (this.map.get(token2) ?? 0) : +token2
    return val1 + val2
};
