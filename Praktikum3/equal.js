let emptyObj = {}
function arrayContent(a, b) {
    let a_length = a.length
    let b_length = b.length
    if (a_length === b_length) {
        for (i = 0; i <= a_length - 1; i++) {
            if (a[i].includes(b[i])) {
                return true
            }
            else {
                return false
            }

        }
    }
}

const ObjectContent = function(a,b){
    let aKeys = Object.keys(a)
    let bKeys = Object.keys(b)
    
    if(aKeys.length!=bKeys.length){
        return false
    }
    for(let key of aKeys){
        if(a[key] === b[key]){
            return true;
        }
    }return false
}
const equal = function(a,b){
    if(a===b){
        return true;
    }
    else{
        switch(typeof(a)===typeof(b)){
            case true:
                if(ObjectContent(a,b)){
                    return true
                }
                else if(arrayContent(a,b)){
                    return true;
                } else if (JSON.stringify(a) === '{}' && JSON.stringify(b) === '{}') 
                {
                    return true
                }

                break;
            default:
                break;
        }
        
    } return false;
}
module.exports={equal}
