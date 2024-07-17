require('dotenv').config()
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
    res.send("69 For Life");
})

app.get('/twitter',(req,res)=>{
    res.send("Jas Mann");
})

app.get('/redRoom',(req,res)=>{
    res.send("Red Room");
})

app.get('/login',(req,res)=>{
    res.send("Login Page");
})

app.listen(process.env.PORT,()=>{
    console.log(`Running at Port ${PORT}`);
});