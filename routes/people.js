const express = require('express');
const router = express.Router();
let {people}=require('../data')


router.get('/',(req,res)=>{ //Base is already set so we can remove it here.
    res.status(200).json({success:true,data:people})
})

router.post('/postman',(req,res)=>{
    console.log(req.body) // Has the name entered
    const {name}=req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please enter the valid data.')
})

router.put('/:id',(req,res)=>{
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

router.delete('/:id',(req,res)=>{
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

module.exports=router
