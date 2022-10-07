const assert = require("assert")
const power = function(base, exponent){
    assert.ok(Number.isInteger(exponent),"use an Integer")
    assert.ok(Number.isInteger(base),"use an Integer")
    assert.ok(exponent >= 0, "use an Int greater than 0")
    
    if(exponent % 2 === 1){

        return base * power(base,exponent-1)
  

    }
    else if(exponent !=0 && exponent % 2 === 0 ){     
        let result = power(base, exponent/2) 
        return result * result
    }
    else if (exponent ===0){
    return 1
    }

}
//console.log(power(0,0))
//console.log(power(2,10))
//console.log(power(10,4))
//console.log(power(2,0.5))
//console.log(power(5,-1))
//console.log(power('a',3))


module.exports = {power}