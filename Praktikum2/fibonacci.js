const fibonacci = function(n){
    if(n < 0 ){
        return "Please provide a positive Integer"
    }
    if (n <= 1)
    return n;
    else{
        return fibonacci(n - 1) + fibonacci(n - 2)
    }

}

let fiboG = function (n){
    if(n < 0 || n % 1 != 0){
        return "Please provide a positive Integer"
    }
    return Math.round((((1 + Math.sqrt(5)) / 2) ** n) / Math.sqrt(5))
}


let fastFiboFunction, n = 30
console.time("fibonacci")
fastFiboFunction = fibonacci(n)
console.timeEnd("fibonacci")
console.log(`fibonacci(${n})=${fastFiboFunction}`)

console.time("fiboG")
fastFiboFunction = fiboG(n)
console.timeEnd("fiboG")
console.log(`fiboG(${n})=${fastFiboFunction}`)

