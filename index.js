const express = require('express');

const app = express();

app.use(express.json());

const {createTodo,updateTodo} = require("./types") //this is cleaner way to import

app.post("/todo", function(req,res){
const createpayload = req.body;
const parsepayload = createTodo.safeParse(createpayload);
if(!parsepayload.success){
    res.status(411).json({
        mssg: "you sent the wrong inputs",
    })
    return;
}

//put it in mongodb

})



app.post("/todos", function(req,res){

})



app.post("/completed", function(req,res){
const updatepayload = req.body;
const parsepayload = updateTodo.safeParse(updatepayload);
if(!parsepayload.success){
    res.status(411).json({
        msg:"you sent the wrong inputs",
    })
    return;
}
})