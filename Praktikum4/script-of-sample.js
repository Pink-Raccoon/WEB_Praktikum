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



module.exports={scriptOfSample}