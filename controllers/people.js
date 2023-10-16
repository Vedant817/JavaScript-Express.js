const getPeople=(req,res)=>{ //Base is already set so we can remove it here.
    res.status(200).json({success:true,data:people})
}
// same for other functions and add them to original file by exporting them.
