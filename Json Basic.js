const express=require('express')
const app=express()
const {products}=require('./data.js')

app.get('/',(req,res)=>{
//  res.status(200).json({name:'Vanshay'},{name:'Vedant'})
    res.status(200).json(products)
})

app.listen(4000,()=>{
    console.log('Server is  started')
})
