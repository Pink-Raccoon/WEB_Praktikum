const findTag = function(a){
    if(a.includes("<"&&">")){
            let index_begin = a.indexOf("<")
            let index_end = a.indexOf(">")
            return a.slice(index_begin+1,index_end)

        }
}


module.exports = {findTag}