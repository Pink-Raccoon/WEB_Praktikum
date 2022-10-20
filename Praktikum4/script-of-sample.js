const SCRIPTS = require("./scripts")

const scriptOfSample = function(str, SCRIPTS) {
    let uniCode = str.codePointAt(0)
    for(let i of SCRIPTS){
        
        for(let j of i.ranges){
            if(uniCode >= j[0] && uniCode <= j[1]){
                
                return i.name
            }
        }

        } return "unknown"
    }


console.log(scriptOfSample("英", SCRIPTS))
console.log( scriptOfSample("A", SCRIPTS) ) 
console.log( scriptOfSample("я", SCRIPTS) )
console.log(scriptOfSample("مساء الخير", SCRIPTS))
console.log(scriptOfSample(".", SCRIPTS))

module.exports={scriptOfSample}