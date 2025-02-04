const {Router} = require('express');
const { productupload } = require('../Middleware/multer');
const ProductModel = require('../Model/ProductModel');
const productrouter = Router();

productrouter.get("/", (req, res) => {
    res.send("Product router");
})

productrouter.post("/",productupload.array('files') ,async(req, res) => {
    const {name, description, price, stock, email, category, tag} = req.body;
    const images = req.files.map((file) => file.path);
    try{
        const seller = await ProductModel.findOne({email:email});
        if(!seller){
            return res.status(400).json({message:"Seller not found"});
        }

        // if(images.length===0){
        //     return res.status(400).json({message:"Please upload one image"});
        // }

        await ProductModel.create({
            name:name,
            description:description,
            price:price,
            stock:stock,
            email:email,
            img:images,
            category:category,
            tag:tag
        })
    }
    catch(error){
        console.log(error);
    }
})

module.exports = productrouter;