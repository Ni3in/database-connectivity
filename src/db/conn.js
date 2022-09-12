const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/myForm")
.then(()=>{
    console.log("connection successfully");
}).catch((e)=>{
    console.log("not connected");
})
