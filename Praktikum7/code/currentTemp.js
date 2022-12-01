const https = require('node:https');
const myArgs = process.argv[2]
https.get('https://wttr.in/'+myArgs+'?format=j1', (res) => {
  console.log('statusCode:', res.statusCode);

  let body = ""

  res.on('data', (d) => {  
    body += d
  }); 

  res.on("end",()=>{
    try{
      console.log(body)
      let json = JSON.parse(body)
      let temp = json.current_condition[0].temp_C
      console.log(temp)
    }
    catch (error){
      console.error(error.message);
    }
  })

}).on('error', (e) => {
  console.error(e);
});