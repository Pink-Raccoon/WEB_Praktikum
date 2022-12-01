const fs = require('fs')
const file = './csv/population_orig.csv'

const categoriesArr = ["Entity","Code","Year","Total population (Gapminder, HYDE & UN)"]


/*fs.stat(file,"utf-8",(err,stats)=>{
    console.log("wtf")
    if(err) {console.log('error')}
    else{
        console.log(stats.size)
        console.log(stats.ctime)
        console.log(stats.blocks)
        //console.log()read time???
    }
})*/

const ReadFile = function(){
    let json ={data:[]}
    let completeObj = {}
    let bla = []
    let content = []
    let contentWrite = {}
    let data = fs.readFileSync(file,"utf-8")         
    let dataArr = data.split('\n')
    for(let i=1;i<dataArr.length-1;i++){                  
        bla = dataArr[i].split(",")       
        json.data = bla       
        for(let j = 0;j<json.data.length;j++){            
            completeObj[categoriesArr[j]]=json.data[j]
        }
        content.push(completeObj)
        
        
    }contentWrite=Object.assign(content,contentWrite)
    fs.writeFileSync("text.txt",JSON.stringify(contentWrite))
}
     


ReadFile()