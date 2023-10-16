//In previous case, we are not mentioning what type of information we sending.
const http=require('http')
const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/'){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('<h1>Hello Vanshay!</h1>') //! We can pass the data for a particular file but we need to include Content-Type.
        console.log('User hit the server');
        res.end();
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
