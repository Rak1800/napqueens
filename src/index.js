const express=require('express');
const mongoose=require('mongoose');

const app=express()

app.use(express.json())

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://Rak18000:Rakesh123@cluster0.xntrj.mongodb.net/NapQueens',{
    useNewUrlParser:true
}).then(()=>console.log('mongoDb is connect'))
.catch(err=>console.log(err))

app.listen(5000 ,()=>{
    console.log('express is running on port '+(5000))
})