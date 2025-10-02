/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let sum = numBottles
    while(numBottles>=numExchange){
        let divisor = Math.floor(numBottles/numExchange)
        let remaining = numBottles%numExchange
        numBottles = divisor+remaining
        sum += divisor
    }
    return sum
};
