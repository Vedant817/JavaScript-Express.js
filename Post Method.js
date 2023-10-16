const express=require('express')
const app=express()
let {people}=require('./data')
// Static Method:
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false})) // Pre-built middleware, it parses incoming requests with url.

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

app.post('/login',(req,res)=>{
    console.log(req.body) // Has the name entered
    const {name}=req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please enter the valid data.')
})

app.listen(5000,()=>{
    console.log('Server Started')
})