const router = require("express").Router(); 
 const verifyToken = require("./verifyToken"); 

 const {addProduct, getProducts} = require("../controllers/products"); 
 router.post("/add", addProduct); 
 router.get("/", verifyToken,  getProducts); 




module.exports = router;

