const express=require('express')
const app=express()
const {products}=require('./data.js')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><br><a href="api/products">Products</a>')
})
app.get('/api/products',(req,res)=>{
    const newProducts=products.map((product)=>{
        const {idm,name,image}=product;
        return {idm,name,image}
    })
    res.json(newProducts)
})
//Getting a single product
//* Below is the example of route which is not efficient method if the product number is very large. So we use route params.
app.get('/api/products/1',(req,res)=>{
    const singleProduct=products.find((product)=>product.id===1)
    res.json(singleProduct)
})

app.listen(5000,()=>{
    console.log('Server listening on port 5000')
})