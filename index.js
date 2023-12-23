require('dotenv').config();
const express=require('express');
const app=express();
const Port=4000;
app.get('/',(req,res)=>{
  res.send('welcome To home page');
})
app.get('/login',(req,res)=>{
  res.send(`<h1>kidly Login</h1>`);
})
app.get('/youtube',(req,res)=>{
  res.send('welcome to youtube');
})
app.listen(process.env.Port,()=>{
  console.log(`Server is listing on ${Port}`);
})