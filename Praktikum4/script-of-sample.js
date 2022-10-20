const SCRIPTS = require("./scripts")

const scriptOfSample = function(str, SCRIPTS) {
    let uniCode = str.codePointAt(0)
    for(let i of SCRIPTS){
        
        for(let j of i.ranges){
            if(uniCode > i.ranges[j][0] && uniCode < i.ranges[j][1]){
                return i.name
            }

        }
    }

}
console.log(scriptOfSample("英", SCRIPTS))