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
//* In Route Params we use colon in url.
app.get('/api/products/:productID',(req,res)=>{
    // console.log(req)
    // console.log(req.params)
    const {productID}=req.params;
    const singleProduct=products.find((product)=>product.id===Number(productID))
    if(!singleProduct){
        res.status(404).send('Product Not Found')
    }
    res.json(singleProduct)
})

app.listen(5000,()=>{
    console.log('Server listening on port 5000')
})