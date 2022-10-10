const express=require('express');
const path=require('path');

const app=express();
const publicPath=path.join(__dirname,'/public');

app.use(express.static(publicPath));

const PORT = process.env.PORT || 3000


app.listen(PORT, ()=>{
    console.log('Servidor corriendo en el puerto 3000')
});

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'))
});