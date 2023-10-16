//In previous case, we are not mentioning what type of information we sending.
const http=require('http')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'application/json'});
    res.write('<h1>Hello Vanshay!</h1>')
    console.log('User hit the server');
    res.end();
}).listen(4000)
