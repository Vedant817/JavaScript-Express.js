const express=require('express')
const app=express()

/*
If we want to include all the files i.e. html,css and javascript, we need to create a folder name public in which all the files are included and link by:
app.use(express.static('./public'))
*/

app.get('/',(req,res)=>{
    console.log('User hit the Home Page.')
    res.send("Hello Vanshay!!")
    //* res.status(200).send("Hello Vanshay!!")  Better Approach
})

app.get('/about',(req,res)=>{
    console.log('User hit the About Page')
    res.send('Welcome to the About Page.')
})

app.all('*',(req,res)=>{ //! This will have access to all the pages and will be executed if the required page by the user is not defined.
    console.log('User hits the Unavailable Page')
    res.send('<h1>Error:404 Page Not Found</h1>')
})

app.listen(5000,()=>{
    console.log("Server is listening on Port:5000")
})
