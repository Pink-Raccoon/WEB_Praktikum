const fs = require('fs')
const file = './csv/population_orig.csv'
const newFile = 'C:\Users\ashas\ZHAW_Code\WEB_Praktikum\Praktikum6\code\text.json'
const categoriesArr = ["Entity","Code","Year","Total population (Gapminder, HYDE & UN)"]


fs.stat(file,"utf-8",(err,stats)=>{
    if(err) {console.log('error')}
    else{
        console.log(stats.size)
        console.log(stats.ctime)
        console.log(stats.blocks)
        //console.log()read time???
    }
})

const ReadFile = function(){
    let json ={data:[]}
    fs.readFile(newFile,"utf-8",(err,data)=>{        
        if(err) {console.log('error')}
        else{        
            let dataArr = data.split('\n')
            for(let i=0;i<dataArr.length;i++){                
              let bla = dataArr[i].split(",")  
              json   


            }
                        
            
            
        }
    })
}

const WriteFile = function(){
    let content = ReadFile()
    fs.writeFile('newFile', content,(err)=>{
        if(err){
            console.log('error')
        }
        else{    
            console.log("file written successfully")    
        }
    })    
}
