const findTag = function(a){
    const regex = /<\/?[\w\d]+>/gi
    let tag = regex.exec(a)
    if(tag != null){
        let tag_s = JSON.stringify(tag)
        let index_begin = tag_s.indexOf("<")        
        let index_end = tag_s.indexOf(">")
        return tag_s.slice(index_begin+1,index_end)

    }
    
}

console.log("1",findTag("<header>Text</header"))
console.log("2",findTag("123245 </header> bla"))
console.log("3",findTag("123245 <hea der> bla"))
console.log("4",findTag("123245 <hea<der> bla"))
console.log("5",findTag("123245 <hea<der bla"))

module.exports = {findTag}