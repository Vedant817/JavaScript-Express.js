const http=require('http')
const{readFileSync}=require('fs')
const homePage=readFileSync('./index.html')
const server=http.createServer((req,res)=>{
    const url=req.url
    if(url==='/'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(homePage)
        res.end()
    }
    else if(url==='/about'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('<h1>Welcome to About Page.</h1>')
        console.log('User hits the about page');
        res.end();
    }
    else{
        res.writeHead(404,{'Content-Type': 'text/html'});
        res.write('<h1>404:Page Not Found</h1>')
        console.log('User accessed the unavailable page.');
        console.log('Access Denied.')
        res.end();
    }
}).listen(4000)
