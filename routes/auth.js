const express = require('express');
const router = express.Router();

router.post('/',(req,res)=>{
    console.log(req.body) // Has the name entered
    const {name}=req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please enter the valid data.')
})

module.exports=router
