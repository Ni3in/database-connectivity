const express = require("express");
require("./db/conn");
const path = require("path");
const hbs = require("hbs");
const MyData = require("./models/data");

const app = express();
const port = process.env.PORT || 7000

// const static_path =path.join(__dirname, "../public")
const templates_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// app.use(express.static());
app.set("view engine","hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path)


app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/home",(req,res)=>{
    res.render("home")
})

app.post("/home",async (req,res)=>{

    try{
        const pass = req.body.passward;
        const cpass = req.body.confirmpassward;

        if(pass === cpass){
            const fdata = new MyData({
                firstName : req.body.firstName,
                email : req.body.email,
                passward : pass,
                confirmpassward : cpass
            })
            const registered =  await fdata.save()
            res.status(201).render("home");

        }else{
            res.send("both pass is not same");
        }

    }catch(e){
        res.status(400).send(e);

    }
})

// app.get("/index", async (req,res)=>{
//     try{
//         const getdata = new MyData.find({});
//         res.status(201).send(getdata);

//     }catch(e){
//         res.status(404).send(e);
//     }
// })

app.listen(port, () => {
    console.log(`now you are work with ${port}`);
})