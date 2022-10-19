const factorial = function(x) {

    if (typeof(x) === 'bigint') {
        if (x <= 1) {
            return BigInt(1)
        }
        let fact = BigInt(1)


        for (let i = BigInt(1); i <= x; i++) {
            fact = fact * i
        }
        return fact
    } else {
        if (x <= 1) {
            return 1
        }
        let fact = 1


        for (let i = 1; i <= x; i++) {
            fact = fact * i
        }
        return fact

    }


}
module.exports = { factorial }

console.log(factorial(BigInt(0)))