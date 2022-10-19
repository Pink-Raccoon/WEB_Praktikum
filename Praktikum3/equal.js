let emptyObj = {}

function arrayContent(a, b) {
    let a_length = a.length
    let b_length = b.length
    if (a_length === b_length) {
        for (i = 0; i <= a_length - 1; i++) {
            if (a[i].includes(b[i])) {
                return true
            } else {
                return false
            }

        }
    }
}

const ObjectContent = function(a, b) {
    let aKeys = Object.keys(a)
    let bKeys = Object.keys(b)

    if (aKeys.length != bKeys.length) {
        return false
    }
    for (let key of aKeys) {
        if (a[key] === b[key]) {
            return true;
        }
    }
    return false
}
const equal = function(a, b) {
    if (a === b) {
        return true;
    } else {
        switch (typeof(a) === typeof(b)) {
            case true:
                if (ObjectContent(a, b)) {
                    return true
                } else if (arrayContent(a, b)) {
                    return true;
                } else if (JSON.stringify(a) === '{}' && JSON.stringify(b) === '{}') {
                    return true
                }

                break;
            default:
                break;
        }

    }
    return false;
}
console.log("1", equal(16, 16))
console.log("2", equal(16, 17))
console.log("3", equal("hi", "hi"))
console.log("4", equal("hi", "hoi"))
console.log("5", equal({}, {}))
console.log("6", equal({ a: 1, b: 2 }, { b: 2, a: 1 }))
console.log("7", equal({ a: 1, b: 2 }, { c: 3, b: 2, a: 1 }))
console.log("8", equal({ a: {} }, { a: {} }))
console.log("9", equal({ a: emptyObj },   { a: emptyObj }))
module.exports = { equal }