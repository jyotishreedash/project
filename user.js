const mongoose = require('mongoose')
 const Usermodel = new mongoose.Schema(
    {
    username: {type:String, required: true ,unique:true},
    password: {type :String, required:true }
 })
 {collection:'users'}
 const model = mongoose.model('usermodel',)
 module.exports=model