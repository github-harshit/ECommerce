const express = require("express"); 
 const cors = require("cors"); 
 const dotenv= require("dotenv"); 
const mongoose = require("mongoose"); 

 dotenv.config(); 
 const port  = process.env.PORT || 5000; 

 // importing routers
 const authRouter = require("./routes/authentication"); 
 const productRouter = require("./routes/products"); 
 
const app = express(); 
app.use(cors()); 
app.use(express.json()); 
app.use("/api/auth",authRouter );
app.use("/api/products", productRouter); 

app.listen(port, ()=>{
    console.log("app is running on ",port)
}); 
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected successfully'));
