const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const mongoose = require ('mongoose')
const user = require('./model/user')
const { response } = require('express')

mongoose.connect('mongodb://localhost:21010/login-app-db',{
    useNewUrlParse: true,
    useUnifiedTopology: true
})


 const app=express()
 app.use('/',express.start(path.join(__dirname,'static')))
 app.use(bodyparser.json())
 app.post('/api/change-password',(req,res) =>{
    const{token,newpassword:plainTextpasword}=req.body
    try{
        const user = jwt.verify(token,jwt_secret)
        const_id=user.id
        const hashedPassword = await bcrypt.hash()
        await user.updateOne(
            {_id},
            {
                $set:{password: hashedPassword}
            }
        )
    }
 app.post('/api/login',async(req,res)=>{
    const{username,password}=req.body
    const user = await user.findone({username,password}).lean()
    if(!user){
        return res.json({status:'error',error:'invalid username/password'})
     }
    if(await bcrypt.compare(password,user.password))
    const token = jwt.sign({id:user._id,username:user.username})
    return res.json({status:'ok',data:'coming soon'}
    .Jwt_secret="sdfgjhajhghjgahgk")}
 



    app.post('/api/register',async(req,res)=> {
    console.log(req.body)
    const{username,password:plainTextpasword}=req.body

    if(!username || typeof username != 'string'){
        return res.json({status:'error',error:'Invalid username'})
    }
    if(!password || typeof username !== 'string'){
        return res.json({status:'error',error:'Invalid password'})
    }
    if(password.length<13){
        return res.json({status:'error',error:'password too small.should be atleast 12 characters'})
    }
    const password = await bcrypt.hash(password,10)
    try{
        await user.create({
        username,
        password
        })
        console.log('user created  succesfully: ',response)
    }catch (error){
        console.log(error)
        return res,json({status:'error',error:'username already in  use'})
    }
    throw error
    res.json({status:'ok'})

  })
 app.listen(10, () => {
       console.log('server up at 10')
  })


