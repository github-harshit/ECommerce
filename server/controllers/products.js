 const Product = require("../models/productsModel");
 const addProduct = async(req, res)=>{
     const {title, desc, img, price}  = req.body;
     
      try{
         const product = await Product.findOne({title: title}); 
         if(product!==null){
             return res.json({
                 status: 401,
                 msg:"product is already in database "
             })
         }
         const newProduct = new Product({ title, desc, img, price
             
         }); 
         const savedProduct = await newProduct.save(); 
         return res.json({
             status:201, 
             msg:"Product added successfully", 
             product: savedProduct
         })

         
         
      }catch(err){
         const msg = err.toString(); 
         return res.json({
             status:501,
             msg:err, 

         })
      }

     
}
 const getProducts = async (req, res)=>{
      try{ 
           const products = await Product.find(); 
            return res.json({
                status:201, 
                products:products
            })
      }catch(err){
        const msg = err.toString(); 
        return res.json({
            status:501,
            msg:err, 

        })
     }
 
     
 }
 module.exports = {
     addProduct, 
     getProducts
 }