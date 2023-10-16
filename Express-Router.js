//* In Common normal convention the file becomes busy, So now we use another pattern to make the things fine by combining all the requests of common path.
const express=require('express')
const app=express()
const people=require('./routes/people')
const auth=require('./routes/auth')

// Static Method:
app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false})) // Pre-built middleware, it parses incoming requests with url.
app.use(express.json())
app.use('/api/people',people)
app.use('/login',auth)

app.listen(5000,()=>{
    console.log('Server Started')
})
