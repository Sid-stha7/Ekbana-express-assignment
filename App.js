const express= require('express')
const { execArgv } = require('process')

const app = express()
app.set('view engine', 'ejs')
const PORT = 3000

app.use(express.static('/public'))


app.get('/server',(req,res)=>{
    res.status(200).json({Message:"Hello From Express Server "})
})

app.get('/',(req,res)=>{
    res.render('index',{'message':'Welcome to Ekbana Express'})    
})
app.listen(PORT, ()=>{
    console.log(`Listeningn on port ${PORT}.......`);
})