const express = require('express');
const app = express();
//* request=> middleware=> response

const logger=(req,res,next)=>{ //! It is always advised to add the middleware in separate files as it can create messy code because there will be number of routes. use app.use(middleware) // it will be executed for all params. can also dd url.
    const method = req.method
    const url = req.url
    const time= new Date().getFullYear()
    console.log(method,url,time)
    // res.send('Testing')
    next()
}

app.get('/',logger,(req, res)=>{ //* Will just pass the middleware and express will handle the internal required mechanism.
    res.send('Home')
})

app.get('/about',logger,(req, res)=>{
    res.send('Home')
})

app.listen(4000,()=>{
    console.log('Server Started')
})
