const mongoose=require("mongoose")
const express=require("express")
var cors = require('cors') 
const routes=require("./routes")
const bodyParser = require("body-parser");
const app=express();
app.use(cors())
app.use("/",routes)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
mongoose.connect('mongodb+srv://snagaraju:sykam2000@cluster0.8gvoaun.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true },()=>{
    console.log("connected to db")
})
app.listen(8000, () => console.log("App listening on port 8000"))
