const  express=require('express');
const  port =process.env.PORT || 2121;
const path=require('path')
const app=express();

const destinatonDir=path.join(__dirname,'../dist')

app.use(express.static(destinatonDir))

console.log(`express hosting from ${destinatonDir}`)

app.get('*',(req,res)=>{
    res.sendFile(path.join(destinatonDir,'index.html'))
})
console.log(`serving index.html`)

app.listen(port,()=>console.log(`server is run on port ${port}`))