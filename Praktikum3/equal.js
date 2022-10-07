const { type } = require("os");
const arrayContent = function(a,b){
    let a_length = a.length
    let b_length = b.length
    if(a_length === b_length){
        for(i = 0; i<=a_length-1;i++){
            if(a[i].includes(b[i])){
                return true
            }
            else{
                return false
            }

        }
    }
}
const equal = function(a,b){
    if(a===b){
        return true;
    }
    else{
        switch(typeof(a)===typeof(b)){
            case true:
                if(Object.keys(a)===Object.keys(b)){
                    return true
                }
                else if(arrayContent(a,b)){
                    return true;
                }

                break;
            default:
                break;
        }
        
    } return false;
}
module.exports = {equal}
