const SCRIPTS = require("./scripts")
const oldAndLiving = function(SCRIPTS) {
    let arrYear = []
    for (let i of SCRIPTS)

        if (i.year < 0 && i.living === true) {
            arrYear.push(i.name)

        }
    return arrYear

}

const oldAndLivingFilter = function(SCRIPTS) {
    let arr = (SCRIPTS.filter(i => i.year < 0 && i.living === true, i => i.name))
    return arr


}

const numberOfCodes = ({ ranges }) => ranges.reduce((curr, [from, to]) => curr + to - from, 0)

console.log(oldAndLiving(SCRIPTS))
console.log(oldAndLivingFilter(SCRIPTS))
console.log(numberOfCodes(SCRIPTS[3]))