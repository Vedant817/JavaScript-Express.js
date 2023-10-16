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

app.put('/api/people/:id',(req,res)=>{
    const {id}=req.params
    const {name}=req.body

    const person=people.find((person)=>{
        person.id===Number(id)
    })
    if(!person){
        return res.status(404).json({success:false,message:`No person with id ${id} found.`})
    }
    const newPeople=people.map((person)=>{
        if(person.id===Number(id)){
            person.name=name
        }
        return person
    })
    res.status(200).json({success:true,message:newPeople})
})

app.delete('/api/people/:id',(req,res)=>{
    //! Having same path but different type of request has no issues
    const person=people.find((person)=>{
        person.id===Number(req.params.id)
    })
    if(!person){
        return res.status(404).json({success:false,message:`No person with id ${req.params.id} found.`})
    }
    const newPeople=people.filter((person)=>{
        person.id!==Number(req.params.id)
    })
    return res.status(200).json({success:true,message:newPeople})
})

app.listen(5000,()=>{
    console.log('Server Started')
})
