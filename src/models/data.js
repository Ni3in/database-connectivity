const mongoose =require("mongoose");

const dataSchema = new mongoose.Schema({
    firstName:{
        type : String,
        required : true
    },
    email:{
        type: String,
        required : true
    },
    passward :{
        type : String,
        required : true
    },
    confirmpassward:{
        type : String,
        required : true

    },
})

const MyData = new mongoose.model("MyData", dataSchema);

module.exports = MyData;