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

app.get('/api/products/:productID/reviews/reviewID',(req,res)=>{
    console.log(req.params)
    res.send('Hello World!!')
})

app.get('/api/v1/query',(req,res)=>{
    console.log(req.query) //! This is useful because after query add a question mark and after that add as many parameters as wanted.
    const {search,limit}=req.query
    let sortedProducts=[...products]
    if(search){
        sortedProducts=sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts=sortedProducts.slice(0,Number(limit))
    }
    //* If no parameter is given then it will show all products.
    if(sortedProducts.length<1){
        return res.status(200).json({success:true,data:[]})
    }
    res.status(200).json(sortedProducts)
})

app.listen(5000,()=>{
    console.log('Server listening on port 5000')
})
