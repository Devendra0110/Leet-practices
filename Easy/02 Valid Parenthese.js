/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const symbolTable ={
        ')':'(',
        '}':'{',
        ']':'['
    }
    const callStack = []
    for(let i=0;i<s.length;i++){
        let operation = Object.keys(symbolTable).includes(s[i]) ? 'pop' : 'push'
        if(i==0 && operation == 'pop'){
          return false
        }else{
            if(operation =='pop' &&  callStack[callStack.length-1]== symbolTable[s[i]]){
                   callStack.pop()
            }else{
              callStack.push(s[i])
            }
        }
    }
    return callStack.length==0
};