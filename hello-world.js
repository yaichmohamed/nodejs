//Task One:
console.log('HELLO WORLD')

//Task Two:
const http=require('http')
const server=http.createServer(function(req,res){
    res.write('<h1>hello node!!!</h1>')
    res.end()
})
server.listen(3000,err=>{
    err?console.log(err):console.log("node hello-worldserver is running on http://localhost:3000");
})

//Task Three:
const fs=require('fs')
fs.writeFile('welcome.txt','hello Node',(err)=>{
err?console.log(err):console.log('file seccesfully created')
})

fs.readFile('welcome.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
      });