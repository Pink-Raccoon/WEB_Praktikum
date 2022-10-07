//b
const power = function(base, exponent){
    if(exponent % 2 === 1){
    return base * power(base,exponent-1)
    }
    else if(exponent !=0 && exponent % 2 === 0 ){        
        let result = power(base, exponent/2) 
        return result * result
    }
    else return 1
}

console.log(power(2,4))